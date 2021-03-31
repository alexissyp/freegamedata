import {
  Box,
  Container,
  Image,
  Text,
  Grid,
  GridItem,
  Badge,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { getAllGames } from "../../context/api-dao";
import React, { useState, useEffect } from "react";
import { DefaultGames } from "../../constants";
import { SiNintendoswitch, SiPlaystation4, SiXbox } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { FaSteam } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const Home = () => {
  const [allGames, setAllGames] = useState(DefaultGames);

  useEffect(() => {
    getAllGames().then((response) => {
      if (response !== Error) {
        setAllGames(response);
      } else {
        console.log("error");
      }
    });
  }, []);

  return (
    <Container
      maxW="90%"
      margin="0 auto"
      padding="18px"
      borderRadius="lg"
      bg="rgba(53, 55, 71, 0.7)"
    >
      <Flex flexWrap="wrap">
        {allGames.map((game) => {
          return (
            <Box
              key={game.id}
              maxH="380px"
              h="380px"
              minW="200px"
              maxW="240px"
              borderWidth="1px "
              borderRadius="lg"
              overflow="hidden"
              borderColor="rgba(110, 123, 186, 0.9)"
              bg="rgba(110, 123, 186, 0.6)"
              padding="4"
              margin="4px auto"
            >
              <Grid templateRows="repeat(5, 0.6fr)">
                <GridItem>
                  <Heading as="h5" size="sm">
                    {game.title}
                  </Heading>
                </GridItem>
                <GridItem borderWidth="3px" borderColor="rgba(110, 123, 186)">
                  <Image src={game.thumbnail} alt={`${game.title}`} />
                </GridItem>
                <GridItem>
                  <Text>Worth: {game.worth}</Text>
                  <Text>End Date: {game.end_date}</Text>
                </GridItem>
                <GridItem>
                  <Text>{game.status}</Text>
                  Platforms:
                  {game.platforms === "PC" && <RiComputerLine />}
                  {game.platforms === "Switch" && <SiNintendoswitch />}
                </GridItem>
                <GridItem>
                  <Badge>{game.type}</Badge>
                </GridItem>
              </Grid>
            </Box>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Home;
