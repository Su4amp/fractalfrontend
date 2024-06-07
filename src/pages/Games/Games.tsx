import { Select, TextInput, Title } from "@mantine/core";
import { IconCaretDownFilled, IconSearch } from "@tabler/icons-react";
import Header from "../../components/Common/Header/Header";
import Sidebar from "./components/Sidebar";

export default function Games() {
  return (
    <main className="bg-[#272727] text-white">
      <Header />
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <section className="px-6 mt-4 md:pt-[120px]">
          <TextInput
            placeholder="Procurar"
            size="lg"
            rightSection={
              <div className="mr-5">
                <IconSearch size={20} />
              </div>
            }
          />

          <div className="flex flex-col sm:flex-row gap-2.5 mt-5 justify-between">
            <Title order={1}>Simulação</Title>
            <Select
              placeholder="Filtro"
              size="lg"
              data={["A-Z", "Preço", "Popularidade", "Data"]}
              rightSection={<IconCaretDownFilled size={20} />}
            />
          </div>

          <div className="flex justify-center gap-8 my-8 flex-wrap">
            {Array.from({ length: 9 }).map((_, idx) => (
              <div
                key={idx}
                className="w-[300px] rounded bg-[#D9D9D9] h-[450px]"
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
