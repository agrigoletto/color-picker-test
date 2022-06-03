import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    height: 100vh;
    padding: 12px;
`;


export const SelectedColor = styled.div`
  ${({ color }) => css`
    border-left: 24px solid ${color};
    padding-left: 10px;
    margin-top: 20px;
  `}
`
