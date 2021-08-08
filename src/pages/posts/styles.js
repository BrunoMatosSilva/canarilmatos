import styled from 'styled-components'

export const Container = styled.main`
max-width: 1120px;
margin: 0 auto;
padding-top: 8.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

a { 
    display: block;

& + a {
        margin-top: 0.5rem;
        padding-top: 2rem;
        border-top: 1px solid var(--bg-write);
    }

section {
    margin: 0rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    transition: all 0.2s;

    &:hover {
            filter: brightness(0.6);
        }

    time {
        font-size: 1rem;
    }

    h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
        margin-top: 0.8rem;
    }

    p {
        font-size: 1rem;
        margin-bottom: 2.5rem;
        line-height: 1.625rem;
    }

    }

}
`;

export const PostContainer = styled.main`
max-width: 1120px;
margin: 0 auto;
padding-top: 8.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between; 

article {
    margin: 0rem 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    transition: all 0.2s;

    h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        margin-top: 0.8rem;
    }

    time {
        font-size: 1rem;
        margin-bottom: 1rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid;

        span {
            vertical-align: middle;
            padding-right: 0.75rem;
        }
    }
 
.imgPost {

    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        max-height: 600px;
        max-width: 600px;
        padding-top: 1rem;
        padding-bottom: 2rem;

        @media only screen and (max-width: 425px) {
            max-width: 300px;
        }
    }

}
    p {
        font-size: 1rem;
        margin-bottom: 1.5rem;
        line-height: 1.625rem;
        text-align: justify;
    }

    iframe {
        margin: 0 auto;
        display: block;
        box-align: center;
        height: 400px;
        width: 600px;
        padding-bottom: 1rem ;

        @media only screen and (max-width: 425px) {
            max-width: 300px;
        }
    }

    }
`;