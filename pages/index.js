import React from "react";
import { Box, Grid, Heading, Flex, Badge, Link, Text } from "@chakra-ui/core";
import Form from "../components/Form";
import Twemoji from "react-twemoji";
import Events from "../config";

export default function Main() {
  return (
    <>
      <Box
        p={["8vw", "5vw", "3vw"]}
        color="white"
        pt={["16vw", "10vw", "6vw"]}
        background={`linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),
                    url('https://workshops.hackclub.com/api/patterns/sam')`}
      >
        <Heading as="h3" fontSize={["5vw", "5vw", "2vw"]} color="white">
          Innovation Week 2021
        </Heading>
        <Heading as="h1" fontSize={["18vw", "12vw", "7vw"]} color="white">
          Schedule
        </Heading>
      </Box>
      <Grid
        p={["4vw", "2.5vw", "3vw"]}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {Events.map((country) => (
          <Box w="100%" borderRadius="4px">
            <Box
              p={["4vw", "2.5vw", "1.5vw"]}
              pb="2vw"
              borderRadius="4px"
              borderBottomLeftRadius="0px"
              borderBottomRightRadius="0px"
              background={`linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ),
            url('https://workshops.hackclub.com/api/patterns/kahoot')`}
              color="white"
            >
              <Flex>
                <Box width="85%">
                  <Heading fontSize="16px">Kahoot Hacker Style</Heading>
                  <Text pt={1} fontSize="12px">
                    <i>Auditorium, Monday Lunch</i>
                  </Text>
                </Box>
                <Box width="15%" textAlign="right" h="3">
                  <Twemoji options={{ className: "twemoji" }}>
                    <p>
                      🤖<span></span>
                    </p>
                  </Twemoji>
                </Box>
              </Flex>
            </Box>
            <Text
              p={["4vw", "2.5vw", "1.5vw"]}
              pt="0vw"
              border="1px solid black"
              fontSize="12px"
              borderRadius="4px"
              borderTopLeftRadius="0px"
              borderTopRightRadius="0px"
              pt={2}
            >
              The Innovation Challenge is your chance to tackle the critical
              issues that our world faces. In it, you form teams of three to
              identify an issue, ideate a solution and then pitch your idea. You
              can learn more about the information session on Monday Lunchtime
              in the Innovation Suite.
            </Text>
          </Box>
        ))}
      </Grid>
      <style>
        {`.twemoji{
              height: 42px;
          }`}
      </style>
    </>
  );
}
