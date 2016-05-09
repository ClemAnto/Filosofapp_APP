angular.module('filosofapp')

	.constant('SETTINGS', function() {
		return {
			debugEnabled: true,
			appVersion: '1.0.0',
			languages: ['it'],
			defaultLanguage: 'it',

			maxDialogChars: 100
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

	.constant('DEFAULT', {
		sceneLabel: 'Vai avanti',
		nextLabel: 'Vai avanti',
		nextClass: 'button-bottom',
		exitType: 'dialog'

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
				{ type: 'dialog', 		id: 'fobos_scene_1' },
				{ type: 'biography', 	id: 'fobos_scene_2' },
				{ type: 'story', 		id: 'fobos_scene_3' },
				{ type: 'abstract', 	id: 'fobos_scene_4' },
				{ type: 'dialog', 		id: 'fobos_scene_5' },
				{ type: 'abstract', 	id: 'fobos_scene_6' },
				{ type: 'dialog', 		id: 'fobos_scene_7' },
				{ type: 'survey', 		id: 'fobos_scene_8' }
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
			background: 'elpis_00_bg.jpg',
			pages: [
				
				{
					text: 'Bene, ragazzo… siamo ai piedi dei monti Elpis. Di fronte a noi, in fondo, c’è un’imponente cima. Il signore che vedi si chiama Ernst, è un grande pensatore e ha cercato più volte di scalare quella vetta.',
					////textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Da solo? E come avrebbe fatto?',
					////textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'L’ha scalata col Pensiero e con la Ricerca. E ci è riuscito quasi sempre. Ernst Bloch è un pensatore contemporaneo, dei nostri tempi, ma stranamente è uno dei meno conosciuti qui su Sophia.',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Infatti non l’ho mai sentito nominare!',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Ora lo conoscerai... si tratta di un filosofo, per così dire, detective. Ha speso tutta la sua vita, prima di trasferirsi qui su Sophia, alla ricerca di una verità più autentica, di una realtà più profonda...',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				 {
					text: '...e diversa da quella che guardano superficialmente gli occhi di tutti gli altri. E non ha perso mai la speranza di ritrovarla, quella verità.',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'La speranza?',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Già, la speranza, caro ragazzo. E’ proprio la speranza, radiosa e vitale tensione verso l’Oltre, che ha portato Enrst oltre di quel monte. Ernst è nato nel 1885, in Germania, a Ludwigshafen. Ha studiato a Monaco e a Würzburg.',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'A 33 anni ha pubblicato “Spirito dell’utopia”. Quando la Germania è sotto il Nazismo Ernst è dovuto scappare negli Stati Uniti. Proprio in America ha pubblicato il suo libro più importante, “Il Principio Speranza”.',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Alla liberazione della sua Germania dal Nazismo segue però un altro dolore, la costruzione del muro di Berlino, fine di un’altra speranza, quella di vedere libera la sua Germania Est.',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Le ultime due opere sono Ateismo nel cristianesimo (1968) ed Experimentum mundi (1975).',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				}


			]
		},
		elpis_scene_2: {
			id: 'elpis_scene_2',
			type: 'dialog',
			name: 'elpis_scene_2',
			template: 'dialog.html',
			nextScene: 'elpis_scene_3',
			background: 'elpis_01_bg.jpg',
			firstDialog: 'elpis_scene_2_dialog_1',
			dialogs: {
				elpis_scene_2_dialog_1: {
					id: 'elpis_scene_2_dialog_1',
					text: 'Professor Bloch, come va?',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_2: {
					id: 'elpis_scene_2_dialog_2',
					text: 'Bene, Talete. Ciao ragazzo, benvenuto su Sophia e benvenuto sul mio Sentiero di Speranza verso i monti Elpis',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_3: {
					id: 'elpis_scene_2_dialog_3',
					text: 'Salve professore. Avrei subito una domanda per lei...',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_4: {
					id: 'elpis_scene_2_dialog_4',
					text: 'Mi fa piacere questa tua curiosità!',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_5: {
					id: 'elpis_scene_2_dialog_5',
					text: 'Dimmi pure...',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_6: {
					id: 'elpis_scene_2_dialog_6',
					text: 'Perché se ha già scalato diverse volte il monte, continua a stare qua, ai suoi piedi, ancora alla ricerca di sentieri nuovi e nuovi percorsi?',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_6bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_6bis: {
					id: 'elpis_scene_2_dialog_6bis',
					text: 'Perché è l’unico modo che conosco per continuare a ricercare quello di cui abbiamo bisogno. Ogni volta che torno, anche se ho visto cosa c’è oltre, mi rendo conto che c’è un nuovo dettaglio da non trascurare e spero che sia quello definitivo. E questa speranza mi arricchisce, mi riempie il cuore e mi dà energia per continuare.',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_7: {
					id: 'elpis_scene_2_dialog_7',
					text: 'Scegli la risposta da dare a Bloch!',
					textClass: 'suggest',
					positionClass: 'suggest-top',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Che tipo di dettagli?',
							nextDialog: 'elpis_scene_2_dialog_8'
						},
						{
							text: 'Non capisco...',
							nextDialog: 'elpis_scene_2_dialog_12'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				elpis_scene_2_dialog_8: {
					id: 'elpis_scene_2_dialog_8',
					text: 'Una traccia di verità… una traccia è sempre un particolare che colpisce, che cattura l’attenzione perché fuori posto, non in ordine, ma che si rivela essenziale, perché in grado di aprire una finestra su un aspetto della realtà che non è stato considerato.',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_9',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_9: {
					id: 'elpis_scene_2_dialog_9',
					text: 'La Realtà Utopica?',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_10',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_10: {
					id: 'elpis_scene_2_dialog_10',
					text: 'Già, Talete, la chiamo realtà utopica, perché non esiste ancora in nessun luogo. Ma attenzione, non sto parlando di fantasticherie, ma di scoperte concrete...',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_10bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_10bis: {
					id: 'elpis_scene_2_dialog_10bis',
					text: '...in grado di cambiare le nostre vite e quelle di intere comunità. Mi piace definirle un incontro con se stessi e con le vie di questo mondo',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_11',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_11: {
					id: 'elpis_scene_2_dialog_11',
					text: 'La speranza allora è un po’ come la libertà...',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_11bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_11bis: {
					id: 'elpis_scene_2_dialog_11bis',
					text: '',
					video: 'https://www.youtube.com/embed/7JQHDr72ZuM',
					textClass: '',
					positionClass: '',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_11ter',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				 elpis_scene_2_dialog_11ter: {
					id: 'elpis_scene_2_dialog_11ter',
					text: 'Proseguiamo...',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'elpis_scene_3',
					
					sceneClass: 'button-bottom'
				},
				elpis_scene_2_dialog_12: {
					id: 'elpis_scene_2_dialog_12',
					text: 'Se mi accontentassi di ciò che ho visto la prima volta che sono passato al di là del monte e lo raccontassi a voi, imporrei il mio punto di vista che appartiene a quel momento e a quel percorso.',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_13',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_13: {
					id: 'elpis_scene_2_dialog_13',
					text: 'E quindi?',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_14',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_14: {
					id: 'elpis_scene_2_dialog_14',
					text: 'E quindi sottrarrei a voi l’ottimistica previsione di poter scoprire un nuovo pezzo di verità e a me stesso, che cresco ogni giorno, di riscoprire quello che altrimenti si trasformerebbe solo in un ricordo cristallizzato, che non si evolve. La realtà sembra irraggiungibile ma è raggiungibile in ogni percorso di scoperta.',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_14bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_14bis: {
					id: 'elpis_scene_2_dialog_14bis',
					text: 'Io la chiamo realtà utopica, perché non esiste ancora in nessun luogo. Ma attenzione, non sto parlando di fantasticherie, ma di scoperte concrete… in grado di cambiare le nostre vite e quelle di intere comunità. Mi piace definirle un incontro con se stessi e con le vie di questo mondo',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_15',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_15: {
					id: 'elpis_scene_2_dialog_15',
					text: 'La speranza allora è un po’ come la libertà...',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_15bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_15bis: {
					id: 'elpis_scene_2_dialog_15bis',
					text: '',
					video: 'https://www.youtube.com/embed/7JQHDr72ZuM',
					textClass: '',
					positionClass: '',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_2_dialog_15ter',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_2_dialog_15ter: {
					id: 'elpis_scene_2_dialog_15ter',
					text: 'Proseguiamo...',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'elpis_scene_3',
					
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
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'bloch02.jpg',
					text: 'La filosofia di Bloch è ricca di spunti e suggestioni, importante la relazione con gli espressionisti, la scuola di Francoforte, la storia delle eresie, centrale l\'adesione al marxismo. Molti intellettuali dell’epoca identificarono nell’URSS un baluardo contro la miseria dell’Europa di quegli anni. Bloch, pur essendo tra questi, non mancò di ravvisare, soprattutto nel socialismo realizzato, alcuni limiti e di formulare delle correzioni. Tre sono essenzialmente gli aspetti che Bloch critica del marxismo: la teoria economica lì dove prevede il crollo del capitalismo come necessario, la considerazione dell\'oppressione come esclusivamente determinata dai rapporti di produzione e la mancata riflessione sulle garanzie di libertà dell\'individuo. Bloch tenta, dunque, di correggere il marxismo “volgare”, lontano dalla più autentica lezione di Marx. Ciò significa coniugare “corrente fredda” e “corrente calda” del marxismo, abbandonare economicismo e determinismo a favore di un primato della morale, poiché “non si muore per un bilancio di produzione ben organizzato',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'bloch03.jpg',
					text: 'I proseliti del marxismo hanno dunque dimenticato la lezione più autentica di Marx, quel “sogno di una cosa” che tiene aperto l’aspetto emotivo, pratico e patico del processo verso un mondo più umano. Non è sufficiente, secondo Bloch, comprendere razionalmente i problemi che attanagliano il nostro presente, né razionalmente ipotizzare gli “ingredienti” necessari per una società perfetta, senza interrogare la facoltà che conferisce “senso” alla vita umana: l’immaginazione. Il marxismo, in sintesi, può tendere ad una società più giusta, una società un cui siano eliminate le differenze di classe, il che è certamente una conditio sine qua non per la realizzazione dell’ideale utopico, ma non ci assicura ancora che l’umanità sarà più autentica e più felice. La tensione verso il futuro, l’indignazione contro l’oppressione, il desiderio di trovare condizioni di vita più autentiche, la fede nelle possibilità dell’uomo sono tonalità affettive fondamentali, che non contrastano, bensì conferiscono senso alla ragione e rappresentano fondamentali antidoti contro la rassegnazione e il nichilismo.<br/><br/><i> Bibliografia: E. Bloch, Il principio speranza, trad. it. di E. De Angelis, Garzanti, Milano 1994 - E. Bloch, Thomas Münzer, teologo della rivoluzione [1921], trad. it. di S. Zecchi e S. Krasnovsky, Feltrinelli, Milano, 1980</i>',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
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
					answers: [
						{
							text: 'è la più autentica dimensione umana',
							nextQuestion: '',
							textAfter: 'Corretto! Hai completato il questionario!'
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
			background: 'elpis_00_bg.jpg',
			text: 'Per migliorare il mondo e avvicinarlo al tuo ideale, ritieni più utile:',
			//textClass: 'default',
			choiceA: {
				label: 'Che ognuno faccia la sua parte, rendendo conto alla propria coscienza e ai propri principi.',
				icon: 'ion-star',
				class: 'button-left',
				scene: 'elpis_scene_6'
			},
			choiceB: {
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
			background: 'elpis_00_bg.jpg',
			firstDialog: 'elpis_scene_7_dialog_1',
			dialogs: {
				elpis_scene_7_dialog_1: {
					id: 'elpis_scene_7_dialog_1',
					text: 'Ora che andrai a visitare i miei amici, qui sull’isola di Sophia, ora che tornerai a casa, cosa porterai con te di nuovo?',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_7_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_7_dialog_2: {
					id: 'elpis_scene_7_dialog_2',
					text: 'Non so… in realtà fino a poco fa ero deluso… volevo salire sul Monte Elpis, ma poi ho capito che è più importante conoscere ciò che puoi cogliere dal cammino, prima ancora di intraprenderlo.',
				   //textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_7_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_7_dialog_3: {
					id: 'elpis_scene_7_dialog_3',
					text: 'In tutto ciò che farai nella tua lunga vita, a partire dai cosiddetti sogni ad occhi aperti, tutti i desideri che avrai, lo stupore dinanzi all’arte, alla musica o a un grande film… Beh, sappi che si tratta di espressioni di questa tensione in avanti, verso qualcosa di nuovo.',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_7_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_7_dialog_4: {
					id: 'elpis_scene_7_dialog_4',
					text: 'Un modo d’essere diverso e migliore, che non è solo futuro, ma inizia già ad illuminare il presente, anticipando così la realizzazione del nuovo',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_7_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_7_dialog_5: {
					id: 'elpis_scene_7_dialog_5',
					text: 'Torna, se vuoi, a farmi visita, e rispondimi diversamente… avremo spunti per prendere altre strade nella nostra conversazione e percorrere nuovi sentieri',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_7_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_7_dialog_6: {
					id: 'elpis_scene_7_dialog_6',
					text: 'Tornerò sicuramente, professor Bloch. E’ una certezza, non… una speranza!',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_7_dialog_6bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_7_dialog_6bis: {
					id: 'elpis_scene_7_dialog_6bis',
					text: 'Bene! Ti aspetto! Buon viaggio…',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_7_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				
				elpis_scene_7_dialog_7: {
					id: 'elpis_scene_7_dialog_7',
					text: '',
					video: 'https://www.youtube.com/embed/W1oKuhEZ4hU',
					textClass: '',
					positionClass: '',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_7_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_7_dialog_8: {
					id: 'elpis_scene_7_dialog_8',
					text: 'Torna alla mappa',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '',
					
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
			background: 'elpis_00_bg.jpg',
			firstDialog: 'elpis_scene_9_dialog_1',
			dialogs: {
				elpis_scene_9_dialog_1: {
					id: 'elpis_scene_9_dialog_1',
					text: 'Ora che andrai a visitare i miei amici, qui sull’isola di Sophia, ora che tornerai a casa, cosa porterai con te di nuovo?',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_9_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_9_dialog_2: {
					id: 'elpis_scene_9_dialog_2',
					text: 'Non so… in realtà fino a poco fa ero deluso… volevo salire sul Monte Elpis, ma poi ho capito che è più importante conoscere ciò che puoi cogliere dal cammino, prima ancora di intraprenderlo.',
				   //textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_9_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_9_dialog_3: {
					id: 'elpis_scene_9_dialog_3',
					text: 'In tutto ciò che farai nella tua lunga vita, a partire dai cosiddetti sogni ad occhi aperti, tutti i desideri che avrai, lo stupore dinanzi all’arte, alla musica o a un grande film… Beh, sappi che si tratta di espressioni di questa tensione in avanti, verso qualcosa di nuovo.',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_9_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_9_dialog_4: {
					id: 'elpis_scene_9_dialog_4',
					text: 'Un modo d’essere diverso e migliore, che non è solo futuro, ma inizia già ad illuminare il presente, anticipando così la realizzazione del nuovo',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_9_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_9_dialog_5: {
					id: 'elpis_scene_9_dialog_5',
					text: 'Torna, se vuoi, a farmi visita, e rispondimi diversamente… avremo spunti per prendere altre strade nella nostra conversazione e percorrere nuovi sentieri',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_9_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_9_dialog_6: {
					id: 'elpis_scene_9_dialog_6',
					text: 'Tornerò sicuramente, professor Bloch. E’ una certezza, non… una speranza!',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_9_dialog_6bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_9_dialog_6bis: {
					id: 'elpis_scene_9_dialog_6bis',
					text: 'Bene! Ti aspetto! Buon viaggio…',
					//textClass: 'default',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_9_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				
				elpis_scene_9_dialog_7: {
					id: 'elpis_scene_9_dialog_7',
					text: '',
					video: 'https://www.youtube.com/embed/W1oKuhEZ4hU',
					textClass: '',
					positionClass: '',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'elpis_scene_9_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				elpis_scene_9_dialog_8: {
					id: 'elpis_scene_9_dialog_8',
					text: 'Torna alla mappa',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '',
					
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
			background: 'agape_00_bg.jpg',
			firstDialog: 'agape_scene_1_dialog_1',
			dialogs: {
				agape_scene_1_dialog_1: {
					text: 'Qui dove siamo, Talete?',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_1_dialog_2'
				},
				agape_scene_1_dialog_2: {
					text: 'Ad Agape, nella piazza centrale. Quella che i greci chiamavano l’Agora. Qui si discuteva delle decisioni da assumere in città, ma anche di filosofia, di matematica e alti principi.',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'agape_scene_1_dialog_3'
				},
				agape_scene_1_dialog_3: {
					text: 'Dunque quel signore è un filosofo greco. Credo di averlo visto da qualche parte, forse scolpito in qualche busto.',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_1_dialog_4'
				},
				agape_scene_1_dialog_4: {
					text: 'Lo credo anch’io. Lui è greco come me ed è uno dei fondatori di tutto il pensiero occidentale: è…',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'agape_scene_1_dialog_5'
				},
				agape_scene_1_dialog_5: {
					text: '...Platone!',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_1_dialog_6'
				},
				agape_scene_1_dialog_6: {
					text: 'Piacere, ragazzo. Sono contento che tu conosca il mio nome.',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_1_dialog_7',
				},
				agape_scene_1_dialog_7: {
					text: 'Beh, lei in realtà è nella copertina del libro di filosofia di mio fratello! Ecco dove l’avevo vista...',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_1_dialog_8',
				},
				agape_scene_1_dialog_8: {
					text: 'Platone, presentati al nostro giovane ospite',
					positionClass: 'bubble-dialog-left',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'agape_scene_2',					
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
			background: 'agape_01_bg.jpg',
			pages: [
				{
					text: 'Caro ragazzo, oggi vorrei parlarti dell’Amore.',
					positionClass: 'bubble-dialog-top'
				},
				{
					text: 'Amore Platonico?',
					positionClass: 'bubble-dialog-right'
				},
				{
					text: 'Ecco, dimentica completamente questa espressione, della quale neanche io conosco il senso. Ti parlerò dell’Amore come sentimento che è innanzitutto desiderio di conoscenza',
					positionClass: 'bubble-dialog-top'
				},
				{
					text: 'Bene!',
					positionClass: 'bubble-dialog-right'
				},
				{
					text: 'Sono nato ad Atene nel 427 a.C. Il mio vero nome è Aristocle.',
					positionClass: 'bubble-dialog-top'
				},
				{
					text: 'Davvero?',
					positionClass: 'bubble-dialog-right'
				},
				{
					text: 'Già, Aristocle come mio nonno. A chiamarmi Platone (in realtà Palatone per via del mio fisico possente) fu un mio allenatore di ginnastica. A vent’anni sono diventato discepolo di Socrate, incontro che mi ha cambiato la vita',
					positionClass: 'bubble-dialog-top'
				},
				{
					text: 'Ragazzo, conosci Socrate?',
					positionClass: 'bubble-dialog-left'
				},
				{
					text: 'L\’ho sentito nominare molte volte, Talete.',
					positionClass: 'bubble-dialog-right'
				},
				{
					text: 'Beh, quando lo studierai, fra qualche anno, anche a te l’incontro con Socrate potrebbe cambiare la vita e spalancarti la mente.',
					positionClass: 'bubble-dialog-left'
				},
				{
					text: 'In quel periodo Atene era stravolta da sanguinose guerre e dopo la morte del mio maestro Socrate intrapresi una serie di viaggi nel Mediterraneo, anche in Italia. Nel corso di questi viaggi ho molto riflettuto e ho messo nero su bianco il frutto dei miei pensieri, componendo i dialoghi cosiddetti “socratici”. In Sicilia subii una serie di disavventure e venni ridotto in schiavitù dal tiranno di Siracusa Dioinigi il Vecchio. Venni liberato da un mio “collega” allievo di Socrate e tornai ad Atene. Nella mia città fondai l’Accademia, Scuola di filosofia che prese questo nome perché sorgeva in un luogo dedicato ad Accademo.',
					positionClass: 'bubble-dialog-top'
				},
				{
					text: 'Oggi Accademia si usa come parola per indicare un luogo di alta formazione. Una scuola importante.',
					positionClass: 'bubble-dialog-right'
				},
				{
					text: 'Esatto, e anche la mia Accademia lo era. Vi insegnarono i più famosi matematici e astronomi: Eudosso di Cnido ed Eraclide Pontico, medici della scuola siciliana, filosofi come Speusippo, Filippo di Opunte e Archita di Taranto, ma soprattutto vi insegnò per oltre venti anni Aristotele.',
					positionClass: 'bubble-dialog-top'
				},
				{
					text: 'Altro nome conosciuto...',
					positionClass: 'bubble-dialog-right'
				},                
				{
					text: 'Già. Erano anni elettrizzanti quelli. L’ambiente dell’Accademia fu straordinario anche perché riusciva a conciliare il metodo della ricerca con uno stile di vita meraviglioso, la cui summa era data dallo stare insieme agli amici a discutere per lungo tempo. In questo periodo ho composto i dialoghi Menone (sulla vita), Menesseno, Fedone (sull’anima), Repubblica, Eutidemo e Cratilo. E poi, ovviamente, ho composto il famosissimo dialogo sull’Amore...',
					positionClass: 'bubble-dialog-top'
				},
				{
					text: '...il Simposio.',
					positionClass: 'bubble-dialog-right'
				},    
				{
					text: 'Esatto, il Simposio.',
					positionClass: 'bubble-dialog-top'
				}
				]
		},
	   
		agape_scene_3: {
			id: 'agape_scene_3',
			type: 'dialog',
			name: 'agape_scene_3',
			template: 'dialog.html',
			nextScene: 'agape_scene_4',
			background: 'agape_01_bg.jpg',
			firstDialog: 'agape_scene_3_dialog_1',
			dialogs: {
				agape_scene_3_dialog_1: {
					text: 'Platone, posso farle una domanda su questo posto?',
					positionClass: 'bubble-dialog-left bubble-position-ragazzo',
					nextDialog: 'agape_scene_3_dialog_2'
				},
				agape_scene_3_dialog_2: {
					text: 'Ma certo!',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_3_dialog_3'
				},
				agape_scene_3_dialog_3: {
					text: 'Cosa rappresenta questa statua? E\' un po\' strana...',
					positionClass: 'bubble-dialog-left bubble-position-ragazzo',
					nextDialog: 'agape_scene_3_dialog_4'
				},
				agape_scene_3_dialog_4: {
					text: 'Rappresenta il mito dell’androgino… ne scrivo proprio nel Simposio',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_3_dialog_5'
				},
				 agape_scene_3_dialog_5: {
					text: 'Che significa androgino?',
					positionClass: 'bubble-dialog-left bubble-position-ragazzo',
					nextDialog: 'agape_scene_3_dialog_6'
				},
				agape_scene_3_dialog_6: {
					text: 'Secondo il mito Androgino era il terzo sesso secondo un antico mito, raccontato da Aristofane nel mio libro. Aristofane usa questo racconto per spiegare le origini dell’Amore fra uomo e donna. Oggi abbiamo bisogno l’uno dell’altro, l’uomo della donna, perché un tempo avevamo tutti entrambe le parti, maschile e femminile. Il nostro corpo era formato da quattro braccia, quattro gambe, due visi e due cuori...',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_3_dialog_7'
				},
				agape_scene_3_dialog_7: {
					text: 'L’Uomo era così perfetto, autosufficiente, quasi divino, e rischiava di insidiare la Potenza degli Dei. Per questo motivo Zeus divise gli uomini in due, per indebolirli e renderli completi solo unendosi e ritrovando la propria metà in un altro essere di sesso opposto. Ecco la nascita dell’Amore e del Bisogno dell’altro, che è indipendente da pulsioni o interessi, ma risponde a un semplice desiderio di ricongiungimento naturale.',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_3_dialog_9'
				},
				agape_scene_3_dialog_9: {
					video: 'https://www.youtube.com/embed/pWg5MiDYIzY',
					nextDialog: 'agape_scene_3_dialog_10'
				},
				 agape_scene_3_dialog_10: {
					text: 'Proseguiamo...',
					positionClass: 'bubble-dialog-left',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'agape_scene_4',					
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
					image: 'agape_story_1.jpg',
					text: 'Due sono i dialoghi dedicati da Platone all’amore: il Simposio ed il Fedro nella prima parte. La necessaria premessa per la comprensione del discorso sull’Amore è però nel Fedone, dedicato alla natura dell’anima umana: se infatti non si comprende quest’ultima, non è possibile neppure comprendere che cosa sia l’amore, che per Platone è un’affezione dell’anima.'
				},
				{
					image: 'agape_story_2.jpg',
					text: 'Il Simposio è forse il più conosciuto dei dialoghi di Platone, e si differenzia dagli altri scritti del filosofo per la sua struttura, che si articola non tanto in un dialogo, quanto nelle varie parti di un agone oratorio, in cui ciascuno degli interlocutori, scelti tra i più illustri intellettuali di Atene, espone con un ampio discorso la propria teoria su Eros, cioè sull’Amore. La cornice in cui si inseriscono i vari interventi è rappresentata dal banchetto offerto dal poeta tragico Agatone, allestito per festeggiare la sua vittoria negli agoni delle Lenee, le feste dette anche Grandi Dionisie, del 416  a. C. '
				},
				{
					image: 'agape_story_3.jpg',
					text: 'Fra gli invitati, oltre a Socrate e al suo discepolo Aristodemo, ci sono il medico Erissimaco, il commediografo Aristofane, Pausania che è l’amante di Agatone e il suo amico Fedro, figlio di Pitocle ed esperto di retorica: ognuno di loro, su invito di Erissimaco, dovrà tenere un discorso che ha per oggetto un elogio di Eros. Verso la fine del banchetto, fa una clamorosa irruzione anche Alcibiade, ubriaco e con il capo cinto da una ghirlanda di edera e di viole, che si presenta per festeggiare Agatone, e che viene accolto con grande cordialità. Alla fine del banchetto, la mattina seguente, Socrate (uno dei pochi rimasti svegli per tutta la notte) lascia l’abitazione e, seguito da Aristodemo, si dirige verso l’Accademia. Il racconto di questi fatti avviene però per bocca di due amici, Apollodoro e Glaucone, i quali durante una notte passeggiano per le strade di Atene, conversando.'
				},
				{
					image: 'agape_story_3.jpg',
					text: 'Verso la fine del discorso si assiste ad un rovesciamento del concetto greco secondo il quale l’amato è superiore all’amante, perché autosufficiente: in questo caso infatti la superiorità è dell’amante e il merito maggiore è dell’amato che ama. L’ultima frase del discorso di Fedro sottolinea l’importanza di Amore: «Così io sostengo che Amore è il più antico fra gli dei, il più meritevole di onore e quello che è più padrone di spingere gli uomini, da vivi e da morti, all’acquisto della virtù e della felicità» (Simposio, 180b). Pausania è il secondo a parlare fra gli ospiti. Egli distingue due generi di Amore, poiché come esistono due Afroditi (l’Afrodite Urania, “celeste” e figlia di Urano, e l’Afrodite Pandemia, “comune”, “volgare” e figlia di Zeus e di Dione) così esistono anche due tipologie di Amore: il primo detto “Celeste”, che si accompagna appunto ad Afrodite Urania, e il secondo detto “Volgare”, che si accompagna invece ad Afrodite Pandemia. L’Amore Volgare è spinto ad amare i corpi più che le anime e Afrodite Pandemia, partecipando di entrambe le nature dei suoi genitori, natura maschile e natura femminile, preferisce tanto le donne - considerate nella cultura greca antica un oggetto inferiore d’amore - quanto i fanciulli giovani, e quindi facilmente plagiabili. L’Amore Celeste, invece, trascende quello corporale e si fa guida verso un elevato sentire». Come terzo, in sostituzione di Aristofane che è colto dal singhiozzo, interviene Erissimaco, il quale, da buon Verso la fine del discorso si assiste ad un rovesciamento del concetto greco secondo il quale l’amato è superiore all’amante, perché autosufficiente: in questo caso infatti la superiorità è dell’amante e il merito maggiore è dell’amato che ama. L’ultima frase del discorso di Fedro sottolinea l’importanza di Amore: «Così io sostengo che Amore è il più antico fra gli dei, il più meritevole di onore e quello che è più padrone di spingere gli uomini, da vivi e da morti, all’acquisto della virtù e della felicità» (Simposio, 180b). Pausania è il secondo a parlare fra gli ospiti. Egli distingue due generi di Amore, poiché come esistono due Afroditi (l’Afrodite Urania, “celeste” e figlia di Urano, e l’Afrodite Pandemia, “comune”, “volgare” e figlia di Zeus e di Dione) così esistono anche due tipologie di Amore: il primo detto “Celeste”, che si accompagna appunto ad Afrodite Urania, e il secondo detto “Volgare”, che si accompagna invece ad Afrodite Pandemia. L’Amore Volgare è spinto ad amare i corpi più che le anime e Afrodite Pandemia, partecipando di entrambe le nature dei suoi genitori, natura maschile e natura femminile, preferisce tanto le donne - considerate nella cultura greca antica un oggetto inferiore d’amore - quanto i fanciulli giovani, e quindi facilmente plagiabili. L’Amore Celeste, invece, trascende quello corporale e si fa guida verso un elevato sentire». Come terzo, in sostituzione di Aristofane che è colto dal singhiozzo, interviene Erissimaco, il quale, da buon medico, considera l’amore un fenomeno naturale e ne distingue gli aspetti normali da quelli morbosi. Nell’esporre la sua teoria si trova d’accordo sulle due specie d’Amore individuate da Pausania: «che Amore dunque sia duplice, pare a me che sia un distinguere bene», con una piccola differenza però: al posto dell’Afrodite Pandemia (Volgare), Erissimaco pone l’Afrodite Polimnia (“dai molti inni”, cioè portatrice di disordine). Amore infatti, come ogni cosa in natura, deve essere armonico ed equilibrato in ogni sua azione («comunione di opposti»): infatti la “soverchieria”, “il disordine” insiti in ogni forma di attrazione non possono riuscire a buon fine, ma determinano contagi, malattie, guasti e distruzione; «ma quando invece l’Amore diventa incontenibile e infuria violento durante le stagioni dell’anno, produce guasti e distrugge molte cose». Socrate interviene per sesto ed ultimo: egli sulle prime tenta di schermirsi per la propria incapacità di essere un buon oratore, ma sostenuto dalla convinzione che su ogni cosa «basta dire la verità», decide di farsi avanti e di fare lo stesso anche con Eros, scegliendo ed ordinando nel modo migliore le cose più belle. Infatti gli elogi di Eros fatti dai precedenti oratori poggiavano tutta la loro efficacia sul dispiego della retorica e su argomentazioni sofistiche, arrivando a gareggiare nell’associare ad Eros i migliori benefici. Socrate invece partirà dalla verità. In sostanza «Amore è amore di alcune cose», ed in particolare «di quelle di cui si avverte mancanza». A questo punto sul discorso di Socrate si innesta quello di Diotima, sacerdotessa di Mantinea, e maestra di Socrate per quanto riguarda la concezione di Amore. Secondo questa concezione «Amore non è bello [...] e non è neanche buono», fu concepito da Penìa (Povertà), che approfittò di Póros (Espediente), ubriaco, alla festa del genetliaco di Afrodite: egli è quindi un essere intermedio tra il divino e l’umano che, assieme alle qualità positive, assomma in sé anche quelle negative. Socrate, come apprende da Diotima, era caduto nello stesso equivoco nel quale cadono tutti - o quasi tutti - gli uomini, i quali in Amore vedono solo il lato più bello. Tutto questo deriva dal fatto che Amore viene identificato con l’amato e non con l’amante: il primo è delicato, compiuto, il secondo invece è quale appare nella descrizione che Diotima ne viene facendo. Ma qual è la molla che spinge l’amante verso l’amato? L’attrazione della bellezza può essere uno stadio, ma non se è fine a se stessa: tra gli uomini chi è fertile nel corpo è attratto dalla donna e cerca la felicità nella discendenza della prole e nella continuità, chi invece è fertile nell’anima cerca un’anima bella a cui unire la propria, e può creare con questa una comunanza più profonda di quella che si può avere con i figli. Su questo piano chi ama riuscirà «a capire che tutto il bello che riguarda il corpo è cosa ben da poco». Quindi accusa gli altri di aver attribuito false qualità ad Eros.'
				}
			]
		},
		agape_scene_5: {
			id: 'agape_scene_5',
			type: 'survey',
			name: 'agape_scene_5',
			template: 'survey.html',
			nextScene: 'agape_scene_6',
			background: 'agape_01_bg.jpg',
			firstQuestion: 'agape_scene_5_survey_1',
			questions: {
				agape_scene_5_survey_1: {
					text: 'Nel mito “dell’Androgino”',
					answers: [
						{
							text: 'si narra dell’Amore Volgare prima dell’avvento di Eros fra gli uomini',
							nextQuestion: 'agape_scene_5_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario...'
						},
						{
							text: 'l’Uomo, diviso, ricerca attraverso l’Eros l’integrità originaria perduta',
							nextQuestion: 'agape_scene_5_survey_2',
							textAfter: 'Corretto! Vai avanti...'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				agape_scene_5_survey_2: {
					text: 'L’Amore Celeste:',
					answers: [
						{
							text: 'è quello che va oltre l’attrazione corporea, ma mira alla conquista dell’animo intero',
							nextQuestion: 'agape_scene_5_survey_3',
							textAfter: 'Corretto! Vai avanti...'
						},
						{
							text: 'è quello che si nutre per gli dei',
							nextQuestion: 'agape_scene_5_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario...'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				agape_scene_5_survey_3: {
					text: 'Durante il Simposio, Socrate',
					answers: [
						{
							text: 'pone l’attenzione su aspetti di verità rispetto a punti di partenza “sofistici” degli altri partecipanti',
							nextQuestion: '',
							textAfter: 'Corretto! Hai completato il questionario!'
						},
						{
							text: 'rifiuta di discutere dell’Eros, ritenuto un Sentimento fallace',
							nextQuestion: 'agape_scene_5_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario...'
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
			text: 'Scegli la statua che preferisci...',
			//textClass: 'default',
			choiceA: {
				label: 'A) Amore Celeste (Afrodite "Urania")',
				icon: 'ion-star',
				class: 'button-left',
				scene: 'agape_scene_7'
			},
			choiceB: {
				label: 'B) Amore Volgare (Afrodite "Pandemia")',
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
			text: "Dopo Fedro parlarono altri, ma lui non si ricordava bene. Non me ne ha parlato e invece mi ha riportato il discorso di Pausania, che si espresse in questi termini: “Io credo, Fedro, che l’argomento sia mal posto quando ci si domanda semplicemente di fare l’elogio dell’Eros. Se di Eros ve ne fosse uno solo, potrebbe anche andar bene. Ma non è così: non ce n'è uno soltanto, e allora è bene prima spiegare di quale Eros dobbiamo tessere l’elogio. Cercherò dunque, da parte mia, di chiarire le cose su questo punto, di precisare innanzitutto quale amore si debba lodare e quindi pronuncerò un elogio che sia degno di questo dio. Tutti sappiamo che non c'è Afrodite senza Eros. Se dunque non vi fosse che una Afrodite, non vi sarebbe che un solo Eros. Ma essa è duplice, e quindi, necessariamente, abbiamo due Eros. Come negare che esistano due dee? L’una, senza dubbio la più antica, non ha madre: è figlia di Urano, e la chiamiamo quindi la dea del cielo, Afrodite Urania; l'altra, la più giovane, è figlia di Zeus e di Dione, e la chiamiamo quindi la dea popolare, Afrodite Pandemia. E allora necessariamente l’Eros che serve l’una dovrà chiamarsi Eros Pandemio, quello che serve l’altra Eros Uranio. Certo, bisogna lodare tutti gli dei; ma, detto questo, qual è il dominio dei due dei? È questo che dobbiamo provare a dire. Ogni azione si caratterizza per questo, che in sé non è né bella né brutta. In quello che adesso facciamo, bere, cantare, chiacchierare, non c'è nulla di bello in sé; è piuttosto il modo in cui si compie un’azione a dar questo o quel risultato, e così seguendo le regole della bellezza e della rettitudine un’azione diventa bella, al contrario senza rettitudine diventa brutta. E lo stesso avviene per l’atto d’amore, e quindi non tutto l’amore è bello e degno di elogio: lo è soltanto quello che porta ad amare bene. Ora l’Eros compagno di Afrodite Pandemia certo è volgare e opera a casaccio: è proprio degli uomini da poco. Intanto queste persone si innamorano sia delle ragazze che dei ragazzi, indifferentemente; e poi amano i corpi, non l’anima, e preferiscono le persone meno intelligenti: vogliono arrivare dritto al loro scopo, non gl’importa il modo - che sia bello o brutto. Capita quindi che si imbattano nel bene, e capita anche il contrario. Come è ovvio, questo Eros si unisce alla più giovane delle due dee, che sin dal suo concepimento partecipa sia del maschile che del femminile. L’altro Eros, invece, partecipa dell’Afrodite Urania che da sempre è estranea all’elemento femminile e partecipa soltanto del maschile; e poi è la più antica e non conosce alcun impulso brutale. Per questa ragione quanti sono ispirati da questo Eros sono attratti dall'elemento maschile: essi amano teneramente il sesso per natura più forte e intelligente. E proprio da questa inclinazione ad innamorarsi dei ragazzi si possono riconoscere quanti sono posseduti con purezza da questo Eros, perché essi non amano i giovani prima che abbiano dato prova d'intelligenza. Ora, questo è impossibile che accada prima che i giovani siano abbastanza grandi da avere la prima barba. È questa l’età, io credo, in cui è bene cominciare a rivolgere ad essi attenzioni d’amore, per restare poi con loro per tutta la vita, per legare le proprie esistenze, piuttosto che abusare della credulità di un giovane sciocco, farsi gioco di lui e piantarlo poi per correre dietro ad un altro. Ci vorrebbe una legge che proibisse di amare i ragazzi troppo giovani: così non si sprecherebbero tante cure per un risultato imprevedibile. Non è infatti possibile prevedere che cosa ne sarà di un ragazzino, se avrà vizi o virtù sia nel corpo che nell'anima. L’uomo che vale si pone senza dubbio da sé, e di buon grado, questa legge. Ma bisognerebbe anche che chi coltiva amori volgari abbia un limite, simile a quello che nella misura del possibile è imposto dalla legge che impedisce di avere relazioni d'amore con donne di condizione non servile. Sono proprio questi amanti volgari, infatti, che hanno screditato l’Eros e dato a certuni il coraggio di dire che è una vergogna cedere ad un amante. Chi dice questo, lo fa perché ha davanti agli occhi la mancanza di tatto e di onestà di questi amanti volgari, mentre nessun gesto al mondo merita d'essere criticato quando la convenienza e la legge sono rispettate. Ancora di più: la regola di condotta, per quel che concerne l’Eros, è facile da comprendere nelle altre città, perché la sua definizione è semplice. Nell’Elide, presso i Beoti, e nelle altre città in cui i cittadini non sono abili nel far grandi discorsi, la regola ammessa è semplice: è un bene cedere agli amanti e nessuno, giovane o vecchio, dirà mai che c'è da vergognarsi. Il fine, credo, è di evitare l'imbarazzo di dover convincere i giovani con la parola, perché non sono gran parlatori. Nella Ionia, al contrario, e in diverse altre zone, la regola dice che questo non va bene: sono paesi dominati dai Barbari. Presso i Barbari, infatti, a causa dei loro regimi tirannici, il giudizio comune è che ci sia da vergognarsi a cedere a un amante: lo stesso giudizio si dà per l’amore per il sapere e per l’esercizio fisico. Senza dubbio, ai loro capi non conviene che nascano grandi intelligenze tra i sudditi, e neppure grandi amicizie e società saldamente unite, come in effetti l’Eros, più di ogni altra cosa al mondo, sa produrre. Di questo hanno fatto esperienza anche i tiranni qui da noi: l'amore di Aristogitone e l'amicizia di Armodio, sentimenti solidi, hanno distrutto il loro potere. Così là dove si ritiene che ci sia da vergognarsi a cedere a un amante, questa convinzione è nata dalla debolezza morale della gente: desiderio di dominio presso i capi, vigliaccheria presso i sudditi. Là invece dove la regola ammette in tutta semplicità che è cosa buona, essa è nata per la pigrizia dell'animo di quella gente. Presso di noi la regola è molto più bella e, come ho detto, non è facile da comprendere. C’è da rifletterci, in effetti: è più bello, si dice, amare apertamente piuttosto che in segreto, e soprattutto amare i giovani di nascita migliore e di meriti più alti, anche se meno belli di altri; di più, chi è innamorato è straordinariamente incoraggiato da tutti, e nessuno pensa che faccia qualcosa di cui vergognarsi: il successo è il suo onore, lo scacco è la sua vergogna; e nei tentativi di conquista la regola elogia gli amanti per delle stravaganze che esporrebbero alle critiche più severe chiunque osasse comportarsi così per altri scopi. Supponiamo infatti che uno voglia ottenere del denaro da qualcuno, che voglia esercitare una magistratura, o una qualsiasi funzione importante: se accetta di fare ciò che fanno gli amanti per i loro amati - assillarli con preghiere e suppliche, pronunciare grandi giuramenti, dormire dietro le loro porte, abbassarsi volontariamente ad ogni sorta di schiavitù che nessuno schiavo accetterebbe di buon grado - ebbene tutto questo gli sarà impedito sia dai suoi amici che dai suoi nemici: questi gli rimprovereranno la sua adulazione e la sua bassezza, quelli lo faranno ragionare e arrossiranno per lui. Queste cose, invece, sono ben viste per l'innamorato e la nostra regola non le critica affatto: sono qualcosa che si sta ad ammirare. E la cosa più strana è, secondo il detto popolare, che lui solo può giurare e ottenere grazia davanti agli dei se tradisce i suoi giuramenti: dinnanzi ad Afrodite, a quanto si dice, nessun giuramento vale. Così gli dei e gli uomini danno agli innamorati una libertà totale: lo dice la nostra regola. E questo porta a pensare che la regola nella nostra città giudichi cose perfette la bellezza e l’amore, e l'amicizia che ricompensa gli amanti. Ma quando d'altra parte i padri fanno sorvegliare dai pedagoghi i loro figlioli innamorati, in modo che non possano parlar d'amore con i loro amanti; quando i giovani della loro età, i loro amici, li rimproverano per il loro amore; quando gli adulti non si oppongono a queste critiche e non le biasimano come fuori luogo; allora se si considera tutto questo si potrebbe credere, al contrario, che questo tipo di amore goda presso di noi di cattiva fama. Ecco, io credo, come stanno le cose. La faccenda non è per nulla semplice, come ho già detto all'inizio: in se stessa non è né bella né brutta. È bella se le azioni sono belle, è brutta se le azioni sono brutte. È cosa brutta cedere ad un uomo cattivo e per cattivi motivi; è cosa bella cedere ad un uomo di valore e per bei motivi. Ora chi si comporta male è, come prima dicevo, l'amante volgare, che ama il corpo più che l'anima. Non ha costanza, perché l'oggetto del suo amore è incostante. All’affievolirsi della bellezza del corpo che ama, egli “s'invola e va via”, e tradisce senza vergogna alcuna tante belle parole, tante promesse. Ma chi ama il carattere di una persona per le sue alte qualità, resta fedele tutta la vita perché il suo amore riposa su qualcosa di costante. Le nostre regole si propongono di mettere gli uomini alla prova della serietà e dell'onestà, perché si ceda agli uomini che valgono e si fuggano gli altri. Incoraggiano quindi a sceglier bene tra il cedere e il fuggire, creando delle prove che permettano di riconoscere di che natura sia l'amante, di che natura sia la sua anima. Su questo si fonda evidentemente la massima: “a ceder subito c'è da vergognarsi”. Più tempo passa, infatti, più si ha la prova, sembra, della serietà dell'amore. Una seconda massima, poi, dice che c'è da vergognarsi a cedere per denaro o per averne vantaggi politici, sia che ci si intimorisca di fronte ad un’azione decisa, che rende incapaci di reagire, sia che non si respingano con sdegno le lusinghe della ricchezza e del successo politico: niente di tutto ciò ha l’aria d'essere solido e stabile, e dunque non può venirne alcuna generosa amicizia. Non resta dunque, secondo la nostra regola, che una via onesta perché l'amato possa cedere all'amante. Presso di noi la regola è la seguente: come tra gli amanti non c'è nulla di umiliante nel far di se stessi degli schiavi consenzienti, secondo quella forma di schiavitù che prima dicevo, e non c'è il rischio di essere criticati, nello stesso modo rimane una sola altra forma di schiavitù volontaria che sfugga a ogni critica: quella che ha la virtù come proprio oggetto. La nostra regola infatti dice questo, che se si accetta di essere al servizio di un altro pensando di diventare migliori grazie a lui, nel sapere o in un'altra virtù, qualunque sia, questa servitù liberamente accolta non ha niente di cattivo e non è umiliante. Bisogna dunque riunire in una sola queste due regole, quella che riguarda l'amore verso i ragazzi e quella che riguarda l'amore per il sapere o per tutte le altre forme di virtù, se vogliamo che si abbia un bene dal fatto che l'amato ceda all'amante. Infatti quando le vie dell'amante e dell'amato si incontrano, ed essi insieme seguono la stessa regola, il primo di rendere al suo amato tutti i servizi compatibili con la giustizia, il secondo di dare all'uomo che cerca di farlo diventare saggio e buono tutte le forme di assistenza compatibili con la giustizia – l’uno potendo contribuire a dare l'intelligenza e tutte le forme di virtù, l'altro avendo bisogno di progredire nell'educazione e più in generale nel sapere - allora in verità quando queste regole convergono, e in questo caso solamente, questa coincidenza fa sì che sia cosa bella che l’amato ceda all'amante. Altrimenti, è da escludere. Nel bene, anche se chi cede è completamente vittima della situazione, non c'è alcun disonore, ma in tutti gli altri casi, che si sia vittime o meno, c'è di che vergognarsi. Infatti se c'è qualcuno che per arricchirsi ha ceduto a un'amante che crede ricco, e viene poi ingannato e non ottiene nulla, perché il suo amante si rivela povero, la cosa rimane riprovevole anche se si è una vittima. Un simile uomo sembra mostrare il fondo della sua anima: per denaro si presta a tutto verso il primo venuto, e questo non è affatto bello. Secondo lo stesso ragionamento se si cede a qualcuno credendolo pieno di qualità e pensando di diventare migliori legandosi a questo amante, e se in seguito ci si trova ingannati scoprendo la sua malvagità, quanto sia povero nella virtù, ebbene chi è stato ingannato non ha nulla di cui vergognarsi. Anche in questo caso, infatti, sembra rivelarsi la qualità dell’anima: la virtù e il progresso morale, in tutto e per tutto, sono l'oggetto della propria passione - e questa è la cosa più bella che ci sia. Quindi è bellissimo cedere, quando si cede per la virtù. Questo Eros viene dall'Afrodite Urania, ed è davvero divino e prezioso per la città come per gli individui, perché esige dall'amante e dall'amato che entrambi veglino su se stessi, per essere ricchi di virtù. Quanto agli altri, essi rivelano il legame con l’altra dea, l’Afrodite Pandemia. Ecco, mio caro Fedro: io non ho fatto che improvvisare; è questo il mio tributo per Eros”. (Simposio, 180c-185c)."
		},
		agape_scene_8: {
			id: 'agape_scene_8',
			type: 'dialog',
			name: 'agape_scene_8',
			template: 'dialog.html',
			nextScene: '', // When empty goes to map
			background: 'agape_01_bg.jpg',
			firstDialog: 'agape_scene_8_dialog_1',
			dialogs: {
				agape_scene_8_dialog_1: {
					text: 'Ma amare è bene o male? Affidarsi all’Amore è una necessità o una scelta?',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_8_dialog_2'
				},
				agape_scene_8_dialog_2: {
					text: 'Tutto quello che stai ascoltando, tutto quello che ho raccontato nel Simposio, prescinde da un giudizio assoluto sul sentimento. Il sentimento Amore ha varie forme e può avere diversi scopi. Sono tali scopi a renderlo bene o male',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_8_dialog_3'
				},
				agape_scene_8_dialog_3: {
					text: 'Platone, racconta al ragazzo l’ideale della Kalokagathia',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'agape_scene_8_dialog_4'
				},
				agape_scene_8_dialog_4: {
					text: 'E’ il concetto greco di perfezione, che un po’ risponde alla tua domanda. Cos’è buono? Ciò che è perfetto, ciò che fonde etica ed estetica, il bello e il buono. La parola Kalokagathia è proprio una fusione fra questi due aggettivi. Ciò che è bello è necessariamente buono. E in questo c’entra anche il valore, il patrimonio interiore',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_8_dialog_5'
				},
				agape_scene_8_dialog_5: {
					text: 'Insomma, l’Amore  Celeste è quello che muove un eroe?',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_8_dialog_6'
				},
				agape_scene_8_dialog_6: {
					text: 'Esatto: l’eroismo epico è l’incarnazione del Bello, ed è lo stesso Amore che è anche motore che spinge l’innamorato a tendersi verso l’amato e viceversa. Ora va’ e torna qua compiendo altre scelte se vuoi raccogliere altri punti di vista sull’Eros',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_8_dialog_7'
				},
				agape_scene_8_dialog_7: {
					video: 'https://www.youtube.com/embed/W1oKuhEZ4hU',
					nextDialog: 'agape_scene_8_dialog_8'
					//exitType: 'scene' // dialog, choice, scene
				},
				agape_scene_8_dialog_8: {
					text: 'Torna alla mappa',
					positionClass: 'bubble-dialog-bottom',
					exitType: 'scene', // dialog, choice, scene
				},
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'agape_scene_10_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				agape_scene_10_dialog_2: {
					id: 'agape_scene_10_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'agape_scene_10_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'agape_scene_10_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				agape_scene_10_dialog_3: {
					id: 'agape_scene_10_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
					sceneClass: 'button-bottom'
				},
				agape_scene_10_dialog_4: {
					id: 'agape_scene_10_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
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
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'menis_scene_2_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_2_dialog_2: {
					id: 'menis_scene_2_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'menis_scene_2_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'menis_scene_2_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				menis_scene_2_dialog_3: {
					id: 'menis_scene_2_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'menis_scene_3',
					
					sceneClass: 'button-bottom'
				},
				menis_scene_2_dialog_4: {
					id: 'menis_scene_2_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'menis_scene_3',
					
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
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story2.jpg',
					text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story3.jpg',
					text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'menis_scene_4_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_4_dialog_2: {
					id: 'menis_scene_4_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'menis_scene_4_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'menis_scene_4_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				menis_scene_4_dialog_3: {
					id: 'menis_scene_4_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'menis_scene_5',
					
					sceneClass: 'button-bottom'
				},
				menis_scene_4_dialog_4: {
					id: 'menis_scene_4_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'menis_scene_5',
					
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
			choiceA: {
				label: 'Scelta A',
				icon: 'ion-star',
				class: 'button-left',
				scene: 'menis_scene_7'
			},
			choiceB: {
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'menis_scene_8_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_8_dialog_2: {
					id: 'menis_scene_8_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'menis_scene_8_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'menis_scene_8_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				menis_scene_8_dialog_3: {
					id: 'menis_scene_8_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
					sceneClass: 'button-bottom'
				},
				menis_scene_8_dialog_4: {
					id: 'menis_scene_8_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'menis_scene_10_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_10_dialog_2: {
					id: 'menis_scene_10_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'menis_scene_10_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'menis_scene_10_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				menis_scene_10_dialog_3: {
					id: 'menis_scene_10_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
					sceneClass: 'button-bottom'
				},
				menis_scene_10_dialog_4: {
					id: 'menis_scene_10_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
					sceneClass: 'button-bottom'
				}
			}
		},

// FOBOS

		fobos_scene_1: {
			id: 'fobos_scene_1',
			type: 'dialog',
			name: 'fobos_scene_1',
			template: 'dialog.html',
			nextScene: 'fobos_scene_2',
			background: 'fobos_00_bg.jpg',
			firstDialog: 'fobos_scene_1_dialog_1',
			dialogs: {
				fobos_scene_1_dialog_1: {
					id: 'fobos_scene_1_dialog_1',
					text: 'Questo è un posto decisamente spaventoso…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_1_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_1_dialog_2: {
					id: 'fobos_scene_1_dialog_2',
					text: 'Non voglio nasconderti niente, ragazzo… qui parleremo della paura. La parola greca che dà il nome a questa emozione ha dato anche il nome a questo posto. I laghi che vedi si chiamano Phobos.',
					//textClass: 'bubble-ragazzo',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'fobos_scene_1_dialog_3'
					
				},
				fobos_scene_1_dialog_3: {
					id: 'fobos_scene_1_dialog_3',
					text: 'E’ utile parlare della paura? Non è un sentimento da evitare?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'fobos_scene_1_dialog_4'
				},
				fobos_scene_1_dialog_4: {
					id: 'fobos_scene_1_dialog_4',
					text: 'Come tutte le emozioni, anche la paura è un sentimento che dobbiamo conoscere. La paura…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					 // dialog, choice, scene
					nextDialog: 'fobos_scene_1_dialog_5',
				},
				fobos_scene_1_dialog_5: {
					id: 'fobos_scene_1_dialog_5',
					text: '…tiene insieme i popoli. La paura consente ai dominanti di scrivere la storia. E’ il sentimento individuale con maggiore impatto sociale che esista. E’ importantissimo',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_1_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_1_dialog_6: {
					id: 'fobos_scene_1_dialog_6',
					text: 'Cos…cos’è stato questo ululato?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_1_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_1_dialog_7: {
					id: 'fobos_scene_1_dialog_7',
					text: 'E’ stato il richiamo del Leviatano, il mostro che ho inventato io. Una mia creazione utile a spiegare il funzionamento della vita sociale, o almeno come lo vedo io, ma io sono vissuto in un’epoca diversa, in cui comandava uno solo… Piacere, mi chiamo Thomas Hobbes',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_1_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_1_dialog_8: {
					id: 'fobos_scene_1_dialog_8',
					text: 'Piacere…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					exitType: 'scene',
					nextScene: 'fobos_scene_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				
					sceneClass: 'button-bottom'
				}
			}
		},
		
		fobos_scene_2: {
			id: 'fobos_scene_2',
			type: 'dialog',
			name: 'fobos_scene_2',
			template: 'dialog.html',
			nextScene: 'fobos_scene_3',
			background: 'fobos_01_bg.jpg',
			firstDialog: 'fobos_scene_2_dialog_1',
			dialogs: {
				
				fobos_scene_2_dialog_1: {
					id: 'fobos_scene_2_dialog_1',
					text: 'Sono nato in Inghilterra nel 1588 e ho studiato ad Oxford. Dopo la laurea ho cominciato a insegnare privatamente e dal 1610 al 1613 ho accompagnato un mio discepolo in un lungo viaggio sul continente, visitando la Francia e l’Italia, ed entrando così in contatto con alcune delle personalità più significative dell’epoca. Ben presto ho maturato la convinzione che una scienza che voglia dirsi rigorosa debba procedere secondo il metodo dimostrativo di tipo geometrico',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_2_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_2_dialog_2: {
					id: 'fobos_scene_2_dialog_2',
					text: 'Beh, scusi, se posso permettermi… lo sanno tutti',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_2_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'	
				},
				fobos_scene_2_dialog_3: {
					id: 'fobos_scene_2_dialog_3',
					text: 'Oggi sì… ma allora non era un’assunzione così scontata!  A tal proposito ricordo l’elettrizzante incontro con Galilei nel 1634. Durante questo periodo prese corpo il progetto di un’opera in cui la spiegazione meccanicistico-materialista fosse applicata non soltanto alla fisica, ma anche alla morale e alla politica Nel 1651 ho pubblicato quello che tanti definiscono la mia opera più importante, il Leviatano. Dopo il Leviatano ho pubblicato anche il De Corpore e il De Homine',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_2_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_2_dialog_4: {
					id: 'fobos_scene_2_dialog_4',
					text: 'Ancora un ululato, ma non spaventarti… ora impareremo a conoscere il Leviatano, e la conoscenza è senz’altro il primo antidoto alla Paura',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					exitType: 'scene',
					nextScene: 'fobos_scene_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				sceneClass: 'button-bottom'
				}
			}
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
					text: 'Thomas Hobbes visse e sviluppò il suo pensiero in uno dei periodi più critici per l’Europa: la guerra dei Trent’anni, le lotte per l’affermazione della monarchia assolutistica in Francia, la crisi della monarchia inglese e i presagi della guerra civile. Dalla situazione politica del suo tempo Hobbes ha tratto l’esigenza di comprendere la genesi e la natura del potere. Lo stato moderno, in cui si concentra il potere e al quale è demandato il compito dell’organizzazione della vita sociale degli individui trova piena giustificazione nella filosofia di Hobbes. Per poter effettuare un’analisi rigorosa della vita politica Hobbes ritiene necessario primariamente comprendere il comportamento e le passioni degli uomini. Diversamente da Cartesio, Hobbes non segna alcuna distanza tra mondo fisico e mondo spirituale, tra corpo e cogito, poiché il medesimo meccanismo domina in entrambi i poli di questa opposizione, per cui è possibile applicare ai comportamenti e alle passioni umani lo stesso metodo che Galilei aveva utilizzato per lo studio della fisica.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story2.jpg',
					text: 'Al centro del pensiero politico di Hobbes è posto il concetto, che si andava in quel periodo affermando in Europa, di sovranità legibus soluta, vale a dire superiore e indipendente da ogni altro potere. Lo Stato è per Hobbes il Dio mortale, rispetto al quale l’individuo si trova in posizione di assoluta subordinazione. Esso è un automa, un soggetto artificiale, non è una realtà naturale, e non si fonda su alcuna norma trascendente, né tantomeno su un presunto istinto sociale umano, bensì è esclusivamente il frutto di convenzioni e accordi tra gli uomini. Lo stesso sovrano non è più l’uomo naturale, ma una persona “artificiale”, un attore che agisce per conto dei sudditi, autori di ciò che egli compie.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story3.jpg',
					text: 'Hobbes prende avvio da un’analisi della sensibilità e delle passioni umane. Il principio cui viene ricondotta tanto la vita biologica che quella psichica dell’uomo è il movimento. Le sensazioni, le idee, le immagini altro non sono che movimenti. Quando tali movimenti assecondano il movimento vitale si prova piacere, quando invece lo ostacolano si prova dolore. Partendo da questo assunto Hobbes spiega in chiave meccanicistica l’intera vita passionale umana. Questo modello di spiegazione non può non ridurre l’umana libertà a semplice apparenza: la libertà assoluta è come “una trottola di legno mossa da fanciulli (…) che ora ruota su se stessa, ora finisce per urtare gli stinchi della gente; se avesse la sensazione del proprio movimento penserebbe che esso proceda dalla sua volontà, a meno di non percepire che cosa l’ha messa in movimento” . La libertà è assenza di opposizione, vale a dire “impedimenti esterni al movimento”. Dunque: “Libero è colui che, nelle cose che è capace di fare con la propria forza e il proprio ingegno, non è impedito di fare ciò che ha volontà di fare” . Essere liberi significa dunque non essere impediti nel fare ciò che vogliamo, desideriamo, siamo inclini a fare, ma ciò non va confuso con la libertà della volontà, del desiderio, dell’inclinazione. In questa direzione libertà e necessità finiscono col coincidere: “Libertà e necessità sono compatibili. Lo sono nel caso dell’acqua che ha non solo la libertà ma la necessità di scorrere nel letto del fiume, e lo sono altrettanto nel caso delle azioni che gli uomini compiono volontariamente e che procedono, da un lato, dalla libertà (poiché procedono dalla loro volontà) e tuttavia, dall’altro, dalla necessità, poiché ogni atto della volontà umana, ogni desiderio, e ogni inclinazione procede da qualche causa, e questa da un’altra, e così via in una catena continua” . A partire da tali premesse Hobbes muove per costruire la sua teoria politica, distinguendo tra un ipotetico stato di natura, in cui gli uomini convivono senza però stabilire regole e leggi per una pacifica convivenza, e stato civile, in cui invece la convivenza è regolata dallo Stato. Distingue, dunque, con riguardo all’uomo e alla comunità umana, tra ciò che è posto in essere dalla natura e ciò che invece è opera dell’uomo (ricordati del carattere artificiale dello Stato).  ',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
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

			// 

		questions: {
				fobos_scene_4_survey_1: {
					id: 'fobos_scene_4_survey_1',
					text: 'Vivere rispettando le leggi rappresenta:',
					answers: [
						{
							text: 'una necessità per ciascun uomo, al pari della libertà',
							nextQuestion: 'fobos_scene_4_survey_2',
							textAfter: 'Corretto! Vai avanti...'
						},
						{
							text: 'uno stato di paura permanente',
							nextQuestion: 'fobos_scene_4_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.' 
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},


// FUNZIONA

				fobos_scene_4_survey_2: {
					id: 'fobos_scene_4_survey_2',
					text: 'Nello stato di natura:',
					answers: [
						{
							text: 'l’uomo è felice, libero e sicuro e non percepisce alcuna paura',
							nextQuestion: 'fobos_scene_4_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.' 
						},
						{
							text: 'l’uomo è libero ma ha paura perché è continuamente a rischio',
							nextQuestion: 'fobos_scene_4_survey_3',
							textAfter: 'Corretto! Vai avanti...'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				fobos_scene_4_survey_3: {
					id: 'fobos_scene_4_survey_3',
					text: 'La paura spinge a:',
					answers: [
						{
							text: 'stabilire delle regole che coniugano sicurezza e libertà',
							nextQuestion: '',
							textAfter: 'Corretto! Hai completato il questionario!'
						},
						{
							text: 'sopraffare il prossimo per i propri interessi',
							nextQuestion: 'fobos_scene_4_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
			   
			}
},

		fobos_scene_5: {
			id: 'fobos_scene_5',
			type: 'abstract',
			name: 'fobos_scene_5',
			template: 'abstract.html',
			nextScene: 'fobos_scene_6',
			text: 'Il titolo del capolavoro di Hobbes fa riferimento al Leviatano, un mostro biblico, metà balena e metà drago, che Dio ha creato e che menziona a Giobbe, con l’intento di evocare la propria onnipotenza. Hobbes si richiama ad esso per rappresentare lo Stato come ciò cui “nessun’altra potenza terrena può essere paragonata” (Giobbe, 41,25). Nell’introduzione al Leviatano Hobbes chiarisce: “La natura, ossia l’arte per mezzo della quale Dio ha fatto e governa il mondo, viene imitata dall’arte dell’uomo, oltre che in molte altre cose, anche nella capacità di produrre un animale artificiale. (…) L’arte si spinge anche più avanti attraverso l’imitazione di quel prodotto razionale che è l’opera più eccellente della natura: l’uomo. Viene infatti creato dall’arte quel grande Leviatano chiamato Repubblica o Stato (in latino civitas), che non è altro che un uomo artificiale, anche se ha una statura e una forza maggiori rispetto all’uomo naturale, per proteggere e difendere il quale è stato voluto. In esso, la sovranità è un’anima artificiale poiché dà vita e movimento all’intero corpo…” . In primo luogo Hobbes osserva che la natura ha fatto gli uomini uguali sia nelle facoltà del corpo che in quelle della mente. Questa affermazione non deve stupire, Hobbes è ben consapevole del fatto che esistano differenze tra uomo e uomo, e tuttavia ciò che egli intende sostenere è che tali differenze non pongono nessun uomo al di sopra di un altro. Nessuno, infatti, può rivendicare per sé un vantaggio, ad esempio il godimento esclusivo di un bene, che non possa essere preteso anche da altri, e nessuno, anche se più forte fisicamente, può essere certo di avere la meglio su un altro: “…tutto sommato, la differenza tra uomo e uomo non è così considerevole al punto che un uomo possa da ciò rivendicare per sé un beneficio cui un altro non possa pretendere tanto quanto lui. Infatti, quanto alla forza corporea, il più debole ne ha a sufficienza per uccidere il più forte, sia ricorrendo a una macchinazione segreta, sia alleandosi con altri che corrono il suo stesso pericolo”. Da questa uguaglianza di capacità, che altro non è che eguaglianza nella capacità di uccidersi l’un l’altro,  Hobbes deduce lo stato di guerra “di ogni uomo contro ogni altro uomo”, dovuto all’uguaglianza nella speranza di poter raggiungere i propri obiettivi: “Perciò, se due uomini desiderano la medesima cosa, di cui tuttavia non possono entrambi fruire, diventano nemici e, nel perseguire il loro scopo (…) cercano di distruggersi o di sottomettersi l’un l’altro” . Diffidenza, contesa, timore dominano le relazioni tra gli uomini nello stato di natura, “…troviamo nella natura umana tre cause principali di contesa: in primo luogo la rivalità; in secondo luogo la diffidenza; in terzo luogo l’orgoglio. La prima porta gli uomini ad aggredire per trarne un vantaggio; la seconda per la loro sicurezza; la terza per la loro reputazione. Nel primo caso ricorrono alla violenza per rendersi padroni della persona di altri uomini, delle loro donne, dei loro figli e del loro bestiame; nel secondo caso per difenderli. Nel terzo caso, per delle inezie, ad esempio una parola, un sorriso, una divergenza di opinioni, e qualsiasi altro segno di disistima, direttamente rivolto alla loro persona o a questa di riflesso, essendo indirizzato ai loro familiari, ai loro amici, alla nazione, alla loro professione, o al loro nome. Da ciò appare chiaramente che quando gli uomini vivono senza un potere comune che li tenga tutti in soggezione, essi si trovano in quella condizione chiamata guerra: guerra che è quella di ogni uomo contro ogni altro uomo”. Nello stato di natura vige dunque “il potere delle passioni, la guerra, la paura, la miseria, la bruttura, la solitudine, la barbarie, l’ignoranza, la crudeltà”. In esso l’uguaglianza significa la pari capacità di nuocersi a vicenda e la libertà non conosce alcun limite di principio, ma solo ostacoli di fatto. Questa condizione è così miserabile che l’uomo avverte la necessità assoluta di abbandonarla, la possibilità di uscire da questo stato di guerra permanente è affidata in parte alle passioni e in parte alla ragione: “Le passioni che inducono gli uomini alla pace sono la paura della morte, il desiderio di quelle cose che sono necessarie a una vita piacevole e la speranza di ottenerle con la propria operosità ingegnosa”. La ragione (che per Hobbes altro non è che capacità di calcolare vantaggi e svantaggi) suggerisce agli uomini delle regole che possono condurli ad un accordo in vista della pace. L’unico diritto che appartiene all’uomo per natura, non stabilito dunque da nessuna autorità, altro non è che “la libertà che ciascuno ha di usare il proprio potere a suo arbitrio per la conservazione della sua natura”. Due sole sono le leggi valide per natura (Hobbes intende per legge una regola della ragione che proibisce all’uomo di distruggere o mettere a repentaglio la propria vita): 1. “che si debba cercare la pace per quanto si ha speranza di ottenerla” e, se ciò non è possibile, che ci si debba difendere con tutti i mezzi di cui si dispone; 2. “che si sia disposti, quando anche altri lo siano, a rinunciare, nella misura in cui lo si ritenga necessario alla pace e alla propria difesa, al diritto su tutto e ci si accontenti di avere tanta libertà nei confronti degli altri quanta se ne concede agli altri nei confronti di se stessi”. Dalla legge che ci obbliga a rinunciare al nostro diritto di usare ad arbitrio la nostra libertà, quando anche ogni altro lo fa, si genera una terza legge, che obbliga al rispetto dei patti. Quest’ultima è legge nel senso che sarebbe un assurdo logico il suo contrario. Ma le passioni degli uomini rischiano sempre di avere la meglio sulle leggi di ragione e sulle regole della prudenza per cui si rende necessario istituire un potere che sia in grado di assicurare la pace e la sicurezza degli uomini. Lo Stato sorge in virtù del patto che i singoli sottoscrivono di alienare la loro libertà di natura a un potere unico: “L’unico modo di erigere un potere comune che possa essere in grado di difenderli dall’aggressione di stranieri e dai torti reciproci (…) è quello di trasferire tutto il loro potere e tutta la loro forza a un solo uomo o a una sola assemblea di uomini”. In tal modo gli uomini divengono sudditi e istituiscono l’autorità del sovrano, obbligandosi a obbedire a essa. Importante sottolineare che non è il popolo che trasferisce i poteri al sovrano, ma è attraverso il sovrano che si istituisce il popolo, infatti, solo nel momento in cui si sottomette al sovrano la moltitudine si dota di una volontà unica e diviene popolo. Il sovrano, in virtù dell’autorizzazione ricevuta dai singoli (che gli hanno ceduto il loro potere) rappresenta (come l’attore) le azioni e il volere dei sudditi (autori). Come abbiamo visto l’uscita dallo stato di natura (che rappresenta comunque solo una finzione, utile a spiegare l’origine del potere), non solo è nelle possibilità dell’uomo ma, potremmo dire, è una scelta obbligata. Non solo la ragione, che consiglia la prudenza, ma anche le emozioni, conducono a tale scelta. La passione cardine, su cui Hobbes edifica la sua teoria, è la paura, in particolare la paura di una morte violenta. Essa non soltanto è all’origine dello Stato, ma contribuisce alla sua conservazione. La stessa ragione, come calcolo di ciò che è utile alla conservazione della vita, sembra formarsi proprio a partire da essa. Ragione e paura così si implicano a vicenda “la ragione è impotente senza la paura (…) la paura è cieca senza il calcolo razionale” . Se da un lato paura e diffidenza sono responsabili dell’isolamento umano, altrettanto vero è che solo mediante una risposta razionale a essa è possibile l’instaurarsi dell’istituzione statale, unico luogo in cui può regnare la pace, la sicurezza, la ricchezza, la benevolenza, la società, lo splendore. La paura è il miglior antidoto contro la violenza; non solo, le passioni sono per Hobbes fondamentali a tal punto che qualora un individuo potesse raggiungere quello che viene definito come sommo bene, secondo il filosofo, con ciò stesso cesserebbe di vivere: “Il sommo bene, ovvero, come si dice, la felicità e il fine ultimo non si può trovare in questa vita. Infatti, se si tratta del fine ultimo, non si desidera più nulla; onde segue che, a partire da quel momento, non solo non si avrebbe più nulla di buono, ma l’uomo non avrebbe neppure più sensazioni. Infatti, ogni sensazione è congiunta a qualche desiderio o repulsione; e non sentire significa non vivere”. <p>Bibliografia<p><p>T. Hobbes, Leviatano, introduzione, tr. it. a cura di A. Pacchi, Laterza, Roma-Bari 1989 (d’ora in poi L.)<p><p>T. Hobbes, The English Works, London<p><p>T. Hobbes, De Cive, X, 1, tr. it. a cura di T. Magri, Ed. Riuniti, Roma 1989<p><p>T. Hobbes, De Homine, a cura di A. Pacchi, Laterza, Roma-bari, 1984<p><p>R. Bodei, Geometria delle passioni, Feltrinelli, Milano 1991<p>',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
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
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
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
			choiceA: {
				label: 'Scelta A',
				icon: 'ion-star',
				class: 'button-left',
				scene: 'thauma_scene_3'
			},
			choiceB: {
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_3_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_3_dialog_2: {
					id: 'thauma_scene_3_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'thauma_scene_3_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'thauma_scene_3_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				thauma_scene_3_dialog_3: {
					id: 'thauma_scene_3_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'thauma_scene_4',
					
					sceneClass: 'button-bottom'
				},
				thauma_scene_3_dialog_4: {
					id: 'thauma_scene_3_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'thauma_scene_4',
					
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_5_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_5_dialog_2: {
					id: 'thauma_scene_5_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'thauma_scene_5_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'thauma_scene_5_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				thauma_scene_5_dialog_3: {
					id: 'thauma_scene_5_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'thauma_scene_6',
					
					sceneClass: 'button-bottom'
				},
				thauma_scene_5_dialog_4: {
					id: 'thauma_scene_5_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'thauma_scene_6',
					
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
			choiceA: {
				label: 'Scelta A',
				icon: 'ion-star',
				class: 'button-left',
				scene: 'thauma_scene_7'
			},
			choiceB: {
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
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story2.jpg',
					text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story3.jpg',
					text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
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
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story2.jpg',
					text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story3.jpg',
					text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_3_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_3_dialog_2: {
					id: 'kara_scene_3_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'kara_scene_3_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'kara_scene_3_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				kara_scene_3_dialog_3: {
					id: 'kara_scene_3_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'kara_scene_4',
					
					sceneClass: 'button-bottom'
				},
				kara_scene_3_dialog_4: {
					id: 'kara_scene_3_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'kara_scene_4',
					
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
			text: 'Scegli una scelta (choice)',
			//textClass: 'default',
			choiceA: {
				label: 'Scelta A',
				icon: 'ion-star',
				class: 'button-left',
				scene: 'kara_scene_6'
			},
			choiceB: {
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_6_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_6_dialog_2: {
					id: 'kara_scene_6_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'kara_scene_6_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'kara_scene_6_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				kara_scene_6_dialog_3: {
					id: 'kara_scene_6_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'kara_scene_7',
					
					sceneClass: 'button-bottom'
				},
				kara_scene_6_dialog_4: {
					id: 'kara_scene_6_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'kara_scene_7',
					
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_8_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_8_dialog_2: {
					id: 'kara_scene_8_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'kara_scene_8_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'kara_scene_8_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				kara_scene_8_dialog_3: {
					id: 'kara_scene_8_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'kara_scene_9',
					
					sceneClass: 'button-bottom'
				},
				kara_scene_8_dialog_4: {
					id: 'kara_scene_8_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'kara_scene_9',
					
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_10_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_10_dialog_2: {
					id: 'kara_scene_10_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'kara_scene_10_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'kara_scene_10_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				kara_scene_10_dialog_3: {
					id: 'kara_scene_10_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'kara_scene_5',
					
					sceneClass: 'button-bottom'
				},
				kara_scene_10_dialog_4: {
					id: 'kara_scene_10_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'lype_scene_1_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				lype_scene_1_dialog_2: {
					id: 'lype_scene_1_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'lype_scene_1_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'lype_scene_1_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				lype_scene_1_dialog_3: {
					id: 'lype_scene_1_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'lype_scene_2',
					
					sceneClass: 'button-bottom'
				},
				lype_scene_1_dialog_4: {
					id: 'lype_scene_1_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'lype_scene_2',
					
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story2.jpg',
					text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story3.jpg',
					text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'lype_scene_4_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				lype_scene_4_dialog_2: {
					id: 'lype_scene_4_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'lype_scene_4_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'lype_scene_4_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				lype_scene_4_dialog_3: {
					id: 'lype_scene_4_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'lype_scene_5',
					
					sceneClass: 'button-bottom'
				},
				lype_scene_4_dialog_4: {
					id: 'lype_scene_4_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'lype_scene_5',
					
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
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story2.jpg',
					text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story3.jpg',
					text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'lype_scene_7_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				lype_scene_7_dialog_2: {
					id: 'lype_scene_7_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'lype_scene_7_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'lype_scene_7_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				lype_scene_7_dialog_3: {
					id: 'lype_scene_7_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'lype_scene_8',
					
					sceneClass: 'button-bottom'
				},
				lype_scene_7_dialog_4: {
					id: 'lype_scene_7_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'lype_scene_8',
					
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
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Nel 1686 un galeone inglese viaggia per gli oceani alla ricerca di qualcosa di straordinario',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: '. Il comandante è Dylan, uno scienziato ed alchimista londinese, che da anni solca i mari alla ricerca del siero dell\'immortalità',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'aidos_scene_2_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_2_dialog_2: {
					id: 'aidos_scene_2_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'aidos_scene_2_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'aidos_scene_2_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				aidos_scene_2_dialog_3: {
					id: 'aidos_scene_2_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'aidos_scene_3',
					
					sceneClass: 'button-bottom'
				},
				aidos_scene_2_dialog_4: {
					id: 'aidos_scene_2_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'aidos_scene_3',
					
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
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story2.jpg',
					text: 'In realtà nella frittata vi sono dei funghi allucinogeni, infatti Prolix finge di mangiarla. L\'indovino fasullo ipnotizza Asterix, convincendolo che Obelix sia Cesare, il suo peggior nemico. Mentre Asterix, ipnotizzato, attacca Obelix, Prolix crea scompiglio nel villaggio. Quando Asterix finalmente si riprende, Prolix è già fuggito col tesoro. Due giorni dopo il druido Panoramix va al raduno dei druidi, non sapendo che Detritus, uno dei governatori di Cesare, si è intrufolato nel raduno per rubare la pozione. Il romano riesce nell\'impresa e rapisce il druido. Il piano di Detritus è spodestare Cesare e governare Roma.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'story3.jpg',
					text: 'L\'imperatore, udendo questa notizia, fa arrestare Detritus, che voleva prenderne il posto. Ma il romano si allea con Obelix (introdottosi nell\'accampamento come Obelus, legionario romano che aveva fatto prigioniero Asterix, anche se i due volevano solo liberare Panoramix), rovesciando la situazione, e fa prigioniero Cesare. Quindi costringe il druido a dargli la pozione, assume il comando dell\'esercito, nomina Obelix centurione e quella stessa sera fa sottoporre Asterix a dei "giochi di sopravvivenza". Il gallo li supera tutti tranne l\'ultimo, nel quale sarebbe morto se Obelix non avesse ascoltato la sua richiesta d\'aiuto. Asterix, Obelix e Panoramix tornano al villaggio insieme a Cesare. Quando i Romani accerchiano il villaggio gallico, Cesare offre ad Abraracourcix un trattato di pace. Asterix e Obelix bevono dunque una nuova pozione magica, preparata con latte di unicorno bicefalo, e si sdoppiano più volte, raggiungendo il giusto numero per sconfiggere i romani guidati da Detritus, il quale viene arrestato. I Galli festeggiano la vittoria e si alleano con i Romani, anche se Obelix deve rinunciare all\'amata Falbalà.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
					//textClass: 'bubble-ragazzo',
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
			choiceA: {
				label: 'Scelta A',
				icon: 'ion-star',
				class: 'button-left',
				scene: 'aidos_scene_6'
			},
			choiceB: {
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'aidos_scene_7_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_7_dialog_2: {
					id: 'aidos_scene_7_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'aidos_scene_7_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'aidos_scene_7_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				aidos_scene_7_dialog_3: {
					id: 'aidos_scene_7_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
					sceneClass: 'button-bottom'
				},
				aidos_scene_7_dialog_4: {
					id: 'aidos_scene_7_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
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
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					video: 'https://www.youtube.com/embed/wyVM1evRxNw',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'aidos_scene_9_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_9_dialog_2: {
					id: 'aidos_scene_9_dialog_2',
					text: 'Testo dialogo 2',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Scelta 1',
							nextDialog: 'aidos_scene_9_dialog_3'
						},
						{
							text: 'Scelta 2',
							nextDialog: 'aidos_scene_9_dialog_4'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				aidos_scene_9_dialog_3: {
					id: 'aidos_scene_9_dialog_3',
					text: 'Testo dialogo 3',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
					sceneClass: 'button-bottom'
				},
				aidos_scene_9_dialog_4: {
					id: 'aidos_scene_9_dialog_4',
					text: 'Testo dialogo 4',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '', // When empty goes to map
					
					sceneClass: 'button-bottom'
				}
			}
		}
	});
