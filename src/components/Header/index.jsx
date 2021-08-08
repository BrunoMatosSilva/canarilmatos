import React from 'react'
import { useState } from 'react';
import Link from 'next/link'
import { CgMenu, CgClose } from 'react-icons/cg'
import { Container, ListMenu, StyledBurger } from './styles'
import { useRouter } from 'next/dist/client/router';


export function Header() {
    const { asPath } = useRouter();

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <Container>
            <div>
                <Link href="/">
                    <a>
                        <img src="/logo.svg" alt="logo_canario_matos" />
                    </a>
                </Link>
                <div className="navMobile">
                </div>
                <StyledBurger onClick={handleClick} >
                    {click ? <CgClose /> : <CgMenu />}
                </StyledBurger>

                <ListMenu onClick={handleClick} click={click}>
                    <li>
                        <Link href="/" spy smooth offset={-80} duration={500} onClick={handleClick}>
                            < a className={asPath === '/' ? "active" : ''}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sobre" spy smooth offset={-80} duration={500} onClick={handleClick}>
                            <a className={asPath === '/sobre' ? "active" : ''}>Sobre</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/posts" spy smooth offset={-80} duration={500} onClick={handleClick} prefetch>
                            <a className={asPath === '/posts' ? "active" : ''}>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/galeria" spy smooth offset={-80} duration={500} onClick={handleClick}>
                            <a className={asPath === '/galeria' ? "active" : ''}>Galeria</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato" spy smooth offset={-80} duration={500} onClick={handleClick}>
                            <a className={asPath === '/contato' ? "active" : ''}>Contato</a>
                        </Link>
                    </li>
                </ListMenu>
            </div>
        </Container>
    );
}