from fastapi import FastAPI, UploadFile, File
from sentence_transformers import SentenceTransformer
import faiss
import numpy as np
from pypdf import PdfReader

app = FastAPI()

model = SentenceTransformer('all-MiniLM-L6-v2')

documents = []
index = None

@app.post("/upload/")
async def upload_pdf(file: UploadFile = File(...)):
    global documents, index
    
    pdf = PdfReader(file.file)
    text = ""

    for page in pdf.pages:
        text += page.extract_text()

    chunks = text.split("\n")
    documents = chunks

    embeddings = model.encode(chunks)
    index = faiss.IndexFlatL2(embeddings.shape[1])
    index.add(np.array(embeddings))

    return {"message": "PDF processed successfully"}

@app.get("/query/")
def query(q: str):
    global documents, index

    q_embedding = model.encode([q])
    D, I = index.search(np.array(q_embedding), k=3)

    results = [documents[i] for i in I[0]]

    return {"answer": results}