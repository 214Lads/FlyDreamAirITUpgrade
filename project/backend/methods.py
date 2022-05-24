import json

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
    booking['id']=len(bookingList)+1
    bookingList.append(booking.dict())

    with open(f'json/bookings.json','w') as f:
        json.dump(bookingList, fp=f, indent=2)