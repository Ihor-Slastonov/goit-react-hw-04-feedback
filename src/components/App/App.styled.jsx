import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 30px auto;
  padding: ${p => p.theme.space[3]}px;
  width: 600px;
  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.75);
`;
