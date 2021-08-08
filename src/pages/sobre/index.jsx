import Head from "next/head";
import React from "react";
import { Content, Container, Bg } from "./styles";

export default function Sobre() {
    return (
        <>
            <Head>
                <title>Sobre | Canaril Matos</title>
            </Head>
            <Bg>
                <Content>
                    <h2>Conheça sobre nós e nossa equipe!</h2>
                    <Container>
                        <img src="/images/canario01.jpeg" />
                        <div>
                            <h3>Sobre nós</h3>

                            <p>Somos um grupo de amantes da criação de pássaros, principalmente a <strong>canaricultura</strong> (canários).</p>

                            <p>Criadores profissionais apaixonados por canários e queremos compartilhar um pouco deste mundo com vocês.</p>

                            <p>Temos o objetivo de conscientizar as pessoas de que as aves domésticas possuem um importante papel na preservação das aves silvestres,
                                e a exemplo da <strong>FOB – Federação Ornitológica do Brasil</strong>, também entendemos que a criação de aves domésticas e exóticas <strong>(permitida por Leis nacionais)</strong>, é uma forma de luta contra o <strong>comércio ilegal</strong> e o <strong>tráfico</strong> de aves silvestres originárias da fauna brasileira.</p>

                            <p>Além da preservação das espécies, queremos facilitar o acesso a informação, e que todos os criadores do Brasil consigam divulgar
                                e orientar sobre essa atividade.</p>

                            <p>Defendemos a criação de forma <strong>profissional</strong>.</p>

                            <p>Acima de tudo, criar canários é um gesto de amor pela natureza.</p>
                        </div>

                    </Container>
                </Content>
            </Bg>
        </>
    );
}