import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Form = styled.div`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .sub-title {
    display: flex;
    align-items: center;
    gap: 5px;

    > svg {
     font-size: 20px;
    }
  }

  > h2 {
    font-size: 24px;
    margin: 48px 0;
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > a {
    margin-top: 42px;
    margin-left: 70px;
    color: ${({ theme }) => theme.COLORS.RED};

    svg {
      color: ${({ theme }) => theme.COLORS.RED};
      width: 16px;
      height: 16px;
      margin-right: 8px;
      margin-bottom: -2px;
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;

  background-size: cover;
`
