import Prismic from '@prismicio/client'
import { getPrismicClient } from '../../../services/prismic';
import { RichText } from 'prismic-dom'
import { PostContainer } from '../../../styles/Posts/index';
import Head from 'next/head';
import { BsCalendar } from 'react-icons/bs'

export default function Post({ posts }) {
    return (
        <>
            <Head>
                <title>{posts.title} | Canaril Matos</title>
            </Head>
            <PostContainer>
                <article>
                    <h2>{posts.title}</h2>
                    <time><span><BsCalendar /></span>{posts.publicatAt}</time>
                    <div className="imgPost">
                        <img src={posts.image} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: posts.description }} />
                </article>
            </PostContainer>
        </>
    );
}


export const getServerSideProps = async ({ req, params }) => {
    const { slug } = params;
    const prismic = getPrismicClient(req);
    const response = await prismic.getByUID('posts', String(slug), {});

    const posts = {
        slug,
        title: response.data.title,
        publicatAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        }),
        description: RichText.asHtml(response.data.content),
        image: response.data.banner.url
    }

    return {
        props: {
            posts
        }
    }
}