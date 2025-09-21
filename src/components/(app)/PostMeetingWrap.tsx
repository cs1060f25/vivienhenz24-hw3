import { CheckSquare, Mail, Calendar, Clock, FileText } from "lucide-react";

export default function PostMeetingWrap() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-normal text-slate-900">Post-Meeting Wrap</h1>
        <p className="text-slate-600">Review, follow up, and schedule next steps</p>
      </div>

      {/* Meeting Summary */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-slate-600" />
          <h2 className="text-xl font-normal text-slate-900">Meeting Summary</h2>
        </div>
        
        <div className="bg-slate-50 rounded-xl p-4 space-y-3">
          <h3 className="font-normal text-slate-900">Product Strategy Sync</h3>
          <div className="text-sm text-slate-600">
            <p className="mb-2">Duration: 58 minutes • 5 participants</p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-normal text-slate-800">Key Points:</h4>
            <ul className="text-sm text-slate-600 space-y-1 ml-4">
              <li>• Q3 user research showed 15% retention improvement</li>
              <li>• Mobile onboarding prioritized for Q4 roadmap</li>
              <li>• API performance optimizations reduced latency by 40%</li>
              <li>• Team alignment on product strategy for next quarter</li>
            </ul>
          </div>
        </div>
        
        <button className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors">
          Review Full Meeting Transcript
        </button>
      </div>

      {/* Follow-up Drafts */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-slate-600" />
          <h2 className="text-xl font-normal text-slate-900">Follow-up Drafts</h2>
        </div>
        
        <div className="space-y-4">
          {/* Draft 1 */}
          <div className="border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-normal text-slate-800">Email to Sarah Chen</h4>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors">
                  Accept
                </button>
                <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors">
                  Edit
                </button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-3">
              <p className="text-sm text-slate-700">
                <strong>Subject:</strong> Q3 User Research Follow-up<br/><br/>
                Hi Sarah,<br/><br/>
                Great discussion today on the user research findings. The 15% retention improvement is fantastic! 
                As promised, I&apos;ll have the updated wireframes ready by Friday.<br/><br/>
                Let me know if you need anything else for the mobile onboarding project.<br/><br/>
                Best regards
              </p>
            </div>
          </div>

          {/* Draft 2 */}
          <div className="border border-slate-200 rounded-xl p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="font-normal text-slate-800">Email to Mike Rodriguez</h4>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors">
                  Accept
                </button>
                <button className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors">
                  Edit
                </button>
              </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg p-3">
              <p className="text-sm text-slate-700">
                <strong>Subject:</strong> DevOps Consultant Introduction<br/><br/>
                Hi Mike,<br/><br/>
                Following up on our conversation about API performance. I&apos;ll connect you with 
                Lisa Park, the DevOps consultant I mentioned. She specializes in scaling challenges 
                similar to what we discussed.<br/><br/>
                I&apos;ll make the introduction by tomorrow.<br/><br/>
                Cheers
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scheduled Reminders */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-slate-600" />
          <h2 className="text-xl font-normal text-slate-900">Scheduled Reminders</h2>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-blue-600" />
              <div>
                <p className="font-normal text-slate-900">Send deck to team</p>
                <p className="text-sm text-slate-600">Reminder set for tomorrow 9:00 AM</p>
              </div>
            </div>
            <CheckSquare className="w-5 h-5 text-blue-600" />
          </div>
          
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="flex items-center space-x-3">
              <Clock className="w-4 h-4 text-green-600" />
              <div>
                <p className="font-normal text-slate-900">Follow up on wireframes with Sarah</p>
                <p className="text-sm text-slate-600">Reminder set for Friday 2:00 PM</p>
              </div>
            </div>
            <CheckSquare className="w-5 h-5 text-green-600" />
          </div>
        </div>
        
        <button className="w-full py-3 px-4 border-2 border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors">
          + Add Custom Reminder
        </button>
      </div>

      {/* Action Items */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-xl font-normal text-slate-900">Next Steps</h2>
        
        <div className="space-y-2">
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
            <input type="checkbox" className="rounded" />
            <span className="text-sm text-slate-700">Complete wireframes for Sarah (Due: Friday)</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
            <input type="checkbox" className="rounded" />
            <span className="text-sm text-slate-700">Introduce Mike to DevOps consultant (Due: Tomorrow)</span>
          </div>
          
          <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg">
            <input type="checkbox" className="rounded" />
            <span className="text-sm text-slate-700">Send product strategy deck to team (Due: Tomorrow)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
