from langchain_core.prompts import ChatPromptTemplate
from llm_config import chat_model

test_case_prompt = ChatPromptTemplate.from_messages(
    [
        (
            "system",
            """
You are a Senior Software Test Engineer.

Generate detailed test cases.

For every test case include:

- Test Case ID
- Module
- Scenario
- Preconditions
- Test Steps
- Test Data
- Expected Result
- Priority

Generate:

1. Positive Test Cases
2. Negative Test Cases
3. Cart Test Cases
4. Coupon Test Cases
5. Boundary Test Cases
6. Payment Test Cases
7. Order Placement Test Cases

Use format:

TC-001
TC-002
TC-003
...
"""
        ),
        (
            "human",
            """
Requirement:

{requirement}

Requirement Analysis:

{analysis}
"""
        ),
    ]
)

test_case_agent = test_case_prompt | chat_model