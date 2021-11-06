'use strict';
const irregularVerbsList = [
    [
        {
            h1: 'CZASOWNIKI Nieregularne',
            table: {
                note1: 'present participle',
                note2: 'past participle',
            },
            note: {},
        },
    ],
    [
        { group: 1, pl: 'wykonać / robić', en: 'make', note: 'made / made' },
        { group: 1, pl: 'czytać', en: 'read', note: 'read / read' },
        { group: 1, pl: 'dzwonić', en: 'ring', note: 'rang / rung' },
        { group: 1, pl: 'siedzieć / sadzac', en: 'sit', note: 'sat / sat' },
        { group: 1, pl: 'mówić', en: 'speak', note: 'spoke / spoken' },
        { group: 1, pl: 'stać', en: 'stand', note: 'stood / stood' },
        { group: 1, pl: 'brać / robić', en: 'take', note: 'took / taken' },
        { group: 1, pl: 'budzić', en: 'wake', note: 'woke / woken' },
        { group: 1, pl: 'pisać', en: 'write', note: 'wrote / written' },
        { group: 1, pl: 'zapalać', en: 'light', note: 'lit / lit' },
        { group: 1, pl: 'wycofać', en: 'withdraw', note: 'withdrew / withdrawn' },
        { group: 1, pl: 'rozpoczynać', en: 'begin', note: 'began / begun' },
        { group: 1, pl: 'rosnąć / uprawiać / sprawić', en: 'grow', note: 'grew / grown' },
        { group: 1, pl: 'prowadzić / przewodzić', en: 'lead', note: 'led / led' },
        { group: 1, pl: 'przychodzić', en: 'come', note: 'came / come' },
        { group: 1, pl: 'obciąć / skaleczyć się', en: 'cut', note: 'cut / cut' },
        { group: 1, pl: 'rysować / ciągnąć (losy)', en: 'draw', note: 'drew / drawn' },
        { group: 1, pl: 'dostać / dotrzeć / przynieść', en: 'get', note: 'got / got' },
        { group: 1, pl: 'ukryć / shować się', en: 'hide', note: 'hid / hidden' },
        { group: 1, pl: 'trzymać / mieścić', en: 'hold', note: 'held / held' },
        { group: 1, pl: 'wkładać / kłaść', en: 'put', note: 'put / put' },
        { group: 1, pl: 'usatwić / ustalać', en: 'set', note: 'set / set' },
        { group: 1, pl: 'nosić / mieć na sobie', en: 'wear', note: 'wore / worn' },
        { group: 1, pl: 'latać', en: 'fly', note: 'flew / flown' },
        { group: 1, pl: 'iść', en: 'go', note: 'went / gone' },
        { group: 1, pl: 'wyjść / wychodzić / wyjeżdżać', en: 'leave', note: 'left' },
        { group: 1, pl: 'jeździć', en: 'ride', note: 'rode / rodden' },
        { group: 1, pl: 'wysyłać', en: 'send', note: 'sent / sent' },
        { group: 1, pl: 'wschodzić', en: 'rise', note: 'rose / risen' },
        { group: 1, pl: 'pływać', en: 'swim', note: 'swam / swum' },
        { group: 1, pl: 'dmuchać / wiać / gwizdać', en: 'blow', note: 'blew / blown' },
        { group: 1, pl: 'budować', en: 'build', note: 'built / built' },
        { group: 1, pl: 'świecić się / błyszcześ', en: 'shine', note: 'shone / shined' },
        { group: 1, pl: 'kupować', en: 'buy', note: 'bought / bought' },
        { group: 1, pl: 'uczyć się  dowiedzieć się', en: 'learn', note: 'learnt / learnt' },
        { group: 1, pl: 'płacić', en: 'pay', note: 'paid / paid' },
        { group: 1, pl: 'sprzedać', en: 'sell', note: 'sold / sold' },
        { group: 1, pl: 'spędzać', en: 'spend', note: 'spent / spent' },
        { group: 1, pl: 'śnić / marzyć', en: 'dream', note: 'dreamt / dreamt' },
        { group: 1, pl: 'słyszeć', en: 'hear', note: 'heard / heard' },
        { group: 1, pl: 'wiedzieć / znać', en: 'know', note: 'knew / known' },
        { group: 1, pl: 'widzieć', en: 'see', note: 'saw / seen' },
        { group: 1, pl: 'myśleć', en: 'think', note: 'thought / thought' },
        { group: 1, pl: 'rozumieć', en: 'understand', note: 'understood / understood' },
        { group: 1, pl: 'karmić', en: 'feed', note: 'fed / fed' },
        { group: 1, pl: 'czuć', en: 'feel', note: 'felt / felt' },
        { group: 1, pl: 'śpiewać', en: 'sing', note: 'sang / sung' },
        { group: 1, pl: 'pachnieć / wąchać', en: 'smell', note: 'smelt / smelt' },
        { group: 1, pl: 'kraść', en: 'steal', note: 'stole / stolen' },
        { group: 1, pl: 'palić / parzyć', en: 'burn', note: 'burnt / burnt' },
        { group: 1, pl: 'walczyć', en: 'fight', note: 'fought / fought' },
        { group: 1, pl: 'wieszać', en: 'hen', note: 'hung' },
        { group: 1, pl: 'uderzyć / trafić', en: 'hit', note: 'hit / hit' },
        { group: 1, pl: 'ranić', en: 'hurt', note: 'hurt / hurt' },
        { group: 1, pl: 'bić', en: 'beat', note: 'beat / beaten' },
        { group: 1, pl: 'wygrywać', en: 'win', note: 'won / won' },
        { group: 1, pl: 'gryźć', en: 'bite', note: 'bit / bitten' },
        { group: 1, pl: 'wstrząsnąć / uścisnąć', en: 'shake', note: 'shook / shaken' },
        { group: 1, pl: 'strzelać', en: 'shoot', note: 'shot / shot' },
        { group: 1, pl: 'tonąć', en: 'sink', note: 'sank / sunk' },
        { group: 1, pl: 'podrzeć', en: 'tear', note: 'tore /  torn' },
        { group: 1, pl: 'złamać / zepsuć', en: 'break', note: 'broke / broken' },
        { group: 1, pl: 'łapać', en: 'catch', note: 'caught / caught' },
        { group: 1, pl: 'spadać / upaść', en: 'fall', note: 'fell / fallen' },
        { group: 1, pl: 'dawać', en: 'give', note: 'gave / given' },
        { group: 1, pl: 'zgubić / przegrać', en: 'lose', note: 'lost / lost' },
        { group: 1, pl: 'powiedzieć', en: 'tell', note: 'told / told' },
        { group: 1, pl: 'wybaczać', en: 'forgive', note: 'forgave / forgiven' },
        { group: 1, pl: 'pozwolić / pozwalać', en: 'let', note: 'let / let' },
        { group: 1, pl: 'znaczyć / mieć na myśli', en: 'mean', note: 'meant / meant' },
        { group: 1, pl: 'nie spać', en: 'awake', note: 'awoke / awoke' },
        { group: 1, pl: 'pokazywać', en: 'show', note: 'showed / shown' },
        { group: 1, pl: 'pożyczać komuś', en: 'lend', note: 'lent / lent' },
        { group: 1, pl: 'przynosić', en: 'bring', note: 'brought / brought' },
        { group: 1, pl: 'móc / mogę / potrafić', en: 'can', note: 'could / been able to' },
        { group: 1, pl: 'wybierać', en: 'choose', note: 'chose / chosen' },
        { group: 1, pl: 'robić / wykonywać', en: 'do', note: 'did / done' },
        { group: 1, pl: 'pić', en: 'drink', note: 'drank / drunk' },
        { group: 1, pl: 'jeść', en: 'eat', note: 'ate / eaten' },
        { group: 1, pl: 'znaleść / znajdować', en: 'find', note: 'found / found' },
        { group: 1, pl: 'zapomnieć', en: 'forget', note: 'forgot / forgotten' },
        { group: 1, pl: 'mieć', en: 'have', note: 'had / had' },
        { group: 1, pl: 'kłaść / położyć', en: 'lay', note: 'laid / laid' },
        { group: 1, pl: 'leżeć', en: 'lie', note: 'lay / lain' },
        { group: 1, pl: 'trzymać / zostawić / hodować', en: 'keep', note: 'kept / kept' },
        { group: 1, pl: 'pytać', en: 'ask', note: 'asked / asked' },
        { group: 1, pl: 'biegać', en: 'run', note: 'ran / ran' },
        { group: 1, pl: 'spotykać / poznawać', en: 'meet', note: 'met / met' },
        { group: 1, pl: 'zakazać / zabraniać', en: 'forbid', note: 'forbade / forbidden' },
        { group: 1, pl: 'zamierzać', en: 'going to', note: 'gonna' },
        { group: 1, pl: 'musieć', en: 'have to', note: 'gotta' },
        { group: 1, pl: 'opuścić / porzucić', en: 'forsake', note: 'forsook' },
        { group: 1, pl: 'rzucać', en: 'quit', note: 'quit / quit' },
        { group: 1, pl: 'spać', en: 'sleep', note: 'slept / slept' },
        { group: 1, pl: 'zamiatać', en: 'sweep', note: 'sweept / swept' },
        { group: 1, pl: 'zostać / stawać się', en: 'become', note: 'became / become' },
        { group: 1, pl: 'rzucać / wyrzucać', en: 'throw', note: 'threw / thrown' },
        { group: 1, pl: 'być', en: 'be', note: 'was, werre /been' },
        { group: 1, pl: 'kosztować', en: 'cost', note: 'cost / cost' },
        { group: 1, pl: 'transmitować / nadawać', en: 'broadcast', note: 'broadcast / broadcast' },
    ],
];

// Czasowniki niereguralne
export default irregularVerbsList;