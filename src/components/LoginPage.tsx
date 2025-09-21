import Navigation from "@/components/Navigation";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="max-w-md w-full">
          <div className="card">
            <h1 className="text-3xl text-center text-slate-900 mb-8 font-normal">
              Welcome Back
            </h1>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm text-slate-700 mb-2 font-normal">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="input"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm text-slate-700 mb-2 font-normal">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="input"
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center justify-between">
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
                
                <a href="#" className="text-sm text-slate-600 hover:text-slate-800 font-normal">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600">
                Don&apos;t have an account?{" "}
                <a href="#" className="text-slate-600 hover:text-slate-800 font-normal">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
