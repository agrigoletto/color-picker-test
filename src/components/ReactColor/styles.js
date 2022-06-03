import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const SaturationWrapper = styled.div`
  width: 170px;
  height: 170px;
  clip-path: circle();
  position: relative;
  overflow: hidden;
`;

export const HueWrapper = styled.div`
  width: 30px;
  height: 186px;
  position: relative;
`;

export const HuePicker = styled.div`
  width: 30px;
  height: 9px;
  background: rgba(255,255,255,0.2);
  border: 1px solid white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

export const SaturationPicker = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background: rgba(255,255,255,0.2);
  border: 1px solid white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
`;

export const Button = styled.button`
  height: 24px;
  cursor: pointer;
  text-decoration: underline;
  height: 40px;
  background: none;
  color: #EF6C00;
  font-size: 14px;
  border: none;
`