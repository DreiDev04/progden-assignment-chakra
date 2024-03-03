import { Button, GridItem, ButtonGroup, Badge, Avatar } from "@chakra-ui/react";

type HeroProps = {
  row: number;
  col: number;
};

export function Hero({ row, col }: HeroProps) {
  return (
    <GridItem
      rowSpan={row}
      colSpan={col}
      className="rounded-xl w-full h-full bg-primary border-2 border-foreground-light xs:py-10 xs:px-20 p-7"
    >
      <div className="xs:flex mb-5">
        <h2
          className="text-xl font-medium self-start text-foreground-defused"
          style={{
            flexGrow: 1,
          }}
        >
          Front End Developer
        </h2>
        <Badge variant={"outline"} colorScheme="green" className="self-start">
          ⦾ Available for Job
        </Badge>
      </div>

      <div className="xs:flex flex-row-reverse justify-between xs:mt-10 ">
        <>
          <Avatar name="John Andrei" src="../../public/1by1.png" size={"2xl"} />
        </>
        <div className="gap-5 flex flex-col">
          <h1 className="text-2xl font-semibold self-start text-foreground">
            Hello, I'm John Andrei
          </h1>
          <p className="text-foreground-defused self-start max-w-xs">
            I'm a Front End Developer with a passion for web design. I'm
            currently looking for a job in the tech industry.
          </p>
          <ButtonGroup className="self-start">
            <Button
              colorScheme="blue"
              variant="solid"
              size={"sm"}
              className="self-start"
            >
              Download CV
            </Button>
            <Button colorScheme="blue" variant={"outline"} size={"sm"}>
              Email me
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </GridItem>
  );
}
