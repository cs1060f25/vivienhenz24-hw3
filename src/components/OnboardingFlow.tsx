"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Video, Shield, CheckCircle, Clock, Users } from "lucide-react";

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [zoomConnected, setZoomConnected] = useState(false);
  const [calendarConnected, setCalendarConnected] = useState(false);

  const handleZoomConnect = () => {
    // Simulate connection process
    setTimeout(() => {
      setZoomConnected(true);
    }, 0);
  };

  const handleCalendarConnect = () => {
    // Simulate connection process
    setTimeout(() => {
      setCalendarConnected(true);
    }, 0);
  };

  const canProceedFromStep1 = zoomConnected && calendarConnected;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="flex items-center justify-center min-h-screen px-4 py-16">
        <div className="max-w-2xl w-full space-y-8">
          {/* Progress Bar */}
          <div className="flex items-center justify-center space-x-4">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'}`}>
              1
            </div>
            <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-slate-900' : 'bg-slate-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'}`}>
              2
            </div>
            <div className={`w-16 h-1 ${currentStep >= 3 ? 'bg-slate-900' : 'bg-slate-200'}`}></div>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-slate-900 text-white' : 'bg-slate-200 text-slate-400'}`}>
              3
            </div>
          </div>

          {/* Step 1: Connect Services */}
          {currentStep === 1 && (
            <div className="text-center space-y-8">
              <div className="space-y-3">
                <h1 className="text-4xl font-normal text-slate-900">
                  Connect Your Tools
                </h1>
                <p className="text-slate-600">
                  Let&apos;s connect your Zoom and calendar to get started
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Zoom Connection */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-6">
                  <div className="flex items-center justify-center">
                    <Video className="w-12 h-12 text-slate-600" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-normal text-slate-800">Zoom</h3>
                    <p className="text-sm text-slate-600">
                      Connect to capture meeting context
                    </p>
                  </div>
                  {zoomConnected ? (
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Connected!</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleZoomConnect}
                      className="w-full py-3 px-6 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-normal"
                    >
                      Connect Zoom
                    </button>
                  )}
                </div>

                {/* Calendar Connection */}
                <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-6">
                  <div className="flex items-center justify-center">
                    <Calendar className="w-12 h-12 text-slate-600" />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-normal text-slate-800">Calendar</h3>
                    <p className="text-sm text-slate-600">
                      Sync for meeting prep and context
                    </p>
                  </div>
                  {calendarConnected ? (
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm">Connected!</span>
                    </div>
                  ) : (
                    <button
                      onClick={handleCalendarConnect}
                      className="w-full py-3 px-6 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-normal"
                    >
                      Connect Calendar
                    </button>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setCurrentStep(2)}
                  disabled={!canProceedFromStep1}
                  className={`w-full py-3 px-6 rounded-xl transition-all duration-200 font-normal ${
                    canProceedFromStep1
                      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Notes-Only Mode */}
          {currentStep === 2 && (
            <div className="text-center space-y-8">
              <div className="space-y-3">
                <h1 className="text-4xl font-normal text-slate-900">
                  Choose Your Mode
                </h1>
                <p className="text-slate-600">
                  We recommend starting with notes-only mode for privacy
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-slate-300 space-y-6">
                <div className="flex items-center justify-center">
                  <Clock className="w-16 h-16 text-slate-600" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-normal text-slate-800">Notes-Only Mode</h3>
                  <p className="text-slate-600 leading-relaxed">
                    perfct.io will capture meeting notes and context without recording audio or video. 
                    You can upgrade to full recording later.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Privacy-first approach</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Meeting notes and summaries</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      <span className="text-sm">Context-aware reminders</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setCurrentStep(3)}
                  className="w-full py-3 px-6 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-normal shadow-lg hover:shadow-xl"
                >
                  Accept Notes-Only Mode
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Consent Explainer */}
          {currentStep === 3 && (
            <div className="text-center space-y-8">
              <div className="space-y-3">
                <h1 className="text-4xl font-normal text-slate-900">
                  Your Privacy Matters
                </h1>
                <p className="text-slate-600">
                  Understanding how perfct.io keeps your data safe
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-6 text-left">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-slate-600" />
                  <h3 className="text-xl font-normal text-slate-800">Consent & Privacy</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Users className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="font-normal text-slate-800 mb-1">Participant Consent</h4>
                      <p className="text-sm text-slate-600">
                        perfct.io always asks for permission before capturing any meeting information. 
                        All participants will be notified.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="font-normal text-slate-800 mb-1">Data Security</h4>
                      <p className="text-sm text-slate-600">
                        Your data is encrypted end-to-end and stored securely. 
                        Only you have access to your meeting memories.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-slate-600 mt-0.5" />
                    <div>
                      <h4 className="font-normal text-slate-800 mb-1">Your Control</h4>
                      <p className="text-sm text-slate-600">
                        You can delete any data, pause recording, or opt out at any time. 
                        Your privacy preferences are always respected.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/dashboard"
                  className="block w-full py-3 px-6 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-200 font-normal shadow-lg hover:shadow-xl text-center"
                >
                  I Understand - Get Started
                </Link>
                <p className="text-xs text-slate-500">
                  By continuing, you agree to our privacy practices and consent policies.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
