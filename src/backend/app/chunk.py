from langchain.text_splitter import RecursiveCharacterTextSplitter
import re

class ChunkDocuments:
    def __init__(self, documents):
        self.documents = documents

    def chunk_text(text, chunk_size=500, overlap=50):
        words = text.split()
        chunks = []
        for i in range(0, len(words), chunk_size - overlap):
            chunk = ' '.join(words[i:i + chunk_size])
            chunks.append(chunk)
        return chunks
    
contract_chunks_raptor = chunk_text(qa_text_raptor)
qa_chunks_raptor = chunk_text(contract_text_raptor)

    