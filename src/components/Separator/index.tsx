import { Box } from "@chakra-ui/layout";

export function Separator() {
  return (
    <Box
      w={["60px", "90px"]}
      mx="auto"
      my={["9", "20"]}
      h="2px"
      bg="gray.700"
    />
  );
}