from pydantic import BaseModel
from typing import Optional, Dict

class Seat(BaseModel):
    num:str
    type:str
    filled:bool

class Flight(BaseModel):
    id:int
    aircraft:str
    destinationPort:str
    departurePort:str
    seats:list=[]

class Booking(BaseModel):
    id:int
    isStaff:bool
    flight:Flight
    cost:float
    seat:Seat
    fname:str
    lname:str
    email:str