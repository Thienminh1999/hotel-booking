import styled from "styled-components";

export const MenuItemComponent = styled.div`
  padding-inline: 10px;

  & h3:first-child {
    margin-block: 2rem;
  }
`;

export const FormControl = styled.div`
  display: grid;
  margin-block: 5px;

  & label {
    font-size: 0.9rem;
    font-weight: 100;
    margin-bottom: 0.4rem;
  }

  & input {
    padding: 10px 10px;
    border: none;
  }

  & .options-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 7px;

    & input {
      width: 20%;
      padding: 5px 5px;
    }
  }
`;
