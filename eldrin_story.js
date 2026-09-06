/**
 * YOUNG ELDRIN AUDIOBOOK: THE SECRETS OF THE ARCANE SPIRE
 * CEFR A1 Mystery Novel with Multi-Voice Narration & Comprehension Quizzes
 * Strictly using A1 grammar & the 1,100 words studied across the 10 heroes.
 * Cast: Young Eldrin (Puck), Kira (Aoede), Master Corvinus (Charon), Commander Vane (Fenrir), Narrator (Charon).
 */

const ELDRIN_AUDIOBOOK = {
    "title": "Young Eldrin and the Iron Below",
    "titleRu": "Юный Элдрин и Железные Глубины",
    "description": "An exciting 25-chapter mystery novel set in the vertical world of the Arcane Spire. Built strictly with CEFR A1 grammar and the 1,100 essential words studied in EnglishPulse.",
    "descriptionRu": "Увлекательный роман-тайна из 25 глав в вертикальном мире Тайного Шпиля. Построен строго на грамматике A1 и 1100 изучаемых словах.",
    "totalChapters": 25,
    "totalTargetWords": 25000,
    "acts": [
        {
            "number": 1,
            "titleEn": "Act I: The Dusty Scroll",
            "titleRu": "Акт I: Пыльный Свиток",
            "chaptersRange": [
                1,
                5
            ]
        },
        {
            "number": 2,
            "titleEn": "Act II: Steps Into The Dark",
            "titleRu": "Акт II: Шаги во Тьму",
            "chaptersRange": [
                6,
                10
            ]
        },
        {
            "number": 3,
            "titleEn": "Act III: The Poisoned History",
            "titleRu": "Акт III: Отравленная История",
            "chaptersRange": [
                11,
                15
            ]
        },
        {
            "number": 4,
            "titleEn": "Act IV: Hunted on the Stairs",
            "titleRu": "Акт IV: Погоня на Лестницах",
            "chaptersRange": [
                16,
                20
            ]
        },
        {
            "number": 5,
            "titleEn": "Act V: The Heart of the Spire",
            "titleRu": "Акт V: Сердце Шпиля",
            "chaptersRange": [
                21,
                25
            ]
        }
    ],
    "chapters": [
        {
            "id": "eldrin-ch-1",
            "number": 1,
            "act": 1,
            "titleEn": "Chapter 1: The Boy in Level 82",
            "titleRu": "Глава 1: Мальчик на 82-м Уровне",
            "grammarFocus": "Present Simple, Verb 'to be', Demonstratives (This / That), Prepositions",
            "wordCount": 1060,
            "coverIcon": "fa-book-bookmark",
            "coverColor": "#a855f7",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "High above the white clouds, the morning sun touches the cold stone towers of the Arcane Spire. The Spire is an enormous floating city made of dark grey stone and polished silver metal. Nobody knows how old the Spire is, but the teachers say it is three hundred years old. Every morning at six o'clock, the great bronze bell on Level 80 rings loudly across the halls. The deep sound echoes through every stone corridor and every small bedroom. In a small room on Level 82, a twelve-year-old boy opens his brown eyes and sits up in bed. His name is Eldrin. He is an apprentice archivist in the great library of the Spire. His bed is simple: a narrow wooden frame, a clean white sheet, and a warm wool blanket. The morning air in the room is chilly because the Spire floats very high in the sky. Eldrin stands up on the cold floor and puts on his brown leather boots. He wears a simple grey tunic, dark trousers, and a leather belt with a small bronze buckle. On the small wooden table near his bed, there is a round clay bowl of cold fresh water. He washes his face with the cool water and dries his skin with a white towel.",
                    "ru": "Высоко над белыми облаками утреннее солнце касается холодных каменных башен Тайного Шпиля. Шпиль — это огромный парящий город, построенный из темно-серого камня и полированного серебристого металла. Никто не знает, сколько лет Шпилю, но учителя говорят, что ему триста лет. Каждое утро в шесть часов большой бронзовый колокол на 80-м уровне громко звонит по всем залам. Глубокий звук разносится эхом по каждому каменному коридору и каждой маленькой спальне. В маленькой комнате на 82-м уровне двенадцатилетний мальчик открывает карие глаза и садится на кровати. Его зовут Элдрин. Он ученик-архивариус в великой библиотеке Шпиля. Его кровать проста: узкая деревянная рама, чистая белая простыня и теплое шерстяное одеяло. Утренний воздух в комнате прохладный, потому что Шпиль парит очень высоко в небе. Элдрин встает на холодный пол и надевает свои коричневые кожаные сапоги. Он носит простую серую тунику, темные штаны и кожаный пояс с маленькой бронзовой пряжкой. На маленьком деревянном столике возле кровати стоит круглая глиняная чаша с холодной свежей водой. Он умывает лицо прохладной водой и вытирает кожу белым полотенцем."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Today is a new day. I must study hard and do my work well.\"",
                    "ru": "\"Сегодня новый день. Я должен усердно учиться и хорошо выполнять свою работу.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "He walks out of his bedroom into the long corridor of the apprentice quarters. Other young apprentices are walking sleepily towards the dining hall with wooden spoons in their hands. Some boys are talking about their spell classes, and some girls are laughing near the water fountain. Eldrin walks quietly. He does not talk very much because he likes watching and listening. He enters the large dining hall on Level 81. The hall has long wooden benches and bright glass lamps. Eldrin takes a wooden tray and receives his breakfast from the kind kitchen worker. His breakfast is simple and good: two thick slices of warm bread, a piece of yellow cheese, a sweet red apple, and a cup of hot herbal tea. He sits at the end of the long wooden table near the tall arched window. Through the thick glass of the window, he looks out at the endless world outside. Below the Spire, there is only a vast, endless ocean of thick white fog and grey clouds. People call this cloud layer the Great Mist. The first sacred law of the High Council is written in black letters on every classroom wall: \"The earth below is dead and poisonous. The Spire is humanity's only home. Do not look down.\" Eldrin takes a bite of his sweet red apple and wonders about the world below the clouds.",
                    "ru": "Он выходит из своей спальни в длинный коридор жилого крыла учеников. Другие юные ученики сонно идут к столовой с деревянными ложками в руках. Одни мальчики говорят об уроках заклинаний, а девочки смеются возле питьевого фонтанчика. Элдрин идет тихо. Он мало говорит, потому что любит наблюдать и слушать. Он входит в большую столовую на 81-м уровне. В зале стоят длинные деревянные скамьи и горят яркие стеклянные лампы. Элдрин берет деревянный поднос и получает свой завтрак от доброго работника кухни. Его завтрак прост и хорош: два толстых ломтя теплого хлеба, кусок желтого сыра, сладкое красное яблоко и чашка горячего травяного чая. Он садится в конце длинного деревянного стола возле высокого стрельчатого окна. Сквозь толстое стекло окна он смотрит на бескрайний мир снаружи. Под Шпилем простирается лишь бескрайний океан густого белого тумана и серых облаков. Люди называют этот облачный слой Великим Туманом. Первый священный закон Верховного Совета написан черными буквами на стене каждого класса: \"Земля внизу мертва и ядовита. Шпиль — единственный дом человечества. Не смотри вниз.\" Элдрин откусывает сладкое красное яблоко и размышляет о мире под облаками."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Is the ground really dead? Why does nobody have an ancient map of the world?\"",
                    "ru": "\"Неужели земля действительно мертва? Почему ни у кого нет древней карты мира?\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "After breakfast, Eldrin drinks the warm tea and returns his wooden tray to the kitchen counter. It is seven o'clock now. His morning duties in the Great Archive are about to begin. He climbs the narrow spiral stairs from Level 81 up to Level 82. At the top of the stairs stands a heavy oak door with an iron handle shaped like an owl. This is the entrance to the Archive of Ancient Runes, the oldest library in the Arcane Spire. Eldrin pushes the heavy door open with both hands. The familiar smell of old parchment, lavender, and black ink greets him. The Great Archive is magnificent, enormous, and very quiet. The ceiling is twenty meters high, decorated with glowing blue crystal stones that shine like stars. Tall wooden shelves stand in long straight rows, holding thousands of ancient books, scrolls, and leather ledgers. Some books are bound in red velvet, some in dark iron, and some in dried animal skins. Eldrin takes a wooden broom from the corner cupboard and begins to sweep the smooth stone floor. He sweeps the dust carefully between the tall rows of bookshelves. He loves the quiet peacefulness of the library in the early morning before the masters arrive. After sweeping the main hall, he takes a soft cotton cloth and begins to dust the study desks. Near the tall round window at the far end of the archive stands the desk of Master Corvinus. Master Corvinus is the Chief Archivist of the Spire. He is sixty-eight years old and walks with a dark wooden cane. He is a very strict teacher, but he knows more ancient history than anyone else in the academy. Eldrin approaches the master's heavy desk and stops suddenly in surprise.",
                    "ru": "После завтрака Элдрин допивает теплый чай и возвращает свой деревянный поднос на кухонную стойку. Сейчас семь часов. Его утренние обязанности в Великом Архиве вот-вот начнутся. Он поднимается по узкой винтовой лестнице с 81-го уровня на 82-й. Наверху лестницы стоит тяжелая дубовая дверь с железной ручкой в виде совы. Это вход в Архив Древних Рун, старейшую библиотеку в Тайном Шпиле. Элдрин толкает тяжелую дверь обеими руками. Знакомый запах старого пергамента, лаванды и черных чернил встречает его. Великий Архив великолепен, огромен и очень тих. Потолок высотой в двадцать метров украшен светящимися синими кристаллами, сияющими как звезды. Высокие деревянные полки стоят длинными прямыми рядами, храня тысячи древних книг, свитков и кожаных реестров. Одни книги переплетены в красный бархат, другие — в темное железо, третьи — в сухие шкуры. Элдрин берет деревянную метлу из углового шкафа и начинает подметать гладкий каменный пол. Он тщательно выметает пыль между высокими рядами книжных полок. Он любит тишину и покой библиотеки ранним утром, до того как приходят мастера. Подметая главный зал, он берет мягкую хлопковую тряпку и начинает вытирать пыль с учебных столов. Возле высокого круглого окна в дальнем конце архива стоит стол мастера Корвинуса. Мастер Корвинус — Главный Архивариус Шпиля. Ему шестьдесят восемь лет, и он ходит с темной деревянной тростью. Он очень строгий учитель, но знает древнюю историю лучше всех в академии. Элдрин подходит к тяжелому столу мастера и внезапно останавливается от удивления."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Look at this ancient scroll! Magic is not only power. Magic is a language, isn't it?\"",
                    "ru": "\"Посмотри на этот древний свиток! Магия — это не только сила. Магия — это язык, не так ли?\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "On the dark wooden desk lies an ancient parchment scroll with strange purple runes around its border. Next to the scroll sits a small glass bottle filled with luminous blue ink and a long purple feather. The feather is extraordinary. It is not an ordinary bird's feather; it glows with faint violet light. Eldrin leans forward and looks closely at the glowing purple feather.",
                    "ru": "На темном деревянном столе лежит древний пергаментный свиток со странными фиолетовыми рунами по краям. Рядом со свитком стоит маленькая стеклянная бутылочка, наполненная светящимися синими чернилами, и длинное фиолетовое перо. Перо необыкновенное. Это не обычное птичье перо; оно светится слабым фиолетовым светом. Элдрин наклоняется вперед и внимательно смотрит на светящееся фиолетовое перо."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Where did Master Corvinus find this beautiful glowing quill?\"",
                    "ru": "\"Где мастер Корвинус нашел это прекрасное светящееся перо?\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Suddenly, something magical happens right before his eyes! The purple feather twitches! It rises into the air without any hand touching it! Eldrin gasps and steps back against the heavy bookshelf. The feather floats gently in the air like a leaf upon calm water. It dips its sharp silver tip into the glass bottle of blue ink. Then, with smooth and elegant movements, the feather begins to write glowing words upon the parchment scroll! The sound of the quill on the dry paper is crisp and clear in the silent archive.",
                    "ru": "Внезапно прямо перед его глазами происходит нечто волшебное! Фиолетовое перо вздрагивает! Оно поднимается в воздух без прикосновения чьих-либо рук! Элдрин ахает и отступает назад к тяжелой книжной полке. Перо мягко парит в воздухе, словно листок на спокойной воде. Оно макает свой острый серебряный кончик в стеклянную бутылочку синих чернил. Затем плавными и изящными движениями перо начинает писать светящиеся слова на пергаментном свитке! Звук пера по сухой бумаге отчетлив и ясен в безмолвном архиве."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Wait, what?! Are you alive, little feather?!\"",
                    "ru": "\"Подожди, что?! Ты живое, маленькое перышко?!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "The floating feather writes three glowing golden words across the center of the scroll: SEEK THE LIGHT.",
                    "ru": "Парящее перо пишет три светящихся золотых слова в центре свитка: ИЩИ СВЕТ."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Seek the light? Where is the light in this dark library?\"",
                    "ru": "\"Ищи свет? Где же свет в этой темной библиотеке?\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "The feather floats higher into the air and turns slowly towards the back of the room. It floats across the high bookshelves and hovers directly before a heavy iron door in the shadow. The iron door is old and covered with thick grey dust. It has three heavy bolt locks and a round keyhole. No apprentice is ever allowed to touch that iron door.",
                    "ru": "Перо поднимается выше в воздух и медленно поворачивается к задней части комнаты. Оно летит через высокие книжные полки и замирает прямо перед тяжелой железной дверью в тени. Железная дверь старая и покрыта густой серой пылью. У неё три тяжелых засова и круглая замочная скважина. Ни одному ученику никогда не разрешается прикасаться к этой железной двери."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"A secret door? Nobody goes there! But I am not afraid! I must find what is behind it! My first real adventure begins today!\"",
                    "ru": "\"Секретная дверь? Туда никто не ходит! Но я не боюсь! Я должен узнать, что за ней! Мое первое настоящее приключение начинается сегодня!\""
                }
            ],
            "quiz": [
                {
                    "question": "What is Eldrin's role and where does he live?",
                    "options": [
                        "A twelve-year-old apprentice archivist on Level 82 of the Arcane Spire",
                        "A blacksmith apprentice in a dark mountain cave",
                        "A sailor boy on an ocean fishing ship",
                        "A royal guard in the golden throne room"
                    ],
                    "correctIdx": 0,
                    "explanation": "Eldrin is a twelve-year-old apprentice archivist living on Level 82 of the Arcane Spire."
                },
                {
                    "question": "What does the sacred law on the classroom walls state about the ground below?",
                    "options": [
                        "The earth below is dead and poisonous; do not look down",
                        "The ground is full of candy and toys",
                        "Everyone should jump down with wings",
                        "The ground has big cities with trains"
                    ],
                    "correctIdx": 0,
                    "explanation": "The Council law says: 'The earth below is dead and poisonous. The Spire is humanity's only home. Do not look down.'"
                },
                {
                    "question": "What magical words did the floating purple quill write on the ancient scroll?",
                    "options": [
                        "'SEEK THE LIGHT'",
                        "'GO TO SLEEP NOW'",
                        "'EAT YOUR BREAKFAST'",
                        "'CLEAN THE WINDOWS'"
                    ],
                    "correctIdx": 0,
                    "explanation": "The glowing purple quill wrote: 'SEEK THE LIGHT'."
                }
            ]
        },
        {
            "id": "eldrin-ch-2",
            "number": 2,
            "act": 1,
            "titleEn": "Chapter 2: The Missing Register",
            "titleRu": "Глава 2: Пропавший Реестр",
            "grammarFocus": "Past Simple (saw, opened, found, walked, was/were), Questions, Negations",
            "wordCount": 681,
            "coverIcon": "fa-book-skull",
            "coverColor": "#6366f1",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "The morning hours passed quickly in the quiet archive. Sunlight poured through the tall windows. Eldrin could not stop thinking about the purple feather and the secret iron door. He walked softly across the stone floor towards the deepest section of the library. This part of the archive was cold, dark, and smelled of centuries-old parchment and dried glue. There were hundreds of massive black books standing upon tall wooden shelves. Every black book had an iron number stamped upon its dark leather spine.",
                    "ru": "Утренние часы быстро летели в тихом архиве. Солнечный свет лился сквозь высокие окна. Элдрин не мог перестать думать о фиолетовом пере и секретной железной двери. Он мягко ступал по каменному полу к самому глубокому отделу библиотеки. Эта часть архива была холодной, темной и пахла многовековым пергаментом и сухим клеем. Там стояли сотни массивных черных книг на высоких деревянных полках. У каждой черной книги на темном кожаном корешке был выбит железный номер."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Where is the official register of the Spire levels? I want to see the complete architectural map.\"",
                    "ru": "\"Где официальный реестр уровней Шпиля? Я хочу увидеть полную архитектурную карту.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "He searched along the bottom shelves, but he found only tax records and old grain receipts. Then, he looked up. High above his head, on the very top shelf, stood a gigantic book. Eldrin pulled a tall wooden ladder with bronze wheels across the floor. RATTLE, RATTLE! The wheels rolled smoothly across the grey flagstones. He climbed the wooden steps carefully, holding the sides with both hands. On the top shelf, stamped in silver letters, was the title: The Complete Architectural Register of the Arcane Spire. It was a massive book bound in dark brown bull leather with thick brass corner protectors. Eldrin lifted the heavy book with all his strength. It weighed almost as much as a sack of flour. He carried it down the ladder slowly and placed it upon the wide reading table. THUD! A small cloud of grey dust rose into the air and made him sneeze.",
                    "ru": "Он искал по нижним полкам, но находил только налоговые записи и старые квитанции за зерно. Затем он поднял глаза. Высоко над головой, на самой верхней полке, стояла гигантская книга. Элдрин подкатил по полу высокую деревянную лестницу на бронзовых колесиках. ГРОХОТ, ГРОХОТ! Колесики плавно катились по серым плитам пола. Он осторожно поднялся по деревянным ступенькам, держась за поручни обеими руками. На верхней полке серебряными буквами было выбито название: Полный Архитектурный Реестр Тайного Шпиля. Это была массивная книга в темно-коричневом переплете из бычьей кожи с толстыми латунными уголками. Элдрин поднял тяжелую книгу изо всех сил. Она весила почти столько же, сколько мешок муки. Он медленно спустил её по лестнице и положил на широкий стол для чтения. БАХ! Маленькое облачко серой пыли поднялось в воздух и заставило его чихнуть."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Achoo! Nobody opened this book for fifty years! Let us see what is inside.\"",
                    "ru": "\"Апчхи! Никто не открывал эту книгу пятьдесят лет! Посмотрим, что внутри.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "He opened the heavy brass lock and turned the stiff yellow pages one by one. Page one hundred: The High Sanctorum, residence of the Supreme Council and the golden gardens. Page eighty: The Upper Academy of Magic, classrooms, dormitories, and the great rune archives. Page fifty: The Green Terraces and Hydroponic Rings, where farmers grow wheat and apples. Page twenty: The Deep Foundry, iron workshops, steam pipes, and coal furnaces. Eldrin turned towards the very end of the book to see the bottom of the Spire. Page three hundred and ninety-nine: Level One, The Foundation Pillars. He turned the leaf to read page four hundred. But there was no page four hundred!",
                    "ru": "Он открыл тяжелый латунный замок и стал переворачивать жесткие желтые страницы одну за другой. Страница сто: Высокое Святилище, резиденция Верховного Совета и золотые сады. Страница восемьдесят: Верхняя Академия Магии, классы, спальни и великие архивы рун. Страница пятьдесят: Зеленые Террасы и Гидропонные Кольца, где фермеры выращивают пшеницу и яблоки. Страница двадцать: Глубокий Литейный цех, кузнечные мастерские, паровые трубы и угольные печи. Элдрин перелистнул в самый конец книги, чтобы увидеть нижнюю часть Шпиля. Страница триста девяносто девять: Уровень Один, Столпы Фундамента. Он перевернул лист, чтобы прочесть страницу четыреста. Но страницы четыреста не было!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Wait! What happened here?! The entire last page is missing!\"",
                    "ru": "\"Подожди! Что здесь случилось?! Вся последняя страница отсутствует!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Someone cut the last page out along the inner spine with a razor-sharp blade! Only a thin strip of paper remained glued to the leather binding. Upon that narrow strip, one single line of old black ink was still visible: \"Level Zero: Strictly Forbidden. Do Not Record. Sealed by Order of the High Council.\"",
                    "ru": "Кто-то вырезал последнюю страницу вдоль корешка бритвенно-острым лезвием! Лишь узкая полоска бумаги осталась приклеенной к кожаному переплету. На этой узкой полоске всё ещё была видна одна-единственная строчка старых черных чернил: \"Уровень Ноль: Строго Запрещено. Не Записывать. Запечатано Приказом Верховного Совета.\""
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Level Zero? A secret level below Level One? What machine or room is hidden there?\"",
                    "ru": "\"Уровень Ноль? Секретный уровень под Первым Уровнем? Какая машина или комната там спрятана?\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Suddenly, a sharp rhythmic sound broke the silence of the library. TAP, TAP, TAP! It was the sound of an iron-tipped wooden walking cane striking the stone floor. Eldrin froze in terror. A long, thin shadow fell across the open register. Master Corvinus stood at the end of the aisle. His dark grey cloak hung around his thin shoulders.",
                    "ru": "Внезапно резкий ритмичный звук нарушил тишину библиотеки. СТУК, СТУК, СТУК! Это был звук деревянной трости с железным наконечником, ударяющей по каменному полу. Элдрин замер от ужаса. Длинная, тонкая тень упала на открытый реестр. Мастер Корвинус стоял в конце прохода. Его темно-серый плащ висел на худых плечах."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"Put that book back on the high shelf immediately, boy!\"",
                    "ru": "\"Немедленно поставь эту книгу обратно на верхнюю полку, мальчик!\""
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Master Corvinus! I... I was only checking the shelf numbers, sir! Forgive me!\"",
                    "ru": "\"Мастер Корвинус! Я... Я просто проверял номера полок, сэр! Простите меня!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "The old archivist walked slowly to the table. His grey eyes were sharp, intelligent, and troubled. He placed his wrinkled hand upon the cut edge of page four hundred.",
                    "ru": "Старый архивариус медленно подошел к столу. Его серые глаза были острыми, умными и встревоженными. Он положил свою сморщенную руку на срезанный край страницы четыреста."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"Some questions have terrible answers in this floating tower, Eldrin. Curiosity is the shortest road to the Mist.\"",
                    "ru": "\"Некоторые вопросы таят ужасные ответы в этой парящей башне, Элдрин. Любопытство — самая короткая дорога в Туман.\""
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Why did someone cut this page out, master? What is on Level Zero?\"",
                    "ru": "\"Почему кто-то вырезал эту страницу, мастер? Что находится на Нулевом Уровне?\""
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"Your father asked that exact same question five years ago, young apprentice. Do not make his tragic mistake.\" \"Close the book. Return it to shelf eighty. Then go to your dormitory before evening curfew.\"",
                    "ru": "\"Твой отец задал ровно тот же самый вопрос пять лет назад, юный ученик. Не совершай его трагической ошибки.\" \"Закрой книгу. Верни её на восьмидесятую полку. Затем иди в свою спальню до вечернего комендантского часа.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "The master turned around and walked away, his cane tapping rhythmically upon the cold stones. Eldrin closed the massive book with trembling hands. His mind was racing with questions.",
                    "ru": "Мастер развернулся и ушел, его трость ритмично постукивала по холодным камням. Элдрин закрыл массивную книгу дрожащими руками. Его мысли лихорадочно роились от вопросов."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"My father knew about Level Zero! He was looking for it before he disappeared! I must know the truth!\"",
                    "ru": "\"Мой отец знал о Нулевом Уровне! Он искал его до того, как исчез! Я должен узнать правду!\""
                }
            ],
            "quiz": [
                {
                    "question": "Where did Eldrin find the Complete Architectural Register of the Spire?",
                    "options": [
                        "On the very top shelf reached by a rolling wooden ladder",
                        "Under a dining table in the kitchen",
                        "In a dusty wooden shoe box",
                        "Outside on the balcony in the rain"
                    ],
                    "correctIdx": 0,
                    "explanation": "Eldrin found the massive register on the top shelf using a rolling wooden ladder."
                },
                {
                    "question": "What did Eldrin discover on page four hundred of the register?",
                    "options": [
                        "The entire page was cut out with a sharp knife, leaving a note about Level Zero",
                        "A picture of a golden palace with swimming pools",
                        "A poem about sweet red apples",
                        "Nothing, the page was completely white"
                    ],
                    "correctIdx": 0,
                    "explanation": "Page 400 was cut out with a knife, leaving only a strip reading 'Level Zero: Strictly Forbidden'."
                },
                {
                    "question": "What warning did Master Corvinus give Eldrin about his father?",
                    "options": [
                        "His father asked that exact same question before he disappeared",
                        "His father was a famous pastry chef",
                        "His father never read any books",
                        "His father moved to a sunny beach"
                    ],
                    "correctIdx": 0,
                    "explanation": "Corvinus warned him: 'Your father asked that exact same question five years ago. Do not make his mistake.'"
                }
            ]
        },
        {
            "id": "eldrin-ch-3",
            "number": 3,
            "act": 1,
            "titleEn": "Chapter 3: The Bronze Key",
            "titleRu": "Глава 3: Бронзовый Ключ",
            "grammarFocus": "Past Simple (remembered, took, opened, pressed), Possessives (father's), Numbers",
            "wordCount": 533,
            "coverIcon": "fa-key",
            "coverColor": "#f59e0b",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "That night, cold autumn rain lashed against the round stone walls of the Spire. Eldrin lay awake in his narrow bed on Level 82, listening to the roaring wind outside. The other apprentices in the dormitory were sleeping soundly, breathing in slow rhythm.",
                    "ru": "В ту ночь холодный осенний дождь хлестал по круглым каменным стенам Шпиля. Элдрин лежал без сна в своей узкой кровати на 82-м уровне, слушая ревущий ветер снаружи. Другие ученики в спальне крепко спали, медленно и размеренно дыша."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Master Corvinus said my father asked about Level Zero. Why did my father care about the bottom of the tower?\"",
                    "ru": "\"Мастер Корвинус сказал, что мой отец спрашивал о Нулевом Уровне. Почему моего отца волновал низ башни?\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin closed his eyes and remembered his childhood five years ago. His father, Nicholas, was a chief mechanic on Level 12 in the Deep Foundry. His father was a tall, strong man with kind blue eyes and hands always stained with black machine oil. One dark night, six armored Iron Sentinels came to their small home with drawn weapons. They arrested his father by order of the High Council and marched him away into the darkness. Before the guards dragged him out the door, his father whispered one final sentence to little Eldrin: \"Keep the green astronomy book safe, my son. The book holds our future.\"",
                    "ru": "Элдрин закрыл глаза и вспомнил свое детство пять лет назад. Его отец, Николас, был главным механиком на 12-м уровне в Глубоком Литейном цехе. Его отец был высоким, сильным человеком с добрыми голубыми глазами и руками, вечно испачканными черным машинным маслом. Одной темной ночью шестеро бронированных Железных Стражей пришли в их скромный дом с обнаженным оружием. Они арестовали его отца по приказу Верховного Совета и увели во тьму. Прежде чем стражники вытащили его за дверь, отец прошептал маленькому Элдрину последнюю фразу: \"Береги зеленую книгу по астрономии, мой сын. Эта книга хранит наше будущее.\""
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"The green astronomy book! I have kept it under my mattress for five years, but I never examined the cover carefully!\"",
                    "ru": "\"Зеленая книга по астрономии! Я хранил её под матрасом пять лет, но никогда внимательно не осматривал обложку!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin sat up quietly and reached his hand deep beneath his straw mattress. His fingers touched the thick leather volume. He pulled it out into the dim moonlight. It was a heavy, ancient book with faded silver stars painted upon dark green leather. Eldrin lit a small wax candle and placed it behind a wooden box so the dormitory guard would not see the flame. He examined the back cover with careful fingers. It was unusually thick and stiff. Near the top corner of the back cover, he felt a tiny raised metal stud beneath the leather.",
                    "ru": "Элдрин тихо сел и засунул руку глубоко под свой соломенный матрас. Его пальцы коснулись толстого кожаного тома. Он вытащил его в тусклый лунный свет. Это была тяжелая древняя книга с выцветшими серебряными звездами, нарисованными на темно-зеленой коже. Элдрин зажег маленькую восковую свечу и поставил её за деревянный ящик, чтобы дежурный по спальне не увидел пламя. Он ощупал заднюю обложку внимательными пальцами. Она была необычно толстой и жесткой. Возле верхнего угла задней обложки он нащупал крошечную выступающую металлическую заклепку под кожей."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"There is a hidden mechanism here! A secret release catch!\"",
                    "ru": "\"Здесь спрятан механизм! Потайная защелка!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin pressed the small brass stud with his thumb. CLICK! A hollow wooden tray slid out from the side of the thick cover like a secret drawer! Inside the velvet-lined pocket lay a heavy bronze key and a small piece of folded paper.",
                    "ru": "Элдрин нажал на маленькую латунную заклепку большим пальцем. ЩЁЛК! Полое деревянное донышко выдвинулось из боковины толстой обложки, как потайной ящичек! Внутри бархатного кармашка лежал тяжелый бронзовый ключ и маленький кусочек сложенной бумаги."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"A key! A real bronze key! Look at these numbers carved into the handle!\"",
                    "ru": "\"Ключ! Настоящий бронзовый ключ! Посмотри на эти цифры, выбитые на ручке!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Upon the flat handle of the key, three numbers were deeply stamped: 12 - 5 - 0.",
                    "ru": "На плоской ручке ключа были глубоко выбиты три цифры: 12 - 5 - 0."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Level 12, Level 5, Level 0! It is a sequence of doors leading down to the Core!\"",
                    "ru": "\"12-й уровень, 5-й уровень, 0-й уровень! Это последовательность дверей, ведущих вниз к Ядру!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "With trembling hands, Eldrin unfolded the yellowed scrap of paper. It was a letter written in his father's bold, familiar pencil handwriting: \"My dearest Eldrin. If you read this, the Council has taken me. Do not believe their sacred words.\" \"The great altitude thrusters in the lower hull are not magical. They are old machines, and they are failing.\" \"The Spire is sinking two meters into the clouds every single month. We are falling.\" \"Go to Level 12. Find my trusted friend Bram in the machine shop. He has the second half of the cipher.\" \"Be brave, my son. Save our people. Love, Father.\"",
                    "ru": "Дрожащими руками Элдрин развернул пожелтевший клочок бумаги. Это было письмо, написанное уверенным, знакомым карандашным почерком его отца: \"Мой дорогой Элдрин. Если ты читаешь это, Совет забрал меня. Не верь их священным словам.\" \"Великие высотные двигатели в нижней обшивке не волшебные. Это старые машины, и они выходят из строя.\" \"Шпиль опускается в облака на два метра каждый месяц. Мы падаем.\" \"Спустись на 12-й уровень. Найди моего верного друга Брама в механической мастерской. У него вторая половина шифра.\" \"Будь храбрым, мой сын. Спаси наш народ. С любовью, Отец.\""
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"The Spire is falling! We are sinking into the Great Mist, and the Council is hiding it from everyone!\"",
                    "ru": "\"Шпиль падает! Мы тонем в Великом Тумане, а Совет скрывает это от всех!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin clutched the bronze key tightly against his chest. Tears of determination shone in his eyes.",
                    "ru": "Элдрин крепко прижал бронзовый ключ к груди. Слезы решимости заблестели в его глазах."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"I must go down to Level 12. I must find Bram. I will not let our city die!\"",
                    "ru": "\"Я должен спуститься на 12-й уровень. Я должен найти Брама. Я не позволю нашему городу погибнуть!\""
                }
            ],
            "quiz": [
                {
                    "question": "What was Eldrin's father's name and occupation?",
                    "options": [
                        "Nicholas, a chief mechanic on Level 12 in the Deep Foundry",
                        "Arthur, a high priest in the golden temple",
                        "Peter, a baker of sweet cakes",
                        "James, a farmer growing red apples"
                    ],
                    "correctIdx": 0,
                    "explanation": "His father Nicholas was a chief mechanic on Level 12."
                },
                {
                    "question": "What three numbers were stamped upon the bronze key handle?",
                    "options": [
                        "12 - 5 - 0",
                        "1 - 2 - 3",
                        "100 - 50 - 25",
                        "7 - 7 - 7"
                    ],
                    "correctIdx": 0,
                    "explanation": "The numbers stamped on the key handle were '12 - 5 - 0'."
                },
                {
                    "question": "What alarming truth did the father's letter reveal about the Spire?",
                    "options": [
                        "The Spire is sinking two meters into the clouds every month because the engines are failing",
                        "The library had no more blue ink bottles",
                        "The dining room stopped cooking breakfast",
                        "The bells were painted bright green"
                    ],
                    "correctIdx": 0,
                    "explanation": "The letter revealed: 'The Spire is sinking two meters into the clouds every month. We are falling.'"
                }
            ]
        },
        {
            "id": "eldrin-ch-4",
            "number": 4,
            "act": 1,
            "titleEn": "Chapter 4: The Girl with Iron Boots",
            "titleRu": "Глава 4: Девочка в Железных Сапогах",
            "grammarFocus": "Present Continuous (running, shouting, holding), Adjectives (fast, heavy, dark), Modals (can / must)",
            "wordCount": 620,
            "coverIcon": "fa-person-running",
            "coverColor": "#ec4899",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "The next morning at dawn, thick steam hissed from the freight elevator shafts of Level 82. Gigantic iron chains groaned as the heavy cargo platform rose from the lower levels. Every morning, supply runners from the Foundry brought fresh lamp oil, coal, and tools to the Academy. Eldrin stood near a stone pillar, watching the freight platform with sharp attention.",
                    "ru": "На следующее утро на рассвете густой пар зашипел из шахт грузовых лифтов 82-го уровня. Гигантские железные цепи со стоном натянулись, когда тяжелая грузовая платформа поднялась с нижних уровней. Каждое утро бегуны-снабженцы из Литейного цеха привозили в Академию свежее ламповое масло, уголь и инструменты. Элдрин стоял возле каменного столба, с предельным вниманием наблюдая за грузовой платформой."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"The lift goes all the way down to Level 12. But Sentinels guard every gate. How can I get inside?\"",
                    "ru": "\"Лифт идет до самого 12-го уровня. Но стражи охраняют каждые ворота. Как мне попасть внутрь?\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "CLANG! The massive iron platform locked into the docking bay with a loud shudder. Dozens of workers in heavy leather coats began rolling heavy wooden barrels across the metal ramp. Among the older workers was a young girl who moved faster and more agile than anyone else. She was fourteen years old, with short black hair, grey eyes, and sharp, determined features. She wore dark leather trousers, thick workman's gloves, and heavy boots with iron soles.",
                    "ru": "ЛЯЗГ! Массивная железная платформа встала в стыковочный отсек с громким содроганием. Десятки рабочих в тяжелых кожаных куртках начали перекатывать тяжелые деревянные бочки по металлическому пандусу. Среди взрослых рабочих была молодая девочка, которая двигалась быстрее и проворнее всех остальных. Ей было четырнадцать лет, с короткими черными волосами, серыми глазами и резкими, решительными чертами лица. Она носила темные кожаные штаны, толстые рабочие перчатки и тяжелые сапоги с железными подошвами."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "en": "\"Push harder, old Marcus! The Council guards will inspect this platform in two minutes!\"",
                    "ru": "\"Толкай сильнее, старик Маркус! Стражи Совета будут осматривать эту платформу через две минуты!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "She carried two heavy iron cans of purple refining acid as if they weighed nothing at all. Suddenly, the heavy iron gate at the end of the hall swung open with a resounding bang! Commander Vane marched into the cargo bay, followed by four tall Sentinels holding crackling electric staves.",
                    "ru": "Она несла две тяжелые железные канистры с фиолетовой очистительной кислотой так, словно они совсем ничего не весили. Внезапно тяжелые железные ворота в конце зала распахнулись с оглушительным стуком! Командор Вейн вошел в грузовой отсек в сопровождении четырех высоких стражей с трещащими электрическими посохами."
                },
                {
                    "speaker": "vane",
                    "voice": "Fenrir",
                    "en": "\"Halt all unloading! Put your hands on the metal railing! Full security inspection!\"",
                    "ru": "\"Остановить разгрузку! Руки на металлические перила! Полная проверка безопасности!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "The workers stopped immediately, trembling with fear. Sentinels were ruthless with lower level workers. Kira tried to step behind a stack of wooden crates, but her iron boot caught on a loose cable. She stumbled forward! A small brass cylinder slipped from her leather pouch and rolled across the floor! The brass object rolled straight towards the feet of Commander Vane!",
                    "ru": "Рабочие немедленно замерли, дрожа от страха. Стражи были беспощадны к рабочим с нижних уровней. Кира попыталась шагнуть за стопку деревянных ящиков, но её железный сапог зацепился за свисающий кабель. Она споткнулась вперед! Маленький латунный цилиндр выскользнул из её кожаной сумки и покатился по полу! Латунный предмет покатился прямо к ногам командора Вейна!"
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "en": "\"No!\"",
                    "ru": "\"Нет!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin acted without hesitation. He kicked his broom forward as if he were sweeping vigorously. CLATTER! The broom head covered the brass cylinder, and Eldrin's boot slid smoothly over it, hiding it completely.",
                    "ru": "Элдрин действовал без колебаний. Он взмахнул метлой вперед, словно усердно подметал. ГРОХОТ! Щетина метлы накрыла латунный цилиндр, и сапог Элдрина плавно встал поверх него, полностью скрыв его."
                },
                {
                    "speaker": "vane",
                    "voice": "Fenrir",
                    "en": "\"You! Apprentice! Why are you sweeping in the cargo bay during curfew hours?!\"",
                    "ru": "\"Ты! Ученик! Почему ты подметаешь в грузовом отсеке во время комендантского часа?!\""
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Master Corvinus ordered five litres of lamp oil for the ancient scrolls, commander. I am waiting for the delivery.\"",
                    "ru": "\"Мастер Корвинус приказал принести пять литров лампового масла для древних свитков, командор. Я жду доставки.\""
                },
                {
                    "speaker": "vane",
                    "voice": "Fenrir",
                    "en": "\"Corvinus... That old man burns too much oil at night. Take your oil and get back to the library!\" \"Sentinels, search the barrels! Look for contraband tools and unauthorized glass!\"",
                    "ru": "\"Корвинус... Этот старик жжет слишком много масла по ночам. Забирай свое масло и возвращайся в библиотеку!\" \"Стражи, обыскать бочки! Ищите контрабандные инструменты и неразрешенное стекло!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "While the Sentinels were prying open the wooden barrels, Kira grabbed Eldrin's arm and pulled him behind the boiler.",
                    "ru": "Пока стражи вскрывали деревянные бочки, Кира схватила Элдрина за руку и затянула за паровой котел."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "en": "\"Give it back to me! Right now, library boy! If they find that lens, they will throw me into the Mist!\"",
                    "ru": "\"Отдай его мне! Прямо сейчас, библиотечный мальчик! Если они найдут эту линзу, они сбросят меня в Туман!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin reached into his boot and produced the heavy brass cylinder. It had a thick black glass lens on one end.",
                    "ru": "Элдрин достал из сапога тяжелый латунный цилиндр. На одном конце у него была толстая черная стеклянная линза."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Here it is. I saved your life. My name is Eldrin. Why are the Sentinels looking for glass?\"",
                    "ru": "\"Вот он. Я спас твою жизнь. Меня зовут Элдрин. Почему стражи ищут стекло?\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Kira took the brass tube and inspected it carefully. Her sharp expression softened slightly.",
                    "ru": "Кира взяла латунную трубку и внимательно осмотрела её. Её резкое выражение лица слегка смягчилось."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "en": "\"My name is Kira. I run courier messages for the machine shops on Level 12.\" \"This is not ordinary glass, Eldrin. Put it to your eye and look through the floor ventilation grate.\"",
                    "ru": "\"Меня зовут Кира. Я разношу курьерские донесения для механических мастерских на 12-м уровне.\" \"Это не обычное стекло, Элдрин. Поднеси его к глазу и посмотри сквозь напольную вентиляционную решетку.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin knelt by the iron floor grate and looked through the black lens down into the cloud sea. Normally, through naked eyes, the clouds were a solid, impenetrable white wall. But through this optical lens, the white light vanished! The fog became completely transparent! Far, far below, thousands of meters beneath the floating Spire, Eldrin saw something impossible. He saw green forests, winding blue rivers, and vast brown hills touching a real horizon!",
                    "ru": "Элдрин опустился на колени возле железной решетки в полу и посмотрел сквозь черную линзу вниз, в облачное море. Обычно невооруженным глазом облака казались сплошной, непроницаемой белой стеной. Но сквозь эту оптическую линзу белый свет исчез! Туман стал абсолютно прозрачным! Далеко-далеко внизу, на тысячи метров под парящим Шпилем, Элдрин увидел нечто невозможное. Он увидел зеленые леса, извилистые синие реки и бескрайние коричневые холмы, касающиеся настоящего горизонта!"
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"The earth... The ground is alive! It is green and beautiful! The Council lied to all of us!\"",
                    "ru": "\"Земля... Земля жива! Она зеленая и прекрасная! Совет лгал всем нам!\""
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "en": "\"Yes. The earth is alive. And our Spire is falling towards it faster every single day.\"",
                    "ru": "\"Да. Земля жива. И наш Шпиль падает к ней быстрее с каждым днем.\""
                }
            ],
            "quiz": [
                {
                    "question": "What is Kira's job in the Spire?",
                    "options": [
                        "A courier runner from Level 12 delivering supplies and messages",
                        "A teacher of ancient languages in the Academy",
                        "A guard commander wearing shiny steel armor",
                        "A librarian sorting old scrolls"
                    ],
                    "correctIdx": 0,
                    "explanation": "Kira is a fourteen-year-old courier runner from the Level 12 machine shops."
                },
                {
                    "question": "How did Eldrin prevent Commander Vane from discovering Kira's brass telescope?",
                    "options": [
                        "He swept his broom over it and hid it beneath his boot",
                        "He threw it out the high window into the sky",
                        "He ate it quickly",
                        "He shouted loudly and ran away"
                    ],
                    "correctIdx": 0,
                    "explanation": "Eldrin used his broom to cover the cylinder and slid his boot over it."
                },
                {
                    "question": "What did Eldrin see when he looked through the special optical lens?",
                    "options": [
                        "The fog became transparent, revealing green forests and rivers on the earth below",
                        "He saw an enormous dragon flying above the tower",
                        "He saw nothing because the lens was broken",
                        "He saw a golden city in the sun"
                    ],
                    "correctIdx": 0,
                    "explanation": "The lens cut through the fog and showed that the earth below was alive with green forests and rivers."
                }
            ]
        },
        {
            "id": "eldrin-ch-5",
            "number": 5,
            "act": 1,
            "titleEn": "Chapter 5: Whispers in the Dark",
            "titleRu": "Глава 5: Шёпот в Темноте",
            "grammarFocus": "Future Tense with Will (will lock, will fall, will help), Prepositions of Movement (down, through)",
            "wordCount": 677,
            "coverIcon": "fa-ear-listen",
            "coverColor": "#8b5cf6",
            "sentences": [
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Night fell over Level 82 like a heavy black velvet blanket. The great bronze bell on Level 80 chimed ten slow, solemn times. Curfew began. All lamps along the main corridors were extinguished by order of the High Council. Eldrin did not go to bed. He carried a heavy iron can of lamp oil through the dark library halls. He needed to deliver the oil to Master Corvinus's private office before midnight. As he approached the heavy oak door, he saw a narrow streak of yellow candlelight shining across the stone floor. The wooden door was open two inches. Low, tense voices were arguing inside. Eldrin set the heavy oil can down silently and leaned his ear against the wooden frame.",
                    "ru": "Ночь опустилась на 82-й уровень, словно тяжелое одеяло из черного бархата. Большой бронзовый колокол на 80-м уровне торжественно и медленно пробил десять раз. Начался комендантский час. Все лампы вдоль главных коридоров были погашены по приказу Верховного Совета. Элдрин не пошел спать. Он нес тяжелую железную канистру с ламповым маслом по темным залам библиотеки. Ему нужно было доставить масло в личный кабинет мастера Корвинуса до полуночи. Приближаясь к тяжелой дубовой двери, он увидел узкую полоску желтого свечного света, падающую на каменный пол. Деревянная дверь была приоткрыта на пару дюймов. Внутри спорили тихие, напряженные голоса. Элдрин бесшумно поставил тяжелую канистру и прижал ухо к деревянной раме."
                },
                {
                    "speaker": "vane",
                    "voice": "Fenrir",
                    "en": "\"Arch-Prelate Malakor has signed the decree, Corvinus. Tomorrow morning at six o'clock, the blast gates will close.\"",
                    "ru": "\"Верховный прелат Малакор подписал указ, Корвинус. Завтра утром в шесть часов бронированные ворота закроются.\""
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"Close the gates between Level 30 and Level 29?! But twenty thousand people live below Level 30!\" \"If you seal the water pipes and elevators, the workers in the Foundry will starve in the dark!\"",
                    "ru": "\"Закрыть ворота между 30-м и 29-м уровнями?! Но двадцать тысяч человек живут ниже 30-го уровня!\" \"Если вы перекроете водопровод и лифты, рабочие в Литейном цехе будут голодать в темноте!\""
                },
                {
                    "speaker": "vane",
                    "voice": "Fenrir",
                    "en": "\"We have no choice! The main altitude thrusters in the lower hull are losing hydraulic pressure!\" \"The Spire dropped thirty meters last week! If we do not direct all energy to the upper stabilization rings, the whole tower will crash into the ground!\"",
                    "ru": "\"У нас нет выбора! Главные высотные двигатели в нижней обшивке теряют гидравлическое давление!\" \"Шпиль просел на тридцать метров на прошлой неделе! Если мы не направим всю энергию в верхние кольца стабилизации, вся башня рухнет на землю!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin's heart leaped in his chest. His father's letter was completely true: the floating city was falling!",
                    "ru": "Сердце Элдрина подпрыгнуло в груди. Письмо отца было чистой правдой: парящий город падал!"
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"Tell the people the truth, Vane! Let them prepare! Let us lower the Spire safely to the green earth below!\"",
                    "ru": "\"Скажи людям правду, Вейн! Дай им подготовиться! Давай безопасно опустим Шпиль на зеленую землю внизу!\""
                },
                {
                    "speaker": "vane",
                    "voice": "Fenrir",
                    "en": "\"Never! If the people know the earth is alive, the High Council will lose all power and control!\" \"The decree is sealed. Station Sentinels at every spiral staircase. If anyone attempts to go down, execute them immediately.\"",
                    "ru": "\"Никогда! Если люди узнают, что земля жива, Верховный Совет потеряет всю власть и контроль!\" \"Указ скреплен печатью. Расставьте стражей на каждой винтовой лестнице. Если кто-то попытается спуститься вниз, казните их на месте.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Heavy armored boots turned towards the door. Eldrin quickly slipped behind a tall marble statue of an eagle. Commander Vane marched out into the corridor, his electric shock-staff glowing with dangerous yellow sparks. When the guard's footsteps faded into the distance, Master Corvinus opened the study door completely.",
                    "ru": "Тяжелые бронированные сапоги повернули к двери. Элдрин быстро скользнул за высокую мраморную статую орла. Командор Вейн вышел в коридор, его электрический посох светился опасными желтыми искрами. Когда шаги стражника затихли вдали, мастер Корвинус полностью открыл дверь кабинета."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"Step out from behind the eagle, Eldrin. I heard your breathing ten minutes ago.\"",
                    "ru": "\"Выходи из-за орла, Элдрин. Я услышал твое дыхание десять минут назад.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin walked forward into the candlelight. His young face was pale, but his eyes were steady.",
                    "ru": "Элдрин вышел на свет свечи. Его юное лицо было бледным, но взгляд оставался твердым."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Master Corvinus... The Spire is falling. The Council will sacrifice the lower levels tomorrow morning.\"",
                    "ru": "\"Мастер Корвинус... Шпиль падает. Совет принесет в жертву нижние уровни завтра утром.\""
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"Yes, my boy. The rulers are blinded by pride and fear.\"",
                    "ru": "\"Да, мой мальчик. Правители ослеплены гордыней и страхом.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "The old archivist reached into his desk drawer and placed three objects on the table before Eldrin. First was an antique copper lantern with an amber crystal that needed no oil to burn. Second was a folded map drawn upon soft grey parchment, showing the ancient air ducts of the Spire. Third was an iron cylinder holding dried bread and smoked meat.",
                    "ru": "Старый архивариус залез в ящик стола и положил три предмета на стол перед Элдрином. Первым был старинный медный фонарь с янтарным кристаллом, которому не требовалось масло для горения. Вторым была сложенная карта на мягком сером пергаменте, показывающая древние воздуховоды Шпиля. Третьим был железный цилиндр с сухим хлебом и копченым мясом."
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"You have your father's bronze key, Eldrin. Do not deny it; I recognized the hollow book.\" \"Take this ventilation map. The spiral stairs are death, but the air shafts will lead you past Level 30 before sunrise.\"",
                    "ru": "\"У тебя есть бронзовый ключ твоего отца, Элдрин. Не отрицай этого; я узнал полую книгу.\" \"Возьми эту карту вентиляции. Винтовые лестницы — это смерть, но вентиляционные шахты выведут тебя за 30-й уровень до восхода солнца.\""
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"Come with me, Master Corvinus! You cannot stay here! Commander Vane will arrest you!\"",
                    "ru": "\"Идемте со мной, мастер Корвинус! Вы не можете оставаться здесь! Командор Вейн арестует вас!\""
                },
                {
                    "speaker": "corvinus",
                    "voice": "Charon",
                    "en": "\"I am an old man with a wooden cane, Eldrin. I cannot climb through ventilation pipes.\" \"My duty is here, guarding the remaining scrolls until the end. Your duty is below.\" \"Find Bram on Level 12. Find the entrance to Level Zero. Save the Spire, Eldrin.\"",
                    "ru": "\"Я старик с деревянной тростью, Элдрин. Я не могу лазить по вентиляционным трубам.\" \"Мой долг здесь — охранять оставшиеся свитки до конца. Твой долг — внизу.\" \"Найди Брама на 12-м уровне. Найди вход на Нулевой Уровень. Спаси Шпиль, Элдрин.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin took the copper lantern and the map. He bowed deeply to his wise old teacher.",
                    "ru": "Элдрин взял медный фонарь и карту. Он низко поклонился своему мудрому старому учителю."
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"I will not fail you, master. I will find the truth and return.\"",
                    "ru": "\"Я не подведу вас, мастер. Я найду правду и вернусь.\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Eldrin slipped out into the shadow of the service balcony. Near the entrance of the ventilation shaft, a dark figure stepped out from behind a steam pipe. It was Kira. Her heavy iron boots were laced tight, and her brass lens was secured to her belt.",
                    "ru": "Элдрин выскользнул в тень служебного балкона. Возле входа в вентиляционную шахту темная фигура шагнула из-за паровой трубы. Это была Кира. Её тяжелые железные сапоги были туго зашнурованы, а латунная линза закреплена на поясе."
                },
                {
                    "speaker": "kira",
                    "voice": "Aoede",
                    "en": "\"You took long enough, library boy. The air shaft goes eighty levels straight down. Are you ready?\"",
                    "ru": "\"Ты слишком долго собирался, библиотечный мальчик. Воздушная шахта идет на восемьдесят уровней прямо вниз. Ты готов?\""
                },
                {
                    "speaker": "eldrin",
                    "voice": "Puck",
                    "en": "\"I have the map and the key. Lead the way, Kira!\"",
                    "ru": "\"У меня есть карта и ключ. Веди, Кира!\""
                },
                {
                    "speaker": "narrator",
                    "voice": "Charon",
                    "en": "Together, the two young companions stepped into the dark vertical shaft. Act One was finished. The great descent into the forgotten depths of the Arcane Spire had begun!",
                    "ru": "Вместе двое юных спутников шагнули в темную вертикальную шахту. Первый Акт завершился. Великий спуск в забытые глубины Тайного Шпиля начался!"
                }
            ],
            "quiz": [
                {
                    "question": "What terrible decree did Arch-Prelate Malakor sign?",
                    "options": [
                        "To seal the blast gates between Level 30 and 29, cutting off water and power to 20,000 workers",
                        "To paint the library walls bright pink",
                        "To buy 100 new horses for the guards",
                        "To stop teaching magic to apprentices"
                    ],
                    "correctIdx": 0,
                    "explanation": "Malakor ordered the blast gates sealed, cutting off water and food to the lower Foundry."
                },
                {
                    "question": "Why did Master Corvinus refuse to run away with Eldrin?",
                    "options": [
                        "He was an old man with a cane who could not climb pipes, and his duty was to guard the library",
                        "He was afraid of heights",
                        "He wanted to sleep in his bed",
                        "He did not like Kira"
                    ],
                    "correctIdx": 0,
                    "explanation": "Corvinus said: 'I am an old man with a cane. My duty is here, guarding the scrolls until the end.'"
                },
                {
                    "question": "How will Eldrin and Kira bypass the guarded spiral staircases to reach Level 12?",
                    "options": [
                        "By climbing down through the ancient air ventilation shafts shown on the master's map",
                        "By flying on a giant pet eagle",
                        "By swimming in the water pipes",
                        "By jumping with an umbrella"
                    ],
                    "correctIdx": 0,
                    "explanation": "They will climb down through the vertical ventilation shafts using Master Corvinus's map."
                }
            ]
        }
    ]
};

if (typeof window !== 'undefined') {
    window.ELDRIN_AUDIOBOOK = ELDRIN_AUDIOBOOK;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ELDRIN_AUDIOBOOK };
}
