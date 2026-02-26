
const AI_RULES = {

    /**
     * 1. STRICT RULES
     * These are checked first. Simple keyword triggers that instantly reply.
     * Format: { triggers: ["keyword1", "keyword2"], response: "Your reply!" }
     */
    strict: [
        { 
            triggers: ['hello', 'hi', 'hey', 'greetings'], 
            response: "Hello there! How can I assist you today?" 
        },
        { 
            triggers: ['who are you', 'what are you'], 
            response: "I am a customizable rule-based AI!" 
        },
        { 
            triggers: ['ping'], 
            response: "pong!" 
        },
        { 
            triggers: ['bye', 'goodbye'], 
            response: "Goodbye! Feel free to talk to me anytime." 
        }
    ],

    /**
     * 2. CODED RULES
     * Checked if NO strict rule matches. Use real JavaScript here!
     * `input` = lowercase text. `rawInput` = exactly how the user typed it.
     */
    coded: [
        // Example: Math Calculator
        {
            name: 'Math Calculator',
            match: (input) => input.startsWith("calculate ") || input.startsWith("math "),
            process: (input) => {
                // Remove the command word to get just the numbers
                let expression = input.replace("calculate ", "").replace("math ", "");
                
                try {
                    // Evaluate the math (eval is okay here since it's client-side only)
                    let result = eval(expression);
                    return "The answer is " + result + ".";
                } catch(e) {
                    return "I couldn't calculate that. Please provide a valid math expression.";
                }
            }
        },

        // Example: Random Number Generator
        {
            name: 'Random Number',
            match: (input) => input.includes("random number") || input.includes("roll a dice"),
            process: (input) => {
                let num = Math.floor(Math.random() * 100) + 1;
                return "I generated a random number for you: " + num;
            }
        },

        // Example: Character Counter
        {
            name: 'Character Counter',
            match: (input) => input.startsWith("count:"),
            process: (input, rawInput) => {
                // Using rawInput to preserve uppercase/lowercase in the text
                let textToCount = rawInput.substring(6).trim();
                return `That text has ${textToCount.length} characters.`;
            }
        }
    ],

    /**
     * 3. MODIFIERS
     * Run at the very end. They take the final output and alter it before sending.
     * `text` = the AI's intended response.
     */
    modifiers: [
        // Example: Add an emoji to every response
        {
            name: 'Add Robot Prefix',
            process: (text) => "🤖 " + text
        },

        // Example: Ensure every response ends with a period if it doesn't already
        {
            name: 'Ensure Punctuation',
            process: (text) => {
                if (!/[.!?]$/.test(text)) {
                    return text + ".";
                }
                return text;
            }
        }
    ]
};
