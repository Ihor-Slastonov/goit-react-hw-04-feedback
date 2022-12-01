import styled from '@emotion/styled';

export const Label = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Stats = styled.ul`
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Item = styled.li`
  padding: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.background};
  :nth-of-type(even) {
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const LabelText = styled.span`
  font-size: ${p => p.theme.fontSizes.ml};
`;
