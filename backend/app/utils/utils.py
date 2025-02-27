import re

def generate_question_prompt(passage):
    return f"""
    Generate few flash-thinking questions from this passage:

    **Passage:** "{passage}"

    **Instructions for response format:**
    - Each question must start with "@@" and end with "##".

    **Example Output:**
        @@question1?##
        @@question2?##
    """


def extract_questions(text):
    return re.findall(r"@@(.*?)##", text.strip())  
