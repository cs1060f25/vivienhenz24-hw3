import Navigation from "@/components/Navigation";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="py-16 px-4 pt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl text-gray-800 mb-4">
              Choose Your Plan
            </h1>
            <p className="text-lg text-gray-600">
              Select the perfect plan for your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl text-gray-800 mb-4">Basic</h3>
                <div className="mb-6">
                  <span className="text-4xl text-gray-800">$9</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-600">✓ Up to 5 projects</li>
                  <li className="text-gray-600">✓ 10GB storage</li>
                  <li className="text-gray-600">✓ Email support</li>
                  <li className="text-gray-600">✓ Basic analytics</li>
                </ul>
                <button className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Pro Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl text-gray-800 mb-4">Pro</h3>
                <div className="mb-6">
                  <span className="text-4xl text-gray-800">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-600">✓ Up to 25 projects</li>
                  <li className="text-gray-600">✓ 100GB storage</li>
                  <li className="text-gray-600">✓ Priority support</li>
                  <li className="text-gray-600">✓ Advanced analytics</li>
                  <li className="text-gray-600">✓ Team collaboration</li>
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Enterprise Plan */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl text-gray-800 mb-4">Enterprise</h3>
                <div className="mb-6">
                  <span className="text-4xl text-gray-800">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="text-gray-600">✓ Unlimited projects</li>
                  <li className="text-gray-600">✓ 1TB storage</li>
                  <li className="text-gray-600">✓ 24/7 phone support</li>
                  <li className="text-gray-600">✓ Custom analytics</li>
                  <li className="text-gray-600">✓ API access</li>
                  <li className="text-gray-600">✓ Custom integrations</li>
                </ul>
                <button className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              All plans include a 14-day free trial. No credit card required.
            </p>
            <a href="#" className="text-blue-600 hover:text-blue-500">
              View detailed comparison →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
