import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 1em;
  ${"" /* margin-left: 6em; */}
  ${"" /* margin-right: 6em; */}
`;

function Header() {
  return (
    <Wrapper>
      <h4>Logo</h4>
      <h4>User Name</h4>
    </Wrapper>
  );
}

export default Header;
