import styled from 'styled-components'

export const Container = styled.div`
  height: auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 24px 123px;

  .comeback {
    span {
      color: ${({ theme }) => theme.COLORS.ROSE};
      bottom: 4px;
      left: 5px;
      position: relative;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.ROSE};
      font-size: 16px;
    }
  }

  .movie-info {
    display: flex;
    align-items: center;
    gap: 19px;
    margin-top: 24px;

    h1 {
      font-size: 36px;
      font-weight: 500;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    .stars {
      > ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 10px;

        svg {
          color: ${({ theme }) => theme.COLORS.ROSE};
          fill: ${({ theme }) => theme.COLORS.ROSE};
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .data {
    height: 19px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 24px;

    .data-avatar {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .data-hour {
      display: flex;
      align-items: center;
      gap: 8px;

      svg {
        color: ${({ theme }) => theme.COLORS.ROSE};
        font-size: 16px;
      }

      span {
        font-size: 16px;
        line-height: normal;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }

  .tags {
    margin-top: 40px;
  }
  .movie-text {
    margin-top: 40px;

    p {
      font-size: 16px;
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 400;
    }
  }
`

export const Avatar = styled.div`
  img {
    border-radius: 35px;
    width: 16px;
    height: 16px;
    border: 1px solid #3e3b47;
  }
`
