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
					positionClass: 'bubble-dialog-left',
					
					nextDialog: 'elpis_scene_2_dialog_2'
					//nextDialog: 'test_video_7'
					
				},

				/*
				test_video_1: {
					text: '',
					video: 'https://www.youtube.com/embed/7JQHDr72ZuM', //NOOOO!
					nextDialog: 'test_video_2'
				},
				
				test_video_2: {
					text: '',
					video: 'https://www.youtube.com/embed/W1oKuhEZ4hU', //YES!
					nextDialog: 'test_video_3'
				},

				test_video_3: {
					video: 'https://www.youtube.com/embed/pWg5MiDYIzY', //NOOOO!
					nextDialog: 'test_video_4'
				},

				test_video_4: {
					video: 'https://www.youtube.com/embed/nQ0D4bioH0w', //YES!
					nextDialog: 'test_video_5'
				},

				test_video_5: {
					video: 'https://www.youtube.com/embed/Eaq1AE4Q9KM', //YES!
					nextDialog: 'test_video_7'
				},

				test_video_7: {
					video: 'https://www.youtube.com/embed/4Dl3_XDp1gU',//YES!
				    nextDialog: 'test_video_8'
			    },
  
			    test_video_8: {
					video: 'https://www.youtube.com/embed/SY-HC9plxJE',//YES!
					nextDialog: 'test_video_10'
				},

			
				
				test_video_10: {
					text: '',
					video: 'https://www.youtube.com/embed/CGGvg-yn3oU',//YES!
					nextDialog: 'test_video_11'	
				},

				test_video_11: {
					text:'',
					video: 'https://www.youtube.com/embed/vPKLBRVNUBk',//YES!
					nextDialog: 'test_video_12'
				},

				test_video_12: {
					text: '',
					video: 'https://www.youtube.com/embed/a7SN7V2OuzU',//YES!
					nextDialog: 'test_video_13'
				},

				test_video_13: {
					text: '',
					video: 'https://www.youtube.com/embed/iZ5Oap17Xq0',//YES!
					nextDialog: 'elpis_scene_2_dialog_2'
				},

				*/


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
			background: 'elpis_01_bg.jpg',
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
					text: 'Già, Aristocle come mio nonno. A chiamarmi Platone (in realtà Palatone per via del mio fisico possente) fu un mio allenatore di ginnastica.',
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
					positionClass: 'bubble-dialog-left'
				},                
				{
					text: 'Già. Erano anni elettrizzanti quelli. L’ambiente dell’Accademia fu straordinario anche perché riusciva a conciliare il metodo della ricerca con uno stile di vita meraviglioso, la cui summa era data dallo stare insieme agli amici a discutere per lungo tempo. In questo periodo ho composto i dialoghi Menone (sulla vita), Menesseno, Fedone (sull’anima), Repubblica, Eutidemo e Cratilo. E poi, ovviamente, ho composto il famosissimo dialogo sull’Amore...',
					positionClass: 'bubble-dialog-top'
				},
				{
					text: '...il Simposio.',
					positionClass: 'bubble-dialog-left'
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
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_3_dialog_2'
				},
				agape_scene_3_dialog_2: {
					text: 'Ma certo!',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_3_dialog_3'
				},
				agape_scene_3_dialog_3: {
					text: 'Cosa rappresenta questa statua? E\' un po\' strana...',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_3_dialog_4'
				},
				agape_scene_3_dialog_4: {
					text: 'Rappresenta il mito dell’androgino… ne scrivo proprio nel Simposio',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_3_dialog_5'
				},
				 agape_scene_3_dialog_5: {
					text: 'Che significa androgino?',
					positionClass: 'bubble-dialog-right',
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
					image: 'platone01.jpg',
					text: 'Due sono i dialoghi dedicati da Platone all’amore: il Simposio ed il Fedro nella prima parte. La necessaria premessa per la comprensione del discorso sull’Amore è però nel Fedone, dedicato alla natura dell’anima umana: se infatti non si comprende quest’ultima, non è possibile neppure comprendere che cosa sia l’amore, che per Platone è un’affezione dell’anima.'
				},
				{
					image: 'platone02.jpg',
					text: 'Il Simposio è forse il più conosciuto dei dialoghi di Platone, e si differenzia dagli altri scritti del filosofo per la sua struttura, che si articola non tanto in un dialogo, quanto nelle varie parti di un agone oratorio, in cui ciascuno degli interlocutori, scelti tra i più illustri intellettuali di Atene, espone con un ampio discorso la propria teoria su Eros, cioè sull’Amore. La cornice in cui si inseriscono i vari interventi è rappresentata dal banchetto offerto dal poeta tragico Agatone, allestito per festeggiare la sua vittoria negli agoni delle Lenee, le feste dette anche Grandi Dionisie, del 416  a. C. '
				},
				{
					image: 'platone03.jpg',
					text: 'Fra gli invitati, oltre a Socrate e al suo discepolo Aristodemo, ci sono il medico Erissimaco, il commediografo Aristofane, Pausania che è l’amante di Agatone e il suo amico Fedro, figlio di Pitocle ed esperto di retorica: ognuno di loro, su invito di Erissimaco, dovrà tenere un discorso che ha per oggetto un elogio di Eros. Verso la fine del banchetto, fa una clamorosa irruzione anche Alcibiade, ubriaco e con il capo cinto da una ghirlanda di edera e di viole, che si presenta per festeggiare Agatone, e che viene accolto con grande cordialità. Alla fine del banchetto, la mattina seguente, Socrate (uno dei pochi rimasti svegli per tutta la notte) lascia l’abitazione e, seguito da Aristodemo, si dirige verso l’Accademia. Il racconto di questi fatti avviene però per bocca di due amici, Apollodoro e Glaucone, i quali durante una notte passeggiano per le strade di Atene, conversando.'
				},
				{
					image: 'platone04.jpg',
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
					video: 'https://www.youtube.com/embed/nQ0D4bioH0w',
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
			text: '“Dopo Fedro parlarono altri, ma lui non si ricordava bene. Non me ne ha parlato e invece mi ha riportato il discorso di Pausania, che si espresse in questi termini: “Io credo, Fedro, che l’argomento sia mal posto quando ci si domanda semplicemente di fare l’elogio dell’Eros. Se di Eros ve ne fosse uno solo, potrebbe anche andar bene. Ma non è così: non ce n\'è uno soltanto, e allora è bene prima spiegare di quale Eros dobbiamo tessere l’elogio. Cercherò dunque, da parte mia, di chiarire le cose su questo punto, di precisare innanzitutto quale amore si debba lodare e quindi pronuncerò un elogio che sia degno di questo dio. Tutti sappiamo che non c\'è Afrodite senza Eros. Se dunque non vi fosse che una Afrodite, non vi sarebbe che un solo Eros. Ma essa è duplice, e quindi, necessariamente, abbiamo due Eros. Come negare che esistano due dee? L’una, senza dubbio la più antica, non ha madre: è figlia di Urano, e la chiamiamo quindi la dea del cielo, Afrodite Urania; l\'altra, la più giovane, è figlia di Zeus e di Dione, e la chiamiamo quindi la dea popolare, Afrodite Pandemia. E allora necessariamente l’Eros che serve l’una dovrà chiamarsi Eros Pandemio, quello che serve l’altra Eros Uranio. Certo, bisogna lodare tutti gli dei; ma, detto questo, qual è il dominio dei due dei? È questo che dobbiamo provare a dire. Ogni azione si caratterizza per questo, che in sé non è né bella né brutta. In quello che adesso facciamo, bere, cantare, chiacchierare, non c\'è nulla di bello in sé; è piuttosto il modo in cui si compie un’azione a dar questo o quel risultato, e così seguendo le regole della bellezza e della rettitudine un’azione diventa bella, al contrario senza rettitudine diventa brutta. E lo stesso avviene per l’atto d’amore, e quindi non tutto l’amore è bello e degno di elogio: lo è soltanto quello che porta ad amare bene. Ora l’Eros compagno di Afrodite Pandemia certo è volgare e opera a casaccio: è proprio degli uomini da poco. Intanto queste persone si innamorano sia delle ragazze che dei ragazzi, indifferentemente; e poi amano i corpi, non l’anima, e preferiscono le persone meno intelligenti: vogliono arrivare dritto al loro scopo, non gl’importa il modo - che sia bello o brutto. Capita quindi che si imbattano nel bene, e capita anche il contrario. Come è ovvio, questo Eros si unisce alla più giovane delle due dee, che sin dal suo concepimento partecipa sia del maschile che del femminile. L’altro Eros, invece, partecipa dell’Afrodite Urania che da sempre è estranea all’elemento femminile e partecipa soltanto del maschile; e poi è la più antica e non conosce alcun impulso brutale. Per questa ragione quanti sono ispirati da questo Eros sono attratti dall\'elemento maschile: essi amano teneramente il sesso per natura più forte e intelligente. E proprio da questa inclinazione ad innamorarsi dei ragazzi si possono riconoscere quanti sono posseduti con purezza da questo Eros, perché essi non amano i giovani prima che abbiano dato prova d\'intelligenza. Ora, questo è impossibile che accada prima che i giovani siano abbastanza grandi da avere la prima barba. È  questa l’età, io credo, in cui è bene cominciare a rivolgere ad essi attenzioni d’amore, per restare poi con loro per tutta la vita, per legare le proprie esistenze, piuttosto che abusare della credulità di un giovane sciocco, farsi gioco di lui e piantarlo poi per correre dietro ad un altro. Ci vorrebbe una legge che proibisse di amare i ragazzi troppo giovani: così non si sprecherebbero tante cure per un risultato imprevedibile. Non è infatti possibile prevedere che cosa ne sarà di un ragazzino, se avrà vizi o virtù sia nel corpo che nell\'anima. L’uomo che vale si pone senza dubbio da sé, e di buon grado, questa legge. Ma bisognerebbe anche che chi coltiva amori volgari abbia un limite, simile a quello che nella misura del possibile è imposto dalla legge che impedisce di avere relazioni d\'amore con donne di condizione non servile. Sono proprio questi amanti volgari, infatti, che hanno screditato l’Eros e dato a certuni il coraggio di dire che è una vergogna cedere ad un amante. Chi dice questo, lo fa perché ha davanti agli occhi la mancanza di tatto e di onestà di questi amanti volgari, mentre nessun gesto al mondo merita d\'essere criticato quando la convenienza e la legge sono rispettate. Ancora di più: la regola di condotta, per quel che concerne l’Eros, è facile da comprendere nelle altre città, perché la sua definizione è semplice. Nell’Elide, presso i Beoti, e nelle altre città in cui i cittadini non sono abili nel far grandi discorsi, la regola ammessa è semplice: è un bene cedere agli amanti e nessuno, giovane o vecchio, dirà mai che c\'è da vergognarsi. Il fine, credo, è di evitare l\'imbarazzo di dover convincere i giovani con la parola, perché non sono gran parlatori. Nella Ionia, al contrario, e in diverse altre zone, la regola dice che questo non va bene: sono paesi dominati dai Barbari. Presso i Barbari, infatti, a causa dei loro regimi tirannici, il giudizio comune è che ci sia da vergognarsi a cedere a un amante: lo stesso giudizio si dà per l’amore per il sapere e per l’esercizio fisico. Senza dubbio, ai loro capi non conviene che nascano grandi intelligenze tra i sudditi, e neppure grandi amicizie e società saldamente unite, come in effetti l’Eros, più di ogni altra cosa al mondo, sa produrre. Di questo hanno fatto esperienza anche i tiranni qui da noi: l\'amore di Aristogitone e l\'amicizia di Armodio, sentimenti solidi, hanno distrutto il loro potere. Così là dove si ritiene che ci sia da vergognarsi a cedere a un amante, questa convinzione è nata dalla debolezza morale della gente: desiderio di dominio presso i capi, vigliaccheria presso i sudditi. Là invece dove la regola ammette in tutta semplicità che è cosa buona, essa è nata per la pigrizia dell\'animo di quella gente. Presso di noi la regola è molto più bella e, come ho detto, non è facile da comprendere. C’è da rifletterci, in effetti: è più bello, si dice, amare apertamente piuttosto che in segreto, e soprattutto amare i giovani di nascita migliore e di meriti più alti, anche se meno belli di altri; di più, chi è innamorato è straordinariamente incoraggiato da tutti, e nessuno pensa che faccia qualcosa di cui vergognarsi: il successo è il suo onore, lo scacco è la sua vergogna; e nei tentativi di conquista la regola elogia gli amanti per delle stravaganze che esporrebbero alle critiche più severe chiunque osasse comportarsi così per altri scopi. Supponiamo infatti che uno voglia ottenere del denaro da qualcuno, che voglia esercitare una magistratura, o una qualsiasi funzione importante: se accetta di fare ciò che fanno gli amanti per i loro amati - assillarli con preghiere e suppliche, pronunciare grandi giuramenti, dormire dietro le loro porte, abbassarsi volontariamente ad ogni sorta di schiavitù che nessuno schiavo accetterebbe di buon grado - ebbene tutto questo gli sarà impedito sia dai suoi amici che dai suoi nemici: questi gli rimprovereranno la sua adulazione e la sua bassezza, quelli lo faranno ragionare e arrossiranno per lui. Queste cose, invece, sono ben viste per l\'innamorato e la nostra regola non le critica affatto: sono qualcosa che si sta ad ammirare. E la cosa più strana è, secondo il detto popolare, che lui solo può giurare e ottenere grazia davanti agli dei se tradisce i suoi giuramenti: dinnanzi ad Afrodite, a quanto si dice, nessun giuramento vale. Così gli dei e gli uomini danno agli innamorati una libertà totale: lo dice la nostra regola. E questo porta a pensare che la regola nella nostra città giudichi cose perfette la bellezza e l’amore, e l\'amicizia che ricompensa gli amanti. Ma quando d\'altra parte i padri fanno sorvegliare dai pedagoghi i loro figlioli innamorati, in modo che non possano parlar d\'amore con i loro amanti; quando i giovani della loro età, i loro amici, li rimproverano per il loro amore; quando gli adulti non si oppongono a queste critiche e non le biasimano come fuori luogo; allora se si considera tutto questo si potrebbe credere, al contrario, che questo tipo di amore goda presso di noi di cattiva fama. Ecco, io credo, come stanno le cose. La faccenda non è per nulla semplice, come ho già detto all\'inizio: in se stessa non è né bella né brutta. È bella se le azioni sono belle, è brutta se le azioni sono brutte. È cosa brutta cedere ad un uomo cattivo e per cattivi motivi; è cosa bella cedere ad un uomo di valore e per bei motivi. Ora chi si comporta male è, come prima dicevo, l\'amante volgare, che ama il corpo più che l\'anima. Non ha costanza, perché l\'oggetto del suo amore è incostante. All’affievolirsi della bellezza del corpo che ama, egli “s\'invola e va via”, e tradisce senza vergogna alcuna tante belle parole, tante promesse. Ma chi ama il carattere di una persona per le sue alte qualità, resta fedele tutta la vita perché il suo amore riposa su qualcosa di costante. Le nostre regole si propongono di mettere gli uomini alla prova della serietà e dell\'onestà, perché si ceda agli uomini che valgono e si fuggano gli altri. Incoraggiano quindi a sceglier bene tra il cedere e il fuggire, creando delle prove che permettano di riconoscere di che natura sia l\'amante, di che natura sia la sua anima. Su questo si fonda evidentemente la massima: “a ceder subito c\'è da vergognarsi”. Più tempo passa, infatti, più si ha la prova, sembra, della serietà dell\'amore. Una seconda massima, poi, dice che c\'è da vergognarsi a cedere per denaro o per averne vantaggi politici, sia che ci si intimorisca di fronte ad un’azione decisa, che rende incapaci di reagire, sia che non si respingano con sdegno le lusinghe della ricchezza e del successo politico: niente di tutto ciò ha l’aria d\'essere solido e stabile, e dunque non può venirne alcuna generosa amicizia. Non resta dunque, secondo la nostra regola, che una via onesta perché l\'amato possa cedere all\'amante. Presso di noi la regola è la seguente: come tra gli amanti non c\'è nulla di umiliante nel far di se stessi degli schiavi consenzienti, secondo quella forma di schiavitù che prima dicevo, e non c\'è il rischio di essere criticati, nello stesso modo rimane una sola altra forma di schiavitù volontaria che sfugga a ogni critica: quella che ha la virtù come proprio oggetto. La nostra regola infatti dice questo, che se si accetta di essere al servizio di un altro pensando di diventare migliori grazie a lui, nel sapere o in un\'altra virtù, qualunque sia, questa servitù liberamente accolta non ha niente di cattivo e non è umiliante. Bisogna dunque riunire in una sola queste due regole, quella che riguarda l\'amore verso i ragazzi e quella che riguarda l\'amore per il sapere o per tutte le altre forme di virtù, se vogliamo che si abbia un bene dal fatto che l\'amato ceda all\'amante. Infatti quando le vie dell\'amante e dell\'amato si incontrano, ed essi insieme seguono la stessa regola, il primo di rendere al suo amato tutti i servizi compatibili con la giustizia, il secondo di dare all\'uomo che cerca di farlo diventare saggio e buono tutte le forme di assistenza compatibili con la giustizia – l’uno potendo contribuire a dare l\'intelligenza e tutte le forme di virtù, l\'altro avendo bisogno di progredire nell\'educazione e più in generale nel sapere -, allora in verità quando queste regole convergono, e in questo caso solamente, questa coincidenza fa sì che sia cosa bella che l’amato ceda all\'amante. Altrimenti, è da escludere. Nel bene, anche se chi cede è completamente vittima della situazione, non c\'è alcun disonore, ma in tutti gli altri casi, che si sia vittime o meno, c\'è di che vergognarsi. Infatti se c\'è qualcuno che per arricchirsi ha ceduto a un\'amante che crede ricco, e viene poi ingannato e non ottiene nulla, perché il suo amante si rivela povero, la cosa rimane riprovevole anche se si è una vittima. Un simile uomo sembra mostrare il fondo della sua anima: per denaro si presta a tutto verso il primo venuto, e questo non è affatto bello. Secondo lo stesso ragionamento se si cede a qualcuno credendolo pieno di qualità e pensando di diventare migliori legandosi a questo amante, e se in seguito ci si trova ingannati scoprendo la sua malvagità, quanto sia povero nella virtù, ebbene chi è stato ingannato non ha nulla di cui vergognarsi. Anche in questo caso, infatti, sembra rivelarsi la qualità dell’anima: la virtù e il progresso morale, in tutto e per tutto, sono l\'oggetto della propria passione - e questa è la cosa più bella che ci sia. Quindi è bellissimo cedere, quando si cede per la virtù. Questo Eros viene dall\'Afrodite Urania, ed è davvero divino e prezioso per la città come per gli individui, perché esige dall\'amante e dall\'amato che entrambi veglino su se stessi, per essere ricchi di virtù. Quanto agli altri, essi rivelano il legame con l’altra dea, l’Afrodite Pandemia. Ecco, mio caro Fedro: io non ho fatto che improvvisare; è questo il mio tributo per Eros”. (Simposio, 180c-185c).',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
		},
		agape_scene_10: {
			id: 'agape_scene_10',
			type: 'dialog',
			name: 'agape_scene_10',
			template: 'dialog.html',
			nextScene: '', // When empty goes to map
			background: 'agape_01_bg.jpg',
			firstDialog: 'agape_scene_10_dialog_1',
			dialogs: {
				agape_scene_10_dialog_1: {
					id: 'agape_scene_10_dialog_1',
					text: 'Tutto questo parlare di Eros mi ha confuso. Oggi il termine ha tutt’altra accezione',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_10_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				agape_scene_10_dialog_2: {
					id: 'agape_scene_10_dialog_2',
					text: 'Non ha tutti i torti, Platone. Eros nell’accezione contemporanea è un concetto molto spesso banalizzato e si riferisce a una seduzione esclusivamente fisica, priva dei connotati ideali del Simposio',
					//textClass: 'bubble-ragazzo',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'agape_scene_10_dialog_3',
				},
                agape_scene_10_dialog_3: {
					id: 'agape_scene_10_dialog_3',
					text: 'I termini cambiano assieme ai tempi. Così anche i concetti e anche i miti. Hai sentito Socrate? Secondo Socrate Eros era figlio di ricchezza e povertà, intesi come gli stati estremi dell’anima. L’Eros è il sentimento alla base dell’anima. L’Eros fa respirare l’anima, muove gli animi gli uni verso gli altri e quello che nasce come banale tentativo di attrarre un’altra persona verso di sé assurge, elevato ai più alti livelli, alle vette della Conoscenza',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_10_dialog_4', 
				},
                agape_scene_10_dialog_4: {
					id: 'agape_scene_10_dialog_4',
					text: 'E l’Eros come lo intendiamo noi, oggi?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'agape_scene_10_dialog_5',
				},
                agape_scene_10_dialog_5: {
					id: 'agape_scene_10_dialog_5',
					text: 'Quello è solo una piccola parte, un primo vagito dell’Eros greco. E’ una nascita senza crescita, un sentiero di luce percorso solo per i primi passi. Ora va’ e torna qua compiendo altre scelte se vuoi raccogliere altri punti di vista sull’Eros',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'agape_scene_10_dialog_6',
				},
                agape_scene_10_dialog_6: {
					id: 'agape_scene_10_dialog_6',
					text: '',
					video: 'https://www.youtube.com/embed/Eaq1AE4Q9KM',
					textClass: '',
					positionClass: '',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'agape_scene_10_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				agape_scene_10_dialog_7: {
					id: 'agape_scene_10_dialog_7',
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
        menis_scene_1: {
			id: 'menis_scene_1',
			type: 'biography',
			name: 'menis_scene_1',
			template: 'biography.html',
			nextScene: 'menis_scene_2',
			background: 'menis_00_bg.jpg',
			pages: [
				{
					text: 'Eccoci in una vera e propria Area archelogica, ragazzo!',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Wow, sembrano ruderi romani',
					//textClass: 'bubble-ragazzo',
					//positionClass: 'bubble-dialog-right bubble-position-ragazzo',
					positionClass: 'bubble-dialog-right',
					nextLabel: 'Ancora',
					//nextClass: 'button-bottom'
				},
				{
					text: 'E lo sono! Ma aspetta… non correre. Ti spiegherà tutto colui che presiede quest’area. E’ Lucio Anneo Seneca, filosofo e intellettuale dell’Antica Roma, consigliere di Nerone',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Ave, Talete!',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-top',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Ave, Lucio',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Salve, signor Seneca',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-right',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Ciao, hai sentito parlare di me?',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-top',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Sì, beh… un po’. So del suo rapporto con Nerone e del fatto che sia finito davvero male',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-right',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Proprio la condanna inflitta da Nerone e il modo in cui Seneca l’ha affrontata, lo rende la persona più giusta per parlarci di un’emozione molto controversa e dannosa, l’ira, e dei suoi opposti: la pacatezza e la clemenza',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-left',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Andiamo con ordine, Talete. Io sono spagnolo, nasco a Cordoba, ma ho compiuto i miei studi a Roma. Sono stato avvocato e mi sono battuto per i diritti civili, cosa che mi è costata l’odio dell’imperatore Caligola e l’esilio in Corsica. Gli 8 anni di esilio…',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-top',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: '8 anni???',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-right',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Già, tantissimi… ma mi sono serviti per sviluppare le mie capacità filosofiche e di pensiero. Rientrai a Roma contemporaneamente all’ascesa al potere di Nerone, del quale sono diventato consigliere. Dopo un primo periodo felice e prospero, Nerone ha cominciato a rivelare la sua natura da despota e, dopo aver ordinato l’uccisione della madre e del mio collega Burro, ho deciso di ritirarmi a vita privata, fino alla brutta vicenda della condanna al suicidio, ingiusta, ma che ho accettato con grande dignità',
					//textClass: 'bubble-talete',
					//positionClass: 'bubble-dialog-left bubble-position-talete',
					positionClass: 'bubble-dialog-top',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				{
					text: 'Grandissima dignità, e lo sappiamo dagli storici del tempo. Seneca lo ha omesso per modestia, ma ha scritto tanti dialoghi, tutti dedicati all’allevamento di importanti virtù: De providentia, De constantia sapientis, Consolatio ad Marciam, De vita beata, De otio, De tranquillitate animi, De brevitate vitae, Consolatio ad Polybium, Consolatio ad Helviam matrem e, ovviamente, il De Ira',
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
			background: 'menis_01_bg.jpg',
			firstDialog: 'menis_scene_2_dialog_1',
			dialogs: {
				menis_scene_2_dialog_1: {
					id: 'menis_scene_2_dialog_1',
					text: 'Ma qui dove siamo? Cosa sono queste rovine? O meglio, cosa erano?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_2_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_2_dialog_2: {
					id: 'menis_scene_2_dialog_2',
					text: 'Queste rovine sono quelle del palazzo imperiale di Caligola e del palazzo imperiale di Augusto. Simboleggiano la decadenza di Roma',
					//textClass: 'bubble-ragazzo',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_2_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_2_dialog_3: {
					id: 'menis_scene_2_dialog_3',
					text: 'Decadenza che lei ha vissuto in prima persona',
					//textClass: 'bubble-ragazzo',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_2_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_2_dialog_4: {
					id: 'menis_scene_2_dialog_4',
					text: 'Già, con mio grande dolore. Ho mantenuto una certa impassibilità grazie alla mia saggezza. Mi definiscono stoico, che anche nel linguaggio quotidiano identifica colui che affronta con fermezza e imperturbabilità le difficoltà e i dolori della vita. La filosofia, la vita, lo studio, li ho sempre affrontati con serenità, e lieto al di là della condizione fisica, provando a non cedere anche quando il fisico sta cedendo',
					//textClass: 'bubble-ragazzo',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_2_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_2_dialog_5: {
					id: 'menis_scene_2_dialog_5',
					text: 'Ragazzo, tu cosa avresti fatto al suo posto? Immagina di dedicare gran parte della tua vita all’educazione spirituale di un giovane imperatore… e immagina che questo a un certo punto tradisca tutti i tuoi insegnamenti per egoismo e inferiorità rispetto ai suoi istinti. Come ti sentiresti?',
					//textClass: 'bubble-ragazzo',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'menis_scene_2_dialog_5bis',
				},
                menis_scene_2_dialog_5bis: {
					id: 'menis_scene_2_dialog_5bis',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Mi arrabbierei e lo farei sapere a tutti!',
							nextDialog: 'menis_scene_2_dialog_6'
						},
						{
							text: 'Continuerei a compiere la mia missione educativa',
							nextDialog: 'menis_scene_2_dialog_12'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				menis_scene_2_dialog_6: {
					id: 'menis_scene_2_dialog_6',
					text: 'E probabilmente sbaglieresti. Atteggiamenti dominati dall’ira non possono essere contrastati da reazioni dello stesso tono. La mia reazione fu un lento e pacato ritiro',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_2_dialog_7',
				},
				menis_scene_2_dialog_7: {
					id: 'menis_scene_2_dialog_7',
					text: 'E che risultati ha ottenuto?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_2_dialog_8',
				},
				menis_scene_2_dialog_8: {
					id: 'menis_scene_2_dialog_8',
					text: 'Un insegnamento è comunque filtrato, e i posteri hanno potuto distinguere il Bene dal Male, cosa che sarebbe stata impossibile se l’atteggiamento di Nerone fosse sfociato in una guerra civile',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_2_dialog_9',
				},
				menis_scene_2_dialog_9: {
					id: 'menis_scene_2_dialog_9',
					text: 'Capisco…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_2_dialog_10',
				},
				menis_scene_2_dialog_10: {
					id: 'menis_scene_2_dialog_10',
					text: '',
					video: 'https://www.youtube.com/embed/4Dl3_XDp1gU',
				    nextDialog: 'menis_scene_2_dialog_11',
			    },
			    menis_scene_2_dialog_11: {
					text: 'Andiamo avanti...',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'menis_scene_3',
					sceneClass: 'button-bottom'
			    },
		        menis_scene_2_dialog_12: {
					id: 'menis_scene_2_dialog_12',
					text: 'E’ una scelta saggia e coraggiosa… l’avrei fatta anche io se non fossi stato sopraffatto dalla stanchezza',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_2_dialog_13',
				},
				menis_scene_2_dialog_13: {
					id: 'menis_scene_2_dialog_13',
					text: 'Scappare, arrabbiarsi, fare rumore, urlare, è facile… difficile è dialogare',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_2_dialog_14',
				},
				menis_scene_2_dialog_14: {
					id: 'menis_scene_2_dialog_14',
					text: 'Belle parole, sembrano uscite direttamente dal mio De Ira',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_2_dialog_15',
				},
				menis_scene_2_dialog_15: {
					id: 'menis_scene_2_dialog_15',
					text: 'Grazie!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_2_dialog_16',
				},
				menis_scene_2_dialog_16: {
					text: '',
					video: 'https://www.youtube.com/embed/4Dl3_XDp1gU',
					textClass: '',
					positionClass: '',
					sceneClass: 'button-bottom',
					nextDialog: 'menis_scene_2_dialog_17'
			    },
			    menis_scene_2_dialog_17: {
					text: 'Proseguiamo...',
					positionClass: 'bubble-dialog-left',
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
					image: 'seneca01.jpg',
					text: 'Seneca descrive l’ira come una delle passioni più temibili per l’uomo. Se certo tutti i moti dell’animo costituiscono un pericolo per l’equilibrio umano, l’ira più di ogni altro è capace di reazioni così violente e incontrollabili da allontanare l’uomo dalla sua stessa umanità. L’ira è considerata come un momento di pazzia e, infatti, al pari di quella è smisurata e incapace di autocontrollo, non dà ascolto alla ragione e non sa distinguere tra giusto e ingiusto, vero e falso.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'seneca02.jpg',
					text: 'Già in apertura al suo De Ira (dedicato al fratello Novato che, per inciso, pare fosse persona estremamente mite) Seneca paragona la fisiognomica dei folli a quella dei furenti: “Per convincerti che i posseduti dall’ira sono dei dissennati, osserva bene il loro atteggiamento: come sono sicuri sintomi di pazzia l’espressione risoluta e minacciosa, la fronte aggrottata, la faccia scura, il passo concitato, le mani irrequiete, il colorito alterato, il respiro frequente ed affannoso, tali e quali sono i sintomi dell’ira incipiente: gli occhi ardono e lampeggiano, il viso si copre di rossore per il rifluire di sangue dal fondo dei precordi, le labbra tremano, i denti si serrano, i capelli si drizzano ispidi, il respiro diventa forzato e rumoroso, le articolazioni schioccano tormentandosi, i gemiti e i muggiti si intercalano in un parlare che inciampa in voci mozze, le mani battono continuamente e i piedi percuotono la terra, il corpo è tutto eccitato e “scagliante grandi minacce d’ira”, i lineamenti sono brutti e spaventosi, quando un uomo si sfigura per corruccio” . Seneca attribuisce all’ira i mali peggiori che possano abbattersi sull’uomo: “Ed ora, se vuoi esaminare gli effetti ed i danni, nessuna calamità è costata più cara al genere umano. Vedrai uccisioni ed avvelenamenti, reciproche infamie di colpevoli, distruzioni di città e stragi di intere popolazioni, vite di capi di Stato messe in vendita all’asta pubblica, fiaccole gettate nelle case, incendi non limitati alla cerchia delle mura, ma immense distese di territorio, rilucenti di fiaccole nemiche. Osserva le fondamenta di città notissime, ormai quasi invisibili: le ha abbattute l’ira; osserva tanti deserti, disabitati per miglia e miglia: li ha spopolati l’ira; osserva tanti condottieri, passati alla storia come esempi di un destino fatale: l’ira ne ha trafitto uno sul suo letto, ne ha ucciso un altro a mensa, tra le sacre leggi dell’ospitalità, un altro lo ha fatto a pezzi durante il processo, sotto gli occhi della folla che riempiva il foro, un altro lo ha costretto a versare il suo sangue ad opera di un figlio parricida, un altro ad offrire la sua gola regale alla mano di uno schiavo, un altro a divaricare le sue membra su di un patibolo”',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'seneca03.jpg',
					text: 'L’ira, secondo Seneca, allontana l’uomo dalla sua stessa umanità, essa non soltanto non si lascia governare dalla ragione, ma è a essa assolutamente contraria: “L’uomo è nato per il reciproco aiuto, l’ira, per distruggere; l’uomo vuol associarsi, l’ira vuole la separazione; l’uomo vuole giovare, l’ira vuol nuocere; l’uomo vuol aiutare anche gli sconosciuti, l’ira, assalire anche gli esseri più cari; l’uomo è pronto anche a sacrificarsi a vantaggio degli altri, l’ira, ad affrontare il pericolo, pur di trascinare gli altri con sé. Chi, dunque, misconosce la natura, più di colui che attribuisce questo vizio feroce e pernicioso alla sua opera migliore e più rifinita? Come si è detto, l’ira è avida di punire, è un desiderio che non può trovarsi, per natura, nel pacifico cuore dell’uomo. La vita umana poggia sulle buone azioni e sulla concordia, e si sente unita in alleanza e collaborazione comune, non in forza del terrore, ma del reciproco amore”  De Ira, I, 5, 1-3.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'seneca04.jpg',
					text: 'La filosofia di Seneca si propone come una terapia dell’animo, egli riconosce il limite insito in ogni uomo, il fatto che nessuno possa dirsi esente dalle passioni e dai turbamenti, tuttavia la ricerca della verità, così come il continuo esercizio nel moderare e tenere a freno le passioni conducono l’uomo sulla via della virtù.  L’ira però, non rientra nel novero delle passioni che è possibile governare, essa invece va del tutto estirpata, perché più forte della stessa ragione: “Prima di tutto, è più facile eliminare le passioni rovinose che controllarle, non dare loro adito che governarle, dopo averle accolte; infatti, una volta che sono diventate padrone, sono più forti del loro presunto governatore, e non si lasciano sfrondare o sminuire. Poi, anche la ragione, che tiene in mano le redini, ha potere solo per il tempo in cui rimane isolata dalle passioni, ma una volta che si sia confusa con esse e ne sia rimasta contaminata, non riesce più a controllarle, mentre, prima, le avrebbe potute bandire. La mente, una volta turbata ed abbattuta, è schiava di ciò che la stimola. (…) Come i corpi, che stanno precipitando, non possono più disporre di se stessi, non sono in grado di arrestare o di rallentare la propria caduta, perché il precipitare irrevocabile esclude ogni riflessione e pentimento e non è più possibile non arrivare là dove, prima, era possibile non andare, così l’animo, se si getta nell’ira, nell’amore e nelle altre passioni, non si sente più in grado di frenare lo slancio: è ineluttabile che il suo stesso peso e la natura del vizio, propensa al basso, lo trascinino e lo spingano fino in fondo” De Ira, I, 7, 2-4. Ciò che deve guidare l’uomo nella ricerca della virtù è solo la ragione, Seneca polemizza qui con Aristotele, che invece aveva riconosciuto un ruolo positivo alle passioni, se temperate dalla ragione: “Non c’è nessun bisogno di strumenti accessori: la natura ci ha provveduti a sufficienza, dandoci la ragione. Essa è l’arma che ci ha dato, solida, duratura, docile, non pericolosa o tale da poter esser rilanciata contro il padrone. Non solo per prevedere, ma per gestire le cose, la ragione è sufficiente di per se stessa. Ed allora, che cosa c’è di più insensato che il mandarla a chiedere aiuto all’irascibilità, lei stabile ad una incostante, lei leale ad una perfida, lei sana ad una malata?” De Ira, I, 17, 1.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'seneca05.jpg',
					text: 'Seneca enuclea a questo punto le ragioni di conflitto tra ragione e ira, e spiega così perché la prima ci conduce alla virtù mentre la seconda non può farlo in alcun modo: “La ragione concede tempo alle due parti, poi chiede una dilazione anche per se stessa, per aver modo di vagliare la verità: l’ira ha fretta. La ragione vuol prendere quella decisione che è giusta, l’ira vuole che sembri giusta la decisione già presa.  La ragione non può prendere in considerazione nulla che esca dal caso in esame, l’ira si lascia commuovere da dati inconsistenti, che divagano fuori dell’oggetto del dibattimento. La esasperano un atteggiamento troppo sicuro, una voce troppo ferma, un linguaggio troppo franco, un abbigliamento troppo raffinato, una avvocatura troppo fastosa ed il favore del popolo. Spesso condanna il reo per antipatia verso l’avvocato; anche se la verità balza agli occhi, ama e difende l’errore; non accetta confutazione e, dopo un errore iniziale, ritiene più onorevole l’ostinazione che il ripensamento” De Ira, I, 18, 1-2. Se nel libro primo Seneca ha spiegato cos’è l’ira e chiarito che essa è una passione del tutto nociva, nel secondo ci offre le motivazioni psicologiche e morali del suo sorgere ma anche della necessità di combatterla.  La questione centrale qui è comprendere “se l’ira nasca da riflessione o da impulso, cioè se muova da volontà deliberata o sia come tanti altri fenomeni, che insorgono in noi a nostra insaputa” De Ira, II, 1, 1. Seneca dunque si chiede se l’ira sia un turbamento che ci travolge nostro malgrado o se in qualche modo diamo ad essa il nostro assenso. Sul punto è importante sottolineare l’assoluta novità rappresentata dall’introduzione, ad opera di Seneca, del concetto di volontà come facoltà distinta dalla conoscenza. La tradizione dello stoicismo greco, conformemente alla tendenza fondamentalmente intellettualistica di tutta l’etica greca, aveva indicato nella disposizione d’animo il fattore determinante l’azione morale, tuttavia tale disposizione era ricondotta sostanzialmente alla conoscenza (episteme). Seneca individua nella percezione di un’ingiuria ricevuta l’origine dell’ira, ma il punto che lo interessa è stabilire se essa segua immediatamente quella percezione senza partecipazione dell’animo o piuttosto con il suo assenso. Secondo Socrate essa necessita dell’approvazione dell’animo, se così non fosse non sarebbe possibile neanche vincerla con la ragione, infatti “tutte le reazioni che insorgono fuori dell’area della volontà, sono invincibili ed inevitabili, come il brivido di chi è cosparso d’acqua fredda o la ripugnanza a certi contatti, il rizzarsi dei capelli alle notizie più brutte, l’effondersi del rossore alle parole sfacciate, la vertigine che coglie chi guarda i dirupi. Poiché nulla di tutto questo è in nostro potere, la ragione non può impedirne il verificarsi” De Ira, II, 2, 1. Viceversa: “L’ira è messa in fuga dai retti dettami: essa è infatti un vizio volontario dell’animo, non una di quelle reazioni che sono insite nello stato di condizione umana e perciò accadono anche ai più sapienti; tra queste, è da annoverare anche quel primordiale impulso interiore che ci turba al pensiero dell’ingiuria” De Ira, II, 2, 2. La percezione dell’ingiuria, dunque, e il conseguente turbamento sono reazioni ineliminabili e invincibili, perché accadono spontaneamente, l’ira invece, che a quella percezione aggiunge il desiderio di vendetta, è un atto della volontà.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'seneca06.jpg',
					text: 'La psicologia dell’ira segue dunque diverse fasi, in cui la volontà ha via via più forza, sino a sovrastare la ragione: “Voglio renderti edotto del come le passioni incominciano, si sviluppano e giungono all’esasperazione. Il primo movimento è involontario ed è come un preparativo o una minaccia della passione; il secondo è accompagnato da volontà controllabile ed è il pensare che è necessaria la vendetta, dacché sono stato offeso, o che costui deve essere punito, dacché ha offeso; il terzo movimento è ormai tracotante, non vuole la vendetta perché è necessaria, ma perché la vuole, ed ha già sopraffatto la ragione. Al primo dei tre impulsi non possiamo sottrarci con la ragione, come non possiamo sottrarci a quelle reazioni fisiche di cui s’è detto, allo sbadiglio quando sbadigliano gli altri, al chiudere gli occhi quando ci puntano improvvisamente le dita contro: questi fatti non li può vincere la ragione; forse li attenua l’assuefazione o una circospezione costante. Ma il secondo movimento, quello che nasce da deliberazione, è anche annullabile con una deliberazione” De Ira, II, 4, 1-2. Dunque è possibile emendare le passioni ed estirpare l’ira e, in fondo, non è neanche difficile, perché la natura, che ci ha generati per essere retti, ci aiuta, “se vogliamo emendarci”. Ancora una volta Seneca fa appello alla volontà.  “Non vengo a farvi un discorso infondato. La via della felicità è facile: soltanto, intraprendila sotto buoni auspici e con il sicuro aiuto degli dèi. È molto più difficile fare le azioni che fate. Che cosa è più riposante della tranquillità di spirito e più faticoso dell’ira? Che cosa è più distensivo della clemenza e più impegnativo della crudeltà? La pudicizia è libera, la libidine ha sempre mille impegni. Insomma, tutte le virtù sono facili da conservare, mentre coltivare i vizi costa caro” De Ira, II, 13, 2. Seneca attribuisce grande importanza all’educazione: “Sarà utilissimo, direi, che venga subito avviata una salutare educazione dei fanciulli; guidarli, però, è difficile, perché si deve far in modo di non nutrire in loro l’ira ed insieme di non smussarne il carattere” De Ira, II, 21, 1.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'seneca07.jpg',
					text: 'Nel terzo libro Seneca suggerisce la terapia per estirpare l’ira, proponendo alcuni precetti per non adirarsi, per deporre l’ira e infine per porre rimedio all’ira altrui:<p>- La cosa migliore, dunque, è curarsi ai primi sintomi del male, cominciando dal concedere una libertà minima alle proprie parole e contenerne la foga. È facile intercettare le proprie passioni al loro primo insorgere: i segni delle malattie si manifestano in anticipo e, come i presagi della tempesta e della pioggia vengono prima di esse, così ci sono dei prenunzi di codeste procelle che tormentano gli animi” De Ira, III, 10, 1-2.<p><p>- L’ira si può circoscrivere in molti modi: tantissime cose debbono essere risolte con l’arguzia o la battuta” De Ira, III, 11, 2.<p>  <p>- “Bisogna sempre concedere un rinvio: il tempo mette in luce la verità. L’orecchio non deve essere a disposizione di chi accusa: dobbiamo essere ben consci e diffidare di quel difetto della natura umana, in forza del quale siamo disposti a prestar fede alle notizie che non ascoltiamo volentieri, e ad adirarci, prima d’aver formulato un giudizio” De Ira, II, 22, 3.<p><p>- “Il miglior rimedio dell’ira è il saper rinviare. All’inizio non chiederle di perdonare, ma di formulare un giudizio: i suoi primi impulsi sono pesanti, ma si placherà, se saprà aspettare. E non cercare di eliminarla in blocco: rimarrà sconfitta, se saprai ridurla in brandelli” De Ira, II, 29, 1.<p><p>- “Nella maggior parte dei casi, il male è prodotto dalla credulità. A volte non si deve nemmeno ascoltare, perché ci sono situazioni nelle quali è meglio sbagliare che diffidare. Dobbiamo bandire dall’anima sospetti e congetture, che sono gli incentivi più ingannevoli” De Ira, II, 24, 1 (dunque diffidare delle apparenze).<p>',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'seneca08.jpg',
					text: 'Ma il precetto di maggiore importanza, si basa sulla convinzione che nessun uomo sia esente dal peccato e dalla colpa. Tale immagine dell’uomo rappresenta una cifra di novità rispetto alla pretesa di perfezione del saggio per gli stoici antichi. <p>- “Se vogliamo essere giudici giusti di tutte le situazioni, in primo luogo dobbiamo convincerci che nessuno di noi è senza colpa. Lo sdegno maggiore nasce da questa mentalità: “Non ho commesso colpa” e: “Non ho fatto niente”. No: è che non confessi nulla! Ci sdegniamo se ci è stata inflitta una ammonizione o una pena e, nello stesso tempo, pecchiamo di nuovo, aggiungendo al male fatto l’arroganza e la ribellione. Chi è costui, che si professa innocente davanti a tutte le leggi? Ed ammesso che sia così, che innocenza striminzita è l’esser buoni a norma di legge! Quanto è più estesa la regola del dovere di quella della legge! Quanti obblighi impongono la pietà, l’umanità, la liberalità, la giustizia, la lealtà, tutti valori che non sono traducibili in leggi dello Stato! Ma non riusciamo nemmeno ad esser fedeli a quella normativa ridotta all’osso: alcune cose abbiamo fatto, altre pensato, altre desiderato, altre favorito; di certe azioni, siamo innocenti perché non ci sono riuscite. Pensando a questo, siamo più giusti con chi sbaglia, abbiamo fiducia in chi ci rimprovera; non adiriamoci per nulla con i buoni (e con chi non dovremmo adirarci, se lo facciamo anche con i buoni?) e, soprattutto, non adiriamoci, con gli dèi: non è per legge loro, ma per la nostra condizione di mortali, che soffriamo i disagi che ci accadono.  “Ma ci piombano addosso malattie e dolori”. In un modo o nell’altro, dovremo pur lasciare questa casa fatiscente, che ci è toccata in sorte. Ti diranno che uno ha parlato male di te: pensa se non sei stato il primo tu, pensa di quante persone parli. Riflettiamo, direi, che alcuni non ci fanno ingiuria, ma ce la ricambiano, che altri lo fanno per il nostro bene, altri sono costretti ad agire così: altri non se ne rendono conto, e che anche quelli che agiscono scienti e volenti, nell’offenderci non si propongono di offendere noi…” De Ira, II, 28, 1-5. Coloro che riusciranno a vincere l’ira, sapranno anche governare gli altri turbamenti dell’animo; guidati dalla ragione essi saranno liberi, viceversa saranno resi schiavi da questa passione funesta: “c’è qualcuno disposto a chiamare assennato questo uomo che, come se fosse stato preso in una bufera, non cammina, ma è trascinato ed è schiavo della furia del male, e non incarica altri della sua vendetta, ma se ne fa personalmente esecutore, infierendo insieme con la mente e con il braccio, facendosi carnefice delle persone più care e di ciò di cui tra poco piangerà la perdita?” De Ira, III, 3, 3.<p>',
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
			background: 'menis_01_bg.jpg',
			firstDialog: 'menis_scene_4_dialog_1',
			dialogs: {
				menis_scene_4_dialog_1: {
					id: 'menis_scene_4_dialog_1',
					text: 'L’ira è un sentimento che non si pone limiti, ed è  parente con pulsioni altrettanto negative, che vengono innescate a catena se si agisce sotto la sua dettatura',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_4_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_4_dialog_2: {
					id: 'menis_scene_4_dialog_2',
					text: 'La follia, la vendetta…',
					//textClass: 'bubble-ragazzo',
				    positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_4_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_4_dialog_3: {
					id: 'menis_scene_4_dialog_3',
					text: 'Già. Bisogna subito porre limiti a essa, perché basta lasciarle un piccolo spiraglio per allontanare l’uomo dalla sua stessa umanità. Una volta che l’ira prende piede nel nostro animo difficilmente riusciamo a estirparla',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_4_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_4_dialog_4: {
					id: 'menis_scene_4_dialog_4',
					text: 'L’ira è capace di sottomettere anche la più alta delle facoltà umane, la ragione',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
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
			background: 'menis_01_bg.jpg',
			firstQuestion: 'menis_scene_5_survey_1',
			questions: {
				menis_scene_5_survey_1: {
					id: 'menis_scene_5_survey_1',
					text: 'Di fronte a una pulsione dettata dall’ira, è bene',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'agire subito, prima che essa peggiori',
							nextQuestion: 'menis_scene_5_survey_1',
                            textAfter: 'Sbagliato! Ripeti il questionario.' 
						},
						{
							text: 'lasciar trascorrere del tempo, per evitare di agire con mente offuscata',
							nextQuestion: 'menis_scene_5_survey_2',
							textAfter: 'Corretto! Vai avanti...'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				menis_scene_5_survey_2: {
					id: 'menis_scene_5_survey_2',
					text: 'Piuttosto che cedere all’ira:',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'meglio ricercare soluzioni dettate dalla ragione',
							nextQuestion: 'menis_scene_5_survey_3',
							textAfter: 'Corretto! Vai avanti...'
						},
						{
							text: 'meglio praticare immediatamente la vendetta, emozione più nobile',
							nextQuestion: 'menis_scene_5_survey_1',
                            textAfter: 'Sbagliato! Ripeti il questionario.' 
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				menis_scene_5_survey_3: {
					id: 'menis_scene_5_survey_3',
					text: 'Per Seneca, è importante considerare che:',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'nessuno è esente da colpa: non esistono animi superiori ad altri in senso assoluto',
							nextQuestion: '',
							textAfter: 'Corretto! Hai completato il questionario!'
						},
						{
							text: 'i giusti debbano dettare i principi morali e guidare gli ingiusti',
							nextQuestion: 'menis_scene_5_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.' 
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
			}
		},
		
		menis_scene_6: {
			id: 'menis_scene_6',
			type: 'abstract',
			name: 'menis_scene_6',
			template: 'abstract.html',
			nextScene: 'menis_scene_7',
			text: 'In diverse sue tragedie Seneca offre la drammatica rappresentazione dell’ira e dei suoi funesti effetti: Medea, Hercules furens, Thyestes. In particolare il protagonista di quest’ultima, Atreo, è indotto dall’ira a compiere azioni così efferate da sembrare quasi l’esemplificazione di quanto descritto nel De Ira. Atreo, infatti, non controlla la sua ira e il suo desiderio di vendetta, che lo spingono ai limiti della follia. Il Thyestes narra la vicenda di due fratelli, Atreo e Tieste, che si contendono il governo di Micene. La tragedia di Seneca prende avvio nel momento in cui il tiranno Atreo ha riconquistato il suo potere, che aveva perso a causa di un inganno ordito proprio dal fratello, che oltre al regno gli aveva sottratto anche la moglie. Atreo, pur avendo ricevuto ampia soddisfazione per il male subito (è infatti tornato sul trono e ha mandato il fratello in esilio), non riesce a placare l’ira: «“Bisogna osare un misfatto cosi atroce e sanguinoso che mio fratello rimpianga di non averlo osato lui. Non lo vendichi, un delitto, se non lo superi» (vv. 193-196). Atreo decide così di punire il fratello, preparando una vendetta terribile e assolutamente non commisurata al torto subito: il tiranno si vendicherà invitando il fratello a cena per imbandire davanti a lui le carni dei suoi figli, di cui Tieste inconsapevolmente si nutrirà, dopodiché Atreo gli svelerà la terribile verità: «Occorre un limite nel delitto quando si commette un delitto, non quando lo si restituisce. Anche tutto questo è poca cosa per me. Avrei dovuto versare nella tua bocca il sangue ancora caldo estratto dalle loro ferite, sì che tu bevessi il sangue dei viventi: nella fretta la mia ira si è ingannata. Calcando sulla spada li ho feriti, li ho uccisi davanti agli altari, con la strage votiva ho placato i fuochi sacri e amputando i cadaveri esanimi ho diviso le loro membra in piccoli brani: alcuni li ho immersi in caldaie bollenti, altri li ho fatti sgocciolare a fuoco lento. Ho tagliato le membra e i nervi mentre essi vivevano ancora, ho fatto gemere le fibre infilzate in un sottile spiedo, ho attizzato io stesso con la mia mano le fiamme. Tutto questo avrebbe potuto farlo meglio il loro padre; il mio rancore è andato sprecato invano. Ha dilacerato i suoi figli con l’empia bocca, ma senza saperlo e senza che essi sapessero» (vv. 1052-1068).',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
		},
		menis_scene_7: {
			id: 'menis_scene_7',
			type: 'dialog',
			name: 'menis_scene_7',
			template: 'dialog.html',
			nextScene: '', // When empty goes to map
			background: 'menis_01_bg.jpg',
			firstDialog: 'menis_scene_7_dialog_1',
			dialogs: {
				menis_scene_7_dialog_1: {
					id: 'menis_scene_7_dialog_1',
					text: 'Caligola era un iracondo e infatti nel De Ira l’ho citato come esempio di uomo soggiogato da passione violenta e crudele',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_7_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_7_dialog_2: {
					id: 'menis_scene_7_dialog_2',
					text: 'Quindi anche i governanti, come le persone comuni, possono essere preda di passioni incontrollate',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_7_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_7_dialog_3: {
					id: 'menis_scene_7_dialog_3',
					text: 'Senz’altro. Ma soprattutto coloro che governano devono coltivare la clemenza. Io ho pagato sulla mia pelle la mancanza di clemenza e moderazione e la cosa che più mi preme, in questo scenario che potrebbe apparire tetro, è lasciare insegnamenti che vadano al di là delle contingenze',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_7_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_7_dialog_4: {
					id: 'menis_scene_7_dialog_4',
					text: 'Capisco',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'menis_scene_7_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_7_dialog_5: {
					id: 'menis_scene_7_dialog_5',
					text: 'Ora va’ per le strade di Sophia, e torna qui per discutere di punti di vista differenti sull’Ira',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'menis_scene_7_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_7_dialog_6: {
					id: 'menis_scene_7_dialog_6',
					text: '',
					video: 'https://www.youtube.com/embed/SY-HC9plxJE',
					//exitType: 'dialog', // dialog, choice, scene
					textClass: '',
					nextDialog: 'menis_scene_7_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				menis_scene_7_dialog_7: {
					id: 'menis_scene_7_dialog_7',
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
			type: 'abstract',
			name: 'fobos_scene_4',
			template: 'abstract.html',
			nextScene: 'fobos_scene_6',
			text: 'Il titolo del capolavoro di Hobbes fa riferimento al Leviatano, un mostro biblico, metà balena e metà drago, che Dio ha creato e che menziona a Giobbe, con l’intento di evocare la propria onnipotenza. Hobbes si richiama ad esso per rappresentare lo Stato come ciò cui “nessun’altra potenza terrena può essere paragonata” (Giobbe, 41,25). Nell’introduzione al Leviatano Hobbes chiarisce: “La natura, ossia l’arte per mezzo della quale Dio ha fatto e governa il mondo, viene imitata dall’arte dell’uomo, oltre che in molte altre cose, anche nella capacità di produrre un animale artificiale. (…) L’arte si spinge anche più avanti attraverso l’imitazione di quel prodotto razionale che è l’opera più eccellente della natura: l’uomo. Viene infatti creato dall’arte quel grande Leviatano chiamato Repubblica o Stato (in latino civitas), che non è altro che un uomo artificiale, anche se ha una statura e una forza maggiori rispetto all’uomo naturale, per proteggere e difendere il quale è stato voluto. In esso, la sovranità è un’anima artificiale poiché dà vita e movimento all’intero corpo…” . In primo luogo Hobbes osserva che la natura ha fatto gli uomini uguali sia nelle facoltà del corpo che in quelle della mente. Questa affermazione non deve stupire, Hobbes è ben consapevole del fatto che esistano differenze tra uomo e uomo, e tuttavia ciò che egli intende sostenere è che tali differenze non pongono nessun uomo al di sopra di un altro. Nessuno, infatti, può rivendicare per sé un vantaggio, ad esempio il godimento esclusivo di un bene, che non possa essere preteso anche da altri, e nessuno, anche se più forte fisicamente, può essere certo di avere la meglio su un altro: “…tutto sommato, la differenza tra uomo e uomo non è così considerevole al punto che un uomo possa da ciò rivendicare per sé un beneficio cui un altro non possa pretendere tanto quanto lui. Infatti, quanto alla forza corporea, il più debole ne ha a sufficienza per uccidere il più forte, sia ricorrendo a una macchinazione segreta, sia alleandosi con altri che corrono il suo stesso pericolo”. Da questa uguaglianza di capacità, che altro non è che eguaglianza nella capacità di uccidersi l’un l’altro,  Hobbes deduce lo stato di guerra “di ogni uomo contro ogni altro uomo”, dovuto all’uguaglianza nella speranza di poter raggiungere i propri obiettivi: “Perciò, se due uomini desiderano la medesima cosa, di cui tuttavia non possono entrambi fruire, diventano nemici e, nel perseguire il loro scopo (…) cercano di distruggersi o di sottomettersi l’un l’altro” . Diffidenza, contesa, timore dominano le relazioni tra gli uomini nello stato di natura, “…troviamo nella natura umana tre cause principali di contesa: in primo luogo la rivalità; in secondo luogo la diffidenza; in terzo luogo l’orgoglio. La prima porta gli uomini ad aggredire per trarne un vantaggio; la seconda per la loro sicurezza; la terza per la loro reputazione. Nel primo caso ricorrono alla violenza per rendersi padroni della persona di altri uomini, delle loro donne, dei loro figli e del loro bestiame; nel secondo caso per difenderli. Nel terzo caso, per delle inezie, ad esempio una parola, un sorriso, una divergenza di opinioni, e qualsiasi altro segno di disistima, direttamente rivolto alla loro persona o a questa di riflesso, essendo indirizzato ai loro familiari, ai loro amici, alla nazione, alla loro professione, o al loro nome. Da ciò appare chiaramente che quando gli uomini vivono senza un potere comune che li tenga tutti in soggezione, essi si trovano in quella condizione chiamata guerra: guerra che è quella di ogni uomo contro ogni altro uomo”. Nello stato di natura vige dunque “il potere delle passioni, la guerra, la paura, la miseria, la bruttura, la solitudine, la barbarie, l’ignoranza, la crudeltà”. In esso l’uguaglianza significa la pari capacità di nuocersi a vicenda e la libertà non conosce alcun limite di principio, ma solo ostacoli di fatto. Questa condizione è così miserabile che l’uomo avverte la necessità assoluta di abbandonarla, la possibilità di uscire da questo stato di guerra permanente è affidata in parte alle passioni e in parte alla ragione: “Le passioni che inducono gli uomini alla pace sono la paura della morte, il desiderio di quelle cose che sono necessarie a una vita piacevole e la speranza di ottenerle con la propria operosità ingegnosa”. La ragione (che per Hobbes altro non è che capacità di calcolare vantaggi e svantaggi) suggerisce agli uomini delle regole che possono condurli ad un accordo in vista della pace. L’unico diritto che appartiene all’uomo per natura, non stabilito dunque da nessuna autorità, altro non è che “la libertà che ciascuno ha di usare il proprio potere a suo arbitrio per la conservazione della sua natura”. Due sole sono le leggi valide per natura (Hobbes intende per legge una regola della ragione che proibisce all’uomo di distruggere o mettere a repentaglio la propria vita): 1. “che si debba cercare la pace per quanto si ha speranza di ottenerla” e, se ciò non è possibile, che ci si debba difendere con tutti i mezzi di cui si dispone; 2. “che si sia disposti, quando anche altri lo siano, a rinunciare, nella misura in cui lo si ritenga necessario alla pace e alla propria difesa, al diritto su tutto e ci si accontenti di avere tanta libertà nei confronti degli altri quanta se ne concede agli altri nei confronti di se stessi”. Dalla legge che ci obbliga a rinunciare al nostro diritto di usare ad arbitrio la nostra libertà, quando anche ogni altro lo fa, si genera una terza legge, che obbliga al rispetto dei patti. Quest’ultima è legge nel senso che sarebbe un assurdo logico il suo contrario. Ma le passioni degli uomini rischiano sempre di avere la meglio sulle leggi di ragione e sulle regole della prudenza per cui si rende necessario istituire un potere che sia in grado di assicurare la pace e la sicurezza degli uomini. Lo Stato sorge in virtù del patto che i singoli sottoscrivono di alienare la loro libertà di natura a un potere unico: “L’unico modo di erigere un potere comune che possa essere in grado di difenderli dall’aggressione di stranieri e dai torti reciproci (…) è quello di trasferire tutto il loro potere e tutta la loro forza a un solo uomo o a una sola assemblea di uomini”. In tal modo gli uomini divengono sudditi e istituiscono l’autorità del sovrano, obbligandosi a obbedire a essa. Importante sottolineare che non è il popolo che trasferisce i poteri al sovrano, ma è attraverso il sovrano che si istituisce il popolo, infatti, solo nel momento in cui si sottomette al sovrano la moltitudine si dota di una volontà unica e diviene popolo. Il sovrano, in virtù dell’autorizzazione ricevuta dai singoli (che gli hanno ceduto il loro potere) rappresenta (come l’attore) le azioni e il volere dei sudditi (autori). Come abbiamo visto l’uscita dallo stato di natura (che rappresenta comunque solo una finzione, utile a spiegare l’origine del potere), non solo è nelle possibilità dell’uomo ma, potremmo dire, è una scelta obbligata. Non solo la ragione, che consiglia la prudenza, ma anche le emozioni, conducono a tale scelta. La passione cardine, su cui Hobbes edifica la sua teoria, è la paura, in particolare la paura di una morte violenta. Essa non soltanto è all’origine dello Stato, ma contribuisce alla sua conservazione. La stessa ragione, come calcolo di ciò che è utile alla conservazione della vita, sembra formarsi proprio a partire da essa. Ragione e paura così si implicano a vicenda “la ragione è impotente senza la paura (…) la paura è cieca senza il calcolo razionale” . Se da un lato paura e diffidenza sono responsabili dell’isolamento umano, altrettanto vero è che solo mediante una risposta razionale a essa è possibile l’instaurarsi dell’istituzione statale, unico luogo in cui può regnare la pace, la sicurezza, la ricchezza, la benevolenza, la società, lo splendore. La paura è il miglior antidoto contro la violenza; non solo, le passioni sono per Hobbes fondamentali a tal punto che qualora un individuo potesse raggiungere quello che viene definito come sommo bene, secondo il filosofo, con ciò stesso cesserebbe di vivere: “Il sommo bene, ovvero, come si dice, la felicità e il fine ultimo non si può trovare in questa vita. Infatti, se si tratta del fine ultimo, non si desidera più nulla; onde segue che, a partire da quel momento, non solo non si avrebbe più nulla di buono, ma l’uomo non avrebbe neppure più sensazioni. Infatti, ogni sensazione è congiunta a qualche desiderio o repulsione; e non sentire significa non vivere”. <p>Bibliografia<p><p>T. Hobbes, Leviatano, introduzione, tr. it. a cura di A. Pacchi, Laterza, Roma-Bari 1989 (d’ora in poi L.)<p><p>T. Hobbes, The English Works, London<p><p>T. Hobbes, De Cive, X, 1, tr. it. a cura di T. Magri, Ed. Riuniti, Roma 1989<p><p>T. Hobbes, De Homine, a cura di A. Pacchi, Laterza, Roma-bari, 1984<p><p>R. Bodei, Geometria delle passioni, Feltrinelli, Milano 1991<p>',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
		},

	    fobos_scene_6: {
			id: 'fobos_scene_6',
			type: 'survey',
			name: 'fobos_scene_6',
			template: 'survey.html',
			nextScene: 'fobos_scene_5',
			background: 'fobos_01_bg.jpg',
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
fobos_scene_6: {
			id: 'fobos_scene_6',
			type: 'dialog',
			name: 'fobos_scene_6',
			template: 'dialog.html',
			nextScene: '',
			background: 'fobos_01_bg.jpg',
			firstDialog: 'fobos_scene_6_dialog_1',
			dialogs: {
				fobos_scene_6_dialog_1: {
					id: 'fobos_scene_6_dialog_1',
					text: 'Professor Hobbes, vorrei che lei spiegasse al nostro ospite che la Paura non è la fine di tutto ma, in un certo senso, è l\'inizio di tutto',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_2: {
					id: 'fobos_scene_6_dialog_2',
					text: 'Certo che lo è... cos\' è che non ti è chiaro?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_3: {
					id: 'fobos_scene_6_dialog_3',
					text: 'Scegli la risposta da dare a Hobbes!',
					//textClass: 'bubble-ragazzo',
					textClass: 'suggest',
					positionClass: 'suggest-top',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Non capisco come la paura possa condurre a qualcosa di positivo per me',
							nextDialog: 'fobos_scene_6_dialog_4'
						},
						{
							text: 'Non capisco perchè la paura è alla base di ogni società',
							nextDialog: 'fobos_scene_6_dialog_15'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				fobos_scene_6_dialog_4: {
					id: 'fobos_scene_6_dialog_4',
					text: 'La paura è un inibitore, ti consente di vivere liberamente quello che è necessario che tu viva liberamente. Se non ci fosse, percorreresti la tua vita in mille direzioni, per così dire casuali',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_5: {
					id: 'fobos_scene_6_dialog_5',
					text: 'Guidato solo dal tuo istinto',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_6: {
					id: 'fobos_scene_6_dialog_6',
					text: 'E non solo... le direzioni casuali ti porterebbero a incrociare gli istinti degli altri... e se questi due istinti sono in contrasto...',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_7: {
					id: 'fobos_scene_6_dialog_7',
					text: '...beh, vincerebbe l\'istinto più forte!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_8: {
					id: 'fobos_scene_6_dialog_8',
					text: 'E questo non ti fa ancora più paura?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_9',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_9: {
					id: 'fobos_scene_6_dialog_9',
					text: 'Quindi la paura è un limitatore di velocità...',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_10',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_10: {
					id: 'fobos_scene_6_dialog_10',
					text: 'In un certo senso sì. Ed è anche la base solida sulla quale poter rincorrere quanto veramente costituisce la pulsione naturale più pura per ciascuno di noi',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_11',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					fobos_scene_6_dialog_11: {
					id: 'fobos_scene_6_dialog_11',
					text: 'La felicità?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_12',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					fobos_scene_6_dialog_12: {
					id: 'fobos_scene_6_dialog_12',
					text: 'Esatto... che è un\'emozione che richiede uno specifico habitat. Richiede serenità e la serenità, paradossalmente, te la dà solo la dose iniziale di paura',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_13',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					fobos_scene_6_dialog_13: {
					id: 'fobos_scene_6_dialog_13',
					text: 'Chiaro',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_14',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					fobos_scene_6_dialog_14: {
					id: 'fobos_scene_6_dialog_14',
					text: 'Ora, senza paura, percorri le altre strade di Sophia e torna qua per nuovi punti di vista su questa emozione!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_14bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_14bis: {
					id: 'fobos_scene_6_dialog_14bis',
					text: '',
					video: 'https://www.youtube.com/embed/7JQHDr72ZuM',
					textClass: '',
					positionClass: '',
					nextDialog: 'fobos_scene_6_dialog_14ter',
				},
				fobos_scene_6_dialog_14ter: {
					text: 'Torna alla mappa...',
					positionClass: 'bubble-dialog-left',
					exitType: 'scene', // dialog, choice, scene
					nextScene: '',
					sceneClass: 'button-bottom'
				},
				fobos_scene_6_dialog_15: {
					id: 'fobos_scene_6_dialog_15',
					text: 'Un individuo che non ha paura è un individuo sciolto da qualunque regola. Non può condividere niente con i suoi simili perchè non è sicuro delle intenzioni del prossimo. Non c\'è una regola superiore, una sanzione che impedisca a ciascuno di rispettare le azioni e le intenzioni degli altri',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_16',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_16: {
					id: 'fobos_scene_6_dialog_16',
					text: 'E fin qui ci sono...',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_17',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_17: {
					id: 'fobos_scene_6_dialog_17',
					text: 'Bene. Se l\'uomo non avesse l\'intelligenza di immaginare il futuro in uno scenario fantastico, terminerebbe la vita così, nel combattere contro gli altri uomini',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_18',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_18: {
					id: 'fobos_scene_6_dialog_18',
					text: 'Ma la paura che c\'entra?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_19',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_19: {
					id: 'fobos_scene_6_dialog_19',
					text: 'La paura è il sentimento che ci spinge individualmente ad affidare a un\'altra realtà artificiale, superiore a ciascuno di noi (lo Stato), la tutela della nostra sicurezza. La nostra paura diventa il mattone con cui lo Stato viene costruito. E lo Stato è costruito principalmente per difenderci dagli altri',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_20',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_20: {
					id: 'fobos_scene_6_dialog_20',
					text: 'Come un patto, come un contratto stretto con una scorta',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_21',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_21: {
					id: 'fobos_scene_6_dialog_21',
					text: 'Esatto... ma visto che riguarda tutti, non è un contratto individuale ma un contratto sociale',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_22',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_22: {
					id: 'fobos_scene_6_dialog_22',
					text: 'Conosci Rousseau?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_23',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_23: {
					id: 'fobos_scene_6_dialog_23',
					text: 'No, non l\'ho ancora studiato',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_24',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_24: {
					id: 'fobos_scene_6_dialog_24',
					text: 'Beh, quando lo studierai ti verrà certamente in mente questa conversazione',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_25',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_25: {
					id: 'fobos_scene_6_dialog_25',
					text: 'Chiaro',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_26',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_26: {
					id: 'fobos_scene_6_dialog_26',
					text: 'Ora, senza paura, percorri le altre strade di Sophia e torna qua per nuovi punti di vista su questa emozione!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'fobos_scene_6_dialog_26bis',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				fobos_scene_6_dialog_26bis: {
					id: 'fobos_scene_6_dialog_26bis',
					text: '',
					video: 'https://www.youtube.com/embed/7JQHDr72ZuM',
					textClass: '',
					positionClass: '',
					//exitType: 'dialog', // dialog, choice, scene
					exitType: 'scene', // dialog, choice, scene
					nextScene: '',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
					sceneClass: 'button-bottom'
				},
			}
		},
				
		thauma_scene_1: {
			id: 'thauma_scene_1',
			type: 'dialog',
			name: 'thauma_scene_1',
			template: 'dialog.html',
			nextScene: 'thauma_scene_2',
			background: 'thauma_00_bg.jpg',
			firstDialog: 'thauma_scene_1_dialog_1',
			dialogs: {
					thauma_scene_1_dialog_1: {
					id: 'thauma_scene_1_dialog_1',
					text: 'La curiosità, propietà connaturale dell’uomo, figliuola dell’ignoranza, che partorisce la scienza, all’aprire che fa della nostra mente la maraviglia, porta costume: ch’ove osserva straordinario effetto in natura, come cometa, parelio o stella di mezzodì, subito domanda che tal cosa voglia dire o significare',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_2: {
					id: 'thauma_scene_1_dialog_2',
					text: 'Ragazzo, riconosci colui che sta pronunciando questi frammenti?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                	thauma_scene_1_dialog_3: {
					id: 'thauma_scene_1_dialog_3',
					text: 'No, ero distratto dal posto e dalla veduta… meravigliosi',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_4: {
					id: 'thauma_scene_1_dialog_4',
					text: 'E’ proprio di meraviglia che parleremo. Meraviglia come capacità di ricercare risposte, cause ed effetti con slancio e stupore. Meraviglia come sorella di conoscenza della curiosità…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_5: {
					id: 'thauma_scene_1_dialog_5',
					text: 'Giambattista Vico! Il liceo di mio fratello è intitolato a lui!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_6: {
					id: 'thauma_scene_1_dialog_6',
					text: 'Già...',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_7: {
					id: 'thauma_scene_1_dialog_7',
					text: 'Maraviglia e curiosità sono, se così possiamo dire, le due figlie buone dell’ignoranza, che compensano il danno morale e mentale arrecato dall’altra [la boria]”. E dalla meraviglia, in Vico, nascono sia la scienza che la poesia, la scienza “che pone domande sul significato delle cose’ e la poesia ‘che dà risposte’, e ‘ciò di cui si ignorano le cause viene spiegato per riduzione antropomorfica',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_8: {
					id: 'thauma_scene_1_dialog_8',
					text: 'Salve,  Vico',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_9',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_9: {
					id: 'thauma_scene_1_dialog_9',
					text: 'Salve, Talete. Benvenuti a entrambi nella Baia della Meraviglia. Su questo splendido mare faremo un breve e meraviglioso viaggio fra il vero e il verosimile, la conoscenza e la curiosità, il “cogito” e il “vero”, paragonati al verosimile',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_10',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_10: {
					id: 'thauma_scene_1_dialog_10',
					text: 'Cogito… vero…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_11',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_11: {
					id: 'thauma_scene_1_dialog_11',
					text: 'Aspetta, ogni cosa a suo tempo. Intanto lascia che Vico si presenti…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_12',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_12: {
					id: 'thauma_scene_1_dialog_12',
					text: 'Sono nato a Napoli, sesto di otto fratelli, il 23 giugno 1668. Mio padre, Antonio, era un libraio e mia madre si chiamava Candida. Ho studiato dai Gesuiti e di seguito Giurisprudenza, poiché mio padre desiderava per me questo percorso. Nel frattempo divento precettore dei figli di don Domenico Rocca, incarico che ho mantenuto fino ai 27 anni. Subito dopo mi appassionai alla retorica: nel 1708 una mia orazione, il De nostri temporis studiorum ratione, metteva a confronto il metodo degli studi degli antichi con quello dei moderni e presentava il progetto di una nuova epistemologia',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_13',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_13: {
					id: 'thauma_scene_1_dialog_13',
					text: 'Che significa epistemologia?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_14',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_14: {
					id: 'thauma_scene_1_dialog_14',
					text: 'L’epistemologia è lo studio dei metodi scientifici, in generale delle metodologie con cui si acquisisce la conoscenza. A quei tempi andavo in polemica contro il metodo matematico deduttivo della nuova scienza cartesiana',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_15',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_15: {
					id: 'thauma_scene_1_dialog_15',
					text: 'Cartesio è qui su Sophia…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_1_dialog_16',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_1_dialog_16: {
					id: 'thauma_scene_1_dialog_16',
					text: 'Lo so, ci incrociamo spesso. Mi battevo in nome dell’articolata varietà del mondo umano; la difesa della retorica e dell’eloquenza contro l’aridità del discorso sillogistico e matematico; della fantasia, dell’ingegno e della poesia contro la critica e la ragione; l’esigenza dello studio della storia, delle scienze morali, della vita civile e dell’eloquenza. Nel 1725 ho stampato a Napoli i Prìncipi di una scienza nuova dintorno alla natura delle nazioni, opera che ho rielaborato nel 1730 con il titolo di Cinque libri de’ principì d’una Scienza nuova d’intorno alla comune natura delle nazioni. A quest’opera, che mi ha reso celebre e contiene i cardini e la piena maturità del mio pensiero, ho lavorato instancabilmente fino alla fine dei miei studi (della mia vita), arrivando a stampare una terza edizione nel 1744',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					exitType: 'scene',
					nextScene: 'thauma_scene_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				
					sceneClass: 'button-bottom'
				}
			}	
		},
        thauma_scene_2: {
			id: 'thauma_scene_2',
			type: 'dialog',
			name: 'thauma_scene_2',
			template: 'dialog.html',
			nextScene: 'thauma_scene_3',
			background: 'thauma_01_bg.jpg',
			firstDialog: 'thauma_scene_2_dialog_1',
			dialogs: {
				thauma_scene_2_dialog_1: {
					id: 'thauma_scene_2_dialog_1',
					text: 'Che significa verosimile… perché è un concetto così importante?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_2_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_2_dialog_2: {
					id: 'thauma_scene_2_dialog_2',
					text: 'Perché la ricerca della verità, attività tipicamente umana, è volta alla produzione di teorie e fatti, che sono solo una rappresentazione della ricerca della verità: è la produzione del verosimile.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_2_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_2_dialog_3: {
					id: 'thauma_scene_2_dialog_3',
					text: 'Scegli la risposta da dare a Vico!',
					//textClass: 'bubble-ragazzo',
					textClass: 'suggest',
					positionClass: 'suggest-top',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Dunque il Vero non è accessibile agli uomini?',
							nextDialog: 'thauma_scene_2_dialog_4'
						},
						{
							text: 'Quindi l’uomo può conoscere solo ciò che egli stesso crea?',
							nextDialog: 'thauma_scene_2_dialog_7'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				thauma_scene_2_dialog_4: {
					id: 'thauma_scene_2_dialog_4',
					text: 'No, ma ciò non significa che l’uomo è impossibilitato a conoscere',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_2_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                thauma_scene_2_dialog_5: {
					id: 'thauma_scene_2_dialog_5',
					text: 'Meno male...',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_2_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                thauma_scene_2_dialog_6: {
					id: 'thauma_scene_2_dialog_6',
					text: 'Questo è uno dei punti chiave della mia teoria della conoscenza… te ne voglio parlare con calma',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					exitType: 'scene',
					nextScene: 'thauma_scene_3',

					sceneClass: 'button-bottom'
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_2_dialog_7: {
					id: 'thauma_scene_2_dialog_7',
					text: 'In un certo senso sì',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_2_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                thauma_scene_2_dialog_8: {
					id: 'thauma_scene_2_dialog_8',
					text: 'Ma la fisica, la matematica e tutte le scienze sono la spiegazione della realtà, della natura',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_2_dialog_9',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_2_dialog_9: {
					id: 'thauma_scene_2_dialog_9',
					text: 'Non sono la spiegazione della realtà, sono UNA spiegazione della realtà. Sono un modello, rigoroso e costruito secondo le regole che una certa epoca impone',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					//exitType: 'dialog', // dialog, choice, scene
					exitType: 'scene',
					nextScene: 'thauma_scene_3',
					sceneClass: 'button-bottom'
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				}
			}
		},
	    thauma_scene_3: {
			id: 'thauma_scene_3',
			type: 'abstract',
			name: 'thauma_scene_3',
			template: 'abstract.html',
			nextScene: 'thauma_scene_4',
			text: '“In latino verum e factum sono termini reciproci, cioè, per dirla alla maniera delle scuole, si convertono; e in quella lingua intelligere equivale ‘leggere perfettamente’. Si diceva invece cogitare nel senso in cui noi adesso diciamo ‘pensare’ e ‘andar raccogliendo’. Inoltre in latino ratio stava a significare il calcolo aritmetico, dal latino e lo rende a questi superiore: infatti, nella lingua corrente i Latini definivano l’uomo quale essere animato ‘partecipe di ragione’, non padrone di essa. D’altra parte, come le parole sono simboli e caratteri delle idee, allo stesso modo le idee lo sono delle cose. Perciò, nello stesso modo, come legere si usa per chi raccoglie gli elementi della scrittura con i quali si compongono le singole parole, intelligere viene usato per chi raccoglie tutti gli elementi di una cosa con i quali se ne esprime l’idea perfettissima. Da qui si può congetturare che gli antichi sapienti italici fossero d’accordo, circa la questione della verità, su queste massime: che il vero coincide con il fatto, che di conseguenza in Dio è il primo vero perché Dio è il primo facitore, che è infinito perché è facitore di tutte le cose, che è esattissimo perché rappresenta a se stesso gli elementi estrinseci delle cose che pure contiene. Sapere, infatti, equivale a disporre gli elementi delle cose; ragion per cui alla mente umana appartiene specificamente il pensiero, a quella divina l’intelligenza. Perciò Dio raccoglie tutti gli elementi delle cose, sia quelli intrinseci che quelli estrinseci, perché li contiene e li dispone; poiché invece la mente umana è limitata e sono poste al di fuori di essa tutte le cose che non sono la stessa mente, non può mai raccogliere tutti gli elementi, ma è costretta ad accontentarsi solo di quelli esteriori. Cosicché ad essa è concesso pensare alle cose, certo non intenderle; ed è per questo che è partecipe della ragione ma non è padrona. Vorrei chiarire questo concetto con una similitudine: il vero divino è l’immagine solida delle cose, come una creazione in rilievo; mentre il vero umano è un monogramma o un’immagine piana, quasi una pittura. Pertanto, come il vero divino è quello che Dio dispone e genera nel momento stesso in cui conosce, così il vero umano è quello che l’uomo compone e fa mentre apprende. In tal modo, la scienza è la conoscenza del genere o del modo in cui le cose si fanno e, tramite questa, quando la mente conosce il modo fa la cosa perché ne compone gli elementi; solida per Dio che abbraccia tutto, piana per l\'uomo che afferra solo gli elementi estrinseci. Per conciliare più agevolmente le cose delle quali abbiamo discusso con la nostra religione, si deve sapere che gli antichi filosofi italici credevano che vero e fatto si convertissero: prima di tutto perché pensavano che il mondo fosse eterno, e poi perché i filosofi gentili credevano in un Dio operante sempre ad extra, cosa negata dalla nostra teologia. Per questo nella nostra religione, per la quale professiamo un mondo creato dal nulla nel tempo, occorre fare questa distinzione: il vero creato si converte nel fatto, laddove il vero increato si converte nel generato. Così le sacre scritture, con eleganza davvero divina, chiamarono Verbo la sapienza di Dio, che contiene in sé le idee di tutte le cose e parimenti gli elementi di tutte le idee, perché in esso il vero e la comprensione di tutti gli elementi che compongono l’universo sono la stessa cosa e, se solo lo volesse, potrebbe dar vita a infiniti mondi. E nella sua divina onnipotenza, dalla conoscenza di queste cose, prende forma un Verbo reale esattissimo che, conosciuto ab eterno dal Padre, parimenti dal Padre ab eterno è generato” (De ant., a cura di M. Sanna, Roma, Edizioni di Storia e Letteratura, 2005, pp. 14-19).',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
		},
        thauma_scene_4: {
			id: 'thauma_scene_4',
			type: 'dialog',
			name: 'thauma_scene_4',
			template: 'dialog.html',
			nextScene: 'thauma_scene_5',
			background: 'thauma_01_bg.jpg',
			firstDialog: 'thauma_scene_4_dialog_1',
			dialogs: {
                thauma_scene_4_dialog_1: {
					id: 'thauma_scene_4_dialog_1',
					text: 'Io penso che l’Entità Superiore, Dio, trasformi il mondo in ogni momento e possegga solo lui la fuggevole Verità',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_4_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                thauma_scene_4_dialog_2: {
					id: 'thauma_scene_4_dialog_2',
					text: 'E l’uomo cosa può conoscere?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_4_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                thauma_scene_4_dialog_3: {
					id: 'thauma_scene_4_dialog_3',
					text: 'L’uomo può conoscere ciò di cui è causa… ciò che egli fa. Ma ciò che egli fa non è la realtà, come invece ciò che crea Dio… l\'uomo crea oggetti fittizi raccogliendo informazioni al di fuori di sé, crea delle rappresentazioni e di quelle può cogliere elementi di conoscenza',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_4_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                
				thauma_scene_4_dialog_4: {
					text: 'Dunque, ragazzo, il campo di conoscenza degli uomini è ristretto, in quanto egli non può conoscere il mondo della natura perché creato da Dio, mentre può conoscere per esempio il mondo della matematica in quanto formato da astrazioni create da lui stesso',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'thauma_scene_4_dialog_5'
				},
				
				thauma_scene_4_dialog_5: {
					text: '',
					video: 'https://www.youtube.com/embed/CGGvg-yn3oU',
					nextDialog: 'thauma_scene_4_dialog_6'	
				},

				thauma_scene_4_dialog_6: {
					text: 'Ok, andiamo avanti...',
					positionClass: 'bubble-dialog-left',
                    exitType: 'scene',
					nextScene: 'thauma_scene_5',
					sceneClass: 'button-bottom'
				}
			}
		},
        thauma_scene_5: {
			id: 'thauma_scene_5',
			type: 'story',
			name: 'thauma_scene_5',
			template: 'story.html',
			nextScene: 'thauma_scene_6',
			pages: [
				{
					image: 'vico01.jpg',
					text: 'È nel De antiquissima che Vico – a partire da una serie di analisi etimologiche del tutto arbitrarie di alcuni termini latini – entra in aperta polemica contro il cogito cartesiano: l’errore di fondo di Cartesio è per Vico l’aver individuato il criterio di verità nell’idea chiara e distinta, mentre tale criterio deve essere ritrovato nella “conversione” del vero e del fatto (verum et factum reciprocantur, seu convertuntur). Muovendo da questo principio, Vico sostiene che il conoscere consiste nel conoscere i modi della nascita delle cose, cioè nel farle.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'vico02.jpg',
					text: 'Nel De antiquissima Vico pone la distinzione fra conoscenza umana e conoscenza divina: Dio possiede l\'intendere (ovvero la conoscenza perfetta risultante dal possesso di tutti gli elementi costituenti l\'oggetto pensato), mentre l\'uomo ha il pensare, quasi paragonabile ad una raccolta all\'esterno di tutti gli elementi dell\'oggetto. Sia Dio che l\'uomo possono conoscere solo ciò di cui sono causa, ed, infatti, le parole verum e factum hanno in latino lo stesso significato, la differenza sta però nel fatto che Dio crea oggetti reali, mentre l\'uomo crea oggetti fittizi raccogliendo informazioni al di fuori di sé.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'vico03.jpg',
					text: 'Il campo della conoscenza dell\'uomo è quindi ristretto, in quanto egli non può conoscere il mondo della natura perché creato da Dio, mentre può conoscere il mondo della matematica in quanto formato da astrazioni create da lui stesso; l\'uomo non può neanche conoscere il proprio essere in quanto, a differenza di quanto pensava Cartesio, il cogito è la coscienza del proprio essere ma non la scienza di esso, in quanto la scienza è fondata su cause certe. Essendo però il mondo dello scibile aperto alle creazioni umane, esso è aperto alla storia, in quanto essa è stata certamente fatta dagli uomini; essa non deve essere però considerata come un succedersi slegato di avvenimenti, ma deve avere un ordine fondamentale.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				}
			]
		},
		thauma_scene_6: {
			id: 'thauma_scene_6',
			type: 'survey',
			name: 'thauma_scene_6',
			template: 'survey.html',
			nextScene: 'thauma_scene_7',
			background: 'thauma_01_bg.jpg',
			firstQuestion: 'thauma_scene_6_survey_1',
			questions: {
				thauma_scene_6_survey_1: {
					id: 'thauma_scene_6_survey_1',
					text: 'Le scienze create dall’uomo sono:',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'l’esatta riproduzione della Creazione divina',
							nextQuestion: 'thauma_scene_6_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						},
						{
							text: 'una rappresentazione verosimile, della quale l’uomo può acquisire conoscenze',
							nextQuestion: 'thauma_scene_6_survey_2',
							textAfter: 'Corretto! Vai avanti...'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				thauma_scene_6_survey_2: {
					id: 'thauma_scene_6_survey_2',
					text: 'Vico contesta a Cartesio:',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'la mancata distinzione fra conoscenza delle cose e conoscenza del modo di farle',
							nextQuestion: 'thauma_scene_6_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						},
						{
							text: 'l’eccessiva importanza data alla ragione',
							nextQuestion: 'thauma_scene_6_survey_3',
							textAfter: 'Corretto! Vai avanti...'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				thauma_scene_6_survey_3: {
					id: 'thauma_scene_6_survey_3',
					text: 'La meraviglia:',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'è uno degli stadi evolutivi dell’uomo e dei popoli',
							nextQuestion: '',
							textAfter: 'Corretto! Hai completato il questionario!'
						},
						{
							text: 'è una pulsione negativa da allontanare al più presto',
							nextQuestion: 'thauma_scene_6_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				}
			}
		},
        thauma_scene_7: {
			id: 'thauma_scene_7',
			type: 'dialog',
			name: 'thauma_scene_7',
			template: 'dialog.html',
			nextScene: '',
			background: 'thauma_01_bg.jpg',
			firstDialog: 'thauma_scene_7_dialog_1',
			dialogs: {
					thauma_scene_7_dialog_1: {
					id: 'thauma_scene_7_dialog_1',
					text: 'Era importante che tu capissi come io intendo il processo di conoscenza… per introdurre adesso quello di meraviglia. Vedi, io penso che la storia degli uomini e dei popoli sia un po’ come la storia di ognuno di noi',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_2: {
					id: 'thauma_scene_7_dialog_2',
					text: 'In che senso?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                	thauma_scene_7_dialog_3: {
					id: 'thauma_scene_7_dialog_3',
					text: 'Entrando qui, in questa baia, ho visto che hai osservato il mare, incantato, per molto tempo. E’ la prima volta che vedi il mare?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_4: {
					id: 'thauma_scene_7_dialog_4',
					text: 'No… io sono nato a pochi passi dal mare e abito sul mare',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_5: {
					id: 'thauma_scene_7_dialog_5',
					text: 'E come mai lo hai osservato con tale stupore? L’acqua del mare è sempre uguale',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_6: {
					id: 'thauma_scene_7_dialog_6',
					text: 'Beh… è meravigliosa, io poi ci vedo ogni volta colori diversi e guardo lontano per scoprire eventuali grandi pesci che dovessero saltare',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_7: {
					id: 'thauma_scene_7_dialog_7',
					text: 'Il nostro Talete, invece, ha distolto subito lo sguardo dal panorama… forse Talete non è amante del mare?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_8: {
					id: 'thauma_scene_7_dialog_8',
					text: 'Lo sono,  Vico',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_9',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_9: {
					id: 'thauma_scene_7_dialog_9',
					text: 'E quindi?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_10',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_10: {
					id: 'thauma_scene_7_dialog_10',
					text: 'E quindi capisco che io, in quanto ragazzo, sono più propenso ad entusiasmarmi…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_11',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_11: {
					id: 'thauma_scene_7_dialog_11',
					text: 'Esatto. Io penso che quello che accade nella nostra evoluzione sia accaduto nella storia dell’umanità. Suddivido la storia dell’umanità in tre fasi, ciascuna corrispondente al tipo di facoltà della mente. Senso, fantasia e ragione sono i tre stadi evolutivi; ognuno di questi stadi viene superato ed assorbito dal successivo.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_12',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_12: {
					id: 'thauma_scene_7_dialog_12',
					text: 'Trasferendo questa riflessione alla storia umana, quali sono questi stadi?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_13',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_13: {
					id: 'thauma_scene_7_dialog_13',
					text: 'Al senso corrisponde l’età degli dei, alla fantasia l’età degli eroi, alla ragione l’età degli uomini. A questi tre momenti corrispondono le tre età del divenire storico, ognuna caratterizzata da forme diverse di convivenza civile, di espressione linguistica e di scrittura: l’età degli dei, l’età degli eroi e l’età degli uomini. L’età degli dei è quella in cui gli uomini sono come “bestioni”. L’umanità, immersa in questo stato ferino, solo lentamente e grazie allo stimolo del terrore e della meraviglia generati dalla divinità, scoperta e impersonata nelle forze della natura, comincia a darsi forme di vita sociale',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_14',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_14: {
					id: 'thauma_scene_7_dialog_14',
					text: 'Un po’ come i bambini…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_15',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_15: {
					id: 'thauma_scene_7_dialog_15',
					text: 'Già. Si giunge poi ad un linguaggio articolato, poetico, espressione di “vivissima fantasia”. È questa l’età degli eroi, l’età della fantasia, il momento in cui nascono il linguaggio, la poesia, il mito e le favole. Quello che attraverso il linguaggio esprimono i primi popoli è poesia, perché il loro esprimersi è poetico, fatto di comparazioni, similitudini, metafore; e poetica è ogni loro espressione ed esperienza (religione, metafisica, fisica, logica, politica), e poiché pure la mente primitiva tende a generalizzazioni, nascono gli universali fantastici o caratteri poetici. In questa età si costruiscono anche le basi di una società non più fondata sulla forza fisica e sulla violenza, ma su una comunanza di interessi sociali (i feudi). I contrasti fra gli individui vengono controllati dal diritto, che non intende distruggere le passioni, ma trasformarle in “virtù eroiche”. Questo diritto primitivo viene imposto con l’autorità (repubbliche aristocratiche).',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_16',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_7_dialog_16: {
					id: 'thauma_scene_7_dialog_16',
					text: 'E poi c’è l’età della maturità…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_17',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_7_dialog_17: {
					id: 'thauma_scene_7_dialog_17',
					text: 'Sì, l’età della “ragione tutta spiegata”, quella in cui gli uomini pervengono alla coscienza critica di quella saggezza solo intravista nelle età precedenti. Ho scritto che “Gli uomini prima sentono senz’avvertire, dappoi avvertiscono con animo perturbato e commosso, finalmente riflettono con mente pura. Questa Degnità e ’l principio delle sentenze poetiche, che sono formate con sensi di passioni e d’affetti, a differenza delle sentenze filosofiche, che si formano dalla riflessione con raziocinii: onde queste più s’appressano al vero quanto più s’innalzano agli universali, e quelle sono più certe quanto più s’appropriano a’ particolari” (Sn44, l.1, Degnità LIII)',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_18',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				thauma_scene_7_dialog_18: {
					id: 'thauma_scene_7_dialog_18',
					text: 'Ti è chiaro allora il rapporto fra meraviglia, sviluppo umano e storia dei popoli?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_19',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					thauma_scene_7_dialog_19: {
					id: 'thauma_scene_7_dialog_19',
					text: 'Sì',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'thauma_scene_7_dialog_20',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				
				thauma_scene_7_dialog_20: {
					id: 'thauma_scene_1_dialog_20',
					text: 'Ora va’, e torna in questa baia per meravigliarti ancora…',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'thauma_scene_7_dialog_21'
				},

				thauma_scene_7_dialog_21: {
					text:'',
					video: 'https://www.youtube.com/embed/vPKLBRVNUBk',
					nextDialog: 'thauma_scene_7_dialog_22'
				},

				thauma_scene_7_dialog_22: {
					text: 'Ok, andiamo avanti...',
					positionClass: 'bubble-dialog-left',
                    exitType: 'scene',
					nextScene: '',
					sceneClass: 'button-bottom'
				}
			}	
		},
        

  		kara_scene_1: {
			id: 'kara_scene_1',
			type: 'dialog',
			name: 'kara_scene_1',
			template: 'dialog.html',
			nextScene: 'kara_scene_2',
			background: 'kara_00_bg.jpg',
			firstDialog: 'kara_scene_1_dialog_1',
			dialogs: {
				kara_scene_1_dialog_1: {
					id: 'kara_scene_1_dialog_1',
					text: 'Questa piazzetta è un po’ inquietante…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
                kara_scene_1_dialog_2: {
					id: 'kara_scene_1_dialog_2',
					text: 'E perché mai? Siamo a Karà, piccolo villaggio di Sophia e pensa, ironia della sorte, che stiamo per discutere della gioia! La letizia!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_3: {
					id: 'kara_scene_1_dialog_3',
					text: 'Alcune case sono sbarrate, altre sono aperte…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_4: {
					id: 'kara_scene_1_dialog_4',
					text: 'E’ una metafora, ragazzo… alcune abitazioni e chi ci abita hanno raggiunto un certo grado di apertura e perfezione; altre invece sono ancora chiuse verso il mondo. Comunque benvenuto, sono Bento de Spinoza, detto anche Baruch o Benedictus',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_5: {
					id: 'kara_scene_1_dialog_5',
					text: 'La posso chiamare Spinoza? Mi è più facile',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_6: {
					id: 'kara_scene_1_dialog_6',
					text: 'Certo…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_7: {
					id: 'kara_scene_1_dialog_7',
					text: 'Ne hai sentito parlare, ragazzo? Spinoza è una delle menti più eccelse del pensiero europeo…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_8: {
					id: 'kara_scene_1_dialog_8',
					text: 'Sinceramente no, me ne scuso…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_9',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_9: {
					id: 'kara_scene_1_dialog_9',
					text: 'Figurati! Mi presento: sono olandese, nato ad Amsterdam il 24 novembre 1632. Di famiglia ebraica ma insofferente al dogmatismo della mia religione, ho sempre fatto aperta professione di libertà e di pensiero, agitando non poco i capi della mia comunità religiosa, che volevano fare di me un rabbino',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_10',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_10: {
					id: 'kara_scene_1_dialog_10',
					text: 'E poi è diventato rabbino?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_1_dialog_11',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_1_dialog_11: {
					id: 'kara_scene_1_dialog_11',
					text: 'No… anzi, sono stato espulso dalla mia sinagoga e ne ho approfittato per lasciare Amsterdam, stabilendomi a Rijnsburg. Qui scrivo il Breve trattato su Dio, l’uomo e la sua felicità e comincio a lavorare al Tractatus de intellectus emendatione, rimasto incompiuto. Nel 1663 ho pubblicato Renati Des Cartes principiorum philosophiae Pars I et II more geometrico demonstratae insieme ai Cogitata metaphysica. E’ nella mia nuova città, Voorburg, che però do alle stampe l’Ethica ordine geometrico demonstrata, opera importante che si compone in cinque parti rispettivamente intitolate: I. Dio. II. Natura e origine della mente. III. Origine e natura degli affetti. IV. La schiavitù umana, ossia la forza degli affetti. V. La potenza dell’intelletto, ossia la libertà umana.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					exitType: 'scene',
					nextScene: 'kata_scene_2',
					sceneClass: 'button-bottom',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
			}		
		},
		kara_scene_2: {
			id: 'kara_scene_2',
			type: 'story',
			name: 'kara_scene_2',
			template: 'story.html',
			nextScene: 'kara_scene_3',
			pages: [
				{
					image: 'spinoza01.jpg',
					text: 'L’Ethica è organizzata secondo un metodo assiomatico-deduttivo volto a garantire la certezza dei risultati, e si articola in cinque parti. Nella prima, dedicata a Dio, Spinoza dimostra che esiste un’unica sostanza infinita che si manifesta in infiniti attributi, che nel loro complesso sono la sostanza stessa, e solo due di questi, estensione e pensiero, sono percepibili per l’uomo. Questi due attributi «si esprimono nei ‘modi’ (‘affezioni’ della sostanza), distinti in infiniti, in quanto co-estesi all’infinità degli attributi, e finiti, ossia articolati nelle cose particolari». I modi, materiali e ideali, sono dominati da un determinismo al quale Dio stesso, identificato con la natura nel suo complesso, non si sottrae. Nella seconda parte, sulla mente, viene descritto il parallelismo tra il corpo e la mente dell’uomo che dà luogo alle nostre conoscenze sensibili e si dimostra come, oltre a queste, è possibile accedere anche a conoscenze adeguate, cioè chiare e distinte e certamente vere. Nella terza parte, sugli affetti, Spinoza mostra come l’intera gamma delle emozioni dell’uomo dipende da un fondamentale impulso verso l’autoconservazione e verso l’istinto vitale, dal quale, in corrispondenza di un aumento della propria forza, deriva la gioia, e in corrispondenza di una sua diminuzione la tristezza. Nella quarta parte Spinoza discute sia di come le idee inadeguate dell’uomo determinano la sua passività rispetto alle cause esterne di cui egli finisce per essere schiavo, sia della capacità della ragione di motivare l’uomo a contrastare le passioni, e a convivere pacificamente con gli altri uomini. Nella quinta parte si dimostra come la mente umana, nella misura in cui arriva a concepire idee che non dipendono dal tempo, è eterna e, come tale, è una parte dell’infinità eterna dell’intelletto di Dio. La mente dell’uomo trova quindi in questa comunanza intellettuale con Dio, in questo reciproco amore intellettuale, la sua somma beatitudine.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'spinoza02.jpg',
					text: '«Dico che appartiene all’essenza di ciascuna cosa [...] ciò senza cui la cosa è e, viceversa, ciò che senza la cosa non può né essere, né essere concepito» (Ethica, II, d2). Con questa definizione Spinoza ribadisce la distanza tra le cose finite e Dio, escludendo che qualcuno possa pensare che, poiché tutte le cose singole (non potendo essere concepite per sé) devono essere concepite per mezzo di Dio, Dio debba far parte dell’essenza delle cose singole. Affinché qualcosa faccia parte dell’essenza di qualcosa d’altro, infatti, bisogna che il rapporto di dipendenza sia bidirezionale: ma poiché Dio può essere ed essere concepito anche senza le cose finite, non è contenuto nella loro essenza. Tanto le cose dipendono da Dio, quanto Dio dipende solo da se stesso. Sia Dio che le cose singole sono necessari, ma la necessità attiva ed eterna della sostanza assolutamente infinita (la cui essenza implica l’esistenza) non deve essere confusa con quella passiva e diveniente degli enti finiti (le cui essenze non implicano l’esistenza). L’uomo è una cosa singola, un ente finito, e come tale la sua essenza non implica l’esistenza (Ethica, II, a1).',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'spinoza03.jpg',
					text: 'Ma «l’uomo pensa» (Ethica, II, a2), e inoltre «sente che un certo corpo è affetto in molti modi» (Ethica, II, a3). Spinoza introduce quindi i rapporti tra le sfere della corporeità e del pensiero nell’uomo, ma partendo di nuovo da Dio: innanzitutto «in Dio si dà necessariamente tanto l’idea della sua essenza quanto di tutte le cose che seguono necessariamente dalla sua essenza» (Ethica, II, 3), però le cose non sono causate dalle idee delle cose presenti in Dio (come avveniva secondo gran parte della tradizione scolastica), né le idee delle cose sono causate dalle cose (poiché, come ha già spiegato nella parte prima dell’opera, tra enti di natura diversa come sono diversi pensiero ed estensione non si dà causalità). Dunque tra idee e cose vige un rapporto di corrispondenza senza causalità. Le idee e le cose, le concatenazioni di implicazioni e cause, si corrispondono perfettamente perché esprimono da punti di vista diversi la stessa unità sostanziale: «una e identica sostanza [...] è compresa ora sotto questo ora sotto quell’attributo» (Ethica, II, 7s). Lo stesso vale per l’essere umano: l’uomo è una modificazione della sostanza che partecipa di due soli dei suoi infiniti attributi, pensiero ed estensione. La mente è dunque una modificazione finita dell’attributo del pensiero, il corpo una modificazione finita dell’attributo dell’estensione. Le due modificazioni però si corrispondono strettamente, come è testimoniato dalla consapevolezza che la nostra mente ha delle sensazioni del nostro corpo: la mente è l’idea che ha come oggetto il corpo. La mente umana, che ha le idee delle cose che conosce, è essa stessa un’idea, e in particolare è l’idea che, nella dimensione atemporale di Dio, corrisponde all’essenza del corpo a cui, nel tempo, quella mente sente di essere legata: «L’idea che costituisce l’essere formale della mente umana [cioè la mente come idea del corpo che a esso corrisponde] non è semplice ma composta da moltissime idee» (Ethica, II, 15). La differenza tra un sasso corporeo, a cui corrisponde l’idea di quel sasso, un corpo di animale, a cui corrisponde l’idea (cioè la mente) di quell’animale, e un corpo umano, a cui corrisponde l’idea (cioè la mente) di quell’essere umano dipende solo dalla diversa complessità di queste idee, che a sua volta corrisponde alla diversa complessità dei corrispondenti corpi. In un certo senso tutti gli enti finiti nell’estensione hanno una mente, che è l’idea che a essi corrisponde nel pensiero, ma solo la mente degli uomini è complessa abbastanza da rendere possibile la razionalità; e questa complessità corrisponde strettamente alla maggior complessità del corpo umano rispetto al corpo di qualsiasi animale e, a maggior ragione, di qualsiasi oggetto inanimato. Spinoza ritiene che, poiché «l’oggetto dell’idea che costituisce la mente umana è il corpo [...] e niente altro» (Ethica, II, 13) «la mente non conosce se stessa se non in quanto percepisce le idee delle affezioni del corpo» (Ethica, II, 23). Dunque, visto che il principio di ogni conoscenza è nelle affezioni del corpo, egli inserisce tra la proposizione tredicesima e la quattordicesima una serie di lemmi dedicati a delineare una sintetica teoria fisica e fisiologica, su base meccanicista, il cui scopo è quello di rendere conto del funzionamento della mente umana. ',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
				    image: 'spinoza04.jpg',
					text: 'Ne risulta, tra le altre cose, che «l’idea di un qualunque modo in cui il corpo umano è affetto dai corpi esterni deve implicare la natura del corpo umano e, simultaneamente, la natura del corpo esterno» (Ethica, II, 16) e che quindi gli oggetti esterni ci sono noti attraverso l’inevitabile mediazione (ed, eventualmente, deformazione) del nostro stesso corpo, ovvero «le idee che abbiamo dei corpi esterni indicano più la costituzione del nostro corpo che la natura dei corpi esterni» (Ethica, II, 16c2). Inoltre se, per esempio, un oggetto che si era sempre presentato insieme a un altro si presenta ora da solo, la mente tenderà a pensare ancora a entrambi gli oggetti (si tratta del principio di funzionamento dell’associazione di idee); in generale, «la mente potrà [...] contemplare come se fossero presenti i corpi esterni dai quali il corpo umano è stato affetto una volta, sebbene essi non esistano, né siano presenti» (Ethica, II, 17c), e questo «fino a quando il corpo [umano] non venga affetto da un affetto che escluda l’esistenza o presenza dello stesso corpo [esterno]». Questi sono tra i fondamenti dell’immaginazione, e dunque dell’inadeguatezza delle idee che abbiamo sul nostro corpo e sulle sue affezioni. Se nella prima parte si era definita un’idea vera come un’idea corrispondente al suo ideato, cioè al suo oggetto, assumendo una qualificazione estrinseca della verità come corrispondenza, nella seconda parte si era definita un’idea adeguata come un’idea dalla quale, a partire da essa sola, possono essere derivate tutte le proprietà del suo oggetto, cioè un’idea chiara e distinta che consente di conoscere di un oggetto le cause e gli effetti. Con ciò, per Spinoza un’idea adeguata è sempre un’idea vera. Quella di «idea adeguata» è poi una qualificazione intrinseca all’idea stessa (che un’idea sia chiara e distinta si può affermare o negare senza dover confrontare l’idea con il suo ideato) e quindi avendo un’idea adeguata sappiamo sempre di averla: «Come la luce manifesta sé stessa e le tenebre, la verità è norma di sé stessa e del falso» (Ethica, II, 43s).',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
				    image: 'spinoza05.jpg',
					text: 'Avere un’idea adeguata di un corpo finito significa poter ricostruire sia la catena causale che l’ha portato a esistere nel tempo, sia la catena causale degli eventi determinati da esso nel tempo; ma tali catene causali, sono infinitamente estese nel passato e nel futuro, e dunque la loro conoscenza non è accessibile a una mente finita come quella umana. In altre parole, tutte le volte che per conoscere qualcosa non è sufficiente la conoscenza di un’affezione del corpo umano, ma è necessario conoscere anche altre cose che l’uomo non conosce, l’uomo ha una conoscenza inadeguata. Dio, in cui sono presenti tutti gli infiniti corpi e le corrispondenti idee, ha una conoscenza adeguata di tutte le cose, alla quale l’uomo nella sua finitezza non può accedere. «La mente umana ogni qual volta percepisce le cose secondo il comune ordine della natura non ha una conoscenza adeguata, bensì soltanto confusa e mutilata, di se stessa, del proprio corpo e dei corpi esterni. La mente, infatti, non conosce se stessa se non in quanto percepisce le idee delle affezioni del corpo. E non percepisce il proprio corpo se non per mezzo delle stesse idee delle affezioni mediante lequali soltanto percepisce anche i corpi esterni» (Ethica, II, 29c). Da cui la teoria spinoziana dell’errore: la conoscenza inadeguata è tale perché è manchevole, perché cioè non ha le idee che le servirebbero per completare la ricostruzione delle catene causali. Non esiste alcunché di positivo nell’errore: un’idea falsa è semplicemente un’idea parziale, che può diventare vera quando ad essa se ne aggiungano altre che la completano. Spinoza riporta questo esempio: il Sole ci appare piccolo e poco distante, e noi crediamo che lo sia davvero finché non ci viene dimostrato, sulla base di considerazioni razionali, che è molto più grande e molto più distante di quanto sembra; l’idea di un Sole che appare piccolo e vicino allora rimane, ma è completata da altre idee (cioè dalla consapevolezza dei motivi per cui l’apparenza è ingannevole e dall’idea della vera distanza e grandezza del Sole) e forma quindi, insieme a esse, un’idea vera (Ethica, II, 40s2). ',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'spinoza06.jpg',
					text: 'Un’idea falsa può essere ritenuta vera finché non è soppiantata da un’idea vera (che, come si diceva, «è norma di se stessa e del falso»), ma non è mai accompagnata dalla certezza che caratterizza le idee chiare e distinte, cioè adeguate, cioè effettivamente vere: «L’idea falsa, in quanto è falsa, non implica certezza. Quando, dunque, abbiamo detto che l’uomo resta tranquillo nel falso e non dubita di esso, non abbiamo per questo detto che egli è certo, ma soltanto che non dubita o che si acquieta nel falso, perché non si danno cause che facciano sì che la sua immaginazione fluttui» (Ethica, II, 49s). Tuttavia, la conoscenza adeguata è possibile anche per l’uomo. Oltre alla conoscenza basata su immaginazione e sensibilità, la quale è vacillante e parziale per via della sua passività rispetto alle affezioni del corpo (che come si è visto non mettono a disposizione dati diretti sul mondo esterno, ma solo dati spuri che contengono informazioni anche e soprattutto sul corpo stesso) esistono infatti altri due generi di conoscenza: la conoscenza razionale, che prende le mosse da nozioni comuni a tutti e conosciute adeguatamente (per esempio l’estensione) e che le sviluppa secondo un metodo rigorosamente razionale simile a quello della stessa Etica, giungendo ad altre e più estese conoscenze adeguate di carattere universale; e la conoscenza intuitiva, per mezzo della quale si può giungere in modo diretto e immediato (non discorsivo) a nozioni adeguate sugli oggetti individuali. Mentre i primi due generi di conoscenza, quella immaginativa e quella razionale, danno accesso a conoscenze (rispettivamente inadeguate e adeguate) universali, il terzo genere, quello intuitivo, dà luogo alla conoscenza adeguata di enti singoli. La conoscenza adeguata degli universali della ragione, come appunto l’estensione, è resa possibile dal fatto che essi sono «cose che sono comuni a tutti e che sono parimenti nella parte e nel tutto» (Ethica, II, 38); le proprietà del corpo esterno che, avendo un effetto sul corpo umano, viene percepito dalla mente umana vengono conosciute in modo deformato nell’esatta misura in cui il corpo esterno e il corpo umano sono diversi l’uno dall’altro; ma le proprietà che essi hanno in comune (per esempio l’estensione) non possono essere deformate dall’interazione dei due corpi, e dunque sono conosciute da tutti gli uomini in modo necessariamente adeguato.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
                {
	                image: 'spinoza07.jpg',
					text: 'La finitezza dell’uomo gli impedisce di avere una conoscenza adeguata dell’infinita catena causale in cui si inserisce, nel tempo, un oggetto individuale; tuttavia esistono degli universali che sono indipendenti da simili catene causali e che, infatti, si collocano nella dimensione intemporale dell’eternità (l’estensione ne è, di nuovo, un esempio). In altre parole, la mente ha un’idea adeguata quando ha un’idea che non dipende da altre idee per la sua adeguatezza; una simile idea nella mente umana coincide con la stessa idea che è adeguata in Dio, e da entrambi i punti di vista essa ha un carattere intemporale: «È proprio della natura della ragione contemplare le cose non come contingenti, ma come necessarie» (Ethica, II, 44), sub specie aeternitatis, «sotto una certa specie di eternità» (Ethica, II, 44c2). La ragione conosce le cose (ma non le cose individuali, bensì le proprietà comuni) in quanto derivazioni della necessaria natura divina nella loro dimensione eterna, al di là della temporalità in cui sono immerse quando sono conosciute per via della sensibilità; non «in quanto concepiamo che esse esistono in relazione a un certo tempo e luogo» ma «in quanto sono contenute in Dio e seguono dalla necessità della divina natura» (Ethica, V, 29s). La possibilità che la mente, che non conosce se non per mezzo delle affezioni del corpo di cui è idea, acceda a conoscenze intemporali può apparire problematica, e in effetti sarà pienamente chiarita solo nella parte quinta, quando Spinoza dimostrerà che la mente possiede conoscenze adeguate al di là del tempo in quanto è essa stessa un’idea di Dio che si colloca, in parte, al di là del tempo. La mente umana infatti, come il corpo e ogni altra cosa, ha un’esistenza finita nel tempo, nella durata, e un’esistenza sub specie aeternitatis. Dalla teoria della conoscenza adeguata di Spinoza discende una delle conclusioni più radicali dell\'Etica: «La mente umana ha una conoscenza adeguata dell’essenza eterna e infinita di Dio» (Ethica, II, 47). L’eterna e infinita essenza di Dio sono infatti, alla stregua dell’estensione, proprietà comuni a tutti i corpi, poiché, essendo la mente stessa, oltre al corpo umano e ai corpi esterni, un ente finito, non può né essere, né essere concepita senza Dio, e quindi «ciascuna idea di qualunque corpo o cosa singolare esistente in atto implica necessariamente l’essenza eterna e infinita di Dio» (Ethica, II, 45). Come si vede la mente umana è al centro del pensiero di Spinoza. Essa è idea del corpo, ma è anche idea dello sforzo di conservare indefinitamente questo corpo, accrescendone e non indebolendone la potenza: «L’oggetto dell’idea che costituisce la Mente umana, è il Corpo, ossia un certo modo dell’estensione esistente in atto, e null’altro» (Ethica, II, 13).',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
			]
		},
        kara_scene_3: {
			id: 'kara_scene_3',
			type: 'dialog',
			name: 'kara_scene_3',
			template: 'dialog.html',
			nextScene: 'kara_scene_4',
			background: 'kara_01_bg.jpg',
			firstDialog: 'kara_scene_3_dialog_1',
			dialogs: {
				kara_scene_3_dialog_1: {
					id: 'kara_scene_3_dialog_1',
					text: 'Il suo pensiero è molto complicato…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_3_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_3_dialog_2: {
					id: 'kara_scene_3_dialog_2',
					text: 'Un giorno potrai approfondirlo e goderne a pieno, ma oggi mi interessa che tu capisca quanto l’evoluzione dell’uomo verso gradi diversi di perfezione sia collegato a quello che tu provi normalmente: la gioia quando sei felice ed entusiasta e la tristezza quando invece sei deluso o affranto',
					//textClass: 'bubble-ragazzo',
					positionClass: 'bubble-dialog-top',
					//exitType: 'dialog', // dialog, choice, scene
					nextDialog: 'kara_scene_3_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_3_dialog_3: {
					id: 'kara_scene_3_dialog_3',
					text: 'Ti capita spesso di cambiare umore?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'kara_scene_3_dialog_4',
				},
				kara_scene_3_dialog_4: {
					id: 'kara_scene_3_dialog_4',
					text: 'Sì, dipende da come mi va la giornata e se riesco a fare bene le cose che mi piace fare',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'kara_scene_3_dialog_5',
				},
				kara_scene_3_dialog_5: {
					id: 'kara_scene_3_dialog_5',
					text: 'Ti stai avvicinando a quanto penso: la gioia è il passaggio da una minore ad una maggiore perfezione: se una persona è in grado di realizzare se stesso può dirsi felice. La tristezza è sempre negativa, perché mai rischiarata dalla luce della ragione.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'kara_scene_3_dialog_6',
				},
				kara_scene_3_dialog_6: {
					id: 'kara_scene_3_dialog_6',
					text: 'Quindi quando sono gioioso sono, come dire, illuminato dalla ragione!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'kara_scene_3_dialog_7',
				},
				kara_scene_3_dialog_7: {
					id: 'kara_scene_3_dialog_7',
					text: 'Illuminato! Hai usato un verbo importantissimo… è proprio così',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'kara_scene_3_dialog_8',
				},
				kara_scene_3_dialog_8: {
					id: 'kara_scene_3_dialog_8',
					text: 'Ecco perché alcune finestre hanno le luci e altre no…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'kara_scene_4',
					
					sceneClass: 'button-bottom'
				},
			}
		},
		kara_scene_4: {
			id: 'kara_scene_4',
			type: 'abstract',
			name: 'kara_scene_4',
			template: 'abstract.html',
			nextScene: 'kara_scene_5',
			text: 'Nell’Ethica Spinoza riflette sui concetti di gioia, tristezza e perfezione. È impossibile, dichiara il filosofo, che l’uomo possa mirare con consapevolezza alla propria rovina e di conseguenza alla propria tristezza, sebbene le sue passioni, se non “illuminate” dalla ragione, possono condurlo lungo la strada del male. Tra le passioni ve ne sono alcune che consistono nel passaggio dell’uomo «da una perfezione minore ad un perfezione maggiore»: queste parole definiscono nell’Ethica la gioia, «che si specifica in una varietà d’affetti tra i quali è preminente l’amore» (Ethica, III, 11), che è passaggio al miglioramento di sé accompagnato dall’idea di una causa esterna, l’oggetto dell’amore. Ma vi sono anche passioni che consistono nel passaggio esattamente inverso, e tra queste la principale è la tristezza, cui si unisce l’odio: le definizioni di queste due passioni riproducono quelle delle due precedenti, ma con il segno negativo del passaggio al peggioramento. In sintesi: gioia è il passaggio da minore a maggiore perfezione, tristezza è passaggio da maggiore a minore perfezione, amore è gioia accompagnata dall’idea di una causa esterna, odio è tristezza accompagnata dall’idea di una causa esterna. Tutte le altre passioni, delle quali Spinoza fa una analisi molto articolata, discendono da desiderio, gioia e tristezza e sono loro varianti. La tristezza è sempre negativa, perché mai rischiarata dalla luce della ragione, mentre gioia e desiderio sono sempre fonte di arricchimento, ed anzi quando l’uomo riesce a formarsene un’«idea chiara e distinta» cessano anche di essere condizioni di passività, smettendo di chiamarsi passioni e diventando «affetti attivi». Spinoza definisce quindi gli affetti come attivi o passivi, a seconda che essi tendano alla nostra maggiore perfezione oppure, sotto il predominante impulso di cause esterne, alla riduzione e all’impoverimento di noi stessi; in questo secondo caso si chiamano passioni. Affetto attivo principale, oltre al desiderio, è la gioia, già definita come passaggio da minore a maggiore perfezione; e all’inverso, anche in questo caso, la passione cui si riconducono tutti gli affetti passivi è la tristezza, passaggio a perfezione minore. Tutti gli altri affetti sono deviazioni di questi: l’amore è gioia accompagnata dall’idea di una causa esterna, e l’odio è tristezza alle medesime condizioni; e così è per tutta una vasta catena di affetti attivi e passivi: «Vediamo quindi che la Mente può subire grandi cambiamenti, e passare ora da una certa perfezione ad una perfezione maggiore, e ora da una certa perfezione a una perfezione minore: e proprio queste passioni, o mutazioni della Mente, ci spiegano i sentimenti della Letizia e della Tristezza. Per Letizia, quindi, intenderò qui di seguito la passione per cagion della quale la Mente passa ad una perfezione maggiore; per Tristezza invece intenderò la passione per cagion della quale la Mente passa a una perfezione minore. Chiamerò poi Eccitazione, o Allegrezza, il sentimento della Letizia riferito insieme alla Mente e al Corpo; e chiamerò Dolore, o Melanconia, il sentimento della Tristezza riferito insieme alla Mente e al Corpo. Si deve però notare che l’Eccitazione e il Dolore si riferiscono all’Uomo quando una sola sua parte è interessata più delle altre da Letizia o da Tristezza, mentre l’Allegrezza e la Melanconia hanno luogo quando tutte le parti sono interessate in modo eguale» (Ethica, III, 11).',
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
			text: 'Immagina di prepararti per tutto il pomeriggio per un’interrogazione, ma il giorno dopo il tuo professore è malato e quindi tutto il lavoro fatto poteva essere svolto il giorno dopo. Come reagisci?',
			//textClass: 'default',
			choiceA: {
				label: 'Con serenità, perché hai comunque imparato qualcosa e costruito un pezzettino del mio sapere, che mi sarà utile in futuro',
				icon: 'ion-star',
				class: 'button-left',
				scene: 'kara_scene_6'
			},
			choiceB: {
				label: 'Con tristezza, perché avrei potuto impiegare il pomeriggio diversamente e comunque dimenticherò tutto quello che ho studiato',
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
			background: 'kara_01_bg.jpg',
			firstDialog: 'kara_scene_6_dialog_1',
			dialogs: {
				kara_scene_6_dialog_1: {
					id: 'kara_scene_6_dialog_1',
					text: 'La letizia, come dicevo, è un salto in avanti verso la perfezione. E’ parte di un cammino',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'kara_scene_6_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_6_dialog_2: {
					id: 'kara_scene_6_dialog_2',
					text: 'In che senso un cammino?',
					//textClass: 'bubble-ragazzo',
				    positionClass: 'bubble-dialog-right',
                    nextDialog: 'kara_scene_6_dialog_3',
				},
				kara_scene_6_dialog_3: {
					id: 'kara_scene_6_dialog_3',
					text: 'Se l’uomo nascesse perfetto non avrebbe bisogno di battere un percorso, un viaggio di ricerca e di miglioramento, non avrebbe bisogno di tessere relazioni umane e sociali',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
				    nextDialog: 'kara_scene_6_dialog_4',
				},
				kara_scene_6_dialog_4: {
					id: 'kara_scene_6_dialog_4',
					text: 'Giusto',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'kara_scene_6_dialog_5',
				},
				kara_scene_6_dialog_5: {
					id: 'kara_scene_6_dialog_5',
					text: 'E quindi è proprio l’oscillazione avvicinandosi o allontanandosi da un ideale di perfezione che genera la gioia',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'kara_scene_6_dialog_6',
				},
				kara_scene_6_dialog_6: {
					id: 'kara_scene_6_dialog_6',
					text: 'Se posso citarti, Spinoza, direi che gioia e tristezza sono passaggi, non sentimenti del passaggio',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'kara_scene_6_dialog_7',
				},
				kara_scene_6_dialog_7: {
					id: 'kara_scene_6_dialog_7',
					text: 'E un uomo che aumenta il proprio sapere è affetto da gioia',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'kara_scene_6_dialog_8',
				},
				kara_scene_6_dialog_8: {
					id: 'kara_scene_6_dialog_8',
					text: 'Mi hai tolto le parole di bocca! Ti lascio con un estratto sulla Letizia… torna qua e prendi altre scelte per scoprire altri aspetti del mio pensiero!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					exitType: 'scene',
					nextScene: 'kara_scene_7',
				},
			}
		},
		kara_scene_7: {
			id: 'kara_scene_7',
			type: 'abstract',
			name: 'kara_scene_7',
			template: 'abstract.html',
			nextScene: 'kara_scene_10',
			text: '«La conoscenza del bene e del male non è altro che il sentimento della Letizia e della Tristezza in quanto noi ne siamo consapevoli. Noi chiamiamo buono o cattivo (o anche bene o male) ciò che favorisce od ostacola la conservazione del nostro essere, vale a dire ciò che accresce o diminuisce, asseconda o coarta la nostra potenza d’agire. Pertanto noi chiamiamo una cosa buona o cattiva, bene o male, in quanto ci rendiamo conto che essa ci procura Letizia o Tristezza; e quindi la conoscenza del bene e del male non è altro che l’idea della Letizia o della Tristezza che segue necessariamente al sentimento stesso di Letizia o di Tristezza. Ma questa idea è unita al sentimento nello stesso modo in cui la Mente è unita al Corpo: questa idea, cioè, non si distingue in realtà dal sentimento medesimo, ossia dall’idea di una specifica affezione del Corpo, se non concettualmente; e dunque questa conoscenza del bene e del male non è altro che il sentimento stesso in quanto noi ne siamo consapevoli» (Ethica, III, 11). La coppia degli opposti laetitia-tristitia riproduce in termini identici, nell’Ethica, quelle contenute nelle Passions di Cartesio tradotte in latino. In Spinoza «tradurremo laetitia con gioia: primo perché così facendo ci sembra di rendere meglio la tesa continuità con la problematica cartesiana, secondo perché quella di cui si tratta è una passione dominante, cui bene si adegua una espressione forte»  (cfr. P. Cristofolini, La scienza intuitiva di Spinoza,  Napoli, Morano, 1987, pp. 98-99). Spinoza nel trattare questi termini ha in comune con Cartesio sia la posizione centrale accordata alla coppia gioia-tristezza, sia il riferimento critico verso lo stoicismo. Ma in Spinoza gioia e beatitudine, pur dopo la lezione di Cartesio, sono di nuovo connesse, e il confronto critico con lo stoicismo cambia registro. La gioia è concepita da Cartesio anche ad un livello superiore (gioia intellettuale), e come fruizione di un possesso. Spinoza riparte, invece, esattamente dalla dicotomia attivo-passivo da lui posta all’inizio della trattazione degli affetti, e riportata all’interno della dicotomia stessa degli affetti. Da qui egli sviluppa una propria serie di dicotomie. «Gioia e tristezza sono ‘passaggi’, non sentimenti del passaggio» (ivi, p. 100). Un uomo che aumenta il proprio sapere è affetto da gioia. «I classici attestano una accezione della parola laetus, cui di fatto corrisponde quella spinoziana, di laetitia come passaggio da una perfezione minore a una maggiore, oggettiva e non emotivamente vissuta» (ivi, p. 101). Ma in Spinoza laetitia e tristitia sono conosciute non come affetti di tutti gli individui in quanto animati, ma unicamente dell’uomo la cui essenza è data dalla cupiditas: «Posto che le affezioni del nostro Corpo sono le reazioni del Corpo stesso agli enti e agli eventi dai quali il Corpo è interessato o dei quali risente: affezioni dalle quali la capacità di agire del Corpo stesso è aumentata o diminuita, favorita od ostacolata; intendo per Sentimenti le affezioni qui descritte e, insieme, le idee di queste affezioni. Nel caso, quindi, in cui noi possiamo esser causa adeguata di qualcuna di queste affezioni, per Sentimento intendo un nostro essere attivi, cioè un’azione; altrimenti intendo un nostro essere passivi, cioè una passione» (Ethica, III, 3). L’immaginazione è il primo livello della conoscenza umana, e ogni volta entra in rapporto con la gioia, perde il suo carattere di conoscenza inferiore e si trasforma in una «forza espansiva della natura umana» (Ethica, III, 12). Inoltre l’immaginazione è causa di aumento della gioia (Ethica, III, 53), e quindi concorre in modo decisivo all’aumento di perfezione dell’uomo. In più gli uomini sono sempre soggetti alle passioni, e l’immaginare, il ricordare non hanno luogo se non nel corpo (Ethica, V, 21 e 24), ma la mente umana per sua definizione genetica ha nell’esistenza del corpo il fondamento costitutivo (Ethica, II, 11), né d’altra parte vi è vita della mente dopo la morte del corpo. Spinoza ricorda poco oltre che esistono altri, tanti uomini, per lo più lontani e sconosciuti: la capacità di costruire con loro una buona società fa parte della saggezza.Immaginazione dunque è conoscenza inadeguata, ma anche fondamento di un’etica sociale e fonte di arricchimento della scienza intuitiva: «Noi ci sforzeremo anche (oltre a ciò che abbiamo considerato nella Prop. 28) di fare tutto ciò che immaginiamo che gli umani vedano con Letizia (si intenda, qui e in seguito, gli umani coi quali noi non siamo legati da alcun sentimento); e, al contrario, eviteremo di fare ciò che immaginiamo che agli umani dispiaccia o ripugni. Noi ameremo o avremo in odio una cosa per il solo immaginare che gli altri umani l’amino o l’abbiano in odio, cioè per questo immaginare noi ci allieteremo o ci rattristeremo della presenza di quella cosa: e pertanto ci sforzeremo di fare tutto ciò che immaginiamo che gli umani amino, ossia vedano con Letizia; e viceversa quando si tratti di Tristezza. Questo sforzo di fare qualcosa, o di non farlo, per la sola ragione di piacere agli umani, si chiama Ambizione, soprattutto quando ci sforziamo di piacere alla gente con tanto impegno da fare o non fare qualcosa con danno nostro o altrui; altrimenti suole chiamarsi Gentilezza. Chiamo poi Consenso la Letizia con la quale immaginiamo l’azione di un altro, che egli ha voluto compiere per farci piacere; e chiamo Riprovazione la Tristezza che sentiamo per un’azione fatta da altri allo scopo di dispiacerci. Chi ha fatto qualcosa che egli immagina arrecare Letizia agli altri proverà una Letizia accompagnata dall’idea di se stesso come causa: ossia considererà se stesso con Letizia. Chi invece ha fatto qualcosa che egli immagina arrecare agli altri Tristezza considererà se stesso, al contrario, con Tristezza. Chi immagina di arrecare agli altri Letizia o Tristezza, per questo stesso proverà Letizia o Tristezza. Ma l’Uomo è consapevole di se stesso mediante le affezioni da cui è determinato ad agire: e dunque chi ha fatto qualcosa che egli immagina arrecare Letizia agli altri proverà Letizia sapendo di esserne egli stesso causa; ossia considererà se stesso con Letizia; e viceversa quando si tratti di Tristezza. Essendo l’Amore e l’Odio, rispettivamente una Letizia e una Tristezza accompagnate dall’idea di una causa esterna, la Letizia e la Tristezza di cui alla Dimostrazione qui sopra saranno dunque specie di Amore e di Odio; ma poiché l’Amore e l’Odio si riferiscono ad oggetti esterni, esprimerò i sentimenti or ora considerati con termini diversi e propri: e chiamerò appunto Gloria, o Convincimento della propria Realizzazione, la Letizia accompagnata dall’idea di una causa riferita all’esterno, come vedremo meglio qui sotto; e Vergogna la Tristezza contraria. Questo – vorrei sottolineare – quando la Letizia o la Tristezza nascono in un umano dal suo credere di esser lodato o biasimato da estranei; altrimenti - cioè quando la Letizia o la Tristezza nascono in un umano propriamente dall’interno, cioè dal suo giudizio su se stesso - chiamerò la Letizia in parola Soddisfazione interiore, o Autocompiacimento, o Pace dell’Anima; e la Tristezza contraria chiamerò Rimorso. Può darsi che la Letizia, che qualcuno immagina di arrecare agli altri, sia soltanto immaginaria: e siccome ognuno si sforza di immaginare di sé tutto ciò che egli immagina procurargli Letizia, può anche darsi (facilmente) che chi si sente glorioso sia superbo e si figuri di esser gradito a tutti, mentre invece a tutti è fastidioso. Se immaginiamo che qualcuno ami o desìderi o abbia in odio una cosa che anche noi amiamo o desideriamo o abbiamo in odio, per questo stesso saranno rafforzati il nostro amore o il nostro desiderio o il nostro odio. Ma se immaginiamo che quegli senta repulsione per una cosa che noi amiamo, o viceversa, allora soffriremo di fluttuazion d’animo. Soltanto perché immaginiamo che qualcuno ami una qualche cosa, anche noi ameremo la stessa cosa. Ma supponiamo di amare quella cosa indipendentemente dall’immaginarla amata da altri; e questo immaginarla, quando sopravvenga, sarà un nuovo motivo del nostro Amore, e lo alimenterà: e pertanto il nostro amore verso la cosa amata sarà rafforzato. Dall’immaginare, poi, che a qualcuno ripugni una qualche cosa, sorgerà in noi ripugnanza per quella cosa: ma se supponiamo che si tratti d’una cosa che noi in quel momento amiamo, accadrà che nello stesso tempo noi avremo per quella cosa amore e avversione, ossia soffriremo di fluttuazion d’animo. Da quanto sopra e dalla precedente Prop. 23 deriva che ognuno, per quanto può, si sforza affinché tutti amino ciò che egli ama e abbiano in odio ciò che egli odia. Questo sforzo di far sì che tutti abbiano la nostra opinione su ciò che noi amiamo o abbiamo in odio è in realtà un’Ambizione: e quindi accade per natura che ciascuno desìderi e cerchi che gli altri vivano secondo i suoi criteri. Ma siccome tutti hanno questo stesso desiderio, tutti si sono d’ostacolo l’uno all’altro; e mentre tutti vogliono essere lodati o amati da tutti, tutti si hanno in odio a vicenda. Se immaginiamo che qualcuno sia in condizion di godere di una cosa che uno solo può possedere, noi ci sforzeremo di far sì che egli non arrivi a possederla. Per il solo immaginare che qualcuno goda di una cosa noi ameremo quella cosa e desidereremo di goderne. Ma - per l’Ipotesi - a questo nostro godere, cioè a questa nostra Letizia, è d’ostacolo, come immaginiamo, la possibilità che un altro, egli solo, goda di quella cosa: e dunque noi ci sforzeremo affinché quegli non arrivi a possederla. Vediamo quindi che per natura gli umani sono perlopiù congegnati in modo da aver compassione di chi deve sopportare un male, e da aver invidia di chi può godersi un bene - e ciò con una malevolenza tanto maggiore quanto maggiore è l’amore per la cosa che essi immaginano posseduta da un altro. Vediamo inoltre che dalla stessa proprietà della natura umana dalla quale deriva che gli umani sono compassionevoli deriva anche il loro essere invidiosi e ambiziosi. Infine, se vi riflettiamo, vedremo che l’esperienza stessa c’insegna tutto questo: soprattutto se poniamo attenzione ai primi anni di nostra vita. I bambini, infatti, il cui organismo è per così dire in equilibrio, e sempre pronto per inclinarsi ora qui ora là, ridono e piangono solo perché vedono qualcun altro ridere o piangere; e sùbito vogliono imitare ciò che vedono fatto da altri; e infine vogliono per loro tutte le cose da cui immaginano che gli altri traggano diletto. E di questo non c’è da stupirsi, poiché le immagini delle cose, come abbiamo detto, sono le stesse affezioni del Corpo umano, ossia i modi in cui il Corpo umano è toccato, o interessato, dalle cause esterne, e da tali cause è disposto a fare questa cosa o quella. Quando amiamo una cosa simile a noi, noi ci sforziamo, per quanto possiamo, di far sì che essa ci ami a sua volta. Noi ci sforziamo, per quanto sta in noi, d’immaginare, più d’ogni altra, la cosa che amiamo. Se poi quella cosa è simile a noi, noi ci sforzeremo di procurarle Letizia più che alle altre cose, ossia ci sforzeremo, per quanto possiamo, di far sì che la cosa amata provi una Letizia accompagnata dall’idea di noi stessi: cioè che a sua volta essa ci ami. Quanto più grande è il sentimento d’amore che immaginiamo provato verso di noi dalla cosa che noi amiamo, tanto maggiore sarà la nostra esaltazione, ossia tanto più noi ci glorieremo. Noi ci sforziamo, per quanto possiamo, affinché la cosa da noi amata ci ami a sua volta, cioè affinché la cosa amata provi una Letizia accompagnata dall’idea di noi stessi. Quanto maggiore dunque immaginiamo che sia la Letizia provata dalla cosa amata per causa nostra, tanto più il nostro sforzo è assecondato, cioè tanto maggiore è la Letizia che noi proviamo. Ma quanto noi ci allietiamo d’aver arrecato Letizia a un nostro simile, tanto consideriamo noi stessi con Letizia: e dunque, quanto maggiore è il sentimento d’amore che immaginiamo provato verso di noi dalla cosa che noi amiamo, tanto maggiore è la Letizia con cui considereremo noi stessi, ossia  tanto più ci glorieremo» (Ethica, III, 29-35). Appare dunque l’aspetto centrale nell’Ethica di una ‘ragione pratica’, che lega fortemente il tema della gioia in Spinoza alla vicenda intellettuale e scientifica dell’Europa del XVII secolo.',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
		},
		kara_scene_8: {
			id: 'kara_scene_8',
			type: 'dialog',
			name: 'kara_scene_8',
			template: 'dialog.html',
			nextScene: 'kara_scene_9',
			background: 'kara_01_bg.jpg',
			firstDialog: 'kara_scene_8_dialog_1',
			dialogs: {
				kara_scene_8_dialog_1: {
					id: 'kara_scene_8_dialog_1',
					text: 'Hai mai sentito parlare di Melanconia?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'kara_scene_8_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				kara_scene_8_dialog_2: {
					id: 'kara_scene_8_dialog_2',
					text: 'No, ma mi ricorda per assonanza la Malinconia, non mi pare niente di buono',
					//textClass: 'bubble-ragazzo',
				    positionClass: 'bubble-dialog-right',
                    nextDialog: 'kara_scene_8_dialog_3',
				},
				kara_scene_8_dialog_3: {
					id: 'kara_scene_8_dialog_3',
					text: 'Già. La tua reazione alla situazione di prima è un passaggio verso una minore perfezione, una resa a una privazione di conoscenza, specie quando dici che avresti comunque dimenticato tutto quello che hai appreso',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
				    nextDialog: 'kara_scene_8_dialog_4',
				},
				kara_scene_8_dialog_4: {
					id: 'kara_scene_8_dialog_4',
					text: 'Ma è la verità!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'kara_scene_8_dialog_5',
				},
				kara_scene_8_dialog_5: {
					id: 'kara_scene_8_dialog_5',
					text: 'Ma la conoscenza è sempre positiva! Si tramuta in potenza di agire e quindi in letizia, in maggiore consapevolezza delle azioni e del mondo. Per non parlare delle relazioni con gli altri',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'kara_scene_8_dialog_6',
				},
				kara_scene_8_dialog_6: {
					id: 'kara_scene_8_dialog_6',
					text: 'In più chi tende meno o più verso la perfezione accresce la conoscenza di ciò che è Bene e ciò che è Male',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'kara_scene_8_dialog_7',
				},
				kara_scene_8_dialog_7: {
					id: 'kara_scene_8_dialog_7',
					text: 'Insomma, la cupezza è chiusura e quindi impossibilità di migliorare…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'kara_scene_8_dialog_8',
				},
				kara_scene_8_dialog_8: {
					id: 'kara_scene_8_dialog_8',
					text: 'In un certo senso… Ora ti lascio con un video e un estratto sulla Melanconia… torna qua e prendi altre scelte per scoprire altri aspetti del mio pensiero!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					exitType: 'scene',
					nextScene: 'kara_scene_9',
				},
			}
		},
		kara_scene_9: {
			id: 'kara_scene_9',
			type: 'abstract',
			name: 'kara_scene_9',
			template: 'abstract.html',
			nextScene: '',
			text: 'Nell’ambito della trattazione delle passioni Spinoza definisce la Melanconia come quella tristezza che, così come il dolore, riguarda insieme la mente e il corpo, ma a differenza del dolore, riguarda ogni parte del corpo contemporaneamente (Ethica, III, 11). «La Tristezza è il passare che avviene nell’Uomo da una maggiore a una minore perfezione. Dico passare, o passaggio, perché la Letizia non è la perfezione stessa. Se infatti l’Uomo nascesse con quella perfezione alla quale può passare, egli la possederebbe senza alcun sentimento di Letizia; il che appare più chiaramente riferendosi al sentimento di Tristezza, che è l’opposto della Letizia. Nessuno infatti può negare che la Tristezza consiste nel passaggio a una perfezione minore, e non nella stessa perfezione minore, dato che un umano, in quanto è partecipe di una qualche perfezione, in tanto non può rattristarsi; e nemmeno si può dire che la Tristezza consista nella privazione di una perfezione maggiore, stante che la privazione è un niente, mentre il sentimento di Tristezza è un atto, cioè un qualcosa che accade e che ha un’esistenza effettiva. Quindi la Tristezza non può essere null’altro che l’atto di passare a una perfezione minore, cioè un atto o un evento dal quale la potenza d’agire dell’Uomo è diminuita (Ethica, III, 59). Spinoza conclude la terza parte dell’Ethica separando i destini delle passioni che diventano affetti attivi, da quelli delle passioni che alla dimensione attiva non possono pervenire: «Oltre alla Letizia e alla Cupidità che sono passioni esistono altri sentimenti dì Letizia e di Cupidità che si riferiscono a noi in quanto siamo attivi» (Ethica, III, 58). A questa ambivalenza della gioia e del desiderio, che possono vedere ribaltata la propria passività in attività, fa riscontro l’opacità della tristezza, che è passiva e dalla passività non si muove. È però nella parte IV dell’Ethica che il filosofo presenta una vera e propria trattazione della tristezza (e naturalmente insieme alla tristezza pure della gioia): gioia e tristezza vengono qui definite come conoscenza, rispettivamente, del bene e del male, sotto la condizione della coscienza: «La conoscenza del bene e del male non è altro che il sentimento della Letizia e della Tristezza in quanto noi ne siamo consapevoli. Noi chiamiamo buono o cattivo (o anche bene o male) ciò che favorisce o ostacola la conservazione del nostro essere, vale a dire ciò che accresce o diminuisce, asseconda o coarta la nostra potenza d’agire. Pertanto noi chiamiamo una cosa buona o cattiva, bene o male, in quanto ci rendiamo conto che essa ci procura Letizia o Tristezza; e quindi la conoscenza del bene e del male non è altro che 1’idea della Letizia o della Tristezza che segue necessariamente al sentimento stesso di Letizia o di Tristezza. Ma questa idea è unita al sentimento nello stesso modo in cui la Mente è unita al Corpo: questa idea, cioè, non si distingue in realtà dal sentimento medesimo, ossia dall’idea di una specifica affezione del Corpo, se non concettualmente; e dunque questa conoscenza del bene e del male non è altro che il sentimento stesso in quanto noi ne siamo consapevoli» (Ethica, IV, 8). Non più, dunque, il fatto oggettivo del passaggio a maggiore o minore perfezione, ma il fatto soggettivo dell’essere consapevoli di uno stato affettivo: questa è la conoscenza del bene o del male. Inversamente la gioia e la tristezza si definiscono come «affezioni unite alla coscienza di sé» (ivi). Nella nuova definizione la tristezza è coscienza (adeguata) del male; il triste è attivo (ha idee adeguate, dunque è causa adeguata) perché la sua mente padroneggia almeno in parte il rapporto squilibrato a suo favore, fra quelle cause esterne che concorrono al suo utile e quelle che gli sono, invece, contrarie. Il desiderio che nasce dalla gioia, è alimentato e rafforzato dallo stesso affetto di gioia, mentre il desiderio che nasce dalla tristezza è diminuito e ristretto dall’affetto di tristezza; la forza del desiderio che nasce dalla gioia si definisce in base all’effetto combinato della potenza umana e della potenza della causa esterna, mentre quello che nasce dalla tristezza si definisce solo in base alla potenza umana. «La gioia è allora – in questa parte quarta – potenziata dall’intervento della causa esterna, e la tristezza è unita alla potenza umana: finché Spinoza considerava gioia e tristezza solo come affetti, la prima era potenza e la seconda impotenza; nel momento in cui le considera anche come conoscenza adeguata del bene e del male, la prima diviene potenza raddoppiata e moltiplicata dal concorso delle cause esterne, e nella seconda è affiorata questa dimensione, prima sconosciuta, di potenza: una potenza isolata. […] La tristezza in quanto conoscenza adeguata è attività, ma in quanto affetto è pura passività. Ora, l’affetto di desiderio che deriva dalla tristezza come conoscenza adeguata, sarà un affetto passivo o attivo? […] Dalla tristezza cosciente può nascere un desiderio che è un semplice affectus (cfr. P. Cristofolini, La scienza intuitiva di Spinoza, Napoli, Morano, 1987, p. 96). Spinoza non ha continuato in questa parte IV dell’Ethica a chiarire i tratti di questo desiderio nascente dalla tristezza, ma sembra chiaro che ci ha voluto presentare un rapporto conflittuale, come tra le forze del bene e del male, e ci abbia voluto fornire la chiave della vittoria delle prime: «dunque il desiderio nascente da tristezza non può ridursi al conato debole, oppure alla negligenza dell’autoconservazione: deve trattarsi di una forza vera e propria […]. Si può pensare che la cupiditas nascente dalla tristezza si possa identificare con un’espressione, rara nell’Ethica, ma ricorrente nel Tractatus politicus: ‘caeca cupiditas’. Con questa espressione si designa l’asocialità, il perseguimento ottuso e anche violento dei propri interessi contro quelli generali. In questo caso la proposizione in esame ha anche un risvolto politico, e contiene la chiave per l’individuazione della natura dei conflitti» (ivi, pp. 96-97).',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
	    },

		lype_scene_1: {
			id: 'lype_scene_1',
			type: 'dialog',
			name: 'lype_scene_1',
			template: 'dialog.html',
			nextScene: 'lype_scene_2',
			background: 'lype_00_bg.jpg',
			firstDialog: 'lype_scene_1_dialog_1',
			dialogs: {
				lype_scene_1_dialog_1: {
					id: 'lype_scene_1_dialog_1',
					text: 'Wow… che posto suggestivo!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_1_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				lype_scene_1_dialog_2: {
					id: 'lype_scene_1_dialog_2',
					text: 'Già potresti indovinare qual è il filosofo che incontreremo oggi. Ho grandi difficoltà a presentartelo. Non saprei come definirlo: pensatore eccelso, rivoluzionario in ogni ambito della scienza…',
					//textClass: 'bubble-ragazzo',
				    positionClass: 'bubble-dialog-left',
				    nextDialog: 'lype_scene_1_dialog_3',
			    },
				lype_scene_1_dialog_3: {
					id: 'lype_scene_1_dialog_3',
					text: '...Non esagerare, Talete! Sono stato semplicemente un filosofo! Benvenuti nel mio piccolo laboratorio a cielo aperto',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_1_dialog_4',
				},
				lype_scene_1_dialog_4: {
					id: 'lype_scene_1_dialog_4',
					text: 'Lei è Galileo… no no, Cartesio…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_1_dialog_5',
				},
				lype_scene_1_dialog_5: {
					id: 'lype_scene_1_dialog_5',
					text: 'Già, Cartesio. Su quest’isola in molti ti hanno parlato di lui. Cartesio è una delle menti più brillanti del pensiero occidentale. Credimi, è davvero un onore trovarci al suo cospetto. Cartesio ci parlerà della tristezza, ma sta’ attento a ogni parola che ascolterai…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'lype_scene_1_dialog_6',
				},
				lype_scene_1_dialog_6: {
					id: 'lype_scene_1_dialog_6',
					text: 'D\'accordo...',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_1_dialog_7',
				},
				lype_scene_1_dialog_7: {
					id: 'lype_scene_1_dialog_7',
					text: 'Anzitutto presentiamoci. Questo è l’arcipelago Lype, sul quale sorge il mio isolotto. In Italia mi chiamate Cartesio ma il mio vero cognome è Decartes. Sono nato a La Haye nel 1596 da una agiata famiglia della borghesia francese, che mi ha assicurato un’ottima educazione. Nel 1612 mi sono iscritto a Legge all’università e terminati gli studi ho intrapreso una serie di viaggi: già da ragazzo il mio pallino era elaborare un metodo scientifico universale, che fosse valido per ogni disciplina',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_1_dialog_8',
				},
				lype_scene_1_dialog_8: {
					id: 'lype_scene_1_dialog_8',
					text: 'Che significa?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_1_dialog_9',
				},
				lype_scene_1_dialog_9: {
					id: 'lype_scene_1_dialog_9',
					text: 'Cartesio era alla ricerca di una scienza generale dell’ordine e della misura capace di dare unità ad ogni campo del sapere. Un obiettivo ambiziosissimo',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'lype_scene_1_dialog_10',
				},
				lype_scene_1_dialog_10: {
					id: 'lype_scene_1_dialog_10',
					text: 'Nel 1628 pubblicai la prima, ancora incompleta, opera di carattere metodologico, le Regulae ad directionem ingenii. Nel 1633, l’introduzione a un mio travagliato trattato, attirò l’attenzione dei dotti dell’epoca',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_1_dialog_11',
				},
				lype_scene_1_dialog_11: {
					id: 'lype_scene_1_dialog_11',
					text: 'Il Discorso sul Metodo?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_1_dialog_12',
				},
				lype_scene_1_dialog_12: {
					id: 'lype_scene_1_dialog_12',
					text: 'Esatto. Il Discorso fu oggetto di vivaci discussioni e mi procurò anche qualche problema. Continuai comunque a procedere sulla strada della ricerca di una verità fondata e fondante mediante l’esercizio del dubbio, che ha la capacità di corrodere ogni conoscenza, certezza, evidenza, ad esclusione dell’inaggirabile evidenza del fatto che sto pensando, e che dunque sono.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_1_dialog_13',
				},
				lype_scene_1_dialog_13: {
					id: 'lype_scene_1_dialog_13',
					text: 'Cogito ergo sum!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_1_dialog_14',
				},
				lype_scene_1_dialog_14: {
					id: 'lype_scene_1_dialog_14',
					text: 'Bravo! Da questa verità do fondamento all’esistenza del mondo esterno',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
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
			background: 'lype_01_bg.jpg',
			firstQuestion: 'lype_scene_2_survey_1',
			questions: {
				lype_scene_2_survey_1: {
					id: 'lype_scene_2_survey_1',
					text: 'Gli assi cartesiani sono:',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'Il sistema di riferimento di rappresentazione geometrica universalmente utilizzato',
							nextQuestion: 'lype_scene_2_survey_2',
							textAfter: 'Corretto! Vai avanti...'
						},
						{
							text: 'I due principali libri di Cartesio',
							nextQuestion: 'lype_scene_2_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				lype_scene_2_survey_2: {
					id: 'lype_scene_2_survey_2',
					text: '“Ciascuna cosa, in quanto è semplice rimane per quanto è in sé, sempre nel medesimo stato, e non è mai mutata se non da cause esterne”. E’ il principio di inerzia, fondamento della meccanica moderna, enunciato da:',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'Einstein',
							nextQuestion: 'lype_scene_2_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						},
						{
							text: 'Cartesio',
							nextQuestion: 'lype_scene_2_survey_3',
							textAfter: 'Corretto! Vai avanti...'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				lype_scene_2_survey_3: {
					id: 'lype_scene_2_survey_3',
					text: 'Le particelle di luce sono assieme onde e corpuscoli. Questa verità deriva da un’intuizione di:',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'Cartesio',
							nextQuestion: '',
							textAfter: 'Corretto! Hai completato il questionario!'
						},
						{
							text: 'Fisici del ‘900',
							nextQuestion: 'lype_scene_2_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
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
					image: 'cartesio01.jpg',
					text: 'Con Cartesio si attua il passaggio dal Rinascimento all’età moderna. Figura poliedrica tipica dell’epoca Cartesio fu filosofo, matematico, astronomo, biologo. Cercò di sanare la frattura tra l’analisi dei principi primi della scienza e scienze particolari.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'cartesio02.jpg',
					text: 'Questa esigenza era particolarmente avvertita, in virtù della frattura che si era venuta a creare tra la fecondità del metodo galileiano e la vecchia metafisica tomistica. In fondo anche Galilei, seppur consapevole del contrasto tra la vecchia metafisica e la nuova immagine scientifica del mondo, aveva aggirato la questione con l’idea della compatibilità di scienza e fede. Proprio la ricerca di un fondamento unico del sapere inaugura l’età moderna.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'cartesio03.jpg',
					text: 'Questo sapere deve poter resistere ad ogni attacco scettico, non deve cedere dinanzi al potere corrosivo del dubbio. Da tale esigenza emergono due capisaldi della filosofia di Cartesio, che imprimeranno i loro caratteri al pensiero moderno: il razionalismo (vale a dire la fiducia nelle possibilità della ragione di giungere alla verità) e la centralità del soggetto (vale a dire la fondazione dell’esistenza del mondo e di Dio a partire dall’evidenza del cogito).',
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
			background: 'lype_01_bg.jpg',
			firstDialog: 'lype_scene_4_dialog_1',
			dialogs: {
				lype_scene_4_dialog_1: {
					id: 'lype_scene_4_dialog_1',
					text: 'Signor Cartesio, ma la sua scienza ha attraversato tutte le discipline… lei si è occupato di tutto!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_4_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				lype_scene_4_dialog_2: {
					id: 'lype_scene_4_dialog_2',
					text: 'Sì, la curiosità e il tentativo di creare una procedura, un metodo universale in grado di dischiudere le porte della conoscenza in qualunque scienza… è questo che mi ha spinto nello studio, per tutta la vita.',
					//textClass: 'bubble-ragazzo',
				    positionClass: 'bubble-dialog-top',
				    nextDialog: 'lype_scene_4_dialog_3',
			    },
				lype_scene_4_dialog_3: {
					id: 'lype_scene_4_dialog_3',
					text: 'E quindi dobbiamo a lei tante delle scoperte moderne',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_4_dialog_4',
				},
				lype_scene_4_dialog_4: {
					id: 'lype_scene_4_dialog_4',
					text: 'A me e ai tanti che mi hanno preceduto e succeduto. Ma sai, ragazzo, i progressi scientifici enormi che ha fatto l’umanità non hanno accompagnato un pari progresso nella ricerca di un equilibrio universale, applicabile a tutti gli uomini in egual misura',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_4_dialog_5',
				},
				lype_scene_4_dialog_5: {
					id: 'lype_scene_4_dialog_5',
					text: 'In che senso?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_4_dialog_6',
				},
				lype_scene_4_dialog_6: {
					id: 'lype_scene_4_dialog_6',
					text: 'La tristezza è una pulsione fondamentale dell’umanità. E’ ciò che spinge l’uomo ad allontanare quanto lo tiene lontano dalla verità e dalle cose buone. Ma esaurito questo compito, la tristezza dovrebbe dissolversi assieme all’evoluzione dell’intelletto. E invece non è così',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_4_dialog_7',
				},
				lype_scene_4_dialog_7: {
					id: 'lype_scene_4_dialog_7',
					text: 'Io sono spesso triste, ma non so il perché',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_4_dialog_8',
				},
				lype_scene_4_dialog_8: {
					id: 'lype_scene_4_dialog_8',
					text: 'Immagina di aspettare un giorno in cui questo mare è agitato, e immagina di prendere una piccola barca e decidere di lasciarti trasportare. Tutto ciò ti comporterebbe cosa?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_4_dialog_9',
				},
				lype_scene_4_dialog_9: {
					id: 'lype_scene_4_dialog_9',
					text: 'Difficoltà, sofferenza…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_4_dialog_10',
				},
				lype_scene_4_dialog_10: {
					id: 'lype_scene_4_dialog_10',
					text: 'Già. Immagina invece di fare lo stesso in un giorno come oggi, col mare piatto… cosa accadrebbe?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_4_dialog_11',
				},
				lype_scene_4_dialog_11: {
					id: 'lype_scene_4_dialog_11',
					text: 'Beh, potrebbe essere piacevole',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_4_dialog_12',
				},
				lype_scene_4_dialog_12: {
					text: 'Prima di decidere se abbandonarsi a tristezza o gioia, prima di sparire in balia di queste pulsioni fondamentali ma irrazionali… beh, occorre usare la ragione. Le emozioni sono sempre subordinate a una scelta razionale. Questo progresso non l’ho riscontrato, con mio grande rammarico, nell’umanità',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_4_dialog_13'
				},
				lype_scene_4_dialog_13: {
					text: '',
					video: 'https://www.youtube.com/embed/a7SN7V2OuzU',
					nextDialog: 'lype_scene_4_dialog_14'
				},
				lype_scene_4_dialog_14: {
					text: 'Andiamo avanti...',
					positionClass: 'bubble-dialog-left',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'lype_scene_5',
					sceneClass: 'button-bottom'
				},
			}
		},
		lype_scene_5: {
			id: 'lype_scene_5',
			type: 'abstract',
			name: 'lype_scene_5',
			template: 'abstract.html',
			nextScene: 'lype_scene_6',
			text: 'Per poter enumerare e distinguere le passioni bisogna in primo luogo ricercare le loro cause prime. Cartesio individua sei passioni semplici (meraviglia, amore, odio, desiderio, gioia e tristezza), le altre passioni sono un composto o una specie di queste sei. La definizione della gioia è: “La gioia è una gradevole emozione dell’anima, in cui consiste il godimento che essa ha del bene, che le impressioni del cervello le rappresentano come proprio” (art. XCI). Mentre quella della tristezza è: “La tristezza è una debolezza spiacevole, in cui consiste il disagio che l’anima riceve dal male, o dal difetto, che le impressioni del cervello le rappresentano come appartenentele” (art. XCII). Le rispettive cause delle due passioni sono la convinzione di possedere qualche bene, o la convinzione di possedere qualche male o difetto. Queste passioni sono eccitate da beni e da mali che riguardano il corpo: “Così quando si è in piena salute e il tempo è più sereno del solito, si sente in sé una gaiezza che non deriva da alcuna attività dell’intelletto, ma unicamente dalle impressioni che il movimento degli spiriti produce nel cervello. E analogamente ci si sente tristi, quando il corpo è indisposto, benché non si sappia di esserlo” (art. XCIV). Al piacere dei sensi dunque segue la Gioia, e al dolore la tristezza, tanto che, sostiene Cartesio, molti uomini non distinguono gli uni dagli altri; tuttavia essi sono differenti come dimostra il fatto che “in qualche caso si può soffrire dolori con Gioia, e ricevere piaceri che non piacciono” (ib.). Posto che la funzione delle passioni è quella di contribuire alle azioni che servono a conservare, o rendere più perfetto il corpo, le prime due passioni che si presentano sono la gioia e la tristezza, infatti, “l’anima è immediatamente avvertita delle cose che nuocciono al corpo, solo dal sentimento che essa ha del dolore, il quale provoca in lei dapprima la passione della Tristezza, poi successivamente l’Odio per ciò che causa tale dolore, e in terzo luogo il Desiderio di liberarsene. Come pure l’anima è immediatamente avvertita delle cose utili al corpo, solo da una sorta di piacevolezza, che suscitando Gioia in essa, fa in seguito nascere l’amore per ciò che crede esserne la causa, e infime il desiderio di acquisire ciò che può far sì che si continui in questa Gioia” (art. CXXXVII). In questo primo comparire la Tristezza, sostiene Cartesio, è prima e più necessaria della Gioia “dato che è più importante respingere le cose che nuocciono e possono distruggere, piuttosto che acquistare quelle che aggiungono qualche perfezione senza la quale si può sopravvivere” (ib.). In questo passaggio Cartesio mostra chiaramente l’utilità e la positiva funzione di tutte le passioni, anche se, come vedremo tra breve, se la tristezza è prima in ordine alla genesi, perché contribuisce ad allontanare ciò che nuoce all’uomo, la gioia è prima nel potenziare la vita umana. Cartesio offre una minuziosa descrizione di ciò che avvertiamo quando proviamo le diverse passioni, e dunque delle modificazioni che si verificano nel nostro corpo: quando proviamo Gioia, possiamo notare che: “il polso è regolare e più rapido del solito, ma non così forte o così intenso come nell’Amore; e che si sente un piacevole calore , che non è solo nel petto, ma si diffonde anche in tutte le parti esterne del corpo, con il sangue che vi si vede giungere in abbondanza; e che nel frattempo si perde talvolta l’appetito…” (art. XCIX); invece, quando siamo tristi, notiamo: “che il polso è debole e lento, e che si sentono dei lacci attorno al cuore, che o stringono, e dei ghiaccioli che lo gelano, e trasmettono il loro freddo al resto del corpo; e che nel frattempo non si smette in certi casi di avere buon appetito…” (art. C). Della Gioia Cartesio ci dice che non può che essere buona, mentre la tristezza non essere cattiva. La tristezza va respinta dall’anima anche se poggia su conoscenze vere, a maggior ragione se deriva da false opinioni, viceversa la gioia può essere buona anche se mal fondata, infatti se li consideriamo per ciò che sono in se stessi, si può dire che “sebbene la Gioia sia meno solida e l’Amore meno vantaggioso, di quando hanno un migliore fondamento, non cessano di essere preferibili alla Tristezza e all’Odio anche mal fondati. Di modo che nelle vicissitudini della vita, dove non possiamo evitare il rischio di essere ingannati, faremo sempre meglio ad indulgere alle passioni che tendono al bene, che verso quelle che riguardano il male, anche se fosse solo per evitarlo. E spesso persino una falsa gioia vale più di una tristezza la cui causa è vera” (art. CXLII). Ancora, nelle lettere, Cartesio insiste sull’importanza di dare preminenza alla Gioia rispetto alla tristezza; egli stesso ha improntato a questa regola la sua esistenza, considerando sempre le cose dal lato che gliele potesse rendere gradevoli, tanto fa affermare che “uno dei punti della mia morale è di amare la vita senza temere la morte” (lettera a Marsenne del 9 gennaio 1639). Certo la tristezza non può essere del tutto evitata, essa anche ha una sua funzione, e tuttavia, come Cartesio ancora scrive a Elisabetta, le grandi anime, quelle cioè che non si abbandonano alle passioni e non sono dunque in balia degli eventi che loro capitano, sono quelle la cui ragione “rimane sempre signora e si comporta in modo di servirsi anche delle afflizioni, facendo sì che contribuiscano a quella perfetta felicità di cui tali anime godono già in questa vita” (lettera del 18 maggio 1645). La tristezza, dunque come, ingrediente della felicità perfetta, quasi che, per contrasto, fosse utile per meglio evidenziare le gioie della vita e, particolarmente, la gioia derivante dal controllo sulla propria sorte. La gioia ha la capacità di potenziare la vita dell’uomo, e l’uomo saggio, conseguentemente, è colui che, essendosi reso padrone delle passioni, sopporta i mali che da esse possono derivare, e trae Gioia da tutte.  La capacità di servirsi bene delle passioni, evitando i loro cattivi usi e i loro eccessi, produce nell’uomo, una Gioia salda, composta e duratura, perché non soggetta alle variazioni della fortuna.',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
		},
		lype_scene_6: {
			id: 'lype_scene_6',
			type: 'dialog',
			name: 'lype_scene_6',
			template: 'dialog.html',
			nextScene: 'lype_scene_7',
			background: 'lype_01_bg.jpg',
			firstDialog: 'lype_scene_6_dialog_1',
			dialogs: {
				lype_scene_6_dialog_1: {
					id: 'lype_scene_6_dialog_1',
					text: 'C’è una mia amica che è sempre triste, io vorrei aiutarla e mi sembrano utili questi discorsi. E’ difficile, però… forse ha problemi in famiglia',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_6_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				lype_scene_6_dialog_2: {
					id: 'lype_scene_6_dialog_2',
					text: 'Vorrei raccontarti una cosa capitata con un’altra mia amica, la principessa Elisabetta di Boemia, proprio a proposito di tristezza. Elisabetta, da bimba, dovette abbandonare la propria patria a causa di disavventure occorse a suo padre. Gli spostamenti e le tensioni familiari la fecero crescere debole di salute e un po’ triste',
					//textClass: 'bubble-ragazzo',
				    positionClass: 'bubble-dialog-top',
				    nextDialog: 'lype_scene_6_dialog_3',
			    },
				lype_scene_6_dialog_3: {
					id: 'lype_scene_6_dialog_3',
					text: 'Sì, riesco a immaginarmela…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_6_dialog_4',
				},
				lype_scene_6_dialog_4: {
					id: 'lype_scene_6_dialog_4',
					text: 'Ci conoscemmo e le raccontai che studiavo le passioni umane. A quel punto lei credette che io potessi aiutarla, e cominciammo a scriverci tante lettere. Per lei fu una cosa positiva confidarsi con me, diceva che la curavo meglio dei tanti medici che le giravano attorno. Per me invece fu un’ottima occasione sia per aiutare un’amica che per approfondire i miei studi sull’animo umano',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_6_dialog_5',
				},
				lype_scene_6_dialog_5: {
					id: 'lype_scene_6_dialog_5',
					text: 'E come andò a finire?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_6_dialog_6',
				},
				lype_scene_6_dialog_6: {
					id: 'lype_scene_6_dialog_6',
					text: 'Lei aveva spesso la febbre, e la prima intuizione che ebbi era che la febbre era causata proprio dagli eventi tristi capitati nella sua esistenza. La spronai a rasserenarsi nonostante i colpi avversi della sorte. Mi sforzai di capire da dove nascesse la beatitudine… è certo infatti che ciascuno aspiri ad essere felice, ma più complesso è stabilire in cosa consista la felicità. Ho capito che la felicità dipende da noi, esserlo o no è una scelta in nostro potere e dipende dalla nostra volontà',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_6_dialog_7',
				},
				lype_scene_6_dialog_7: {
					id: 'lype_scene_6_dialog_7',
					text: 'IE cosa suggerì a Elisabetta?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_6_dialog_8',
				},
				lype_scene_6_dialog_8: {
					id: 'lype_scene_6_dialog_8',
					text: 'Le diedi tre regole fondamentali da seguire. La prima fu cercare sempre di servirsi della sua mente, al meglio delle sue possibilità, per conoscere quel che deve e non deve fare in ogni circostanza della vita. La seconda fu un fermo e costante proposito di applicare tutto ciò che la ragione gli consiglia, senza lasciarsi distrarre dalle sue passioni o dai suoi appetiti. La terza fu provare a considerare che tutti i beni che non possiede sono completamente al di là del suo potere, e, in questo modo, si abitui a non desiderarli',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_6_dialog_9',
				},
				lype_scene_6_dialog_9: {
					id: 'lype_scene_6_dialog_9',
					text: 'Questo perché era molto ricca?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'lype_scene_6_dialog_10',
				},
				lype_scene_6_dialog_10: {
					id: 'lype_scene_4_dialog_10',
					text: 'Esatto, ma la ricchezza non goduta si accompagna molto spesso alla tristezza… Ora ti lascio con un Estratto incentrato sulla pulsione dell’uomo verso la liberazione dalla tristezza, perfezionamento personale. Torna a visitarmi per ripetere queste interessanti discussioni!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'lype_scene_6_dialog_11',
				},
				lype_scene_6_dialog_11: {
					id: 'lype_scene_6_dialog_11',
					text: 'Grazie, Cartesio!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene', // dialog, choice, scene
					nextScene: 'lype_scene_7',
					
					sceneClass: 'button-bottom'
				}
			}
		},
		lype_scene_7: {
			id: 'lype_scene_7',
			type: 'abstract',
			name: 'lype_scene_7',
			template: 'abstract.html',
			nextScene: '', // When empty goes to map
			text: 'Cartesio ritiene in primo luogo che bisogna affidarsi alla ragione per conoscere ciò che è bene, in secondo luogo che bisogna educare la volontà a seguirlo, in terzo luogo che nella ricerca della felicità bisogna muoversi nell’ambito delle proprie possibilità. Da queste tre regole non bisogna però dedurre che Cartesio proponga a Elisabetta una nuova versione della morale stoica, di una morale dunque che propugna una rinunzia ai desideri e che riduce al silenzio le passioni. Le passioni, invece, per quanto debbano essere governate sono per Cartesio il sale della vita. In una lettera all’ambasciatore di Francia in Svezia Chanut il filosofo scrive: “Esaminandole, le ho trovate quasi tutte buone, e tanto utili alla vita, che la nostra anima non avrebbe motivo di voler restare un sol momento unita al corpo se non potesse provarle” (lettera a Chanut del 1° novembre 1646). Non è neanche detto che le passioni debbano essere necessariamente misurate, anzi, Cartesio afferma che coloro che maggiormente “vibrano” sono quelli “capaci di assaporare le più grandi dolcezze in questa vita”. E’ anche vero che sono anche gli stessi che possono provare le maggiori amarezze, ma la saggezza “insegna a rendersene talmente padroni, e a trattarle con tanta sagacia, che i mali che esse causano sono molto sopportabili, e che si trae persino gioia da tutti” (PA, III, CCXII). Le passioni, quindi, sono proprie della natura dell’uomo ed hanno una specifica funzione e utilità, ciò che va evitato è solo il loro cattivo uso: «esse dispongono l’anima a volere le cose che la natura ci indica come utili, e a persistere in questa volontà» (Capo LII). Le passioni prese di per sé, dunque, non sono né nocive né cattive. Vero è però che esse spesso sono causate da false rappresentazioni o entrano in conflitto l’una con l’altra (Cartesio fa l’esempio di un pericolo che la paura rappresenta come male estremo, che può essere evitato solo con la fuga, mentre l’ambizione rappresenta l’infamia della fuga come un male peggiore della morte, così che le due passioni agitano la volontà in due diverse direzioni rendendola infelice).  A volte poi si generano delle connessioni involontarie tra un’azione corporea e un pensiero, per cui anche successivamente non si presenta più l’una senza l’altra, “come si vede in quanti hanno preso con grande disgusto qualche bevanda, essendo ammalati, che in seguito non riescono a bere o mangiare una cosa, che abbia lo stesso sapore, senza provare daccapo uguale repulsione” (CVII). In realtà la maggior parte degli uomini, secondo Cartesio, ha giudizi ben determinati, in pase ai quali regola le sue azioni, e benché questi siano talvolta basati sulle passioni o su false opinioni, se la volontà continua a seguirli è perché sono divenuti in qualche modo sue ”armi proprie”, definiscono cioè il carattere di una persona e le sue strategie di azione. Le azioni che riposano sulla verità segnano ad ogni modo un vantaggio rispetto a quelle che si fondano su false opinioni, giacché se si seguono le prime “si è sicuri di non averne mai rimorso o pentimento” mentre se si seguono le seconde si rischia di doversi pentire “allorché se ne scopre la falsità” (XLIX).Rettificare quindi i giudizi è certamente il primo passo da compiere per far sì che le passioni esplichino il loro potenziale positivo e collaborino nella ricerca del benessere. Tuttavia Cartesio è ben consapevole del fatto che la consapevolezza di ciò in cui consiste il bene non necessariamente riesce a muovere la volontà, secondo il motto di Ovidio “Video meliora proboque, deteriora sequor”. Affinché la volontà si diriga verso il bene è necessario spezzare le connessioni che l’abitudine ha consolidato tra passione e azione. Per comprendere bene questo punto bisogna in primo luogo chiarire cosa Cartesio intenda con il termine passione, esse sono: Percezioni, o sentimenti, o emozioni dell’anima, che riferiamo in particolare ad essa, e che sono causate, mantenute e rafforzate da qualche movimento degli spiriti” (art. XXVII). Le passioni sono dunque proprie dell’anima ma, come dice il termine stesso non sono sue “azioni”, bensì essa le riceve, le patisce, per la sua unione con il corpo, i cui movimenti dipendono dagli spiriti . E’ il corpo che “segnala” all’anima le sue necessità: “la loro funzione naturale è di spingere l’anima a consentire e a contribuire alle azioni che possono servire a conservare il corpo, o a renderlo in qualche modo più perfetto” (art. CXXXVII). Le passioni sono tanto più intense durante la fanciullezza, periodo in cui la facoltà di pensare è ancora sopita, mentre i bisogni del corpo sono predominanti. E’ a partire dall’infanzia, dunque, che si stabiliscono le associazioni tra passioni e movimenti o disposizioni del corpo. La “plasticità” del cervello, la sua duttilità, fa sì che restino in esso conservate le tracce di tali associazioni tra passioni e movimento degli spiriti animali, sino a che non vengano impressi “percorsi” differenti. Questa la descrizione cartesiana della formazione delle tracce mnestiche: “nello stesso modo in cui le pieghe che sono in un pezzo di carta o di stoffa fanno sì che sia più facile che venga piegato di nuovo come è stato piegato prima, di quanto non lo sarebbe se non fosse mai stato piegato così” (lettera a Mesland, 2 maggio 1644). La costituzione del cervello umano predispone, dunque, alla ripetitività dell’esperienza. Le pieghe della memoria spiegano la generazione delle passioni secondo il meccanismo della somiglianza: “la parte dove (le pieghe) si erano formate resta in seguito disposta a farsi piegare di nuovo, nel medesimo modo, da un altro oggetto che somigli in qualcosa al precedente, anche se non gli somiglia in tutto” (lettera a Chanut, 6 giugno 1647). Può così accadere che “le strane repulsioni di alcuni, che impediscono loro di sopportare l’odore delle rose, o l presenza di un gatto, o cose simili, nascono solo dal fatto che all’inizio della loro vita sono stati molto infastiditi da oggetti simili…” (art. CXXXVI). Questo meccanismo associativo, tuttavia, può essere scardinato. Anzi, Cartesio è persuaso che persino “le anime più deboli potrebbero acquistare un dominio assolutissimo su tutte le loro passioni, se dedicassero sufficiente impegno a educarle, e a guidarle” (art. L). Cartesio fa l’esempio del cane che, quando vede una pernice è portato dall’istinto a inseguirla e, se sente un colpo di fucile, è portato a scappare, tuttavia i cani da caccia sono invece addestrati a fermarsi quando vedono l’uccello, e a correre a raccoglierlo solo dopo aver udito lo sparo. Ancor più per l’uomo è possibile un “addestramento” che, spezzando i legami e le associazioni abitudinarie, interrompe l’automatismo e rende la volontà dominante rispetto alle passioni. In sintesi possiamo dire che le passioni appartengono all’anima ma solo in quanto unita ad un corpo, anzi “se non avessimo affatto un corpo – scrive Cartesio – oserei dire che non potremmo mai abbandonarci troppo all’Amore e alla Gioia, né evitare troppo l’Odio e la Tristezza” (art. CXLI). Bisogna però prestare attenzione, perché i movimenti corporei che accompagnano le passioni possono essere nocivi se troppo violenti, mentre sono utili se moderati.',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
		},

		aidos_scene_1: {
			id: 'aidos_scene_1',
			type: 'dialog',
			name: 'aidos_scene_1',
			template: 'dialog.html',
			nextScene: 'aidos_scene_2',
			background: 'aidos_00_bg.jpg',
			firstDialog: 'aidos_scene_1_dialog_1',
			dialogs: {
				aidos_scene_1_dialog_1: {
					id: 'aidos_scene_1_dialog_1',
					text: 'Ragazzo, ammira il paesaggio che hai davanti agli occhi: esso è unico nella sua vastità e bellezza; sembra somigliare al pensiero di colui che sorveglia quest’area. E’ il grande Aristotele, uno dei maggiori pensatori della filosofia antica',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_1_dialog_2',
				},
				aidos_scene_1_dialog_2: {
					id: 'aidos_scene_1_dialog_2',
					text: 'Ha una barba molto lunga e uno sguardo molto vivace!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_1_dialog_3',
				},
				aidos_scene_1_dialog_3: {
					id: 'aidos_scene_1_dialog_3',
					text: 'E’ il suo amore per il sapere che lo ha reso così saggio!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_1_dialog_4',
				},
				aidos_scene_1_dialog_4: {
					id: 'aidos_scene_1_dialog_4',
					text: 'Caro Talete, Kalimera!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_1_dialog_5',
				},
				aidos_scene_1_dialog_5: {
					id: 'aidos_scene_1_dialog_5',
					text: 'Buongiorno collega',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_1_dialog_6',
				},
				aidos_scene_1_dialog_6: {
					id: 'aidos_scene_1_dialog_6',
					text: 'Buongiorno signor Aristotele!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_1_dialog_7',
				},
				aidos_scene_1_dialog_7: {
					id: 'aidos_scene_1_dialog_7',
					text: 'E’ vero, siamo colleghi perché entrambi filosofi ma, in realtà, il tuo pensiero è così antico! Vedi questo paesaggio incantevole e sterminato? Questa è la mia conoscenza!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_1_dialog_8',
				},
				aidos_scene_1_dialog_8: {
					id: 'aidos_scene_1_dialog_8',
					text: 'Ma ci sono anche molti angoli nascosti…',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_1_dialog_9',
				},
				aidos_scene_1_dialog_9: {
					id: 'aidos_scene_1_dialog_9',
					text: 'La bellezza delle “cose” che vedi non è che una parte della conoscenza; è paragonabile al corpo umano che vede, sente, tocca ma c’è un elemento superiore ad esso, l’anima, che lo governa ma che l’uomo non può percepire. Ecco, le insenature nascoste sono la nostra anima, cioè la nostra ragione che non conosce confini',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_1_dialog_10',
				},
				aidos_scene_1_dialog_10: {
					id: 'aidos_scene_1_dialog_10',
					text: 'Devo ammettere che la tua saggezza farebbe invidia a tutti! Devi sapere, ragazzo, che Aristotele non è nato in Grecia, bensì in Tracia ma si trasferì ad Atene per studiare matematica e dialettica, quindi, fin da giovane, ha avuto amore per il sapere. E’ stato, inoltre, maestro di uno dei più grandi condottieri della storia, cioè Alessandro Magno!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_1_dialog_11',
				},
				aidos_scene_1_dialog_11: {
					id: 'aidos_scene_1_dialog_11',
					text: 'Giusto. Ad Atene ero un meteco, cioè un cittadino straniero che aveva il permesso di soggiorno!”',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_1_dialog_12',
				},
				aidos_scene_1_dialog_12: {
					id: 'aidos_scene_1_dialog_12',
					text: 'Lui è stato discepolo di Platone ed ha frequentato per tanti anni l’Accademia platonica, dedicandosi allo studio.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_1_dialog_13',
				},
				aidos_scene_1_dialog_13: {
					id: 'aidos_scene_1_dialog_13',
					text: 'Platone! Grande maestro ma anche grande avversario! Lui sostiene che le idee siano alla base di tutte le cose mentre, secondo il mio pensiero, esse sono governate dall’anima intesa come conoscenza e come ragione.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_1_dialog_14',
				},
				aidos_scene_1_dialog_14: {
					id: 'aidos_scene_1_dialog_14',
					text: 'Quindi, chi è più intelligente, chi di voi ha una marcia in più?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_1_dialog_15',
				},
				aidos_scene_1_dialog_15: {
					id: 'aidos_scene_1_dialog_15',
					text: 'L’intelligenza, caro amico, si acquisisce con la conoscenza. Durante la mia vita, ho fondato il Peripato, cioè una scuola che prende il nome da un cortile coperto che io percorrevo con i miei discepoli mentre discutevamo. La conoscenza non è una dote che si ha dalla nascita ma una virtù che ognuno acquisisce studiando, riflettendo, osservando e può essere vasta come questo paesaggio, anzi infinita!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					exitType: 'scene',
					nextScene: 'aidos_scene_2',

					sceneClass: 'button-bottom'
				}
			}	
		},
		aidos_scene_2: {
			id: 'aidos_scene_2',
			type: 'dialog',
			name: 'aidos_scene_2',
			template: 'dialog.html',
			nextScene: 'aidos_scene_3',
			background: 'aidos_01_bg.jpg',
			firstDialog: 'aidos_scene_2_dialog_1',
			dialogs: {
				aidos_scene_2_dialog_1: {
					id: 'aidos_scene_2_dialog_1',
					text: 'Aristotele, sei il filosofo più amichevole che io conosca!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_2_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_2_dialog_2: {
					id: 'aidos_scene_2_dialog_2',
					text: 'Grazie ragazzo, mi fai vergognare!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_2_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_2_dialog_3: {
					id: 'aidos_scene_2_dialog_3',
					text: 'Attento, Aristotele: di solito sei così bravo a trovare il giusto termine ad ogni sensazione! Tu sai cosa è davvero la vergogna.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_2_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_2_dialog_4: {
					id: 'aidos_scene_2_dialog_4',
					text: 'Hai ragione, Talete. Io intendo la vergogna come pudore. Esso non è una virtù: infatti somiglia più a una passione che a uno stato abituale. Viene definito, comunque, come una specie di paura del disonore e produce effetti molto simili a quelli della paura di fronte ai pericoli: infatti, coloro che si vergognano arrossiscono, mentre quelli che temono la morte impallidiscono. Questa passione, d’altra parte, non si addice ad ogni età, ma solo alla giovinezza. Noi pensiamo infatti che i giovani debbano essere pudichi per il fatto che, vivendo di passione, commettono molti errori, ma che ne sarebbero trattenuti dal pudore. La vergogna, quindi, nasce dalle cattive azioni. Chi ha paura del giudizio delle persone giuste, ha pudore.',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_2_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_2_dialog_5: {
					id: 'aidos_scene_2_dialog_5',
					text: 'E chi non s’interessa del giudizio degli altri?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_2_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_2_dialog_6: {
					id: 'aidos_scene_2_dialog_6',
					text: 'Quello è un impudente e non ha alcuna virtù. Se tu compissi una brutta azione alle spalle di una persona cui vuoi bene, come ad esempio tuo padre o tua madre, e venissi scoperto e giudicato, come ti comporteresti?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_2_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_2_dialog_7: {
					id: 'aidos_scene_2_dialog_7',
					text: 'Scegli la risposta da dare a Hobbes!',
					textClass: 'suggest',
					positionClass: 'suggest-top',
					exitType: 'choice', // dialog, choice, scene
					choices: [
						{
							text: 'Saprei di avere torto quindi mi sentirei a disagio',
							nextDialog: 'aidos_scene_2_dialog_8'
						},
						{
							text: 'I miei genitori mi rimproverano così spesso che non m’importerebbe del loro giudizio',
							nextDialog: 'aidos_scene_2_dialog_9'
						}
					],
					choiceLabel: 'Scegli',
					choiceClass: 'button-dialog'
				},
				aidos_scene_2_dialog_8: {
					text: 'Siccome tu percepisci che i tuoi genitori sono persone perbene e ti hanno dato sempre tutto, ti senti colpa anzi, per meglio dire, provi pudore.',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_2_dialog_10'
				},
				aidos_scene_2_dialog_9: {
					text: 'Sei un impudente perché, non solo non ti curi del giudizio degli altri, ma rifiuti quello di chi ti rimprovera perché ti vuole bene; non è molto saggio da parte tua!',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_2_dialog_10'
				},
				aidos_scene_2_dialog_10: {
					text: '',
					video: 'https://www.youtube.com/embed/iZ5Oap17Xq0',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_2_dialog_11'
				},
				aidos_scene_2_dialog_11: {
					text: 'Ok, proseguiamo...',
					
					positionClass: 'bubble-dialog-left',
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
					image: 'aristotele01.jpg',
					text: 'La filosofia di Aristotele muove dalla stessa esigenza platonica di ricercare un principio eterno e immutabile che spieghi il modo in cui avvengono i mutamenti della natura. Come il suo maestro Platone, Aristotele ha ben presente la contrapposizione filosofica venutasi a creare tra Parmenide ed Eraclito; anche lui pertanto si propone di conciliare le loro rispettive posizioni di pensiero: l’Essere statico del primo con l’incessante divenire del secondo. Per cui tutto muta in natura, tutto “scorre”, ma non a caso: seguendo sempre certi schemi o regole fisse.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'aristotele02.jpg',
					text: 'A differenza di Platone, tuttavia, Aristotele ritiene che le forme in grado di guidare la materia non si trovino al di fuori di essa: non ha senso secondo lui sdoppiare gli enti per cercare poi di riconciliarli in qualche modo; ogni realtà invece deve avere in se stessa, e non in cielo, le leggi del proprio costituirsi. Il fatto che tutti i fenomeni naturali siano soggetti a costante mutamento significa per Aristotele che nella materia è sempre insita la possibilità di raggiungere una forma precisa. Compito della filosofia è proprio quello di scoprire le cause che determinano il perché un oggetto tenda ad evolversi in un certo modo e non diversamente. Aristotele parla in proposito di quattro cause, che sono le seguenti:',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
					image: 'aristotele03.jpg',
					text: '<p>1. causa formale: consiste nelle qualità specifiche dell\'oggetto stesso, nella sua essenza;<p><p>2. causa materiale: la materia è il sostrato senza cui l\'oggetto non esisterebbe;<p><p>3. causa efficiente: è l\'agente che determina operativamente il mutamento;<p><p>4. causa finale: la più importante di tutte, in virtù della quale esiste un\'intenzionalità nella natura; è lo scopo per cui una certa realtà esiste.<p>',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				},
				{
				    image: 'aristotele04.jpg',
					text: 'La scienza delle cause consente di affrontare in maniera più sistematica e razionale il problema dell’Essere e delle sue possibili determinazioni, sorto la prima volta con Parmenide. Quest’ultimo aveva detto dell’Essere soltanto che è, e non può non essere, ma non aveva aggiunto cosa esso sia, lasciandolo senza un predicato. Ne risultava un concetto evanescente, che rischiava di venir confuso col non-essere. Aristotele con la sua ontologia si propone allora di mostrare che l’essere è determinato in una molteplicità di attributi, che lo rendono multilaterale pur nella sua unità.',
					textClass: 'story-text',
					//nextLabel: 'Vai avanti',
					nextClass: 'button-story'
				}
			]
		},
		aidos_scene_4: {
			id: 'aidos_scene_4',
			type: 'dialog',
			name: 'aidos_scene_4',
			template: 'dialog.html',
			nextScene: 'aidos_scene_5',
			background: 'aidos_01_bg.jpg',
			firstDialog: 'aidos_scene_4_dialog_1',
			dialogs: {
				aidos_scene_4_dialog_1: {
					id: 'aidos_scene_4_dialog_1',
					text: 'Aristotele, dunque, il tuo pensiero si occupa anche di definire il concetto di Etica',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_4_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_2: {
					id: 'aidos_scene_4_dialog_2',
					text: 'Sì, ma prima di parlarvene, vorrei sapere che cos’è, per te, ragazzo, l’Etica',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_4_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_3: {
					id: 'aidos_scene_4_dialog_3',
					text: 'E’ un concetto molto vasto, come faccio a riassumerlo?',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_4_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_4: {
					id: 'aidos_scene_4_dialog_4',
					text: 'Prova a pensare a qualche aspetto della tua vita o del mondo in cui vivi e vedrai che l’Etica sta alla base di molte cose',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_4_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_5: {
					id: 'aidos_scene_4_dialog_5',
					text: 'Secondo me l’Etica racchiude tutti i comportamenti e le abitudini dell’uomo',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_4_dialog_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_6: {
					id: 'aidos_scene_4_dialog_6',
					text: 'Sii più preciso',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_4_dialog_7',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_7: {
					id: 'aidos_scene_4_dialog_7',
					text: 'I comportamenti che l’uomo ha nella società, nei confronti dei suoi simili, nella politica e nella vita quotidiana',
					//textClass: 'bubble-talete'
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_4_dialog_8',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_8: {
					id: 'aidos_scene_4_dialog_8',
					text: 'Anche i ragazzi come te hanno un’etica?',
					//textClass: 'bubble-talete'
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_4_dialog_9',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_9: {
					id: 'aidos_scene_4_dialog_9',
					text: 'Credo di sì. La scuola è una piccola società in cui ognuno, studenti e professori, seguono un comportamento',
					//textClass: 'bubble-talete'
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_4_dialog_10',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_10: {
					id: 'aidos_scene_4_dialog_10',
					text: 'Giusto ragazzo. Il punto, però, non è sapere o spiegare che cos’è l’Etica ma quale tipo di Etica adottare. Vedi, secondo il mio pensiero, la vita si basa su un insieme di virtù che ho diviso in due tipi: etiche, ossia relative alla prassi e dianoetiche, ossia relative all’intelletto. Ti spiego meglio: le virtù etiche devono essere apprese mediante la pratica, l’abitudine e seguendo l’esempio di uomini saggi. Quindi sono dei concetti astratti che si trasformano in azioni positive nei confronti della società e dei tuoi simili. La più importante, fra le virtù etiche, è la giustizia, che si divide in distributiva, e segue la proporzione geometrica, o correttiva, e segue la proporzione aritmetica. La distributiva è impartita tenendo conto delle differenze e dei meriti; la correttiva interviene quando si presentano squilibri nei rapporti fra gli uomini. Infine, c’è l’equità che è la virtù che corregge le disuguaglianze e riporta l’equilibrio',
					//textClass: 'bubble-talete'
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_4_dialog_11',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
					aidos_scene_4_dialog_11: {
					id: 'aidos_scene_4_dialog_11',
					text: 'Quindi l’Etica è principalmente un riassunto di tutte le virtù. Allora per me è etico chi rispetta la legge e le regole della società; chi rispetta il proprio simile e le sue differenze di pensiero; chi rispetta i valori che gli hanno trasmesso i genitori e chi accetta il rimprovero dei genitori stessi',
					//textClass: 'bubble-talete'
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_4_dialog_12',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_12: {
					id: 'aidos_scene_4_dialog_12',
					text: 'E qui ti volevo! Se accetti il giudizio di chi stimi e vuoi bene, allora possiedi una virtù! Ma devi imparare ad accettare e rispettare anche il pensiero di colui che non conosci ma con cui convivi nella società',
					//textClass: 'bubble-talete'
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_4_dialog_13',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_4_dialog_13: {
					id: 'aidos_scene_4_dialog_13',
					text: 'E’ chiaro, ragazzo? Ecco che cosa sono quelle insenature nascoste che tu vedi di fronte a te: sono le virtù che acquisisci con la conoscenza e con la saggezza',
					//textClass: 'bubble-talete'
					positionClass: 'bubble-dialog-left',
				    exitType: 'scene', // dialog, choice, scene
					nextScene: 'aidos_scene_5',
					
					sceneClass: 'button-bottom'
				}
			}
		},
        aidos_scene_5: {
			id: 'aidos_scene_5',
			type: 'dialog',
			name: 'aidos_scene_5',
			template: 'dialog.html',
			nextScene: 'aidos_scene_6',
			background: 'aidos_01_bg.jpg',
			firstDialog: 'aidos_scene_5_dialog_1',
			dialogs: {
				aidos_scene_5_dialog_1: {
					id: 'aidos_scene_5_dialog_1',
					text: 'Vedi, ragazzo, Aristotele ha dedicato tutta la sua vita all’amore per il sapere e allo studio dell’etica, scrivendo due opere che riguardano tale argomento',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_5_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_5_dialog_2: {
					id: 'aidos_scene_5_dialog_2',
					text: 'Sì, dopo l’Etica Nicomachea, ho approfondito, con stile più ricercato, i contenuti di quest’ultima riportandoli nell’Etica Eudemia',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_5_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_5_dialog_3: {
					id: 'aidos_scene_5_dialog_3',
					text: 'Ricordiamo, poi, che sei stato anche autore de La Grande Etica',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_5_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_5_dialog_4: {
					id: 'aidos_scene_5_dialog_4',
					text: 'La Grande Etica è nata per riassumere in un’unica opera tutti i pensieri riguardo l’etica espressi nelle precedenti. Lo sai, mi piace precisare i concetti, specialmente quando devo trasmetterli ai miei discepoli!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					exitType: 'scene',
					nextScene: 'aidos_scene_6',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				    sceneClass: 'button-bottom'
				}
			}
		},
        aidos_scene_6: {
			id: 'aidos_scene_6',
			type: 'abstract',
			name: 'aidos_scene_6',
			template: 'abstract.html',
			nextScene: 'aidos_scene_7',
			text: 'È nel IV Libro dell’Etica Nicomachea che Aristotele affronta il tema della vergogna, intesa come pudore (αἰδώς): “Per quanto riguarda il pudore, non conviene parlarne come di una virtù, infatti somiglia più a una passione che a uno stato abituale. Viene definito, comunque, come una specie di paura del disonore, e produce effetti molto simili a quelli della paura di fronte ai pericoli: infatti, coloro che si vergognano arrossiscono, mentre quelli che temono la morte impallidiscono. Dunque, entrambi hanno manifestamente carattere fisico, in qualche modo; il che, si pensa, è tipico più della passione che non della disposizione morale. Questa passione, d’altra parte, non si addice ad ogni età, ma solo alla giovinezza. Noi pensiamo infatti che i giovani debbano essere pudichi per il fatto che, vivendo di passione, commettono molti errori, ma che ne sarebbero trattenuti dal pudore. E noi lodiamo i giovani pudichi, mentre nessuno loderebbe un uomo maturo per il fatto che è sensibile alla vergogna: noi pensiamo, infatti, che un uomo maturo non dovrebbe fare nulla di cui si debba vergognare. Infatti, la vergogna non è tipica dell’uomo virtuoso, se è vero che essa nasce per effetto delle cattive azioni (tali azioni non si devono commettere; se poi alcune azioni sono brutte veramente ed altre lo sono solo secondo l’opinione della gente, non fa alcuna differenza: non si devono commettere né le une né le altre, in modo da non dover provar vergogna). Invece è proprio dell’uomo dappoco avere una natura tale da commettere qualche azione vergognosa. Ed avere una disposizione di carattere per cui si prova vergogna se si è commessa un’azione vergognosa, e pensare che per questo si è un uomo virtuoso, è assurdo: il pudore, infatti, si riferisce ad atti volontari, e l’uomo virtuoso non commetterà mai cattive azioni volontariamente. Solo per un’ipotesi il pudore potrebbe essere virtuoso: nel caso in cui uno si vergogni delle proprie azioni; ma questo non può verificarsi nel campo delle virtù. Infine, se l’impudenza, cioè il non vergognarsi di commettere azioni brutte, è una cosa miserabile, non per questo sarà virtuoso il vergognarsi di commettere azioni simili. Anche la continenza non è una virtù, bensì una specie di mescolanza di virtù e di vizio” (Etica Nicomachea, IV, 15).Nell’Etica Eudemia, invece, il pudore viene espressamente collegato al timore del giudizio degli altri: “Il pudore è la medietà tra imprudenza e timidezza; infatti, chi non si dà pensiero di alcun giudizio altrui è imprudente, chi si preoccupa ugualmente di tutti è timido, chi invece solo del giudizio di coloro che sono persone manifestamente perbene ha pudore” (Etica Eudemia, III, 7 1233 b, 26-29).',
			background: 'abstract.jpg',
			nextLabel: 'Vai avanti'
		},
		aidos_scene_7: {
			id: 'aidos_scene_7',
			type: 'survey',
			name: 'aidos_scene_7',
			template: 'survey.html',
			nextScene: 'aidos_scene_8',
			background: 'aidos_01_bg.jpg',
			firstQuestion: 'aidos_scene_7_survey_1',
			questions: {
				aidos_scene_7_survey_1: {
					id: 'lype_scene_2_survey_1',
					text: 'Secondo Aristotele i giovani sono più soggetti alle passioni ma che rapporto c’è tra il commettere un errore e il pudore?',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'Aristotele pensa che chi prova pudore per aver commesso una cattiva azione, debba essere perdonato;',
							nextQuestion: 'aidos_scene_7_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						},
						{
							text: 'Aristotele crede che l’uomo virtuoso non commetta mai cattive azioni.',
							nextQuestion: 'aidos_scene_7_survey_2',
							textAfter: 'Corretto! Vai avanti...'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
				aidos_scene_7_survey_2: {
					id: 'aidos_scene_7_survey_2',
					text: 'Come viene giudicato il pudore da Aristotele?',
					//textClass: 'bubble-ragazzo',
										positionClass: 'bubble-dialog-left',
					answers: [
						{
							text: 'Una virtù',
							nextQuestion: 'aidos_scene_7_survey_1',
							textAfter: 'Sbagliato! Ripeti il questionario.'
						},
						{
							text: 'Una passione',
							nextQuestion: '',
							textAfter: 'Corretto! Hai completato il questionario!'
						}
					],
					answerLabel: 'Scegli',
					answerClass: 'button-dialog'
				},
			}
		},
		aidos_scene_8: {
			id: 'aidos_scene_8',
			type: 'dialog',
			name: 'aidos_scene_8',
			template: 'dialog.html',
			nextScene: '',
			background: 'aidos_01_bg.jpg',
			firstDialog: 'aidos_scene_8_dialog_1',
			dialogs: {
				aidos_scene_8_dialog_1: {
					id: 'aidos_scene_8_dialog_1',
					text: 'E’ giunta l’ora di salutarci',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-left',
					nextDialog: 'aidos_scene_8_dialog_2',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_8_dialog_2: {
					id: 'aidos_scene_9_dialog_2',
					text: 'Aristotele sei davvero il più saggio di tutti!',
					//textClass: 'bubble-ragazzo',
					positionClass: 'bubble-dialog-right',
					nextDialog: 'aidos_scene_8_dialog_3',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_8_dialog_3: {
					id: 'aidos_scene_8_dialog_3',
					text: 'Con tutti questi complimenti mi fai vergognare!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_8_dialog_4',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_8_dialog_4: {
					id: 'aidos_scene_8_dialog_4',
					text: 'Sbagliato! Ho capito che la vergogna non ha niente a che vedere con l’arrossire per un complimento e niente a che vedere con la virtù: la vergogna è, bensì, una sensazione simile alla paura del disonore che colpisce chi ha commesso un’azione cattiva!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-top',
					nextDialog: 'aidos_scene_8_dialog_5',
					//nextLabel: 'Vai avanti',
					//nextClass: 'button-bottom'
				},
				aidos_scene_8_dialog_5: {
					id: 'aidos_scene_8_dialog_5',
					text: 'Bravo giovane amico, alla prossima!',
					//textClass: 'bubble-talete',
					positionClass: 'bubble-dialog-right',
					exitType: 'scene',
					nextScene: '',

					sceneClass: 'button-bottom'
				}
			}
		},
	});
