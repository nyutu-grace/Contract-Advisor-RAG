from data_loader import LoadDocuments
from retrieval.retriever import Retriever
from conversation_chain import ConversationChain
from dotenv import load_dotenv, find_dotenv

load_dotenv()
GPT_MODEL_NAME = 'gpt-3.5-turbo'
load_dotenv(find_dotenv())

class RAGPipeline:
    def __init__(self, contract_chunks, llm):
        self.contract_chunks = contract_chunks
        self.llm = llm

    def build_chain(self):
        sentiment_prompt = ChatPromptTemplate.from_template(
            """You are a legal expert. Your goal is to answer questions based on the provided contract text. Answer concisely and accurately.
            ---
            Context: {context}
            ---
            Question: {question}
            Answer:"""
        )

        sentiment_chain = LLMChain(llm=self.llm, prompt=sentiment_prompt, output_key="answer")

        chain = SequentialChain(
            chains=[sentiment_chain],
            input_variables=["context", "question"],
            output_variables=["answer"],
            verbose=False,
        )
        return chain

    async def generate_concurrently(self, df):
        chain = self.build_chain()

        tasks = []
        for _, row in df.iterrows():
            question = row["question"]
            unique_id = row["unique_id"]
            context = " ".join(retrieve_relevant_chunks(question))
            inputs = {"context": context, "question": question}
            tasks.append(self.async_generate(chain, inputs, unique_id))

        results = await asyncio.gather(*tasks)
        for unique_id, response, cost in results:
            df.loc[df["unique_id"] == unique_id, ["answer", "cost"]] = [response, cost]

    async def async_generate(self, chain, inputs, unique_id):
        with get_openai_callback() as cb:
            response = await chain.arun(inputs)
        return unique_id, response, cb.total_cost

# Prepare DataFrame
questions = [("What is the termination clause?", "Q1"), ...]  # Add more questions
df = pd.DataFrame(questions, columns=["question", "unique_id"])

# Create ContractQASystem instance
contract_qa_system = ContractQASystem(contract_chunks, llm)

# Run the async generation
s = time.perf_counter()
asyncio.run(contract_qa_system.generate_concurrently(df))
elapsed = time.perf_counter() - s
print(f"Contract Q&A System executed in {elapsed:0.2f} seconds.")




        
        
    