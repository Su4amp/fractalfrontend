import { Drawer, Text, Title, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconCategory } from "@tabler/icons-react";

export default function Sidebar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const categories = [
    "Todos",
    "FPS",
    "RPG",
    "Ação",
    "Aventura",
    "Sobrevivência",
    "Corrida",
    "Esportes",
    "Puzzle",
    "Estatrégia",
    "Simulação",
    "Soulslike",
    "Terror",
  ];

  const categoriesList = categories.map((category) => (
    <Text key={category} className="cursor-pointer hover:underline mb-1">
      {category}
    </Text>
  ));

  return (
    <>
      <div className="relative pt-[120px] md:pt-0">
        <aside className="hidden md:block bg-[#141414] px-8 pt-[120px] h-full">
          <Title order={2}>Categorias</Title>
          <div className="flex flex-col mt-2">{categoriesList}</div>
        </aside>
        <UnstyledButton className="md:hidden ml-4" onClick={toggleDrawer}>
          <IconCategory size={32} />
        </UnstyledButton>
      </div>

      <Drawer
        position="left"
        opened={drawerOpened}
        onClose={closeDrawer}
        size="65%"
        padding="md"
        title={
          <Title order={2} className="mb-4">
            Categorias
          </Title>
        }
        zIndex={1000000}
      >
        {categoriesList}
      </Drawer>
    </>
  );
}
