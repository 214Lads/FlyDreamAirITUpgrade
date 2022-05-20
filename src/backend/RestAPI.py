from http.client import HTTPException
from multiprocessing.dummy import Array
from typing import List
from fastapi import FastAPI, Header, HTTPException, Request, Response
import os
import uvicorn
import json
from models.Models import Seat, Flight, Booking
from methods import flightUnique

app = FastAPI(docs_url="/docs")
BASE_PATH = 'json/'
# AUTH_TOKEN = os.getenv('AUTH_TOKEN')

@app.middleware("http") #For authentication
async def check_auth_header(request: Request, call_next):
    print("here")
    return await call_next(request)
    
@app.get("/flights", tags=['Flights'])
async def get_all_flights() -> Flight:

    flights:Array = json.loads(open(f'{BASE_PATH}/flights.json').read())

    return flights

@app.get("/flights/{id}", tags=['Flights']) # Get flight information of specific flight
async def get_flight(id:int) -> Flight:
    flights:Array = json.loads(open(f'{BASE_PATH}/flights.json').read())

    for flight in flights:
        if flight['id'] == id:
            return {'flight':flight}

    return {"detail":"not found"}

@app.post("/flights", tags=['Flights'])
async def add_flight(flight:Flight) -> Flight:
    
    flights:Array = json.loads(open(f'{BASE_PATH}/flights.json').read())

    if not flightUnique(flight.dict(), flights):
        return {"detail":"flight id is not unique"}

    flights.append(flight.dict())
    with open(f'{BASE_PATH}/flights.json','w') as f:
        json.dump(flights, fp=f, indent=2)

    return flight

@app.delete("/flights/{id}", tags=['Flights'])
async def remove_flight(id:int) -> Flight:
    
    flightList:Array = json.loads(open(f'{BASE_PATH}/flights.json').read())
    for i, f in enumerate(flightList):
        if f['id'] == id:
            del flightList[i]

    with open(f'{BASE_PATH}/flights.json','w') as f:
        json.dump(flightList, fp=f, indent=2)
    
    return "success"

@app.get("/bookings/{id}", tags=['Booking'])
async def get_booking(id:int) -> Booking:

    bookingList:Array = json.loads(open(f'{BASE_PATH}/bookings.json').read())

    for i, item in enumerate(bookingList):
        if item['id'] == id:
            return item
    
    return {"detail":"booking not found"}

@app.post("/bookings", tags=['Booking'])
async def add_booking(booking:Booking) -> Booking:
    
    bookingList:Array = json.loads(open(f'{BASE_PATH}/bookings.json').read())
    bookingList.append(booking.dict())

    with open(f'{BASE_PATH}/bookings.json','w') as f:
        json.dump(bookingList, fp=f, indent=2)
    return booking
    

if __name__ == "__main__":
    uvicorn.run("RestAPI:app", host="127.0.0.1", port=8000, log_level="debug", reload=True)