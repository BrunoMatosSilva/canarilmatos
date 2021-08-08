import Head from "next/head";
import { useEffect, useState } from "react";
import { SRLWrapper } from 'simple-react-lightbox';

import { Content, StyleCriacao, MenuCriacao, options } from "../../styles/Galeria/index";

import images from '../../data'
import { HiFilter } from 'react-icons/hi'

export default function Galeria() {
    const [tag, setTag] = useState('todos');
    const [filteredImages, setFilteredImages] = useState([]);

    useEffect(
        () => {
            tag === 'todos' ? setFilteredImages(images) : setFilteredImages(images.filter((image) => image.tag === tag));
        },
        [tag],
    );

    return (
        <>
            <Head>
                <title>Galeria | Canaril Matos</title>
            </Head>
            <Content>
                <div className="title">
                    <h2>Nossa Criação!</h2>
                </div>
                <StyleCriacao>
                    <MenuCriacao>
                        <HiFilter /><TagButton name="todos" tagActive={tag === 'todos' ? true : false} handleSetTag={setTag} /> /
                        <TagButton name="pandovani" tagActive={tag === 'pandovani' ? true : false} handleSetTag={setTag} /> /
                        <TagButton name="frisado" tagActive={tag === 'frisado' ? true : false} handleSetTag={setTag} />
                    </MenuCriacao>
                    <SRLWrapper options={options}>
                        <div className="container">
                            {filteredImages.map((image) => (
                                <div key={image.id} className="image-card">
                                    <a href={`/images/${image.imageName}`}>
                                        <img className="image" src={`/images/${image.imageName}`} alt="" />
                                    </a>
                                </div>
                            ))}
                        </div>
                    </SRLWrapper>
                </StyleCriacao>
            </Content>
        </>
    );
}

const TagButton = ({ name, handleSetTag, tagActive }) => (
    <button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
        {name.toUpperCase()}
    </button>
);