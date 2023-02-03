import React from "react";
import { Header, MenuPrincipal, Principal, Title, Footer, GlobalStyle } from "./styled"
import CardVideo from "./Componentes/CardVideo";



export default function App() {
  const card1 = {
    titulo: "Título do vídeo",
    imagemDoVideo: "https://picsum.photos/400/400?a=1",
    textoAlternativo: "descrição da imagem"
  };

  return (
    <>
    <GlobalStyle/>
    <div>
      <div className="tela-inteira">
        <Header>
          <Title>LabeTube</Title>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Header>

        <Principal>
          <MenuPrincipal className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </MenuPrincipal>

          <section className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />
          </section>
        </Principal>

        <Footer>
          <h4>Oi! Eu moro no footer!</h4>
        </Footer>
      </div>
    </div>
    </>
  );
}
