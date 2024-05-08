import { Box, Button, Heading, VStack, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Rating, Star } from '@smastrom/react-rating';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';

import FormTextArea from '~/lib/utilities/FormInput/FormTextArea';
import ModalWrapper from '~/lib/utilities/Layouts/ModalWrapper';
import { ReviewModel, ReviewService } from '~/services';

const schema = yup.object().shape({
  reviewNote: yup.string().required(),
});

export const ReviewModal = ({ id, isOpen, onClose }: any) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ReviewModel>({
    // @ts-expect-error new update
    resolver: yupResolver(schema),
    mode: 'all',
  });
  const router = useRouter();

  const [rating, setRating] = useState(0);

  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#facc15',
    inactiveStrokeColor: '#facc15',
    itemStrokeWidth: 2,
    activeStrokeColor: 'transparent',
  };

  const processRating = async (data: ReviewModel) => {
    data.serviceId = id;
    data.reviewCount = rating;
    try {
      const result = await ReviewService.createReview({
        requestBody: data,
      });
      if (result.status) {
        toast.success(`Review submitted successfully`);
        onClose();
        router.refresh();
        return;
      }
      toast.error(result.message as string);
    } catch (err: any) {
      toast.error(err?.body?.message || err?.message, {
        className: 'loginToast',
      });
    }
  };
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="" w="35%">
      <form onSubmit={handleSubmit(processRating)}>
        <VStack gap="1rem">
          <Box mb="1rem" textAlign="center">
            <Heading fontSize="2rem">How was the service?</Heading>
            <Text fontSize="1rem">Rate your experience with the service</Text>
          </Box>
          <Rating value={rating} onChange={setRating} itemStyles={myStyles} />
          <FormTextArea<ReviewModel>
            label="Review"
            type="text"
            placeholder="Leave a review"
            name="reviewNote"
            error={errors.reviewNote}
            register={register}
          />
          <Button
            isDisabled={!isValid}
            bgColor="brand.100"
            color="white"
            width="100%"
            h="3rem"
            type="submit"
            isLoading={isSubmitting}
          >
            Proceed
          </Button>
        </VStack>
      </form>
    </ModalWrapper>
  );
};
