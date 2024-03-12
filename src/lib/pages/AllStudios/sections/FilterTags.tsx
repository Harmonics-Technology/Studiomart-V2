'use client';

import { Box, Flex, Icon, Text } from '@chakra-ui/react';

import {
  RainbowIcon,
  MusicIcon,
  PhotoIcon,
  PodcastIcon,
  StarIcon,
  ResetIcon,
} from '~/lib/components/Icons/TagIcons';
import type { FilterTagsItemProps } from '~/lib/utilities/Context/schemas';

const FilterTagsItem: React.FC<FilterTagsItemProps> = ({ label, icon }) => {
  return (
    <Box
      padding="10px"
      borderRadius="100px"
      color="#2D2327"
      fontWeight={500}
      border="1px solid #D6E7FF"
    >
      <Flex alignItems="center" gap={2}>
        <Icon as={icon} color="#2D2327" />
        <Text>{label}</Text>
      </Flex>
    </Box>
  );
};
const FilterTags = () => {
  const tags = [
    { label: 'Art', icon: RainbowIcon },
    { label: 'Makeup', icon: RainbowIcon },
    { label: 'Photography', icon: PhotoIcon },
    { label: 'Music', icon: MusicIcon },
    { label: 'Podcast', icon: PodcastIcon },
    { label: '5 Stars', icon: StarIcon },
    { label: '4 Stars', icon: StarIcon },
    { label: 'Reset', icon: ResetIcon },
  ];
  return (
    <Box>
      <Flex alignItems="center" justifyContent="space-between">
        {tags.map((item) => (
          <FilterTagsItem label={item.label} icon={item.icon} />
        ))}
      </Flex>
    </Box>
  );
};

export default FilterTags;
