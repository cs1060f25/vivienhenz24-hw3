"use client";

import { useState, useEffect } from "react";
import { 
  Play, 
  Pause, 
  Mic, 
  MicOff, 
  Camera, 
  CameraOff, 
  Users, 
  MessageSquare, 
  CheckSquare, 
  Clock, 
  Lightbulb, 
  HelpCircle,
  Command,
  Heart,
  Circle,
  Mail,
  Copy,
  User,
  TrendingUp,
  Shield,
  Settings,
  Phone,
  PhoneOff,
  Monitor,
  MoreHorizontal,
  Star,
  Brain
} from "lucide-react";

type MeetingPhase = "pre" | "starting" | "in-progress" | "ending" | "post";

interface Participant {
  id: string;
  name: string;
  avatar: string;
  email: string;
  isHost: boolean;
  micEnabled: boolean;
  cameraEnabled: boolean;
  speaking: boolean;
  status: "waiting" | "joined" | "left";
}

interface MeetingMessage {
  id: string;
  speaker: string;
  content: string;
  timestamp: number;
  phase: MeetingPhase;
}

export default function MeetingSimulation() {
  const [phase, setPhase] = useState<MeetingPhase>("pre");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [activeTab, setActiveTab] = useState<"main" | "participants" | "chat" | "insights">("main");
  const [notifications, setNotifications] = useState<Array<{id: string, type: string, message: string, timestamp: number}>>([]);
  const [capturedItems, setCapturedItems] = useState<Array<{type: string, content: string, timestamp: number}>>([]);
  const [liveInsights, setLiveInsights] = useState<Array<{type: string, message: string}>>([]);
  const [notificationCounter, setNotificationCounter] = useState(0);

  const participants: Participant[] = [
    {
      id: "you",
      name: "You (Mary)",
      avatar: "M",
      email: "mary@harvard.edu",
      isHost: false,
      micEnabled,
      cameraEnabled,
      speaking: false,
      status: "joined"
    },
    {
      id: "maia",
      name: "Maia Posternack",
      avatar: "MP",
      email: "maia@harvard.edu",
      isHost: true,
      micEnabled: true,
      cameraEnabled: true,
      speaking: phase === "in-progress" && ((currentTime >= 12 && currentTime < 16) || (currentTime >= 45 && currentTime < 50)),
      status: phase === "pre" ? "waiting" : "joined"
    },
    {
      id: "faisal",
      name: "Faisal Younus",
      avatar: "FY",
      email: "faisal@harvard.edu",
      isHost: false,
      micEnabled: true,
      cameraEnabled: true,
      speaking: phase === "in-progress" && ((currentTime >= 5 && currentTime < 8) || (currentTime >= 35 && currentTime < 40)),
      status: phase === "pre" ? "waiting" : "joined"
    },
    {
      id: "vivien",
      name: "Vivien Henz",
      avatar: "VH",
      email: "vivien@harvard.edu",
      isHost: false,
      micEnabled: true,
      cameraEnabled: false,
      speaking: phase === "in-progress" && ((currentTime >= 20 && currentTime < 25) || (currentTime >= 55 && currentTime < 60)),
      status: phase === "pre" ? "waiting" : "joined"
    },
    {
      id: "aaron",
      name: "Aaron Contreras",
      avatar: "AC",
      email: "aaron@harvard.edu",
      isHost: false,
      micEnabled: false,
      cameraEnabled: true,
      speaking: phase === "in-progress" && ((currentTime >= 16 && currentTime < 20) || (currentTime >= 50 && currentTime < 55)),
      status: phase === "pre" ? "waiting" : currentTime > 3 ? "joined" : "waiting"
    }
  ];

  const meetingMessages: MeetingMessage[] = [
    { id: "1", speaker: "Maia Posternack", content: "Hey everyone! Thanks for joining our CS121 final project meeting.", timestamp: 2, phase: "starting" },
    { id: "2", speaker: "Faisal Younus", content: "Great to see everyone. I've been working on the backend architecture.", timestamp: 5, phase: "in-progress" },
    { id: "3", speaker: "You", content: "Awesome! How's the performance looking?", timestamp: 8, phase: "in-progress" },
    { id: "4", speaker: "Maia Posternack", content: "Perfect! Our ML model is now hitting 89% accuracy with the new training data.", timestamp: 12, phase: "in-progress" },
    { id: "5", speaker: "Aaron Contreras", content: "That's incredible progress from last week's 73%!", timestamp: 16, phase: "in-progress" },
    { id: "6", speaker: "Vivien Henz", content: "Amazing! I've been iterating on the user onboarding flow based on our testing.", timestamp: 20, phase: "in-progress" },
    { id: "7", speaker: "You", content: "What did you discover in the user tests?", timestamp: 24, phase: "in-progress" },
    { id: "8", speaker: "Vivien Henz", content: "Users were getting confused in step 3, so I redesigned the entire flow.", timestamp: 28, phase: "in-progress" },
    { id: "9", speaker: "Faisal Younus", content: "For the database, I'm thinking PostgreSQL with Redis for real-time features.", timestamp: 32, phase: "in-progress" },
    { id: "10", speaker: "Maia Posternack", content: "That'll handle our 10K+ concurrent users easily. Smart choice!", timestamp: 36, phase: "in-progress" },
    { id: "11", speaker: "Aaron Contreras", content: "Should we talk about the YC application timeline?", timestamp: 40, phase: "in-progress" },
    { id: "12", speaker: "Vivien Henz", content: "Yes! I think we should definitely apply for Winter 2026 after we nail this demo.", timestamp: 44, phase: "in-progress" },
    { id: "13", speaker: "You", content: "The timing feels perfect. Our metrics are strong.", timestamp: 48, phase: "in-progress" },
    { id: "14", speaker: "Faisal Younus", content: "Agreed! We've got product-market fit and solid tech foundations.", timestamp: 52, phase: "in-progress" },
    { id: "15", speaker: "Maia Posternack", content: "Let's set up practice demo sessions next week.", timestamp: 56, phase: "in-progress" }
  ];

  const currentMessage = meetingMessages.find(
    msg => msg.timestamp <= currentTime && msg.timestamp > currentTime - 4
  );

  const recentMessages = meetingMessages.filter(
    msg => msg.timestamp <= currentTime && msg.timestamp > currentTime - 12
  ).slice(-3);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime(prev => {
        const newTime = prev + 1;
        
        // Optimal phase transitions for easy understanding
        if (newTime === 3) setPhase("starting");
        if (newTime === 6) setPhase("in-progress");
        if (newTime === 75) setPhase("ending");
        if (newTime === 80) setPhase("post");
        
        // Auto-generate notifications and insights with unique IDs
        if (newTime === 8) {
          setNotificationCounter(prev => {
            const newCount = prev + 1;
            setNotifications(prevNotifs => [...prevNotifs, {id: `notification-${newCount}`, type: "info", message: "🎯 Meeting energy detected as high collaborative", timestamp: newTime}]);
            return newCount;
          });
        }
        if (newTime === 15) {
          setLiveInsights(prev => [...prev, {type: "prompt", message: "Perfect time to ask about ML accuracy details"}]);
        }
        if (newTime === 22) {
          setCapturedItems(prev => [...prev, {type: "memory", content: "89% ML accuracy achievement", timestamp: newTime}]);
          setNotificationCounter(prev => {
            const newCount = prev + 1;
            setNotifications(prevNotifs => [...prevNotifs, {id: `notification-${newCount}`, type: "success", message: "💭 Auto-captured: Key ML milestone", timestamp: newTime}]);
            return newCount;
          });
        }
        if (newTime === 30) {
          setLiveInsights(prev => [...prev, {type: "pattern", message: "Team shows high engagement - all participants contributing"}]);
        }
        if (newTime === 38) {
          setCapturedItems(prev => [...prev, {type: "vibe", content: "Collaborative problem-solving energy", timestamp: newTime}]);
          setNotificationCounter(prev => {
            const newCount = prev + 1;
            setNotifications(prevNotifs => [...prevNotifs, {id: `notification-${newCount}`, type: "success", message: "😍 Vibe captured: Team synergy", timestamp: newTime}]);
            return newCount;
          });
        }
        if (newTime === 45) {
          setLiveInsights(prev => [...prev, {type: "opportunity", message: "YC application discussion - great momentum to capture"}]);
        }
        if (newTime === 52) {
          setCapturedItems(prev => [...prev, {type: "action", content: "Practice demo sessions next week", timestamp: newTime}]);
        }
        
        return newTime;
      });
    }, 800); // Optimal viewing speed - 0.8 seconds per update

    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const getPhaseTitle = () => {
    switch (phase) {
      case "pre": return "Pre-Meeting Brief";
      case "starting": return "Meeting Starting...";
      case "in-progress": return "In-Meeting Whisper";
      case "ending": return "Meeting Ending...";
      case "post": return "Post-Meeting Wrap";
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "pre": return "text-blue-600";
      case "starting": return "text-yellow-600";
      case "in-progress": return "text-green-600";
      case "ending": return "text-orange-600";
      case "post": return "text-purple-600";
    }
  };

  const renderPreMeetingContent = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center gap-2">
          <Users className="w-4 h-4" />
          Who might be there
        </h3>
        <div className="space-y-2">
          {participants.slice(1).map((participant) => (
            <div key={participant.id} className="flex items-center gap-3 p-2 rounded bg-slate-50">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                {participant.avatar}
              </div>
              <div className="flex-1">
                <div className="text-sm font-normal text-slate-900">{participant.name}</div>
                <div className="text-xs text-slate-500">
                  {participant.id === "maia" && "AI/ML enthusiast • CS concentrator"}
                  {participant.id === "faisal" && "systems architect • Meta alum"}
                  {participant.id === "vivien" && "design perfectionist • UX-focused"}
                  {participant.id === "aaron" && "full-stack developer"}
                </div>
              </div>
              <div className={`w-2 h-2 rounded-full ${participant.status === "waiting" ? "bg-yellow-500" : "bg-green-500"}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center gap-2">
          <Lightbulb className="w-4 h-4" />
          Suggested hooks
        </h3>
        <div className="space-y-2">
          <div className="p-2 rounded bg-blue-50 border border-blue-200">
            <p className="text-sm text-slate-700">💭 Ask Maia about the CS 181 ML model results</p>
          </div>
          <div className="p-2 rounded bg-green-50 border border-green-200">
            <p className="text-sm text-slate-700">🏗️ Discuss backend architecture with Faisal</p>
          </div>
          <div className="p-2 rounded bg-purple-50 border border-purple-200">
            <p className="text-sm text-slate-700">🎨 Get Vivien&apos;s thoughts on the new UI mockups</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderInMeetingContent = () => (
    <div className="space-y-4">
      {/* Live Notifications */}
      {notifications.slice(-2).map((notification) => (
        <div key={notification.id} className={`p-3 rounded-lg border animate-pulse ${
          notification.type === "success" ? "bg-green-50 border-green-200" :
          notification.type === "info" ? "bg-blue-50 border-blue-200" :
          "bg-yellow-50 border-yellow-200"
        }`}>
          <p className="text-sm font-medium">{notification.message}</p>
        </div>
      ))}

      {/* Live Transcription */}
      {recentMessages.length > 0 && (
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-normal text-slate-900 mb-2 flex items-center gap-2">
            Live transcription 
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
          </h3>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {recentMessages.map((msg) => (
              <div key={msg.id} className={`p-2 rounded text-sm ${
                msg.speaker === "You" ? "bg-blue-50 border border-blue-200" : "bg-slate-50"
              }`}>
                <strong>{msg.speaker}:</strong> &quot;{msg.content}&quot;
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic AI Prompts */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h3 className="text-sm font-normal text-slate-900 mb-3 flex items-center gap-2">
          <Brain className="w-4 h-4" />
          AI Prompts & Insights
        </h3>
        <div className="space-y-2">
          {liveInsights.slice(-3).map((insight, idx) => (
            <div key={idx} className={`p-3 rounded border animate-bounce ${
              insight.type === "prompt" ? "bg-blue-50 border-blue-200" :
              insight.type === "pattern" ? "bg-green-50 border-green-200" :
              insight.type === "opportunity" ? "bg-purple-50 border-purple-200" :
              "bg-yellow-50 border-yellow-200"
            }`}>
              <p className="text-sm text-slate-700">{insight.message}</p>
            </div>
          ))}
          
          {currentTime > 12 && currentTime < 20 && (
            <div className="p-3 bg-blue-50 rounded border border-blue-200 animate-pulse">
              <p className="text-sm text-slate-700 mb-2">💡 Perfect timing - ask about the accuracy improvement</p>
              <div className="text-xs text-slate-500">Maia just mentioned ML performance</div>
            </div>
          )}
          {currentTime > 35 && currentTime < 45 && (
            <div className="p-3 bg-green-50 rounded border border-green-200 animate-pulse">
              <p className="text-sm text-slate-700 mb-2">🏗️ Great moment to discuss scaling concerns</p>
              <div className="text-xs text-slate-500">Faisal is talking about database architecture</div>
            </div>
          )}
          {currentTime > 48 && currentTime < 58 && (
            <div className="p-3 bg-purple-50 rounded border border-purple-200 animate-pulse">
              <p className="text-sm text-slate-700 mb-2">🚀 YC application timeline discussion opportunity</p>
              <div className="text-xs text-slate-500">Team seems excited about the future</div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h3 className="text-sm font-normal text-slate-900 mb-3 flex items-center gap-2">
          Quick capture
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
            {capturedItems.length} items
          </span>
        </h3>
        <div className="grid grid-cols-2 gap-2 mb-3">
          <button 
            onClick={() => {
              setCapturedItems(prev => [...prev, {type: "memory", content: "Manual memory capture", timestamp: currentTime}]);
              setNotificationCounter(prev => prev + 1);
              setNotifications(prev => [...prev, {id: `notification-manual-${notificationCounter + 1}`, type: "success", message: "💭 Memory captured!", timestamp: currentTime}]);
            }}
            className="p-3 bg-slate-50 rounded border border-slate-200 hover:bg-green-100 hover:border-green-300 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Command className="w-4 h-4" />
              <span>⌘+M Memory</span>
            </div>
          </button>
          <button 
            onClick={() => {
              setCapturedItems(prev => [...prev, {type: "vibe", content: "Manual vibe capture", timestamp: currentTime}]);
              setNotificationCounter(prev => prev + 1);
              setNotifications(prev => [...prev, {id: `notification-manual-${notificationCounter + 1}`, type: "success", message: "😍 Vibe captured!", timestamp: currentTime}]);
            }}
            className="p-3 bg-slate-50 rounded border border-slate-200 hover:bg-purple-100 hover:border-purple-300 transition-colors"
          >
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <Heart className="w-4 h-4" />
              <span>😍 Tag vibes</span>
            </div>
          </button>
        </div>
        
        {/* Recent captures */}
        {capturedItems.slice(-3).map((item, idx) => (
          <div key={idx} className={`p-2 text-xs rounded mb-1 animate-pulse ${
            item.type === "memory" ? "bg-blue-50 text-blue-700" :
            item.type === "vibe" ? "bg-purple-50 text-purple-700" :
            "bg-green-50 text-green-700"
          }`}>
            ✓ {item.content}
          </div>
        ))}
      </div>
    </div>
  );

  const renderPostMeetingContent = () => (
    <div className="space-y-4">
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h3 className="text-lg font-normal text-slate-900 mb-3">Auto-summary</h3>
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="w-1 h-4 bg-blue-500 rounded-full mt-1"></div>
            <p className="text-sm text-slate-700">🤖 ML model accuracy improved to 89% - demo ready!</p>
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-4 bg-green-500 rounded-full mt-1"></div>
            <p className="text-sm text-slate-700">🏗️ Backend: PostgreSQL + Redis for real-time features</p>
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-4 bg-purple-500 rounded-full mt-1"></div>
            <p className="text-sm text-slate-700">🎨 UX flow redesigned based on user testing</p>
          </div>
          <div className="flex gap-2">
            <div className="w-1 h-4 bg-orange-500 rounded-full mt-1"></div>
            <p className="text-sm text-slate-700">🚀 Team decided to apply to YC Winter 2026</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h3 className="text-lg font-normal text-slate-900 mb-3">Action items</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-2 rounded">
            <input type="checkbox" className="rounded w-4 h-4" />
            <span className="text-sm text-slate-700 flex-1">🎨 Send Figma prototypes to Vivien by Thursday</span>
            <span className="text-xs text-slate-500">You</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded">
            <input type="checkbox" className="rounded w-4 h-4" />
            <span className="text-sm text-slate-700 flex-1">🏗️ Set up production database</span>
            <span className="text-xs text-slate-500">Faisal</span>
          </div>
          <div className="flex items-center gap-3 p-2 rounded">
            <input type="checkbox" className="rounded w-4 h-4" />
            <span className="text-sm text-slate-700 flex-1">📅 Schedule practice demo session</span>
            <span className="text-xs text-slate-500">Aaron</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-normal text-slate-900 flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Follow-up draft
          </h3>
          <button className="p-1 hover:bg-slate-100 rounded">
            <Copy className="w-4 h-4 text-slate-500" />
          </button>
        </div>
        <div className="bg-slate-50 rounded p-3 text-sm text-slate-700">
          <div className="mb-2"><strong>Subject:</strong> CS121 Final Project - Great Progress & Next Steps</div>
          <div className="space-y-2">
            <p>Hey team,</p>
            <p>Incredible session today! 🚀 Key highlights:</p>
            <p>• 🤖 89% ML accuracy achieved<br/>
               • 🏗️ Backend architecture: PostgreSQL + Redis<br/>
               • 🎨 New UX flow approved<br/>
               • 🚀 YC Winter 2026 application plan</p>
            <p>Let&apos;s crush this demo! 💪</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-normal text-slate-900">Meeting Simulation</h1>
          <div className="flex items-center gap-4 text-slate-600">
            <span className={`font-medium ${getPhaseColor()}`}>{getPhaseTitle()}</span>
            <span className="text-sm">CS121 Final Project Meeting</span>
            <span className="text-sm">{formatTime(currentTime)}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-2 rounded text-white text-sm flex items-center gap-2 ${
              isPlaying ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? 'Pause' : 'Start'} Simulation
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Video Conference Area */}
        <div className="lg:col-span-2 space-y-4">
          {/* Main Video Area */}
          <div className="bg-black rounded-lg overflow-hidden relative h-96">
            {/* Main Speaker */}
            <div className="w-full h-full relative">
              {phase === "pre" ? (
                <div className="flex items-center justify-center h-full text-white">
                  <div className="text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg">Waiting for meeting to start...</p>
                    <p className="text-sm text-gray-400">CS121 Final Project Meeting</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-900 to-purple-900">
                  {(() => {
                    const speakingParticipant = participants.find(p => p.speaking);
                    const mainParticipant = speakingParticipant || participants.find(p => p.id === "maia");
                    return (
                      <div className="text-center text-white">
                        <div className={`w-32 h-32 rounded-full flex items-center justify-center text-4xl font-normal mx-auto mb-4 ${
                          mainParticipant?.speaking ? 'bg-green-500 ring-4 ring-green-300' : 'bg-blue-500'
                        }`}>
                          {mainParticipant?.avatar}
                        </div>
                        <p className="text-xl">{mainParticipant?.name}</p>
                        {mainParticipant?.speaking && <p className="text-sm text-green-300">Speaking...</p>}
                      </div>
                    );
                  })()}
                </div>
              )}

              {/* Live Activity Indicators */}
              {phase === "in-progress" && (
                <div className="absolute top-4 left-4 space-y-2">
                  {notifications.slice(-1).map((notification) => (
                    <div key={notification.id} className="bg-black bg-opacity-70 text-white px-3 py-2 rounded-full text-xs animate-pulse">
                      {notification.message}
                    </div>
                  ))}
                  {capturedItems.length > 0 && (
                    <div className="bg-green-600 bg-opacity-90 text-white px-3 py-2 rounded-full text-xs flex items-center gap-2">
                      <Circle className="w-3 h-3 fill-current" />
                      {capturedItems.length} captured
                    </div>
                  )}
                </div>
              )}

              {/* Participant Grid Overlay */}
              {phase !== "pre" && (
                <div className="absolute bottom-4 right-4 grid grid-cols-2 gap-2">
                  {participants.filter(p => p.status === "joined" && p.id !== "you").slice(0, 4).map((participant) => (
                    <div key={participant.id} className="relative">
                      <div className={`w-16 h-16 rounded bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white text-xs transition-all duration-300 ${
                        participant.speaking ? 'ring-2 ring-green-400 scale-110' : ''
                      }`}>
                        {participant.cameraEnabled ? participant.avatar : <CameraOff className="w-4 h-4" />}
                      </div>
                      {!participant.micEnabled && (
                        <MicOff className="absolute -top-1 -right-1 w-3 h-3 text-red-500 bg-white rounded-full p-0.5" />
                      )}
                      {participant.speaking && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-green-400 font-bold">
                          SPEAKING
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Your Video */}
              <div className="absolute bottom-4 left-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-sm">
                    {cameraEnabled ? "M" : <CameraOff className="w-6 h-6" />}
                  </div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                    You
                  </div>
                  {!micEnabled && (
                    <MicOff className="absolute -top-1 -right-1 w-4 h-4 text-red-500 bg-white rounded-full p-1" />
                  )}
                </div>
              </div>

              {/* Meeting Controls */}
              {phase !== "pre" && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-black bg-opacity-50 rounded-full px-6 py-3">
                  <button
                    onClick={() => setMicEnabled(!micEnabled)}
                    className={`p-2 rounded-full ${micEnabled ? 'bg-gray-600' : 'bg-red-600'}`}
                  >
                    {micEnabled ? <Mic className="w-4 h-4 text-white" /> : <MicOff className="w-4 h-4 text-white" />}
                  </button>
                  <button
                    onClick={() => setCameraEnabled(!cameraEnabled)}
                    className={`p-2 rounded-full ${cameraEnabled ? 'bg-gray-600' : 'bg-red-600'}`}
                  >
                    {cameraEnabled ? <Camera className="w-4 h-4 text-white" /> : <CameraOff className="w-4 h-4 text-white" />}
                  </button>
                  <button className="p-2 rounded-full bg-gray-600">
                    <Monitor className="w-4 h-4 text-white" />
                  </button>
                  <button className="p-2 rounded-full bg-red-600">
                    <PhoneOff className="w-4 h-4 text-white" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Meeting Info Bar */}
          <div className="bg-white rounded-lg border border-slate-200 p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    phase === "in-progress" ? "bg-red-500 animate-pulse" : phase === "pre" ? "bg-yellow-500" : "bg-gray-500"
                  }`} />
                  <span className="text-sm text-slate-700">
                    {phase === "pre" && "Waiting to start"}
                    {phase === "starting" && "Starting..."}
                    {phase === "in-progress" && "Live"}
                    {phase === "ending" && "Ending..."}
                    {phase === "post" && "Ended"}
                  </span>
                </div>
                <div className="text-sm text-slate-500">
                  {participants.filter(p => p.status === "joined").length} participants
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab("participants")}
                  className={`px-3 py-1 rounded text-sm ${activeTab === "participants" ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <Users className="w-4 h-4 inline mr-1" />
                  Participants
                </button>
                <button
                  onClick={() => setActiveTab("insights")}
                  className={`px-3 py-1 rounded text-sm ${activeTab === "insights" ? 'bg-blue-100 text-blue-700' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  <Brain className="w-4 h-4 inline mr-1" />
                  Insights
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="space-y-4">
          {/* Phase-specific Content */}
          {phase === "pre" && renderPreMeetingContent()}
          {(phase === "starting" || phase === "in-progress") && renderInMeetingContent()}
          {(phase === "ending" || phase === "post") && renderPostMeetingContent()}

          {/* Participants Panel */}
          {activeTab === "participants" && (
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Participants ({participants.filter(p => p.status === "joined").length})
              </h3>
              <div className="space-y-2">
                {participants.map((participant) => (
                  <div key={participant.id} className="flex items-center gap-3 p-2 rounded">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      {participant.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-900">
                        {participant.name} {participant.isHost && "(Host)"}
                      </div>
                      <div className="text-xs text-slate-500">{participant.email}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      {participant.micEnabled ? 
                        <Mic className="w-3 h-3 text-green-600" /> : 
                        <MicOff className="w-3 h-3 text-red-600" />
                      }
                      {participant.cameraEnabled ? 
                        <Camera className="w-3 h-3 text-green-600" /> : 
                        <CameraOff className="w-3 h-3 text-red-600" />
                      }
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      participant.status === "joined" ? "bg-green-500" : 
                      participant.status === "waiting" ? "bg-yellow-500" : "bg-gray-500"
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Insights Panel */}
          {activeTab === "insights" && (
            <div className="bg-white rounded-lg border border-slate-200 p-4">
              <h3 className="text-lg font-normal text-slate-900 mb-3 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                Live Insights
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-normal text-blue-800">Energy Level</span>
                  </div>
                  <div className="text-xs text-blue-700">High collaborative energy detected</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-normal text-green-800">Engagement</span>
                  </div>
                  <div className="text-xs text-green-700">All participants actively contributing</div>
                </div>

                {currentTime > 60 && (
                  <div className="p-3 bg-purple-50 rounded border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <MessageSquare className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-normal text-purple-800">Key Topics</span>
                    </div>
                    <div className="text-xs text-purple-700">ML accuracy, backend architecture discussed</div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
