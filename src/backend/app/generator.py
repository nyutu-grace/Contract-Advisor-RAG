from sentence_transformers import SentenceTransformer, util
import faiss
import numpy as np
from langchain.chat_models import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain.chains import LLMChain, SequentialChain
import asyncio

# Load a pre-trained sentence transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Encode the chunks
contract_embeddings = model.encode(contract_chunks, convert_to_tensor=True)

# Create a FAISS index
index = faiss.IndexFlatL2(contract_embeddings.shape[1])
index.add(contract_embeddings.cpu().numpy())

# Function to retrieve relevant chunks
def retrieve_relevant_chunks(query, k=5):
    query_embedding = model.encode([query], convert_to_tensor=True)
    distances, indices = index.search(query_embedding.cpu().numpy(), k)
    relevant_chunks = [contract_chunks[idx] for idx in indices[0]]
    return relevant_chunks

# Setup LLM
llm = ChatOpenAI(temperature=0.0, model_name="gpt-3.5-turbo")

# Function to generate answers
def generate_answer(context, question):
    input_text = f"Context: {context}\n\nQuestion: {question}\nAnswer:"
    response = llm({"text": input_text})
    return response['choices'][0]['text']
