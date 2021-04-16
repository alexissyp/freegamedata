import {
  Box,
  Button,
  Container,
  Image,
  Text,
  Stack,
  Heading,
  Skeleton,
  Link,
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
        <Container maxW="100%" centerContent>
          <Box padding="4" maxW="3xl">
            <Stack direction={["column", "row"]} spacing="24px">
              <Image borderRadius="5%" src={game.thumbnail} alt={game.title} />
              <Heading>{game.title}</Heading>
            </Stack>

            <Text>{game.description}</Text>
            <Button>
              <Link href={game.open_giveaway_url}>CLAIM</Link>
            </Button>
            <Box marginTop="24px">
              <Heading as="h4" size="md">
                Instructions
              </Heading>
              <Text>{game.instructions}</Text>
            </Box>
          </Box>
        </Container>
      )}
    </>
  );
};

export default GameDisplay;
