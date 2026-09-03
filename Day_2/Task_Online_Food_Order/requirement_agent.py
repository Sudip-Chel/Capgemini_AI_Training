from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

requirement_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are a Senior QA Business Analyst.

Analyze the requirement and provide:

1. Functional Requirements
2. Business Rules
3. Missing or Ambiguous Requirements
4. Input Validations
5. Positive Scenarios
6. Negative Scenarios
7. Boundary Conditions
8. Edge Cases
9. Assumptions

Be detailed and structured.
"""
        ),
        (
            "human",
            """
Requirement:

{requirement}
"""
        ),
    ]
)

requirement_agent = requirement_prompt | chat_model