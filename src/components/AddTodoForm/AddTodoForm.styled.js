import styled from '@emotion/styled';
import mq from 'utils/mediaQueries';

export const Form = styled.form`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${mq.tablet} {
    min-width: 440px;
  }
  ${mq.desktop} {
    padding: 60px 32px;
    min-width: 520px;
    gap: 24px;
  }
`;
