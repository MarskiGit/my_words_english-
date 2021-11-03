'use strict';
const verbsList = [
    [
        {
            h1: 'CZASOWNIKI',
            table: {
                note1: 'BEZOKOLICZNIK',
                note2: 'PAST SIMPLE',
            },
            note: {},
        },
    ],
    [
        { group: 1.1, pl: 'wykonać / robić', en: 'make', note: 'made' },
        { group: 1.1, pl: 'czytać', en: 'read', note: 'read' },
        { group: 1.1, pl: 'dzwonić', en: 'ring', note: 'rang' },
        { group: 1.1, pl: 'siedzieć / siadać', en: 'sit', note: 'sat' },
        { group: 1.1, pl: 'mówić', en: 'speak', note: 'spoke' },
        { group: 1.1, pl: 'stać', en: 'stand', note: 'stood' },
        { group: 1.1, pl: 'brać / robić', en: 'take', note: 'took' },
        { group: 1.1, pl: 'budzić się', en: 'wake', note: 'woke' },
        { group: 1.1, pl: 'pisać', en: 'write', note: 'wrote' },
        { group: 1.1, pl: 'zapalać', en: 'light', note: 'lit' },
        { group: 1.1, pl: 'wycofać', en: 'withdraw', note: 'withdrew' },
        { group: 1.1, pl: 'rozpoczynać', en: 'begin', note: 'began' },
        { group: 1.1, pl: 'rosnąć', en: 'grow', note: 'grew' },
        { group: 1.1, pl: 'prowadzić / przewodzić', en: 'lead', note: 'led' },
        { group: 1.1, pl: 'przychodzić', en: 'come', note: 'came' },
        { group: 1.1, pl: 'obciąć / skaleczyć się', en: 'cut', note: 'cut' },
        { group: 1.1, pl: 'rysować', en: 'draw', note: 'drew' },
        { group: 1.1, pl: 'dostać', en: 'get', note: 'got' },
        { group: 1.1, pl: 'ukryć / shować się', en: 'hide', note: 'hid' },
        { group: 1.1, pl: 'trzymać / mieścić', en: 'hold', note: 'held' },
        { group: 1.1, pl: 'wkładać / kłaść', en: 'put', note: 'put' },
        { group: 1.1, pl: 'usatwić / ustalać', en: 'set', note: 'set' },
        { group: 1.1, pl: 'nosić / mieć na sobie / być ubranym', en: 'wear', note: 'wore' },
        { group: 1.1, pl: 'latać', en: 'fly', note: 'flew' },
        { group: 1.1, pl: 'iść', en: 'go', note: 'went' },
        { group: 1.1, pl: 'wyjść / wychodzić / wyjeżdżać', en: 'leave', note: 'left' },
        { group: 1.1, pl: 'jeździć', en: 'ride', note: 'rode' },
        { group: 1.1, pl: 'wysyłać', en: 'send', note: 'sent' },
        { group: 1.1, pl: 'wschodzić', en: 'rise', note: 'rose' },
        { group: 1.1, pl: 'pływać', en: 'swim', note: 'swam' },
        { group: 1.1, pl: 'dmuchać / wiać', en: 'blow', note: 'blew' },
        { group: 1.1, pl: 'budować', en: 'build', note: 'built' },
        { group: 1.1, pl: 'świecić się / błyszcześ', en: 'shine', note: 'shone' },
        { group: 1.1, pl: 'kupować', en: 'buy', note: 'bought' },
        { group: 1.1, pl: 'uczyć się', en: 'learn', note: 'learnt' },
        { group: 1.1, pl: 'płacić', en: 'pay', note: 'paid' },
        { group: 1.1, pl: 'sprzedać', en: 'sell', note: 'sold' },
        { group: 1.1, pl: 'spędzać', en: 'spend', note: 'spent' },
        { group: 1.1, pl: 'śnić / marzyć', en: 'dream', note: 'taught' },
        { group: 1.1, pl: 'słyszeć', en: 'hear', note: 'heard' },
        { group: 1.1, pl: 'wiedzieć / znać', en: 'know', note: 'knew' },
        { group: 1.1, pl: 'widzieć', en: 'see', note: 'saw' },
        { group: 1.1, pl: 'myśleć', en: 'think', note: 'thought' },
        { group: 1.1, pl: 'rozumieć', en: 'understand', note: 'understood' },
        { group: 1.1, pl: 'karmić', en: 'feed', note: 'fed' },
        { group: 1.1, pl: 'czuć', en: 'feel', note: 'felt' },
        { group: 1.1, pl: 'śpiewać', en: 'sing', note: 'sen' },
        { group: 1.1, pl: 'pachnieć / wąchać', en: 'smell', note: 'smelt' },
        { group: 1.1, pl: 'kraść', en: 'steal', note: 'stole' },
        { group: 1.1, pl: 'palić / parzyć', en: 'burn', note: 'burnt' },
        { group: 1.1, pl: 'walczyć', en: 'fight', note: 'fought' },
        { group: 1.1, pl: 'wieszać', en: 'hen', note: 'hung' },
        { group: 1.1, pl: 'uderzyć / trafić', en: 'hit', note: 'hit' },
        { group: 1.1, pl: 'ranić', en: 'hurt', note: 'hurt' },
        { group: 1.1, pl: 'bić', en: 'beat', note: 'beat' },
        { group: 1.1, pl: 'wygrywać', en: 'win', note: 'won' },
        { group: 1.1, pl: 'gryźć', en: 'bite', note: 'bit' },
        { group: 1.1, pl: 'wstrząsnąć', en: 'shake', note: 'shook' },
        { group: 1.1, pl: 'strzelać', en: 'shoot', note: 'shot' },
        { group: 1.1, pl: 'tonąć', en: 'sink', note: 'sank' },
        { group: 1.1, pl: 'podrzeć', en: 'tear', note: 'tore' },
        { group: 1.1, pl: 'rzucać', en: 'throw', note: 'threw' },
        { group: 1.1, pl: 'złamać / zepsuć', en: 'break', note: 'broke' },
        { group: 1.1, pl: 'łapać', en: 'catch', note: 'caught' },
        { group: 1.1, pl: 'spadać / upaść', en: 'fall', note: 'fell' },
        { group: 1.1, pl: 'dawać', en: 'give', note: 'gave' },
        { group: 1.1, pl: 'zgubić / przegrać', en: 'lose', note: 'lost' },
        { group: 1.1, pl: 'powiedzieć', en: 'tell', note: 'told' },
        { group: 1.1, pl: 'wybaczać', en: 'forgive', note: 'forgave' },
        { group: 1.1, pl: 'pozwolić / pozwalać', en: 'let', note: 'let' },
        { group: 1.1, pl: 'znaczyć / mieć na myśli', en: 'mean', note: 'meant' },
        { group: 1.1, pl: 'nie spać', en: 'awake', note: 'awoke' },
        { group: 1.1, pl: 'pokazywać', en: 'show', note: 'showed' },
        { group: 1.1, pl: 'pożyczać (coś komuś)', en: 'lend', note: 'lent' },
        { group: 1.1, pl: 'przynosić', en: 'bring', note: 'brought' },
        { group: 1.1, pl: 'móc / mogę / potrafię', en: 'can', note: 'could' },
        { group: 1.1, pl: 'wybierać', en: 'choose', note: 'chose' },
        { group: 1.1, pl: 'robić / wykonywać', en: 'do', note: 'did' },
        { group: 1.1, pl: 'pić', en: 'drink', note: 'drank' },
        { group: 1.1, pl: 'jeść', en: 'eat', note: 'ate' },
        { group: 1.1, pl: 'znaleść / znajdować', en: 'find', note: 'fond' },
        { group: 1.1, pl: 'zapomnieć', en: 'forget', note: 'forgot' },
        { group: 1.1, pl: 'mieć', en: 'have', note: 'had' },
        { group: 1.1, pl: 'kłaść / położyć', en: 'lay', note: 'laid' },
        { group: 1.1, pl: 'leżeć', en: 'lie', note: 'lay' },
        { group: 1.1, pl: 'stać się / zostać / zostawać (kimś)', en: 'become', note: 'become<u>d</u>' },
        { group: 1, pl: 'trzymać / zostawić / hodować', en: 'keep', note: 'kept' },
        { group: 1, pl: 'pytać', en: 'ask', note: 'asked' },
        { group: 1, pl: 'odpowiadać', en: 'answer', note: 'answer<u>ed</u>' },
        { group: 1, pl: 'powinien / powinno się', en: 'should', note: 'should<u>ed</u>' },
        { group: 1, pl: 'patrzeć', en: 'look', note: 'look<u>ed</u>' },
        { group: 1.1, pl: 'powiedzieć / mówić', en: 'say', note: 'said' },
        { group: 1, pl: 'ufać / wierzyć', en: 'trust', note: 'trust<u>ed</u>' },
        { group: 1, pl: 'pracować / działać', en: 'work', note: 'work<u>ed</u>' },
        { group: 1, pl: 'dzwonić / nazywać', en: 'call', note: 'call<u>ed</u>' },
        { group: 1, pl: 'próbować / starać się', en: 'try', note: 'tr<u>ied</u>' },
        { group: 1, pl: 'potrzebować', en: 'need', note: 'need<u>ed</u>' },
        { group: 1, pl: 'preferować / woleć', en: 'prefer', note: 'prefer<u>red</u>' },
        { group: 1, pl: 'zezwalać na / pozwalać', en: 'allow', note: 'allow<u>ed</u>' },
        { group: 1, pl: 'wydawać się', en: 'seem', note: 'seem<u>ed</u>' },
        { group: 1, pl: 'pomagać / wspierać', en: 'help', note: 'help<u>ed</u>' },
        { group: 1, pl: 'grać / odtwarzać / bawić się', en: 'play', note: 'pla<u>ied</u>' },
        { group: 1.1, pl: 'biegać', en: 'run', note: 'ran' },
        { group: 1, pl: 'mieszkać / żyć', en: 'live', note: 'liv<u>ed</u>' },
        { group: 1, pl: 'ruszać (się) / przenosić (się)', en: 'move', note: 'move<u>d</u>' },
        { group: 1, pl: 'rozmawiać', en: 'talk', note: 'talk<u>ed</u> ' },
        { group: 1, pl: 'chcieć', en: 'want', note: 'want<u>ed</u> ' },
        { group: 1, pl: 'uruchamiać / wystrzelić / odpalić', en: 'launch', note: 'launch<u>ed</u>' },
        { group: 1, pl: 'zaproszać', en: 'invite', note: 'invit<u>ed</u>' },
        { group: 1, pl: 'kwitnąć', en: 'blossom', note: 'blossom<u>ed</u>' },
        { group: 1, pl: 'dostarczyć', en: 'deliver', note: 'deliver<u>ed</u>' },
        { group: 1, pl: 'przerywać / przeszkadzać', en: 'interrupt', note: 'interrupt<u>ed</u>' },
        { group: 1.1, pl: 'spotykać / poznawać', en: 'meet', note: 'met' },
        { group: 1.1, pl: 'zakazać / zabraniać', en: 'forbid', note: 'forbade' },
        { group: 1, pl: 'dwracać się / skręcać / obracać', en: 'turn', note: 'turn<u>ed</u>' },
        { group: 1, pl: 'zamierzać', en: 'going to', note: 'gonna' },
        { group: 1, pl: 'musieć', en: 'have to', note: 'gotta' },
        { group: 1.1, pl: 'opuścić / porzucić', en: 'forsake', note: 'forsook' },
        { group: 1, pl: 'nienawidzić', en: 'hate', note: 'hate<u>d</u>' },
        { group: 1, pl: 'podziwiać / szanować', en: 'admire', note: 'admire<u>d</u>' },
        { group: 1, pl: 'poprawić (się) / ulepszyć', en: 'improve', note: ' improve<u>d</u>' },
        { group: 1, pl: 'przybywać / przyjechać / przylatywać', en: 'arrive', note: 'arrive<u>d</u>' },
        { group: 1, pl: 'przypuszczać / zakładać', en: 'assume', note: 'assume<u>d</u>' },
        { group: 1, pl: 'mieć swoje miejsce / prznależeć / należeć', en: 'belong', note: 'belong<u>ed</u>' },
        { group: 1, pl: 'doceniać / rozumieć', en: 'appreciate', note: 'appreciate<u>d</u>' },
        { group: 1, pl: 'zgadzać się / podzielać opinię', en: 'agree', note: 'agree<u>d</u>' },
        { group: 1, pl: 'zależeć (być uzależnionym)', en: 'depend', note: 'depende<u>d</u>' },
        { group: 1, pl: 'martwić się', en: 'worry', note: 'worr<u>ied</u>' },
        { group: 1, pl: 'dotyczyć / niepokoić', en: 'concern', note: 'concerne<u>d</u>' },
        { group: 1, pl: 'boleć', en: 'ache', note: 'ache<u>d</u>' },
        { group: 1, pl: 'nosić / dźwigać', en: 'carry', note: 'carr<u>ied</u>' },
        { group: 1, pl: 'uwielbiać', en: 'adore', note: 'adore<u>d</u>' },
        { group: 1, pl: 'przekroczyć (limit) / przewyższyć', en: 'exceed', note: 'exceed<u>ed</u>' },
        { group: 1.1, pl: 'rzucać', en: 'quit', note: 'quitted' },
        { group: 1, pl: 'lubić', en: 'like', note: 'like<u>d</u>' },
        { group: 1, pl: 'gwarantować', en: 'guarantee', note: '' },
        { group: 1, pl: 'aprobować / zatwierdzać / akceptować', en: 'approve', note: 'approve<u>d</u>' },
        { group: 1, pl: 'słuchać', en: 'listen', note: 'listen<u>ed</u>' },
        { group: 1, pl: 'dodawać', en: 'add', note: 'add<u>ed</u>' },
        { group: 1, pl: 'lubić / czerpać przyjemnosć', en: 'enjoy', note: 'enjoy<u>ed</u>' },
        { group: 1, pl: 'roztapiać / topić', en: 'melt', note: 'melt<u>ed</u>' },
        { group: 1, pl: 'pożyczać (coś od kogoś)', en: 'borrow', note: 'borrow<u>ed</u>' },
        { group: 1, pl: 'chronić / zabezpieczyć / nronić', en: 'protect', note: 'protect<u>ed</u>' },
        { group: 1, pl: 'chichotać', en: 'giggle', note: 'giggle<u>d</u>' },
        { group: 1, pl: 'mieć na coś pieniądze', en: 'afford', note: 'afford<u>ed</u>' },
        { group: 1, pl: 'śmiać się', en: 'laugh', note: 'laugh<u>ed</u>' },
        { group: 1, pl: 'aktualizować', en: 'update', note: 'update<u>d</u>' },
        { group: 1, pl: 'unosić się', en: 'float', note: 'float<u>ed</u>' },
        { group: 1, pl: 'nie zgadzać się', en: 'disagree', note: 'disagre<u>d</u>' },
        { group: 1, pl: 'spacerować / chodzić', en: 'walk', note: 'walk<u>ed</u>' },
        { group: 1, pl: 'spać', en: 'sleep', note: 'slept' },
        { group: 1, pl: 'płakać', en: 'cry', note: 'cr<u>ied</u>' },
        { group: 1, pl: 'odkurzać', en: 'vacuum', note: '' },
        { group: 1, pl: 'pamiętać', en: 'remember', note: 'remember<u>ed</u>' },
        { group: 1, pl: 'prasować', en: 'iron', note: 'iron<u>ed</u>' },
        { group: 1, pl: 'zarabiać (pieniądze)', en: 'earn', note: 'earn<u>ed</u>' },
        { group: 1.1, pl: 'zamiatać', en: 'sweep', note: 'sweept' },
        { group: 1.1, pl: 'wejść', en: 'get in', note: 'got in' },
        { group: 1.1, pl: 'wyjść / wyjeżdżać', en: 'get out', note: 'got out' },
        { group: 1, pl: 'wejść', en: 'enter', note: 'enter<u>ed</u>' },
        { group: 1, pl: 'zamykać', en: 'lock', note: 'lock<u>ed</u>' },
        { group: 1, pl: 'wynaleźć', en: 'invent', note: 'invent<u>ed</u>' },
        { group: 1, pl: 'wydarzyć się / zdarzyć', en: 'happen', note: 'happen<u>ed</u>' },
        { group: 1, pl: 'przygotowywać', en: 'prepare', note: 'prepare<u>ed</u>' },
        { group: 1, pl: 'zauważyć', en: 'notice', note: 'notice<u>d</u>' },
        { group: 1, pl: 'integrować / wprowadzać', en: 'integrate', note: 'integrate<u>d</u>' },
        { group: 1, pl: 'doszkalać / podniesć kwalifikacje', en: 'upskill', note: 'upskill<u>ed</u>' },
        { group: 1, pl: 'przystosowywać się / dostosowywać się', en: 'adapt', note: 'adapt<u>ed</u>' },
        { group: 1, pl: 'osądzać / sądzić', en: 'judge', note: '' },
        { group: 1, pl: 'zamawiać', en: 'order', note: 'order<u>ed</u>' },
        { group: 1, pl: 'popełniać / dopuszczać się', en: 'commit', note: 'commit<u>ed</u>' },
        { group: 1, pl: 'zrywać / zbierać', en: 'pick', note: 'pick<u>ed</u>' },
        { group: 1, pl: 'eksponować / odsłaniać', en: 'expose', note: 'expos<u>ed</u>' },
        { group: 1, pl: 'zrywać', en: 'pick', note: 'pick<u>ed</u>' },
        { group: 1, pl: 'zgadywać / domyślać się', en: 'guess', note: 'guess<u>ed</u>' },
        { group: 1, pl: 'przypuszczać', en: 'suppose', note: 'suppos<u>ed</u>' },
        { group: 1, pl: 'oczekiwać / spodziwać się / spodziewać się', en: 'expect', note: 'expect<u>ed</u>' },
        { group: 1, pl: 'wierzyć / uwierzyć', en: 'believe', note: '?' },
        { group: 1, pl: 'robić porządki / sprzątać', en: 'tidy up', note: '?' },
        { group: 1, pl: 'podróżować', en: 'travel', note: 'travel<u>ed</u>' },
        { group: 1, pl: 'przeprowadzać się / przenieść / ruszaj się', en: 'move', note: 'mov<u>ed</u>' },
        { group: 1, pl: 'studiować', en: 'study', note: 'study<u>ed</u>' },
        { group: 1, pl: 'włączać / wliczać / zawierać', en: 'include', note: 'includ<u>ed</u>' },
        { group: 1, pl: 'zawachać się / wahać się', en: 'hesitate', note: 'hesitat<u>ed</u>' },
        { group: 1, pl: 'przedstawić / zapoznawać', en: 'introduce', note: 'introduc<u>ed</u>' },
        { group: 1, pl: 'przesunąć', en: 'swipe', note: 'swip<u>ed</u>' },
        { group: 1, pl: 'dezaktywować / wyłączyć', en: 'deactivate', note: 'deactivat<u>ed</u>' },
        { group: 1, pl: 'wyglądać', en: 'look', note: 'look<u>ed</u>' },
        { group: 1, pl: 'rzuć monetą', en: 'toss a coin', note: '' },
        { group: 1, pl: 'zawinąć / owinąć / zapakować', en: 'wrap', note: 'wrap<u>ed</u>' },
        { group: 1, pl: 'porównywać', en: 'compare', note: 'compar<u>ed</u>' },
        { group: 1, pl: 'transmitować / nadawać', en: 'broadcast', note: '' },
        { group: 1, pl: 'kopać', en: 'dig', note: 'dig<u>ed</u>' },
        { group: 1, pl: 'chwiać się / chybotać się / kiwać się', en: 'wobble', note: 'wobbl<u>ed</u>' },
        { group: 1, pl: 'ziewać', en: 'yawn', note: 'yawn<u>ed</u>' },
        { group: 1, pl: 'zaspać', en: 'oversleep', note: 'oversleep<u>ed</u>' },
        { group: 1, pl: 'żeglować', en: 'sail', note: 'sail<u>ed</u>' },
        { group: 1, pl: 'twierdzić / utzymywać', en: 'claim', note: 'claim<u>ed</u>' },
        { group: 1, pl: 'kierwoać zarządzac', en: 'manage', note: 'manag<u>ed</u>' },
        { group: 1, pl: 'przycinać / podcinać', en: 'trim', note: 'trim<u>ed</u>' },
        { group: 1, pl: 'wyrzucać / pozbywać się', en: 'discard', note: 'discard<u>ed</u>' },
        { group: 1, pl: 'kierować / zarządzać', en: 'manage', note: 'manag<u>ed</u>' },
        { group: 1, pl: 'wydawać (pieniądze)', en: 'spend', note: 'spend<u>ed</u>' },
        { group: 1, pl: 'postanawiać / zdecydować', en: 'decide', note: 'decide<u>ed</u>' },
        { group: 1, pl: 'rekomendować / polecać', en: 'recommend', note: 'recommend<u>ed</u>' },
        { group: 1, pl: 'wchodzić', en: 'enter', note: 'enter<u>ed</u>' },
        { group: 1, pl: 'relaksować się / odprężać się / rozluźniać', en: 'relax', note: 'relax<u>ed</u>' },
        { group: 1, pl: 'jeździć na łyrzwach', en: 'skate', note: 'skate<u>d</u>' },
        { group: 1, pl: 'drzemać / zdrzemnąć się', en: 'nap', note: 'nap<u>ed</u>' },
    ],
];

// Czasowniki
export default verbsList;
