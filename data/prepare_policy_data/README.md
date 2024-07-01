# Policy QA Data
The data is based on PolicyQA dataset [1], a dataset of 25,017 questions-passage-answer triples associated with privacy policy documents curated from the OPP-115 corpus from Wilson et al. [2]. It has 714 human-written questions optimized for a wide range of privacy policies, with question–answer annotations following SQuAD 1.0 format [3]. The dataset is split into train/dev/test (corresponding sizes: 17,056/3809/4152). 

## Content 
1. Q&A json files in [/qa_with_context](/data/qa_with_context/) directory: is PolicyQA data(slightly modified), with the following fields
    - version: PolicyQA dataset version
    - file_name (string): the name of the privacy policy html file inside the [/sanitized_policies](/data/sanitized_policies/) directory
    - title (string): the privacy policy title
    - context (string): passage of the privacy policy from which the question-answer pairs were sourced
    - index (int): id related the context passage.
    - question (string)
    - answers (list): each element is a dictionary feature containing:
        - text (string): content of the answer
        - answer_start (int32): the starting location of the answer

2. Privacy Policy html files in [/santizied_policies](/data/sanitized_policies/) directory contains the simplified representations of the privacy policies (compared to in the raw, web-sourced form). Each file has a policy text with minimal markup for items like section titles and lists. Additionally The text has been divided into segments (for the purposed of creating the OPP-115 Corpus [2]) using three sequential pipe characters ("|||") as the separator between segments. This sperator should be removed.

3. [Scripts](/scripts) used to create this dataset.



## Sources
- [1] Policy annotated Questions and Answers are sourced from dataset PolicyQA: (Ahmad et al. 2020) "PolicyQA: A reading comprehension dataset for privacy policies.". [Paper Link](https://arxiv.org/pdf/2010.02557.pdf), [Repo Link](https://github.com/wasiahmad/PolicyQA).
- [2] PolicyQA dataset is based on 115 website privacy policies curated from OPP-115 Corpus: (Wilson et al., 2016a). [Paper Link](https://aclanthology.org/P16-1126.pdf), [Dataset Link](https://usableprivacy.org/data)
- [3] The Stanford Question Answering Dataset [Dataset Official Site](https://rajpurkar.github.io/SQuAD-explorer/), [Hugging Face](https://huggingface.co/datasets/squad)
- [4] More on PolicyQA Dataset, and other datasets relevant for NLP on Privacy Policies see "PrivacyGLUE: A Benchmark Dataset for General Language Understanding in Privacy Policies". [Paper Link](https://www.mdpi.com/2076-3417/13/6/3701)