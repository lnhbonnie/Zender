import React, { useState } from 'react';
import { RefreshCw, ExternalLink } from 'lucide-react';

export default function ZenderApp() {
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [currentQuote, setCurrentQuote] = useState('');
  const [showQuote, setShowQuote] = useState(false);

  const emotions = [
    { id: 'happy', label: 'Happy', emoji: '😊', bgColor: 'bg-yellow-50' },
    { id: 'sad', label: 'Sad', emoji: '😢', bgColor: 'bg-blue-50' },
    { id: 'frustrated', label: 'Frustrated', emoji: '😤', bgColor: 'bg-orange-50' },
    { id: 'overwhelmed', label: 'Overwhelmed', emoji: '😫', bgColor: 'bg-teal-50' },
    { id: 'zeromotivation', label: 'Zero Motivation', emoji: '🌀', bgColor: 'bg-purple-50' },
    { id: 'rejected', label: 'Rejected', emoji: '😔', bgColor: 'bg-rose-50' },
    { id: 'ghosted', label: 'Ghosted', emoji: '💔', bgColor: 'bg-violet-50' },
  ];

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
    ],
    frustrated: [
      "The system IS broken. You're not crazy for being angry.",
      "Recruiters ghosting after 5 rounds? That's unprofessional. You have every right to be mad.",
      "You applied to 50 jobs and heard back from 2? The math isn't mathing. This isn't your fault.",
      "They posted 'entry-level' and asked for 5 years of experience? Yeah, that's absurd.",
      "Channel that frustration into one power move today. Update your resume. Message that VP directly.",
      "Your anger is energy. Use it. Apply to that dream job you think you're 'not ready for.'",
    ],
    overwhelmed: [
      "Take a breath. You don't have to apply to 50 jobs today.",
      "Feeling underwater? Close LinkedIn. Go for a walk. The jobs will still be there in an hour.",
      "Today's goal: ONE thing. One application. One coffee chat. One breath. That's all.",
      "You don't have to 'maximize' every waking moment. Rest is productive too.",
      "Overwhelmed = you care deeply. That's actually a strength, even if it doesn't feel like it right now.",
      "Break it down: What's the smallest action you can take right now? Start there.",
    ],
    zeromotivation: [
      "Take today off. Seriously. Rest won't ruin your chances, but burnout will.",
      "You don't have to be 'on' 24/7. Even Navy SEALs take rest days.",
      "Zero motivation today? That's your body telling you something. Listen to it.",
      "It's okay to watch Netflix instead of networking today. You're human, not a robot.",
      "Motivation is overrated. Discipline matters more. But today? Today you can just exist.",
      "Tomorrow you'll try again. Today, give yourself permission to not care for a few hours.",
    ],
    rejected: [
      "That rejection email stung, didn't it? Their loss. Seriously - they just passed on you.",
      "You made it to the final round and they picked someone else? That means you were THIS close. You're not far off.",
      "Every 'no' is one step closer to the 'yes' that actually matters.",
      "Rejection isn't a reflection of your worth. It's a mismatch. That's it.",
      "They said you were 'overqualified'? Translation: they can't afford you. Move on.",
      "Fun fact: Steve Jobs got rejected by Atari before founding Apple. You're in good company.",
    ],
    ghosted: [
      "They went silent after the final round? That says everything about them, nothing about you.",
      "Being ghosted after 4 interviews is cruel. You deserved better. Their company culture just showed itself.",
      "You spent hours prepping. They couldn't spend 2 minutes emailing. That's disrespectful and unprofessional.",
      "Ghosting is the corporate equivalent of emotional immaturity. You dodged a bullet.",
      "No response IS a response. They're not worth your mental energy anymore.",
      "Move that company to your 'never apply here again' list. Seriously. You deserve respect.",
    ],
  };

  const generateQuote = () => {
    if (selectedEmotion) {
      const emotionQuotes = quotes[selectedEmotion];
      const randomQuote = emotionQuotes[Math.floor(Math.random() * emotionQuotes.length)];
      setShowQuote(false);
      setTimeout(() => {
        setCurrentQuote(randomQuote);
        setShowQuote(true);
      }, 100);
    }
  };

  const handleRefresh = () => {
    setSelectedEmotion(null);
    setCurrentQuote('');
    setShowQuote(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        
        <div className="mb-6">
          <div className="flex items-baseline gap-3">
            <h1 className="text-4xl font-bold text-gray-900">Zender</h1>
            <p className="text-base font-normal text-gray-500">for job seekers</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{ minHeight: '600px' }}>
          <div className="bg-gray-50 px-6 py-3 flex justify-end gap-3 border-b border-gray-200">
            <button onClick={handleRefresh} className="p-2 hover:bg-gray-200 rounded transition-colors">
              <RefreshCw className="w-4 h-4 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-200 rounded transition-colors">
              <ExternalLink className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <div className="p-16 relative" style={{ minHeight: '500px' }}>
            <h2 className="text-xl font-light text-gray-400 mb-16 italic text-center">I am feeling...</h2>

            {!currentQuote ? (
              <>
                <div className="flex items-center justify-center gap-6 py-20">
                  {emotions.map((emotion) => (
                    <button
                      key={emotion.id}
                      onClick={() => setSelectedEmotion(emotion.id)}
                      className={`group relative p-5 rounded-xl transition-all duration-200 ${
                        selectedEmotion === emotion.id
                          ? 'bg-gray-100 scale-105'
                          : emotion.bgColor
                      }`}
                    >
                      <span className="text-4xl">{emotion.emoji}</span>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/95 rounded-xl shadow-lg">
                        <span className="text-gray-700 text-xs font-medium px-3 text-center">
                          {emotion.label}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="text-center text-gray-400 text-base mt-12">Select your feeling</div>
              </>
            ) : (
              <div
                className={`flex items-center justify-center transition-all duration-500 ${
                  showQuote ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-2xl text-gray-700 font-light text-center leading-relaxed max-w-3xl">
                  {currentQuote}
                </p>
              </div>
            )}

            <div className="absolute bottom-12 right-8">
              <button
                onClick={generateQuote}
                disabled={!selectedEmotion}
                className={`px-8 py-3 rounded-full transition-all duration-200 flex flex-col items-center ${
                  selectedEmotion
                    ? 'bg-gray-100 hover:bg-gray-200'
                    : 'bg-gray-100 cursor-not-allowed opacity-50'
                }`}
              >
                <p className="text-base font-normal italic text-purple-500">Find your zen</p>
                <p className="text-xs text-gray-400">Generate</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
