from langchain_community.document_loaders import PyPDFLoader,PyMuPDFLoader,DirectoryLoader 
from langchain_community.document_loaders import Docx2txtLoader, UnstructuredWordDocumentLoader

from langchain.document_loaders import TextLoader

import tempfile
import fitz # PyMuPDF

class LoadDocuments:
    def extract_text_from_pdf(pdf_path):
        text = ""
        with fitz.open(pdf_path) as doc:
            for page in doc:
                text += page.get_text()
        return text

contract_text_raptor = extract_text_from_pdf('../data/Evaluation Sets/Raptor Contract.pdf')
qa_text_raptor = extract_text_from_pdf('../data/Evaluation Sets/Raptor Q&A.pdf')
contract_text_robinson = extract_text_from_pdf('../data/Evaluation Sets/Robinson Advisory.pdf')
qa_text_robinson = extract_text_from_pdf('../data/Evaluation Sets/Robinson Q&A.pdf')