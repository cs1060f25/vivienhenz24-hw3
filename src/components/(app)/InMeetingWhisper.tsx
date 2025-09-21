import { Mic, Users, Circle, MessageSquare, Command, Heart, AlertTriangle, CheckCircle } from "lucide-react";

export default function InMeetingWhisper() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-normal text-slate-900">In-Meeting Whisper</h1>
          <div className="flex items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm">Live • 23 min</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>5 participants consented</span>
            </div>
          </div>
        </div>
        <div className="text-xs text-slate-500">CS121 Final Project Meeting</div>
      </div>


      {/* Live Participants */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-sm font-normal text-slate-900 mb-3 flex items-center gap-2">
          <Users className="w-4 h-4" />
          Live participants
        </h2>
        
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 rounded">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">MP</div>
            <div className="flex-1">
              <div className="text-sm text-slate-900">Maia Posternack</div>
              <div className="text-xs text-slate-500">AI/ML enthusiast • CS concentrator</div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          
          <div className="flex items-center gap-3 p-2 rounded">
            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">FY</div>
            <div className="flex-1">
              <div className="text-sm text-slate-900">Faisal Younus</div>
              <div className="text-xs text-slate-500">systems architect • Meta alum</div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>

          <div className="flex items-center gap-3 p-2 rounded">
            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">VH</div>
            <div className="flex-1">
              <div className="text-sm text-slate-900">Vivien Henz</div>
              <div className="text-xs text-slate-500">design perfectionist • UX-focused</div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          
          <div className="text-xs text-slate-400 pl-2">+2 others (Aaron, Sohum)</div>
        </div>
      </div>

      {/* Live Prompts */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-sm font-normal text-slate-900 mb-3">Subtle prompts</h2>
        
        <div className="space-y-2">
          <div className="p-3 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm text-slate-700 mb-2">💡 Ask Maia about the CS 181 model accuracy results</p>
            <div className="text-xs text-slate-500">Perfect timing - she just mentioned ML performance metrics</div>
          </div>
          
          <div className="p-3 bg-green-50 rounded border border-green-200">
            <p className="text-sm text-slate-700 mb-2">🏗️ Share the database scaling concerns with Faisal</p>
            <div className="text-xs text-slate-500">He&apos;s discussing backend architecture right now</div>
          </div>

          <div className="p-3 bg-purple-50 rounded border border-purple-200">
            <p className="text-sm text-slate-700 mb-2">🎨 Get Vivien&apos;s input on the user onboarding flow</p>
            <div className="text-xs text-slate-500">She just mentioned UX concerns - perfect opportunity</div>
          </div>
        </div>
      </div>

      {/* Quick Capture */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-sm font-normal text-slate-900 mb-3">Quick capture</h2>
        
        <div className="grid grid-cols-2 gap-2">
          <button 
            onClick={() => alert("💭 Memory captured: Maia mentioned 89% model accuracy")}
            className="p-3 bg-slate-50 rounded border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Command className="w-4 h-4" />
              <span>⌘+M Memory</span>
            </div>
          </button>
          
          <button 
            onClick={() => alert("🎯 Vibe tagged: Collaborative problem-solving mode")}
            className="p-3 bg-slate-50 rounded border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Heart className="w-4 h-4" />
              <span>😍 Tag vibes</span>
            </div>
          </button>
          
          <button 
            onClick={() => alert("✅ Follow-up reminder set: Share database insights with Faisal by Friday")}
            className="p-3 bg-slate-50 rounded border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <CheckCircle className="w-4 h-4" />
              <span>1-tap follow-up</span>
            </div>
          </button>
          
          <button 
            onClick={() => alert("👤 New contact modal would open here - feature not yet implemented")}
            className="p-3 bg-slate-50 rounded border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Circle className="w-4 h-4" />
              <span>New contact</span>
            </div>
          </button>
        </div>
      </div>

      {/* Last Statement */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-sm font-normal text-slate-900 mb-3">Last statement</h2>
        <div className="p-3 bg-slate-50 rounded">
          <p className="text-sm text-slate-700">
            <strong>&quot;I think we should definitely train the model on more diverse conversation data before the demo - 87% accuracy is good but we can do better.&quot;</strong>
          </p>
          <div className="text-xs text-slate-500 mt-1">Maia Posternack • just now</div>
        </div>
      </div>

      {/* Consent Status */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-normal text-slate-900">Recording consent</span>
        </div>
        <div className="text-xs text-slate-500">
          All participants have consented to recording and transcription
        </div>
      </div>
    </div>
  );
}
