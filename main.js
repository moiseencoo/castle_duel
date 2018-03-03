
new Vue({
	name: 'game',
	el: '#app',
	data: state, 
	template: `<div id="app">
		<top-bar 
		:players="players" 
		:current-player-index="currentPlayerIndex" 
		:turn="turn" />
		<card :def="testCard" @play="handlePlay" />
	</div>
	`,
	methods: {
		handlePlay: function() {
			console.log('You played a card');
		},


	},
	computed: {
		testCard() {
			return cards.archers
		},
	},

})