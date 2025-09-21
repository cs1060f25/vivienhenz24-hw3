import { Mic, Users, Camera, Circle, MessageSquare } from "lucide-react";

export default function InMeetingWhisper() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-normal text-slate-900">In-Meeting Whisper</h1>
        <p className="text-slate-600">Live assistance and context during your meeting</p>
      </div>

      {/* Meeting Status */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-normal text-slate-900">Live Meeting</span>
            </div>
          </div>
          <div className="text-sm text-slate-600">42 minutes elapsed</div>
        </div>
        
        <div className="bg-slate-50 rounded-xl p-4">
          <h3 className="font-normal text-slate-900 mb-2">Product Strategy Sync</h3>
          <div className="flex items-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>5 participants</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mic className="w-4 h-4" />
              <span>Recording with consent</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Capture */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-xl font-normal text-slate-900">Quick Capture</h2>
        
        <button className="w-full p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors flex items-center justify-center space-x-2">
          <Circle className="w-5 h-5" />
          <span>1-Tap Capture New Contact</span>
        </button>
        
        <div className="text-center">
          <p className="text-sm text-slate-600">
            Instantly save details about someone you just met
          </p>
        </div>
      </div>

      {/* Live Prompts */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-xl font-normal text-slate-900">Live Prompts</h2>
        
        <div className="space-y-3">
          {/* Relevant Prompt */}
          <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm text-slate-700 mb-2">
                  Sarah just mentioned &quot;user retention&quot; - you have relevant Q3 data that shows 15% improvement
                </p>
                <button className="text-xs text-blue-700 hover:text-blue-800 font-normal">
                  Share this insight →
                </button>
              </div>
              <button className="text-xs text-slate-500 hover:text-slate-700 ml-2">
                Dismiss
              </button>
            </div>
          </div>
          
          {/* Irrelevant Prompt (dismissed) */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 opacity-50">
            <div className="flex items-center justify-between">
              <p className="text-sm text-slate-600">
                Prompt about budget discussions (dismissed)
              </p>
              <span className="text-xs text-slate-500">Ignored</span>
            </div>
          </div>
        </div>
      </div>

      {/* Meeting Notes Preview */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <MessageSquare className="w-5 h-5 text-slate-600" />
          <h2 className="text-xl font-normal text-slate-900">Live Notes</h2>
        </div>
        
        <div className="space-y-3">
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-700">
              <strong>14:32</strong> - Sarah presented Q3 user research findings
            </p>
          </div>
          
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-700">
              <strong>14:28</strong> - Mike raised concerns about API performance during peak hours
            </p>
          </div>
          
          <div className="p-3 bg-slate-50 rounded-lg">
            <p className="text-sm text-slate-700">
              <strong>14:25</strong> - Team agreed to prioritize mobile onboarding improvements
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xs text-slate-500">
            Notes are being captured in real-time
          </p>
        </div>
      </div>
    </div>
  );
}
