var softResetEnabled = false;

var backupTempData = JSON.stringify(tempData);
var backupDynamicData = JSON.stringify(dynamicData);
var backupDynamicSaveData = JSON.stringify(dynamicSaveData);
var backupPermamentSaveData = JSON.stringify(permanentSaveData);

function addConversionMachineValves(machinesAdded) {
	clicker.addClicker({
		path: (function (ctx) {
			ctx.rect(689, 110 + machinesAdded * 63, 108, 58);
		}).bind(machinesAdded),
		bounds: {
			x: 688,
			y: 109 + machinesAdded * 63,
			w: 110,
			h: 60
		},
		hovered: functionData.tooltipHoverConversionMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: machinesAdded,
	}, 0);
	clicker.addClicker({
		path: (function (ctx) {
			ctx.rect(692, 135 + machinesAdded * 63, 30, 30);
		}).bind(machinesAdded),
		bounds: {
			x: 691,
			y: 134 + machinesAdded * 63,
			w: 32,
			h: 32
		},
		clicked: functionData.valveSwitch,
		hovered: functionData.tooltipHoverConversionMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: machinesAdded,
		arg2: "ingredient",
	}, 0);
	clicker.addClicker({
		path: (function (ctx) {
			ctx.rect(744, 135 + machinesAdded * 63, 30, 30);
		}).bind(machinesAdded),
		bounds: {
			x: 743,
			y: 134 + machinesAdded * 63,
			w: 32,
			h: 32
		},
		clicked: functionData.valveSwitch,
		hovered: functionData.tooltipHoverConversionMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: machinesAdded,
		arg2: "reagent",
	}, 0);
}

function addReactionCatalyst() {
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(689, 110 + 4 * 63, 108, 58);
		},
		bounds: {
			x: 688,
			y: 109 + 4 * 63,
			w: 110,
			h: 60
		},
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 0,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(692, 135 + 4 * 63, 30, 30);
		},
		bounds: {
			x: 691,
			y: 134 + 4 * 63,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 0,
		arg2: 0,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(744, 135 + 4 * 63, 30, 30);
		},
		bounds: {
			x: 743,
			y: 134 + 4 * 63,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 0,
		arg2: 1,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(600, 460, 77, 58);
		},
		bounds: {
			x: 599,
			y: 459,
			w: 79,
			h: 60
		},
		clicked: functionData.catalystSwitch,
		hovered: functionData.tooltipHoverCatalystButton,
		unhovered: functionData.tooltipUnhover,
		arg1: 0,
	}, 0);
}

function addOrbInfuser() {
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(689, 110 + 5 * 63, 108, 90);
		},
		bounds: {
			x: 688,
			y: 109 + 5 * 63,
			w: 110,
			h: 92
		},
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 1,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(692, 135 + 5 * 63, 30, 30);
		},
		bounds: {
			x: 691,
			y: 134 + 5 * 63,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 1,
		arg2: 3,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(744, 135 + 5 * 63, 30, 30);
		},
		bounds: {
			x: 743,
			y: 134 + 5 * 63,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 1,
		arg2: 0,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(692, 135 + 5 * 63 + 32, 30, 30);
		},
		bounds: {
			x: 691,
			y: 134 + 5 * 63 + 32,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 1,
		arg2: 2,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(744, 135 + 5 * 63 + 32, 30, 30);
		},
		bounds: {
			x: 743,
			y: 134 + 5 * 63 + 32,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 1,
		arg2: 1,
	}, 0);
}

function addStash() {
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(689, 110 + 5 * 63 + 95, 108, 90);
		},
		bounds: {
			x: 688,
			y: 109 + 5 * 63 + 95,
			w: 110,
			h: 92
		},
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 2,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(692, 135 + 5 * 63 + 95, 30, 30);
		},
		bounds: {
			x: 691,
			y: 134 + 5 * 63 + 95,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 2,
		arg2: 3,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(744, 135 + 5 * 63 + 95, 30, 30);
		},
		bounds: {
			x: 743,
			y: 134 + 5 * 63 + 95,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 2,
		arg2: 0,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(692, 135 + 5 * 63 + 32 + 95, 30, 30);
		},
		bounds: {
			x: 691,
			y: 134 + 5 * 63 + 32 + 95,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 2,
		arg2: 2,
	}, 0);
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(744, 135 + 5 * 63 + 32 + 95, 30, 30);
		},
		bounds: {
			x: 743,
			y: 134 + 5 * 63 + 32 + 95,
			w: 32,
			h: 32
		},
		clicked: functionData.utilityMachineTankSwitch,
		hovered: functionData.tooltipHoverUtilityMachine,
		unhovered: functionData.tooltipUnhover,
		arg1: 2,
		arg2: 1,
	}, 0);
}

function addMergeButton() {
	clicker.addClicker({
		path: function (ctx) {
			ctx.rect(350, 130, 100, 30);
		},
		bounds: {
			x: 349,
			y: 129,
			w: 102,
			h: 32
		},
		clicked: functionData.combineGolems,
		hovered: functionData.tooltipHoverMergeButton,
		unhovered: functionData.tooltipUnhover
	}, 1);
}

function setup() {

	var tabSwitch = [];
	for (var j = 0; j < 6; j++) {
		tabSwitch.push({
			path: (function (ctx) {
				ctx.rect(50 + 120 * this, 0, 110, 30);
			}).bind(j),
			bounds: {
				x: 49 + 120 * j,
				y: 0,
				w: 112,
				h: 31
			},
			clicked: functionData.tabSwitch,
			disableHighlight: functionData.checkTab,
			arg1: j
		});
	}
	for (var i = 0; i < 7; i++) {
		clicker.resetTab(i);
		for (var j = 0; j < tabSwitch.length; j++) {
			clicker.addClicker(tabSwitch[j], i);
		}
	}
	for (var i = 0; i < setupButtons.length; i++) {
		for (var j = 0; j < setupButtons[i].length; j++) {
			clicker.addClicker(setupButtons[i][j], i);
		}
	}
	for (var i = 0; i < dynamicData.conversionMachines.length; i++) {
		addConversionMachineValves(i);
	}
	addReactionCatalyst();
	addOrbInfuser();
	addStash();
	addMergeButton();
	for (var golemID in staticData.golems) {
		var golem = staticData.golems[golemID];
		clicker.addClicker({
			path: (function (ctx) {
				ctx.arc(400 + this.x, 400 + this.y, 40, -Math.PI / 6, Math.PI * 7 / 6);
				ctx.lineTo(400 + this.x, 320 + this.y);
				ctx.closePath();
			}).bind(golem),
			bounds: {
				x: 359 + golem.x,
				y: 319 + golem.y,
				w: 82,
				h: 122
			},
			clicked: functionData.clickedGolem,
			disableHighlight: functionData.checkGolem,
			hovered: functionData.tooltipHoverGolem,
			unhovered: functionData.tooltipUnhover,
			arg1: golemID
		}, 1);
	}

	loadData();

	if (softResetEnabled) {
		for (var sUpgrade in staticData.upgrades) {
			if (staticData.upgrades[sUpgrade].starting) {
				addUpgrade(sUpgrade);
			}
		}
		for (var golem in staticData.golems) {
			dynamicData.golems[golem] = 0;
		}
	}

	skillTree.processNodes();
}

var setupButtons = [
	//Main
	[{
			path: function (ctx) {
				ctx.rect(10, 700, 100, 30);
			},
			bounds: {
				x: 9,
				y: 699,
				w: 102,
				h: 32
			},
			hovered: functionData.showFAQ,
			unhovered: functionData.hideFAQ
		},
		{
			path: function (ctx) {
				ctx.rect(10, 750, 100, 30);
			},
			bounds: {
				x: 9,
				y: 749,
				w: 102,
				h: 32
			},
			clicked: functionData.tabSwitch,
			arg1: 6,
		},
	],
	//Golems
	[],
	//Lore
	[{
			path: function (ctx) {
				ctx.rect(230, 60, 140, 40);
			},
			bounds: {
				x: 229,
				y: 59,
				w: 142,
				h: 42
			},
			clicked: functionData.scrollLoreTop
		},
		{
			path: function (ctx) {
				ctx.rect(430, 60, 140, 40);
			},
			bounds: {
				x: 429,
				y: 59,
				w: 142,
				h: 42
			},
			clicked: functionData.scrollLoreBot
		},
		{
			path: function (ctx) {
				ctx.rect(100, 170, 600, 30);
			},
			bounds: {
				x: 99,
				y: 169,
				w: 602,
				h: 32
			},
			hovered: functionData.scrollLoreUp,
			unhovered: functionData.scrollLoreStop
		},
		{
			path: function (ctx) {
				ctx.rect(100, 140, 600, 30);
			},
			bounds: {
				x: 99,
				y: 139,
				w: 602,
				h: 32
			},
			hovered: functionData.scrollLoreUpFast,
			unhovered: functionData.scrollLoreStop
		},
		{
			path: function (ctx) {
				ctx.rect(100, 680, 600, 30);
			},
			bounds: {
				x: 99,
				y: 679,
				w: 602,
				h: 32
			},
			hovered: functionData.scrollLoreDown,
			unhovered: functionData.scrollLoreStop
		},
		{
			path: function (ctx) {
				ctx.rect(100, 710, 600, 30);
			},
			bounds: {
				x: 99,
				y: 709,
				w: 602,
				h: 32
			},
			hovered: functionData.scrollLoreDownFast,
			unhovered: functionData.scrollLoreStop
		},
	],
	//Chievos
	[],
	//Options
	[{
			path: function (ctx) {
				ctx.rect(330, 120, 140, 40);
			},
			bounds: {
				x: 329,
				y: 119,
				w: 142,
				h: 42
			},
			clicked: functionData.saveData
		},
		{
			path: function (ctx) {
				ctx.rect(330, 180, 140, 40);
			},
			bounds: {
				x: 329,
				y: 179,
				w: 142,
				h: 42
			},
			clicked: functionData.loadData
		},
		{
			path: function (ctx) {
				ctx.rect(330, 240, 140, 40);
			},
			bounds: {
				x: 329,
				y: 239,
				w: 142,
				h: 42
			},
			clicked: functionData.resetData
		},
		{
			path: function (ctx) {
				ctx.rect(100, 300, 200, 40);
			},
			bounds: {
				x: 99,
				y: 299,
				w: 202,
				h: 42
			},
			clicked: functionData.toggleColorblind
		},
		{
			path: function (ctx) {
				ctx.rect(500, 300, 200, 40);
			},
			bounds: {
				x: 499,
				y: 299,
				w: 202,
				h: 42
			},
			clicked: functionData.mainHub
		},
		{
			path: function (ctx) {
				ctx.rect(220, 400, 160, 40);
			},
			bounds: {
				x: 219,
				y: 399,
				w: 162,
				h: 42
			},
			clicked: functionData.importData
		},
		{
			path: function (ctx) {
				ctx.rect(420, 400, 160, 40);
			},
			bounds: {
				x: 419,
				y: 399,
				w: 162,
				h: 42
			},
			clicked: functionData.exportData
		},
	],
	//Tree
	[],
	//Donate
	[{
			path: function (ctx) {
				ctx.rect(330, 450, 140, 40);
			},
			bounds: {
				x: 329,
				y: 449,
				w: 142,
				h: 42
			},
			clicked: functionData.tabSwitch,
			arg1: 0,
		},
		{
			path: function (ctx) {
				ctx.rect(230, 350, 140, 40);
			},
			bounds: {
				x: 229,
				y: 349,
				w: 142,
				h: 42
			},
			clicked: functionData.patreonLink
		},
		{
			path: function (ctx) {
				ctx.rect(430, 350, 140, 40);
			},
			bounds: {
				x: 429,
				y: 349,
				w: 142,
				h: 42
			},
			clicked: functionData.paypalLink
		},
	],
	[],
	[],
	[],
	[],
	[],
	[],
	[]
];

function saveData() {
	for (var tankElement in dynamicSaveData.elementalTanks) {
		dynamicSaveData.elementalTanks[tankElement].amount = dynamicData.elementalTanks[tankElement].amount;
	}
	for (var i = 0; i < dynamicSaveData.conversionMachines.length; i++) {
		for (var machineTank in dynamicSaveData.conversionMachines[i]) {
			for (var property in dynamicSaveData.conversionMachines[i][machineTank]) {
				dynamicSaveData.conversionMachines[i][machineTank][property] = dynamicData.conversionMachines[i][machineTank][property];
			}
		}
	}
	for (var i = 0; i < dynamicSaveData.utilityMachines.length; i++) {
		for (var j = 0; j < dynamicSaveData.utilityMachines[i].tanks.length; j++) {
			for (var property in dynamicSaveData.utilityMachines[i].tanks[j]) {
				dynamicSaveData.utilityMachines[i].tanks[j][property] = dynamicData.utilityMachines[i].tanks[j][property];
			}
		}
	}
	dynamicSaveData.golems = dynamicData.golems;
	dynamicSaveData.upgradesBought = dynamicData.upgradesBought;
	dynamicSaveData.visibleUpgrades = dynamicData.visibleUpgrades;

	permanentSaveData.lore.obtained = dynamicData.lore.obtained;

	dynamicSaveData.softResetEnabled = dynamicData.softResetEnabled;

	localStorage.setItem("dynamicSaveData", JSON.stringify(dynamicSaveData));
	localStorage.setItem("permanentSaveData", JSON.stringify(permanentSaveData));
}
var achievementsVersion;

function loadData(data) {
	if (!localStorage.getItem("dynamicSaveData")) {
		lore.addLore("start0");
		softResetEnabled = true;
		return;
	}
	dynamicSaveData = JSON.parse(localStorage.getItem("dynamicSaveData"));
	permanentSaveData = JSON.parse(localStorage.getItem("permanentSaveData"));

	if (dynamicSaveData.softResetEnabled) {
		dynamicSaveData.softResetEnabled = false;
		softResetEnabled = true;
		return;
	}
	for (var i = 0; i < permanentSaveData.lore.obtained.length; i++) {
		lore.addLore(permanentSaveData.lore.obtained[i]);
	}
	for (var upgradeID in dynamicSaveData.upgradesBought) {
		boughtUpgrade(null, upgradeID, true);
	}
	for (var i = 0; i < dynamicSaveData.visibleUpgrades.length; i++) {
		addUpgrade(dynamicSaveData.visibleUpgrades[i]);
	}
	dynamicData.golems = dynamicSaveData.golems;

	for (var tankElement in dynamicSaveData.elementalTanks) {
		dynamicData.elementalTanks[tankElement].amount = dynamicSaveData.elementalTanks[tankElement].amount;
	}
	for (var i = 0; i < dynamicSaveData.conversionMachines.length; i++) {
		for (var machineTank in dynamicSaveData.conversionMachines[i]) {
			for (var property in dynamicSaveData.conversionMachines[i][machineTank]) {
				dynamicData.conversionMachines[i][machineTank][property] = dynamicSaveData.conversionMachines[i][machineTank][property];
			}
		}
	}
	for (var i = 0; i < dynamicSaveData.utilityMachines.length; i++) {
		for (var j = 0; j < dynamicSaveData.utilityMachines[i].tanks.length; j++) {
			for (var property in dynamicSaveData.utilityMachines[i].tanks[j]) {
				dynamicData.utilityMachines[i].tanks[j][property] = dynamicSaveData.utilityMachines[i].tanks[j][property];
			}
		}
	}
}

function saveDataToCode() {
	return btoa(JSON.stringify({
		"permanent": permanentSaveData,
		"dynamic": dynamicSaveData
	}));
}

function resetData() {
	if (confirm("Are you sure? It'll wipe everything in the current run.")) {
		tempData = JSON.parse(backupTempData);
		dynamicData = JSON.parse(backupDynamicData);
		dynamicSaveData = JSON.parse(backupDynamicSaveData);
		setup();
	}
}

function clearData() {
	tempData = JSON.parse(backupTempData);
	dynamicData = JSON.parse(backupDynamicData);
	dynamicSaveData = JSON.parse(backupDynamicSaveData);
	permanentSaveData = JSON.parse(backupPermamentSaveData);
	localStorage.setItem("dynamicSaveData", "");
	localStorage.setItem("permanentSaveData", "");
	setup();
}

function versionFixer(data) {
	switch (data.version) {
		case 2.90:
			return false;
			break;
	}
	return true;
}

if (localStorage.getItem("dynamicSaveData")) {
	//clearData();
}
setup();
requestAnimationFrame(loop);
