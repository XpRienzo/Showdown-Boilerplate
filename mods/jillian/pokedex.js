'use strict';

exports.BattlePokedex = {
  leafien: {
        num: 1000001,
        species: "Leafien",
        types: ["Grass"],
        baseStats: {hp: 38, atk: 32, def: 40, spa: 52, spd: 28, spe: 40},
        abilities: {0: "Overgrow", H: "Sap Sipper"},
        evos: ["branchion"],
	},
  branchion: {
        num: 1000002,
        species: "Branchion",
        types: ["Grass"],
        baseStats: {hp: 53, atk: 48, def: 60, spa: 55, spd: 43, spe: 50},
        abilities: {0: "Overgrow", H: "Sap Sipper"},
        evos: ["treenomian"],
        prevo: "branchion",
	},
  treenomian: {
        num: 1000003,
        species: "Treenomian",
        types: ["Grass", "Ground"],
        baseStats: {hp: 88, atk: 93, def: 110, spa: 70, spd: 98, spe: 76},
        abilities: {0: "Overgrow", H: "Sap Sipper"},
        evos: ["treenomian"],
        prevo: "branchion",
	},
  laviniou: {
        num: 1000004,
        species: "Laviniou",
        types: ["Fire"],
        baseStats: {hp: 30, atk: 50, def: 38, spa: 56, spd: 40, spe: 40},
        abilities: {0: "Blaze", H: "Sheer Force"},
        evos: ["marsminian"],
	},
  marsminian: {
        num: 1000005,
        species: "Marsminian",
        types: ["Fire","Steel"],
        baseStats: {hp: 70, atk: 76, def: 60, spa: 75, spd: 62, spe: 71},
        abilities: {0: "Blaze", H: "Sheer Force"},
        evos: ["volcanolion"],
        prevo: "laviniou",
	},
  volcanolion: {
        num: 1000006,
        species: "Volcanolion",
        types: ["Fire","Steel"],
        baseStats: {hp: 75, atk: 110, def: 80, spa: 105, spd: 73, spe: 99},
        abilities: {0: "Blaze", H: "Sheer Force"},
        prevo: "marsminian",
	},
   aquario: {
        num: 1000007,
        species: "Aquario",
        types: ["Water"],
        baseStats: {hp: 36, atk: 45, def: 28, spa: 75, spd: 65, spe: 34},
        abilities: {0: "Torrent", H: "Dry Skin"},
        evos: ["seamunian"],
	},
   seamunian: {
        num: 1000008,
        species: "Seamunian",
        types: ["Water"],
        baseStats: {hp: 59, atk: 72, def: 86, spa: 85, spd: 74, spe: 52},
       abilities: {0: "Torrent", H: "Dry Skin"},
        evos: ["poseidonion"],
        prevo: "aquario",
	},
   poseidonion: {
        num: 1000009,
        species: "Poseidonion",
        types: ["Water", "Electric"],
        baseStats: {hp: 86, atk: 103, def: 70, spa: 110, spd: 78, spe: 71},
        abilities: {0: "Torrent", H: "Dry Skin"},
        prevo: "seamunian",
	},
   avislon: {
        num: 1000010,
        species: "Avislon",
        types: ["Psychic", "Flying"],
        baseStats: {hp: 28, atk: 40, def: 19, spa: 25, spd: 68, spe: 65},
        abilities: {0: "Keen Eye", 1: "Big Pecks", H: "Aerilate"},
        evos: ["avislorion"],
	},
   avislorion: {
        num: 1000011,
        species: "Avislorion",
        types: ["Psychic", "Flying"],
        baseStats: {hp: 39, atk: 56, def: 38, spa: 40, spd: 75, spe: 78},
        abilities: {0: "Keen Eye", 1: "Big Pecks", H: "Aerilate"},
        evos: ["avissolorian"],
        prevo: "avislon",
        },
   avissolorian: {
        num: 1000012,
        species: "Avissolorian",
        types: ["Psychic", "Flying"],
        baseStats: {hp: 74, atk: 89, def: 64, spa: 71, spd: 110, spe: 112},
        abilities: {0: "Keen Eye", 1: "Big Pecks", H: "Aerilate"},
        prevo: "avislorion",
        },
   buglian: {
        num: 1000013,
        species: "Buglian",
        types: ["Bug"],
        baseStats: {hp: 22, atk: 11, def: 36, spa: 19, spd: 50, spe: 44},
        abilities: {0: "Shield Dust", 1: "Run Away", H: "Poison Point"},
        evos: ["cocoonian"],
        },
   cocoonian: {
        num: 1000014,
        species: "Cocoonian",
        types: ["Bug"],
        baseStats: {hp: 56, atk: 25, def: 70, spa: 21, spd: 68, spe: 56},
        abilities: {0: "Shed Skin", H: "Poison Point"},
        evos: ["butternian"],
        prevo: "buglian",
        },
   butternian: {
        num: 1000015,
        species: "Butternian",
        types: ["Bug", "Psychic"],
        baseStats: {hp: 82, atk: 65, def: 54, spa: 101, spd: 110, spe: 95},
        abilities: {0: "Titend Lens", H: "Adaptability"},
        prevo: "cocoonian",
        },
   menebrus: {
        num: 1000016,
        species: "Menebrus",
        types: ["Dark", "Electric"],
        baseStats: {hp: 28, atk: 45, def: 60, spa: 38, spd: 70, spe: 42},
        abilities: {0: "Prankster", 1: "Cold Blood", H: "Motor Drive"},
        evos: ["dillyabrus"],
        },
   dillyabrus: {
        num: 1000017,
        species: "Dillyabrus",
        types: ["Dark", "Electric"],
        baseStats: {hp: 65, atk: 49, def: 77, spa: 46, spd: 100, spe: 51},
        abilities: {0: "Prankster", 1: "Cold Blood", H: "Motor Drive"},
        evos: ["tenebrus"],
        prevo: "menebrus",
        },
   tenebrus: {
        num: 1000018,
        species: "Tenebrus",
        types: ["Dark", "Electric"],
        baseStats: {hp: 110, atk: 62, def: 121, spa: 59, spd: 130, spe: 70},
        abilities: {0: "Prankster", 1: "Cold Blood", H: "Motor Drive"},
        prevo: "dillyabrus",
        },
    caniki: {
        num: 1000019,
        species: "Caniki",
        types: ["Normal"],
        baseStats: {hp: 45, atk: 32, def: 60, spa: 25, spd: 41, spe: 66},
        abilities: {0: "Pickup", 1: "Strong Jaw", H: "Run Away"},
        evos: ["cabotieki"],
        },
    cabotieki: {
        num: 1000020,
        species: "Cabotieki",
        types: ["Normal", "Fighting"],
        baseStats: {hp: 65, atk: 70, def: 65, spa: 50, spd: 70, spe: 101},
        abilities: {0: "Pickup", 1: "Strong Jaw", H: "Run Away"},
        prevo: "caniki",
        },
    foxini: {
        num: 1000021,
        species: "Foxini",
        types: ["Fire", "Dark"],
        baseStats: {hp: 85, atk: 45, def: 60, spa: 70, spd: 35, spe: 110},
        abilities: {0: "Flash Fire", H: "Moxie"},
        evos: ["kyubini"],
        },
    kyubini: {
        num: 1000022,
        species: "Kyubini",
        types: ["Fire", "Dark"],
        baseStats: {hp: 115, atk: 75, def: 65, spa: 100, spd: 56, spe: 120},
        abilities: {0: "Flash Fire", H: "Moxie"},
        prevo: "foxini",
        },
    medusia: {
        num: 1000023,
        species: "Medusia",
        types: ["Poison", "Rock"],
        baseStats: {hp: 90, atk: 100, def: 56, spa: 110, spd: 70, spe: 80},
        abilities: {0: "Liquid Ooze", H: "Poison Point"},
        evos: ["Does Not Evolve"],
        },
    puncheon: {
        num: 1000024,
        species: "Puncheon",
        types: ["Fighting"],
        baseStats: {hp: 95, atk: 110, def: 65, spa: 65, spd: 130, spe: 60},
        abilities: {0: "Tough Claws", H: "Punchilate"},
        prevo: "eevee",
        },
    zephyreon: {
        num: 1000025,
        species: "Zephyreon",
        types: ["Flying"],
        baseStats: {hp: 65, atk: 65, def: 60, spa: 130, spd: 95, spe: 110},
        abilities: {0: "Gale Wings", H: "Defiant"},
        prevo: "eevee",
        },
    landineon: {
        num: 1000026,
        species: "Landineon",
        types: ["Ground"],
        baseStats: {hp: 130, atk: 110, def: 65, spa: 60, spd: 95, spe: 65},
        abilities: {0: "Sand Stream", H: "Landinate"},
        prevo: "eevee",
        },
    tombeon: {
        num: 1000027,
        species: "Tombeon",
        types: ["Ghost"],
        baseStats: {hp: 110, atk: 60, def: 130, spa: 95, spd: 65, spe: 65},
        abilities: {0: "Cursed Body", H: "Gates of Hell"},
        preevo: "eevee",
        },
    quetzaleon: {
        num: 1000028,
        species: "Quetzaleon",
        types: ["Dragon"],
        baseStats: {hp: 95, atk: 130, def: 60, spa: 65, spd: 65, spe: 110},
        abilities: {0: "Multiscale", H: "Predator"},
        prevo: "eevee",
        },
     lobotohm: {
         num: 1000029,
         species: "Lobotohm",
         types: ["Electric"],
         baseStats: {hp: 65, atk: 60, def: 39, spa: 85, spd: 48, spe: 75},
         abilities: {0: "Lighting Rod", H: "Magnet Pull"},
         evos: ["tegolohm"],
         },
     tegolohm: {
         num: 1000030,
         species: "Tegolohm",
         types: ["Electric", "Steel"],
         baseStats: {hp: 65, atk: 100, def: 64, spa: 98, spd: 69, spe: 110},
         abilities: {0: "Lighting Rod", 1: "Gear Force", H: "Magnet Pull"},
         prevo: "lobotohm",
         },
     lingerspeed: {
         num: 1000031,
         species: "Lingerspeed",
         types: ["Bug"],
         baseStats: {hp: 35, atk: 50, def: 28, spa: 34, spd: 41, spe: 106},
         abilities: {0: "Speed Boost", H: "Leadership"},
         evos: ["fingerspeed"],
         },
     fingerspeed: {
         num: 1000032,
         species: "Fingerspeed",
         types: ["Bug", "Dark"],
         baseStats: {hp: 35, atk: 102, def: 40, spa: 50, spd: 41, spe: 135},
         abilities: {0: "Speed Boost", H: "Leadership"},
         prevo: "lingerspeed",
         },
     medicura: {
         num: 1000033,
         species: "Medicura",
         types: ["Normal", "Fairy"],
         baseStats: {hp: 100, atk: 90, def: 75, spa: 110, spd: 90, spe: 38},
         abilities: {0: "Medicine"},
         evos: ["Does Not Evolve"],
         },
     lovelord: {
         num: 1000034,
         species: "Lovelord",
         types: ["Water", "Fairy"],
         baseStats: {hp: 63, atk: 70, def: 95, spa: 100, spd: 70, spe: 106},
         abilities: {0: "Swift Swim", H: "Hydration"},
         prevo: "luvdisc",
         },
     pimentio: {
         num: 1000035,
         species: "Pimentio",
         types: ["Grass", "Fire"],
         baseStats: {hp: 35, atk: 58, def: 60, spa: 45, spd: 52, spe: 85},
         abilities: {0: "Flash Fire", H: "Chlorophyll"},
         evos: ["arrabiatan"],
         },
     arrabiatan: {
         num: 1000036,
         species: "Arrabiatan",
         types: ["Grass", "Fire"],
         baseStats: {hp: 70, atk: 85, def: 90, spa: 105, spd: 65, spe: 98},
         abilities: {0: "Flash Fire", H: "Chlorophyll"},
         prevo: "pimentio",
         },
     munculu: {
         num: 1000037,
         species: "Munculu",
         types: ["Grass", "Dragon"],
         baseStats: {hp: 20, atk: 60, def: 25, spa: 70, spd: 45, spe: 80},
         abilities: {0: "Swift Swim", 1: "Sheer Force", H: "Dragon Force"},
         evos: ["lorinculus"],
         },
     lorinculus: {
         num: 1000038,
         species: "Lorinculus",
         types: ["Grass", "Dragon"],
         baseStats: {hp: 35, atk: 85, def: 45, spa: 90, spd: 55, spe: 110},
         abilities: {0: "Swift Swim", 1: "Sheer Force", H: "Dragon Force"},
         evos: ["dracunculus"],
         prevo: "munculu",
         },
     dracunculus: {
         num: 1000039,
         species: "Dracunculus",
         types: ["Grass", "Dragon"],
         baseStats: {hp: 70, atk: 140, def: 50, spa: 140, spd: 50, spe: 150},
         abilities: {0: "Swift Swim", 1: "Sheer Force", H: "Dragon Force"},
         prevo: "lorinculus",
         },
     celiantooth: {
         num: 1000040,
         species: "Celiantooth",
         types: ["Rock", "Fire"],
         baseStats: {hp: 60, atk: 80, def: 70, spa: 38, spd: 66, spe: 84},
         abilities: {0: "Rock Head", H: "Battle Armor"},
         evos: ["siciliantooth"],
         },
     siciliantooth: {
         num: 1000041,
         species: "Siciliantooth",
         types: ["Rock", "Fire"],
         baseStats: {hp: 90, atk: 110, def: 74, spa: 50, spd: 82, spe: 99},
         abilities: {0: "Rock Head", H: "Battle Armor"},
         prevo: "celiantooth",
         },
     doomiraptor: {
         num: 1000042,
         species: "Doomiraptor",
         types: ["Rock", "Ghost"],
         baseStats: {hp: 65, atk: 71, def: 78, spa: 62, spd: 65, spe: 59},
         abilities: {0: "Cursed Body", H: "Mummy"},
         evos: ["brachiodoom"],
         },
     brachiodoom: {
         num: 1000043,
         species: "Brachiodoom",
         types: ["Rock", "Ghost"],
         baseStats: {hp: 107, atk: 98, def: 105, spa: 85, spd: 90, spe: 46},
         abilities: {0: "Cursed Body", H: "Mummy"},
         prevo: "doomiraptor",
         },
     duniliar: {
         num: 1000044,
         species: "Duniliar",
         types: ["Ground"],
         baseStats: {hp: 65, atk: 45, def: 70, spa: 65, spd: 70, spe: 28},
         abilities: {0: "Sand Rush", 1: "Sand Stream", H: "Sand Force"},
         evos: ["duniliandinar"],
         },
    duniliandinar: {
         num: 1000045,
         species: "Duniliandinar",
         types: ["Ground"],
         baseStats: {hp: 100, atk: 80, def: 75, spa: 85, spd: 90, spe: 65},
         abilities: {0: "Sand Rush", 1: "Sand Stream", H: "Sand Force"},
         prevo: "duniliar",
         },
    helldragoon: {
         num: 1000046,
         species: "Helldragoon",
         types: ["Ghost", "Dragon"],
         baseStats: {hp: 98, atk: 124, def: 75, spa: 110, spd: 65, spe: 85},
         abilities: {0: "Fiendish Shield", H: "Telepathy"},
         evos: ["Does Not Evolve"],
         },
     heavendragoon: {
         num: 1000047,
         species: "Heavendragoon",
         types: ["Fairy", "Dragon"],
         baseStats: {hp: 98, atk: 110, def: 65, spa: 124, spd: 75, spe: 85},
         abilities: {0: "Heavenly Shield", H: "Telepathy"},
         evos: ["Does Not Evolve"],
         },
     chillifish: {
         num: 1000048,
         species: "Chillifish",
         types: ["Water", "Ice"],
         baseStats: {hp: 52, atk: 46, def: 70, spa: 52, spd: 60, spe: 36},
         abilities: {0: "Water Absorb", H: "Ice Body"},
         evos: ["icynifish"],
         },
     icynifish: {
         num: 1000049,
         species: "Icynifish",
         types: ["Water", "Ice"],
         baseStats: {hp: 67, atk: 71, def: 85, spa: 64, spd: 71, spe: 50},
         abilities: {0: "Water Absorb", H: "Ice Body"},
         evos: ["coldiafish"],
         prevo: "chillifish",
         },
     coldiafish: {
         num: 1000050,
         species: "Coldiafish",
         types: ["Water", "Ice"],
         baseStats: {hp: 82, atk: 97, def: 101, spa: 82, spd: 86, spe: 71},
         abilities: {0: "Water Absorb", H: "Ice Body"},
         prevo: "icynifish",
         },
     kittyrius: {
         num: 1000051,
         species: "Kittyrius",
         types: ["Fire", "Ghost"],
         baseStats: {hp: 35, atk: 61, def: 32, spa: 70, spd: 42, spe: 68},
         abilities: {0: "Flash Fire", 1: "Technician", H: "Insomnia"},
         evos: ["cerberinius"],
         },
     cerberinius: {
         num: 1000052,
         species: "Cerberinius",
         types: ["Fire", "Ghost"],
         baseStats: {hp: 70, atk: 100, def: 47, spa: 98, spd: 50, spe: 84},
         abilities: {0: "Flash Fire", 1: "Technician", H: "Insomnia"},
         prevo: "kittyrius",
         },
     venominous: {
         num: 1000053,
         species: "Venominous",
         types: ["Poison"],
         baseStats: {hp: 85, atk: 90, def: 115, spa: 101, spd: 68, spe: 101},
         abilities: {0: "Shed Skin", 1: "Liquid Ooze", H: "Poison Touch"},
         evos: ["Does Not Evolve"],
         },
     angelin: {
         num: 1000054,
         species: "Angelin",
         types: ["Fairy", "Flying"],
         baseStats: {hp: 38, atk: 36, def: 70, spa: 98, spd: 41, spe: 62},
         abilities: {0: "Pixilate", H: "Aerilate"},
         evos: ["archangelin", "darkangelin"],
         },
     archangelin: {
         num: 1000055,
         species: "Archangelin",
         types: ["Fairy", "Flying"],
         baseStats: {hp: 60, atk: 40, def: 75, spa: 117, spd: 62, spe: 84},
         abilities: {0: "Fairy Aura", H: "Aerilate"},
         prevo: "angelin",
         },
     darkangelin: {
         num: 1000056,
         species: "Darkangelin",
         types: ["Dark", "Flying"],
         baseStats: {hp: 60, atk: 117, def: 62, spa: 40, spd: 75, spe: 84},
         abilities: {0: "Dark Aura", H: "Aerilate"},
         prevo: "angelin",
         },
     tintinar: {
         num: 1000057,
         species: "Tintinar",
         types: ["Steel"],
         baseStats: {hp: 30, atk: 45, def: 36, spa: 70, spd: 52, spe: 25},
         abilities: {0: "Clear Body", H: "Levitate"},
         evos: ["hourglinar"],
         },
     hourglinar: {
         num: 1000058,
         species: "Hourglinar",
         types: ["Steel"],
         baseStats: {hp: 50, atk: 61, def: 48, spa: 78, spd: 65, spe: 40},
         abilities: {0: "Clear Body", H: "Levitate"},
         evos: ["clockinar"],
         prevo: "tintinar",
         },
     clockinar: {
         num: 1000059,
         species: "Clockinar",
         types: ["Steel"],
         baseStats: {hp: 75, atk: 79, def: 60, spa: 101, spd: 84, spe: 51},
         abilities: {0: "Clear Body", H: "Levitate"},
         prevo: "hourglinar",
         },
     emolgor: {
         num: 1000060,
         species: "Emolgor",
         types: ["Electric", "Flying"],
         baseStats: {hp: 65, atk: 90, def: 71, spa: 101, spd: 84, spe: 116},
         abilities: {0: "Static", H: "Motor Drive"},
         prevo: "emolga",
         },
     drapionord: {
         num: 1000061,
         species: "Drapionord",
         types: ["Poison", "Dark"],
         baseStats: {hp: 85, atk: 112, def: 124, spa: 60, spd: 85, spe: 103},
         abilities: {0: "Battle Armor", 1: "Sniper", H: "Keen Eye"},
         prevo: "drapion",
         },
     miniskhan: {
         num: 1000062,
         species: "Miniskhan",
         types: ["Normal"],
         baseStats: {hp: 62, atk: 68, def: 46, spa: 30, spd: 56, spe: 71},
         abilities: {0: "Early Bird", 1: "Scrappy", H: "Inner Focus"},
         evos: ["kangaskhan"],
         },
     athenie: {
         num: 1000063,
         species: "Athenie",
         types: ["Fairy"],
         baseStats: {hp: 100, atk: 100, def: 100, spa: 100, spd: 100, spe: 100},
         abilities: {0: "Goddess Aura"},
         evos: ["Does Not Evolve"],
         },
     hellmaster: {
         num: 1000064,
         species: "Hellmaster",
         types: ["Ghost", "Dark"],
         baseStats: {hp: 117, atk: 131, def: 98, spa: 123, spd: 107, spe: 104},
         abilities: {0: "Gates of Hell"},
         evos: ["Does Not Evolve"],
         },
     heavenmaster: {
         num: 1000065,
         species: "Heavenmaster",
         types: ["Fairy", "Grass"],
         baseStats: {hp: 117, atk: 123, def: 107, spa: 131, spd: 98, spe: 104},
         abilities: {0: "Gates of Heaven"},
         evos: ["Does Not Evolve"],
         },
     venusidess: {
         num: 1000066,
         species: "Venusidess",
         types: ["Normal"],
         baseStats: {hp: 101, atk: 110, def: 78, spa: 110, spd: 71, spe: 110},
         abilities: {0: "Cute Charm", H: "Pressure"},
         evos: ["Does Not Evolve"],
         },
     chronogod: {
         num: 1000067,
         species: "Chronogod",
         types: ["Psychic","Steel"],
         baseStats: {hp: 86, atk: 137, def: 65, spa: 95, spd: 102, spe: 105},
         abilities: {0: "Technician", H: "Regenerator"},
         evos: ["Does Not Evolve"],
         },
     gaiadiness: {
         num: 1000068,
         species: "Gaiadiness",
         types: ["Ground","Grass"],
         baseStats: {hp: 101, atk: 40, def: 145, spa: 59, spd: 170, spe: 65},
         abilities: {0: "Poison Heal", H: "Magic Guard"},
         evos: ["Does Not Evolve"],
         },
     zeusidian: {
         num: 1000069,
         species: "Zeusidian",
         types: ["Electric","Flying"],
         baseStats: {hp: 90, atk: 105, def: 85, spa: 140, spd: 65, spe: 110},
         abilities: {0: "Galvanize", H: "Aerilate"},
         evos: ["Does Not Evolve"],
         },
     heracladian: {
         num: 1000070,
         species: "Heracladian",
         types: ["Fighting","Steel"],
         baseStats: {hp: 105, atk: 140, def: 100, spa: 50, spd: 101, spe: 105},
         abilities: {0: "Iron Fist", 1: "Unburden", H: "Reckless"},
         evos: ["Does Not Evolve"],
         },
     quagsire: {
		inherit: true,
		abilities: {0: "Water Absorb", H: "Unaware"},
		otherFormes: ["quagsiremega"],
         },
     quagsiremega: {
		num: 195,
		species: "Quagsire-Mega",
		baseSpecies: "Quagsire",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Ground"],
		baseStats: {hp: 95, atk: 125, def: 105, spa: 65, spd: 95, spe: 45},
		abilities: {0: "Landinate"},
         },
     luxray: {
		inherit: true,
		abilities: {0: "Rivalry", 1: "Intimidate", H: "Guts"},
		otherFormes: ["luxraymegaa" , "luxraymegab"],
         },
     luxraymegaa: {
		num: 405,
		species: "Luxray-Mega-A",
		baseSpecies: "Luxray",
		forme: "Mega",
		formeLetter: "M",
		types: ["Electric", "Fighting"],
		baseStats: {hp: 80, atk: 140, def: 99, spa: 105, spd: 89, spe: 110},
		abilities: {0: "Justified"},
         },
     luxraymegab: {
		num: 405,
		species: "Luxray-Mega-B",
		baseSpecies: "Luxray",
		forme: "Mega",
		formeLetter: "M",
		types: ["Electric", "Dark"],
		baseStats: {hp: 80, atk: 160, def: 79, spa: 95, spd: 109, spe: 100},
		abilities: {0: "Strong Jaw"},
         },
     arcanine: {
		inherit: true,
		abilities: {0: "Intimidate", 1: "Flash Fire", H: "Justified"},
		otherFormes: ["arcaninemega"],
         },
     arcaninemega: {
		num: 59,
		species: "Arcanine-Mega",
		baseSpecies: "Arcanine",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Dragon"],
		baseStats: {hp: 90, atk: 140, def: 100, spa: 80, spd: 120, spe: 125},
		abilities: {0: "Fur Coat"},
         },
     haxorus: {
		inherit: true,
		abilities: {0: "Rivalry", 1: "Mold Breaker", H: "Unnerve"},
		otherFormes: ["haxorusmega"],
        },
     haxorusmega: {
		num: 612,
		species: "Haxorus-Mega",
		baseSpecies: "Haxorus",
		forme: "Mega",
		formeLetter: "M",
		types: ["Dragon"],
		baseStats: {hp: 76, atk: 157, def: 120, spa: 80, spd: 90, spe: 127},
		abilities: {0: "Dragon Force"},
        },
     mienshao: {
		inherit: true,
		abilities: {0: "Inner Focus", 1: "Regenerator", H: "Reckless"},
		otherFormes: ["mienshaomega"],
        },
     mienshaomega: {
		num: 620,
		species: "Mienshao-Mega",
		baseSpecies: "Mienshao",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fighting", "Fairy"],
		baseStats: {hp: 65, atk: 145, def: 90, spa: 95, spd: 80, spe: 135},
		abilities: {0: "Moxie"},
        },
     primeape: {
		inherit: true,
		abilities: {0: "Vital Spirit", 1: "Anger Point", H: "Defiant"},
		otherFormes: ["primeapemega"],  
        },
     primeapemega: {
		num: 57,
		species: "Primeape-Mega",
		baseSpecies: "Primeape",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fighting", "Steel"],
		baseStats: {hp: 65, atk: 135, def: 90, spa: 60, spd: 100, spe: 105},
		abilities: {0: "Punchilate"},
        },
     gothitelle: {
		inherit: true,
		abilities: {0: "Frisk", 1: "Competitive", H: "Shadow Tag"},
		otherFormes: ["gothitellemega"], 
	},    
     gothitellemega: {
		num: 576,
		species: "Gothitelle-Mega",
		baseSpecies: "Gothitelle",
		forme: "Mega",
		formeLetter: "M",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 70, atk: 55, def: 125, spa: 130, spd: 110, spe: 90},
		abilities: {0: "Goddess Aura"},
        },
     magnezone: {
		inherit: true,
		abilities: {0: "Magnet Pull", 1: "Sturdy", H: "Analytic"},
		otherFormes: ["magnezonemega"], 
        },    
     magnezonemega: {
		num: 462,
		species: "Magnezone-Mega",
		baseSpecies: "Magnezone",
		forme: "Mega",
		formeLetter: "M",
		types: ["Electric", "Steel"],
		baseStats: {hp: 70, atk: 90, def: 115, spa: 160, spd: 90, spe: 110},
		abilities: {0: "Gear Force"},
        },
     zangoose: {
		inherit: true,
		abilities: {0: "Immunity", H: "Toxic Boost"},
		otherFormes: ["zangoosemega"],
	},    
     zangoosemega: {
		num: 335,
		species: "Zangoose-Mega",
		baseSpecies: "Zangoose",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal", "Fighting"],
		baseStats: {hp: 73, atk: 145, def: 70, spa: 60, spd: 80, spe: 130},
		abilities: {0: "Guts"},
	},
     dedenne: {
		inherit: true,
		abilities: {0: "Cheek Pouch", 1: "Pickup", H: "Plus"},
	        otherFormes: ["dedennemega"],   
        },    
     dedennemega: {
	        num: 702,
		species: "Dedenne-Mega",
		baseSpecies: "Dedenne",
		forme: "Mega",
		formeLetter: "M",
		types: ["Electric", "Fairy"],
		baseStats: {hp: 67, atk: 78, def: 67, spa: 111, spd: 87, spe: 121},
		abilities: {0: "Magnetism"},
        },
     bisharp: {
		inherit: true,
		abilities: {0: "Defiant", 1: "Inner Focus", H: "Pressure"},
		otherFormes: ["bisharpmega"], 
        },    
     bisharpmega: {
	        num: 625,
		species: "Bisharp-Mega",
		baseSpecies: "Bisharp",
		forme: "Mega",
		formeLetter: "M",
		types: ["Dark", "Steel"],
		baseStats: {hp: 65, atk: 155, def: 110, spa: 60, spd: 70, spe: 110},
		abilities: {0: "Cold Blood"},
         },
     weavile: {
		inherit: true,
		abilities: {0: "Pressure", H: "Pickpocket"},
		otherFormes: ["weavilemega"],
	 },   
     weavilemega: {
	        num: 461,
		species: "Weavile-Mega",
		baseSpecies: "Weavile",
		forme: "Mega",
		formeLetter: "M",
		types: ["Dark", "Ice"],
		baseStats: {hp: 70, atk: 150, def: 80, spa: 45, spd: 115, spe: 150},
		abilities: {0: "Technician"},    
         },
     ninjask: {
		inherit: true,
		abilities: {0: "Speed Boost", H: "Infiltrator"},
		otherFormes: ["ninjaskmega"],
    	 },   
     ninjaskmega: {
	        num: 291,
		species: "Ninjask-Mega",
		baseSpecies: "Ninjask",
		forme: "Mega",
		formeLetter: "M",
		types: ["Bug", "Flying"],
		baseStats: {hp: 61, atk: 130, def: 65, spa: 50, spd: 80, spe: 170},
		abilities: {0: "Leadership"},     
         },
     dugtrio: {
		inherit: true,
		abilities: {0: "Sand Veil", 1: "Arena Trap", H: "Sand Force"},
		otherFormes: ["dugtriomega"],
	 },   
     dugtriomega: {
	        num: 51,
		species: "Dugtrio-Mega",
		baseSpecies: "Dugtrio",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ground"],
		baseStats: {hp: 35, atk: 120, def: 65, spa: 50, spd: 100, spe: 155},
		abilities: {0: "Landinate"},         
         },
     hippowdon: {
		inherit: true,
		abilities: {0: "Sand Stream", H: "Sand Force"},
		otherFormes: ["hippowdonmega"],
	 },   
     hippowdonmega: {
	        num: 450,
		species: "Hippowdon-Mega",
		baseSpecies: "Hippowdon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ground", "Steel"],
		baseStats: {hp: 108, atk: 142, def: 138, spa: 68, spd: 102, spe: 67},
		abilities: {0: "Sand Force"}, 
         },
     chandelure: {
		inherit: true,
		abilities: {0: "Flash Fire", 1 : "Flame Body", H: "Infiltrator"},
		otherFormes: ["chandeluremega"],
         },   
     chandeluremega: {
	        num: 609,
		species: "Chandelure-Mega",
		baseSpecies: "Chandelure",
		forme: "Mega",
		formeLetter: "M",
		types: ["Fire", "Ghost"],
		baseStats: {hp: 60, atk: 55, def: 120, spa: 165, spd: 110, spe: 110},
		abilities: {0: "Final Flicker"}, 
         },
     spiritomb: {
		inherit: true,
		abilities: {0: "Pressure", H: "Infiltrator"},
		otherFormes: ["spiritombmega"],
         },   
     spiritombmega: {
	        num: 442,
		species: "Spiritomb-Mega",
		baseSpecies: "Spiritomb",
		forme: "Mega",
		formeLetter: "M",
		types: ["Ghost", "Dark"],
		baseStats: {hp: 50, atk: 112, def: 138, spa: 112, spd: 138, spe: 35},
		abilities: {0: "Gates of Hell"}, 
         },
     grumpig: {
		inherit: true,
		abilities: {0: "Thick Fat", 1: "Own Tempo", H: "Gluttony"},
		otherFormes: ["grumpigmega"],
         },   
     grumpigmega: {
	        num: 326,
		species: "Grumpig-Mega",
		baseSpecies: "Grumpig",
		forme: "Mega",
		formeLetter: "M",
		types: ["Psychic"],
		baseStats: {hp: 80, atk: 45, def: 95, spa: 130, spd: 110, spe: 110},
		abilities: {0: "Medicine"}, 
         },
     blissey: {
		inherit: true,
		abilities: {0: "Natural Cure", 1: "Serene Grace", H: "Healer"},
		otherFormes: ["blisseymega"],
         },   
     blisseymega: {
	        num: 242,
		species: "Blissey-Mega",
		baseSpecies: "Blissey",
		forme: "Mega",
		formeLetter: "M",
		types: ["Normal", "Fairy"],
		baseStats: {hp: 255, atk: 10, def: 60, spa: 105, spd: 155, spe: 55},
		abilities: {0: "Medicine"}, 
          },
     druddigon: {
		inherit: true,
		abilities: {0: "Rough Skin", 1: "Sheer Force", H: "Mold Breaker"},
		otherFormes: ["druddigonmega"],
          },   
     druddigonmega: {
	        num: 621,
		species: "Druddigon-Mega",
		baseSpecies: "Druddigon",
		forme: "Mega",
		formeLetter: "M",
		types: ["Dragon", "Dark"],
		baseStats: {hp: 77, atk: 150, def: 110, spa: 85, spd: 90, spe: 83},
		abilities: {0: "Predator"}, 
          },
     corsola: {
		inherit: true,
		abilities: {0: "Hustle", 1: "Natural Cure", H: "Regenerator"},
		otherFormes: ["corsolamega"],
          },   
     corsolamega: {
	        num: 222,
		species: "Corsola-Mega",
		baseSpecies: "Corsola",
		forme: "Mega",
		formeLetter: "M",
		types: ["Water", "Rock"],
		baseStats: {hp: 65, atk: 70, def: 105, spa: 115, spd: 95, spe: 60},
		abilities: {0: "Crush Coral"}, 
           },
     chimecho: {
		inherit: true,
		abilities: {0: "Levitate"},
		otherFormes: ["chimechomega"],
           },   
     chimechomega: {
	        num: 358,
		species: "Chimecho-Mega",
		baseSpecies: "Chimecho",
		forme: "Mega",
		formeLetter: "M",
		types: ["Psychic", "Fairy"],
		baseStats: {hp: 75, atk: 50, def: 80, spa: 145, spd: 90, spe: 110},
		abilities: {0: "Pixilate"}, 
           },
     seviper: {
		inherit: true,
		abilities: {0: "Shed Skin", H: "Infiltrator"},
		otherFormes: ["sevipermega"],
           },   
     sevipermega: {
	        num: 336,
		species: "Seviper-Mega",
		baseSpecies: "Seviper",
		forme: "Mega",
		formeLetter: "M",
		types: ["Poison", "Dark"],
		baseStats: {hp: 73, atk: 125, def: 80, spa: 130, spd: 60, spe: 90},
		abilities: {0: "Adaptability"}, 
	   },
 };
/* https://pastebin.com/8SudG3w9 */
