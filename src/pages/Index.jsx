import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex align="center" justify="space-between" wrap="wrap" direction={{ base: "column", md: "row" }}>
        <VStack align="start" mb={{ base: 8, md: 0 }} spacing={4}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            TradeSmart
          </Heading>
            <Text fontSize="xl" color={useColorModeValue("colors.text", "colors.text")}>
            Learn from Neelansh Pandey, a veteran stock market trader, and embark on your journey to profitability.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
            Enroll Now
          </Button>
        </VStack>
        <Box>
          <Image borderRadius="full" boxSize="200px" src="https://images.unsplash.com/photo-1542223616-740d5dff7f56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80" alt="World of Financial Markets" />
        </Box>
      </Flex>
      <Flex mt={16} align="center" justify="center" direction="column">
        <Heading as="h2" size="xl" mb={4} fontWeight="bold">
          TradeSmart Beginner to Advanced Course
        </Heading>
        <Text fontSize="lg" mb={4} color={useColorModeValue("colors.text", "colors.text")}>
          Dive deep into the world of trading with our comprehensive course designed for all levels. Only for $100!
        </Text>
        <Button colorScheme="green" size="lg">
          Get Started
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
