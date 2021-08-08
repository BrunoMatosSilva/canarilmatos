import styled from 'styled-components'


export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    margin-top: 4rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (min-width:426px) and (max-width: 768px) {
        margin-left: 5rem;
        margin-right: 5rem;
        padding-bottom: 2rem;
    }

    h2 {
        color: var(--text-body);

        @media only screen and (max-width: 475px) {
            margin: 0 auto;
            font-size: 2rem;
            padding-bottom: 1rem;
        }
    }

    a { 
        color: var(--text-brown);
        font-weight: 700;
        transition: all 0.2s;

        @media only screen and (max-width: 425px) {
            display: none;
        }

        &:hover {
            filter: brightness(0.8);
        }
    }
   
`;

export const CardContainer = styled.div`
    border-radius: 5px;
    overflow: hidden;
    background-color: var(--bg-write);

    section {
    border-top: 0;
    height: 350px;
    
    img {
    height: 170px;
    width: 100%;
    padding-bottom: 0.75rem;
    }

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;

    h3 {
        font-size: 0.95rem;
        color: var(--text-body);

        @media screen and (max-width: 425px) {
            padding-top: 2rem;
        }
    }

    span {
        font-size: 0.75rem;
    }

}
 .contentCard {
     display: flex;
     flex-direction: column;
     height:5rem;
    p {
        text-align: justify;
        margin: 0.75rem;
        font-size: 0.9rem;
        line-height: 14px;
    }
}
    span {
        font-weight: 700;
        color: var(--text-brown);
        margin-left: 0.75rem;
    }

    .rodapeCard {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        vertical-align: middle;
    strong {
        font-weight: 700;
        color: var(--text-brown);
        padding-right: 1rem;
        align-items: center;
        vertical-align: middle;
        
    }

    span {
        font-size: 1.2rem;
        align-items: baseline;
    }
}
    }
`;



export const Grid = styled.div`
    display: grid;
    margin: 0 auto;
    max-width: 1120px;
    margin-top: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;

    grid-template-columns: repeat(4, 1fr);
    gap: 35px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 375px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 0 3rem;
    }

    @media only screen and (min-width: 376px) and (max-width: 425px) {
        grid-template-columns: repeat(1, 1fr);
        margin: 0 5rem;
    }

    @media only screen and (min-width:426px) and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 0 6rem;
    }

    a {
        color: var(--text-body);
        transition: all 0.2s;

        &:hover {
            transform: translateY(-.25rem) ;
            box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.54);
        }
    }
`;