// "use client"; // This line makes the component a Client Component
// import { Button, Checkbox, Input, Password, Text, Title } from "rizzui";
// import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
// // import Image from 'next/image';
// import { PiArrowLeftBold, PiAppleLogoFill, PiUserCirclePlus, PiArrowLineRight } from 'react-icons/pi';
// import { BsFacebook } from 'react-icons/bs';
// import { FcGoogle } from 'react-icons/fc';
// import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";

// export default function Login() {
//     // Initialize the form with react-hook-form

//         const dispatch = useDispatch();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(loginUser({ email, password }));
//     };

//     // Handle form submission
//     const onSubmit = (data) => {
//         console.log(data); // Handle your form submission logic here
//     };

//     return (
//         <>
//             <div className="flex min-h-screen w-full flex-col justify-between">
//                 <header className="flex items-center justify-between p-4 lg:px-16 lg:py-6 2xl:px-24">
//                     <Link href="/">
//                         {/* <Image src={"/logo.png"} width={200} height={200} alt="Isomorphic" /> */}
//                     </Link>
//                     <div className="flex items-center space-x-2 md:space-x-6">
//                         <Link href="/login" className="flex hover:bg-white hover:text-rose-600 px-4  rounded-full py-1 items-center ">
//                             <PiArrowLineRight className="h-4 w-4" />
//                             <span>Login</span>
//                         </Link>
//                         <Link href="/signup" className="flex hover:bg-white hover:text-rose-600 px-4  rounded-full py-1 items-center">
//                             <PiUserCirclePlus className="h-4 w-4" />
//                             <span>Sign Up</span>
//                         </Link>
//                     </div>
//                 </header>

//                 <div className="flex w-full flex-col justify-center px-5">
//                     <div className="mx-auto w-full max-w-md py-12 md:max-w-lg lg:max-w-xl 2xl:pb-8 2xl:pt-2">
//                         <div className="flex flex-col items-center">
//                             <Link href="/" className="mb-7 inline-block max-w-[64px] lg:mb-9">
//                                 {/* <Image src={"/logo.png"} width={200} height={200} alt="Isomorphic" /> */}
//                             </Link>
//                             <Title
//                                 as="h2"
//                                 className="mb-7 text-center text-[28px] font-bold leading-snug md:text-3xl md:!leading-normal lg:mb-10 lg:text-4xl"
//                             >
//                                 Welcome Back! Sign in with your credentials.
//                             </Title>
//                         </div>
//                         {isSocialLoginActive && (
//                             <>
//                                 <div className="flex flex-col gap-4 pb-6 md:flex-row md:gap-6 xl:pb-7">
//                                     <Button variant="outline" className="h-11 w-full">
//                                         <FcGoogle className="me-2 h-4 w-4 shrink-0" />
//                                         <span className="truncate">Sign in with Google</span>
//                                     </Button>
//                                     <Button variant="outline" className="h-11 w-full">
//                                         <BsFacebook className="me-2 h-4 w-4 shrink-0 md:h-5 md:w-5" />
//                                         <span className="truncate">Sign in with Facebook</span>
//                                     </Button>
//                                 </div>
//                                 <Text className="mb-5 text-center">Or, sign in with your email</Text>
//                             </>
//                         )}

//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div className="space-y-5 lg:space-y-6">
//                                 <Input
//                                     type="email"
//                                     size={isMedium ? 'lg' : 'xl'}
//                                     label="Email"
//                                     placeholder="Enter your email"
//                                     className="[&>label>span]:font-medium"
//                                     {...register('email', { required: "Email is required" })}
//                                     error={errors.email?.message}
//                                 />
//                                 <Password
//                                     label="Password"
//                                     placeholder="Enter your password"
//                                     size={isMedium ? 'lg' : 'xl'}
//                                     className="[&>label>span]:font-medium"
//                                     {...register('password', { required: "Password is required" })}
//                                     error={errors.password?.message}
//                                 />
//                                 <div className="flex items-center justify-between pb-1">
//                                     <Checkbox
//                                         {...register('rememberMe')}
//                                         label="Remember Me"
//                                         className="[&>label>span]:font-medium"
//                                     />
//                                     <Link
//                                         href="/forgot-password"
//                                         className="h-auto p-0 text-sm font-semibold text-gray-700 underline transition-colors hover:text-primary hover:no-underline"
//                                     >
//                                         Forgot Password?
//                                     </Link>
//                                 </div>

//                                 <Button
//                                     className="w-full"
//                                     type="submit"
//                                     size={isMedium ? 'lg' : 'xl'}
//                                 >
//                                     Sign In
//                                 </Button>
//                             </div>
//                         </form>

//                         <Text className="mt-6 text-center text-[15px] leading-loose text-gray-500 md:mt-7 lg:mt-9 lg:text-base">
//                             Don’t have an account?{' '}
//                             <Link
//                                 href="/signup"
//                                 className="font-semibold text-gray-700 transition-colors hover:text-primary"
//                             >
//                                 Sign Up
//                             </Link>
//                         </Text>
//                     </div>
//                 </div>

//                 <footer className="flex flex-col-reverse items-center justify-between px-4 py-5 lg:flex-row lg:px-16 lg:py-6 2xl:px-24 2xl:py-10">

//                     <div className="-mx-2.5 flex items-center justify-between pb-3 font-medium text-gray-700 w-full lg:pb-0">

//                         {[
//                             { name: 'Help', href: '/' },
//                             { name: 'Privacy', href: '/' },
//                             { name: 'Terms', href: '/' }
//                         ].map((item) => (
//                             <Link
//                                 key={item.name}
//                                 href={item.href}
//                                 className="px-2.5 py-1.5 transition-colors hover:text-primary"
//                             >
//                                 {item.name}
//                             </Link>
//                         ))}
//                     </div>
//                 </footer>
//             </div>
//         </>
//     );
// }



import { Button, Checkbox, Input, Password, Text, Title } from "rizzui";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PiArrowLineRight, PiUserCirclePlus } from 'react-icons/pi';
import { loginUser } from "../features/slice/Auth";
import Logo from "../components/logo/Logo";


const Login = () => {
    // Initialize the form with react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const authLocal = JSON.parse(localStorage.getItem("user"))
    const { auth, isAuthenticated } = useSelector(state => state.auth);
    // const data = JSON.parse(localStorage.getItem("user"));
    // const token = localStorage.getItem("token");

    // useEffect(() => {
    //     let isAuth = auth || authLocal || isAuthenticated ? true : false;
    //     if (isAuth) {
    //         navigate("/app")
    //     } else {
    //         navigate('/');
    //     }
    // }, [isAuthenticated]);
    useEffect(() => {

        const isAuth = auth || authLocal || isAuthenticated;


        if (isAuth) {
            navigate("/dashboard");
        }
    }, [auth, isAuthenticated, authLocal, navigate]);
    const onSubmit = (data) => {
        const { username, password } = data;
        const reqData = {
            isClient: true,
            host: window.location.host,
            username: username,
            password: password,

        }
        // const { email, password } = data;
        // const reqData = {
        // email:email,
        // password:password,
        //         }
        demoLogin(reqData)
    };

const demoLogin  = (reqData)=>{
    localStorage.setItem("user" , JSON.stringify({
        "username": reqData?.username ?? "test",
    }))
    localStorage.setItem("token" , 'hvbfvhfvvfvhjfsfvjkshfgvhsgvlhslvhg')
    localStorage.setItem("token" , "demooooooToken")
    navigate('/dashboard')
}


    return (
        <>
            <div className="flex h-screen overflow-auto w-full bg-gray-900 flex-col justify-between">
                <header className="flex items-center justify-between p-4 lg:px-16 lg:py-6 2xl:px-24">
                    <Link to="/">
                        <img src={"/logo2.png"} width={100} height={100} alt="Isomorphic" />
                        {/* <Logo /> */}

                    </Link>
                    <div className="flex items-center space-x-2 md:space-x-6">
                        {/* <Link to="/" className="flex hover:bg-white hover:text-rose-600 px-4 rounded-full py-1 items-center">
                            <PiArrowLineRight className="h-4 w-4" />
                            <span>Login</span>
                        </Link> */}
                        {/* <Link to="/signup" className="flex hover:bg-white hover:text-rose-600 px-4 rounded-full py-1 items-center">
                            <PiUserCirclePlus className="h-4 w-4" />
                            <span>Sign Up</span>
                        </Link> */}
                    </div>
                </header>

                <div className="flex w-full flex-col justify-center px-5">
                    <div className="mx-auto w-full max-w-md py-12 md:max-w-lg lg:max-w-xl 2xl:pb-8 2xl:pt-2">
                        <div className="flex flex-col items-center">
                            <Link to="/" className="mb-7 inline-block max-w-[64px] lg:mb-9">
                                {/* <Image src={"/logo.png"} width={200} height={200} alt="Isomorphic" /> */}
                            </Link>
                            <Title
                                as="h2"
                                className="mb-7 text-center text-[28px] text-white font-bold leading-snug md:text-3xl md:!leading-normal lg:mb-10 lg:text-4xl"
                            >
                                Welcome Back! Sign in with your credentials.
                            </Title>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="space-y-5 lg:space-y-6">
                                <Input
                                    type="input"
                                    size="xl"
                                    label="Email"
                                    defaultValue={"test"}
                                    placeholder="Enter your email"
                                    className="[&>label>span]:font-medium [&>label>span]:text-white"
                                    {...register('username', { required: "Email is required" })}
                                    error={errors.username?.message} // Updated to match the registered field
                                />

                                <Password
                                    label="Password"
                                    placeholder="Enter your password"
                                    defaultValue={"123456"}
                                    size="xl"
                                    className="[&>label>span]:font-medium [&>label>span]:text-white"
                                    {...register('password', { required: "Password is required" })}
                                    error={errors.password?.message}
                                />
                                <div className="flex items-center justify-between pb-1">
                                    <Checkbox
                                        {...register('rememberMe')}
                                        label="Remember Me"
                                        className="[&>label>span]:font-medium [&>label>span]:text-white "
                                    />
                                    {/* <Link
                                        to="/forgot-password"
                                        className="h-auto p-0 text-sm font-semibold text-gray-700 underline transition-colors hover:text-primary hover:no-underline"
                                    >
                                        Forgot Password?
                                    </Link> */}
                                </div>

                                <Button
                                    className="w-full bg-slate-50 text-black"
                                    type="submit"
                                    size="xl"
                                >
                                    Sign In
                                </Button>
                            </div>
                        </form>

                        <Text onClick={demoLogin} className="mt-6 capitalize text-sidebarTheme-dark text-center text-[15px] leading-loose   cursor-pointer lg:text-base">
                           login as demo account {' '}
                           
                        </Text>
                        <Text className="mt-6 text-center text-[15px] leading-loose  text-white md:mt-7 lg:mt-9 lg:text-base">
                            Don’t have an account?{' '}
                            <Link
                                to="/signup"
                                className="font-semibold text-white transition-colors hover:text-slate-300"
                            >
                                Sign Up
                            </Link>
                        </Text>
                    </div>
                </div>

                <footer className="flex flex-col-reverse items-center justify-between px-4 py-5 lg:flex-row lg:px-16 lg:py-6 2xl:px-24 2xl:py-10">
                    <div className="-mx-2.5 flex items-center justify-between pb-3 font-medium text-gray-700 w-full lg:pb-0">
                        {[
                            { name: 'Help', href: '/' },
                            { name: 'Privacy', href: '/' },
                            { name: 'Terms', href: '/' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className="px-2.5 py-1.5 transition-colors text-white"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </footer>
            </div>
        </>
    );
}
export default Login;
