import { useState } from 'react';
import './SeatSelection.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

function SeatSelection({flight, setOverlay}) {

    const navigate = useNavigate();

    const classOptions = [
        {
            label:'Economy',
            value:0
        },
        {
            label:'First',
            value:1500
        }
    ]
    const extras = [
        {
            label:'No Package',
            value:0
        },
        {
            label:'Drinks and Food Package',
            value:75
        },
        {
            label:'Sleep Package',
            value:10
        }
    ]
    const [classSelected, setClassSelected] = useState(classOptions[0]) 
    const [total, setTotal] = useState(flight.price)
    const [packageSelected, setPackageSelected] = useState(extras[0])
    const [seatSelection, selectSeat] = useState(flight.seats[0])

    const getSeatOptions = () =>{
        let list = flight.seats.filter((item)=>item.type == classSelected.label && item.available==true)
        list = list.map((item) => item.num)
        return list
    }
    const handleClassSelection = (e) =>{

        if (e.label === classSelected.label)return
        
        setTotal(prev => prev-classSelected.value + e.value)
        setClassSelected(e)
    }
    const handlePackageSelection = (e) =>{
        
        if (e.label === packageSelected.label) return
        setTotal(prev => prev-packageSelected.value + e.value)
        setPackageSelected(e)
    }
    return (
    <>

        <div id='container'>

            <div id='child'>
                <img src={require('./assets/seatSelection.png')} style={{width:150, textAlign:'center'}}/>
            </div>
            <div id='child'>
                <button id='close' onClick={()=>setOverlay(false)}>Close</button>
                <h1 style={{color:'white'}}>Selection</h1>
                
                <h4>Select Class</h4>
                <Dropdown onChange={(e) => handleClassSelection(e)} options={classOptions}  value={classSelected} placeholder="Select an option" />

                <h4>Seat selection</h4>
                <Dropdown onChange={(e) =>selectSeat(e)} options={getSeatOptions()} value={seatSelection.num} placeholder="Select an option" />

                <h4>Onboard Packages</h4>
                <Dropdown onChange={(e) => handlePackageSelection(e)} options={extras} value={extras[0]} placeholder="Select an option" />

                <h4>Total</h4>
                <div id='total'>
                    ${total}
                </div>
                <button id='confirm' onClick={()=>navigate('/details',{state:{class:classSelected, total:total, seat:seatSelection, package:packageSelected, flight:flight}})}>Confirm</button>

            </div>
            
        </div>
    </>

    );
}

export default SeatSelection;
