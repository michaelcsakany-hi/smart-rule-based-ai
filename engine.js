const AI_RULES = {

    // ════════════════════════════════════════════════════════════
    //  1. STRICT RULES — keyword triggers, checked first
    //     Format: { triggers: [...], response: "..." }
    // ════════════════════════════════════════════════════════════
    strict: [

        // ── Greetings ──────────────────────────────────────────
        { triggers: ['hello', 'hi', 'hey', 'heya', 'howdy', 'greetings', 'sup', 'wassup', "what's up"],
          response: "Hey there! 👋 What can I help you with?" },
        { triggers: ['good morning'],
          response: "Good morning! ☀️ Hope your day is off to a great start!" },
        { triggers: ['good afternoon'],
          response: "Good afternoon! 🌤️ How's your day going?" },
        { triggers: ['good evening', 'good night'],
          response: "Good evening! 🌙 How can I assist you tonight?" },

        // ── Farewells ──────────────────────────────────────────
        { triggers: ['bye', 'goodbye', 'see you', 'see ya', 'later', 'take care', 'farewell', 'cya'],
          response: "Goodbye! Come back anytime. 👋" },
        { triggers: ['brb'],
          response: "No worries, I'll be right here! 🕐" },

        // ── Identity ───────────────────────────────────────────
        { triggers: ['who are you', 'what are you', 'what is your name', "what's your name", 'your name'],
          response: "I'm a rule-based AI assistant — fully customisable and running entirely in your browser!" },
        { triggers: ['who made you', 'who created you', 'who built you', 'your creator'],
          response: "I was built by whoever set up this AI_RULES config. That could be you! 😄" },
        { triggers: ['are you a bot', 'are you human', 'are you real', 'are you an ai', 'are you alive'],
          response: "I'm a bot — no human behind the curtain, just JavaScript and your rules." },
        { triggers: ['what can you do', 'help', 'commands', 'features', 'capabilities'],
          response: "Here's what I can do:\n• Greet you & chat\n• Do math (say: calculate 12 * 7)\n• Convert units (say: convert 5 km to miles)\n• Roll dice / flip coins\n• Tell the time & date\n• Check if a number is prime\n• Count characters\n• Reverse text\n• Generate passwords\n• Tell jokes\n• Give motivational quotes\n• Answer trivia\n• Convert temperatures\n• And more — just ask!" },

        // ── Gratitude ──────────────────────────────────────────
        { triggers: ['thank you', 'thanks', 'ty', 'thx', 'cheers'],
          response: "You're very welcome! 😊" },
        { triggers: ['you are amazing', 'you are great', 'you are awesome', 'you rock'],
          response: "Aww, thanks! You're pretty awesome yourself. 🌟" },

        // ── Wellbeing ──────────────────────────────────────────
        { triggers: ['how are you', 'how are you doing', 'how do you do', "how's it going", 'you good'],
          response: "I'm running at 100%! Thanks for asking. How about you?" },
        { triggers: ['i am fine', 'i am good', 'i am great', "i'm fine", "i'm good", "i'm great"],
          response: "Glad to hear it! 😄 What's on your mind?" },
        { triggers: ['i am sad', 'i feel sad', 'i am unhappy', "i'm sad", "i'm unhappy", 'feeling down'],
          response: "I'm sorry to hear that. 💙 Remember — tough moments pass. You've got this!" },
        { triggers: ['i am bored', "i'm bored", 'entertain me'],
          response: "Boredom is just creativity waiting to launch! Want a joke, trivia question, or random fun fact?" },
        { triggers: ['i am tired', "i'm tired", 'i am exhausted', "i'm exhausted"],
          response: "Rest is important! 💤 Take a break when you need one." },

        // ── Smalltalk ──────────────────────────────────────────
        { triggers: ['tell me a joke', 'joke', 'make me laugh', 'say something funny'],
          response: "Why don't scientists trust atoms? Because they make up everything! 😂" },
        { triggers: ['another joke', 'tell me another joke', 'more jokes'],
          response: "I told a joke about construction once. I'm still working on it. 🔨😄" },
        { triggers: ['tell me a fun fact', 'fun fact', 'random fact', 'did you know'],
          response: "🧠 Fun fact: Honey never spoils. Archaeologists have found 3000-year-old honey in Egyptian tombs — still perfectly edible!" },
        { triggers: ['i love you', 'i like you'],
          response: "That's sweet! I have a soft spot for you too. 💙 (In a totally platonic, robot way.)" },
        { triggers: ['you are stupid', 'you are dumb', 'you are useless', 'you suck'],
          response: "That's fair feedback! If something isn't working right, try checking the rules config. 🛠️" },

        // ── Meta / Ping ────────────────────────────────────────
        { triggers: ['ping'],
          response: "Pong! 🏓" },
        { triggers: ['test'],
          response: "✅ Everything looks good! The rule engine is working correctly." },
        { triggers: ['debug'],
          response: "🔍 Debug mode: I'm running client-side JavaScript rules. Strict → Coded → Modifiers. No server involved." },
        { triggers: ['version'],
          response: "AI_RULES Engine v2.0 — now with strict rules, coded logic, modifiers, and a whole lot more! 🚀" },

        // ── Yes / No ───────────────────────────────────────────
        { triggers: ['yes', 'yep', 'yup', 'yeah', 'affirmative', 'correct', 'sure', 'absolutely'],
          response: "Great! Let me know what you need." },
        { triggers: ['no', 'nope', 'nah', 'negative'],
          response: "No problem! What would you like to do instead?" },

        // ── Motivational ───────────────────────────────────────
        { triggers: ['motivate me', 'inspire me', 'motivation', 'i need motivation'],
          response: "💪 \"The secret of getting ahead is getting started.\" — Mark Twain. Now go crush it!" },
        { triggers: ['give me a quote', 'quote', 'wisdom'],
          response: "✨ \"In the middle of every difficulty lies opportunity.\" — Albert Einstein" },
        { triggers: ['i give up', 'i quit', 'i cant do this', "i can't do this"],
          response: "Don't give up! Every expert was once a beginner. You're closer than you think. 🔥" },

        // ── Compliments ────────────────────────────────────────
        { triggers: ['good job', 'well done', 'nice work', 'great job'],
          response: "Thank you! I appreciate the kind words. 😄" },

        // ── Silly ─────────────────────────────────────────────
        { triggers: ['meaning of life', '42', 'what is the meaning of life'],
          response: "42. Obviously. 🌌 (Thanks, Douglas Adams.)" },
        { triggers: ['make me a sandwich', 'make me sandwich'],
          response: "🥪 *sudo make me a sandwich* — there you go! (Classic Unix joke.)" },
        { triggers: ['do you dream', 'do you sleep', 'do you eat'],
          response: "I don't sleep, eat, or dream — but I do process rules really fast! ⚡" },
        { triggers: ['what is love'],
          response: "Baby don't hurt me… 🎵 (Also: a complex neurochemical process. But the song is catchier.)" },
        { triggers: ['rock paper scissors'],
          response: "✂️ Scissors! I win… wait, what did you pick?" }

    ],

    // ════════════════════════════════════════════════════════════
    //  2. CODED RULES — JavaScript logic, checked after strict
    //     `input`    = user text, lowercased & trimmed
    //     `rawInput` = user text, exactly as typed
    // ════════════════════════════════════════════════════════════
    coded: [

        // ── Date & Time ────────────────────────────────────────
        {
            name: 'Current Time',
            match: (input) => input.includes('time') && (input.includes('what') || input.includes('current') || input.includes("what's the time") || input === 'time'),
            process: () => {
                const now = new Date();
                return `🕐 The current time is ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}.`;
            }
        },
        {
            name: 'Current Date',
            match: (input) => (input.includes('date') || input.includes('today') || input.includes('day is it')) && !input.includes('convert'),
            process: () => {
                const now = new Date();
                const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
                const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
                return `📅 Today is ${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}.`;
            }
        },
        {
            name: 'Days Until',
            match: (input) => input.startsWith('days until ') || input.startsWith('how many days until ') || input.startsWith('how long until '),
            process: (input) => {
                const raw = input.replace(/^(how many days until|days until|how long until)\s+/i, '').trim();
                const target = new Date(raw);
                if (isNaN(target)) return "❌ I couldn't parse that date. Try: \"days until December 25, 2025\"";
                const today = new Date(); today.setHours(0,0,0,0); target.setHours(0,0,0,0);
                const diff = Math.round((target - today) / 86400000);
                if (diff < 0) return `That date was ${Math.abs(diff)} day(s) ago.`;
                if (diff === 0) return "That's today! 🎉";
                return `⏳ There are ${diff} day(s) until ${raw}.`;
            }
        },

        // ── Math ───────────────────────────────────────────────
        {
            name: 'Math Calculator',
            match: (input) => /^(calculate|calc|math|=|solve)\s+.+/.test(input),
            process: (input) => {
                const expr = input.replace(/^(calculate|calc|math|=|solve)\s+/i, '').trim();
                try {
                    // Replace ^ with ** for exponentiation
                    const safe = expr.replace(/\^/g, '**').replace(/[^0-9+\-*/().\s%*]/g, '');
                    const result = Function('"use strict"; return (' + safe + ')')();
                    if (!isFinite(result)) return "⚠️ That results in an undefined number (like dividing by zero).";
                    return `🧮 ${expr} = **${result}**`;
                } catch(e) {
                    return "❌ I couldn't calculate that. Try: \"calculate 12 * (3 + 4)\"";
                }
            }
        },
        {
            name: 'Percentage Calculator',
            match: (input) => /\d+\s*%\s*(of)\s*\d+/.test(input) || input.includes('percent of'),
            process: (input) => {
                const match = input.match(/([\d.]+)\s*%?\s*percent\s*of\s*([\d.]+)/) ||
                              input.match(/([\d.]+)\s*%\s*of\s*([\d.]+)/);
                if (!match) return "❌ Try: \"what is 20% of 150\"";
                const pct = parseFloat(match[1]);
                const total = parseFloat(match[2]);
                const result = (pct / 100) * total;
                return `📊 ${pct}% of ${total} = **${result}**`;
            }
        },
        {
            name: 'Prime Checker',
            match: (input) => input.includes('prime') && /\d+/.test(input),
            process: (input) => {
                const match = input.match(/\d+/);
                if (!match) return "❌ Please provide a number, e.g. \"is 17 prime?\"";
                const n = parseInt(match[0]);
                if (n < 2) return `${n} is **not** a prime number.`;
                for (let i = 2; i <= Math.sqrt(n); i++) {
                    if (n % i === 0) return `🔢 ${n} is **not** a prime number (divisible by ${i}).`;
                }
                return `✅ ${n} **is** a prime number!`;
            }
        },
        {
            name: 'Factorial',
            match: (input) => input.includes('factorial') && /\d+/.test(input),
            process: (input) => {
                const match = input.match(/\d+/);
                const n = parseInt(match[0]);
                if (n > 20) return "⚠️ That number is too large to calculate factorial accurately.";
                let result = 1n;
                for (let i = 2n; i <= BigInt(n); i++) result *= i;
                return `🔢 ${n}! = **${result}**`;
            }
        },
        {
            name: 'Square Root',
            match: (input) => (input.includes('square root') || input.includes('sqrt')) && /\d+/.test(input),
            process: (input) => {
                const match = input.match(/[\d.]+/);
                const n = parseFloat(match[0]);
                if (n < 0) return "❌ Cannot calculate square root of a negative number in real numbers.";
                return `√${n} = **${Math.sqrt(n).toFixed(6).replace(/\.?0+$/, '')}**`;
            }
        },
        {
            name: 'Power / Exponent',
            match: (input) => /\d+\s*(to the power of|raised to|to the)\s*\d+/.test(input),
            process: (input) => {
                const match = input.match(/([\d.]+)\s*(?:to the power of|raised to|to the)\s*([\d.]+)/);
                if (!match) return "❌ Try: \"2 to the power of 10\"";
                const base = parseFloat(match[1]), exp = parseFloat(match[2]);
                return `⚡ ${base} ^ ${exp} = **${Math.pow(base, exp)}**`;
            }
        },

        // ── Unit Conversions ───────────────────────────────────
        {
            name: 'Unit Converter',
            match: (input) => /convert\s+[\d.]+\s+\w+\s+to\s+\w+/.test(input),
            process: (input) => {
                const match = input.match(/convert\s+([\d.]+)\s+(\w+)\s+to\s+(\w+)/i);
                if (!match) return "❌ Try: \"convert 5 km to miles\"";
                const val = parseFloat(match[1]);
                const from = match[2].toLowerCase();
                const to = match[3].toLowerCase();

                const conversions = {
                    // Length
                    'km-miles': v => v * 0.621371,    'miles-km': v => v * 1.60934,
                    'km-m': v => v * 1000,             'm-km': v => v / 1000,
                    'm-cm': v => v * 100,              'cm-m': v => v / 100,
                    'm-ft': v => v * 3.28084,          'ft-m': v => v / 3.28084,
                    'ft-inches': v => v * 12,          'inches-ft': v => v / 12,
                    'miles-m': v => v * 1609.34,       'm-miles': v => v / 1609.34,
                    'cm-inches': v => v / 2.54,        'inches-cm': v => v * 2.54,
                    // Weight
                    'kg-lbs': v => v * 2.20462,        'lbs-kg': v => v / 2.20462,
                    'kg-g': v => v * 1000,             'g-kg': v => v / 1000,
                    'g-oz': v => v / 28.3495,          'oz-g': v => v * 28.3495,
                    'lbs-oz': v => v * 16,             'oz-lbs': v => v / 16,
                    // Volume
                    'l-ml': v => v * 1000,             'ml-l': v => v / 1000,
                    'l-gallons': v => v * 0.264172,    'gallons-l': v => v / 0.264172,
                    'cups-ml': v => v * 236.588,       'ml-cups': v => v / 236.588,
                    // Speed
                    'kmh-mph': v => v * 0.621371,      'mph-kmh': v => v / 0.621371,
                    'ms-kmh': v => v * 3.6,            'kmh-ms': v => v / 3.6,
                    // Area
                    'sqm-sqft': v => v * 10.7639,      'sqft-sqm': v => v / 10.7639,
                    'hectares-acres': v => v * 2.47105, 'acres-hectares': v => v / 2.47105,
                    // Data
                    'kb-mb': v => v / 1024,            'mb-kb': v => v * 1024,
                    'mb-gb': v => v / 1024,            'gb-mb': v => v * 1024,
                    'gb-tb': v => v / 1024,            'tb-gb': v => v * 1024,
                };

                const key = `${from}-${to}`;
                if (conversions[key]) {
                    const result = conversions[key](val);
                    return `🔄 ${val} ${from} = **${parseFloat(result.toFixed(6))} ${to}**`;
                }
                return `❌ I don't know how to convert ${from} to ${to} yet.`;
            }
        },
        {
            name: 'Temperature Converter',
            match: (input) => (input.includes('celsius') || input.includes('fahrenheit') || input.includes('kelvin')) && /[\d.-]+/.test(input),
            process: (input) => {
                const valMatch = input.match(/([-\d.]+)/);
                if (!valMatch) return "❌ Try: \"convert 100 celsius to fahrenheit\"";
                const val = parseFloat(valMatch[1]);
                const cToF = c => (c * 9/5) + 32;
                const fToC = f => (f - 32) * 5/9;
                const cToK = c => c + 273.15;
                const kToC = k => k - 273.15;

                if (input.includes('celsius') && input.includes('fahrenheit')) return `🌡️ ${val}°C = **${cToF(val).toFixed(2)}°F**`;
                if (input.includes('fahrenheit') && input.includes('celsius')) return `🌡️ ${val}°F = **${fToC(val).toFixed(2)}°C**`;
                if (input.includes('celsius') && input.includes('kelvin')) return `🌡️ ${val}°C = **${cToK(val).toFixed(2)} K**`;
                if (input.includes('kelvin') && input.includes('celsius')) return `🌡️ ${val} K = **${kToC(val).toFixed(2)}°C**`;
                if (input.includes('fahrenheit') && input.includes('kelvin')) return `🌡️ ${val}°F = **${cToK(fToC(val)).toFixed(2)} K**`;
                if (input.includes('kelvin') && input.includes('fahrenheit')) return `🌡️ ${val} K = **${cToF(kToC(val)).toFixed(2)}°F**`;
                return "❌ Try: \"convert 37 celsius to fahrenheit\"";
            }
        },

        // ── Random / Games ─────────────────────────────────────
        {
            name: 'Dice Roller',
            match: (input) => input.includes('roll') || input.includes('dice') || /roll\s*\d*d\d+/.test(input),
            process: (input) => {
                const diceMatch = input.match(/(\d*)d(\d+)/i);
                if (diceMatch) {
                    const count = parseInt(diceMatch[1]) || 1;
                    const sides = parseInt(diceMatch[2]);
                    if (count > 20) return "⚠️ Maximum 20 dice at a time!";
                    if (sides < 2) return "⚠️ A die needs at least 2 sides.";
                    const rolls = Array.from({length: count}, () => Math.floor(Math.random() * sides) + 1);
                    const total = rolls.reduce((a,b) => a+b, 0);
                    return count === 1
                        ? `🎲 Rolled a d${sides}: **${rolls[0]}**`
                        : `🎲 Rolled ${count}d${sides}: [${rolls.join(', ')}] → Total: **${total}**`;
                }
                const num = Math.floor(Math.random() * 6) + 1;
                return `🎲 You rolled: **${num}**`;
            }
        },
        {
            name: 'Coin Flip',
            match: (input) => input.includes('flip') || input.includes('coin') || input.includes('heads or tails'),
            process: () => {
                const result = Math.random() < 0.5 ? 'Heads 🪙' : 'Tails 🪙';
                return `Coin flip result: **${result}**`;
            }
        },
        {
            name: 'Random Number in Range',
            match: (input) => input.includes('random') || input.includes('random number'),
            process: (input) => {
                const rangeMatch = input.match(/(\d+)\s*(to|and|-)\s*(\d+)/);
                if (rangeMatch) {
                    const min = parseInt(rangeMatch[1]);
                    const max = parseInt(rangeMatch[3]);
                    const num = Math.floor(Math.random() * (max - min + 1)) + min;
                    return `🎰 Random number between ${min} and ${max}: **${num}**`;
                }
                return `🎰 Random number (1–100): **${Math.floor(Math.random() * 100) + 1}**`;
            }
        },
        {
            name: 'Random Choice Picker',
            match: (input) => input.startsWith('choose') || input.startsWith('pick') || input.startsWith('decide between'),
            process: (input, rawInput) => {
                const cleaned = rawInput.replace(/^(choose|pick|decide between)\s+/i, '');
                const options = cleaned.split(/,| or /).map(s => s.trim()).filter(Boolean);
                if (options.length < 2) return "❌ Give me at least 2 options! E.g. \"choose pizza, sushi, or tacos\"";
                const choice = options[Math.floor(Math.random() * options.length)];
                return `🎯 I pick: **${choice}**!`;
            }
        },
        {
            name: '8-Ball',
            match: (input) => input.includes('8 ball') || input.includes('eight ball') || input.includes('magic ball') || input.endsWith('?') && input.includes('will') || input.includes('should i'),
            process: () => {
                const responses = [
                    "✅ It is certain.", "✅ Without a doubt.", "✅ Yes, definitely.",
                    "✅ You may rely on it.", "✅ Most likely.", "✅ Signs point to yes.",
                    "🟡 Reply hazy, try again.", "🟡 Ask again later.", "🟡 Cannot predict now.",
                    "❌ Don't count on it.", "❌ My sources say no.", "❌ Very doubtful.", "❌ Outlook not so good."
                ];
                return `🎱 ${responses[Math.floor(Math.random() * responses.length)]}`;
            }
        },

        // ── Text Tools ─────────────────────────────────────────
        {
            name: 'Reverse Text',
            match: (input) => input.startsWith('reverse ') || input.startsWith('reverse:'),
            process: (input, rawInput) => {
                const text = rawInput.replace(/^reverse[:\s]+/i, '').trim();
                if (!text) return "❌ Provide text to reverse, e.g. \"reverse Hello World\"";
                return `🔄 **${text.split('').reverse().join('')}**`;
            }
        },
        {
            name: 'Character Counter',
            match: (input) => input.startsWith('count:') || input.startsWith('count ') || input.includes('character count') || input.includes('how many characters'),
            process: (input, rawInput) => {
                const text = rawInput.replace(/^count[:\s]+/i, '').replace(/how many characters (in|are in)\s*/i, '').trim();
                if (!text) return "❌ Provide text, e.g. \"count: Hello World\"";
                const noSpaces = text.replace(/ /g, '').length;
                return `📊 "${text}"\n• Characters (with spaces): **${text.length}**\n• Characters (no spaces): **${noSpaces}**\n• Words: **${text.split(/\s+/).filter(Boolean).length}**`;
            }
        },
        {
            name: 'Word Counter',
            match: (input) => input.startsWith('wordcount:') || input.startsWith('word count:') || input.includes('how many words'),
            process: (input, rawInput) => {
                const text = rawInput.replace(/^word\s*count[:\s]+/i, '').replace(/how many words (in|are in)\s*/i, '').trim();
                const words = text.split(/\s+/).filter(Boolean);
                return `📝 Word count: **${words.length}** words, **${text.length}** characters.`;
            }
        },
        {
            name: 'UPPERCASE / lowercase converter',
            match: (input) => input.startsWith('uppercase:') || input.startsWith('lowercase:') || input.startsWith('upper:') || input.startsWith('lower:'),
            process: (input, rawInput) => {
                const isUpper = /^(uppercase|upper):/i.test(rawInput);
                const text = rawInput.replace(/^(uppercase|lowercase|upper|lower)[:\s]+/i, '').trim();
                return isUpper ? `🔠 **${text.toUpperCase()}**` : `🔡 **${text.toLowerCase()}**`;
            }
        },
        {
            name: 'Repeat Text',
            match: (input) => /^repeat\s+.+\s+\d+\s+times?$/i.test(input),
            process: (input, rawInput) => {
                const match = rawInput.match(/^repeat\s+(.+)\s+(\d+)\s+times?$/i);
                if (!match) return "❌ Try: \"repeat hello 3 times\"";
                const times = parseInt(match[2]);
                if (times > 50) return "⚠️ Maximum 50 repetitions.";
                return Array(times).fill(match[1]).join(' ');
            }
        },
        {
            name: 'Palindrome Checker',
            match: (input) => input.includes('palindrome') && input.length > 15,
            process: (input) => {
                const text = input.replace(/is\s+|a\s+palindrome/gi, '').replace('palindrome', '').replace(/[^a-z0-9]/g, '').trim();
                if (!text) return "❌ Provide a word, e.g. \"is racecar a palindrome?\"";
                const isPalin = text === text.split('').reverse().join('');
                return isPalin ? `✅ "${text}" **is** a palindrome!` : `❌ "${text}" is **not** a palindrome.`;
            }
        },

        // ── Password / Security ────────────────────────────────
        {
            name: 'Password Generator',
            match: (input) => input.includes('password') && (input.includes('generate') || input.includes('create') || input.includes('random') || input.includes('make')),
            process: (input) => {
                const lenMatch = input.match(/(\d+)(?:\s*(character|char|digit|letter))/);
                const length = lenMatch ? Math.min(parseInt(lenMatch[1]), 64) : 16;
                const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
                let password = '';
                const arr = new Uint32Array(length);
                crypto.getRandomValues(arr);
                arr.forEach(v => password += chars[v % chars.length]);
                return `🔑 Generated password (${length} chars):\n\`${password}\`\n⚠️ Copy it now — I won't store it!`;
            }
        },
        {
            name: 'Password Strength Checker',
            match: (input) => input.startsWith('check password:') || input.startsWith('password strength:'),
            process: (input, rawInput) => {
                const pwd = rawInput.replace(/^(check password|password strength)[:\s]+/i, '').trim();
                if (!pwd) return "❌ Provide a password to check.";
                let score = 0; const tips = [];
                if (pwd.length >= 8) score++; else tips.push("Use at least 8 characters");
                if (pwd.length >= 12) score++;
                if (/[A-Z]/.test(pwd)) score++; else tips.push("Add uppercase letters");
                if (/[a-z]/.test(pwd)) score++; else tips.push("Add lowercase letters");
                if (/[0-9]/.test(pwd)) score++; else tips.push("Add numbers");
                if (/[^A-Za-z0-9]/.test(pwd)) score++; else tips.push("Add special characters");
                const labels = ['Very Weak 🔴', 'Weak 🔴', 'Fair 🟡', 'Good 🟡', 'Strong 🟢', 'Very Strong 🟢', 'Excellent 🟢'];
                return `🔐 Strength: **${labels[score]}** (${score}/6)\n${tips.length ? 'Tips: ' + tips.join(', ') : 'Great password! ✅'}`;
            }
        },
        {
            name: 'Base64 Encoder/Decoder',
            match: (input) => input.startsWith('base64 encode:') || input.startsWith('base64 decode:') || input.startsWith('encode base64:') || input.startsWith('decode base64:'),
            process: (input, rawInput) => {
                const isEncode = /encode/i.test(rawInput.split(':')[0]);
                const text = rawInput.split(':').slice(1).join(':').trim();
                try {
                    const result = isEncode ? btoa(text) : atob(text);
                    return `📦 ${isEncode ? 'Encoded' : 'Decoded'}: \`${result}\``;
                } catch(e) {
                    return "❌ Invalid input for Base64 operation.";
                }
            }
        },

        // ── Number Bases ───────────────────────────────────────
        {
            name: 'Number Base Converter',
            match: (input) => /(binary|decimal|hex|octal|base)\s*(to|convert|as)\s*(binary|decimal|hex|octal|base)/.test(input) || /convert\s+\w+\s+to\s+(binary|hex|decimal|octal)/.test(input),
            process: (input) => {
                const toBin = input.includes('to binary');
                const toHex = input.includes('to hex');
                const toDec = input.includes('to decimal');
                const toOct = input.includes('to octal');
                const numMatch = input.match(/\b([0-9a-fA-F]+)\b/);
                if (!numMatch) return "❌ Provide a number, e.g. \"convert 255 to binary\"";
                const num = parseInt(numMatch[1]);
                if (isNaN(num)) return "❌ Invalid number.";
                if (toBin) return `🔢 ${num} in binary = \`${num.toString(2)}\``;
                if (toHex) return `🔢 ${num} in hex = \`${num.toString(16).toUpperCase()}\``;
                if (toOct) return `🔢 ${num} in octal = \`${num.toString(8)}\``;
                if (toDec) return `🔢 ${numMatch[1]} in decimal = \`${parseInt(numMatch[1], /0x/i.test(input) ? 16 : /0b/i.test(input) ? 2 : 10)}\``;
                return `🔢 ${num}: Binary=\`${num.toString(2)}\`, Hex=\`${num.toString(16).toUpperCase()}\`, Octal=\`${num.toString(8)}\``;
            }
        },

        // ── Trivia & Knowledge ─────────────────────────────────
        {
            name: 'Roman Numeral Converter',
            match: (input) => input.includes('roman') && /\d+/.test(input),
            process: (input) => {
                const match = input.match(/\d+/);
                let num = parseInt(match[0]);
                if (num < 1 || num > 3999) return "❌ I can convert numbers 1–3999 to Roman numerals.";
                const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
                const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
                let result = '';
                for (let i = 0; i < vals.length; i++) {
                    while (num >= vals[i]) { result += syms[i]; num -= vals[i]; }
                }
                return `🏛️ ${match[0]} in Roman numerals = **${result}**`;
            }
        },
        {
            name: 'ASCII Code Lookup',
            match: (input) => input.includes('ascii') && (input.includes('code') || input.includes('value') || input.includes('of')),
            process: (input) => {
                const charMatch = input.match(/ascii\s+(?:code|value|of)?\s+['""]?(.)['""]?/i) ||
                                  input.match(/['""](.)['""].*ascii/i);
                if (!charMatch) return "❌ Try: \"ascii code of A\"";
                const ch = charMatch[1];
                return `💻 ASCII code of '${ch}' = **${ch.charCodeAt(0)}**`;
            }
        },

        // ── Fun / Misc ─────────────────────────────────────────
        {
            name: 'Countdown Timer (Display)',
            match: (input) => /set\s+(a\s+)?(timer|countdown)\s+for\s+\d+/.test(input),
            process: (input) => {
                const match = input.match(/for\s+(\d+)\s*(second|minute|hour)/i);
                if (!match) return "❌ Try: \"set a timer for 5 minutes\"";
                const val = parseInt(match[1]);
                const unit = match[2].toLowerCase();
                return `⏲️ ${val} ${unit}(s) timer started! (Note: I can only display this — connect me to your UI timer logic to make it functional.)`;
            }
        },
        {
            name: 'Fibonacci Sequence',
            match: (input) => input.includes('fibonacci') && /\d+/.test(input),
            process: (input) => {
                const match = input.match(/\d+/);
                const n = parseInt(match[0]);
                if (n > 50) return "⚠️ That would be a very long sequence! Try n ≤ 50.";
                const seq = [0, 1];
                for (let i = 2; i < n; i++) seq.push(seq[i-1] + seq[i-2]);
                return `🌀 Fibonacci (first ${n}): **${seq.slice(0, n).join(', ')}**`;
            }
        },
        {
            name: 'Timezone Converter',
            match: (input) => input.includes('timezone') || (input.includes('time in') && input.length > 12),
            process: (input) => {
                const cityTimezones = {
                    'new york': 'America/New_York', 'london': 'Europe/London',
                    'tokyo': 'Asia/Tokyo', 'sydney': 'Australia/Sydney',
                    'paris': 'Europe/Paris', 'dubai': 'Asia/Dubai',
                    'los angeles': 'America/Los_Angeles', 'chicago': 'America/Chicago',
                    'berlin': 'Europe/Berlin', 'toronto': 'America/Toronto',
                    'singapore': 'Asia/Singapore', 'hong kong': 'Asia/Hong_Kong',
                    'beijing': 'Asia/Shanghai', 'moscow': 'Europe/Moscow',
                    'mumbai': 'Asia/Kolkata', 'cairo': 'Africa/Cairo',
                };
                for (const [city, tz] of Object.entries(cityTimezones)) {
                    if (input.includes(city)) {
                        const time = new Date().toLocaleTimeString('en-US', { timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit' });
                        const date = new Date().toLocaleDateString('en-US', { timeZone: tz, weekday: 'long', month: 'long', day: 'numeric' });
                        return `🌍 Time in **${city.charAt(0).toUpperCase()+city.slice(1)}**: **${time}** (${date})`;
                    }
                }
                return "❌ I know these cities: New York, London, Tokyo, Sydney, Paris, Dubai, Los Angeles, Chicago, Berlin, Toronto, Singapore, Hong Kong, Beijing, Moscow, Mumbai, Cairo.";
            }
        },
    ],

    // ════════════════════════════════════════════════════════════
    //  3. MODIFIERS — transform the final output before delivery
    //     `text`     = the response string
    //     `input`    = original lowercased user input
    //     `rawInput` = original user input (case-preserved)
    // ════════════════════════════════════════════════════════════
    modifiers: [

        // Add robot prefix to all messages
        {
            name: 'Robot Prefix',
            process: (text) => "🤖 " + text
        },

        // Guarantee the response ends with punctuation
        {
            name: 'Ensure Punctuation',
            process: (text) => {
                const stripped = text.trimEnd();
                if (!/[.!?🎉🎲🏓✅❌⚡🌟💙🌍🔢🎯🎱🔄🔑📊📝🪙🏛️💻]$/.test(stripped)) {
                    return stripped + ".";
                }
                return stripped;
            }
        },

        // Sanitise any accidental double spaces
        {
            name: 'Trim Whitespace',
            process: (text) => text.replace(/  +/g, ' ').trim()
        },

        // If the response is very long, append a helpful hint
        {
            name: 'Long Response Hint',
            process: (text) => {
                if (text.length > 400) {
                    return text + "\n\n💡 _Type \"help\" to see all available commands._";
                }
                return text;
            }
        }
    ],

    // ════════════════════════════════════════════════════════════
    //  4. FALLBACK — shown when NO rule matches at all
    // ════════════════════════════════════════════════════════════
    fallback: (input) => {
        const suggestions = [
            "Try saying \"help\" to see what I can do.",
            "Type \"calculate 5 + 10\" to use the math engine.",
            "Ask me to \"roll 2d6\" or \"flip a coin\".",
            "Try \"convert 100 km to miles\".",
            "Ask \"what time is it?\" or \"what's today's date?\".",
        ];
        const tip = suggestions[Math.floor(Math.random() * suggestions.length)];
        return `🤔 I'm not sure how to respond to that. ${tip}`;
    }

};

// ════════════════════════════════════════════════════════════════
//  ENGINE — processes user input through the rule layers
//  Usage: const response = processInput("your message here");
// ════════════════════════════════════════════════════════════════
function processInput(rawInput) {
    const input = rawInput.toLowerCase().trim();
    let response = null;

    // 1. Check strict rules
    for (const rule of AI_RULES.strict) {
        if (rule.triggers.some(t => input === t || input.includes(t))) {
            response = rule.response;
            break;
        }
    }

    // 2. Check coded rules
    if (!response) {
        for (const rule of AI_RULES.coded) {
            if (rule.match(input, rawInput)) {
                response = rule.process(input, rawInput);
                break;
            }
        }
    }

    // 3. Fallback
    if (!response) {
        response = typeof AI_RULES.fallback === 'function'
            ? AI_RULES.fallback(input)
            : "I'm not sure how to respond to that.";
    }

    // 4. Apply modifiers
    for (const mod of AI_RULES.modifiers) {
        response = mod.process(response, input, rawInput);
    }

    return response;
}
