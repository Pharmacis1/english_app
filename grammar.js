/* Complete CEFR A0 -> A1 Grammar Curriculum Distributed Across 10 Heroes */

const GRAMMAR_TOPICS = [
    {
        id: "valerius-grammar",
        heroId: "valerius",
        title: "🛡️ Valerius: Verb 'to be' & Pronouns (A0)",
        level: "A0 Absolute Basics",
        theory: `
            <h3>🛡️ Valerius's Module: Глагол 'to be' и Местоимения</h3>
            <p>Глагол <strong>to be</strong> означает «быть, являться, находиться»:</p>
            <ul>
                <li><code>I am Valerius.</code> (Я — Валерус)</li>
                <li><code>You are a hero.</code> (Ты — герой)</li>
                <li><code>He / She / It is brave.</code> (Он/Она/Оно — храброе)</li>
                <li><code>We / They are ready.</code> (Мы/Они — готовы)</li>
            </ul>
            <br>
            <p><strong>Притяжательные местоимения:</strong> <em>my</em> (мой), <em>your</em> (твой), <em>his</em> (его), <em>her</em> (её), <em>our</em> (наш), <em>their</em> (их).</p>
        `,
        questions: [
            {
                text: "Fill in the blank: 'I _____ Valerius, the paladin.'",
                options: ["am", "is", "are", "be"],
                correct: 0,
                explanation: "Для местоимения 'I' используется форма 'am'."
            },
            {
                text: "Choose the correct pronoun: 'This is _____ shield.' (мой)",
                options: ["my", "I", "me", "mine"],
                correct: 0,
                explanation: "'My' означает 'мой' перед существительным ('my shield')."
            },
            {
                text: "Select: 'They _____ brave warriors.'",
                options: ["are", "is", "am", "be"],
                correct: 0,
                explanation: "С местоимением 'They' используется 'are'."
            }
        ]
    },
    {
        id: "astraea-grammar",
        heroId: "astraea",
        title: "💖 Astraea: Verbs 'have', 'want', 'like' (A0)",
        level: "A0 Essential Verbs & Infinitives",
        theory: `
            <h3>💖 Astraea's Module: Глаголы Have, Want, Like + Инфинитив</h3>
            <p>Основные глаголы состояния и желаний:</p>
            <ul>
                <li><code>I have a potion.</code> (У меня есть зелье)</li>
                <li><code>I want to learn English.</code> (Я хочу учить английский — глагол <em>want</em> требует частицу <em>to</em> перед другим глаголом)</li>
                <li><code>She likes music.</code> (Ей нравится музыка)</li>
            </ul>
        `,
        questions: [
            {
                text: "Complete: 'I want _____ learn English.'",
                options: ["to", "for", "in", "at"],
                correct: 0,
                explanation: "После глагола 'want' перед следующим глаголом ставится 'to'."
            },
            {
                text: "Choose the correct form: 'He _____ a new book.'",
                options: ["has", "have", "having", "is have"],
                correct: 0,
                explanation: "Для 'He/She/It' используется форма 'has'."
            }
        ]
    },
    {
        id: "ignis-grammar",
        heroId: "ignis",
        title: "🪄 Ignis: Demonstratives & Articles (A0)",
        level: "A0 Demonstratives & Articles",
        theory: `
            <h3>🪄 Ignis's Module: Указатели This/That/These/Those и Артикули A/An/The</h3>
            <p><strong>This</strong> (это близко, 1 предмет) / <strong>That</strong> (то далеко, 1 предмет):</p>
            <p><strong>These</strong> (эти близко, много) / <strong>Those</strong> (те далеко, много):</p>
            <ul>
                <li><code>This is a book.</code> (Это книга рядом)</li>
                <li><code>Those are stars.</code> (Те звёзды далеко)</li>
            </ul>
            <p><strong>Артикль A/An:</strong> <em>a computer</em> (согласная), <em>an apple</em> (гласная).</p>
        `,
        questions: [
            {
                text: "Select article: 'Ignis has _____ magic spell.'",
                options: ["a", "an", "the", "two"],
                correct: 0,
                explanation: "Слово 'magic' начинается с согласной [m], поэтому 'a magic spell'."
            },
            {
                text: "Fill in: 'Look at _____ stars far away in the sky!'",
                options: ["those", "this", "these", "that"],
                correct: 0,
                explanation: "'Those' используется для предметов во множественном числе далеко."
            }
        ]
    },
    {
        id: "frostina-grammar",
        heroId: "frostina",
        title: "❄️ Frostina: Present Simple Tense (A0)",
        level: "A0 Present Simple & Routines",
        theory: `
            <h3>❄️ Frostina's Module: Present Simple (Настоящее обычное)</h3>
            <p>Используется для повторяющихся действий, привычек и фактов:</p>
            <ul>
                <li><code>I study English every day.</code></li>
                <li><code>She studies English every day.</code> (В 3 лице ед. ч. <em>he/she/it</em> добавляется <strong>-s / -es</strong>)</li>
                <li><code>Do you study? -> Yes, I do. / No, I don't.</code></li>
            </ul>
            <p><strong>Наречия частоты:</strong> <em>always</em> (всегда), <em>usually</em> (обычно), <em>often</em> (часто), <em>never</em> (никогда).</p>
        `,
        questions: [
            {
                text: "Complete: 'She _____ code every evening.'",
                options: ["writes", "write", "writing", "is write"],
                correct: 0,
                explanation: "Для местоимения 'She' добавляется окончание -s ('writes')."
            },
            {
                text: "Negative form: 'I _____ like cold weather.'",
                options: ["don't", "doesn't", "not", "am not"],
                correct: 0,
                explanation: "Для 'I/You/We/They' отрицание строится через 'don't'."
            }
        ]
    },
    {
        id: "zephyr-grammar",
        heroId: "zephyr",
        title: "🏹 Zephyr: Wh- Questions & Prepositions (A0)",
        level: "A0 Question Words & Prepositions",
        theory: `
            <h3>🏹 Zephyr's Module: Вопросительные слова и Предлоги места</h3>
            <p><strong>Вопросительные слова:</strong> <em>Where</em> (где/куда), <em>When</em> (когда), <em>Who</em> (кто), <em>Why</em> (почему), <em>How</em> (как).</p>
            <p><strong>Предлоги места:</strong> <em>in</em> (внутри), <em>on</em> (на поверхности), <em>at</em> (в точке), <em>under</em> (под).</p>
            <ul>
                <li><code>Where is the book? -> It is on the table.</code></li>
                <li><code>When do you study? -> In the morning.</code></li>
            </ul>
        `,
        questions: [
            {
                text: "Choose question word: '_____ is Valerius?' -> 'He is in the forest.'",
                options: ["Where", "When", "Why", "What"],
                correct: 0,
                explanation: "'Where' спрашивает о местоположении ('Где')."
            },
            {
                text: "Select preposition: 'The key is _____ the table.'",
                options: ["on", "in", "underneath", "at"],
                correct: 0,
                explanation: "Предлог 'on' означает 'на поверхности'."
            }
        ]
    },
    {
        id: "thorin-grammar",
        heroId: "thorin",
        title: "🔨 Thorin: Adjectives & Plural Nouns (A0/A1)",
        level: "A0/A1 Adjectives & Plurals",
        theory: `
            <h3>🔨 Thorin's Module: Прилагательные и Множественное число</h3>
            <p><strong>Прилагательные</strong> ставятся ПЕРЕД существительным: <code>a heavy hammer</code>, <code>a strong hero</code>.</p>
            <p><strong>Множественное число:</strong> добавляется <strong>-s / -es</strong> (<em>box -> boxes</em>), исключения: <em>man -> men, woman -> women, child -> children</em>.</p>
        `,
        questions: [
            {
                text: "Select correct order: 'Thorin carries _____.'",
                options: ["a heavy hammer", "a hammer heavy", "heavy a hammer", "hammer heavy"],
                correct: 0,
                explanation: "Прилагательное ставятся перед существительным ('a heavy hammer')."
            },
            {
                text: "Plural exception: 'Three _____ are in the squad.' (мужчина)",
                options: ["men", "mans", "manes", "man"],
                correct: 0,
                explanation: "Исключение множественного числа: 'man' -> 'men'."
            }
        ]
    },
    {
        id: "selene-grammar",
        heroId: "selene",
        title: "🥷 Selene: Modal Verbs 'Can' & 'Cannot' (A1)",
        level: "A1 Ability & Permission",
        theory: `
            <h3>🥷 Selene's Module: Модальный глагол Can / Cannot (Умения)</h3>
            <p>Выражает физическую способность или умение:</p>
            <ul>
                <li><code>I can move in the shadows.</code> (Я могу двигаться в тенях)</li>
                <li><code>He cannot (can't) speak French.</code> (Он не умеет говорить по-французски)</li>
                <li><code>Can you speak English? -> Yes, I can. / No, I can't.</code></li>
            </ul>
        `,
        questions: [
            {
                text: "Complete: 'Can you swim?' -> 'Yes, I _____.'",
                options: ["can", "do", "am", "have"],
                correct: 0,
                explanation: "На вопрос с 'Can' отвечают: 'Yes, I can.'"
            }
        ]
    },
    {
        id: "oberon-grammar",
        heroId: "oberon",
        title: "🍃 Oberon: Present Continuous Tense (A1)",
        level: "A1 Present Continuous (Actions Now)",
        theory: `
            <h3>🍃 Oberon's Module: Present Continuous (Действия прямо сейчас)</h3>
            <p>Формула: <strong>am / is / are + V-ing</strong></p>
            <ul>
                <li><code>I am learning English right now.</code> (Я учу английский прямо сейчас)</li>
                <li><code>Listen! The birds are singing.</code> (Слушай! Птицы поют)</li>
            </ul>
        `,
        questions: [
            {
                text: "Complete: 'Look! Oberon _____ a spell right now.'",
                options: ["is casting", "casts", "cast", "was cast"],
                correct: 0,
                explanation: "Для действия прямо сейчас используется 'is casting'."
            }
        ]
    },
    {
        id: "freya-grammar",
        heroId: "freya",
        title: "🛡️ Freya: Past Simple Tense (A1)",
        level: "A1 Past Simple (Past Events)",
        theory: `
            <h3>🛡️ Freya's Module: Past Simple (Прошедшее простое)</h3>
            <p>Действия в прошлом: <strong>was / were</strong> или <strong>V-ed</strong> (неправильные глаголы: <em>go -> went, see -> saw</em>):</p>
            <ul>
                <li><code>Yesterday was a victory.</code> (Вчера была победа)</li>
                <li><code>We defeated the goblin boss.</code> (Мы победили босса гоблинов)</li>
            </ul>
        `,
        questions: [
            {
                text: "Past tense of 'go': 'Yesterday we _____ to the ruins.'",
                options: ["went", "go", "goed", "was go"],
                correct: 0,
                explanation: "Неправильный глагол 'go' в прошедшем времени имеет форму 'went'."
            }
        ]
    },
    {
        id: "eldrin-grammar",
        heroId: "eldrin",
        title: "🧙‍♂️ Eldrin: Future 'going to' & Full A1 Synthesis (A1)",
        level: "A1 Future Intentions & Graduation",
        theory: `
            <h3>🧙‍♂️ Eldrin's Module: Будущее время 'be going to' и Финал A1</h3>
            <p>Выражает намерения и планы на будущее: <strong>am / is / are + going to + verb</strong></p>
            <ul>
                <li><code>I am going to achieve Level A1.</code> (Я собираюсь достичь уровня A1)</li>
                <li><code>We are going to win the campaign!</code> (Мы выиграем кампанию!)</li>
            </ul>
        `,
        questions: [
            {
                text: "Complete intention: 'I _____ study English tomorrow.'",
                options: ["am going to", "going to", "will going", "am go to"],
                correct: 0,
                explanation: "Конструкция намерения: 'am going to study'."
            }
        ]
    }
];
