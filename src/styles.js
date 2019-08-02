import styled from '@emotion/styled';

export const FullWidthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const BoldTitle = styled.h1`
  display: flex;
  align-self: center;
  font-family: 'Raleway', sans-serif;
  font-size: 30px;
  font-weight: 800;
  color: #e88c61;
  padding: 0px 5px;
  margin-bottom: 0px;
  border-bottom: 2px solid #f8dccf;
`;

export const PrimaryText = styled.h3`
  font-family: 'Raleway', sans-serif;
  font-size: 26px;
  font-weight: 400;
  color: #278d7b;
  padding: 0px 15px;
`;

export const SecondaryText = styled.h5`
  font-family: 'Helvetica', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #278d7b;
  padding: 0px 15px;
`;

export const InputField = styled.input`
  width: 260px;
  height: 35px;
  padding: 12px 20px;
  margin: 8px 0 0 0;
  border: none;
  border-bottom: 1px solid #e88c61;
  border-radius: 3px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
  outline: none;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  background-color: #ebf9f7;
  color: #5f5f5f;
  :focus {
    width: 280px;
    background-color: #c3efe7;
    border-bottom: 2px solid #e88c61;
    border-radius: 5px;
    outline: none;
    color: #777777;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DropdownBox = styled.ul`
  display: flex;
  flex-direction: column;
  width: 290px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
  box-shadow: 5px 3px 3px #d0d5d7;
  text-align: center;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 5px 3px 3px #d0d5d7;
  padding-bottom: 25px;
`;

export const ListText = styled.h3`
  font-family: 'Helvetica', sans-serif;
  font-size: 18px;
  font-weight: 300;
  color: #8f8f8f;
  padding: 0px 15px;
`;
