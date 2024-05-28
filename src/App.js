import { Text, Paper, Title, Grid, Box, Container, Image } from "@mantine/core";

import { useViewportSize } from "@mantine/hooks";

function App() {
  const { height } = useViewportSize();

  return (
    <>
      <Box maw="100%" mx="auto" bg="blue" h="800">
        <Box h={height * 0.25}></Box>
        <Title
          c="white"
          style={{ fontSize: "4em", textAlign: "center" }}
          order={1}
        >
          Do you own a property with a cave?
        </Title>
        <Text
          c="white"
          mt="xl"
          fw="600"
          size="xl"
          style={{ textAlign: "center" }}
        >
          I'd like to buy it from you!
        </Text>
      </Box>
      <Box id="explain" mt="xl">
        <Container>
          <Paper bg="blue.0" padding="lg" p="xl">
            <Grid>
              <Grid.Col span={6}>
                <Image radius="md" src="/mike-underwater.jpg" alt="Mike" />
              </Grid.Col>
              <Grid.Col span={6}>
                <Text size="lg">
                  Hello my name is Mike Heijmans and I'm in search of a property
                  with a cave! If you have a property with a cave and you'd like
                  to sell it, I'm interested in buying it from you! It has been
                  a dream of mine to own a property with a cave for a long time.
                  If you have a property with a cave and you're interested in
                  selling it, please reach out to me.
                </Text>
              </Grid.Col>
            </Grid>
          </Paper>
          <Text style={{ textAlign: "center" }} mt="xl">
            #iwantyourhole
          </Text>
        </Container>
      </Box>
    </>
  );
}

export default App;
