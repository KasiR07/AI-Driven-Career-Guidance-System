
const getMBTIResult = async ({ answers, resume }) => {
  let prompt = `
You're an expert MBTI personality and career coach. Based on the following answers to 10 personality-related questions of MBTI Test, determine the user's MBTI type (e.g., INFP, ESTJ), and write a personalized summary including their MBTI type, personality traits, and a short explanation of what it means.

Answers:
1. ${answers[0]}
2. ${answers[1]}
3. ${answers[2]}
4. ${answers[3]}
5. ${answers[4]}
6. ${answers[5]}
7. ${answers[6]}
8. ${answers[7]}
9. ${answers[8]}
10. ${answers[9]}
  `;

  // Append resume content if available
  if (resume && resume.trim() !== "") {
    prompt += `\n\RESUME CONTENT STARTS:\n${resume}`;
    prompt += `\n\RESUME CONTENT ENDS!`;
    prompt+= "\n Now Also, analyze the resume details, and including MBTI resuts also suggest about 5 job profiles which user can look upto"
    console.log(prompt);
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful MBTI personality expert." },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    console.log("GPT API response:", data);

    if (data?.choices?.[0]?.message?.content) {
      return data.choices[0].message.content;
    } else {
      return "No response received";
    }
  } catch (error) {
    console.error("GPT API error:", error);
    console.log("API KEY:", process.env.REACT_APP_OPENAI_API_KEY);
    return "There was an error retrieving your result.";
  }
};

export default getMBTIResult;
