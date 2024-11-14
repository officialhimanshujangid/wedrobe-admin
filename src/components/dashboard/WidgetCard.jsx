
import { Title } from 'rizzui';

// Define static class names
const widgetCardClasses = {
  base: 'border border-muted bg-gray-0 p-5 dark:bg-gray-50 lg:p-7',
  rounded: 'rounded-lg', // Using a fixed rounded class
};

const WidgetCard = () => {
  return (
    <div className={`${widgetCardClasses.base} ${widgetCardClasses.rounded}`}>
      <div className="flex items-start justify-between">
        <div>
          <Title as="h3" className="text-base font-semibold sm:text-lg">
            Static Title
          </Title>
          <div className="mt-2 text-gray-600">
            Static description text goes here.
          </div>
        </div>
        <div className="ps-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Static Action
          </button>
        </div>
      </div>
    
      <div className="mt-4">
        Static content or children go here.
      </div>
    </div>
  );
};

export default WidgetCard;
