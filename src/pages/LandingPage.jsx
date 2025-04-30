import { useState } from 'react';
import Signup from '../components/SignUp';
import Login from '../components/Login';
import background from '../assets/background.jpg';

const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">

            {/* Full-screen form on mobile, left panel on desktop */}
            <div className="w-full h-full md:w-2/5 md:h-auto flex flex-col justify-center items-center px-6 md:px-16 bg-[conic-gradient(at_top_left,_#96cef8,_#bb9fce,_#f7a2bb,_#65abe9)]">
                <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">
                    {showLogin ? "Welcome Back" : "Create Your Account"}
                </h1>

                {showLogin ? <Login /> : <Signup />}

                <p className="mt-6 text-sm text-center text-slate-700">
                    {showLogin ? (
                        <>
                            Don’t have an account?{' '}
                            <button
                                onClick={() => setShowLogin(false)}
                                className="text-indigo-600 font-semibold hover:underline"
                            >
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button
                                onClick={() => setShowLogin(true)}
                                className="text-indigo-600 font-semibold hover:underline"
                            >
                                Sign In
                            </button>
                        </>
                    )}
                </p>
            </div>

            {/* Right Panel with Image - Only visible on md and up */}
            <div className="hidden md:flex relative w-3/5 h-full items-center justify-end px-10">
                <img
                    src={background}
                    alt="Beach Sunset"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/20 z-10" />
                <div className="relative z-20 text-right text-white max-w-md">
                    <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
                        Plan Your Journey!!
                    </h1>
                    <p className="text-xl drop-shadow-md">
                        Welcome to the shore of new beginnings. Start your journey with calm and confidence.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
