import { Hero } from "./components/Hero";
import { Navigation } from "./components/Navigation";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box, Link, Stack, Text, Icon } from "@chakra-ui/react";
import { EmailIcon, InfoIcon, PhoneIcon } from "@chakra-ui/icons";

function App() {
  return (
    <div className="w-full h-full bg-background xs:px-20  xs:py-10 px-5 py-10 flex flex-col xs:gap-5 gap-3 text-foreground">
      <Navigation />
      <main>
        <Grid
          h="100%"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={4}
          // bg={"tomato"}
        >
          <Hero row={1} col={4} />
          <GridItem
            rowSpan={2}
            colSpan={2}
            bg="green.400"
            className="rounded-xl w-full h-full bg-primary border-2 border-foreground-light xs:py-10 xs:px-20 p-7"
          ></GridItem>
          <GridItem
            rowSpan={1}
            colSpan={2}
            bg="tomato"
            className="rounded-xl w-full h-full bg-primary border-2 border-foreground-light xs:py-10 xs:px-20 p-7"
          ></GridItem>
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="teal.400"
            className="rounded-xl w-full h-full bg-primary border-2 border-foreground-light xs:py-10 xs:px-20 p-7"
          ></GridItem>
          <GridItem
            rowSpan={1}
            colSpan={1}
            bg="purple.300"
            className="rounded-xl w-full h-full bg-primary border-2 border-foreground-light xs:py-10 xs:px-20 p-7"
          ></GridItem>
        </Grid>
      </main>
      <footer>
        <Box
          as="footer"
          role="contentinfo"
          mx="auto"
          maxW="7xl"
          py="12"
          px={{ base: "4", md: "8" }}
        >
          <Stack>
            <Stack
              direction="row"
              spacing="4"
              align="center"
              justify="space-between"
            >
              <Text>© 2023 John Andrei. All rights reserved.</Text>
              <Stack direction="row" spacing="4">
                <Link href="#" isExternal>
                  <Icon as={EmailIcon} boxSize="5" />
                </Link>
                <Link href="#" isExternal>
                  <Icon as={InfoIcon} boxSize="5" />
                </Link>
                <Link href="#" isExternal>
                  <Icon as={PhoneIcon} boxSize="5" />
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </footer>
    </div>
  );
}
export default App;
