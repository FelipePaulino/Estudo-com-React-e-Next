import Card from '../components/card'
import Header from '../components/header'
import styles from './e.module.css';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${(props) => props.a ? 'green' : 'blue'};
`;

let resposta;
const condicao = 'Cvc';
switch (condicao) {
  case 'Web Motors': resposta = 'Vinicius'
  break;
  case 'Finnet':resposta = 'Kaio'     
  break;
  case 'Ao3': resposta = 'Vitão ou Rogerinho'
  break;
  case 'Drogasil': resposta = 'Emanuel'
  break;
  case 'Kroton': resposta = 'Poly e Italo'
  break;
  case 'Cvc': resposta = 'Caio'
  break;  
  default:
    resposta = 'Esta empresa não faz parte da FPR'
}

console.log(resposta, 'resposta')

export default function Home() {
  return (
      <div>
        <Title a={true}>Estudando React</Title>
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
  )
}
