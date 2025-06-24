# 🛠️ oops2okay – AI Code Debugging Assistant

**Oops2Okay** is an AI-powered developer tool that helps you debug your code faster. Just paste your code snippet and the related error message, and get intelligent suggestions instantly.

---

## 🚀 Features

- **Paste code and error:** Instantly analyze your code and error messages.
- **AI-powered explanations:** Get both non-technical and technical breakdowns.
- **Suggested fixes:** Receive ready-to-use code corrections.
- **Reference links:** Learn more with curated resources.
- **History:** Local storage of recent debug sessions.
- **Responsive UI:** Works great on all devices.

---

## 🧑‍💻 Tech Stack

### Frontend

- **React + Vite**
- **Tailwind CSS**
- **Axios**
- **Lucide Icons**

### Backend

- **FastAPI (Python)** 
- **Gemini 2.0 Flash API (Google)** 

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/oops2okay.git
cd oops2okay
```

### 2️⃣ Setup & Run Backend

```bash
cd server

python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Create and add this to your .env file
GOOGLE_AI_API_KEY=your_gemini_api_key
FRONTEND_ORIGIN=http://localhost:5173

pip install -r requirements.txt
uvicorn main:app --reload
```


### 3️⃣ Frontend Setup

```bash
cd ../client

# Create and add this to your .env file
VITE_BACKEND_URL=http://localhost:8000

npm install
npm run dev
```
---
## ⚡ Example Usage
- **_Paste your code and error in the input section._**
- **_Click "Debug Now"._**
- **_Instantly view the root cause, explanations, suggested fix, and references._**
- **_Browse your debug history and revisit past results anytime._**

## 🛡️ License
This project is licensed under the MIT License.