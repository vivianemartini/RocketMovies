import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 144px;

    background: rgba(255, 133, 155, 0.05);

    display: flex;
    align-items: center;
    gap: 10px;

    padding: 0 124px;

    span {
      color: ${({ theme }) => theme.COLORS.RED};
      bottom: 7px;
      left: 10px;
      position: relative;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.RED};
      font-size: 24px;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.COLORS.RED};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
