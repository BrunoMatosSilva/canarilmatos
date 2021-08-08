import React from 'react'
import Link from 'next/link'
import { Container } from './styles'

export function Rodape() {
    return (
        <Container>
            <div>
                <p> Projeto desenvolvido por
                    <Link href="https://github.com/BrunoMatosSilva">
                        <a>BMSFrontEnd</a>
                    </Link>
                </p>
            </div>
        </Container>
    );
}