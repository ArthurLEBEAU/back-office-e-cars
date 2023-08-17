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
    link: "/accueil/cars",
    icon: "local_taxi",
    key: "cars",
  },
  {
    permissions: [Permissions.ADMINISTRATEUR, Permissions.SUPER_USER],
    label: "Requêtes",
    link: "/accueil/requests",
    icon: "request_page",
    key: "requests",
  },
];
