import { Search, User, MapPin, Calendar, MessageCircle } from "lucide-react";
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
      name: "Alex Rivera",
      title: "Partner at GreenTech Ventures",
      avatar: "AR",
      vibe: "VC into climate who likes climbing",
      snippet: "Passionate about sustainable technology and outdoor adventures. Mentioned rock climbing in Yosemite during TechCrunch Disrupt.",
      lastMet: "TechCrunch Disrupt 2024",
      date: "September 15, 2024",
      tags: ["Climate Tech", "Venture Capital", "Rock Climbing", "Sustainability"]
    }
  ];

  const recentSearches = [
    "the founder who mentioned AI ethics",
    "designer from the SF meetup",
    "consultant with the British accent",
    "startup CEO with the dog",
    "the VC into climate who likes climbing"
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-normal text-slate-900">Vibes Search</h1>
        <p className="text-slate-600">Find anyone by describing what you remember about them</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="the VC into climate who likes climbing"
            className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-slate-400 focus:ring-0 focus:outline-none text-slate-900 placeholder-slate-500 transition-colors"
          />
        </div>
        
        {!showResults && (
          <div className="space-y-3">
            <h3 className="font-normal text-slate-800">Recent searches:</h3>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(search)}
                  className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm hover:bg-slate-200 transition-colors"
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
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-normal text-slate-900">Search Results</h2>
            <span className="text-sm text-slate-600">1 match found</span>
          </div>
          
          {searchResults.map((person) => (
            <div key={person.id} className="border border-slate-200 rounded-xl p-6 space-y-4 hover:bg-slate-50 transition-colors">
              {/* Person Header */}
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-lg font-normal text-blue-800">{person.avatar}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-normal text-slate-900">{person.name}</h3>
                  <p className="text-slate-600 mb-2">{person.title}</p>
                  <div className="flex items-center space-x-4 text-sm text-slate-500">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>Last met: {person.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{person.lastMet}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vibe Match */}
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                <div className="flex items-center space-x-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-normal text-green-800">Vibe Match</span>
                </div>
                <p className="text-sm text-green-700">
                  &quot;{person.vibe}&quot;
                </p>
              </div>

              {/* Context Snippet */}
              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-normal text-slate-800 mb-2">Context</h4>
                <p className="text-sm text-slate-600">
                  {person.snippet}
                </p>
              </div>

              {/* Tags */}
              <div className="space-y-2">
                <h4 className="font-normal text-slate-800">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {person.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-200">
                <button className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors text-sm">
                  View Full Profile
                </button>
                <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                  Send Message
                </button>
                <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm">
                  Schedule Meeting
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips */}
      <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
        <h2 className="text-xl font-normal text-slate-900">Search Tips</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h4 className="font-normal text-slate-800">Try searching by:</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Physical appearance or style</li>
              <li>• Interests or hobbies</li>
              <li>• Industry or role</li>
              <li>• Personality traits</li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-normal text-slate-800">Example searches:</h4>
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• &quot;tall engineer from Google&quot;</li>
              <li>• &quot;startup founder with red hair&quot;</li>
              <li>• &quot;consultant who loves hiking&quot;</li>
              <li>• &quot;designer with the cool glasses&quot;</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
