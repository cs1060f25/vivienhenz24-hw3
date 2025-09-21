import { Brain, TrendingUp, Users, MessageCircle, Calendar, Target, Clock, Star } from "lucide-react";

export default function MemoryInsights() {
  const networkStats = {
    totalContacts: 127,
    activeConnections: 23,
    weeklyMeetings: 8,
    memoryStrength: 89
  };

  const recentInsights = [
    {
      id: 1,
      type: "pattern",
      icon: TrendingUp,
      title: "Meeting Pattern Detected",
      description: "You have 3x more productive conversations when Maia and Faisal are both present",
      confidence: "92%",
      action: "Consider scheduling more trio meetings"
    },
    {
      id: 2,
      type: "reminder",
      icon: Clock,
      title: "Follow-up Opportunity",
      description: "Sophie Martinez (Climate VC) mentioned Series A timing - 15 days since last contact",
      confidence: "86%",
      action: "Send update on sustainability metrics"
    },
    {
      id: 3,
      type: "connection",
      icon: Users,
      title: "Network Bridge",
      description: "Alex Chen and David Park both work on AI ethics - potential collaboration",
      confidence: "78%",
      action: "Introduce them at next Harvard AI meetup"
    }
  ];

  const memoryGraph = [
    { topic: "AI/ML", connections: 15, strength: 95 },
    { topic: "Startups", connections: 12, strength: 88 },
    { topic: "Climate Tech", connections: 8, strength: 82 },
    { topic: "Design/UX", connections: 7, strength: 90 },
    { topic: "Harvard", connections: 25, strength: 96 },
    { topic: "YC", connections: 6, strength: 85 }
  ];

  const upcomingReminders = [
    {
      id: 1,
      person: "Vivien Henz",
      reminder: "Ask about Figma prototype feedback",
      when: "Tomorrow",
      context: "She mentioned wanting to share design insights"
    },
    {
      id: 2, 
      person: "Morgan Thompson",
      reminder: "Check on Pixel (golden retriever)",
      when: "Next week",
      context: "Great conversation starter and they love talking about their dog"
    },
    {
      id: 3,
      person: "Riley Johnson",
      reminder: "Follow up on Figma collaboration features",
      when: "In 3 days",
      context: "They were excited to share what the team is building"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-normal text-slate-900 mb-1">Memory Insights</h1>
        <p className="text-slate-600">Your personal memory graph and connection patterns</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <Users className="w-5 h-5 text-blue-500" />
            <div>
              <div className="text-2xl font-normal text-slate-900">{networkStats.totalContacts}</div>
              <div className="text-xs text-slate-500">Total Contacts</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-green-500" />
            <div>
              <div className="text-2xl font-normal text-slate-900">{networkStats.activeConnections}</div>
              <div className="text-xs text-slate-500">Active This Month</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-purple-500" />
            <div>
              <div className="text-2xl font-normal text-slate-900">{networkStats.weeklyMeetings}</div>
              <div className="text-xs text-slate-500">Meetings This Week</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center gap-3">
            <Brain className="w-5 h-5 text-orange-500" />
            <div>
              <div className="text-2xl font-normal text-slate-900">{networkStats.memoryStrength}%</div>
              <div className="text-xs text-slate-500">Memory Strength</div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-4 flex items-center gap-2">
          <Brain className="w-4 h-4" />
          AI-Powered Insights
        </h2>

        <div className="space-y-3">
          {recentInsights.map((insight) => {
            const Icon = insight.icon;
            return (
              <div key={insight.id} className="p-3 bg-slate-50 rounded border border-slate-200">
                <div className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-blue-500 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-sm font-normal text-slate-900 mb-1">{insight.title}</h3>
                    <p className="text-sm text-slate-600 mb-2">{insight.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                        {insight.action}
                      </span>
                      <span className="text-xs text-slate-500">{insight.confidence} confidence</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Memory Graph Topics */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-4 flex items-center gap-2">
          <Target className="w-4 h-4" />
          Memory Graph by Topic
        </h2>

        <div className="space-y-3">
          {memoryGraph.map((topic, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-20 text-sm text-slate-700">{topic.topic}</div>
              <div className="flex-1 bg-slate-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${topic.strength}%` }}
                />
              </div>
              <div className="text-xs text-slate-500 w-16 text-right">
                {topic.connections} people
              </div>
              <div className="text-xs text-slate-600 w-10 text-right">
                {topic.strength}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Memory Prompts */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-4 flex items-center gap-2">
          <Star className="w-4 h-4" />
          Upcoming Memory Prompts
        </h2>

        <div className="space-y-3">
          {upcomingReminders.map((reminder) => (
            <div key={reminder.id} className="p-3 bg-blue-50 rounded border border-blue-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-normal text-slate-900">{reminder.person}</h3>
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {reminder.when}
                </span>
              </div>
              <p className="text-sm text-slate-700 mb-1">{reminder.reminder}</p>
              <p className="text-xs text-slate-500">{reminder.context}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Memory Training */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-2 flex items-center gap-2">
          <Brain className="w-4 h-4" />
          Memory Training
        </h2>
        <p className="text-sm text-slate-600 mb-4">
          Take quick quizzes to strengthen your memory connections and improve recall
        </p>
        <div className="flex gap-2">
          <button 
            onClick={() => alert("🧠 Memory training quiz started! Question 1: What percentage accuracy did Maia achieve? (A) 87% (B) 89% (C) 92%")}
            className="px-3 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700"
          >
            Quick Quiz (2 min)
          </button>
          <button 
            onClick={() => alert("📚 Full memory training dashboard would open here - feature not yet implemented")}
            className="px-3 py-2 border border-purple-300 text-purple-700 rounded text-sm hover:bg-purple-50"
          >
            View All Training
          </button>
        </div>
      </div>
    </div>
  );
}
