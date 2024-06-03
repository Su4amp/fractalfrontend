import { Image, UnstyledButton } from "@mantine/core";
import gameImage from "../../assets/game.png";
import Header from "../../components/Common/Header/Header";
import { FaWindows } from "react-icons/fa6";
import { FaLinux, FaApple } from "react-icons/fa";
import TrapezoidButton from "../../components/Common/Buttons/TrapezoidButton";
import Carousel from "../../components/Common/Carousel/Carousel/Carousel";

import rightArrowIcon from "../../assets/icons/rightArrowIcon.svg";
import leftArrowIcon from "../../assets/icons/leftArrowIcon.svg";

import triangles from "../../assets/images/triangles.png";

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
      <section className="bg-[#141414]">
        <h5 className="text-white text-4xl text-center py-7">
          Jogos em destaque
        </h5>
        <Carousel images={images} />
      </section>
      <section className="relative flex items-center justify-center bg-gradient-to-r from-black to-[#1C2765] h-[500px]">
        <Image
          src={triangles}
          alt="Triângulos"
          className="absolute top-0 right-0 w-60 lg:w-80"
          draggable={false}
        />
        <div className="flex flex-col gap-10">
          <h5 className="text-white text-5xl mb-10">Baixar launcher</h5>
          <div className="w-fit mx-auto flex flex-col gap-5 justify-center">
            <TrapezoidButton
              text="Windows"
              icon={<FaWindows size={32} />}
              style={{ width: "200px" }}
            />
            <TrapezoidButton
              text="macOS"
              icon={<FaApple size={32} />}
              style={{ width: "200px" }}
            />
            <TrapezoidButton
              text="Linux"
              icon={<FaLinux size={32} />}
              style={{ width: "200px" }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
