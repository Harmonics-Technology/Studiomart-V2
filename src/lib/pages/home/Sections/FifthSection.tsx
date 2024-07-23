import { Box, Heading, Flex, Stack, Text, Icon, Image } from '@chakra-ui/react';
import { useState } from 'react';
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from 'react-icons/io5';

import QuoteIcon from '~/lib/components/Icons/Quote';
import Wrapper from '~/lib/components/Wrapper';

const FifthSection = () => {
  const [currentPartner, setCurrentPartner] = useState<number>(0);

  const partners = [
    {
      speech: `StudioMart has revolutionized the way we connect with our audience. Their user-friendly interface and extensive network have significantly expanded our reach, bringing our creative endeavors to a wider audience. Their innovative platform and dedicated support have truly transformed our creative journey.`,
      name: 'Adelowo Ajibola',
      position: 'Founder, HT.',
      avatar: '/assets/face.png',
    },
    {
      speech: `Partnering with StudioMart has elevated our studio experience to new heights. StudioMart is not just a platform; it's a game-changer for anyone passionate about exploring creativity.`,
      name: 'Samuel Isiah',
      position: 'Co-Founder, HT.',
      avatar: '/assets/ceo.png',
    },
    {
      speech: `StudioMart has revolutionized the way we connect with our audience. Their user-friendly interface and extensive network have significantly expanded our reach, bringing our creative endeavors to a wider audience. Their innovative platform and dedicated support have truly transformed our creative things.`,
      name: 'Kubrah Alawiye',
      position: 'Lead Designer, HT.',
      avatar: '/assets/studio-girl2.png',
    },
  ];

  const nextPartner = () => {
    if (currentPartner === partners.length - 1) {
      setCurrentPartner(0);
    } else {
      setCurrentPartner(currentPartner + 1);
    }
  };

  const prevPartner = () => {
    if (currentPartner === 0) {
      setCurrentPartner(partners.length - 1);
    } else {
      setCurrentPartner(currentPartner - 1);
    }
  };

  return (
    <Box>
      <Wrapper>
        <Box bg="#D6E7FF" w="100%" borderRadius="40px" p="10">
          <Stack spacing={7}>
            <Heading fontSize={[32, 40]} fontWeight={900} color="#0C090A">
              Our Partners
            </Heading>
            <QuoteIcon color="white" width="54" height="40" />
            <Text color="#0C090A" lineHeight="26px">
              {partners[currentPartner].speech}
            </Text>
            <Box>
              <Flex
                alignItems="center"
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Box mb="5">
                  <Flex gap={3} alignItems="center">
                    <Image
                      alt={partners[currentPartner].name}
                      src="/assets/ceo.png"
                      width="60px"
                      height="60px"
                      style={{ borderRadius: '50%' }}
                      objectFit="contain"
                    />
                    <Box>
                      <Heading fontSize={16} mb="1">
                        {partners[currentPartner].name}
                      </Heading>
                      <Text>{partners[currentPartner].position}</Text>
                    </Box>
                  </Flex>
                </Box>
                <Box>
                  <Flex
                    justifyContent={['center', 'flex-start']}
                    alignItems="center"
                    gap={2}
                  >
                    <Icon
                      as={IoChevronBackCircleOutline}
                      fontSize={25}
                      color="#1570FA"
                      onClick={prevPartner}
                    />
                    <Icon
                      as={IoChevronForwardCircleOutline}
                      fontSize={25}
                      color="#1570FA"
                      onClick={nextPartner}
                    />
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

export default FifthSection;
