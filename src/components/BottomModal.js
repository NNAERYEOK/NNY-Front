import React, { useEffect, useState } from "react";
import styled from "styled-components";
import X from "../image/X.svg";

const CustomButton = styled.button`
  margin-bottom: 500px;
`;

const BigText = styled.p`
  width: 238px;
  height: 29px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #000000;
`;

const SmallText = styled.p`
  width: 219px;
  height: 29px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-align: center;

  color: #000000;
`;

const XIcon = styled.div`
  background: url(${X});
  width: 23px;
  height: 23px;
`;
const BottomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <CustomButton onClick={() => setIsOpen(!isOpen)}>sdffffffff</CustomButton>
      <Test>
        <button>dsf</button>
        <div className={isOpen ? "container modal-open" : "container"}>
          <div className="modal">
            <XIcon></XIcon>
            <BigText>선택한 좌석에 앉아 있습니다.</BigText>
            <SmallText>하차할 역을 선택해 주세요.</SmallText>
          </div>
        </div>
      </Test>
    </div>
  );
};

export default BottomModal;

const Test = styled.div`
  .modal {
    background: #fff;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 27px;
    transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
    top: 100%;
    position: fixed;
    left: 0;
    text-align: left;
    border-radius: 27px;

    display: flex;
    flex-direction: column;
  }

  .container.modal-open .modal {
    top: 500px;
  }
`;
