import Navigation from "@/components/Navigation";

export default function LoginPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-screen px-4 pt-16">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl text-center text-gray-800 mb-8">
              Welcome Back
            </h1>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <a href="#" className="text-sm text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <a href="#" className="text-blue-600 hover:text-blue-500">
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
