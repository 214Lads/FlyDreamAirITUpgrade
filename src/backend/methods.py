
def flightUnique(flight, flightList):
    
    for item in flightList:
        if item['id'] == flight['id']:
            return False
    
    return True
