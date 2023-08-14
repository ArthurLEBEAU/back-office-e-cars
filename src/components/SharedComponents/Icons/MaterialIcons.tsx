interface MaterialIconProps {
  icon?: string;
  type?: string;
  className?: string;
}

function MaterialIcon({ type, icon, className }: MaterialIconProps) {
  return (
    <span
      className={`${
        type === "rounded"
          ? "material-symbols-rounded"
          : type === "sharp"
          ? "material-symbols-sharp"
          : "material-symbols-outlined"
      } ${className} `}
    >
      {icon}
    </span>
  );
}

export default MaterialIcon;
