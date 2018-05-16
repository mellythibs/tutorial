var game = new Phaser.Game(640,480, Phaser.AUTO, 'gamediv'), { create: create, update: update };

function create(){

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);

}

function update(){
game.state.start('boot');
}