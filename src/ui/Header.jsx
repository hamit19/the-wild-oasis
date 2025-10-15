import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  border-bottom: 1px solid var(--color-grey-100);
  padding: 2rem;
`;

function Header() {
  return (
    <StyledHeader>
      <p>Header</p>
    </StyledHeader>
  );
}

export default Header;
