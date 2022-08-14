import React, {useState} from "react";

function Sushi({sushiInfo, gotToPay, emptyPlates}) {
  const [eaten, setEaten] = useState(false)

  function handleEaten(e) {
    gotToPay(sushiInfo.price)
    if(gotToPay(sushiInfo.price) == true) {
    setEaten(true)
    emptyPlates()}
  }

  return (
    <div className="sushi">
      <div className="plate">
        {eaten ? null : (
          <img
            src={sushiInfo.img_url}
            alt={`${sushiInfo.name} Sushi`}
            width="100%"
            onClick={handleEaten}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushiInfo.name} - ${sushiInfo.price}
      </h4>
    </div>
  );
}

export default Sushi;
