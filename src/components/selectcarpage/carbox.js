import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

import car1 from "../image/car1.svg";
import car2 from "../image/car2.svg";
import car3 from "../image/car3.svg";
import car4 from "../image/car4.svg";
import car5 from "../image/car5.svg";
import car6 from "../image/car6.svg";
import car7 from "../image/car7.svg";
import car8 from "../image/car8.svg";
import car9 from "../image/car9.svg";
import car10 from "../image/car10.svg";
import carcontour from "../image/carcontour.svg";
import eye from "../image/whiteeyeS.svg";
import seat from "../image/seaticon.svg";

export function CarBox() {
  const navigate = useNavigate();
  const goSeatPage = () => {
    navigate("/seat");
  };

  const car = [car1, car2, car3, car4, car5, car6, car7, car8, car9, car10];

  return (
    <CarBox>
      <LeftBox>
        <img className="car" src={car1} onClick={goSeatPage} />
        <img className="carcontour" src={carcontour} />
      </LeftBox>
      <RightBox>
        <EyeBox>
          <img src={eye} />
          <p>12</p>
        </EyeBox>
        <SeatBox>
          <img src={seat} />
          <p>7</p>
        </SeatBox>
      </RightBox>
    </CarBox>
  );
}

const CarBox = styled.div`
  display: flex;
`;

const LeftBox = styled.div`
  float: left;
  .carcontour {
    display: block;
    margin: 2px auto 8px;
  }
  .car {
    display: block;
    margin: 0 auto;
  }
`;

const RightBox = styled.div`
  float: right;
  display: flex;
  margin: 0 15%;
`;
const EyeBox = styled.div`
  margin: 0 auto;
  img {
    margin: 25px 10px 0 0;
  }
  p {
    display: block;
    margin: 0 2.5px;
    font-family: "NanumSquare";
    font-size: 13px;
    font-weight: 400;
    color: #ffffff;
  }
`;
const SeatBox = styled.div`
  margin: 0 auto;
  img {
    margin: 25px 0 0 0;
  }
  p {
    display: block;
    margin: 0 7px;
    font-family: "NanumSquare";
    font-size: 13px;
    font-weight: 400;
    color: #ffffff;
  }
`;

export default CarBox;
