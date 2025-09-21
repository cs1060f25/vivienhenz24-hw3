import Navigation from "@/components/Navigation";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl text-black mb-6 tracking-tight">
            perfct.io
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-8 leading-relaxed">
            Perfect context for any interaction
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A consent-first meeting sidekick that captures people, faces, names, and "vibes," 
            then surfaces human-sounding prep and in-the-moment prompts across your meetings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg">
              Join Waitlist
            </button>
            <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-6">
              The Memory Challenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              College students meet dozens of people every week, but remembering the right detail 
              at the right moment shouldn't be so hard.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">😵‍💫</span>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Names and Faces Blur</h3>
              <p className="text-gray-600">
                After meeting 20+ people at a networking event, who was the CS major interested in AI?
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏰</span>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Awkward Moments</h3>
              <p className="text-gray-600">
                "Hey... you!" because you forgot their name, or bringing up something they already told you.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🗂️</span>
              </div>
              <h3 className="text-xl text-gray-800 mb-3">Static Tools</h3>
              <p className="text-gray-600">
                Contact databases optimize for search, not memory. We need tools that optimize for recall.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-6">
              Your AI Memory Partner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              perfct.io captures the context that matters and surfaces it when you need it most.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl text-gray-800 mb-6">Consent-First Capture</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <div>
                    <p className="text-gray-700">Record faces and names (with permission)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <div>
                    <p className="text-gray-700">Capture conversation "vibes" and key details</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">✓</span>
                  <div>
                    <p className="text-gray-700">Privacy-first: your data stays secure</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl text-gray-800 mb-6">Smart Recall</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <div>
                    <p className="text-gray-700">Pre-meeting prep with relevant context</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <div>
                    <p className="text-gray-700">In-the-moment prompts during conversations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <div>
                    <p className="text-gray-700">Fuzzy search: "find the AI startup founder from last week"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-6">
              Starting with Zoom, Going Everywhere
            </h2>
            <p className="text-xl text-gray-600">
              MVP focuses on Zoom integration, with plans for wearables, phone calls, and more.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">💻</span>
              </div>
              <h4 className="text-lg text-gray-800 mb-2">Zoom Integration</h4>
              <p className="text-sm text-gray-600">MVP starting point</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🥽</span>
              </div>
              <h4 className="text-lg text-gray-800 mb-2">Meta Glasses</h4>
              <p className="text-sm text-gray-600">Future wearable support</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">📱</span>
              </div>
              <h4 className="text-lg text-gray-800 mb-2">Phone Calls</h4>
              <p className="text-sm text-gray-600">Voice conversation capture</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-xl">🎧</span>
              </div>
              <h4 className="text-lg text-gray-800 mb-2">AirPods</h4>
              <p className="text-sm text-gray-600">Seamless audio integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-gray-800 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              CS1060 Final Project Team
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl text-blue-800">MP</span>
              </div>
              <h4 className="text-lg text-gray-800">Maia Posternack</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl text-green-800">FY</span>
              </div>
              <h4 className="text-lg text-gray-800">Faisal Younus</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl text-purple-800">VH</span>
              </div>
              <h4 className="text-lg text-gray-800">Vivien Henz</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl text-orange-800">AC</span>
              </div>
              <h4 className="text-lg text-gray-800">Aaron Contreras</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-xl text-red-800">SS</span>
              </div>
              <h4 className="text-lg text-gray-800">Sohum Sukhatankar</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-6">
            Ready to Never Forget Again?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the waitlist to be the first to try perfct.io when we launch.
          </p>
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            Join Waitlist
          </button>
        </div>
      </section>
    </div>
  );
}
