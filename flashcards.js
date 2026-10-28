/* Flashcards Engine with Authentic SM-2 SRS, 10-Card Daily Batches, & Daily Safety Limits (Max 100 New Words/Day + Empty Review Queue Gate) */
const GENERAL_DECKS = {
    "Detective & City (A1)": [
            {
                    "word": "detective",
                    "phonetic": "/dɪˈtek.tɪv/",
                    "translation": "детектив",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The detective carefully examined the room.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "crime",
                    "phonetic": "/kraɪm/",
                    "translation": "преступление",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The police solved a dangerous crime.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "investigate",
                    "phonetic": "/ɪnˈves.tɪ.ɡeɪt/",
                    "translation": "расследовать",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "We need to investigate every clue.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "evidence",
                    "phonetic": "/ˈev.ɪ.dəns/",
                    "translation": "доказательство / улики",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The detective found fresh evidence.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "footprint",
                    "phonetic": "/ˈfʊt.prɪnt/",
                    "translation": "след ноги",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "There was a muddy footprint near the window.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "fingerprint",
                    "phonetic": "/ˈfɪŋ.ɡə.prɪnt/",
                    "translation": "отпечаток пальца",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "They lifted a fingerprint from the glass.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "alibi",
                    "phonetic": "/ˈæl.ɪ.baɪ/",
                    "translation": "алиби",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The suspect had a solid alibi for that evening.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "witness",
                    "phonetic": "/ˈwɪt.nəs/",
                    "translation": "свидетель",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A key witness saw the thief in the park.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "suspect",
                    "phonetic": "/ˈsʌs.pekt/",
                    "translation": "подозреваемый",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The officer questioned the main suspect.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "thief",
                    "phonetic": "/θiːf/",
                    "translation": "вор",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The quick thief vanished in the shadows.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "lie",
                    "phonetic": "/laɪ/",
                    "translation": "ложь / лгать",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "He could tell when someone told a lie.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "note",
                    "phonetic": "/nəʊt/",
                    "translation": "записка",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "She found a handwritten note on the table.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "report",
                    "phonetic": "/rɪˈpɔːt/",
                    "translation": "отчет / рапорт",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The detective filed an official report.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "information",
                    "phonetic": "/ˌɪn.fəˈmeɪ.ʃən/",
                    "translation": "информация",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "We need accurate information about the event.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "explain",
                    "phonetic": "/ɪkˈspleɪn/",
                    "translation": "объяснять",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Can you explain what you saw last night?",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "guess",
                    "phonetic": "/ɡes/",
                    "translation": "догадываться / предполагать",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Try to guess where the key was hidden.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "police / policeman",
                    "phonetic": "/pəˈliːs / pəˈliːs.mən/",
                    "translation": "полиция / полицейский",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A brave policeman arrived on time.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "neighbour",
                    "phonetic": "/ˈneɪ.bər/",
                    "translation": "сосед",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Our kind neighbour called the station.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "visitor",
                    "phonetic": "/ˈvɪz.ɪ.tər/",
                    "translation": "посетитель / гость",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A late visitor knocked on the door.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "owner",
                    "phonetic": "/ˈəʊ.nər/",
                    "translation": "владелец",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The owner unlocked the antique cabinet.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "waiter",
                    "phonetic": "/ˈweɪ.tər/",
                    "translation": "официант",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The polite waiter poured fresh tea.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "watchmaker",
                    "phonetic": "/ˈwɒtʃˌmeɪ.kər/",
                    "translation": "часовщик",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The skilled watchmaker fixed the tiny gears.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "grandparents",
                    "phonetic": "/ˈɡræn.peə.rənts/",
                    "translation": "бабушка и дедушка",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "I often visit my grandparents on weekends.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "teenager",
                    "phonetic": "/ˈtiːnˌeɪ.dʒər/",
                    "translation": "подросток",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The smart teenager found the lost phone.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "kid",
                    "phonetic": "/kɪd/",
                    "translation": "ребенок / малыш",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A curious kid asked many questions.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "police station",
                    "phonetic": "/pəˈliːs ˈsteɪ.ʃən/",
                    "translation": "полицейский участок",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "They walked together to the police station.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "antique shop",
                    "phonetic": "/ænˈtiːk ʃɒp/",
                    "translation": "антикварная лавка",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The antique shop was filled with rare clocks.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "bakery",
                    "phonetic": "/ˈbeɪ.kər.i/",
                    "translation": "пекарня",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The morning bakery baked warm pastries.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "downstairs",
                    "phonetic": "/ˌdaʊnˈsteəz/",
                    "translation": "внизу / на нижнем этаже",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "He heard footsteps downstairs at midnight.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "flashlight",
                    "phonetic": "/ˈflæʃ.laɪt/",
                    "translation": "фонарик",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "She shone the bright flashlight into the corner.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "keycard",
                    "phonetic": "/ˈkiː.kɑːd/",
                    "translation": "электронный ключ-карта",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Swipe your keycard to open the office door.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "music box",
                    "phonetic": "/ˈmjuː.zɪk bɒks/",
                    "translation": "музыкальная шкатулка",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The delicate music box played a sweet tune.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "pocket watch",
                    "phonetic": "/ˈpɒk.ɪt wɒtʃ/",
                    "translation": "карманные часы",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "His grandfather gave him a golden pocket watch.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "raincoat",
                    "phonetic": "/ˈreɪn.kəʊt/",
                    "translation": "плащ / дождевик",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Put on your yellow raincoat before heading out.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "smartphone",
                    "phonetic": "/ˈsmɑːt.fəʊn/",
                    "translation": "смартфон",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Check the photo on your smartphone.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "photograph",
                    "phonetic": "/ˈfəʊ.tə.ɡrɑːf/",
                    "translation": "фотография",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The vintage photograph showed the old town.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "painting",
                    "phonetic": "/ˈpeɪn.tɪŋ/",
                    "translation": "картина",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A magnificent oil painting hung above the fireplace.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "statue",
                    "phonetic": "/ˈstætʃ.uː/",
                    "translation": "статуэтка / статуя",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A marble statue guarded the grand entrance.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "safe",
                    "phonetic": "/seɪf/",
                    "translation": "сейф",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The jewel was inside the locked safe.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "search",
                    "phonetic": "/sɜːtʃ/",
                    "translation": "поиск / искать",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The search for the blue stone begins now.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "officer",
                    "phonetic": "/ˈɒf.ɪ.sər/",
                    "translation": "офицер / полицейский",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Officer Harris called the detective agency.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "case",
                    "phonetic": "/keɪs/",
                    "translation": "дело / расследование",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "We have an important case to solve today.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "missing",
                    "phonetic": "/ˈmɪs.ɪŋ/",
                    "translation": "пропавший / отсутствующий",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The famous blue stone is missing from the room.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "expensive",
                    "phonetic": "/ɪkˈspen.sɪv/",
                    "translation": "дорогой (по цене)",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "That rare sapphire is very expensive.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "famous",
                    "phonetic": "/ˈfeɪ.məs/",
                    "translation": "знаменитый / известный",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The Midnight Sapphire is a famous jewel.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "job",
                    "phonetic": "/dʒɒb/",
                    "translation": "работа / задание",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "We have a new detective job this morning.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "office",
                    "phonetic": "/ˈɒf.ɪs/",
                    "translation": "офис / кабинет",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Leo and Mia work in the office on Elm Street.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "telephone",
                    "phonetic": "/ˈtel.ɪ.fəʊn/",
                    "translation": "телефон",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The black office telephone rings loudly.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "laptop",
                    "phonetic": "/ˈlæp.tɒp/",
                    "translation": "ноутбук",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Mia opens her silver laptop on the desk.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "wooden",
                    "phonetic": "/ˈwʊd.ən/",
                    "translation": "деревянный",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Leo sits at a big wooden desk.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "clue",
                    "phonetic": "/kluː/",
                    "translation": "зацепка / улика",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "This muddy footprint is our first clue.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "secret",
                    "phonetic": "/ˈsiː.krət/",
                    "translation": "секрет / секретный",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The thief knew the secret code to the safe.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "code",
                    "phonetic": "/kəʊd/",
                    "translation": "код / шифр",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Enter the four numbers of the code.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "stairs",
                    "phonetic": "/steəz/",
                    "translation": "лестница / ступени",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "They walked up the stairs to the second floor.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "lock",
                    "phonetic": "/lɒk/",
                    "translation": "замок / запирать",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Lord Blackwood turns the silver key in the lock.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "mud",
                    "phonetic": "/mʌd/",
                    "translation": "грязь / слякоть",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The thief left footprints in the wet mud.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "ticket",
                    "phonetic": "/ˈtɪk.ɪt/",
                    "translation": "билет",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Barnaby found a blue bus ticket in the grass.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "loud",
                    "phonetic": "/laʊd/",
                    "translation": "громкий",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "He heard a loud motorcycle near the gate.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "plastic",
                    "phonetic": "/ˈplæs.tɪk/",
                    "translation": "пластиковый / пластмасса",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Leo put the evidence in a clean plastic bag.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "size",
                    "phonetic": "/saɪz/",
                    "translation": "размер",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "These black boots are the same size as the footprint.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "deliver",
                    "phonetic": "/dɪˈlɪv.ər/",
                    "translation": "доставлять",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The courier arrived to deliver fresh food to the kitchen.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "boil",
                    "phonetic": "/bɔɪl/",
                    "translation": "кипятить / варить",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "She boiled hot water for morning tea in the pot.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "pot",
                    "phonetic": "/pɒt/",
                    "translation": "кастрюля / горшок",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Hot vegetable soup boils in a large silver pot.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "stove",
                    "phonetic": "/stəʊv/",
                    "translation": "кухонная плита",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Claire stands near the large kitchen stove.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "helmet",
                    "phonetic": "/ˈhel.mɪt/",
                    "translation": "шлем",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The motorcycle courier wore a dark protective helmet.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "bark",
                    "phonetic": "/bɑːk/",
                    "translation": "лаять",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Barnaby runs to the window and barks loudly.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "captain",
                    "phonetic": "/ˈkæp.tɪn/",
                    "translation": "капитан",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The captain of the boat is a kind man.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "asleep",
                    "phonetic": "/əˈsliːp/",
                    "translation": "спящий / уснувший",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Oliver was asleep on the sofa in the library.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "nervous",
                    "phonetic": "/ˈnɜː.vəs/",
                    "translation": "нервный / взволнованный",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Mister Sterling looks very sad and nervous.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "sorry",
                    "phonetic": "/ˈsɒr.i/",
                    "translation": "сожалеющий / «простите»",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "I am sorry, I told a lie about the garden!",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "sad",
                    "phonetic": "/sæd/",
                    "translation": "грустный / печальный",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The old man was very sad about his missing watch.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "surprised",
                    "phonetic": "/səˈpraɪzd/",
                    "translation": "удивлённый",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "He was surprised when the watch was gone.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "email",
                    "phonetic": "/ˈiː.meɪl/",
                    "translation": "электронное письмо",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "I have many emails to write on my computer.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "tail",
                    "phonetic": "/teɪl/",
                    "translation": "хвост",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Toby opens his eyes and wags his tail.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "toy",
                    "phonetic": "/tɔɪ/",
                    "translation": "игрушка",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The dog ran outside with his favourite toy ball.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "cupboard",
                    "phonetic": "/ˈkʌb.əd/",
                    "translation": "шкаф / буфет",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Look at the glass cupboard near the window.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "notebook",
                    "phonetic": "/ˈnəʊt.bʊk/",
                    "translation": "блокнот / тетрадь",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Leo has a small blue notebook in his hand.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "mistake",
                    "phonetic": "/mɪˈsteɪk/",
                    "translation": "ошибка",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "There are two big mistakes in your story.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "clever",
                    "phonetic": "/ˈklev.ər/",
                    "translation": "умный / сообразительный",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Mia is a very clever girl with round glasses.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "dirty",
                    "phonetic": "/ˈdɜː.ti/",
                    "translation": "грязный",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Your white sports shoes are not dirty.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "desk",
                    "phonetic": "/desk/",
                    "translation": "парта / рабочий стол",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A boy sits at his desk in the classroom.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "classroom",
                    "phonetic": "/ˈklɑːs.ruːm/",
                    "translation": "класс / кабинет",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The teacher walks into the classroom.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "cup",
                    "phonetic": "/kʌp/",
                    "translation": "кубок / чашка",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The Silver Cup is ready for the school game.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "sign",
                    "phonetic": "/saɪn/",
                    "translation": "табличка / знак / вывеска",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The gate had a big red sign: Field Closed Today.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "biscuit",
                    "phonetic": "/ˈbɪs.kɪt/",
                    "translation": "печенье",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Ben smiles and eats a sweet biscuit.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "birthday",
                    "phonetic": "/ˈbɜːθ.deɪ/",
                    "translation": "день рождения",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Marco made a big Pink Birthday Cake for a party.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "cake",
                    "phonetic": "/keɪk/",
                    "translation": "торт / пирожное",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A piece of chocolate cake is three pounds.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "menu",
                    "phonetic": "/ˈmen.juː/",
                    "translation": "меню",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "She put the menus on the ten tables.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "pound",
                    "phonetic": "/paʊnd/",
                    "translation": "фунт (деньги)",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "A cup of black coffee is two pounds.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "pay",
                    "phonetic": "/peɪ/",
                    "translation": "платить / оплачивать",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "People can pay with cash or pay by card.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "bank",
                    "phonetic": "/bæŋk/",
                    "translation": "банк",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The town bank is closed on Saturday.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "supermarket",
                    "phonetic": "/ˈsuː.pəˌmɑː.kɪt/",
                    "translation": "супермаркет",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "The school is opposite the big supermarket.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "opposite",
                    "phonetic": "/ˈɒp.ə.zɪt/",
                    "translation": "напротив",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "I walked across the street to the bank opposite the cafe.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "turn",
                    "phonetic": "/tɜːn/",
                    "translation": "поворачивать / повернуть",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "You turn left at the bus stop and go past the park.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            },
            {
                    "word": "soft",
                    "phonetic": "/sɒft/",
                    "translation": "мягкий / пышный",
                    "definition": "Detective & City (A1) • Story Vocabulary",
                    "heroId": "detective",
                    "example": "Marco makes the best soft bread in the town.",
                    "rating": 0,
                    "interval": 1,
                    "easeFactor": 2.5,
                    "repetitions": 0,
                    "nextReviewDate": 0,
                    "studied": false
            }
    ],
    "IT & Tech": [
        { word: "Refactor", phonetic: "/riːˈfæk.tər/", translation: "Рефакторинг", definition: "Restructuring existing computer code.", example: "We need to refactor this legacy module.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Deprecate", phonetic: "/ˈdep.rə.keɪt/", translation: "Объявить устаревшим", definition: "To mark a feature as outdated.", example: "This API endpoint is deprecated.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false },
        { word: "Idempotent", phonetic: "/ˌaɪ.dəmˈpəʊ.tənt/", translation: "Идемпотентный", definition: "Operation that produces the same result.", example: "HTTP PUT is idempotent.", rating: 0, interval: 1, easeFactor: 2.5, repetitions: 0, nextReviewDate: 0, studied: false }
    ]
};

class FlashcardEngine {
    constructor() {
        this.batchSize = 10;
        this.batchIndex = 0;
        this.maxDailyNewWords = 100;
        this.decks = this.loadDecks();
        this.currentCategory = "Valerius's Pack (A0)";
        this.currentIndex = 0;
        this.autoAdvanceBatch();
    }

    getTodayKey() {
        const d = new Date();
        return `english_pulse_new_words_${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    }

    getDailyNewWordsCount() {
        const key = this.getTodayKey();
        return parseInt(localStorage.getItem(key) || "0");
    }

    incrementDailyNewWords() {
        const key = this.getTodayKey();
        const current = this.getDailyNewWordsCount();
        localStorage.setItem(key, current + 1);
    }

    getCardByWord(wordStr, heroId = null) {
        if (!wordStr || !this.decks) return null;
        const lower = wordStr.toLowerCase().trim();
        for (const cat of Object.keys(this.decks)) {
            if (cat === "🧠 Due for SRS Review") continue;
            const deck = this.decks[cat];
            if (Array.isArray(deck)) {
                const found = deck.find(c => c && c.word && c.word.toLowerCase().trim() === lower && (!heroId || !c.heroId || c.heroId === heroId));
                if (found) return found;
            }
        }
        return null;
    }

    getWordMemoryStats(wordStr, heroId = null) {
        const card = this.getCardByWord(wordStr, heroId);
        if (!card || !card.studied) {
            return {
                score: 0,
                studied: false,
                interval: 0,
                repetitions: 0,
                easeFactor: 2.5,
                inLongTermMemory: false,
                label: "Не изучено (0 дн)"
            };
        }

        const interval = typeof card.interval === 'number' ? card.interval : 1;
        const repetitions = typeof card.repetitions === 'number' ? card.repetitions : 0;
        const easeFactor = typeof card.easeFactor === 'number' ? card.easeFactor : 2.5;
        const inLongTermMemory = interval >= 21;
        const score = interval + (repetitions * 0.1) + Math.max(0, (easeFactor - 1.3) * 0.01);

        return {
            score,
            studied: true,
            interval,
            repetitions,
            easeFactor,
            inLongTermMemory,
            label: inLongTermMemory ? `Долгосрочная (${interval} дн)` : `Интервал: ${interval} дн`
        };
    }

    computeDueCards(targetDecks = null) {
        const sourceDecks = targetDecks || this.decks || {};
        const dueCards = [];
        const now = Date.now();
        Object.keys(sourceDecks).forEach(cat => {
            if (cat === "🧠 Due for SRS Review") return;
            (sourceDecks[cat] || []).forEach(card => {
                if (card.studied && card.nextReviewDate && card.nextReviewDate <= now) {
                    if (!card.heroId && typeof HEROES_DATA !== 'undefined') {
                        const hero = HEROES_DATA.find(h => cat.includes(h.name));
                        if (hero) card.heroId = hero.id;
                    }
                    dueCards.push(card);
                }
            });
        });
        return dueCards;
    }

    loadDecks() {
        const decks = { ...GENERAL_DECKS };
        let localHeroes = [];
        if (typeof rpgEngine !== 'undefined' && rpgEngine.heroes && rpgEngine.heroes.length > 0) {
            localHeroes = rpgEngine.heroes;
        } else if (typeof HEROES_DATA !== 'undefined' && Array.isArray(HEROES_DATA)) {
            localHeroes = HEROES_DATA;
            const savedRPG = localStorage.getItem("rpg_heroes_10_v9");
            if (savedRPG) {
                try { localHeroes = JSON.parse(savedRPG); } catch(e){}
            }
        }

        localHeroes.forEach(h => {
            if (!h) return;
            const cefrLabel = h.cefrLevel ? h.cefrLevel.split(' ')[0] : 'A0';
            const deckName = `${h.name}'s Pack (${cefrLabel})`;

            if (this.decks && this.decks[deckName]) {
                decks[deckName] = this.decks[deckName];
            } else {
                decks[deckName] = (h.words || []).map(w => {
                    let wWord = Array.isArray(w) ? w[0] : (w.word || "");
                    const wPhonetic = Array.isArray(w) ? w[1] : (w.phonetic || "");
                    let wTranslation = Array.isArray(w) ? w[2] : (w.translation || "");
                    const wExample = Array.isArray(w) ? w[3] : (w.example || "");

                    if (/^(adj|noun|verb|expression|prep|pron|adv)$/i.test(wWord.trim())) {
                        const match = wTranslation.match(/\(([a-zA-Z\s]+)\)/);
                        if (match && match[1]) {
                            wWord = match[1].trim();
                            wTranslation = wTranslation.replace(/\s*\([a-zA-Z\s]+\)/, '').trim();
                        }
                    }
                    return {
                        word: wWord,
                        phonetic: wPhonetic,
                        translation: wTranslation,
                        definition: `Hero Pack: ${h.name} (${h.cefrLevel || 'A0'})`,
                        example: wExample,
                        heroId: h.id,
                        rating: 0,
                        interval: 1,
                        easeFactor: 2.5,
                        repetitions: 0,
                        nextReviewDate: 0,
                        studied: false,
                        learningInSession: false
                    };
                }).filter(c => c.word && c.word.length > 0);
            }
        });

        const savedSrsRaw = localStorage.getItem("english_pulse_decks_srs_v10") || localStorage.getItem("english_rpg_flashcard_decks");
        if (savedSrsRaw) {
            try {
                const parsedSaved = JSON.parse(savedSrsRaw);
                Object.keys(parsedSaved).forEach(cat => {
                    if (decks[cat]) {
                        const localDeck = decks[cat];
                        parsedSaved[cat].forEach(savedCard => {
                            if (!savedCard || !savedCard.word) return;
                            const target = localDeck.find(c => c && c.word && (
                                c.word.toLowerCase() === savedCard.word.toLowerCase() ||
                                (c.word === 'police' && savedCard.word === 'police / policeman') ||
                                (c.word === 'police / policeman' && savedCard.word === 'police')
                            ));
                            if (target) {
                                target.studied = savedCard.studied || target.studied;
                                target.repetitions = typeof savedCard.repetitions === 'number' ? savedCard.repetitions : target.repetitions;
                                target.interval = typeof savedCard.interval === 'number' ? savedCard.interval : target.interval;
                                target.easeFactor = typeof savedCard.easeFactor === 'number' ? savedCard.easeFactor : target.easeFactor;
                                target.nextReviewDate = savedCard.nextReviewDate || target.nextReviewDate;
                                target.learningInSession = savedCard.learningInSession || false;
                                if (savedCard.rating) target.rating = savedCard.rating;
                                if (savedCard.heroId) target.heroId = savedCard.heroId;
                                else if (cat.includes("Detective")) target.heroId = "detective";
                            } else {
                                if (cat.includes("Detective") && !savedCard.heroId) savedCard.heroId = "detective";
                                localDeck.push(savedCard);
                            }
                        });
                    } else if (Array.isArray(parsedSaved[cat]) && cat !== "🧠 Due for SRS Review") {
                        decks[cat] = parsedSaved[cat];
                    }
                });
            } catch(e) {}
        }

        // Auto-sync all mastered detective study words into deck
        try {
            const rawNws = localStorage.getItem("english_pulse_new_words_study_v1");
            if (rawNws && typeof NEW_WORDS_DATABASE !== 'undefined' && Array.isArray(NEW_WORDS_DATABASE)) {
                const parsedNws = JSON.parse(rawNws);
                const masteredIds = new Set(parsedNws.masteredWordIds || []);
                if (Array.isArray(parsedNws.completedBatches)) {
                    parsedNws.completedBatches.forEach(bIdx => {
                        const start = bIdx * 5;
                        const end = start + 5;
                        NEW_WORDS_DATABASE.slice(start, end).forEach(w => masteredIds.add(w.id));
                    });
                }
                const deckName = "Detective & City (A1)";
                if (!decks[deckName]) decks[deckName] = [];
                const deck = decks[deckName];

                // Merge and cleanup legacy "🔍 Новые слова (Детектив)" if present
                if (decks["🔍 Новые слова (Детектив)"]) {
                    const legacy = decks["🔍 Новые слова (Детектив)"];
                    legacy.forEach(lCard => {
                        const target = deck.find(c => c.word && (
                            c.word.toLowerCase() === lCard.word.toLowerCase() ||
                            (c.word === 'police' && lCard.word === 'police / policeman') ||
                            (c.word === 'police / policeman' && lCard.word === 'police')
                        ));
                        if (target) {
                            target.studied = lCard.studied || target.studied;
                            target.repetitions = Math.max(target.repetitions || 0, lCard.repetitions || 0);
                            target.interval = Math.max(target.interval || 1, lCard.interval || 1);
                            target.easeFactor = lCard.easeFactor || target.easeFactor;
                            target.nextReviewDate = lCard.nextReviewDate || target.nextReviewDate;
                            target.rating = lCard.rating || target.rating;
                            target.heroId = "detective";
                        } else {
                            lCard.heroId = "detective";
                            deck.push(lCard);
                        }
                    });
                    delete decks["🔍 Новые слова (Детектив)"];
                }

                NEW_WORDS_DATABASE.forEach(w => {
                    if (masteredIds.has(w.id)) {
                        const existing = deck.find(c => c.word && (
                            c.word.toLowerCase() === w.word.toLowerCase() ||
                            (c.word === 'police' && w.word === 'police / policeman') ||
                            (c.word === 'police / policeman' && w.word === 'police')
                        ));
                        if (!existing) {
                            deck.push({
                                word: w.word,
                                phonetic: w.phonetic,
                                translation: w.translation,
                                definition: "Новые слова • Детективные расследования A1",
                                example: w.exampleEn,
                                heroId: "detective",
                                rating: 3,
                                interval: 1,
                                easeFactor: 2.5,
                                repetitions: 1,
                                nextReviewDate: Date.now() + 24 * 3600 * 1000,
                                studied: true,
                                learningInSession: false
                            });
                        } else {
                            existing.studied = true;
                            existing.heroId = "detective";
                            if (!existing.repetitions || existing.repetitions === 0) {
                                existing.repetitions = 1;
                            }
                            if (!existing.interval || existing.interval === 0) {
                                existing.interval = 1;
                            }
                            if (!existing.nextReviewDate || existing.nextReviewDate === 0) {
                                existing.nextReviewDate = Date.now() + 24 * 3600 * 1000;
                            }
                        }
                    }
                });
            }
        } catch(e) {}

        if (this.currentCategory === "🧠 Due for SRS Review" && this.decks && Array.isArray(this.decks["🧠 Due for SRS Review"]) && this.decks["🧠 Due for SRS Review"].length > 0) {
            decks["🧠 Due for SRS Review"] = this.decks["🧠 Due for SRS Review"];
        } else {
            decks["🧠 Due for SRS Review"] = this.computeDueCards(decks);
        }
        return decks;
    }

    refreshDueCards() {
        if (!this.decks) return;
        this.decks["🧠 Due for SRS Review"] = this.computeDueCards(this.decks);
    }

    saveDecks() {
        const serialized = JSON.stringify(this.decks);
        localStorage.setItem("english_pulse_decks_srs_v10", serialized);
        localStorage.setItem("english_rpg_flashcard_decks", serialized);
    }

    // Due cards count: returns active SRS queue length if in SRS mode, otherwise computes remaining due cards
    getDueCardsCount() {
        if (this.currentCategory === "🧠 Due for SRS Review" && this.decks && Array.isArray(this.decks["🧠 Due for SRS Review"])) {
            return this.decks["🧠 Due for SRS Review"].length;
        }
        return this.computeDueCards(this.decks).length;
    }

    // Automatically find the first uncompleted batch for the current deck
    autoAdvanceBatch() {
        if (this.currentCategory === "🧠 Due for SRS Review") {
            this.batchIndex = 0;
            return;
        }

        const allCards = this.decks[this.currentCategory] || [];
        if (allCards.length === 0) {
            this.batchIndex = 0;
            return;
        }

        const now = Date.now();
        const totalBatches = Math.ceil(allCards.length / this.batchSize);

        for (let b = 0; b < totalBatches; b++) {
            const start = b * this.batchSize;
            const batchCards = allCards.slice(start, start + this.batchSize);
            const activeCards = batchCards.filter(c => !c.studied || c.learningInSession || (c.nextReviewDate && c.nextReviewDate <= now));
            
            if (activeCards.length > 0) {
                this.batchIndex = b;
                return;
            }
        }

        this.batchIndex = Math.max(0, totalBatches - 1);
    }

    // Filter cards in current batch that still need study today (unstudied, learningInSession, or due for review)
    getCategoryCards() {
        const allCards = this.decks[this.currentCategory] || Object.values(this.decks)[0] || [];
        if (this.currentCategory === "🧠 Due for SRS Review") return allCards;

        const now = Date.now();
        const start = this.batchIndex * this.batchSize;
        const batch = allCards.slice(start, start + this.batchSize);

        // Active batch cards: cards NOT yet studied, OR cards learningInSession, OR cards due <= now!
        const activeBatchCards = batch.filter(c => !c.studied || c.learningInSession || (c.nextReviewDate && c.nextReviewDate <= now));
        return activeBatchCards;
    }

    getCurrentCard() {
        const activeCards = this.getCategoryCards();
        if (activeCards.length === 0) return null;
        return activeCards[this.currentIndex % activeCards.length];
    }

    nextCard() {
        const activeCards = this.getCategoryCards();
        if (activeCards.length === 0) {
            this.currentIndex = 0;
            return;
        }
        this.currentIndex = (this.currentIndex + 1) % activeCards.length;
    }

    getTotalBatches() {
        if (this.currentCategory === "🧠 Due for SRS Review") return 1;
        const allCards = this.decks[this.currentCategory] || [];
        return Math.max(1, Math.ceil(allCards.length / this.batchSize));
    }

    setBatch(index) {
        const total = this.getTotalBatches();
        this.batchIndex = Math.max(0, Math.min(index, total - 1));
        this.currentIndex = 0;
    }

    prevBatch() {
        const total = this.getTotalBatches();
        this.batchIndex = (this.batchIndex - 1 + total) % total;
        this.currentIndex = 0;
    }

    nextBatch() {
        const total = this.getTotalBatches();
        this.batchIndex = (this.batchIndex + 1) % total;
        this.currentIndex = 0;
    }

    resetCurrentBatch() {
        if (this.currentCategory === "🧠 Due for SRS Review") return;
        const allCards = this.decks[this.currentCategory] || [];
        const start = this.batchIndex * this.batchSize;
        const batch = allCards.slice(start, start + this.batchSize);
        batch.forEach(c => {
            c.learningInSession = true;
        });
        this.currentIndex = 0;
    }

    rateCard(grade) {
        const card = this.getCurrentCard();
        if (!card) return { success: true };

        const isSrsMode = this.currentCategory === "🧠 Due for SRS Review";
        const isNewWord = !card.studied;

        // CHECK LIMIT 1: Must clear SRS review queue before rating new cards!
        if (isNewWord && !isSrsMode && this.getDueCardsCount() > 0) {
            return {
                success: false,
                reason: "review_required",
                message: `🔒 Clear Your Due Reviews First! You have ${this.getDueCardsCount()} word(s) waiting in 🧠 Due for SRS Review.`
            };
        }

        // CHECK LIMIT 2: Daily new words limit (100 words/day)!
        if (isNewWord && !isSrsMode && this.getDailyNewWordsCount() >= this.maxDailyNewWords) {
            return {
                success: false,
                reason: "daily_limit_reached",
                message: `🛑 Daily New Words Limit Reached (100 / 100)! Finish your SRS reviews today or return tomorrow for new words.`
            };
        }

        if (isNewWord) {
            card.studied = true;
            this.incrementDailyNewWords();
        }

        if (!card.easeFactor) card.easeFactor = 2.5;
        if (!card.interval) card.interval = 1;
        if (!card.repetitions) card.repetitions = 0;

        const oneDayMs = 24 * 60 * 60 * 1000;

        switch(grade) {
            case 'again':
                card.repetitions = 0;
                card.interval = 1;
                card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
                card.nextReviewDate = Date.now();
                card.learningInSession = true; // Mark as learning in session
                if (isSrsMode) {
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) {
                            dueList.splice(idx, 1);
                            dueList.push(card); // Re-queue failed card to end of SRS review queue!
                        }
                    }
                } else {
                    // In Hero Batch Mode: advance index so current card cycles to end of batch
                    this.nextCard();
                }
                break;
            case 'hard':
                card.repetitions = Math.max(1, card.repetitions);
                card.interval = Math.max(card.interval + 1, Math.round(card.interval * 1.2));
                card.easeFactor = Math.max(1.3, card.easeFactor - 0.15);
                card.learningInSession = false;
                card.nextReviewDate = Date.now() + (card.interval * oneDayMs);
                if (isSrsMode) {
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) dueList.splice(idx, 1);
                    }
                }
                break;
            case 'good':
                card.repetitions += 1;
                if (card.repetitions === 1) card.interval = 1;
                else if (card.repetitions === 2) card.interval = 6;
                else card.interval = Math.max(card.interval + 2, Math.round(card.interval * card.easeFactor));
                card.easeFactor = Math.max(1.3, card.easeFactor);
                card.learningInSession = false;
                card.nextReviewDate = Date.now() + (card.interval * oneDayMs);
                if (isSrsMode) {
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) dueList.splice(idx, 1);
                    }
                }
                break;
            case 'easy':
                card.repetitions += 1;
                card.easeFactor += 0.15;
                if (card.repetitions === 1) card.interval = 4;
                else if (card.repetitions === 2) card.interval = 10;
                else {
                    const baseGood = Math.max(card.interval + 2, Math.round(card.interval * card.easeFactor));
                    card.interval = Math.max(baseGood + 2, Math.round(card.interval * (card.easeFactor + 0.15) * 1.3));
                }
                card.learningInSession = false;
                card.nextReviewDate = Date.now() + (card.interval * oneDayMs);
                if (isSrsMode) {
                    const dueList = this.decks["🧠 Due for SRS Review"];
                    if (dueList && Array.isArray(dueList)) {
                        const idx = dueList.indexOf(card);
                        if (idx !== -1) dueList.splice(idx, 1);
                    }
                }
                break;
        }

        this.saveDecks();
        if (!isSrsMode) {
            const activeCards = this.getCategoryCards();
            if (activeCards.length === 0) {
                this.currentIndex = 0;
            } else if (grade === 'again') {
                this.currentIndex = (this.currentIndex + 1) % activeCards.length;
            } else {
                this.currentIndex = this.currentIndex % activeCards.length;
            }
        } else {
            const dueList = this.decks["🧠 Due for SRS Review"] || [];
            if (dueList.length === 0) {
                this.currentIndex = 0;
            } else if (grade === 'again') {
                this.currentIndex = 0;
            } else {
                this.currentIndex = this.currentIndex % dueList.length;
            }
        }
        return { success: true };
    }

    speak(text, onStart = null, onEnd = null, heroVoiceConfig = null) {
        if (window.voiceService) {
            window.voiceService.speak(text, onStart, onEnd, heroVoiceConfig);
            return;
        }
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.9;
            if (onStart) utterance.onstart = onStart;
            if (onEnd) {
                utterance.onend = onEnd;
                utterance.onerror = onEnd;
            }
            window.speechSynthesis.speak(utterance);
        }
    }

    getSRSForecast(daysHorizon = 14, targetCategory = "all") {
        const now = new Date();
        const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
        const oneDayMs = 24 * 60 * 60 * 1000;

        const forecastDays = [];
        for (let i = 0; i < daysHorizon; i++) {
            const dateObj = new Date(startOfToday + (i * oneDayMs));
            const isToday = i === 0;
            const isTomorrow = i === 1;
            const dayName = isToday ? "Сегодня" : (isTomorrow ? "Завтра" : dateObj.toLocaleDateString('ru-RU', { weekday: 'short' }));
            
            forecastDays.push({
                dayOffset: i,
                date: dateObj,
                dateKey: `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`,
                dayName: dayName,
                formattedDate: dateObj.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' }),
                cards: [],
                count: 0
            });
        }

        let totalStudied = 0;
        let dueNowCount = 0;
        let futureCount = 0;
        let masteredCount = 0; // interval >= 21 days
        let dueNext7Days = 0;

        const sourceDecks = this.decks || {};
        const categories = (targetCategory === "all" || !targetCategory)
            ? Object.keys(sourceDecks).filter(cat => cat !== "🧠 Due for SRS Review")
            : [targetCategory];

        const processedCardKeys = new Set();

        categories.forEach(cat => {
            (sourceDecks[cat] || []).forEach(card => {
                if (!card.studied) return;
                
                const uniqueKey = `${card.heroId || cat}_${card.word}`;
                if (processedCardKeys.has(uniqueKey)) return;
                processedCardKeys.add(uniqueKey);

                totalStudied++;
                if ((card.interval || 1) >= 21) masteredCount++;

                const nextReview = card.nextReviewDate || 0;
                
                if (nextReview <= Date.now()) {
                    dueNowCount++;
                    forecastDays[0].cards.push({ ...card, deckName: cat, isOverdue: nextReview < startOfToday });
                    forecastDays[0].count++;
                    dueNext7Days++;
                } else {
                    const diffMs = nextReview - startOfToday;
                    const dayIdx = Math.floor(diffMs / oneDayMs);

                    if (dayIdx < 7) dueNext7Days++;

                    if (dayIdx >= 0 && dayIdx < daysHorizon) {
                        forecastDays[dayIdx].cards.push({ ...card, deckName: cat, isOverdue: false });
                        forecastDays[dayIdx].count++;
                        futureCount++;
                    } else if (dayIdx >= daysHorizon) {
                        futureCount++;
                    }
                }
            });
        });

        const maxCountInDay = Math.max(...forecastDays.map(d => d.count), 1);

        return {
            daysHorizon,
            targetCategory,
            startOfToday,
            totalStudied,
            dueNowCount,
            dueTomorrowCount: forecastDays[1] ? forecastDays[1].count : 0,
            dueNext7Days,
            futureCount,
            masteredCount,
            maxCountInDay,
            days: forecastDays
        };
    }
}
