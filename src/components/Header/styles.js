import styled from "styled-components";

export const Container = styled.nav`
z-index: 999;
position: fixed;
top: 0;
width: 100%;
background: var(--bg-write);
border-bottom: 1px solid;
border-color: var(--text-brown);
    
        div {
        max-width: 1120px;
        margin: 0 auto;

        padding: 1rem 1rem 1rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

            a {
                display: inline-block;
                text-decoration: none;
                padding: 0 0.5rem;
                color: var(--text-brown);
                cursor: pointer;

                transition: all 0.2s;

                & + a {
                    margin-left: 2rem;
                }

                &:hover {
                    font-weight: 700;
                }

                &.active {
                    font-weight: 700;
                    color: var(--text-body);
                    border-bottom: 1px solid var(--button);
                }

        }
    }

`;

export const ListMenu = styled.ul`
    display: flex;
    flex-wrap: row;
    list-style: none;
    padding-left: 1rem;
    padding-bottom: 3rem;
    height: 1rem; 
    
        @media screen and (max-width: 960px) {
            padding-top: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: var(--bg-write);
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 80px;
            right: ${({ click }) => (click ? 0 : '-100%')};
            opacity: 1;
            transition: all 0.5s ease-in-out;

            li {
                font-size: 1.5rem;
            }
        }

    li {
        padding: 1rem;
    }
`;

export const StyledBurger = styled.section`
display: none;
padding: 0;

    @media screen and (max-width: 768px) {
        z-index: 20;
        display: block;
        font-size: 2.5rem;
        color: var(--text-brown);
        cursor:pointer;
    }
`;