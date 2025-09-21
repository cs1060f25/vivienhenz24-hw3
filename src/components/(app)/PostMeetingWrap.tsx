import { CheckSquare, Mail, Copy, User, Lightbulb, HelpCircle, Star, TrendingUp } from "lucide-react";

export default function PostMeetingWrap() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-normal text-slate-900 mb-1">Post-Meeting Wrap</h1>
        <p className="text-slate-600">CS121 Final Project Meeting • just ended (47 min)</p>
      </div>

      {/* Auto-Summary */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-3">Auto-summary</h2>
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="w-1 h-4 bg-blue-500 rounded-full mt-1"></div>
            <p className="text-sm text-slate-700">🤖 ML model accuracy improved to 89% with new training data - ready for CS121 demo</p>
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-4 bg-green-500 rounded-full mt-1"></div>
            <p className="text-sm text-slate-700">🏗️ Backend architecture finalized - PostgreSQL + Redis for real-time features</p>
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-4 bg-purple-500 rounded-full mt-1"></div>
            <p className="text-sm text-slate-700">🎨 User onboarding flow redesigned based on usability testing feedback</p>
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-4 bg-orange-500 rounded-full mt-1"></div>
            <p className="text-sm text-slate-700">🚀 Team decided to apply to YC Winter 2026 batch after final project success</p>
          </div>
        </div>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-3">Action items</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 rounded">
            <input type="checkbox" className="rounded w-4 h-4" />
            <span className="text-sm text-slate-700 flex-1">🎨 Send updated Figma prototypes to Vivien by Thursday</span>
            <span className="text-xs text-slate-500">You</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded">
            <input type="checkbox" className="rounded w-4 h-4" />
            <span className="text-sm text-slate-700 flex-1">🤖 Help Maia with model training data preprocessing</span>
            <span className="text-xs text-slate-500">You</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded">
            <input type="checkbox" className="rounded w-4 h-4" />
            <span className="text-sm text-slate-700 flex-1">🏗️ Set up production database environment</span>
            <span className="text-xs text-slate-500">Faisal</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded">
            <input type="checkbox" className="rounded w-4 h-4" />
            <span className="text-sm text-slate-700 flex-1">📅 Schedule practice demo session for next week</span>
            <span className="text-xs text-slate-500">Aaron</span>
          </div>
        </div>
      </div>

      {/* Follow-up Draft */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-normal text-slate-900 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Follow-up draft
          </h2>
          <button className="p-1 hover:bg-slate-100 rounded">
            <Copy className="w-4 h-4 text-slate-500" />
          </button>
        </div>
        
        <div className="bg-slate-50 rounded p-3 text-sm text-slate-700">
          <div className="mb-2"><strong>To:</strong> Maia, Faisal, Vivien, Aaron, Sohum</div>
          <div className="mb-3"><strong>Subject:</strong> CS121 Final Project - Great Progress & Next Steps</div>
          <div className="space-y-2">
            <p>Hey team,</p>
            <p>Incredible session today! 🚀 Here&apos;s what we nailed down:</p>
            <p>• 🤖 ML model is performing at 89% accuracy - demo-ready!<br/>
               • 🏗️ Backend architecture decided: PostgreSQL + Redis<br/>
               • 🎨 New onboarding flow approved after user testing<br/>
               • 🎯 YC application plan for Winter 2026 - let&apos;s do this!</p>
            <p>Action items assigned - let&apos;s crush this final demo! 💪</p>
            <p>Perfct vibes as always,<br/>The Team</p>
          </div>
        </div>
        
        <div className="flex gap-2 mt-3">
          <button 
            onClick={() => alert("📧 Email draft copied to clipboard! Ready to paste into your email client.")}
            className="px-3 py-1 bg-slate-900 text-white rounded text-sm hover:bg-slate-800"
          >
            Copy to email
          </button>
          <button 
            onClick={() => alert("✏️ Edit mode would open here - feature not yet implemented")}
            className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm hover:bg-slate-200"
          >
            Edit draft
          </button>
        </div>
      </div>

      {/* New/Updated Person Cards */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-3 flex items-center gap-2">
          <User className="w-4 h-4" />
          Updated person cards
        </h2>
        
        <div className="space-y-3">
          <div className="border border-slate-200 rounded p-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">MP</div>
              <div className="flex-1">
                <h3 className="text-sm font-normal text-slate-900">Maia Posternack</h3>
                <p className="text-xs text-slate-500 mb-2">CS Concentrator • Harvard &apos;25</p>
                <div className="text-xs text-slate-600">
                  <strong>New insights:</strong> &quot;89% model accuracy achieved with diverse training data - really excited about demo performance&quot;
                </div>
                <div className="flex gap-1 mt-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">ML-expert</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">quality-focused</span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">detail-oriented</span>
                </div>
              </div>
              <div className="text-xs text-slate-400">96% confident</div>
            </div>
          </div>
          
          <div className="border border-slate-200 rounded p-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">FY</div>
              <div className="flex-1">
                <h3 className="text-sm font-normal text-slate-900">Faisal Younus</h3>
                <p className="text-xs text-slate-500 mb-2">CS Concentrator • Former Meta Intern</p>
                <div className="text-xs text-slate-600">
                  <strong>New insights:</strong> &quot;PostgreSQL + Redis combo will handle 10K+ concurrent users easily - solid foundation for scaling&quot;
                </div>
                <div className="flex gap-1 mt-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">systems-architect</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">scaling-expert</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">performance-minded</span>
                </div>
              </div>
              <div className="text-xs text-slate-400">94% confident</div>
            </div>
          </div>

          <div className="border border-slate-200 rounded p-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">VH</div>
              <div className="flex-1">
                <h3 className="text-sm font-normal text-slate-900">Vivien Henz</h3>
                <p className="text-xs text-slate-500 mb-2">Design Specialist • Previous Design Internships</p>
                <div className="text-xs text-slate-600">
                  <strong>New insights:</strong> &quot;User testing revealed 3 key friction points - new flow reduces onboarding time by 40%&quot;
                </div>
                <div className="flex gap-1 mt-2">
                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs">UX-expert</span>
                  <span className="px-2 py-1 bg-pink-100 text-pink-700 rounded text-xs">user-research</span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">minimalist</span>
                </div>
              </div>
              <div className="text-xs text-slate-400">93% confident</div>
            </div>
          </div>
        </div>
      </div>

      {/* Spaced Reinforcement */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Reminders &amp; recall
        </h2>
        
        <div className="space-y-2">
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-slate-700 mb-2">📅 <strong>Next week:</strong> Follow up on Vivien&apos;s Figma prototype updates</p>
            <div className="text-xs text-slate-500">Spaced reminder to strengthen memory connection</div>
          </div>
          
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <p className="text-sm text-slate-700 mb-2">🧠 <strong>Micro-quiz:</strong> What ML accuracy % did Maia achieve with the new training data?</p>
            <button 
              onClick={() => alert("🎯 Correct! Maia achieved 89% accuracy. Memory connection strengthened!")}
              className="text-xs text-green-700 hover:text-green-800"
            >
              Take 30-second quiz →
            </button>
          </div>

          <div className="p-3 bg-purple-50 rounded border border-purple-200">
            <p className="text-sm text-slate-700 mb-2">🎯 <strong>In 3 days:</strong> Check in on Faisal&apos;s database setup progress</p>
            <div className="text-xs text-slate-500">Proactive reminder based on action item timeline</div>
          </div>
        </div>
      </div>
    </div>
  );
}
