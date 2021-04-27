import { Box, Heading, Text, Link } from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box textAlign="center">
        <Heading marginTop="24px" as="h1" size="4xl">
          Free Games Claim
        </Heading>
        <Heading marginTop="24px" as="h6" size="xs">
          API from GamerPower API at https://www.gamerpower.com/api-read
        </Heading>
        <Text>
          This web page is created solely for learning purposes. Please support
          the API developer at{" "}
          <Link href="https://www.gamerpower.com/">GAMERPOWER</Link>.
        </Text>
      </Box>
    </>
  );
};

export default Home;
