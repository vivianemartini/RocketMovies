import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: #0d0c0f;
  color: ${({ theme }) => theme.COLORS.RED};

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.3;
  }
`
