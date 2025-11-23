import styled from "styled-components";
import MainNav from "./MainNav";
import Logo from "./Logo";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.div`
  background-color: var(--color-grey-0);
  border-right: 1px solid var(--color-grey-100);
  padding: 2rem;
  grid-row: 1 / -1;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;
