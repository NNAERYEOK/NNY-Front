import React from "react";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import BackBtn from "../components/BackBtn";
import EyeIcon from "../image/eyeicon.svg";

export const Charging = () => {
  return (
    <>
      <GlobalStyle />
      <BackBtn />
      <Title>충전하기</Title>
      <div className="topBox">
        <div className="boxLeft">
          <img className="eyeIcon" src={EyeIcon} />
          <span className="havingEye">내가 가진 eye</span>
          <span className="countEye">3개</span>
        </div>
        <div className="boxRight">
          <Link to="/" className="explainEye">
            eye란?
          </Link>
        </div>
      </div>
      <Catalogue>
        <div className="boxLeft">
          <img className="eyeIcon" src={EyeIcon} />
          <span className="eyeList">eye 10개</span>
        </div>
        <div className="boxRight">
          <PriceBtn>
            <Link to="/paying" className="link">
              ₩ 1,000
            </Link>
          </PriceBtn>
        </div>
      </Catalogue>
      <Catalogue>
        <div className="boxLeft">
          <img className="eyeIcon" src={EyeIcon} />
          <span className="eyeList">eye 55개</span>
        </div>
        <div className="boxRight">
          <PriceBtn>
            <Link to="/paying" className="link">
              ₩ 4,900
            </Link>
          </PriceBtn>
        </div>
      </Catalogue>
      <Catalogue>
        <div className="boxLeft">
          <img className="eyeIcon" src={EyeIcon} />
          <span className="eyeList">eye 120개</span>
        </div>
        <div className="boxRight">
          <PriceBtn>
            <Link to="/paying" className="link">
              ₩ 9,900
            </Link>
          </PriceBtn>
        </div>
      </Catalogue>
    </>
  );
};

export const Title = styled.div`
  font-family: "NanumSquare";
  font-size: 24px;
  font-weight: 800;
  margin-top: 20px;
  margin-left: 60px;
`;

const Catalogue = styled.div`
  width: 70%;
  height: 38px;
  border-bottom: 1px solid #4fe0b6;
  margin: 30px auto;
  box-sizing: border-box;
`;

const PriceBtn = styled.button`
  width: 65px;
  height: 23px;
  padding: 2px 10px;
  margin-right: 4px;
  margin-top: 8px;
  border: none;
  border-radius: 10px;
  background-color: #4fe0b6;
  opacity: 74%;
  font-size: 12px;
  font-weight: 800;
`;

const GlobalStyle = createGlobalStyle`
.topBox {
  width: 75%;
  height: 38px;
  background-color: #EFEFEF;
  border-radius: 6px;
  margin: 100px auto 40px;
  padding-left: 4px;
  box-sizing: border-box;
}

.link {
 text-decoration: none;
 color:#ffffff;
}

.boxLeft{
  box-sizing: border-box;
  float: left;
  display: flex;
}

.boxRight{
  box-sizing: border-box;
  float: right;
}

span{
  font-family: "NanumSquare";
}

.eyeIcon{
  display: inline;
  margin: 8px 0 8px 4px;
}

.havingEye{
  margin: 12px 8px 8px 8px;
  font-size: 14px;
  white-space: nowrap;
  margin-left: 10px;
}

.countEye{
  margin: 12px 15px;
  font-size: 14px;
  font-weight: 700;
  color: #4FE0B6;
  white-space: nowrap;
  display: inline;
}

.explainEye{
  display: block;
  margin: 14px;
  font-size: 8px;
  text-decoration: none;
  font-weight: 100;
  color: #000000;
  white-space: nowrap;
}

.eyeList{
  font-family: 'NanumSquare';
  font-size: 10px;
  font-weight: 800;
  margin: 15px 0;
  margin-left: 20px;

}

`;

export default Charging;
