import { Image, UnstyledButton } from "@mantine/core";
import gameImage from "../../assets/game.png";
import Header from "../../components/Common/Header/Header";

import rightArrowIcon from "../../assets/icons/rightArrowIcon.svg";
import leftArrowIcon from "../../assets/icons/leftArrowIcon.svg";

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
    </main>
  );
}
