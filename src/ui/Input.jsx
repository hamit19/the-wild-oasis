import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  background-color: var(--color-grey-0);
  color: var(--color-grey-900);
  border: 1px solid var(--color-grey-200);
  border-radius: 10px;
  padding: 1rem 1rem;
  transition: ease 0.1s all;
`;

export default function Input({ ...props }) {
  return <StyledInput {...props} />;
}
