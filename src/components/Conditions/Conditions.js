import React from "react";

// I want to include
// 1. Current Temp
// 2. City name and Country
// 3. Descriptions (sunny, overcast, etc.)
// 4. Min temp
// 5. Max temp

const getDescriptionsEmoji = (props) => {
  if (props.responseObj.weather[0].main === "Clouds") {
    return <h1>☁</h1>;
  } else if (
    props.responseObj.weather[0].main === "Sun" ||
    "clear sky" ||
    "Clear"
  ) {
    return <h1>☀</h1>;
  } else if (props.responseObj.weather[0].main === "Rain") {
    return <h1>🌧</h1>;
  } else if (props.responseObj.weather[0].main === "Mist" || "Fog") {
    return <h1>🌫</h1>;
  } else if (
    props.responseObj.weather[0].main === "Thunder" ||
    "Thunderstorms" ||
    "Lightning"
  ) {
    return <h1>⚡</h1>;
  } else if (props.responseObj.weather[0].main === "Storm" || "Stormy") {
    return <h1>⛈</h1>;
  } else {
    return <h1>⛅</h1>;
  }
};

// const getCOrF = (props) => {
//   props.unit === "imperial" ? <>℉</> : <>℃</>;
// };

const Conditions = (props) => {
  return (
    <>
      {props.error && (
        <small className="small">
          Please enter a valid city name (i.e. "Bellevue").
        </small>
      )}
      {props.loading && <div className="Loader" />}

      {props.responseObj.cod === 200 ? (
        <>
          <div className="row">
            <div className="col-12 mb-2 text-center mx-auto">
              <hr />
              <h1>{getDescriptionsEmoji(props)}</h1>
              <h1>
                {props.responseObj.name}
                <br />
                <span style={{ fontSize: "18px" }}>
                  {props.responseObj.sys.country}
                </span>
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <h3>Current</h3>
              <h4>{Math.round(props.responseObj.main.temp)}°</h4>
              <p>& {props.responseObj.weather[0].description}</p>
            </div>
            <div className="col-6 col-md-4">
              <h3>Low</h3>
              <h4>{Math.round(props.responseObj.main.temp_min)}°</h4>
            </div>
            <div className="col-6 col-md-4">
              <h3>High</h3>
              <h4>{Math.round(props.responseObj.main.temp_max)}°</h4>
            </div>
            {/* <Button
              type="reset"
              style={{
                fontFamily: "Lobster",
                backgroundColor: "rgba(255,187,51,0.3)",
                boxShadow: "2px 2px 2px black",
              }}
              className="btn btn-lg btn-warning mt-3 mx-auto"
            >
              Start Again
            </Button> */}
            <h3 className="mt-3" style={{ backgroundColor: "white" }}>
              Search for another city below!
            </h3>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Conditions;
