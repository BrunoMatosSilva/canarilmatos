import styled from 'styled-components'

export const Bg = styled.main`
    background: var(--bg-brown);
    height: calc(100vh - 52px);

    @media only screen and (max-width: 1024px) {
        height: 100%;
    }

    @media only screen and (min-width:426px) and (max-width: 768px) {
        height: calc(100vh - 45px);
    }
`;

export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;

max-width: 1120px;
margin: 0 auto;
padding-top: 8.9rem;

h2 {
    font-size: 2.5rem;
    padding-bottom: 2rem;
    color: var(--text-body);
    text-shadow: 0px 2px 5px rgba(0,0,0,0.54);

    @media only screen and (max-width: 425px) {
        font-size: 2rem;
        text-align: center;
    }
}
`;

export const Container = styled.div`
max-width: 1120px;
margin: 0 auto;
background: var(--bg-write);
border-radius: 5px;

display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 4rem;

    @media only screen and (max-width: 425px) {
        flex-direction: column;
        margin: 0 1rem;
        margin-bottom: 2rem
    }

    @media only screen and (min-width:426px) and (max-width: 768px) {
        flex-direction: column;
        margin: 2rem;
    }

img {
    height: 600px;
    width: 100%;

    border-radius: 5px 0 0 5px;
    
    @media only screen and (max-width: 425px) {
        height: 400px;
        border-radius: 5px 5px 0 0;
    }

    @media only screen and (min-width:426px) and (max-width: 768px) {
        display: none;
    }
}

div {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    @media only screen and (min-width:426px) and (max-width: 768px) {
        max-height: 450px;
        padding-bottom: 4rem;
    }

    h3 {
        font-size: 2rem;
        padding-bottom: 2rem;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.54);
    }

    p {
        padding-bottom: 1rem;
        text-align: justify;
    }
}
`;