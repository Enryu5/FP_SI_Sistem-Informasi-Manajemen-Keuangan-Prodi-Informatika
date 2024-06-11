import Card from "components/card";

const Widget = ({ icon, title, subtitle, positive, negative, description }) => {
  return (
    <Card extra="!flex-row flex-grow items-center rounded-[20px]">
      <div className="ml-[18px] flex h-[90px] w-auto flex-row items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>

      <div className="h-50 ml-4 flex w-auto flex-col justify-center">
        <p className="font-dm text-sm font-medium text-gray-600">{title}</p>
        <h4 className="text-xl font-bold text-navy-700 dark:text-white">
          {subtitle}
        </h4>
        <div className="flex space-x-1">
          <p className="font-dm text-[10px] font-medium text-greenPrimary">{positive}</p>
          <p className="font-dm text-[10px] font-medium text-redPrimary">{negative}</p>
          <p className="font-dm text-[10px] font-regular text-gray-600">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default Widget;
