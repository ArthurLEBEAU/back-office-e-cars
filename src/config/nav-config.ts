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
    label: "Accueil",
    link: "/accueil",
    icon: "home_app_logo",
    key: "accueil",
  },
  {
    permissions: [Permissions.ADMINISTRATEUR, Permissions.SUPER_USER],
    label: "Exemple de pages",
    link: "/accueil/example",
    icon: "add_link",
    key: "example",
  },
];
