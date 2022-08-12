import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate } from "react-router-dom";

import TopBar from "../components/TopBar";
import BackBtn from "../components/BackBtn";
import RealtimeModal from "../components/RealtimeModal";

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
import direction from "../image/direction.svg";
import eye from "../image/whiteeyeS.svg";
import seat from "../image/seaticon.svg";

export function SelectCarPage() {
  const navigate = useNavigate();
  const goSeatPage = () => {
    navigate("/seat");
  };

  return (
    <>
      <Background />
      <TopBar />
      <BackBtn />
      <P>타고 계신 열차를 선택해 주세요.</P>
      <Container>
        <Direction>
          <img src={direction} />
          <img src={direction} />
          <img src={direction} />
        </Direction>
        <CarContainer>
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car2} onClick={goSeatPage} />
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car3} onClick={goSeatPage} />
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car4} onClick={goSeatPage} />
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car5} onClick={goSeatPage} />
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car6} onClick={goSeatPage} />
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car7} onClick={goSeatPage} />
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car8} onClick={goSeatPage} />
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car9} onClick={goSeatPage} />
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
          <CarBox>
            <LeftBox>
              <img className="car" src={car10} onClick={goSeatPage} />
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
        </CarContainer>
      </Container>
    </>
  );
}

const Background = createGlobalStyle`
  body {
  background-color: var( --background-black);
  }
`;

const P = styled.p`
  font-family: "NanumSquare";
  margin-left: 8%;
  margin-bottom: 71px;
  margin-top: 40px;
  color: white;
  font-weight: 800;
  font-size: 20px;
`;

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  position: relative;
`;

const Direction = styled.div`
  margin: 0 8% 0 16%;
  img {
    display: block;
    margin: 130px 0px;
  }
`;

const CarContainer = styled.div`
  margin: 0 auto;
  margin-top: 2%;
  height: 540px;
  width: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

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

export default SelectCarPage;
