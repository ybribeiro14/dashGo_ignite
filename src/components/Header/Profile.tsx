import {
  Flex, Box, Avatar, Text,
} from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Yago Bravim</Text>
          <Text color="gray.300" fontSize="small">ybribeiro14@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Yago Bravim" src="" />
    </Flex>
  );
}
