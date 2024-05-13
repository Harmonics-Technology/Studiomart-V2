import { Box, Heading, Flex, Stack, Text, Icon, Image } from '@chakra-ui/react';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

import QuoteIcon from '~/lib/components/Icons/Quote';
import Wrapper from '~/lib/components/Wrapper';

const Partners = () => {
  return (
    <Box>
      <Wrapper>
        <Box bg="scheme.300" w="100%" borderRadius="40px" p="10">
          <Stack spacing={7}>
            <Heading fontSize={40} fontWeight={900} color="#0C090A">
              Our Partners
            </Heading>
            <QuoteIcon color="white" width="54" height="40" />
            <Text color="#0C090A" lineHeight="26px">
              StudioMart has revolutionized the way we connect with our
              audience. Their user-friendly interface and extensive network have
              significantly expanded our reach, bringing our creative endeavors
              to a wider audience. Their innovative platform and dedicated
              support have truly transformed our creative journey.
            </Text>
            <Text color="#0C090A" lineHeight="26px">
              Partnering with StudioMart has elevated our studio experience to
              new heights. StudioMart is not just a platform; it's a
              game-changer for anyone passionate about exploring creativity.
            </Text>
            <Box>
              <Flex alignItems="center" justifyContent="space-between">
                <Box>
                  <Flex gap={3} alignItems="center">
                    <Image
                      alt="Adelowo Ajibola, CEO HT"
                      src="/assets/ceo.png"
                      width="60px"
                      height="60px"
                      style={{ borderRadius: '50%' }}
                      objectFit="contain"
                    />
                    <Box>
                      <Heading fontSize={16} mb="1">
                        Adelowo Ajibola
                      </Heading>
                      <Text>Co-Founder, HT.</Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex alignItems="center" gap={2} color="scheme.100">
                    <Icon as={IoChevronBackCircleOutline} fontSize={25} />
                    <Icon as={IoChevronForwardCircleOutline} fontSize={25} />
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Wrapper>
    </Box>
  );
};

export default Partners;
