import { SideNavIconProps } from '~/lib/utilities/Context/schemas';

const SupportIcon = ({ isActive }: SideNavIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 15.8333V10C17.5 5.85787 14.1421 2.5 10 2.5V2.5C5.85786 2.5 2.5 5.85786 2.5 10V15.8333"
        stroke={isActive ? '#FFFFFF' : '#3D3D3D'}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13.3333 12.832C13.3333 11.7275 14.2287 10.832 15.3333 10.832H15.4999C16.6045 10.832 17.4999 11.7275 17.4999 12.832V15.4987C17.4999 16.6033 16.6045 17.4987 15.4999 17.4987H15.3333C14.2287 17.4987 13.3333 16.6033 13.3333 15.4987V12.832Z"
        stroke={isActive ? '#FFFFFF' : '#3D3D3D'}
        strokeWidth="1.5"
      />
      <path
        d="M6.66675 12.832C6.66675 11.7275 5.77132 10.832 4.66675 10.832H4.50008C3.39551 10.832 2.50008 11.7275 2.50008 12.832V15.4987C2.50008 16.6033 3.39551 17.4987 4.50008 17.4987H4.66675C5.77132 17.4987 6.66675 16.6033 6.66675 15.4987V12.832Z"
        stroke={isActive ? '#FFFFFF' : '#3D3D3D'}
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default SupportIcon;
