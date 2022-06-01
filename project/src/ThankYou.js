import './ThankYou.css';
import 'react-dropdown/style.css';

function ThankYou({flight, setOverlay}) {

    return (
    <>
        <div id='header'>
            <img id="logo" src={require('./assets/logo.png')}/>

            <h1>Thank you for choosing to fly with FlyDreamAir</h1>
        </div>
         <div id='main'>
            <img id="tick" src={require('./assets/greenTick.jpeg')}/>
        </div>
    </>

    );
}

export default ThankYou;
