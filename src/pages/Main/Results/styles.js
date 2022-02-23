import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;
  background-color: #bdc3c7;
  border-radius: 12px;

  a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 20px;
    @media (min-width: 320px) and (max-width: 480px) {
      padding: 10px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Cover = styled.img`
  height: 115px;
  margin-right: 15px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 90px;
    margin-right: 10px;
  }
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  .name {
    font-size: 18px;
    margin-bottom: 15px;
  }
  .discount {
    color: #7f8c8d;
    text-decoration: line-through;
  }
`;

export const ActionButton = styled.div`
  margin-left: 5px;
  padding: 0;

  .button {
    display: block;
    background-color: #2ecc71;
    border-radius: 5px;
    line-height: 0;
  }
`;