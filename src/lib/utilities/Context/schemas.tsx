import type {
  Control,
  FieldError,
  Path,
  UseFormRegister,
} from 'react-hook-form';

import {
  AdditionalServiceView,
  BookingView,
  RecentlyViewedView,
  ReviewViewPagedCollection,
  ServiceView,
  ServiceViewPagedCollection,
  StudioViewPagedCollection,
} from '~/services';

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

export interface FormInputProps<TFormValues extends Record<string, unknown>> {
  type?: string;
  width?: string;
  name: Path<TFormValues>;
  validate?: any;
  register: UseFormRegister<TFormValues>;
  required?: boolean;
  placeholder?: string;
  error: FieldError | undefined;
  label?: string;
  changeVisibility?: any;
  icon?: boolean;
  passwordVisible?: boolean;
  h?: string;
}
export interface InputBlankProps {
  type?: string;
  width?: any;
  placeholder?: string;
  label?: string;
  readOnly?: boolean;
  defaultValue?: any;
}
export interface FormSelectProps<TFormValues extends Record<string, unknown>> {
  width?: string;
  name: Path<TFormValues>;
  validate?: any;
  register: UseFormRegister<TFormValues>;
  required?: boolean;
  placeholder?: string;
  error: FieldError | undefined;
  label?: string;
  options: any;
  h?: string;
}

export interface FormRadioProps<TFormValues extends Record<string, unknown>> {
  name: Path<TFormValues>;
  required?: boolean;
  disableLabel?: boolean;
  defaultValue?: any;
  validate?: any;
  label?: string;
  error: FieldError | undefined;
  control: Control<TFormValues>;
  radios?: any;
  value?: string;
  flexDir?: any;
  gap?: any;
  bg?: any;
}

export interface CustomSelectProps {
  options?: string[];
  width: string;
  value: string;
  setValue: (value: string) => void;
}

export interface ReviewCardProps {
  logo: any;
  name: any;
  // address: any;
  date: any;
  review: any;
  service: any;
}

export interface ProgressBarProps {
  progressBarBg: string;
  rating: number;
  count: any;
  total: any;
}

export interface SingleDetailProps {
  label: string;
  icon: any;
  description: string;
}

export interface AdditionalServicesProps {
  service: AdditionalServiceView;
  addToArray: any;
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
  text: any;
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
  image: string | null | undefined;
  title?: string | null | undefined;
  rating?: number;
  price?: number;
  withStatus?: boolean;
  bookingId?: string;
  dateAndTime?: string;
  status?: string;
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
  onClick?: () => void;
  loading?: boolean;
  type?: 'button' | 'reset' | 'submit' | undefined;
  disabled?: boolean;
}

export interface OutlineButtonProps {
  color: string;
  text: string;
  width?: string;
}

export interface IconButtonProps {
  bg: string;
  color: string;
  text: string;
  icon: any;
  width: string;
  flip: boolean;
  onClick?: any;
  loading?: boolean;
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

export interface StudioStatusButtonProps {
  ButtonIcon: any;
  text: string;
  color: string;
  onClick: () => void;
  isActive: boolean;
  isDisabled: boolean;
}

export interface StudioButtonIconProps {
  isActive: boolean;
}
export interface IHomePage {
  data: {
    services: ServiceViewPagedCollection | undefined;
    recents: RecentlyViewedView[] | undefined;
  };
}
export interface IPageProps {
  searchParams?: any;
  params?: any;
}

export interface IServiceDetailsProps {
  data: {
    service: ServiceView | undefined;
    ratings: ReviewViewPagedCollection | any[];
    studios: StudioViewPagedCollection;
  };
}

export interface ICustomerHome {
  singleService?: any;
  id?: any;
  addons?: any;
}

export interface ISingleBook {
  addToArray: any;
  selectedAddon: any;
  viewers: any;
  service: any;
  date: any;
  time: any;
}

export interface IBookingDetails {
  data: BookingView;
}

export interface SideNavIconProps {
  isActive: boolean;
}

export interface OpenSideNavProps {
  onClick: () => void;
}

export interface CloseSideNavProps {
  onClick: () => void;
}

export interface SideNavItemProps {
  label: string;
  Icon: any;
  link: string;
  isActive: boolean;
}
