from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uvicorn

app = FastAPI(
    title="NexusBroker Core Engine",
    description="The Intelligent Intermediary Protocol - AI Matching and Trust Gateway",
    version="0.1.0"
)

class TradeRequest(BaseModel):
    id: str
    sector: str  # e.g., "maritime", "finance", "estate"
    type: str    # "buy" or "sell"
    asset: str
    details: dict
    metadata: Optional[dict] = None

@app.get("/")
async def root():
    return {
        "status": "online",
        "system": "Nexus Intelligence",
        "version": "v2.1.4",
        "neural_matching": "enabled",
        "trust_protocol": "v2.1.4"
    }

@app.on_event("startup")
async def startup_event():
    # Load mock data and initialize vectorizer
    global vectorizer, tfidf_matrix, mock_db
    from sklearn.feature_extraction.text import TfidfVectorizer
    from sklearn.metrics.pairwise import linear_kernel
    
    mock_db = [
        {"id": "M-001", "text": "Maritime bulk carrier panamax available for grain transport atlantic route", "metadata": {"type": "vessel", "capacity": "75000 DWT"}},
        {"id": "M-002", "text": "Oil tanker VLCC crude transport middle east to asia", "metadata": {"type": "vessel", "capacity": "300000 DWT"}},
        {"id": "E-001", "text": "Luxury penthouse istanbul bosphorus view smart home system", "metadata": {"type": "estate", "price": "$2.5M"}},
        {"id": "E-002", "text": "Commercial warehouse logistics center gebze industrial zone", "metadata": {"type": "estate", "area": "5000m2"}},
        {"id": "F-001", "text": "OTC bitcoin block trade 500 BTC escrow protected", "metadata": {"type": "finance", "volume": "500 BTC"}}
    ]
    
    vectorizer = TfidfVectorizer(stop_words='english')
    # Create the matrix from descriptions
    tfidf_matrix = vectorizer.fit_transform([item['text'] for item in mock_db])
    print("AI Model Initialized: Vector Space Ready.")

@app.post("/match", response_model=dict)
async def match_trade(request: TradeRequest):
    """
    Perform semantic vector search to find best matches.
    """
    from sklearn.metrics.pairwise import linear_kernel
    
    # 1. Vectorize the input query
    query_str = f"{request.asset} {request.sector} {request.details}"
    query_vec = vectorizer.transform([query_str])
    
    # 2. Calculate cosine similarity
    cosine_similarities = linear_kernel(query_vec, tfidf_matrix).flatten()
    
    # 3. Get top matches
    related_docs_indices = cosine_similarities.argsort()[:-5:-1]
    
    matches = []
    for i in related_docs_indices:
        score = float(cosine_similarities[i])
        if score > 0.1: # Threshold
             match_data = mock_db[i]
             matches.append({
                 "match_id": match_data["id"],
                 "score": round(score, 4),
                 "description": match_data["text"],
                 "metadata": match_data["metadata"],
                 "status": "discovery"
             })

    return {
        "request_id": request.id,
        "matches": matches,
        "message": f"Vector search completed for {request.asset}."
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
