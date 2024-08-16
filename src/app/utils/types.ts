export interface DropdownProps {
  title: React.ReactNode;
  items: { label: string; link: string }[];
}

export interface Modalprops {
  show: boolean;
  handleClose: () => void;
  setShow: any;
  ispath?: boolean
}

export interface AutoSearchProps {
  error?: any;
  label: string;
  options: string[];
  name?: string;
  setFieldValue?: any;
}

// utils/types.ts

export interface AirportData {
  country: string;
  city: string;
  name: string;
  code: string;
}

export interface Travelers {
  adults: number;
  children: number;
  infants: number;
}

export interface Sector {
  id: number;
  departFrom: string;
  arrivalTo: string;
  departureDate: string;
}

export interface FormValues {
  selectedTab: string;
  departFrom: string;
  arrivalTo: string;
  arrivalDate: string;
  travelers: Travelers;
  stop_mode: boolean;
  class_mode: boolean;
  sectors: Sector[];
  name:string;
  email:string;
  phone:string
}

export interface SearchEngineProps {
  handleToggle?:  () => void
}

