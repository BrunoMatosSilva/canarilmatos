import React from 'react'
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client'
import Link from 'next/link';
import Head from "next/head";
import { Container } from '../../styles/Posts/index';


export default function Blog({ posts }) {
    return (
        <>
            <Head>
                <title>Blog | Canaril Matos</title>
            </Head>
            <Container>
                {posts.map(post => (
                    <Link href={`/posts/publication/${post.slug}`} key={post.slug}>
                        <a>
                            <section>
                                <div>
                                    <time>{post.publicatAt}</time>
                                    <h2>{post.title}</h2>
                                </div>
                                <p>{post.description}</p>
                            </section>
                        </a>
                    </Link>
                ))}
            </Container>
        </>
    )
}

export const getStaticProps = async () => {
    const prismic = getPrismicClient();

    const response = await prismic.query(
        [Prismic.Predicates.at('document.type', 'posts')
        ], {
        orderings: '[document.first_publication_date desc]'
    })

    const posts = response.results.map(post => {
        return {
            slug: post.uid,
            title: post.data.title,
            publicatAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
            description: post.data.content.find(content => content.type === 'paragraph')?.text ?? '',
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