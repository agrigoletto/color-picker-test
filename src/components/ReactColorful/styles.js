import styled from 'styled-components';
import { HexColorInput } from "react-colorful";

export const Wrapper = styled.div`
  width: 640px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ColorInput = styled(HexColorInput)`
  width: 230px;
  height: 32px;
  border: 1px solid #D7D7D7;
  padding: 6px;
  color: #333333;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
`

export const Button = styled.button`
  border: none;
  background: none;
  text-decoration: underline;
  color: #EF6C00;
  cursor: pointer;
`;