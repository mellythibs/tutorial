war loadStage ={

	preload: function() {
		var loadingLabel = game.add.text(80, 150, 'loading...', 
							{font: '30px Courier', fell: '#ffffff'});
		game.load.image('player', 'assets/creeper.png');
		game.load.image('win', 'assets/jack.png');

	},

	create: function() {
		game.state.start('menu');
	}
};
