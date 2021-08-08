import Head from "next/head";
import React from "react";
import emailjs from "emailjs-com";
import { Container, Bg, Content } from "../../styles/Contato/index";
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'

export default function Contato() {

    function enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_uwn5lfv', 'template_sgggpqn', e.target, 'user_tTc5NSIrueLG1FVVpwuUG')
            .then((result) => {
                alert('Mensagem Enviada')
            }, (error) => {
                alert(error.message);
            });
        e.target.reset();
    }

    return (
        <>
            <Head>
                <title>Contato | Canaril Matos</title>
            </Head>
            <Bg>
                <Container>
                    <h2>Entre em contato conosco.</h2>

                    <Content>
                        <div>
                            <form onSubmit={enviarEmail}>
                                <input type="text" name="name" id="name" placeholder="Nome" required />

                                <input type="email" name="email" id="email" placeholder="E-mail" required />

                                <input type="text" name="subject" id="subject" placeholder="Titulo" required />

                                <textarea name="message" id="message" placeholder="Escreva sua mensagem." required />

                                <input type="submit" className="btnSubmit" id="button" value="Enviar" />

                            </form>
                        </div>
                        <section>
                            <img src="/mail.svg" alt="email_ilustração" />
                            <p>Espero que tenha gostado do nosso projeto com os canários belga.</p>
                            <p>Caso queira entrar em contato, esses são os meios aonde podemos ser encontrados.</p>

                            <h3><span><AiOutlineMail /></span>E-mail <span className="email">cmcanaril@gmail.com</span></h3>


                            <h3><span><AiOutlinePhone /></span>Whatsapp <strong>(11) 98811-9001</strong></h3>

                        </section>
                    </Content>
                </Container>
            </Bg>
        </>
    );
}