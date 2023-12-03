import styled from '@emotion/styled';
import { colors } from '../../utils';

export const CardContainer = styled.li`
  display: flex;
  padding: 12px 36px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${colors.accentColor};
  border-radius: 4px;
`;

export const Text = styled.p`
  text-decoration: ${({ isCompleted }) =>
    isCompleted ? 'line-through' : 'none'};
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 220px;
`;
