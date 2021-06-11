import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Conditions from "../Conditions/Conditions";

const Forecast = () => {
  // state declarations
  let [city, setCity] = useState("");
  let provState = useState("");
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});
  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  let uriEncodedCity = encodeURIComponent(city);
  let uriEncodedState = encodeURIComponent(provState);

  function getForecast(e) {
    e.preventDefault();
    if (city.length === 0) {
      return setError(true);
    }

    setError(false);
    setResponseObj({});

    setLoading(true);

    let uriEncodedCity = encodeURIComponent(city);

    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity},${uriEncodedState}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.error(err.message);
      });
  }

  return (
    <>
      <div className="row">
        <div className="col-12 mb-4">
          <Conditions
            responseObj={responseObj}
            error={error}
            loading={loading}
          />
        </div>
        <div className="col-12">
          <FormGroup>
            <Form onSubmit={getForecast}>
              <Label htmlFor="searchBar">Search for forecast by city:</Label>
              <Input
                text
                id="searchBar"
                name="searchBar"
                value={city}
                placeholder="Enter city (i.e. London,  New York, etc.)"
                maxLength="50"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <div className="col mt-3">
                <Label htmlFor="units" className="mr-5">
                  <Input
                    type="radio"
                    id="units"
                    name="units"
                    check={unit === "imperial"}
                    value="imperial"
                    onChange={(e) => setUnit(e.target.value)}
                  />
                  Fahrenheit
                </Label>
                <Label htmlFor="units">
                  <Input
                    type="radio"
                    id="units"
                    name="units"
                    check={unit === "metric"}
                    value="metric"
                    onChange={(e) => setUnit(e.target.value)}
                  />
                  Celcius
                </Label>
              </div>
              <div className="col-12">
                <Button
                  type="submit"
                  style={{
                    fontFamily: "Lobster",
                    backgroundColor: "#ffbb33",
                    boxShadow: "2px 2px 2px black",
                  }}
                  className="btn btn-lg btn-warning mt-3"
                >
                  Find Forecast
                </Button>
              </div>
            </Form>
          </FormGroup>
        </div>
      </div>
    </>
  );
};

export default Forecast;
