import { SideNavIconProps } from '~/lib/utilities/Context/schemas';

const HistoryIcon = ({ isActive }: SideNavIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0001 18.9596C5.05841 18.9596 1.04175 14.943 1.04175 10.0013C1.04175 5.05964 5.05841 1.04297 10.0001 1.04297C14.9417 1.04297 18.9584 5.05964 18.9584 10.0013C18.9584 14.943 14.9417 18.9596 10.0001 18.9596ZM10.0001 2.29297C5.75008 2.29297 2.29175 5.7513 2.29175 10.0013C2.29175 14.2513 5.75008 17.7096 10.0001 17.7096C14.2501 17.7096 17.7084 14.2513 17.7084 10.0013C17.7084 5.7513 14.2501 2.29297 10.0001 2.29297Z"
        fill={isActive ? '#FFFFFF' : '#3D3D3D'}
      />
      <path
        d="M13.0916 13.2745C12.9833 13.2745 12.875 13.2495 12.775 13.1828L10.1916 11.6411C9.54995 11.2578 9.07495 10.4161 9.07495 9.67448V6.25781C9.07495 5.91615 9.35828 5.63281 9.69995 5.63281C10.0416 5.63281 10.325 5.91615 10.325 6.25781V9.67448C10.325 9.97448 10.575 10.4161 10.8333 10.5661L13.4166 12.1078C13.7166 12.2828 13.8083 12.6661 13.6333 12.9661C13.5083 13.1661 13.3 13.2745 13.0916 13.2745Z"
        fill={isActive ? '#FFFFFF' : '#3D3D3D'}
      />
    </svg>
  );
};

export default HistoryIcon;