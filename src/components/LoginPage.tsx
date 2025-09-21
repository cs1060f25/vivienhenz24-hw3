import Navigation from "@/components/Navigation";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-normal text-slate-900">
              Welcome Back
            </h1>
            <p className="text-slate-600">
              Sign in to your account to continue
            </p>
          </div>
          
          <form className="space-y-6">
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
                placeholder="Enter your password"
              />
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 text-slate-600 focus:ring-slate-500 border-slate-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-slate-700">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-sm text-slate-600 hover:text-slate-800 font-normal transition-colors">
                Forgot password?
              </a>
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all duration-200 font-normal shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </div>
          </form>
          
          <div className="text-center pt-4">
            <p className="text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <a href="/signup" className="text-slate-900 hover:text-slate-700 font-normal transition-colors border-b border-slate-300 hover:border-slate-600">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
