Zender v16 - Hope & Encouragement for Job Seekers
A compassionate web app designed to provide encouragement, validation, and practical support for job seekers during their search journey.
Version
Current Version: 16.0.0
The Why
Many highly qualified people have lost their jobs or have been job searching for months. Many have lost confidence, hope, identity, and motivation to keep trying. Zender provides personalized encouragement based on your current emotional state.
Features

7 Emotion States: Happy, Sad, Frustrated, Overwhelmed, Zero Motivation, Rejected, Ghosted
42 Personalized Quotes: 6 quotes per emotion, randomly selected
Clean, Minimal Interface: Soft gradient backgrounds and intuitive design
Hover Labels: Emotion names appear on hover
Instant Refresh: Start fresh anytime with the refresh button
Mobile Responsive: Access encouragement anywhere, anytime

Tech Stack

React 18
Vite
Tailwind CSS
Lucide React (icons)

Getting Started
Prerequisites

Node.js (v16 or higher)
npm or yarn

Installation

Clone the repository:

bashgit clone https://github.com/yourusername/zender-app.git
cd zender-app

Install dependencies:

bashnpm install

Run the development server:

bashnpm run dev

Open your browser and navigate to http://localhost:5173

Build for Production
bashnpm run build
The production-ready files will be in the dist folder.
Project Structure
zender-app/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # This file
How It Works

Select Your Emotion: Click on one of the 7 emoji buttons (hover to see labels)
Generate Quote: Click "Find your zen" to receive personalized encouragement
Read & Reflect: Take a moment to absorb the message
Refresh: Use the refresh button to start over, or generate another quote

Customizing Quotes
To edit or add quotes, modify the quotes object in src/App.jsx. Each emotion has an array of 6 quotes. You can add more quotes or modify existing ones.
Deploying
Deploy to Vercel

Push your code to GitHub
Import your repository on Vercel
Vercel will auto-detect Vite and deploy

Deploy to Netlify

Push your code to GitHub
Import your repository on Netlify
Build command: npm run build
Publish directory: dist

Contributing
Contributions are welcome! Please feel free to submit a Pull Request.
License
MIT License - feel free to use this project to help others.
Acknowledgments
Built with empathy for everyone navigating the challenging job search process. You're not alone, and your worth isn't defined by your employment status.
