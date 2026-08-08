/* 10-Hero CEFR A0 -> A1 Progression & RPG Engine with Strict CEFR Tier Leveling Gating */

// Official Oxford / Cambridge CEFR A1 Core Vocabulary (50 Balanced Words per Hero = 500 Total Essential Words)
function generateHeroWords(heroId) {
    const wordLists = {
        valerius: [
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
            ["Husband", "/ˈhʌz.bənd/", "Муж", "Her husband is a warrior."],
            ["Wife", "/waɪf/", "Жена", "His wife is a healer."],
            ["Parent", "/ˈpeə.rənt/", "Родитель", "Respect your parent."],
            ["Baby", "/ˈbeɪ.bi/", "Ребёнок (малыш)", "A sleeping baby."],
            ["Child", "/tʃaɪld/", "Ребёнок", "A clever child."],
            ["Children", "/ˈtʃɪl.drən/", "Дети", "The children are playing."],
            ["Man", "/mæn/", "Мужчина", "A strong man."],
            ["Woman", "/ˈwʊm.ən/", "Женщина", "A noble woman."],
            ["Boy", "/bɔɪ/", "Мальчик", "A young boy."],
            ["Girl", "/ɡɜːl/", "Девочка", "A happy girl."],
            ["Person", "/ˈpɜː.sən/", "Человек", "A kind person."],
            ["People", "/ˈpiː.pəl/", "Люди", "Good people."],
            ["Adult", "/ˈæd.ʌlt/", "Взрослый", "An honest adult."],
            ["Student", "/ˈstjuː.dənt/", "Студент / Ученик", "A diligent student."],
            ["Teacher", "/ˈtiː.tʃər/", "Учитель", "A wise teacher."],
            ["Doctor", "/ˈdɒk.tər/", "Врач", "A skilled doctor."],
            ["Driver", "/ˈdraɪ.vər/", "Водитель", "A careful driver."],
            ["Worker", "/ˈwɜː.kər/", "Рабочий", "A hard worker."],
            ["Actor", "/ˈæk.tər/", "Актёр", "A famous actor."],
            ["Actress", "/ˈæk.trəs/", "Актриса", "A talented actress."],
            ["King", "/kɪŋ/", "Король", "The noble king."],
            ["Queen", "/kwiːn/", "Королева", "The wise queen."],
            ["Knight", "/naɪt/", "Рыцарь", "A brave knight."],
            ["Hero", "/ˈhɪə.rəʊ/", "Герой", "A true hero."],
            ["Warrior", "/ˈwɒr.i.ər/", "Воин", "A strong warrior."],
            ["Good", "/ɡʊd/", "Хороший", "Have a good day."],
            ["Fine", "/faɪn/", "В порядке", "I am fine, thank you."],
            ["Yes", "/jes/", "Да", "Yes, I agree."],
            ["No", "/nəʊ/", "Нет", "No problem."],
            ["Please", "/pliːz/", "Пожалуйста", "Help me, please."],
            ["Thank you", "/θæŋk juː/", "Спасибо", "Thank you very much."],
            ["Welcome", "/ˈwel.kəm/", "Добро пожаловать", "Welcome to our outpost."],
            ["Hi", "/haɪ/", "Привет", "Hi my friend."],
            ["Nice", "/naɪs/", "Приятный", "Nice to meet you."],
            ["Meet", "/miːt/", "Встречать", "Glad to meet you."],
            ["Happy", "/ˈhæp.i/", "Счастливый", "I am very happy."],
            ["Brave", "/breɪv/", "Храбрый", "Valerius is brave."],
            ["Strong", "/strɒŋ/", "Сильный", "A strong shield."],
            ["Shield", "/ʃiːld/", "Щит", "A silver shield."],
            ["Armor", "/ˈɑː.mər/", "Доспехи", "Heavy armor."],
            ["Sword", "/sɔːd/", "Меч", "A sharp sword."],
            ["Noble", "/ˈnəʊ.bəl/", "Благородный", "A noble paladin."],
            ["Truth", "/truːθ/", "Правда", "Speak the truth."],
            ["Honor", "/ˈɒn.ər/", "Честь", "Fight with honor."],
            ["Duty", "/ˈdjuː.ti/", "Долг", "Do your duty."],
            ["Realm", "/relm/", "Королевство", "Protect our realm."],
            ["Outpost", "/ˈaʊt.pəʊst/", "Аванпост", "Silver Outpost."],
            ["Guard", "/ɡɑːd/", "Страж", "Guard the gate."],
            ["Protect", "/prəˈtekt/", "Защищать", "Protect the weak."],
            ["Stand", "/stænd/", "Стоять", "Stand strong."],
            ["Help", "/help/", "Помогать", "I can help you."],
            ["Be", "/biː/", "Быть", "Be brave."],
            ["Am", "/æm/", "Есть (я)", "I am Valerius."],
            ["Is", "/ɪz/", "Есть (он/она/оно)", "He is ready."],
            ["Are", "/ɑːr/", "Есть (ты/мы/они)", "They are knights."],
            ["Become", "/bɪˈkʌm/", "Становиться", "Become a paladin."],
            ["Live", "/lɪv/", "Жить", "We live in peace."],
            ["Life", "/laɪf/", "Жизнь", "A good life."],
            ["Self", "/self/", "Сам / Себя", "Be your true self."],
            ["Audience", "/ˈɔː.di.əns/", "Аудитория", "Address the audience."],
            ["Group", "/ɡruːp/", "Группа людей", "A group of knights."],
            ["Crowd", "/kraʊd/", "Толпа", "A crowd of citizens."],
            ["Team", "/tiːm/", "Команда", "Valerius leads the team."],
            ["Squad", "/skwɒd/", "Отряд", "A brave squad."],
            ["Gentleman", "/ˈdʒen.təl.mən/", "Джентльмен", "A noble gentleman."],
            ["Lady", "/ˈleɪ.di/", "Дама / Леди", "A graceful lady."],
            ["Sir", "/sɜːr/", "Сэр", "Yes, sir!"],
            ["Madam", "/ˈmæd.əm/", "Мадам", "Welcome, madam."],
            ["Human", "/ˈhjuː.mən/", "Человек / Человеческий", "A noble human."],
            ["Mankind", "/mænˈkaɪnd/", "Человечество", "Protect mankind."],
            ["Citizen", "/ˈsɪt.ɪ.zən/", "Горожанин / Гражданин", "A city citizen."],
            ["Guest", "/ɡest/", "Гость", "Welcome, dear guest."],
            ["Stranger", "/ˈstreɪn.dʒər/", "Незнакомец", "Help a stranger."],
            ["Uncle", "/ˈʌŋ.kəl/", "Дядя", "My uncle is a knight."],
            ["Aunt", "/ɑːnt/", "Тётя", "My aunt is a healer."],
            ["Cousin", "/ˈkʌz.ən/", "Двоюродный брат / сестра", "My cousin lives here."],
            ["Grandfather", "/ˈɡræn.fɑː.ðər/", "Дедушка", "My grandfather was wise."],
            ["Grandmother", "/ˈɡræn.mʌð.ər/", "Бабушка", "My grandmother is kind."],
            ["Grandparent", "/ˈɡræn.peə.rənt/", "Дедушка или бабушка", "Respect your grandparent."],
            ["Boyfriend", "/ˈbɔɪ.frend/", "Парень (друг)", "A loyal boyfriend."],
            ["Girlfriend", "/ˈɡɜːl.frend/", "Девушка", "A happy girlfriend."],
            ["Partner", "/ˈpɑːt.nər/", "Партнёр / Соратник", "A brave battle partner."],
            ["Member", "/ˈmem.bər/", "Член команды / гильдии", "A member of the squad."],
            ["Companion", "/kəmˈpæn.jən/", "Спутник", "A trusted companion."],
            ["Cooking", "/ˈkʊk.ɪŋ/", "Готовка / Кулинария", "Cooking delicious food."],
            ["Conversation", "/ˌkɒn.vəˈseɪ.ʃən/", "Разговор / Беседа", "A friendly conversation with Valerius."]
        ],
        astraea: [
            ["Have", "/hæv/", "Иметь", "I have a magic wand."],
            ["Has", "/hæz/", "Имеет", "She has a radiant light."],
            ["Want", "/wɒnt/", "Хотеть", "I want to help everyone."],
            ["Need", "/niːd/", "Нуждаться", "Do you need some rest?"],
            ["Eat", "/iːt/", "Есть / кушать", "Eat fresh apples."],
            ["Drink", "/drɪŋk/", "Пить", "Drink clean water."],
            ["Food", "/fuːd/", "Еда", "Good food for health."],
            ["Bread", "/bred/", "Хлеб", "Fresh warm bread."],
            ["Water", "/ˈwɔː.tər/", "Вода", "A glass of cold water."],
            ["Milk", "/mɪlk/", "Молоко", "Fresh white milk."],
            ["Tea", "/tiː/", "Чай", "Hot herbal tea."],
            ["Coffee", "/ˈkɒf.i/", "Кофе", "Morning black coffee."],
            ["Juice", "/dʒuːs/", "Сок", "Fresh orange juice."],
            ["Fruit", "/fruːt/", "Фрукт", "Sweet yellow fruit."],
            ["Apple", "/ˈæp.əl/", "Яблоко", "A red sweet apple."],
            ["Banana", "/bəˈnɑː.nə/", "Банан", "A yellow banana."],
            ["Orange", "/ˈɒr.ɪndʒ/", "Апельсин", "Juicy orange fruit."],
            ["Meat", "/miːt/", "Мясо", "Cooked warm meat."],
            ["Fish", "/fɪʃ/", "Рыба", "Fresh ocean fish."],
            ["Chicken", "/ˈtʃɪk.ɪn/", "Курица", "Roasted chicken."],
            ["Egg", "/eɡ/", "Яйцо", "A boiled egg."],
            ["Rice", "/raɪs/", "Рис", "White boiled rice."],
            ["Soup", "/suːp/", "Суп", "Hot vegetable soup."],
            ["Butter", "/ˈbʌt.ər/", "Сливочное масло", "Spread butter on bread."],
            ["Cheese", "/tʃiːz/", "Сыр", "Yellow fresh cheese."],
            ["Chocolate", "/ˈtʃɒk.lət/", "Шоколад", "Sweet dark chocolate."],
            ["Cake", "/keɪk/", "Торт / Пирог", "A birthday cake."],
            ["Cookie", "/ˈkʊk.i/", "Печенье", "Sweet chocolate cookie."],
            ["Ice cream", "/ˌaɪs ˈkriːm/", "Мороженое", "Cold vanilla ice cream."],
            ["Sugar", "/ˈʃʊɡ.ər/", "Сахар", "Add some sugar."],
            ["Salt", "/sɔːlt/", "Соль", "A pinch of salt."],
            ["Pepper", "/ˈpep.ər/", "Перец", "Black pepper."],
            ["Oil", "/ɔɪl/", "Масло (растительное)", "Olive oil."],
            ["Onion", "/ˈʌn.jən/", "Лук", "Fresh yellow onion."],
            ["Potato", "/pəˈteɪ.təʊ/", "Картофель", "Boiled potato."],
            ["Tomato", "/təˈmɑː.təʊ/", "Помидор", "Red ripe tomato."],
            ["Vegetable", "/ˈvedʒ.tə.bəl/", "Овощ", "Green vegetable."],
            ["Salad", "/ˈsæl.əd/", "Салат", "Fresh green salad."],
            ["Sandwich", "/ˈsæn.wɪdʒ/", "Сэндвич", "A cheese sandwich."],
            ["Pasta", "/ˈpæs.tə/", "Паста / Макароны", "Delicious Italian pasta."],
            ["Pizza", "/ˈpiːt.sə/", "Пицца", "Hot cheese pizza."],
            ["Meal", "/miːl/", "Приём пищи", "A healthy meal."],
            ["Breakfast", "/ˈbrek.fəst/", "Завтрак", "Eat breakfast."],
            ["Lunch", "/lʌntʃ/", "Обед", "Have lunch at noon."],
            ["Dinner", "/ˈdɪn.ər/", "Ужин", "Cook dinner."],
            ["Dish", "/dɪʃ/", "Блюдо", "A tasty dish."],
            ["Plate", "/pleɪt/", "Тарелка", "A clean white plate."],
            ["Bowl", "/bəʊl/", "Миска / Пиала", "A bowl of hot soup."],
            ["Cup", "/kʌp/", "Чашка", "A cup of hot tea."],
            ["Glass", "/ɡlɑːs/", "Стакан", "A glass of water."],
            ["Bottle", "/ˈbɒt.əl/", "Бутылка", "A bottle of juice."],
            ["Fork", "/fɔːk/", "Вилка", "A silver fork."],
            ["Knife", "/naɪf/", "Нож", "A sharp knife."],
            ["Spoon", "/spuːn/", "Ложка", "A soup spoon."],
            ["Cook", "/kʊk/", "Готовить", "Cook good meals."],
            ["Bake", "/beɪk/", "Печь", "Bake fresh bread."],
            ["Wash", "/wɒʃ/", "Мыть", "Wash your hands."],
            ["Clean", "/kliːn/", "Чистый", "Keep the room clean."],
            ["Open", "/ˈəʊ.pən/", "Открывать", "Open the door."],
            ["Close", "/kləʊz/", "Закрывать", "Close the window."],
            ["Give", "/ɡɪv/", "Давать", "Give me a cup."],
            ["Take", "/teɪk/", "Брать", "Take an apple."],
            ["Make", "/meɪk/", "Делать / готовить", "Make hot coffee."],
            ["Do", "/duː/", "Делать", "Do good deeds."],
            ["Rest", "/rest/", "Отдыхать", "Rest after work."],
            ["Smile", "/smaɪl/", "Улыбаться", "A bright kind smile."],
            ["Heal", "/hiːl/", "Исцелять", "Heal with light."],
            ["Care", "/keər/", "Заботиться", "Care for your friends."],
            ["Love", "/lʌv/", "Любить", "Spread love."],
            ["Like", "/laɪk/", "Нравиться", "I like sweet tea."],
            ["Prefer", "/prɪˈfɜːr/", "Предпочитать", "I prefer fresh fruit."],
            ["Enjoy", "/ɪnˈdʒɔɪ/", "Наслаждаться", "Enjoy your meal."],
            ["Tasty", "/ˈteɪ.sti/", "Вкусный", "A tasty sandwich."],
            ["Sweet", "/swiːt/", "Сладкий", "Sweet apples."],
            ["Fresh", "/freʃ/", "Свежий", "Fresh cold water."],
            ["Hot", "/hɒt/", "Горячий", "Hot morning tea."],
            ["Cold", "/kəʊld/", "Холодный", "Cold ice cream."],
            ["Hungry", "/ˈhʌŋ.ɡri/", "Голодный", "Are you hungry?"],
            ["Thirsty", "/ˈθɜː.sti/", "Испытывающий жажду", "I am very thirsty."],
            ["Full", "/fʊl/", "Сытый / Полный", "I am full now."],
            ["Healthy", "/ˈhel.θi/", "Здоровый", "Healthy fresh food."],
            ["Blessing", "/ˈbles.ɪŋ/", "Благословение", "A priestess blessing."],
            ["Temple", "/ˈtem.pəl/", "Храм", "Temple of Light."],
            ["Light", "/laɪt/", "Свет", "Radiant holy light."],
            ["Peace", "/piːs/", "Мир / Покой", "May peace be with you."],
            ["Beer", "/bɪər/", "Пиво", "A glass of cold beer."],
            ["Wine", "/waɪn/", "Вино", "Red grape wine."],
            ["Biscuit", "/ˈbɪs.kɪt/", "Печенье (брит.)", "A tea biscuit."],
            ["Candy", "/ˈkæn.di/", "Конфета", "Sweet fruit candy."],
            ["Sweets", "/swiːts/", "Сладости", "A box of sweets."],
            ["Cream", "/kriːm/", "Сливки / Крем", "Fresh whipped cream."],
            ["Garlic", "/ˈɡɑː.lɪk/", "Чеснок", "Add fresh garlic."],
            ["Lemon", "/ˈlem.ən/", "Лимон", "Yellow sour lemon."],
            ["Strawberry", "/ˈstrɔː.bər.i/", "Клубника", "Sweet red strawberry."],
            ["Grape", "/ɡreɪp/", "Виноград", "Fresh green grape."],
            ["Pear", "/peər/", "Груша", "A juicy yellow pear."],
            ["Peach", "/piːtʃ/", "Персик", "A sweet peach."],
            ["Carrot", "/ˈkær.ət/", "Морковь", "Orange fresh carrot."],
            ["Bean", "/biːn/", "Боб / Фасоль", "Green bean."],
            ["Corn", "/kɔːn/", "Кукуруза", "Yellow corn."],
            ["Steak", "/steɪk/", "Стейк", "Beef steak."],
            ["Burger", "/ˈbɜː.ɡər/", "Бургер", "A cheese burger."],
            ["Menu", "/ˈmen.juː/", "Меню", "Look at the menu."],
            ["Order", "/ˈɔː.dər/", "Заказ / Заказывать", "Order food."],
            ["Bill", "/bɪl/", "Счёт (в ресторане)", "Pay the bill."],
            ["Tip", "/tɪp/", "Чаевые", "Leave a tip."],
            ["Chef", "/ʃef/", "Шеф-повар", "A master chef."],
            ["Recipe", "/ˈres.ə.pi/", "Рецепт", "A secret recipe."],
            ["Flavor", "/ˈfleɪ.vər/", "Вкус / Аромат", "Rich flavor."],
            ["Sour", "/saʊər/", "Кислый", "Sour lemon."]
        ],
        ignis: [
            ["This", "/ðɪs/", "Это / Этот", "This is a red book."],
            ["That", "/ðæt/", "То / Тот", "That is a glowing staff."],
            ["These", "/ðiːz/", "Эти", "These are my fire rings."],
            ["Those", "/ðəʊz/", "Те", "Those are blue potions."],
            ["Red", "/red/", "Красный", "A red fire flame."],
            ["Blue", "/bluː/", "Синий", "A blue magic crystal."],
            ["Green", "/ɡriːn/", "Зелёный", "Green magic book."],
            ["Yellow", "/ˈjel.əʊ/", "Жёлтый", "A yellow bright spark."],
            ["Black", "/blæk/", "Чёрный", "A black magic cloak."],
            ["White", "/waɪt/", "Белый", "A white glowing orb."],
            ["Brown", "/braʊn/", "Коричневый", "A brown leather bag."],
            ["Grey", "/ɡreɪ/", "Серый", "Grey smoke."],
            ["Pink", "/pɪŋk/", "Розовый", "A pink potion."],
            ["Purple", "/ˈpɜː.pəl/", "Фиолетовый", "Purple flame."],
            ["Book", "/bʊk/", "Книга", "A red spellbook."],
            ["Staff", "/stɑːf/", "Посох", "A magic wizard staff."],
            ["Ring", "/rɪŋ/", "Кольцо", "A gold fire ring."],
            ["Cloak", "/kləʊk/", "Мантия", "A red wizard cloak."],
            ["Hat", "/hæt/", "Шляпа", "A pointed wizard hat."],
            ["Coat", "/kəʊt/", "Пальто", "A warm red coat."],
            ["Jacket", "/ˈdʒæk.ɪt/", "Куртка", "A leather jacket."],
            ["Shirt", "/ʃɜːt/", "Рубашка", "A clean white shirt."],
            ["T-shirt", "/ˈtiː.ʃɜːt/", "Футболка", "A black T-shirt."],
            ["Dress", "/dres/", "Платье", "A elegant dress."],
            ["Skirt", "/skɜːt/", "Юбка", "A blue skirt."],
            ["Trousers", "/ˈtraʊ.zəz/", "Брюки", "Black trousers."],
            ["Jeans", "/dʒiːnz/", "Джинсы", "Blue denim jeans."],
            ["Shoes", "/ʃuːz/", "Обувь / Туфли", "Leather shoes."],
            ["Boots", "/buːts/", "Сапоги", "Strong magic boots."],
            ["Socks", "/sɒks/", "Носки", "Warm wool socks."],
            ["Suit", "/suːt/", "Костюм", "A formal suit."],
            ["Clothes", "/kləʊðz/", "Одежда", "Clean wizard clothes."],
            ["Belt", "/belt/", "Ремень", "A brown leather belt."],
            ["Pocket", "/ˈpɒk.ɪt/", "Карман", "Key in my pocket."],
            ["Wallet", "/ˈwɒl.ɪt/", "Кошелёк", "A leather wallet."],
            ["Bag", "/bæɡ/", "Сумка", "A magic bag."],
            ["Box", "/bɒks/", "Коробка / Ящик", "A wood treasure box."],
            ["Key", "/kiː/", "Ключ", "A brass door key."],
            ["Pen", "/pen/", "Ручка", "Write with a pen."],
            ["Pencil", "/ˈpen.səl/", "Карандаш", "Draw with a pencil."],
            ["Paper", "/ˈpeɪ.pər/", "Бумага", "A sheet of paper."],
            ["Desk", "/desk/", "Письменный стол", "Paper on the desk."],
            ["Table", "/ˈteɪ.bəl/", "Стол", "A big wood table."],
            ["Chair", "/tʃeər/", "Стул", "Sit on a chair."],
            ["Door", "/dɔːr/", "Дверь", "Open the door."],
            ["Window", "/ˈwɪn.dəʊ/", "Окно", "Look out the window."],
            ["Phone", "/fəʊn/", "Телефон", "A red smart phone."],
            ["Mobile", "/ˈməʊ.baɪl/", "Мобильный", "A mobile phone."],
            ["Computer", "/kəmˈpjuː.tər/", "Компьютер", "A fast computer."],
            ["Clock", "/klɒk/", "Часы (настенные)", "Clock on the wall."],
            ["Watch", "/wɒtʃ/", "Часы (наручные)", "A gold wrist watch."],
            ["Glasses", "/ˈɡlɑː.sɪz/", "Очки", "Wizard reading glasses."],
            ["Money", "/ˈmʌn.i/", "Деньги", "Pay with money."],
            ["Coin", "/kɔɪn/", "Монета", "A gold coin."],
            ["Price", "/praɪs/", "Цена", "What is the price?"],
            ["Cost", "/kɒst/", "Стоимость", "High magic cost."],
            ["Dollar", "/ˈdɒl.ər/", "Доллар", "Ten dollars."],
            ["Euro", "/ˈjʊə.rəʊ/", "Евро", "Five euros."],
            ["Cash", "/kæʃ/", "Наличные", "Pay in cash."],
            ["Market", "/ˈmɑː.kɪt/", "Рынок", "Go to the market."],
            ["Shop", "/ʃɒp/", "Магазин", "A magic potion shop."],
            ["Store", "/stɔːr/", "Магазин / Склад", "A general store."],
            ["Supermarket", "/ˈsuː.pəˌmɑː.kɪt/", "Супермаркет", "Buy items in supermarket."],
            ["Buy", "/baɪ/", "Покупать", "Buy a new potion."],
            ["Sell", "/sel/", "Продавать", "Sell rare crystals."],
            ["Pay", "/peɪ/", "Платить", "Pay for the book."],
            ["Cheap", "/tʃiːp/", "Дешёвый", "A cheap potion."],
            ["Expensive", "/ɪkˈspen.sɪv/", "Дорогой", "An expensive staff."],
            ["Fire", "/faɪər/", "Огонь", "Pyromancer fire."],
            ["Flame", "/fleɪm/", "Пламя", "A bright flame."],
            ["Spark", "/spɑːk/", "Искра", "A magic spark."],
            ["Magic", "/ˈmædʒ.ɪk/", "Магия", "Arcane fire magic."],
            ["Wizard", "/ˈwɪz.əd/", "Волшебник", "Ignis the wizard."],
            ["Spell", "/spel/", "Заклинание", "Cast a fire spell."],
            ["Bright", "/braɪt/", "Яркий", "A bright light."],
            ["Glowing", "/ˈɡləʊ.ɪŋ/", "Светящийся", "A glowing staff."],
            ["A", "/ə/", "Артикль (неопр.)", "This is a book."],
            ["An", "/ən/", "Артикль (перед гласной)", "This is an apple."],
            ["The", "/ðə/", "Артикль (определённый)", "The fire is hot."],
            ["Look", "/lʊk/", "Смотреть", "Look at this staff."],
            ["See", "/siː/", "Видеть", "I see a fire."],
            ["Show", "/ʃəʊ/", "Показывать", "Show me your book."],
            ["Color", "/ˈkʌl.ər/", "Цвет", "What color is it?"],
            ["Purse", "/pɜːs/", "Дамская сумочка / Кошелёк", "A leather purse."],
            ["Umbrella", "/ʌmˈbrel.ə/", "Зонт", "A red umbrella."],
            ["Luggage", "/ˈlʌɡ.ɪdʒ/", "Багаж", "Heavy luggage."],
            ["Suitcase", "/ˈsuːt.keɪs/", "Чемодан", "A big travel suitcase."],
            ["Backpack", "/ˈbæk.pæk/", "Рюкзак", "A red wizard backpack."],
            ["Cap", "/kæp/", "Кепка", "A black sports cap."],
            ["Gloves", "/ɡlʌvz/", "Перчатки", "Leather wizard gloves."],
            ["Scarf", "/skɑːf/", "Шарф", "A warm red scarf."],
            ["Uniform", "/ˈjuː.nɪ.fɔːm/", "Форма / Униформа", "A wizard uniform."],
            ["Fashion", "/ˈfæʃ.ən/", "Мода", "Modern fashion."],
            ["Style", "/staɪl/", "Стиль", "Wizard style."],
            ["Silverware", "/ˈsɪl.və.weər/", "Серебряные изделия", "Polished silverware."],
            ["Goldware", "/ˈɡəʊld.weər/", "Золотые изделия", "Shining goldware."],
            ["Jewelry", "/ˈdʒuː.əl.ri/", "Ювелирные украшения", "Rare fire jewelry."],
            ["Diamond", "/ˈdaɪə.mənd/", "Алмаз / Бриллиант", "A glowing diamond."],
            ["Ruby", "/ˈruː.bi/", "Рубин", "A red fire ruby."],
            ["Emerald", "/ˈem.ər.əld/", "Изумруд", "A green emerald."],
            ["Sapphire", "/ˈsæf.aɪər/", "Сапфир", "A blue sapphire."],
            ["Crystal", "/ˈkrɪs.təl/", "Кристалл", "A magic crystal."],
            ["Shopping", "/ˈʃɒp.ɪŋ/", "Шоппинг / Покупки", "Go shopping."],
            ["Sale", "/seɪl/", "Распродажа", "Big item sale."],
            ["Discount", "/ˈdɪs.kaʊnt/", "Скидка", "A 20% discount."],
            ["Receipt", "/rɪˈsiːt/", "Чек (покупка)", "Keep the receipt."],
            ["Trade", "/treɪd/", "Торговать / Торговля", "Trade magic items."],
            ["Merchant", "/ˈmɜː.tʃənt/", "Купец", "A wealthy merchant."],
            ["Lamp", "/læmp/", "Лампа / Светильник", "Turn on the desk lamp."],
            ["About", "/əˈbaʊt/", "О / Около", "Tell me about your quest."]
        ],
        frostina: [
            ["Time", "/taɪm/", "Время", "What time is it?"],
            ["Hour", "/aʊər/", "Час", "One hour of study."],
            ["Minute", "/ˈmɪn.ɪt/", "Минута", "Wait five minutes."],
            ["Second", "/ˈsek.ənd/", "Секунда", "Just a second."],
            ["Morning", "/ˈmɔː.nɪŋ/", "Утро", "Good morning!"],
            ["Afternoon", "/ˌɑːf.təˈnuːn/", "День (после полудня)", "Good afternoon!"],
            ["Evening", "/ˈiːv.nɪŋ/", "Вечер", "Good evening!"],
            ["Night", "/naɪt/", "Ночь", "Good night, sleep well."],
            ["Midnight", "/ˈmɪd.naɪt/", "Полночь", "Study until midnight."],
            ["Noon", "/nuːn/", "Полдень", "Meet at noon."],
            ["Today", "/təˈdeɪ/", "Сегодня", "It is cold today."],
            ["Tomorrow", "/təˈmɒr.əʊ/", "Завтра", "See you tomorrow."],
            ["Yesterday", "/ˈjes.tə.deɪ/", "Вчера", "It snowed yesterday."],
            ["Day", "/deɪ/", "День", "Have a nice day."],
            ["Week", "/wiːk/", "Неделя", "Seven days in a week."],
            ["Month", "/mʌnθ/", "Месяц", "Twelve months in a year."],
            ["Year", "/jɪər/", "Год", "Happy New Year!"],
            ["Monday", "/ˈmʌn.deɪ/", "Понедельник", "Start work on Monday."],
            ["Tuesday", "/ˈtjuːz.deɪ/", "Вторник", "Train on Tuesday."],
            ["Wednesday", "/ˈwenz.deɪ/", "Среда", "Study on Wednesday."],
            ["Thursday", "/ˈθɜːz.deɪ/", "Четверг", "Meeting on Thursday."],
            ["Friday", "/ˈfraɪ.deɪ/", "Пятница", "Friday is my favorite day."],
            ["Saturday", "/ˈsæt.ə.deɪ/", "Суббота", "Rest on Saturday."],
            ["Sunday", "/ˈsʌn.deɪ/", "Воскресенье", "Walk in the park on Sunday."],
            ["January", "/ˈdʒæn.ju.ə.ri/", "Январь", "Cold in January."],
            ["February", "/ˈfeb.ru.ə.ri/", "Февраль", "Snowy in February."],
            ["March", "/mɑːtʃ/", "Март", "Spring starts in March."],
            ["April", "/ˈeɪ.prəl/", "Апрель", "Rain in April."],
            ["May", "/meɪ/", "Май", "Flowers in May."],
            ["June", "/dʒuːn/", "Июнь", "Summer begins in June."],
            ["July", "/dʒuˈlaɪ/", "Июль", "Hot in July."],
            ["August", "/ˈɔː.ɡəst/", "Август", "Sunny in August."],
            ["September", "/sepˈtem.bər/", "Сентябрь", "School in September."],
            ["October", "/ɒkˈtəʊ.bər/", "Октябрь", "Autumn in October."],
            ["November", "/nəʊˈvem.bər/", "Ноябрь", "Windy in November."],
            ["December", "/dɪˈsem.bər/", "Декабрь", "Snow in December."],
            ["Spring", "/sprɪŋ/", "Весна", "Fresh green spring."],
            ["Summer", "/ˈsʌm.ər/", "Лето", "Warm sunny summer."],
            ["Autumn", "/ˈɔː.təm/", "Осень", "Golden autumn leaves."],
            ["Fall", "/fɔːl/", "Осень (амер.)", "Cool fall weather."],
            ["Winter", "/ˈwɪn.tər/", "Зима", "Cold icy winter."],
            ["Weather", "/ˈweð.ər/", "Погода", "How is the weather?"],
            ["Sun", "/sʌn/", "Солнце", "The sun is shining."],
            ["Sunny", "/ˈsʌn.i/", "Солнечно", "It is sunny today."],
            ["Rain", "/reɪn/", "Дождь", "Heavy rain outside."],
            ["Rainy", "/ˈreɪ.ni/", "Дождливо", "A rainy afternoon."],
            ["Snow", "/snəʊ/", "Снег", "White cold snow."],
            ["Snowy", "/ˈsnəʊ.i/", "Снежно", "A snowy winter day."],
            ["Ice", "/aɪs/", "Лёд", "Frostina ice cavern."],
            ["Icy", "/ˈaɪ.si/", "Ледяной", "Icy wind and snow."],
            ["Warm", "/wɔːm/", "Тёплый", "A warm sunny day."],
            ["Cool", "/kuːl/", "Прохладный / Клёвый", "Cool winter air."],
            ["Wind", "/wɪnd/", "Ветер", "Strong cold wind."],
            ["Windy", "/ˈwɪn.di/", "Ветрено", "A windy evening."],
            ["Sky", "/skaɪ/", "Небо", "Clear blue sky."],
            ["Cloud", "/klaʊd/", "Облако", "White cloud."],
            ["Cloudy", "/ˈklaʊ.di/", "Облачно", "It is cloudy today."],
            ["Always", "/ˈɔːl.weɪz/", "Всегда", "I always wake up early."],
            ["Usually", "/ˈjuː.ʒu.ə.li/", "Обычно", "I usually study at night."],
            ["Often", "/ˈɒf.ən/", "Часто", "We often practice."],
            ["Sometimes", "/ˈsʌm.taɪmz/", "Иногда", "Sometimes it rains."],
            ["Never", "/ˈnev.ər/", "Никогда", "Never give up."],
            ["Early", "/ˈɜː.li/", "Рано", "Wake up early."],
            ["Late", "/leɪt/", "Поздно", "Do not be late."],
            ["Now", "/naʊ/", "Сейчас", "Start right now."],
            ["Soon", "/suːn/", "Скоро", "See you soon."],
            ["Already", "/ɔːlˈred.i/", "Уже", "I am already here."],
            ["Still", "/stɪl/", "Всё ещё", "It is still snowing."],
            ["Wake up", "/weɪk ʌp/", "Просыпаться", "Wake up at 7 o'clock."],
            ["Get up", "/ɡet ʌp/", "Вставать", "Get up from bed."],
            ["Sleep", "/sliːp/", "Спать", "Sleep eight hours."],
            ["Bed", "/bed/", "Кровать", "Go to bed."],
            ["Routine", "/ruːˈtiːn/", "Распорядок дня", "Daily routine."],
            ["Every", "/ˈev.ri/", "Каждый", "Every single day."],
            ["Start", "/stɑːt/", "Начинать", "Start the day."],
            ["Finish", "/ˈfɪn.ɪʃ/", "Заканчивать", "Finish work."],
            ["Wait", "/weɪt/", "Ждать", "Wait for me."],
            ["o'clock", "/əˈklɒk/", "По часам", "At 5 o'clock."],
            ["Half past", "/hɑːf pɑːst/", "Половина после", "Half past four."],
            ["Quarter past", "/ˈkwɔː.tər pɑːst/", "Четверть после", "Quarter past six."],
            ["Quarter to", "/ˈkwɔː.tər tuː/", "Четверть до", "Quarter to seven."],
            ["At", "/æt/", "В (указание времени)", "At midnight."],
            ["Degrees", "/dɪˈɡriːz/", "Градусы", "Ten degrees below zero."],
            ["Temperature", "/ˈtem.prə.tʃər/", "Температура", "Low temperature."],
            ["Freeze", "/friːz/", "Замораживать", "Freeze the water."],
            ["Frost", "/frɒst/", "Мороз", "Morning frost."],
            ["Blizzard", "/ˈblɪz.əd/", "Вьюга / Метель", "Winter blizzard."],
            ["Stormy", "/ˈstɔː.mi/", "Штормовой / Бурный", "Stormy weather."],
            ["Fog", "/fɒɡ/", "Туман", "Thick ice fog."],
            ["Foggy", "/ˈfɒɡ.i/", "Туманно", "A foggy morning."],
            ["Forecast", "/ˈfɔː.kɑːst/", "Прогноз (погоды)", "Weather forecast."],
            ["Daily", "/ˈdeɪ.li/", "Ежедневный", "Daily practice."],
            ["Weekly", "/ˈwiː.kli/", "Еженедельный", "Weekly test."],
            ["Monthly", "/ˈmʌn.θli/", "Ежемесячный", "Monthly review."],
            ["Yearly", "/ˈjɪə.li/", "Ежегодный", "Yearly goal."],
            ["Moment", "/ˈməʊ.mənt/", "Момент", "Just a moment."],
            ["Period", "/ˈpɪə.ri.əd/", "Период", "A short period."],
            ["Era", "/ˈɪə.rə/", "Эра / Эпоха", "Ice era."],
            ["Century", "/ˈsen.tʃər.i/", "Век / Столетие", "21st century."],
            ["Ago", "/əˈɡəʊ/", "Тому назад", "Three days ago."],
            ["Lately", "/ˈleɪt.li/", "В последнее время", "Cold lately."],
            ["Recent", "/ˈriː.sənt/", "Недавний", "Recent snowfall."],
            ["Forever", "/fəˈrev.ər/", "Навсегда", "Ice forever."],
            ["Timetable", "/ˈtaɪmˌteɪ.bəl/", "Расписание поезда/уроков", "Check the timetable."],
            ["Alarm", "/əˈlɑːm/", "Будильник", "Morning alarm clock."],
            ["Punctual", "/ˈpʌŋk.tʃu.əl/", "Пунктуальный", "Be punctual."],
            ["Season", "/ˈsiː.zən/", "Сезон / Время года", "Favorite season."],
            ["Across", "/əˈkrɒs/", "Через / На той стороне", "Walk across the bridge."],
            ["Action", "/ˈæk.ʃən/", "Действие / Поступки", "Heroes take bold action."],
            ["Activity", "/ækˈtɪv.ə.ti/", "Деятельность / Занятие", "A fun daily activity."]
        ],
        zephyr: [
            ["Where", "/weər/", "Где / Куда", "Where are you going?"],
            ["When", "/wen/", "Когда", "When do you study?"],
            ["Why", "/waɪ/", "Почему", "Why are you here?"],
            ["How", "/haʊ/", "Как", "How are you today?"],
            ["Who", "/huː/", "Кто", "Who is that hero?"],
            ["What", "/wɒt/", "Что / Какой", "What is your goal?"],
            ["Which", "/wɪtʃ/", "Который", "Which map do you prefer?"],
            ["Whose", "/huːz/", "Чей", "Whose key is this?"],
            ["City", "/ˈsɪt.i/", "Город", "A big beautiful city."],
            ["Town", "/taʊn/", "Город (небольшой)", "A quiet small town."],
            ["Village", "/ˈvɪl.ɪdʒ/", "Деревня", "A green quiet village."],
            ["Country", "/ˈkʌn.tri/", "Страна", "A peaceful country."],
            ["Street", "/striːt/", "Улица", "Walk on the street."],
            ["Road", "/rəʊd/", "Дорога", "A long wide road."],
            ["Path", "/pɑːθ/", "Тропа", "A mountain path."],
            ["Map", "/mæp/", "Карта", "A detailed travel map."],
            ["Park", "/pɑːk/", "Парк", "Walk in the green park."],
            ["Square", "/skweər/", "Площадь", "Main town square."],
            ["Center", "/ˈsen.tər/", "Центр", "City center."],
            ["Station", "/ˈsteɪ.ʃən/", "Станция", "Train station."],
            ["Stop", "/stɒp/", "Остановка", "Bus stop."],
            ["Airport", "/ˈeə.pɔːt/", "Аэропорт", "Fly to the airport."],
            ["Bus", "/bʌs/", "Автобус", "Take a city bus."],
            ["Car", "/kɑːr/", "Машина", "A fast red car."],
            ["Taxi", "/ˈtæk.si/", "Такси", "Call a taxi."],
            ["Train", "/treɪn/", "Поезд", "A fast express train."],
            ["Plane", "/pleɪn/", "Самолёт", "A high flying plane."],
            ["Boat", "/bəʊt/", "Лодка", "A small wooden boat."],
            ["Ship", "/ʃɪp/", "Корабль", "A big ocean ship."],
            ["Bicycle", "/ˈbaɪ.sɪ.kəl/", "Велосипед", "Ride a bicycle."],
            ["Bike", "/baɪk/", "Велик / Байк", "Ride a bike."],
            ["Ticket", "/ˈtɪk.ɪt/", "Билет", "A train ticket."],
            ["Travel", "/ˈtræv.əl/", "Путешествовать", "I love to travel."],
            ["Trip", "/trɪp/", "Поездка", "A nice weekend trip."],
            ["Hotel", "/həʊˈtel/", "Отель", "Stay in a good hotel."],
            ["Building", "/ˈbɪl.dɪŋ/", "Здание", "A tall stone building."],
            ["Bank", "/bæŋk/", "Банк / Берег", "Deposit coins in the bank."],
            ["Hospital", "/ˈhɒs.pɪ.təl/", "Больница", "City hospital."],
            ["Museum", "/mjuːˈziː.əm/", "Музей", "Visit the museum."],
            ["School", "/skuːl/", "Школа", "Study at school."],
            ["University", "/ˌjuː.nɪˈvɜː.sə.ti/", "Университет", "Study at university."],
            ["Library", "/ˈlaɪ.brər.i/", "Библиотека", "Read books in library."],
            ["Bridge", "/brɪdʒ/", "Мост", "Cross the stone bridge."],
            ["Tower", "/ˈtaʊ.ər/", "Башня", "Wind marksman tower."],
            ["Castle", "/ˈkɑː.səl/", "Замок", "A royal castle."],
            ["Left", "/left/", "Налево / Левый", "Turn left here."],
            ["Right", "/raɪt/", "Направо / Правый", "Turn right at stop."],
            ["Straight", "/streɪt/", "Прямо", "Go straight ahead."],
            ["North", "/nɔːθ/", "Север", "North wind."],
            ["South", "/saʊθ/", "Юг", "South coast."],
            ["East", "/iːst/", "Восток", "East sunrise."],
            ["West", "/west/", "Запад", "West sunset."],
            ["Near", "/nɪər/", "Около / Рядом", "Near the forest."],
            ["Far", "/fɑːr/", "Далеко", "Is it far away?"],
            ["Here", "/hɪər/", "Здесь", "I am standing here."],
            ["There", "/ðeər/", "Там", "Look over there."],
            ["Everywhere", "/ˈev.ri.weər/", "Везде", "Wind is everywhere."],
            ["In", "/ɪn/", "В (внутри)", "In the room."],
            ["On", "/ɒn/", "На (поверхности)", "On the table."],
            ["Under", "/ˈʌn.dər/", "Под", "Under the tree."],
            ["Above", "/əˈbʌv/", "Над", "Above the clouds."],
            ["Behind", "/bɪˈhaɪnd/", "За / Сзади", "Behind the wall."],
            ["In front of", "/ɪn frʌnt ɒv/", "Перед", "In front of the tower."],
            ["Between", "/bɪˈtwiːn/", "Между", "Between two hills."],
            ["Next to", "/nekst tuː/", "Рядом с", "Next to the door."],
            ["Go", "/ɡəʊ/", "Идти / Ехать", "Go to the city."],
            ["Come", "/kʌm/", "Приходить", "Come here please."],
            ["Walk", "/wɔːk/", "Гулять пешком", "Walk in the park."],
            ["Run", "/rʌn/", "Бегать", "Run fast."],
            ["Fly", "/flaɪ/", "Летать", "Fly in the sky."],
            ["Ride", "/raɪd/", "Ехать верхом", "Ride a horse."],
            ["Drive", "/draɪv/", "Водить (машину)", "Drive a car."],
            ["Arrive", "/əˈraɪv/", "Прибывать", "Arrive at station."],
            ["Leave", "/liːv/", "Уходить / Уезжать", "Leave the town."],
            ["Bow", "/bəʊ/", "Лук (оружие)", "A long wooden bow."],
            ["Arrow", "/ˈær.əʊ/", "Стрела", "A sharp arrow."],
            ["Target", "/ˈtɑː.ɡɪt/", "Цель", "Hit the target."],
            ["Swift", "/swɪft/", "Быстрый / Стремительный", "Swift marksman."],
            ["Scout", "/skaʊt/", "Разведчик", "A wind scout."],
            ["Peak", "/piːk/", "Пик / Вершина", "Mountain peak."],
            ["Cross", "/krɒs/", "Переходить", "Cross the street."],
            ["Follow", "/ˈfɒl.əʊ/", "Следовать", "Follow the map."],
            ["Find", "/faɪnd/", "Находить", "Find the destination."],
            ["Avenue", "/ˈæv.ə.njuː/", "Проспект / Авеню", "Walk on the avenue."],
            ["Corner", "/ˈkɔː.nər/", "Угол (улицы)", "On the street corner."],
            ["Crossroad", "/ˈkrɒs.rəʊd/", "Перекрёсток", "Meet at crossroad."],
            ["Route", "/ruːt/", "Маршрут", "Follow the route."],
            ["Direction", "/daɪˈrek.ʃən/", "Направление", "Which direction?"],
            ["Passport", "/ˈpɑːs.pɔːt/", "Паспорт", "Check your passport."],
            ["Border", "/ˈbɔː.dər/", "Граница", "Cross the border."],
            ["Tourist", "/ˈtʊə.rɪst/", "Турист", "A happy tourist."],
            ["Tourism", "/ˈtʊə.rɪz.əm/", "Туризм", "Enjoy tourism."],
            ["Guide", "/ɡaɪd/", "Гид / Экскурсовод", "A travel guide."],
            ["Journey", "/ˈdʒɜː.ni/", "Путешествие", "A long journey."],
            ["Flight", "/flaɪt/", "Полёт / Рейс", "Plane flight."],
            ["Passenger", "/ˈpæs.ən.dʒər/", "Пассажир", "Bus passenger."],
            ["Traffic", "/ˈtræf.ɪk/", "Дорожное движение", "City traffic."],
            ["Vehicle", "/ˈvɪə.kəl/", "Транспортное средство", "A fast vehicle."],
            ["Motorcycle", "/ˈməʊ.təˌsaɪ.kəl/", "Мотоцикл", "Ride a motorcycle."],
            ["Subway", "/ˈsʌb.weɪ/", "Метро (в США)", "Take the subway."],
            ["Metro", "/ˈmet.rəʊ/", "Метро", "City metro."],
            ["Platform", "/ˈplæt.fɔːm/", "Платформа", "Train platform."],
            ["Destination", "/ˌdes.tɪˈneɪ.ʃən/", "Пункт назначения", "Reach destination."],
            ["Location", "/ləʊˈkeɪ.ʃən/", "Локация / Место", "Pin location."],
            ["District", "/ˈdɪs.trɪkt/", "Округ / Район", "City district."],
            ["Quarter", "/ˈkwɔː.tər/", "Квартал", "Old town quarter."],
            ["Port", "/pɔːt/", "Порт / Гавань", "Ship in the port."],
            ["Harbor", "/ˈhɑː.bər/", "Гавань", "Safe harbor."],
            ["Add", "/æd/", "Добавлять / Складывать", "Add new words to your vocabulary."],
            ["Address", "/əˈdres/", "Адрес", "What is your home address?"]
        ],
        thorin: [
            ["House", "/haʊs/", "Дом", "A big stone house."],
            ["Home", "/həʊm/", "Дом (свой / домашний очаг)", "Welcome to my home."],
            ["Room", "/ruːm/", "Комната", "A clean large room."],
            ["Flat", "/flæt/", "Квартира", "A cozy city flat."],
            ["Apartment", "/əˈpɑːt.mənt/", "Апартаменты", "A modern apartment."],
            ["Kitchen", "/ˈkɪtʃ.ən/", "Кухня", "Cook in the kitchen."],
            ["Bedroom", "/ˈbed.ruːm/", "Спальня", "Sleep in the bedroom."],
            ["Bathroom", "/ˈbɑːθ.ruːm/", "Ванная", "Clean bathroom."],
            ["Garden", "/ˈɡɑː.dən/", "Сад", "A green flower garden."],
            ["Floor", "/flɔːr/", "Пол / Этаж", "Wooden floor."],
            ["Wall", "/wɔːl/", "Стена", "Strong stone wall."],
            ["Roof", "/ruːf/", "Крыша", "High tile roof."],
            ["Picture", "/ˈpɪk.tʃər/", "Картина / Фото", "Picture on the wall."],
            ["Lamp", "/læmp/", "Лампа", "A warm desk lamp."],
            ["Television", "/ˈtel.ɪ.vɪʒ.ən/", "Телевизор", "Watch television."],
            ["TV", "/ˌtiːˈviː/", "ТВ", "Turn on the TV."],
            ["Mirror", "/ˈmɪr.ər/", "Зеркало", "Look in the mirror."],
            ["Towel", "/taʊəl/", "Полотенце", "Clean dry towel."],
            ["Sofa", "/ˈsəʊ.fə/", "Диван", "Sit on the sofa."],
            ["Shelf", "/ʃelf/", "Полка", "Book on the shelf."],
            ["Hammer", "/ˈhæm.ər/", "Молот", "A heavy iron hammer."],
            ["Anvil", "/ˈæn.vɪl/", "Наковальня", "Smith on the anvil."],
            ["Forge", "/fɔːdʒ/", "Кузница", "Dwarven iron forge."],
            ["Metal", "/ˈmet.əl/", "Металл", "Hard forged metal."],
            ["Iron", "/ˈaɪən/", "Железо", "Pure iron ingot."],
            ["Gold", "/ɡəʊld/", "Золото", "Shining gold coin."],
            ["Silver", "/ˈsɪl.vər/", "Серебро", "Bright silver ring."],
            ["Stone", "/stəʊn/", "Камень", "Strong mountain stone."],
            ["Wood", "/wʊd/", "Древесина / Дерево", "Carved oak wood."],
            ["Big", "/bɪɡ/", "Большой", "A big dwarven hammer."],
            ["Large", "/lɑːdʒ/", "Крупный / Большой", "A large iron box."],
            ["Small", "/smɔːl/", "Маленький", "A small copper key."],
            ["Little", "/ˈlɪt.əl/", "Небольшой", "A little ring."],
            ["Long", "/lɒŋ/", "Длинный", "A long wooden haft."],
            ["Short", "/ʃɔːt/", "Короткий", "A short sharp dagger."],
            ["Tall", "/tɔːl/", "Высокий", "A tall stone tower."],
            ["Heavy", "/ˈhev.i/", "Тяжёлый", "Heavy iron armor."],
            ["Weak", "/wiːk/", "Слабый", "Weak old fence."],
            ["Hard", "/hɑːd/", "Твёрдый / Трудный", "Hard forged steel."],
            ["Soft", "/sɒft/", "Мягкий", "Soft wool pillow."],
            ["Dirty", "/ˈdɜː.ti/", "Грязный", "Dirty coal hands."],
            ["Empty", "/ˈemp.ti/", "Пустой", "An empty wooden box."],
            ["New", "/njuː/", "Новый", "A new iron hammer."],
            ["Old", "/əʊld/", "Старый", "An old dwarven legend."],
            ["Young", "/jʌŋ/", "Молодой", "A young apprentice."],
            ["Great", "/ɡreɪt/", "Великий / Отличный", "Great dwarven smith."],
            ["Difficult", "/ˈdɪf.ɪ.kəlt/", "Сложный", "A difficult smithing task."],
            ["Easy", "/ˈiː.zi/", "Лёгкий (простой)", "An easy repair."],
            ["Smith", "/smɪθ/", "Кузнец", "Dwarven berserker smith."],
            ["Mine", "/maɪn/", "Шахта", "Deep iron mine."],
            ["Ore", "/ɔːr/", "Руда", "Rich iron ore."],
            ["Craft", "/krɑːft/", "Мастерить", "Craft strong weapons."],
            ["Build", "/bɪld/", "Строить", "Build a stone wall."],
            ["Fix", "/fɪks/", "Чинить", "Fix broken armor."],
            ["Break", "/breɪk/", "Ломать", "Break hard stone."],
            ["Cut", "/kʌt/", "Резать", "Cut hard wood."],
            ["Lock", "/lɒk/", "Замок / Запирать", "Lock the box."],
            ["Thing", "/θɪŋ/", "Вещь", "A heavy thing."],
            ["Object", "/ˈɒb.dʒɪkt/", "Предмет", "An iron object."],
            ["Piece", "/piːs/", "Кусок / Часть", "A piece of gold."],
            ["Part", "/pɑːt/", "Часть", "Part of armor."],
            ["Top", "/tɒp/", "Верх", "Top of mountain."],
            ["Bottom", "/ˈbɒt.əm/", "Низ", "Bottom of mine."],
            ["Side", "/saɪd/", "Сторона", "Side of the anvil."],
            ["Front", "/frʌnt/", "Передняя часть", "Front wall."],
            ["Back", "/bæk/", "Задняя часть / Спина", "Back armor."],
            ["Inside", "/ɪnˈsaɪd/", "Внутри", "Inside the mine."],
            ["Outside", "/ˌaʊtˈsaɪd/", "Снаружи", "Outside the forge."],
            ["Curtain", "/ˈkɜː.tən/", "Штора / Занавеска", "Window curtain."],
            ["Carpet", "/ˈkɑː.pɪt/", "Ковёр", "Warm red carpet."],
            ["Rug", "/rʌɡ/", "Коврик", "Small floor rug."],
            ["Blanket", "/ˈblæŋ.kɪt/", "Одеяло", "Warm bed blanket."],
            ["Pillow", "/ˈpɪl.əʊ/", "Подушка", "Soft bed pillow."],
            ["Mattress", "/ˈmæt.rəs/", "Матрас", "Comfortable mattress."],
            ["Sheet", "/ʃiːt/", "Простыня / Лист", "Bed sheet."],
            ["Basement", "/ˈbeɪs.mənt/", "Подвал", "Deep basement."],
            ["Garage", "/ˈɡær.ɑːʒ/", "Гараж", "Car garage."],
            ["Attic", "/ˈæt.ɪk/", "Чердак", "House attic."],
            ["Steel", "/stiːl/", "Сталь", "Forged steel."],
            ["Copper", "/ˈkɒp.ər/", "Медь", "Bright copper ore."],
            ["Bronze", "/brɒnz/", "Бронза", "Heavy bronze shield."],
            ["Clay", "/kleɪ/", "Глина", "Red clay pot."],
            ["Glassware", "/ˈɡlɑːs.weər/", "Стеклянная посуда", "Clean glassware."],
            ["Brick", "/brɪk/", "Кирпич", "Red brick wall."],
            ["Cement", "/sɪˈment/", "Цемент", "Strong cement."],
            ["Tool", "/tuːl/", "Инструмент", "Smithing tool."],
            ["Workbench", "/ˈwɜːk.bentʃ/", "Верстак", "Smithing workbench."],
            ["Chimney", "/ˈtʃɪm.ni/", "Дымоход", "Forge chimney."],
            ["Coal", "/kəʊl/", "Уголь", "Hot black coal."],
            ["Fireplace", "/ˈfaɪə.pleɪs/", "Камин", "Warm fireplace."],
            ["Cozy", "/ˈkəʊ.zi/", "Уютный", "Cozy dwarven home."],
            ["Solid", "/ˈsɒl.ɪd/", "Твёрдый / Прочный", "Solid stone wall."],
            ["Narrow", "/ˈnær.əʊ/", "Узкий", "Narrow path."],
            ["Adj", "/ˈɔː.səm/", "Потрясающий (Awesome)", "An awesome hero adventure!"],
            ["Advice", "/ədˈvaɪs/", "Совет", "Wise advice from Eldrin."],
            ["Afraid", "/əˈfreɪd/", "Испуганный / Боящийся", "Do not be afraid of darkness."],
            ["After", "/ˈɑːf.tər/", "После", "Rest after the battle."],
            ["Again", "/əˈɡen/", "Снова / Опять", "Try again tomorrow."],
            ["Age", "/eɪdʒ/", "Возраст / Эпоха", "What is your age?"],
            ["Agree", "/əˈɡriː/", "Соглашаться", "I agree with your plan."],
            ["Also", "/ˈɔːl.səʊ/", "Также / Тоже", "She is also a brave warrior."],
            ["Amazing", "/əˈmeɪ.zɪŋ/", "Удивительный / Потрясающий", "An amazing victory!"],
            ["And", "/ænd/", "И", "Shield and sword."],
            ["Angry", "/ˈæŋ.ɡri/", "Сердитый / Злой", "An angry monster."],
            ["Any", "/ˈen.i/", "Любой / Какой-нибудь", "Do you have any questions?"],
            ["Area", "/ˈeə.ri.ə/", "Область / Территория", "A peaceful city area."],
            ["Around", "/əˈraʊnd/", "Вокруг / Около", "Look around the castle."],
            ["Artist", "/ˈɑː.tɪst/", "Художник / Артист", "A talented palace artist."],
            ["As", "/æz/", "Как / В качестве", "Brave as a lion."],
            ["Away", "/əˈweɪ/", "Вдали / Прочь", "Run away from danger."]
        ],
        selene: [
            ["Body", "/ˈbɒd.i/", "Тело", "A healthy active body."],
            ["Head", "/hed/", "Голова", "Protect your head."],
            ["Hair", "/heər/", "Волосы", "Dark black hair."],
            ["Face", "/feɪs/", "Лицо", "A quiet masked face."],
            ["Eye", "/aɪ/", "Глаз", "Sharp blue eyes."],
            ["Ear", "/ɪər/", "Ухо", "Listen with your ear."],
            ["Nose", "/nəʊz/", "Нос", "Breathe through nose."],
            ["Mouth", "/maʊθ/", "Рот", "Keep your mouth closed."],
            ["Tooth", "/tuːθ/", "Зуб", "A white sharp tooth."],
            ["Teeth", "/tiːθ/", "Зубы", "Clean white teeth."],
            ["Hand", "/hænd/", "Кисть руки", "Hold with your hand."],
            ["Arm", "/ɑːm/", "Рука (вся)", "Strong ninja arm."],
            ["Leg", "/leɡ/", "Нога", "Fast running leg."],
            ["Foot", "/fʊt/", "Ступня", "Quiet footstep."],
            ["Feet", "/fiːt/", "Ступни", "Walk on quiet feet."],
            ["Finger", "/ˈfɪŋ.ɡər/", "Палец (руки)", "Ten fingers."],
            ["Toe", "/təʊ/", "Палец (ноги)", "Ten toes."],
            ["Heart", "/hɑːt/", "Сердце", "A brave quiet heart."],
            ["Brain", "/breɪn/", "Мозг", "A smart quick brain."],
            ["Skin", "/skɪn/", "Кожа", "Smooth skin."],
            ["Health", "/helθ/", "Здоровье", "Take care of health."],
            ["Sick", "/sɪk/", "Больной", "He is sick today."],
            ["Ill", "/ɪl/", "Нездоровый", "Feel ill."],
            ["Pain", "/peɪn/", "Боль", "No pain no gain."],
            ["Can", "/kæn/", "Мочь / Уметь", "I can move silently."],
            ["Cannot", "/ˈkæn.ɒt/", "Не мочь", "I cannot give up."],
            ["Can't", "/kɑːnt/", "Не уметь (сокр.)", "She can't stop."],
            ["Could", "/kʊd/", "Мог", "He could run fast."],
            ["Able", "/ˈeɪ.bəl/", "Способный", "Able to swim."],
            ["Game", "/ɡeɪm/", "Игра", "A stealth game."],
            ["Sport", "/spɔːt/", "Спорт", "Do active sports."],
            ["Football", "/ˈfʊt.bɔːl/", "Футбол", "Play football."],
            ["Basketball", "/ˈbɑː.skɪt.bɔːl/", "Баскетбол", "Play basketball."],
            ["Tennis", "/ˈten.ɪs/", "Теннис", "Play tennis."],
            ["Swimming", "/ˈswɪm.ɪŋ/", "Плавание", "Go swimming."],
            ["Dance", "/dɑːns/", "Танцевать", "Dance to music."],
            ["Sing", "/sɪŋ/", "Петь", "Sing a song."],
            ["Song", "/sɒŋ/", "Песня", "A beautiful song."],
            ["Music", "/ˈmjuː.zɪk/", "Музыка", "Listen to music."],
            ["Guitar", "/ɡɪˈtɑːr/", "Гитара", "Play the guitar."],
            ["Piano", "/piˈæn.əʊ/", "Пианино", "Play the piano."],
            ["Camera", "/ˈkæm.rə/", "Камера", "Take a photo with camera."],
            ["Photo", "/ˈfəʊ.təʊ/", "Фотография", "A nice photo."],
            ["Movie", "/ˈmuː.vi/", "Фильм", "Watch a movie."],
            ["Film", "/fɪlm/", "Кинофильм", "An exciting film."],
            ["Art", "/ɑːt/", "Искусство", "Love art."],
            ["Paint", "/peɪnt/", "Рисовать красками", "Paint a picture."],
            ["Draw", "/drɔː/", "Чертить / Рисовать", "Draw a sketch."],
            ["Hobby", "/ˈhɒb.i/", "Хобби", "My favorite hobby."],
            ["Play", "/pleɪ/", "Играть", "Play guitar."],
            ["Swim", "/swɪm/", "Плавать", "Swim in the sea."],
            ["Jump", "/dʒʌmp/", "Прыгать", "Jump over the wall."],
            ["Climb", "/klaɪm/", "Карабкаться", "Climb a tree."],
            ["Hide", "/haɪd/", "Прятаться", "Hide in shadows."],
            ["Shadow", "/ˈʃæd.əʊ/", "Тень", "Shadow stalker."],
            ["Silent", "/ˈsaɪ.lənt/", "Тихий / Бесшумный", "Silent steps."],
            ["Quiet", "/ˈkwaɪ.ət/", "Тихий", "Keep quiet."],
            ["Fast", "/fɑːst/", "Быстрый", "Fast as lightning."],
            ["Quick", "/kwɪk/", "Быстрый / Проворный", "Quick ninja movement."],
            ["Slow", "/sləʊ/", "Медленный", "Walk slow."],
            ["Active", "/ˈæk.tɪv/", "Активный", "Active lifestyle."],
            ["Fit", "/fɪt/", "В хорошей форме", "Stay fit."],
            ["Energy", "/ˈen.ə.dʒi/", "Энергия", "High energy."],
            ["Power", "/ˈpaʊ.ər/", "Сила / Мощь", "Stealth power."],
            ["Skill", "/skɪl/", "Навык", "Assassin skill."],
            ["Practice", "/ˈpræk.tɪs/", "Практика", "Daily practice."],
            ["Win", "/wɪn/", "Побеждать", "Win the match."],
            ["Lose", "/luːz/", "Проигрывать", "Never lose."],
            ["Match", "/mætʃ/", "Матч", "Sports match."],
            ["Player", "/ˈpleɪ.ər/", "Игрок", "A good player."],
            ["Club", "/klʌb/", "Клуб", "Sports club."],
            ["Join", "/dʒɔɪn/", "Присоединяться", "Join our guild."],
            ["Move", "/muːv/", "Двигаться", "Move quietly."],
            ["Stealth", "/stelθ/", "Скрытность", "Shadow stealth."],
            ["Assassin", "/əˈsæs.ɪn/", "Ассасин", "Shadow assassin."],
            ["Stalker", "/ˈstɔː.kər/", "Следопыт", "Shadow stalker."],
            ["Dagger", "/ˈdæɡ.ər/", "Кинжал", "Twin daggers."],
            ["Mask", "/mɑːsk/", "Маска", "Black ninja mask."],
            ["Dark", "/dɑːk/", "Тёмный", "Dark shadows."],
            ["Guild", "/ɡɪld/", "Гильдия", "Shadow guild."],
            ["Neck", "/nek/", "Шея", "Wear a necklace on neck."],
            ["Shoulder", "/ˈʃəʊl.dər/", "Плечо", "Shoulder armor."],
            ["Chest", "/tʃest/", "Грудь / Грудная клетка", "Strong chest."],
            ["Stomach", "/ˈstʌm.ək/", "Живот / Желудок", "Full stomach."],
            ["Knee", "/niː/", "Колено", "Bend the knee."],
            ["Bone", "/bəʊn/", "Кость", "Strong bone."],
            ["Blood", "/blʌd/", "Кровь", "Ninja blood."],
            ["Muscle", "/ˈmʌs.əl/", "Мускул / Мышца", "Flex a muscle."],
            ["Voice", "/vɔːs/", "Голос", "Quiet voice."],
            ["Sight", "/saɪt/", "Зрение / Взгляд", "Keen sight."],
            ["Hearing", "/ˈhɪə.rɪŋ/", "Слух", "Sharp hearing."],
            ["Touch", "/tʌtʃ/", "Прикосновение / Касаться", "Light touch."],
            ["Smell", "/smel/", "Запах / Обонять", "Fresh smell."],
            ["Emotion", "/ɪˈməʊ.ʃən/", "Эмоция", "Control emotion."],
            ["Mood", "/muːd/", "Настроение", "In a good mood."],
            ["Bandage", "/ˈbæn.dɪdʒ/", "Бинт / Повязка", "Wrap a bandage."],
            ["Medicine", "/ˈmed.sən/", "Лекарство", "Take medicine."],
            ["Pill", "/pɪl/", "Таблетка", "A health pill."],
            ["Cure", "/kjʊər/", "Лечение / Излечивать", "Find a cure."],
            ["Bad", "/bæd/", "Плохой", "Bad weather today."],
            ["Ball", "/bɔːl/", "Мяч / Бал", "Play with a leather ball."],
            ["Band", "/bænd/", "Группа / Отряд", "A band of adventurers."],
            ["Bank money", "/bæŋk/", "Банк", "Keep gold in the city bank."],
            ["Bath", "/bɑːθ/", "Ванна / Купание", "Take a warm bath."],
            ["Beautiful", "/ˈbjuː.tɪ.fəl/", "Красивый / Прекрасный", "A beautiful forest."],
            ["Because", "/bɪˈkɒz/", "Потому что", "I win because I practice."],
            ["Before", "/bɪˈfɔːr/", "До / Перед", "Prepare before battle."],
            ["Begin", "/bɪˈɡɪn/", "Начинать", "Begin your journey."],
            ["Believe", "/bɪˈliːv/", "Верить", "Believe in yourself."],
            ["Below", "/bɪˈləʊ/", "Внизу / Ниже", "Below zero degrees."]
        ],
        oberon: [
            ["Nature", "/ˈneɪ.tʃər/", "Природа", "Love green nature."],
            ["Tree", "/triː/", "Дерево", "A tall oak tree."],
            ["Plant", "/plɑːnt/", "Растение", "Green nature plant."],
            ["Flower", "/ˈflaʊ.ər/", "Цветок", "A red spring flower."],
            ["Grass", "/ɡrɑːs/", "Трава", "Green fresh grass."],
            ["Forest", "/ˈfɒr.ɪst/", "Лес", "Emerald forest."],
            ["Grove", "/ɡrəʊv/", "Роща", "Emerald Grove."],
            ["Leaf", "/liːf/", "Лист", "A green tree leaf."],
            ["Leaves", "/liːvz/", "Листья", "Fall leaves."],
            ["Branch", "/brɑːntʃ/", "Ветка", "A tree branch."],
            ["Root", "/ruːt/", "Корень", "Deep tree root."],
            ["Seed", "/siːd/", "Семя", "Plant a seed."],
            ["Earth", "/ɜːθ/", "Земля", "Mother Earth."],
            ["Ground", "/ɡraʊnd/", "Земля (почва)", "Sit on the ground."],
            ["Soil", "/sɔɪl/", "Почва", "Rich black soil."],
            ["Mountain", "/ˈmaʊn.tɪn/", "Гора", "A high mountain."],
            ["Hill", "/hɪl/", "Холм", "A green grassy hill."],
            ["River", "/ˈrɪv.ər/", "Река", "A wide clear river."],
            ["Lake", "/leɪk/", "Озеро", "A quiet mountain lake."],
            ["Sea", "/siː/", "Море", "Blue deep sea."],
            ["Ocean", "/ˈəʊ.ʃən/", "Океан", "Vast blue ocean."],
            ["Beach", "/biːtʃ/", "Пляж", "Sandy sea beach."],
            ["Coast", "/kəʊst/", "Побережье", "Rocky sea coast."],
            ["Island", "/ˈaɪ.lənd/", "Остров", "A green island."],
            ["Moon", "/muːn/", "Луна", "Full white moon."],
            ["Star", "/stɑːr/", "Звезда", "Shining night star."],
            ["Air", "/eər/", "Воздух", "Fresh clean air."],
            ["Animal", "/ˈæn.ɪ.məl/", "Животное", "Wild forest animal."],
            ["Dog", "/dɒɡ/", "Собака", "A loyal friendly dog."],
            ["Cat", "/kæt/", "Кошка", "A quiet house cat."],
            ["Bird", "/bɜːd/", "Птица", "A singing bird."],
            ["Horse", "/hɔːs/", "Лошадь", "A fast strong horse."],
            ["Cow", "/kaʊ/", "Корова", "A farm cow."],
            ["Pig", "/pɪɡ/", "Свинья", "A small pink pig."],
            ["Sheep", "/ʃiːp/", "Овца", "White wool sheep."],
            ["Bear", "/beər/", "Медведь", "A big forest bear."],
            ["Wolf", "/wʊlf/", "Волк", "A wild grey wolf."],
            ["Lion", "/ˈlaɪ.ən/", "Лев", "King lion."],
            ["Tiger", "/ˈtaɪ.ɡər/", "Тигр", "Wild striped tiger."],
            ["Elephant", "/ˈel.ɪ.fənt/", "Слон", "A huge elephant."],
            ["Monkey", "/ˈmʌŋ.ki/", "Обезьяна", "A clever monkey."],
            ["Snake", "/sneɪk/", "Змея", "A green snake."],
            ["Mouse", "/maʊs/", "Мышь", "A little field mouse."],
            ["Duck", "/dʌk/", "Утка", "A lake duck."],
            ["Rabbit", "/ˈræb.ɪt/", "Кролик", "A fast white rabbit."],
            ["Pet", "/pet/", "Домашний питомец", "Care for your pet."],
            ["Wild", "/waɪld/", "Дикий", "Wild forest nature."],
            ["Shining", "/ˈʃaɪ.nɪŋ/", "Светящийся / Сияет", "Sun is shining."],
            ["Singing", "/ˈsɪŋ.ɪŋ/", "Поющий / Поёт", "Birds are singing."],
            ["Walking", "/ˈwɔː.kɪŋ/", "Идущий / Идёт", "He is walking."],
            ["Running", "/ˈrʌn.ɪŋ/", "Бегущий / Бежит", "She is running."],
            ["Flying", "/ˈflaɪ.ɪŋ/", "Летящий / Летит", "A bird is flying."],
            ["Growing", "/ˈɡrəʊ.ɪŋ/", "Растущий / Растёт", "Plants are growing."],
            ["Living", "/ˈlɪv.ɪŋ/", "Живущий", "Living in peace."],
            ["Right now", "/raɪt naʊ/", "Прямо сейчас", "What are you doing right now?"],
            ["At this moment", "/æt ðɪs ˈməʊ.mənt/", "В этот момент", "At this moment I study."],
            ["Druid", "/ˈdruː.ɪd/", "Друид", "Wise Arch-Druid."],
            ["Arch-Druid", "/ɑːtʃ ˈdruː.ɪd/", "Верховный Друид", "Oberon the Arch-Druid."],
            ["Peaceful", "/ˈpiːs.fəl/", "Мирный", "A peaceful grove."],
            ["Environment", "/ɪnˈvaɪ.rən.mənt/", "Окружающая среда", "Protect our environment."],
            ["World", "/wɜːld/", "Мир (планета)", "A beautiful world."],
            ["Field", "/fiːld/", "Поле", "A green open field."],
            ["Rock", "/rɒk/", "Скала", "High mountain rock."],
            ["Sand", "/sænd/", "Песок", "Beach sand."],
            ["Storm", "/stɔːm/", "Шторм / Гроза", "Thunder storm."],
            ["Thunder", "/ˈθʌn.dər/", "Гром", "Loud thunder."],
            ["Sunlight", "/ˈsʌn.laɪt/", "Солнечный свет", "Bright sunlight."],
            ["Frog", "/frɒɡ/", "Лягушка", "A green pond frog."],
            ["Fox", "/fɒks/", "Лиса", "A wild red fox."],
            ["Deer", "/dɪər/", "Олень", "A forest deer."],
            ["Owl", "/aʊl/", "Сова", "A wise night owl."],
            ["Eagle", "/ˈiː.ɡəl/", "Орёл", "A high flying eagle."],
            ["Insect", "/ˈɪn.sekt/", "Насекомое", "A small insect."],
            ["Ant", "/ænt/", "Муравей", "A tiny ant."],
            ["Butterfly", "/ˈbʌt.ə.flaɪ/", "Бабочка", "A colorful butterfly."],
            ["Spider", "/ˈspaɪ.dər/", "Паук", "A forest spider."],
            ["Whale", "/weɪl/", "Кит", "A giant ocean whale."],
            ["Dolphin", "/ˈdɒl.fɪn/", "Дельфин", "A friendly sea dolphin."],
            ["Shark", "/ʃɑːk/", "Акула", "A dangerous sea shark."],
            ["Turtle", "/ˈtɜː.təl/", "Черепаха", "A slow sea turtle."],
            ["Pond", "/pɒnd/", "Пруд", "A quiet forest pond."],
            ["Stream", "/striːm/", "Ручей", "A clear water stream."],
            ["Waterfall", "/ˈwɔː.tə.fɔːl/", "Водопад", "A high mountain waterfall."],
            ["Jungle", "/ˈdʒʌŋ.ɡəl/", "Джунгли", "A dense green jungle."],
            ["Desert", "/ˈdez.ət/", "Пустыня", "Hot sandy desert."],
            ["Cave", "/keɪv/", "Пещера", "A deep mountain cave."],
            ["Valley", "/ˈvæl.i/", "Долина", "A green river valley."],
            ["Meadow", "/ˈmed.əʊ/", "Луг", "A sunny flower meadow."],
            ["Bush", "/bʊʃ/", "Куст", "A green berry bush."],
            ["Woodland", "/ˈwʊd.lənd/", "Лесистая местность", "Green woodland."],
            ["Best", "/best/", "Лучший", "The best paladin."],
            ["Better", "/ˈbet.ər/", "Лучше", "Get better every day."],
            ["Birthday", "/ˈbɜːθ.deɪ/", "День рождения", "Happy birthday, my friend!"],
            ["Blog", "/blɒɡ/", "Блог / Дневник", "Write a travel blog."],
            ["Blonde", "/blɒnd/", "Блондин / Светлые волосы", "Blonde hair."],
            ["Boot", "/buːt/", "Ботинок / Сапог", "Heavy leather boot."],
            ["Bored", "/bɔːd/", "Скучающий", "I am never bored here."],
            ["Boring", "/ˈbɔː.rɪŋ/", "Скучный", "A boring lecture."],
            ["Born", "/bɔːn/", "Рождённый", "A born warrior."],
            ["Business", "/ˈbɪz.nɪs/", "Бизнес / Дело", "Merchant business."],
            ["Busy", "/ˈbɪz.i/", "Занятой", "Busy with training."],
            ["But", "/bʌt/", "Но", "Strong but kind."],
            ["By", "/baɪ/", "У / Около / К", "Stand by the gate."],
            ["Bye", "/baɪ/", "Пока (прощание)", "Bye, see you later!"],
            ["Cafe", "/ˈkæf.eɪ/", "Кафе", "Drink tea at a cozy cafe."],
            ["Capital", "/ˈkæp.ɪ.təl/", "Столица / Заглавная буква", "The royal capital city."],
            ["Card", "/kɑːd/", "Карточка / Карта", "A magic spell card."],
            ["Career", "/kəˈrɪər/", "Карьера / Путь", "A successful knight career."],
            ["Carry", "/ˈkær.i/", "Нести / Носить", "Carry a heavy shield."],
            ["Cd", "/ˌsiːˈdiː/", "Компакт-диск", "Listen to music on CD."]
        ],
        freya: [
            ["Was", "/wɒz/", "Был", "He was a hero."],
            ["Were", "/wɜːr/", "Были", "We were friends."],
            ["Did", "/dɪd/", "Делал (Past Simple)", "Did you travel yesterday?"],
            ["Went", "/went/", "Пошёл / Поехал", "I went to the city."],
            ["Came", "/keɪm/", "Пришёл", "He came home late."],
            ["Saw", "/sɔː/", "Увидел", "I saw a glorious battle."],
            ["Had", "/hæd/", "Имел / Был", "We had a great trip."],
            ["Made", "/meɪd/", "Сделал", "She made a shield."],
            ["Took", "/tʊk/", "Взял", "He took a ticket."],
            ["Gave", "/ɡeɪv/", "Давал", "She gave me a victory gift."],
            ["Fought", "/fɔːt/", "Сражался", "Freya fought bravely."],
            ["Won", "/wʌn/", "Победил", "We won the battle."],
            ["Lost", "/lɒst/", "Потерял / Проиграл", "They lost the match."],
            ["Traveled", "/ˈtræv.əld/", "Путешествовал", "I traveled yesterday."],
            ["Visit", "/ˈvɪz.ɪt/", "Посещать", "Visit Valkyrie Hall."],
            ["Visited", "/ˈvɪz.ɪt.ɪd/", "Посетил", "Visited a friend."],
            ["Battle", "/ˈbæt.əl/", "Битва", "A glorious battle."],
            ["Victory", "/ˈvɪk.tər.i/", "Победа", "Glorious victory."],
            ["Glory", "/ˈɡlɔː.ri/", "Слава", "Fight for glory."],
            ["Valkyrie", "/ˈvæl.kə.ri/", "Валькирия", "Shieldmaiden Valkyrie."],
            ["Shieldmaiden", "/ˈʃiːldˌmeɪ.dən/", "Дева щита", "Brave shieldmaiden."],
            ["Hall", "/hɔːl/", "Зал / Холл", "Valkyrie Hall."],
            ["Citadel", "/ˈsɪt.ə.del/", "Цитадель", "Sky Citadel."],
            ["Last", "/lɑːst/", "Прошлый", "Last week / last year."],
            ["Past", "/pɑːst/", "Прошлое", "In the past."],
            ["History", "/ˈhɪs.tər.i/", "История", "Ancient history."],
            ["Legend", "/ˈledʒ.ənd/", "Легенда", "Heroic legend."],
            ["Conquer", "/ˈkɒŋ.kər/", "Завоёвывать", "Conquer the citadel."],
            ["Fight", "/faɪt/", "Сражение / Драться", "Fight for freedom."],
            ["Heroic", "/hɪˈrəʊ.ɪk/", "Героический", "Heroic Valkyrie."],
            ["Courage", "/ˈkʌr.ɪdʒ/", "Мужество", "Full of courage."],
            ["Spear", "/spɪər/", "Копьё", "A sharp valkyrie spear."],
            ["Wings", "/wɪŋz/", "Крылья", "Golden valkyrie wings."],
            ["War", "/wɔːr/", "Война", "End the war."],
            ["Think", "/θɪŋk/", "Думать", "I think so."],
            ["Thought", "/θɔːt/", "Думал / Мысль", "I thought about it."],
            ["Know", "/nəʊ/", "Знать", "I know the answer."],
            ["Knew", "/njuː/", "Знал", "He knew the way."],
            ["Understand", "/ˌʌn.dəˈstænd/", "Понимать", "I understand English."],
            ["Understood", "/ˌʌn.dəˈstʊd/", "Понял", "She understood everything."],
            ["Remember", "/rɪˈmem.bər/", "Помнить", "Remember this day."],
            ["Forget", "/fəˈɡet/", "Забывать", "Never forget."],
            ["Forgot", "/fəˈɡɒt/", "Забыл", "I forgot the key."],
            ["Say", "/seɪ/", "Говорить / Сказать", "Say hello."],
            ["Said", "/sed/", "Сказал", "He said goodbye."],
            ["Tell", "/tel/", "Рассказывать", "Tell a story."],
            ["Told", "/təʊld/", "Рассказал", "She told the truth."],
            ["Speak", "/spiːk/", "Говорить (на языке)", "Speak English."],
            ["Spoke", "/spəʊk/", "Говорил", "He spoke well."],
            ["Talk", "/tɔːk/", "Разговаривать", "Talk to a friend."],
            ["Listen", "/ˈlɪs.ən/", "Слушать", "Listen carefully."],
            ["Hear", "/hɪər/", "Слышать", "Hear the wind."],
            ["Heard", "/hɜːd/", "Услышал", "I heard a sound."],
            ["Ask", "/ɑːsk/", "Спрашивать", "Ask a question."],
            ["Answer", "/ˈɑːn.sər/", "Отвечать", "Answer the question."],
            ["Write", "/raɪt/", "Писать", "Write a letter."],
            ["Wrote", "/rəʊt/", "Написал", "She wrote a book."],
            ["Read", "/riːd/", "Читать", "Read a story."],
            ["Learn", "/lɜːn/", "Учиться", "Learn new words."],
            ["Study", "/ˈstʌd.i/", "Изучать", "Study English daily."],
            ["Teach", "/tiːtʃ/", "Обучать", "Teach students."],
            ["Call", "/kɔːl/", "Звонить / Называть", "Call a friend."],
            ["Send", "/send/", "Отправлять", "Send a message."],
            ["Sent", "/sent/", "Отправил", "Sent a letter."],
            ["Bring", "/brɪŋ/", "Приносить", "Bring a shield."],
            ["Brought", "/brɔːt/", "Принёс", "He brought food."],
            ["Found", "/faʊnd/", "Нашёл", "Found a golden coin."],
            ["Try", "/traɪ/", "Пытаться", "Try your best."],
            ["Use", "/juːz/", "Использовать", "Use your shield."],
            ["Used", "/juːzd/", "Использовал", "Used a magic spell."],
            ["Change", "/tʃeɪndʒ/", "Менять", "Change the future."],
            ["Freedom", "/ˈfriː.dəm/", "Свобода", "Fight for freedom."],
            ["Novel", "/ˈnɒv.əl/", "Роман / Повесть", "Read an adventure novel."],
            ["Poem", "/ˈpəʊ.ɪm/", "Стихотворение", "Write a heroic poem."],
            ["Poet", "/ˈpəʊ.ɪt/", "Поэт", "A famous Valkyrie poet."],
            ["Text", "/tekst/", "Текст", "Read the English text."],
            ["Paragraph", "/ˈpær.ə.ɡrɑːf/", "Абзац", "Write a paragraph."],
            ["Chapter", "/ˈtʃæp.tər/", "Глава (в книге)", "Chapter one."],
            ["Envelope", "/ˈen.və.ləʊp/", "Конверт", "Put in an envelope."],
            ["Postcard", "/ˈpəʊst.kɑːd/", "Открытка", "Send a travel postcard."],
            ["Diary", "/ˈdaɪə.ri/", "Дневник", "Keep a daily diary."],
            ["Notebook", "/ˈnəʊt.bʊk/", "Блокнот", "A leather notebook."],
            ["Magazine", "/ˌmæg.əˈziːn/", "Журнал", "Read a magazine."],
            ["Newspaper", "/ˈnjuːzˌpeɪ.pər/", "Газета", "Morning newspaper."],
            ["Article", "/ˈɑː.tɪ.kəl/", "Статья", "Read an article."],
            ["Author", "/ˈɔː.θər/", "Автор", "Book author."],
            ["Writer", "/ˈraɪ.tər/", "Писатель", "A famous writer."],
            ["Publisher", "/ˈpʌb.lɪ.ʃər/", "Издатель", "Book publisher."],
            ["Tale", "/teɪl/", "Сказка / Былина", "An ancient tale."],
            ["Myth", "/mɪθ/", "Миф", "Norse mythology."],
            ["Saga", "/ˈsɑː.ɡə/", "Сага", "Valkyrie saga."],
            ["Epic", "/ˈep.ɪk/", "Эпос / Эпический", "An epic battle."],
            ["Memory", "/ˈmem.ər.i/", "Память", "Cherish the memory."],
            ["Record", "/ˈrek.ɔːd/", "Запись / Рекорд", "Keep a historical record."],
            ["Document", "/ˈdɒk.jə.mənt/", "Документ", "Official document."],
            ["Fact", "/fækt/", "Факт", "Historical fact."],
            ["Cent", "/sent/", "Цент / Монета", "A copper cent."],
            ["Centre", "/ˈsen.tər/", "Центр", "In the city centre."],
            ["Chart", "/tʃɑːt/", "Таблица / Диаграмма", "Look at the progress chart."],
            ["Check", "/tʃek/", "Проверять", "Check your equipment."],
            ["Choose", "/tʃuːz/", "Выбирать", "Choose your hero path."],
            ["Cinema", "/ˈsɪn.ə.mɑː/", "Кинотеатр", "Go to the cinema."],
            ["Class", "/klɑːs/", "Класс / Урок", "Magic practice class."],
            ["Classroom", "/ˈklɑːs.ruːm/", "Учебный класс", "A quiet academy classroom."],
            ["College", "/ˈkɒl.ɪdʒ/", "Колледж / Академия", "Study at the hero college."],
            ["Colour", "/ˈkʌl.ər/", "Цвет", "Bright armor colour."],
            ["Common", "/ˈkɒm.ən/", "Общий / Обычный", "A common quest."],
            ["Company", "/ˈkʌm.pə.ni/", "Компания / Отряд", "Good company of friends."],
            ["Compare", "/kəmˈpeər/", "Сравнивать", "Compare sword stats."],
            ["Concert", "/ˈkɒn.sət/", "Концерт", "A palace music concert."]
        ],
        eldrin: [
            ["Going to", "/ˈɡəʊ.ɪŋ tuː/", "Собираться (сделать)", "I am going to study."],
            ["Goal", "/ɡəʊl/", "Цель", "What is your learning goal?"],
            ["Future", "/ˈfjuː.tʃər/", "Будущее", "Build a bright future."],
            ["Plan", "/plæn/", "План", "Make a daily plan."],
            ["Achieve", "/əˈtʃiːv/", "Достигать", "Achieve A1 mastery."],
            ["Mastery", "/ˈmɑː.stər.i/", "Мастерство", "Full A1 graduation mastery."],
            ["Graduate", "/ˈɡrædʒ.u.eɪt/", "Выпускаться / Окончить", "Graduate from Academy."],
            ["Graduation", "/ˌɡrædʒ.uˈeɪ.ʃən/", "Выпускной / Завершение", "A1 Graduation."],
            ["Mind", "/maɪnd/", "Разум", "Clear and sharp mind."],
            ["Wisdom", "/ˈwɪz.dəm/", "Мудрость", "Grand Archmage wisdom."],
            ["Knowledge", "/ˈnɒl.ɪdʒ/", "Знания", "Knowledge is power."],
            ["Idea", "/aɪˈdɪə/", "Идея", "A great new idea."],
            ["Problem", "/ˈprɒb.ləm/", "Проблема", "Solve a problem."],
            ["Solution", "/səˈluː.ʃən/", "Решение", "Find a solution."],
            ["Question", "/ˈkwes.tʃən/", "Вопрос", "Ask a good question."],
            ["Word", "/wɜːd/", "Слово", "Learn 850 A1 words."],
            ["Language", "/ˈlæŋ.ɡwɪdʒ/", "Язык", "English language."],
            ["Meaning", "/ˈmiː.nɪŋ/", "Значение / Смысл", "What is the meaning?"],
            ["Example", "/ɪɡˈzɑːm.pəl/", "Пример", "Look at the example."],
            ["Rule", "/ruːl/", "Правило", "Follow the grammar rule."],
            ["Number", "/ˈnʌm.bər/", "Число / Номер", "A high number."],
            ["Zero", "/ˈzɪə.rəʊ/", "Ноль", "Zero mistakes."],
            ["One", "/wʌn/", "Один", "One goal."],
            ["Two", "/tuː/", "Два", "Two heroes."],
            ["Three", "/θriː/", "Три", "Three days."],
            ["Four", "/fɔːr/", "Четыре", "Four seasons."],
            ["Five", "/fɪv/", "Пять", "Five minutes."],
            ["Six", "/sɪks/", "Шесть", "Six hours."],
            ["Seven", "/ˈsev.ən/", "Семь", "Seven days."],
            ["Eight", "/eɪt/", "Восемь", "Eight words."],
            ["Nine", "/naɪn/", "Девять", "Nine points."],
            ["Ten", "/ten/", "Десять", "Ten heroes."],
            ["Hundred", "/ˈhʌn.drəd/", "Сотая / Сотня", "One hundred percent."],
            ["Thousand", "/ˈthau.zənd/", "Тысяча", "One thousand levels."],
            ["First", "/fɜːst/", "Первый", "The first step."],
            ["Third", "/θɜːd/", "Третий", "The third level."],
            ["Final", "/ˈfaɪ.nəl/", "Финальный", "Final A1 test."],
            ["End", "/end/", "Конец", "End of the course."],
            ["Beginning", "/bɪˈɡɪn.ɪŋ/", "Начало", "Beginning of adventure."],
            ["System", "/ˈsɪs.təm/", "Система", "RPG Hero system."],
            ["Way", "/weɪ/", "Путь / Способ", "The right way."],
            ["Point", "/pɔɪnt/", "Точка / Очко", "XP points."],
            ["Type", "/taɪp/", "Тип", "Type of weapon."],
            ["Kind", "/kaɪnd/", "Вид / Добрый", "What kind of book?"],
            ["Something", "/ˈsʌm.θɪŋ/", "Что-то", "Something new."],
            ["Anything", "/ˈen.i.θɪŋ/", "Что угодно", "Anything is possible."],
            ["Nothing", "/ˈnʌθ.ɪŋ/", "Ничего", "Nothing to fear."],
            ["Everything", "/ˈev.ri.θɪŋ/", "Всё", "Everything is ready."],
            ["Someone", "/ˈsʌm.wʌn/", "Кто-то", "Someone is coming."],
            ["Anyone", "/ˈen.i.wʌn/", "Кто угодно", "Anyone can learn."],
            ["Everyone", "/ˈev.ri.wʌn/", "Все", "Everyone is here."],
            ["Nobody", "/ˈnəʊ.bə.di/", "Никто", "Nobody gives up."],
            ["All", "/ɔːl/", "Все / Всё", "All ten heroes."],
            ["Both", "/bəʊθ/", "Оба", "Both heroes."],
            ["Each", "/iːtʃ/", "Каждый", "Each hero has 85 words."],
            ["Other", "/ˈʌð.ər/", "Другой", "Other heroes."],
            ["Another", "/əˈnʌð.ər/", "Ещё один", "Another question."],
            ["Same", "/seɪm/", "Такой же", "The same goal."],
            ["Different", "/ˈdɪf.ər.ənt/", "Разный", "Different topics."],
            ["Important", "/ɪmˈpɔː.tənt/", "Важный", "Important A1 lesson."],
            ["Main", "/meɪn/", "Главный", "Main archmage."],
            ["Real", "/rɪəl/", "Реальный", "Real progress."],
            ["True", "/truː/", "Истинный", "True mastery."],
            ["Possible", "/ˈpɒs.ə.bəl/", "Возможный", "It is possible."],
            ["Ready", "/ˈred.i/", "Готовый", "I am ready for A1 graduation!"],
            ["Complete", "/kəmˈpliːt/", "Завершённый", "Complete 100% mastery."],
            ["Grand", "/ɡrænd/", "Великий", "Grand Archmage."],
            ["Archmage", "/ˈɑːtʃ.meɪdʒ/", "Архимаг", "Eldrin the Archmage."],
            ["Spire", "/spaɪər/", "Шпиль", "Arcane Spire."],
            ["Success", "/səkˈses/", "Успех", "Wish you great success!"],
            ["Graduated", "/ˈɡrædʒ.u.eɪ.tɪd/", "Окончил", "Graduated A1 level!"],
            ["Master", "/ˈmɑː.stər/", "Мастер", "Master of English."],
            ["Education", "/ˌedʒ.uˈkeɪ.ʃən/", "Образование", "A1 education."],
            ["Academy", "/əˈkæld.ə.mi/", "Академия", "Hero Academy."],
            ["Course", "/kɔːs/", "Курс обучения", "English A1 course."],
            ["Subject", "/ˈsʌb.dʒɪkt/", "Учебный предмет", "Favorite subject."],
            ["Exercise", "/ˈek.sə.saɪz/", "Упражнение", "Grammar exercise."],
            ["Exam", "/ɪɡˈzæm/", "Экзамен", "Pass the exam."],
            ["Grade", "/ɡreɪd/", "Оценка / Был", "Get an A grade."],
            ["Mark", "/mɑːk/", "Оценка / Отметка", "High mark."],
            ["Score", "/skɔː/", "Счёт / Баллы", "High test score."],
            ["Diploma", "/dɪˈpləʊ.mə/", "Диплом", "A1 diploma."],
            ["Certificate", "/səˈtɪf.ɪ.kət/", "Сертификат", "CEFR A1 certificate."],
            ["Level", "/ˈlev.əl/", "Уровень", "CEFR Level A1."],
            ["Rank", "/ræŋk/", "Ранг", "Hero rank."],
            ["Progress", "/ˈprəʊ.ɡres/", "Прогресс", "Great progress."],
            ["Result", "/rɪˈzʌlt/", "Результат", "Excellent result."],
            ["Ability", "/əˈbɪl.ə.ti/", "Способность", "Speaking ability."],
            ["Fluency", "/ˈfluː.ən.si/", "Беглость речи", "English fluency."],
            ["Correct", "/kəˈrekt/", "Правильный / Исправлять", "Correct answer."],
            ["Correspond", "/ˌkɒr.ɪˈspɒnd/", "Переписываться / Соответствовать", "Correspond with a friend."],
            ["Create", "/kriːˈeɪt/", "Создавать", "Create a new spell."],
            ["Culture", "/ˈkʌl.tʃər/", "Культура", "Ancient dwarven culture."],
            ["Customer", "/ˈkʌs.tə.mər/", "Покупатель / Клиент", "A friendly shop customer."],
            ["Dad", "/dæd/", "Папа", "My dad is a paladin."],
            ["Dancer", "/ˈdɑːn.sər/", "Танцор", "A graceful dancer."],
            ["Dancing", "/ˈdɑːn.sɪŋ/", "Танцы", "Enjoy dancing."],
            ["Dangerous", "/ˈdeɪn.dʒər.əs/", "Опасный", "A dangerous dungeon."],
            ["Date", "/deɪt/", "Дата / Свидание", "Today's date."],
            ["Dear", "/dɪər/", "Дорогой / Уважаемый", "Welcome, dear friend."],
            ["Decide", "/dɪˈsaɪd/", "Решать / Принимать решение", "Decide your tactic."],
            ["Delicious", "/dɪˈlɪʃ.əs/", "Вкусный", "Delicious roasted meat."],
            ["Describe", "/dɪˈskraɪb/", "Описывать", "Describe your quest."],
            ["Description", "/dɪˈskrɪp.ʃən/", "Описание", "Read the item description."],
            ["Design", "/dɪˈzaɪn/", "Дизайн / Проект", "Shield design."],
            ["Det", "/dɪˈtɜː.mɪnd/", "Решительный (Determined)", "A determined warrior!"],
            ["Detail", "/ˈdiː.teɪl/", "Деталь / Подробность", "Pay attention to detail."],
            ["Dialogue", "/ˈdaɪ.ə.lɒɡ/", "Диалог", "A hero dialogue."],
            ["Dictionary", "/ˈdɪk.ʃən.ər.i/", "Словарь", "Oxford A1 dictionary."],
            ["Die", "/daɪ/", "Умирать", "Heroes never die."]
        ],
    };
    return wordLists[heroId] || wordLists.valerius;
}

const HERO_UNLOCK_QUEST_THRESHOLDS = [0, 3, 7, 12, 18, 25, 33, 42, 52, 63];
const HERO_MAX_LEVEL = 100;

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

function checkAndUpdateHeroUnlocks(engine) {
    if (!engine || !engine.heroes) {
        if (typeof rpgEngine !== 'undefined' && rpgEngine.heroes) {
            engine = rpgEngine;
        } else {
            return [];
        }
    }
    const totalCompletedQuests = getTotalCompletedDailyQuests();
    const newlyUnlockedNames = [];

    engine.heroes.forEach((h, idx) => {
        if (idx <= 1) {
            h.unlocked = true;
            return;
        }
        const reqQuests = (HERO_UNLOCK_QUEST_THRESHOLDS[idx] !== undefined) ? HERO_UNLOCK_QUEST_THRESHOLDS[idx] : 0;
        if (!h.unlocked && totalCompletedQuests >= reqQuests) {
            h.unlocked = true;
            newlyUnlockedNames.push(h.name);
        }
    });

    if (newlyUnlockedNames.length > 0 && typeof engine.saveHeroes === 'function') {
        engine.saveHeroes();
    }

    return newlyUnlockedNames;
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
        sentenceTemplates: ["I have [a goal].", "I want to [eat / help].", "I study because [I love it]."],
        grammarRules: ["Глаголы have, want, like", "Союзы because, but, so, or"],
        voiceConfig: { kokoroVoice: "af_heart", gender: "female", pitch: 1.1, rate: 0.9 }
    },
    {
        id: "ignis", name: "Ignis", role: "Main DD", cefrRank: 1, cefrLevel: "A0 (Objects, Colors & Clothes)", title: "Pyromancer Archmage",
        avatar: "fa-fire-flame-curved", color: "#ef4444", image: "images/ignis_hero_standalone.png", faceImage: "images/ignis_face.png", unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 160, maxHp: 160, atk: 45, def: 5, skillName: "Flame Tempest", skillDesc: "Deals 200 AoE damage.", skillIcon: "fa-burst",
        words: generateHeroWords("ignis"),
        sentenceTemplates: ["This is my [red shirt].", "That is a [blue computer]."],
        grammarRules: ["Указатели This / That / These / Those", "Цвета и артикли a / an"],
        voiceConfig: { kokoroVoice: "am_fenrir", gender: "male", pitch: 1.15, rate: 1.05 }
    },
    {
        id: "frostina", name: "Frostina", role: "Control", cefrRank: 2, cefrLevel: "A0 (Time, Weather & Routines)", title: "Ice Sorceress",
        avatar: "fa-snowflake", color: "#06b6d4", image: "images/frostina_hero_standalone.png", faceImage: "images/frostina_face.png", unlocked: false, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
        hp: 170, maxHp: 170, atk: 32, def: 6, skillName: "Deep Freeze", skillDesc: "Freezes enemies.", skillIcon: "fa-icicles",
        words: generateHeroWords("frostina"),
        sentenceTemplates: ["I [always / usually] wake up early.", "It is [cold / sunny] today."],
        grammarRules: ["Present Simple", "Наречия частоты (always, usually, never)"],
        voiceConfig: { kokoroVoice: "af_bella", gender: "female", pitch: 0.95, rate: 0.85 }
    },
    {
        id: "zephyr", name: "Zephyr", role: "Buffer", cefrRank: 2, cefrLevel: "A0 (Places, Directions & Questions)", title: "Wind Marksman",
        avatar: "fa-wind", color: "#f59e0b", image: "images/zephyr_hero_standalone.png", faceImage: "images/zephyr_face.png", unlocked: true, level: 1, xp: 0, maxXp: 150, affinityLevel: 0,
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
                    const isUnlockedByQuest = (savedHero && savedHero.unlocked) || (totalCompletedQuests >= reqQuests);

                    if (savedHero) {
                        let heroLevel = parseInt(savedHero.level, 10);
                        if (isNaN(heroLevel) || heroLevel < 1) heroLevel = defaultHero.level;
                        heroLevel = Math.min(HERO_MAX_LEVEL, Math.max(1, heroLevel));

                        let heroAffinity = parseInt(savedHero.affinityLevel || savedHero.affinity || 0, 10);
                        if (isNaN(heroAffinity)) heroAffinity = 0;
                        heroAffinity = Math.min(heroLevel, Math.max(0, heroAffinity));

                        let calculatedMaxXp = Math.round(150 + (heroLevel - 1) * 5);
                        let heroXp = parseInt(savedHero.xp, 10);
                        if (isNaN(heroXp)) heroXp = defaultHero.xp;

                        // If hero had overflow XP while clamped at 50, advance level to 51
                        while (heroXp >= calculatedMaxXp && heroLevel < HERO_MAX_LEVEL) {
                            heroXp -= calculatedMaxXp;
                            heroLevel++;
                            calculatedMaxXp = Math.round(150 + (heroLevel - 1) * 5);
                        }

                        if (heroLevel >= HERO_MAX_LEVEL) heroXp = calculatedMaxXp; // Max Level cap

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
                            unlocked: (defaultHero.id === 'zephyr' || idx <= 1) ? true : isUnlockedByQuest,
                            image: defaultHero.image,
                            faceImage: defaultHero.faceImage,
                            maxHp: baseMaxHp,
                            hp: baseMaxHp,
                            atk: baseAtk,
                            def: baseDef,
                            words: generateHeroWords(defaultHero.id) // Load official Oxford 50 CEFR words!
                        };
                    }

                    return {
                        ...defaultHero,
                        unlocked: (defaultHero.id === 'zephyr' || idx <= 1) ? true : isUnlockedByQuest
                    };
                });
            } catch (e) {}
        }
        return HEROES_DATA.map((defaultHero, idx) => ({
            ...defaultHero,
            unlocked: (defaultHero.id === 'zephyr' || idx <= 1) ? true : (totalCompletedQuests >= (HERO_UNLOCK_QUEST_THRESHOLDS[idx] || 0))
        }));
    }

    checkAndUpdateHeroUnlocks(engine = this) {
        if (!engine || !engine.heroes) return [];
        const totalCompletedQuests = getTotalCompletedDailyQuests();
        const newlyUnlockedNames = [];

        engine.heroes.forEach((h, idx) => {
            if (idx <= 1) {
                h.unlocked = true;
                return;
            }
            const reqQuests = (HERO_UNLOCK_QUEST_THRESHOLDS[idx] !== undefined) ? HERO_UNLOCK_QUEST_THRESHOLDS[idx] : 0;
            if (!h.unlocked && totalCompletedQuests >= reqQuests) {
                h.unlocked = true;
                newlyUnlockedNames.push(h.name);
            }
        });

        if (newlyUnlockedNames.length > 0 && typeof engine.saveHeroes === 'function') {
            engine.saveHeroes();
        }

        return newlyUnlockedNames;
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
                    blockedHeroNames.push(`${h.name} (Max Level ${HERO_MAX_LEVEL})`);
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
