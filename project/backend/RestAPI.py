from multiprocessing.dummy import Array
from fastapi import FastAPI, Header, HTTPException, Request, Response
import os
import uvicorn
import json
from models.Models import Seat, Flight, Booking
from methods import addBooking, flightUnique, getFlights, makeEmail
from fastapi.middleware.cors import CORSMiddleware
from mail import sendEmail

app = FastAPI(docs_url="/docs")
BASE_PATH = 'json/'

# AUTH_TOKEN = os.getenv('AUTH_TOKEN')

app = FastAPI()

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/airports", tags=['Airports'])
async def get_airports()->Array:
    return json.loads(open(f'{BASE_PATH}/airports.json').read())

@app.get("/flights/", tags=['Flights'])
async def get_flights(depart:str, dest:str, departDate:str) -> Flight:

    flights:Array=getFlights(depart, dest, departDate)

    return flights

@app.get("/flights/{id}", tags=['Flights']) # Get flight information of specific flight
async def get_flight(id:int) -> Flight:
    flights:Array = json.loads(open(f'{BASE_PATH}/flights.json').read())

    for flight in flights:
        if flight['id'] == id:
            return {'flight':flight}

    return {"detail":"not found"}

@app.get("/bookings/{id}", tags=['Booking'])
async def get_booking(id:int) -> Booking:

    bookingList:Array = json.loads(open(f'{BASE_PATH}/bookings.json').read())

    for i, item in enumerate(bookingList):
        if item['id'] == id:
            return item
    
    return {"detail":"booking not found"}

@app.post("/bookings", tags=['Booking'])
async def add_booking(booking:Booking, response:Response) -> Booking:
    
    addBooking(booking)
    content = makeEmail(booking=booking, seat=booking.seat)

    print(booking.email)
    sendEmail(subject='FlyDreamAirBooking', recipient=booking.email, content=content)
    return booking

if __name__ == "__main__":
    uvicorn.run("RestAPI:app", host="127.0.0.1", port=8000, log_level="trace" , reload=True)