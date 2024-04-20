import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .movie-box {
    display: flex;
    margin-top: 15px;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 16px;
    background-color: rgba(255, 133, 155, 0.05);
    padding: 32px;
    gap: 12px;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 24px;
      font-style: normal;
    }

    .stars {
      display: flex;
      gap: 5px;
      color: ${({ theme }) => theme.COLORS.RED};
    }

    p {
      width: 100%;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* Número de linhas a serem exibidas */
      -webkit-box-orient: vertical;
      max-height: 48px; /* Altura máxima permitida para duas linhas */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: normal;

      color: ${({ theme }) => theme.COLORS.GRAY_500};

      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`
