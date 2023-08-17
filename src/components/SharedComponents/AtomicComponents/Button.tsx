import { Button } from "antd";
import MaterialIcon from "../Icons/MaterialIcons";

interface ButtonProps {
  loading?: boolean;
  children?: any;
  extra?: any;
  icon?: string;
  size?: string;
  action?: any;
  className?: string;
  htmlType?: "button" | "submit" | "reset" | undefined;
}
interface RequiredButtonProps {
  type?:
  | "link"
  | "text"
  | "primary"
  | "ghost"
  | "default"
  | "dashed"
  | undefined;
}

interface TypeTextButtonProps {
  type?: "danger" | undefined;
}
export function AButton({
  loading,
  children,
  icon,
  type,
  extra,
  action,
  htmlType,
  className,
}: RequiredButtonProps & ButtonProps) {
  return (
    <Button
      {...extra}
      onClick={action}
      type={type ?? "primary"}
      loading={loading}
      htmlType={htmlType ?? "button"}
      icon={icon ? <MaterialIcon icon={icon} /> : null}
      className={`${className} px-4 py-2 h-auto rounded-md flex items-center space-x-3 `}
    >
      {children}
    </Button>
  );
}

export function ATButton({
  action,
  children,
  icon,
  loading,
  type,
  className,
}: ButtonProps & TypeTextButtonProps) {
  return (
    <Button
      onClick={action}
      loading={loading}
      type="text"
      className={`${className}  rounded-md flex  space-x-3 px-4 py-2  h-auto`}
      icon={icon ? <MaterialIcon icon={icon} /> : null}
    >
      {children}
    </Button>
  );
}
