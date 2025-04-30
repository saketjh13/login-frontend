import { useState } from 'react';
import Signup from '../components/SignUp';
import Login from '../components/Login';
import background from '../assets/background.jpg';

const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className="flex flex-col md:flex-row w-full min-h-screen overflow-hidden">

            <div className="w-full md:w-2/5 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 py-12 bg-[conic-gradient(at_top_left,_#96cef8,_#bb9fce,_#f7a2bb,_#65abe9)]">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 text-center">
                    {showLogin ? "Welcome Back" : "Create Your Account"}
                </h1>

                {showLogin ? <Login /> : <Signup />}

                <p className="mt-6 text-sm text-center text-slate-700 px-2">
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

            <div className="relative w-full md:w-3/5 h-64 md:h-full flex items-center justify-center md:justify-end px-4 sm:px-8 md:px-10">

                <img
                    src={background}
                    alt="Beach Sunset"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/30 z-10" />

                <div className="relative z-20 text-center md:text-right text-white max-w-md px-4 sm:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 drop-shadow-lg">
                        Plan Your Journey!!
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl drop-shadow-md">
                        Welcome to the shore of new beginnings. Start your journey with calm and confidence.
                    </p>
                </div>
            </div>
        </div>

    );
};

export default LandingPage;
``
