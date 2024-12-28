import { Icon } from "@iconify/react";

const IconText = ({ iconName, label, active = false, width = 24, height = 24 }) => {
  const iconColor = active ? "white" : "gray";
  const textColor = active ? "text-white" : "text-gray-500";

  return (
    <div className="flex items-center justify-start p-3  cursor-pointer ">
      <div className="mr-3">
        <Icon icon={iconName} width={width} height={height} color={iconColor} />
      </div>
      <div className={`${textColor} hover:text-white` }>{label}</div>
    </div>
  );
};

export default IconText;
