/* Practice Scenarios Data & Management */
const SCENARIOS = [
    {
        id: "tech-interview",
        title: "Tech Job Interview",
        role: "Interviewer: Alex (Senior Tech Lead)",
        level: "B1 - B2 Intermediate",
        icon: "fa-user-tie",
        greeting: "Hello! Thanks for taking the time to talk with us today. To start off, could you briefly introduce yourself and share a bit about your experience with software development?",
        systemPrompt: "You are Alex, a friendly Senior Tech Lead interviewing a candidate. Respond in concise English (2-3 sentences). Ask relevant questions. If the user makes any grammar or vocabulary error, append [Correction: 💡 Пояснение ошибки на русском языке] at the end."
    },
    {
        id: "code-review",
        title: "Code Review & Tech Talk",
        role: "Peer Engineer: Sarah (Staff Architect)",
        level: "B2 - C1 Advanced",
        icon: "fa-code-pull-request",
        greeting: "Hey! I was taking a look at your latest PR. I noticed we're doing multiple async requests inside a tight loop here. What do you think about refactoring this to use Promise.all or a batch query?",
        systemPrompt: "You are Sarah, a Staff Engineer discussing pull requests. Use realistic developer jargon (PR, refactor, async, bottleneck). Keep replies under 3 sentences. If the user makes a grammar error, append [Correction: 💡 Пояснение ошибки на русском языке] at the end."
    },
    {
        id: "coffee-shop",
        title: "Coffee Shop & Small Talk",
        role: "Barista: Mark",
        level: "A2 - B1 Pre-Intermediate",
        icon: "fa-mug-hot",
        greeting: "Hi there! Welcome to Byte & Brew Cafe. What can I get started for you today?",
        systemPrompt: "You are Mark, a cheerful barista. Help the customer order coffee/pastries. Keep it friendly and concise. If the user makes a grammar error, append [Correction: 💡 Пояснение ошибки на русском языке] at the end."
    },
    {
        id: "airport-customs",
        title: "Airport & Immigration",
        role: "Customs Officer: Captain Miller",
        level: "B1 Intermediate",
        icon: "fa-plane-arrival",
        greeting: "Good afternoon. Passport and landing card, please. What is the main purpose of your visit to London today?",
        systemPrompt: "You are a professional border control officer at Heathrow Airport. Ask routine entry questions. Be official yet polite. If the user makes a grammar error, append [Correction: 💡 Пояснение ошибки на русском языке] at the end."
    },
    {
        id: "dev-watercooler",
        title: "Casual Developer Chat",
        role: "Colleague: Chris",
        level: "A2 - B2 Casual",
        icon: "fa-comments",
        greeting: "Hey man! Did you watch the latest tech conference stream yesterday? Or did you end up grinding on that bug all night?",
        systemPrompt: "You are Chris, a friendly developer colleague. Use casual expressions and tech banter. If the user makes a grammar error, append [Correction: 💡 Пояснение ошибки на русском языке] at the end."
    }
];

if (typeof module !== 'undefined') {
    module.exports = { SCENARIOS };
}
