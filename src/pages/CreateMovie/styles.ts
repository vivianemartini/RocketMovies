import styled from 'styled-components'

export const Container = styled.section`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 24px 123px;

  .comeback {
    span {
      color: ${({ theme }) => theme.COLORS.RED};
      bottom: 4px;
      left: 5px;
      position: relative;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.RED};
      font-size: 16px;
    }
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-top: 24px;
  }

  .grade {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .tag-component {
    width: 100%;
    display: flex;
    padding: 16px;
    align-items: flex-start;
    gap: 24px;
    border-radius: 8px;
    background: #0d0c0f;
    margin-top: 24px;
  }

  .button-area {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 40px;

    margin-bottom: 40px;
  }
`
