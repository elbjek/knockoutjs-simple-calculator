import * as PIXI from '../node_modules/pixi.js';
import { Sprite } from 'pixi.js';

const app = new PIXI.Application({
	width:800,
	height:600,
	forceCanvas: true
})
const container = new PIXI.Container();

document.getElementById('zombieland').appendChild(app.view)
app.renderer.autoResize = true;
app.stage.addChild(container)

app.loader
	.add([
		'assets/logo.png',
		'assets/Back.jpg',
		'assets/Game files/Buttons/Elements PNG/Top panel.png',
		'assets/Game files/Buttons/Elements PNG/Coin icon.png',
		'/assets/Game files/Buttons/Add coins button/Add coins button Normal.png',
		'assets/Game files/Buttons/Info button/Info button Normal.png',
		'assets/Game files/Buttons/Settings button/Settings button Normal.png',
		'assets/Game files/Buttons/Close button/Close button Normal.png'
	])
	.add([
		'assets/Game files/Buttons/Minus button/Minus button Normal.png',
		'assets/Game files/Buttons/Plus button/Plus button Normal.png',
		'assets/Game files/Buttons/Gamble button/Gamble button Disable.png',
		'assets/Game files/Buttons/Spin button/Spin button Normal.png'
	])
	.add([
		'assets/Game files/Symbols/Symbol 1 - J.png',
		'assets/Game files/Symbols/Symbol 2 - Q.png',
		'assets/Game files/Symbols/Symbol 3 - K.png',
		'assets/Game files/Symbols/Symbol 4 - A.png',
		'assets/Game files/Symbols/Symbol 5 - Eye.png',
		'assets/Game files/Symbols/Symbol 6 - Brain.png',
		'assets/Game files/Symbols/Symbol 7 - Skull.png',
		'assets/Game files/Symbols/Symbol 8 - Green zombie.png',
		'assets/Game files/Symbols/Symbol 9 - Blue zombie.png',
		'assets/Game files/Symbols/Symbol 10 - Girl zombie.png',
		'assets/Game files/Symbols/Symbol 11 - Wild - Ghost.png',
		'assets/Game files/Symbols/Symbol 12 - Free spins.png',
		'assets/Game files/Symbols/Symbol 13 - Bonus game.png',
		'assets/Game files/Frames/Back.png'
	])
	.load((loader, resources)=>{
		const logo = new PIXI.Sprite(resources['assets/logo.png'].texture)
		const background = new PIXI.Sprite(resources['assets/Back.jpg'].texture);

		logo.scale.set(0.16)
		logo.anchor.set(0.5)
		logo.position.x =  app.view.width / 2
		logo.position.y = 45
		background.width = app.view.width
		background.height = app.view.height
		container.addChild(background);
		container.addChild(logo);
		
		
		const panelContainer = new PIXI.Container();
		const topPanelContainer = new PIXI.Container;
		panelContainer.addChild(topPanelContainer);
		const topPanel = new PIXI.Sprite(resources['assets/Game files/Buttons/Elements PNG/Top panel.png'].texture);
		
		topPanelContainer.addChild(topPanel);
		topPanel.width = 720;
		topPanel.height = 50;
		topPanelContainer.position.set(app.view.width / 2 - topPanel.width / 2,70);
		
		topPanelContainer.height = topPanel.height

		//TOP PANEL LEFT COIN SECTION
		const coinsPanel = new PIXI.Container();
		topPanelContainer.addChild(coinsPanel);
		
		const coin = new PIXI.Sprite(resources['assets/Game files/Buttons/Elements PNG/Coin icon.png'].texture)
		const addCoins = new PIXI.Sprite(resources['/assets/Game files/Buttons/Add coins button/Add coins button Normal.png'].texture)
		coinsPanel.addChild(coin);

		coin.height = topPanel.height;
		coin.width = 50;

		let allCoinsStyle = new PIXI.TextStyle({
			fontFamily: "Arial",
			fontSize: 22,
			fill: "white",
			fontWeight:'bolder'
		  });
		const allCoinCount = new PIXI.Text("925.00", allCoinsStyle);
		coinsPanel.addChild(allCoinCount)

		allCoinCount.position.set(coin.width + 40, coin.height / 2 - allCoinCount.height / 2)

		coinsPanel.addChild(addCoins);
		addCoins.height = coin.height;
		addCoins.width = coin.width;
		addCoins.position.set(coin.width + allCoinCount.width +80, 0)

		//TOP PANEL RIGHT INFO SECTION

		const infoPanel = new PIXI.Container();
		// topPanelContainer.addChild(infoPanel)
		const infoButton = new PIXI.Sprite(resources['assets/Game files/Buttons/Info button/Info button Normal.png'].texture)
		const settingsButton = new PIXI.Sprite(resources['assets/Game files/Buttons/Settings button/Settings button Normal.png'].texture)
		const closeButton = new PIXI.Sprite(resources['assets/Game files/Buttons/Close button/Close button Normal.png'].texture)
		
		
		// settingsButton.p
		topPanelContainer.addChild(infoButton)
		topPanelContainer.addChild(settingsButton)
		topPanelContainer.addChild(closeButton)
		
		closeButton.position.set(topPanel.width - 40, 0);
		closeButton.scale.set(.2)

		settingsButton.position.set(topPanel.width - closeButton.width - 50, 0)
		settingsButton.scale.set(.2)
		
		infoButton.scale.set(.2)
		infoButton.position.set(topPanel.width - settingsButton.width - closeButton.width - infoButton.width - 12, 0)

		//BOTTOM BUTTONS PANEL
		const bottomPanelContainer = new PIXI.Container();
		bottomPanelContainer.position.set(40,530);
		const bottomPanel = new PIXI.Sprite(resources['assets/Game files/Buttons/Elements PNG/Top panel.png'].texture)
		bottomPanelContainer.addChild(bottomPanel)
		bottomPanel.width = 720
		bottomPanel.height = 60
		bottomPanelContainer.width = bottomPanel.width

		// BOTTOM LEFT BUTTONS PANEL ( PLUS AND MINUS )
		const minusButton = new PIXI.Sprite(resources['assets/Game files/Buttons/Minus button/Minus button Normal.png'].texture)
		const plusButton = new PIXI.Sprite(resources['assets/Game files/Buttons/Plus button/Plus button Normal.png'].texture)

		const minusPlusContainer = new PIXI.Container();
		bottomPanelContainer.addChild(minusPlusContainer);
		minusPlusContainer.addChild(minusButton)
		minusPlusContainer.addChild(plusButton);
		minusPlusContainer.width = 330

		plusButton.width = 30
		plusButton.height = bottomPanel.height
		minusButton.width = plusButton.width
		minusButton.height = bottomPanel.height

		plusButton.position.set(minusPlusContainer.getBounds().right, 0)

		// CENTER ICONS
				var slotBackground = PIXI.Texture.from('assets/Game files/Symbols/Symbol 4 - A.png')
				const centerContainer = new PIXI.Container();
				centerContainer.width = 720;
		
				const reelWidth = (app.stage.width - 115) / 5
				const slotSize = 130;
		
				for(let i = 0; i < 5; i++){
					const slotReel = new PIXI.Container();
					slotReel.x = i * reelWidth;
					centerContainer.addChild(slotReel)
					for(let n = 0; n < 3; n++){
						const slotHolder = new PIXI.Container();
						const slot = new PIXI.Sprite(slotBackground)
						slot.y = n * slotSize;
						slot.x = Math.round((slotSize - slot.width) / 2)
						slot.scale.set(slotSize / slot.width, slotSize / slot.height)
						centerContainer.x = slotSize * 2 + 65;
						centerContainer.y = 130
						slotHolder.addChild(slot)
						slotReel.addChild(slotHolder)
					}
				}

		// BOTTOM RIGHT BUTTONS PANEL ( GAMBLE + SPIN )
		const gambleButton = new PIXI.Sprite(resources['assets/Game files/Buttons/Gamble button/Gamble button Disable.png'].texture)
		const spinButton = new PIXI.Sprite(resources['assets/Game files/Buttons/Spin button/Spin button Normal.png'].texture)
		
		var spinButtonContainer = new PIXI.Container()

		spinButtonContainer.addChild(gambleButton)
		spinButtonContainer.addChild(spinButton)

		spinButton.scale.set(.18)
		spinButton.position.set(app.stage.width - spinButton.width - 80, bottomPanel.height / 2)
		spinButton.anchor.set(0, 0.5)
		gambleButton.scale.set(0.22)
		gambleButton.position.set(app.stage.width - gambleButton.width - spinButton.width - 80,0)

		bottomPanelContainer.addChild(spinButtonContainer)
		panelContainer.addChild(bottomPanelContainer)

		panelContainer.addChild(centerContainer)
		container.addChild(panelContainer)
	})

	var size = [800, 600];
	var ratio = size[0] / size[1];
	resize();
	function resize() {
		if (window.innerWidth / window.innerHeight >= ratio) {
			var w = window.innerHeight * ratio;
			var h = window.innerHeight;
		} else {
			var w = window.innerWidth;
			var h = window.innerWidth / ratio;
		}
		app.renderer.view.style.width = w + 'px';
		app.renderer.view.style.height = h + 'px';
	}
	window.onresize = function(event) {
		resize();
	};