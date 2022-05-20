import { useState } from 'react';
import './Checkout.css';

function Checkout() {

  const [total, setTotal] = useState(500);
  const [itemList, setItemList] = useState(["item1", "item2"])
  
  return (
    <>
        <div id="logoContainer">
            <img id="logo" src={require('./assets/logo.png')}/>
        </div>
        
        <div id="main">

              <table >
                <tr>Total Amount</tr>
                  <tr>
                    <div id='element'>
                      ${total}
                    </div>
                  </tr>
                <tr>Items</tr>
                  <tr>
                  <div id='element'>
                    <ul>
                      {itemList.map((e) => <li>{e}</li>)}
                    </ul>
                    </div>
                  </tr>
              </table>
        </div>
        <button>Card</button>
        <button>Points</button>
        <button>Cancel</button>
    </>
    
  );
}

export default Checkout;
