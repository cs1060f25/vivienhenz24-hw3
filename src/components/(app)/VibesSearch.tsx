import { Search, User, MapPin, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { useState } from "react";

export default function VibesSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setShowResults(query.length > 0);
  };

  const searchResults = [
    {
      id: 1,
      name: "Alex Chen",
      title: "CS PhD Student • Harvard",
      avatar: "AC",
      vibe: "genAI music person from last week who likes rock climbing",
      snippet: "Working on generative audio models for his dissertation. Mentioned achieving 15ms latency on real-time generation. Climbs at Brooklyn Boulders and loves discussing AI ethics.",
      lastMet: "Harvard AI/Music Research Meetup",
      date: "6 days ago",
      timeSince: "Last seen 6 days ago",
      tags: ["generative music", "rock climbing", "AI ethics", "PhD student", "real-time audio"],
      reIntroLine: "Hey Alex! How's the dissertation going? Still working on that 15ms latency target for the generative audio?",
      confidence: "94%"
    },
    {
      id: 2,
      name: "Sophie Martinez",
      title: "Climate Tech VC • Breakthrough Energy",
      avatar: "SM",
      vibe: "friendly VC from the mixer, short hair, into climate tech",
      snippet: "Passionate about carbon capture and clean energy startups. Short brown hair, glasses. Mentioned investing in 5 climate companies this quarter at Series A/B stage.",
      lastMet: "Harvard Ventures Demo Day",
      date: "12 days ago", 
      timeSince: "Last seen 12 days ago",
      tags: ["climate tech", "venture capital", "carbon capture", "short hair", "glasses", "Series A"],
      reIntroLine: "Hi Sophie! Following up from Demo Day. Would love to chat about those climate investments and get your take on our sustainability angle.",
      confidence: "91%"
    },
    {
      id: 3,
      name: "David Park",
      title: "Founder • TechStars Alum",
      avatar: "DP",
      vibe: "the founder who mentioned AI ethics",
      snippet: "Built an AI safety startup (acquired by Google). Super thoughtful about responsible AI development. Mentioned concerns about bias in NLP models during the panel.",
      lastMet: "Harvard Entrepreneurship Panel",
      date: "8 days ago",
      timeSince: "Last seen 8 days ago", 
      tags: ["AI ethics", "founder", "TechStars", "AI safety", "Google acquisition", "NLP"],
      reIntroLine: "Hi David! Really appreciated your thoughts on AI bias at the panel. Would love to get your feedback on our approach to responsible ML.",
      confidence: "88%"
    },
    {
      id: 4,
      name: "Riley Johnson",
      title: "Product Designer • Figma",
      avatar: "RJ",
      vibe: "designer from the SF meetup with cool glasses",
      snippet: "Senior product designer with distinctive round tortoiseshell glasses. Talked about design systems and mentioned working on Figma's new collaboration features.",
      lastMet: "Harvard Design Collective Meetup",
      date: "15 days ago",
      timeSince: "Last seen 15 days ago",
      tags: ["product design", "glasses", "design systems", "Figma", "collaboration", "SF"],
      reIntroLine: "Hey Riley! Love those tortoiseshell glasses from the meetup. How are the new Figma collaboration features coming along?",
      confidence: "86%"
    },
    {
      id: 5,
      name: "Morgan Thompson",
      title: "CEO • YC W23",
      avatar: "MT", 
      vibe: "startup CEO with the golden retriever",
      snippet: "CEO of a B2B SaaS company (YC Winter 23). Brought their golden retriever 'Pixel' to the outdoor networking event. Really passionate about product-market fit.",
      lastMet: "Harvard Yard Startup Picnic",
      date: "20 days ago",
      timeSince: "Last seen 20 days ago",
      tags: ["CEO", "YC", "golden retriever", "B2B SaaS", "product-market fit", "Pixel"],
      reIntroLine: "Hey Morgan! How's Pixel doing? Hope your PMF journey is going well since our chat at the picnic.",
      confidence: "92%"
    }
  ];

  const recentSearches = [
    "genAI music person from last week who likes rock climbing",
    "friendly VC from the mixer, short hair, into climate tech", 
    "the founder who mentioned AI ethics",
    "designer from the SF meetup with cool glasses",
    "startup CEO with the golden retriever",
    "CS PhD student working on audio models",
    "tall engineer from Google who loves hiking",
    "consultant with red hair from McKinsey",
    "Harvard Business School student into fintech"
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-normal text-slate-900 mb-1">Vibes Search &amp; Recall</h1>
        <p className="text-slate-600">Natural language search for your network</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg border border-slate-200 p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="who was the CS PhD student working on generative audio models?"
            className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded focus:border-slate-400 focus:ring-0 focus:outline-none text-slate-900 placeholder-slate-500"
          />
        </div>
        
        {!showResults && (
          <div>
            <h3 className="text-sm font-normal text-slate-800 mb-2">Recent searches:</h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.slice(0, 3).map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs hover:bg-slate-200 transition-colors"
                >
                  {search}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Search Results */}
      {showResults && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-normal text-slate-900">People Cards</h2>
            <span className="text-sm text-slate-500">{searchResults.length} matches</span>
          </div>
          
          {searchResults.map((person) => (
            <div key={person.id} className="bg-white rounded-lg border border-slate-200 p-4">
              {/* Person Header */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                  {person.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-normal text-slate-900">{person.name}</h3>
                  <p className="text-sm text-slate-500 mb-1">{person.title}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span>{person.timeSince}</span>
                    <span>@ {person.lastMet}</span>
                    <span className="text-green-600">{person.confidence} match</span>
                  </div>
                </div>
              </div>

              {/* Highlight Snippet */}
              <div className="bg-yellow-50 rounded border border-yellow-200 p-3 mb-3">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-normal text-yellow-800">Highlighted snippet</span>
                </div>
                <p className="text-sm text-slate-700">{person.snippet}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {person.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Suggested Re-intro Line */}
              <div className="bg-blue-50 rounded border border-blue-200 p-3 mb-3">
                <div className="text-xs font-normal text-blue-800 mb-1">Suggested re-intro line:</div>
                <p className="text-sm text-blue-700">&quot;{person.reIntroLine}&quot;</p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button 
                  onClick={() => alert(`👤 ${person.name}'s full profile would open here - feature not yet implemented`)}
                  className="px-3 py-1 bg-slate-900 text-white rounded text-sm hover:bg-slate-800"
                >
                  View profile
                </button>
                <button 
                  onClick={() => alert(`💬 Message composer for ${person.name} would open here - feature not yet implemented`)}
                  className="px-3 py-1 border border-slate-300 text-slate-700 rounded text-sm hover:bg-slate-50"
                >
                  Send message
                </button>
                <button 
                  onClick={() => alert(`☕ Calendar integration to schedule coffee with ${person.name} would open here - feature not yet implemented`)}
                  className="px-3 py-1 border border-slate-300 text-slate-700 rounded text-sm hover:bg-slate-50"
                >
                  Schedule coffee
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quick Tips */}
      {!showResults && (
        <div className="bg-white rounded-lg border border-slate-200 p-4">
          <h3 className="text-sm font-normal text-slate-800 mb-2">Try searching:</h3>
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
            <div>&quot;tall engineer from Google&quot;</div>
            <div>&quot;Harvard Business School fintech person&quot;</div>
            <div>&quot;consultant who loves hiking&quot;</div>
            <div>&quot;designer with the cool glasses&quot;</div>
            <div>&quot;CS PhD student with AI ethics focus&quot;</div>
            <div>&quot;YC founder with the golden retriever&quot;</div>
          </div>
        </div>
      )}
    </div>
  );
}
