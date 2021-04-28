import Card from '../components/card'
import Header from '../components/header'
import styles from './e.module.css';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.a ? 'green' : 'blue'};
`;


export default function Home() {

  const b = true
  return (
    <>
      <div>
        {b ? (
          <Title a={true}>My First Next.js Page</Title>
        ) : (<p>outro</p>)}

        <Header
          img="https://montinkantigo.s3.amazonaws.com/data/camisas/tropa-de-exploracao-5de59aba401f5-estampa-301.png"
          title="Aula de Props com React"
          link="Share"
          link2="Lern More"
          link3="Lern More"
        />
        <div className={styles.flex}>
          <Card
            img="https://img.olhardigital.com.br/wp-content/uploads/2021/03/attack-on-titan-1280x450.jpeg"
            title="Aula 1"
            description="Exemplo de um cartão usando uma imagem para reforçar o conteúdo."
            link="Share"
            link2="Lern More"
            isImage={true}
          />
          <Card
            img="https://img.olhardigital.com.br/wp-content/uploads/2021/03/attack-on-titan-1280x450.jpeg"
            title="Aula 2"
            description="Exemplo de um cartão usando uma imagem para reforçar o conteúdo."
            link="Share"
            link3="Ver mais"
            isImage={true}
          />
        </div>
      </div>
    </>
  )
}
