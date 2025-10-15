import styled from "styled-components";

const StyledSidebar = styled.div`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 2rem;
  grid-row: 1 / -1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <p>Sidebar</p>
    </StyledSidebar>
  );
}

export default Sidebar;
