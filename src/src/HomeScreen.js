import { useState } from 'react';
import './HomeScreen.css';
import Dropdown from 'react-dropdown';
import Datepicker from "react-datepicker";

function HomeScreen() {
    
    const flightsFrom=['London','Paris', 'Sydney', 'Madrid']
    const flightsTo=['London','Paris', 'Sydney', 'Madrid']
    const departOptions=['Today','Tomorrow', 'Next Day']


    const [oneWay, setOneWay] = useState(true);
    const [from, setFrom] = useState(flightsFrom[0])
    const [to, setTo] = useState(flightsTo[3])
    const [depart, setDeparture] = useState(departOptions[0])
    const [returnPort, setReturn] = useState()
    const [numOfAdults, setNumOfAdults] = useState()
    const [classType, setClass] = useState()
    const [extras, setExtras] = useState()


    const flights=[
        {
            oneWay:false,
            from:'Sydney',
            to:'London',
            departAt:['Today', 'Tomorrow', 'Day After'],
            returnAt:'2022-05-19T01:17:36Z',
            numOfAdults:[1,2,3,4],
            classes:['First','Business', 'Economy'],
            extras:['All Inclusive','Food', 'Drinks']
        },
        {
            oneWay:false,
            from:'Paris',
            to:'Madrid',
            departAt:['Today', 'Tommorrow', 'Day After'],
            returnAt:'2022-05-19T01:17:36Z',
            numOfAdults:[1,2,3,4],
            classes:['First','Business', 'Economy'],
            extras:['All Inclusive','Food', 'Drinks']
        },
        {
            oneWay:false,
            from:'Sydney',
            to:'London',
            departAt:['Today', 'Tommorrow', 'Day After'],
            returnAt:'2022-05-19T01:17:36Z',
            numOfAdults:[1,2,3,4],
            classes:['First','Business', 'Economy'],
            extras:['All Inclusive','Food', 'Drinks']
        }
    ]

    const handleSubmit = () =>{
        console.log("Submit")
    }
  return (
    <>
        <div id="logoContainer">
            <img id="logo" src={require('./assets/logo.png')}/>
        </div>
        
       <div id='banner'>
            <h1>Search flights</h1>
            
            <div id='flyType'>
                <form action='/flights' method='GET'>

                    <table>
                        <tr>
                            {console.log(oneWay)}
                            <td>
                                <input id='radioButton' name='flightType' type='radio' value={!oneWay} onChange={() => setOneWay(false)}/><label>Return</label>
                            </td>
                            <td>
                                <input id='radioButton' type='radio' name='flightType' value={oneWay}  onChange={() => setOneWay(true)}/><label>One Way</label>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <label>From</label><br/>
                                <select id='dropdown' value={from} onChange={(e) => setFrom(e.target.value)}>
                                    {
                                        flightsFrom.map((item)=>{
                                            return <option key={item} value={item}>{item}</option>

                                        })
                                    }
                                </select>
                            </td>
                            <td>
                                <label>To</label><br/>
                                <select id='dropdown' value={to} onChange={(e) => setTo(e.target.value)}>
                                    {
                                        flightsTo.map((item)=>{
                                            return <option key={item} value={item}>{item}</option>

                                        })
                                    }
                                </select>
                            </td>
                            <td>
                                <label>Depart at</label><br/>
                                <select id='dropdown' value={depart} onChange={(e) => setDeparture(e.target.value)}>
                                    {
                                        departOptions.map((item)=>{
                                            return <option key={item} value={item}>{item}</option>

                                        })
                                    }
                                </select>
                            </td>
                            <td>
                                <label>Return at</label><br/>
                                <select id='dropdown'>
                                    <option value="actual value 1">Display Text 1</option>
                                    <option value="actual value 2">Display Text 2</option>
                                    <option value="actual value 3">Display Text 3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>Number of Adults</label><br/>
                                <select id='dropdown'>
                                    <option value="actual value 1">Display Text 1</option>
                                    <option value="actual value 2">Display Text 2</option>
                                    <option value="actual value 3">Display Text 3</option>
                                </select>
                            </td>
                            <td>
                                <label>Class</label><br/>
                                <select id='dropdown'>
                                    <option value="actual value 1">Display Text 1</option>
                                    <option value="actual value 2">Display Text 2</option>
                                    <option value="actual value 3">Display Text 3</option>
                                </select>
                            </td>
                            <td>
                                <label>Extras</label><br/>
                                <select id='dropdown'>
                                    <option value="actual value 1">Display Text 1</option>
                                    <option value="actual value 2">Display Text 2</option>
                                    <option value="actual value 3">Display Text 3</option>
                                </select>
                            </td>
                        </tr>
                    </table>
                    <button id='submit' onClick={() => handleSubmit()}>Search</button>
                </form>
            </div>
       </div>

       <div id='main'> 
        <h1>Results</h1>

       </div>
    </>
    
  );
}

export default HomeScreen;
