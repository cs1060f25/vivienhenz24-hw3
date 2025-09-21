import Navigation from "@/components/Navigation";
import Link from "next/link";
import { Brain, Clock, Database, Video, Glasses, Smartphone, Headphones } from "lucide-react" 
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-normal text-slate-900 mb-6 tracking-tight">
            perfct.io
          </h1>
          <p className="text-2xl md:text-3xl text-slate-700 mb-8 leading-relaxed font-normal">
            Perfect context for any interaction
          </p>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A consent-first meeting sidekick that captures people, faces, names, and &quot;vibes,&quot; 
            then surfaces human-sounding prep and in-the-moment prompts across your meetings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 text-lg font-normal shadow-lg hover:shadow-xl text-center">
              Log In
            </Link>
            <Link href="/signup" className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-100 hover:border-slate-400 transition-all duration-200 text-lg font-normal text-center">
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-slate-900 mb-6">
              The Memory Challenge
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              College students meet dozens of people every week, but remembering the right detail 
              at the right moment shouldn&apos;t be so hard.
            </p>
          </div>
          
          {/* Problem Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-normal text-slate-800 mb-4">Names and Faces Blur</h3>
              <p className="text-slate-600">
                After meeting 20+ people at a networking event, who was the CS major interested in AI?
              </p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-normal text-slate-800 mb-4">Awkward Moments</h3>
              <p className="text-slate-600">
                &quot;Hey... you!&quot; because you forgot their name, or bringing up something they already told you.
              </p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-normal text-slate-800 mb-4">Static Tools</h3>
              <p className="text-slate-600">
                Contact databases optimize for search, not memory. We need tools that optimize for recall.
              </p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-normal mb-6">
                Your AI Memory Partner
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                perfct.io captures the context that matters and surfaces it when you need it most.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-normal mb-6">Consent-First Capture</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-300 mt-1">✓</span>
                    <div>
                      <p className="text-slate-200">Record faces and names (with permission)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-300 mt-1">✓</span>
                    <div>
                      <p className="text-slate-200">Capture conversation &quot;vibes&quot; and key details</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-300 mt-1">✓</span>
                    <div>
                      <p className="text-slate-200">Privacy-first: your data stays secure</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-normal mb-6">Smart Recall</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-slate-300 mt-1">✓</span>
                    <div>
                      <p className="text-slate-200">Pre-meeting prep with relevant context</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-300 mt-1">✓</span>
                    <div>
                      <p className="text-slate-200">In-the-moment prompts during conversations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-300 mt-1">✓</span>
                    <div>
                      <p className="text-slate-200">Fuzzy search: &quot;find the AI startup founder from last week&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-slate-900 mb-6">
              Starting with Zoom, Going Everywhere
            </h2>
            <p className="text-xl text-slate-600">
              MVP focuses on Zoom integration, with plans for wearables, phone calls, and more.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Video className="w-8 h-8 text-slate-600" />
              </div>
              <h4 className="text-lg font-normal text-slate-800 mb-3">Zoom Integration</h4>
              <p className="text-slate-600">MVP starting point</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Glasses className="w-8 h-8 text-slate-600" />
              </div>
              <h4 className="text-lg font-normal text-slate-800 mb-3">Meta Glasses</h4>
              <p className="text-slate-600">Future wearable support</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Smartphone className="w-8 h-8 text-slate-600" />
              </div>
              <h4 className="text-lg font-normal text-slate-800 mb-3">Phone Calls</h4>
              <p className="text-slate-600">Voice conversation capture</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl text-center shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Headphones className="w-8 h-8 text-slate-600" />
              </div>
              <h4 className="text-lg font-normal text-slate-800 mb-3">AirPods</h4>
              <p className="text-slate-600">Seamless audio integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-normal text-slate-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-slate-600">
              CS1060 Final Project Team
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-slate-200">
                <span className="text-lg font-normal text-slate-700">MP</span>
              </div>
              <h4 className="text-lg font-normal text-slate-800">Maia Posternack</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-slate-200">
                <span className="text-lg font-normal text-slate-700">FY</span>
              </div>
              <h4 className="text-lg font-normal text-slate-800">Faisal Younus</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-slate-200">
                <span className="text-lg font-normal text-slate-700">VH</span>
              </div>
              <h4 className="text-lg font-normal text-slate-800">Vivien Henz</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-slate-200">
                <span className="text-lg font-normal text-slate-700">AC</span>
              </div>
              <h4 className="text-lg font-normal text-slate-800">Aaron Contreras</h4>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-slate-100 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-slate-200">
                <span className="text-lg font-normal text-slate-700">SS</span>
              </div>
              <h4 className="text-lg font-normal text-slate-800">Sohum Sukhatankar</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-normal mb-6">
            Ready to Never Forget Again?
          </h2>
          <p className="text-xl mb-8 text-slate-300">
            Join the waitlist to be the first to try perfct.io when we launch.
          </p>
          <Link href="/login" className="inline-block px-8 py-4 bg-white text-slate-900 rounded-xl hover:bg-slate-100 transition-all duration-200 text-lg font-normal shadow-lg hover:shadow-xl">
            Join Waitlist
          </Link>
        </div>
      </section>
    </div>
  );
}
