const chatMessages = document.getElementById("chatMessages");
const userInput = document.getElementById("userInput");
const botName = "RA"
function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.textContent = `${sender}: ${message}`;
    chatMessages.appendChild(messageElement);
}

function sendMessage() {
    const userMessage = userInput.value.trim();
    userInput.value = "";

    if (userMessage === "") {
        return;
    }

    appendMessage("You", userMessage);

    // Process user input and generate chatbot response
    const chatbotResponse = generateChatbotResponse(userMessage);
    appendMessage(botName, chatbotResponse);

    // Ask follow-up questions based on chatbot's response
    if (chatbotResponse === `Hello! How can I assist you, ${botName}?`) {
        setTimeout(() => {
            appendMessage(botName, `What specific information are you looking for?`);
        }, 1000);
    } else if (chatbotResponse === `I'm just a robot, but thanks for asking!`) {
        setTimeout(() => {
            appendMessage(botName, `Is there anything specific you'd like to know?`);
        }, 1000);
    } else if (chatbotResponse === `I'm sorry, I didn't understand that.`) {
        setTimeout(() => {
            appendMessage(botName, `Could you please rephrase your question,?`);
        }, 1000);
    }
    // Add more follow-up questions based on chatbot responses
    else if (chatbotResponse.includes("joke")) {
        setTimeout(() => {
            appendMessage(botName, `Sure, here's one: Why don't scientists trust atoms? Because they make up everything, ${botName}!`);
        }, 1000);
    } else if (chatbotResponse.includes("age")) {
        setTimeout(() => {
            appendMessage(botName, `As a computer program, I don't age. Is there something else you'd like to know?`);
        }, 1000);
    } else if (chatbotResponse.includes("favorite color")) {
        setTimeout(() => {
            appendMessage(botName, `I don't have personal preferences, but I'm fond of all colors! What else can I assist you with?`);
        }, 1000);
    } else if (chatbotResponse.includes("Do you want to know how much you have saved?")) {
        setTimeout(() => {
            appendMessage(botName, `Write Your First name in small latters?`);
        }, 1000);   
        
    } else if (chatbotResponse.includes("Your total current saving is Ksh 2000")) {
        setTimeout(() => {
            appendMessage(botName, `Do you want to apply for loan or make a deposit?`);
        }, 1000);

    }  else if (chatbotResponse === "type your name") {
        setTimeout(() => {
            appendMessage("RA", "Do you want to apply for loan or make a deposit?");
        }, 1000);
    } else if (chatbotResponse === "Sure, you can request a loan or make a deposit. Please type 'loan' for requesting a loan or 'deposit' for making a deposit.") {
        setTimeout(() => {
            appendMessage("RA", "Do you want to apply for a loan or make a deposit?");
        }, 1000);
    }    else if (chatbotResponse === 'Sasa ona huyu😂😂 wachana na mimi') {
        setTimeout(() => {
            appendMessage("RA", `respect my friend dont just great like that, iam big boss`);
        }, 1000);
    }    
    }
    // Add more follow-up questions based on chatbot responses as needed
  

function generateChatbotResponse(userMessage) {
  // Define an object with conditions and responses
  const responses = {
      "hello": "Hello! How can I assist you?",
      "joke": "joke",
      "hi": "Hi there! Are you a member of saving invesment team?",
      "how are you": "I'm just a robot, but thanks for asking!",
      "how's your day": "As an AI, I don't have feelings, but thank you for asking!",
      "what is your purpose": "I'm here to answer your questions and provide information!",
      "bye": "Goodbye! Feel free to come back anytime.",
      "help": "Sure, I'm here to help. What do you need assistance with?",
      "what's the weather like": "I'm sorry, I don't have access to real-time data. Please check a weather website or app.",
      "thanks": "VYou're welcome! If you have any more questions or need further assistance, feel free to ask. Have a great day!",
      "thank you": "You're welcome! If you have any more questions, feel free to ask.",
      "tell me a joke": "Sure, here's one: Why don't scientists trust atoms? Because they make up everything!",
      "how old are you": "I'm just a computer program, so I don't have an age.",
      "what's your favorite color": "I don't have personal preferences, but I'm fond of all colors! What else can I assist you with?",
      "where are you from": "I exist in the digital world and have no physical location.",
      "give me a life quote": getRandomLifeQuote(),
      // Condition for asking about investment
      "what is investment": "Investing is a smart way to grow your wealth over time. It's important to do thorough research and consider various investment options that align with your financial goals and risk tolerance. Popular investment options include stocks, bonds, mutual funds, real estate, and more. Keep in mind that all investments carry some level of risk, and it's essential to diversify your portfolio to reduce risk. If you have specific investment-related questions, feel free to ask!",
      "how can I invest my money": "Investing can be done through various financial instruments such as stocks, bonds, mutual funds, real estate, and more. It's essential to assess your risk tolerance, financial goals, and investment horizon before making any investment decisions. Consult with a financial advisor for personalized guidance.",
      "what are the best stocks to invest in": "The best stocks to invest in depend on your individual financial situation and investment goals. It's crucial to conduct thorough research on companies, their financial health, and their growth prospects before investing in their stocks. Consider diversifying your investments to reduce risk.",
      "how can I start saving for retirement": "Starting early and contributing regularly to retirement accounts such as 401(k)s or IRAs is a good way to save for retirement. Consider maximizing employer matching contributions and exploring low-cost index funds or target-date funds for long-term growth.",
      "what are the benefits of mutual funds": "Mutual funds pool money from multiple investors to invest in a diversified portfolio of stocks, bonds, or other securities. They offer diversification, professional management, and liquidity. Additionally, they are suitable for investors with different risk tolerances.",
      "what's the difference between stocks and bonds": "Stocks represent ownership in a company, while bonds are debt securities issued by governments or corporations. Investing in stocks involves higher risk and potential for higher returns, while bonds are generally considered safer with lower returns.",
      "how can I improve my credit score": "To improve your credit score, pay bills on time, keep credit card balances low, and avoid opening too many new credit accounts. Regularly review your credit report for errors and work to reduce outstanding debts.",
      "what is compound interest": "Compound interest is interest earned on the initial principal and any accumulated interest. It allows your savings or investments to grow faster over time as interest is earned on both the initial amount and the interest already earned.",
      "how can I start a budget": "Start a budget by tracking your income and expenses. Categorize expenses and identify areas where you can cut back. Allocate a portion of your income to savings and investments. Consider using budgeting apps or spreadsheets to help you manage your finances.",
      "yes": "Hi there! Do you want to know how much you have saved?",
      "omwaro": "Your total current saving is Ksh 3700 +$100. Is there something else you'd like to know?",
      "shem": "Your total current saving is Ksh 4615. Is there something else you'd like to know?",
      "edwin": "Your total current saving is Ksh 875. Is there something else you'd like to know?",
      "raila": "Your total current saving is Ksh 2200. Is there something else you'd like to know?",
      "isaac": "Your total current saving is Ksh 3900. Is there something else you'd like to know?",
      "bornbray" : "Your total current saving is Ksh 4600. Is there something else you'd like to know?",
      "peter": "Your total current saving is Ksh 300 .Is there something else you'd like to know?",
      "osano": "Your total current saving is Ksh too low. Is there something else you'd like to know?",
      "samuel": "Your total current saving is Ksh 1100. Is there something else you'd like to know?",
      "david": "Your total current saving is Ksh 00. Is there something else you'd like to know?",
      "john": "Your total current saving is Ksh 1700. Is there something else you'd like to know?",
      "billy": "Your total current saving is Ksh . Is there something else you'd like to know?",
      "zaddock": "Your total current saving is Ksh 30 pull up. Is there something else you'd like to know?",
      "dennis": "Your total current saving is Ksh 00 . Is there something else you'd like to know?",
      "stive": "Your total current saving is Ksh 00. Is there something else you'd like to know?",
      "withdraw": "Sure, you can request a loan or make a deposit. Please type 'loan' for requesting a loan or 'deposit' for making a deposit.",
      "loan": "To request a loan, please fill out the loan application form on our website or visit our nearest branch. Our loan officers will review your application and get back to you as soon as possible.",
      "deposit": "To make a deposit, you can visit our nearest branch and deposit cash or checks. also you can deposit via +254 793 648810.",
      "no":"Alright, no problem! If you ever need assistance, don't hesitate to reach out. Have a wonderful time!",
      "account": "type your name",
      "what is your name": "I'm an Rayons D_Pesa designed to assist with a wide range of information about saving team. How can I help you today?",
      "your name" : "I'm an Rayons D_Pesa designed to assist with a wide range of information about saving team. How can I help you today?",
      "what is D-PESA": "D-PESA is a fascinating social media app, but I'd like to keep the details private for now. Is there anything else you'd like to know or discuss? Feel free to ask any other questions you have in mind, and I'll be happy to help!",
      "what is dpesa": "D-PESA is a fascinating social media app, but I'd like to keep the details private for now. Is there anything else you'd like to know or discuss? Feel free to ask any other questions you have in mind, and I'll be happy to help!",
      "D-PESA": "D-PESA is a fascinating social media app, but I'd like to keep the details private for now. Is there anything else you'd like to know or discuss? Feel free to ask any other questions you have in mind, and I'll be happy to help!",
      "when" : "soon",
      "when is the meeting":"Our meeting is always held on the last Sunday of the month at [8:30 pm]. See you then!",
      "When is meeting":"Our meeting is always held on the last Sunday of the month at [8:30 pm]. See you then!",
      "will you be there": "Yes, I will be there to assist you during the meeting. If you have any questions or need any help, feel free to ask!",
      "sure" :"Great! I'll be there to support and assist you during the meeting.",
      "am hungry" : "I understand how you feel. It's time to grab a delicious meal and satisfy your hunger! Enjoy your food!",
      "i am hungry" : "I understand how you feel. It's time to grab a delicious meal and satisfy your hunger! Enjoy your food!",
      "iam hungry" : "I understand how you feel. It's time to grab a delicious meal and satisfy your hunger! Enjoy your food!",
      "i don't have money": "I'm sorry to hear that. If you're in a difficult financial situation, it's important to seek support from friends, family, or local resources. Take care!",
      "they are broke": "sasa wewe itabidi ujipange",
      "broke": "sasa wewe itabidi ujipange","iam broke": "sasa wewe itabidi ujipange",
      "who is the kenya president": "William Ruto, who is  famously known as Zakayo Mtoza Ushuru. However, it's essential to note that Zakayo Mtoza Ushuru", "who is ruto": "fake hastler",
      "you like ruto": " oh men! tell me first, because your are the one who is hungry", "you like him": " oh men! tell me firt, because your are the one who is hungry",
      "come": "Sasa ona huyu😂😂 wachana na mimi",
      "sorry" : " good. anything i can help with", "iam sorry" : " good. anything i can help with", "i am" : "good. anything i can help with", "ok" : " good. anything i can help with",
      "today verse": getRandomVerse(),
      "give me a verse": getRandomVerse(),
      "verse": getRandomVerse(),"another verse": getRandomVerse(), "another one": getRandomVerse(),
      "daily verse": getRandomVerse(),"another verse": getRandomVerse(),
      "how can i log in": "clic the register button. it will direct you to next page then click verify, the put your passward","how can i login": "clic the register button. it will direct you to next page then click verify, the put your passward", "how to log in": "clic the register button. it will direct you to next page then click verify, the put your passward", "how to login": "clic the register button. it will direct you to next page then click verify, the put your passward",
      "how to register": "clic the register button. it will direct you to next page then click verify, the put your passward", "how can i register": "clic the register button. it will direct you to next page then click verify, the put your passward"

  };

    // Check if the user message matches any condition and return the corresponding response
    const lowerCaseMessage = userMessage.toLowerCase();
    for (const condition in responses) {
        if (lowerCaseMessage.includes(condition)) {
            return responses[condition];
        }
    }

    return `I'm sorry, I didn't understand that.`;
}

// Array of life quotes
const lifeQuotes = [
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Life is what we make it, always has been, always will be. - Grandma Moses",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "Life's most persistent and urgent question is, 'What are you doing for others?' - Martin Luther King Jr.",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "The only way to do great work is to love what you do. - Steve Jobs",
    // Add more life quotes here
];

// Function to get a random life quote
function getRandomLifeQuote() {
    const randomIndex = Math.floor(Math.random() * lifeQuotes.length);
    return lifeQuotes[randomIndex];
}

const verses = [
    "2 Nephi 2:25: Adam fell that men might be, and men are, that they might have joy.",
    "Moroni 10:3-5: Behold, I would exhort you that when ye shall read these things...",
    "Alma 32:21: And now as I said concerning faith—faith is not to have a perfect knowledge...",
    "Ether 12:27: And if men come unto me I will show unto them their weakness.",
    "2 Nephi 2:25: Adam fell that men might be; and men are, that they might have joy. This verse is from the Book of 2 Nephi, and it teaches about the purpose of life and the importance of experiencing joy. It suggests that the fall of Adam and Eve was part of God's plan to allow us to come to earth and experience mortality, enabling us to have the opportunity to find happiness and joy in this life and the next.",
    "Alma 34:32 - Yea, I say unto you, that the man that doeth this, the same cometh out in open rebellion against God; therefore he listeth to obey the evil spirit, and becometh an enemy to all righteousness; therefore, the Lord has no place in him, for he dwelleth not in unholy temples.",
    "Alma 42:30 - O my son, I desire that ye should deny the justice of God no more. Do not endeavor to excuse yourself in the least point because of your sins, by denying the justice of God; but do you let the justice of God, and his mercy, and his long-suffering have full sway in your heart; and let it bring you down to the dust in humility.",
    "Mosiah 4:11 - Remember God's goodness and humble yourself in His presence.",
    "2 Nephi 4:17-19 - Despite God's works, I sorrow for my sins.",
    "2 Nephi 33:10-11 - Believe in Christ and do good; His words are truth.",
    "Alma 34:32 - For behold, this life is the time for men to prepare to meet God; yea, behold the day of this life is the day for men to perform their labors.",
    "Alma 37:37 - Counsel with the Lord in all thy doings, and he will direct thee for good; yea, when thou liest down at night lie down unto the Lord, that he may watch over you in your sleep; and when thou risest in the morning let thy heart be full of thanks unto God; and if ye do these things, ye shall be lifted up at the last day",
    "1Nephi 3:7 - And it came to pass that I, Nephi, said unto my father: I will go and do the things which the Lord hath commanded, for I know that the Lord giveth no commandments unto the children of men, save he shall prepare a way for them that they may accomplish the thing which he commandeth them.",
    "Mosiah 2:17 - And behold, I tell you these things that ye may learn wisdom; that ye may learn that when ye are in the service of your fellow beings, ye are only in the service of your God.",
    "Alma 34:32 - For behold, this life is the time for men to prepare to meet God; yea, behold the day of this life is the day for men to perform their labors.",
    "Helaman 5:12 - And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation; that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.",
    "Moroni 10:4-5 - And when ye shall receive these things, I would exhort you that ye would ask God, the Eternal Father, in the name of Christ, if these things are not true; and if ye shall ask with a sincere heart, with real intent, having faith in Christ, he will manifest the truth of it unto you, by the power of the Holy Ghost. And by the power of the Holy Ghost, ye may know the truth of all things",
    "Ether 12:27 - And if men come unto me I will show unto them their weakness. I give unto men weakness that they may be humble; and my grace is sufficient for all men that humble themselves before me; for if they humble themselves before me, and have faith in me, then will I make weak things become strong unto them.",

    "2 Nephi 25:26 - And we talk of Christ, we rejoice in Christ, we preach of Christ, we prophesy of Christ, and we write according to our prophecies, that our children may know to what source they may look for a remission of their sins.",
    
    "Alma 7:11-12 - And he shall go forth, suffering pains and afflictions and temptations of every kind; and this that the word might be fulfilled which saith he will take upon him the pains and the sicknesses of his people. And he will take upon him death, that he may loose the bands of death which bind his people; and he will take upon him their infirmities, that his bowels may be filled with mercy, according to the flesh, that he may know according to the flesh how to succor his people according to their infirmities.",
    
    "2 Nephi 2:25 - Adam fell that men might be, and men are that they might have joy.",
    
    "Alma 37:35 - O, remember, my son, and learn wisdom in thy youth; yea, learn in thy youth to keep the commandments of God.",
    
    "Helaman 5:12 - And now, my sons, remember, remember that it is upon the rock of our Redeemer, who is Christ, the Son of God, that ye must build your foundation, that when the devil shall send forth his mighty winds, yea, his shafts in the whirlwind, yea, when all his hail and his mighty storm shall beat upon you, it shall have no power over you to drag you down to the gulf of misery and endless wo, because of the rock upon which ye are built, which is a sure foundation, a foundation whereon if men build they cannot fall.",
    
    "2 Nephi 28:30 - For behold, thus saith the Lord God: I will give unto the children of men line upon line, precept upon precept, here a little and there a little; and blessed are those who hearken unto my precepts, and lend an ear unto my counsel, for they shall learn wisdom; for unto him that receiveth I will give more; and from them that shall say, We have enough, from them shall be taken away even that which they have.",
    
    "Alma 34:32 For behold, this life is the time for men to prepare to meet God; yea, behold the day of this life is the day for men to perform their labors.",
    



    
];

function getRandomVerse() {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
}

// Assume user's question is stored in a variable named 'userQuestion'

if (userQuestion.includes("verse")) {
    const verse = getRandomVerse();
    // Display the verse as the bot's response
    console.log(verse);
} else {
    // Your other chat bot logic here
    // ...
}
