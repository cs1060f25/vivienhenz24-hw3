import { Clock, Users, MessageCircle, Calendar } from "lucide-react";

export default function PreMeetingBrief() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-normal text-slate-900">Pre-Meeting Brief</h1>
        <p className="text-slate-600">Your 5-minute prep for the upcoming meeting</p>
      </div>

      {/* Next Meeting Card */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calendar className="w-5 h-5 text-slate-600" />
            <h2 className="text-xl font-normal text-slate-900">Next Meeting</h2>
          </div>
          <div className="flex items-center space-x-2 text-orange-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-normal">In 5 minutes</span>
          </div>
        </div>
        
        <div className="bg-slate-50 rounded-xl p-4">
          <h3 className="font-normal text-slate-900 mb-2">Product Strategy Sync</h3>
          <p className="text-sm text-slate-600 mb-3">with Sarah Chen, Mike Rodriguez, and 3 others</p>
          <div className="text-xs text-slate-500">
            2:00 PM - 3:00 PM • Zoom Meeting Room
          </div>
        </div>
      </div>

      {/* People You've Met */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <Users className="w-5 h-5 text-slate-600" />
          <h2 className="text-xl font-normal text-slate-900">You&apos;ve met these 2 before</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-4 p-3 bg-slate-50 rounded-xl">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-normal text-blue-800">SC</span>
            </div>
            <div className="flex-1">
              <h4 className="font-normal text-slate-900">Sarah Chen</h4>
              <p className="text-sm text-slate-600">Last met: Q3 Planning (July 15)</p>
              <p className="text-xs text-slate-500">Discussed user research priorities</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-3 bg-slate-50 rounded-xl">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-sm font-normal text-green-800">MR</span>
            </div>
            <div className="flex-1">
              <h4 className="font-normal text-slate-900">Mike Rodriguez</h4>
              <p className="text-sm text-slate-600">Last met: Engineering Standup (August 2)</p>
              <p className="text-xs text-slate-500">Asked about API performance improvements</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversation Hooks */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <MessageCircle className="w-5 h-5 text-slate-600" />
          <h2 className="text-xl font-normal text-slate-900">Hooks to mention</h2>
        </div>
        
        <div className="space-y-3">
          <div className="p-4 bg-blue-50 rounded-xl border-l-4 border-blue-200">
            <p className="text-sm text-slate-700">
              <strong>Sarah</strong> mentioned wanting to see the new user onboarding metrics - perfect time to share the Q3 results
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-xl border-l-4 border-green-200">
            <p className="text-sm text-slate-700">
              <strong>Mike</strong> was concerned about API latency - the recent optimizations reduced response time by 40%
            </p>
          </div>
        </div>
      </div>

      {/* Open Loops */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-xl font-normal text-slate-900">Open loops (promises)</h2>
        
        <div className="space-y-3">
          <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-xl border border-yellow-200">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-slate-700">
                You promised <strong>Sarah</strong> the updated wireframes by end of week
              </p>
              <p className="text-xs text-slate-500 mt-1">From: Design Review (August 8)</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3 p-3 bg-orange-50 rounded-xl border border-orange-200">
            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-slate-700">
                You offered to introduce <strong>Mike</strong> to the DevOps consultant
              </p>
              <p className="text-xs text-slate-500 mt-1">From: Engineering Standup (August 2)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
