'use strict';
const nounsList = [
  [{
    h1: 'Rzeczowniki',
    table: {
      note1: 'ANGIELSKI',
      note2: 'L. M.',
    },
    note: {
      p1: 'Aby utworzyć liczbę mnogą do słowa dodajemny końcówkę -s',
      p2: 'Jednak kiedy słowo kończy się...',
      p3: 'na: -s, -sh, -ch, -o, -x dodajemy -es',
      p4: 'spółgłoską, po której stoi -y wtedy y zamieniamy na i następnie dodajemy -es (-ies)',
      p5: 'samogłoską, po której stoi -y wtedy dodajemy -s',
      p6: 'na: -f, -fe wtedy zastępujemy te końcówki na -ves',
    },
  }, ],
  [
    { irregular: false, pl: 'inwestycja', en: 'investment', note: 'investment<u>s</u>' },
    { irregular: false, pl: 'butelka', en: 'bottle', note: 'bottle<u>s</u>' },
    { irregular: false, pl: 'kawałek', en: 'piece', note: 'piece<u>s</u>' },
    { irregular: false, pl: 'filiżanka', en: 'cup', note: 'cup<u>s</u>' },
    { irregular: false, pl: 'łyżka', en: 'spoon', note: 'spoon<u>s</u>' },
    { irregular: false, pl: 'klucz', en: 'spoon', note: 'key<u>s</u>' },
    { irregular: false, pl: 'portfel', en: 'wallet', note: 'wallet<u>s</u>' },
    { irregular: false, pl: 'karta debetowa', en: 'debit card', note: 'debit card<u>s</u>' },
    { irregular: false, pl: 'powietrze', en: 'air', note: '-' },
    { irregular: false, pl: 'okulary', en: 'glasses', note: '-' },
    { irregular: false, pl: 'okulary słoneczne', en: 'sunglasses', note: '-' },
    { irregular: false, pl: 'pierścionek / pierścień', en: 'ring', note: 'ring<u>s</u>' },
    { irregular: false, pl: 'kalendarz', en: 'calendar', note: 'calendar<u>s</u>' },
    { irregular: false, pl: 'współzałożyciel', en: 'co-founder', note: 'co-founder<u>s</u>' },
    { irregular: false, pl: 'założyciel', en: 'founder', note: 'founder<u>s</u>' },
    { irregular: false, pl: 'poza domem / na dworze', en: 'outdoors', note: '' },
    { irregular: false, pl: 'ołówek', en: 'pencil', note: 'pencil<u>s</u>' },
    { irregular: false, pl: 'gumka do ścierania', en: 'rubber', note: 'rubber<u>s</u>' },
    { irregular: false, pl: 'linijka', en: 'ruler', note: 'ruler<u>s</u>' },
    { irregular: false, pl: 'książka', en: 'book', note: 'book<u>s</u>' },
    { irregular: false, pl: 'nożyczki', en: 'scissors', note: '-' },
    { irregular: false, pl: 'podręcznik', en: 'textbook', note: 'textbook<u>s</u>' },
    { irregular: false, pl: 'pensja', en: 'salary', note: 'salar<u>ies</u>' },
    { irregular: false, pl: 'czek', en: 'cheque', note: 'cheque<u>s</u>' },
    { irregular: false, pl: 'kosz', en: 'bin', note: 'bin<u>s</u>' },
    { irregular: false, pl: 'składawonie / magazynowanie', en: 'storage', note: 'storage<u>s</u>' },
    { irregular: false, pl: 'tlen', en: 'oxygen', note: '-' },
    { irregular: false, pl: 'poryw wiatru', en: 'gust', note: 'gust<u>s</u>' },
    { irregular: false, pl: 'samochód', en: 'car', note: 'car<u>s</u>' },
    { irregular: false, pl: 'zdjęcie', en: 'photo', note: 'photo<u>s</u>' },
    { irregular: false, pl: 'pianino', en: 'piano', note: 'piano<u>s</u>' },
    { irregular: false, pl: 'rzecz', en: 'thing', note: 'thing<u>s</u>' },
    { irregular: false, pl: 'godzinówka', en: 'wage', note: 'wages<u>s</u>' },
    { irregular: false, pl: 'obserwujący', en: 'follower', note: 'follower<u>s</u>' },
    { irregular: false, pl: 'jezioro', en: 'lake', note: 'lakes<u>s</u>' },
    { irregular: false, pl: 'warzywa / jarzyna', en: 'vegetable', note: 'vegetable<u>s</u>' },
    { irregular: false, pl: 'kolega z pracy', en: 'colleague', note: 'colleague<u>s</u>' },
    { irregular: false, pl: 'instrukcja', en: 'instruction', note: 'instruction<u>s</u>' },
    { irregular: false, pl: 'półrocze', en: 'half-year', note: 'half-year<u>s</u>' },
    { irregular: false, pl: 'wykładzina dywanowa / dywan', en: 'carpet', note: 'carpet<u>s</u>' },
    { irregular: false, pl: 'meble', en: 'furniture', note: '-' },
    { irregular: false, pl: 'krzesło', en: 'chair', note: 'chaitr<u>s</u>' },
    { irregular: false, pl: 'koc', en: 'blanket', note: 'blanket<u>s</u>' },
    { irregular: false, pl: 'sen', en: 'dream', note: 'dream<u>s</u>' },
    { irregular: false, pl: 'podpis / tytuł (np.: pod obrazkiem)', en: 'caption', note: 'caption<u>s</u>' },
    { irregular: false, pl: 'wyrzucać / pozbywać się', en: 'discard', note: 'discard<u>s</u>' },
    { irregular: false, pl: 'biblioteka (budynek)', en: 'library', note: 'librar<u>ies</u>' },
    { irregular: false, pl: 'płaszcz / kurtka', en: 'coat', note: 'coat<u>s</u>' },
    { irregular: false, pl: 'wzór / deseń', en: 'pattern', note: 'pattern<u>s</u>' },
    { irregular: false, pl: 'poduszka', en: 'pillow', note: 'pillow<u>s</u>' },
    { irregular: false, pl: 'dom', en: 'house', note: 'house<u>s</u>' },
    { irregular: false, pl: 'gotowanie', en: 'cooking', note: '-' },
    { irregular: false, pl: 'bałagan', en: 'mess', note: '-' },
    { irregular: false, pl: 'córka', en: 'daughter', note: 'dauhter<u>s</u>' },
    { irregular: false, pl: 'wujek', en: 'uncle', note: 'uncle<u>s</u>' },
    { irregular: false, pl: 'dochód', en: 'income', note: 'income<u>s</u>' },
    { irregular: false, pl: 'lodówka', en: 'fridge', note: 'fridge<u>s</u>' },
    { irregular: false, pl: 'tekst piosenki', en: 'lyrics', note: '-' },
    { irregular: false, pl: 'kuzyn / kuzynka', en: 'cousin', note: 'cousin<u>s</u>' },
    { irregular: false, pl: 'brat / siostra', en: 'sibling', note: 'sibling<u>s</u>' },
    { irregular: false, pl: 'litera', en: 'letter', note: 'letter<u>s</u>' },
    { irregular: false, pl: 'kokarda / kokardka', en: 'bow', note: 'bow<u>s</u>' },
    { irregular: false, pl: 'pomyłka  / błąd', en: 'mistake', note: 'mistake<u>s</u>' },
    { irregular: false, pl: 'dziadek', en: 'grandpa', note: 'grandpas<u>s</u>' },
    { irregular: false, pl: 'babcia', en: 'granmother', note: 'grandmonther<u>s</u>' },
    { irregular: false, pl: 'ciocia', en: 'aunt', note: 'aunt<u>s</u>' },
    { irregular: false, pl: 'rupiecie / graty / tandeta', en: 'junk', note: '-' },
    { irregular: false, pl: 'ćwierć / jedna czwarta', en: 'quartet', note: 'quartet<u>s</u>' },
    { irregular: false, pl: 'gruszka', en: 'pear', note: 'pear<u>s</u>' },
    { irregular: false, pl: 'życzenie', en: 'wish', note: 'wish<u>s</u>' },
    { irregular: false, pl: 'cebula', en: 'onion', note: 'onion<u>s</u>' },
    { irregular: false, pl: 'sałata', en: 'lettuce', note: 'lettuce<u>s</u>' },
    { irregular: false, pl: 'żonkil', en: 'daffodil', note: 'daffodil<u>s</u>' },
    { irregular: false, pl: 'rzodkiewka', en: 'radish', note: 'radish<u>s</u>' },
    { irregular: false, pl: 'sezon wiosenny', en: 'springtime', note: 'springtime<u>s</u>' },
    { irregular: false, pl: 'źródło', en: 'source', note: 'source<u>s</u>' },
    { irregular: false, pl: 'kapusta', en: 'cabbage', note: 'cabbage<u>s</u>' },
    { irregular: false, pl: 'czosnek', en: 'garlic', note: 'garlic<u>s</u>' },
    { irregular: false, pl: 'kukurydza', en: 'sweetcorn', note: 'sweetcorn<u>s</u>' },
    { irregular: false, pl: 'ogórek', en: 'cucumber', note: 'cucumber<u>s</u>' },
    { irregular: false, pl: 'winogrono', en: 'grape', note: 'grape<u>s</u>' },
    { irregular: false, pl: 'różdżka', en: 'wand', note: 'wand<u>s</u>' },
    { irregular: false, pl: 'doświadczenie', en: 'experience', note: 'experience<u>s</u>' },
    { irregular: false, pl: 'babeczka', en: 'biscuit', note: 'biscuit<u>s</u>' },
    { irregular: false, pl: 'strój / ubiór', en: 'attire', note: 'attire<u>s</u>' },
    { irregular: false, pl: 'wieczór', en: 'evening', note: 'evening<u>s</u>' },
    { irregular: false, pl: 'wątpliwość', en: 'doubt', note: 'doubt<u>s</u>' },
    { irregular: false, pl: 'zdanie', en: 'sentence', note: 'sentence<u>s</u>' },
    { irregular: false, pl: 'pędzel (do malowaia)', en: 'brush', note: 'brush<u>s</u>' },
    { irregular: false, pl: 'kubeł na śmieci', en: 'dustbin', note: 'dustbin<u>s</u>' },
    { irregular: false, pl: 'przymiotnik', en: 'adjective', note: 'adjactive<u>s</u>' },
    { irregular: false, pl: 'gość', en: 'guest', note: 'guest<u>s</u>' },
    { irregular: false, pl: 'referencje', en: 'references', note: '-' },
    { irregular: false, pl: 'pora roku', en: 'season', note: 'season<u>s</u>' },
    { irregular: false, pl: 'walizka', en: 'suitcase', note: 'suitcase<u>s</u>' },
    { irregular: false, pl: 'pogoda', en: 'weather', note: '-' },
    { irregular: false, pl: 'ochota / chęć / pragnienie', en: 'desire', note: 'desire<u>s</u>' },
    { irregular: false, pl: 'kwestia / sprawa / zagadnienie', en: 'issue', note: 'issue<u>s</u>' },
    { irregular: false, pl: 'trener', en: 'coach', note: 'coach<u>s</u>' },
    { irregular: false, pl: 'błąd', en: 'bug', note: 'bug<u>s</u>' },
    { irregular: false, pl: 'wizualizacje / materiał ilustracyjny', en: 'visuals', note: '-' },
    { irregular: false, pl: 'żart / dowcip', en: 'joke', note: 'joke<u>s</u>' },
    { irregular: false, pl: 'nowicjusz / żółtociób', en: 'newbie', note: 'newbie<u>s</u>' },
    { irregular: false, pl: 'adapacja / eranizacja', en: 'adaptation', note: 'adaptation<u>s</u>' },
    { irregular: false, pl: 'dupek / palant / jełop', en: 'noob', note: 'noob<u>s</u>' },
    { irregular: false, pl: 'strych / poddasze', en: 'attic', note: 'attic<u>s</u>' },
    { irregular: false, pl: 'schodek / stopień', en: 'step', note: 'step<u>s</u>' },
    { irregular: false, pl: 'rodzaj', en: 'kind', note: 'kind<u>s</u>' },
    { irregular: false, pl: 'śpiewak / piosenkarz', en: 'singer', note: 'singer<u>s</u>' },
    { irregular: false, pl: 'zainteresowania', en: 'interests', note: '-' },
    { irregular: false, pl: 'słabe strony / wada / słabość', en: 'weakness', note: 'weakness<u>es</u>' },
    { irregular: false, pl: 'przykład', en: 'example', note: 'example<u>s</u>' },
    { irregular: false, pl: 'kolejność', en: 'order', note: 'order<u>s</u>' },
    { irregular: false, pl: 'pracownik', en: 'emploee', note: 'emploee<u>s</u>' },
    { irregular: false, pl: 'umiejętności', en: 'skill', note: '-' },
    { irregular: false, pl: 'komentarz / uwaga', en: 'comment', note: 'comment<u>s</u>' },
    { irregular: false, pl: 'hałas / szum', en: 'noise', note: 'noise<u>s</u>' },
    { irregular: false, pl: 'rytm', en: 'rhythm', note: 'rhythm<u>s</u>' },
    { irregular: false, pl: 'piosenka', en: 'song', note: 'song<u>s</u>' },
    { irregular: false, pl: 'wiolonczela', en: 'cello', note: 'cello<u>s</u>' },
    { irregular: false, pl: 'perkusja', en: 'drums', note: '-' },
    { irregular: false, pl: 'trąbka', en: 'trumpet', note: 'trumpet<u>s</u>' },
    { irregular: false, pl: 'skrzypce', en: 'violin', note: 'violin<u>s</u>' },
    { irregular: false, pl: 'mnóstwo /  dużo / wiele', en: 'a lot', note: '-' },
    { irregular: false, pl: 'szczęście / radość', en: 'happiness', note: '-' },
    { irregular: false, pl: 'nadzieja', en: 'hope', note: 'hope<u>s</u>' },
    { irregular: false, pl: 'smutek', en: 'sadness', note: '-' },
    { irregular: false, pl: 'złość / gniew', en: 'anger', note: '-' },
    { irregular: false, pl: 'rozwód', en: 'divorce', note: 'divorce<u>s</u>' },
    { irregular: false, pl: 'tolerancja', en: 'tolerance', note: 'tolerance<u>s</u>' },
    { irregular: false, pl: 'duma', en: 'pride', note: '-' },
    { irregular: false, pl: 'myśl', en: 'thought', note: '-' },
    { irregular: false, pl: 'odpowiedź', en: 'answer', note: 'answer<u>s</u>' },
    { irregular: false, pl: 'pogawędka', en: 'chat', note: 'chat<u>s</u>' },
    { irregular: false, pl: 'konwersacja / rozmowa', en: 'conversation', note: 'conversation<u>s</u>' },
    { irregular: false, pl: 'pytanie / zapytanie', en: 'question', note: 'question<u>s</u>' },
    { irregular: false, pl: 'odkurzacz', en: 'vacuum cleaner', note: 'vacuum cleaner<u>s</u>' },
    { irregular: false, pl: 'śmieci / odpady', en: 'rubbish', note: '-' },
    { irregular: false, pl: 'obowiązek (nieprzyjemna praca)', en: 'chore', note: 'chore<u>s</u>' },
    { irregular: false, pl: 'miotła', en: 'broom', note: 'broom<u>s</u>' },
    { irregular: false, pl: 'zmywarka do naczyń / zmywarka', en: 'dishwasher', note: 'dishwasher<u>s</u>' },
    { irregular: false, pl: 'piekarnik / piec', en: 'oven', note: 'oven<u>s</u>' },
    { irregular: false, pl: 'chwyt / uścik', en: 'grip', note: 'grip<u>s</u>' },
    { irregular: false, pl: 'miazga', en: 'pulp', note: 'pulp<u>s</u>' },
    { irregular: false, pl: 'mól książkowy', en: 'bookworm', note: 'bookworm<u>s</u>' },
    { irregular: false, pl: 'wiersz (rząd )', en: 'row', note: 'row<u>s</u>' },
    { irregular: false, pl: 'wykształcenie', en: 'education', note: 'education<u>s</u>' },
    { irregular: false, pl: 'kąpiel', en: 'bath', note: 'bath<u>s</u>' },
    { irregular: false, pl: 'kawał / kloc', en: 'chunk', note: 'chunk<u>s</u>' },
    { irregular: false, pl: 'personel / kadra / pracownicy', en: 'staff', note: 'staff<u>s</u>' },
    { irregular: false, pl: 'widownia / publiczność / audytorium', en: 'audience', note: 'audience<u>s</u>' },
    { irregular: true, pl: 'stopa (jedna)', en: 'foot', note: 'feet' },
    { irregular: true, pl: 'koszary', en: 'barracks', note: 'barracks' },
    { irregular: false, pl: 'kaloryfer', en: 'radiator', note: 'radiator<u>s</u>' },
    { irregular: false, pl: 'załoga (np. na statku, w samolocie)', en: 'crew', note: 'crew<u>s</u>' },
    { irregular: false, pl: 'porcelana (masa ceramiczna)', en: 'china', note: 'china<u>s</u>' },
    { irregular: false, pl: 'dach', en: 'roof', note: 'roof<u>s</u>' },
    { irregular: false, pl: 'sufit', en: 'ceiling', note: 'ceiling<u>s</u>' },
    { irregular: false, pl: 'ściana', en: 'wall', note: 'wall<u>s</u>' },
    { irregular: false, pl: 'łąka', en: 'meadow', note: 'meadow<u>s</u>' },
    { irregular: false, pl: 'jedwab', en: 'silk', note: 'silk<u>s</u>' },
    { irregular: false, pl: 'podłoga / posadzka', en: 'floor', note: 'floor<u>s</u>' },
    { irregular: true, pl: 'seria (np. wydarzeń)', en: 'series', note: 'series' },
    { irregular: true, pl: 'gatunek', en: 'species', note: 'species' },
    { irregular: false, pl: 'pokój', en: 'room', note: 'room<u>s</u>' },
    { irregular: false, pl: 'toaleta', en: 'toilet', note: 'toilet<u>s</u>' },
    { irregular: false, pl: 'lustro', en: 'mirror', note: 'mirror<u>s</u>' },
    { irregular: false, pl: 'umywalka / zlew łazienkowy', en: 'washbasin', note: 'washbasin<u>s</u>' },
    { irregular: false, pl: 'prysznic', en: 'shower', note: 'shower<u>s</u>' },
    { irregular: false, pl: 'wanna', en: 'bath', note: 'bath<u>s</u>' },
    { irregular: false, pl: 'waga', en: 'scales', note: '-' },
    { irregular: false, pl: 'suszarka', en: 'dryer', note: 'dryer<u>s</u>' },
    { irregular: false, pl: 'obrona', en: 'defence', note: 'defence<u>s</u>' },
    { irregular: false, pl: 'przeszłość', en: 'past', note: 'past<u>s</u>' },
    { irregular: false, pl: 'kuchenka', en: 'cooker', note: 'cooker<u>s</u>' },
    { irregular: false, pl: 'mąka', en: 'flour', note: 'flour<u>s</u>' },
    { irregular: false, pl: 'zapach', en: 'smell', note: 'smell<u>s</u>' },
    { irregular: false, pl: 'kiełbasa', en: 'sausage', note: 'sausage<u>s</u>' },
    { irregular: false, pl: 'dżem', en: 'jam', note: 'jam<u>s</u>' },
    { irregular: false, pl: 'musztarda', en: 'mustard', note: 'mustard<u>s</u>' },
    { irregular: false, pl: 'jogurt', en: 'yogurt', note: 'yogurt<u>s</u>' },
    { irregular: false, pl: 'masło', en: 'butter', note: 'butter<u>s</u>' },
    { irregular: false, pl: 'śmietana', en: 'cream', note: 'cream<u>s</u>' },
    { irregular: false, pl: 'szynka', en: 'ham', note: 'ham<u>s</u>' },
    { irregular: false, pl: 'makaron', en: 'pasta', note: 'pasta<u>s</u>' },
    { irregular: false, pl: 'płatki śniadaniowe', en: 'cereal', note: 'cereal<u>s</u>' },
    { irregular: false, pl: 'sól', en: 'salt', note: '-' },
    { irregular: false, pl: 'ryż', en: 'rice', note: '-' },
    { irregular: false, pl: 'ganek / przedsionek', en: 'porch', note: 'porch<u>s</u>' },
    { irregular: false, pl: 'pęk / bukiet / pączek / wiązka', en: 'bunch', note: 'bunch<u>s</u>' },
    { irregular: true, pl: 'kobieta', en: 'woman', note: 'women' },
    { irregular: true, pl: 'męszczyzna', en: 'man', note: 'men' },
    { irregular: true, pl: 'gęś', en: 'goose', note: 'geese' },
    { irregular: true, pl: 'ząb', en: 'tooth', note: 'teeth' },
    { irregular: true, pl: 'dziecko', en: 'child', note: 'children' },
    { irregular: true, pl: 'mysz', en: 'mouse', note: 'mice' },
    { irregular: true, pl: 'wół', en: 'ox', note: 'oxen' },
    { irregular: true, pl: 'osoba', en: 'person', note: 'people' },
    { irregular: true, pl: 'połowa', en: 'half', note: 'halves' },
    { irregular: true, pl: 'liść', en: 'leaf', note: 'leaves' },
    { irregular: true, pl: 'życie', en: 'life', note: 'lives' },
    { irregular: true, pl: 'półka', en: 'shelf', note: 'shelves' },
    { irregular: true, pl: 'owca', en: 'sheep', note: 'sheep' },
    { irregular: true, pl: 'bochenek', en: 'loaf', note: 'loaves' },
    { irregular: true, pl: 'żona', en: 'wife', note: 'wives' },
    { irregular: true, pl: 'wilk', en: 'wolf', note: 'wolves' },
    { irregular: true, pl: 'jeleń', en: 'deer', note: 'deer' },
    { irregular: true, pl: 'ryba', en: 'fish', note: 'fish' },
    { irregular: false, pl: 'świnka morska / kawia domowa', en: 'guinea pig', note: 'guinea pig<u>s</u>' },
    { irregular: false, pl: 'chomik', en: 'hamster', note: 'hamster<u>s</u>' },
    { irregular: false, pl: 'królik', en: 'rabbit', note: 'rabbit<u>s</u>' },
    { irregular: false, pl: 'kanarek', en: 'canary', note: 'canary<u>s</u>' },
    { irregular: false, pl: 'złota rybka', en: 'goldfish', note: 'goldfish<u>s</u>' },
    { irregular: false, pl: 'koń', en: 'horse', note: 'horse<u>s</u>' },
    { irregular: false, pl: 'papuga', en: 'parrot', note: 'parrot<u>s</u>' },
    { irregular: false, pl: 'zwierzątko domowe', en: 'pet', note: 'pet<u>s</u>' },
    { irregular: false, pl: 'gitara', en: 'guitar', note: 'guitar<u>s</u>' },
    { irregular: false, pl: 'skrzypce', en: 'violin', note: 'violin<u>s</u>' },
    { irregular: false, pl: 'zachód słońca', en: 'sunset', note: 'sunset<u>s</u>' },
    { irregular: false, pl: 'autobus', en: 'bus', note: 'bus<u>es</u>' },
    { irregular: false, pl: 'danie', en: 'dish', note: 'dish<u>es</u>' },
    { irregular: false, pl: 'zegarek', en: 'watch', note: 'watch<u>es</u>' },
    { irregular: false, pl: 'ziemniak', en: 'potato', note: 'potato<u>es</u>' },
    { irregular: false, pl: 'pomidor', en: 'tomato', note: 'tomato<u>es</u>' },
    { irregular: false, pl: 'pudełko', en: 'box', note: 'box<u>es</u>' },
    { irregular: false, pl: 'osoba lub rzecz psująca zabawę', en: 'buzzkill', note: 'buzzkill<u>s</u>' },
    { irregular: false, pl: 'pojemnik na zużyte odpady', en: 'dregdrawer', note: 'dregdrawer<u>s</u>' },
    { irregular: false, pl: 'dźwignia / lewarek', en: 'lever', note: 'lever<u>s</u>' },
    { irregular: false, pl: 'biblioteczka / lewarek', en: 'bookcase', note: 'bookcase<u>s</u>' },
    { irregular: false, pl: 'pólka na książki', en: 'bookshelf', note: 'bookshelf<u>s</u>' },
    { irregular: false, pl: 'zakładka', en: 'bookmark', note: 'bookmark<u>s</u>' },
    { irregular: false, pl: 'łazienka', en: 'bathroom', note: 'bathroom<u>s</u>' },
    { irregular: false, pl: 'korytarz (w budynku)', en: 'corridor', note: 'corridor<u>s</u>' },
    { irregular: false, pl: 'kuchnia', en: 'kitchen', note: 'kitchen<u>s</u>' },
    { irregular: false, pl: 'garaż', en: 'garage', note: 'garage<u>s</u>' },
    { irregular: false, pl: 'ogród', en: 'garden', note: 'garden<u>s</u>' },
    { irregular: false, pl: 'suterena / piwnica', en: 'basement', note: 'basement<u>s</u>' },
    { irregular: false, pl: 'schody', en: '-', note: 'stairs' },
    { irregular: false, pl: 'odra (choroba)', en: 'measles', note: '-' },
    { irregular: false, pl: 'rada', en: 'advice', note: 'advice<u>s</u>' },
    { irregular: false, pl: 'przyjaźń', en: 'friendship', note: 'friendship<u>s</u>' },
    { irregular: false, pl: 'dziecko', en: 'baby', note: 'bab<u>ies</u>' },
    { irregular: false, pl: 'rodzina', en: 'family', note: 'famili<u>ies</u>' },
    { irregular: false, pl: 'miasto', en: 'city', note: 'cit<u>ies</u>' },
    { irregular: false, pl: 'społeczność', en: 'communiti', note: 'communiti<u>ies</u>' },
    { irregular: false, pl: 'dzeiń', en: 'day', note: 'day<u>s</u>' },
    { irregular: false, pl: 'chłopiec', en: 'boy', note: 'boy<u>s</u>' },
    { irregular: false, pl: 'zabawka', en: 'toy', note: 'toy<u>s</u>' },
    { irregular: true, pl: 'nóż', en: 'knife', note: 'kni<u>ves</u>' },
    { irregular: true, pl: 'przyprawa', en: 'seasoning', note: 'seasoning<u>s</u>' },
    { irregular: false, pl: 'łowca talentów', en: 'headhunter', note: 'headhunter<u>s</u>' },
    { irregular: false, pl: 'proces podejmowania decyzji', en: 'decision-making', note: 'headhunter<u>s</u>' },
    { irregular: false, pl: 'predyspozycja / skłonności', en: 'predisposition', note: 'predisposition<u>s</u>' },
    { irregular: false, pl: 'optymalizowanie', en: 'optimizing', note: 'optimizing<u>s</u>' },
    { irregular: false, pl: 'zrównoważony rzwój', en: 'sustainability', note: 'sustainability<u>s</u>' },
    { irregular: false, pl: 'poświęcenie / oddanie', en: 'commitment', note: 'commitment<u>s</u>' },
    { irregular: false, pl: 'wyposażenie / sprzęt', en: 'equipment', note: 'equipment<u>s</u>' },
    { irregular: false, pl: 'poniedziałek', en: 'monday', note: 'monday<u>s</u>' },
    { irregular: false, pl: 'wtorek', en: 'tuesday', note: 'tuesday<u>s</u>' },
    { irregular: false, pl: 'środa', en: 'wednesday', note: 'wednesday<u>s</u>' },
    { irregular: false, pl: 'czwartek', en: 'thursday', note: 'thursday<u>s</u>' },
    { irregular: false, pl: 'piątek', en: 'friday', note: 'friday<u>s</u>' },
    { irregular: false, pl: 'sobota', en: 'saturday', note: 'saturday<u>s</u>' },
    { irregular: false, pl: 'niedziela', en: 'sunday', note: 'sunday<u>s</u>' },
    { irregular: false, pl: 'rozmowa', en: 'talk', note: 'talk<u>s</u>' },
    { irregular: false, pl: 'materiał', en: 'material', note: 'material<u>s</u>' },
    { irregular: false, pl: 'ból głowy', en: 'headache', note: 'headache<u>s</u>' },
    { irregular: false, pl: 'reklama', en: 'advertisement', note: 'advertisement<u>s</u>' },
    { irregular: false, pl: 'własność / mienie', en: 'property', note: 'property<u>s</u>' },
    { irregular: false, pl: 'właściwości', en: 'properties', note: '' },
    { irregular: false, pl: 'niezmiennoś / stałość / nieodwołalność', en: 'immutability', note: '' },
    { irregular: false, pl: 'gałąź', en: 'branch', note: 'branch<u>es</u>' },
    { irregular: false, pl: 'młynek', en: 'grinder', note: 'grinder<u>s</u>' },
    { irregular: false, pl: 'zwierzę', en: 'animal', note: 'animal<u>s</u>' },
    { irregular: false, pl: 'małpa', en: 'monkey', note: 'monkey<u>s</u>' },
    { irregular: false, pl: 'tygrys', en: 'tiger', note: 'tiger<u>s</u>' },
    { irregular: false, pl: 'lew', en: 'lion', note: 'lion<u>s</u>' },
    { irregular: false, pl: 'wielbłąd', en: 'camel', note: 'camel<u>s</u>' },
    { irregular: false, pl: 'słoń', en: 'elephant', note: 'elephant<u>s</u>' },
    { irregular: false, pl: 'hipopotam', en: 'hippopotamus', note: 'hippopotamu<u>es</u>' },
    { irregular: false, pl: 'zebra', en: 'zebra', note: 'zebra<u>s</u>' },
    { irregular: false, pl: 'żyrafa', en: 'giraffe', note: 'giraffe<u>s</u>' },
    { irregular: false, pl: 'kangur', en: 'kangaroo', note: 'kangaroo<u>s</u>' },
    { irregular: false, pl: 'krokodyl', en: 'crocodile', note: 'crocodile<u>s</u>' },
    { irregular: false, pl: 'kwiat', en: 'flower', note: 'flower<u>s</u>' },
    { irregular: false, pl: 'róża', en: 'rose', note: 'ros<u>s</u>' },
    { irregular: false, pl: 'tulipan', en: 'tulip', note: 'tulip<u>s</u>' },
    { irregular: false, pl: 'trawa', en: 'grass', note: 'grass<u>es</u>' },
    { irregular: false, pl: 'grzyb', en: 'mushroom', note: 'mushroom<u>s</u>' },
    { irregular: false, pl: 'krzak / krzew', en: 'bush', note: 'bush<u>es</u>' },
    { irregular: false, pl: 'drzewo', en: 'tree', note: 'tree<u>s</u>' },
    { irregular: false, pl: 'tulipan', en: 'tulip', note: 'tulip<u>s</u>' },
    { irregular: false, pl: 'trawa', en: 'grass', note: 'gras<u>es</u>' },
    { irregular: false, pl: 'kwiat', en: 'flower', note: 'flower<u>s</u>' },
    { irregular: false, pl: 'aktor', en: 'actor', note: 'actors<u>s</u>' },
    { irregular: false, pl: 'aktorka', en: 'actress', note: 'actorss<u>es</u>' },
    { irregular: false, pl: 'nauczyciel', en: 'teacher', note: 'teacher<u>s</u>' },
    { irregular: false, pl: 'dentysta', en: 'dentist', note: 'dentist<u>s</u>' },
    { irregular: false, pl: 'pielęgniarka / pielęgniarz', en: 'nurse', note: 'nurse<u>s</u>' },
    { irregular: false, pl: 'policjant', en: 'policeman', note: 'policeman<u>s</u>' },
    { irregular: false, pl: 'sekretarka', en: 'secretary', note: 'secretar<u>ies</u>' },
    { irregular: false, pl: 'listonosz', en: 'postman', note: 'postman<u>ies</u>' },
    { irregular: false, pl: 'kelner', en: 'waiter', note: 'waiter<u>s</u>' },
    { irregular: false, pl: 'kelnerka', en: 'waitress', note: 'waitress<u>es</u>' },
    { irregular: false, pl: 'ilość / stan / wielkość', en: 'quantity', note: 'quantit<u>s</u>' },
    { irregular: false, pl: 'usta', en: 'mouth', note: 'mouth<u>s</u>' },
    { irregular: false, pl: 'zmiana', en: 'change', note: 'change<u>s</u>' },
    { irregular: false, pl: 'absolwent (uniwersytetu)', en: 'graduate', note: 'graduate<u>s</u>' },
    { irregular: false, pl: 'współpracownik', en: 'coworker', note: 'coworkes<u>s</u>' },
    { irregular: false, pl: 'bramka / wyjście (np.: lotnisku)', en: 'gate', note: 'gate<u>s</u>' },
    { irregular: false, pl: 'wybór', en: 'choice', note: '' },
    { irregular: false, pl: 'zaufanie', en: 'trust', note: '' },
    { irregular: false, pl: 'wstążka', en: 'ribbon', note: '' },
    { irregular: false, pl: 'lato', en: 'sumer', note: '' },
    { irregular: false, pl: 'spotkanie', en: 'meeting', note: 'meeting<u>s</u>' },
    { irregular: false, pl: 'morze', en: 'sea', note: 'sea<u>s</u>' },
    { irregular: false, pl: 'dzwon / dzwonek', en: 'bell', note: 'bell<u>s</u>' },
    { irregular: false, pl: 'aktywność / działanie', en: 'activity', note: 'activit<u>ies</u>' },
    { irregular: false, pl: 'torebka / torba', en: 'bag', note: 'bag<u>s</u>' },
  ],
];

export default nounsList;