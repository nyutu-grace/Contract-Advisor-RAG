# Contract-Advisor-RAG
## Building A High-Precision Legal Expert LLM APP

Lizzy AI is an early-stage Israeli startup, developing the next-generation contract AI, aiming to build a fully autonomous artificial contract lawyer. This repository contains the implementation of a RAG (Retrieval-Augmented Generation) system for Contract Q&A.

## Project Structure
CONTRACT-ADVISOR-RAG
├── backend
├── data
├── frontend
├── notebooks
│ ├── model_prompt_parser.ipynb
│ └── rag.ipynb
└── src
├── evaluation
│ ├── init.py
│ └── evaluator.py
├── generation
│ ├── init.py
│ └── generator.py
├── retrieval
│ ├── init.py
│ ├── retriever.py
│ └── chunk.py
│ └── dataloader.py
│ └── rag_pipeline.py
└── tests
├── venv
├── .env
├── .gitignore
├── LICENSE
├── README.md
└── requirements.txt

## Getting Started

### Prerequisites

- Python 3.12


### Installation

1. Clone the repository:
    ```
    git clone https://github.com/lizzy-ai/contract-advisor-rag.git
    cd contract-advisor-rag
    ```

2. Install dependencies:
    ```
    pip install -r requirements.txt
    ```

### Usage

1. Start the backend server:
    ```
    python backend/server.py
    ```

2. Start the frontend server:
    ```
    cd frontend
    npm start
    ```

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.