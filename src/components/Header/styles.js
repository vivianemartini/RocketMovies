import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    justify-content: space-between;

    padding: 0 80px;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;

    h1 {
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.ROSE};
    }

`

export const Profile = styled.div`
    display: flex;
    align-items: center;

    > img {
        width: 56px;
        height: 56px;

        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-right: 16px;
        line-height: 16px;

        
        strong {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }

        span {
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
`