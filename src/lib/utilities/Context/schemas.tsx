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
