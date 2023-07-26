import styled from "styled-components";

export const ConverterWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 300px 1px rgba(51, 128, 191, 0.3);
  padding: 20px;
  text-align: center;
  width: 300px;
  height: fit-content;
  margin: 0 auto;
  align-items: center;

  h1 {
    color: #333;
    margin-top: 0;
  }

  p {
    margin: 10px 0;
    color: #666;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input {
    -moz-appearance: textfield;
    max-width: 190px;
    background-color: #f5f5f5;
    color: #242424;
    padding: 0.15rem 0.5rem;
    min-height: 40px;
    border-radius: 4px;
    outline: none;
    border: none;
    line-height: 1.15;
    box-shadow: 0px 10px 20px -18px;
  }

  input:focus {
    border-bottom: 2px solid #5b5fc7;
    border-radius: 4px 4px 2px 2px;
  }

  input:hover {
    outline: 1px solid lightgrey;
  }

  button {
    margin-top: 20px;
    color: #ecf0f1;
    font-size: 17px;
    background-color: #e67e22;
    border: 1px solid #f39c12;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 6px 0px #d35400;
    transition: all 0.1s;
    width: 100px;
    cursor: pointer;
  }

  button:active {
    box-shadow: 0px 2px 0px #d35400;
    position: relative;
    top: 2px;
  }
`;
