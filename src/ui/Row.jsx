import styled, { css } from "styled-components";

const Raw = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Raw.defaultProps = {
  type: "horizontal",
};

export default Raw;
