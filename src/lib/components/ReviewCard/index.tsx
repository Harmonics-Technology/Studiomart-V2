import { Box, Flex, Heading, Text, Stack } from '@chakra-ui/react';
import Image from 'next/image';

import CustomText from '../Text';

interface ReviewCardProps {
  name: string;
  company: string;
  review: string;
  date: string;
}

const index: React.FC<ReviewCardProps> = ({ name, company, review, date }) => {
  return (
    <Box bg="#FCF8FB" w="540px" h="340px" borderRadius="40px" p="8">
      <Stack spacing={5}>
        <Box>
          <Flex gap={3} alignItems="center">
            <Box>
              <Image
                alt="Adelowo Ajibola, CEO HT"
                src="/assets/ceo.png"
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
                objectFit="contain"
              />
            </Box>
            <Box>
              <Heading fontSize={15} mb="1" fontWeight={700}>
                {name}
              </Heading>
              <Text color="#0C090A" fontSize={14.5} fontWeight={400}>
                {company}
              </Text>
            </Box>
          </Flex>
        </Box>

        <Box>
          <CustomText text={review} />
        </Box>

        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Image
              src="/assets/Stars.svg"
              alt="rating stars"
              width={126}
              height={22}
            />
            <Text fontSize={14} color="#AFAFAF">
              {date}
            </Text>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default index;
