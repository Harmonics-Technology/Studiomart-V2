/* eslint-disable no-unsafe-optional-chaining */
import { Flex, HStack, Button } from '@chakra-ui/react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import useQueryParams from '../Hooks/useQueryParams';

interface PageOptions {
  data: any;
}

function Pagination({ data }: PageOptions) {
  const { setQueryParams } = useQueryParams();
  const totalPages = Math.ceil(
    (data?.size as number) / (data?.limit as unknown as number)
  );
  //
  const current = data?.nextOffset / data?.limit;
  const pages = [...Array(totalPages || 0).keys()];
  // const pages =

  const next = data?.next?.href;
  const previous = data?.previous?.href;

  const paginate = (
    direction: 'next' | 'previous' | 'last' | 'sub',
    pageNumber?: number
  ) => {
    // let link = '';
    if (direction === 'previous' && previous != null) {
      //   link = previous?.split('?')[1] ?? false;
      setQueryParams({ limit: data.limit, offset: data.previousOffset });
    }
    if (direction === 'next' && next != null) {
      //   link = next?.split('?')[1] ?? false;
      setQueryParams({ limit: data.limit, offset: data.nextOffset });
    }
    if (direction === 'sub') {
      setQueryParams({
        limit: data.limit,
        offset: (pageNumber as number) * data.limit,
      });
    }
    if (direction === 'last') {
      setQueryParams({
        limit: data.limit,
        offset: (totalPages - 1) * data.limit,
      });
    }
  };
  return (
    <Flex
      justify="center"
      align="center"
      p="1.5rem 0 .5rem"
      gap="1rem"
      flexDirection={['column', 'row']}
    >
      {totalPages > 1 && (
        <HStack cursor="pointer">
          <Button
            bgColor="brand.100"
            color="white"
            minW="unset"
            borderRadius="3px"
            isDisabled={!previous}
            onClick={() => paginate('previous')}
          >
            <BsChevronLeft />
          </Button>
          <HStack mx=".5rem">
            {pages
              .filter((x) => x <= 2)
              .map((x) => (
                <Button
                  // bgColor={current == x + 1 ? "brand.100" : "white"}
                  // color={current == x + 1 ? "white" : "inherit"}
                  border="2px solid"
                  borderRadius="3px"
                  borderColor={current === x + 1 ? 'brand.100' : 'gray.300'}
                  key={x}
                  onClick={() => paginate('sub', x)}
                >
                  {x + 1}
                </Button>
              ))}
            {pages.length > 3 && (
              <>
                <span>... </span>
                <Button
                  bgColor="inherit"
                  border="1px solid"
                  borderRadius="3px"
                  borderColor={
                    current === totalPages ? 'brand.100' : 'gray.300'
                  }
                  onClick={() => paginate('last')}
                >
                  {totalPages}
                </Button>
              </>
            )}
          </HStack>
          <Button
            bgColor="brand.100"
            color="white"
            minW="unset"
            borderRadius="3px"
            // px="2rem"
            isDisabled={!next}
            onClick={() => paginate('next')}
          >
            <BsChevronRight />
          </Button>
        </HStack>
      )}
    </Flex>
  );
}

export default Pagination;
