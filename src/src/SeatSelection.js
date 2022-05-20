import { useState } from 'react';
import './SeatSelection.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function SeatSelection() {

    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];

    return (
    <>
        <div id='header'>
            <img id='logo' src={require('./assets/logo2.png')}/>
        </div>
        <div id='container'>

            <div id='child'>
                {/* <div style={mystyle}></div> */}

                <img src={require('./assets/seatSelection.png')} style={{width:200, textAlign:'center'}}/>
            </div>
            <div id='child'>
                <h1 style={{color:'white'}}>Selection</h1>
                
                <h4>Seat selection</h4>
                <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />

                <h4>Onboard Packages</h4>
                <Dropdown options={options}  value={defaultOption} placeholder="Select an option" />

                <h4>Total</h4>
                <div style={{'background-color':'white', 'font-size':25, 'color':'black'}}>
                    $300
                </div>
                <button>Pay</button>
            </div>
            
        </div>
    </>

    );
}

export default SeatSelection;
