import { SideNavIconProps } from '~/lib/utilities/Context/schemas';

const AccountIcon = ({ isActive }: SideNavIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.1322 9.68464C10.1072 9.68464 10.0905 9.68464 10.0655 9.68464C10.0238 9.6763 9.96549 9.6763 9.91549 9.68464C7.49883 9.60964 5.67383 7.70964 5.67383 5.36797C5.67383 2.98464 7.61549 1.04297 9.99883 1.04297C12.3822 1.04297 14.3238 2.98464 14.3238 5.36797C14.3155 7.70964 12.4822 9.60964 10.1572 9.68464C10.1488 9.68464 10.1405 9.68464 10.1322 9.68464ZM9.99883 2.29297C8.30716 2.29297 6.92383 3.6763 6.92383 5.36797C6.92383 7.03464 8.22383 8.3763 9.88216 8.43464C9.92383 8.4263 10.0405 8.4263 10.1488 8.43464C11.7822 8.35964 13.0655 7.01797 13.0738 5.36797C13.0738 3.6763 11.6905 2.29297 9.99883 2.29297Z"
        fill={isActive ? '#FFFFFF' : '#3D3D3D'}
      />
      <path
        d="M10.1404 18.7904C8.50703 18.7904 6.86536 18.3737 5.6237 17.5404C4.46536 16.7737 3.83203 15.7237 3.83203 14.582C3.83203 13.4404 4.46536 12.382 5.6237 11.607C8.1237 9.9487 12.1737 9.9487 14.657 11.607C15.807 12.3737 16.4487 13.4237 16.4487 14.5654C16.4487 15.707 15.8154 16.7654 14.657 17.5404C13.407 18.3737 11.7737 18.7904 10.1404 18.7904ZM6.31536 12.657C5.51536 13.1904 5.08203 13.8737 5.08203 14.5904C5.08203 15.2987 5.5237 15.982 6.31536 16.507C8.39036 17.8987 11.8904 17.8987 13.9654 16.507C14.7654 15.9737 15.1987 15.2904 15.1987 14.5737C15.1987 13.8654 14.757 13.182 13.9654 12.657C11.8904 11.2737 8.39036 11.2737 6.31536 12.657Z"
        fill={isActive ? '#FFFFFF' : '#3D3D3D'}
      />
    </svg>
  );
};

export default AccountIcon;