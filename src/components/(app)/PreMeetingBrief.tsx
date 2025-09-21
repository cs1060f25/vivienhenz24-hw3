import { Clock, Users, MessageCircle, Lightbulb, HelpCircle } from "lucide-react";

export default function PreMeetingBrief() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-normal text-slate-900 mb-1">Pre-Meeting Brief</h1>
        <div className="flex items-center gap-4 text-slate-600">
          <span>CS121 Final Project Meeting • in 5 minutes</span>
          <div className="flex items-center gap-1 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Calendar sync active</span>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Who Might Be There */}
        <div className="space-y-4">
          <h2 className="text-lg font-normal text-slate-900 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Who might be there
          </h2>
          
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-white border border-slate-200">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">MP</div>
                <div className="flex-1">
                  <h3 className="text-sm font-normal text-slate-900">Maia Posternack</h3>
                  <p className="text-xs text-slate-500 mb-1">&quot;Let&apos;s make sure our ML models are actually useful...&quot;</p>
                  <div className="text-xs text-slate-400">AI/ML enthusiast • user-focused • loves clean data • CS concentrator</div>
                  <div className="text-xs text-green-600 mt-1">📅 Last met: 3 days ago at CS 181 study group</div>
                </div>
              </div>
            </div>
            
            <div className="p-3 rounded-lg bg-white border border-slate-200">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">FY</div>
                <div className="flex-1">
                  <h3 className="text-sm font-normal text-slate-900">Faisal Younus</h3>
                  <p className="text-xs text-slate-500 mb-1">&quot;We should think about scalability from day one...&quot;</p>
                  <div className="text-xs text-slate-400">systems architect • startup experience • efficiency-minded • former intern at Meta</div>
                  <div className="text-xs text-blue-600 mt-1">💡 Promised to share backend architecture templates</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-slate-200">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">VH</div>
                <div className="flex-1">
                  <h3 className="text-sm font-normal text-slate-900">Vivien Henz</h3>
                  <p className="text-xs text-slate-500 mb-1">&quot;The UI needs to feel magical but simple...&quot;</p>
                  <div className="text-xs text-slate-400">design perfectionist • UX-focused • loves minimalism • previous design internships</div>
                  <div className="text-xs text-orange-600 mt-1">🎨 Working on Figma prototypes this week</div>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-white border border-slate-200">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs">+2</div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400">Aaron Contreras, Sohum Sukhatankar</div>
                  <div className="text-xs text-slate-500 mt-1">Both confirmed in calendar • Aaron: full-stack dev • Sohum: PM experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vibes to Lean Into */}
        <div className="space-y-4">
          <h2 className="text-lg font-normal text-slate-900 flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            Vibes to lean into
          </h2>
          
          <div className="space-y-2">
            <div className="p-2 rounded bg-blue-50 border border-blue-200">
              <p className="text-sm text-slate-700">🚀 <strong>Move fast, build smart</strong> - everyone values rapid iteration</p>
            </div>
            <div className="p-2 rounded bg-green-50 border border-green-200">
              <p className="text-sm text-slate-700">🎯 <strong>User-first mindset</strong> - team cares deeply about real user problems</p>
            </div>
            <div className="p-2 rounded bg-purple-50 border border-purple-200">
              <p className="text-sm text-slate-700">🧠 <strong>Technical excellence</strong> - high standards for code quality and architecture</p>
            </div>
            <div className="p-2 rounded bg-orange-50 border border-orange-200">
              <p className="text-sm text-slate-700">🤝 <strong>Collaborative energy</strong> - everyone loves brainstorming together</p>
            </div>
          </div>
        </div>

        {/* Suggested Hooks */}
        <div className="space-y-4">
          <h2 className="text-lg font-normal text-slate-900 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Suggested hooks
          </h2>
          
          <div className="space-y-2">
            <div className="p-2 rounded bg-blue-50 border border-blue-200">
              <p className="text-sm text-slate-700">💭 Ask Maia about the CS 181 ML model results - she mentioned 87% accuracy</p>
            </div>
            <div className="p-2 rounded bg-green-50 border border-green-200">
              <p className="text-sm text-slate-700">🏗️ Share the backend architecture decisions with Faisal - he loves system design</p>
            </div>
            <div className="p-2 rounded bg-purple-50 border border-purple-200">
              <p className="text-sm text-slate-700">🎨 Get Vivien&apos;s thoughts on the Zoom sidebar mockups</p>
            </div>
            <div className="p-2 rounded bg-orange-50 border border-orange-200">
              <p className="text-sm text-slate-700">📅 Mention the demo day timeline - everyone&apos;s excited about showcasing</p>
            </div>
          </div>
        </div>

        {/* Questions for End */}
        <div className="space-y-4">
          <h2 className="text-lg font-normal text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            Questions for the end
          </h2>
          
          <div className="space-y-2">
            <div className="p-2 rounded bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-700">&quot;What&apos;s our MVP for the CS121 final demo?&quot;</p>
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-700">&quot;Should we apply to YC with this idea?&quot;</p>
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-700">&quot;Who&apos;s handling user testing this week?&quot;</p>
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-200">
              <p className="text-sm text-slate-700">&quot;Do we need more computing resources for training?&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
