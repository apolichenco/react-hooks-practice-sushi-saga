import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiData, gotToPay, emptyPlates}) {
  const [fourSushis, setFourSushis] = useState([0, 1, 2, 3])

  function handleNextSushis() {
    const nextFour = fourSushis.map((number) => number + 4)
    setFourSushis(nextFour)
  }

  return (
    <div className="belt">
      {sushiData.map((indivSushi) => {
        const index = sushiData.indexOf(indivSushi)
        if (fourSushis.includes(index)) {
        return <Sushi key={index} sushiInfo={indivSushi} gotToPay={gotToPay} emptyPlates={emptyPlates}/>
}})}
      <MoreButton showMore={handleNextSushis}/> 
    </div>
  );
}

export default SushiContainer;
