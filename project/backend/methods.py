import json
from jinja2 import Environment, FileSystemLoader
import datetime

def flightUnique(flight, flightList):
    
    for item in flightList:
        if item['id'] == flight['id']:
            return False
    
    return True

def getFlights(depart, dest, departDate):
    flights = json.loads(open(f'json/flights.json').read())
    
    print(depart.lower(), dest.lower())
    flightsToReturn=[]
    for flight in flights:
        #TODO - Add check for day
        if flight['departure'].lower()==depart.lower() and flight['destination'].lower()==dest.lower():
            flightsToReturn.append(flight)

    return flightsToReturn

def addBooking(booking):

    
    bookingList = json.loads(open(f'json/bookings.json').read())
    bookingList.append(booking.dict())

    with open(f'json/bookings.json','w') as f:
        json.dump(bookingList, fp=f, indent=2)

def makeEmail(booking, seat):

    date = datetime.datetime.now()
    date = date.strftime("%-d %B %Y")

    file_loader = FileSystemLoader("templates")
    env = Environment(loader=file_loader)
    template = env.get_template('email.html')

    return template.render(booking=booking, seat=seat)