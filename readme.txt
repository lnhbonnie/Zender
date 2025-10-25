# Job Search Hope Generator

A compassionate web app designed to provide encouragement, validation, and practical support for job seekers during their search journey.

## Features

- 7 emotional states tailored to the job search experience:
  - Happy 😊
  - Sad 😢
  - Frustrated 😤
  - Overwhelmed 😫
  - Depressed 😞
  - Zero Motivation 🌀
  - Ghosted 💔

- Personalized messages that:
  - Validate feelings
  - Provide practical daily actions
  - Offer emotional support
  - Include humor when appropriate
  - Acknowledge the broken job search system

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/job-search-hope-generator.git
cd job-search-hope-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
job-search-hope-generator/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── README.md           # This file
```

## Customizing Messages

To add or edit encouragement messages, open `src/App.jsx` and modify the `quotes` object at the top of the file. Each emotion has an array of messages - simply add new strings to the arrays.

Example:
```javascript
const quotes = {
  happy: [
    "Your existing message",
    "Add your new message here",
    // Add as many as you want!
  ],
  // ... other emotions
};
```

## Deployment

This project can be deployed to:
- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will auto-detect Vite and deploy

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this project however you'd like!

## Acknowledgments

Created with empathy for job seekers navigating a challenging market. You're doing better than you think. 💙
