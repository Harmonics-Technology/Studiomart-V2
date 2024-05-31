import type { TagIconsProps } from '~/lib/utilities/Context/schemas';
import { SideNavIconProps } from '~/lib/utilities/Context/schemas';

export const RainbowIcon: React.FC<TagIconsProps> = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1L11 4"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 18L11 21"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 11L18 11"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 11L1 11"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.0715 3.92946L15.9502 6.05078"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.05003 15.949L3.92871 18.0703"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.92848 3.92946L6.0498 6.05078"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.95 15.949L18.0713 18.0703"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MusicIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke="#2D2327" strokeWidth="1.5" />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(-1 0 0 1 14 10)"
        stroke="#2D2327"
        strokeWidth="1.5"
      />
      <path
        d="M9.34509 5.523C8.04637 6.05535 6.93767 6.96582 6.16294 8.13623"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const PhotoIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="2"
        y="2"
        width="20"
        height="20"
        rx="5"
        stroke="#2D2327"
        strokeWidth="1.5"
      />
      <path
        d="M2.5 17.5L4.7592 15.8863C5.47521 15.3749 6.45603 15.456 7.07822 16.0782L8.15147 17.1515C8.6201 17.6201 9.3799 17.6201 9.84853 17.1515L14.8377 12.1623C15.496 11.504 16.5476 11.4563 17.2628 12.0523L22 16"
        stroke="#2D2327"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="2"
        cy="2"
        r="2"
        transform="matrix(-1 0 0 1 10 6)"
        stroke="#2D2327"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const PodcastIcon = ({ isActive }: SideNavIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="2"
        width="8"
        height="13"
        rx="4"
        stroke={isActive ? '#FFFFFF' : '#2D2327'}
        strokeWidth="1.5"
      />
      <path
        d="M20 11.5C20 15.9183 16.4183 19.5 12 19.5C7.58172 19.5 4 15.9183 4 11.5"
        stroke={isActive ? '#FFFFFF' : '#2D2327'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 22V20"
        stroke={isActive ? '#FFFFFF' : '#2D2327'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const StarIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9718 2.70846C11.4382 1.93348 12.5618 1.93348 13.0282 2.70847L15.3586 6.58087C15.5262 6.85928 15.7995 7.05784 16.116 7.13116L20.5191 8.15091C21.4002 8.35499 21.7474 9.42356 21.1545 10.1066L18.1918 13.5196C17.9788 13.765 17.8744 14.0863 17.9025 14.41L18.2932 18.9127C18.3714 19.8138 17.4625 20.4742 16.6296 20.1214L12.4681 18.3583C12.1689 18.2316 11.8311 18.2316 11.5319 18.3583L7.37038 20.1214C6.53754 20.4742 5.62856 19.8138 5.70677 18.9127L6.09754 14.41C6.12563 14.0863 6.02124 13.765 5.80823 13.5196L2.8455 10.1066C2.25257 9.42356 2.59977 8.35499 3.48095 8.15091L7.88397 7.13116C8.20053 7.05784 8.47383 6.85928 8.64138 6.58087L10.9718 2.70846Z"
        stroke="#2D2327"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const ResetIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.07142 8C5.80911 6.72229 6.88577 5.67345 8.18235 4.96946C9.47894 4.26547 10.945 3.93375 12.4183 4.01097C13.8917 4.08818 15.315 4.57133 16.5309 5.40699C17.7468 6.24266 18.7079 7.39828 19.308 8.74611M3.23145 5.51537L3.96086 8.6749C4.08509 9.21303 4.62204 9.54856 5.16017 9.42433L8.31971 8.69492M18.9279 15.9999C18.1902 17.2776 17.1135 18.3264 15.8169 19.0304C14.5203 19.7344 13.0543 20.0661 11.581 19.9889C10.1076 19.9117 8.68431 19.4286 7.46841 18.5929C6.25252 17.7572 5.29139 16.6016 4.6913 15.2538M20.7678 18.4845L20.0384 15.325C19.9142 14.7869 19.3772 14.4513 18.8391 14.5756L15.6796 15.305"
        stroke="#1570FA"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export const UserIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 16 3.5)"
        stroke="#585757"
        strokeWidth="1.5"
      />
      <path
        d="M5 17.4347C5 16.5743 5.54085 15.8068 6.35109 15.5175V15.5175C10.004 14.2128 13.996 14.2128 17.6489 15.5175V15.5175C18.4591 15.8068 19 16.5743 19 17.4347V18.7502C19 19.9376 17.9483 20.8498 16.7728 20.6818L15.8184 20.5455C13.2856 20.1837 10.7144 20.1837 8.18162 20.5455L7.22721 20.6818C6.0517 20.8498 5 19.9376 5 18.7502V17.4347Z"
        stroke="#585757"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export const GiftIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.5 11H20V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V11H9.5"
        stroke="#3D3D3D"
        strokeWidth="1.5"
      />
      <path
        d="M16.5 11H19.5C20.3284 11 21 10.3284 21 9.5V7.5C21 6.67157 20.3284 6 19.5 6H4.5C3.67157 6 3 6.67157 3 7.5V9.5C3 10.3284 3.67157 11 4.5 11H7.5"
        stroke="#3D3D3D"
        strokeWidth="1.5"
      />
      <path
        d="M12 4.5C12 3.11929 13.1193 2 14.5 2H15C16.1046 2 17 2.89543 17 4V4C17 5.10457 16.1046 6 15 6H12V4.5Z"
        stroke="#3D3D3D"
        strokeWidth="1.5"
      />
      <path
        d="M12 4.5C12 3.11929 10.8807 2 9.5 2H9C7.89543 2 7 2.89543 7 4V4C7 5.10457 7.89543 6 9 6H12V4.5Z"
        stroke="#3D3D3D"
        strokeWidth="1.5"
      />
      <path
        d="M14.5 6L14.5 22L9.5 22L9.5 6L14.5 6Z"
        stroke="#3D3D3D"
        strokeWidth="1.5"
      />
    </svg>
  );
};
