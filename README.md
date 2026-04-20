# 📄 AI PDF Question Answering System (RAG)

An AI-powered PDF Question Answering System built using **Retrieval-Augmented Generation (RAG)**. This project allows users to upload PDF documents and ask natural language questions to extract meaningful insights efficiently.

---

## 🚀 Features

* 📥 Upload and process PDF documents
* 🔍 Semantic search using FAISS and Sentence Transformers
* 🤖 Context-aware answers using local LLMs (no external API dependency)
* ⚡ Fast and efficient retrieval from large documents
* 🌐 Interactive and responsive React frontend
* 🔗 REST API integration between frontend and backend
* 📊 Dynamic result rendering for better user experience

---

## 🛠️ Tech Stack

### Backend

* Python
* PyTorch
* Transformers (Hugging Face)
* FAISS (Facebook AI Similarity Search)
* Sentence Transformers
* FastAPI / Flask (depending on your setup)

### Frontend

* React.js
* HTML, CSS, JavaScript

---

## 🧠 How It Works

1. **PDF Upload**
   Users upload PDF documents via the frontend interface.

2. **Text Extraction**
   The system extracts text from the uploaded PDFs.

3. **Chunking & Embedding**

   * Text is split into smaller chunks
   * Each chunk is converted into embeddings using Sentence Transformers

4. **Vector Storage (FAISS)**

   * Embeddings are stored in a FAISS index for fast similarity search

5. **Query Processing**

   * User submits a natural language query
   * Query is converted into an embedding

6. **Semantic Retrieval**

   * FAISS retrieves the most relevant chunks

7. **Answer Generation (RAG)**

   * Retrieved context is passed to a local LLM
   * Model generates a context-aware answer

---

## 📂 Project Structure

```
AI-PDF-Question-Answering-System-RAG/
│
├── backend/
│   ├── app.py                # Main backend API
│   ├── pdf_processor.py     # PDF text extraction
│   ├── embeddings.py        # Embedding generation
│   ├── retriever.py         # FAISS retrieval logic
│   ├── llm.py               # Local LLM integration
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/      # UI Components
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   └── package.json
│
├── data/                    # Uploaded PDFs / processed data
├── README.md
└── .gitignore
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/AI-PDF-Question-Answering-System-RAG.git
cd AI-PDF-Question-Answering-System-RAG
```

---

### 2️⃣ Backend Setup

```bash
cd backend
pip install -r requirements.txt
```

Run the backend server:

```bash
python app.py
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

---

## 📡 API Endpoints (Example)

| Method | Endpoint | Description            |
| ------ | -------- | ---------------------- |
| POST   | /upload  | Upload PDF file        |
| POST   | /query   | Ask question about PDF |
| GET    | /health  | API health check       |

---

## 🧪 Example Workflow

1. Upload a PDF
2. Enter a question like:

   > "What are the key findings of the document?"
3. System retrieves relevant sections
4. Generates a concise answer

---

## 🎯 Key Highlights

* Eliminates reliance on paid APIs by using **local LLMs**
* Efficient document retrieval using **vector similarity search**
* Scalable architecture for handling large datasets
* Clean UI for better user interaction

---

## 🔮 Future Improvements

* Multi-document querying
* Chat history & conversational memory
* Support for more file formats (DOCX, TXT)
* Deployment with Docker & cloud platforms
* Authentication and user sessions

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push and create a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

## 📧 Contact

For questions or collaboration:

* GitHub: https://github.com/your-username

---

⭐ If you found this project useful, consider giving it a star!
