'use strict';

exports.BattlePokedex = {

    torterra: {
        inherit: true,
        types: ["Grass", "Rock"],
    },
    absol: {
        inherit: true,
        types: ["Dark", "Fairy"],
    },
    absolmega: {
        inherit: true,
        types: ["Dark", "Fairy"],
    },
    blissey: {
        inherit: true,
        types: ["Normal", "Fairy"],
    },
    cresselia: {
        inherit: true,
        types: ["Psychic", "Fairy"],
    },
    samurott: {
        inherit: true,
        types: ["Water", "Fighting"],
    },
    musharna: {
        inherit: true,
        types: ["Psychic", "Fairy"],
    },
    spritzee: {
        inherit: true,
        types: ["Fairy", "Poison"],
    },
    aromatisse: {
        inherit: true,
        types: ["Fairy", "Poison"],
    },
    stakataka: {
        inherit: true,
        types: ["Ghost", "Steel"],
    },
    staraptor: {
        inherit: true,
        types: ["Fighting", "Flying"],
    },
	misdreavus: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	mismagius: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	yanmega: {
		inherit: true,
		types: ["Bug", "Dragon"],
	},
	goodra: {
		inherit: true,
		types: ["Dragon", "Poison"],
	},
	xurkitree: {
		inherit: true,
		types: ["Electric", "Grass"],
	},
	servine: {
		inherit: true,
		types: ["Grass", "Dragon"],
	},
	serperior: {
		inherit: true,
		types: ["Grass", "Dragon"],
	},
	parasect: {
		inherit: true,
		types: ["Bug", "Ghost"],
		abilities: {0: "Effect Spore", 1: "Cursed Body", H: "Prankster"},
	},
	mawile: {
		inherit: true,
		types: ["Dark", "Fairy"],
	},
	mawilemega: {
		inherit: true,
		types: ["Dark", "Fairy"],
	},
	vespiquen: {
		inherit: true,
		types: ["Bug", "Poison"],
		abilities: {0: "Unnerve", 1: "Poison Point", H: "Intimidate"},
	},
	lugia: {
		inherit: true,
		types: ["Water", "Dragon"],
	},
	rotomfan: {
		inherit: true,
		types: ["Electric", "Steel"],
	},
	granbull: {
		inherit: true,
		types: ["Fairy", "Dark"],
		abilities: {0: "Intimidate", 1: "Strong Jaw", H: "Rattled"},
	},
	celebi: {
		inherit: true,
		types: ["Grass", "Fairy"],
	},
	jirachi: {
		inherit: true,
		types: ["Steel", "Fairy"],
	},
	manaphy: {
		inherit: true,
		types: ["Water", "Fairy"],
	},
	phione: {
		inherit: true,
		types: ["Water", "Fairy"],
	},
	victini: {
		inherit: true,
		types: ["Fire", "Fairy"],
	},
	lycanroc: {
		inherit: true,
		types: ["Rock", "Normal"],
		abilities: {0: "Rock Head", 1: "Sand Rush", H: "Adaptability"},
	},
	lycanrocmidnight: {
		inherit: true,
		types: ["Rock", "Dark"],
		abilities: {0: "Keen Eye", 1: "Obstinacy", H: "Adaptability"},
	},
	lycanrocdusk: {
		inherit: true,
		types: ["Rock", "Fire"],
		abilities: {0: "Tough Claws", 1: "Technician", H: "Adaptability"},
	},
	solgaleo: {
		inherit: true,
		types: ["Steel", "Fire"],
		abilities: {0: "Full Metal Body", H: "Drought"},
	},
	lunala: {
		inherit: true,
		types: ["Ghost", "Fairy"],
		abilities: {0: "Shadow Shield", H: "Shadow Surge"},
	},
	necrozma: {
		inherit: true,
		types: ["Psychic", "Dark"],
		abilities: {0: "Prism Armor", H: "Magic Bounce"},
	},
	necrozmaduskmane: {
		inherit: true,
		types: ["Psychic", "Steel"],
		abilities: {0: "Prism Armor", H: "Full Metal Body"},
	},
	necrozmadawnwings: {
		inherit: true,
		types: ["Dark", "Ghost"],
		abilities: {0: "Prism Armor", H: "Shadow Shield"},
	},
	milotic: {
		inherit: true,
		types: ["Water", "Fairy"],
		abilities: {0: "Multiscale", 1: "Competitive", H: "Soul-Heart"},
	},
	growlithe: {
		inherit: true,
		types: ["Fire", "Normal"],
	},
	arcanine: {
		inherit: true,
		types: ["Fire", "Normal"],
	},
	slaking: {
		inherit: true,
		abilities: {0: "Truant", H: "Klutz"},
	},
	trapinch: {
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Hyper Cutter", 1: "Sand Stream", H: "Arena Trap"},
	},
	vibrava: {
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Levitate", 1: "Sand Stream", H: "Tinted Lens"},
	},
	flygon: {
		inherit: true,
		types: ["Ground", "Bug"],
		abilities: {0: "Levitate", 1: "Sand Stream", H: "Tinted Lens"},
	},
	remoraid: {
		inherit: true,
		types: ["Water"],
		abilities: {0: "Hustle", 1: "Sniper", H: "Mega Launcher"},
	},
	octillery: {
		inherit: true,
		types: ["Water", "Fire"],
		abilities: {0: "Protean", 1: "Regenerator", H: "Mega Launcher"},
	},
    deerlingwinter: {
        inherit: true,
        types: ["Grass", "Ice"],
        abilities: {0: "Slush Rush", 1: "Sap Sipper", H: "Snow Warning"},
    },
    deerlingsummer: {
        inherit: true,
        types: ["Grass", "Fire"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Drought"},
    },
    deerling: {
        inherit: true,
        types: ["Grass", "Fairy"],
        abilities: {0: "Surge Surfer", 1: "Sap Sipper", H: "Misty Surge"},
    },
    deerlingautumn: {
        inherit: true,
        types: ["Grass", "Ghost"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Shadow Surge"},
    },
    sawsbuckwinter: {
        inherit: true,
        types: ["Grass", "Ice"],
        abilities: {0: "Slush Rush", 1: "Sap Sipper", H: "Snow Warning"},
    },
    sawsbucksummer: {
        inherit: true,
        types: ["Grass", "Fire"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Drought"},
    },
    sawsbuck: {
        inherit: true,
        types: ["Grass", "Fairy"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Misty Surge"},
    },
    sawsbuckautumn: {
        inherit: true,
        types: ["Grass", "Ghost"],
        abilities: {0: "Chrolophyll", 1: "Sap Sipper", H: "Shadow Surge"},
    },
	oricorio: {
      inherit: true,
		types: ["Fire", "Flying"],
		abilities: {0: "Dancer", H: "Serene Grace"},
	},
	oricoriopompom: {
      inherit: true,
		types: ["Electric", "Flying"],
		abilities: {0: "Dancer", H: "Serene Grace"},
	},
	oricoriopau: {
      inherit: true,
		types: ["Psychic", "Flying"],
		abilities: {0: "Dancer", H: "Serene Grace"},
	},
	oricoriosensu: {
      inherit: true,
		types: ["Ghost", "Flying"],
		abilities: {0: "Dancer", H: "Serene Grace"},
	},
	audinomega: {
      inherit: true,
		types: ["Normal", "Fairy"],
		abilities: {0: "Magic Healing"},
	},
	fennekin: {
      inherit: true,
		types: ["Fire"],
      abilities: {0: "Blaze", H: "Magic Healing"},
	},
	braixen: {
      inherit: true,
		types: ["Fire"],
      abilities: {0: "Blaze", H: "Magic Healing"},
	},
	delphox: {
      inherit: true,
		types: ["Fire", "Psychic"],
      abilities: {0: "Blaze", H: "Magic Healing"},
	},
	hoopa: {
      inherit: true,
		types: ["Psychic", "Ghost"],
      abilities: {0: "Magician", H: "Magic Healing"},
	},
	cresselia: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	chingling: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	chimecho: {
		inherit: true,
		types: ["Psychic"],
		abilities: {0: "Levitate", H: "Magic Healing"},
	},
	sigilyph: {
		inherit: true,
		types: ["Psychic", "Flying"],
      abilities: {0: "Magic Healing", 1: "Magic Guard", H: "Tinted Lens"},
	},
	haunter: {
		inherit: true,
		types: ["Ghost", "Poison"],
		abilities: {0: "Levitate", H: "Ethereal Fist"},
	},
	gengar: {
		inherit: true,
		types: ["Ghost", "Poison"],
		abilities: {0: "Cursed Body", H: "Ethereal Fist"},
	},
	solosis: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Ethereal Fist", 1: "Magic Guard", H: "Regenerator"},
	},
	duosion: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Ethereal Fist", 1: "Magic Guard", H: "Regenerator"},
	},
	reuniclus: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Ethereal Fist", 1: "Magic Guard", H: "Regenerator"},
	},
	alakazam: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Synchronize", 1: "Ethereal Fist", H: "Magic Guard"},
	},
	alakazammega: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Ethereal Fist"},
	},
	dusknoir: {
		inherit: true,
		types: ["Ghost"],
      abilities: {0: "Pressure", 1: "Ethereal Fist", H: "Frisk"},
	},
	shaymin: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Natural Cure", H: "Dispersal"},
	},
	sunkern: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Chlorophyll", 1: "Solar Power", H: "Dispersal"},
	},
	sunflora: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Drought", 1: "Solar Power", H: "Dispersal"},
	},
	bulbasaur: {
		inherit: true,
		types: ["Grass", "Poison"],
      abilities: {0: "Overgrow", H: "Dispersal"},
	},
	ivysaur: {
		inherit: true,
		types: ["Grass", "Poison"],
      abilities: {0: "Overgrow", H: "Dispersal"},
	},
	venusaur: {
		inherit: true,
		types: ["Grass", "Poison"],
      abilities: {0: "Overgrow", H: "Dispersal"},
	},
	trevenant: {
		inherit: true,
		types: ["Ghost", "Grass"],
      abilities: {0: "Natural Cure", 1: "Dispersal", H: "Harvest"},
	},
	cinccino: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Cute Charm", 1: "Housekeeping", H: "Skill Link"},
	},
	jirachi: {
		inherit: true,
		types: ["Steel", "Psychic"],
      abilities: {0: "Serene Grace", H: "Housekeeping"},
	},
	chansey: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Natural Cure", 1: "Housekeeping", H: "Healer"},
	},
	blissey: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Natural Cure", 1: "Housekeeping", H: "Healer"},
	},
	delcatty: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Cute Charm", 1: "Normalize", H: "Housekeeping"},
	},
	wigglytuff: {
		inherit: true,
		types: ["Normal", "Fairy"],
      abilities: {0: "Cute Charm", 1: "Competitive", H: "Housekeeping"},
	},
	malamar: {
		inherit: true,
		types: ["Dark", "Psychic"],
      abilities: {0: "Suction Cups", 1: "Contrary", H: "Mind Trick"},
	},
	litwick: {
		inherit: true,
		types: ["Ghost", "Fire"],
      abilities: {0: "Flash Fire", 1: "Mind Trick", H: "Infiltrator"},
	},
	lampent: {
		inherit: true,
		types: ["Ghost", "Fire"],
      abilities: {0: "Flash Fire", 1: "Mind Trick", H: "Infiltrator"},
	},
	chandelure: {
		inherit: true,
		types: ["Ghost", "Fire"],
      abilities: {0: "Flash Fire", 1: "Mind Trick", H: "Infiltrator"},
	},
	hypno: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Insomnia", 1: "Forewarn", H: "Mind Trick"},
	},
	gallade: {
		inherit: true,
		types: ["Psychic", "Fighting"],
      abilities: {0: "Knight's Blade", 1: "Justified", H: "Guard Up"},
	},
	gallademega: {
		inherit: true,
		types: ["Psychic", "Fighting"],
      abilities: {0: "Knight's Blade"},
	},
	oshawott: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Torrent", 1: "Knight's Blade", H: "Shell Armor"},
	},
	dewott: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Torrent", 1: "Knight's Blade", H: "Shell Armor"},
	},
	samurott: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Torrent", 1: "Knight's Blade", H: "Shell Armor"},
	},
	honedge: {
		inherit: true,
		types: ["Steel", "Ghost"],
      abilities: {0: "No Guard", 1: "Knight's Blade", H: "Guard Up"},
	},
	doublade: {
		inherit: true,
		types: ["Steel", "Ghost"],
      abilities: {0: "No Guard", 1: "Knight's Blade", H: "Guard Up"},
	},
	escavalier: {
		inherit: true,
		types: ["Bug", "Steel"],
      abilities: {0: "Guard Up", 1: "Shell Armor", H: "Knight's Blade"},
	},
	pawniard: {
		inherit: true,
		types: ["Dark", "Steel"],
      abilities: {0: "Defiant", 1: "Knight's Blade", H: "Pressure"},
	},
	bisharp: {
		inherit: true,
		types: ["Dark", "Steel"],
      abilities: {0: "Defiant", 1: "Knight's Blade", H: "Pressure"},
	},
	tornadus: {
		inherit: true,
		types: ["Flying"],
      abilities: {0: "Prankster", 1: "Forecast", H: "Regenerator"},
	},
	maractus: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Water Absorb", 1: "Chlorophyll", H: "Forecast"},
	},
	celebi: {
		inherit: true,
		types: ["Psychic", "Grass"],
      abilities: {0: "Natural Cure", H: "Time Warp"},
	},
	dialga: {
		inherit: true,
		types: ["Steel", "Dragon"],
      abilities: {0: "Pressure", 1: "Infuriation", H: "Time Warp"},
	},
	baltoy: {
		inherit: true,
		types: ["Ground", "Psychic"],
      abilities: {0: "Levitate", H: "Time Warp"},
	},
	claydol: {
		inherit: true,
		types: ["Ground", "Psychic"],
      abilities: {0: "Levitate", H: "Time Warp"},
	},
	elgyem: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Time Warp", 1: "Synchronize", H: "Analytic"},
	},
	beheeyem: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Time Warp", 1: "Synchronize", H: "Analytic"},
	},
	natu: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Synchronize", 1: "Time Warp", H: "Magic Bounce"},
	},
	xatu: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Synchronize", 1: "Time Warp", H: "Magic Bounce"},
	},
	munna: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Time Warp", 1: "Synchronize", H: "Telepathy"},
	},
	musharna: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Time Warp", 1: "Synchronize", H: "Telepathy"},
	},
	gulpin: {
		inherit: true,
		types: ["Poison"],
      abilities: {0: "Liquid Ooze", 1: "Corrosion", H: "Gluttony"},
	},
	swalot: {
		inherit: true,
		types: ["Poison"],
      abilities: {0: "Liquid Ooze", 1: "Corrosion", H: "Gluttony"},
	},
	grimer: {
		inherit: true,
		types: ["Poison"],
      abilities: {0: "Stench", 1: "Corrosion", H: "Poison Touch"},
	},
	muk: {
		inherit: true,
		types: ["Poison"],
      abilities: {0: "Stench", 1: "Corrosion", H: "Poison Touch"},
	},
	skrelp: {
		inherit: true,
		types: ["Poison", "Water"],
      abilities: {0: "Corrosion", 1: "Poison Touch", H: "Adaptability"},
	},
	dragalge: {
		inherit: true,
		types: ["Poison", "Dragon"],
      abilities: {0: "Corrosion", 1: "Poison Touch", H: "Adaptability"},
	},
	drifblim: {
		inherit: true,
		types: ["Ghost", "Flying"],
      abilities: {0: "Aftermath", 1: "Air Stream", H: "Flare Boost"},
	},
	altaria: {
		inherit: true,
		types: ["Dragon", "Flying"],
      abilities: {0: "Natural Cure", 1: "Air Stream", H: "Cloud Nine"},
	},
	swanna: {
		inherit: true,
		types: ["Water", "Flying"],
      abilities: {0: "Air Stream", 1: "Big Pecks", H: "Hydration"},
	},
	unfezant: {
		inherit: true,
		types: ["Normal", "Flying"],
      abilities: {0: "Big Pecks", 1: "Air Stream", H: "Rivalry"},
	},
	shelmet: {
		inherit: true,
		types: ["Bug"],
      abilities: {0: "Guard Up", 1: "Shell Armor", H: "Overcoat"},
	},
	chespin: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Overgrow", 1: "Guard Up", H: "Bulletproof"},
	},
	quilladin: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Overgrow", 1: "Guard Up", H: "Bulletproof"},
	},
	chesnaught: {
		inherit: true,
		types: ["Grass", "Fighting"],
      abilities: {0: "Overgrow", 1: "Guard Up", H: "Bulletproof"},
	},
	metapod: {
		inherit: true,
		types: ["Bug"],
      abilities: {0: "Shed Skin", H: "Guard Up"},
	},
	kakuna: {
		inherit: true,
		types: ["Bug", "Poison"],
      abilities: {0: "Shed Skin", H: "Guard Up"},
	},
	silcoon: {
		inherit: true,
		types: ["Bug"],
      abilities: {0: "Shed Skin", H: "Guard Up"},
	},
	cascoon: {
		inherit: true,
		types: ["Bug"],
      abilities: {0: "Shed Skin", H: "Guard Up"},
	},
	swadloon: {
		inherit: true,
		types: ["Bug", "Grass"],
      abilities: {0: "Leaf Guard", 1: "Chlorophyll", H: "Guard Up"},
	},
	spewpa: {
		inherit: true,
		types: ["Bug"],
      abilities: {0: "Shed Skin", 1: "Friend Guard", H: "Guard Up"},
	},
	hitmonchan: {
		inherit: true,
		types: ["Fighting"],
      abilities: {0: "Guard Up", 1: "Iron Fist", H: "Inner Focus"},
	},
	burmy: {
		inherit: true,
		types: ["Bug"],
      abilities: {0: "Shed Skin", 1: "Guard Up", H: "Overcoat"},
	},
	burmysandy: {
		inherit: true,
		types: ["Bug"],
      abilities: {0: "Shed Skin", 1: "Guard Up", H: "Overcoat"},
	},
	burmytrash: {
		inherit: true,
		types: ["Bug"],
      abilities: {0: "Shed Skin", 1: "Guard Up", H: "Overcoat"},
	},
	wormadam: {
		inherit: true,
		types: ["Bug", "Grass"],
      abilities: {0: "Anticipation", 1: "Guard Up", H: "Overcoat"},
	},
	wormadamsandy: {
		inherit: true,
		types: ["Bug", "Ground"],
      abilities: {0: "Anticipation", 1: "Guard Up", H: "Overcoat"},
	},
	wormadamtrash: {
		inherit: true,
		types: ["Bug", "Steel"],
      abilities: {0: "Anticipation", 1: "Guard Up", H: "Overcoat"},
	},
	mothim: {
		inherit: true,
		types: ["Bug", "Flying"],
      abilities: {0: "Swarm", 1: "Guard Up", H: "Tinted Lens"},
	},
	gardevoir: {
		inherit: true,
		types: ["Psychic", "Fairy"],
      abilities: {0: "Synchronize", 1: "Perseverance", H: "Guard Up"},
	},
	golisopod: {
		inherit: true,
		types: ["Bug", "Water"],
      abilities: {0: "Emergency Exit", H: "Guard Up"},
	},
	jangmoo: {
		inherit: true,
		types: ["Dragon"],
      abilities: {0: "Bulletproof", 1: "Soundproof", H: "Scrappy"},
	},
	hakamoo: {
		inherit: true,
		types: ["Dragon", "Fighting"],
      abilities: {0: "Bulletproof", 1: "Soundproof", H: "Scrappy"},
	},
	kommoo: {
		inherit: true,
		types: ["Dragon", "Fighting"],
      abilities: {0: "Bulletproof", 1: "Soundproof", H: "Scrappy"},
	},
	sandile: {
		inherit: true,
		types: ["Ground", "Dark"],
      abilities: {0: "Intimidate", 1: "Moxie", H: "Scrappy"},
	},
	krokorok: {
		inherit: true,
		types: ["Ground", "Dark"],
      abilities: {0: "Intimidate", 1: "Moxie", H: "Scrappy"},
	},
	krookodile: {
		inherit: true,
		types: ["Ground", "Dark"],
      abilities: {0: "Intimidate", 1: "Moxie", H: "Scrappy"},
	},
	cubone: {
		inherit: true,
		types: ["Ground"],
      abilities: {0: "Rock Head", 1: "Scrappy", H: "Battle Armor"},
	},
	marowak: {
		inherit: true,
		types: ["Ground"],
      abilities: {0: "Rock Head", 1: "Scrappy", H: "Battle Armor"},
	},
	doduo: {
		inherit: true,
		types: ["Normal", "Flying"],
      abilities: {0: "Run Away", 1: "Scrappy", H: "Sole Caliber"},
	},
	dodrio: {
		inherit: true,
		types: ["Normal", "Flying"],
      abilities: {0: "Run Away", 1: "Scrappy", H: "Sole Caliber"},
	},
	pichu: {
		inherit: true,
		types: ["Electric"],
      abilities: {0: "Static", 1: "Scrappy", H: "Lightning Rod"},
	},
	pikachu: {
		inherit: true,
		types: ["Electric"],
      abilities: {0: "Static", 1: "Scrappy", H: "Lightning Rod"},
	},
	raichu: {
		inherit: true,
		types: ["Electric"],
      abilities: {0: "Static", 1: "Scrappy", H: "Lightning Rod"},
	},
	deino: {
		inherit: true,
		types: ["Dark", "Dragon"],
      abilities: {0: "Hustle", H: "Scrappy"},
	},
	zweilous: {
		inherit: true,
		types: ["Dark", "Dragon"],
      abilities: {0: "Hustle", H: "Scrappy"},
	},
	hydreigon: {
		inherit: true,
		types: ["Dark", "Dragon"],
      abilities: {0: "Levitate", H: "Scrappy"},
	},
	palkia: {
		inherit: true,
		types: ["Water", "Dragon"],
      abilities: {0: "Pressure", H: "Infuriation"},
	},
	garchompmega: {
		inherit: true,
		types: ["Dragon", "Ground"],
      abilities: {0: "Sand Veil"},
	},
	tyrunt: {
		inherit: true,
		types: ["Rock", "Dragon"],
      abilities: {0: "Strong Jaw", H: "Anger Point"},
	},
	klink: {
		inherit: true,
		types: ["Steel"],
      abilities: {0: "Plus", 1: "Minus", H: "Technician"},
	},
	klang: {
		inherit: true,
		types: ["Steel"],
      abilities: {0: "Plus", 1: "Minus", H: "Technician"},
	},
	klinklang: {
		inherit: true,
		types: ["Steel"],
      abilities: {0: "Plus", 1: "Minus", H: "Technician"},
	},
	buizel: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Swift Swim", 1: "Technician", H: "Water Veil"},
	},
	floatzel: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Swift Swim", 1: "Technician", H: "Water Veil"},
	},
	beldum: {
		inherit: true,
		types: ["Steel", "Psychic"],
      abilities: {0: "Clear Body", 1: "Technician", H: "Light Metal"},
	},
	metang: {
		inherit: true,
		types: ["Steel", "Psychic"],
      abilities: {0: "Clear Body", 1: "Technician", H: "Light Metal"},
	},
	metagross: {
		inherit: true,
		types: ["Steel", "Psychic"],
      abilities: {0: "Clear Body", 1: "Technician", H: "Light Metal"},
	},
	meloetta: {
		inherit: true,
		types: ["Normal", "Psychic"],
      abilities: {0: "Serene Grace", H: "Technician"},
	},
	meloettapirouette: {
		inherit: true,
		types: ["Normal", "Fighting"],
      abilities: {0: "Serene Grace", H: "Technician"},
	},
	tauros: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Intimidate", 1: "Obstinacy", H: "Technician"},
	},
	braviary: {
		inherit: true,
		types: ["Normal", "Flying"],
      abilities: {0: "Obstinacy", 1: "Sheer Force", H: "Defiant"},
	},
	primeape: {
		inherit: true,
		types: ["Fighting"],
      abilities: {0: "Obstinacy", 1: "Anger Point", H: "Defiant"},
	},
	linoone: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Pickup", 1: "Obstinacy", H: "Quick Feet"},
	},
	mudbray: {
		inherit: true,
		types: ["Ground"],
      abilities: {0: "Own Tempo", 1: "Stamina", H: "Sole Caliber"},
	},
	mudsdale: {
		inherit: true,
		types: ["Ground"],
      abilities: {0: "Obstinacy", 1: "Stamina", H: "Sole Caliber"},
	},
	vigoroth: {
		inherit: true,
		types: ["Normal"],
      abilities: {0: "Vital Spirit", H: "Obstinacy"},
	},
	haxorus: {
		inherit: true,
		types: ["Dragon"],
      abilities: {0: "Rivalry", 1: "Obstinacy", H: "Unnerve"},
	},
	lucario: {
		inherit: true,
		types: ["Fighting", "Steel"],
      abilities: {0: "Obstinacy", 1: "Inner Focus", H: "Justified"},
	},
	darkrai: {
		inherit: true,
		types: ["Dark"],
      abilities: {0: "Bad Dreams", H: "Shadow Surge"},
	},
	spiritomb: {
		inherit: true,
		types: ["Ghost", "Dark"],
      abilities: {0: "Pressure", 1: "Shadow Surge", H: "Infiltrator"},
	},
	houndoommega: {
		inherit: true,
		types: ["Dark", "Fire"],
      abilities: {0: "Shadow Surge"},
	},
	wailmer: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Thick Fat", 1: "Liquid Voice", H: "Pressure"},
	},
	wailord: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Thick Fat", 1: "Liquid Voice", H: "Pressure"},
	},
	guzzlord: {
		inherit: true,
		types: ["Dark", "Dragon"],
      abilities: {0: "Beast Boost", H: "Thick Fat"},
	},
	golemalola: {
		inherit: true,
		types: ["Rock", "Electric"],
      abilities: {0: "Mega Launcher", 1: "Sturdy", H: "Galvanize"},
	},
	magmortar: {
		inherit: true,
		types: ["Fire"],
      abilities: {0: "Flame Body", 1: "Mega Launcher", H: "Vital Spirit"},
	},
	kingdra: {
		inherit: true,
		types: ["Water", "Dragon"],
      abilities: {0: "Swift Swim", 1: "Sniper", H: "Mega Launcher"},
	},
	genesect: {
		inherit: true,
		types: ["Bug", "Steel"],
      abilities: {0: "Download", H: "Mega Launcher"},
	},
	volcanion: {
		inherit: true,
		types: ["Fire", "Water"],
      abilities: {0: "Water Absorb", H: "Mega Launcher"},
	},
	lapras: {
		inherit: true,
		types: ["Water", "Ice"],
      abilities: {0: "Water Absorb", 1: "Thick Fat", H: "Liquid Voice"},
	},
	politoed: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Water Absorb", 1: "Liquid Voice", H: "Drizzle"},
	},
	tympole: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Liquid Voice", 1: "Hydration", H: "Water Absorb"},
	},
	palpitoad: {
		inherit: true,
		types: ["Water", "Ground"],
      abilities: {0: "Liquid Voice", 1: "Hydration", H: "Water Absorb"},
	},
	seismitoad: {
		inherit: true,
		types: ["Water", "Ground"],
      abilities: {0: "Liquid Voice", 1: "Poison Touch", H: "Water Absorb"},
	},
	vaporeon: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Water Absorb", 1: "Drizzle", H: "Liquid Voice"},
	},
	jolteon: {
		inherit: true,
		types: ["Electric"],
      abilities: {0: "Volt Absorb", 1: "Electric Surge", H: "Quick Feet"},
	},
	flareon: {
		inherit: true,
		types: ["Fire"],
      abilities: {0: "Flash Fire", 1: "Drought", H: "Guts"},
	},
	espeon: {
		inherit: true,
		types: ["Psychic"],
      abilities: {0: "Synchronize", 1: "Psychic Surge", H: "Magic Bounce"},
	},
	umbreon: {
		inherit: true,
		types: ["Dark"],
      abilities: {0: "Synchronize", 1: "Shadow Surge", H: "Inner Focus"},
	},
	leafeon: {
		inherit: true,
		types: ["Grass"],
      abilities: {0: "Leaf Guard", 1: "Grassy Surge", H: "Chlorophyll"},
	},
	glaceon: {
		inherit: true,
		types: ["Ice"],
      abilities: {0: "Snow Cloak", 1: "Snow Warning", H: "Ice Body"},
	},
	sylveon: {
		inherit: true,
		types: ["Fairy"],
      abilities: {0: "Cute Charm", 1: "Misty Surge", H: "Pixilate"},
	},
	gorebyss: {
		inherit: true,
		types: ["Water"],
      abilities: {0: "Swift Swim", 1: "Liquid Voice", H: "Hydration"},
	},
	slowbromega: {
		inherit: true,
		types: ["Water", "Psychic"],
      abilities: {0: "Drizzle"},
	},
	articuno: {
		inherit: true,
		types: ["Ice", "Flying"],
      abilities: {0: "Pressure", 1: "Snow Warning", H: "Snow Cloak"},
	},
	zapdos: {
		inherit: true,
		types: ["Electric", "Flying"],
      abilities: {0: "Pressure", 1: "Drizzle", H: "Static"},
	},
	moltres: {
		inherit: true,
		types: ["Fire", "Flying"],
      abilities: {0: "Pressure", 1: "Drought", H: "Flame Body"},
	},
	lugia: {
		inherit: true,
		types: ["Psychic", "Flying"],
      abilities: {0: "Pressure", 1: "Drizzle", H: "Multiscale"},
	},
};
