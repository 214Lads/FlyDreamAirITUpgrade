from string import ascii_uppercase as alphabet
import json
from random import randint

flights=json.loads(open('flights.json','r').read())
airports= json.loads(open('airports.json').read())

routes=[]
for i, airport1 in enumerate(airports):
    for x, airport2 in enumerate(airports):
        if airport1 == airport2:
            continue

        flight={
            'id':f'{i}{x}',
            'departure':airport1['airport'],
            'destination':airport2['airport'],
            'aircraft':"Boeing 747",
            'price':randint(800,1500),
            "departureDate": "2022-05-23T00:04:10Z",
            "arrivalDate": "2022-05-24T00:04:10Z",
            "seats": [
            {
                "num": "A0",
                "type": "First",
                "available": True
            },
            {
                "num": "A1",
                "type": "First",
                "available": True
            },
            {
                "num": "A2",
                "type": "First",
                "available": True
            },
            {
                "num": "A3",
                "type": "First",
                "available": True
            },
            {
                "num": "B0",
                "type": "First",
                "available": True
            },
            {
                "num": "B1",
                "type": "First",
                "available": True
            },
            {
                "num": "B2",
                "type": "First",
                "available": True
            },
            {
                "num": "B3",
                "type": "First",
                "available": True
            },
            {
                "num": "C0",
                "type": "First",
                "available": True
            },
            {
                "num": "C1",
                "type": "First",
                "available": True
            },
            {
                "num": "C2",
                "type": "First",
                "available": True
            },
            {
                "num": "C3",
                "type": "First",
                "available": True
            },
            {
                "num": "D0",
                "type": "First",
                "available": True
            },
            {
                "num": "D1",
                "type": "First",
                "available": True
            },
            {
                "num": "D2",
                "type": "First",
                "available": True
            },
            {
                "num": "D3",
                "type": "First",
                "available": True
            },
            {
                "num": "E0",
                "type": "First",
                "available": True
            },
            {
                "num": "E1",
                "type": "First",
                "available": True
            },
            {
                "num": "E2",
                "type": "First",
                "available": True
            },
            {
                "num": "E3",
                "type": "First",
                "available": True
            },
            {
                "num": "F0",
                "type": "First",
                "available": True
            },
            {
                "num": "F1",
                "type": "First",
                "available": True
            },
            {
                "num": "F2",
                "type": "First",
                "available": True
            },
            {
                "num": "F3",
                "type": "First",
                "available": True
            },
            {
                "num": "G0",
                "type": "First",
                "available": True
            },
            {
                "num": "G1",
                "type": "First",
                "available": True
            },
            {
                "num": "G2",
                "type": "First",
                "available": True
            },
            {
                "num": "G3",
                "type": "First",
                "available": True
            },
            {
                "num": "H0",
                "type": "First",
                "available": True
            },
            {
                "num": "H1",
                "type": "First",
                "available": True
            },
            {
                "num": "H2",
                "type": "First",
                "available": True
            },
            {
                "num": "H3",
                "type": "First",
                "available": True
            },
            {
                "num": "I0",
                "type": "First",
                "available": True
            },
            {
                "num": "I1",
                "type": "First",
                "available": True
            },
            {
                "num": "I2",
                "type": "First",
                "available": True
            },
            {
                "num": "I3",
                "type": "First",
                "available": True
            },
            {
                "num": "J0",
                "type": "First",
                "available": True
            },
            {
                "num": "J1",
                "type": "First",
                "available": True
            },
            {
                "num": "J2",
                "type": "First",
                "available": True
            },
            {
                "num": "J3",
                "type": "First",
                "available": True
            },
            {
                "num": "K0",
                "type": "First",
                "available": True
            },
            {
                "num": "K1",
                "type": "First",
                "available": True
            },
            {
                "num": "K2",
                "type": "First",
                "available": True
            },
            {
                "num": "K3",
                "type": "First",
                "available": True
            },
            {
                "num": "L0",
                "type": "First",
                "available": True
            },
            {
                "num": "L1",
                "type": "First",
                "available": True
            },
            {
                "num": "L2",
                "type": "First",
                "available": True
            },
            {
                "num": "L3",
                "type": "First",
                "available": True
            },
            {
                "num": "M0",
                "type": "First",
                "available": True
            },
            {
                "num": "M1",
                "type": "First",
                "available": True
            },
            {
                "num": "M2",
                "type": "First",
                "available": True
            },
            {
                "num": "M3",
                "type": "First",
                "available": True
            },
            {
                "num": "N0",
                "type": "First",
                "available": True
            },
            {
                "num": "N1",
                "type": "First",
                "available": True
            },
            {
                "num": "N2",
                "type": "First",
                "available": True
            },
            {
                "num": "N3",
                "type": "First",
                "available": True
            },
            {
                "num": "O0",
                "type": "First",
                "available": True
            },
            {
                "num": "O1",
                "type": "First",
                "available": True
            },
            {
                "num": "O2",
                "type": "First",
                "available": True
            },
            {
                "num": "O3",
                "type": "First",
                "available": True
            },
            {
                "num": "P0",
                "type": "First",
                "available": True
            },
            {
                "num": "P1",
                "type": "First",
                "available": True
            },
            {
                "num": "P2",
                "type": "First",
                "available": True
            },
            {
                "num": "P3",
                "type": "First",
                "available": True
            },
            {
                "num": "Q0",
                "type": "First",
                "available": True
            },
            {
                "num": "Q1",
                "type": "First",
                "available": True
            },
            {
                "num": "Q2",
                "type": "First",
                "available": True
            },
            {
                "num": "Q3",
                "type": "First",
                "available": True
            },
            {
                "num": "R0",
                "type": "First",
                "available": True
            },
            {
                "num": "R1",
                "type": "First",
                "available": True
            },
            {
                "num": "R2",
                "type": "First",
                "available": True
            },
            {
                "num": "R3",
                "type": "First",
                "available": True
            },
            {
                "num": "S0",
                "type": "First",
                "available": True
            },
            {
                "num": "S1",
                "type": "First",
                "available": True
            },
            {
                "num": "S2",
                "type": "First",
                "available": True
            },
            {
                "num": "S3",
                "type": "First",
                "available": True
            },
            {
                "num": "T0",
                "type": "First",
                "available": True
            },
            {
                "num": "T1",
                "type": "First",
                "available": True
            },
            {
                "num": "T2",
                "type": "First",
                "available": True
            },
            {
                "num": "T3",
                "type": "First",
                "available": True
            },
            {
                "num": "A0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "A1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "A2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "A3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "B0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "B1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "B2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "B3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "C0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "C1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "C2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "C3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "D0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "D1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "D2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "D3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "E0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "E1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "E2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "E3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "F0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "F1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "F2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "F3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "G0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "G1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "G2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "G3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "H0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "H1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "H2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "H3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "I0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "I1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "I2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "I3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "J0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "J1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "J2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "J3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "K0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "K1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "K2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "K3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "L0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "L1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "L2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "L3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "M0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "M1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "M2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "M3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "N0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "N1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "N2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "N3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "O0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "O1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "O2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "O3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "P0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "P1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "P2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "P3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "Q0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "Q1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "Q2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "Q3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "R0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "R1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "R2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "R3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "S0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "S1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "S2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "S3",
                "type": "Economy",
                "available": True
            },
            {
                "num": "T0",
                "type": "Economy",
                "available": True
            },
            {
                "num": "T1",
                "type": "Economy",
                "available": True
            },
            {
                "num": "T2",
                "type": "Economy",
                "available": True
            },
            {
                "num": "T3",
                "type": "Economy",
                "available": True
            }
            ]
        }
        routes.append(flight)

with open('flights.json','w') as f:
    json.dump(routes, fp=f, indent=2)
