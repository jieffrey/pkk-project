import { FaUser, FaEnvelope, FaLock, FaFacebookF, FaGoogle } from "react-icons/fa";

export default function LoginPage() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row">

            {/* Left Section - Illustration */}
            <div className="flex-1 bg-gradient-to-r from-purple-100 to-blue-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-purple-300 rounded-full opacity-80 blur-lg absolute"></div>
                <div className="relative z-10 text-white font-bold text-2xl md:text-3xl">
                    <p>Hello,</p>
                    <p>Welcome!</p>
                </div>
            </div>

            {/* Rigth Section - Form */}
            <div className="flex-1 flex flex-col justify-center items-center bg-white px-6 md:px-16 py-12">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">Create Account</h2>

                <form className="w-full max-w-sm space-y-5">
                    {/* Username */}
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaUser className="text-gray-500 mr-3" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full outline-none text-gray-700 bg-transparent"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaEnvelope className="text-gray-500 mr-3" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full outline-none text-gray-700 bg-transparent"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaLock className="text-gray-500 mr-3" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full outline-none text-gray-700 bg-transparent"
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 rounded-lg text-white font-semibold bg-gradient-to-r from-purple-300 to-pink-300 hover:opacity-90 transition"
                    >
                        Sign Up
                    </button>

                    {/* OR Divider */}
                    <div className="flex items-center justify-center gap-3 text-gray-400 text-sm mt-6">
                        <span className="w-16 h-[1px] bg-gray-300"></span>
                        <p>- OR -</p>
                        <span className="w-16 h-[1px] bg-gray-300"></span>
                    </div>

                    {/* Social Login */}
                    <div className="flex justify-center gap-6 mt-4">
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                            <FaFacebookF className="text-blue-600" />
                        </button>
                        <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition">
                            <FaGoogle className="text-red-500" />
                        </button>
                    </div>

                    {/* Already have account */}
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Already have an account?{" "}
                        <a href="#" className="text-blue-600 font-semibold hover:underline">
                            Login
                        </a>
                    </p>
                </form>
            </div>

            
        </section>
    );
}
