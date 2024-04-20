import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 123px;

  .heading {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      font-size: 32px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    button {
      position: relative;
      bottom: 8px;
    }
  }
`
