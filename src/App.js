import {
  Text,
  Paper,
  Title,
  Grid,
  Box,
  Container,
  Image,
  Group,
  Button,
  Anchor,
} from "@mantine/core";

import {
  IconMail,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";

function App() {
  const { height, width } = useViewportSize();

  return (
    <>
      <Box
        maw="100%"
        mx="auto"
        style={{
          background:
            "linear-gradient(45deg, rgba(0,96,196,1) 0%, rgba(0,185,255,1) 100%)",
        }}
        h={width < 950 ? 500 : 800}
      >
        <Box h={width < 950 ? 100 : height * 0.25}></Box>
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
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Image radius="md" src="/mike-underwater.jpg" alt="Mike" />
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Text size="lg">
                  Hello my name is Mike Heijmans and I'm in search of a property
                  with a cave! If you have a property with a cave and you'd like
                  to sell it, I'm interested in buying it from you! It has been
                  a dream of mine to own a property with a cave for a long time.
                  If you have a property with a cave and you're interested in
                  selling it, please reach out to me.
                </Text>
                <Group mt="xl" justify="center" grow>
                  <Anchor href="mailto:parabuzzle@gmail.com?subject=I have a cave for you!">
                    <Button
                      fullWidth
                      color="pink"
                      variant="filled"
                      leftSection={<IconMail />}
                    >
                      Email me
                    </Button>
                  </Anchor>
                  <Anchor
                    href="https://instagram.com/parabuzzle"
                    target="_blank"
                  >
                    <Button
                      fullWidth
                      color="pink"
                      variant="filled"
                      leftSection={<IconBrandInstagram />}
                    >
                      Instagram
                    </Button>
                  </Anchor>
                  <Anchor
                    href="https://facebook.com/parabuzzle"
                    target="_blank"
                  >
                    <Button
                      fullWidth
                      color="pink"
                      variant="filled"
                      leftSection={<IconBrandFacebook />}
                    >
                      Facebook
                    </Button>
                  </Anchor>
                </Group>
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
