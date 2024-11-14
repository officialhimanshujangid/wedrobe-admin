import  { useState } from 'react';
import { Input, Button, Text } from 'rizzui';
import { PiCaretDownBold } from 'react-icons/pi';

function CheckDelivery() {
  const [pinCode, setPinCode] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ pinCode });
    setPinCode('');
  };

  return (
    <form onSubmit={onSubmit} className="max-w-sm relative">
      <Input
        type="text"
        placeholder="Enter pin code"
        inputClassName="text-sm"
        value={pinCode}
        onChange={(e) => setPinCode(e.target.value)}
      />
      <Button
        className="absolute right-0 top-0 text-sm font-normal"
        type="submit"
        variant="text"
      >
        Check
      </Button>
      <p className="pt-1.5 text-xs leading-relaxed text-gray-500">
        Please enter PIN code to check delivery time & Pay on Delivery Availability
      </p>
    </form>
  );
}

export default function ProductDeliveryOptions() {
  const deliveryInfo = [
    "100% Original Products",
    "Pay on delivery might be available",
    "Easy 14 days returns and exchanges",
    "Try & Buy might be available for some products",
  ];

  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className=" bg-white border shadow-lg rounded-lg px-2  last-of-type:border-t-0">
      <div
        role="button"
        onClick={toggle}
        className="flex w-full cursor-pointer items-center justify-between py-6 font-lexend text-lg font-semibold text-gray-900"
      >
        Delivery Options
        <div className="flex shrink-0 items-center justify-center">
          <PiCaretDownBold
            className={`h-[18px] w-[18px] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      {isOpen && (
        <div className=" -mt-2 pb-7">
          <div className="mb-5">
            <CheckDelivery />
          </div>
          {deliveryInfo.map((info, index) => (
            <Text key={index} className="mb-3 last:mb-0">
              {info}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
}
