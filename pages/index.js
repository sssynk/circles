import { MantineProvider, Button } from "@mantine/core";

function Index() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <Button>Test</Button>
    </MantineProvider>
  );
}

export default Index;
