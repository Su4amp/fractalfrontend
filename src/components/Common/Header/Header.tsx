import { Burger, Center, Image, Menu } from "@mantine/core";
import { Link } from "react-router-dom";
import TrapezoidButton from "../Buttons/TrapezoidButton";
import { IconChevronDown } from "@tabler/icons-react";

import fractalLogo from "../../../assets/logo.svg";
import savedIcon from "../../../assets/icons/savedIcon.svg";
import cartIcon from "../../../assets/icons/cartIcon.svg";
import translateIcon from "../../../assets/icons/translateIcon.svg";
import userIcon from "../../../assets/icons/userIcon.svg";

import classes from "./Header.module.css";
import { useDisclosure } from "@mantine/hooks";
import IconButton from "./components/IconButton";

const headerLinks = [
  {
    link: "/frankestein",
    text: "Frankestein",
    dropdownLinks: [
      {
        link: "/sobre-o-evento",
        text: "Sobre o evento",
      },
      {
        link: "/participar",
        text: "Participar",
      },
      {
        link: "/historico",
        text: "Histórico",
      },
    ],
  },
  {
    link: "/produtos",
    text: "Produtos",
  },
  {
    link: "/forum",
    text: "Fórum",
  },
  {
    link: "/sobre-nos",
    text: "Sobre nós",
  },
];

const headerIcons = [savedIcon, cartIcon, translateIcon, userIcon];

export default function Header() {
  const [openedBurger, { toggle: toggleBurger }] = useDisclosure();

  return (
    <header className="h-[100px] w-full fixed top-0 bg-[rgba(0,0,0,.6)] z-50 backdrop-blur-md text-white px-8 py-2.5">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link to="/">
            <Image src={fractalLogo} alt="Logo Fractal Dynamics" />
          </Link>
          <ul className="lg:flex xl:gap-8 ml-20 hidden">
            {headerLinks.map((headerLink) => (
              <Menu
                key={headerLink.text}
                trigger="hover"
                transitionProps={{ exitDuration: 0 }}
                withinPortal
              >
                <Menu.Target>
                  <Link
                    to={headerLink.link}
                    className={`${classes.link} hover:brightness-150`}
                  >
                    <Center>
                      <span className={classes.linkLabel}>
                        {headerLink.text}
                      </span>
                      {headerLink.dropdownLinks &&
                      headerLink.dropdownLinks.length > 0 ? (
                        <IconChevronDown size={20} stroke={1.5} />
                      ) : null}
                    </Center>
                  </Link>
                </Menu.Target>
                {headerLink.dropdownLinks &&
                headerLink.dropdownLinks.length > 0 ? (
                  <Menu.Dropdown>
                    {headerLink.dropdownLinks?.map((dropdownLink) => (
                      <Menu.Item key={dropdownLink.link}>
                        {dropdownLink.text}
                      </Menu.Item>
                    ))}
                  </Menu.Dropdown>
                ) : null}
              </Menu>
            ))}
          </ul>
        </div>
        <div className="items-center gap-5 hidden lg:flex">
          <TrapezoidButton text="Baixar App" />
          {headerIcons.map((icon) => (
            <IconButton key={icon} icon={icon} />
          ))}
        </div>

        <div className="flex items-center lg:hidden">
          <Burger
            color="white"
            opened={openedBurger}
            onClick={toggleBurger}
            aria-label="Alternar navegação"
          />
        </div>
      </div>
    </header>
  );
}
