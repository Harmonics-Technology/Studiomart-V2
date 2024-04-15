import { Box, Stack, Heading, Text, Flex, Image } from '@chakra-ui/react';

import ButtonComponent from '~/lib/components/Button/Button';
import Wrapper from '~/lib/components/Wrapper';
import type { ListItemProps } from '~/lib/utilities/Context/schemas';

const ListItem: React.FC<ListItemProps> = ({ index, title, text }) => {
  return (
    <Box>
      <Flex alignItems="center" gap={4}>
        <Box
          w="30px"
          h="30px"
          borderRadius="50%"
          bg="#2D2327"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {index + 1}.
        </Box>
        <Text>
          <b>{title}</b> {text}
        </Text>
      </Flex>
    </Box>
  );
};

const SecondSection = () => {
  const features = [
    {
      title: 'Feature Your Space.',
      text: 'Grab the spotlight by creating a stunning studio profile.',
    },
    {
      title: 'Offer Unique Experiences.',
      text: 'Go beyond renting your studio.',
    },
    {
      title: 'Exclusive Deals and Package.',
      text: 'Attract more customers with irresistible offers.',
    },
  ];
  return (
    <Box as="section" bg="#D6E7FF" py="10">
      <Wrapper>
        <Flex alignItems="center" justifyContent="space-between">
          <Box w="40%">
            <Image
              src="/assets/feature-section-image.png"
              width={481}
              height={530}
              alt="image illustrations"
            />
          </Box>
          <Box w="50%">
            <Stack spacing={7}>
              <Heading fontSize={40} fontWeight={900}>
                Become a Vendor
              </Heading>
              <Text>
                Ready to promote your studio's presence? Becoming a vendor on
                StudioMart is your ticket to a world of opportunities! Showcase
                your studio in three exciting ways:
              </Text>
              <Box>
                <Stack spacing={4}>
                  {features.map((item, index) => (
                    <ListItem
                      key={index}
                      index={index}
                      title={item.title}
                      text={item.text}
                    />
                  ))}
                </Stack>
              </Box>
              <ButtonComponent
                text="Get Started"
                color="white"
                width="150px"
                bg="brand.100"
                onClick={() => {}}
              />
            </Stack>
          </Box>
        </Flex>
      </Wrapper>
    </Box>
  );
};
export default SecondSection;
