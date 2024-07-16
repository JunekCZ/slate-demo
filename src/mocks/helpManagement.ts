export const mockHelp = {
  help: {
    main: {
      players_tabs: {
        id: "players_tabs",
        pageId: "players",
        subPageId: "tabs",
        cz: {
          title: "Hráči - Tabulky",
          text: "Tabulky s daty jsou základem Hockey Logic. Zobrazují hodnoty statistik hráčů - ty lze rozdělit na individuální statistiky a on-ice statistiky. Individuální statistiky sledují události, které hráč zaznamenal, zatímco on-ice statistiky sledují události, které zaznamenal tým v době, kdy byl hráč na ledě. Takto můžeme sledovat Počty jednotlivých událostí, Časově přepočtené statistiky (vyjadřují počet událostí v průměru za 60 minut času na ledě), Podílové a odvozené statistiky (nejčastěji jsou vyjádřeny v procentech) a statistiky Relativní ke zbytku týmu (vyjadřují rozdíl v hodnotě statistiky s hráčem na ledě a bez hráče na ledě).",
        },
        en: {
          title: "",
          text: "",
        },
      },
      players_gamelog: {
        id: "players_gamelog",
        pageId: "players",
        subPageId: "gamelog",
        cz: {
          title: "Hráči - Gamelog",
          text: "Pro zkoumání zaznamenaných hodnot metrik v zápasech slouží sekce Gamelog - odehrané zápasy jsou zde chronologicky seřazeny. Pro zobrazení tabulky je třeba vybrat Tým a Hráče a následně kliknout na tlačítko <b>Nahrát data</b>.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      players_trend: {
        id: "players_trend",
        pageId: "players",
        subPageId: "trend",
        cz: {
          title: "Hráči - Trend",
          text: "Hlavním významem sekce Trend je možnost zkoumání vývoje hodnot metrik v čase - tedy v rámci sezóny. Hlavní graf právě tento vývoj zachycuje. Zobrazuje hodnoty vybraného ukazatele v čase s možností prozkoumat jeho hodnoty v jednotlivých zápasech - ty jsou v grafu zobrazeny kolečky. Tabulka pod grafem následně umožňuje srovnávat hodnoty statistiky v navolených obdobích sezóny.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "players_player-card": {
        id: "players_player-card",
        pageId: "players",
        subPageId: "player-card",
        cz: {
          title: "Hráči - Karta hráče",
          text: "Karta hráče ukazuje přehledně a jednoduše, jak si hráč vede v nejdůležitějších metrikách ve srovnání s ostatními. Bloky mají omezení odehraného času - zobrazují se hráčům s min. 100 odehranými minutami ve hře 5 na 5 a s min. 30 odehranými minutami v Přesilovkách a Oslabeních. Toto omezení zaručuje, že srovnání budou relevatní a na dostačujícím vzorku dat.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "players_compare-players": {
        id: "players_compare-players",
        pageId: "players",
        subPageId: "compare-players",
        cz: {
          title: "Hráči - Porovnání hráče",
          text: "S využitím bloků z Karty hráče lze vybrané hráče elegantně srovnávat a identifikovat oblasti hry, ve kterých jeden z nich vyčnívá, nebo naopak zaostává. Percentily v blocích pak znázorňují, jak si jednotliví hráči vedou v ligovém srovnání.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "players_similarity-players": {
        id: "players_similarity-players",
        pageId: "players",
        subPageId: "similarity-players",
        cz: {
          title: "Hráči - Shoda hráčů",
          text: "Na této stránce lze vyhledávat hráče, kteří dosahují velmi podobných hodnot zvolených statistik jako srovnávaný hráč.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "players_data-settings": {
        id: "players_data-settings",
        pageId: "players",
        subPageId: "data-settings",
        cz: {
          title: "Hráči - Výběr dat",
          text: "Tato stránka vám umožní vybrat statistiky, které budou následně zobrazeny v datové tabulce. Metriky jsme rozčlenili podle oblastí hry a druhu metriky. Zeleně jsou označeny metriky sledující útok, červeně pak metriky sledující obranu",
        },
        en: {
          title: "",
          text: "",
        },
      },
      formations_pairs: {
        id: "formations_pairs",
        pageId: "formations",
        subPageId: "pairs",
        cz: {
          title: "Formace - Dvojice",
          text: "Sekce Dvojice nabízí zaměření na nejčastější spoluhráče vybraného hráče - toho je nejprve třeba zvolit. Tabulka s daty zobrazuje 3 druhy hodnot, které lze barevnými přepínači zobrazit či skrýt. Tato stránka umožňuje zejména srovnání, se kterými spoluhráči se zvolenému hráči daří a se kterými nikoliv.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      formations_formations: {
        id: "formations_formations",
        pageId: "formations",
        subPageId: "formations",
        cz: {
          title: "Formace - Formace",
          text: "Formace nabízí tabulky s daty, které zobrazují hodnoty statistik hráčských kombinací pohromadě. Lze zobrazit data za celé pětice, pouze za útočné formace a obranné dvojice, či za speciální týmy pro přesilové hry nebo oslabení. Tento výběr je nutné provést pro zobrazení dat. Dále je také možnost zobrazit pouze formace s vybraným hráčem. Další funkcionality jsou velmi podobné hráčským a týmovým tabulkám.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "formations_player-combinations": {
        id: "formations_player-combinations",
        pageId: "formations",
        subPageId: "player-combinations",
        cz: {
          title: "Formace - Kombinace hráčů",
          text: "Sekce Kombinace hráčů je nejjednodušším nástrojem pro zjištění statistik libovolně zvolené kombinace hráčů. Pro zvolení jednotlivých hráčů do kombinace slouží modrá tlačítka. <b>Tlačítko ON</b> v poli pro výběr hráče znamená, že chceme zobrazit data, když byl vybraný hráč na ledě. <b>Tlačítko OFF</b> v poli pro výběr hráče znamená, že chceme zobrazit data ve všech situacích, kdy hráč na ledě nebyl. První šedý řádek tabulky ukazuje hodnoty zvolené kombinace, další řádky pak zobrazují nejčastější spoluhráče zvolené kombinace a statistiky těchto spoluhráčů.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "formations_data-settings": {
        id: "formations_data-settings",
        pageId: "formations",
        subPageId: "data-settings",
        cz: {
          title: "Formace - Výběr dat",
          text: "Tato stránka vám umožní vybrat statistiky, které budou následně zobrazeny v datové tabulce. Metriky jsme rozčlenili podle oblastí hry a druhu metriky. Zeleně jsou označeny metriky sledující útok, červeně pak metriky sledující obranu",
        },
        en: {
          title: "",
          text: "",
        },
      },
      videomaps_shots: {
        id: "videomaps_shots",
        pageId: "videomaps",
        subPageId: "shots",
        cz: {
          title: "Videomapy - Střely",
          text: "Mapa střel nabízí vizualizaci střel podle jejich lokací na hřišti. Střely je možné sledovat dle zvolených kategorií a situací, při nichž k nim došlo, jež lze měnit na ovládacích filtrech vpravo od nákresu hřiště.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      videomaps_heatmap: {
        id: "videomaps_heatmap",
        pageId: "videomaps",
        subPageId: "heatmap",
        cz: {
          title: "Videomapy - Heatmapa",
          text: "Heatmapa střel zobrazuje četnost střel vybraných hráčů či celého týmu z dané lokace na hřišti. Kategorie střel a situaci, při nichž k nim došlo, lze měnit na ovládacích filtrech vpravo od nákresu hřiště. Po zvolení hráčů, zápasů a filtrů je pro zobrazení heatmapy střel nutné aktivovat tlačítko <b>Nahrát heatmapu</b>. ",
        },
        en: {
          title: "",
          text: "",
        },
      },
      videomaps_passes: {
        id: "videomaps_passes",
        pageId: "videomaps",
        subPageId: "passes",
        cz: {
          title: "Videomapy - Přihrávky",
          text: "Mapa přihrávek obsahuje vizualizaci přihrávek na střely podle jejich lokací na hřišti. Přihrávky je možné sledovat dle zvolených kategorií a situací, při nichž k nim došlo, jež lze měnit na ovládacích filtrech vpravo od nákresu hřiště.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      videomaps_faceoffs: {
        id: "videomaps_faceoffs",
        pageId: "videomaps",
        subPageId: "faceoffs",
        cz: {
          title: "Videomapy - Vhazování",
          text: "Mapa vhazování slouží nejčastěji ke srovnání více hráčů z pohledu úspěšnosti na vhazování. Mapa nabízí srovnání všech 9 bodů pro vhazování, a to s možností vybrat držení hole soupeře nebo zakončení po vhazování pomocí ovládacích prvků napravo. Také je zde možné přehrát videa zvolených vhazování.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      videomaps_entries: {
        id: "videomaps_entries",
        pageId: "videomaps",
        subPageId: "entries",
        cz: {
          title: "Videomapy - Vstupy do pásma",
          text: "Mapa vstupů do pásma obsahuje vizualizaci kontrolovaných vstupů nebo nahození podle jejich lokací na hřišti. Vstupy je možné sledovat dle zvolených kategorií a situací, k nimž vedly, jež lze měnit na ovládacích filtrech vpravo od nákresu hřiště.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      videomaps_exits: {
        id: "videomaps_exits",
        pageId: "videomaps",
        subPageId: "exits",
        cz: {
          title: "Videomapy - Výstupy z pásma",
          text: "Mapa výstupů z pásma obsahuje vizualizaci kontrolovaných výstupů nebo vyhození podle jejich lokací na hřišti. Výstupy je možné sledovat dle zvolených kategorií a situací, k nimž vedly, jež lze měnit na ovládacích filtrech vpravo od nákresu hřiště.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      videomaps_shootouts: {
        id: "videomaps_shootouts",
        pageId: "videomaps",
        subPageId: "shootouts",
        cz: {
          title: "Videomapy - Nájezdy",
          text: "Sekce Nájezdy nabízí podrobnou analýzu samostatných nájezdů hráčů a týmů. Stránce dominuje nákres branky, na kterém lze sledovat umístění zakončení do jednotlivých zón. Nájezdy lze také filtrovat pomocí tlačítek na pravé straně.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      goalkeepers_tabs: {
        id: "goalkeepers_tabs",
        pageId: "goalkeepers",
        subPageId: "tabs",
        cz: {
          title: "Brankáři - Tabulky",
          text: "Tabulky s daty zobrazují hodnoty statistik brankářů. Ty členíme na Počty jednotlivých událostí, Časově přepočtené statistiky (vyjadřují počet událostí v průměru za 60 minut času na ledě) a Podílové a odvozené statistiky (nejčastěji jsou vyjádřeny v procentech).",
        },
        en: {
          title: "",
          text: "",
        },
      },
      goalkeepers_gamelog: {
        id: "goalkeepers_gamelog",
        pageId: "goalkeepers",
        subPageId: "gamelog",
        cz: {
          title: "Brankáři - Gamelog",
          text: "Pro zkoumání zaznamenaných hodnot metrik v zápasech slouží sekce Gamelog - odehrané zápasy jsou zde chronologicky seřazeny. Pro zobrazení tabulky je třeba vybrat Tým a Brankáře a následně kliknout na tlačítko <b>Nahrát data</b>.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      goalkeepers_trend: {
        id: "goalkeepers_trend",
        pageId: "goalkeepers",
        subPageId: "trend",
        cz: {
          title: "Brankáři - Trend",
          text: "S využitím bloků z Karty hráče lze vybrané hráče elegantně srovnávat a identifikovat oblasti hry, ve kterých jeden z nich vyčnívá, nebo naopak zaostává. Percentily v blocích pak znázorňují, jak si jednotliví hráči vedou v ligovém srovnání.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "goalkeepers_net-zones": {
        id: "goalkeepers_net-zones",
        pageId: "goalkeepers",
        subPageId: "net-zones",
        cz: {
          title: "Brankáři - Zóny branky",
          text: "Sekce Zóny branky umožňuje srovnávat brankáře z pohledu úspěšnosti zákroků v zónách branky. Po vybrání brankáře se v zónách zobrazí úspěšnost zákroků a počet obdržených gólů, přičemž barva pozadí vyjadřuje srovnání se zbytkem ligy - tmavě zelená znamená nejlepší hodnoty v lize, světlé barvy vyjadřují ligový průměr a tmavě červená znamená nejhorší hodnoty v lize.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      goalkeepers_shotmap: {
        id: "goalkeepers_shotmap",
        pageId: "goalkeepers",
        subPageId: "shotmap",
        cz: {
          title: "Brankáři - Mapa střel",
          text: "Mapa střel nabízí vizualizaci střel podle jejich lokací na hřišti. Střely je možné sledovat dle zvolených kategorií a situací, při nichž k nim došlo, jež lze měnit na ovládacích filtrech vpravo od nákresu hřiště.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      goalkeepers_shootouts: {
        id: "goalkeepers_shootouts",
        pageId: "goalkeepers",
        subPageId: "shootouts",
        cz: {
          title: "Brankáři - Nájezdy",
          text: "Sekce Nájezdy nabízí podrobnou analýzu samostatných nájezdů na brankáře. Stránce dominuje nákres branky, na kterém lze sledovat umístění zakončení do jednotlivých zón. Nájezdy lze také filtrovat pomocí tlačítek na pravé straně.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "goalkeepers_goalkeeper-card": {
        id: "goalkeepers_goalkeeper-card",
        pageId: "goalkeepers",
        subPageId: "goalkeeper-card",
        cz: {
          title: "Brankáři - Karta brankáře",
          text: "Karta brankáře ukazuje přehledně a jednoduše, jak si brankář vede v nejdůležitějších metrikách ve srovnání s ostatními nejen za celou sezónu (první blok), ale také v posledních 5 odchytaných zápasech (druhý blok). Napravo jsou pak sezónní úspěšnosti zákroků ve členění dle zón branky pro identifikaci silných a slabých míst brankáře.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "goalkeepers_compare-coalkeepers": {
        id: "goalkeepers_compare-coalkeepers",
        pageId: "goalkeepers",
        subPageId: "compare-coalkeepers",
        cz: {
          title: "Brankáři - Porovnání brankáře",
          text: "S využitím bloků z Karty brankáře lze vybrané brankáře elegantně srovnávat a identifikovat oblasti hry, ve kterých jeden z nich vyčnívá, nebo naopak zaostává. Pořadí na konci každé škály znázorňuje, jak si jednotliví brankáři vedou v ligovém srovnání.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "goalkeepers_data-settings": {
        id: "goalkeepers_data-settings",
        pageId: "goalkeepers",
        subPageId: "data-settings",
        cz: {
          title: "Brankáři - Výběr dat",
          text: "Tato stránka vám umožní vybrat statistiky, které budou následně zobrazeny v datové tabulce.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "games_graphic-overview": {
        id: "games_graphic-overview",
        pageId: "games",
        subPageId: "graphic-overview",
        cz: {
          title: "Zápasy - Grafický přehled",
          text: "Názorný přehled toho nejdůležitějšího ze zápasu - to je Grafický přehled. Nabízí pohled na nejdůležitější statistiky, zobrazuje heatmapu střelby obou týmů a vývoj zápasu z pohledu vytvořených šancí.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      games_report: {
        id: "games_report",
        pageId: "games",
        subPageId: "report",
        cz: {
          title: "Zápasy - Report",
          text: "Zápasový Report nabízí přehled nejdůležitějších zápasových statistik obou týmů, a to při hře 5 na 5 a v Přesilovkách. Kromě samotných hodnot report poskytuje srovnání s výkony týmů v celé sezóně a také Ligové pořadí pro zasazení do kontextu ligy. Každou metriku lze rozkliknout a zobrazit tak 5 nejlepších hráčů.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      games_players: {
        id: "games_players",
        pageId: "games",
        subPageId: "players",
        cz: {
          title: "Zápasy - Hráči",
          text: "Sekce Hráči na záložce zápasy ukazuje hodnoty statistik, kterých ve vybraném zápase dosáhli hráči. Obsahuje přímý odkaz na videa všech střídání hráče v zápase. Data v tabulce pak lze filtrovat pomocí několika paramerů dat tabulkou.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      games_formations: {
        id: "games_formations",
        pageId: "games",
        subPageId: "formations",
        cz: {
          title: "Zápasy - Formace",
          text: "Sekce Týmy na záložce zápasy ukazuje hodnoty statistik, kterých ve vybraném zápase dosáhli jednotlivé hráčské kombinace.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      games_goalkeepers: {
        id: "games_goalkeepers",
        pageId: "games",
        subPageId: "goalkeepers",
        cz: {
          title: "Zápasy - Brankáři",
          text: "Sekce Týmy na záložce zápasy ukazuje hodnoty statistik, kterých ve vybraném zápase dosáhli brankáři.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      games_h2h: {
        id: "games_h2h",
        pageId: "games",
        subPageId: "h2h",
        cz: {
          title: "Zápasy - Kdo proti komu",
          text: "Grafická matice ukazuje, proti komu nejčastěji nastupovali hráči a jak si jejich tým vedl z pohledu tvorby šancí. Velikost kruhu značí čas, který hráči proti sobě strávili na ledě, jeho barevné rozdělení pak symbolizuje, který tým měl navrch z pohledu zvolené metriky. Vše lze zobrazit po najetí myší.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "games_data-settings": {
        id: "games_data-settings",
        pageId: "games",
        subPageId: "data-settings",
        cz: {
          title: "Zápasy - Výběr dat",
          text: "Tato stránka vám umožní vybrat statistiky, které budou následně zobrazeny v datové tabulce. Metriky jsme rozčlenili podle oblastí hry a druhu metriky. Zeleně jsou označeny metriky sledující útok, červeně pak metriky sledující obranu",
        },
        en: {
          title: "",
          text: "",
        },
      },
      teams_tabs: {
        id: "teams_tabs",
        pageId: "teams",
        subPageId: "tabs",
        cz: {
          title: "Týmy - Tabulky",
          text: "Tabulky s daty zobrazují hodnoty statistik týmů. Ty členíme na Počty jednotlivých událostí, Časově přepočtené statistiky (vyjadřují počet událostí v průměru za 60 minut času na ledě) a Podílové a odvozené statistiky (nejčastěji jsou vyjádřeny v procentech).",
        },
        en: {
          title: "",
          text: "",
        },
      },
      teams_gamelog: {
        id: "teams_gamelog",
        pageId: "teams",
        subPageId: "gamelog",
        cz: {
          title: "Týmy - Gamelog",
          text: "Pro zkoumání zaznamenaných hodnot metrik v zápasech slouží sekce Gamelog - odehrané zápasy jsou zde chronologicky seřazeny. Pro zobrazení tabulky je třeba vybrat Tým a následně kliknout na tlačítko Nahrát data.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      teams_trend: {
        id: "teams_trend",
        pageId: "teams",
        subPageId: "trend",
        cz: {
          title: "Týmy - Trend",
          text: "Zápasové rekordy ukazují 5 nejlepších výkonů hráčů v sezóně dle zvolených statistik.",
        },
        en: {
          title: "",
          text: "",
        },
      },
      "teams_data-settings": {
        id: "teams_data-settings",
        pageId: "teams",
        subPageId: "data-settings",
        cz: {
          title: "Týmy - Výběr dat",
          text: "Tato stránka vám umožní vybrat statistiky, které budou následně zobrazeny v datové tabulce. Metriky jsme rozčlenili podle oblastí hry a druhu metriky. Zeleně jsou označeny metriky sledující útok, červeně pak metriky sledující obranu",
        },
        en: {
          title: "",
          text: "",
        },
      },
    },
    tips: {
      players_tabs: {
        id: "players_tabs",
        pageId: "players",
        subPageId: "tabs",
        cz: [
          {
            title: "Srovnejte hráče v rámci ligy",
            text: "Kliknutím na tlačítko <b>Ligový percentil</b> se v tabulce vedle hodnot zobrazí hodnota percentilu, která porovnává hráče se zbytkem ligy. Indikuje, že hráč je <b>lepší než zobrazené procento ostatních hráčů v lize</b> – nejlepší hráč v lize tedy dosáhne percentilu 100, nejhorší 0 a prostřední hráč 50. U individuálních statistik se srovnávají pouze hráči na stejné pozici, u on-ice statistik je srovnání napříč pozicemi.",
          },
          {
            title: "Zkoumejte nejdůležitější metriky na Kartě hráče",
            text: "<b>Přehled toho nejdůležitějšího</b> o každém hráči se nachází na jeho Kartě. <b>Kliknutí na hráčovo jméno</b> v tabulce se na kartu jednoduše dostanete!",
          },
          {
            title: "Spusťte video a dále analyzujte hráče",
            text: "Najetím na <b>ikonku lupy</b> nalevo od jména hráče v tabulce je možné prozkoumat daného hráče do hloubky. <b>Video</b> odkáže na stránku s Videomapami daného hráče, <b>Gamelog</b> pro srovnání statistik po jednotlivých odehraných zápasech, <b>Trend</b> pro analýzu vývoje hodnot hráče během sezony nebo v úsecích sezóny a <b>Kombinace</b> slouží pro analýzu nejčastějších spoluhráčů a protihráčů.",
          },
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      players_gamelog: {
        id: "players_gamelog",
        pageId: "players",
        subPageId: "gamelog",
        cz: [
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      players_trend: {
        id: "players_trend",
        pageId: "players",
        subPageId: "trend",
        cz: [
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      "players_player-card": {
        id: "players_player-card",
        pageId: "players",
        subPageId: "player-card",
        cz: [
          {
            title: "Porovnejte zkoumaného hráče s dalšími hráči",
            text: "Kliknutím na tlačítko <b>Porovnat s dalším hráčem</b> se dostanete do sekce Porovnání hráčů, kde si budete moc kromě bloků již zkoumaného hráče zobrazit také bloky dalších hráčů a získáte <b>jednoduché a názorné srovnání</b> ukazující, který z hráčů si v oblastech vede lépe a který hůře.",
          },
        ],
        en: [],
      },
      "players_compare-players": {
        id: "players_compare-players",
        pageId: "players",
        subPageId: "compare-players",
        cz: [],
        en: [],
      },
      "players_similarity-players": {
        id: "players_similarity-players",
        pageId: "players",
        subPageId: "similarity-players",
        cz: [
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      "players_data-settings": {
        id: "players_data-settings",
        pageId: "players",
        subPageId: "data-settings",
        cz: [
          {
            title:
              "Nevíte, které metriky zkoumat? Zkuste přednastavené šablony!",
            text: "Vytvořili jsme pro vás několik <b>přednastavených datových šablon</b>, které obsahují doporučené metriky pro zkoumání konkrétní oblasti hry. Vyberte si přes tlačítko <b>Vybrat datovou šablonu</b>.",
          },
          {
            title: "Uložte si vaše oblíbené metriky do šablony!",
            text: "Pokud velmi často pracujete se stejnými metrikami, bude se vám hodit tlačítko <b>Uložit datovou šablonu</b>, to totiž uloží aktuálně vybrané metriky do šablony, kterou můžete pojmenovat a příště zvolit jedním kliknutím v rámci tlačítka <b>Vybrat datovou šablonu</b>.",
          },
        ],
        en: [],
      },
      formations_pairs: {
        id: "formations_pairs",
        pageId: "formations",
        subPageId: "pairs",
        cz: [
          {
            title: "Identifikujte vhodného spoluhráče",
            text: "Zakliknutím pouze <b>zeleného přepínače Hráči spolu</b> se v tabulce zobrazí hodnoty statistik, kterých zvolený hráč dosáhl s jednotlivými spoluhráči. Kliknutím na libovolnou statistiku lze hodnoty seřadit, a tak je možné identifikovat, se kterými spoluhráči dosahoval srovnávaný hráč nejlepších výsledků. Kontext hodnotám dodá srovnání pomocí <b>Ligového percentilu</b>. Doporučujeme pomocí výběru <b>Filtrovat pozice</b> zvolit pouze spoluhráče útočníky, nebo spoluhráče obránce.",
          },
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      formations_formations: {
        id: "formations_formations",
        pageId: "formations",
        subPageId: "formations",
        cz: [
          {
            title: "Najděte nejčastější formace hráče",
            text: "Po zvolení konrétního hráče můžete zkoumat, v jakých formacích nejčastěji nastupoval - kromě celých pětic lze po výběru druhu formace v horní části stránky zkoumat nejčastější útočné formace útočníků nebo nejčastějšího obranného partnera u obránců. Stejným způsobem lze zvolit pro útočníka nejčastější obranné páry, se kterými nastupoval, resp. pro obránce útočné trojice, s nimiž strávil nejdelší čas na ledě.",
          },
          {
            title: "Srovnejte výkony přesilovkových formací",
            text: "Po vybrání <b>Druhu formace 5/4</b> se v tabulce zobrazí spolu <b>nejčastěji nastupující přesilovkové formace</b> - v rámci týmu nebo celé TELH tak můžete sledovat, jak si konkrétní formace stojí ve srovnání s ostatními - nejjednodušeji <b>pomocí ligového percentilu</b>.",
          },
        ],
        en: [],
      },
      "formations_player-combinations": {
        id: "formations_player-combinations",
        pageId: "formations",
        subPageId: "player-combinations",
        cz: [
          {
            title: "Spusťte video a dále analyzujte kombinaci",
            text: "Najetím na <b>ikonku lupy</b> nalevo od jména hráčů v prvním řádku tabulky je možné prozkoumat dané hráče do hloubky - <b>Video</b> odkáže na stránku s <b>Videomapami</b>, kde lze přehrát videa nebo sledovat na mapě střely, vstupy do pásma a výstupy z pásma.",
          },
        ],
        en: [],
      },
      "formations_data-settings": {
        id: "formations_data-settings",
        pageId: "formations",
        subPageId: "data-settings",
        cz: [
          {
            title:
              "Nevíte, které metriky zkoumat? Zkuste přednastavené šablony!",
            text: "Vytvořili jsme pro vás několik <b>přednastavených datových šablon</b>, které obsahují doporučené metriky pro zkoumání konkrétní oblasti hry. Vyberte si přes tlačítko <b>Vybrat datovou šablonu</b>.",
          },
          {
            title: "Uložte si vaše oblíbené metriky do šablony!",
            text: "Pokud velmi často pracujete se stejnými metrikami, bude se vám hodit tlačítko <b>Uložit datovou šablonu</b>, to totiž uloží aktuálně vybrané metriky do šablony, kterou můžete pojmenovat a příště zvolit jedním kliknutím v rámci tlačítka <b>Vybrat datovou šablonu</b>.",
          },
        ],
        en: [],
      },
      videomaps_shots: {
        id: "videomaps_shots",
        pageId: "videomaps",
        subPageId: "shots",
        cz: [
          {
            title: "Spusťte video všech střel hráče v zápase",
            text: "Nalevo od mapky hrací plochy se v seznamu zápasů nachází modrá <b>ikonka videa</b>. Po kliknutí na ni se zobrazí <b>videozáznamy všech střel v daném zápase</b>, které je možné jednak přehrát a jednak stáhnout ve formátu .mp4. Jednoduše je tak možné sledovat <b>videozáznamy střely vybraného hráče</b> při zvolení tlačítka Hráč v bloku <b>Kdo střílel</b> v konkrétním zápase. Stejně tak lze videozáznamy zobrazit pro více zápasů najednou nebo dokonce pro celou sezonu – to umožňuje tlačítko <b>Přehrát vybrané zápasy</b> pod seznamem zápasů.",
          },
          {
            title: "Detailně prozkoumejte střelu",
            text: "Kliknutím na <b>bod zobrazující střely</b> se zobrazí okno s podrobnostmi o střele – zápas, střílející hráč, odhad pravděpodobnosti vstřelení gólu (xG) a umístění střely do zóny branky.",
          },
          {
            title: "Sledujte preference zón branky",
            text: "Blok <b>Zóny branky</b> se schématem branky v pravé části stránky nejen že umožňuje filtraci střel pro zobrazení dle jednotlivých zón branky, ale také indikuje, kolik střel bylo vysláno vybraným hráčem, hráči, či týmem do dané zóny – počet je vyjádřen číslem v kolečku.",
          },
        ],
        en: [],
      },
      videomaps_heatmap: {
        id: "videomaps_heatmap",
        pageId: "videomaps",
        subPageId: "heatmap",
        cz: [
          {
            title: "Srovnejte četnosti střel s průměrem ligy",
            text: "Tlačítko <b>Produkce střel</b> v bloku <b>Porovnat s průměrem TELH</b> umožňuje zobrazit heatmapu týmu či týmu s vybraným hráčem na ledě ve srovnání s ligovým průměrem. Plochy na mapě hřiště, které jsou <b>zbarveny červeně</b> znamenají, že četnost střel vybraného týmu ve zvolené situaci je z těchto lokací vyšší, než je průměr ligy, naopak místa <b>zbarvená modře</b> značí, že z těchto lokací je četnost střel nižší, než je průměr ligy. Takto lze porovnávat nejen útočnou činnost, tzn. střely, které vybraný tým vyslal (blok <b>Kdo střílel</b>, tlačítko Tým), ale i střely, které proti zvolenému týmu vyslali jeho soupeři (blok <b>Kdo střílel</b>, tlačítko Soupeř). To je naopak užitečné pro <b>vyhodnocení obranné činnosti týmu</b> a jeho schopnosti bránit soupeři ve tvorbě střeleckých příležitostí z nejnebezpečnějších lokací.",
          },
          {
            title: "Zobrazte heatmapu střel hráče",
            text: "<b>Heatmapu střel vyslaných vybraným hráče</b> lze zobrazit při zvolení tlačítka Hráč v bloku <b>Kdo střílel</b>. <b>Červeně zbarvené</b> plochy značí lokaci s největší četností střelby vybraného hráče (čím tmavší odstín, tím častější střelba z dané lokace). ",
          },
          {
            title: "Zobrazte heatmapu střel týmu s hráčem na ledě",
            text: "<b>Heatmapu střel</b> vyslaných týmem s vybraným hráčem (či formací hráčů) na ledě lze zobrazit při zvolení tlačítka Tým v bloku <b>Kdo střílel</b>. <b>Červeně zbarvené</b> plochy značí lokaci s největší četností střelby týmu s vybraným hráčem na ledě (čím tmavší odstín, tím častější střelba z dané lokace). V tomto zobrazení se tedy do střel týmu započítávají střely vybraného hráče či hráčů, ale i všech spoluhráčů, kteří s ním byli v daný čas na ledě.",
          },
          {
            title: "Sledujte nebezpečnost střelby",
            text: "Při rozbalení <b>černého pruhu pod mapou</b> je možné sledovat počty střel, očekávané góly a vstřelené góly ve členění podle nebezpečnosti. Střel s <b>vysokou nebezpečností</b> je v lize přibližně 10 %, za to z nich padá 50 % gólů. Můžete tedy sledovat, zda si tým vytváří dostatek nebezpečných střel nebo u kterých střel vstřelil více nebo méně gólů, než se v průměru očekávalo.",
          },
        ],
        en: [],
      },
      videomaps_passes: {
        id: "videomaps_passes",
        pageId: "videomaps",
        subPageId: "passes",
        cz: [
          {
            title: "Detailně prozkoumejte přihrávku",
            text: "Kliknutím na <b>šipku</b> zobrazující přihrávku se zobrazí okno s podrobnostmi o přihrávce a následné střele – zápas, přihrávající a střílející hráč, odhad pravděpodobnosti vstřelení gólu (xG) a odkaz na video.",
          },
          {
            title: "Spusťte video nebezpečných přihrávek hráče",
            text: "Jednoduchým způsobem lze získat sestřih všech <b>přihrávek hráče na střely s vysokou nebezpečností</b>! Stačí zvolit hráče v jednom z 5 polí nad mapou, v bloku <b>Kdo přihrával</b> zvolit Hráč, v bloku <b>Nebezpečnost střel</b> zvolit tlačítko Vysoká a pod seznamem v levé části stistknout tlačítko <b>Přehrát vybrané zápasy</b>. Nově zobrazené okno umožňuje všechny přihrávky hráče přehrát nebo stáhnout.",
          },
        ],
        en: [],
      },
      videomaps_faceoffs: {
        id: "videomaps_faceoffs",
        pageId: "videomaps",
        subPageId: "faceoffs",
        cz: [
          {
            title: "Srovnejte nejvíce nasazované hráče na vhazování",
            text: "Výkony <b>nejčasteji nasazovaných hráčů na vhazování</b> lze jednoduše srovnat - ve výběrových tlačítkách nad mapou hřiště jsou hráči seřazeni sestupně podle počtu vhazování - jednoduše tedy lze do 5 polí vyplnit 5 prvních hráčů a na mapě i pod ní se zobrazí barevně odlišené hodnoty statistik těchto 5 hráčů.",
          },
          {
            title: "Spusťte video vhazování hráče v posledním zápase",
            text: "Při <b>výběru hráče</b> pomocí jednoho z barevných tlačítek v horní části stránky se v <b>seznamu v levé části</b>, který obsahuje poslední zápasy týmu, objeví jednak číslo symbolizující <b>počet vhazování hráče v daném zápase</b>, jednak <b>ikonka videa</b>, která umožňuje přehrát všechny vhazování vybraného hráče v daném zápase.",
          },
          {
            title: "Spusťte video vhazování hráče proti praváků nebo levákům",
            text: "<b>Pokročilá videoanalýza vhazování</b> hráče může zkoumat např. úspěšnost hráče proti hráčům stejného nebo opačného držení hole v určitém bodu pro vhazování - to vše Mapa vhazování nabízí! Po zvolení <b>parametrů v pravé části stránky</b> a zvolení hráče stačí srovnávat úspěšnosti na mapě nebo pod ní a při najetí na konkrétní hodnoty následně kliknout na <b>ikonku videa</b> pro přehrání všech takových vhazování.",
          },
        ],
        en: [],
      },
      videomaps_entries: {
        id: "videomaps_entries",
        pageId: "videomaps",
        subPageId: "entries",
        cz: [
          {
            title: "Prozkoumejte inkasované góly po vstupu soupeře",
            text: "<b>Obrannou činnost</b> při přechodu soupeře do pásma lze zkoumat například zobrazením gólů soupeře, které následovaly po vstupu pásma - k tomuto je zapotřebí v bloku <b>Kdo vstupoval</b> do pásma označit Soupeř a v bloku <b>Zakončení</b> zvolit Gól. Na mapě se pak zobrazí počty gólů po vstupu a lze sledovat, zda tyto góly přicházely spíše z pravé, či z levé strany a spustit jejich video.",
          },
          {
            title: "Spusťte video nebezpečných vstupů hráče",
            text: "Jednoduchým způsobem lze získat sestřih všech <b>vstupů hráče do pásma s vysokou nebezpečností</b>! Stačí zvolit hráče v jednom z 5 polí nad mapou, v bloku <b>Kdo vstupoval do pásma</b> zvolit Hráč, v bloku <b>Nebezpečnost vstupu</b> zvolit tlačítko Vysoká a pod seznamem v levé části stistknout tlačítko <b>Přehrát vybrané zápasy</b>. Nově zobrazené okno umožňuje všechny vstupy hráče přehrát nebo stáhnout.",
          },
        ],
        en: [],
      },
      videomaps_exits: {
        id: "videomaps_exits",
        pageId: "videomaps",
        subPageId: "exits",
        cz: [
          {
            title: "Prozkoumejte neúspěšné pokusy o výstup z pásma hráče",
            text: "Jednou z možností, jak využít <b>Mapu výstupů</b> je ke zkoumání neúspěšných výstupů z pásma, tedy <b>neúspěšných rozehrávek hráče</b>. Po výběru hráče a zvolení tlačítka Neúspěšné v bloku <b>Podle úspěšnosti</b> pak lze jendoduše spustit video kliknutím na <b>ikonku</b>, která se zobrazí při najetí na hodnotu počtu výstupů na mapě. Tento sestřih lze využít pro hodnocení častých chyb hráče a možností jeho zlepšení.",
          },
        ],
        en: [],
      },
      videomaps_shootouts: {
        id: "videomaps_shootouts",
        pageId: "videomaps",
        subPageId: "shootouts",
        cz: [
          {
            title: "Spusťte video backhandových kliček hráče",
            text: "Sestřih všech backhandových kliček (nebo obdobně jiných <b>druhů zakončení dle zvolených filtrů</b>) hráče lze snadno získat po výběru hráče a zvolení tlačítek <b>Klička</b> a <b>Backhand</b> v pravé části stránky kliknutím na tlačítko <b>Přehrát vybrané zápasy</b>.",
          },
        ],
        en: [],
      },
      goalkeepers_tabs: {
        id: "goalkeepers_tabs",
        pageId: "goalkeepers",
        subPageId: "tabs",
        cz: [
          {
            title: "Srovnejte brankáře v rámci ligy",
            text: "Kliknutím na tlačítko <b>Ligový percentil</b> se v tabulce vedle hodnot zobrazí hodnota percentilu, která porovnává brankáře se zbytkem ligy. Indikuje, že brankář je <b>lepší než zobrazené procento ostatních brankářů v lize</b> – nejlepší brankář v lize tedy dosáhne percentilu 100, nejhorší 0 a prostřední brankář 50.",
          },
          {
            title: "Spusťte video a dále analyzujte brankáře",
            text: "Najetím na <b>ikonku lupy</b> nalevo od jména brankáře v tabulce je možné prozkoumat daného brankáře do hloubky. <b>Gamelog</b> slouží ke srovnání statistik po jednotlivých odehraných zápasech, <b>Trend</b> pro analýzu vývoje hodnot hráče během sezony nebo v úsecích sezóny, <b>Střely</b> odkáží na stránku s Mapou střel na daného brankáře a <b>Nájezdy</b> umožní prozkoumat samostatné nájezdy na brankáře.",
          },
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      goalkeepers_gamelog: {
        id: "goalkeepers_gamelog",
        pageId: "goalkeepers",
        subPageId: "gamelog",
        cz: [
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      goalkeepers_trend: {
        id: "goalkeepers_trend",
        pageId: "goalkeepers",
        subPageId: "trend",
        cz: [
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      "goalkeepers_net-zones": {
        id: "goalkeepers_net-zones",
        pageId: "goalkeepers",
        subPageId: "net-zones",
        cz: [
          {
            title: "Srovnejte brankáře týmu",
            text: "Názorným způsobem lze <b>srovnat výkony brankářů</b> týmu pomocí sekce <b>Zóny branky</b> - stačí u každého z nákresů branky vybrat tým a brankáře tohoto týmu. Zobrazené schémata vedle sebe pak ukáží, ve které zóně má který brankář lepší úspěšnost.",
          },
        ],
        en: [],
      },
      goalkeepers_shotmap: {
        id: "goalkeepers_shotmap",
        pageId: "goalkeepers",
        subPageId: "shotmap",
        cz: [
          {
            title: "Spusťte video všech obdržených gólů brankáře",
            text: "Po kliknutí na tlačítko <b>Přehrát vybrané zápasy</b> nalevo od mapky hrací plochy pod seznamem zápasů se zobrazí videozáznamy všech střel v daném zápase, které je možné jednak přehrát a jednak stáhnout ve formátu .mp4. Jednoduše je tak možné sledovat <b>videozáznamy všech obdržených gólů vybraného brankáře</b> při zvolení tlačítka Góly v bloku <b>Kategorie střel</b>.",
          },
          {
            title: "Detailně prozkoumejte střelu",
            text: "Kliknutím na <b>bod zobrazující střely</b> se zobrazí okno s podrobnostmi o střele – zápas, střílející hráč, odhad pravděpodobnosti vstřelení gólu (xG) a umístění střely do zóny branky.",
          },
        ],
        en: [],
      },
      goalkeepers_shootouts: {
        id: "goalkeepers_shootouts",
        pageId: "goalkeepers",
        subPageId: "shootouts",
        cz: [
          {
            title: "Spusťte video kliček praváků proti brankáři",
            text: "Sestřih všech kliček praváků (nebo obdobně jiných <b>druhů zakončení dle zvolených filtrů</b>) lze snadno získat po výběru brankáře a zvolení tlačítek <b>Klička</b> a <b>Pravé</b> držení hole v pravé části stránky kliknutím na tlačítko <b>Přehrát vybrané zápasy</b>.",
          },
        ],
        en: [],
      },
      "goalkeepers_goalkeeper-card": {
        id: "goalkeepers_goalkeeper-card",
        pageId: "goalkeepers",
        subPageId: "goalkeeper-card",
        cz: [
          {
            title: "Porovnejte zkoumaného brankáře s dalšími brankáři",
            text: "Kliknutím na tlačítko <b>Porovnat s dalším brankářem</b> se dostanete do sekce Porovnání brankářů, kde si budete moc kromě bloků již zkoumaného brankáře zobrazit také bloky dalších hráčů a získáte <b>jednoduché a názorné srovnání</b> ukazující, který z brankářů si v oblastech vede lépe a který hůře.",
          },
        ],
        en: [],
      },
      "goalkeepers_compare-coalkeepers": {
        id: "goalkeepers_compare-coalkeepers",
        pageId: "goalkeepers",
        subPageId: "compare-coalkeepers",
        cz: [],
        en: [],
      },
      "goalkeepers_data-settings": {
        id: "goalkeepers_data-settings",
        pageId: "goalkeepers",
        subPageId: "data-settings",
        cz: [
          {
            title:
              "Nevíte, které metriky zkoumat? Zkuste přednastavené šablony!",
            text: "Vytvořili jsme pro vás několik <b>přednastavených datových šablon</b>, které obsahují doporučené metriky pro zkoumání konkrétní oblasti hry. Vyberte si přes tlačítko <b>Vybrat datovou šablonu</b>.",
          },
          {
            title: "Uložte si vaše oblíbené metriky do šablony!",
            text: "Pokud velmi často pracujete se stejnými metrikami, bude se vám hodit tlačítko <b>Uložit datovou šablonu</b>, to totiž uloží aktuálně vybrané metriky do šablony, kterou můžete pojmenovat a příště zvolit jedním kliknutím v rámci tlačítka <b>Vybrat datovou šablonu</b>.",
          },
        ],
        en: [],
      },
      "games_graphic-overview": {
        id: "games_graphic-overview",
        pageId: "games",
        subPageId: "graphic-overview",
        cz: [
          {
            title: "Sledujte, kdy tým dominoval a ovládl zápas",
            text: "Graf Vývoje zápasu ukazuje <b>očekávané góly</b>, a tedy vytvořené šance, týmem v zápase. Pokud je čára týmu výrazně výš než soupeřova, znamená to, že tým si do té doby vytvořil více šancí ke skórování. <b>Zaměřte se tedy na období, ve kterých se čáry výrazně oddalují</b> - to jsou momenty, kdy jeden z týmů dominoval a vytvářel si velké šance.",
          },
          {
            title: "Zjistěte, kolik nebezpečných šancí si tým vytvořil",
            text: "<b>Semafor střel</b> může nabídnout pohled na to, jak nebezpečné střely si tým vytvořil. Zelená bublina ukazuje počet střel s vysokou nebezpečností, tudíž <b>srovnání čísel v zelených bublinách</b> obou týmů ukáže, který tým si velkých šancí vytvořil více",
          },
          {
            title: "Zkoumejte, kteří hráči se dostávali v zápase pod tlak",
            text: "<b>Graf Střelecké aktivity</b> ve spodní části stránky odpoví na otázku <b>Kteří hráči se v zápase nejčastěji dostávali pod tlak?</b>. Takoví hráči budou na grafu vyobrazeni vlevo dole - byli na ledě u velkého množství střel soupeře a jen u několika střel týmu.",
          },
        ],
        en: [],
      },
      games_report: {
        id: "games_report",
        pageId: "games",
        subPageId: "report",
        cz: [
          {
            title: "Přehrajte video všech gólů týmu v zápase",
            text: "Tlačítka pod soupisem gólů nabízí možnost jednoduše <b>přehrát video všech gólů obou týmů</b> v zápase nebo také všech gólů dohromady - stačí je stisknout.",
          },
          {
            title: "Zkoumejte, kteří hráči nejčastěji vstupovali do pásma",
            text: "Tabulka zápasového reportu nabízí možnost prozkoumat <b>TOP5 hráčů z pohledu každé metriky</b>, například kontrolované vstupy do pásma. Na řádku s touto metrikou stačí <b>kliknout na modrou ikonku +</b> vlevo a zobrazí se nejčastěji vstupující hráči obou týmů v zápase.",
          },
        ],
        en: [],
      },
      games_players: {
        id: "games_players",
        pageId: "games",
        subPageId: "players",
        cz: [
          {
            title: "Přehrajte všechna střídání hráče v zápase",
            text: "Kliknutím na <b>modrou ikonku videa</b> vedle hodnoty TOI hráče nebo přímo na hodnotu TOI se zobrazí okno s <b>videem všech střídání hráče v zápase</b> - to můžete přehrát nebo stáhnout. Je třeba ale dát pozor na vybranou herní situaci nad tabulkou.",
          },
          {
            title: "Spusťte video a dále analyzujte hráče",
            text: "Najetím na <b>ikonku lupy</b> nalevo od jména hráče v tabulce je možné prozkoumat daného hráče do hloubky. <b>Video</b> odkáže na stránku s Videomapami daného hráče, <b>Gamelog</b> pro srovnání statistik po jednotlivých odehraných zápasech, <b>Trend</b> pro analýzu vývoje hodnot hráče během sezony nebo v úsecích sezóny a <b>Kombinace</b> slouží pro analýzu nejčastějších spoluhráčů a protihráčů.",
          },
        ],
        en: [],
      },
      games_formations: {
        id: "games_formations",
        pageId: "games",
        subPageId: "formations",
        cz: [
          {
            title: "Detailně analyzujte kombinaci",
            text: "Najetím na <b>ikonku lupy</b> nalevo od jmen hráčů v tabulce je možné prozkoumat danou kombinaci do hloubky. <b>Gamelog</b> slouží k srovnání statistik po jednotlivých odehraných zápasech, <b>Trend</b> k analýze vývoje hodnot během sezony nebo v úsecích sezóny a <b>Kombinace</b> slouží pro analýzu nejčastějších spoluhráčů a protihráčů.",
          },
        ],
        en: [],
      },
      games_goalkeepers: {
        id: "games_goalkeepers",
        pageId: "games",
        subPageId: "goalkeepers",
        cz: [
          {
            title: "Detailně analyzujte brankáře",
            text: "Najetím na <b>ikonku lupy</b> nalevo od jména brankáře v tabulce je možné prozkoumat daného brankáře do hloubky. <b>Gamelog</b> slouží ke srovnání statistik po jednotlivých odehraných zápasech a <b>Trend</b> pro analýzu vývoje hodnot hráče během sezony nebo v úsecích sezóny.",
          },
        ],
        en: [],
      },
      games_h2h: {
        id: "games_h2h",
        pageId: "games",
        subPageId: "h2h",
        cz: [
          {
            title: "Zkoumejte nejčastější match-up",
            text: "<b>Velikost kruhu</b> značí čas, který hráči proti sobě strávili na ledě - <b>najetím myší na největší kruhy</b> tedy zjistíte, jak si nejčastěji nastupující hráči proti sobě vedli, kdo častěji střílel a kdo si vytvořil více šancí a očekávaných gólů.",
          },
        ],
        en: [],
      },
      "games_data-settings": {
        id: "games_data-settings",
        pageId: "games",
        subPageId: "data-settings",
        cz: [
          {
            title:
              "Nevíte, které metriky zkoumat? Zkuste přednastavené šablony!",
            text: "Vytvořili jsme pro vás několik <b>přednastavených datových šablon</b>, které obsahují doporučené metriky pro zkoumání konkrétní oblasti hry. Vyberte si přes tlačítko <b>Vybrat datovou šablonu</b>.",
          },
          {
            title: "Uložte si vaše oblíbené metriky do šablony!",
            text: "Pokud velmi často pracujete se stejnými metrikami, bude se vám hodit tlačítko <b>Uložit datovou šablonu</b>, to totiž uloží aktuálně vybrané metriky do šablony, kterou můžete pojmenovat a příště zvolit jedním kliknutím v rámci tlačítka <b>Vybrat datovou šablonu</b>.",
          },
        ],
        en: [],
      },
      teams_tabs: {
        id: "teams_tabs",
        pageId: "teams",
        subPageId: "tabs",
        cz: [
          {
            title: "Srovnejte týmy v rámci ligy",
            text: "Kliknutím na tlačítko <b>Ligové pořadí</b> se v tabulce vedle hodnot zobrazí <b>pořadí daného týmu z pohledu konkrétní metriky v lize</b>, což umožní jednoduché srovnání dosažených hodnot v kontextu celé ligy.",
          },
          {
            title: "Podrobně analyzujte tým",
            text: "Najetím na <b>ikonku lupy</b> nalevo od jména týmu v tabulce je možné prozkoumat daný tým do hloubky. <b>Gamelog</b> slouží ke srovnání statistik po jednotlivých odehraných zápasech, <b>Trend</b> pro analýzu vývoje hodnot týmu během sezony nebo v úsecích sezóny.",
          },
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      teams_gamelog: {
        id: "teams_gamelog",
        pageId: "teams",
        subPageId: "gamelog",
        cz: [
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      teams_trend: {
        id: "teams_trend",
        pageId: "teams",
        subPageId: "trend",
        cz: [
          {
            title: "Použijte datové šablony",
            text: "Kromě možnosti zvolení si statistik v tabulce ručně přes tlačítko <b>Vybrat vlastní data</b> jsou v Hockey Logic přednastavené některé <b>Datové šablony</b>  – obsahují doporučené statistiky pro zkoumání různých oblastí. Další <b>vlastní datové šablony</b> je také možné nadefinovat ručně a uložit si je pro příští použití. Na stránce s výběrem - po kliknutí na Vybrat vlastní data - atributů je třeba zvolit statistiky, které je možné uložit stisknutím tlačítka <b>Uložit datovou šablonu</b> a pojmenovat ji. Poté takto uloženou datovou šablonu můžete vybírat přímo v menu filtru Datové šablony a nemusíte metriky znovu ručně zadávat přes tlačítko Vybrat vlastní data.",
          },
        ],
        en: [],
      },
      "teams_data-settings": {
        id: "teams_data-settings",
        pageId: "teams",
        subPageId: "data-settings",
        cz: [
          {
            title:
              "Nevíte, které metriky zkoumat? Zkuste přednastavené šablony!",
            text: "Vytvořili jsme pro vás několik <b>přednastavených datových šablon</b>, které obsahují doporučené metriky pro zkoumání konkrétní oblasti hry. Vyberte si přes tlačítko <b>Vybrat datovou šablonu</b>.",
          },
          {
            title: "Uložte si vaše oblíbené metriky do šablony!",
            text: "Pokud velmi často pracujete se stejnými metrikami, bude se vám hodit tlačítko <b>Uložit datovou šablonu</b>, to totiž uloží aktuálně vybrané metriky do šablony, kterou můžete pojmenovat a příště zvolit jedním kliknutím v rámci tlačítka <b>Vybrat datovou šablonu</b>.",
          },
        ],
        en: [],
      },
    },
    functions: {
      players_tabs: {
        id: "players_tabs",
        pageId: "players",
        subPageId: "tabs",
        items: [
          {
            id: "0",
            title: {
              cz: "Ligový percentil",
              en: "",
            },
            cz: [
              {
                text: "Stisknutím tlačítka <b>Ligový percentil</b> se v tabulce vedle hodnot zobrazí hodnota percentilu, která porovnává hodnoty se zbytkem ligy. Indikuje, že hráč je <b>lepší než zobrazené procento ostatních hráčů v lize</b> – nejlepší hráč v lize tedy dosáhne percentilu 100, nejhorší 0 a prostřední hráč 50. U individuálních statistik se srovnávají pouze hráči na stejné pozici, u on-ice statistik je srovnání napříč pozicemi.",
              },
              {
                text: "<b>Příklad</b>: Hodnota ligového percentilu u atributu G/60 je například 83. Pak to znamená, že hráč je lepší než 83 % hráčů ligy v četnosti vstřelených gólů za 60 minut hry.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Filtrovat pozice",
              en: "",
            },
            cz: [
              {
                text: "<b>Hráče zobrazované v tabulce</b> je možné omezit pouze na útočníky, nebo obránce - stačí ve výběru <b>Filtrovat pozice</b> zvolit požadovanou pozici.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Vybrat vlastní data",
              en: "",
            },
            cz: [
              {
                text: "Tlačítko <b>Vybrat vlastní data</b> otevře stránku, na níž je možné zvolit statistiky, které budou zobrazeny v tabulce. Po vybrání <b>Typu dat</b> v horním panelu se zobrazí všechny dostupné statistiky rozčleněné podle typu a významu.",
              },
              {
                text: "Zvolené statistiky je nakonec třeba potvrdit kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Lupa",
              en: "",
            },
            cz: [
              {
                text: "Najetím na <b>ikonku lupy</b> nalevo od jména hráče v tabulce je možné prozkoumat daného hráče do hloubky. <b>Kombinace</b> slouží pro analýzu nejčastějších spoluhráčů a protihráčů, <b>Gamelog</b> pro srovnání statistik po jednotlivých odehraných zápasech, <b>Trend</b> pro analýzu vývoje hodnot hráče během sezony nebo v úsecích sezóny a <b>Video</b> odkáže na stránku s Videomapami daného hráče.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Více filtrů",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>základních filtrů</b> jako je Počet hráčů na ledě nebo Minimální odehraný čas na ledě je možné pomocí tlačítka <b>Více filtrů</b> zobrazit další možnosti filtrování dat v tabulce - podle stavu skóre, soupeře, času v utkání a další.",
              },
              {
                text: "Nová data zobrazíte kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
        ],
      },
      players_gamelog: {
        id: "players_gamelog",
        pageId: "players",
        subPageId: "gamelog",
        items: [
          {
            id: "0",
            title: {
              cz: "Vybrat vlastní data",
              en: "",
            },
            cz: [
              {
                text: "Tlačítko <b>Vybrat vlastní data</b> otevře stránku, na níž je možné zvolit statistiky, které budou zobrazeny v tabulce. Po vybrání <b>Typu dat</b> v horním panelu se zobrazí všechny dostupné statistiky rozčleněné podle typu a významu.",
              },
              {
                text: "Zvolené statistiky je nakonec třeba potvrdit kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
        ],
      },
      players_trend: {
        id: "players_trend",
        pageId: "players",
        subPageId: "trend",
        items: [],
      },
      "players_player-card": {
        id: "players_player-card",
        pageId: "players",
        subPageId: "player-card",
        items: [
          {
            id: "0",
            title: {
              cz: "Základní informace o hráči",
              en: "",
            },
            cz: [
              {
                text: "Pod jménem zkoumaného hráče se nachází jeho <b>základní údaje</b> spolu s odehraným časem na ledě <b>TOI</b> ve hře 5 na 5 a odehranými zápasy <b>GP</b>.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Bloky Karty hráče",
              en: "",
            },
            cz: [
              {
                text: "Karta hráče je rozdělena do <b>pěti bloků</b> popisujících Útok, Obranu a Tranzici ve hře 5 na 5, poté Přesilovky a na závěr Oslabení. Každý blok obsahuje vybrané metriky s indikátory toho, jak si hráč v metrikách vede v rámci ligy pomocí <b>ligového percentilu</b> - škála, barva a číslo na konci řádku určuje, kolik procent hráčů v lize je horších než zkoumaný hráč. V bloku vpravo nahoře se pak nachází <b>souhrnný percentil</b> shrnující hráčovy výkony z pohledu daného bloku opět ve formě percentilu - tedy nejlepší hráč v lize bude mít hodnotu percentilu 100 a nejhorší 0. Veškeré percentily jsou počítány pro <b>hráče, kteří dosáhli požadované hranice odehraných minut</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Obsah bloků",
              en: "",
            },
            cz: [
              {
                text: "Každý blok obsahuje 7 metrik, které byly sestaveny tak, aby <b>co nejlépe a komplexně popisovaly hráčovy výkony</b> z pohledu dané herní činnosti. Kromě popisku metriky lze najetím na barevnou škálu zobrazit <b>zkratku využité metriky a přímo její hodnotu</b>.",
              },
            ],
            en: [],
          },
        ],
      },
      "players_compare-players": {
        id: "players_compare-players",
        pageId: "players",
        subPageId: "compare-players",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr hráče k porovnání",
              en: "",
            },
            cz: [
              {
                text: "Hráče pro porovnání lze vybírat pomocí polí, do nichž lze buď přímo <b>vepsat jméno hráče</b>, nebo <b>vybrat jméno ze seznamu</b>. Výběr je následně třeba potvrdit kliknutím na tlačítko <b>Vybrat</b>.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Bloky Karty hráče",
              en: "",
            },
            cz: [
              {
                text: "Karta hráče je rozdělena do <b>pěti bloků</b> popisujících Útok, Obranu a Tranzici ve hře 5 na 5, poté Přesilovky a na závěr Oslabení. Každý blok obsahuje vybrané metriky s indikátory toho, jak si hráč v metrikách vede v rámci ligy pomocí <b>ligového percentilu</b> - škála, barva a číslo na konci řádku určuje, kolik procent hráčů v lize je horších než zkoumaný hráč. V bloku vpravo nahoře se pak nachází <b>souhrnný percentil</b> shrnující hráčovy výkony z pohledu daného bloku opět ve formě percentilu - tedy nejlepší hráč v lize bude mít hodnotu percentilu 100 a nejhorší 0. Veškeré percentily jsou počítány pro <b>hráče, kteří dosáhli požadované hranice odehraných minut</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Obsah bloků",
              en: "",
            },
            cz: [
              {
                text: "Každý blok obsahuje 7 metrik, které byly sestaveny tak, aby <b>co nejlépe a komplexně popisovaly hráčovy výkony</b> z pohledu dané herní činnosti. Kromě popisku metriky lze najetím na barevnou škálu zobrazit <b>zkratku využité metriky a přímo její hodnotu</b>.",
              },
            ],
            en: [],
          },
        ],
      },
      "players_similarity-players": {
        id: "players_similarity-players",
        pageId: "players",
        subPageId: "similarity-players",
        items: [
          {
            id: "0",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Vybrat hráče",
              en: "",
            },
            cz: [
              {
                text: "Hráč, jenž má být srovnávám, je vybrán v seznamu <b>Vybrat hráče</b>. Následně je možné skrze výběr v seznamu <b>Filtrovat pozice</b> hledat podobné hráče pouze v rámci hráčských pozic, stejně tak seznam <b>Držení hole</b> umožňuje hledat podobné hráče s konkrétním držení hole.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Podobnost statistiky",
              en: "",
            },
            cz: [
              {
                text: "Hodnota <b>Podobnosti statistiky</b> vyjadřuje, jak moc je hodnota statistiky hráče shodná s vybraným hráčem. Zelená hodnota 100 značí přesnou shodu.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Celková podobnost statistik",
              en: "",
            },
            cz: [
              {
                text: "Ze všech <b>Podobností statistik</b> pro zvolené ukazatele je vypočítán průměr, který vyjadřuje <b>Celkovou podobnost hráčů</b> v rámci zvolených statistik.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Pozitivní odchylka",
              en: "",
            },
            cz: [
              {
                text: "Ukazatel <b>Pozitivní odchylky</b> značí, zda je ve vybraných statistikách lepší spíše srovnávaný hráč (nízké hodnoty % a převažující bílý barevný pruh, nebo hráč v řádku tabulky (vysoké hodnoty % a převažující zelený barevný pruh).",
              },
            ],
            en: [],
          },
        ],
      },
      "players_data-settings": {
        id: "players_data-settings",
        pageId: "players",
        subPageId: "data-settings",
        items: [
          {
            id: "0",
            title: {
              cz: "Typy dat",
              en: "",
            },
            cz: [
              {
                text: "Statistiky jsme rozčlenili do <b>skupin</b> podle toho, jaké oblasti hry se týkají.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Parametry události",
              en: "",
            },
            cz: [
              {
                text: "Statistiky je možné <b>filtrovat</b> podle různých parametrů. V sekci <b>Parametry události</b> jsou zobrazeny dostupné filtry, podle kterých můžete metriky detailněji filtrovat. Po zvolení jednoho z parametrů tedy můžete zvolit statistiky s danými parametry – parametr se ve zkratce statistiky zobrazí ve formě <b>předpony</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Data hráče",
              en: "",
            },
            cz: [
              {
                text: "<b>Individuální statistiky</b> neboli Data hráče se týkají událostí, které zaznamenal sledovaný hráč.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Data týmu s hráčem na ledě",
              en: "",
            },
            cz: [
              {
                text: "<b>On-ice statistiky</b> neboli Data týmu s hráčem na ledě se týkají událostí, které zaznamenali hráči týmu sledovaného hráče v době, kdy byl sledovaný hráč na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Časově přepočtené hodnoty",
              en: "",
            },
            cz: [
              {
                text: "Statistiky, které jsou <b>Časově přepočtené</b> značí průměrný počet událostí za 60 minut pobytu hráče na ledě, tedy odpovídá na otázku <b>Jak často?</b>. Časový přepočet umožňuje srovnání hráčů s nestejným odehraným časem na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Relativní ke zbytku týmu",
              en: "",
            },
            cz: [
              {
                text: "Statistiky <b>Relativní ke zbytku týmu</b> vždy značí rozdíl v konkrétní on-ice metrice v případě, že hráč je na ledě a v případě, že hráč na ledě není.",
              },
              {
                text: "Zjednodušeně tedy vyjadřují vliv hráče na hru týmu z pohledu dané statistiky.",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Přednastavené datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Druhou možností výběru statistik v tabulce je zvolení jedné z uživatelsky nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
          {
            id: "7",
            title: {
              cz: "Uložit datový set",
              en: "",
            },
            cz: [
              {
                text: "Po stisknutí tohoto tlačítka jsou aktuálně vybrané statistiky uloženy do <b>Datového šablony</b>, kterou je možné pojmenovat a později jednoduše jedním kliknutím zvolit.",
              },
            ],
            en: [],
          },
          {
            id: "8",
            title: {
              cz: "Minimální hodnota",
              en: "",
            },
            cz: [
              {
                text: "Po rozbalení <b>Minimální hodnoty</b> je možné data v tabulce omezit pouze na ty s minimálně takovou hodnotou zvolené statistiky, jakou zadáte.",
              },
            ],
            en: [],
          },
        ],
      },
      formations_pairs: {
        id: "formations_pairs",
        pageId: "formations",
        subPageId: "pairs",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr typu statistik",
              en: "",
            },
            cz: [
              {
                text: "Sekce <b>Dvojice</b> nabízí 3 druhy statistik, které lze vybrat pomocí barevných přepínačů. Jsou vždy odlišeny barevně v prvním sloupci.",
              },
              {
                text: "<b>Zelené řádky</b> zobrazují hodnoty statistik vybraného hráče, když byl na ledě s daným spoluhráčem.",
              },
              {
                text: "<b>Červené řádky</b> zobrazují hodnoty statistik vybraného hráče, když nebyl na ledě s daným spoluhráčem.",
              },
              {
                text: "<b>Fialové řádky</b> zobrazují hodnoty statistik daného spoluhráče, když nebyl na ledě s vybraným hráčem.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Ligový percentil",
              en: "",
            },
            cz: [
              {
                text: "Stisknutím tlačítka <b>Ligový percentil</b> se v tabulce vedle hodnot zobrazí hodnota percentilu, která porovnává hodnoty se zbytkem ligy. Indikuje, že hráč je <b>lepší než zobrazené procento ostatních hráčů v lize</b> – nejlepší hráč v lize tedy dosáhne percentilu 100, nejhorší 0 a prostřední hráč 50. U individuálních statistik se srovnávají pouze hráči na stejné pozici, u on-ice statistik je srovnání napříč pozicemi.",
              },
              {
                text: "<b>Příklad</b>: Hodnota ligového percentilu u atributu G/60 je například 83. Pak to znamená, že hráč je lepší než 83 % hráčů ligy v četnosti vstřelených gólů za 60 minut hry.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Filtrovat pozice",
              en: "",
            },
            cz: [
              {
                text: "<b>Hráče zobrazované v tabulce</b> je možné omezit pouze na útočníky, nebo obránce - stačí ve výběru <b>Filtrovat pozice</b> zvolit požadovanou pozici.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
        ],
      },
      formations_formations: {
        id: "formations_formations",
        pageId: "formations",
        subPageId: "formations",
        items: [
          {
            id: "0",
            title: {
              cz: "Ligový percentil",
              en: "",
            },
            cz: [
              {
                text: "Stisknutím tlačítka <b>Ligový percentil</b> se v tabulce vedle hodnot zobrazí hodnota percentilu, která porovnává hodnoty se zbytkem ligy. Indikuje, že hráč je <b>lepší než zobrazené procento ostatních hráčů v lize</b> – nejlepší hráč v lize tedy dosáhne percentilu 100, nejhorší 0 a prostřední hráč 50. U individuálních statistik se srovnávají pouze hráči na stejné pozici, u on-ice statistik je srovnání napříč pozicemi.",
              },
              {
                text: "<b>Příklad</b>: Hodnota ligového percentilu u atributu G/60 je například 83. Pak to znamená, že hráč je lepší než 83 % hráčů ligy v četnosti vstřelených gólů za 60 minut hry.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Vybrat vlastní data",
              en: "",
            },
            cz: [
              {
                text: "Tlačítko <b>Vybrat vlastní data</b> otevře stránku, na níž je možné zvolit statistiky, které budou zobrazeny v tabulce. Po vybrání <b>Typu dat</b> v horním panelu se zobrazí všechny dostupné statistiky rozčleněné podle typu a významu.",
              },
              {
                text: "Zvolené statistiky je nakonec třeba potvrdit kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
        ],
      },
      "formations_player-combinations": {
        id: "formations_player-combinations",
        pageId: "formations",
        subPageId: "player-combinations",
        items: [
          {
            id: "0",
            title: {
              cz: "Filtrovat pozice",
              en: "",
            },
            cz: [
              {
                text: "<b>Hráče zobrazované v tabulce</b> je možné omezit pouze na útočníky, nebo obránce - stačí ve výběru <b>Filtrovat pozice</b> zvolit požadovanou pozici.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Hráči v tabulce",
              en: "",
            },
            cz: [
              {
                text: "Blok dvou tlačítek <b>Hráči v tabulce</b> umoňuje přepnout zobrazení tabulky - tlačítko <b>Spoluhráči</b> zobrazuje tabulku nejčastěji nastupujících spoluhráčů s vybranou hráčskou kombinací a jejich statistik, tlačítko <b>Protihráči</b> zobrazuje nejčastější soupeře, s nimiž vybraná hráčská kombinace na ledě střetla, a hodnoty statistik srovnávaných hráčů proti danému protihráči.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Vybrat vlastní data",
              en: "",
            },
            cz: [
              {
                text: "Tlačítko <b>Vybrat vlastní data</b> otevře stránku, na níž je možné zvolit statistiky, které budou zobrazeny v tabulce. Po vybrání <b>Typu dat</b> v horním panelu se zobrazí všechny dostupné statistiky rozčleněné podle typu a významu.",
              },
              {
                text: "Zvolené statistiky je nakonec třeba potvrdit kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
        ],
      },
      "formations_data-settings": {
        id: "formations_data-settings",
        pageId: "formations",
        subPageId: "data-settings",
        items: [
          {
            id: "0",
            title: {
              cz: "Typy dat",
              en: "",
            },
            cz: [
              {
                text: "Statistiky jsme rozčlenili do <b>skupin</b> podle toho, jaké oblasti hry se týkají.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Parametry události",
              en: "",
            },
            cz: [
              {
                text: "Statistiky je možné <b>filtrovat</b> podle různých parametrů. V sekci <b>Parametry události</b> jsou zobrazeny dostupné filtry, podle kterých můžete metriky detailněji filtrovat. Po zvolení jednoho z parametrů tedy můžete zvolit statistiky s danými parametry – parametr se ve zkratce statistiky zobrazí ve formě <b>předpony</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Data hráče",
              en: "",
            },
            cz: [
              {
                text: "<b>Individuální statistiky</b> neboli Data hráče se týkají událostí, které zaznamenal sledovaný hráč.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Data týmu s hráčem na ledě",
              en: "",
            },
            cz: [
              {
                text: "<b>On-ice statistiky</b> neboli Data týmu s hráčem na ledě se týkají událostí, které zaznamenali hráči týmu sledovaného hráče v době, kdy byl sledovaný hráč na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Časově přepočtené hodnoty",
              en: "",
            },
            cz: [
              {
                text: "Statistiky, které jsou <b>Časově přepočtené</b> značí průměrný počet událostí za 60 minut pobytu hráče na ledě, tedy odpovídá na otázku <b>Jak často?</b>. Časový přepočet umožňuje srovnání hráčů s nestejným odehraným časem na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Relativní ke zbytku týmu",
              en: "",
            },
            cz: [
              {
                text: "Statistiky <b>Relativní ke zbytku týmu</b> vždy značí rozdíl v konkrétní on-ice metrice v případě, že hráč je na ledě a v případě, že hráč na ledě není.",
              },
              {
                text: "Zjednodušeně tedy vyjadřují vliv hráče na hru týmu z pohledu dané statistiky.",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Přednastavené datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Druhou možností výběru statistik v tabulce je zvolení jedné z uživatelsky nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
          {
            id: "7",
            title: {
              cz: "Uložit datový set",
              en: "",
            },
            cz: [
              {
                text: "Po stisknutí tohoto tlačítka jsou aktuálně vybrané statistiky uloženy do <b>Datového šablony</b>, kterou je možné pojmenovat a později jednoduše jedním kliknutím zvolit.",
              },
            ],
            en: [],
          },
          {
            id: "8",
            title: {
              cz: "Minimální hodnota",
              en: "",
            },
            cz: [
              {
                text: "Po rozbalení <b>Minimální hodnoty</b> je možné data v tabulce omezit pouze na ty s minimálně takovou hodnotou zvolené statistiky, jakou zadáte.",
              },
            ],
            en: [],
          },
        ],
      },
      videomaps_shots: {
        id: "videomaps_shots",
        pageId: "videomaps",
        subPageId: "shots",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr hráčů",
              en: "",
            },
            cz: [
              {
                text: "Pomocí pěti tlačítek je možné navolit hráče ke sledování.",
              },
              {
                text: "<b>Tlačítko ON</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, když byl vybraný hráč na ledě.",
              },
              {
                text: "<b>Tlačítko OFF</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, ve všech situacích, kdy hráč na ledě nebyl.",
              },
              {
                text: "Nevýběr žádného hráče znamená analýzu celého týmu.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Výběr zápasů",
              en: "",
            },
            cz: [
              {
                text: "<b>Panel v levé části</b> stránky umožňuje výběr všech zápasů nebo několika konkrétních.",
              },
              {
                text: "Číslo u každého zápasu značí <b>počet událostí</b>, <b>ikonka videa</b> pak umožní přehrání a stažení videa všech událostí daného zápasu.",
              },
              {
                text: "Pomocí tlačítka <b>Přehrát vybrané zápasy</b> v dolní části je možné přehrát a stáhnout video událostí všech vybraných zápasů.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Mapa střel",
              en: "",
            },
            cz: [
              {
                text: "Jednotlivé střely jsou symbolizovány <b>kruhy</b> s případným označením gólu. Po <b>kliknutí myší na kruh střely</b> se zobrazí detail o střele včetně možnosti přehrát danou střelu na videu. Při výběru více hráčů jsou střely hráčů odlišeny barevně.",
              },
              {
                text: "Dolní panel nebezpečnosti střel zobrazuje čas na ledě (<b>TOI</b>) podle výběru, součet očekávaných gólů ze střel (<b>xG</b>) a počet vstřelených gólů (<b>G</b>). Po rozkliknutí šipkou se zobrazí členění střel dle <b>Nebezpečnosti</b> – střel s vysokou nebezpečností je v průměru 10 % a padne z nich 50 % gólů, střel se střední nebezpečností je v průměru 20 % a padne z nich 30 % gólů, střel s nízkou nebezpečností je v průměru 70 % a padne z nich 20 % gólů.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Kdo střílel",
              en: "",
            },
            cz: [
              {
                text: "Skupina tlačítek v bloku <b>Kdo střílel</b> umožňuje vybrat zobrazení individuální mapy střel hráče (tlačítko Hráč), mapy střel týmu (tlačítko Tým), či mapy střel soupeřů (tlačítko Soupeř).",
              },
              {
                text: "Při zvolení tlačítka <b>Tým</b> a zároveň výběru hráče v jednom z 5 polí se zobrazí střely týmu s vybraným hráčem na ledě.",
              },
              {
                text: "Při zvolení tlačítka <b>Soupeř</b> a zároveň výběru hráče v jednom z 5 polí se zobrazí střely soupeře, když byl vybraný hráč na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Kategorie střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Kategorie střel</b> umožňují zobrazit na mapě Střelecké pokusy nebo pouze střely Na branku, či Góly.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Lokace střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Lokace střel<Pb> umožňují zobrazit na mapě Všechny střely, nebo pouze střely Ze slotu.",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Typy střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Typy střel</b> umožňují zobrazit na mapě Všechny střely, pouze střely Z první, nebo pouze Dorážky.",
              },
            ],
            en: [],
          },
          {
            id: "7",
            title: {
              cz: "Nebezpečnost střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Nebezpečnost střel</b> umožňují zobrazit na mapě Všechny střely, pouze střely s Vysokou nebezpečností (takových střel je 10 %, padne z nich cca 50 % gólů s průměrnou úspěšností i xG 26 %), se Střední nebezpečností (takových střel je 20 %, padne z nich cca 30 % gólů s průměrnou úspěšností i xG 8 %), nebo s Nízkou nebezpečností (takových střel je 70 %, padne z nich cca 20 % gólů s průměrnou úspěšností i xG 1,7 %).",
              },
            ],
            en: [],
          },
          {
            id: "8",
            title: {
              cz: "Typy akce",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Typy akce</b> umožňují zobrazit na mapě Všechny střely, pouze střely z Forčeku (střela je vyslána do 5s po zisku puku v souboji nebo zachycením v útočném pásmu), z Rychlého útoku (střela je vyslána do 5s po vstupu týmu do pásma), z Dlouhého útoku (střela je vyslána po více než 5s pobytu s pukem v útočném pásmu), z Přečíslení, nebo Po vhazování (střela je vyslána do 5s po vyhraném buly v útočném pásmu).",
              },
            ],
            en: [],
          },
          {
            id: "9",
            title: {
              cz: "Zóny branky",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Zóny branky</b> umožňují zobrazit na mapě pouze střely do vybrané zóny branky.",
              },
            ],
            en: [],
          },
          {
            id: "10",
            title: {
              cz: "Uložit mapu",
              en: "",
            },
            cz: [
              {
                text: "Po stisknutí tlačítka <b>Uložit mapu</b> se stáhne aktuální stránka mapy střel ve formátu .png.",
              },
            ],
            en: [],
          },
          {
            id: "11",
            title: {
              cz: "Srovnání",
              en: "",
            },
            cz: [
              {
                text: "Dolní část stránky nabízí minimapy pro srovnání střel podle <b>Typu akce</b>, <b>Nebezpečnosti střel</b>, <b>Hráčů spolu</b>, nebo <b>Posledních 5 zápasů</b> – vždy s možností zobrazit panel <b>Nebezpečnosti střel</b>.",
              },
            ],
            en: [],
          },
        ],
      },
      videomaps_heatmap: {
        id: "videomaps_heatmap",
        pageId: "videomaps",
        subPageId: "heatmap",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr hráčů",
              en: "",
            },
            cz: [
              {
                text: "Pomocí pěti tlačítek je možné navolit hráče ke sledování.",
              },
              {
                text: "<b>Tlačítko ON</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, když byl vybraný hráč na ledě.",
              },
              {
                text: "<b>Tlačítko OFF</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, ve všech situacích, kdy hráč na ledě nebyl.",
              },
              {
                text: "Nevýběr žádného hráče znamená analýzu celého týmu.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Kdo střílel",
              en: "",
            },
            cz: [
              {
                text: "Skupina tlačítek v bloku <b>Kdo střílel</b> umožňuje vybrat zobrazení individuální mapy střel hráče (tlačítko Hráč), mapy střel týmu (tlačítko Tým), či mapy střel soupeřů (tlačítko Soupeř).",
              },
              {
                text: "Při zvolení tlačítka <b>Tým</b> a zároveň výběru hráče v jednom z 5 polí se zobrazí střely týmu s vybraným hráčem na ledě.",
              },
              {
                text: "Při zvolení tlačítka <b>Soupeř</b> a zároveň výběru hráče v jednom z 5 polí se zobrazí střely soupeře, když byl vybraný hráč na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Porovnat s průměrem TELH",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Porovnat s průměrem TELH</b> umožňují zobrazit heatmapu srovnávající <b>četnost střel</b> (tlačítko Produkce střel) - následně plochy na mapě hřiště, které jsou <b>zbarveny červeně</b> znamenají, že četnost střel vybraného týmu ve zvolené situaci je z těchto lokací vyšší, než je průměr ligy, naopak místa <b>zbarvená modře</b> značí, že z těchto lokací je četnost střel nižší, než je průměr ligy.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Infobar v mapce hřiště",
              en: "",
            },
            cz: [
              {
                text: "<b>TOI</b>: čas odehraný ve zvolené situaci vybraným týmem či hráči",
              },
              {
                text: "<b>xG</b>: očekávané góly dle víceletého průměru všech střel v lize",
              },
              {
                text: "<b>G</b>: skutečně vstřelené góly",
              },
              {
                text: "Pokud je hodnota vstřelených gólů (G) vyšší než hodnota očekávaných gólů (xG) u zvoleného týmu znamená, že zvolený tým dokázal své střelecké příležitosti proměňovat s větší úspěšností než je víceletý průměr ligy z totožných střeleckých příležitostí, což je zpravidla dáno střeleckým štěstím nebo vyšším střeleckým umem hráčů zvoleného týmu. Opačný případ, kdy je hodnota G nižší než hodnota xG značí, že zvolený tým nebyl schopen proměnit své střelecké příležitosti v míře, jaká by byla pro tyto střelecké příležitosti očekávána dle dlouhodobého průměru TELH, ať už z důvodu střelecké smůly či nižšího střeleckého umu.",
              },
              {
                text: "Po rozkliknutí se zobrazí <b>přehled střel podle Nebezpečnosti</b> – střel s Vysokou nebezpečností je v lize v průměru 10 %, padne z nich cca 50 % gólů s průměrnou úspěšností i xG 26 %, střel se Střední nebezpečností je v lize v průměru 120 %, padne z nich cca 30 % gólů s průměrnou úspěšností i xG 8 % a střel s Nízkou nebezpečností je v lize v průměru 170 %, padne z nich cca 20 % gólů s průměrnou úspěšností i xG 1,7 %.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Kategorie střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Kategorie střel</b> umožňují zobrazit na mapě Střelecké pokusy nebo pouze střely Na branku, či Góly.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Nebezpečnost střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Nebezpečnost střel</b> umožňují zobrazit na mapě Všechny střely, pouze střely s Vysokou nebezpečností (takových střel je 10 %, padne z nich cca 50 % gólů s průměrnou úspěšností i xG 26 %), se Střední nebezpečností (takových střel je 20 %, padne z nich cca 30 % gólů s průměrnou úspěšností i xG 8 %), nebo s Nízkou nebezpečností (takových střel je 70 %, padne z nich cca 20 % gólů s průměrnou úspěšností i xG 1,7 %).",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Typy akce",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Typy akce</b> umožňují zobrazit na mapě Všechny střely, pouze střely z Forčeku (střela je vyslána do 5s po zisku puku v souboji nebo zachycením v útočném pásmu), z Rychlého útoku (střela je vyslána do 5s po vstupu týmu do pásma), z Dlouhého útoku (střela je vyslána po více než 5s pobytu s pukem v útočném pásmu), z Přečíslení, nebo Po vhazování (střela je vyslána do 5s po vyhraném buly v útočném pásmu).",
              },
            ],
            en: [],
          },
        ],
      },
      videomaps_passes: {
        id: "videomaps_passes",
        pageId: "videomaps",
        subPageId: "passes",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr hráčů",
              en: "",
            },
            cz: [
              {
                text: "Pomocí pěti tlačítek je možné navolit hráče ke sledování.",
              },
              {
                text: "<b>Tlačítko ON</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, když byl vybraný hráč na ledě.",
              },
              {
                text: "<b>Tlačítko OFF</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, ve všech situacích, kdy hráč na ledě nebyl.",
              },
              {
                text: "Nevýběr žádného hráče znamená analýzu celého týmu.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Mapa přihrávek",
              en: "",
            },
            cz: [
              {
                text: "Jednotlivé přihrávky jsou symbolizovány <b>šipkami</b> z kterých vede čára ve směru přihrávky se střele symbolizované kruhem s případným označením gólu. Po <b>kliknutí myší na šipku</b> se zobrazí detail o přihrávce i střele včetně možnosti přehrát danou přihrávku na videu. Při výběru více hráčů jsou přihrávky hráčů odlišeny barevně.",
              },
              {
                text: "Dolní panel nebezpečnosti střel zobrazuje čas na ledě (<b>TOI</b>) podle výběru, součet očekávaných gólů ze střel (<b>xG</b>) a počet vstřelených gólů (<b>G</b>).",
              },
              {
                text: "Po rozkliknutí šipkou se zobrazí členění střel dle <b>Nebezpečnosti</b> – střel s vysokou nebezpečností je v průměru 10 % a padne z nich 50 % gólů, střel se střední nebezpečností je v průměru 20 % a padne z nich 30 % gólů, střel s nízkou nebezpečností je v průměru 70 % a padne z nich 20 % gólů.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Kdo přihrával",
              en: "",
            },
            cz: [
              {
                text: "Skupina tlačítek v bloku <b>Kdo přihrával</b> umožňuje vybrat zobrazení individuální mapy přihrávek na střely hráče (tlačítko Hráč), mapy přihrávek na střely týmu (tlačítko Tým), či mapy přihrávek na střely soupeřů (tlačítko Soupeř).",
              },
              {
                text: "Při zvolení tlačítka <b>Tým</b> a zároveň výběru hráče v jednom z 5 polí se zobrazí přihrávek na střely týmu s vybraným hráčem na ledě.",
              },
              {
                text: "Při zvolení tlačítka <b>Soupeř</b> a zároveň výběru hráče v jednom z 5 polí se zobrazí přihrávky soupeře na střely, když byl vybraný hráč na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Kategorie střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Kategorie střel</b> umožňují zobrazit na mapě Střelecké pokusy nebo pouze střely Na branku, či Góly.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Lokace střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Lokace střel<Pb> umožňují zobrazit na mapě Všechny střely, nebo pouze střely Ze slotu.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Typy přihrávek",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Typy přihrávek</b> umožňují zobrazit na mapě Všechny přihrávky, přihrávky Zpoza branky, Křižné přihrávky, nebo přihrávky Na střelu z první",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Nebezpečnost střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Nebezpečnost střel</b> umožňují zobrazit na mapě Všechny střely, pouze střely s Vysokou nebezpečností (takových střel je 10 %, padne z nich cca 50 % gólů s průměrnou úspěšností i xG 26 %), se Střední nebezpečností (takových střel je 20 %, padne z nich cca 30 % gólů s průměrnou úspěšností i xG 8 %), nebo s Nízkou nebezpečností (takových střel je 70 %, padne z nich cca 20 % gólů s průměrnou úspěšností i xG 1,7 %).",
              },
            ],
            en: [],
          },
          {
            id: "7",
            title: {
              cz: "Typy akce",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Typy akce</b> umožňují zobrazit na mapě Všechny střely, pouze střely z Forčeku (střela je vyslána do 5s po zisku puku v souboji nebo zachycením v útočném pásmu), z Rychlého útoku (střela je vyslána do 5s po vstupu týmu do pásma), z Dlouhého útoku (střela je vyslána po více než 5s pobytu s pukem v útočném pásmu), z Přečíslení, nebo Po vhazování (střela je vyslána do 5s po vyhraném buly v útočném pásmu).",
              },
            ],
            en: [],
          },
        ],
      },
      videomaps_faceoffs: {
        id: "videomaps_faceoffs",
        pageId: "videomaps",
        subPageId: "faceoffs",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr hráčů na vhazování",
              en: "",
            },
            cz: [
              {
                text: "Pomocí pěti tlačítek je možné navolit <b>hráče ke sledování</b>. Hráči jsou v seznamu seřazeni sestupně podle počtu účastí na vhazování.",
              },
              {
                text: "Nevýběr žádného hráče znamená analýzu celého týmu.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Výběr zápasů",
              en: "",
            },
            cz: [
              {
                text: "<b>Panel v levé části</b> stránky umožňuje výběr všech zápasů nebo několika konkrétních.",
              },
              {
                text: "Číslo u každého zápasu značí <b>počet událostí</b>, <b>ikonka videa</b> pak umožní přehrání a stažení videa všech událostí daného zápasu.",
              },
              {
                text: "Pomocí tlačítka <b>Přehrát vybrané zápasy</b> v dolní části je možné přehrát a stáhnout video událostí všech vybraných zápasů.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Filtrace vhazování",
              en: "",
            },
            cz: [
              {
                text: "<b>Vhazování</b> zobrazovaná na mapě lze <b>filtrovat</b> dle 3 hledisek - první blok tlačítek umožňuje zobrazit pouze Vyhraná či Prohraná vhazování, druhý blok nabízí zvolit pouze soupeře praváky, nebo leváky a třetí blok nabízí filtrovat vhazování, po nichž následovala střela, střela ze slotu nebo gól. Všechny tyto filtry lze libovolně kombinovat.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Výběr protihráče",
              en: "",
            },
            cz: [
              {
                text: "Vhazování lze také omezit na <b>konkrétního protihráče</b> - k tomu slouží výběr v pravém dolním rohu stránky, kde lze protihráče vybrat. Jsou nabízeni protihráči, kteří nastoupili alespoň k 1 vhazování proti zvolenému týmu nebo hráčům a vedle nich je zobrazen počet vhazování a úspěšnost.",
              },
            ],
            en: [],
          },
        ],
      },
      videomaps_entries: {
        id: "videomaps_entries",
        pageId: "videomaps",
        subPageId: "entries",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr hráčů",
              en: "",
            },
            cz: [
              {
                text: "Pomocí pěti tlačítek je možné navolit hráče ke sledování.",
              },
              {
                text: "<b>Tlačítko ON</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, když byl vybraný hráč na ledě.",
              },
              {
                text: "<b>Tlačítko OFF</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, ve všech situacích, kdy hráč na ledě nebyl.",
              },
              {
                text: "Nevýběr žádného hráče znamená analýzu celého týmu.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Infobar v mapce hřiště",
              en: "",
            },
            cz: [
              {
                text: "<b>TOI</b>: čas odehraný ve zvolené situaci vybraným týmem či hráči",
              },
              {
                text: "<b>xG</b>: očekávané góly dle víceletého průměru všech střel v lize",
              },
              {
                text: "<b>G</b>: skutečně vstřelené góly",
              },
              {
                text: "Pokud je hodnota vstřelených gólů (G) vyšší než hodnota očekávaných gólů (xG) u zvoleného týmu znamená, že zvolený tým dokázal své střelecké příležitosti proměňovat s větší úspěšností než je víceletý průměr ligy z totožných střeleckých příležitostí, což je zpravidla dáno střeleckým štěstím nebo vyšším střeleckým umem hráčů zvoleného týmu. Opačný případ, kdy je hodnota G nižší než hodnota xG značí, že zvolený tým nebyl schopen proměnit své střelecké příležitosti v míře, jaká by byla pro tyto střelecké příležitosti očekávána dle dlouhodobého průměru TELH, ať už z důvodu střelecké smůly či nižšího střeleckého umu.",
              },
              {
                text: "Po rozkliknutí se zobrazí <b>přehled střel podle Nebezpečnosti</b> – střel s Vysokou nebezpečností je v lize v průměru 10 %, padne z nich cca 50 % gólů s průměrnou úspěšností i xG 26 %, střel se Střední nebezpečností je v lize v průměru 120 %, padne z nich cca 30 % gólů s průměrnou úspěšností i xG 8 % a střel s Nízkou nebezpečností je v lize v průměru 170 %, padne z nich cca 20 % gólů s průměrnou úspěšností i xG 1,7 %.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Výběr zápasů",
              en: "",
            },
            cz: [
              {
                text: "<b>Panel v levé části</b> stránky umožňuje výběr všech zápasů nebo několika konkrétních.",
              },
              {
                text: "Číslo u každého zápasu značí <b>počet událostí</b>, <b>ikonka videa</b> pak umožní přehrání a stažení videa všech událostí daného zápasu.",
              },
              {
                text: "Pomocí tlačítka <b>Přehrát vybrané zápasy</b> v dolní části je možné přehrát a stáhnout video událostí všech vybraných zápasů.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Zobrazení vstupů",
              en: "",
            },
            cz: [
              {
                text: "První dva <b>bloky tlačítek</b> slouží ke zvolení, jaké události budou zobrazeny. První blok určí, zda budou zobrazeny vstupy vybraného hráče, celého týmu nebo soupeře. Následný blok pak určuje, zda budou zkoumány kontrolované vstupy do pásma, nebo nahození.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Filtrace vstupů",
              en: "",
            },
            cz: [
              {
                text: "<b>Vstupy</b> zobrazované na mapě lze <b>filtrovat</b> dle 3 hledisek - první blok tlačítek se nachází pod blokem Kategorie vstupu a umožňuje zobrazit vstupy podle jejich výsledku, druhý blok vpravo nahože nabízí zvolit nebezpečnost střely následující po vstupu a třetí blok nabízí filtrovat vstupy, po nichž následovala střela, střela ze slotu nebo gól. Všechny tyto filtry lze libovolně kombinovat.",
              },
            ],
            en: [],
          },
        ],
      },
      videomaps_exits: {
        id: "videomaps_exits",
        pageId: "videomaps",
        subPageId: "exits",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr hráčů",
              en: "",
            },
            cz: [
              {
                text: "Pomocí pěti tlačítek je možné navolit hráče ke sledování.",
              },
              {
                text: "<b>Tlačítko ON</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, když byl vybraný hráč na ledě.",
              },
              {
                text: "<b>Tlačítko OFF</b> v poli pro výběr hráče znamená, že chceme zobrazit mapu, ve všech situacích, kdy hráč na ledě nebyl.",
              },
              {
                text: "Nevýběr žádného hráče znamená analýzu celého týmu.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Infobar v mapce hřiště",
              en: "",
            },
            cz: [
              {
                text: "<b>TOI</b>: čas odehraný ve zvolené situaci vybraným týmem či hráči",
              },
              {
                text: "<b>xG</b>: očekávané góly dle víceletého průměru všech střel v lize",
              },
              {
                text: "<b>G</b>: skutečně vstřelené góly",
              },
              {
                text: "Pokud je hodnota vstřelených gólů (G) vyšší než hodnota očekávaných gólů (xG) u zvoleného týmu znamená, že zvolený tým dokázal své střelecké příležitosti proměňovat s větší úspěšností než je víceletý průměr ligy z totožných střeleckých příležitostí, což je zpravidla dáno střeleckým štěstím nebo vyšším střeleckým umem hráčů zvoleného týmu. Opačný případ, kdy je hodnota G nižší než hodnota xG značí, že zvolený tým nebyl schopen proměnit své střelecké příležitosti v míře, jaká by byla pro tyto střelecké příležitosti očekávána dle dlouhodobého průměru TELH, ať už z důvodu střelecké smůly či nižšího střeleckého umu.",
              },
              {
                text: "Po rozkliknutí se zobrazí <b>přehled střel podle Nebezpečnosti</b> – střel s Vysokou nebezpečností je v lize v průměru 10 %, padne z nich cca 50 % gólů s průměrnou úspěšností i xG 26 %, střel se Střední nebezpečností je v lize v průměru 120 %, padne z nich cca 30 % gólů s průměrnou úspěšností i xG 8 % a střel s Nízkou nebezpečností je v lize v průměru 170 %, padne z nich cca 20 % gólů s průměrnou úspěšností i xG 1,7 %.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Výběr zápasů",
              en: "",
            },
            cz: [
              {
                text: "<b>Panel v levé části</b> stránky umožňuje výběr všech zápasů nebo několika konkrétních.",
              },
              {
                text: "Číslo u každého zápasu značí <b>počet událostí</b>, <b>ikonka videa</b> pak umožní přehrání a stažení videa všech událostí daného zápasu.",
              },
              {
                text: "Pomocí tlačítka <b>Přehrát vybrané zápasy</b> v dolní části je možné přehrát a stáhnout video událostí všech vybraných zápasů.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Zobrazení výstupů",
              en: "",
            },
            cz: [
              {
                text: "Ke zvolení, jaké události budou zobrazeny, slouží dva <b>bloky tlačítek</b>. První blok určí, zda budou zobrazeny výstupy vybraného hráče, celého týmu nebo soupeře. Následný blok pak nabízí filtrovat vstupy na Úspěšné, nebo Neúspěšné.",
              },
            ],
            en: [],
          },
        ],
      },
      videomaps_shootouts: {
        id: "videomaps_shootouts",
        pageId: "videomaps",
        subPageId: "shootouts",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr zápasů",
              en: "",
            },
            cz: [
              {
                text: "<b>Panel v levé části</b> stránky umožňuje výběr všech zápasů nebo několika konkrétních.",
              },
              {
                text: "Číslo u každého zápasu značí <b>počet událostí</b>, <b>ikonka videa</b> pak umožní přehrání a stažení videa všech událostí daného zápasu.",
              },
              {
                text: "Pomocí tlačítka <b>Přehrát vybrané zápasy</b> v dolní části je možné přehrát a stáhnout video událostí všech vybraných zápasů.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Filtrace nájezdů",
              en: "",
            },
            cz: [
              {
                text: "<b>Nájezdy k zobrazení</b> je možné <b>filtrovat</b> pomocí tří bloků tlačítek, které lze libovolně kombinovat. První blok umožňuje zobrazit pouze góly, druhý pouze Střely, nebo Kličky a třetí rozlišuje stranu zakončení na Forehand a Backhand.",
              },
            ],
            en: [],
          },
        ],
      },
      goalkeepers_tabs: {
        id: "goalkeepers_tabs",
        pageId: "goalkeepers",
        subPageId: "tabs",
        items: [
          {
            id: "0",
            title: {
              cz: "Ligový percentil",
              en: "",
            },
            cz: [
              {
                text: "Stisknutím tlačítka <b>Ligový percentil</b> se v tabulce vedle hodnot zobrazí hodnota percentilu, která porovnává hodnoty se zbytkem ligy. Indikuje, že hráč je <b>lepší než zobrazené procento ostatních hráčů v lize</b> – nejlepší hráč v lize tedy dosáhne percentilu 100, nejhorší 0 a prostřední hráč 50. U individuálních statistik se srovnávají pouze hráči na stejné pozici, u on-ice statistik je srovnání napříč pozicemi.",
              },
              {
                text: "<b>Příklad</b>: Hodnota ligového percentilu u atributu G/60 je například 83. Pak to znamená, že hráč je lepší než 83 % hráčů ligy v četnosti vstřelených gólů za 60 minut hry.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Vybrat vlastní data",
              en: "",
            },
            cz: [
              {
                text: "Tlačítko <b>Vybrat vlastní data</b> otevře stránku, na níž je možné zvolit statistiky, které budou zobrazeny v tabulce. Po vybrání <b>Typu dat</b> v horním panelu se zobrazí všechny dostupné statistiky rozčleněné podle typu a významu.",
              },
              {
                text: "Zvolené statistiky je nakonec třeba potvrdit kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Lupa brankáře",
              en: "",
            },
            cz: [
              {
                text: "Najetím na <b>ikonku lupy</b> nalevo od jména brankáře v tabulce je možné prozkoumat daného brankáře do hloubky. <b>Gamelog</b> slouží ke srovnání statistik po jednotlivých odehraných zápasech, <b>Trend</b> pro analýzu vývoje hodnot hráče během sezony nebo v úsecích sezóny, <b>Střely</b> odkáží na stránku s Mapou střel na daného brankáře a <b>Nájezdy</b> umožní prozkoumat samostatné nájezdy na brankáře.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Více filtrů",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>základních filtrů</b> jako je Počet hráčů na ledě nebo Minimální odehraný čas na ledě je možné pomocí tlačítka <b>Více filtrů</b> zobrazit další možnosti filtrování dat v tabulce - podle stavu skóre, soupeře, času v utkání a další.",
              },
              {
                text: "Nová data zobrazíte kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
        ],
      },
      goalkeepers_gamelog: {
        id: "goalkeepers_gamelog",
        pageId: "goalkeepers",
        subPageId: "gamelog",
        items: [
          {
            id: "0",
            title: {
              cz: "Vybrat vlastní data",
              en: "",
            },
            cz: [
              {
                text: "Tlačítko <b>Vybrat vlastní data</b> otevře stránku, na níž je možné zvolit statistiky, které budou zobrazeny v tabulce. Po vybrání <b>Typu dat</b> v horním panelu se zobrazí všechny dostupné statistiky rozčleněné podle typu a významu.",
              },
              {
                text: "Zvolené statistiky je nakonec třeba potvrdit kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
        ],
      },
      goalkeepers_trend: {
        id: "goalkeepers_trend",
        pageId: "goalkeepers",
        subPageId: "trend",
        items: [],
      },
      "goalkeepers_net-zones": {
        id: "goalkeepers_net-zones",
        pageId: "goalkeepers",
        subPageId: "net-zones",
        items: [
          {
            id: "0",
            title: {
              cz: "Schéma branky",
              en: "",
            },
            cz: [
              {
                text: "Po vybrání brankáře se v zónách branky zobrazí <b>úspěšnost zákroků</b> (v bublině nad čarou) a <b>počet obdržených gólů</b> (v bublině pod čarou), přičemž <b>barva pozadí</b> vyjadřuje srovnání se zbytkem ligy - tmavě zelená znamená nejlepší hodnoty v lize, světlé barvy vyjadřují ligový průměr a tmavě červená znamená nejhorší hodnoty v lize.",
              },
            ],
            en: [],
          },
        ],
      },
      goalkeepers_shotmap: {
        id: "goalkeepers_shotmap",
        pageId: "goalkeepers",
        subPageId: "shotmap",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr zápasů",
              en: "",
            },
            cz: [
              {
                text: "<b>Panel v levé části</b> stránky umožňuje výběr všech zápasů nebo několika konkrétních.",
              },
              {
                text: "Číslo u každého zápasu značí <b>počet událostí</b>, <b>ikonka videa</b> pak umožní přehrání a stažení videa všech událostí daného zápasu.",
              },
              {
                text: "Pomocí tlačítka <b>Přehrát vybrané zápasy</b> v dolní části je možné přehrát a stáhnout video událostí všech vybraných zápasů.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Mapa střel",
              en: "",
            },
            cz: [
              {
                text: "Jednotlivé střely jsou symbolizovány <b>kruhy</b> s případným označením gólu. Po <b>kliknutí myší na kruh střely</b> se zobrazí detail o střele včetně možnosti přehrát danou střelu na videu. Při výběru více hráčů jsou střely hráčů odlišeny barevně.",
              },
              {
                text: "Dolní panel nebezpečnosti střel zobrazuje čas na ledě (<b>TOI</b>) podle výběru, součet očekávaných gólů ze střel (<b>xG</b>) a počet vstřelených gólů (<b>G</b>). Po rozkliknutí šipkou se zobrazí členění střel dle <b>Nebezpečnosti</b> – střel s vysokou nebezpečností je v průměru 10 % a padne z nich 50 % gólů, střel se střední nebezpečností je v průměru 20 % a padne z nich 30 % gólů, střel s nízkou nebezpečností je v průměru 70 % a padne z nich 20 % gólů.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Kategorie střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Kategorie střel</b> umožňují zobrazit na mapě Střelecké pokusy nebo pouze střely Na branku, či Góly.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Lokace střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Lokace střel<Pb> umožňují zobrazit na mapě Všechny střely, nebo pouze střely Ze slotu.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Typy střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Typy střel</b> umožňují zobrazit na mapě Všechny střely, pouze střely Z první, nebo pouze Dorážky.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Nebezpečnost střel",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Nebezpečnost střel</b> umožňují zobrazit na mapě Všechny střely, pouze střely s Vysokou nebezpečností (takových střel je 10 %, padne z nich cca 50 % gólů s průměrnou úspěšností i xG 26 %), se Střední nebezpečností (takových střel je 20 %, padne z nich cca 30 % gólů s průměrnou úspěšností i xG 8 %), nebo s Nízkou nebezpečností (takových střel je 70 %, padne z nich cca 20 % gólů s průměrnou úspěšností i xG 1,7 %).",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Typy akce",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Typy akce</b> umožňují zobrazit na mapě Všechny střely, pouze střely z Forčeku (střela je vyslána do 5s po zisku puku v souboji nebo zachycením v útočném pásmu), z Rychlého útoku (střela je vyslána do 5s po vstupu týmu do pásma), z Dlouhého útoku (střela je vyslána po více než 5s pobytu s pukem v útočném pásmu), z Přečíslení, nebo Po vhazování (střela je vyslána do 5s po vyhraném buly v útočném pásmu).",
              },
            ],
            en: [],
          },
          {
            id: "7",
            title: {
              cz: "Zóny branky",
              en: "",
            },
            cz: [
              {
                text: "Tlačítka v bloku <b>Zóny branky</b> umožňují zobrazit na mapě pouze střely do vybrané zóny branky.",
              },
            ],
            en: [],
          },
          {
            id: "8",
            title: {
              cz: "Uložit mapu",
              en: "",
            },
            cz: [
              {
                text: "Po stisknutí tlačítka <b>Uložit mapu</b> se stáhne aktuální stránka mapy střel ve formátu .png.",
              },
            ],
            en: [],
          },
        ],
      },
      goalkeepers_shootouts: {
        id: "goalkeepers_shootouts",
        pageId: "goalkeepers",
        subPageId: "shootouts",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr zápasů",
              en: "",
            },
            cz: [
              {
                text: "<b>Panel v levé části</b> stránky umožňuje výběr všech zápasů nebo několika konkrétních.",
              },
              {
                text: "Číslo u každého zápasu značí <b>počet událostí</b>, <b>ikonka videa</b> pak umožní přehrání a stažení videa všech událostí daného zápasu.",
              },
              {
                text: "Pomocí tlačítka <b>Přehrát vybrané zápasy</b> v dolní části je možné přehrát a stáhnout video událostí všech vybraných zápasů.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Filtrace nájezdů brankáře",
              en: "",
            },
            cz: [
              {
                text: "<b>Nájezdy k zobrazení</b> je možné <b>filtrovat</b> pomocí čtyř bloků tlačítek, které lze libovolně kombinovat. První blok umožňuje zobrazit pouze góly, druhý pouze Střely, nebo Kličky, třetí rozlišuje stranu zakončení na Forehand a Backhand a poslední čtvrtý volí, zda se zobrazí pouze nájezdy hráčů s pravým držení hole, či s levým držení hole.",
              },
            ],
            en: [],
          },
        ],
      },
      "goalkeepers_goalkeeper-card": {
        id: "goalkeepers_goalkeeper-card",
        pageId: "goalkeepers",
        subPageId: "goalkeeper-card",
        items: [
          {
            id: "0",
            title: {
              cz: "Základní informace o brankáři",
              en: "",
            },
            cz: [
              {
                text: "Pod jménem zkoumaného brankáře se nachází jeho <b>základní údaje</b> spolu s odehraným časem na ledě <b>TOI</b> a odehranými zápasy <b>GP</b>.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Statistiky sezóny",
              en: "",
            },
            cz: [
              {
                text: "První blok obsahuje <b>nejdůležitější metriky pro hodnocení brankářovy hry</b>. V pravé části na konci barevné škály se nachází pořadí brankáře v dané sezóně. Kromě popisku metriky lze najetím na barevnou škálu zobrazit <b>zkratku využité metriky a přímo její hodnotu</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Aktuální forma",
              en: "",
            },
            cz: [
              {
                text: "Druhý blok Aktuální forma pak kvantifikuje, <b>jak se brankáři dařilo v posledních 5 zápasech, do kterých nastoupil</b>. Opět je možné jeho výkony srovnat s ostatními brankáři v lize díky <b>pořadí</b> a barevným škálám.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Vizualizace zón branky",
              en: "",
            },
            cz: [
              {
                text: "Dvě schémata branky na pravé straně popisují <b>úspěšnost zákroků</b> a <b>počet obdržených gólů</b>, přičemž <b>barva pozadí</b> vyjadřuje srovnání se zbytkem ligy - tmavě zelená znamená nejlepší hodnoty v lize, světlé barvy vyjadřují ligový průměr a tmavě červená znamená nejhorší hodnoty v lize.",
              },
            ],
            en: [],
          },
        ],
      },
      "goalkeepers_compare-coalkeepers": {
        id: "goalkeepers_compare-coalkeepers",
        pageId: "goalkeepers",
        subPageId: "compare-coalkeepers",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr brankáře k porovnání",
              en: "",
            },
            cz: [
              {
                text: "Brankáře pro porovnání lze vybírat pomocí polí, do nichž lze buď přímo <b>vepsat jméno brankáře</b>, nebo <b>vybrat jméno ze seznamu</b>. Výběr je následně třeba potvrdit kliknutím na tlačítko <b>Vybrat</b>.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Statistiky sezóny",
              en: "",
            },
            cz: [
              {
                text: "První blok obsahuje <b>nejdůležitější metriky pro hodnocení brankářovy hry</b>. V pravé části na konci barevné škály se nachází pořadí brankáře v dané sezóně. Kromě popisku metriky lze najetím na barevnou škálu zobrazit <b>zkratku využité metriky a přímo její hodnotu</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Aktuální forma",
              en: "",
            },
            cz: [
              {
                text: "Druhý blok Aktuální forma pak kvantifikuje, <b>jak se brankáři dařilo v posledních 5 zápasech, do kterých nastoupil</b>. Opět je možné jeho výkony srovnat s ostatními brankáři v lize díky <b>pořadí</b> a barevným škálám.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Vizualizace zón branky",
              en: "",
            },
            cz: [
              {
                text: "Dvě schémata branky na pravé straně popisují <b>úspěšnost zákroků</b> a <b>počet obdržených gólů</b>, přičemž <b>barva pozadí</b> vyjadřuje srovnání se zbytkem ligy - tmavě zelená znamená nejlepší hodnoty v lize, světlé barvy vyjadřují ligový průměr a tmavě červená znamená nejhorší hodnoty v lize.",
              },
            ],
            en: [],
          },
        ],
      },
      "goalkeepers_data-settings": {
        id: "goalkeepers_data-settings",
        pageId: "goalkeepers",
        subPageId: "data-settings",
        items: [
          {
            id: "0",
            title: {
              cz: "Góly chycené nad očekávání",
              en: "",
            },
            cz: [
              {
                text: "Nová metrika <b>Góly chycené nad očekávání</b> (zkratka GSAx) kvantifikuje brankářovy zásluhy a vyčísluje, o kolik gólů díky brankáři tým dostal méně (pro kladné hodnoty) nebo více (pro záporné hodnoty) oproti průměru po zohlednění kvality střel.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Spolehlivost brankáře",
              en: "",
            },
            cz: [
              {
                text: "Spolehlivost brankáře (goalie reliability, GR) vyjadřuje podíl zápasů, ve kterých brankář předvedl lepší než podprůměrný výkon - tedy ve kterých byla hodnota gólů chycených nad očekávání GSAX vyšší než -1,5. Tuto hranici jsme stanovili s ohledem na historická data ze stovek zápasů. Metrika spolehlivosti by měla vyjadřovat, jak se lze na brankáře spolehnout, že nezaznamenává špatné výkony. Doporučujeme ji sledovat spíše v horizontu více zápasů (např. 20 a více).",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Zásluhy brankářů",
              en: "",
            },
            cz: [
              {
                text: "Nové metriky vychytaných zápasů (stolen games, SG) a slabých zápasů (poor games, PG) popisují podíl brankářových výkonů na týmových výhrách/prohrách. Metriky vyjadřují počet/podíl zápasů, kde kdyby brankář chytal dle xG pouze průměrně, tým by nevyhrál (takže výhru reálně vychytal, protože chytil více gólů nad očekávání, než o kolik tým vyhrál) nebo kdyby chytal dle xG alespoň průměrně, tým by vyhrál (takže zápas spíš pokazil, protože pustil více gólů pod očekávání, než o kolik tým prohrál).",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Kam brankář vyráží střely?",
              en: "",
            },
            cz: [
              {
                text: "Čerstvě od začátku sezóny jsou do systému Hockey Logic zaznamenávány nové parametry zákroků brankářů, a to zákroky kontrolované (střely chycené nebo vyražené do bezpečí) a zákroky nekontrolované (střely vyražené do slotu). Naleznete je pod zkratkami Cn.Sv a Un.Sv.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Typy dat",
              en: "",
            },
            cz: [
              {
                text: "Statistiky jsme rozčlenili do <b>skupin</b> podle toho, jaké oblasti hry se týkají.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Parametry události",
              en: "",
            },
            cz: [
              {
                text: "Statistiky je možné <b>filtrovat</b> podle různých parametrů. V sekci <b>Parametry události</b> jsou zobrazeny dostupné filtry, podle kterých můžete metriky detailněji filtrovat. Po zvolení jednoho z parametrů tedy můžete zvolit statistiky s danými parametry – parametr se ve zkratce statistiky zobrazí ve formě <b>předpony</b>.",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Časově přepočtené hodnoty",
              en: "",
            },
            cz: [
              {
                text: "Statistiky, které jsou <b>Časově přepočtené</b> značí průměrný počet událostí za 60 minut pobytu hráče na ledě, tedy odpovídá na otázku <b>Jak často?</b>. Časový přepočet umožňuje srovnání hráčů s nestejným odehraným časem na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "7",
            title: {
              cz: "Relativní ke zbytku týmu",
              en: "",
            },
            cz: [
              {
                text: "Statistiky <b>Relativní ke zbytku týmu</b> vždy značí rozdíl v konkrétní on-ice metrice v případě, že hráč je na ledě a v případě, že hráč na ledě není.",
              },
              {
                text: "Zjednodušeně tedy vyjadřují vliv hráče na hru týmu z pohledu dané statistiky.",
              },
            ],
            en: [],
          },
          {
            id: "8",
            title: {
              cz: "Přednastavené datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Druhou možností výběru statistik v tabulce je zvolení jedné z uživatelsky nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
          {
            id: "9",
            title: {
              cz: "Uložit datový set",
              en: "",
            },
            cz: [
              {
                text: "Po stisknutí tohoto tlačítka jsou aktuálně vybrané statistiky uloženy do <b>Datového šablony</b>, kterou je možné pojmenovat a později jednoduše jedním kliknutím zvolit.",
              },
            ],
            en: [],
          },
          {
            id: "10",
            title: {
              cz: "Minimální hodnota",
              en: "",
            },
            cz: [
              {
                text: "Po rozbalení <b>Minimální hodnoty</b> je možné data v tabulce omezit pouze na ty s minimálně takovou hodnotou zvolené statistiky, jakou zadáte.",
              },
            ],
            en: [],
          },
        ],
      },
      "games_graphic-overview": {
        id: "games_graphic-overview",
        pageId: "games",
        subPageId: "graphic-overview",
        items: [
          {
            id: "0",
            title: {
              cz: "Očekávanost výhry",
              en: "",
            },
            cz: [
              {
                text: "Na základě vytvořených šancí a očekávaných gólů lze určit <b>Očekávanost výhry</b> - ta značí, jaký podíl zápasů v historii vyhrály týmy, jenž dosáhly stejných výsledků z pohledu očekávaných gólů týmu a soupeře. Do výpočtu nejsou zahrnuty očekávané góly ze střel na prázdnou branku.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Očekávané góly",
              en: "",
            },
            cz: [
              {
                text: "První informací o tom, který tým v zápase dominoval, poskytunou <b>Očekávané góly</b> (xG), které jsou ilustrovány bublinami. Vedle nich se pak nachází seznam 5 hráčů, kteří si vytvořili největší šance z pohledu xG, přičemž srovnání poskytuje škála, jejíž maximum je xG nejlepšího hráče v zápase.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Střely",
              en: "",
            },
            cz: [
              {
                text: "Druhý blok ukazuje <b>střeleckou aktivitu</b> - počet střel je opět zobrazen bublinami. Vedle nich se pak nachází <b>semafor střel</b> členící střely podle nebezpečnosti na ty s Vysokou nebezpečností (takových střel je 10 %, padne z nich cca 50 % gólů s průměrnou úspěšností i xG 26 %), se Střední nebezpečností (takových střel je 20 %, padne z nich cca 30 % gólů s průměrnou úspěšností i xG 8 %), nebo s Nízkou nebezpečností (takových střel je 70 %, padne z nich cca 20 % gólů s průměrnou úspěšností i xG 1,7 %).",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Heatmapa střel",
              en: "",
            },
            cz: [
              {
                text: "Všechny střely v zápase jsou zobrazeny na <b>heatmapě</b>, kdy střely domácího týmu jsou zobrazeny na levé polovině hřiště, střely hostujícího týmu pak na pravé polovině. <b>Čím červenější je plocha</b>, tím častěji tým z dané pozice střílel - lze tak jednoduše sledovat, který tým se dostával do <b>nebezpečných střel před brankou</b> a který naopak tuto oblast dobře bránil.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Vývoj zápasu",
              en: "",
            },
            cz: [
              {
                text: "<b>Vývoj zápasu</b> z pohledu vytvořených šancí může ukázat, kdy se zápas lámal. Body jsou chronologicky zobrazené a každý bod značí jednu střelu, góly jsou označeny logem, přičemž <b>výška čáry ukazuje dosavadní očekávané góly týmu</b>. Tudíž oblasti, kdy <b>čára strmě roste</b> ukazují období, ve kterých tým dominoval, naopak období, ve kterých je čára velmi plochá byly ty, ve kterých si tým nedokázal vytvořit velké šance. Pod grafem se ještě nachází <b>hodnota očekávaných gólů v jednotlivých třetinách</b>.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Střelecká převaha",
              en: "",
            },
            cz: [
              {
                text: "Graf střelecké převahy zobrazuje, jak si hráč vedl z pohledu střel týmu a střel soupeře, když byl na ledě. Hráči nacházející se <b>v pravém horním rohu střelecky dominovali</b>, naopak hráči <b>v levém dolním rohu byli výrazně pod tlakem</b>. Velikost barevného kruhu značí čas na ledě hráče, při najetí na bod hráče pak lze zobrazit metriky hráče.",
              },
            ],
            en: [],
          },
        ],
      },
      games_report: {
        id: "games_report",
        pageId: "games",
        subPageId: "report",
        items: [
          {
            id: "0",
            title: {
              cz: "Soupis gólů",
              en: "",
            },
            cz: [
              {
                text: "Pod výsledkem zápasu se nachází <b>chronologický seznam gólů</b> - kromě základních informací o gólu se u každého z nich nachází také <b>modrá ikonka videa</b>, jež umožňuje daný gól přehrát na videu. Kromě toho se pod soupisem také nacházejí <b>tlačítka s odkazy na videa</b> všech gólů.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Tisk a Export dat",
              en: "",
            },
            cz: [
              {
                text: "Data z reportu lze jednoduše <b>Vytisknout</b> pomocí stejnojmenného tlačítka, které stránku převede do formátu .pdf k tisku. Tlačítko <b>Exportovat data</b> pak stáhne soubor v tabulkovém formátu pro další práci.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Část utkání",
              en: "",
            },
            cz: [
              {
                text: "Pomocí výběru <b>Části utkání</b> lze hodnoty v tabulce zobrazit pouze pro konkrétní hrací dobu.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Statistiky ve hře 5 na 5",
              en: "",
            },
            cz: [
              {
                text: "První část Reportu je zaměřena na <b>herní situaci 5 na 5</b> a zobrazuje vybrané důležité metriky popisující různé oblasti hry. Vždy srovnává počty a podíly týmů v zápase a v posledních sloupcích také zobrazuje <b>průměr týmu z pohledu dané metriky v zápasech sezóny</b>. Ke každému průměru je dále zobrazeno také <b>ligové pořadí</b> pro možnost srovnání, zda si tým v sezóně z pohledu této statistiky vedl dobře, nebo špatně.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "TOP5 hráčů",
              en: "",
            },
            cz: [
              {
                text: "<b>Modrá ikonka +</b> na levé straně každého řádku umožňuje zobrazit TOP5 hráčů na každé straně z pohledu dané metriky. U vybraných metrik se pak u hráčů nachází také <b>napojení na video</b> pomocí modré ikonky.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Statistiky v přesilových hrách",
              en: "",
            },
            cz: [
              {
                text: "Druhá část Reportu je následně zaměřena na <b>hru v přesilových hrách</b> obou týmů opět pomocí vybraných metrik. Funkcionality tabulky jsou stejné jako u první zmiňované.",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Tabulka týmů",
              en: "",
            },
            cz: [
              {
                text: "Pod Reportem se nachází klasická <b>datová tabulka metrik</b> obou týmů, u které lze navolit metriky pro zobrazení a dále ji filtrovat pomocí ovládacích prvků.",
              },
            ],
            en: [],
          },
        ],
      },
      games_players: {
        id: "games_players",
        pageId: "games",
        subPageId: "players",
        items: [
          {
            id: "0",
            title: {
              cz: "Část utkání",
              en: "",
            },
            cz: [
              {
                text: "Pomocí výběru <b>Části utkání</b> lze hodnoty v tabulce zobrazit pouze pro konkrétní hrací dobu.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Filtrovat pozice",
              en: "",
            },
            cz: [
              {
                text: "<b>Hráče zobrazované v tabulce</b> je možné omezit pouze na útočníky, nebo obránce - stačí ve výběru <b>Filtrovat pozice</b> zvolit požadovanou pozici.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
        ],
      },
      games_formations: {
        id: "games_formations",
        pageId: "games",
        subPageId: "formations",
        items: [
          {
            id: "0",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Počet hráčů na ledě",
              en: "",
            },
            cz: [
              {
                text: "Pomocí filtru nad tabulkou lze zobrazit data za celé pětice, pouze za útočné formace a obranné dvojice, či za speciální týmy pro přesilové hry nebo oslabení.",
              },
            ],
            en: [],
          },
        ],
      },
      games_goalkeepers: {
        id: "games_goalkeepers",
        pageId: "games",
        subPageId: "goalkeepers",
        items: [
          {
            id: "0",
            title: {
              cz: "Část utkání",
              en: "",
            },
            cz: [
              {
                text: "Pomocí výběru <b>Části utkání</b> lze hodnoty v tabulce zobrazit pouze pro konkrétní hrací dobu.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
        ],
      },
      games_h2h: {
        id: "games_h2h",
        pageId: "games",
        subPageId: "h2h",
        items: [
          {
            id: "0",
            title: {
              cz: "Výběr Kategorie střel",
              en: "",
            },
            cz: [
              {
                text: "Pomocí filtru nad maticí grafů lze přepnout <b>zobrazovanou metriku</b> - na výběr jsou Střely (C), Střely ze slotu (sC), Střely na branku (SOG) a Očekávané góly (xG)",
              },
            ],
            en: [],
          },
        ],
      },
      "games_data-settings": {
        id: "games_data-settings",
        pageId: "games",
        subPageId: "data-settings",
        items: [
          {
            id: "0",
            title: {
              cz: "Typy dat",
              en: "",
            },
            cz: [
              {
                text: "Statistiky jsme rozčlenili do <b>skupin</b> podle toho, jaké oblasti hry se týkají.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Parametry události",
              en: "",
            },
            cz: [
              {
                text: "Statistiky je možné <b>filtrovat</b> podle různých parametrů. V sekci <b>Parametry události</b> jsou zobrazeny dostupné filtry, podle kterých můžete metriky detailněji filtrovat. Po zvolení jednoho z parametrů tedy můžete zvolit statistiky s danými parametry – parametr se ve zkratce statistiky zobrazí ve formě <b>předpony</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Časově přepočtené hodnoty",
              en: "",
            },
            cz: [
              {
                text: "Statistiky, které jsou <b>Časově přepočtené</b> značí průměrný počet událostí za 60 minut pobytu hráče na ledě, tedy odpovídá na otázku <b>Jak často?</b>. Časový přepočet umožňuje srovnání hráčů s nestejným odehraným časem na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Relativní ke zbytku týmu",
              en: "",
            },
            cz: [
              {
                text: "Statistiky <b>Relativní ke zbytku týmu</b> vždy značí rozdíl v konkrétní on-ice metrice v případě, že hráč je na ledě a v případě, že hráč na ledě není.",
              },
              {
                text: "Zjednodušeně tedy vyjadřují vliv hráče na hru týmu z pohledu dané statistiky.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Přednastavené datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Druhou možností výběru statistik v tabulce je zvolení jedné z uživatelsky nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Uložit datový set",
              en: "",
            },
            cz: [
              {
                text: "Po stisknutí tohoto tlačítka jsou aktuálně vybrané statistiky uloženy do <b>Datového šablony</b>, kterou je možné pojmenovat a později jednoduše jedním kliknutím zvolit.",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Minimální hodnota",
              en: "",
            },
            cz: [
              {
                text: "Po rozbalení <b>Minimální hodnoty</b> je možné data v tabulce omezit pouze na ty s minimálně takovou hodnotou zvolené statistiky, jakou zadáte.",
              },
            ],
            en: [],
          },
        ],
      },
      teams_tabs: {
        id: "teams_tabs",
        pageId: "teams",
        subPageId: "tabs",
        items: [
          {
            id: "0",
            title: {
              cz: "Ligové pořadí",
              en: "",
            },
            cz: [
              {
                text: "Kliknutím na tlačítko <b>Ligové pořadí</b> se v tabulce vedle hodnot zobrazí pořadí daného týmu z pohledu konkrétní metriky v lize, což umožní jednoduché srovnání dosažených hodnot v kontextu celé ligy.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Vybrat vlastní data",
              en: "",
            },
            cz: [
              {
                text: "Tlačítko <b>Vybrat vlastní data</b> otevře stránku, na níž je možné zvolit statistiky, které budou zobrazeny v tabulce. Po vybrání <b>Typu dat</b> v horním panelu se zobrazí všechny dostupné statistiky rozčleněné podle typu a významu.",
              },
              {
                text: "Zvolené statistiky je nakonec třeba potvrdit kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Lupa týmu",
              en: "",
            },
            cz: [
              {
                text: "Najetím na <b>ikonku lupy</b> nalevo od názvu týmu v tabulce je možné prozkoumat daný tým do hloubky. <b>Gamelog</b> slouží ke srovnání statistik po jednotlivých odehraných zápasech a <b>Trend</b> pro analýzu vývoje hodnot týmu během sezony nebo v úsecích sezóny.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Více filtrů",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>základních filtrů</b> jako je Počet hráčů na ledě nebo Minimální odehraný čas na ledě je možné pomocí tlačítka <b>Více filtrů</b> zobrazit další možnosti filtrování dat v tabulce - podle stavu skóre, soupeře, času v utkání a další.",
              },
              {
                text: "Nová data zobrazíte kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
        ],
      },
      teams_gamelog: {
        id: "teams_gamelog",
        pageId: "teams",
        subPageId: "gamelog",
        items: [
          {
            id: "0",
            title: {
              cz: "Vybrat vlastní data",
              en: "",
            },
            cz: [
              {
                text: "Tlačítko <b>Vybrat vlastní data</b> otevře stránku, na níž je možné zvolit statistiky, které budou zobrazeny v tabulce. Po vybrání <b>Typu dat</b> v horním panelu se zobrazí všechny dostupné statistiky rozčleněné podle typu a významu.",
              },
              {
                text: "Zvolené statistiky je nakonec třeba potvrdit kliknutím na tlačítko <b>Nahrát data</b>.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Kromě <b>Výběru vlastních dat</b> ručně je druhou možností výběru statistik v tabulce je zvolení jedné z vámi nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
        ],
      },
      teams_trend: {
        id: "teams_trend",
        pageId: "teams",
        subPageId: "trend",
        items: [],
      },
      "teams_data-settings": {
        id: "teams_data-settings",
        pageId: "teams",
        subPageId: "data-settings",
        items: [
          {
            id: "0",
            title: {
              cz: "Typy dat",
              en: "",
            },
            cz: [
              {
                text: "Statistiky jsme rozčlenili do <b>skupin</b> podle toho, jaké oblasti hry se týkají.",
              },
            ],
            en: [],
          },
          {
            id: "1",
            title: {
              cz: "Parametry události",
              en: "",
            },
            cz: [
              {
                text: "Statistiky je možné <b>filtrovat</b> podle různých parametrů. V sekci <b>Parametry události</b> jsou zobrazeny dostupné filtry, podle kterých můžete metriky detailněji filtrovat. Po zvolení jednoho z parametrů tedy můžete zvolit statistiky s danými parametry – parametr se ve zkratce statistiky zobrazí ve formě <b>předpony</b>.",
              },
            ],
            en: [],
          },
          {
            id: "2",
            title: {
              cz: "Góly",
              en: "",
            },
            cz: [
              {
                text: "Za účelem sjednocení se statistikami na hokej.cz jsme vytvořili dvě metriky sledující vstřelené a obdržené góly. Metrika <b>GF*</b> vyjadřuje počet gólů dle oficiálních statistik - počítají se do ní tedy i např. vítězné góly ze samostatných nájezdů. Statistika <b>GF</b>, kterou považujeme za správnou, ale v nesouladu s oficiálním počtem, pak také vyjadřuje počet vstřelených gólů, ale vychází ze <b>střel během hry</b>. Rozdíl se týká jen velmi okrajového počtu gólů - může se např. stát, že gól padne dle oficiálního záznamu sekundu po skončení přesilové hry, ačkoliv střela byla vyslána ještě v přesilové hře. Metrika GF bude tento gól počítat jako přesilovkový, zatímco metrika GF* už nikoliv.",
              },
            ],
            en: [],
          },
          {
            id: "3",
            title: {
              cz: "Časově přepočtené hodnoty",
              en: "",
            },
            cz: [
              {
                text: "Statistiky, které jsou <b>Časově přepočtené</b> značí průměrný počet událostí za 60 minut pobytu hráče na ledě, tedy odpovídá na otázku <b>Jak často?</b>. Časový přepočet umožňuje srovnání hráčů s nestejným odehraným časem na ledě.",
              },
            ],
            en: [],
          },
          {
            id: "4",
            title: {
              cz: "Přednastavené datové šablony",
              en: "",
            },
            cz: [
              {
                text: "Druhou možností výběru statistik v tabulce je zvolení jedné z uživatelsky nadefinovaných nebo předdefinovaných <b>datových šablon</b> zaměřených na konkrétní oblasti hry.",
              },
            ],
            en: [],
          },
          {
            id: "5",
            title: {
              cz: "Uložit datový set",
              en: "",
            },
            cz: [
              {
                text: "Po stisknutí tohoto tlačítka jsou aktuálně vybrané statistiky uloženy do <b>Datového šablony</b>, kterou je možné pojmenovat a později jednoduše jedním kliknutím zvolit.",
              },
            ],
            en: [],
          },
          {
            id: "6",
            title: {
              cz: "Minimální hodnota",
              en: "",
            },
            cz: [
              {
                text: "Po rozbalení <b>Minimální hodnoty</b> je možné data v tabulce omezit pouze na ty s minimálně takovou hodnotou zvolené statistiky, jakou zadáte.",
              },
            ],
            en: [],
          },
        ],
      },
    },
    news: {
      players_tabs: {
        id: "players_tabs",
        pageId: "players",
        subPageId: "tabs",
        show: true,
        title: {
          cz: "Novinky na stránce Hráči - Tabulky",
          en: "",
        },
        cz: [
          {
            title: "Souhrnný percentil shrne všechny metriky v tabulce",
            text: "Do tabulek jsme přidali <b>souhrnný percentil</b>, který hráče hodnotí dle všech právě zvolených metrik dohromady.",
          },
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
          {
            title: "Vyzkoušejte přednastavené datové šablony",
            text: "Abychom vám práci s metrikami co nejvíc zjednodušili, připravili jsme <b>přednastavené datové šablony</b>. Je jich několik, vždy pro konkrétní oblast hry a obsahují nejdůležitější metriky z pohledu dané herní činnosti. Vyberte je nad datovou tabulkou.",
          },
        ],
        en: [],
      },
      players_gamelog: {
        id: "players_gamelog",
        pageId: "players",
        subPageId: "gamelog",
        show: true,
        title: {
          cz: "Novinky na stránce Hráči - Gamelog",
          en: "",
        },
        cz: [
          {
            title: "Vyzkoušejte přednastavené datové šablony",
            text: "Abychom vám práci s metrikami co nejvíc zjednodušili, připravili jsme <b>přednastavené datové šablony</b>. Je jich několik, vždy pro konkrétní oblast hry a obsahují nejdůležitější metriky z pohledu dané herní činnosti. Vyberte je nad datovou tabulkou.",
          },
        ],
        en: [],
      },
      players_trend: {
        id: "players_trend",
        pageId: "players",
        subPageId: "trend",
        show: false,
        title: {
          cz: "Novinky na stránce Hráči - Trend",
          en: "",
        },
        cz: [],
        en: [],
      },
      "players_player-card": {
        id: "players_player-card",
        pageId: "players",
        subPageId: "player-card",
        show: true,
        title: {
          cz: "Novinky na stránce Hráči - Karta hráče",
          en: "",
        },
        cz: [
          {
            title: "Nové atributy na Kartě hráče",
            text: "Revidovali jsme atributy, které tvoří kartu hráče, aby ještě lépe popisovaly dané oblasti hry.",
          },
        ],
        en: [],
      },
      "players_compare-players": {
        id: "players_compare-players",
        pageId: "players",
        subPageId: "compare-players",
        show: true,
        title: {
          cz: "Novinky na stránce Hráči - Porovnání hráče",
          en: "",
        },
        cz: [
          {
            title: "Nové atributy na Kartě hráče",
            text: "Revidovali jsme atributy, které tvoří kartu hráče, aby ještě lépe popisovaly dané oblasti hry.",
          },
        ],
        en: [],
      },
      "players_similarity-players": {
        id: "players_similarity-players",
        pageId: "players",
        subPageId: "similarity-players",
        show: false,
        title: {
          cz: "Novinky na stránce Hráči - Shoda hráčů",
          en: "",
        },
        cz: [],
        en: [],
      },
      "players_data-settings": {
        id: "players_data-settings",
        pageId: "players",
        subPageId: "data-settings",
        show: false,
        title: {
          cz: "Novinky na stránce Hráči - Výběr dat",
          en: "",
        },
        cz: [],
        en: [],
      },
      formations_pairs: {
        id: "formations_pairs",
        pageId: "formations",
        subPageId: "pairs",
        show: true,
        title: {
          cz: "Novinky na stránce Formace - Dvojice",
          en: "",
        },
        cz: [
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      formations_formations: {
        id: "formations_formations",
        pageId: "formations",
        subPageId: "formations",
        show: true,
        title: {
          cz: "Novinky na stránce Formace - Formace",
          en: "",
        },
        cz: [
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
          {
            title: "Vyzkoušejte přednastavené datové šablony",
            text: "Abychom vám práci s metrikami co nejvíc zjednodušili, připravili jsme <b>přednastavené datové šablony</b>. Je jich několik, vždy pro konkrétní oblast hry a obsahují nejdůležitější metriky z pohledu dané herní činnosti. Vyberte je nad datovou tabulkou.",
          },
        ],
        en: [],
      },
      "formations_player-combinations": {
        id: "formations_player-combinations",
        pageId: "formations",
        subPageId: "player-combinations",
        show: true,
        title: {
          cz: "Novinky na stránce Formace - Kombinace hráčů",
          en: "",
        },
        cz: [
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      "formations_data-settings": {
        id: "formations_data-settings",
        pageId: "formations",
        subPageId: "data-settings",
        show: false,
        title: {
          cz: "Novinky na stránce Formace - Výběr dat",
          en: "",
        },
        cz: [],
        en: [],
      },
      videomaps_shots: {
        id: "videomaps_shots",
        pageId: "videomaps",
        subPageId: "shots",
        show: true,
        title: {
          cz: "Novinky na stránce Videomapy - Střely",
          en: "",
        },
        cz: [
          {
            title: "Drobné úpravy na Mapě střel",
            text: "<b>Zrychlili jsme ovládání</b> Videomapy střel a provedli některé drobné úpravy, jako např. zvýraznění gólových střel nebo umožnili export oblasti plánku hřiště,",
          },
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      videomaps_heatmap: {
        id: "videomaps_heatmap",
        pageId: "videomaps",
        subPageId: "heatmap",
        show: false,
        title: {
          cz: "Novinky na stránce Videomapy - Heatmapa",
          en: "",
        },
        cz: [],
        en: [],
      },
      videomaps_passes: {
        id: "videomaps_passes",
        pageId: "videomaps",
        subPageId: "passes",
        show: true,
        title: {
          cz: "Novinky na stránce Videomapy - Přihrávky",
          en: "",
        },
        cz: [
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      videomaps_faceoffs: {
        id: "videomaps_faceoffs",
        pageId: "videomaps",
        subPageId: "faceoffs",
        show: true,
        title: {
          cz: "Novinky na stránce Videomapy - Vhazování",
          en: "",
        },
        cz: [
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      videomaps_entries: {
        id: "videomaps_entries",
        pageId: "videomaps",
        subPageId: "entries",
        show: false,
        title: {
          cz: "Novinky na stránce Videomapy - Vstupy do pásma",
          en: "",
        },
        cz: [],
        en: [],
      },
      videomaps_exits: {
        id: "videomaps_exits",
        pageId: "videomaps",
        subPageId: "exits",
        show: false,
        title: {
          cz: "Novinky na stránce Videomapy - Výstupy z pásma",
          en: "",
        },
        cz: [],
        en: [],
      },
      videomaps_shootouts: {
        id: "videomaps_shootouts",
        pageId: "videomaps",
        subPageId: "shootouts",
        show: false,
        title: {
          cz: "Novinky na stránce Videomapy - Nájezdy",
          en: "",
        },
        cz: [],
        en: [],
      },
      goalkeepers_tabs: {
        id: "goalkeepers_tabs",
        pageId: "goalkeepers",
        subPageId: "tabs",
        show: true,
        title: {
          cz: "Novinky na stránce Brankáři - Tabulky",
          en: "",
        },
        cz: [
          {
            title: "Góly chycené nad očekávání nejlépe zhodnotí brankáře!",
            text: "Nová metrika <b>Góly chycené nad očekávání</b> (zkratka GSAx) kvantifikuje brankářovy zásluhy a vyčísluje, o kolik gólů díky brankáři tým dostal méně (pro kladné hodnoty) nebo více (pro záporné hodnoty) oproti průměru po zohlednění kvality střel.",
          },
          {
            title: "Umíme měřit i spolehlivost brankáře",
            text: "<b>Spolehlivost brankáře</b> (goalie reliability, GR) vyjadřuje podíl zápasů, ve kterých brankář předvedl lepší než podprůměrný výkon - tedy ve kterých byla hodnota gólů chycených nad očekávání GSAX vyšší než -1,5. Tuto hranici jsme stanovili s ohledem na historická data ze stovek zápasů. Metrika spolehlivosti by měla vyjadřovat, jak se lze na brankáře spolehnout, že nezaznamenává špatné výkony. Doporučujeme ji sledovat spíše v horizontu více zápasů (např. 20 a více).",
          },
          {
            title: "Jaké jsou zásluhy brankáře na výsledcích týmu?",
            text: "Nové metriky <b>vychytaných zápasů</b> (stolen games, SG) a <b>slabých zápasů</b> (poor games, PG) popisují podíl brankářových výkonů na týmových výhrách/prohrách. Metriky vyjadřují počet/podíl zápasů, kde kdyby brankář chytal dle xG pouze průměrně, tým by nevyhrál (takže výhru reálně vychytal, protože chytil více gólů nad očekávání, než o kolik tým vyhrál) nebo kdyby chytal dle xG alespoň průměrně, tým by vyhrál (takže zápas spíš pokazil, protože pustil více gólů pod očekávání, než o kolik tým prohrál).",
          },
          {
            title:
              "Pro Hockey Logic sbíráme i typy zákroků, teče a zacloněné střely",
            text: "Čerstvě od začátku sezóny jsou do systému Hockey Logic zaznamenávány nové parametry zákroků brankářů, a to <b>zákroky kontrolované</b> (střely chycené nebo vyražené do bezpečí) a <b>zákroky nekontrolované</b> (střely vyražené do slotu). Dále pak odlišujeme zacloněné a tečované střely.",
          },
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      goalkeepers_gamelog: {
        id: "goalkeepers_gamelog",
        pageId: "goalkeepers",
        subPageId: "gamelog",
        show: false,
        title: {
          cz: "Novinky na stránce Brankáři - Gamelog",
          en: "",
        },
        cz: [],
        en: [],
      },
      goalkeepers_trend: {
        id: "goalkeepers_trend",
        pageId: "goalkeepers",
        subPageId: "trend",
        show: false,
        title: {
          cz: "Novinky na stránce Brankáři - Trend",
          en: "",
        },
        cz: [],
        en: [],
      },
      "goalkeepers_net-zones": {
        id: "goalkeepers_net-zones",
        pageId: "goalkeepers",
        subPageId: "net-zones",
        show: false,
        title: {
          cz: "Novinky na stránce Brankáři - Zóny branky",
          en: "",
        },
        cz: [],
        en: [],
      },
      goalkeepers_shotmap: {
        id: "goalkeepers_shotmap",
        pageId: "goalkeepers",
        subPageId: "shotmap",
        show: true,
        title: {
          cz: "Novinky na stránce Brankáři - Mapa střel",
          en: "",
        },
        cz: [
          {
            title:
              "Pro Hockey Logic sbíráme i typy zákroků, teče a zacloněné střely",
            text: "Čerstvě od začátku sezóny jsou do systému Hockey Logic zaznamenávány nové parametry zákroků brankářů, a to <b>zákroky kontrolované</b> (střely chycené nebo vyražené do bezpečí) a <b>zákroky nekontrolované</b> (střely vyražené do slotu). Dále pak odlišujeme zacloněné a tečované střely.",
          },
          {
            title: "Drobné úpravy na Mapě střel",
            text: "<b>Zrychlili jsme ovládání</b> Videomapy střel a provedli některé drobné úpravy, jako např. zvýraznění gólových střel nebo umožnili export oblasti plánku hřiště,",
          },
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      goalkeepers_shootouts: {
        id: "goalkeepers_shootouts",
        pageId: "goalkeepers",
        subPageId: "shootouts",
        show: false,
        title: {
          cz: "Novinky na stránce Brankáři - Nájezdy",
          en: "",
        },
        cz: [],
        en: [],
      },
      "goalkeepers_goalkeeper-card": {
        id: "goalkeepers_goalkeeper-card",
        pageId: "goalkeepers",
        subPageId: "goalkeeper-card",
        show: true,
        title: {
          cz: "Novinky na stránce Brankáři - Karta brankáře",
          en: "",
        },
        cz: [
          {
            title: "Karta brankáře - přehled těch nejdůležitějších metrik",
            text: "Nová sekce <b>Karta brankáře</b> byla vyvinuta, aby bylo možné <b>jednoduchým způsobem hodnotit nejdůležitější oblasti hry brankáře</b>. Popisuje, jak si brankář vede v nejdůležitějších metrikách ve srovnání s ostatními nejen za celou sezónu (první blok), ale také v posledních 5 odchytaných zápasech (druhý blok). Napravo jsou pak sezónní úspěšnosti zákroků ve členění dle zón branky pro identifikaci silných a slabých míst brankáře. Pro více detailů si <b>otevřete Nápovědu<b/>.",
          },
        ],
        en: [],
      },
      "goalkeepers_compare-coalkeepers": {
        id: "goalkeepers_compare-coalkeepers",
        pageId: "goalkeepers",
        subPageId: "compare-coalkeepers",
        show: true,
        title: {
          cz: "Novinky na stránce Brankáři - Porovnání brankáře",
          en: "",
        },
        cz: [
          {
            title: "Srovnání brankářů nově přehledně v Hockey Logic",
            text: "Srovnání brankářů je nyní velmi jednoduché a přehledné - pomocí bloků z Karty brankáře můžete vedle sebe <b>srovnat až 4 různé brankáře</b> a na první pohled vidět, který vyčnívá nebo kde jsou <b>silné a slabé stránky</b> brankáře ve srovnání s jinými.",
          },
        ],
        en: [],
      },
      "goalkeepers_data-settings": {
        id: "goalkeepers_data-settings",
        pageId: "goalkeepers",
        subPageId: "data-settings",
        show: false,
        title: {
          cz: "Novinky na stránce Brankáři - Výběr dat",
          en: "",
        },
        cz: [],
        en: [],
      },
      "games_graphic-overview": {
        id: "games_graphic-overview",
        pageId: "games",
        subPageId: "graphic-overview",
        show: false,
        title: {
          cz: "Novinky na stránce Zápasy - Grafický přehled",
          en: "",
        },
        cz: [],
        en: [],
      },
      games_report: {
        id: "games_report",
        pageId: "games",
        subPageId: "report",
        show: false,
        title: {
          cz: "Novinky na stránce Zápasy - Report",
          en: "",
        },
        cz: [],
        en: [],
      },
      games_players: {
        id: "games_players",
        pageId: "games",
        subPageId: "players",
        show: true,
        title: {
          cz: "Novinky na stránce Zápasy - Hráči",
          en: "",
        },
        cz: [
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      games_formations: {
        id: "games_formations",
        pageId: "games",
        subPageId: "formations",
        show: true,
        title: {
          cz: "Novinky na stránce Zápasy - Formace",
          en: "",
        },
        cz: [
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      games_goalkeepers: {
        id: "games_goalkeepers",
        pageId: "games",
        subPageId: "goalkeepers",
        show: true,
        title: {
          cz: "Novinky na stránce Zápasy - Brankáři",
          en: "",
        },
        cz: [
          {
            title: "Góly chycené nad očekávání nejlépe zhodnotí brankáře!",
            text: "Nová metrika <b>Góly chycené nad očekávání</b> (zkratka GSAx) kvantifikuje brankářovy zásluhy a vyčísluje, o kolik gólů díky brankáři tým dostal méně (pro kladné hodnoty) nebo více (pro záporné hodnoty) oproti průměru po zohlednění kvality střel.",
          },
          {
            title: "Umíme měřit i spolehlivost brankáře",
            text: "<b>Spolehlivost brankáře</b> (goalie reliability, GR) vyjadřuje podíl zápasů, ve kterých brankář předvedl lepší než podprůměrný výkon - tedy ve kterých byla hodnota gólů chycených nad očekávání GSAX vyšší než -1,5. Tuto hranici jsme stanovili s ohledem na historická data ze stovek zápasů. Metrika spolehlivosti by měla vyjadřovat, jak se lze na brankáře spolehnout, že nezaznamenává špatné výkony. Doporučujeme ji sledovat spíše v horizontu více zápasů (např. 20 a více).",
          },
          {
            title: "Jaké jsou zásluhy brankáře na výsledcích týmu?",
            text: "Nové metriky <b>vychytaných zápasů</b> (stolen games, SG) a <b>slabých zápasů</b> (poor games, PG) popisují podíl brankářových výkonů na týmových výhrách/prohrách. Metriky vyjadřují počet/podíl zápasů, kde kdyby brankář chytal dle xG pouze průměrně, tým by nevyhrál (takže výhru reálně vychytal, protože chytil více gólů nad očekávání, než o kolik tým vyhrál) nebo kdyby chytal dle xG alespoň průměrně, tým by vyhrál (takže zápas spíš pokazil, protože pustil více gólů pod očekávání, než o kolik tým prohrál).",
          },
          {
            title:
              "Pro Hockey Logic sbíráme i typy zákroků, teče a zacloněné střely",
            text: "Čerstvě od začátku sezóny jsou do systému Hockey Logic zaznamenávány nové parametry zákroků brankářů, a to <b>zákroky kontrolované</b> (střely chycené nebo vyražené do bezpečí) a <b>zákroky nekontrolované</b> (střely vyražené do slotu). Dále pak odlišujeme zacloněné a tečované střely.",
          },
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      games_h2h: {
        id: "games_h2h",
        pageId: "games",
        subPageId: "h2h",
        show: true,
        title: {
          cz: "Novinky na stránce Zápasy - Kdo proti komu",
          en: "",
        },
        cz: [
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      "games_data-settings": {
        id: "games_data-settings",
        pageId: "games",
        subPageId: "data-settings",
        show: false,
        title: {
          cz: "Novinky na stránce Zápasy - Výběr dat",
          en: "",
        },
        cz: [],
        en: [],
      },
      teams_tabs: {
        id: "teams_tabs",
        pageId: "teams",
        subPageId: "tabs",
        show: true,
        title: {
          cz: "Novinky na stránce Týmy - Tabulky",
          en: "",
        },
        cz: [
          {
            title: "Vyzkoušejte přednastavené datové šablony",
            text: "Abychom vám práci s metrikami co nejvíc zjednodušili, připravili jsme <b>přednastavené datové šablony</b>. Je jich několik, vždy pro konkrétní oblast hry a obsahují nejdůležitější metriky z pohledu dané herní činnosti. Vyberte je nad datovou tabulkou.",
          },
          {
            title: "Nezapomeňte na Nápovědu s doporučenými tipy!",
            text: "Ke každé stránce v Hockey Logic jsme přidali <b>Nápovědu</b>, která popisuje obsah stránky a její využití spolu s <b>doporučenými tipy, na co se na stránce zaměřit</b>. Zobrazíte ji pomocí <b>tlačítka v pravém horním rohu stránky</b>.",
          },
        ],
        en: [],
      },
      teams_gamelog: {
        id: "teams_gamelog",
        pageId: "teams",
        subPageId: "gamelog",
        show: false,
        title: {
          cz: "Novinky na stránce Týmy - Gamelog",
          en: "",
        },
        cz: [],
        en: [],
      },
      teams_trend: {
        id: "teams_trend",
        pageId: "teams",
        subPageId: "trend",
        show: false,
        title: {
          cz: "Novinky na stránce Týmy - Trend",
          en: "",
        },
        cz: [],
        en: [],
      },
      "teams_data-settings": {
        id: "teams_data-settings",
        pageId: "teams",
        subPageId: "data-settings",
        show: false,
        title: {
          cz: "Novinky na stránce Týmy - Výběr dat",
          en: "",
        },
        cz: [],
        en: [],
      },
    },
  },
  isLoading: false,
  showHelpSidebar: false,
};
