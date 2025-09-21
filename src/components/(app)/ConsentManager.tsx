import { Shield, Check, X, Users, Camera, Mic, Database, Settings } from "lucide-react";
import { useState } from "react";

export default function ConsentManager() {
  const [globalRecording, setGlobalRecording] = useState(true);
  const [faceRecognition, setFaceRecognition] = useState(false);
  const [dataRetention, setDataRetention] = useState("30-days");

  const participants = [
    {
      id: 1,
      name: "Maia Posternack",
      email: "maia@harvard.edu",
      avatar: "MP",
      status: "consented",
      permissions: {
        recording: true,
        transcription: true,
        faceCapture: false,
        dataStorage: true
      },
      joinedAt: "2 min ago"
    },
    {
      id: 2,
      name: "Faisal Younus", 
      email: "faisal@harvard.edu",
      avatar: "FY",
      status: "consented",
      permissions: {
        recording: true,
        transcription: true,
        faceCapture: true,
        dataStorage: true
      },
      joinedAt: "5 min ago"
    },
    {
      id: 3,
      name: "Vivien Henz",
      email: "vivien@harvard.edu", 
      avatar: "VH",
      status: "consented",
      permissions: {
        recording: true,
        transcription: true,
        faceCapture: false,
        dataStorage: true
      },
      joinedAt: "3 min ago"
    },
    {
      id: 4,
      name: "Aaron Contreras",
      email: "aaron@harvard.edu",
      avatar: "AC", 
      status: "pending",
      permissions: {
        recording: false,
        transcription: false,
        faceCapture: false,
        dataStorage: false
      },
      joinedAt: "just joined"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-normal text-slate-900 mb-1">Privacy & Consent</h1>
        <p className="text-slate-600">Manage recording permissions and data privacy settings</p>
      </div>

      {/* Global Settings */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-4 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Global Recording Settings
        </h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-slate-200 rounded">
            <div className="flex-1">
              <h3 className="text-sm font-normal text-slate-900">Meeting Recording</h3>
              <p className="text-xs text-slate-500">Record audio and generate transcriptions</p>
            </div>
            <button
              onClick={() => setGlobalRecording(!globalRecording)}
              className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                globalRecording ? 'bg-green-500' : 'bg-slate-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                globalRecording ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          <div className="flex items-center justify-between p-3 border border-slate-200 rounded">
            <div className="flex-1">
              <h3 className="text-sm font-normal text-slate-900">Face Recognition</h3>
              <p className="text-xs text-slate-500">Capture and remember faces for better context</p>
            </div>
            <button
              onClick={() => setFaceRecognition(!faceRecognition)}
              className={`w-12 h-6 rounded-full flex items-center transition-colors ${
                faceRecognition ? 'bg-blue-500' : 'bg-slate-300'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                faceRecognition ? 'translate-x-6' : 'translate-x-0.5'
              }`} />
            </button>
          </div>

          <div className="p-3 border border-slate-200 rounded">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-normal text-slate-900">Data Retention</h3>
              <select 
                value={dataRetention}
                onChange={(e) => setDataRetention(e.target.value)}
                className="text-xs border border-slate-300 rounded px-2 py-1"
              >
                <option value="7-days">7 days</option>
                <option value="30-days">30 days</option>
                <option value="90-days">90 days</option>
                <option value="1-year">1 year</option>
              </select>
            </div>
            <p className="text-xs text-slate-500">How long to store meeting data and transcriptions</p>
          </div>
        </div>
      </div>

      {/* Participant Consent Status */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <h2 className="text-lg font-normal text-slate-900 mb-4 flex items-center gap-2">
          <Users className="w-4 h-4" />
          Participant Consent Status
        </h2>

        <div className="space-y-3">
          {participants.map((participant) => (
            <div key={participant.id} className="border border-slate-200 rounded p-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                  {participant.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-sm font-normal text-slate-900">{participant.name}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      participant.status === 'consented' 
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {participant.status === 'consented' ? '✓ Consented' : '⏳ Pending'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2">{participant.email} • {participant.joinedAt}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1">
                      <Mic className="w-3 h-3" />
                      <span className={participant.permissions.recording ? 'text-green-600' : 'text-slate-400'}>
                        Recording {participant.permissions.recording ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Database className="w-3 h-3" />
                      <span className={participant.permissions.transcription ? 'text-green-600' : 'text-slate-400'}>
                        Transcription {participant.permissions.transcription ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Camera className="w-3 h-3" />
                      <span className={participant.permissions.faceCapture ? 'text-green-600' : 'text-slate-400'}>
                        Face Capture {participant.permissions.faceCapture ? '✓' : '✗'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      <span className={participant.permissions.dataStorage ? 'text-green-600' : 'text-slate-400'}>
                        Data Storage {participant.permissions.dataStorage ? '✓' : '✗'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
        <h3 className="text-sm font-normal text-blue-900 mb-2 flex items-center gap-2">
          <Shield className="w-4 h-4" />
          Privacy Commitment
        </h3>
        <div className="text-xs text-blue-700 space-y-1">
          <p>🔒 All data is encrypted in transit and at rest</p>
          <p>🗑️ Data is automatically deleted based on retention settings</p>
          <p>👤 Face recognition is optional and off by default</p>
          <p>🚫 No data is shared with third parties without explicit consent</p>
          <p>📱 You can export or delete your data anytime</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button 
          onClick={() => alert("📦 Data export started! You'll receive a download link at your email within 24 hours.")}
          className="px-4 py-2 bg-slate-900 text-white rounded text-sm hover:bg-slate-800"
        >
          Export My Data
        </button>
        <button 
          onClick={() => alert("⚙️ Advanced privacy settings panel would open here - feature not yet implemented")}
          className="px-4 py-2 border border-slate-300 text-slate-700 rounded text-sm hover:bg-slate-50"
        >
          Privacy Settings
        </button>
        <button 
          onClick={() => confirm("⚠️ Are you sure you want to delete ALL your data? This action cannot be undone.") && alert("🗑️ Data deletion request submitted. All data will be permanently deleted within 30 days.")}
          className="px-4 py-2 border border-red-300 text-red-700 rounded text-sm hover:bg-red-50"
        >
          Delete All Data
        </button>
      </div>
    </div>
  );
}
