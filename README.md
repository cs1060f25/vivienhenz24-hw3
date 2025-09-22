# perfct.io - AI Memory Partner for Meetings

**Author:** Vivien Henz  
**GitHub:** [vivienhenz24](https://github.com/vivienhenz24)  
**Deployed Version:** [https://vivienhenz24-hw3.vercel.app/](https://vivienhenz24-hw3.vercel.app/)  
**Team PRD:** [https://docs.google.com/document/d/1NEBEHG6nD1d40yFJESZUIPYs2MhXTpv-SNqWSwsMtKw/edit?tab=t.0#heading=h.ilwncyqc8rnh](https://docs.google.com/document/d/1NEBEHG6nD1d40yFJESZUIPYs2MhXTpv-SNqWSwsMtKw/edit?tab=t.0#heading=h.ilwncyqc8rnh)

## Overview

perfct.io is a consent-first meeting sidekick that captures people, faces, names, and "vibes," then surfaces human-sounding prep and in-the-moment prompts across your meetings. Built as a CS1060 Final Project, this prototype addresses the memory challenge college students face when meeting dozens of people every week.


### Getting Started

1. **Visit the Application**
   - Go to [https://vivienhenz24-hw3.vercel.app/](https://vivienhenz24-hw3.vercel.app/)
   - Click "Log In" to access your account

2. **Sign Up / Login**
   - If you're new, click "Sign Up" to create an account
   - If you have an account, enter your credentials to log in
   - The system will guide you through the authentication process

3. **Explore the Dashboard**
   - Once logged in, you'll see the main dashboard with 4 key sections
   - **Start with "Meeting Simulation"** to see the full experience in action!

4. **Try the Meeting Simulation**
   - Click "Meeting Simulation" in the sidebar
   - Click "Start Simulation" to begin the interactive demo
   - Watch as the AI assistant guides you through a complete meeting lifecycle
   - Experience pre-meeting briefs, live assistance, and post-meeting wrap-ups

### Main Features

#### 🎥 Meeting Simulation (NEW!)
**Experience the complete meeting lifecycle in one interactive demo:**
- **Realistic Video Conference Interface** - Zoom-like environment with participant video feeds
- **Live Meeting Phases** - Watch the transition from pre-meeting → in-progress → post-meeting
- **AI-Powered Assistance** - See contextual prompts, auto-capture, and live insights in action
- **Interactive Controls** - Toggle mic/camera, capture memories, and experience real-time features
- **Smart Notifications** - Watch as the AI automatically detects key moments and suggests actions
- **Complete Workflow** - From participant preview to follow-up email generation

#### Pre-Meeting Brief
- Access contextual information before your meetings
- Review who you'll be meeting with and relevant conversation history
- Get personalized talking points and reminders
- View past interactions and key details about attendees

#### In-Meeting Whisper
- Real-time assistance during your meetings
- Get subtle prompts and reminders about people and topics
- Access quick context without disrupting the conversation
- Capture important moments and "vibes" as they happen

#### Post-Meeting Wrap
- Review and save key insights from your meetings
- Add notes about people you met and important details
- Update contact information and relationship context
- Rate the quality of interactions for future reference

#### Vibes Search
- Use natural language to find people and past interactions
- Search by characteristics: "find the AI startup founder from last week"
- Filter by meeting types, dates, or specific topics
- Access a comprehensive memory database of your network

#### Memory Insights
- View analytics about your meeting patterns
- Track relationship development over time
- Identify networking opportunities and follow-up needs
- Monitor your social interaction trends

### Navigation

The dashboard now features 4 main sections accessible via the sidebar:

- **🎥 Meeting Simulation**: Interactive demo of the complete meeting experience
- **🔍 Vibes Search**: Find people and past conversations using natural language
- **🧠 Memory Insights**: Analytics and patterns about your meeting interactions
- **🛡️ Privacy & Consent**: Manage data permissions and privacy settings

### How to Use the Meeting Simulation

1. **Start the Demo**
   - Click "Meeting Simulation" in the sidebar
   - Press "Start Simulation" to begin the interactive experience

2. **Watch the Phases**
   - **Pre-Meeting (0-3s)**: See participant previews and suggested talking points
   - **Starting (3-6s)**: Watch participants join the meeting
   - **In-Progress (6-75s)**: Experience live AI assistance, prompts, and auto-capture
   - **Ending (75-80s)**: See the meeting wrap-up phase
   - **Post-Meeting (80s+)**: Review auto-generated summaries and action items

3. **Interact with Features**
   - Toggle your mic/camera to see realistic video conference controls
   - Click capture buttons to manually save memories and vibes
   - Watch as AI automatically detects key moments and suggests actions
   - See live transcription and participant speaking indicators

4. **Explore the Side Panels**
   - Switch between "Participants" and "Insights" tabs during the meeting
   - See real-time participant status and meeting analytics
   - Watch live AI insights and pattern detection in action

## Key Components

- **MeetingSimulation**: Interactive demo combining all meeting phases with realistic video interface
- **ConsentManager**: Handles user consent for data capture
- **VibesSearch**: Natural language search for people and memories
- **MemoryInsights**: Analytics and memory patterns

### Technical Features

- **Real-time State Management**: Dynamic participant status, speaking indicators, and live updates
- **Auto-capture System**: AI automatically detects and saves key moments during meetings
- **Smart Notifications**: Context-aware alerts and suggestions based on conversation flow
- **Interactive Controls**: Working mic/camera toggles and manual capture buttons
- **Phase Transitions**: Smooth progression through meeting lifecycle with visual feedback
- **Responsive Design**: Optimized for different screen sizes and devices

## Demo Walkthrough

### What You'll See in the Meeting Simulation:

1. **Pre-Meeting Phase**
   - Participant cards with roles and characteristics
   - Suggested conversation hooks and talking points
   - Real-time participant status (waiting/joined)

2. **Live Meeting Phase**
   - Realistic video conference interface with participant grid
   - Live transcription of conversation
   - AI-generated prompts and insights appearing in real-time
   - Auto-capture notifications for key moments
   - Interactive mic/camera controls
   - Speaking indicators and participant status updates

3. **Post-Meeting Phase**
   - Auto-generated meeting summary with key points
   - Action items with clear ownership
   - Follow-up email draft ready to send
   - Updated person cards with new insights

### Key Features to Notice:

- **Smart Timing**: AI prompts appear at optimal conversation moments
- **Auto-capture**: Key milestones are automatically saved (89% ML accuracy, team decisions)
- **Live Insights**: Pattern detection and engagement analysis
- **Realistic Interface**: Professional video conference controls and layout
- **Smooth Transitions**: Natural progression through meeting phases

## Deployment

The application is automatically deployed to Vercel on every push to the main branch. The live version is available at [https://vivienhenz24-hw3.vercel.app/](https://vivienhenz24-hw3.vercel.app/).

## Contributing

This is a course project, but feel free to explore the codebase and provide feedback!

## License

This project is for educational purposes as part of CS1060 coursework.