/* 10-Hero CEFR A0 -> A1 Progression & RPG Engine with Strict CEFR Tier Leveling Gating */

// Official Oxford / Cambridge CEFR A1 Core Vocabulary (50 Balanced Words per Hero = 500 Total Essential Words)
function generateHeroWords(heroId) {
    const wordLists = {
        valerius: [
            // Greetings, Identity, Family & Pronouns (A0 Starter)
            ["Hello", "/həˈləʊ/", "Привет", "Hello! My name is Valerius."],
            ["Goodbye", "/ɡʊdˈbaɪ/", "До свидания", "Goodbye, see you tomorrow."],
            ["Friend", "/frend/", "Друг", "You are a good friend."],
            ["Name", "/neɪm/", "Имя", "What is your name?"],
            ["I", "/aɪ/", "Я", "I am ready for battle."],
            ["You", "/juː/", "Ты / Вы", "You are a brave warrior."],
            ["He", "/hiː/", "Он", "He is a knight."],
            ["She", "/ʃiː/", "Она", "She is very smart."],
            ["It", "/ɪt/", "Оно / Это", "It is important."],
            ["We", "/wiː/", "Мы", "We stand together."],
            ["They", "/ðeɪ/", "Они", "They are strong."],
            ["My", "/maɪ/", "Мой", "This is my shield."],
            ["Your", "/jɔːr/", "Твой", "Is this your book?"],
            ["His", "/hɪz/", "Его", "His sword is sharp."],
            ["Her", "/hɜːr/", "Её", "Her name is Astraea."],
            ["Our", "/aʊər/", "Наш", "Welcome to our city."],
            ["Their", "/ðeər/", "Их", "Their squad is ready."],
            ["Family", "/ˈfæm.əl.i/", "Семья", "I love my family."],
            ["Father", "/ˈfɑː.ðər/", "Отец", "My father is wise."],
            ["Mother", "/ˈmʌð.ər/", "Мать", "My mother is kind."],
            ["Brother", "/ˈbrʌð.ər/", "Брат", "He is my brother."],
            ["Sister", "/ˈsɪs.tər/", "Сестра", "She is my sister."],
            ["Son", "/sʌn/", "Сын", "A brave son."],
            ["Daughter", "/ˈdɔː.tər/", "Дочь", "A smart daughter."],
            ["Man", "/mæn/", "Мужчина", "A strong man."],
            ["Woman", "/ˈwʊm.ən/", "Женщина", "A noble woman."],
            ["Boy", "/bɔɪ/", "Мальчик", "A young boy."],
            ["Girl", "/ɡɜːl/", "Девочка", "A happy girl."],
            ["Child", "/tʃaɪld/", "Ребёнок", "A clever child."],
            ["People", "/ˈpiː.pəl/", "Люди", "Good people."],
            ["Good", "/ɡʊd/", "Хороший", "Have a good day."],
            ["Fine", "/faɪn/", "В порядке", "I am fine, thank you."],
            ["Yes", "/jes/", "Да", "Yes, I agree."],
            ["No", "/nəʊ/", "Нет", "No, I am not tired."],
            ["Please", "/pliːz/", "Пожалуйста", "Help me, please."],
            ["Thank you", "/θæŋk juː/", "Спасибо", "Thank you very much."],
            ["Welcome", "/ˈwel.kəm/", "Добро пожаловать", "Welcome home!"],
            ["Happy", "/ˈhæp.i/", "Счастливый", "I am very happy."],
            ["Brave", "/breɪv/", "Храбрый", "A brave hero."],
            ["Strong", "/strɒŋ/", "Сильный", "Stay strong."],
            ["Ready", "/ˈred.i/", "Готовый", "Are you ready?"],
            ["Knight", "/naɪt/", "Рыцарь", "Valerius is a knight."],
            ["Shield", "/ʃiːld/", "Щит", "Hold the shield."],
            ["Sword", "/sɔːd/", "Меч", "Draw your sword."],
            ["King", "/kɪŋ/", "Король", "Long live the king!"],
            ["Queen", "/kwiːn/", "Королева", "The queen is wise."],
            ["Leader", "/ˈliː.dər/", "Лидер", "A great leader."],
            ["Honor", "/ˈɒn.ər/", "Честь", "Protect your honor."],
            ["Truth", "/truːθ/", "Правда", "Tell the truth."],
            ["Peace", "/piːs/", "Мир", "We want peace."]
        ],
        astraea: [
            // Daily Actions, Food & Home (A0 Starter)
            ["Have", "/hæv/", "Иметь", "I have a big goal."],
            ["Want", "/wɒnt/", "Хотеть", "I want to help you."],
            ["Like", "/laɪk/", "Нравиться", "I like English."],
            ["Need", "/niːd/", "Нуждаться", "I need water."],
            ["Eat", "/iːt/", "Есть / кушать", "Let's eat lunch."],
            ["Drink", "/drɪŋk/", "Пить", "Drink clean water."],
            ["Sleep", "/sliːp/", "Спать", "Sleep eight hours."],
            ["Walk", "/wɔːk/", "Ходить пешком", "I walk every day."],
            ["Run", "/rʌn/", "Бегать", "Run to the park."],
            ["See", "/siː/", "Видеть", "I see a bird."],
            ["Hear", "/hɪər/", "Слышать", "Can you hear me?"],
            ["Listen", "/ˈlɪs.ən/", "Слушать", "Listen to music."],
            ["Read", "/riːd/", "Читать", "Read a good book."],
            ["Write", "/raɪt/", "Писать", "Write your name."],
            ["Speak", "/spiːk/", "Говорить", "Speak English."],
            ["Learn", "/lɜːn/", "Учиться", "Learn new words."],
            ["Help", "/help/", "Помогать", "Help your friends."],
            ["Love", "/lʌv/", "Любить", "I love my family."],
            ["Give", "/ɡɪv/", "Давать", "Give me a cup."],
            ["Take", "/teɪk/", "Брать", "Take an apple."],
            ["Make", "/meɪk/", "Делать / готовить", "Make coffee."],
            ["Do", "/duː/", "Делать", "Do your work."],
            ["House", "/haʊs/", "Дом", "A big house."],
            ["Home", "/həʊm/", "Дом (свой)", "Welcome home."],
            ["Room", "/ruːm/", "Комната", "A clean room."],
            ["Water", "/ˈwɔː.tər/", "Вода", "Glass of water."],
            ["Bread", "/bred/", "Хлеб", "Fresh bread."],
            ["Food", "/fuːd/", "Еда", "Good food."],
            ["Apple", "/ˈæp.əl/", "Яблоко", "Red apple."],
            ["Milk", "/mɪlk/", "Молоко", "Cold milk."],
            ["Tea", "/tiː/", "Чай", "Hot tea."],
            ["Coffee", "/ˈkɒf.i/", "Кофе", "Morning coffee."],
            ["Fruit", "/fruːt/", "Фрукт", "Sweet fruit."],
            ["Meat", "/miːt/", "Мясо", "Cooked meat."],
            ["Fish", "/fɪʃ/", "Рыба", "Fresh fish."],
            ["Egg", "/eɡ/", "Яйцо", "Boiled egg."],
            ["Rice", "/raɪs/", "Рис", "White rice."],
            ["Soup", "/suːp/", "Суп", "Hot soup."],
            ["Open", "/ˈəʊ.pən/", "Открывать", "Open the door."],
            ["Close", "/kləʊz/", "Закрывать", "Close the window."],
            ["Start", "/stɑːt/", "Начинать", "Start today."],
            ["Stop", "/stɒp/", "Останавливаться", "Stop here."],
            ["Cook", "/kʊk/", "Готовить", "Cook dinner."],
            ["Wash", "/wɒʃ/", "Мыть", "Wash hands."],
            ["Clean", "/kliːn/", "Убирать", "Clean the room."],
            ["Rest", "/rest/", "Отдыхать", "Rest after work."],
            ["Smile", "/smaɪl/", "Улыбаться", "A bright smile."],
            ["Heal", "/hiːl/", "Исцелять", "Heal Astraea."],
            ["Care", "/keər/", "Заботиться", "Care for friends."],
            ["Light", "/laɪt/", "Свет", "Astraea brings light."]
        ],
        ignis: [
            ["This", "/ðɪs/", "Это / Этот", "This is a book."],
            ["That", "/ðæt/", "То / Тот", "That is my car."],
            ["These", "/ðiːz/", "Эти", "These are red shoes."],
            ["Those", "/ðəʊz/", "Те", "Those are high trees."],
            ["Book", "/bʊk/", "Книга", "An English book."],
            ["Pen", "/pen/", "Ручка", "Write with a pen."],
            ["Pencil", "/ˈpen.səl/", "Карандаш", "A red pencil."],
            ["Paper", "/ˈpeɪ.pər/", "Бумага", "A sheet of paper."],
            ["Table", "/ˈteɪ.bəl/", "Стол", "On the table."],
            ["Chair", "/tʃeər/", "Стул", "Sit on the chair."],
            ["Door", "/dɔːr/", "Дверь", "Open the door."],
            ["Window", "/ˈwɪn.dəʊ/", "Окно", "Look through window."],
            ["Bag", "/bæɡ/", "Сумка", "A heavy bag."],
            ["Box", "/bɒks/", "Коробка", "A small box."],
            ["Key", "/kiː/", "Ключ", "A gold key."],
            ["Phone", "/fəʊn/", "Телефон", "My smart phone."],
            ["Computer", "/kəmˈpjuː.tər/", "Компьютер", "A new computer."],
            ["Clock", "/klɒk/", "Часы", "A wall clock."],
            ["Watch", "/wɒtʃ/", "Наручные часы", "My gold watch."],
            ["Lamp", "/læmp/", "Лампа", "Turn on the lamp."],
            ["Bed", "/bed/", "Кровать", "A soft bed."],
            ["Shirt", "/ʃɜːt/", "Рубашка", "A white shirt."],
            ["Pants", "/pænts/", "Брюки", "Black pants."],
            ["Coat", "/kəʊt/", "Пальто", "A warm coat."],
            ["Hat", "/hæt/", "Шляпа", "A brown hat."],
            ["Shoe", "/ʃuː/", "Туфля / Обувь", "New shoes."],
            ["Red", "/red/", "Красный", "Red flame."],
            ["Blue", "/bluː/", "Синий", "Blue sky."],
            ["Green", "/ɡriːn/", "Зелёный", "Green grass."],
            ["Yellow", "/ˈjel.əʊ/", "Жёлтый", "Yellow sun."],
            ["Black", "/blæk/", "Чёрный", "Black coat."],
            ["White", "/waɪt/", "Белый", "White snow."],
            ["Brown", "/braʊn/", "Коричневый", "Brown table."],
            ["Orange", "/ˈɒr.ɪndʒ/", "Оранжевый", "Orange fruit."],
            ["Color", "/ˈkʌl.ər/", "Цвет", "What is your favorite color?"],
            ["Fire", "/faɪər/", "Огонь", "Hot fire."],
            ["Flame", "/fleɪm/", "Пламя", "Ignis fire flame."],
            ["Spell", "/spel/", "Заклинание", "Cast a spell."],
            ["Wand", "/wɒnd/", "Палочка", "Magic wand."],
            ["Staff", "/stɑːf/", "Посох", "Wizard staff."],
            ["Robe", "/rəʊb/", "Мантия", "Red robe."],
            ["Ring", "/rɪŋ/", "Кольцо", "Gold ring."],
            ["Gem", "/dʒem/", "Камень", "Ruby gem."],
            ["Cup", "/kʌp/", "Чашка", "Cup of tea."],
            ["Glass", "/ɡlɑːs/", "Стакан", "Glass of water."],
            ["Plate", "/pleɪt/", "Тарелка", "A white plate."],
            ["Knife", "/naɪf/", "Нож", "A sharp knife."],
            ["Map", "/mæp/", "Карта", "World map."],
            ["Item", "/ˈaɪ.təm/", "Предмет", "Use item."],
            ["Object", "/ˈɒb.dʒɪkt/", "Объект", "Magic object."]
        ],
        frostina: [
            // Time, Weather & Daily Routines (A0 Intermediate)
            ["Day", "/deɪ/", "День", "Have a nice day."],
            ["Night", "/naɪt/", "Ночь", "Good night."],
            ["Morning", "/ˈmɔː.nɪŋ/", "Утро", "Good morning."],
            ["Evening", "/ˈiːv.nɪŋ/", "Вечер", "Good evening."],
            ["Today", "/təˈdeɪ/", "Сегодня", "Today is sunny."],
            ["Tomorrow", "/təˈmɒr.əʊ/", "Завтра", "Tomorrow is Monday."],
            ["Yesterday", "/ˈjes.tə.deɪ/", "Вчера", "Yesterday was cold."],
            ["Now", "/naʊ/", "Сейчас", "Do it now."],
            ["Later", "/ˈleɪ.tər/", "Позже", "See you later."],
            ["Soon", "/suːn/", "Скоро", "See you soon."],
            ["Always", "/ˈɔːl.weɪz/", "Всегда", "I always study."],
            ["Usually", "/ˈjuː.ʒu.ə.li/", "Обычно", "I usually drink tea."],
            ["Sometimes", "/ˈsʌm.taɪmz/", "Иногда", "Sometimes it rains."],
            ["Never", "/ˈnev.ər/", "Никогда", "Never give up."],
            ["Often", "/ˈɒf.ən/", "Часто", "I often read."],
            ["Hour", "/aʊər/", "Час", "One hour."],
            ["Minute", "/ˈmɪn.ɪt/", "Минута", "Wait five minutes."],
            ["Week", "/wiːk/", "Неделя", "This week."],
            ["Month", "/mʌnθ/", "Месяц", "Next month."],
            ["Year", "/jɪər/", "Год", "New year."],
            ["Winter", "/ˈwɪn.tər/", "Зима", "Cold winter."],
            ["Summer", "/ˈsʌm.ər/", "Лето", "Hot summer."],
            ["Spring", "/sprɪŋ/", "Весна", "Warm spring."],
            ["Autumn", "/ˈɔː.təm/", "Осень", "Gold autumn."],
            ["Weather", "/ˈweð.ər/", "Погода", "Nice weather."],
            ["Cold", "/kəʊld/", "Холодный", "It is cold."],
            ["Hot", "/hɒt/", "Горячий", "Hot sun."],
            ["Warm", "/wɔːm/", "Тёплый", "Warm water."],
            ["Cool", "/kuːl/", "Прохладный", "Cool breeze."],
            ["Sun", "/sʌn/", "Солнце", "Bright sun."],
            ["Rain", "/reɪn/", "Дождь", "Heavy rain."],
            ["Snow", "/snəʊ/", "Снег", "White snow."],
            ["Ice", "/aɪs/", "Лёд", "Frostina ice."],
            ["Wind", "/wɪnd/", "Ветер", "Cold wind."],
            ["Cloud", "/klaʊd/", "Облако", "White cloud."],
            ["Sky", "/skaɪ/", "Небо", "Blue sky."],
            ["Early", "/ˈɜː.li/", "Рано", "Wake up early."],
            ["Late", "/leɪt/", "Поздно", "Don't be late."],
            ["Every", "/ˈev.ri/", "Каждый", "Every day."],
            ["Time", "/taɪm/", "Время", "What time is it?"],
            ["Clock", "/klɒk/", "Часы", "Look at the clock."],
            ["Calendar", "/ˈkæl.ən.dər/", "Календарь", "Check calendar."],
            ["Monday", "/ˈmʌn.deɪ/", "Понедельник", "On Monday."],
            ["Friday", "/ˈfraɪ.deɪ/", "Пятница", "On Friday."],
            ["Sunday", "/ˈsʌn.deɪ/", "Воскресенье", "On Sunday."],
            ["Freeze", "/friːz/", "Замораживать", "Deep freeze."],
            ["Frost", "/frɒst/", "Мороз", "Silver frost."],
            ["Storm", "/stɔːm/", "Шторм", "Ice storm."],
            ["Season", "/ˈsiː.zən/", "Сезон", "Cold season."],
            ["Routine", "/ruːˈtiːn/", "Рутина", "Daily routine."]
        ],
        zephyr: [
            // Places, Prepositions & Questions (A0 Intermediate)
            ["Where", "/weər/", "Где / Куда", "Where are you?"],
            ["When", "/wen/", "Когда", "When do we start?"],
            ["Why", "/waɪ/", "Почему", "Why are you here?"],
            ["How", "/haʊ/", "Как", "How are you?"],
            ["Who", "/huː/", "Кто", "Who is he?"],
            ["What", "/wɒt/", "Что / Какой", "What is your name?"],
            ["Which", "/wɪtʃ/", "Который", "Which one do you like?"],
            ["In", "/ɪn/", "В", "In the house."],
            ["On", "/ɒn/", "На", "On the table."],
            ["At", "/æt/", "В / Около", "At home."],
            ["Under", "/ˈʌn.dər/", "Под", "Under the tree."],
            ["Next to", "/nekst tuː/", "Рядом с", "Next to the door."],
            ["Behind", "/bɪˈhaɪnd/", "За / Сзади", "Behind the wall."],
            ["In front of", "/ɪn frʌnt ɒv/", "Перед", "In front of me."],
            ["Near", "/nɪər/", "Около", "Near the park."],
            ["Far", "/fɑːr/", "Далеко", "Far away."],
            ["Between", "/bɪˈtwiːn/", "Между", "Between two hills."],
            ["City", "/ˈsɪt.i/", "Город", "A big city."],
            ["Town", "/taʊn/", "Городок", "A small town."],
            ["Street", "/striːt/", "Улица", "Main street."],
            ["Park", "/pɑːk/", "Парк", "Walk in the park."],
            ["School", "/skuːl/", "Школа", "Go to school."],
            ["Store", "/stɔːr/", "Магазин", "Buy food at store."],
            ["Hospital", "/ˈhɒs.pɪ.təl/", "Больница", "Go to hospital."],
            ["Bank", "/bæŋk/", "Банк", "Money in bank."],
            ["Station", "/ˈsteɪ.ʃən/", "Станция", "Train station."],
            ["Airport", "/ˈeə.pɔːt/", "Аэропорт", "Fly to airport."],
            ["Hotel", "/həʊˈtel/", "Отель", "Stay at hotel."],
            ["Restaurant", "/ˈres.trɒnt/", "Ресторан", "Eat at restaurant."],
            ["Library", "/ˈlaɪ.brər.i/", "Библиотека", "Read in library."],
            ["Left", "/left/", "Лево", "Turn left."],
            ["Right", "/raɪt/", "Право", "Turn right."],
            ["Straight", "/streɪt/", "Прямо", "Go straight."],
            ["Here", "/hɪər/", "Здесь", "Come here."],
            ["There", "/ðeər/", "Там", "Over there."],
            ["Inside", "/ɪnˈsaɪd/", "Внутри", "Inside the room."],
            ["Outside", "/ˌaʊtˈsaɪd/", "Снаружи", "Outside the house."],
            ["Up", "/ʌp/", "Вверх", "Go up."],
            ["Down", "/daʊn/", "Вниз", "Go down."],
            ["Top", "/tɒp/", "Вершина", "On top."],
            ["Bottom", "/ˈbɒt.əm/", "Низ", "At the bottom."],
            ["Place", "/pleɪs/", "Место", "Good place."],
            ["Map", "/mæp/", "Карта", "Check the map."],
            ["Direction", "/daɪˈrek.ʃən/", "Направление", "Right direction."],
            ["Path", "/pɑːθ/", "Тропа", "Follow the path."],
            ["Wind", "/wɪnd/", "Ветер", "Zephyr wind."],
            ["Arrow", "/ˈær.əʊ/", "Стрела", "Marksman arrow."],
            ["Bow", "/bəʊ/", "Лут", "Wooden bow."],
            ["Target", "/ˈtɑː.ɡɪt/", "Цель", "Hit the target."],
            ["Scout", "/skaʊt/", "Разведчик", "Zephyr scout."]
        ],
        thorin: [
            // Opposing Adjectives & Descriptions (A0/A1)
            ["Big", "/bɪɡ/", "Большой", "A big mountain."],
            ["Small", "/smɔːl/", "Маленький", "A small key."],
            ["Fast", "/fɑːst/", "Быстрый", "A fast runner."],
            ["Slow", "/sləʊ/", "Медленный", "A slow step."],
            ["Heavy", "/ˈhev.i/", "Тяжёлый", "Heavy hammer."],
            ["Light", "/laɪt/", "Лёгкий", "Light armor."],
            ["Strong", "/strɒŋ/", "Сильный", "Thorin is strong."],
            ["Weak", "/wiːk/", "Слабый", "Weak enemy."],
            ["Hard", "/hɑːd/", "Твёрдый / Трудный", "Hard stone."],
            ["Soft", "/sɒft/", "Мягкий", "Soft pillow."],
            ["High", "/haɪ/", "Высокий", "High peak."],
            ["Low", "/ləʊ/", "Низкий", "Low ground."],
            ["Long", "/lɒŋ/", "Длинный", "Long road."],
            ["Short", "/ʃɔːt/", "Короткий", "Short dwarf."],
            ["Wide", "/waɪd/", "Широкий", "Wide bridge."],
            ["Narrow", "/ˈnær.əʊ/", "Узкий", "Narrow path."],
            ["Deep", "/diːp/", "Глубокий", "Deep mine."],
            ["Shallow", "/ˈʃæl.əʊ/", "Мелкий", "Shallow water."],
            ["Hot", "/hɒt/", "Горячий", "Hot forge."],
            ["Cold", "/kəʊld/", "Холодный", "Cold metal."],
            ["Old", "/əʊld/", "Старый", "Old castle."],
            ["New", "/njuː/", "Новый", "New hammer."],
            ["Young", "/jʌŋ/", "Молодой", "Young warrior."],
            ["Clean", "/kliːn/", "Чистый", "Clean water."],
            ["Dirty", "/ˈdɜː.ti/", "Грязный", "Dirty boots."],
            ["Full", "/fʊl/", "Полный", "Full box."],
            ["Empty", "/ˈemp.ti/", "Пустой", "Empty room."],
            ["Rich", "/rɪtʃ/", "Богатый", "Rich king."],
            ["Poor", "/pɔːr/", "Бедный", "Poor man."],
            ["Good", "/ɡʊd/", "Хороший", "Good work."],
            ["Bad", "/bæd/", "Плохой", "Bad weather."],
            ["Easy", "/ˈiː.zi/", "Лёгкий (простой)", "Easy task."],
            ["Difficult", "/ˈdɪf.ɪ.kəlt/", "Сложный", "Difficult game."],
            ["Great", "/ɡreɪt/", "Великий", "Great hammer."],
            ["Brave", "/breɪv/", "Храбрый", "Brave Thorin."],
            ["Tough", "/tʌf/", "Прочный", "Tough shield."],
            ["Solid", "/ˈsɒl.ɪd/", "Твёрдый", "Solid rock."],
            ["Gold", "/ɡəʊld/", "Золото", "Dwarven gold."],
            ["Silver", "/ˈsɪl.vər/", "Серебро", "Silver coin."],
            ["Stone", "/stəʊn/", "Камень", "Hard stone."],
            ["Iron", "/ˈaɪ.ən/", "Железо", "Iron armor."],
            ["Steel", "/stiːl/", "Сталь", "Steel weapon."],
            ["Hammer", "/ˈhæm.ər/", "Молот", "War hammer."],
            ["Axe", "/æks/", "Топор", "Double axe."],
            ["Forge", "/fɔːdʒ/", "Кузница", "Hot forge."],
            ["Mine", "/maɪn/", "Шахта", "Gold mine."],
            ["Cave", "/keɪv/", "Пещера", "Deep cave."],
            ["Dwarf", "/dwɔːf/", "Гном", "Thorin the dwarf."],
            ["Power", "/ˈpaʊ.ər/", "Мощь", "Dwarven power."],
            ["Smash", "/smæʃ/", "Разбивать", "Smash rocks."]
        ],
        selene: [
            // Ability (Can/Cannot), Hobbies & Action Verbs (A1)
            ["Can", "/kæn/", "Мочь / Уметь", "I can swim."],
            ["Cannot", "/ˈkæn.ɒt/", "Не мочь", "I cannot give up."],
            ["Swim", "/swɪm/", "Плавать", "I can swim fast."],
            ["Play", "/pleɪ/", "Играть", "I can play guitar."],
            ["Game", "/ɡeɪm/", "Игра", "Play a fun game."],
            ["Sport", "/spɔːt/", "Спорт", "I like sports."],
            ["Music", "/ˈmjuː.zɪk/", "Музыка", "Listen to music."],
            ["Guitar", "/ɡɪˈtɑːr/", "Гитара", "Play the guitar."],
            ["Piano", "/piˈæn.əʊ/", "Пианино", "Play the piano."],
            ["Song", "/sɒŋ/", "Песня", "Sing a song."],
            ["Movie", "/ˈmuː.vi/", "Фильм", "Watch a movie."],
            ["Dance", "/dɑːns/", "Танцевать", "She can dance."],
            ["Draw", "/drɔː/", "Рисовать", "Draw a picture."],
            ["Paint", "/peɪnt/", "Писать красками", "Paint a wall."],
            ["Drive", "/draɪv/", "Водить машину", "Drive a car."],
            ["Ride", "/raɪd/", "Ездить верхом", "Ride a horse."],
            ["Fly", "/flaɪ/", "Летать", "Birds can fly."],
            ["Jump", "/dʒʌmp/", "Прыгать", "Jump high."],
            ["Climb", "/klaɪm/", "Карабкаться", "Climb a tree."],
            ["Cook", "/kʊk/", "Готовить", "I can cook food."],
            ["Travel", "/ˈtræv.əl/", "Путешествовать", "I love to travel."],
            ["Hobby", "/ˈhɒb.i/", "Хобби", "What is your hobby?"],
            ["Photo", "/ˈfəʊ.təʊ/", "Фотография", "Take a photo."],
            ["Camera", "/ˈkæm.rə/", "Камера", "Buy a camera."],
            ["Book", "/bʊk/", "Книга", "Read an A1 book."],
            ["Story", "/ˈstɔː.ri/", "История", "Tell a story."],
            ["Party", "/ˈpɑː.ti/", "Вечеринка", "Join the party."],
            ["Fun", "/fʌn/", "Веселье", "Have fun."],
            ["Quiet", "/ˈkwaɪ.ət/", "Тихий", "Be quiet."],
            ["Silent", "/ˈsaɪ.lənt/", "Бесшумный", "Silent step."],
            ["Quick", "/kwɪk/", "Быстрый", "Quick move."],
            ["Shadow", "/ˈʃæd.əʊ/", "Тень", "Selene in shadow."],
            ["Blade", "/bleɪd/", "Лезвие", "Sharp blade."],
            ["Dagger", "/ˈdæɡ.ər/", "Кинжал", "Twin daggers."],
            ["Night", "/naɪt/", "Ночь", "Dark night."],
            ["Moon", "/muːn/", "Луна", "Full moon."],
            ["Mask", "/mɑːsk/", "Маска", "Black mask."],
            ["Sneak", "/sniːk/", "Красться", "Sneak in shadow."],
            ["Hide", "/haɪd/", "Прятаться", "Hide quietly."],
            ["Strike", "/straɪk/", "Ударять", "Shadow strike."],
            ["Target", "/ˈtɑː.ɡɪt/", "Цель", "Find target."],
            ["Secret", "/ˈsiː.krət/", "Секрет", "Keep a secret."],
            ["Trap", "/træp/", "Ловушка", "Avoid trap."],
            ["Speed", "/spiːd/", "Скорость", "High speed."],
            ["Dodge", "/dɒdʒ/", "Уклоняться", "Dodge attack."],
            ["Escape", "/ɪˈskeɪp/", "Сбегать", "Quick escape."],
            ["Agile", "/ˈædʒ.aɪl/", "Ловкий", "Agile assassin."],
            ["Skill", "/skɪl/", "Навык", "Great skill."],
            ["Talent", "/ˈtæl.ənt/", "Талант", "Hidden talent."],
            ["Victory", "/ˈvɪk.tər.i/", "Победа", "Silent victory."]
        ],
        oberon: [
            // Present Continuous, Nature & Animals (A1)
            ["Nature", "/ˈneɪ.tʃər/", "Природа", "Protect nature."],
            ["Tree", "/triː/", "Дерево", "High tree."],
            ["Forest", "/ˈfɒr.ɪst/", "Лес", "Green forest."],
            ["Flower", "/ˈflaʊ.ər/", "Цветок", "Red flower."],
            ["Plant", "/plɑːnt/", "Растение", "Green plant."],
            ["Leaf", "/liːf/", "Лист", "Green leaf."],
            ["Grass", "/ɡrɑːs/", "Трава", "Soft grass."],
            ["Animal", "/ˈæn.ɪ.məl/", "Животное", "Wild animal."],
            ["Dog", "/dɒɡ/", "Собака", "Loyal dog."],
            ["Cat", "/kæt/", "Кошка", "Black cat."],
            ["Bird", "/bɜːd/", "Птица", "Singing bird."],
            ["Horse", "/hɔːs/", "Лошадь", "White horse."],
            ["Bear", "/beər/", "Медведь", "Big bear."],
            ["Wolf", "/wʊlf/", "Волк", "Forest wolf."],
            ["Fish", "/fɪʃ/", "Рыба", "River fish."],
            ["Earth", "/ɜːθ/", "Земля", "Mother earth."],
            ["River", "/ˈrɪv.ər/", "Река", "Clear river."],
            ["Lake", "/leɪk/", "Озеро", "Blue lake."],
            ["Sea", "/siː/", "Море", "Deep sea."],
            ["Sunlight", "/ˈsʌn.laɪt/", "Солнечный свет", "Warm sunlight."],
            ["Air", "/eər/", "Воздух", "Fresh air."],
            ["Walking", "/ˈwɔː.kɪŋ/", "Идущий", "I am walking in the park."],
            ["Talking", "/ˈtɔː.kɪŋ/", "Говорящий", "She is talking to Oberon."],
            ["Reading", "/ˈriː.dɪŋ/", "Читающий", "He is reading a book."],
            ["Writing", "/ˈraɪ.tɪŋ/", "Пишущий", "They are writing."],
            ["Working", "/ˈwɜː.kɪŋ/", "Работающий", "I am working hard."],
            ["Sleeping", "/ˈsliː.pɪŋ/", "Спящий", "The bear is sleeping."],
            ["Playing", "/ˈpleɪ.ɪŋ/", "Играющий", "Children are playing."],
            ["Cooking", "/ˈkʊk.ɪŋ/", "Готовящий", "Mother is cooking."],
            ["Running", "/ˈrʌn.ɪŋ/", "Бегущий", "Oberon is running."],
            ["Swimming", "/ˈswɪm.ɪŋ/", "Плавающий", "Fish are swimming."],
            ["Singing", "/ˈsɪŋ.ɪŋ/", "Поющий", "Birds are singing."],
            ["Learning", "/ˈlɜː.nɪŋ/", "Изучающий", "We are learning English."],
            ["Growing", "/ˈɡrəʊ.ɪŋ/", "Растущий", "Trees are growing."],
            ["Living", "/ˈlɪv.ɪŋ/", "Живущий", "Living nature."],
            ["Healing", "/ˈhiː.lɪŋ/", "Исцеляющий", "Healing magic."],
            ["Shining", "/ˈʃaɪ.nɪŋ/", "Сияющий", "Sun is shining."],
            ["Raining", "/ˈreɪ.nɪŋ/", "Идёт дождь", "It is raining."],
            ["Snowing", "/ˈsnəʊ.ɪŋ/", "Идёт снег", "It is snowing."],
            ["Druid", "/ˈdruː.ɪd/", "Друид", "Oberon the druid."],
            ["Staff", "/stɑːf/", "Посох", "Wooden staff."],
            ["Vine", "/vaɪn/", "Лоза", "Rejuvenation vine."],
            ["Root", "/ruːt/", "Корень", "Deep root."],
            ["Branch", "/brɑːntʃ/", "Ветка", "Green branch."],
            ["Green", "/ɡriːn/", "Зелёный", "Green leaf."],
            ["Peaceful", "/ˈpiːs.fəl/", "Мирный", "Peaceful grove."],
            ["Life", "/laɪf/", "Жизнь", "Nature life."],
            ["Health", "/helθ/", "Здоровье", "Good health."],
            ["Balance", "/ˈbæl.əns/", "Баланс", "Keep balance."],
            ["Harmony", "/ˈhɑː.mə.ni/", "Гармония", "Live in harmony."]
        ],
        freya: [
            // Past Simple (Was/Were, Regular/Irregular), Travel & Transport (A1)
            ["Was", "/wɒz/", "Был / Была", "Yesterday was sunny."],
            ["Were", "/wɜːr/", "Были", "We were at home."],
            ["Visited", "/ˈvɪz.ɪ.tɪd/", "Посетил", "I visited Valkyrie hall."],
            ["Traveled", "/ˈtræv.əld/", "Путешествовал", "He traveled far."],
            ["Stayed", "/steɪd/", "Остался", "We stayed at hotel."],
            ["Walked", "/wɔːkt/", "Гулял", "She walked in park."],
            ["Played", "/pleɪd/", "Играл", "They played games."],
            ["Worked", "/wɜːkt/", "Работал", "I worked yesterday."],
            ["Studied", "/ˈstʌd.id/", "Учился", "I studied English."],
            ["Went", "/went/", "Ушёл / Ездил", "I went to school."],
            ["Came", "/keɪm/", "Пришёл", "Freya came home."],
            ["Saw", "/sɔː/", "Увидел", "I saw a movie."],
            ["Heard", "/hɜːd/", "Услышал", "I heard music."],
            ["Took", "/tʊk/", "Взял", "Took a ticket."],
            ["Gave", "/ɡeɪv/", "Дал", "Gave me help."],
            ["Bought", "/bɔːt/", "Купил", "Bought a car."],
            ["Ate", "/et/", "Поел", "Ate lunch."],
            ["Drank", "/dræŋk/", "Выпил", "Drank tea."],
            ["Slept", "/slept/", "Спал", "Slept eight hours."],
            ["Met", "/met/", "Встретил", "Met a friend."],
            ["Fought", "/fɔːt/", "Сражался", "Fought in battle."],
            ["Won", "/wʌn/", "Победил", "Won victory."],
            ["Car", "/kɑːr/", "Машина", "Drive a car."],
            ["Bus", "/bʌs/", "Автобус", "Take a bus."],
            ["Train", "/treɪn/", "Поезд", "Fast train."],
            ["Plane", "/pleɪn/", "Самолёт", "Fly on plane."],
            ["Ship", "/ʃɪp/", "Корабль", "Sailing ship."],
            ["Bicycle", "/ˈbaɪ.sɪ.kəl/", "Велосипед", "Ride a bicycle."],
            ["Trip", "/trɪp/", "Поездка", "Have a good trip."],
            ["Journey", "/ˈdʒɜː.ni/", "Путешествие", "Long journey."],
            ["Ticket", "/ˈtɪk.ɪt/", "Билет", "Buy a ticket."],
            ["Passport", "/ˈpɑːs.pɔːt/", "Паспорт", "Check passport."],
            ["Luggage", "/ˈlʌɡ.ɪdʒ/", "Багаж", "Heavy luggage."],
            ["Country", "/ˈkʌn.tri/", "Страна", "Visit a country."],
            ["World", "/wɜːld/", "Мир", "Around the world."],
            ["Valkyrie", "/ˈvæl.kə.ri/", "Валькирия", "Shieldmaiden Freya."],
            ["Shield", "/ʃiːld/", "Щит", "Freya shield."],
            ["Spear", "/spɪər/", "Копье", "Golden spear."],
            ["Armor", "/ˈɑː.mər/", "Броня", "Shining armor."],
            ["Glory", "/ˈɡlɔː.ri/", "Слава", "Eternal glory."],
            ["Honor", "/ˈɒn.ər/", "Честь", "Warrior honor."],
            ["Battle", "/ˈbæt.əl/", "Битва", "Past battle."],
            ["Victory", "/ˈvɪk.tər.i/", "Победа", "Great victory."],
            ["Warrior", "/ˈwɒr.i.ər/", "Воин", "Brave warrior."],
            ["Hero", "/ˈhɪə.rəʊ/", "Герой", "Past hero."],
            ["Ago", "/əˈɡəʊ/", "Тому назад", "Two days ago."],
            ["Last", "/lɑːst/", "Прошлый", "Last week."],
            ["Yesterday", "/ˈjes.tə.deɪ/", "Вчера", "Yesterday morning."],
            ["History", "/ˈhɪs.tər.i/", "История", "World history."],
            ["Legend", "/ˈledʒ.ənd/", "Легенда", "Ancient legend."]
        ],
        eldrin: [
            // Graduation Mastery: Work, Education, Communication & Goals (A1 Master)
            ["Study", "/ˈstʌd.i/", "Учиться", "Study English every day."],
            ["Work", "/wɜːk/", "Работать", "Work on your goals."],
            ["Job", "/dʒɒb/", "Работа / Профессия", "Find a good job."],
            ["Idea", "/aɪˈdɪə/", "Идея", "A brilliant idea."],
            ["Goal", "/ɡəʊl/", "Цель", "Achieve your goal."],
            ["Dream", "/driːm/", "Мечта", "Follow your dream."],
            ["Success", "/səkˈses/", "Успех", "Wish you success."],
            ["Result", "/rɪˈzʌlt/", "Результат", "Great result."],
            ["Future", "/ˈfjuː.tʃər/", "Будущее", "Bright future."],
            ["Language", "/ˈlæŋ.ɡwɪdʒ/", "Язык", "English language."],
            ["Word", "/wɜːd/", "Слово", "Learn 500 words."],
            ["Sentence", "/ˈsen.təns/", "Предложение", "Speak in sentences."],
            ["Question", "/ˈkwes.tʃən/", "Вопрос", "Ask a question."],
            ["Answer", "/ˈɑːn.sər/", "Ответ", "Correct answer."],
            ["Message", "/ˈmes.ɪdʒ/", "Сообщение", "Send a message."],
            ["Problem", "/ˈprɒb.ləm/", "Проблема", "Solve the problem."],
            ["Solution", "/səˈluː.ʃən/", "Решение", "Find a solution."],
            ["Rule", "/ruːl/", "Правило", "Grammar rule."],
            ["Test", "/test/", "Тест", "Pass the A1 test."],
            ["Exam", "/ɪɡˈzæm/", "Экзамен", "Final exam."],
            ["Diploma", "/dɪˈpləʊ.mə/", "Диплом", "CEFR A1 diploma."],
            ["Certificate", "/səˈtɪf.ɪ.kət/", "Сертификат", "A1 certificate."],
            ["Master", "/ˈmɑː.stər/", "Мастер", "Eldrin the Master."],
            ["Grand", "/ɡrænd/", "Грандиозный", "Grand Archmage."],
            ["Wisdom", "/ˈwɪz.dəm/", "Мудрость", "Supreme wisdom."],
            ["Knowledge", "/ˈnɒl.ɪdʒ/", "Знания", "Knowledge is power."],
            ["Magic", "/ˈmædʒ.ɪk/", "Магия", "Master magic."],
            ["Spell", "/spel/", "Заклинание", "Arcane spell."],
            ["Star", "/stɑːr/", "Звезда", "Shining star."],
            ["World", "/wɜːld/", "Мир", "Explore the world."],
            ["Understand", "/ˌʌn.dəˈstænd/", "Понимать", "I understand English!"],
            ["Achieve", "/əˈtʃiːv/", "Достигать", "Achieve A1 level."],
            ["Practice", "/ˈpræk.tɪs/", "Практика", "Daily practice."],
            ["Improve", "/ɪmˈpruːv/", "Улучшать", "Improve your speech."],
            ["Progress", "/ˈprəʊ.ɡres/", "Прогресс", "Great progress."],
            ["Level", "/ˈlev.əl/", "Уровень", "CEFR A1 level."],
            ["Skill", "/skɪl/", "Навык", "Speaking skill."],
            ["Confidence", "/ˈkɒn.fɪ.dəns/", "Уверенность", "Gain confidence."],
            ["Fluent", "/ˈfluː.ənt/", "Свободно говорящий", "Speak fluently."],
            ["Communication", "/kəˌmjuː.nɪˈkeɪ.ʃən/", "Общение", "Easy communication."],
            ["Partner", "/ˈpɑːt.nər/", "Партнёр", "Conversation partner."],
            ["Tutor", "/ˈtjuː.tər/", "Тьютор", "AI tutor."],
            ["Hero", "/ˈhɪə.rəʊ/", "Герой", "Master all 10 heroes."],
            ["Guild", "/ɡɪld/", "Гильдия", "Join English guild."],
            ["Squad", "/skwɒd/", "Отряд", "5-hero squad."],
            ["Power", "/ˈpaʊ.ər/", "Сила", "Full party power."],
            ["Trophy", "/ˈtrəʊ.fi/", "Трофей", "Graduation trophy."],
            ["Victory", "/ˈvɪk.tər.i/", "Победа", "Final victory!"],
            ["Celebration", "/ˌsel.əˈbreɪ.ʃən/", "Празднование", "Celebration time!"],
            ["Eldrin", "/ˈel.drɪn/", "Эльдрин", "Archmage Eldrin (A1 Master)."]
        ]
    };

    const rawList = wordLists[heroId] || wordLists.valerius;
    return rawList.map(item => ({
        word: item[0],
        phonetic: item[1],
        translation: item[2],
        example: item[3]
    }));
}

const HERO_UNLOCK_QUEST_THRESHOLDS = [0, 3, 7, 12, 18, 25, 33, 42, 52, 63];
const HERO_MAX_LEVEL = 50;

function getTotalCompletedDailyQuests() {
    try {
        if (typeof localStorage !== 'undefined') {
            const val = localStorage.getItem("total_completed_daily_quests");
            if (val !== null) {
                return Math.max(3, parseInt(val, 10) || 3);
            } else {
                localStorage.setItem("total_completed_daily_quests", "3");
                return 3;
            }
        }
    } catch (e) {}
    return 3;
}

const HEROES_DATA = [
    {
        id: "valerius", name: "Valerius", role: "Main Tank", cefrRank: 1, cefrLevel: "A0 (Greetings & Identity)", title: "The Silver Paladin",
        avatar: "fa-shield-halved", color: "#3b82f6", image: "images/valerius_hero_standalone.png", faceImage: "images/valerius_face.png", unlocked: true, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 250, maxHp: 250, atk: 22, def: 18, skillName: "Aegis Shield", skillDesc: "Taunts all enemies & increases DEF.", skillIcon: "fa-shield",
        words: generateHeroWords("valerius"),
        sentenceTemplates: ["Hello, I am [Valerius].", "My name is [a hero].", "I am [happy / ready]."],
        grammarRules: ["Глагол 'to be' (am, is, are)", "Личные местоимения (I, You, He, She, It)"],
        voiceConfig: { kokoroVoice: "am_adam", gender: "male", pitch: 0.9, rate: 0.95 }
    },
    {
        id: "astraea", name: "Astraea", role: "Healer", cefrRank: 1, cefrLevel: "A0 (Daily Actions & Food)", title: "High Priestess of Light",
        avatar: "fa-wand-magic-sparkles", color: "#10b981", image: "images/astraea_hero_standalone.png", faceImage: "images/astraea_face.png", unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 180, maxHp: 180, atk: 14, def: 6, skillName: "Holy Radiance", skillDesc: "Restores 140 HP.", skillIcon: "fa-hand-holding-medical",
        words: generateHeroWords("astraea"),
        sentenceTemplates: ["I have [a goal].", "I want to [eat / help].", "Do you like [tea]?"],
        grammarRules: ["Глагол to have", "Глагол to want + to + verb"],
        voiceConfig: { kokoroVoice: "af_heart", gender: "female", pitch: 1.1, rate: 0.9 }
    },
    {
        id: "ignis", name: "Ignis", role: "Main DD", cefrRank: 1, cefrLevel: "A0 (Objects, Colors & Clothes)", title: "Pyromancer Archmage",
        avatar: "fa-fire-flame-curved", color: "#ef4444", image: "images/hero_ignis_1785227663250.jpg", unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 160, maxHp: 160, atk: 45, def: 5, skillName: "Flame Tempest", skillDesc: "Deals 200 AoE damage.", skillIcon: "fa-burst",
        words: generateHeroWords("ignis"),
        sentenceTemplates: ["This is my [red shirt].", "That is a [blue computer]."],
        grammarRules: ["Указатели This / That / These / Those", "Цвета и артикли a / an"],
        voiceConfig: { kokoroVoice: "am_fenrir", gender: "male", pitch: 1.15, rate: 1.05 }
    },
    {
        id: "frostina", name: "Frostina", role: "Control", cefrRank: 2, cefrLevel: "A0 (Time, Weather & Routines)", title: "Ice Sorceress",
        avatar: "fa-snowflake", color: "#06b6d4", image: "images/hero_frostina_1785227676165.jpg", unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 170, maxHp: 170, atk: 32, def: 6, skillName: "Deep Freeze", skillDesc: "Freezes enemies.", skillIcon: "fa-icicles",
        words: generateHeroWords("frostina"),
        sentenceTemplates: ["I [always / usually] wake up early.", "It is [cold / sunny] today."],
        grammarRules: ["Present Simple", "Наречия частоты (always, usually, never)"],
        voiceConfig: { kokoroVoice: "af_bella", gender: "female", pitch: 0.95, rate: 0.85 }
    },
    {
        id: "zephyr", name: "Zephyr", role: "Buffer", cefrRank: 2, cefrLevel: "A0 (Places, Directions & Questions)", title: "Wind Marksman",
        avatar: "fa-wind", color: "#f59e0b", image: "images/hero_zephyr_1785227690322.jpg", unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 190, maxHp: 190, atk: 38, def: 7, skillName: "Haste Wind", skillDesc: "Fills party energy.", skillIcon: "fa-feather",
        words: generateHeroWords("zephyr"),
        sentenceTemplates: ["Where is [the school]?", "It is [next to the park]."],
        grammarRules: ["Вопросы Where, When, Why, How", "Предлоги in, on, at, next to, behind"],
        voiceConfig: { kokoroVoice: "am_echo", gender: "male", pitch: 1.1, rate: 1.1 }
    },
    {
        id: "thorin", name: "Thorin", role: "Melee DD", cefrRank: 2, cefrLevel: "A0/A1 (Descriptions & Opposites)", title: "Dwarven Berserker",
        avatar: "fa-gavel", color: "#8b5cf6", image: null, unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 280, maxHp: 280, atk: 48, def: 12, skillName: "Earthquake Smash", skillDesc: "Stuns target.", skillIcon: "fa-burst",
        words: generateHeroWords("thorin"),
        sentenceTemplates: ["This hammer is [big and heavy].", "A [strong] warrior."],
        grammarRules: ["Прилагательные-антонимы (big/small, hot/cold)", "Порядок слов"],
        voiceConfig: { kokoroVoice: "bm_george", gender: "male", pitch: 0.75, rate: 0.9 }
    },
    {
        id: "selene", name: "Selene", role: "Assassin", cefrRank: 3, cefrLevel: "A1 (Ability Can/Cannot & Hobbies)", title: "Shadow Stalker",
        avatar: "fa-user-ninja", color: "#ec4899", image: null, unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 210, maxHp: 210, atk: 58, def: 8, skillName: "Shadow Strike", skillDesc: "Deals 300 crit damage.", skillIcon: "fa-skull",
        words: generateHeroWords("selene"),
        sentenceTemplates: ["Can you [play guitar]? -> Yes, I can.", "I cannot [swim]."],
        grammarRules: ["Модальный глагол Can / Cannot", "Глаголы хобби и спорта"],
        voiceConfig: { kokoroVoice: "af_sarah", gender: "female", pitch: 0.85, rate: 0.95 }
    },
    {
        id: "oberon", name: "Oberon", role: "Druid", cefrRank: 3, cefrLevel: "A1 (Present Continuous & Nature)", title: "Arch-Druid of Nature",
        avatar: "fa-leaf", color: "#84cc16", image: null, unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 230, maxHp: 230, atk: 28, def: 10, skillName: "Rejuvenation Vine", skillDesc: "Heals party.", skillIcon: "fa-seedling",
        words: generateHeroWords("oberon"),
        sentenceTemplates: ["I am [walking in the forest] right now.", "Birds are [singing]."],
        grammarRules: ["Present Continuous (be + V-ing)", "Природа и животные"],
        voiceConfig: { kokoroVoice: "bm_lewis", gender: "male", pitch: 0.85, rate: 0.88 }
    },
    {
        id: "freya", name: "Freya", role: "Valkyrie Sub-Tank", cefrRank: 4, cefrLevel: "A1 (Past Simple & Travel)", title: "Shieldmaiden Valkyrie",
        avatar: "fa-shield-heart", color: "#f43f5e", image: null, unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 310, maxHp: 310, atk: 35, def: 15, skillName: "Valkyrie Charge", skillDesc: "Knocks back enemies.", skillIcon: "fa-person-through-window",
        words: generateHeroWords("freya"),
        sentenceTemplates: ["Yesterday I [visited a museum].", "We [went by train]."],
        grammarRules: ["Past Simple (was/were, visited, went)", "Путешествия и транспорт"],
        voiceConfig: { kokoroVoice: "bf_emma", gender: "female", pitch: 1.05, rate: 1.0 }
    },
    {
        id: "eldrin", name: "Eldrin", role: "Grand Archmage", cefrRank: 5, cefrLevel: "A1 (A1 Graduation Mastery)", title: "Grand Archmage",
        avatar: "fa-hat-wizard", color: "#a855f7", image: null, unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 260, maxHp: 260, atk: 65, def: 14, skillName: "Arcane Nova", skillDesc: "Deals 500 massive damage.", skillIcon: "fa-meteor",
        words: generateHeroWords("eldrin"),
        sentenceTemplates: ["I have [achieved A1 mastery].", "I can speak English with confidence."],
        grammarRules: ["Комплексное повторение всей грамматики и речи уровня A1"],
        voiceConfig: { kokoroVoice: "am_michael", gender: "male", pitch: 0.95, rate: 0.92 }
    }
];

const CAMPAIGN_CHAPTERS = [
    {
        id: 1, title: "Chapter 1: The Silver Outpost (Valerius & Astraea)",
        stages: [
            { id: "1-1", name: "Outpost Gate", recPower: 100, mobs: [{ name: "Goblin Scout", hp: 120, atk: 15, avatar: "fa-skull" }], boss: false, unlocked: true },
            { id: "1-2", name: "Ruined Watchtower", recPower: 180, mobs: [{ name: "Shadow Wolf", hp: 200, atk: 22, avatar: "fa-ghost" }], boss: false, unlocked: false },
            { id: "1-3", name: "High Priestess Altar", recPower: 260, mobs: [{ name: "Corrupted Sentinel", hp: 450, atk: 35, avatar: "fa-dragon" }], boss: true, unlockHeroId: "astraea", unlocked: false }
        ]
    },
    {
        id: 2, title: "Chapter 2: Fiery Volcanic Spire (Ignis)",
        stages: [
            { id: "2-1", name: "Ashen Path", recPower: 350, mobs: [{ name: "Fire Imp", hp: 280, atk: 30, avatar: "fa-fire" }], boss: false, unlocked: false },
            { id: "2-2", name: "Magma Chamber", recPower: 450, mobs: [{ name: "Lava Elemental", hp: 380, atk: 40, avatar: "fa-volcano" }], boss: false, unlocked: false },
            { id: "2-3", name: "Pyromancer Throne", recPower: 600, mobs: [{ name: "Ignis Fire Drake", hp: 750, atk: 55, avatar: "fa-dragon" }], boss: true, unlockHeroId: "ignis", unlocked: false }
        ]
    },
    {
        id: 3, title: "Chapter 3: Frostbite Caverns (Frostina & Zephyr)",
        stages: [
            { id: "3-1", name: "Glacier Entrance", recPower: 750, mobs: [{ name: "Ice Spider", hp: 450, atk: 45, avatar: "fa-spider" }], boss: false, unlocked: false },
            { id: "3-2", name: "Whispering Winds", recPower: 900, mobs: [{ name: "Frost Golem", hp: 580, atk: 50, avatar: "fa-snowflake" }], boss: false, unlocked: false },
            { id: "3-3", name: "Sorceress Ice Keep", recPower: 1150, mobs: [{ name: "Frostina Ice Queen", hp: 1100, atk: 70, avatar: "fa-icicles" }], boss: true, unlockHeroId: "frostina", unlocked: false }
        ]
    },
    {
        id: 4, title: "Chapter 4: Dwarven Iron Mines (Thorin & Zephyr)",
        stages: [
            { id: "4-1", name: "Stone Shaft", recPower: 1350, mobs: [{ name: "Cave Bear", hp: 700, atk: 60, avatar: "fa-paw" }], boss: false, unlocked: false },
            { id: "4-2", name: "Forge of Ancestors", recPower: 1600, mobs: [{ name: "Iron Automaton", hp: 900, atk: 75, avatar: "fa-robot" }], boss: false, unlocked: false },
            { id: "4-3", name: "Berserker Arena", recPower: 1900, mobs: [{ name: "Thorin Berserker Chief", hp: 1500, atk: 95, avatar: "fa-burst" }], boss: true, unlockHeroId: "thorin", unlocked: false }
        ]
    },
    {
        id: 5, title: "Chapter 5: Shadow Veil Catacombs (Selene)",
        stages: [
            { id: "5-1", name: "Silent Alley", recPower: 2200, mobs: [{ name: "Shadow Assassin", hp: 1000, atk: 90, avatar: "fa-user-ninja" }], boss: false, unlocked: false },
            { id: "5-2", name: "Moonlit Vault", recPower: 2500, mobs: [{ name: "Phantom Spectre", hp: 1200, atk: 110, avatar: "fa-ghost" }], boss: false, unlocked: false },
            { id: "5-3", name: "Shadow Stalker Lair", recPower: 2900, mobs: [{ name: "Selene Shadow Queen", hp: 2000, atk: 130, avatar: "fa-skull" }], boss: true, unlockHeroId: "selene", unlocked: false }
        ]
    },
    {
        id: 6, title: "Chapter 6: Emerald Druid Grove (Oberon)",
        stages: [
            { id: "6-1", name: "Mossy Glade", recPower: 3300, mobs: [{ name: "Corrupted Ent", hp: 1500, atk: 120, avatar: "fa-tree" }], boss: false, unlocked: false },
            { id: "6-2", name: "Rejuvenation Spring", recPower: 3800, mobs: [{ name: "Wild Treant", hp: 1800, atk: 140, avatar: "fa-leaf" }], boss: false, unlocked: false },
            { id: "6-3", name: "Arch-Druid Sanctuary", recPower: 4400, mobs: [{ name: "Oberon Nature Avatar", hp: 2800, atk: 165, avatar: "fa-seedling" }], boss: true, unlockHeroId: "oberon", unlocked: false }
        ]
    },
    {
        id: 7, title: "Chapter 7: Valkyrie Sky Fortress (Freya)",
        stages: [
            { id: "7-1", name: "Cloud Gate", recPower: 5000, mobs: [{ name: "Storm Rider", hp: 2200, atk: 160, avatar: "fa-wind" }], boss: false, unlocked: false },
            { id: "7-2", name: "Thunder Citadel", recPower: 5800, mobs: [{ name: "Valkyrie Guard", hp: 2600, atk: 185, avatar: "fa-shield-halved" }], boss: false, unlocked: false },
            { id: "7-3", name: "Hall of Valhalla", recPower: 6700, mobs: [{ name: "Freya Shieldmaiden Queen", hp: 4000, atk: 220, avatar: "fa-person-through-window" }], boss: true, unlockHeroId: "freya", unlocked: false }
        ]
    },
    {
        id: 8, title: "Chapter 8: Arcane Spire & Grand Archmage (Eldrin)",
        stages: [
            { id: "8-1", name: "Astral Library", recPower: 7500, mobs: [{ name: "Arcane Golem", hp: 3200, atk: 210, avatar: "fa-book" }], boss: false, unlocked: false },
            { id: "8-2", name: "Dimension Portal", recPower: 8500, mobs: [{ name: "Cosmic Phoenix", hp: 3800, atk: 245, avatar: "fa-meteor" }], boss: false, unlocked: false },
            { id: "8-3", name: "Grand Master Throne", recPower: 10000, mobs: [{ name: "Eldrin Grand Archmage", hp: 6000, atk: 300, avatar: "fa-hat-wizard" }], boss: true, unlockHeroId: "eldrin", unlocked: false }
        ]
    },
    {
        id: 9, title: "Chapter 9: Final A1 Graduation Trial (Master All 10 Heroes)",
        stages: [
            { id: "9-1", name: "Trial of Wisdom", recPower: 12000, mobs: [{ name: "Grand Examiner", hp: 7000, atk: 320, avatar: "fa-graduation-cap" }], boss: false, unlocked: false },
            { id: "9-2", name: "Trial of Valhalla", recPower: 14500, mobs: [{ name: "Ancient Dragon King", hp: 9000, atk: 380, avatar: "fa-dragon" }], boss: false, unlocked: false },
            { id: "9-3", name: "Supreme Graduation Summit", recPower: 18000, mobs: [{ name: "CEFR A1 Master Titan", hp: 14000, atk: 450, avatar: "fa-trophy" }], boss: true, unlocked: false }
        ]
    }
];

class RPGEngine {
    constructor() {
        this.chapters = this.loadChapters();
        this.heroes = this.loadHeroes();
        this.selectedSquad = this.loadSquad();
        this.syncClearedBossHeroUnlocks();
        this.inBattle = false;
        this.battleTimer = null;
    }

    syncClearedBossHeroUnlocks() {
        if (!this.chapters || !this.heroes) return;
        this.chapters.forEach(c => {
            const defaultChap = CAMPAIGN_CHAPTERS.find(ch => ch.id === c.id);
            c.stages.forEach(st => {
                const defaultStage = defaultChap ? defaultChap.stages.find(s => s.id === st.id) : null;
                const heroIdToUnlock = st.unlockHeroId || (defaultStage ? defaultStage.unlockHeroId : null);
                if (st.boss && st.cleared && heroIdToUnlock) {
                    const h = this.heroes.find(hero => hero.id === heroIdToUnlock);
                    if (h) h.unlocked = true;
                }
            });
        });
        this.save();
    }

    loadHeroes() {
        let saved = null;
        if (typeof localStorage !== 'undefined') {
            const possibleKeys = [
                "rpg_heroes_10_v9", "rpg_heroes_10_v8", "rpg_heroes_10_v7",
                "rpg_heroes_10_v6", "rpg_heroes_10_v5", "rpg_heroes_10_v4",
                "rpg_heroes_v4", "rpg_heroes_v3", "rpg_heroes_v2", "rpg_heroes",
                "english_pulse_heroes"
            ];
            for (const key of possibleKeys) {
                const val = localStorage.getItem(key);
                if (val) {
                    saved = val;
                    break;
                }
            }
        }
        const totalCompletedQuests = getTotalCompletedDailyQuests();

        if (saved) {
            try {
                const parsed = JSON.parse(saved);
                return HEROES_DATA.map((defaultHero, idx) => {
                    let savedHero = null;
                    if (Array.isArray(parsed)) {
                        savedHero = parsed.find(h => h && (h.id === defaultHero.id || h.name?.toLowerCase() === defaultHero.id.toLowerCase()));
                    } else if (typeof parsed === 'object' && parsed !== null) {
                        savedHero = parsed[defaultHero.id] || parsed[defaultHero.name];
                    }

                    const reqQuests = HERO_UNLOCK_QUEST_THRESHOLDS[idx] !== undefined ? HERO_UNLOCK_QUEST_THRESHOLDS[idx] : 0;
                    const isUnlockedByQuest = (totalCompletedQuests >= reqQuests);

                    if (savedHero) {
                        let heroLevel = parseInt(savedHero.level, 10);
                        if (isNaN(heroLevel) || heroLevel < 1) heroLevel = defaultHero.level;
                        heroLevel = Math.min(50, Math.max(1, heroLevel));

                        let heroAffinity = parseInt(savedHero.affinityLevel || savedHero.affinity || 0, 10);
                        if (isNaN(heroAffinity)) heroAffinity = 0;
                        heroAffinity = Math.min(heroLevel, Math.max(0, heroAffinity));

                        const calculatedMaxXp = Math.round(150 + (heroLevel - 1) * 5);
                        let heroXp = parseInt(savedHero.xp, 10);
                        if (isNaN(heroXp)) heroXp = defaultHero.xp;
                        if (heroLevel >= 50) heroXp = calculatedMaxXp; // Max Level cap
                        else if (heroXp >= calculatedMaxXp) heroXp = calculatedMaxXp - 1; // Prevent overflow

                        // Restore or calculate stat growth for hero level
                        let baseMaxHp = defaultHero.maxHp;
                        let baseAtk = defaultHero.atk;
                        let baseDef = defaultHero.def;

                        for (let l = 1; l < heroLevel; l++) {
                            const hpInc = Math.max(35, Math.round(baseMaxHp * 0.04));
                            const atkInc = Math.max(4, Math.round(baseAtk * 0.04));
                            const defInc = Math.max(3, Math.round(baseDef * 0.04));
                            baseMaxHp += hpInc;
                            baseAtk += atkInc;
                            baseDef += defInc;
                        }

                        if (typeof savedHero.maxHp === 'number' && savedHero.maxHp > baseMaxHp) baseMaxHp = savedHero.maxHp;
                        if (typeof savedHero.atk === 'number' && savedHero.atk > baseAtk) baseAtk = savedHero.atk;
                        if (typeof savedHero.def === 'number' && savedHero.def > baseDef) baseDef = savedHero.def;

                        return {
                            ...defaultHero,
                            level: heroLevel,
                            xp: heroXp,
                            maxXp: calculatedMaxXp,
                            affinityLevel: heroAffinity,
                            unlocked: (idx <= 1) ? true : isUnlockedByQuest,
                            maxHp: baseMaxHp,
                            hp: baseMaxHp,
                            atk: baseAtk,
                            def: baseDef,
                            words: generateHeroWords(defaultHero.id) // Load official Oxford 50 CEFR words!
                        };
                    }

                    return {
                        ...defaultHero,
                        unlocked: (idx <= 1) ? true : isUnlockedByQuest
                    };
                });
            } catch (e) {}
        }
        return HEROES_DATA.map((defaultHero, idx) => ({
            ...defaultHero,
            unlocked: (idx <= 1) ? true : (totalCompletedQuests >= (HERO_UNLOCK_QUEST_THRESHOLDS[idx] || 0))
        }));
    }

    loadChapters() {
        let saved = null;
        if (typeof localStorage !== 'undefined') {
            const possibleKeys = ["rpg_chapters_10_v9", "rpg_chapters_10_v8", "rpg_chapters_10_v7", "rpg_chapters_10_v6", "rpg_chapters_v4", "rpg_chapters"];
            for (const key of possibleKeys) {
                const val = localStorage.getItem(key);
                if (val) { saved = val; break; }
            }
        }
        if (saved) {
            try { return JSON.parse(saved); } catch (e) {}
        }
        return JSON.parse(JSON.stringify(CAMPAIGN_CHAPTERS));
    }

    loadSquad() {
        let saved = null;
        if (typeof localStorage !== 'undefined') {
            const possibleKeys = ["rpg_squad_ids_v9", "rpg_squad_ids_v8", "rpg_squad_ids_v7", "rpg_squad_ids"];
            for (const key of possibleKeys) {
                const val = localStorage.getItem(key);
                if (val) { saved = val; break; }
            }
        }
        if (saved) {
            try { return JSON.parse(saved); } catch (e) {}
        }
        return this.heroes.filter(h => h.unlocked).slice(0, 5).map(h => h.id);
    }

    save() {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem("rpg_heroes_10_v9", JSON.stringify(this.heroes));
            localStorage.setItem("rpg_chapters_10_v9", JSON.stringify(this.chapters));
            localStorage.setItem("rpg_squad_ids_v9", JSON.stringify(this.selectedSquad));
        }
    }

    getHeroEffectiveStats(hero) {
        const heartMultiplier = 1 + (hero.affinityLevel * 0.02);
        return {
            hp: Math.round(hero.hp * heartMultiplier),
            atk: Math.round(hero.atk * heartMultiplier),
            def: Math.round(hero.def * heartMultiplier),
            heartMultiplier: Math.round((heartMultiplier - 1) * 100)
        };
    }

    toggleSquadHero(heroId) {
        const index = this.selectedSquad.indexOf(heroId);
        if (index > -1) {
            if (this.selectedSquad.length > 1) this.selectedSquad.splice(index, 1);
        } else {
            if (this.selectedSquad.length < 5) this.selectedSquad.push(heroId);
        }
        this.save();
    }

    getSelectedHeroes() {
        return this.heroes.filter(h => h.unlocked && this.selectedSquad.includes(h.id));
    }

    getHeroPower(h) {
        if (!h) return 0;
        const eff = this.getHeroEffectiveStats(h);
        return Math.round(eff.hp + eff.atk * 3 + eff.def * 2 + h.level * 25);
    }

    getPartyPower() {
        return this.getSelectedHeroes()
            .reduce((acc, h) => acc + this.getHeroPower(h), 0);
    }

    // STRICT CEFR TIER XP GATING
    rewardFromEnglish(activityType, targetHeroIds = null, materialSourceHeroId = null, customBaseXp = null) {
        let baseAmount = customBaseXp !== null ? customBaseXp : 0;
        if (customBaseXp === null) {
            switch (activityType) {
                case "chat": baseAmount = 6; break;
                case "card": baseAmount = 10; break;
                case "quiz": baseAmount = 30; break;
                case "shadowing": baseAmount = 30; break;
            }
        }

        let rewardedHeroNames = [];
        let blockedHeroNames = [];
        let leveledUpHeroes = [];
        let xpAmount = baseAmount;

        let targetArray = null;
        if (targetHeroIds) {
            targetArray = Array.isArray(targetHeroIds) ? targetHeroIds : [targetHeroIds];
        }

        // Source hero rank determination
        let sourceRank = 1;
        if (materialSourceHeroId) {
            const srcHero = this.heroes.find(h => h.id === materialSourceHeroId);
            if (srcHero) sourceRank = srcHero.cefrRank || 1;
        }

        this.heroes.filter(h => h.unlocked).forEach(h => {
            if (!targetArray || targetArray.length === 0 || targetArray.includes(h.id)) {
                const targetRank = h.cefrRank || 1;

                // STRICT TIER GATE RULE: If material tier is LOWER than hero's tier -> BLOCKED (0 XP)!
                if (materialSourceHeroId && targetRank > sourceRank) {
                    blockedHeroNames.push(h.name);
                } else if (h.level >= HERO_MAX_LEVEL) {
                    h.level = HERO_MAX_LEVEL;
                    h.xp = h.maxXp;
                    blockedHeroNames.push(`${h.name} (Max Level 50)`);
                } else {
                    if (h.level < HERO_MAX_LEVEL) {
                        h.xp += xpAmount;
                        rewardedHeroNames.push(h.name);
                        while (h.xp >= h.maxXp && h.level < HERO_MAX_LEVEL) {
                            const oldLevel = h.level;
                            const oldHp = h.maxHp;
                            const oldAtk = h.atk;
                            const oldDef = h.def;

                            h.level = Math.min(HERO_MAX_LEVEL, h.level + 1);
                            if (h.level >= HERO_MAX_LEVEL) {
                                h.xp = h.maxXp;
                            } else {
                                h.xp -= h.maxXp;
                            }
                            h.maxXp = Math.round(150 + (h.level - 1) * 5);
                            
                            // Guaranteed robust stat growth per level up!
                            const hpInc = Math.max(35, Math.round(h.maxHp * 0.04));
                            const atkInc = Math.max(4, Math.round(h.atk * 0.04));
                            const defInc = Math.max(3, Math.round(h.def * 0.04));

                            h.maxHp += hpInc;
                            h.hp = h.maxHp;
                            h.atk += atkInc;
                            h.def += defInc;

                            leveledUpHeroes.push({
                                hero: h,
                                oldLevel,
                                newLevel: h.level,
                                hpGain: hpInc,
                                atkGain: atkInc,
                                defGain: defInc
                            });
                        }
                    }
                }
            }
        });

        this.save();
        return { 
            rewardedHeroNames, 
            blockedHeroNames, 
            leveledUpHeroes,
            xpAmount,
            isFocusBonus: false
        };
    }

    completeStage(stageId) {
        let stageFound = false;
        let unlockedHeroName = null;
        for (let c of this.chapters) {
            for (let i = 0; i < c.stages.length; i++) {
                if (c.stages[i].id === stageId) {
                    c.stages[i].cleared = true;

                    const defaultChap = CAMPAIGN_CHAPTERS.find(ch => ch.id === c.id);
                    const defaultStage = defaultChap ? defaultChap.stages.find(st => st.id === stageId) : null;
                    const heroIdToUnlock = c.stages[i].unlockHeroId || (defaultStage ? defaultStage.unlockHeroId : null);

                    if (c.stages[i].boss && heroIdToUnlock) {
                        const heroToUnlock = this.heroes.find(h => h.id === heroIdToUnlock);
                        if (heroToUnlock) {
                            heroToUnlock.unlocked = true;
                            unlockedHeroName = heroToUnlock.name;
                        }
                    }

                    if (i + 1 < c.stages.length) {
                        c.stages[i + 1].unlocked = true;
                    } else {
                        const nextChap = this.chapters.find(ch => ch.id === c.id + 1);
                        if (nextChap && nextChap.stages.length > 0) {
                            nextChap.stages[0].unlocked = true;
                        }
                    }
                    stageFound = true;
                    break;
                }
            }
            if (stageFound) break;
        }
        this.save();
        return unlockedHeroName;
    }

    generateAffinityQuest(hero, questLevel) {
        const wordPool = hero.words;
        const rawTarget = wordPool[Math.floor(Math.random() * wordPool.length)] || wordPool[0];
        const targetObj = Array.isArray(rawTarget) ? {
            word: rawTarget[0] || "",
            phonetic: rawTarget[1] || "",
            translation: rawTarget[2] || "",
            example: rawTarget[3] || ""
        } : rawTarget;
        
        const isAudioMode = questLevel > 50;

        let exampleWithBlank = targetObj.example || "I like ____.";
        if (targetObj.word) {
            const escapedWord = targetObj.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const reg = new RegExp(`\\b${escapedWord}\\b`, 'gi');
            exampleWithBlank = exampleWithBlank.replace(reg, '____');
        }
        
        const dialogueText = isAudioMode 
            ? `💬 ${hero.name} (${hero.title}): "Listen carefully to my voice and say '${targetObj.word}' (${targetObj.translation}) out loud to unlock 💕 Heart Level ${questLevel}!"`
            : `💬 ${hero.name} (${hero.title}): "Greetings, my friend! Fill in the blank with the English word for '${targetObj.translation}': '${exampleWithBlank}'"`;

        return {
            heroId: hero.id,
            heroName: hero.name,
            level: questLevel,
            dialogueText,
            targetWord: targetObj.word,
            hintExample: targetObj.example,
            isAudioMode
        };
    }
}

const rpgEngine = new RPGEngine();
if (typeof window !== 'undefined') window.rpgEngine = rpgEngine;
if (typeof module !== 'undefined') module.exports = rpgEngine;
