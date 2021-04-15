import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  HStack,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { getGame } from "context/api-dao";
import React, { useEffect, useState } from "react";
import { DefaultGame } from "../../../constants";

const GameDisplay = ({ allGames, gameTitle }) => {
  const [game, setGame] = useState(DefaultGame);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      getGame({ id: gameTitle }).then((response) => {
        setGame(response);
        setLoading(false);
      });
    }
  }, [gameTitle, loading]);

  return (
    <>
      {loading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        <Box>
          <HStack>
            <Image src={game.thumbnail} alt={game.title} />
            <VStack justify="flex-start">
              <Heading>{game.title}</Heading>
            </VStack>
          </HStack>
          <Text>{game.description}</Text>
          <div>{game.open_giveaway_url}</div>
          <div>{game.instructions}</div>
          <div></div>
        </Box>
      )}
    </>
  );
};

export default GameDisplay;
