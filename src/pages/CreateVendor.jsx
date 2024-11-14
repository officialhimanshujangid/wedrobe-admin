import { useEffect, useRef, useState } from "react";
import Step1 from "../components/createUser/Step1";
import Step2 from "../components/createUser/Step2";
import Step3 from "../components/createUser/Step3";
import Step4 from "../components/createUser/Step4";
import Step5 from "../components/createUser/Step5";
import { Button } from "rizzui";
import { PiArrowUpLight } from "react-icons/pi";
import StepDetails from "../components/createUser/StepDetails";
import { useNavigate } from "react-router-dom";
import Confetti from 'react-confetti';
import Step6 from "../components/createUser/Step6";


const CreateVendor = () => {
    
    const [currentStep, setCurrentStep] = useState(1);


    const nextStep = () => setCurrentStep((prev) => (prev < 7 ? prev + 1 : prev));
    const prevStep = () => setCurrentStep((prev) => (prev > 1 ? prev - 1 : prev));


    const renderStepContent = (step) => {
        switch (step) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            case 5:
                return <Step5 />;
            case 6:
                return <Step6 />;
            default:
                return null;
        }
    };
    const navigate = useNavigate()
   
    return (
        (currentStep > 0 && currentStep < 7) ?
            <div className="h-screen overflow-auto text-white flex flex-col shadow border  justify-between bg-gradient-to-r from-sidebarTheme-dark to-[#9b388a]">
                <header
                    className={'flex w-full items-center justify-end px-4 py-5 md:h-20 md:px-5 lg:px-8 4xl:px-10'}
                >

                    <div className="flex w-full items-center justify-end gap-2">

                        <Button
                            rounded="pill"
                            variant="outline"
                            onClick={() => navigate('/')}
                            className="gap-2 whitespace-nowrap border-white border-2 hover:border-white  hover:text-white   "
                        >

                            Exit
                        </Button>
                    </div>
                </header>
                <main className="flex-grow p-4">
                    <div className="grid grid-cols-1 place-items-center h-full w-full  md:grid-cols-2">
                        <StepDetails step={currentStep} />
                        {renderStepContent(currentStep)}
                    </div>
                </main>
                <footer
                    className={' w-full flex items-center justify-between gap-3 px-4 py-5 lg:px-8 4xl:px-10'}
                >

                    {currentStep > 1 && <Button
                        rounded="pill"
                        variant="outline"
                        onClick={() => prevStep()}
                        className="gap-1 border-white  text-white   border-2 "
                    >
                        <PiArrowUpLight className="-rotate-90" />
                        Back
                    </Button>}

                    <Button

                        rounded="pill"
                        onClick={() => nextStep()}
                        type={'submit'}
                        className="ml-auto gap-1 bg-sidebarTheme-dark backdrop-blur-lg dark:bg-gray-0/[.35] dark:text-white dark:active:enabled:bg-gray-0/75"
                    >
                        {currentStep < 7 ? "Next" : "Save"}
                    </Button>
                </footer>
            </div> :
            <div className="bg-gradient-to-r from-sidebarTheme-dark to-[#9b388a] h-screen">
                <div  className="col-span-full grid place-content-center">
                    <figure className="relative mx-auto grid place-content-center">
                        <img
                            src={"/hat-confetti.png"}
                            alt="congratulation image"
                            className="mx-auto object-contain"
                        />
                        <figcaption className="mx-auto max-w-lg text-center">
                            <h2 className="text-2xl text-white sm:text-3xl lg:text-4xl">
                                Congratulations on Adding Your company!
                            </h2>
                            <p className="mt-6 text-base text-white">
                                Thank you for entrusting us with your property. Get ready for a
                                journey filled with new connections, incredible experiences, and
                                the joy of hosting guests from around the world.
                            </p>
                        </figcaption>
                    </figure>
                    
                    <Confetti numberOfPieces={500}  run={true} className="!fixed mx-auto w-screen h-screen"  />
                </div>
                <footer
                    className={' w-full flex items-center justify-between gap-3 px-4 py-5 lg:px-8 4xl:px-10'}
                >


                    <Button

                        rounded="pill"
                        onClick={() => navigate("/")}
                        type={'submit'}
                        className="ml-auto capitalize gap-1 bg-white  backdrop-blur-lg dark:bg-gray-0/[.35] text-black hover:text-white dark:active:enabled:bg-gray-0/75"
                    >
                        log in
                    </Button>
                </footer>
            </div>

    );
};
export default CreateVendor