import '../../Random_Password_Genarator/src/css/bootstrap.css'
import { useState, useEffect } from 'react';

function App() {

  const [amount, setAmount] = useState({
    item1: 0,
    item2: 0,
    item3: 0,
    item4: 0,
    item5: 0,
    total: 0
  })

  const [isPaid , setIsPaid] = useState(false);

  const changePrice = (e, item) => {
    setAmount({ ...amount, [item]: e.target.value });
  }
  
  const handlePayment = () => {
    setIsPaid(true);
    setAmount({ ...amount, item1:0,item2:0,item3:0,item4:0,item5:0 });
  }
  
  useEffect(() => {
    setAmount({ ...amount, total: (amount.item1 * 5) + (amount.item2 * 10) + (amount.item3 * 15) + (amount.item4 * 20) + (amount.item5 * 7) })
  },[amount.item1,amount.item2,amount.item3,amount.item4,amount.item5])
  
  return (
    <>
      <div className="container w-50 text-center mt-3">
      <h1>Expense Tracker</h1>
      {isPaid && <div className="alert alert-success">Amount Paid ✨✨🎉</div> }
        <div className="row mb-2 mt-3">
          <label htmlFor="" className="form-label column w-25">Item1 : 5</label>
          <input
            onChange={(e) => changePrice(e, "item1")}
            value={amount.item1}
            type="number" className="form-control column w-75 mb-2" />
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="form-label column w-25">Item2 : 10</label>
          <input
            onChange={(e) => changePrice(e, "item2")}
            value={amount.item2}
            type="number" className="form-control column w-75 mb-2" />
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="form-label column w-25">Item3 : 15</label>
          <input
            onChange={(e) => changePrice(e, "item3")}
            value={amount.item3}
            type="number" className="form-control column w-75 mb-2" />
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="form-label column w-25">Item4 : 20</label>
          <input
            onChange={(e) => changePrice(e, "item4")}
            value={amount.item4}
            type="number" className="form-control column w-75 mb-2" />
        </div>
        <div className="row mb-2">
          <label htmlFor="" className="form-label column w-25">Item5 : 7</label>
          <input
            onChange={(e) => changePrice(e, "item5")}
            value={amount.item5}
            type="number" className="form-control column w-75 mb-2" />
        </div>
      <button className="btn btn-info" onClick={handlePayment} >Pay : ₹ {amount.total} </button>
      </div>
    </>
  )
}

export default App
