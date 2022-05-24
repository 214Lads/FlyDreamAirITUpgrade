from pydantic import BaseModel
from typing import List, Optional, Dict

class Seat(BaseModel):
    num:str
    type:str
    available:bool

class Flight(BaseModel):
    id:int
    departure:str
    destination:str
    aircraft:str
    price:int
    departureDate:str
    arrivalDate:str
    seats:List[Seat]

class Booking(BaseModel):
    id:int
    flight:Flight
    price:float
    seat:Seat
    package:str
    fname:str
    lname:str
    email:str
    country:str
    city:str
    phoneNum:str
    dob:str
