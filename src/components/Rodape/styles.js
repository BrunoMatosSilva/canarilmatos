import styled from "styled-components";

export const Container = styled.div`
background: var(--bg-write);
border-top: 1px solid;
border-color: var(--text-brown);
    
        div {
        max-width: 1120px;
        margin: 0 auto;

        padding: 1rem 1rem 1rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
            
        p {
            font-weight: 500;
        }

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
                
            

        }
    }

`;