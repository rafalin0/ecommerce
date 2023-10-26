import styled from "styled-components";

import {
  PiHeartStraightFill as HeartFill,
  PiHeartStraight as HeartOutline,
} from "react-icons/pi";

export const LikedIcon = styled(HeartFill)`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  fill: #ff8181;

  &:hover {
    fill: #ff8181;
    fill-opacity: 0.8;
  }
`;

export const NotLikedIcon = styled(HeartOutline)`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  color: #ff8181;
`;
