import { useState } from "react";

function TruckBox({ data, truckID }) {
  const [truckLoad, setTruckLoad] = useState(true);
  return (
    <>
      {data[truckID].map((truck, id) => (
        <div key={id} className="box-trucks">
          {/* car */}
          <div className="pick-truck">
            {truckLoad && <span className="loader"></span>}
            <img
              style={{ display: truckLoad ? "none" : "block" }}
              src={truck.img}
              alt="truck_img"
              onLoad={() => setTruckLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${truck.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{truck.model}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Mark</span>
                <span>{truck.mark}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Year</span>
                <span>{truck.year}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Doors</span>
                <span>{truck.doors}</span>
              </div>

              <div className="pick-description__table__col">
                <span>AC</span>
                <span>{truck.air}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Transmission</span>
                <span>{truck.transmission}</span>
              </div>

              <div className="pick-description__table__col">
                <span>Fuel</span>
                <span>{truck.fuel}</span>
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default TruckBox;
