import styled from "styled-components";

import { PageContainer } from "../../styles/Global";
import { devices } from "../../styles/Breakpoints";

export const DirectoryContainer = styled(PageContainer)`
  margin: 5%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  overflow: hidden;
  border-radius: 0.5rem;

  @media ${devices.mobileL} {
  border-radius: 2rem;
  gap: 1em;
  }
`;
