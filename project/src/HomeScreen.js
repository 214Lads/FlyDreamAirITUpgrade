import { useEffect, useState } from 'react';
import './HomeScreen.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import SeatSelection from './SeatSelection';
import LoadingIcons from 'react-loading-icons'

function HomeScreen() {
    
    const BASE_URL = 'http://flydreamair.com:8000'

    const [airports,setAirports]=useState([])
    const [departurePort, setDepartPort] = useState(null)
    const [destPort, setDestPort] = useState(null)

    const [departDate, setDepartDate] = useState(new Date())

    const [flights, setFlights] = useState([])

    const [overlay, showOverlay] = useState(false)
    const [selectedFlight, setSelFlight] = useState({})
    const [resultsLoading, setResultsLoading]=useState(false)

    useEffect(()=>{
        const loadData = async() =>{

            console.log('requesting')
            const res = await fetch(`${BASE_URL}/airports`,{
                method:'GET'
            }).then((res)=>res.json())

            const sorted=res.sort((a,b)=>{
                return a.airport === b.airport ? 0 : a.airport < b.airport ? -1 : 1;
            })
            setAirports(sorted)
            setDestPort(sorted[0].airport)
            setDepartPort(sorted[1].airport)
            console.log("responce returned")
        }
        loadData()
    },[])

    const handleSubmit = async() =>{
        setResultsLoading(true)
        const res = await fetch(`${BASE_URL}/flights/?depart=${departurePort}&dest=${destPort}&departDate=${departDate}`,{
            method:'GET'
        }).then((res)=>res.json())

        setFlights(res);
        setResultsLoading(false)
    }
    const handleBookingSubmit = (flight) =>{
        setSelFlight(flight)
        showOverlay(true);
    }
  return (
    <>
        <div id="logoContainer">
            <img id="logo" src={require('./assets/logo.png')}/>
        </div>
        

       <div id='banner'>
            <h1>Search flights</h1>
            
            <div id='flyType'>

                <table>
                    <tr>
                        <td>
                            <label>Departure</label><br/>
                            <select id='dropdown' value={departurePort} onChange={(e) => setDepartPort(e.target.value)}>
                                {
                                    airports.map((item)=>{
                                        return <option key={item.code} value={item.airport}>{item.airport}</option>

                                    })
                                }
                            </select>
                        </td>
                        <td>
                            <label>Destination</label><br/>
                            <select id='dropdown' value={destPort} onChange={(e) => setDestPort(e.target.value)}>
                                {
                                    airports.map((item)=>{
                                        return <option key={item.code} value={item.airport}>{item.airport}</option>

                                    })
                                }
                            </select>
                        </td>
                        <td>
                            <label>Departure Date</label><br/>
                            <DatePicker id="datepicker" selected={departDate} onChange={(date) => setDepartDate(date)} />
                        </td>
                    </tr>
                </table>
                <button id='submit' onClick={() => handleSubmit()}>Search</button>
            </div>
       </div>

       <div id='content'> 
        <h1>Results</h1>
            {resultsLoading?
                <LoadingIcons.ThreeDots stroke='#000000'/>
                :
                <table id='flightInfo'>
                    <tr>
                        <th>Departure Date</th>
                        <th>Departure Port</th>
                        <th>Arrival Date</th>
                        <th>Destination Port</th>
                        <th>Aircraft</th>
                        <th>Price</th>
                        <th>Book</th>
                    </tr>
                    {
                        flights.map((item)=>{
                            return (
                                <tr>
                                    <td>{item.departureDate}</td>
                                    <td>{item.departure}</td>
                                    <td>{item.arrivalDate}</td>
                                    <td>{item.destination}</td>
                                    <td>{item.aircraft}</td>
                                    <td>${item.price}</td>
                                    <td>
                                        <button id="book" onClick={()=>handleBookingSubmit(item)}>Book</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
            }
       </div>

                
       {overlay&&<div id="overlay">
           <SeatSelection flight={selectedFlight} setOverlay={showOverlay} />
       </div>
        }
    </>
    
  );
}

export default HomeScreen;
