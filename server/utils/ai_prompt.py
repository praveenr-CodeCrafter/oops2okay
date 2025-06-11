def generate_debug_prompt(code: str, error: str) -> str:
    return f"""
You are a code debugging assistant. Analyze the following code and help the user understand the error and provide a fix.

Code:
{code}

Error:
{error}

Instructions:
- Explain why the error occurred.
- Suggest a fix with updated code if applicable.
- Be concise and clear.
"""
