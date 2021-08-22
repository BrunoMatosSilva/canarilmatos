import Head from "next/head";
import React from "react";
import { getPrismicClient } from "../services/prismic";
import { Container, ContainerImg } from "../styles/styles";
import Prismic from '@prismicio/client'
import { Cards } from "../components/Cards";
import Link from "next/link";


export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Home | Canaril Matos</title>
      </Head>
      <Container>
        <section>
          <h2>🌳 Criar, também é proteger!</h2>
          <p>O seu <strong>canário</strong> faz parte da mudança da <strong>natureza</strong> e cuidar com amor
            e com carinho ajuda a <strong>desenvolver</strong> essa espécie.</p>

          <Link href="/sobre"><button type="button">Conheça-nos!</button></Link>
        </section>

        <ContainerImg>
          <img src="/img_green.svg" alt="arvores e natureza" />
        </ContainerImg>
      </Container>

      <Cards posts={posts} />
    </>
  );
}

export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'posts')
    ], {
    pageSize: 4,
    orderings: '[document.first_publication_date desc]'
  })

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: post.data.title,
      publicatAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }),
      description: post.data.description.find(content => content.type === 'paragraph')?.text ?? '',
      image: post.data.banner.url
    }
  })

  return {
    props: {
      posts
    },
    revalidate: 180,
  }
}
