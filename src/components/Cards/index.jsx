import Link from "next/link";
import { Container, Grid, CardContainer } from "./styles";
import { HiArrowRight } from 'react-icons/hi'

export function Cards({ posts }) {
    return (
        <>
            <Container>
                <h2>Publicações</h2>
                <Link href="/posts"><a>Ver Todos</a></Link>
            </Container>
            <Grid>
                {posts.map(post => (
                    <Link href={`/posts/publication/${post.slug}`} key={post.slug}>
                        <a>
                            <CardContainer>
                                <section>
                                    <img src={post.image} />
                                    <div>
                                        <h3>{post.title}</h3>
                                        <span>{post.publicatAt}</span>
                                    </div>
                                    <div className="contentCard">
                                        <p>{post.description}</p>

                                        <div className="rodapeCard">
                                            <strong>Contineu lendo </strong><span><HiArrowRight /></span>
                                        </div>
                                    </div>
                                </section>
                            </CardContainer>
                        </a>
                    </Link>
                ))}
            </Grid>
        </>
    );
}