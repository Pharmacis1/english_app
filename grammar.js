/* Complete CEFR A0 -> A1 Grammar Curriculum Distributed Across 10 Heroes (10 Questions Per Topic = 100 Total Grammar Questions + SM-2 SRS Engine) */

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
                <li><code>I am Valerius.</code> (Я — Валериус)</li>
                <li><code>You are a hero.</code> (Ты — герой)</li>
                <li><code>He / She / It is brave.</code> (Он/Она/Оно — храброе)</li>
                <li><code>We / They are ready.</code> (Мы/Они — готовы)</li>
            </ul>
            <br>
            <p><strong>Притяжательные местоимения:</strong> <em>my</em> (мой), <em>your</em> (твой), <em>his</em> (его), <em>her</em> (её), <em>our</em> (наш), <em>their</em> (их).</p>
        `,
        questions: [
            { id: "v1", text: "Fill in the blank: 'I _____ Valerius, the paladin.'", options: ["am", "is", "are", "be"], correct: 0, explanation: "Для местоимения 'I' используется форма 'am'." },
            { id: "v2", text: "Choose correct pronoun: 'This is _____ shield.' (мой)", options: ["my", "I", "me", "mine"], correct: 0, explanation: "'My' означает 'мой' перед существительным." },
            { id: "v3", text: "Select verb form: 'They _____ brave warriors.'", options: ["are", "is", "am", "be"], correct: 0, explanation: "С местоимением 'They' используется 'are'." },
            { id: "v4", text: "Fill in: 'He _____ a paladin of light.'", options: ["is", "am", "are", "be"], correct: 0, explanation: "Для местоимений 'He/She/It' используется 'is'." },
            { id: "v5", text: "Choose pronoun: 'Is this _____ book?' (твой)", options: ["your", "you", "yours", "you're"], correct: 0, explanation: "'Your' означает 'твой/ваш'." },
            { id: "v6", text: "Select: 'We _____ ready for the trial.'", options: ["are", "am", "is", "be"], correct: 0, explanation: "С местоимением 'We' используется 'are'." },
            { id: "v7", text: "Choose pronoun: 'Astraea is here. This is _____ wand.' (её)", options: ["her", "she", "hers", "his"], correct: 0, explanation: "'Her' означает 'её'." },
            { id: "v8", text: "Fill in: 'It _____ a sunny day in Silver Outpost.'", options: ["is", "am", "are", "be"], correct: 0, explanation: "С местоимением 'It' используется 'is'." },
            { id: "v9", text: "Select: 'You _____ my best friend.'", options: ["are", "am", "is", "be"], correct: 0, explanation: "С местоимением 'You' всегда используется 'are'." },
            { id: "v10", text: "Choose pronoun: 'Ignis and Thorin are here. _____ staff is hot.' (их)", options: ["Their", "They", "Them", "Theirs"], correct: 0, explanation: "'Their' означает 'их'." }
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
                <li><code>I want to learn English.</code> (Я хочу учить английский — <em>want + to + verb</em>)</li>
                <li><code>She likes music.</code> (Ей нравится музыка)</li>
            </ul>
        `,
        questions: [
            { id: "a1", text: "Complete: 'I want _____ learn English.'", options: ["to", "for", "in", "at"], correct: 0, explanation: "После 'want' перед следующим глаголом ставится 'to'." },
            { id: "a2", text: "Choose form: 'He _____ a new book.'", options: ["has", "have", "having", "is have"], correct: 0, explanation: "Для 'He/She/It' используется 'has'." },
            { id: "a3", text: "Complete: 'She likes _____ healthy food.'", options: ["to eat", "eat", "eating to", "eats to"], correct: 0, explanation: "После 'like' используется 'to eat'." },
            { id: "a4", text: "Select: 'We _____ a big house.'", options: ["have", "has", "having", "are have"], correct: 0, explanation: "С местоимением 'We' используется 'have'." },
            { id: "a5", text: "Complete: 'Do you want _____ help me?'", options: ["to", "for", "with", "at"], correct: 0, explanation: "Конструкция 'want to help'." },
            { id: "a6", text: "Choose: 'I _____ to rest after work.'", options: ["need", "needing", "needs", "is need"], correct: 0, explanation: "С местоимением 'I' глагол 'need'." },
            { id: "a7", text: "Complete: 'Astraea _____ a magic wand.'", options: ["has", "have", "haves", "is has"], correct: 0, explanation: "Astraea = She -> 'has'." },
            { id: "a8", text: "Select: 'They _____ to play games in the evening.'", options: ["like", "likes", "liking", "are like"], correct: 0, explanation: "Для 'They' используем 'like'." },
            { id: "a9", text: "Fill in: 'Do you _____ water?'", options: ["need", "needs", "needing", "to need"], correct: 0, explanation: "Вопрос с 'Do' требует начальную форму 'need'." },
            { id: "a10", text: "Complete: 'I _____ a goal to speak English fluently.'", options: ["have", "has", "am have", "having"], correct: 0, explanation: "'I have a goal'." }
        ]
    },
    {
        id: "ignis-grammar",
        heroId: "ignis",
        title: "🪄 Ignis: Demonstratives & Articles (A0)",
        level: "A0 Demonstratives & Articles",
        theory: `
            <h3>🪄 Ignis's Module: Указатели This/That/These/Those и Артикули A/An/The</h3>
            <p><strong>This</strong> (это близко, 1) / <strong>That</strong> (то далеко, 1):</p>
            <p><strong>These</strong> (эти близко, много) / <strong>Those</strong> (те далеко, много):</p>
            <ul>
                <li><code>This is a book.</code> (Это книга рядом)</li>
                <li><code>Those are stars.</code> (Те звёзды далеко)</li>
            </ul>
            <p><strong>Артикль A/An:</strong> <em>a computer</em> (согласная), <em>an apple</em> (гласная).</p>
        `,
        questions: [
            { id: "i1", text: "Select article: 'Ignis has _____ magic spell.'", options: ["a", "an", "the", "two"], correct: 0, explanation: "Слово 'magic' начинается с согласной -> 'a'." },
            { id: "i2", text: "Fill in: 'Look at _____ stars far away in the sky!'", options: ["those", "this", "these", "that"], correct: 0, explanation: "'Those' — во множественном числе далеко." },
            { id: "i3", text: "Choose article: 'I eat _____ apple every morning.'", options: ["an", "a", "the", "some"], correct: 0, explanation: "Слово 'apple' начинается с гласной -> 'an'." },
            { id: "i4", text: "Fill in: '_____ is my new book right here in my hand.'", options: ["This", "That", "Those", "These"], correct: 0, explanation: "'This' — один предмет рядом." },
            { id: "i5", text: "Select: 'Look at _____ mountain far over there!'", options: ["that", "this", "these", "those"], correct: 0, explanation: "'That' — один предмет далеко." },
            { id: "i6", text: "Choose article: 'He is _____ honest paladin.'", options: ["an", "a", "the", "no"], correct: 0, explanation: "Слово 'honest' произносится с гласного звука [ɒ] -> 'an'." },
            { id: "i7", text: "Fill in: '_____ are my friends sitting next to me.'", options: ["These", "This", "That", "Those"], correct: 0, explanation: "'These' — несколько предметов/людей рядом." },
            { id: "i8", text: "Select article: 'She wears _____ red coat.'", options: ["a", "an", "the", "some"], correct: 0, explanation: "Согласный звук [r] -> 'a red coat'." },
            { id: "i9", text: "Choose demonstrative: 'Are _____ your boots over by the door?'", options: ["those", "this", "that", "these"], correct: 0, explanation: "Обувь далеко от говорящего -> 'those'." },
            { id: "i10", text: "Select article: 'We live in _____ old city.'", options: ["an", "a", "the", "any"], correct: 0, explanation: "Гласный звук [əʊ] в 'old' -> 'an old city'." }
        ]
    },
    {
        id: "frostina-grammar",
        heroId: "frostina",
        title: "❄️ Frostina: Present Simple Tense (A0)",
        level: "A0 Present Simple & Routines",
        theory: `
            <h3>❄️ Frostina's Module: Present Simple (Настоящее обычное)</h3>
            <p>Используется для повторяющихся действий и привычек:</p>
            <ul>
                <li><code>I study English every day.</code></li>
                <li><code>She studies English every day.</code> (В 3 лице ед. ч. <em>he/she/it</em> добавляется <strong>-s / -es</strong>)</li>
                <li><code>Do you study? -> Yes, I do. / No, I don't.</code></li>
            </ul>
        `,
        questions: [
            { id: "f1", text: "Complete: 'She _____ English every evening.'", options: ["studies", "study", "studying", "is study"], correct: 0, explanation: "Для 'She' добавляется окончание -es ('studies')." },
            { id: "f2", text: "Negative form: 'I _____ like cold weather.'", options: ["don't", "doesn't", "not", "am not"], correct: 0, explanation: "Для 'I/You/We/They' отрицание строится через 'don't'." },
            { id: "f3", text: "Fill in adverb: 'I _____ wake up early on Mondays.'", options: ["always", "alwayses", "is always", "alwaysing"], correct: 0, explanation: "Наречие частоты 'always' ставится перед глаголом." },
            { id: "f4", text: "Question form: '_____ you live in this town?'", options: ["Do", "Does", "Are", "Is"], correct: 0, explanation: "Вопрос для 'you' в Present Simple строится с 'Do'." },
            { id: "f5", text: "Question form: '_____ Frostina live in an ice cavern?'", options: ["Does", "Do", "Is", "Are"], correct: 0, explanation: "Для 3-го лица ед.ч. ('Frostina' = She) вопрос с 'Does'." },
            { id: "f6", text: "Complete: 'He _____ to work by train.'", options: ["goes", "go", "going", "is go"], correct: 0, explanation: "Для 'He' глагол 'go' меняется на 'goes'." },
            { id: "f7", text: "Negative: 'He _____ eat meat.'", options: ["doesn't", "don't", "not", "isn't"], correct: 0, explanation: "Отрицание для 'He' -> 'doesn't'." },
            { id: "f8", text: "Select: 'They usually _____ lunch at 1 PM.'", options: ["have", "has", "having", "haves"], correct: 0, explanation: "Для 'They' исходная форма глагола 'have'." },
            { id: "f9", text: "Complete: 'It _____ in winter.'", options: ["snows", "snow", "snowing", "is snow"], correct: 0, explanation: "Для 'It' добавляется -s -> 'snows'." },
            { id: "f10", text: "Adverb position: 'We _____ study English.'", options: ["usually", "usual", "usuallying", "is usually"], correct: 0, explanation: "'Usually' перед основным глаголом." }
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
            <p><strong>Предлоги места:</strong> <em>in</em> (внутри), <em>on</em> (на поверхности), <em>at</em> (в точке), <em>under</em> (под), <em>behind</em> (за).</p>
        `,
        questions: [
            { id: "z1", text: "Choose question word: '_____ is Valerius?' -> 'He is in the forest.'", options: ["Where", "When", "Why", "What"], correct: 0, explanation: "'Where' спрашивает о местоположении." },
            { id: "z2", text: "Select preposition: 'The key is _____ the table.'", options: ["on", "in", "underneath", "at"], correct: 0, explanation: "'On' — на поверхности." },
            { id: "z3", text: "Question word: '_____ do you wake up?' -> 'At 7 AM.'", options: ["When", "Where", "Who", "Why"], correct: 0, explanation: "'When' спрашивает о времени." },
            { id: "z4", text: "Preposition: 'We are sitting _____ the room.'", options: ["in", "on", "at", "top"], correct: 0, explanation: "'In the room' — внутри помещения." },
            { id: "z5", text: "Question word: '_____ is that woman?' -> 'She is Astraea.'", options: ["Who", "What", "Where", "When"], correct: 0, explanation: "'Who' спрашивает о человеке ('Кто')." },
            { id: "z6", text: "Preposition: 'The cat is sleeping _____ the bed.'", options: ["under", "in", "at", "on top"], correct: 0, explanation: "'Under the bed' — под кроватью." },
            { id: "z7", text: "Question word: '_____ are you learning English?' -> 'To travel.'", options: ["Why", "Where", "When", "Who"], correct: 0, explanation: "'Why' спрашивает о причине ('Почему')." },
            { id: "z8", text: "Preposition: 'Meet me _____ the bus station.'", options: ["at", "on", "in", "inside of"], correct: 0, explanation: "'At the station' — в конкретной точке." },
            { id: "z9", text: "Preposition: 'The dragon is hidden _____ the wall.'", options: ["behind", "on", "in", "to"], correct: 0, explanation: "'Behind' — сзади / за стеной." },
            { id: "z10", text: "Question word: '_____ are you today?' -> 'I am fine!'", options: ["How", "What", "Where", "Why"], correct: 0, explanation: "'How are you?' — Как ты?" }
        ]
    },
    {
        id: "thorin-grammar",
        heroId: "thorin",
        title: "🔨 Thorin: Adjectives & Plural Nouns (A0/A1)",
        level: "A0/A1 Adjectives & Plurals",
        theory: `
            <h3>🔨 Thorin's Module: Прилагательные и Множественное число</h3>
            <p><strong>Прилагательные</strong> ставятся ПЕРЕД существительным: <code>a heavy hammer</code>.</p>
            <p><strong>Множественное число:</strong> добавляется <strong>-s / -es</strong>, исключения: <em>man -> men, woman -> women, child -> children</em>.</p>
        `,
        questions: [
            { id: "t1", text: "Select correct order: 'Thorin carries _____.'", options: ["a heavy hammer", "a hammer heavy", "heavy a hammer", "hammer heavy"], correct: 0, explanation: "Прилагательное перед существительным." },
            { id: "t2", text: "Plural exception: 'Three _____ are in the squad.' (мужчина)", options: ["men", "mans", "manes", "man"], correct: 0, explanation: "Исключение: 'man' -> 'men'." },
            { id: "t3", text: "Plural form: 'There are two _____ on the table.' (книга)", options: ["books", "bookes", "book", "bookies"], correct: 0, explanation: "Множественное число: 'book' -> 'books'." },
            { id: "t4", text: "Plural exception: 'The _____ are playing in the park.' (ребёнок)", options: ["children", "childs", "childrens", "childes"], correct: 0, explanation: "Исключение: 'child' -> 'children'." },
            { id: "t5", text: "Adjective order: 'Ignis has a _____ wand.' (магическая красная)", options: ["red magic", "magic red", "red a magic", "a magic red"], correct: 0, explanation: "Цвет ставится перед типом предмета -> 'red magic wand'." },
            { id: "t6", text: "Plural ending -es: 'He opened three _____.' (коробка)", options: ["boxes", "boxs", "boxies", "box"], correct: 0, explanation: "После -x добавляется -es -> 'boxes'." },
            { id: "t7", text: "Plural exception: 'Two _____ entered the forge.' (женщина)", options: ["women", "womans", "womens", "womanes"], correct: 0, explanation: "Исключение: 'woman' -> 'women'." },
            { id: "t8", text: "Select correct order: 'This is a _____ city.' (большой старый)", options: ["big old", "old big", "a big old", "city big old"], correct: 0, explanation: "Размер перед возрастом -> 'big old city'." },
            { id: "t9", text: "Plural form: 'Thorin crafted five _____.' (топор)", options: ["axes", "axs", "axies", "ax"], correct: 0, explanation: "Множественное число: 'axe' -> 'axes'." },
            { id: "t10", text: "Adjective check: 'A _____ warrior stands guard.' (храбрый сильный)", options: ["brave strong", "strong brave", "brave a strong", "warrior brave"], correct: 0, explanation: "Прилагательные ставим перед воином." }
        ]
    },
    {
        id: "selene-grammar",
        heroId: "selene",
        title: "🥷 Selene: Modal Verbs 'Can' & 'Cannot' (A1)",
        level: "A1 Ability & Permission",
        theory: `
            <h3>🥷 Selene's Module: Модальный глагол Can / Cannot (Умения)</h3>
            <p>Выражает способность или умение:</p>
            <ul>
                <li><code>I can move in the shadows.</code></li>
                <li><code>He cannot (can't) speak French.</code></li>
                <li><code>Can you speak English? -> Yes, I can. / No, I can't.</code></li>
            </ul>
        `,
        questions: [
            { id: "s1", text: "Complete: 'Can you swim?' -> 'Yes, I _____.'", options: ["can", "do", "am", "have"], correct: 0, explanation: "Краткий ответ на 'Can' -> 'Yes, I can.'" },
            { id: "s2", text: "Fill in: 'Selene _____ move without a sound.'", options: ["can", "cans", "is can", "can to"], correct: 0, explanation: "После модального 'can' идет начальный глагол без 'to'." },
            { id: "s3", text: "Negative form: 'I _____ speak French fluently yet.'", options: ["cannot", "not can", "don't can", "am not can"], correct: 0, explanation: "Отрицание: 'cannot' или 'can't'." },
            { id: "s4", text: "Question form: '_____ you play the guitar?'", options: ["Can", "Do", "Are", "Is"], correct: 0, explanation: "Вопрос о навыке: 'Can you play...?'" },
            { id: "s5", text: "Select verb form: 'She can _____ fast.'", options: ["run", "runs", "running", "to run"], correct: 0, explanation: "После 'can' всегда смысловой глагол в инфинитиве без 'to'." },
            { id: "s6", text: "Complete answer: 'Can he climb trees?' -> 'No, he _____.'", options: ["can't", "don't", "isn't", "hasn't"], correct: 0, explanation: "Отрицательный ответ: 'No, he can't.'" },
            { id: "s7", text: "Fill in: 'Birds _____ fly in the sky.'", options: ["can", "are", "do", "have"], correct: 0, explanation: "'Can fly' — умеют летать." },
            { id: "s8", text: "Choose: 'We _____ start the mission now.'", options: ["can", "cans", "are can", "can to"], correct: 0, explanation: "'We can start'." },
            { id: "s9", text: "Select: 'He cannot _____ this heavy hammer.'", options: ["lift", "lifts", "lifting", "to lift"], correct: 0, explanation: "Глагол без окончания после 'cannot'." },
            { id: "s10", text: "Complete: 'Can they speak English?' -> 'Yes, they _____.'", options: ["can", "do", "are", "have"], correct: 0, explanation: "'Yes, they can.'" }
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
                <li><code>I am learning English right now.</code></li>
                <li><code>Listen! The birds are singing.</code></li>
            </ul>
        `,
        questions: [
            { id: "o1", text: "Complete: 'Look! Oberon _____ a spell right now.'", options: ["is casting", "casts", "cast", "was cast"], correct: 0, explanation: "Действие прямо сейчас -> 'is casting'." },
            { id: "o2", text: "Fill in: 'I _____ learning English at this moment.'", options: ["am", "is", "are", "be"], correct: 0, explanation: "Для 'I' вспомогательный глагол 'am'." },
            { id: "o3", text: "Select: 'Listen! The birds _____ in the trees.'", options: ["are singing", "is singing", "sing", "sings"], correct: 0, explanation: "Птицы (мн. ч.) поют прямо сейчас -> 'are singing'." },
            { id: "o4", text: "Complete: 'She _____ in the forest right now.'", options: ["is walking", "walks", "walked", "walking"], correct: 0, explanation: "'She is walking'." },
            { id: "o5", text: "Fill in: 'We _____ a new grammar topic now.'", options: ["are studying", "study", "studies", "is studying"], correct: 0, explanation: "'We are studying'." },
            { id: "o6", text: "Select verb spelling: 'He is _____ in the river.' (бежать)", options: ["running", "runing", "runs", "runned"], correct: 0, explanation: "Удваивается согласная -> 'running'." },
            { id: "o7", text: "Complete: 'They _____ to Oberon right now.'", options: ["are listening", "is listening", "listens", "listen"], correct: 0, explanation: "'They are listening'." },
            { id: "o8", text: "Question form: '_____ you reading a book right now?'", options: ["Are", "Do", "Is", "Am"], correct: 0, explanation: "Вопрос в Present Continuous: 'Are you reading...?'" },
            { id: "o9", text: "Negative: 'He _____ sleeping at this moment.'", options: ["is not", "does not", "not", "am not"], correct: 0, explanation: "'He is not sleeping'." },
            { id: "o10", text: "Complete: 'Sun is _____ brightly today.'", options: ["shining", "shines", "shine", "shined"], correct: 0, explanation: "'is shining'." }
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
                <li><code>Yesterday was a victory.</code></li>
                <li><code>We defeated the goblin boss.</code></li>
            </ul>
        `,
        questions: [
            { id: "fr1", text: "Past tense of 'go': 'Yesterday we _____ to the ruins.'", options: ["went", "go", "goed", "was go"], correct: 0, explanation: "Неправильный глагол 'go' -> 'went'." },
            { id: "fr2", text: "Past of 'be': 'Yesterday _____ a sunny day.'", options: ["was", "were", "is", "been"], correct: 0, explanation: "Для единственного числа в прошлом -> 'was'." },
            { id: "fr3", text: "Regular verb: 'We _____ the dragon yesterday.' (победили)", options: ["defeated", "defeat", "defeating", "defeats"], correct: 0, explanation: "Регулярный глагол с окончанием -ed -> 'defeated'." },
            { id: "fr4", text: "Past of 'be': 'They _____ at home last night.'", options: ["were", "was", "are", "been"], correct: 0, explanation: "Для 'They' в прошлом -> 'were'." },
            { id: "fr5", text: "Past of 'see': 'I _____ Freya at the castle yesterday.'", options: ["saw", "see", "seed", "seen"], correct: 0, explanation: "Неправильный глагол 'see' -> 'saw'." },
            { id: "fr6", text: "Past of 'buy': 'He _____ a new shield last week.'", options: ["bought", "buyed", "buys", "buying"], correct: 0, explanation: "Неправильный глагол 'buy' -> 'bought'." },
            { id: "fr7", text: "Regular verb: 'She _____ English for two hours yesterday.'", options: ["studied", "study", "studyed", "studies"], correct: 0, explanation: "'study' -> 'studied'." },
            { id: "fr8", text: "Negative in past: 'I _____ see the boss yesterday.'", options: ["didn't", "don't", "wasn't", "not"], correct: 0, explanation: "Отрицание в Past Simple -> 'didn't' + начальная форма." },
            { id: "fr9", text: "Past of 'take': 'We _____ a train to the capital.'", options: ["took", "taked", "takes", "taking"], correct: 0, explanation: "Неправильный глагол 'take' -> 'took'." },
            { id: "fr10", text: "Question in past: '_____ you visit the Valkyrie hall yesterday?'", options: ["Did", "Do", "Were", "Was"], correct: 0, explanation: "Вопрос в Past Simple начинается с 'Did'." }
        ]
    },
    {
        id: "eldrin-grammar",
        heroId: "eldrin",
        title: "🧙‍♂️ Eldrin: Future 'going to' & Full A1 Synthesis (A1)",
        level: "A1 Future Intentions & Graduation",
        theory: `
            <h3>🧙‍♂️ Eldrin's Module: Будущее время 'be going to' и Финал A1</h3>
            <p>Выражает планы и намерения: <strong>am / is / are + going to + verb</strong></p>
            <ul>
                <li><code>I am going to achieve Level A1.</code></li>
                <li><code>We are going to win the campaign!</code></li>
            </ul>
        `,
        questions: [
            { id: "e1", text: "Complete intention: 'I _____ study English tomorrow.'", options: ["am going to", "going to", "will going", "am go to"], correct: 0, explanation: "Конструкция намерения: 'am going to'." },
            { id: "e2", text: "Intention form: 'She _____ buy a new book next week.'", options: ["is going to", "are going to", "going to", "is go to"], correct: 0, explanation: "Для 'She' -> 'is going to'." },
            { id: "e3", text: "Select: 'They _____ travel to London next summer.'", options: ["are going to", "is going to", "am going to", "going to"], correct: 0, explanation: "Для 'They' -> 'are going to'." },
            { id: "e4", text: "Complete: 'Are you _____ pass the A1 exam?'", options: ["going to", "go to", "will to", "going"], correct: 0, explanation: "'Are you going to pass...?'" },
            { id: "e5", text: "Negative intention: 'I _____ give up on my English goals.'", options: ["am not going to", "not going to", "don't going to", "isn't going to"], correct: 0, explanation: "'am not going to'." },
            { id: "e6", text: "Synthesis test: 'Where _____ you yesterday?'", options: ["were", "was", "are", "did"], correct: 0, explanation: "Прошедшее время для 'you' -> 'were'." },
            { id: "e7", text: "Synthesis test: 'She can _____ English fluently.'", options: ["speak", "speaks", "speaking", "to speak"], correct: 0, explanation: "После 'can' инфинитив без 'to'." },
            { id: "e8", text: "Synthesis test: 'Look! Eldrin _____ the final diploma now.'", options: ["is signing", "signs", "signed", "was sign"], correct: 0, explanation: "Прямо сейчас -> 'is signing'." },
            { id: "e9", text: "Synthesis test: 'We have 500 _____ words in our vocabulary.'", options: ["essential", "essentialing", "more essential", "the essential"], correct: 0, explanation: "Прилагательное 'essential'." },
            { id: "e10", text: "Synthesis test: 'Congratulations! You _____ completed A1 Level!'", options: ["have", "are", "do", "is"], correct: 0, explanation: "'You have completed'." }
        ]
    }
];

class GrammarSRSEngine {
    constructor() {
        this.progress = this.loadProgress();
    }

    loadProgress() {
        const saved = localStorage.getItem("grammar_srs_data_v2");
        if (saved) {
            try { return JSON.parse(saved); } catch (e) {}
        }
        return {};
    }

    saveProgress() {
        localStorage.setItem("grammar_srs_data_v2", JSON.stringify(this.progress));
    }

    getQuestionState(questionId) {
        if (!this.progress[questionId]) {
            this.progress[questionId] = {
                interval: 0,
                repetition: 0,
                easeFactor: 2.5,
                dueDate: new Date().toISOString(),
                studied: false,
                learningInSession: false
            };
        }
        return this.progress[questionId];
    }

    getAllQuestions() {
        const all = [];
        GRAMMAR_TOPICS.forEach(topic => {
            topic.questions.forEach(q => {
                const srs = this.getQuestionState(q.id);
                all.push({
                    ...q,
                    topicId: topic.id,
                    topicTitle: topic.title,
                    heroId: topic.heroId,
                    theory: topic.theory,
                    ...srs
                });
            });
        });
        return all;
    }

    getDueQuestions() {
        const now = new Date();
        return this.getAllQuestions().filter(q => {
            if (!q.studied && q.repetition === 0) return false; // Unstudied new questions are NOT due!
            const due = new Date(q.dueDate);
            return due <= now || q.learningInSession;
        });
    }

    getDueCount() {
        return this.getDueQuestions().length;
    }

    rateQuestion(questionId, rating) {
        const state = this.getQuestionState(questionId);
        state.studied = true;
        const now = new Date();

        if (rating === 'again') {
            state.repetition = 0;
            state.interval = 1;
            state.learningInSession = true;
            const nextDue = new Date(now.getTime() + 10 * 1000);
            state.dueDate = nextDue.toISOString();
        } else {
            state.learningInSession = false;
            state.repetition += 1;

            if (rating === 'hard') {
                state.interval = Math.max(1, Math.round(state.interval * 1.2));
            } else if (rating === 'good') {
                if (state.repetition === 1) state.interval = 1;
                else if (state.repetition === 2) state.interval = 6;
                else state.interval = Math.round(state.interval * state.easeFactor);
            } else if (rating === 'easy') {
                state.easeFactor = Math.min(3.0, state.easeFactor + 0.15);
                if (state.repetition === 1) state.interval = 4;
                else state.interval = Math.round(state.interval * state.easeFactor * 1.3);
            }

            const nextDue = new Date(now.getTime() + state.interval * 24 * 60 * 60 * 1000);
            state.dueDate = nextDue.toISOString();
        }

        this.saveProgress();
        return state;
    }
}
