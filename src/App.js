import { useState } from 'react'
const App = () => {

  return (
    <div className='app'>
      <TipCalculator />
    </div>
  );
}

const TipCalculator = () => {

  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const handleBill = (event) => {
    setBill(Number(event.target.value));
  }

  const handleTip1 = (event) => {
    setTip1(Number(event.target.value));

  }

  const handleTip2 = (event) => {
    setTip2(Number(event.target.value));
  }

  const totalTip = bill * ((tip1 + tip2) / 2 / 100);

  const handleReset = () => {
    setBill("");
    setTip1(0);
    setTip2(0);
  }

  return (
    <div>
      <Bill bill={bill} getbill={handleBill} />
      <Tip tip={tip1} handleTip={handleTip1}> How did you like the service? </Tip>
      <Tip tip={tip2} handleTip={handleTip2}> How did your friend like the service? </Tip>

      {bill > 0 &&
        <>
          <PrintTotalBill bill={bill} tip={totalTip} />
          <ClearChoices onReset={handleReset} />
        </>
      }
    </div>
  );

}

const Bill = ({ bill, getbill }) => {

  return (
    <div className='bill'>
      <span>How much was the Bill? </span>
      <input type="number" placeholder='bill value...' value={bill} onChange={(e) => getbill(e)} />
    </div>
  );
}

const Tip = ({ tip, handleTip, children }) => {

  return (
    <div className='tip'>
      <span>{children}</span>
      <select value={tip} onChange={(e) => handleTip(e)}>
        <option value="0"> Dissatisfied (0%) </option>
        <option value="5"> It was okay (5%) </option>
        <option value="10"> It was good (10%) </option>
        <option value="20"> Absolutely amazing! (20%) </option>
      </select>
    </div>
  );
}

const PrintTotalBill = ({ bill, tip }) => {
  return (
    <div className='total'>
      <h2>You Pay ${Number(bill) + Number(tip)} (${bill} + ${tip} tip)</h2>
    </div>
  );
}

const ClearChoices = ({ onReset }) => {
  return (
    <button className='reset' onClick={onReset}>RESET</button>
  );
}

export default App;