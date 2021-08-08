import styled from 'styled-components'

export const Container = styled.main`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding-top: 8.5rem;

display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 425px) {
    flex-direction: column;
}

section {
    margin: 0 2rem 0 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        font-size: 2.2rem;
        margin-bottom: 2.5rem;

        @media only screen and (max-width: 425px) {
            text-align: center;
        }
    }

    p {
        font-size: 1.5rem;
        margin-bottom: 2.5rem;

        @media only screen and (max-width: 425px) {
            text-align: justify;
        }
        
    }

    button {
        width: 240px;
        height: 60px;
        margin: 0 auto;
        font-size: 1.5rem;
        font-weight: 700;
        background-color: var(--button);
        border-radius: 5px;
        border: 0;
        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9)
    }

    }

    
}
`;

export const ContainerImg = styled.div`
        
        margin: 0 2rem 0 2rem;

        img {
            max-height: 450px;

            @media only screen and (max-width: 425px) {
                display: none;
            }

            @media only screen and (min-width:426px) and (max-width: 768px) {
                max-height: 350px;
                padding-left: 1rem;
            }
        }
`;