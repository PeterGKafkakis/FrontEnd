import styled from "styled-components";

export const Text = styled.p`
  color: white;
  text-align: center;
  & p::before {
    display: inline;
    content: "dd";
  }
`;

export const Background = styled.div`
  background-color: #0e101c;
  overflow: auto;
  height: 100%;
`;
