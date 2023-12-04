import styled from '@emotion/styled';
import { colors } from '../../utils';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: auto;
  padding: 24px 12px;
  background-color: ${colors.success};
`;

export const Subscription = styled.p`
  font-size: 20px;
  color: ${colors.white};
`;

export const Link = styled.a`
  color: inherit;
  &:hover,
  &:focus {
    color: ${colors.accentColor};
  }
`;
