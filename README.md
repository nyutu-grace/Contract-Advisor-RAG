# Contract-Advisor-RAG
## Building A High-Precision Legal Expert LLM APP

Lizzy AI is an early-stage Israeli startup, developing the next-generation contract AI, aiming to build a fully autonomous artificial contract lawyer. This repository contains the implementation of a RAG (Retrieval-Augmented Generation) system for Contract Q&A.

## Background Context

### What is RAG?

Retrieval Augmented Generation (RAG) is a hybrid AI model that combines the power of large language models with external data sources. RAG leverages a large language model to generate responses but first retrieves relevant information from external data sources, enabling it to provide more accurate and context-rich outputs.

## Data for Evaluation

The repository contains an evaluation set with two contracts (a short one and a long one), each with a list of ten questions and their correct answers.


## Project Structure
-   **/config:** Contains configuration files.
-   **/data:** Contains the evaluation set and data preparation scripts.
-   **/notebooks:** Contains jupyter notebooks for analysis.
-   **/scripts:** Contains utility scripts.
-   **/src:** Contains the main application code.
-   **/tests:** Contains tests for the python scripts.
-   **/requirements.txt:** Lists of dependencies.

## Getting Started

### Prerequisites

- Python 3.12


### Installation

1. Clone the repository:
    ```
    git clone https://github.com/nyutu-grace/Contract-Advisor-RAG.git
    cd contract-advisor-rag
    ```

2. Install dependencies:
    ```
    pip install -r requirements.txt
    ```

### Usage

1. Start the backend server:
    ```
    python backend/main.py
    ```

2. Start the frontend server:
    ```
    cd frontend
    npm start
    ```

## Contribution Guidelines

Contributions are welcome! If you have ideas for improving the RAG system or resources to add, please submit a pull request.

## Acknowledgments

-   The creators of the Langchain and Chroma courses for their informative resources.
-   OpenAI for their contributions to AI research and development.

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

