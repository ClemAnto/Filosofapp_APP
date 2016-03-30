angular.module('filosofapp')

    .constant('SETTINGS', function() {
        return {
            debugEnabled: true,
            appVersion: '1.0.0',
            languages: ['it'],
            defaultLanguage: 'it'
        };
    }())

    .constant('CONNECTION', {
        UNKNOWN: "unknown",
        ETHERNET: "ethernet",
        WIFI: "wifi",
        CELL_2G: "2g",
        CELL_3G: "3g",
        CELL_4G: "4g",
        CELL: "cellular",
        NONE: "none"
    })

    .constant('PLACES', {
        talete: {
            id: 'talete',
            name: 'Incontro con Talete',
            emotion: '',
            philosopher: '',
            marker: '',
            defaultScene: 'talete_scene_1',
            scenes: [
                { type: 'dialog', id: 'talete_scene_1' },
                { type: 'biography', id: 'talete_scene_2' },
                { type: 'dialog', id: 'talete_scene_3' },
                { type: 'abstract', id: 'talete_scene_4' },
                { type: 'survey', id: 'talete_scene_5' },
                { type: 'dialog', id: 'talete_scene_6' },
                { type: 'crossroad', id: 'talete_scene_7' }
            ]
        },
        elpis: {
            id: 'elpis',
            name: 'Monti Elpìs',
            emotion: 'Speranza',
            philosopher: 'E. Bloch',
            marker: 'marker-elpis',
            defaultScene: 'elpis_scene_1',
            scenes: [
                { type: 'biography', id: 'elpis_scene_1' },
                { type: 'dialog', id: 'elpis_scene_2' },
                { type: 'story', id: 'elpis_scene_3' },
                { type: 'survey', id: 'elpis_scene_4' },
                { type: 'crossroad', id: 'elpis_scene_5' },
                { type: 'abstract', id: 'elpis_scene_6' },
                { type: 'dialog', id: 'elpis_scene_7' },
                { type: 'abstract', id: 'elpis_scene_8' },
                { type: 'dialog', id: 'elpis_scene_9' }
            ]
        },
        agape: {
            id: 'agape',
            name: 'Agapé',
            emotion: 'Amore',
            philosopher: 'Platone',
            marker: 'marker-agape',
            defaultScene: 'agape_scene_1',
            scenes: [
                { type: 'dialog', id: 'agape_scene_1' },
                { type: 'biography', id: 'agape_scene_2' },
                { type: 'dialog', id: 'agape_scene_3' },
                { type: 'story', id: 'agape_scene_4' },
                { type: 'survey', id: 'agape_scene_5' },
                { type: 'crossroad', id: 'agape_scene_6' },
                { type: 'abstract', id: 'agape_scene_7' },
                { type: 'dialog', id: 'agape_scene_8' },
                { type: 'abstract', id: 'agape_scene_9' },
                { type: 'dialog', id: 'agape_scene_10' }
            ]
        },
        menis: {
            id: 'menis',
            name: 'Paludi Menis',
            emotion: 'Ira',
            philosopher: 'L.A. Seneca',
            marker: 'marker-menis',
            defaultScene: 'menis_scene_1',
            scenes: [
                { type: 'biography', id: 'menis_scene_1' },
                { type: 'dialog', id: 'menis_scene_2' },
                { type: 'story', id: 'menis_scene_3' },
                { type: 'dialog', id: 'menis_scene_4' },
                { type: 'survey', id: 'menis_scene_5' },
                { type: 'crossroad', id: 'menis_scene_6' },
                { type: 'abstract', id: 'menis_scene_7' },
                { type: 'dialog', id: 'menis_scene_8' },
                { type: 'abstract', id: 'menis_scene_9' },
                { type: 'dialog', id: 'menis_scene_10' }
            ]
        },
        fobos: {
            id: 'fobos',
            name: 'Laghi Fobos',
            emotion: 'Paura',
            philosopher: 'T. Hobbes',
            marker: 'marker-fobos',
            defaultScene: 'fobos_scene_1',
            scenes: [
                { type: 'dialog', id: 'fobos_scene_1' },
                { type: 'biography', id: 'fobos_scene_2' },
                { type: 'story', id: 'fobos_scene_3' },
                { type: 'survey', id: 'fobos_scene_4' },
                { type: 'abstract', id: 'fobos_scene_5' },
                { type: 'dialog', id: 'fobos_scene_6' },
                { type: 'abstract', id: 'fobos_scene_7' },
                { type: 'dialog', id: 'fobos_scene_8' }
            ]
        },
        thauma: {
            id: 'thauma',
            name: 'Baia Thauma',
            emotion: 'Meraviglia',
            philosopher: 'G.B. Vico',
            marker: 'marker-thauma',
            defaultScene: 'thauma_scene_1',
            scenes: [
                { type: 'biography', id: 'thauma_scene_1' },
                { type: 'crossroad', id: 'thauma_scene_2' },
                { type: 'dialog', id: 'thauma_scene_3' },
                { type: 'abstract', id: 'thauma_scene_4' },
                { type: 'dialog', id: 'thauma_scene_5' },
                { type: 'crossroad', id: 'thauma_scene_6' },
                { type: 'story', id: 'thauma_scene_7' },
                { type: 'survey', id: 'thauma_scene_8' },
                { type: 'abstract', id: 'thauma_scene_9' }
            ]
        },
        kara: {
            id: 'kara',
            name: 'Karà',
            emotion: 'Gioia',
            philosopher: 'B. Spinoza',
            marker: 'marker-kara',
            defaultScene: 'kara_scene_1',
            scenes: [
                { type: 'biography', id: 'kara_scene_1' },
                { type: 'story', id: 'kara_scene_2' },
                { type: 'dialog', id: 'kara_scene_3' },
                { type: 'abstract', id: 'kara_scene_4' },
                { type: 'crossroad', id: 'kara_scene_5' },
                { type: 'dialog', id: 'kara_scene_6' },
                { type: 'abstract', id: 'kara_scene_7' },
                { type: 'dialog', id: 'kara_scene_8' },
                { type: 'abstract', id: 'kara_scene_9' },
                { type: 'dialog', id: 'kara_scene_10' }
            ]
        },
        lype: {
            id: 'lype',
            name: 'Arcipelago Lype',
            emotion: 'Tristezza',
            philosopher: 'R. Descartes',
            marker: 'marker-lype',
            defaultScene: 'lype_scene_1',
            scenes: [
                { type: 'dialog', id: 'lype_scene_1' },
                { type: 'survey', id: 'lype_scene_2' },
                { type: 'story', id: 'lype_scene_3' },
                { type: 'dialog', id: 'lype_scene_4' },
                { type: 'abstract', id: 'lype_scene_5' },
                { type: 'story', id: 'lype_scene_6' },
                { type: 'dialog', id: 'lype_scene_7' },
                { type: 'abstract', id: 'lype_scene_8' }
            ]
        },
        aidos: {
            id: 'aidos',
            name: 'Golfo di Aidos',
            emotion: 'Vergogna',
            philosopher: 'E. Levinas',
            marker: 'marker-aidos',
            defaultScene: 'aidos_scene_1',
            scenes: [
                { type: 'biography', id: 'aidos_scene_1' },
                { type: 'dialog', id: 'aidos_scene_2' },
                { type: 'story', id: 'aidos_scene_3' },
                { type: 'survey', id: 'aidos_scene_4' },
                { type: 'crossroad', id: 'aidos_scene_5' },
                { type: 'abstract', id: 'aidos_scene_6' },
                { type: 'dialog', id: 'aidos_scene_7' },
                { type: 'abstract', id: 'aidos_scene_8' },
                { type: 'dialog', id: 'aidos_scene_9' }
            ]
        },
    })

    .constant('SCENES', {
        talete_scene_1: {

        },
        talete_scene_2: {

        },
        talete_scene_3: {

        },
        talete_scene_4: {

        },
        talete_scene_5: {

        },
        talete_scene_6: {

        },
        talete_scene_7: {

        },
        elpis_scene_1: {
            id: 'elpis_scene_1',
            type: 'biography',
            name: 'elpis_scene_1',
            template: 'biography.html',
            nextScene: 'elpis_scene_2',
            background: 'elpisbg.jpg',
            pages: [
                {
                    text: 'Bene, ragazzo… siamo ai piedi dei monti Elpis. Di fronte a noi, in fondo, c’è un’imponente cima. Il signore che vedi si chiama Ernst, è un grande pensatore e ha cercato più volte di scalare quella vetta.',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Da solo? E come avrebbe fatto?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'L’ha scalata col Pensiero e con la Ricerca. E ci è riuscito quasi sempre. Ernst Bloch è un pensatore contemporaneo, dei nostri tempi, ma stranamente è uno dei meno conosciuti qui su Sophia.',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Infatti non l’ho mai sentito nominare!',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Ora lo conoscerai... si tratta di un filosofo, per così dire, detective. Ha speso tutta la sua vita, prima di trasferirsi qui su Sophia, alla ricerca di una verità più autentica, di una realtà più profonda...',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                 {
                    text: '...e diversa da quella che guardano superficialmente gli occhi di tutti gli altri. E non ha perso mai la speranza di ritrovarla, quella verità.',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'La speranza?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Già, la speranza, caro ragazzo. E’ proprio la speranza, radiosa e vitale tensione verso l’Oltre, che ha portato Enrst oltre di quel monte. Ernst è nato nel 1885, in Germania, a Ludwigshafen. Ha studiato a Monaco e a Würzburg.',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'A 33 anni ha pubblicato “Spirito dell’utopia”. Quando la Germania è sotto il Nazismo Ernst è dovuto scappare negli Stati Uniti. Proprio in America ha pubblicato il suo libro più importante, “Il Principio Speranza”.',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Alla liberazione della sua Germania dal Nazismo segue però un altro dolore, la costruzione del muro di Berlino, fine di un’altra speranza, quella di vedere libera la sua Germania Est.',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Le ultime due opere sono Ateismo nel cristianesimo (1968) ed Experimentum mundi (1975).',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                }


            ]
        },
        elpis_scene_2: {
            id: 'elpis_scene_2',
            type: 'dialog',
            name: 'elpis_scene_2',
            template: 'dialog.html',
            nextScene: 'elpis_scene_3',
            background: 'elpisbg.jpg',
            firstDialog: 'elpis_scene_2_dialog_1',
            dialogs: {
                elpis_scene_2_dialog_1: {
                    id: 'elpis_scene_2_dialog_1',
                    text: 'Professor Bloch, come va?',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_2: {
                    id: 'elpis_scene_2_dialog_2',
                    text: 'Bene, Talete. Ciao ragazzo, benvenuto su Sophia e benvenuto sul mio Sentiero di Speranza verso i monti Elpis',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_3',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_3: {
                    id: 'elpis_scene_2_dialog_3',
                    text: 'Salve professore. Avrei subito una domanda per lei...',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_4',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_4: {
                    id: 'elpis_scene_2_dialog_4',
                    text: 'Mi fa piacere questa tua curiosità!',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_5',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_5: {
                    id: 'elpis_scene_2_dialog_5',
                    text: 'Dimmi pure...',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_6',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_6: {
                    id: 'elpis_scene_2_dialog_6',
                    text: 'Perché se ha già scalato diverse volte il monte, continua a stare qua, ai suoi piedi, ancora alla ricerca di sentieri nuovi e nuovi percorsi?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_6bis',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_6bis: {
                    id: 'elpis_scene_2_dialog_6bis',
                    text: 'Perché è l’unico modo che conosco per continuare a ricercare quello di cui abbiamo bisogno. Ogni volta che torno, anche se ho visto cosa c’è oltre, mi rendo conto che c’è un nuovo dettaglio da non trascurare e spero che sia quello definitivo. E questa speranza mi arricchisce, mi riempie il cuore e mi dà energia per continuare.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_7',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_7: {
                	id: 'elpis_scene_2_dialog_7',
                    text: 'Scegli la risposta da dare a Bloch!',
                    textClass: 'bubble-ragazzo',
                    positionClass: '',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Che tipo di dettagli?',
                            nextDialog: 'elpis_scene_2_dialog_8'
                        },
                        {
                            text: 'Non capisco...',
                            nextDialog: 'elpis_scene_2_dialog_12'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                elpis_scene_2_dialog_8: {
                    id: 'elpis_scene_2_dialog_8',
                    text: 'Una traccia di verità… una traccia è sempre un particolare che colpisce, che cattura l’attenzione perché fuori posto, non in ordine, ma che si rivela essenziale, perché in grado di aprire una finestra su un aspetto della realtà che non è stato considerato.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_9',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_9: {
                    id: 'elpis_scene_2_dialog_9',
                    text: 'La Realtà Utopica?',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_10',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_10: {
                    id: 'elpis_scene_2_dialog_10',
                    text: 'Già, Talete, la chiamo realtà utopica, perché non esiste ancora in nessun luogo. Ma attenzione, non sto parlando di fantasticherie, ma di scoperte concrete...',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_10bis',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_10bis: {
                    id: 'elpis_scene_2_dialog_10bis',
                    text: '...in grado di cambiare le nostre vite e quelle di intere comunità. Mi piace definirle un incontro con se stessi e con le vie di questo mondo',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_11',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_11: {
                    id: 'elpis_scene_2_dialog_11',
                    text: 'La speranza allora è un po’ come la libertà...',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_11bis',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_11bis: {
                    id: 'elpis_scene_2_dialog_11bis',
                    text: '',
                    video: 'https://www.youtube.com/embed/7JQHDr72ZuM',
                    textClass: '',
                    positionClass: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_11ter',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                 elpis_scene_2_dialog_11ter: {
                    id: 'elpis_scene_2_dialog_11ter',
                    text: 'Proseguiamo...',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'elpis_scene_3',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                elpis_scene_2_dialog_12: {
                    id: 'elpis_scene_2_dialog_12',
                    text: 'Se mi accontentassi di ciò che ho visto la prima volta che sono passato al di là del monte e lo raccontassi a voi, imporrei il mio punto di vista che appartiene a quel momento e a quel percorso.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_13',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_13: {
                    id: 'elpis_scene_2_dialog_13',
                    text: 'E quindi?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_14',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_14: {
                    id: 'elpis_scene_2_dialog_14',
                    text: 'E quindi sottrarrei a voi l’ottimistica previsione di poter scoprire un nuovo pezzo di verità e a me stesso, che cresco ogni giorno, di riscoprire quello che altrimenti si trasformerebbe solo in un ricordo cristallizzato, che non si evolve. La realtà sembra irraggiungibile ma è raggiungibile in ogni percorso di scoperta.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_14bis',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_14bis: {
                    id: 'elpis_scene_2_dialog_14bis',
                    text: 'Io la chiamo realtà utopica, perché non esiste ancora in nessun luogo. Ma attenzione, non sto parlando di fantasticherie, ma di scoperte concrete… in grado di cambiare le nostre vite e quelle di intere comunità. Mi piace definirle un incontro con se stessi e con le vie di questo mondo',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_15',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_15: {
                    id: 'elpis_scene_2_dialog_15',
                    text: 'La speranza allora è un po’ come la libertà...',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_15bis',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_15bis: {
                    id: 'elpis_scene_2_dialog_15bis',
                    text: '',
                    video: 'https://www.youtube.com/embed/7JQHDr72ZuM',
                    textClass: '',
                    positionClass: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_2_dialog_15ter',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_2_dialog_15ter: {
                    id: 'elpis_scene_2_dialog_15ter',
                    text: 'Proseguiamo...',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'elpis_scene_3',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
            }
        },
        elpis_scene_3: {
            id: 'elpis_scene_3',
            type: 'story',
            name: 'elpis_scene_3',
            template: 'story.html',
            nextScene: 'elpis_scene_4',
            pages: [
                {
                    image: 'bloch01.jpg',
                    text: 'Intorno alla metà del Novecento assistiamo alla proposta più compiuta di conferire alla speranza un ruolo centrale all\'interno del pensiero filosofico. Proprio nell\'epoca in cui la coscienza europea è attraversata dalla consapevolezza della crisi che la guerra ha generato, l\'autore ebreo tedesco Ernst Bloch dà vita al suo capolavoro, l\'opera in tre volumi Il principio speranza. <br>In quest’opera, iniziata nel \’38, ma scritta in gran parte durante gli anni dell’esilio negli Stati Uniti, e data alle stampe per la prima volta nel 1959, Bloch delinea una fenomenologia della speranza attraverso l’analisi dell\'esperienza umana, facendo emergere il principio utopico che sottende il processo storico. Come lo stesso autore segnala “in questo libro è stato fatto con particolare estensione il tentativo di portare la filosofia alla speranza, considerata un luogo del mondo, abitato quanto il paese più civilizzato e inesplorato quanto l\'Antartide...',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'bloch02.jpg',
                    text: 'La filosofia di Bloch è ricca di spunti e suggestioni, importante la relazione con gli espressionisti, la scuola di Francoforte, la storia delle eresie, centrale l\'adesione al marxismo. Molti intellettuali dell’epoca identificarono nell’URSS un baluardo contro la miseria dell’Europa di quegli anni. Bloch, pur essendo tra questi, non mancò di ravvisare, soprattutto nel socialismo realizzato, alcuni limiti e di formulare delle correzioni. Tre sono essenzialmente gli aspetti che Bloch critica del marxismo: la teoria economica lì dove prevede il crollo del capitalismo come necessario, la considerazione dell\'oppressione come esclusivamente determinata dai rapporti di produzione e la mancata riflessione sulle garanzie di libertà dell\'individuo. Bloch tenta, dunque, di correggere il marxismo “volgare”, lontano dalla più autentica lezione di Marx. Ciò significa coniugare “corrente fredda” e “corrente calda” del marxismo, abbandonare economicismo e determinismo a favore di un primato della morale, poiché “non si muore per un bilancio di produzione ben organizzato',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'bloch03.jpg',
                    text: 'I proseliti del marxismo hanno dunque dimenticato la lezione più autentica di Marx, quel “sogno di una cosa” che tiene aperto l’aspetto emotivo, pratico e patico del processo verso un mondo più umano. Non è sufficiente, secondo Bloch, comprendere razionalmente i problemi che attanagliano il nostro presente, né razionalmente ipotizzare gli “ingredienti” necessari per una società perfetta, senza interrogare la facoltà che conferisce “senso” alla vita umana: l’immaginazione. Il marxismo, in sintesi, può tendere ad una società più giusta, una società un cui siano eliminate le differenze di classe, il che è certamente una conditio sine qua non per la realizzazione dell’ideale utopico, ma non ci assicura ancora che l’umanità sarà più autentica e più felice. La tensione verso il futuro, l’indignazione contro l’oppressione, il desiderio di trovare condizioni di vita più autentiche, la fede nelle possibilità dell’uomo sono tonalità affettive fondamentali, che non contrastano, bensì conferiscono senso alla ragione e rappresentano fondamentali antidoti contro la rassegnazione e il nichilismo.<br/><br/><i> Bibliografia: E. Bloch, Il principio speranza, trad. it. di E. De Angelis, Garzanti, Milano 1994 - E. Bloch, Thomas Münzer, teologo della rivoluzione [1921], trad. it. di S. Zecchi e S. Krasnovsky, Feltrinelli, Milano, 1980</i>',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        elpis_scene_4: {
            id: 'elpis_scene_4',
            type: 'survey',
            name: 'elpis_scene_4',
            template: 'survey.html',
            nextScene: 'elpis_scene_5',
            background: 'bloch01.jpg',
            firstQuestion: 'elpis_scene_4_survey_1',
            questions: {
                elpis_scene_4_survey_1: {
                    id: 'elpis_scene_4_survey_1',
                    text: 'La speranza è un’emozione dinamica, collegata alla ricerca della verità:',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'sì',
                            nextQuestion: 'elpis_scene_4_survey_2',
                            textAfter: 'Corretto! Vai avanti...'
                        },
                        {
                            text: 'no',
                            nextQuestion: 'elpis_scene_4_survey_1',
                            textAfter: 'Sbagliato! Ripeti il questionario.' 
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                elpis_scene_4_survey_2: {
                    id: 'elpis_scene_4_survey_2',
                    text: 'Ernst Bloch, relativamente alla teoria marxista:',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'era convinto che fosse perfetta per la salvezza dell’umanità',
                            nextQuestion: 'elpis_scene_4_survey_1',
                            textAfter: 'Sbagliato! Ripeti il questionario.' 
                        },
                        {
                            text: 'muoveva delle riserve in merito alla scarsa considerazione delle più autentiche aspirazioni dell’uomo',
                            nextQuestion: 'elpis_scene_4_survey_3',
                            textAfter: 'Corretto! Vai avanti...'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                elpis_scene_4_survey_3: {
                    id: 'elpis_scene_4_survey_3',
                    text: 'La cosiddetta realtà utopica',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'è la più autentica dimensione umana',
                            nextQuestion: '',
                            textAfter: 'Corretto! Vai avanti...'
                        },
                        {
                            text: 'è una mera chimera',
                            nextQuestion: 'elpis_scene_4_survey_1',
                            textAfter: 'Sbagliato! Ripeti il questionario.'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
               
            }
        },
        elpis_scene_5: {
            id: 'elpis_scene_5',
            type: 'crossroad',
            name: 'elpis_scene_5',
            template: 'crossroad.html',
            nextScene: '', // When empty goes to map
            background: 'elpisbg.jpg',
            text: 'Per migliorare il mondo e avvicinarlo al tuo ideale, ritieni più utile:',
            textClass: 'default',
            choiseA: {
                label: 'Che ognuno faccia la sua parte, rendendo conto alla propria coscienza e ai propri principi.',
                icon: 'ion-star',
                class: 'button-left',
                scene: 'elpis_scene_6'
            },
            choiseB: {
                label: 'Che dall’alto venga dettata una linea di condotta universale, e tutti debbano rispettarla',
                icon: 'ion-star',
                class: 'button-right',
                scene: 'elpis_scene_8'
            }
        },
        elpis_scene_6: {
            id: 'elpis_scene_6',
            type: 'abstract',
            name: 'elpis_scene_6',
            template: 'abstract.html',
            nextScene: 'elpis_scene_7',
            text: '<p>I sogni ad occhi aperti, l&rsquo;anelito fondamentale verso un futuro migliore, caratterizzano la vita dell&rsquo;uomo, la cui cifra esistenziale &egrave; data dalla possibilit&agrave; di trascendere la realt&agrave; data, pur restando nell&rsquo;immanenza. Il pensiero filosofico ha sottovalutato la portata di questa dimensione dell&rsquo;esistenza, dunque si rende necessaria una fenomenologia degli stati di coscienza che faccia chiarezza sulle dimensioni dello sperare, sul suo darsi autentico o inautentico, razionale o irrazionale, e una ermeneutica delle sue possibili manifestazioni nella storia, nell&#39;arte, nella filosofia, nella tradizione (Bloch approfondisce in particolare la fiaba, la leggenda, la mitologia).</p><p>Al cuore dell&rsquo;esistenza Bloch pone il percepire la mancanza, ma proprio dalla mancanza muove il Trieb, l&rsquo;impulso, che spinge per uscir fuori da s&eacute;; esso, nell&rsquo;avvertire l&rsquo;inadeguatezza delle condizioni di fatto, muove verso quell&rsquo;incontro con il mondo, in cui entrambi, il soggetto e il mondo, si rivelano nella loro dimensione autentica. Tra gli impulsi fondamentali dell&#39;uomo certamente va annoverato l&rsquo;istinto di autoconservazione, tuttavia &ndash; sostiene Bloch - poich&eacute; tutti gli impulsi si modificano storicamente, una natura originaria dell&#39;uomo o un impulso originario non sono dati in partenza. In tal senso anche l&#39;istinto di autoconservazione viene inteso da Bloch come &quot;l&#39;appetito di tenere pronte condizioni pi&ugrave; autentiche e pi&ugrave; adeguate al nostro s&eacute; che si dispiega e che lo fa solo nella solidariet&agrave; e in quanto solidariet&agrave;&rdquo; . Lo stesso istinto di autoconservazione, inteso tradizionalmente come il fondamento dell&#39;egoismo umano, viene trasformato cos&igrave; nel presupposto di un istinto sociale e intersoggettivo: la solidariet&agrave;. In tal modo Bloch radica nel principio vitale stesso un&#39;intenzione a oltrepassare ci&ograve; che &egrave; presente verso qualcosa di assolutamente nuovo.</p><p>Attraverso l&rsquo;analisi del desiderare umano, dei sogni ad occhi aperti, degli impulsi e degli affetti, si perviene a una definizione di coscienza utopica, che ha il suo corrispettivo inverso nell&rsquo;inconscio freudiano. Mentre questo &egrave; eminentemente intenzionato verso l&rsquo;infanzia, e individua nel rimosso ci&ograve; che agisce sulla vita cosciente di un uomo, cos&igrave; la coscienza anticipante &egrave; rivolta al futuro, all&rsquo;assoluto novum, che essa stessa anticipa.</p><p>&ldquo;Per il sogno da desto in quanto sogno ampio &egrave; inoltre importante comunicarsi all&rsquo;esterno. Esso ne &egrave; capace, mentre invece il sogno notturno, come ogni esperienza troppo privata, solo difficilmente pu&ograve; venir raccontato, e raccontato in modo che anche l&rsquo;ascoltatore riesca a sentirsi comunicare il particolare tono emozionale della cosa. Invece i sogni ad occhi aperti sono comprensibili per il loro carattere aperto, e comunicabili a causa delle loro immagini di desiderio che hanno un interesse universale&rdquo; .</p><p>Bloch intende portare a chiarezza la speranza quale docta spes, vale a dire speranza compresa, consapevole, in grado di anticipare e di orientare l&#39;uomo verso la sua dimensione pi&ugrave; autentica. La speranza per Bloch non &egrave; soltanto un affetto contrapposto alla paura, ma &egrave; un atto orientativo di specie cognitiva, il cui contrario in realt&agrave; non &egrave; tanto il timore quanto il ricordo. La paura &egrave; un affetto di attesa passivo, non conduce l&#39;uomo oltre se stesso, e pu&ograve; diventare facilmente uno strumento di assoggettamento. Essa &egrave; lo strumento pi&ugrave; proprio del potere, anche di quel potere borghese che, con falsa coscienza, fa della propria assenza di prospettive una caratteristica generale umana.</p><p>Lo stesso pensiero filosofico ha mantenuto prevalentemente un atteggiamento meramente statico e contemplativo, secondo il quale anche la storia &egrave; intesa come mondo della ripetizione, un &quot;palazzo di fatalit&agrave;&quot;, la cui conoscenza diviene in tal senso semplice reminiscenza. Certamente anche la speranza pu&ograve; essere vana o illusoria, e pu&ograve; ingannare invece che sostenere, e giacch&eacute; corruptio optimi pessima, &quot;la speranza che imbroglia &egrave; uno dei maggiori malfattori del genere umano&quot;. Eppure tra la docta spes e la falsa speranza che inganna esistono molti gradi e sfumature, speranze talvolta ingenue, semplici desideri di una vita migliore che possono trovare espressione anche solo tra le luci colorate di un Luna Park, ma che fungono comunque da stimolo, e non permettono che ci si accontenti di un cattivo presente.</p><p>L&rsquo;affetto di attesa della speranza apre uno spiraglio su una dimensione pi&ugrave; ampia, non esclusivamente soggettiva, ma che si apre ad una dimensione ontologico-cosmologica. Essa indica l&rsquo;essere in cammino del mondo stesso verso la sua dimensione pi&ugrave; autentica. Il principio utopico cos&igrave; appartiene alla coscienza dell&#39;uomo, che come coscienza anticipante tende sempre ad oltrepassare il dato, ma caratterizza anche una nuova forma di ontologia, l&#39;ontologia del non-essere-ancora, che intende la dimensione del possibile come preminente rispetto a quella del reale. La tendenza presente nell&#39;uomo e la latenza propria della storia devono cos&igrave; incontrarsi per produrre la &ldquo;naturalizzazione dell&#39;uomo e l&rsquo;umanizzazione della natura&quot; in cui consiste la pi&ugrave; autentica dimensione dell&rsquo;uomo e del mondo. L&rsquo;ontologia blochiana si riferisce allora a un essere che non &egrave; ancora, ma che piuttosto va ancora compiuto. Essa trascende l&rsquo;empiria di un presente reificato, ma senza trascendenza: &egrave; nell&rsquo;immanenza del mondo che va infatti individuato l&rsquo;utopico come contenuto germinante della realizzazione.</p><p>&nbsp;La filosofia utopica &egrave; una filosofia della prassi. La conoscenza contemplativa, che si contenta di osservare senza porsi il problema del trasformare, &egrave; parte dell&rsquo;ideologia della classe di volta in volta dominante, che tende a giustificare il suo potere. Il punto di svolta di questa filosofia si pone invece nell&rsquo;intima connessione, che in essa viene postulata, tra la teoria e la prassi. La filosofia non deve dunque restare puro dominio dello spirito, ma incunearsi profondamente nella realt&agrave;. Bloch condivide l&rsquo;asserzione marxiana della undicesima tesi su Feuerbach, secondo cui i filosofi si sono fino a questo momento occupati solo di interpretare il mondo, ora si tratta invece di trasformarlo. Poich&eacute;, invero, &ldquo;solo chi agisce comprende, e precisamente solo in quanto vuole agire&rdquo; .</p><p>La speranza in quanto affetto d&rsquo;attesa &egrave; rivolta al futuro, essa anticipa, proiettando in avanti il contenuto utopico dei &ldquo;sogni ad occhi aperti&rdquo;, la tendenza reale.</p><p>&ldquo;La speranza [...] &egrave; perci&ograve; il pi&ugrave; umano di tutti i moti dell&#39;animo e accessibile solo agli uomini: al tempo stesso si riferisce all&#39;orizzonte pi&ugrave; ampio e pi&ugrave; luminoso. Essa si trova entro il sentimento di quell&#39;appetito che il soggetto non solamente possiede ma di cui, in quanto inadempiuto, consiste ancora in via essenziale&rdquo; .</p><p>Non vi &egrave; qui nessuna contrapposizione speranza-ragione, quella, piuttosto, &egrave; il necessario complemento di quest&rsquo;ultima: &ldquo;la ragione non pu&ograve; fiorire senza speranza, la speranza non pu&ograve; parlare senza ragione...&rdquo; . La ragione diviene sterile, non fiorisce, se privata della speranza, della spinta verso dei fini; mentre questa senza la ragione diviene muta, priva dello strumento con il quale tendere, attraverso un progetto e non confusamente, verso qualcosa. E&rsquo; solo nel recupero di questa sua dimensione affettivo-volitiva, ed anche onirico-fantastica, che la ragione, come ragione eminentemente emancipativa, non separa, ma riunisce:</p><p>&ldquo;Quel che manca, tuttavia, o che, quanto meno, si rivela parziale, &egrave; l&#39;utilizzazione delle potenti molle del &laquo;cuore&raquo;, della &laquo;fede&raquo;, delle &laquo;immagini&raquo;, che la speranza utopica costruisce e che non possono essere ridotte a sopravvivenze illusorie, a bardature ideologiche, a sogni romantici; ch&eacute;, altrimenti, non si spiegherebbe il loro ritorno, la loro capacit&agrave; di &laquo;muovere&raquo; nel concreto masse umane lungo cammini per i quali non s&#39;&egrave; dimostrata esser sufficiente la sola guida della conoscenza scientifica o quella della pianificazione razionale&rdquo; .</p><p>La speranza va inoltre distinta dalla fiducia. Non si pu&ograve; essere ottimisti, dichiara Bloch in una intervista, vi sono troppe cose nel mondo che non vanno, troppi conflitti. Il pessimismo nasce cos&igrave; dalla prudenza. Ma la speranza &egrave; rivoluzionaria. &ldquo;Non si possiede mai la sicurezza; ma quando non si ha nessuna speranza, ogni agire &egrave; impossibile.&rdquo;&nbsp; Bloch non esclude in tal modo la possibilit&agrave; che la speranza venga disillusa. Il Non per&ograve; non &egrave; ancora il Nulla, anzi &egrave; proprio questa mancanza che conferisce alla storia un carattere processuale.</p><p>Nella filosofia utopica particolare rilievo viene conferito all&#39;immaginazione. Se la domanda da cui prende l&rsquo;avvio lo stupore filosofico, secondo Leibniz, sarebbe &ldquo;perch&eacute; &egrave; in generale qualcosa, e non piuttosto niente?&rdquo;, a questa domanda secondo Bloch non pu&ograve; non seguirne una seconda, e cio&egrave; &ldquo;perch&eacute; questo qualcosa &egrave; cos&igrave; e non altrimenti?&rdquo;. La possibilit&agrave; di pensare l&rsquo;esser-altrimenti di ci&ograve; che &egrave; caratterizza anche il pensiero utopico, e questo certamente non pu&ograve; stupire, poich&eacute; lo statuto pi&ugrave; proprio dell&rsquo;utopia &egrave; dato proprio dal rifiuto di considerare la realt&agrave; attuale come l&rsquo;unica possibilit&agrave;, ed il suo &ldquo;metodo&rdquo; &egrave; appunto quello di spostare i limiti del possibile, per cercare &ldquo;il vero ed il reale l&agrave; dove scompare il semplice dato&rdquo; .</p><p>Alla base della filosofia utopica &egrave; posto, dunque, il principio secondo il quale il possibile si situa prima della realt&agrave; esistente. L&rsquo;essenza [Wesen] deve venir rintracciata nella dimensione possibile dell&rsquo;oggetto, e non nel gi&agrave; stato [Gewesen] ch&eacute;, infatti, essa &egrave; qualcosa di non ancora realizzato, la sua dimensione propria &egrave;, dunque, quella futura, in cui emerger&agrave; come novum. Ci&ograve; rende possibile pensare il mondo come qualcosa di trasformabile, in cui &egrave; ancora possibile realizzare il totalmente altro. L&rsquo;immaginazione consente di oltrepassare il dato, percependone e configurandone le potenzialit&agrave; possibili, essa &egrave; in tal modo la facolt&agrave; che connette il pensare e il fare, che coinvolge l&rsquo;uomo nella sua interezza, non solo come essere razionale, ma come essere dotato di sensibilit&agrave;, di volont&agrave; e desiderio, eminentemente intenzionato e interessato all&rsquo;agire pratico. Le immagini di desiderio che la fantasia partorisce non sono completamente arbitrarie e slegate dalla situazione in cui si vive. Esse, infatti, prefigurano ci&ograve; che ci manca, cos&igrave; come le stesse utopie sociali &ldquo;nonostante tutto il loro sorvolare e tutti gli aspetti favolosi propri all&rsquo;incondizionata felicit&agrave; sociale, non sono in nessun modo indipendenti dall&rsquo;urgenza che preme in direzione del prossimo gradino&rdquo;, poich&eacute; &ldquo;anche il sogno che nasce nel modo pi&ugrave; privato contiene, colta in immagini, la tendenza del suo tempo e del futuro prossimo&rdquo;. Dunque l&rsquo;utopia, cos&igrave; come le immagini di desiderio, si mantengono in un rapporto dialettico tra il superamento del dato, del mero fattuale in direzione di una verit&agrave; pi&ugrave; autentica ed essenziale, e al tempo stesso il condizionamento derivante dal contesto storico esistenziale in cui sono prodotte: &ldquo;Le utopie derivano dai cassetti delle possibilit&agrave; a priori, indipendenti dalla storia, ancor meno che dal profondo dell&rsquo;animo puramente privato. Tutte le possibilit&agrave; diventano tali solo all&rsquo;interno della storia; anche il nuovo &egrave; storico&rdquo;.</p><p>L&rsquo;utopia di Bloch &egrave; utopia concreta, vale a dire ricerca di quelle tracce in cui il principio utopico si &egrave; frammentato per ricomporle in una figura nuova, attraverso il montaggio ardito di elementi solo apparentemente eterogenei, tali tracce non saranno chimeriche solo se trovano riscontro e si radicano nella pi&ugrave; autentica e profonda speranza dell&rsquo;uomo.</p><p><strong><em>Bibliografia</em></strong></p><p><em>E. Bloch, Il principio speranza, trad. it. di E. De Angelis, Garzanti, Milano 1994</em></p><p><em>E. Bloch, Aktualit&auml;t und Utopie. Zu Luk&aacute;cs&rsquo; &bdquo;Geschichte und Klassenbewu&szlig;tsein&ldquo;, in Id., Philosophische Aufs&auml;tze zur objektiven Phantasie, GA. Bd. 10, Suhrkamp Verlag, Frankfurt am Main, 1969</em></p><p><em>G. Cacciatore, Ragione e speranza nel marxismo. L&rsquo;eredit&agrave; di Ernst Bloch, Dedalo, Bari, 1979</em></p><p><em>E. Bloch, Marxismo e utopia, trad. it. a cura di V. Marzocchi, Editori Riuniti, Roma 1984</em></p><p><em>E. Bloch, Spirito dell&rsquo;utopia, tr. it. di F Coppellotti e V Bertolino, La Nuova Italia, Firenze 1992</em></p>',
            background: 'bgabstract.jpg',
            nextLabel: 'Vai avanti'
        },
         elpis_scene_7: {
            id: 'elpis_scene_7',
            type: 'dialog',
            name: 'elpis_scene_7',
            template: 'dialog.html',
            nextScene: '',
            background: 'elpisbg.jpg',
            firstDialog: 'elpis_scene_7_dialog_1',
            dialogs: {
                elpis_scene_7_dialog_1: {
                    id: 'elpis_scene_7_dialog_1',
                    text: 'Ora che andrai a visitare i miei amici, qui sull’isola di Sophia, ora che tornerai a casa, cosa porterai con te di nuovo?',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_7_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_7_dialog_2: {
                    id: 'elpis_scene_7_dialog_2',
                    text: 'Non so… in realtà fino a poco fa ero deluso… volevo salire sul Monte Elpis, ma poi ho capito che è più importante conoscere ciò che puoi cogliere dal cammino, prima ancora di intraprenderlo.',
                   textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_7_dialog_3',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_7_dialog_3: {
                    id: 'elpis_scene_7_dialog_3',
                    text: 'In tutto ciò che farai nella tua lunga vita, a partire dai cosiddetti sogni ad occhi aperti, tutti i desideri che avrai, lo stupore dinanzi all’arte, alla musica o a un grande film… Beh, sappi che si tratta di espressioni di questa tensione in avanti, verso qualcosa di nuovo.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_7_dialog_4',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_7_dialog_4: {
                    id: 'elpis_scene_7_dialog_4',
                    text: 'Un modo d’essere diverso e migliore, che non è solo futuro, ma inizia già ad illuminare il presente, anticipando così la realizzazione del nuovo',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_7_dialog_5',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_7_dialog_5: {
                    id: 'elpis_scene_7_dialog_5',
                    text: 'Torna, se vuoi, a farmi visita, e rispondimi diversamente… avremo spunti per prendere altre strade nella nostra conversazione e percorrere nuovi sentieri',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_7_dialog_6',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_7_dialog_6: {
                    id: 'elpis_scene_7_dialog_6',
                    text: 'Tornerò sicuramente, professor Bloch. E’ una certezza, non… una speranza!',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_7_dialog_6bis',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_7_dialog_6bis: {
                    id: 'elpis_scene_7_dialog_6bis',
                    text: 'Bene! Ti aspetto! Buon viaggio…',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_7_dialog_7',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                
                elpis_scene_7_dialog_7: {
                    id: 'elpis_scene_7_dialog_7',
                    text: '',
                    video: 'https://www.youtube.com/embed/W1oKuhEZ4hU',
                    textClass: '',
                    positionClass: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_7_dialog_8',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_7_dialog_8: {
                    id: 'elpis_scene_7_dialog_8',
                    text: 'Torna alla mappa',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
            }
        },
        elpis_scene_8: {
            id: 'elpis_scene_8',
            type: 'abstract',
            name: 'elpis_scene_8',
            template: 'abstract.html',
            nextScene: 'elpis_scene_9',
            text: '<p>&ldquo;Chi voglia varcare senza inconvenienti una porta aperta deve tener presente il fatto che gli stipiti sono duri&rdquo;, questa massima &egrave; un postulato del senso della realt&agrave;, secondo quanto Musil afferma ne L&rsquo;uomo senza qualit&agrave; ma, egli aggiunge, &ldquo;se il senso della realt&agrave; esiste, e nessuno pu&ograve; mettere in dubbio che la sua esistenza sia giustificata, allora ci dev&rsquo;essere anche qualcosa che chiameremo senso della possibilit&agrave;. Chi lo possiede non dice ad esempio: qui &egrave; accaduto questo o quello, accadr&agrave;, deve accadere; ma immagina: qui potrebbe, o dovrebbe accadere la tale o talaltra cosa; e se gli si dichiara che una cosa &egrave; com&rsquo;&egrave;, egli pensa: be&rsquo;, probabilmente potrebbe esser anche diversa&rdquo;. La possibilit&agrave; di pensare l&rsquo;esser-altrimenti di &ldquo;ci&ograve; che &egrave;&rdquo; caratterizza anche il pensiero utopico di Ernst Bloch, e questo certamente non pu&ograve; stupire, poich&eacute; lo statuto pi&ugrave; proprio dell&rsquo;utopia &egrave; dato proprio dal rifiuto di considerare la realt&agrave; attuale e la sua proiezione futura come l&rsquo;unica possibilit&agrave;, e il suo &ldquo;metodo&rdquo; &egrave; appunto quello di spostare i limiti del possibile, per cercare &ldquo;il vero ed il reale l&agrave; dove scompare il semplice dato&rdquo;. Dimensione centrale della filosofia blochiana &egrave; infatti l&rsquo;utopia concreta, distinta dalle utopie astratte, poich&eacute; sempre mediata con l&rsquo;analisi delle condizioni date. In una intervista rilasciata nel 1976, dal titolo &ldquo;Un marxista non ha diritto al pessimismo&rdquo;, Bloch afferma che &ldquo;l&rsquo;utopia non &egrave; fuga nell&rsquo;irreale; &egrave; scavo per la messa in luce delle possibilit&agrave; oggettive insite nel reale e lotta per la loro realizzazione&rdquo;. L&rsquo;utopia non &egrave; dunque rifugio in un mondo ideale, e dunque non pu&ograve; rappresentare una rinuncia all&rsquo;azione, essa piuttosto &egrave; la spinta, la tensione che porta a superare le condizioni date e a trasformarle, inserendo e riconoscendo nel reale un principio superiore, una tendenza a migliorare, a raggiungere condizioni pi&ugrave; adeguate di esistenza. Principale resta qui il rivolgimento al futuro che, come futuro autentico, &egrave; il luogo germinante del sorgere del novum. Il futuro della ripetizione, quello assolutamente prevedibile &egrave; al contrario futuro inautentico. La critica di Bloch qui si rivolge a tutte quelle filosofie, ma in particolare a quella hegeliana, che sono cadute nella &ldquo;malia dell&rsquo;anamnesi&rdquo;. Esse, infatti, si sono contentate di un atteggiamento meramente contemplativo: piuttosto che osare un superamento delle condizioni date, considerate insufficienti, si sono volte a giustificare l&rsquo;esistente. Per Bloch, invece, &ldquo;pensare significa oltrepassare&rdquo;, il movimento del pensiero supera l&rsquo;esistente in nome di un principio utopico, che non &egrave; posto come trascendente, e nemmeno una mera astrazione, bens&igrave; &egrave; al contrario l&rsquo;assoluto immanente. Questo principio percorre il processo stesso, che non &egrave; ancora concluso, e che quindi resta ancora &ldquo;sospeso&rdquo;, indeciso quanto alla sua risoluzione. Proprio l&rsquo;apertura del processo storico, indica che ancora &egrave; data la possibilit&agrave; di pensare ad un &ldquo;compimento&rdquo; dell&rsquo;utopia, alla sua realizzazione. Ma &ldquo;l&rsquo;ottimismo militante&rdquo; blochiano, ben presto imbattutosi nelle miserie del nazismo, &egrave; ben lungi dal negare la presenza del male nel mondo. La speranza, distinta dalla fiducia, &egrave; ci&ograve; che conduce a perseguire e attuare quelle linee di tendenza, che tanto nell&rsquo;uomo, quanto nella realt&agrave;, spingono verso quella patria, in cui l&rsquo;uomo possa essere di casa; la speranza &egrave; ci&ograve; a cui ci si pu&ograve; decidere, e che sola pu&ograve; spingere all&rsquo;azione ed all&rsquo;autorealizzazione.&nbsp;<br />&ldquo;La speranza non &egrave; fiducia. Un marxista non dovrebbe diffondere il pessimismo. Per&ograve; non si pu&ograve; essere ottimisti: nel mondo ci sono troppe cose che non vanno, troppi conflitti. Dovrei per&ograve; arrendermi per questo? Io sono anche un pessimista, ma il mio pessimismo nasce dalla prudenza. La speranza &egrave; in ogni caso rivoluzionaria. Non si possiede mai la sicurezza; ma quando non si ha nessuna speranza, ogni agire &egrave; impossibile.&rdquo;&nbsp;<br /> La filosofia di Bloch &egrave; stata per&ograve; oggetto di svariate critiche, anche da parte marxista, proprio per il suo assumere l&rsquo;utopia come categoria determinante l&rsquo;agire politico. Estremamente critica &egrave; la lettura che Joachim Fest ne d&agrave; nel suo libro Il sogno distrutto. La fine dell&rsquo;et&agrave; delle utopie. Per Fest l&rsquo;utopia, in quanto pone un modello di perfezione assolutamente distante dalla realt&agrave;, piuttosto che principio per l&rsquo;azione politica, ne rappresenta un freno. Fare politica significa allora accondiscendere a compromessi, mentre la filosofia blochiana sarebbe piuttosto servita come giustificazione dei regimi totalitari socialisti.&nbsp;<br />Altra la critica mossa alla filosofia blochiana da Hans Jonas, il quale nel suo Principio responsabilit&agrave; mette a punto un concetto di responsabilit&agrave; etica nei confronti delle generazioni venture, che al principio speranza &ldquo;contrappone il compito pi&ugrave; modesto, dettato dalla paura e dal rispetto, di preservare all&rsquo;uomo, nella residua ambiguit&agrave; della sua libert&agrave;, che nessun mutamento delle circostanze pu&ograve; mai sopprimere, l&rsquo;integrit&agrave; del suo mondo e del suo essere contro gli abusi del suo sapere&rdquo;. &nbsp;Il futuro sembra, in questo senso, preannunziare piuttosto una minaccia di distruzione, che una promessa di esistenza migliore. Jonas, dunque, critica in primo luogo l&rsquo;utopismo.<br />&ldquo;Poich&eacute; esso ha dalla sua i pi&ugrave; antichi sogni dell&rsquo;umanit&agrave; e ora sembra trovare nella tecnica anche i mezzi per tradurre in pratica il sogno, l&rsquo;utopismo un tempo innocuo &egrave; diventato la tentazione pi&ugrave; pericolosa - proprio perch&eacute; idealistica - per l&rsquo;umanit&agrave; odierna.&rdquo;&nbsp;<br />Queste interpretazioni dell&rsquo;utopia blochiana sembrano appunto dimenticare il costante richiamo di quest&rsquo;autore alle condizioni di fatto in cui &egrave; dato operare, le quali, per&ograve;, non possono e non devono condurre a un atteggiamento rinunziatario nei riguardi della realt&agrave;. L&rsquo;assenza di prospettive &egrave;, dal punto di vista blochiano, una caratteristica dell&rsquo;esistenza borghese, che tende in questo modo a perpetuarsi, poich&eacute; frena, rendendole sterili, quelle tendenze rivoluzionarie di sovvertimento che nel corso della storia si sono in vario modo manifestate. Senza il costante proiettarsi in avanti, senza la speranza che possano essere date condizioni pi&ugrave; autentiche di vita per l&rsquo;uomo, questi non potr&agrave; mai risollevarsi dalla condizione di estraneazione in cui il capitalismo lo ha collocato.&nbsp;<br />La ricerca del fondamento si tramuta allora nel suo compimento. La filosofia utopica &egrave; una filosofia della prassi. La mera conoscenza contemplativa, che si contenta di osservare senza porsi il problema del trasformare, &egrave; parte dell&rsquo;ideologia della classe di volta in volta dominante, che tende a giustificare il suo potere. Il punto di svolta di questa filosofia si pone invece nell&rsquo;intima connessione, che in essa viene postulata, tra la teoria e la prassi. La filosofia non deve dunque restare puro dominio dello spirito, ma incunearsi profondamente nella realt&agrave;. Bloch condivide l&rsquo;asserzione marxiana della 11&deg; tesi su Feuerbach, secondo cui i filosofi si sono fino a questo momento occupati solo di interpretare il mondo, ora si tratta invece di trasformarlo. Poich&eacute;, invero, &ldquo;solo chi agisce comprende, e precisamente solo in quanto vuole agire.&rdquo; &nbsp;<br /><br /><strong>Bibliografia</strong><br />R. Musil, L&rsquo;uomo senza qualit&agrave;, tr. it. di A. Rho, Torino, 1988<br />E. Bloch, Geist der Utopie (1923), tr. it. di F Coppellotti e V Bertolino, Spirito dell&rsquo;utopia, La Nuova Italia, Firenze, 1992<br />E. Bloch, Marxismo e utopia<br />E. Bloch,; Il Principio speranza, trad. it. di E. De Angelis, Garzanti, Milano, 1994<br />J. Fest, Il sogno distrutto. La fine dell&rsquo;et&agrave; delle utopie. (1991), trad. it. di Maria Visintainer, Garzanti, Milano, 1992</p>',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        elpis_scene_9: {
            id: 'elpis_scene_9',
            type: 'dialog',
            name: 'elpis_scene_9',
            template: 'dialog.html',
            nextScene: '',
            background: 'elpisbg.jpg',
            firstDialog: 'elpis_scene_9_dialog_1',
            dialogs: {
                elpis_scene_9_dialog_1: {
                    id: 'elpis_scene_9_dialog_1',
                    text: 'Ora che andrai a visitare i miei amici, qui sull’isola di Sophia, ora che tornerai a casa, cosa porterai con te di nuovo?',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_9_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_9_dialog_2: {
                    id: 'elpis_scene_9_dialog_2',
                    text: 'Non so… in realtà fino a poco fa ero deluso… volevo salire sul Monte Elpis, ma poi ho capito che è più importante conoscere ciò che puoi cogliere dal cammino, prima ancora di intraprenderlo.',
                   textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_9_dialog_3',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_9_dialog_3: {
                    id: 'elpis_scene_9_dialog_3',
                    text: 'In tutto ciò che farai nella tua lunga vita, a partire dai cosiddetti sogni ad occhi aperti, tutti i desideri che avrai, lo stupore dinanzi all’arte, alla musica o a un grande film… Beh, sappi che si tratta di espressioni di questa tensione in avanti, verso qualcosa di nuovo.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_9_dialog_4',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_9_dialog_4: {
                    id: 'elpis_scene_9_dialog_4',
                    text: 'Un modo d’essere diverso e migliore, che non è solo futuro, ma inizia già ad illuminare il presente, anticipando così la realizzazione del nuovo',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_9_dialog_5',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_9_dialog_5: {
                    id: 'elpis_scene_9_dialog_5',
                    text: 'Torna, se vuoi, a farmi visita, e rispondimi diversamente… avremo spunti per prendere altre strade nella nostra conversazione e percorrere nuovi sentieri',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_9_dialog_6',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_9_dialog_6: {
                    id: 'elpis_scene_9_dialog_6',
                    text: 'Tornerò sicuramente, professor Bloch. E’ una certezza, non… una speranza!',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_9_dialog_6bis',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_9_dialog_6bis: {
                    id: 'elpis_scene_9_dialog_6bis',
                    text: 'Bene! Ti aspetto! Buon viaggio…',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_9_dialog_7',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                
                elpis_scene_9_dialog_7: {
                    id: 'elpis_scene_9_dialog_7',
                    text: '',
                    video: 'https://www.youtube.com/embed/W1oKuhEZ4hU',
                    textClass: '',
                    positionClass: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'elpis_scene_9_dialog_8',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                elpis_scene_9_dialog_8: {
                    id: 'elpis_scene_9_dialog_8',
                    text: 'Torna alla mappa',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
            }
        },
        agape_scene_1: {
            id: 'agape_scene_1',
            type: 'dialog',
            name: 'agape_scene_1',
            template: 'dialog.html',
            nextScene: 'agape_scene_2',
            background: 'agapebg.jpg',
            firstDialog: 'agape_scene_1_dialog_1',
            dialogs: {
                agape_scene_1_dialog_1: {
                    id: 'agape_scene_1_dialog_1',
                    text: 'Qui dove siamo, Talete?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_1_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_1_dialog_2: {
                    id: 'agape_scene_1_dialog_2',
                    text: 'Ad Agape, nella piazza centrale. Quella che i greci chiamavano l’Agora. Qui si discuteva delle decisioni da assumere in città, ma anche di filosofia, di matematica e alti principi.',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_1_dialog_3',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_1_dialog_3: {
                    id: 'agape_scene_1_dialog_3',
                    text: 'Dunque quel signore è un filosofo greco. Credo di averlo visto da qualche parte, forse scolpito in qualche busto.',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_1_dialog_4',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_1_dialog_4: {
                   id: 'agape_scene_1_dialog_4',
                    text: 'Lo credo anch’io. Lui è greco come me ed è uno dei fondatori di tutto il pensiero occidentale: è…',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_1_dialog_5',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_1_dialog_5: {
           			id: 'agape_scene_1_dialog_5',
                    text: '...Platone!',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_1_dialog_6',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_1_dialog_6: {
           			id: 'agape_scene_1_dialog_6',
                    text: 'Piacere, ragazzo. Sono contento che tu conosca il mio nome.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_1_dialog_7',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_1_dialog_7: {
           			id: 'agape_scene_1_dialog_7',
                    text: 'Beh, lei in realtà è nella copertina del libro di filosofia di mio fratello! Ecco dove l’avevo vista...',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_1_dialog_8',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_1_dialog_8: {
                    id: 'agape_scene_1_dialog_8',
                    text: 'Platone, presentati al nostro giovane ospite',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'agape_scene_2',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },


        agape_scene_2: {
            id: 'agape_scene_2',
            type: 'biography',
            name: 'agape_scene_2',
            template: 'biography.html',
            nextScene: 'agape_scene_3',
            background: 'agapebg.jpg',
            pages: [
                {
                    text: 'Caro ragazzo, oggi vorrei parlarti dell’Amore.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    nextLabel: 'Prosegui',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Amore Platonico?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Ecco, dimentica completamente questa espressione, della quale neanche io conosco il senso. Ti parlerò dell’Amore come sentimento che è innanzitutto desiderio di conoscenza',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Bene!',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Sono nato ad Atene nel 427 a.C. Il mio vero nome è Aristocle.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Davvero?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Già, Aristocle come mio nonno. A chiamarmi Platone (in realtà Palatone per via del mio fisico possente) fu un mio allenatore di ginnastica. A vent’anni sono diventato discepolo di Socrate, incontro che mi ha cambiato la vita',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Ragazzo, conosci Socrate?',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'L\’ho sentito nominare molte volte, Talete.',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Beh, quando lo studierai, fra qualche anno, anche a te l’incontro con Socrate potrebbe cambiare la vita e spalancarti la mente.',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                 {
                    text: 'In quel periodo Atene era stravolta da sanguinose guerre e dopo la morte del mio maestro Socrate intrapresi una serie di viaggi nel Mediterraneo, anche in Italia. Nel corso di questi viaggi ho molto riflettuto e ho messo nero su bianco il frutto dei miei pensieri, componendo i dialoghi cosiddetti “socratici”. In Sicilia subii una serie di disavventure e venni ridotto in schiavitù dal tiranno di Siracusa Dioinigi il Vecchio. Venni liberato da un mio “collega” allievo di Socrate e tornai ad Atene. Nella mia città fondai l’Accademia, Scuola di filosofia che prese questo nome perché sorgeva in un luogo dedicato ad Accademo.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Oggi Accademia si usa come parola per indicare un luogo di alta formazione. Una scuola importante.',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Esatto, e anche la mia Accademia lo era. Vi insegnarono i più famosi matematici e astronomi: Eudosso di Cnido ed Eraclide Pontico, medici della scuola siciliana, filosofi come Speusippo, Filippo di Opunte e Archita di Taranto, ma soprattutto vi insegnò per oltre venti anni Aristotele.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Altro nome conosciuto...',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },                
                {
                    text: 'Già. Erano anni elettrizzanti quelli. L’ambiente dell’Accademia fu straordinario anche perché riusciva a conciliare il metodo della ricerca con uno stile di vita meraviglioso, la cui summa era data dallo stare insieme agli amici a discutere per lungo tempo. In questo periodo ho composto i dialoghi Menone (sulla vita), Menesseno, Fedone (sull’anima), Repubblica, Eutidemo e Cratilo. E poi, ovviamente, ho composto il famosissimo dialogo sull’Amore...',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                {
                    text: '...il Simposio.',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },    
             	 {
                    text: 'Esatto, il Simposio.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                }
                ]
        },
       
        agape_scene_3: {
            id: 'agape_scene_3',
            type: 'dialog',
            name: 'agape_scene_3',
            template: 'dialog.html',
            nextScene: 'agape_scene_4',
            background: 'agapebg.jpg',
            firstDialog: 'agape_scene_3_dialog_1',
            dialogs: {
                agape_scene_3_dialog_1: {
                    id: 'agape_scene_3_dialog_1',
                    text: 'Platone, posso farle una domanda su questo posto?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left bubble-position-ragazzo',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_3_dialog_2: {
                   id: 'agape_scene_3_dialog_2',
                    text: 'Ma certo!',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_3',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_3_dialog_3: {
                   id: 'agape_scene_3_dialog_3',
                    text: 'Cosa rappresenta questa statua? E\' un po\' strana...',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left bubble-position-ragazzo',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_4',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_3_dialog_4: {
                   id: 'agape_scene_3_dialog_4',
                    text: 'Rappresenta il mito dell’androgino… ne scrivo proprio nel Simposio',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_5',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                 agape_scene_3_dialog_5: {
                   id: 'agape_scene_3_dialog_5',
                    text: 'Che significa androgino?',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left bubble-position-ragazzo',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_6',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_3_dialog_6: {
                   id: 'agape_scene_3_dialog_6',
                    text: 'Secondo il mito Androgino era il terzo sesso secondo un antico mito, raccontato da Aristofane nel mio libro. Aristofane usa questo racconto per spiegare le origini dell’Amore fra uomo e donna. Oggi abbiamo bisogno l’uno dell’altro, l’uomo della donna, perché un tempo avevamo tutti entrambe le parti, maschile e femminile. Il nostro corpo era formato da quattro braccia, quattro gambe, due visi e due cuori...',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_7',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_3_dialog_7: {
                   id: 'agape_scene_3_dialog_7',
                    text: 'L’Uomo era così perfetto, autosufficiente, quasi divino, e rischiava di insidiare la Potenza degli Dei. Per questo motivo Zeus divise gli uomini in due, per indebolirli e renderli completi solo unendosi e ritrovando la propria metà in un altro essere di sesso opposto. Ecco la nascita dell’Amore e del Bisogno dell’altro, che è indipendente da pulsioni o interessi, ma risponde a un semplice desiderio di ricongiungimento naturale.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_8',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_3_dialog_8: {
                   id: 'agape_scene_3_dialog_8',
                    text: 'L’Uomo era così perfetto, autosufficiente, quasi divino, e rischiava di insidiare la Potenza degli Dei. Per questo motivo Zeus divise gli uomini in due, per indebolirli e renderli completi solo unendosi e ritrovando la propria metà in un altro essere di sesso opposto. Ecco la nascita dell’Amore e del Bisogno dell’altro, che è indipendente da pulsioni o interessi, ma risponde a un semplice desiderio di ricongiungimento naturale.',
                    textClass: 'default',
                    positionClass: 'bubble-dialog-top',
                    video: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_9',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
				agape_scene_3_dialog_9: {
                    id: 'agape_scene_3_dialog_9',
                    text: '',
                    video: 'https://www.youtube.com/embed/pWg5MiDYIzY',
                    textClass: '',
                    positionClass: '',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_3_dialog_10',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                 agape_scene_3_dialog_10: {
                    id: 'elpis_scene_2_dialog_11ter',
                    text: 'Proseguiamo...',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'agape_scene_4',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },

            }
        },
        agape_scene_4: {
            id: 'agape_scene_4',
            type: 'story',
            name: 'agape_scene_4',
            template: 'story.html',
            nextScene: 'agape_scene_5',
            pages: [
                {
                    image: 'story1.jpg',
                    text: 'Nel 50 a.C., la Gallia viene occupata dalle truppe di Giulio Cesare. Gli unici a resistere all\'invasione sono gli abitanti di un piccolo villaggio in una zona imprecisata della Bretagna: sono galli indomabili che decidono di organizzarsi per respingere il nemico. A capo dell\'impresa vengono designati Asterix e Obelix, nonostante i grandi sforzi del centurione Caius Bonus. I galli sono invincibili per la forza sovrumana conferita loro da una pozione magica preparata dal loro druido Panoramix. Una sera giunge al villaggio l\'indovino (falso) Prolix, che predice al villaggio il ritrovamento di un tesoro, attorno al quale ci sarebbero stati molti Romani. Il giorno dopo, infatti, giunge al villaggio l\'esattore delle tasse di Cesare, le cui truppe vengono però malmenate da Asterix e Obelix. I Galli rubano le monete dell\'esattore e non ascoltano Asterix, che dice loro che il tesoro avrebbe portato solo sciagura perché avrebbe attirato l\'esercito di Cesare. Quella sera, a scopo di riconciliazione fra Prolix e Asterix (il secondo odiava il primo e lo accusava di essere un ciarlatano), il falso indovino decide di mangiare con l\'eroe gallico l\'omelette dell\'amicizia.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story2.jpg',
                    text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story3.jpg',
                    text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        agape_scene_5: {
            id: 'agape_scene_5',
            type: 'survey',
            name: 'agape_scene_5',
            template: 'survey.html',
            nextScene: 'agape_scene_6',
            background: 'survey.jpg',
            firstQuestion: 'agape_scene_5_survey_1',
            questions: {
                agape_scene_5_survey_1: {
                    id: 'agape_scene_5_survey_1',
                    text: 'Testo domanda 1',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 1-1',
                            nextQuestion: 'agape_scene_5_survey_2'
                        },
                        {
                            text: 'Risposta 1-2',
                            nextQuestion: 'agape_scene_5_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                agape_scene_5_survey_2: {
                    id: 'agape_scene_5_survey_2',
                    text: 'Testo domanda 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 2-1',
                            nextQuestion: 'agape_scene_5_survey_1'
                        },
                        {
                            text: 'Risposta 2-2',
                            nextQuestion: 'agape_scene_5_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                agape_scene_5_survey_3: {
                    id: 'agape_scene_5_survey_3',
                    text: 'Testo domanda 3',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 3-1',
                            nextQuestion: 'agape_scene_5_survey_4'
                        },
                        {
                            text: 'Risposta 3-2',
                            nextQuestion: 'agape_scene_5_survey_4'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                agape_scene_5_survey_4: {
                    id: 'agape_scene_5_survey_4',
                    text: 'Testo domanda 4',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 4-1',
                            nextQuestion: '' // When empty goes to next scene
                        },
                        {
                            text: 'Risposta 4-2',
                            nextQuestion: '' // When empty goes to next scene
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                }
            }
        },
        agape_scene_6: {
            id: 'agape_scene_6',
            type: 'crossroad',
            name: 'agape_scene_6',
            template: 'crossroad.html',
            nextScene: '', // When empty goes to map
            background: 'cross.jpg',
            text: 'Scegli una scelta (choise)',
            textClass: 'default',
            choiseA: {
                label: 'Scelta A',
                icon: 'ion-star',
                class: 'button-left',
                scene: 'agape_scene_7'
            },
            choiseB: {
                label: 'Scelta B',
                icon: 'ion-star',
                class: 'button-right',
                scene: 'agape_scene_9'
            }
        },
        agape_scene_7: {
            id: 'agape_scene_7',
            type: 'abstract',
            name: 'agape_scene_7',
            template: 'abstract.html',
            nextScene: 'agape_scene_8',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        agape_scene_8: {
            id: 'agape_scene_8',
            type: 'dialog',
            name: 'agape_scene_8',
            template: 'dialog.html',
            nextScene: '', // When empty goes to map
            background: 'dialog.jpg',
            firstDialog: 'agape_scene_8_dialog_1',
            dialogs: {
                agape_scene_8_dialog_1: {
                    id: 'agape_scene_8_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_8_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_8_dialog_2: {
                    id: 'agape_scene_8_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'agape_scene_8_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'agape_scene_8_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                agape_scene_8_dialog_3: {
                    id: 'agape_scene_8_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                agape_scene_8_dialog_4: {
                    id: 'agape_scene_8_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        agape_scene_9: {
            id: 'agape_scene_9',
            type: 'abstract',
            name: 'agape_scene_9',
            template: 'abstract.html',
            nextScene: 'agape_scene_10',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        agape_scene_10: {
            id: 'agape_scene_10',
            type: 'dialog',
            name: 'agape_scene_10',
            template: 'dialog.html',
            nextScene: '', // When empty goes to map
            background: 'dialog.jpg',
            firstDialog: 'agape_scene_10_dialog_1',
            dialogs: {
                agape_scene_10_dialog_1: {
                    id: 'agape_scene_10_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'agape_scene_10_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                agape_scene_10_dialog_2: {
                    id: 'agape_scene_10_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'agape_scene_10_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'agape_scene_10_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                agape_scene_10_dialog_3: {
                    id: 'agape_scene_10_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                agape_scene_10_dialog_4: {
                    id: 'agape_scene_10_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        menis_scene_1: {
            id: 'menis_scene_1',
            type: 'biography',
            name: 'menis_scene_1',
            template: 'biography.html',
            nextScene: 'menis_scene_2',
            background: 'bio.jpg',
            pages: [
                {
                    text: 'La vita di Dylan Dog è stata molto travagliata',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                }
            ]
        },
        menis_scene_2: {
            id: 'menis_scene_2',
            type: 'dialog',
            name: 'menis_scene_2',
            template: 'dialog.html',
            nextScene: 'menis_scene_3',
            background: 'dialog.jpg',
            firstDialog: 'menis_scene_2_dialog_1',
            dialogs: {
                menis_scene_2_dialog_1: {
                    id: 'menis_scene_2_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'menis_scene_2_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                menis_scene_2_dialog_2: {
                    id: 'menis_scene_2_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'menis_scene_2_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'menis_scene_2_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                menis_scene_2_dialog_3: {
                    id: 'menis_scene_2_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'menis_scene_3',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                menis_scene_2_dialog_4: {
                    id: 'menis_scene_2_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'menis_scene_3',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        menis_scene_3: {
            id: 'menis_scene_3',
            type: 'story',
            name: 'menis_scene_3',
            template: 'story.html',
            nextScene: 'menis_scene_4',
            pages: [
                {
                    image: 'story1.jpg',
                    text: 'Nel 50 a.C., la Gallia viene occupata dalle truppe di Giulio Cesare. Gli unici a resistere all\'invasione sono gli abitanti di un piccolo villaggio in una zona imprecisata della Bretagna: sono galli indomabili che decidono di organizzarsi per respingere il nemico. A capo dell\'impresa vengono designati Asterix e Obelix, nonostante i grandi sforzi del centurione Caius Bonus. I galli sono invincibili per la forza sovrumana conferita loro da una pozione magica preparata dal loro druido Panoramix. Una sera giunge al villaggio l\'indovino (falso) Prolix, che predice al villaggio il ritrovamento di un tesoro, attorno al quale ci sarebbero stati molti Romani. Il giorno dopo, infatti, giunge al villaggio l\'esattore delle tasse di Cesare, le cui truppe vengono però malmenate da Asterix e Obelix. I Galli rubano le monete dell\'esattore e non ascoltano Asterix, che dice loro che il tesoro avrebbe portato solo sciagura perché avrebbe attirato l\'esercito di Cesare. Quella sera, a scopo di riconciliazione fra Prolix e Asterix (il secondo odiava il primo e lo accusava di essere un ciarlatano), il falso indovino decide di mangiare con l\'eroe gallico l\'omelette dell\'amicizia.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story2.jpg',
                    text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story3.jpg',
                    text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        menis_scene_4: {
            id: 'menis_scene_4',
            type: 'dialog',
            name: 'menis_scene_4',
            template: 'dialog.html',
            nextScene: 'menis_scene_5',
            background: 'dialog.jpg',
            firstDialog: 'menis_scene_4_dialog_1',
            dialogs: {
                menis_scene_4_dialog_1: {
                    id: 'menis_scene_4_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'menis_scene_4_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                menis_scene_4_dialog_2: {
                    id: 'menis_scene_4_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'menis_scene_4_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'menis_scene_4_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                menis_scene_4_dialog_3: {
                    id: 'menis_scene_4_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'menis_scene_5',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                menis_scene_4_dialog_4: {
                    id: 'menis_scene_4_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'menis_scene_5',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        menis_scene_5: {
            id: 'menis_scene_5',
            type: 'survey',
            name: 'menis_scene_5',
            template: 'survey.html',
            nextScene: 'menis_scene_6',
            background: 'survey.jpg',
            firstQuestion: 'menis_scene_5_survey_1',
            questions: {
                menis_scene_5_survey_1: {
                    id: 'menis_scene_5_survey_1',
                    text: 'Testo domanda 1',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 1-1',
                            nextQuestion: 'menis_scene_5_survey_2'
                        },
                        {
                            text: 'Risposta 1-2',
                            nextQuestion: 'menis_scene_5_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                menis_scene_5_survey_2: {
                    id: 'menis_scene_5_survey_2',
                    text: 'Testo domanda 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 2-1',
                            nextQuestion: 'menis_scene_5_survey_1'
                        },
                        {
                            text: 'Risposta 2-2',
                            nextQuestion: 'menis_scene_5_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                menis_scene_5_survey_3: {
                    id: 'menis_scene_5_survey_3',
                    text: 'Testo domanda 3',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 3-1',
                            nextQuestion: 'menis_scene_5_survey_4'
                        },
                        {
                            text: 'Risposta 3-2',
                            nextQuestion: 'menis_scene_5_survey_4'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                menis_scene_5_survey_4: {
                    id: 'menis_scene_5_survey_4',
                    text: 'Testo domanda 4',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 4-1',
                            nextQuestion: '' // When empty goes to next scene
                        },
                        {
                            text: 'Risposta 4-2',
                            nextQuestion: '' // When empty goes to next scene
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                }
            }
        },
        menis_scene_6: {
            id: 'menis_scene_6',
            type: 'crossroad',
            name: 'menis_scene_6',
            template: 'crossroad.html',
            nextScene: '', // When empty goes to map
            background: 'cross.jpg',
            choiseA: {
                label: 'Scelta A',
                icon: 'ion-star',
                class: 'button-left',
                scene: 'menis_scene_7'
            },
            choiseB: {
                label: 'Scelta B',
                icon: 'ion-star',
                class: 'button-right',
                scene: 'menis_scene_9'
            }
        },
        menis_scene_7: {
            id: 'menis_scene_7',
            type: 'abstract',
            name: 'menis_scene_7',
            template: 'abstract.html',
            nextScene: 'menis_scene_8',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        menis_scene_8: {
            id: 'menis_scene_8',
            type: 'dialog',
            name: 'menis_scene_8',
            template: 'dialog.html',
            nextScene: '', // When empty goes to map
            background: 'dialog.jpg',
            firstDialog: 'menis_scene_8_dialog_1',
            dialogs: {
                menis_scene_8_dialog_1: {
                    id: 'menis_scene_8_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'menis_scene_8_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                menis_scene_8_dialog_2: {
                    id: 'menis_scene_8_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'menis_scene_8_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'menis_scene_8_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                menis_scene_8_dialog_3: {
                    id: 'menis_scene_8_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                menis_scene_8_dialog_4: {
                    id: 'menis_scene_8_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        menis_scene_9: {
            id: 'menis_scene_9',
            type: 'abstract',
            name: 'menis_scene_9',
            template: 'abstract.html',
            nextScene: 'menis_scene_10',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        menis_scene_10: {
            id: 'menis_scene_10',
            type: 'dialog',
            name: 'menis_scene_10',
            template: 'dialog.html',
            nextScene: '', // When empty goes to map
            background: 'dialog.jpg',
            firstDialog: 'menis_scene_10_dialog_1',
            dialogs: {
                menis_scene_10_dialog_1: {
                    id: 'menis_scene_10_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'menis_scene_10_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                menis_scene_10_dialog_2: {
                    id: 'menis_scene_10_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'menis_scene_10_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'menis_scene_10_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                menis_scene_10_dialog_3: {
                    id: 'menis_scene_10_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                menis_scene_10_dialog_4: {
                    id: 'menis_scene_10_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        fobos_scene_1: {
            id: 'fobos_scene_1',
            type: 'dialog',
            name: 'fobos_scene_1',
            template: 'dialog.html',
            nextScene: 'fobos_scene_2',
            background: 'dialog.jpg',
            firstDialog: 'fobos_scene_1_dialog_1',
            dialogs: {
                fobos_scene_1_dialog_1: {
                    id: 'fobos_scene_1_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'fobos_scene_1_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                fobos_scene_1_dialog_2: {
                    id: 'fobos_scene_1_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'fobos_scene_1_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'fobos_scene_1_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                fobos_scene_1_dialog_3: {
                    id: 'fobos_scene_1_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'fobos_scene_2',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                fobos_scene_1_dialog_4: {
                    id: 'fobos_scene_1_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'fobos_scene_2',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        fobos_scene_2: {
            id: 'fobos_scene_2',
            type: 'biography',
            name: 'fobos_scene_2',
            template: 'biography.html',
            nextScene: 'fobos_scene_3',
            background: 'bio.jpg',
            pages: [
                {
                    text: 'La vita di Dylan Dog è stata molto travagliata',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                }
            ]
        },
        fobos_scene_3: {
            id: 'fobos_scene_3',
            type: 'story',
            name: 'fobos_scene_3',
            template: 'story.html',
            nextScene: 'fobos_scene_4',
            pages: [
                {
                    image: 'story1.jpg',
                    text: 'Nel 50 a.C., la Gallia viene occupata dalle truppe di Giulio Cesare. Gli unici a resistere all\'invasione sono gli abitanti di un piccolo villaggio in una zona imprecisata della Bretagna: sono galli indomabili che decidono di organizzarsi per respingere il nemico. A capo dell\'impresa vengono designati Asterix e Obelix, nonostante i grandi sforzi del centurione Caius Bonus. I galli sono invincibili per la forza sovrumana conferita loro da una pozione magica preparata dal loro druido Panoramix. Una sera giunge al villaggio l\'indovino (falso) Prolix, che predice al villaggio il ritrovamento di un tesoro, attorno al quale ci sarebbero stati molti Romani. Il giorno dopo, infatti, giunge al villaggio l\'esattore delle tasse di Cesare, le cui truppe vengono però malmenate da Asterix e Obelix. I Galli rubano le monete dell\'esattore e non ascoltano Asterix, che dice loro che il tesoro avrebbe portato solo sciagura perché avrebbe attirato l\'esercito di Cesare. Quella sera, a scopo di riconciliazione fra Prolix e Asterix (il secondo odiava il primo e lo accusava di essere un ciarlatano), il falso indovino decide di mangiare con l\'eroe gallico l\'omelette dell\'amicizia.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story2.jpg',
                    text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story3.jpg',
                    text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        fobos_scene_4: {
            id: 'fobos_scene_4',
            type: 'survey',
            name: 'fobos_scene_4',
            template: 'survey.html',
            nextScene: 'fobos_scene_5',
            background: 'survey.jpg',
            firstQuestion: 'fobos_scene_4_survey_1',
            questions: {
                fobos_scene_4_survey_1: {
                    id: 'fobos_scene_4_survey_1',
                    text: 'Testo domanda 1',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 1-1',
                            nextQuestion: 'fobos_scene_4_survey_2'
                        },
                        {
                            text: 'Risposta 1-2',
                            nextQuestion: 'fobos_scene_4_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                fobos_scene_4_survey_2: {
                    id: 'fobos_scene_4_survey_2',
                    text: 'Testo domanda 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 2-1',
                            nextQuestion: 'fobos_scene_4_survey_1'
                        },
                        {
                            text: 'Risposta 2-2',
                            nextQuestion: 'fobos_scene_4_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                fobos_scene_4_survey_3: {
                    id: 'fobos_scene_4_survey_3',
                    text: 'Testo domanda 3',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 3-1',
                            nextQuestion: 'fobos_scene_4_survey_4'
                        },
                        {
                            text: 'Risposta 3-2',
                            nextQuestion: 'fobos_scene_4_survey_4'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                fobos_scene_4_survey_4: {
                    id: 'fobos_scene_4_survey_4',
                    text: 'Testo domanda 4',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 4-1',
                            nextQuestion: '' // When empty goes to next scene
                        },
                        {
                            text: 'Risposta 4-2',
                            nextQuestion: '' // When empty goes to next scene
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                }
            }
        },
        fobos_scene_5: {
            id: 'fobos_scene_5',
            type: 'abstract',
            name: 'fobos_scene_5',
            template: 'abstract.html',
            nextScene: 'fobos_scene_6',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        fobos_scene_6: {
            id: 'fobos_scene_6',
            type: 'dialog',
            name: 'fobos_scene_6',
            template: 'dialog.html',
            nextScene: 'fobos_scene_7',
            background: 'dialog.jpg',
            firstDialog: 'fobos_scene_6_dialog_1',
            dialogs: {
                fobos_scene_6_dialog_1: {
                    id: 'fobos_scene_6_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'fobos_scene_6_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                fobos_scene_6_dialog_2: {
                    id: 'fobos_scene_6_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'fobos_scene_6_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'fobos_scene_6_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                fobos_scene_6_dialog_3: {
                    id: 'fobos_scene_6_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'fobos_scene_7',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                fobos_scene_6_dialog_4: {
                    id: 'fobos_scene_6_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'fobos_scene_7',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        fobos_scene_7: {
            id: 'fobos_scene_7',
            type: 'abstract',
            name: 'fobos_scene_7',
            template: 'abstract.html',
            nextScene: 'fobos_scene_8',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        fobos_scene_8: {
            id: 'fobos_scene_8',
            type: 'dialog',
            name: 'fobos_scene_8',
            template: 'dialog.html',
            nextScene: '', // When empty goes to map
            background: 'dialog.jpg',
            firstDialog: 'fobos_scene_8_dialog_1',
            dialogs: {
                fobos_scene_8_dialog_1: {
                    id: 'fobos_scene_8_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'fobos_scene_8_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                fobos_scene_8_dialog_2: {
                    id: 'fobos_scene_8_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'fobos_scene_8_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'fobos_scene_8_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                fobos_scene_8_dialog_3: {
                    id: 'fobos_scene_8_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                fobos_scene_8_dialog_4: {
                    id: 'fobos_scene_8_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        thauma_scene_1: {
            id: 'thauma_scene_1',
            type: 'biography',
            name: 'thauma_scene_1',
            template: 'biography.html',
            nextScene: 'thauma_scene_2',
            background: 'bio.jpg',
            pages: [
                {
                    text: 'La vita di Dylan Dog è stata molto travagliata',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                }
            ]
        },
        thauma_scene_2: {
            id: 'thauma_scene_2',
            type: 'crossroad',
            name: 'thauma_scene_2',
            template: 'crossroad.html',
            nextScene: '', // When empty goes to map
            background: 'cross.jpg',
            choiseA: {
                label: 'Scelta A',
                icon: 'ion-star',
                class: 'button-left',
                scene: 'thauma_scene_3'
            },
            choiseB: {
                label: 'Scelta B',
                icon: 'ion-star',
                class: 'button-right',
                scene: 'thauma_scene_5'
            }
        },
        thauma_scene_3: {
            id: 'thauma_scene_3',
            type: 'dialog',
            name: 'thauma_scene_3',
            template: 'dialog.html',
            nextScene: 'thauma_scene_4',
            background: 'dialog.jpg',
            firstDialog: 'thauma_scene_3_dialog_1',
            dialogs: {
                thauma_scene_3_dialog_1: {
                    id: 'thauma_scene_3_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'thauma_scene_3_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                thauma_scene_3_dialog_2: {
                    id: 'thauma_scene_3_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'thauma_scene_3_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'thauma_scene_3_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                thauma_scene_3_dialog_3: {
                    id: 'thauma_scene_3_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'thauma_scene_4',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                thauma_scene_3_dialog_4: {
                    id: 'thauma_scene_3_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'thauma_scene_4',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        thauma_scene_4: {
            id: 'thauma_scene_4',
            type: 'abstract',
            name: 'thauma_scene_4',
            template: 'abstract.html',
            nextScene: 'thauma_scene_7',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        thauma_scene_5: {
            id: 'thauma_scene_5',
            type: 'dialog',
            name: 'thauma_scene_5',
            template: 'dialog.html',
            nextScene: 'thauma_scene_6',
            background: 'dialog.jpg',
            firstDialog: 'thauma_scene_5_dialog_1',
            dialogs: {
                thauma_scene_5_dialog_1: {
                    id: 'thauma_scene_5_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'thauma_scene_5_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                thauma_scene_5_dialog_2: {
                    id: 'thauma_scene_5_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'thauma_scene_5_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'thauma_scene_5_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                thauma_scene_5_dialog_3: {
                    id: 'thauma_scene_5_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'thauma_scene_6',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                thauma_scene_5_dialog_4: {
                    id: 'thauma_scene_5_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'thauma_scene_6',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        thauma_scene_6: {
            id: 'thauma_scene_6',
            type: 'crossroad',
            name: 'thauma_scene_6',
            template: 'crossroad.html',
            nextScene: '', // When empty goes to map
            background: 'cross.jpg',
            choiseA: {
                label: 'Scelta A',
                icon: 'ion-star',
                class: 'button-left',
                scene: 'thauma_scene_7'
            },
            choiseB: {
                label: 'Scelta B',
                icon: 'ion-star',
                class: 'button-right',
                scene: 'thauma_scene_8'
            }
        },
        thauma_scene_7: {
            id: 'thauma_scene_7',
            type: 'story',
            name: 'thauma_scene_7',
            template: 'story.html',
            nextScene: 'thauma_scene_9',
            pages: [
                {
                    image: 'story1.jpg',
                    text: 'Nel 50 a.C., la Gallia viene occupata dalle truppe di Giulio Cesare. Gli unici a resistere all\'invasione sono gli abitanti di un piccolo villaggio in una zona imprecisata della Bretagna: sono galli indomabili che decidono di organizzarsi per respingere il nemico. A capo dell\'impresa vengono designati Asterix e Obelix, nonostante i grandi sforzi del centurione Caius Bonus. I galli sono invincibili per la forza sovrumana conferita loro da una pozione magica preparata dal loro druido Panoramix. Una sera giunge al villaggio l\'indovino (falso) Prolix, che predice al villaggio il ritrovamento di un tesoro, attorno al quale ci sarebbero stati molti Romani. Il giorno dopo, infatti, giunge al villaggio l\'esattore delle tasse di Cesare, le cui truppe vengono però malmenate da Asterix e Obelix. I Galli rubano le monete dell\'esattore e non ascoltano Asterix, che dice loro che il tesoro avrebbe portato solo sciagura perché avrebbe attirato l\'esercito di Cesare. Quella sera, a scopo di riconciliazione fra Prolix e Asterix (il secondo odiava il primo e lo accusava di essere un ciarlatano), il falso indovino decide di mangiare con l\'eroe gallico l\'omelette dell\'amicizia.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story2.jpg',
                    text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story3.jpg',
                    text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        thauma_scene_8: {
            id: 'thauma_scene_8',
            type: 'survey',
            name: 'thauma_scene_8',
            template: 'survey.html',
            nextScene: 'thauma_scene_9',
            background: 'survey.jpg',
            firstQuestion: 'thauma_scene_8_survey_1',
            questions: {
                thauma_scene_8_survey_1: {
                    id: 'thauma_scene_8_survey_1',
                    text: 'Testo domanda 1',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 1-1',
                            nextQuestion: 'thauma_scene_8_survey_2'
                        },
                        {
                            text: 'Risposta 1-2',
                            nextQuestion: 'thauma_scene_8_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                thauma_scene_8_survey_2: {
                    id: 'thauma_scene_8_survey_2',
                    text: 'Testo domanda 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 2-1',
                            nextQuestion: 'thauma_scene_8_survey_1'
                        },
                        {
                            text: 'Risposta 2-2',
                            nextQuestion: 'thauma_scene_8_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                thauma_scene_8_survey_3: {
                    id: 'thauma_scene_8_survey_3',
                    text: 'Testo domanda 3',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 3-1',
                            nextQuestion: 'thauma_scene_8_survey_4'
                        },
                        {
                            text: 'Risposta 3-2',
                            nextQuestion: 'thauma_scene_8_survey_4'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                thauma_scene_8_survey_4: {
                    id: 'thauma_scene_8_survey_4',
                    text: 'Testo domanda 4',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 4-1',
                            nextQuestion: '' // When empty goes to next scene
                        },
                        {
                            text: 'Risposta 4-2',
                            nextQuestion: '' // When empty goes to next scene
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                }
            }
        },
        thauma_scene_9: {
            id: 'thauma_scene_9',
            type: 'abstract',
            name: 'thauma_scene_9',
            template: 'abstract.html',
            nextScene: '', // When empty goes to map
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        kara_scene_1: {
            id: 'kara_scene_1',
            type: 'biography',
            name: 'kara_scene_1',
            template: 'biography.html',
            nextScene: 'kara_scene_2',
            background: 'bio.jpg',
            pages: [
                {
                    text: 'La vita di Dylan Dog è stata molto travagliata',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                }
            ]
        },
        kara_scene_2: {
            id: 'kara_scene_2',
            type: 'story',
            name: 'kara_scene_2',
            template: 'story.html',
            nextScene: 'kara_scene_3',
            pages: [
                {
                    image: 'story1.jpg',
                    text: 'Nel 50 a.C., la Gallia viene occupata dalle truppe di Giulio Cesare. Gli unici a resistere all\'invasione sono gli abitanti di un piccolo villaggio in una zona imprecisata della Bretagna: sono galli indomabili che decidono di organizzarsi per respingere il nemico. A capo dell\'impresa vengono designati Asterix e Obelix, nonostante i grandi sforzi del centurione Caius Bonus. I galli sono invincibili per la forza sovrumana conferita loro da una pozione magica preparata dal loro druido Panoramix. Una sera giunge al villaggio l\'indovino (falso) Prolix, che predice al villaggio il ritrovamento di un tesoro, attorno al quale ci sarebbero stati molti Romani. Il giorno dopo, infatti, giunge al villaggio l\'esattore delle tasse di Cesare, le cui truppe vengono però malmenate da Asterix e Obelix. I Galli rubano le monete dell\'esattore e non ascoltano Asterix, che dice loro che il tesoro avrebbe portato solo sciagura perché avrebbe attirato l\'esercito di Cesare. Quella sera, a scopo di riconciliazione fra Prolix e Asterix (il secondo odiava il primo e lo accusava di essere un ciarlatano), il falso indovino decide di mangiare con l\'eroe gallico l\'omelette dell\'amicizia.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story2.jpg',
                    text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story3.jpg',
                    text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        kara_scene_3: {
            id: 'kara_scene_3',
            type: 'dialog',
            name: 'kara_scene_3',
            template: 'dialog.html',
            nextScene: 'kara_scene_4',
            background: 'dialog.jpg',
            firstDialog: 'kara_scene_3_dialog_1',
            dialogs: {
                kara_scene_3_dialog_1: {
                    id: 'kara_scene_3_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'kara_scene_3_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                kara_scene_3_dialog_2: {
                    id: 'kara_scene_3_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'kara_scene_3_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'kara_scene_3_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                kara_scene_3_dialog_3: {
                    id: 'kara_scene_3_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'kara_scene_4',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                kara_scene_3_dialog_4: {
                    id: 'kara_scene_3_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'kara_scene_4',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        kara_scene_4: {
            id: 'kara_scene_4',
            type: 'abstract',
            name: 'kara_scene_4',
            template: 'abstract.html',
            nextScene: 'kara_scene_5',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        kara_scene_5: {
            id: 'kara_scene_5',
            type: 'crossroad',
            name: 'kara_scene_5',
            template: 'crossroad.html',
            nextScene: '', // When empty goes to map            
            background: 'cross.jpg',
            text: 'Scegli una scelta (choise)',
            textClass: 'default',
            choiseA: {
                label: 'Scelta A',
                icon: 'ion-star',
                class: 'button-left',
                scene: 'kara_scene_6'
            },
            choiseB: {
                label: 'Scelta B',
                icon: 'ion-star',
                class: 'button-right',
                scene: 'kara_scene_8'
            }
        },
        kara_scene_6: {
            id: 'kara_scene_6',
            type: 'dialog',
            name: 'kara_scene_6',
            template: 'dialog.html',
            nextScene: 'kara_scene_7',
            background: 'dialog.jpg',
            firstDialog: 'kara_scene_6_dialog_1',
            dialogs: {
                kara_scene_6_dialog_1: {
                    id: 'kara_scene_6_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'kara_scene_6_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                kara_scene_6_dialog_2: {
                    id: 'kara_scene_6_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'kara_scene_6_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'kara_scene_6_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                kara_scene_6_dialog_3: {
                    id: 'kara_scene_6_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'kara_scene_7',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                kara_scene_6_dialog_4: {
                    id: 'kara_scene_6_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'kara_scene_7',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        kara_scene_7: {
            id: 'kara_scene_7',
            type: 'abstract',
            name: 'kara_scene_7',
            template: 'abstract.html',
            nextScene: 'kara_scene_10',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        kara_scene_8: {
            id: 'kara_scene_8',
            type: 'dialog',
            name: 'kara_scene_8',
            template: 'dialog.html',
            nextScene: 'kara_scene_9',
            background: 'dialog.jpg',
            firstDialog: 'kara_scene_8_dialog_1',
            dialogs: {
                kara_scene_8_dialog_1: {
                    id: 'kara_scene_8_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'kara_scene_8_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                kara_scene_8_dialog_2: {
                    id: 'kara_scene_8_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'kara_scene_8_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'kara_scene_8_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                kara_scene_8_dialog_3: {
                    id: 'kara_scene_8_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'kara_scene_9',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                kara_scene_8_dialog_4: {
                    id: 'kara_scene_8_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'kara_scene_9',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        kara_scene_9: {
            id: 'kara_scene_9',
            type: 'abstract',
            name: 'kara_scene_9',
            template: 'abstract.html',
            nextScene: 'kara_scene_10',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        kara_scene_10: {
            id: 'kara_scene_10',
            type: 'dialog',
            name: 'kara_scene_10',
            template: 'dialog.html',
            nextScene: '', // When empty goes to map
            background: 'dialog.jpg',
            firstDialog: 'kara_scene_10_dialog_1',
            dialogs: {
                kara_scene_10_dialog_1: {
                    id: 'kara_scene_10_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'kara_scene_10_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                kara_scene_10_dialog_2: {
                    id: 'kara_scene_10_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'kara_scene_10_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'kara_scene_10_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                kara_scene_10_dialog_3: {
                    id: 'kara_scene_10_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'kara_scene_5',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                kara_scene_10_dialog_4: {
                    id: 'kara_scene_10_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        lype_scene_1: {
            id: 'lype_scene_1',
            type: 'dialog',
            name: 'lype_scene_1',
            template: 'dialog.html',
            nextScene: 'lype_scene_2',
            background: 'dialog.jpg',
            firstDialog: 'lype_scene_1_dialog_1',
            dialogs: {
                lype_scene_1_dialog_1: {
                    id: 'lype_scene_1_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'lype_scene_1_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                lype_scene_1_dialog_2: {
                    id: 'lype_scene_1_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'lype_scene_1_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'lype_scene_1_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                lype_scene_1_dialog_3: {
                    id: 'lype_scene_1_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'lype_scene_2',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                lype_scene_1_dialog_4: {
                    id: 'lype_scene_1_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'lype_scene_2',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        lype_scene_2: {
            id: 'lype_scene_2',
            type: 'survey',
            name: 'lype_scene_2',
            template: 'survey.html',
            nextScene: 'lype_scene_3',
            background: 'survey.jpg',
            firstQuestion: 'lype_scene_2_survey_1',
            questions: {
                lype_scene_2_survey_1: {
                    id: 'lype_scene_2_survey_1',
                    text: 'Testo domanda 1',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 1-1',
                            nextQuestion: 'lype_scene_2_survey_2'
                        },
                        {
                            text: 'Risposta 1-2',
                            nextQuestion: 'lype_scene_2_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                lype_scene_2_survey_2: {
                    id: 'lype_scene_2_survey_2',
                    text: 'Testo domanda 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 2-1',
                            nextQuestion: 'lype_scene_2_survey_1'
                        },
                        {
                            text: 'Risposta 2-2',
                            nextQuestion: 'lype_scene_2_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                lype_scene_2_survey_3: {
                    id: 'lype_scene_2_survey_3',
                    text: 'Testo domanda 3',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 3-1',
                            nextQuestion: 'lype_scene_2_survey_4'
                        },
                        {
                            text: 'Risposta 3-2',
                            nextQuestion: 'lype_scene_2_survey_4'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                lype_scene_2_survey_4: {
                    id: 'lype_scene_2_survey_4',
                    text: 'Testo domanda 4',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 4-1',
                            nextQuestion: '' // When empty goes to next scene
                        },
                        {
                            text: 'Risposta 4-2',
                            nextQuestion: '' // When empty goes to next scene
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                }
            }
        },
        lype_scene_3: {
            id: 'lype_scene_3',
            type: 'story',
            name: 'lype_scene_3',
            template: 'story.html',
            nextScene: 'lype_scene_4',
            pages: [
                {
                    image: 'story1.jpg',
                    text: 'Nel 50 a.C., la Gallia viene occupata dalle truppe di Giulio Cesare. Gli unici a resistere all\'invasione sono gli abitanti di un piccolo villaggio in una zona imprecisata della Bretagna: sono galli indomabili che decidono di organizzarsi per respingere il nemico. A capo dell\'impresa vengono designati Asterix e Obelix, nonostante i grandi sforzi del centurione Caius Bonus. I galli sono invincibili per la forza sovrumana conferita loro da una pozione magica preparata dal loro druido Panoramix. Una sera giunge al villaggio l\'indovino (falso) Prolix, che predice al villaggio il ritrovamento di un tesoro, attorno al quale ci sarebbero stati molti Romani. Il giorno dopo, infatti, giunge al villaggio l\'esattore delle tasse di Cesare, le cui truppe vengono però malmenate da Asterix e Obelix. I Galli rubano le monete dell\'esattore e non ascoltano Asterix, che dice loro che il tesoro avrebbe portato solo sciagura perché avrebbe attirato l\'esercito di Cesare. Quella sera, a scopo di riconciliazione fra Prolix e Asterix (il secondo odiava il primo e lo accusava di essere un ciarlatano), il falso indovino decide di mangiare con l\'eroe gallico l\'omelette dell\'amicizia.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story2.jpg',
                    text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story3.jpg',
                    text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        lype_scene_4: {
            id: 'lype_scene_4',
            type: 'dialog',
            name: 'lype_scene_4',
            template: 'dialog.html',
            nextScene: 'lype_scene_5',
            background: 'dialog.jpg',
            firstDialog: 'lype_scene_4_dialog_1',
            dialogs: {
                lype_scene_4_dialog_1: {
                    id: 'lype_scene_4_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'lype_scene_4_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                lype_scene_4_dialog_2: {
                    id: 'lype_scene_4_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'lype_scene_4_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'lype_scene_4_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                lype_scene_4_dialog_3: {
                    id: 'lype_scene_4_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'lype_scene_5',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                lype_scene_4_dialog_4: {
                    id: 'lype_scene_4_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'lype_scene_5',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        lype_scene_5: {
            id: 'lype_scene_5',
            type: 'abstract',
            name: 'lype_scene_5',
            template: 'abstract.html',
            nextScene: 'lype_scene_6',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        lype_scene_6: {
            id: 'lype_scene_6',
            type: 'story',
            name: 'lype_scene_6',
            template: 'story.html',
            nextScene: 'lype_scene_7',
            pages: [
                {
                    image: 'story1.jpg',
                    text: 'Nel 50 a.C., la Gallia viene occupata dalle truppe di Giulio Cesare. Gli unici a resistere all\'invasione sono gli abitanti di un piccolo villaggio in una zona imprecisata della Bretagna: sono galli indomabili che decidono di organizzarsi per respingere il nemico. A capo dell\'impresa vengono designati Asterix e Obelix, nonostante i grandi sforzi del centurione Caius Bonus. I galli sono invincibili per la forza sovrumana conferita loro da una pozione magica preparata dal loro druido Panoramix. Una sera giunge al villaggio l\'indovino (falso) Prolix, che predice al villaggio il ritrovamento di un tesoro, attorno al quale ci sarebbero stati molti Romani. Il giorno dopo, infatti, giunge al villaggio l\'esattore delle tasse di Cesare, le cui truppe vengono però malmenate da Asterix e Obelix. I Galli rubano le monete dell\'esattore e non ascoltano Asterix, che dice loro che il tesoro avrebbe portato solo sciagura perché avrebbe attirato l\'esercito di Cesare. Quella sera, a scopo di riconciliazione fra Prolix e Asterix (il secondo odiava il primo e lo accusava di essere un ciarlatano), il falso indovino decide di mangiare con l\'eroe gallico l\'omelette dell\'amicizia.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story2.jpg',
                    text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story3.jpg',
                    text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        lype_scene_7: {
            id: 'lype_scene_7',
            type: 'dialog',
            name: 'lype_scene_7',
            template: 'dialog.html',
            nextScene: 'lype_scene_8',
            background: 'dialog.jpg',
            firstDialog: 'lype_scene_7_dialog_1',
            dialogs: {
                lype_scene_7_dialog_1: {
                    id: 'lype_scene_7_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'lype_scene_7_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                lype_scene_7_dialog_2: {
                    id: 'lype_scene_7_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'lype_scene_7_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'lype_scene_7_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                lype_scene_7_dialog_3: {
                    id: 'lype_scene_7_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'lype_scene_8',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                lype_scene_7_dialog_4: {
                    id: 'lype_scene_7_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'lype_scene_8',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        lype_scene_8: {
            id: 'lype_scene_8',
            type: 'abstract',
            name: 'lype_scene_8',
            template: 'abstract.html',
            nextScene: '', // When empty goes to map
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        aidos_scene_1: {
            id: 'aidos_scene_1',
            type: 'biography',
            name: 'aidos_scene_1',
            template: 'biography.html',
            nextScene: 'aidos_scene_2',
            background: 'bio.jpg',
            pages: [
                {
                    text: 'La vita di Dylan Dog è stata molto travagliata',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-right bubble-position-ragazzo',
                    nextLabel: 'Ancora',
                    nextClass: 'button-bottom'
                },
                {
                    text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-left bubble-position-talete',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                }
            ]
        },
        aidos_scene_2: {
            id: 'aidos_scene_2',
            type: 'dialog',
            name: 'aidos_scene_2',
            template: 'dialog.html',
            nextScene: 'aidos_scene_3',
            background: 'dialog.jpg',
            firstDialog: 'aidos_scene_2_dialog_1',
            dialogs: {
                aidos_scene_2_dialog_1: {
                    id: 'aidos_scene_2_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'aidos_scene_2_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                aidos_scene_2_dialog_2: {
                    id: 'aidos_scene_2_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'aidos_scene_2_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'aidos_scene_2_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                aidos_scene_2_dialog_3: {
                    id: 'aidos_scene_2_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'aidos_scene_3',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                aidos_scene_2_dialog_4: {
                    id: 'aidos_scene_2_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: 'aidos_scene_3',
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        aidos_scene_3: {
            id: 'aidos_scene_3',
            type: 'story',
            name: 'aidos_scene_3',
            template: 'story.html',
            nextScene: 'aidos_scene_4',
            pages: [
                {
                    image: 'story1.jpg',
                    text: 'Nel 50 a.C., la Gallia viene occupata dalle truppe di Giulio Cesare. Gli unici a resistere all\'invasione sono gli abitanti di un piccolo villaggio in una zona imprecisata della Bretagna: sono galli indomabili che decidono di organizzarsi per respingere il nemico. A capo dell\'impresa vengono designati Asterix e Obelix, nonostante i grandi sforzi del centurione Caius Bonus. I galli sono invincibili per la forza sovrumana conferita loro da una pozione magica preparata dal loro druido Panoramix. Una sera giunge al villaggio l\'indovino (falso) Prolix, che predice al villaggio il ritrovamento di un tesoro, attorno al quale ci sarebbero stati molti Romani. Il giorno dopo, infatti, giunge al villaggio l\'esattore delle tasse di Cesare, le cui truppe vengono però malmenate da Asterix e Obelix. I Galli rubano le monete dell\'esattore e non ascoltano Asterix, che dice loro che il tesoro avrebbe portato solo sciagura perché avrebbe attirato l\'esercito di Cesare. Quella sera, a scopo di riconciliazione fra Prolix e Asterix (il secondo odiava il primo e lo accusava di essere un ciarlatano), il falso indovino decide di mangiare con l\'eroe gallico l\'omelette dell\'amicizia.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story2.jpg',
                    text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                },
                {
                    image: 'story3.jpg',
                    text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
                    textClass: 'story-text',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-story'
                }
            ]
        },
        aidos_scene_4: {
            id: 'aidos_scene_4',
            type: 'survey',
            name: 'aidos_scene_4',
            template: 'survey.html',
            nextScene: 'aidos_scene_5',
            background: 'survey.jpg',
            firstQuestion: 'aidos_scene_4_survey_1',
            questions: {
                aidos_scene_4_survey_1: {
                    id: 'aidos_scene_4_survey_1',
                    text: 'Testo domanda 1',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 1-1',
                            nextQuestion: 'aidos_scene_4_survey_2'
                        },
                        {
                            text: 'Risposta 1-2',
                            nextQuestion: 'aidos_scene_4_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                aidos_scene_4_survey_2: {
                    id: 'aidos_scene_4_survey_2',
                    text: 'Testo domanda 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 2-1',
                            nextQuestion: 'aidos_scene_4_survey_1'
                        },
                        {
                            text: 'Risposta 2-2',
                            nextQuestion: 'aidos_scene_4_survey_3'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                aidos_scene_4_survey_3: {
                    id: 'aidos_scene_4_survey_3',
                    text: 'Testo domanda 3',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 3-1',
                            nextQuestion: 'aidos_scene_4_survey_4'
                        },
                        {
                            text: 'Risposta 3-2',
                            nextQuestion: 'aidos_scene_4_survey_4'
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                },
                aidos_scene_4_survey_4: {
                    id: 'aidos_scene_4_survey_4',
                    text: 'Testo domanda 4',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    answers: [
                        {
                            text: 'Risposta 4-1',
                            nextQuestion: '' // When empty goes to next scene
                        },
                        {
                            text: 'Risposta 4-2',
                            nextQuestion: '' // When empty goes to next scene
                        }
                    ],
                    answerLabel: 'Scegli',
                    answerClass: 'button-dialog'
                }
            }
        },
        aidos_scene_5: {
            id: 'aidos_scene_5',
            type: 'crossroad',
            name: 'aidos_scene_5',
            template: 'crossroad.html',
            nextScene: '', // When empty goes to map
            background: 'cross.jpg',
            choiseA: {
                label: 'Scelta A',
                icon: 'ion-star',
                class: 'button-left',
                scene: 'aidos_scene_6'
            },
            choiseB: {
                label: 'Scelta B',
                icon: 'ion-star',
                class: 'button-right',
                scene: 'aidos_scene_8'
            }
        },
        aidos_scene_6: {
            id: 'aidos_scene_6',
            type: 'abstract',
            name: 'aidos_scene_6',
            template: 'abstract.html',
            nextScene: 'aidos_scene_7',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        aidos_scene_7: {
            id: 'aidos_scene_7',
            type: 'dialog',
            name: 'aidos_scene_7',
            template: 'dialog.html',
            nextScene: '', // When empty goes to map
            background: 'dialog.jpg',
            firstDialog: 'aidos_scene_7_dialog_1',
            dialogs: {
                aidos_scene_7_dialog_1: {
                    id: 'aidos_scene_7_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'aidos_scene_7_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                aidos_scene_7_dialog_2: {
                    id: 'aidos_scene_7_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'aidos_scene_7_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'aidos_scene_7_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                aidos_scene_7_dialog_3: {
                    id: 'aidos_scene_7_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                aidos_scene_7_dialog_4: {
                    id: 'aidos_scene_7_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        },
        aidos_scene_8: {
            id: 'aidos_scene_8',
            type: 'abstract',
            name: 'aidos_scene_8',
            template: 'abstract.html',
            nextScene: 'aidos_scene_9',
            text: 'Voilà! In view, a humble vaudevillian veteran, cast vicariously as both victim and villain by the vicissitudes of Fate. This visage, no mere veneer of vanity, is a vestige of the vox populi, now vacant, vanished. However, this valorous visitation of a by-gone vexation, stands vivified and has vowed to vanquish these venal and virulent vermin vanguarding vice and vouchsafing the violently vicious and voracious violation of volition. [carves \'V\' into poster on wall] The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it\'s my very good honor to meet you and you may call me V.',
            background: 'abstract.jpg',
            nextLabel: 'Vai avanti'
        },
        aidos_scene_9: {
            id: 'aidos_scene_9',
            type: 'dialog',
            name: 'aidos_scene_9',
            template: 'dialog.html',
            nextScene: 'aidos_scene_9',
            background: 'dialog.jpg',
            firstDialog: 'aidos_scene_9_dialog_1',
            dialogs: {
                aidos_scene_9_dialog_1: {
                    id: 'aidos_scene_9_dialog_1',
                    text: 'Testo dialogo 1',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    video: 'https://www.youtube.com/embed/wyVM1evRxNw',
                    exitType: 'dialog', // dialog, choise, scene
                    nextDialog: 'aidos_scene_9_dialog_2',
                    nextLabel: 'Vai avanti',
                    nextClass: 'button-bottom'
                },
                aidos_scene_9_dialog_2: {
                    id: 'aidos_scene_9_dialog_2',
                    text: 'Testo dialogo 2',
                    textClass: 'bubble-ragazzo',
                    positionClass: 'bubble-dialog-left',
                    exitType: 'choise', // dialog, choise, scene
                    choises: [
                        {
                            text: 'Scelta 1',
                            nextDialog: 'aidos_scene_9_dialog_3'
                        },
                        {
                            text: 'Scelta 2',
                            nextDialog: 'aidos_scene_9_dialog_4'
                        }
                    ],
                    choiseLabel: 'Scegli',
                    choiseClass: 'button-dialog'
                },
                aidos_scene_9_dialog_3: {
                    id: 'aidos_scene_9_dialog_3',
                    text: 'Testo dialogo 3',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                },
                aidos_scene_9_dialog_4: {
                    id: 'aidos_scene_9_dialog_4',
                    text: 'Testo dialogo 4',
                    textClass: 'bubble-talete',
                    positionClass: 'bubble-dialog-right',
                    exitType: 'scene', // dialog, choise, scene
                    nextScene: '', // When empty goes to map
                    sceneLabel: 'Vai avanti',
                    sceneClass: 'button-bottom'
                }
            }
        }
    });
