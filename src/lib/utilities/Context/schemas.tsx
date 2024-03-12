export interface IStudioCardProps {
  width?: string | number | undefined;
  height?: string | number | undefined;
  img: string | undefined;
  rating?: string | number | undefined;
  address: string;
  companyName: string;
  tags: string[];
  services: string[];
  price: number;
}

export interface FilterButtonsProp {
  filterList: string[];
}

export interface FormInputProps {
  type: string;
  width: string;
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

export interface CustomSelectProps {
  options?: string[];
  width: string;
  value: string;
  setValue: (value: string) => void;
}

export interface ReviewCardProps {
  logo: string;
  name: string;
  address: string;
  date: string;
  review: string;
}

export interface ProgressBarProps {
  progressBarBg: string;
  rating: number;
}

export interface SingleDetailProps {
  label: string;
  icon: any;
  description: string;
}

export interface AdditionalServicesProps {
  text: string;
}

export interface FormStepProps {
  step: number;
  setStep: (value: number) => void;
}

export interface FlipImageProps {
  image: string;
  heading: string;
  flip: boolean;
  align: string;
}

export interface FilterTagsItemProps {
  label: string;
  icon?: any;
  color?: string;
}

export interface SingleQuestionProp {
  question: string;
  answer: string;
}

export interface ListItemProps {
  index: number;
  title: string;
  text: string;
}

export interface CustomTextProps {
  text: string;
}

export interface SocialLinksProps {
  spacing: number;
  direction: any;
}

export interface IconLinkProps {
  icon: any;
  linkText: string;
}

export interface SigninOptionProp {
  text: string;
}

export interface ServiceCardProps {
  image: string;
  title?: string;
  rating?: number;
  price?: number;
}

export interface ServiceCardWithStatusProps {
  image: string;
  title?: string;
  bookingId: string;
  dateAndTime: string;
  status: string;
  rating: number;
}

export interface CustomerReviewCardProps {
  name: string;
  date: string;
  company: string;
  review: string;
}

export interface ButtonProps {
  bg: string;
  color: string;
  text: string;
  width: string;
  onClick: () => void;
}

export interface OutlineButtonProps {
  color: string;
  text: string;
}

export interface IconButtonProps {
  bg: string;
  color: string;
  text: string;
  icon: any;
  width: string;
  flip: boolean;
}

export interface IconButtonLinkProps {
  text: string;
  icon: any;
  flip: boolean;
}

export interface BackButtonProps {
  linkTo: string;
}

export interface HeadingWithStarProps {
  title: string;
  flipStar: boolean;
  width: string;
}

export interface QuoteIconProps {
  color: string;
  width?: string;
  height?: string;
}

export interface TagIconsProps {
  color?: string;
}
