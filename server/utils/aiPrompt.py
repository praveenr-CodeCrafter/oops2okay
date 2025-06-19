def generateDebugPrompt(code: str, error: str) -> str:
    return f"""
You are an expert programming assistant. The user submitted the following code and received an error.

Code:
{code}

Error:
{error}

Please return a JSON object with the following keys:

{{
  "root_cause": "<short sentence>",
  "explanation": {{
    "non_technical": "<explain like I'm five>",
    "technical": "<developer explanation>"
  }},
  "suggested_fix": {{
    "code": "<corrected code block>",
    "explanation": "<brief sentence explaining the fix>"
  }},
  "references": [
    {{
      "title": "<resource title>",
      "url": "<link>",
      "description": "<short description>"
    }}
  ]
}}

Only return valid JSON.
"""