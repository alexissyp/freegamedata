import { Container, VStack } from "@chakra-ui/react";
import { getAllGames } from "../../context/api-dao";
import React, { useState, useEffect } from "react";
import { DefaultGames } from "../../constants";
import GameCards from "./gameCards";

const Home = () => {
  const [allGames, setAllGames] = useState(DefaultGames);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllGames().then((response) => {
      if (response !== Error) {
        setAllGames(response);
        setLoading(false);
      } else {
        console.log("error");
      }
    });
  }, [loading]);

  return (
    <VStack>
      <Container maxW="90%" margin="0 auto" padding="18px" borderRadius="lg">
        <GameCards allGames={allGames} loading={loading} />
      </Container>
    </VStack>
  );
};

export default Home;
