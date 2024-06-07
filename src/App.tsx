import { MantineProvider } from "@mantine/core";
import AppRoutes from "./routes/route";

import "@mantine/core/styles.css";
import "./index.scss";

function App() {
  return (
    <MantineProvider defaultColorScheme="dark" forceColorScheme="dark">
      <AppRoutes />
    </MantineProvider>
  );
}

export default App;
