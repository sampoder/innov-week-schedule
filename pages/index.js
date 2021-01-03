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
        <Heading as="h3" fontSize={["5vw", "3vw", "2vw"]} color="white">
          Innovation Week 2021
        </Heading>
        <Heading as="h1" fontSize={["18vw", "12vw", "7vw"]} color="white">
          Schedule
        </Heading>
      </Box>
      <Grid
        p={["4vw", "2.5vw", "3vw"]}
        gridTemplateRows={["0fr", "1fr", "1fr"]}
        templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}
        gap={6}
      >
        {Events.map((event) => (
          <Box w="100%" borderRadius="6px" border="0.5px solid #00053E">
            <Box
              p={["4vw", "2.5vw", "1.5vw"]}
              pb="2vw"
              borderRadius="4px"
              borderBottomLeftRadius="0px"
              borderBottomRightRadius="0px"
              background="#00053E"
              color="white"
            >
              <Flex>
                <Box width="85%">
                  <Heading fontSize="18px">{event.name}</Heading>
                  <Text pt={1} fontSize="14px">
                    <i>
                      {event.location}, {event.time}
                    </i>
                  </Text>
                </Box>
                <Box
                  width="15%"
                  textAlign="right"
                  h="3"
                  p={["7px", "0", "10px"]}
                  pt={"0px!important"}
                >
                  <Twemoji options={{ className: "twemoji" }}>
                    <p>
                      {event.emoji}
                      <span></span>
                    </p>
                  </Twemoji>
                </Box>
              </Flex>
            </Box>
            <Text
              p={["4vw", "2.5vw", "1.5vw"]}
              pt="0vw"
              fontSize="14px"
              borderRadius="4px"
              borderTopLeftRadius="0px"
              borderTopRightRadius="0px"
              pt={2}
            >
              {event.description}
              {event.signup ? (
                <>
                  <br />
                  <br />{" "}
                  <a style={{ color: "blue" }} href={event.signup}>
                    {" "}
                    Sign up in advance to reserve your place!{" "}
                  </a>
                </>
              ) : (
                ""
              )}
            </Text>
          </Box>
        ))}
      </Grid>
      <style>
        {`.twemoji{
              width: 100%;
          }`}
      </style>
    </>
  );
}
