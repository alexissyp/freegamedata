import {
  Box,
  Image,
  Text,
  Grid,
  GridItem,
  Badge,
  Heading,
  Flex,
  HStack,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { SiNintendoswitch, SiPlaystation4, SiXbox } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { FaApple, FaSteam } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import GameDisplay from "../gameDisplay";
import React from "react";
import { useLocation } from "wouter";

const GameCards = ({ allGames, loading, gameTitle }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [, setLocation] = useLocation();

  if (gameTitle)
    return <GameDisplay allGames={allGames} gameTitle={gameTitle} />;

  return (
    <>
      {loading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        <Flex flexWrap="wrap">
          {allGames.map((game) => {
            return (
              <Box
                onClick={() => {
                  setLocation(`/games/${game.id}`);
                }}
                key={game.id}
                maxH="100%"
                maxW="200px"
                minW="200px"
                borderWidth="1px "
                borderRadius="lg"
                borderColor="rgba(30,30,30, 0.4)"
                bg="rgba(110, 123, 186)"
                padding="12px"
                margin="8px"
                boxShadow="dark-lg"
                transition="all 300ms ease-in-out"
                _hover={{
                  cursor: "pointer",
                  transform: "scale(1.2)",
                  background: "rgba(110, 103, 176)",
                }}
              >
                <Grid>
                  <GridItem maxW="100%" borderRadius="md">
                    <Image
                      borderRadius="md"
                      maxW="100%"
                      src={game.thumbnail}
                      alt={`${game.title}`}
                    />
                  </GridItem>
                  <GridItem>
                    <Heading as="h5" size="sm">
                      {game.title}
                    </Heading>
                  </GridItem>
                  <GridItem>
                    <Text>Worth: {game.worth}</Text>
                    <Text>End Date: {game.end_date}</Text>
                  </GridItem>
                  <GridItem>
                    <HStack>
                      Platforms:
                      {game.platforms.includes("PC") && <RiComputerLine />}
                      {game.platforms.includes("Switch") && (
                        <SiNintendoswitch />
                      )}
                      {game.platforms.includes("Playstation 4") && (
                        <SiPlaystation4 />
                      )}
                      {game.platforms.includes("Xbox One" || "Xbox 360") && (
                        <SiXbox />
                      )}
                      {game.platforms.includes("Steam") && <FaSteam />}
                      {game.platforms.includes("Android") && <DiAndroid />}
                      {game.platforms.includes("iOS") && <FaApple />}
                    </HStack>
                  </GridItem>
                  <GridItem>
                    {game.status === "Active" && (
                      <Badge variant="solid" colorScheme="green">
                        Active
                      </Badge>
                    )}
                    <Badge>{game.type}</Badge>
                  </GridItem>
                </Grid>
              </Box>
            );
          })}
        </Flex>
      )}
    </>
  );
};

export default GameCards;
