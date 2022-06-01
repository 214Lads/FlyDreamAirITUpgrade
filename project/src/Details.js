import { useState } from 'react';
import './Details.css';
import {useLocation} from 'react-router-dom';
import DatePicker from "react-datepicker";
import { useNavigate } from 'react-router-dom';
import LoadingIcons from 'react-loading-icons'


function Details(params) {

    const BASE_URL = 'http://flydreamair.com:8000'

    const location = useLocation();
    const navigate = useNavigate();

    console.log(location)

    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNum, setPhoneNum] = useState("")
    const [dob, setDob] = useState(new Date())
    const [acceptTerms, setAcceptTerms] = useState(false)

    const [submitLoading, setSubmitLoading] = useState(false)

    const handleSubmit = async()=>{
        
        setSubmitLoading(true)
        const requestObj = {
            'id':0,
            'flight':location.state.flight,
            'price':location.state.total,
            'seat':location.state.seat.value,
            'package':location.state.package.label,
            'fname':fName,
            'lname':lName,
            'email':email,
            'country':country,
            'city':city,
            'phoneNum':phoneNum,
            'dob':dob.toISOString()
        }

        const resp = await fetch(`${BASE_URL}/bookings`,{
            method:'POST',
            body:JSON.stringify(requestObj),
            headers:{
                'Content-Type':'application/json',
            }
        })

        if (resp.status == 200){
            navigate('/thankyou')
        }

        setSubmitLoading(false)
    }

    return (
    <>
        <div id='header'>
            <h1>Please Enter Details</h1>
            <h5>Please enter your details to confirm your booking</h5>
        </div>
        <div id='main'>
            <table>
                <tr>
                    <td>
                        <input placeholder='First Name' type="text" value={fName} onChange={(e) => setFname(e.target.value)}/>
                    </td>
                    <td>
                        <input placeholder='Last Name' type="text" value={lName} onChange={(e) => setLname(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input placeholder='Country' type="text" value={country} onChange={(e) => setCountry(e.target.value)}/>
                    </td>
                    <td>
                        <input placeholder='City' type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>

                    <input placeholder='Email' type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>

                        <input placeholder='Phone Number' type="text" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}/>
                    </td>

                </tr>
                <tr>
                    <td colSpan={2}>
                        <DatePicker id="datepicker" selected={dob} onChange={(date) => setDob(date)} />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                    <input type={"checkbox"} value={acceptTerms} onChange={(e)=> setAcceptTerms(e.target.value)}/> <label>Agree to FlyDreamAir terms and conditions</label>
                    </td>
                </tr>
            </table>

            <table id='bookingInfo'>
                <tr>
                    <th>Departure Date</th>
                    <th>Departure Port</th>
                    <th>Arrival Date</th>
                    <th>Destination Port</th>
                    <th>Aircraft</th>
                    <th>Class</th>
                    <th>Seat</th>
                    <th>Packages</th>
                    <th>Price</th>
                </tr>
                <tr>
                    <td>{location.state.flight.departureDate}</td>
                    <td>{location.state.flight.departure}</td>
                    <td>{location.state.flight.arrivalDate}</td>
                    <td>{location.state.flight.destination}</td>
                    <td>{location.state.flight.aircraft}</td>
                    <td>{location.state.class.label}</td>
                    <td>{location.state.seat.label}</td>
                    <td>{location.state.package.label}</td>
                    <td>${location.state.total}</td>
                </tr>
            </table>
            {!submitLoading ?
                <button onClick={() => handleSubmit()}>Submit</button>
                :
                <LoadingIcons.ThreeDots stroke='#000000'/>

            }
        </div>
    </>

    );
}

export default Details;
