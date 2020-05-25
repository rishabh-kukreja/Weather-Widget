import React from "react";
import styled from "@emotion/styled";

import Location from "./Location";
import Icon from "./Icon";
import Condition from "./Condition";

const WeatherCard = ({ temp, condition, city, country }) => {
  let highColor = 0;
  let lowColor = 0;
  let bg = null;
  if (temp > 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)
    )`;
  } else if (temp <= 12) {
    highColor = (1 - (temp + 12) / 32) * 255;
    lowColor = highColor - 150;
    bg = `linear-gradient(
      to top,
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)
    )`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: ${bg};
    margin: 10px;
    padding: 25px 25px;
    width: 20vw;
    max-width: 320px;
    min-width: 270px;
    height: 50vh;
    max-height: 500px;
    min-height: 400px;
    border-radius: 20px;
    color: white;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    transition: all 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    overflow: hidden;
    position: relative;
  `;

  return (
    <Card>
      <Location city={city} country={country} />
      <Icon condition={condition} />
      <Condition temp={temp} condition={condition} />
    </Card>
  );
};

export default WeatherCard;
