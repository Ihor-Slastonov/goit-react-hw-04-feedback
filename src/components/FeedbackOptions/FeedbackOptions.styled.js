import styled from '@emotion/styled';

export const Options = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;
export const Option = styled.button`
  padding: ${p => p.theme.space[2]}px;
  width: 100px;
  height: 40px;

  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.03em;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.background};
  cursor: pointer;
  transition: background-color 250ms linear, border 250ms linear,
    color 250ms linear, box-shadow 250ms linear;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
    border: ${p => p.theme.borders.normal}${p => p.theme.colors.grey};
    color: ${p => p.theme.colors.secondary};
    box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.75);
  }
`;
