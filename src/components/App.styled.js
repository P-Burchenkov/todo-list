import styled from '@emotion/styled';
import mq from 'utils/mediaQueries';

export const Container = styled.div`
  margin: 0 auto;
  padding: 24px 12px;
  display: flex;
  flex-wrap: wrap;
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

export const Main = styled.main`
  min-height: 70vh;
`;
