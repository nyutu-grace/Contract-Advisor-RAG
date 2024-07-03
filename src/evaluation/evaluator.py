# Evaluation 
def evaluate_model(qa_pipeline, qa_pairs):
    correct = 0
    total = len(qa_pairs)
    
    for qa in qa_pairs:
        question = qa['question']
        expected_answer = qa['answer']
        
        # Get the generated answer from the RAG pipeline
        generated_answer = qa_pipeline.run(question)
        
        # Compare the generated answer to the expected answer
        if generated_answer.strip().lower() == expected_answer.strip().lower():
            correct += 1
        else:
            print(f"Question: {question}")
            print(f"Expected: {expected_answer}")
            print(f"Generated: {generated_answer}")
            print("---")
    
    accuracy = correct / total
    return accuracy