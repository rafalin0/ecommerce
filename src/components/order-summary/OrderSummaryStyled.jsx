import styled, { css } from "styled-components";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

import { devices } from "../../styles/Breakpoints";

const iconStyles = css`
  color: #ff8081;
  vertical-align: bottom;
`;

export const ShowIcon = styled(IoIosArrowDropdownCircle)`
  ${iconStyles}
`;

export const HideIcon = styled(IoIosArrowDropupCircle)`
  ${iconStyles}
`;

export const SidebarTitle = styled.p`
  cursor: pointer;
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const CheckoutItems = styled.div`
  border-bottom: 1px solid #bebdbc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
  display: ${(props) => (props.visibility ? "block" : "none")};

  @media ${devices.mobileL} {
    display: block;
  }
`;

export const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;

  & p:first-child {
    display: ${(props) => (props.visibility ? "inline-block" : "none")};

    @media ${devices.mobileL} {
      display: inline-block;
    }
  }
`;
export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.visibility ? "column" : "row")};
  justify-content: space-between;
  padding: 0 5%;
  margin-top: 10%;
  width: 100%;
  border-top: 1px solid rgb(219, 219, 219);
  border-bottom: 1px solid rgb(219, 219, 219);
  background-color: #f6f6f6;

  @media ${devices.mobileL} {
    flex-direction: column;
    border: none;
    margin: none;
    p {
      padding: 0;
    }
  }
`;
