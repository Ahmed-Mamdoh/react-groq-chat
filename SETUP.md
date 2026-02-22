# 🚀 Setup Guide for React Groq Chat

## Prerequisites

Before using this component, make sure you have:

1. **Node.js** (v14 or higher)
2. **React** (v16.8 or higher)
3. **Tailwind CSS** installed in your project
4. **Groq API Key** (get one at [groq.com](https://groq.com))

## 📦 Installation

```bash
npm install react-groq-chat
```

## 🎨 Tailwind CSS Setup

If you don't have Tailwind CSS installed:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Configure your `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-groq-chat/dist/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add to your CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 🔑 Getting a Groq API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for an account
3. Navigate to API Keys
4. Create a new API key
5. Copy the key (it starts with `gsk_`)

## 💻 Basic Usage

```tsx
import { ChatBot } from 'react-groq-chat';

function App() {
  return (
    <ChatBot 
      apiKey="your-groq-api-key-here"
      triggerColor="#007bff"
    />
  );
}
```

## 🎨 Customization Options

### Custom Trigger Button

```tsx
<ChatBot 
  apiKey="your-api-key"
  triggerColor="#ff6b6b"
  triggerImg="/path/to/your/icon.png"
/>
```

### Available Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiKey` | `string` | **Required** | Your Groq API key |
| `triggerColor` | `string` | `"#007bff"` | Color theme for the chat trigger button |
| `triggerImg` | `string` | Built-in icon | Custom image for the trigger button |

## 🛠️ Advanced Setup with State Management

```tsx
import React, { useState } from 'react';
import { ChatBot } from 'react-groq-chat';

function App() {
  const [apiKey, setApiKey] = useState('');
  const [showChat, setShowChat] = useState(false);

  return (
    <div>
      {!showChat ? (
        <div>
          <input 
            type="password" 
            placeholder="Enter Groq API Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <button onClick={() => setShowChat(true)}>
            Start Chat
          </button>
        </div>
      ) : (
        <ChatBot 
          apiKey={apiKey}
          triggerColor="#456"
        />
      )}
    </div>
  );
}
```

## 🔧 Environment Variables (Recommended)

For production applications, store your API key in environment variables:

```tsx
<ChatBot 
  apiKey={process.env.REACT_APP_GROQ_API_KEY}
  triggerColor="#007bff"
/>
```

Create a `.env` file:

```
REACT_APP_GROQ_API_KEY=your-groq-api-key-here
```

## 🎯 Available Models

The component supports multiple Groq models:

- `llama-3.3-70b-versatile`
- `meta-llama/llama-4-maverick-17b-128e-instruct`
- `meta-llama/llama-4-scout-17b-16e-instruct`
- `moonshotai/kimi-k2-instruct-0905`
- `groq/compound`

## 🐛 Troubleshooting

### Image Not Loading

If the default chat icon doesn't load:
- Check your build configuration
- Provide a custom `triggerImg` prop
- Ensure proper asset handling in your build tool

### Chat Not Responding

- Verify your API key is valid
- Check your internet connection
- Ensure you're not hitting rate limits
- Check browser console for errors

### Styling Issues

- Make sure Tailwind CSS is properly configured
- Check that the component classes aren't being purged
- Verify your Tailwind config includes the component files

## 📱 Mobile Optimization

The component is fully responsive and works great on mobile devices. The chat interface adapts to smaller screens automatically.

## 🔒 Security Best Practices

1. **Never commit API keys** to your repository
2. **Use environment variables** for production
3. **Implement proper authentication** in your application
4. **Validate user input** before processing
5. **Use HTTPS** in production

## 📞 Support

If you encounter any issues:

1. Check the [GitHub Issues](https://github.com/your-username/react-groq-chat/issues)
2. Review the [documentation](README.md)
3. Create a new issue with detailed information

---

Happy coding! 🚀