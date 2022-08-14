import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushi, setSushi] = useState([])
  const [customerCash, setCustomerCash] = useState(100)
  const [amountOfPlates, setAmountOfPlates] = useState([])

  function handleCustomerCash(cost) {
    const leftInWallet = customerCash - cost;
    if (leftInWallet >= 0) {setCustomerCash(leftInWallet); return true}
  }

  function handleAmountOfPlates() {
    setAmountOfPlates([...amountOfPlates, 1])
  }

  useEffect (() => {
  fetch(API)
  .then((r) => r.json())
  .then((data) => setSushi(data))
  }, [])

  return (
    <div className="app">
      <SushiContainer sushiData={sushi} gotToPay={handleCustomerCash} emptyPlates={handleAmountOfPlates} />
      <Table cashAmount={customerCash} plates={amountOfPlates} />
    </div>
  );
}

export default App;
