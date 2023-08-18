import { Permissions } from "./permissions";

export const navConfig: {
  permissions: string[];
  key: string;
  label: string;
  link?: string;
  icon?: string;
  subLink?: any[];
  type?: "group";
}[] = [
  {
    permissions: [Permissions.ADMINISTRATEUR, Permissions.SUPER_USER],
    label: "Voitures",
    link: "/dashboard/cars",
    icon: "local_taxi",
    key: "cars",
  },
  {
    permissions: [Permissions.ADMINISTRATEUR, Permissions.SUPER_USER],
    label: "Requêtes",
    link: "/dashboard/requests",
    icon: "request_page",
    key: "requests",
  },
];
