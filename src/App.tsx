import { MantineProvider } from "@mantine/core";
import AppRoutes from "./routes/route";

import "@mantine/core/styles.css";
import "./index.scss";

function App() {
  return (
    <MantineProvider defaultColorScheme="light" forceColorScheme="light">
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;
