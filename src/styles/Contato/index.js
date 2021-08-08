import styled from 'styled-components'

export const Bg = styled.main`
    background: var(--bg-brown);
    height: calc(100vh - 52px);

    @media only screen and (max-width: 1024px) {
        height: 100%;
}
`;

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;

width: 100%;
max-width: 1120px;
margin: 0 auto;
padding-top: 10rem;

    @media only screen and (max-width: 425px) {
        flex-direction: column;
    }

    @media only screen and (min-width:426px) and (max-width: 768px) {
        flex-direction: column;
    }

h2 {
    font-size: 2.5rem;
    padding-bottom: 2rem;
    color: var(--text-body);
    text-shadow: 0px 2px 5px rgba(0,0,0,0.54);

    @media only screen and (max-width: 425px) {
    text-align: center;
    padding: 0 1rem 0 1rem;
}
}
`;

export const Content = styled.div`
margin: 0 auto;
border-radius: 5px;
padding-top: 1.5rem;

display: flex;
flex-direction: row;
align-items: center;
margin-bottom: 4rem;

@media only screen and (max-width: 425px) {
    flex-direction: column;
}

@media only screen and (min-width:426px) and (max-width: 768px) {
    flex-direction: column;
}

div {
    background: var(--bg-green);
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0,0,0,0.54);

    @media only screen and (max-width: 425px) {
        max-width: 100%;
        }

    form {
        width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        padding: 3rem;

        @media only screen and (max-width: 425px) {
        max-width: 300px;
        }

        input {
            border: none;
            line-height: 2.5rem;
            margin-bottom: 1rem;
            border-radius: 5px;

            ::placeholder {
            padding-left: 1rem;
            }
        }

        textarea {
            resize: none;
            height: 10rem;
            border: none;
            margin-bottom: 1rem;
            border-radius: 5px;

            ::placeholder {
            padding: 1rem;
            }
        }

        .btnSubmit {
            width: 150px;
            background-color: var(--button);
            font-weight: 700;
            font-size: 1rem;
            transition: all 0.2s;
            margin-bottom: 2rem;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
}

section {
    padding-left: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (max-width: 425px) {
        width: 300px;
        padding: 2rem;
        }

        @media only screen and (min-width:426px) and (max-width: 768px) {
        padding-top: 2rem;
    }

    img {
        align-items: center;
        width: 250px
    }

    p {
        font-size: 1.2rem;
        text-align: justify;
        line-height: 1.5rem;
        padding-top: 1rem;

        @media only screen and (max-width: 420px) {
        display: none;
        }
    }

    h3 {
        font-size: 1.2rem;
        color: var(--text-body);
        padding-top: 1rem;

        span {
            vertical-align: middle;
            color: var(--text-brown);
        }

        .email {
        text-decoration: underline;
    }
    }

    

    strong {
        color: var(--text-brown);
        font-size: 1.2rem;
    }
}
`;
