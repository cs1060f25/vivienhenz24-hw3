import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-normal text-slate-900">
              Create Account
            </h1>
            <p className="text-slate-600">
              Join perfct.io and never forget again
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="firstName" className="block text-sm text-slate-700 font-normal">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border-0 border-b-2 border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:border-slate-600 focus:ring-0 focus:outline-none transition-colors duration-200"
                  placeholder="First name"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="lastName" className="block text-sm text-slate-700 font-normal">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border-0 border-b-2 border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:border-slate-600 focus:ring-0 focus:outline-none transition-colors duration-200"
                  placeholder="Last name"
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm text-slate-700 font-normal">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border-0 border-b-2 border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:border-slate-600 focus:ring-0 focus:outline-none transition-colors duration-200"
                placeholder="Enter your email"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm text-slate-700 font-normal">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border-0 border-b-2 border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:border-slate-600 focus:ring-0 focus:outline-none transition-colors duration-200"
                placeholder="Create a password"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="confirmPassword" className="block text-sm text-slate-700 font-normal">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full px-4 py-3 border-0 border-b-2 border-slate-300 bg-white text-slate-900 placeholder-slate-500 focus:border-slate-600 focus:ring-0 focus:outline-none transition-colors duration-200"
                placeholder="Confirm your password"
              />
            </div>
            
            <div className="flex items-start pt-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 text-slate-600 focus:ring-slate-500 border-slate-300 rounded mt-1"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-slate-700 leading-relaxed">
                I agree to the{" "}
                <a href="#" className="text-slate-900 hover:text-slate-700 font-normal transition-colors border-b border-slate-300 hover:border-slate-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-slate-900 hover:text-slate-700 font-normal transition-colors border-b border-slate-300 hover:border-slate-600">
                  Privacy Policy
                </a>
              </label>
            </div>
            
            <div className="pt-4">
              <Link
                href="/onboarding"
                className="block w-full py-3 px-6 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-200 font-normal shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                Create Account
              </Link>
            </div>
          </form>
          
          <div className="text-center pt-4">
            <p className="text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login" className="text-slate-900 hover:text-slate-700 font-normal transition-colors border-b border-slate-300 hover:border-slate-600">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
