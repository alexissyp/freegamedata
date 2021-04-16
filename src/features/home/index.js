import { Container, Box, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Container centerContent={true}>
        <Box textAlign="center">
          <Heading marginTop="24px" as="h1" size="4xl" isTruncated>
            Claim Free Games
          </Heading>
          <Heading marginTop="24px" as="h6" size="xs">
            API from GamerPower API at https://www.gamerpower.com/api-read
          </Heading>
        </Box>
      </Container>
    </>
  );
};

export default Home;
