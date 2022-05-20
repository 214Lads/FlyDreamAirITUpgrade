import { useState } from 'react';
import './Details.css';

function Details() {

    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNum, setPhoneNum] = useState("")
    const [dob, setDob] = useState("")
    const [acceptTerms, setAcceptTerms] = useState(false)

    const handleSubmit = ()=>{

    }

    return (
    <>
        <div id='header'>
            <h1>Please Enter Details</h1>
            <h5>Please enter your details to gain access to FlyDreamAir</h5>
        </div>
        <div id='main'>
            <form onSubmit={handleSubmit()}>
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

                            <input placeholder='Date of Birth (DD/MM/YY)' type="text" value={dob} onChange={(e) => setDob(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                        <input type={"checkbox"} value={acceptTerms} onChange={(e)=> setAcceptTerms(e.target.value)}/> <label>Agree to FlyDreamAir terms and conditions</label>
                        </td>
                    </tr>
                </table>
            </form>
            <button>Access</button>
        </div>
    </>

    );
}

export default Details;
