import styled from "styled-components";

import hospitalBackground from "../../assets/images/hospital-background.svg";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  background: #fff;
  height: 100%;

  .logoImage {
    margin: 6em 11.5em 0 11.5em;
  }

  .flex {
    display: flex;
    padding: 3.5em;
    margin: 0 8em;
    margin-top: 3em;
    align-items: center;
    justify-content: space-between;

    .info {
      font-weight: 400;
      font-size: 48px;
    }
  }
`;

export const Form = styled.form`
  background: #F8F8F8;
  border-top: 1em #EBEBEB solid;
  padding: 2.5em;
  width: 450px;
  margin-bottom: -26em;
  position: relative;

  p {
    font-weight: 400;
    font-size: 24px !important;
    margin: auto;
  }

  .inputs {
    margin-top: 3em;
  }

  .divisor {
    display: block;
    margin-top: 1.5em;
  }

  .btn {
    padding-top: 2.5em;
  }
`;

export const Image = styled.div`
  background: #fff url(${hospitalBackground}) no-repeat center;
  background-size: cover;
  height: 100%;
`;
