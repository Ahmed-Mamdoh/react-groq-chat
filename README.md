# 🤖 React Groq Chat

A modern, customizable React component for integrating a chatbot with the Groq API. Built with TypeScript, Tailwind CSS, and Radix UI for a professional chat interface.

[![npm version](https://badge.fury.io/js/react-groq-chat.svg)](https://badge.fury.io/js/react-groq-chat)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## ✨ Features

- 🎯 **Easy Integration** - Simple drop-in component for React applications
- 🎨 **Customizable UI** - Tailwind CSS styling with custom color themes
- 🚀 **Modern Stack** - Built with TypeScript, Radix UI, and React 19
- 🔒 **Type Safe** - Full TypeScript support with comprehensive types
- 🎭 **Markdown Support** - Rich message formatting with react-markdown
- 🔄 **Real-time Chat** - Smooth conversation flow with loading states

## 📦 Installation

```bash
npm install react-groq-chat
```

## 🚀 Quick Start

```tsx
import { ChatBot } from 'react-groq-chat';

function App() {
  return (
    <ChatBot 
      apiKey="your-groq-api-key"
    />
  );
}
```

## 🔧 Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `apiKey` | `string` | **Required** | Your Groq API key |
| `triggerColor` | `string` | `"#007bff"` | Color theme for the chat trigger button |
| `triggerImg` | `string` | null | Custom image for the trigger button |
| `contentBgColor` | `string` | `"#1a1a1a"` | Background color of chat window |
| `contentHeight` | `number` | `500` | Height of chat window in pixels |
| `contentWidth` | `number` | `350` | Width of chat window in pixels |
| `contentBorder` | `number` | `1` | Border width of chat window |
| `contentBorderColor` | `string` | `"#333333"` | Border color of chat window |
| `contentBorderRoundness` | `number` | `16` | Border radius of chat window |
| `textColor` | `string` | `"#ffffff"` | Text color in chat window |
| `userMessageBgColor` | `string` | `"#007bff"` | Background color for user messages |
| `assistantMessageBgColor` | `string` | `"#2d2d2d"` | Background color for assistant messages |
| `triggerRightPosition` | `number` | `24` | Right position of trigger button (px) |
| `triggerBottomPosition` | `number` | `24` | Bottom position of trigger button (px) |
| `contentRightPosition` | `number` | `24` | Right position of chat window (px) |
| `systemPrompt` | `string` | Default assistant prompt | Custom system prompt for AI behavior |
| `assistantFirstMessage` | `string` | Default greeting | First message from assistant |

## 🎨 Customization

### Custom Trigger Button

```tsx
<ChatBot 
  apiKey="your-api-key"
  triggerColor="#ff6b6b"
  triggerImg="/path/to/your/icon.png"
/>
```

### Styling with Tailwind CSS

The component uses Tailwind CSS classes. Make sure you have Tailwind CSS installed in your project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## 📋 Requirements

- React 19.0.0 or higher
- Tailwind CSS (for styling)
- Groq API key


## 🔗 API Integration

This component integrates with the Groq API and supports multiple models:

- `llama-3.3-70b-versatile`
- `meta-llama/llama-4-maverick-17b-128e-instruct`
- `meta-llama/llama-4-scout-17b-16e-instruct`
- `moonshotai/kimi-k2-instruct-0905`
- And more...


## 📄 License

ISC License - see [LICENSE](LICENSE) file for details.


## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Check the [documentation](https://github.com/Ahmed-Mamdoh/react-groq-chat)

---

Made with ❤️ by Ahmed Mamdoh