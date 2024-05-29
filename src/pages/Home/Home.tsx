import { Image, UnstyledButton } from "@mantine/core";
import gameImage from "../../assets/game.png";
import Header from "../../components/Common/Header/Header";

import rightArrowIcon from "../../assets/icons/rightArrowIcon.svg";
import leftArrowIcon from "../../assets/icons/leftArrowIcon.svg";
import Carousel from "../../components/Common/Carousel/Carousel/Carousel";

import gameImageTest from "../../assets/images/highlightedGame.png";
import rubensBarichello from "../../assets/images/rubensBarrichello.jpg";
import serjaoFoguetes from "../../assets/images/serjaoFoguetes.jpeg";
import oqTuQuer from "../../assets/images/oqTuQuer.jpg";
import confia from "../../assets/images/confia.jpg";

const images = [
  gameImageTest,
  rubensBarichello,
  serjaoFoguetes,
  oqTuQuer,
  confia,
];

export default function Home() {
  return (
    <main>
      <div className="relative">
        <Header />
        <Image
          src={gameImage}
          alt="Imagem do jogo"
          className="h-[calc(100vh)] w-screen brightness-50"
        />
        <UnstyledButton className="absolute w-12 right-3 lg:right-9 top-1/2">
          <Image src={rightArrowIcon} />
        </UnstyledButton>
        <UnstyledButton className="absolute w-12 left-3 lg:left-9 top-1/2">
          <Image src={leftArrowIcon} />
        </UnstyledButton>
      </div>
      <section className="bg-[#141414] h-[500px]">
        <h5 className="text-white text-4xl text-center py-7">
          Jogos em destaque
        </h5>
        <Carousel images={images} />
      </section>
    </main>
  );
}
