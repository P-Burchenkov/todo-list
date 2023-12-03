import styled from '@emotion/styled';
import mq from 'utils/mediaQueries';
import { colors } from '../../utils';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0;
  height: 68px;
  ${mq.desktop} {
    height: 80px;
  }
  background-color: ${colors.accentColor};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mq.mobile} {
    width: 375px;
  }

  ${mq.tablet} {
    width: 768px;
  }

  ${mq.desktop} {
    width: 1440px;
  }
`;

export const Title = styled.h1`
  color: ${colors.white};
`;
