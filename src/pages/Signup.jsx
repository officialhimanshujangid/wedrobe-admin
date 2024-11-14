/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { PiArrowLineRight, PiArrowRightBold } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Input, Password, Text, Title } from "rizzui";
import Logo from "../components/logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import { SignUpUser } from "../features/slice/Auth";





function Signup() {
    const [reset, setReset] = useState({});
    const { register, handleSubmit,getValues, formState: { errors } } = useForm();
    const { userCreated } = useSelector(state => state.auth);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAgreed: false,
    };

    // const onSubmit = (data) => {
    //   console.log(data,"gadvfvsdjfgj");
    //   setReset({ ...initialValues, isAgreed: false });
    // };
    // useEffect(() => {
    //     if (userCreated === true) {
    //         navigate("/");
    //     }
    // }, [userCreated]);

    console.log(userCreated, "hdfvawufygi")
    const onSubmit = (data) => {


        const reqData = {
            "name": "Jane50 cxSmith",
            "email": "ekghkgyu0859@gmail.com",
            "mobile": "098765468345221",
            "password": "1122",
            "userType": "employee"
        }

        dispatch(SignUpUser(reqData));

    };

    return (
        <>
            <div className="flex h-screen flex-col bg-slate-900 text-white justify-between overflow-auto">
                <div className="flex items-center justify-between p-4 lg:px-16 lg:py-6 2xl:px-24">
                    <Link to="/">
                        {/* <Logo /> */}
                        <img src={"/logo2.png"} width={100} height={100} alt="Isomorphic" />
                    </Link>
                    <div className="flex items-center space-x-2 md:space-x-6">
                        <Link to="/" className="flex hover:bg-white hover:text-rose-600 px-4 rounded-full py-1 items-center">
                            <PiArrowLineRight className="h-4 w-4" />
                            <span>Login</span>
                        </Link>
                    </div>
                </div>

                <div className="flex w-full flex-col justify-center px-5 ">
                    <div className="mx-auto w-full max-w-md py-12 md:max-w-lg lg:max-w-xl 2xl:pb-8 2xl:pt-2">
                        <div className="flex flex-col items-center">
                            <Title as="h2" className="mb-7 text-center text-[28px] font-bold leading-snug md:text-3xl md:!leading-normal lg:mb-10 lg:text-4xl">
                                Sign up with your credentials.
                            </Title>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-x-4 gap-y-5 md:grid md:grid-cols-2 lg:gap-5">
                                <Input
                                    type="text"
                                    size="lg"
                                    label="First Name"
                                    placeholder="Enter your first name"
                                    className="[&>label>span]:font-medium"
                                    inputClassName="text-sm"
                                    {...register('firstName', { required: 'First name is required' })}
                                    error={errors.firstName?.message}
                                />
                                

                                <Input
                                    type="text"
                                    size="lg"
                                    label="Last Name"
                                    placeholder="Enter your last name"
                                    className="[&>label>span]:font-medium"
                                    inputClassName="text-sm"
                                    {...register('lastName', { required: 'Last name is required' })}
                                    error={errors.lastName?.message}
                                />
                          

                                <Input
                                    type="email"
                                    size="lg"
                                    label="Email"
                                    className="col-span-2 [&>label>span]:font-medium"
                                    inputClassName="text-sm"
                                    placeholder="Enter your email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    error={errors.email?.message}
                                />
                            

                                <Password
                                    label="Password"
                                    placeholder="Enter your password"
                                    size="lg"
                                    className="[&>label>span]:font-medium"
                                    inputClassName="text-sm"
                                    {...register('password', { required: 'Password is required' })}
                                    error={errors.password?.message}
                                />
                           

                                <Password
                                    label="Confirm Password"
                                    placeholder="Enter confirm password"
                                    size="lg"
                                    className="[&>label>span]:font-medium"
                                    inputClassName="text-sm"
                                    {...register('confirmPassword', {
                                        required: 'Confirm password is required',
                                        validate: (value) => value === getValues('password') || 'Passwords do not match'
                                    })}
                                    error={errors.confirmPassword?.message}
                                />
                            

                                <div className="col-span-2 flex items-start">
                                    <Checkbox
                                        {...register('isAgreed', { required: 'You must agree to the terms and conditions' })}
                                        className="[&>label>span]:font-medium [&>label]:items-start"
                                        label={
                                            <>
                                                By signing up you have agreed to our{' '}
                                                <Link
                                                    to="/" // Replaced href with to for react-router-dom
                                                    className="font-medium text-blue transition-colors hover:underline"
                                                >
                                                    Terms
                                                </Link>{' '}
                                                &{' '}
                                                <Link
                                                    to="/" // Replaced href with to for react-router-dom
                                                    className="font-medium text-blue transition-colors hover:underline"
                                                >
                                                    Privacy Policy
                                                </Link>
                                            </>
                                        }
                                    />
                                </div>
                                {errors.isAgreed && <span className="text-red-600 text-sm">{errors.isAgreed.message}</span>}

                                <Button size="lg" type="submit" className="col-span-2 mt-2">
                                    <span>Get Started</span>{' '}
                                    <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
                                </Button>
                            </div>
                        </form>

                    </div>
                </div>

                <footer className="flex flex-col-reverse items-center justify-between px-4 py-5 lg:flex-row lg:px-16 lg:py-6 2xl:px-24 2xl:py-10">
                    <div className="-mx-2.5 flex items-center justify-between pb-3 font-medium text-gray-700 w-full lg:pb-0">
                        {/* Footer Links */}
                    </div>
                </footer>
            </div>



        </>
    )
}

export default Signup



