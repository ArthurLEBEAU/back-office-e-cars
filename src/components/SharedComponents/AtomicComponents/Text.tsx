import { Tooltip, Typography } from "antd";
import MaterialIcon from "../Icons/MaterialIcons";

interface TextProps {
  children?: any;
  className?: string;
  bold?: boolean;
  thin?: boolean;
  type?: "secondary" | "success" | "danger" | "warning";
  color?: string;
  tooltip?: string;
  italic?: boolean;
  ellipsis?: any;
  underline?: boolean;
  size?:
    | "mini"
    | "mini+2"
    | "mini+3"
    | "base"
    | "base+2"
    | "base+3"
    | "high"
    | "high+2"
    | "high+3";
  center?: boolean;
}

const { Text } = Typography;
function AText({
  children,
  bold,
  thin,
  center,
  ellipsis,
  italic,
  size,
  tooltip,
  underline,
  type,
  className,
}: TextProps) {
  return (
    <div
      className={tooltip ? "flex items-center space-x-1 space-y-2" : undefined}
    >
      <Text
        italic={italic}
        underline={underline}
        type={type}
        ellipsis={ellipsis}
        className={`${className && className}   ${
          size === "mini"
            ? "text-xs"
            : size === "mini+2"
            ? "text-sm"
            : size === "mini+3"
            ? "text-tiny"
            : size === "base"
            ? "text-base"
            : size === "base+2"
            ? "text-lg"
            : size === "base+3"
            ? "text-xl"
            : size === "high"
            ? "text-2xl"
            : size === "high+2"
            ? "text-3xl"
            : size === "high+3"
            ? "text-4xl"
            : "text-base"
        }  ${bold ? "font-semibold" : thin ? "font-light" : ""} ${
          center ? "text-center" : ""
        } `}
      >
        {children}
      </Text>
      {tooltip ? (
        <Tooltip placement="right" title={tooltip}>
          <p className="text-right">
            <MaterialIcon icon="info" />
          </p>
        </Tooltip>
      ) : null}
    </div>
  );
}

export default AText;
