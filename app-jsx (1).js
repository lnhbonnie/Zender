import React, { useState } from 'react';
import { RefreshCw, ExternalLink } from 'lucide-react';

const quotes = {
  happy: [
    "I see that spark in you today. Hold onto this - you deserve to feel good.",
    "Today, reach out to one person in your network. Momentum starts with small wins.",
    "Your joy today doesn't erase the struggle. It proves you're still resilient.",
    "Celebrate this moment. After everything, you've earned it.",
    "Fun fact: LinkedIn says most jobs are filled on Tuesdays. Today could be your Tuesday.",
    "Feeling good? Great. Now text that one recruiter back. You got this.",
  ],
  sad: [
    "I see you. I see how hard you're trying. Not one effort is going to waste.",
    "Another rejection? That's brutal. Take an hour to feel sad. Then we'll try again.",
    "It's okay to cry in your car after interviews. This is hard.",
    "Today, just do one small thing. Update your LinkedIn. Send one message. That's enough.",
    "Your sadness is valid. The system is broken, not you.",
    "Job searching is 90% rejection, 10% success. You're in the 90% phase. Keep going.",
    "Rejected after 5 rounds? That's not you - that's them wasting your time. You dodged a bullet.",
  ],
  frustrated: [
    "I get it. Tailored resume. Custom cover letter. Silence. Your frustration is justified.",
    "The system IS broken. You're not crazy for being angry.",
    "Today's action: Reply to one email. That's it. Baby steps count.",
    "Ghosted after the final interview? That's unprofessional. You deserved better.",
    "Your anger means you haven't given up. That's actually a good sign.",
    "Another automated rejection in 2 minutes? Yeah, no human read that. Don't take it personally.",
    "Pro tip: Companies that ghost you are showing you exactly how they treat employees. Next!",
  ],
  overwhelmed: [
    "I see you drowning in open tabs. Close them. Pick ONE thing today. Just one.",
    "Too many job boards? Stick to two. Quality over quantity.",
    "Take a breath. You don't have to apply to 50 jobs today. Five good ones beat fifty random ones.",
    "Overwhelmed by all the 'tips'? Ignore them today. Just be a human, not a job-seeking robot.",
    "Step back. Take a walk. Your brain needs space to process all of this.",
    "The paradox: 500 applications feels like progress but 5 targeted ones work better. Try the latter.",
    "Today's mantra: I don't need to do everything. I just need to do the next right thing.",
  ],
  depressed: [
    "I see you. I see how hard you're trying. Maybe try for 5 more minutes, then take the rest of the day off.",
    "You don't have to apply to jobs today. Sometimes survival - just getting through the day - is enough. Even computers need a reset.",
    "Your identity isn't 'unemployed.' You're a talented professional in a brutal market.",
    "Small win for today: Take a shower. Eat something. That counts as productivity.",
    "The darkness you're feeling isn't truth - it's exhaustion. This will pass.",
    "Getting out of bed when you feel like this? That takes more courage than most people understand.",
    "Depression lie: 'You'll never work again.' Truth: The average job search is 3-6 months. You're in the thick of it.",
  ],
  unmotivated: [
    "Take today off. Seriously. Rest won't ruin your chances, but burnout will.",
    "Zero motivation isn't laziness - it's your body begging for recovery. Listen to it.",
    "Today's task: Do something nice for yourself. Watch that show. Take that nap. You've earned it.",
    "Some days are for applications. Today can be for remembering who you are outside of job searching.",
    "The grind will still be there tomorrow. Today, just exist.",
    "Fun break: Google 'companies with terrible Glassdoor reviews' and feel better about your rejections.",
    "You don't need to be productive today. Even your phone needs to charge sometimes.",
  ],
  ghosted: [
    "They went silent after the final round? That says everything about them, nothing about you.",
    "Being ghosted after investing hours in their process? That's disrespectful. You deserved an essay. Or at least a Hello!",
    "I know you're checking your email every 5 minutes. It's been 2 weeks. Still crickets. Move on. They don't deserve you.",
    "That recruiter who promised to 'circle back'? They didn't. That's on them, not you.",
    "You gave them your time, energy, and hope. They gave you silence. Remember this when they DO call back.",
    "Ghosting is the employer equivalent of a red flag. Bullet dodged. Next!",
    "Today's action: Email one other company. Don't wait for ghosts to respond.",
    "They ghosted you after 4 interviews? Write them off. Companies that respect talent don't do that.",
  ],
};

function App() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [currentQuote, setCurrentQuote] = useState('');
  const [showQuote, setShowQuote] = useState(false);

  const emotions = [
    { id: 'happy', label: 'Happy', emoji: '😊', color: 'hover:bg-yellow-50' },
    { id: 'sad', label: 'Sad', emoji: '😢', color: 'hover:bg-blue-50' },
    { id: 'frustrated', label: 'Frustrated', emoji: '😤', color: 'hover:bg-orange-50' },
    { id: 'overwhelmed', label: 'Overwhelmed', emoji: '😫', color: 'hover:bg-teal-50' },
    { id: 'depressed', label: 'Depressed', emoji: '😞', color: 'hover:bg-gray-50' },
    { id: 'unmotivated', label: 'Zero Motivation', emoji: '🌀', color: 'hover:bg-red-50' },
    { id: 'ghosted', label: 'Ghosted', emoji: '💔', color: 'hover:bg-purple-50' },
  ];

  const generateQuote = () => {
    if (!selectedEmotion) return;
    
    const emotionQuotes = quotes[selectedEmotion];
    const randomQuote = emotionQuotes[Math.floor(Math.random() * emotionQuotes.length)];
    
    setShowQuote(false);
    setTimeout(() => {
      setCurrentQuote(randomQuote);
      setShowQuote(true);
    }, 150);
  };

  const resetApp = () => {
    setSelectedEmotion(null);
    setCurrentQuote('');
    setShowQuote(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '600px' }}>
        
        {/* Top bar */}
        <div className="bg-gray-50 px-6 py-3 flex justify-end gap-3 border-b border-gray-200">
          <button
            onClick={resetApp}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Reset"
          >
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={() => window.open(window.location.href, '_blank')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <div className="p-16 relative" style={{ minHeight: '550px' }}>
          <h1 className="text-4xl font-light text-gray-700 mb-20 italic">I am feeling...</h1>

          {!currentQuote ? (
            <div className="flex items-center justify-center gap-3 py-24">
              {emotions.map((emotion) => {
                return (
                  <button
                    key={emotion.id}
                    onClick={() => setSelectedEmotion(emotion.id)}
                    className={`group relative p-6 rounded-xl transition-all duration-300 ${
                      selectedEmotion === emotion.id
                        ? 'bg-gray-100 scale-110 shadow-md'
                        : emotion.color
                    }`}
                  >
                    <span className="text-4xl">
                      {emotion.emoji}
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/95 rounded-xl shadow-lg">
                      <span className="text-gray-700 text-sm font-medium px-4 text-center">
                        {emotion.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div
              className={`flex items-center justify-center py-24 transition-all duration-500 ${
                showQuote ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <p className="text-3xl text-gray-700 font-light text-center leading-relaxed max-w-4xl">
                "{currentQuote}"
              </p>
            </div>
          )}

          {!currentQuote && (
            <div className="text-center text-gray-400 text-sm mt-12">
              Select how you're feeling, then click Generate
            </div>
          )}

          {/* Generate button at bottom right */}
          <div className="absolute bottom-8 right-8">
            <button
              onClick={generateQuote}
              disabled={!selectedEmotion}
              className={`px-10 py-4 rounded-full text-base font-medium transition-all duration-300 ${
                selectedEmotion
                  ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:shadow-lg hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
