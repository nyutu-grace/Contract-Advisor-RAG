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
    
    def _remove_special_characters(self, text):
        # Define a regex pattern to match the special characters
        pattern = r'- | \t|●|\n|\[|\]'
        # Use re.sub() to replace matches of the pattern with an empty string
        cleaned_string = re.sub(pattern, '', text)
        return cleaned_string

    