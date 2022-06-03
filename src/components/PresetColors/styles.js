import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 640px;
  padding: 24px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  padding: 14px;
  width: 70px;
`

const emptyColorModifiers = {
  hasColors: () => css`
    margin-bottom: 16px;
  `
}

export const EmptyColor = styled.div`
  ${({ hasColors }) => css`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: 1px solid #D7D7D7;

    ${!!hasColors && emptyColorModifiers.hasColors()}
  `}
`;

export const Color = styled.button`
  ${({ color }) => css`
    background: ${color};
    width: 40px;
    height: 40px;
    border-radius: 20px;
    border: none;
    cursor: pointer;
  `}
`

export const Label = styled.span`
  text-transform: uppercase;
  color: #333333;
  text-align: center;
  font-size: 12px;
  line-height: 17px;
`;