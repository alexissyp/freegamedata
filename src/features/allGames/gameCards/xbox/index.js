import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Image,
  HStack,
  Badge,
  Container,
  Skeleton,
  Stack,
} from "@chakra-ui/react";
import { SiNintendoswitch, SiPlaystation4, SiXbox } from "react-icons/si";
import { RiComputerLine } from "react-icons/ri";
import { FaApple, FaSteam } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { getXBoxOneGames } from "../../../../context/platforms";
import { DefaultGames } from "../../../../constants";

const XBoxOne = () => {
  const [xboxGames, setXBoxOneGames] = useState(DefaultGames);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      getXBoxOneGames().then((response) => {
        setXBoxOneGames(response);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Stack>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      ) : (
        <Container maxW="90%" margin="0 auto" padding="18px" borderRadius="lg">
          <Flex flexWrap="wrap">
            {xboxGames.map((game) => {
              return (
                <Box
                  key={game.id}
                  maxH="100%"
                  maxW="200px"
                  minW="200px"
                  borderWidth="1px "
                  borderRadius="lg"
                  borderColor="rgba(30,30,30, 0.4)"
                  bg="rgba(110, 123, 186, 0.3)"
                  padding="12px"
                  margin="8px"
                  boxShadow="dark-lg"
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
        </Container>
      )}
    </>
  );
};

export default XBoxOne;
