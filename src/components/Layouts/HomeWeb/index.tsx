/* eslint-disable react/no-unescaped-entities */
import { Box, Image, Text } from "@chakra-ui/react";

const HomeWeb = () => {
  return (
    <>
      <Box h="100vh" bg="primary.300">
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Box>
            <Text color="primary.100">I' am Marcelo</Text>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Image
              h="250px"
              w="450px"
              borderRadius="8px"
              objectFit="cover"
              src="./img/criatividade.webp"
              alt="Dan Abramov"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HomeWeb;
