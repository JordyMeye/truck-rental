import { useState } from "react";
import TruckBox from "./TruckBox";
import { TRUCK_DATA } from "../components/TruckData";

function PickTruck() {
  const [active, setActive] = useState("SecondTruck");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Truck Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing trucks to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__truck-content">
              {/* pick car */}
              <div className="pick-box">
                <button
                  className={`${coloringButton("btn1")}`}
                  onClick={() => {
                    setActive("SecondTruck");
                    btnID("btn1");
                  }}
                >
                  Ford  Ford F-150
                </button>
                <button
                  className={`${coloringButton("btn2")}`}
                  id="btn2"
                  onClick={() => {
                    setActive("FirstTruck");
                    btnID("btn2");
                  }}
                >
                  Chevrolet Silverado
                </button>
                <button
                  className={`${coloringButton("btn3")}`}
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdTruck");
                    btnID("btn3");
                  }}
                >
                  Toyota Tocoma
                </button>
                <button
                  className={`${coloringButton("btn4")}`}
                  id="btn4"
                  onClick={() => {
                    setActive("FourthTruck");
                    btnID("btn4");
                  }}
                >
                  Nissan Frontier
                </button>
                <button
                  className={`${coloringButton("btn5")}`}
                  id="btn5"
                  onClick={() => {
                    setActive("FifthCar");
                    btnID("btn5");
                  }}
                >
                  Ram Ram 1500
                </button>
                <button
                  className={`${coloringButton("btn6")}`}
                  id="btn6"
                  onClick={() => {
                    setActive("SixthTruck");
                    btnID("btn6");
                  }}
                >
                  GMC GMC sierra
                </button>
              </div>

              {active === "FirstTruck" && <TruckBox data={TRUCK_DATA} truckID={0} />}
              {active === "SecondTruck" && <TruckBox data={TRUCK_DATA} truckID={1} />}
              {active === "ThirdTruck" && <TruckBox data={TRUCK_DATA} truckID={2} />}
              {active === "FourthTruck" && <TruckBox data={TRUCK_DATA} truckID={3} />}
              {active === "FifthTruck" && <TruckBox data={TRUCK_DATA} truckID={4} />}
              {active === "SixthTruck" && <TruckBox data={TRUCK_DATA} truckID={5} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickTruck;
