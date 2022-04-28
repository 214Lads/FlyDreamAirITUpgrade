from http.client import HTTPException
from typing import List
from fastapi import FastAPI, Header, HTTPException, Request, Response
import os
import uvicorn
import json
from models.Models import Seat, Flight, Booking

app = FastAPI(docs_url="/docs")

# AUTH_TOKEN = os.getenv('AUTH_TOKEN')

@app.get("/flights", tags=['Flights'])
async def get_all_flights() -> Flight:

    # with open("models/flights.json",'r') as f:
    #     return json.loads(f.read())
    return {"results":'a'}

@app.get("/flights/{id}", tags=['Flights']) # Get flight information of specific flight
async def get_flight(id:int):
    return {"subject":"more text"}

@app.post("/flights/", tags=['Flights'])
async def add_flight(f:Flight,  request: Request, response: Response) -> Flight:

    flight = Flight(**Flight)

    return {"result":flight}

@app.patch("/flights", tags=['Flights'])
async def edit_flight():
    
    return {"subject":"more text"}

@app.get("/bookings/{id}", tags=['Booking'])
async def get_booking() -> Booking:
    return {"subject":"more text"}

@app.post("/bookings", tags=['Booking'])
async def add_booking():
    return {"subject":"more text"}
    

if __name__ == "__main__":
    uvicorn.run("main:app", host="127.0.0.1", port=8000, log_level="debug", reload=True)