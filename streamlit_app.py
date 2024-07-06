import streamlit as st
import requests

st.set_page_config(page_title="Contract Advisor RAG", layout="wide")

st.title("Lizzy - Contract Advisor")

uploaded_file = st.file_uploader("Upload a contract document", type=["pdf", "txt"])

if uploaded_file is not None:
    files = {"file": uploaded_file.getvalue()}
    response = requests.post("http://127.0.0.1:8000/uploadfile", files=files)
    if response.status_code == 200:
        st.success(f"Uploaded {uploaded_file.name}")
    else:
        st.error("Failed to upload file")

st.sidebar.title("New Conversation")
query = st.sidebar.text_input("Ask a question about the contract:")

if st.sidebar.button("Get Answer"):
    response = requests.post("http://127.0.0.1:8000/answer", json={"question": query})
    if response.status_code == 200:
        answer = response.json()
        st.sidebar.markdown(f"**Answer:** {answer}")
    else:
        st.sidebar.error("Failed to get answer")

# Example questions for demonstration
example_questions = [
    "Who owns the IP?",
    "Is there a non-compete obligation to the Advisor?"
]

for q in example_questions:
    st.subheader(q)
    response = requests.post("http://127.0.0.1:8000/answer", json={"question": q})
    if response.status_code == 200:
        answer = response.json()
        st.write(answer)
    else:
        st.error("Failed to get answer")

