import styled from 'styled-components'

export const Content = styled.div`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding-top: 8.5rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

.title {
    padding-left: 2rem;

    h2 {
        font-size: 2.5rem;
        padding-bottom: 2rem;
        color: var(--text-body);
        text-align: left;
        text-shadow: 0px 2px 5px rgba(0,0,0,0.54);
    }
}

.tag {
	outline: none;
	border: none;
	color: #000;
	margin: 0px 10px;
	background-color: transparent;
	cursor: pointer;

    a {
        transition: all 0.2s;
    }

    &:hover {
        color: var(--text-brown);
    }
}

.tag.active {
	font-weight: bold;
	border-bottom: 1px solid var(--text-brown);
}

.active {
    font-weight: bold;
    padding-bottom: 1.7rem;
	border-bottom: 3px solid var(--text-brown);
}

.container {
	width: 80%;
    margin: auto;
    padding-bottom: 2rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
    gap: 10px;
}

@media only screen and (max-width: 600px) {
    .container {
        width: 80%;
        height: 100%;
        grid-template-columns: repeat(1, 1fr);
    }
}

.image-card {
    height: auto;
	margin: 5px;
    
    a {
        transition: all 0.2s;
    }

    &:hover {
        transform: translateY(-.25rem) ;
        filter: brightness(0.6);
    }

    img{
        border-radius: 5px;
    }
}

@media only screen and (max-width: 600px) {
        .image-card {
            height: auto;
        }
    }


.image {
	width: 100%;
}
`;

export const options = {
    settings: {
        overlayColor: '#333',
        autoplaySpeed: 2500,
        transitionSpeed: 1200,
    },
    buttons: {
        backgroundColor: '#333',
        iconColor: '#9DCDC0',
    },
    caption: {
        captionColor: '#a6cfa5',
        captionFontFamily: 'Raleway, sans-serif',
        captionFontWeight: '300',
        captionTextTransform: 'uppercase',
    },
    progressBar: {
        height: '20px',
        fillColor: '#9DCDC0',
        backgroundColor: '#333',
    },
};

export const StyleCriacao = styled.section`
  background-color: var(--bg-green);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  @media screen and (max-width: 600px){
      height: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1024px) {
          height: 100vh;
  }

  .container {
    max-width: 1120px;
    margin: 0 auto;
  }
  `;

export const MenuCriacao = styled.div`
  padding: 20px 0px;
  text-align: center;
  `;