from pydantic import BaseModel
from typing import Optional, Dict

class Seat(BaseModel):
    num:str
    type:str
    filled:bool

class Flight(BaseModel):
    id:int
    aircraft:str
    # seats:list=[Seat]

class Booking(BaseModel):
    id:int
    isStaff:bool
    flight:Flight
    seat:Seat
    fname:str
    lname:str
    email:str