import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  RangeSlider,
  Stack,
  RangeSliderTrack,
  RangeSliderThumb,
  RangeSliderFilledTrack,
  FormLabel,
  Checkbox,
} from '@chakra-ui/react';
import React from 'react';

import ButtonComponent from '../Button/Button';
import CloseIcon from '../Icons/CloseIcon';
import { GoldenStarIcon } from '../Icons/StarIcon';
import { useLoaderProgress } from '~/lib/utilities/Hooks/progress-bar';
import useQueryParams from '~/lib/utilities/Hooks/useQueryParams';
import { ServiceTypeView } from '~/services';

const CustomFilter = ({
  onClick,
  categories,
}: {
  onClick: () => void;
  categories: ServiceTypeView[];
}) => {
  //   const categories = ['all', 'music', 'make up', 'photo', 'video'];
  const distances = [
    'less than 15 minutes',
    '15 minutes',
    '30 minutes',
    '45 minutes',
    '1 hour',
    'above 1 hour',
  ];
  const ratings = [5, 4, 3, 2, 1];
  const [activeDistance, setActiveDistance] = React.useState<string>('');
  const [selectedCategory, setSelectedCategory] = React.useState<string>();
  //   const [selectedDistance, setSelectedDistance] = React.useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = React.useState<any[]>([
    0, 0,
  ]);
  const [selectedRating, setSelectedRating] = React.useState<number>();
  const { setQueryParams } = useQueryParams();
  const showLoaderProgress = useLoaderProgress();

  //   const closeModal = (event: any) => {
  //     event.stopPropagation();
  //     onClick();
  //   }

  const handleApplyFilter = () => {
    onClick();
    setQueryParams({
      category: selectedCategory,
      //   distance: selectedDistance,
      minPrice: selectedPriceRange[0],
      maxPrice: selectedPriceRange[1],
      rating: selectedRating,
    });
  };

  const handleClearFilter = () => {
    onClick();
    setQueryParams({
      category: undefined,
      //   distance: selectedDistance,
      minPrice: undefined,
      maxPrice: undefined,
      rating: undefined,
    });
  };

  return (
    <Box
      as="div"
      w="100%"
      h="100%"
      backgroundColor="rgba(255,255,255,0.3)"
      backdropFilter="blur(10px) saturate(180%)"
      px="10"
      py="5"
      position="fixed"
      zIndex="99"
      top="0"
      left="0"
      display="flex"
      justifyContent="flex-end"
      alignItems="flex-end"
      // onClick={closeModal}
    >
      <Box
        w="360px"
        h="100%"
        bg="brand.400"
        py="20px"
        px="16px"
        border="1px solid lightgray"
        overflow="auto"
      >
        <Stack spacing="35px">
          <Box>
            <Flex alignItems="center" justifyContent="space-between">
              <Heading fontWeight={500} fontSize={24}>
                Filter
              </Heading>
              <Button
                onClick={onClick}
                bg="none"
                p="0"
                _hover={{ bg: 'none', p: 0 }}
              >
                <CloseIcon />
              </Button>
            </Flex>
          </Box>
          <Box>
            <Stack spacing="30px">
              <Box>
                <Heading mb="12px" fontSize={16} fontWeight={700}>
                  Category
                </Heading>
                <Box>
                  <Flex alignItems="center" gap="12px" flexWrap="wrap">
                    {categories?.map((category) => (
                      <Button
                        key={category?.id}
                        borderRadius="4px"
                        py="8px"
                        px="32px"
                        border="1px solid"
                        borderColor={
                          category?.id === selectedCategory
                            ? 'brand.100'
                            : 'text.200'
                        }
                        background={
                          category?.id === selectedCategory
                            ? 'brand.100'
                            : 'transparent'
                        }
                        fontSize={12}
                        fontWeight={500}
                        color={
                          category.id === selectedCategory
                            ? 'brand.400'
                            : 'brand.600'
                        }
                        textTransform="capitalize"
                        onClick={() =>
                          setSelectedCategory(category?.id as string)
                        }
                      >
                        {category?.name?.toLowerCase()}
                      </Button>
                    ))}
                  </Flex>
                </Box>
              </Box>
              <Box>
                <Heading mb="12px" fontSize={16} fontWeight={700}>
                  Distance Away
                </Heading>
                <Box>
                  <Flex alignItems="center" gap="12px" flexWrap="wrap">
                    {distances.map((distance, index) => (
                      <Button
                        key={index}
                        borderRadius="4px"
                        py="8px"
                        px="32px"
                        border="1px solid"
                        borderColor={
                          distance === activeDistance ? 'brand.100' : 'text.200'
                        }
                        background={
                          distance === activeDistance
                            ? 'brand.100'
                            : 'transparent'
                        }
                        fontSize={12}
                        fontWeight={500}
                        color={
                          distance === activeDistance
                            ? 'brand.400'
                            : 'brand.600'
                        }
                        textTransform="capitalize"
                        onClick={() => setActiveDistance(distance)}
                      >
                        {distance}
                      </Button>
                    ))}
                  </Flex>
                </Box>
              </Box>
              <Box>
                <Heading mb="10px" fontSize={16} fontWeight={700}>
                  Price Range (₦)
                </Heading>
                <RangeSlider
                  aria-label={['min', 'max']}
                  defaultValue={[0, 0]}
                  onChange={(val) => setSelectedPriceRange(val)}
                  value={selectedPriceRange}
                  min={10000}
                  max={500000}
                >
                  <RangeSliderTrack h="8px" borderRadius="60px">
                    <RangeSliderFilledTrack borderRadius="60px" />
                  </RangeSliderTrack>
                  <RangeSliderThumb
                    index={0}
                    boxSize={5}
                    border="1px solid lightgray"
                  />
                  <RangeSliderThumb
                    index={1}
                    boxSize={5}
                    border="1px solid lightgray"
                  />
                </RangeSlider>
                <Box>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Box w="105px">
                      <FormLabel fontWeight={400}>From</FormLabel>
                      <Input
                        value={selectedPriceRange[0]}
                        onChange={(e) =>
                          setSelectedPriceRange([
                            e.target.value,
                            selectedPriceRange[1],
                          ])
                        }
                      />
                    </Box>
                    <Box w="105px">
                      <FormLabel fontWeight={400}>To</FormLabel>
                      <Input
                        value={selectedPriceRange[1]}
                        onChange={(e) =>
                          setSelectedPriceRange([
                            selectedPriceRange[0],
                            e.target.value,
                          ])
                        }
                      />
                    </Box>
                  </Flex>
                </Box>
              </Box>
              <Box>
                <Heading mb="10px" fontSize={16} fontWeight={700}>
                  Ratings
                </Heading>
                <Box>
                  <Flex alignItems="center" gap="20px" flexWrap="wrap">
                    {/* <CheckboxGroup value={selectedRating as any} onChange={(e: any) => setSelectedRating(e.target.ch)}> */}
                    {ratings.map((rating) => {
                      return (
                        <Box>
                          <Flex alignItems="center" gap="5px">
                            <Checkbox
                              isChecked={selectedRating === rating}
                              onChange={() => setSelectedRating(rating)}
                              size="lg"
                            >
                              {rating}
                            </Checkbox>
                            <GoldenStarIcon />
                          </Flex>
                        </Box>
                      );
                    })}
                    {/* </CheckboxGroup> */}
                  </Flex>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack spacing="8px">
              <ButtonComponent
                text="Apply Filter"
                color="brand.400"
                bg="brand.100"
                width="100%"
                onClick={() => showLoaderProgress(() => handleApplyFilter())}
              />
              <ButtonComponent
                text="Clear all filters"
                color="text.400"
                bg="brand.400"
                width="100%"
                onClick={() => showLoaderProgress(() => handleClearFilter())}
              />
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomFilter;
