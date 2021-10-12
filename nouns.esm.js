'use strict';
const nounsList = [
    [
        {
            h1: 'Rzeczowniki',
            table: {
                note1: 'ANGIELSKI',
                note2: 'Group by',
            },
            note: {
                p1: 'Aby utworzyć liczbę mnogą do słowa dodajemny końcówkę -s',
                p2: 'Jednak kiedy słowo kończy się...',
                p3: 'na: -s, -sh, -ch, -o, -x dodajemy -es',
                p4: 'spółgłoską, po której stoi -y wtedy y zamieniamy na i następnie dodajemy -es (-ies)',
                p5: 'samogłoską, po której stoi -y wtedy dodajemy -s',
                p6: 'na: -f, -fe wtedy zastępujemy te końcówki na -ves',
            },
        },
    ],
    [
        { group: 1, pl: 'inwestycja', en: 'investment', note: 'investment<u>s</u>' },
        { group: 1, pl: 'butelka', en: 'bottle', note: 'bottle<u>s</u>' },
        { group: 1, pl: 'kawałek', en: 'piece', note: 'piece<u>s</u>' },
        { group: 1, pl: 'filiżanka', en: 'cup', note: 'cup<u>s</u>' },
        { group: 1, pl: 'łyżka', en: 'spoon', note: 'spoon<u>s</u>' },
        { group: 1, pl: 'klucz', en: 'spoon', note: 'key<u>s</u>' },
        { group: 1, pl: 'portfel', en: 'wallet', note: 'wallet<u>s</u>' },
        { group: 1, pl: 'karta debetowa', en: 'debit card', note: 'debit card<u>s</u>' },
        { group: 1, pl: 'powietrze', en: 'air', note: '-' },
        { group: 1, pl: 'okulary', en: 'glasses', note: '-' },
        { group: 1, pl: 'okulary słoneczne', en: 'sunglasses', note: '-' },
        { group: 1, pl: 'pierścionek / pierścień', en: 'ring', note: 'ring<u>s</u>' },
        { group: 1, pl: 'kalendarz', en: 'calendar', note: 'calendar<u>s</u>' },
        { group: 1, pl: 'współzałożyciel', en: 'co-founder', note: 'co-founder<u>s</u>' },
        { group: 1, pl: 'założyciel', en: 'founder', note: 'founder<u>s</u>' },
        { group: 1, pl: 'poza domem / na dworze', en: 'outdoors', note: '' },
        { group: 1, pl: 'ołówek', en: 'pencil', note: 'pencil<u>s</u>' },
        { group: 1, pl: 'gumka do ścierania', en: 'rubber', note: 'rubber<u>s</u>' },
        { group: 1, pl: 'linijka', en: 'ruler', note: 'ruler<u>s</u>' },
        { group: 1, pl: 'książka', en: 'book', note: 'book<u>s</u>' },
        { group: 1, pl: 'nożyczki', en: 'scissors', note: '-' },
        { group: 1, pl: 'podręcznik', en: 'textbook', note: 'textbook<u>s</u>' },
        { group: 1, pl: 'pensja', en: 'salary', note: 'salar<u>ies</u>' },
        { group: 1, pl: 'czek', en: 'cheque', note: 'cheque<u>s</u>' },
        { group: 1, pl: 'kosz', en: 'bin', note: 'bin<u>s</u>' },
        { group: 1, pl: 'składawonie / magazynowanie', en: 'storage', note: 'storage<u>s</u>' },
        { group: 1, pl: 'tlen', en: 'oxygen', note: '-' },
        { group: 1, pl: 'poryw wiatru', en: 'gust', note: 'gust<u>s</u>' },
        { group: 1, pl: 'samochód', en: 'car', note: 'car<u>s</u>' },
        { group: 1, pl: 'zdjęcie', en: 'photo', note: 'photo<u>s</u>' },
        { group: 1, pl: 'pianino', en: 'piano', note: 'piano<u>s</u>' },
        { group: 1, pl: 'rzecz', en: 'thing', note: 'thing<u>s</u>' },
        { group: 1, pl: 'godzinówka', en: 'wage', note: 'wages<u>s</u>' },
        { group: 1, pl: 'obserwujący', en: 'follower', note: 'follower<u>s</u>' },
        { group: 1, pl: 'jezioro', en: 'lake', note: 'lakes<u>s</u>' },
        { group: 1, pl: 'warzywa / jarzyna', en: 'vegetable', note: 'vegetable<u>s</u>' },
        { group: 1, pl: 'kolega z pracy', en: 'colleague', note: 'colleague<u>s</u>' },
        { group: 1, pl: 'instrukcja', en: 'instruction', note: 'instruction<u>s</u>' },
        { group: 1, pl: 'półrocze', en: 'half-year', note: 'half-year<u>s</u>' },
        { group: 1, pl: 'wykładzina dywanowa / dywan', en: 'carpet', note: 'carpet<u>s</u>' },
        { group: 1, pl: 'meble', en: 'furniture', note: '-' },
        { group: 1, pl: 'krzesło', en: 'chair', note: 'chaitr<u>s</u>' },
        { group: 1, pl: 'koc', en: 'blanket', note: 'blanket<u>s</u>' },
        { group: 1, pl: 'sen', en: 'dream', note: 'dream<u>s</u>' },
        { group: 1, pl: 'podpis / tytuł (np.: pod obrazkiem)', en: 'caption', note: 'caption<u>s</u>' },
        { group: 1, pl: 'wyrzucać / pozbywać się', en: 'discard', note: 'discard<u>s</u>' },
        { group: 1, pl: 'biblioteka (budynek)', en: 'library', note: 'librar<u>ies</u>' },
        { group: 1, pl: 'płaszcz / kurtka', en: 'coat', note: 'coat<u>s</u>' },
        { group: 1, pl: 'wzór / deseń', en: 'pattern', note: 'pattern<u>s</u>' },
        { group: 1, pl: 'poduszka', en: 'pillow', note: 'pillow<u>s</u>' },
        { group: 1, pl: 'dom', en: 'house', note: 'house<u>s</u>' },
        { group: 1, pl: 'gotowanie', en: 'cooking', note: '-' },
        { group: 1, pl: 'bałagan', en: 'mess', note: '-' },
        { group: 1, pl: 'córka', en: 'daughter', note: 'dauhter<u>s</u>' },
        { group: 1, pl: 'wujek', en: 'uncle', note: 'uncle<u>s</u>' },
        { group: 1, pl: 'dochód', en: 'income', note: 'income<u>s</u>' },
        { group: 1, pl: 'lodówka', en: 'fridge', note: 'fridge<u>s</u>' },
        { group: 1, pl: 'tekst piosenki', en: 'lyrics', note: '-' },
        { group: 1, pl: 'kuzyn / kuzynka', en: 'cousin', note: 'cousin<u>s</u>' },
        { group: 1, pl: 'brat / siostra', en: 'sibling', note: 'sibling<u>s</u>' },
        { group: 1, pl: 'litera', en: 'letter', note: 'letter<u>s</u>' },
        { group: 1, pl: 'kokarda / kokardka', en: 'bow', note: 'bow<u>s</u>' },
        { group: 1, pl: 'pomyłka  / błąd', en: 'mistake', note: 'mistake<u>s</u>' },
        { group: 1, pl: 'dziadek', en: 'grandpa', note: 'grandpa<u>s</u>' },
        { group: 1, pl: 'babcia', en: 'granmother', note: 'grandmonther<u>s</u>' },
        { group: 1, pl: 'ciocia', en: 'aunt', note: 'aunt<u>s</u>' },
        { group: 1, pl: 'rupiecie / graty / tandeta', en: 'junk', note: '-' },
        { group: 1, pl: 'ćwierć / jedna czwarta', en: 'quartet', note: 'quartet<u>s</u>' },
        { group: 1, pl: 'gruszka', en: 'pear', note: 'pear<u>s</u>' },
        { group: 1, pl: 'życzenie', en: 'wish', note: 'wish<u>es</u>' },
        { group: 1, pl: 'cebula', en: 'onion', note: 'onion<u>s</u>' },
        { group: 1, pl: 'sałata', en: 'lettuce', note: 'lettuce<u>s</u>' },
        { group: 1, pl: 'żonkil', en: 'daffodil', note: 'daffodil<u>s</u>' },
        { group: 1, pl: 'rzodkiewka', en: 'radish', note: 'radish<u>es</u>' },
        { group: 1, pl: 'sezon wiosenny', en: 'springtime', note: 'springtime<u>s</u>' },
        { group: 1, pl: 'źródło', en: 'source', note: 'source<u>s</u>' },
        { group: 1, pl: 'kapusta', en: 'cabbage', note: 'cabbage<u>s</u>' },
        { group: 1, pl: 'czosnek', en: 'garlic', note: 'garlic<u>s</u>' },
        { group: 1, pl: 'kukurydza', en: 'sweetcorn', note: 'sweetcorn<u>s</u>' },
        { group: 1, pl: 'ogórek', en: 'cucumber', note: 'cucumber<u>s</u>' },
        { group: 1, pl: 'winogrono', en: 'grape', note: 'grape<u>s</u>' },
        { group: 1, pl: 'różdżka', en: 'wand', note: 'wand<u>s</u>' },
        { group: 1, pl: 'doświadczenie', en: 'experience', note: 'experience<u>s</u>' },
        { group: 1, pl: 'babeczka', en: 'biscuit', note: 'biscuit<u>s</u>' },
        { group: 1, pl: 'strój / ubiór', en: 'attire', note: 'attire<u>s</u>' },
        { group: 1, pl: 'wieczór', en: 'evening', note: 'evening<u>s</u>' },
        { group: 1, pl: 'wątpliwość', en: 'doubt', note: 'doubt<u>s</u>' },
        { group: 1, pl: 'zdanie', en: 'sentence', note: 'sentence<u>s</u>' },
        { group: 1, pl: 'pędzel (do malowaia)', en: 'brush', note: 'brush<u>es</u>' },
        { group: 1, pl: 'kubeł na śmieci', en: 'dustbin', note: 'dustbin<u>s</u>' },
        { group: 1, pl: 'przymiotnik', en: 'adjective', note: 'adjactive<u>s</u>' },
        { group: 1, pl: 'gość', en: 'guest', note: 'guest<u>s</u>' },
        { group: 1, pl: 'referencje', en: 'references', note: '-' },
        { group: 1, pl: 'pora roku', en: 'season', note: 'season<u>s</u>' },
        { group: 1, pl: 'walizka', en: 'suitcase', note: 'suitcase<u>s</u>' },
        { group: 1, pl: 'pogoda', en: 'weather', note: '-' },
        { group: 1, pl: 'ochota / chęć / pragnienie', en: 'desire', note: 'desire<u>s</u>' },
        { group: 1, pl: 'kwestia / sprawa / zagadnienie', en: 'issue', note: 'issue<u>s</u>' },
        { group: 1, pl: 'trener', en: 'coach', note: 'coach<u>es</u>' },
        { group: 1, pl: 'błąd', en: 'bug', note: 'bug<u>s</u>' },
        { group: 1, pl: 'wizualizacje / materiał ilustracyjny', en: 'visuals', note: '-' },
        { group: 1, pl: 'żart / dowcip', en: 'joke', note: 'joke<u>s</u>' },
        { group: 1, pl: 'nowicjusz / żółtociób', en: 'newbie', note: 'newbie<u>s</u>' },
        { group: 1, pl: 'adapacja / eranizacja', en: 'adaptation', note: 'adaptation<u>s</u>' },
        { group: 1, pl: 'dupek / palant / jełop', en: 'noob', note: 'noob<u>s</u>' },
        { group: 1, pl: 'strych / poddasze', en: 'attic', note: 'attic<u>s</u>' },
        { group: 1, pl: 'schodek / stopień', en: 'step', note: 'step<u>s</u>' },
        { group: 1, pl: 'rodzaj', en: 'kind', note: 'kind<u>s</u>' },
        { group: 1, pl: 'śpiewak / piosenkarz', en: 'singer', note: 'singer<u>s</u>' },
        { group: 1, pl: 'zainteresowania', en: 'interests', note: '-' },
        { group: 1, pl: 'słabe strony / wada / słabość', en: 'weakness', note: 'weakness<u>es</u>' },
        { group: 1, pl: 'przykład', en: 'example', note: 'example<u>s</u>' },
        { group: 1, pl: 'kolejność', en: 'order', note: 'order<u>s</u>' },
        { group: 1, pl: 'pracownik', en: 'emploee', note: 'emploee<u>s</u>' },
        { group: 1, pl: 'umiejętności', en: 'skill', note: '-' },
        { group: 1, pl: 'komentarz / uwaga', en: 'comment', note: 'comment<u>s</u>' },
        { group: 1, pl: 'hałas / szum', en: 'noise', note: 'noise<u>s</u>' },
        { group: 1, pl: 'rytm', en: 'rhythm', note: 'rhythm<u>s</u>' },
        { group: 1, pl: 'piosenka', en: 'song', note: 'song<u>s</u>' },
        { group: 1, pl: 'wiolonczela', en: 'cello', note: 'cello<u>s</u>' },
        { group: 1, pl: 'perkusja', en: 'drums', note: '-' },
        { group: 1, pl: 'trąbka', en: 'trumpet', note: 'trumpet<u>s</u>' },
        { group: 1, pl: 'skrzypce', en: 'violin', note: 'violin<u>s</u>' },
        { group: 1, pl: 'mnóstwo /  dużo / wiele', en: 'a lot', note: '-' },
        { group: 1, pl: 'szczęście / radość', en: 'happiness', note: '-' },
        { group: 1, pl: 'nadzieja', en: 'hope', note: 'hope<u>s</u>' },
        { group: 1, pl: 'smutek', en: 'sadness', note: '-' },
        { group: 1, pl: 'złość / gniew', en: 'anger', note: '-' },
        { group: 1, pl: 'rozwód', en: 'divorce', note: 'divorce<u>s</u>' },
        { group: 1, pl: 'tolerancja', en: 'tolerance', note: 'tolerance<u>s</u>' },
        { group: 1, pl: 'duma', en: 'pride', note: '-' },
        { group: 1, pl: 'myśl', en: 'thought', note: '-' },
        { group: 1, pl: 'odpowiedź', en: 'answer', note: 'answer<u>s</u>' },
        { group: 1, pl: 'pogawędka', en: 'chat', note: 'chat<u>s</u>' },
        { group: 1, pl: 'konwersacja / rozmowa', en: 'conversation', note: 'conversation<u>s</u>' },
        { group: 1, pl: 'pytanie / zapytanie', en: 'question', note: 'question<u>s</u>' },
        { group: 1, pl: 'odkurzacz', en: 'vacuum cleaner', note: 'vacuum cleaner<u>s</u>' },
        { group: 1, pl: 'śmieci / odpady', en: 'rubbish', note: '-' },
        { group: 1, pl: 'obowiązek (nieprzyjemna praca)', en: 'chore', note: 'chore<u>s</u>' },
        { group: 1, pl: 'miotła', en: 'broom', note: 'broom<u>s</u>' },
        { group: 1, pl: 'zmywarka do naczyń / zmywarka', en: 'dishwasher', note: 'dishwasher<u>s</u>' },
        { group: 1, pl: 'piekarnik / piec', en: 'oven', note: 'oven<u>s</u>' },
        { group: 1, pl: 'chwyt / uścik', en: 'grip', note: 'grip<u>s</u>' },
        { group: 1, pl: 'miazga', en: 'pulp', note: 'pulp<u>s</u>' },
        { group: 1, pl: 'mól książkowy', en: 'bookworm', note: 'bookworm<u>s</u>' },
        { group: 1, pl: 'wiersz (rząd )', en: 'row', note: 'row<u>s</u>' },
        { group: 1, pl: 'wykształcenie', en: 'education', note: 'education<u>s</u>' },
        { group: 1, pl: 'kąpiel', en: 'bath', note: 'bath<u>s</u>' },
        { group: 1, pl: 'kawał / kloc', en: 'chunk', note: 'chunk<u>s</u>' },
        { group: 1, pl: 'personel / kadra / pracownicy', en: 'staff', note: 'staff<u>s</u>' },
        { group: 1, pl: 'widownia / publiczność / audytorium', en: 'audience', note: 'audience<u>s</u>' },
        { group: 1.1, pl: 'stopa (jedna)', en: 'foot', note: 'feet' },
        { group: 1.1, pl: 'koszary', en: 'barracks', note: 'barracks' },
        { group: 1, pl: 'kaloryfer', en: 'radiator', note: 'radiator<u>s</u>' },
        { group: 1, pl: 'załoga (np. na statku, w samolocie)', en: 'crew', note: 'crew<u>s</u>' },
        { group: 1, pl: 'porcelana (masa ceramiczna)', en: 'china', note: 'china<u>s</u>' },
        { group: 1, pl: 'dach', en: 'roof', note: 'roof<u>s</u>' },
        { group: 1, pl: 'sufit', en: 'ceiling', note: 'ceiling<u>s</u>' },
        { group: 1, pl: 'ściana', en: 'wall', note: 'wall<u>s</u>' },
        { group: 1, pl: 'łąka', en: 'meadow', note: 'meadow<u>s</u>' },
        { group: 1, pl: 'jedwab', en: 'silk', note: 'silk<u>s</u>' },
        { group: 1, pl: 'podłoga / posadzka', en: 'floor', note: 'floor<u>s</u>' },
        { group: 1.1, pl: 'seria (np. wydarzeń)', en: 'series', note: 'series' },
        { group: 1.1, pl: 'gatunek', en: 'species', note: 'species' },
        { group: 1, pl: 'pokój', en: 'room', note: 'room<u>s</u>' },
        { group: 1, pl: 'toaleta', en: 'toilet', note: 'toilet<u>s</u>' },
        { group: 1, pl: 'lustro', en: 'mirror', note: 'mirror<u>s</u>' },
        { group: 1, pl: 'umywalka / zlew łazienkowy', en: 'washbasin', note: 'washbasin<u>s</u>' },
        { group: 1, pl: 'prysznic', en: 'shower', note: 'shower<u>s</u>' },
        { group: 1, pl: 'wanna', en: 'bath', note: 'bath<u>s</u>' },
        { group: 1, pl: 'waga', en: 'scales', note: '-' },
        { group: 1, pl: 'suszarka', en: 'dryer', note: 'dryer<u>s</u>' },
        { group: 1, pl: 'obrona', en: 'defence', note: 'defence<u>s</u>' },
        { group: 1, pl: 'przeszłość', en: 'past', note: 'past<u>s</u>' },
        { group: 1, pl: 'kuchenka', en: 'cooker', note: 'cooker<u>s</u>' },
        { group: 1, pl: 'mąka', en: 'flour', note: 'flour<u>s</u>' },
        { group: 1, pl: 'zapach', en: 'smell', note: 'smell<u>s</u>' },
        { group: 1, pl: 'kiełbasa', en: 'sausage', note: 'sausage<u>s</u>' },
        { group: 1, pl: 'dżem', en: 'jam', note: 'jam<u>s</u>' },
        { group: 1, pl: 'musztarda', en: 'mustard', note: 'mustard<u>s</u>' },
        { group: 1, pl: 'jogurt', en: 'yogurt', note: 'yogurt<u>s</u>' },
        { group: 1, pl: 'masło', en: 'butter', note: 'butter<u>s</u>' },
        { group: 1, pl: 'śmietana', en: 'cream', note: 'cream<u>s</u>' },
        { group: 1, pl: 'szynka', en: 'ham', note: 'ham<u>s</u>' },
        { group: 1, pl: 'makaron', en: 'pasta', note: 'pasta<u>s</u>' },
        { group: 1, pl: 'płatki śniadaniowe', en: 'cereal', note: 'cereal<u>s</u>' },
        { group: 1, pl: 'sól', en: 'salt', note: '-' },
        { group: 1, pl: 'ryż', en: 'rice', note: '-' },
        { group: 1, pl: 'ganek / przedsionek', en: 'porch', note: 'porch<u>es</u>' },
        { group: 1, pl: 'pęk / bukiet / pączek / wiązka', en: 'bunch', note: 'bunch<u>es</u>' },
        { group: 1.1, pl: 'kobieta', en: 'woman', note: 'women' },
        { group: 1.1, pl: 'męszczyzna', en: 'man', note: 'men' },
        { group: 1.1, pl: 'gęś', en: 'goose', note: 'geese' },
        { group: 1.1, pl: 'ząb', en: 'tooth', note: 'teeth' },
        { group: 1.1, pl: 'dziecko', en: 'child', note: 'children' },
        { group: 1.1, pl: 'mysz', en: 'mouse', note: 'mice' },
        { group: 1.1, pl: 'wół', en: 'ox', note: 'oxen' },
        { group: 1.1, pl: 'osoba', en: 'person', note: 'people' },
        { group: 1.1, pl: 'połowa', en: 'half', note: 'halves' },
        { group: 1.1, pl: 'liść', en: 'leaf', note: 'leaves' },
        { group: 1.1, pl: 'życie', en: 'life', note: 'lives' },
        { group: 1.1, pl: 'półka', en: 'shelf', note: 'shelves' },
        { group: 1.1, pl: 'owca', en: 'sheep', note: 'sheep' },
        { group: 1.1, pl: 'bochenek', en: 'loaf', note: 'loaves' },
        { group: 1.1, pl: 'żona', en: 'wife', note: 'wives' },
        { group: 1.1, pl: 'wilk', en: 'wolf', note: 'wolves' },
        { group: 1.1, pl: 'jeleń', en: 'deer', note: 'deer' },
        { group: 1.1, pl: 'ryba', en: 'fish', note: 'fish' },
        { group: 1, pl: 'świnka morska / kawia domowa', en: 'guinea pig', note: 'guinea pig<u>s</u>' },
        { group: 1, pl: 'chomik', en: 'hamster', note: 'hamster<u>s</u>' },
        { group: 1, pl: 'królik', en: 'rabbit', note: 'rabbit<u>s</u>' },
        { group: 1, pl: 'kanarek', en: 'canary', note: 'canary<u>s</u>' },
        { group: 1, pl: 'złota rybka', en: 'goldfish', note: 'goldfish<u>es</u>' },
        { group: 1, pl: 'koń', en: 'horse', note: 'horse<u>s</u>' },
        { group: 1, pl: 'papuga', en: 'parrot', note: 'parrot<u>s</u>' },
        { group: 1, pl: 'zwierzątko domowe', en: 'pet', note: 'pet<u>s</u>' },
        { group: 1, pl: 'gitara', en: 'guitar', note: 'guitar<u>s</u>' },
        { group: 1, pl: 'skrzypce', en: 'violin', note: 'violin<u>s</u>' },
        { group: 1, pl: 'zachód słońca', en: 'sunset', note: 'sunset<u>s</u>' },
        { group: 1, pl: 'autobus', en: 'bus', note: 'bus<u>es</u>' },
        { group: 1, pl: 'danie', en: 'dish', note: 'dish<u>es</u>' },
        { group: 1, pl: 'zegarek', en: 'watch', note: 'watch<u>es</u>' },
        { group: 1, pl: 'ziemniak', en: 'potato', note: 'potato<u>es</u>' },
        { group: 1, pl: 'pomidor', en: 'tomato', note: 'tomato<u>es</u>' },
        { group: 1, pl: 'pudełko', en: 'box', note: 'box<u>es</u>' },
        { group: 1, pl: 'osoba lub rzecz psująca zabawę', en: 'buzzkill', note: 'buzzkill<u>s</u>' },
        { group: 1, pl: 'pojemnik na zużyte odpady', en: 'dregdrawer', note: 'dregdrawer<u>s</u>' },
        { group: 1, pl: 'dźwignia / lewarek', en: 'lever', note: 'lever<u>s</u>' },
        { group: 1, pl: 'biblioteczka / regał na książki', en: 'bookcase', note: 'bookcase<u>s</u>' },
        { group: 1, pl: 'pólka na książki', en: 'bookshelf', note: 'bookshelf<u>s</u>' },
        { group: 1, pl: 'zakładka', en: 'bookmark', note: 'bookmark<u>s</u>' },
        { group: 1, pl: 'łazienka', en: 'bathroom', note: 'bathroom<u>s</u>' },
        { group: 1, pl: 'korytarz (w budynku)', en: 'corridor', note: 'corridor<u>s</u>' },
        { group: 1, pl: 'kuchnia', en: 'kitchen', note: 'kitchen<u>s</u>' },
        { group: 1, pl: 'garaż', en: 'garage', note: 'garage<u>s</u>' },
        { group: 1, pl: 'ogród', en: 'garden', note: 'garden<u>s</u>' },
        { group: 1, pl: 'suterena / piwnica', en: 'basement', note: 'basement<u>s</u>' },
        { group: 1, pl: 'schody', en: '-', note: 'stairs' },
        { group: 1, pl: 'odra (choroba)', en: 'measles', note: '-' },
        { group: 1, pl: 'rada', en: 'advice', note: 'advice<u>s</u>' },
        { group: 1, pl: 'przyjaźń', en: 'friendship', note: 'friendship<u>s</u>' },
        { group: 1, pl: 'dziecko', en: 'baby', note: 'bab<u>ies</u>' },
        { group: 1, pl: 'rodzina', en: 'family', note: 'famili<u>ies</u>' },
        { group: 1, pl: 'miasto', en: 'city', note: 'cit<u>ies</u>' },
        { group: 1, pl: 'społeczność', en: 'communiti', note: 'communiti<u>ies</u>' },
        { group: 1, pl: 'dzeiń', en: 'day', note: 'day<u>s</u>' },
        { group: 1, pl: 'chłopiec', en: 'boy', note: 'boy<u>s</u>' },
        { group: 1, pl: 'zabawka', en: 'toy', note: 'toy<u>s</u>' },
        { group: 1.1, pl: 'nóż', en: 'knife', note: 'kni<u>ves</u>' },
        { group: 1.1, pl: 'przyprawa', en: 'seasoning', note: 'seasoning<u>s</u>' },
        { group: 1, pl: 'łowca talentów', en: 'headhunter', note: 'headhunter<u>s</u>' },
        { group: 1, pl: 'proces podejmowania decyzji', en: 'decision-making', note: 'headhunter<u>s</u>' },
        { group: 1, pl: 'predyspozycja / skłonności', en: 'predisposition', note: 'predisposition<u>s</u>' },
        { group: 1, pl: 'optymalizowanie', en: 'optimizing', note: 'optimizing<u>s</u>' },
        { group: 1, pl: 'zrównoważony rzwój', en: 'sustainability', note: 'sustainability<u>s</u>' },
        { group: 1, pl: 'poświęcenie / oddanie', en: 'commitment', note: 'commitment<u>s</u>' },
        { group: 1, pl: 'wyposażenie / sprzęt', en: 'equipment', note: 'equipment<u>s</u>' },
        { group: 1, pl: 'poniedziałek', en: 'monday', note: 'monday<u>s</u>' },
        { group: 1, pl: 'wtorek', en: 'tuesday', note: 'tuesday<u>s</u>' },
        { group: 1, pl: 'środa', en: 'wednesday', note: 'wednesday<u>s</u>' },
        { group: 1, pl: 'czwartek', en: 'thursday', note: 'thursday<u>s</u>' },
        { group: 1, pl: 'piątek', en: 'friday', note: 'friday<u>s</u>' },
        { group: 1, pl: 'sobota', en: 'saturday', note: 'saturday<u>s</u>' },
        { group: 1, pl: 'niedziela', en: 'sunday', note: 'sunday<u>s</u>' },
        { group: 1, pl: 'rozmowa', en: 'talk', note: 'talk<u>s</u>' },
        { group: 1, pl: 'materiał', en: 'material', note: 'material<u>s</u>' },
        { group: 1, pl: 'ból głowy', en: 'headache', note: 'headache<u>s</u>' },
        { group: 1, pl: 'reklama', en: 'advertisement', note: 'advertisement<u>s</u>' },
        { group: 1, pl: 'własność / mienie', en: 'property', note: 'property<u>s</u>' },
        { group: 1, pl: 'właściwości', en: 'properties', note: '' },
        { group: 1, pl: 'niezmiennoś / stałość / nieodwołalność', en: 'immutability', note: '' },
        { group: 1, pl: 'gałąź', en: 'branch', note: 'branch<u>es</u>' },
        { group: 1, pl: 'młynek', en: 'grinder', note: 'grinder<u>s</u>' },
        { group: 1, pl: 'zwierzę', en: 'animal', note: 'animal<u>s</u>' },
        { group: 1, pl: 'małpa', en: 'monkey', note: 'monkey<u>s</u>' },
        { group: 1, pl: 'tygrys', en: 'tiger', note: 'tiger<u>s</u>' },
        { group: 1, pl: 'lew', en: 'lion', note: 'lion<u>s</u>' },
        { group: 1, pl: 'wielbłąd', en: 'camel', note: 'camel<u>s</u>' },
        { group: 1, pl: 'słoń', en: 'elephant', note: 'elephant<u>s</u>' },
        { group: 1, pl: 'hipopotam', en: 'hippopotamus', note: 'hippopotamu<u>es</u>' },
        { group: 1, pl: 'zebra', en: 'zebra', note: 'zebra<u>s</u>' },
        { group: 1, pl: 'żyrafa', en: 'giraffe', note: 'giraf<u>ves</u>' },
        { group: 1, pl: 'kangur', en: 'kangaroo', note: 'kangaroo<u>s</u>' },
        { group: 1, pl: 'krokodyl', en: 'crocodile', note: 'crocodile<u>s</u>' },
        { group: 1, pl: 'kwiat', en: 'flower', note: 'flower<u>s</u>' },
        { group: 1, pl: 'róża', en: 'rose', note: 'rose<u>s</u>' },
        { group: 1, pl: 'tulipan', en: 'tulip', note: 'tulip<u>s</u>' },
        { group: 1, pl: 'trawa', en: 'grass', note: 'grass<u>es</u>' },
        { group: 1, pl: 'grzyb', en: 'mushroom', note: 'mushroom<u>s</u>' },
        { group: 1, pl: 'krzak / krzew', en: 'bush', note: 'bush<u>es</u>' },
        { group: 1, pl: 'drzewo', en: 'tree', note: 'tree<u>s</u>' },
        { group: 1, pl: 'tulipan', en: 'tulip', note: 'tulip<u>s</u>' },
        { group: 1, pl: 'trawa', en: 'grass', note: 'gras<u>es</u>' },
        { group: 1, pl: 'aktor', en: 'actor', note: 'actors<u>es</u>' },
        { group: 1, pl: 'aktorka', en: 'actress', note: 'actorss<u>es</u>' },
        { group: 1, pl: 'nauczyciel', en: 'teacher', note: 'teacher<u>s</u>' },
        { group: 1, pl: 'dentysta', en: 'dentist', note: 'dentist<u>s</u>' },
        { group: 1, pl: 'pielęgniarka / pielęgniarz', en: 'nurse', note: 'nurse<u>s</u>' },
        { group: 1, pl: 'policjant', en: 'policeman', note: 'policeman<u>s</u>' },
        { group: 1, pl: 'sekretarka', en: 'secretary', note: 'secretar<u>ies</u>' },
        { group: 1, pl: 'listonosz', en: 'postman', note: 'postman<u>ies</u>' },
        { group: 1, pl: 'kelner', en: 'waiter', note: 'waiter<u>s</u>' },
        { group: 1, pl: 'kelnerka', en: 'waitress', note: 'waitress<u>es</u>' },
        { group: 1, pl: 'ilość / stan / wielkość', en: 'quantity', note: 'quantit<u>s</u>' },
        { group: 1, pl: 'usta', en: 'mouth', note: 'mouth<u>s</u>' },
        { group: 1, pl: 'zmiana', en: 'change', note: 'change<u>s</u>' },
        { group: 1, pl: 'absolwent (uniwersytetu)', en: 'graduate', note: 'graduate<u>s</u>' },
        { group: 1, pl: 'współpracownik', en: 'coworker', note: 'coworker<u>s</u>' },
        { group: 1, pl: 'bramka / wyjście (np.: lotnisku)', en: 'gate', note: 'gate<u>s</u>' },
        { group: 1, pl: 'wybór', en: 'choice', note: '' },
        { group: 1, pl: 'zaufanie', en: 'trust', note: '' },
        { group: 1, pl: 'wstążka', en: 'ribbon', note: '' },
        { group: 1, pl: 'lato', en: 'sumer', note: '' },
        { group: 1, pl: 'spotkanie', en: 'meeting', note: 'meeting<u>s</u>' },
        { group: 1, pl: 'morze', en: 'sea', note: 'sea<u>s</u>' },
        { group: 1, pl: 'dzwon / dzwonek', en: 'bell', note: 'bell<u>s</u>' },
        { group: 1, pl: 'aktywność / działanie', en: 'activity', note: 'activit<u>ies</u>' },
        { group: 1, pl: 'torebka / torba', en: 'bag', note: 'bag<u>s</u>' },
        { group: 1, pl: 'opinia / zdanie / pogląd', en: 'opinion', note: 'opinion<u>s</u>' },
        { group: 1, pl: 'żartownie / strojenie sobie żartów', en: 'kidding', note: ' ' },
        { group: 1, pl: 'smak', en: 'taste', note: 'taste<u>s</u>' },
        { group: 2.7, pl: 'Poniedziałek', en: 'Mondy', note: 'Monday<u>s</u>' },
        { group: 2.6, pl: 'Wtorek', en: 'Tuesday', note: 'Tuesday<u>s</u>' },
        { group: 2.5, pl: 'Środa', en: 'Wednesday', note: 'Wednesday<u>s</u>' },
        { group: 2.4, pl: 'Czwartek', en: 'Thursday', note: 'Thursday<u>s</u>' },
        { group: 2.3, pl: 'Piątek', en: 'Friday', note: 'Friday<u>s</u>' },
        { group: 2.2, pl: 'Sobota', en: 'Saturday', note: 'Saturday<u>s</u>' },
        { group: 2.1, pl: 'Niedziela', en: 'Sunday', note: 'Sunday<u>s</u>' },
        { group: 3.4, pl: 'Zima', en: 'winter', note: 'winter<u>s</u>' },
        { group: 3.3, pl: 'Wiosna', en: 'spring', note: 'spring<u>s</u>' },
        { group: 3.4, pl: 'Lato', en: 'summer', note: 'summer<u>s</u>' },
        { group: 3.4, pl: 'Jesień', en: 'autumn', note: 'autumn<u>s</u>' },
        { group: 1, pl: 'współlkator / współlokatorka', en: 'housemate', note: 'autumn<u>s</u>' },
        { group: 1, pl: 'banknot', en: 'banknote', note: 'banknote<u>s</u>' },
        { group: 1, pl: 'pazur / szpon', en: 'claw', note: 'claw<u>s</u>' },
        { group: 1, pl: 'smycz', en: 'lead', note: 'lead<u>s</u>' },
        { group: 1, pl: 'półka na książki', en: 'bookshelf', note: 'bookshel<u>ves</u>' },
        { group: 1, pl: 'cytryna', en: 'lemon', note: 'lemon<u>s</u>' },
        { group: 1, pl: 'światło', en: 'light', note: 'light<u>s</u>' },
        { group: 1, pl: 'sprawa / kwestia / rzecz (do załawienia)', en: 'thing', note: 'thing<u>s</u>' },
        { group: 1, pl: 'miska', en: 'bowl', note: 'bowl<u>s</u>' },
        { group: 1, pl: 'talerz', en: 'plate', note: 'plate<u>s</u>' },
        { group: 1, pl: 'szklanka', en: 'glass', note: 'glass<u>es</u>' },
        { group: 1, pl: 'drabina', en: 'ladder', note: 'ladder<u>es</u>' },
        { group: 1, pl: 'łyżka / łyżeczka', en: 'spoon', note: 'spoon<u>s</u>' },
        { group: 1, pl: 'widelec', en: 'fork', note: 'fork<u>s</u>' },
        { group: 1, pl: 'filiżanka', en: 'teacup', note: 'teacup<u>s</u>' },
        { group: 1, pl: 'serwetka', en: 'napkin', note: 'napkin<u>s</u>' },
        { group: 1, pl: 'kubek', en: 'mug', note: 'mug<u>s</u>' },
    ],
];

export default nounsList;
