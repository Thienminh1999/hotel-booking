import styled from "styled-components";

export const FormControl = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;

  & input {
    border: none;
    margin-left: 10px;
    width: max-content;

    &[type="number"] {
      width: 70px;
      box-sizing: border-box;
    }

    &[type="number"]::-webkit-inner-spin-button,
    &[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      margin: 0;
    }
  }

  & i {
    color: lightgray;
  }

  & input:focus {
    outline: none;
  }
`;
