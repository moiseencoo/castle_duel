
new Vue({
	name: 'game',
	el: '#app',
	data: {
		turn: 1,
		players: [
			{
				name: 'Anne of Cleves',
			}, 
			{
				name: 'William the Bald',
			},
		],
		currentPlayerIndex: Math.round(Math.random()),
	}, 
	template: `<div id="app">
		<top-bar 
		:players="players" 
		:current-player-index="currentPlayerIndex" 
		:turn="turn" />
	</div>
	`,

})