
import { MdOutlineArrowForward } from 'react-icons/md'; 
import { Button } from 'rizzui';

export default function Subscription() {
    return (
      <>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 justify-items-center items-center h-full md:h-[90vh]   lg:px-8">
            {/* First portion */}
            <div className="flex flex-col flex-wrap w-full max-w-[375px]  h-[550px] p-6 bg-sidebarTheme-dark group rounded-2xl relative overflow-hidden">
              <div className="text-start text-white">
                <span className="font-light text-3xl">Save More</span>
                <br />
                <span className="font-bold text-3xl">With Goodplans</span>
                <br />
                <div className="text-lg leading-7">
                Discover Flexible Subscription Plans That Cater to Your Unique Needs .
                <br />
                Unlock Access to Exclusive Features and Benefits Today!
                </div>
                <MdOutlineArrowForward className="mt-5 text-white" size={30} />
              </div>
              <div className="absolute bottom-0 h-[300px]">
                <img
                  src="https://freepngimg.com/thumb/girl/168680-woman-young-free-clipart-hd.png"
                  alt="girl image for promot pricing plan"
                />
              </div>
            </div>
            {/* Middle portion */}
            {staticValue.map((data, index) => (
              <div
                key={index}
                className="flex flex-col flex-wrap max-w-[375px]  h-[550px] p-6 w-full  shadow border group rounded-2xl relative overflow-hidden"
              >
                <div className="flex flex-row gap-5 items-center">
                
                  <span className="text-3xl font-bold">{data.passType}</span>
                </div>
                <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
                  What You&apos;ll Get
                </span>
                {data.static.map((myData, index) => (
                  <div
                    key={index}
                    className="flex flex-row gap-3 items-start mt-1 text-left text-lg"
                  >
                    <div className="pt-1 shrink-0 ">
                      <MdOutlineArrowForward />
                    </div>
                    <span>{myData}</span>
                  </div>
                ))}
                <div className="border border-dashed border-[#A9A9AA] tracking-widest my-4" />
                <div className="h-28 ">
                  <div className="flex flex-col gap-4 justify-between absolute left-6 right-6 bottom-6">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold ">{data.price}</span>
                      <span>{data.duration}</span>
                    </div>
                    <div className="flex align-bottom">
                      <Button
    
                        className="w-full rounded-xl font-semibold text-xl px-4 py-3 bg-sidebarTheme-dark  text-white"
                      >
                        Choose
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
       
      </>
    );
}

const staticValue = [
  {
    passType: "Gold Subscription",
    price: "₹15000",
    duration: "/Year",
    static: [
      "Access to advanced analytics tools.",
      "Unlimited user management.",
      "24/7 technical support.",
      "Custom reporting features.",
      "Priority response times.",
    ],
  },
  {
    passType: "Silver Subscription",
    price: "₹10000",
    duration: "/Year",
    static: [
      "Access to standard analytics tools.",
      "Limited user management.",
      "Email support.",
      "Basic reporting features.",
      "Monthly performance updates.",
    ],
  },
];
