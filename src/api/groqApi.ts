type chatWithGroqProps = {
  messages: {
    role: string;
    content: string;
  }[];
  model: string;
  apiKey: string;
};

type response = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    message: {
      role: string;
      content: string;
      reasoning?: string;
    };
    logprobs: null;
    finish_reason: string;
  }[];
  usage: {
    queue_time: number;
    prompt_tokens: number;
    prompt_time: number;
    completion_tokens: number;
    completion_time: number;
    total_tokens: number;
    total_time: number;
    prompt_tokens_details: {
      cached_tokens: number;
    };
    completion_tokens_details: {
      reasoning_tokens: number;
    };
  };
  usage_breakdown: null;
  system_fingerprint: string;
  x_groq: {
    id: string;
    seed: number;
  };
  service_tier: string;
};

export async function chatWithGroq({
  messages,
  model,
  apiKey,
}: chatWithGroqProps) {
  const url = "https://api.groq.com/openai/v1/chat/completions";
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      messages,
      temperature: 0.3,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result: response = await response.json();
    return result.choices[0].message;
  } catch (error) {
    console.error(error);
    return "error";
  }
}
