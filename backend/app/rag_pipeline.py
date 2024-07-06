from data_loader import LoadDocuments
from retrieval.retriever import Retriever
from conversation_chain import ConversationChain
from dotenv import load_dotenv, find_dotenv

load_dotenv()
GPT_MODEL_NAME = 'gpt-3.5-turbo'
load_dotenv(find_dotenv())

class RAGPipeline:
    def __init__(self,
                 uploaded_file,
                 vector_db_path,
                 ):
        self.uploaded_file = uploaded_file
        self.vector_db_path = vector_db_path

    def pipeline(self):
        loader = LoadDocuments(self.uploaded_file)
        documents = loader.load_document()



        
        
    