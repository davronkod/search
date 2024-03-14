const formEl = document.querySelector('#for')
const searchEl = document.querySelector('#search');
const cleanEl = document.querySelector('#clean');
const add = document.querySelector('#add');
const dataEl = document.querySelector('#data');


function pro() {
    return `
    <div class="box">
    <div class="row-1">
    <img src="./images/pro.jpg">
    </div>
    <div class="row-2">
        <h1 id="name">Programmer - Dasturchi</h1>
        <p id="text">
            Kompyuter dasturchisi, baʼzan software developer, koʻpincha esa shunchaki dasturchi — kompyuterlar, EHMlar va aloqa vositlari hamda turli xil texnika qurilmariga „dastur“ yaratuvchi xodimdir.Dasturchilarning turlari bir nechtadir. Masalan: web devoloperlar ular brauzerlar uchun sayt ishlab chiqadilar, android va iOS dasturchilar ular android va iOS qurilmalar uchun dasturlar ishlashadi
        </p>
    </div>
</div>
    `
};

function car() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/car.jpg"></div>
    <div class="row-2">
        <h1 id="name">Car - Mashina</h1>
        <p id="text">
        Mashina (lotincha: machina — qurol, qurilma) — bir turdagi harakat energiyasini ikkinchi turdagi harakat energiyasiga aylantirish, materiallar yoki axborotlarni oʻzgartirish, aloqa oʻrnatish, yuk va odamlarni tashish uchun moʻljallangan mexanizm yoki mexanizmlar majmui. Jamiyatdagi ishlab chiqarish kuchlarining eng muhim tarkibiy qismi, yirik mashinali ishlab chiqarishning moddiy negizi, aloqa va transportning asosiy vositasi hisoblanadi
        </p>
    </div>
</div>`
};

function dog() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/dog.jpg"></div>
    <div class="row-2">
        <h1 id="name">Dog - It</h1>
        <p id="text">
        It (lotincha: Canis familiaris) — boʻrisimonlar oilasiga mansub uy hayvoni. Hamma mamlakatlarda tarqalgan. Yovvoyi ajdodi boʻri. Mezolit davrida (miloddan avvalgi 15— 10 ming yil) xonakilashtirilgan. Itlarning hid bilish, eshitish va koʻrish organlari, shuningdek, miyasi yaxshi rivojlangan. Jyillarda 42 tish boʻlib, qoziq tishi nihoyatda mustahkam. Urgʻochisi 7—8 oyda, erkagi 10— 12 oyda jinsiy voyaga yetadi, erkak It arlon deb ataladi
     </p>
    </div>
</div>`
};

function lion() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/lion.jpg"></div>
    <div class="row-2">
        <h1 id="name">Lion - Sher</h1>
        <p id="text">
        Arslon yoki sher (lotincha: Panthera leo) mushuksimonlar oilasiga mansub turdir. Uzunligi 240 sm gacha (urgʻochisi kichikroq), ogʻirligi 280 kg gacha boʻladi. Yuz qismi choʻziq, dumining uchida uzun qora qildan iborat popugi bor. Tanasi kalta jun bilan qoplangan, erkaklari tanasining oldingi qismi (boʻyni, koʻkragi va yuzi)dagi uzun yunglari yolni hosil qiladi. Rangi sargʻish, yoli qoramtir tusda
        </p>
    </div>
</div>`
};

function fox() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/fox.jpg"></div>
    <div class="row-2">
        <h1 id="name">Fox - Tulki</h1>
        <p id="text">
        Tulki — itlar oilasi sutemizuvchilar bir nechta turining umumiy nomi. Ushbu guruhning faqat 11 ta turigina xususan tulkilar (lotincha: Vulpes) turiga kiritiladi. Itlar filogeniyasi boʻyicha hozirgi zamon tasavvurlariga muvofiq. lorem ipsum dolor sit. Eng tanish va koʻp tarqalgan vakili — oddiy tulkidir (Vulpes vulpes). Tulkilar butun dunyo boʻyicha koʻpchilik xalqlarning oʻgzaki ijodida uchraydi
        </p>
    </div>
</div>`
};

function cat() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/cat.jpg"></div>
    <div class="row-2">
        <h1 id="name">Cat - Mushuk</h1>
        <p id="text">
        Mushuklar yoki uy mushuklari (Felis Silvestris Catus) - mushuksimonlar oilasiga mansub yirtqich sut emizuvchilar urugʻi. Oldin uy mushugini aloxida tur sifatida xam qarashgan. lorem ipsum dolor sit amet. juda ham yoqimtoy hayvon. Boʻyi dumgʻaza qismida yagʻriniga nisbatan baland. Tirnoqlari toʻliq tortiladi. Yevrosiyo, Afrika, Shim. va Jan. Amerikada tarqalgan; 30 turi, jumladan, Oʻzbekistonda 6 turi bor.
        </p>
    </div>
</div>`
};

function monkey() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/monkey.jpg"></div>
    <div class="row-2">
        <h1 id="name">Monkey - Maymun</h1>
        <p id="text">
        Maymunlar (Simia) - primapiar turkumiga mansub yuksak rivojlangan sut emizuvchilar kenja turkumi. Odam ham shu kenja turkumga kiradi. M.lar keng va tor burunli M.lar guruhiga bulinali. Keng burunli M. Markaziy va Janubiy Amerikada, tor burunli M. Osiyo va Afrikada tarqalgan. Tor burunli M. martishkalar va odamsimon M. oilasiga boʻlinali. Olamsimon M.ga shimpanze, gorilla, orangutan, gibbon kiradi
        </p>
    </div>
</div>`
}

function cro() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/crocodile.jpg"></div>
    <div class="row-2">
        <h1 id="name">Crocodile - Timsoh</h1>
        <p id="text">
        Timsohlar — suvda yashovchi sudralib yuruvchilar turkumi. Tanasi kaltakesakka oʻxshash, uz. 2–7 m, boshi yassilashgan, tumshugʻi uzun. Koʻzlari va burun teshiklari boshi ustidan boʻrtib chiqib turadi. Burun va quloq teshiklari suvda yopiladigan klapanlar bilan taʼminlangan. Ogʻiz boʻshligʻida ikkilamchi tanglay boʻladi. Tishlari yirik. Tili ogʻiz tubiga yopishgan. Dumi uzun va baland (ikki yondan yassilashgan). Orqa oyoqlari barmoqlari bor
        </p>
    </div>
</div>`
};

function snake() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/snake.jpg"></div>
    <div class="row-2">
        <h1 id="name">Snake - Ilon</h1>
        <p id="text">
        Ilon soʻzini bildiruvchi bir necha sahifa topildi.
        Ushbu sahifaga sizni olib kelgan maqoladagi tegishli ishoratni bu yerga emas, toʻgʻri kerakli maqolaga yoʻnaltirishingiz mumkin. ILON ’uzun dumaloq tanali, terisi yordamida sudralib harakatlanadigan, koʻzlarida qovogʻi yoʻq jo — nivor’. I l o n oftobda kulcha boʻlib yotardi. Bu ot qadimgi turkiy tildagi ’qimirla-’, ’jil-’ maʼnosini anglatgan yïl- feʼlidan -(a)n qoʻshimchasi bilan yasalgan
        </p>
    </div>
</div>`
};

function horse() {
    return `<div class="box">
    <div class="row-1"><img src="./assets/images/Без названия (1).jpg"></div>
    <div class="row-2">
        <h1 id="name">Horse - Ot</h1>
        <p id="text">
        Ot, xonaki ot (Equus caballus) — otsimonlar oilasiga mansub toq tuyoqli oʻtxoʻr xayvonlar avlodi. Oʻrta Osiyoda va Yevropaning jan.-sharqiy qismida xonaki otlar miloddan avvalgi 3-ming yillikdan maʼlum edi. O.lar yovvoyi holda Yevropada, Osiyo va Afrikada uyur boʻlib yashagan. Ular 4 kenja avlodga bulinadi: haqiqiy O. (bularga Prjevalskiy oti, qirilib ketgan tarpanlar va xonaki Otlar kiradi)
        </p>
    </div>
</div>`
};

function error() {
      if (dataEl) {
        alert("bu bizning lug'atda yuq")
      }
};

searchEl.addEventListener('click', (e) => {
    e.preventDefault();
    key = dataEl.value;

    switch (key) {
        case 'Programmist' || 'programmist':
            add.innerHTML = pro();
            break;
        case 'Car' || 'car':
            add.innerHTML = car();
            break;
        case 'Dog' || 'dog':
            add.innerHTML = dog();
            break;
        case 'Lion' || 'lion':
            add.innerHTML = lion();
            break;
        case 'Fox' || 'fox':
            add.innerHTML = fox();
            break;
        case 'Cat' || 'cat':
            add.innerHTML = cat();
            break;
        case 'Monkey' || 'monkey':
            add.innerHTML = monkey();
            break;
        case 'Crocodile' || 'crocodile':
            add.innerHTML = cro();
            break;
        case 'Snake' || 'snake':
            add.innerHTML = snake();
            break;
        case 'Horse' || 'horse':
            add.innerHTML = horse();
            break;
        default:
            add.innerHTML = error();
            break;
    }
})

// next burron //

cleanEl.addEventListener('click', (e) => {
    e.preventDefault();
    let del = confirm('sure to delete?')
    if (del) { add.innerHTML = ''; dataEl.value = ''; }
    else { console.log('not deleted') }
})