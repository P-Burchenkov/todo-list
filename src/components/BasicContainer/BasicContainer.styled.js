import styled from '@emotion/styled';
import mq from 'utils/mediaQueries';

export const Container = styled.ul`
  margin: 0 auto;
  padding: 24px 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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
