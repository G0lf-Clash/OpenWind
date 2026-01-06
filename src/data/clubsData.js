// ------------------------------
// GAME DATA (clubs, courses, etc)
// ------------------------------
const clubCats = {
  Drivers: ["Rocket","Extra_Mile","Big_Topper","Quarterback","Rock","Thors_Hammer","Apocalypse"],
  Woods: ["Horizon","Viper","Big_Dawg","Hammerhead","Guardian","Sniper","Cataclysm"],
  Long_Irons: ["Grim_Reaper","Backbone","Goliath","Saturn","B52","Grizzly","Tsunami"],
  Short_Irons: ["Apache","Kingfisher","Runner","Thorn","Hornet","Claw","Falcon"],
  Wedges: ["Dart","Firefly","Boomerang","Down_In_One","Skewer","Endbringer","Rapier"],
  Rough_Irons: ["Roughcutter","Junglist","Machete","Off_Roader","Razor","Amazon","Nirvana"],
  Sand_Wedges: ["Castaway","Desert_Storm","Malibu","Sahara","Sand_Lizard","Houdini","Spitfire"]
};


const clubShortNames = {
  // ---- Drivers ----
  Rocket: "RT",
  Extra_Mile: "EM",
  Big_Topper: "BT",
  Quarterback: "QB",
  Rock: "RK",
  Thors_Hammer: "TH",
  Apocalypse: "AP",

  // ---- Woods ----
  Horizon: "HZ",
  Viper: "VP",
  Big_Dawg: "BD",
  Hammerhead: "HH",
  Guardian: "GN",
  Sniper: "SN",
  Cataclysm: "CL",

  // ---- Long Irons ----
  Grim_Reaper: "GE",
  Backbone: "BB",
  Goliath: "GL",
  Saturn: "ST",
  B52: "B5",
  Grizzly: "GZ",
  Tsunami: "TS",

  // ---- Short Irons ----
  Apache: "AC",
  Kingfisher: "KF",
  Runner: "RN",
  Thorn: "TN",
  Hornet: "HN",
  Claw: "CW",
  Falcon: "FC",

  // ---- Wedges ----
  Dart: "DT",
  Firefly: "FF",
  Boomerang: "BG",
  Down_In_One: "DO",
  Skewer: "SK",
  Endbringer: "EB",
  Rapier: "RP",

  // ---- Rough Irons ----
  Roughcutter: "RC",
  Junglist: "JG",
  Machete: "MH",
  Off_Roader: "OR",
  Razor: "RZ",
  Amazon: "AZ",
  Nirvana: "NV",

  // ---- Sand Wedges ----
  Castaway: "CA",
  Desert_Storm: "DS",
  Malibu: "MB",
  Sahara: "SA",
  Sand_Lizard: "SL",
  Houdini: "HD",
  Spitfire: "SF"
};

/* wind values for clubs */
const windData = {
  Drivers: {
	"Rocket": {1:"2.36|2.42|2.49", 2:"1.89|1.94|1.99", 3:"1.87|1.93|1.99", 4:"1.68|1.76|1.84", 5:"1.68|1.76|1.84", 6:"1.49|1.57|1.67", 7:"1.47|1.57|1.67", 8:"1.47|1.57|1.67", 9:"1.46|1.56|1.67", 10:"1.28|1.38|1.50"},
	"Extra_Mile": {1:"3.06|3.36|3.74", 2:"2.92|3.21|3.56", 3:"2.86|3.18|3.56", 4:"2.84|3.16|3.56", 5:"2.40|2.67|3.02", 6:"2.32|2.62|3.02", 7:"2.01|2.28|2.62", 8:"2.00|2.26|2.62", 9:"1.99|2.26|2.62"},
	"Big_Topper": {1:"3.06|3.26|3.49", 2:"3.00|3.23|3.49", 3:"2.68|2.88|3.12", 4:"2.58|2.82|3.12", 5:"2.40|2.62|2.89", 6:"2.03|2.23|2.47", 7:"1.97|2.19|2.47", 8:"1.76|1.97|2.24"},
	"Quarterback": {1:"1.75|1.83|1.92", 2:"1.59|1.67|1.74", 3:"1.55|1.64|1.74", 4:"1.55|1.64|1.74", 5:"1.08|1.16|1.25", 6:"1.08|1.16|1.25", 7:"1.05|1.14|1.25", 8:"1.05|1.14|1.25", 9:"1.03|1.13|1.25", 10:"1.03|1.13|1.25"},
	"Rock": {1:"1.77|1.93|2.12", 2:"1.77|1.93|2.12", 3:"1.34|1.45|1.60", 4:"1.29|1.43|1.60", 5:"1.13|1.25|1.40", 6:"1.11|1.24|1.40", 7:"0.99|1.10|1.25", 8:"0.97|1.09|1.25", 9:"0.97|1.09|1.25"},
	"Thors_Hammer": {1:"2.04|2.24|2.49", 2:"1.75|1.93|2.14", 3:"1.74|1.92|2.14", 4:"1.68|1.89|2.14", 5:"1.66|1.87|2.14", 6:"1.66|1.87|2.14", 7:"1.12|1.26|1.45", 8:"0.95|1.08|1.25"},
	"Apocalypse": {1:"2.25|2.52|2.87", 2:"2.23|2.51|2.87", 3:"2.08|2.34|2.67", 4:"1.61|1.82|2.09", 5:"1.40|1.60|1.87", 6:"1.40|1.60|1.87", 7:"1.23|1.41|1.64", 8:"1.12|1.28|1.50"},
  },
  Woods: {
	"Horizon": {1:"2.97|3.31|3.74", 2:"2.95|3.30|3.74", 3:"2.68|3.01|3.44", 4:"2.68|3.01|3.44", 5:"2.31|2.60|2.97", 6:"2.25|2.56|2.97", 7:"1.98|2.26|2.62", 8:"1.60|1.82|2.12"},
	"Viper": {1:"2.73|2.97|3.24", 2:"2.67|2.93|3.24", 3:"2.34|2.58|2.87", 4:"2.24|2.47|2.74", 5:"2.01|2.21|2.47", 6:"2.01|2.21|2.47", 7:"1.86|2.07|2.34", 8:"1.86|2.07|2.34", 9:"1.64|1.83|2.07", 10:"1.54|1.72|1.94"},
	"Big_Dawg": {1:"2.51|2.83|3.24", 2:"2.51|2.83|3.24", 3:"2.38|2.70|3.12", 4:"2.38|2.70|3.12", 5:"2.38|2.70|3.12", 6:"2.34|2.67|3.12", 7:"1.98|2.26|2.64", 8:"1.76|2.01|2.34", 9:"1.68|1.92|2.24"},
	"Hammerhead": {1:"1.69|1.88|2.12", 2:"1.68|1.88|2.12", 3:"1.33|1.48|1.67", 4:"1.09|1.21|1.37", 5:"1.09|1.21|1.37", 6:"1.06|1.19|1.37", 7:"0.96|1.09|1.25", 8:"0.96|1.08|1.25"},
	"Guardian": {1:"2.03|2.24|2.49", 2:"2.03|2.24|2.49", 3:"1.70|1.88|2.09", 4:"1.65|1.85|2.09", 5:"1.42|1.58|1.79", 6:"1.39|1.57|1.79", 7:"1.15|1.30|1.50", 8:"1.13|1.29|1.50", 9:"1.03|1.18|1.37"},
	"Sniper": {1:"1.05|1.14|1.25", 2:"1.05|1.14|1.25", 3:"1.05|1.14|1.25", 4:"1.05|1.14|1.25", 5:"1.03|1.13|1.25", 6:"1.03|1.13|1.25", 7:"1.01|1.12|1.25", 8:"1.01|1.12|1.25", 9:"0.99|1.10|1.25", 10:"0.98|1.10|1.25"},
	"Cataclysm": {1:"2.31|2.60|2.99", 2:"1.97|2.23|2.57", 3:"1.93|2.20|2.57", 4:"1.93|2.20|2.57", 5:"1.68|1.92|2.24", 6:"1.68|1.92|2.24", 7:"1.31|1.50|1.74", 8:"1.12|1.28|1.50"},
  },
  Long_Irons: {
	"Grim_Reaper": {1:"2.42|2.83|3.40", 2:"2.42|2.83|3.40", 3:"2.18|2.55|3.06", 4:"1.82|2.12|2.55", 5:"1.82|2.12|2.55", 6:"1.80|2.11|2.55", 7:"1.38|1.62|1.95", 8:"1.18|1.39|1.70"},
	"Backbone": {1:"2.57|2.92|3.40", 2:"2.35|2.68|3.12", 3:"2.33|2.67|3.12", 4:"2.12|2.43|2.83", 5:"1.78|2.04|2.38", 6:"1.77|2.03|2.38", 7:"1.56|1.79|2.10", 8:"1.52|1.76|2.10", 9:"1.35|1.59|1.93", 10:"1.15|1.35|1.64"},
	"Goliath": {1:"2.91|3.46|4.25", 2:"2.87|3.42|4.25", 3:"2.56|3.06|3.79", 4:"2.33|2.78|3.46", 5:"2.28|2.75|3.46", 6:"2.17|2.61|3.29", 7:"1.83|2.21|2.78", 8:"1.83|2.21|2.78", 9:"1.78|2.14|2.69"},
	"Saturn": {1:"2.85|3.21|3.68", 2:"2.85|3.21|3.68", 3:"2.52|2.84|3.26", 4:"2.44|2.79|3.26", 5:"2.44|2.79|3.26", 6:"2.10|2.40|2.80", 7:"2.08|2.39|2.80", 8:"2.08|2.39|2.80", 9:"1.91|2.23|2.66", 10:"1.91|2.23|2.66"},
	"B52": {1:"1.75|2.06|2.49", 2:"1.53|1.80|2.18", 3:"1.36|1.62|2.01", 4:"1.33|1.60|2.01", 5:"0.87|1.05|1.33", 6:"0.87|1.05|1.33", 7:"0.84|1.01|1.27", 8:"0.84|1.01|1.27"},
	"Grizzly": {1:"1.59|1.84|2.18", 2:"1.59|1.84|2.18", 3:"1.47|1.70|2.01", 4:"1.47|1.70|2.01", 5:"1.01|1.16|1.38", 6:"0.97|1.14|1.38", 7:"0.90|1.06|1.27", 8:"0.90|1.06|1.27", 9:"0.88|1.04|1.27"},
	"Tsunami": {1:"2.52|2.97|3.60", 2:"2.48|2.94|3.60", 3:"2.30|2.75|3.43", 4:"2.07|2.48|3.09", 5:"1.69|2.04|2.55", 6:"1.69|2.04|2.55", 7:"1.29|1.55|1.95", 8:"1.08|1.31|1.64"},
  },
  Short_Irons: {
	"Apache": {1:"3.00|3.91|5.61", 2:"2.92|3.81|5.46", 3:"2.60|3.42|4.97", 4:"2.51|3.34|4.97", 5:"2.32|3.09|4.60", 6:"2.30|3.07|4.60", 7:"2.21|2.94|4.41", 8:"2.21|2.94|4.41", 9:"1.78|2.37|3.55"},
	"Kingfisher": {1:"1.81|2.31|3.18", 2:"1.72|2.20|3.03", 3:"1.43|1.82|2.50", 4:"1.32|1.68|2.32", 5:"1.32|1.68|2.32", 6:"1.32|1.68|2.32", 7:"1.14|1.47|2.09", 8:"1.00|1.30|1.87"},
	"Runner": {1:"2.92|3.64|4.86", 2:"2.83|3.53|4.71", 3:"2.83|3.53|4.71", 4:"2.72|3.45|4.71", 5:"2.40|3.07|4.26", 6:"2.21|2.83|3.93", 7:"2.01|2.59|3.63", 8:"1.99|2.57|3.63", 9:"1.72|2.23|3.14", 10:"1.72|2.23|3.14"},
	"Thorn": {1:"2.49|3.20|4.49", 2:"2.22|2.86|4.00", 3:"2.17|2.81|4.00", 4:"2.09|2.75|4.00", 5:"1.92|2.52|3.66", 6:"1.85|2.46|3.66", 7:"1.76|2.34|3.48", 8:"1.74|2.32|3.48", 9:"1.74|2.32|3.48"},
	"Hornet": {1:"1.53|1.95|2.69", 2:"1.48|1.91|2.69", 3:"1.18|1.54|2.21", 4:"1.18|1.54|2.21", 5:"1.15|1.52|2.21", 6:"1.06|1.39|2.02", 7:"1.03|1.37|2.02", 8:"1.03|1.37|2.02", 9:"0.96|1.26|1.87"},
	"Claw": {1:"2.77|3.48|4.67", 2:"2.68|3.36|4.52", 3:"2.38|3.01|4.07", 4:"2.38|3.01|4.07", 5:"2.10|2.69|3.74", 6:"2.05|2.65|3.74", 7:"1.97|2.54|3.59", 8:"1.88|2.47|3.59", 9:"1.64|2.16|3.14", 10:"1.45|1.91|2.80"},
	"Falcon": {1:"2.08|2.67|3.74", 2:"2.05|2.65|3.74", 3:"1.87|2.41|3.40", 4:"1.70|2.23|3.21", 5:"1.70|2.23|3.21", 6:"1.34|1.77|2.62", 7:"1.34|1.77|2.62", 8:"1.03|1.37|2.06"},
  },
  Wedges: {
	"Dart": {1:"3.36|6.73|13.46", 2:"3.08|6.15|12.30", 3:"2.91|5.82|11.64", 4:"2.73|5.46|10.91", 5:"2.59|5.18|10.35", 6:"2.31|4.62|9.23", 7:"2.31|4.62|9.23", 8:"2.11|4.23|8.45", 9:"1.85|3.69|7.39", 10:"1.76|3.53|7.06"},
	"Firefly": {1:"2.67|5.34|10.67", 2:"2.67|5.34|10.67", 3:"2.32|4.64|9.28", 4:"2.32|4.64|9.28", 5:"2.21|4.41|8.82", 6:"2.15|4.29|8.59", 7:"1.77|3.54|7.08", 8:"1.29|2.59|5.18"},
	"Boomerang": {1:"2.26|4.53|9.06", 2:"2.15|4.31|8.62", 3:"1.97|3.94|7.88", 4:"1.92|3.85|7.69", 5:"1.60|3.20|6.41", 6:"1.53|3.06|6.12", 7:"1.20|2.39|4.79", 8:"0.97|1.94|3.89"},
	"Down_In_One": {1:"1.44|2.87|5.74", 2:"1.37|2.74|5.48", 3:"1.17|2.33|4.66", 4:"1.17|2.33|4.66", 5:"0.96|1.91|3.82", 6:"0.96|1.91|3.82", 7:"0.96|1.91|3.82", 8:"0.96|1.91|3.82", 9:"0.93|1.87|3.74"},
	"Skewer": {1:"2.92|5.84|11.68", 2:"2.83|5.65|11.31", 3:"2.68|5.36|10.71", 4:"2.35|4.70|9.40", 5:"2.35|4.70|9.40", 6:"2.16|4.31|8.63", 7:"2.10|4.21|8.41", 8:"1.84|3.68|7.37", 9:"1.84|3.68|7.37", 10:"1.58|3.16|6.33"},
	"Endbringer": {1:"1.73|3.45|6.90", 2:"1.64|3.28|6.56", 3:"1.46|2.91|5.83", 4:"1.39|2.78|5.56", 5:"1.08|2.15|4.30", 6:"1.05|2.10|4.21", 7:"0.96|1.91|3.82", 8:"0.96|1.91|3.82"},
	"Rapier": {1:"2.32|4.65|9.30", 2:"2.12|4.25|8.50", 3:"2.04|4.07|8.15", 4:"2.04|4.07|8.15", 5:"1.83|3.66|7.32", 6:"1.64|3.28|6.56", 7:"1.26|2.52|5.05", 8:"1.26|2.52|5.05", 9:"1.10|2.20|4.41"},
  },
  Rough_Irons: {
	"Roughcutter": {1:"3.90|7.81|15.61", 2:"3.75|7.51|15.01", 3:"3.10|6.19|12.38", 4:"2.74|5.49|10.98", 5:"2.08|4.16|8.32", 6:"1.99|3.98|7.95", 7:"1.99|3.98|7.95", 8:"1.78|3.55|7.10", 9:"1.63|3.27|6.53"},
	"Junglist": {1:"4.90|9.81|19.61", 2:"4.45|8.89|17.78", 3:"3.93|7.86|15.73", 4:"3.79|7.58|15.16", 5:"3.79|7.58|15.16", 6:"3.15|6.31|12.61", 7:"2.35|4.70|9.40", 8:"2.07|4.13|8.26"},
	"Machete": {1:"5.80|11.60|23.20", 2:"5.80|11.60|23.20", 3:"4.74|9.47|18.94", 4:"4.18|8.35|16.70", 5:"3.62|7.24|14.47", 6:"3.62|7.24|14.47", 7:"2.61|5.23|10.45", 8:"2.61|5.23|10.45", 9:"2.03|4.06|8.11", 10:"2.03|4.06|8.11"},
	"Off_Roader": {1:"3.73|7.45|14.91", 2:"3.63|7.25|14.50", 3:"2.87|5.74|11.47", 4:"2.26|4.52|9.04", 5:"2.05|4.09|8.18", 6:"1.51|3.02|6.03", 7:"1.51|3.02|6.03", 8:"1.43|2.86|5.72"},
	"Razor": {1:"1.89|3.77|7.54", 2:"1.76|3.52|7.04", 3:"1.76|3.52|7.04", 4:"1.71|3.42|6.84", 5:"1.71|3.42|6.84", 6:"1.65|3.30|6.59", 7:"1.51|3.02|6.05", 8:"1.42|2.84|5.67", 9:"1.40|2.79|5.59"},
	"Amazon": {1:"3.78|7.56|15.12", 2:"3.49|6.98|13.97", 3:"2.98|5.96|11.93", 4:"2.98|5.96|11.93", 5:"2.30|4.61|9.21", 6:"2.06|4.12|8.24", 7:"1.57|3.14|6.29", 8:"1.36|2.71|5.42"},
	"Nirvana": {1:"2.94|5.88|11.76", 2:"2.94|5.88|11.76", 3:"2.48|4.97|9.93", 4:"2.26|4.52|9.04", 5:"1.58|3.15|6.31", 6:"1.50|3.01|6.01", 7:"1.42|2.84|5.67", 8:"1.36|2.71|5.42", 9:"1.36|2.71|5.42"},
  },
  Sand_Wedges: {
	"Castaway": {1:"3.84|7.68|15.35", 2:"3.41|6.82|13.63", 3:"3.01|6.03|12.06", 4:"2.80|5.59|11.19", 5:"2.58|5.16|10.32", 6:"2.58|5.16|10.32", 7:"2.01|4.01|8.02", 8:"1.82|3.65|7.29"},
	"Desert_Storm": {1:"6.05|12.09|24.18", 2:"5.30|10.60|21.20", 3:"4.59|9.19|18.37", 4:"4.19|8.38|16.77", 5:"3.77|7.54|15.09", 6:"3.77|7.54|15.09", 7:"3.55|7.09|14.19", 8:"3.15|6.31|12.61", 9:"2.75|5.50|11.01", 10:"2.58|5.16|10.32"},
	"Malibu": {1:"2.76|5.53|11.05", 2:"2.12|4.24|8.48", 3:"1.89|3.79|7.57", 4:"1.70|3.40|6.81", 5:"1.58|3.17|6.33", 6:"1.38|2.76|5.52", 7:"1.28|2.56|5.11", 8:"1.18|2.37|4.73", 9:"1.18|2.37|4.73"},
	"Sahara": {1:"3.63|7.25|14.51", 2:"3.63|7.25|14.51", 3:"3.25|6.51|13.02", 4:"2.87|5.74|11.47", 5:"2.67|5.34|10.68", 6:"2.09|4.17|8.34", 7:"2.00|4.00|8.00", 8:"1.61|3.22|6.45"},
	"Sand_Lizard": {1:"3.03|6.07|12.14", 2:"3.03|6.07|12.14", 3:"2.09|4.18|8.37", 4:"2.09|4.18|8.37", 5:"1.71|3.42|6.84", 6:"1.50|3.00|6.01", 7:"1.50|3.00|6.01", 8:"1.37|2.73|5.47", 9:"1.37|2.73|5.47", 10:"1.37|2.73|5.47"},
	"Houdini": {1:"4.51|9.03|18.06", 2:"4.51|9.03|18.06", 3:"4.29|8.58|17.15", 4:"3.57|7.14|14.29", 5:"2.92|5.84|11.68", 6:"2.49|4.99|9.98", 7:"2.32|4.63|9.26", 8:"1.87|3.74|7.48", 9:"1.38|2.76|5.53"},
	"Spitfire": {1:"2.15|4.30|8.60", 2:"2.15|4.30|8.60", 3:"1.83|3.65|7.31", 4:"1.83|3.65|7.31", 5:"1.29|2.58|5.16", 6:"1.07|2.15|4.30", 7:"1.07|2.15|4.30", 8:"1.07|2.15|4.30"}
  }
};


// club stats info
const clubStats = {
  "Drivers": {
    "Apocalypse": {
      "8": {
        "power": 240,
        "accuracy": 90,
        "top_spin": 90,
        "back_spin": 80,
        "curl": 100,
        "ball_guide": 4.0
      },
      "7": {
        "power": 240,
        "accuracy": 84,
        "top_spin": 88,
        "back_spin": 76,
        "curl": 98,
        "ball_guide": 3.9
      },
      "6": {
        "power": 240,
        "accuracy": 75,
        "top_spin": 76,
        "back_spin": 76,
        "curl": 98,
        "ball_guide": 3.0
      },
      "5": {
        "power": 240,
        "accuracy": 75,
        "top_spin": 64,
        "back_spin": 42,
        "curl": 92,
        "ball_guide": 3.0
      },
      "4": {
        "power": 234,
        "accuracy": 66,
        "top_spin": 64,
        "back_spin": 20,
        "curl": 92,
        "ball_guide": 3.0
      },
      "3": {
        "power": 231,
        "accuracy": 43,
        "top_spin": 64,
        "back_spin": 20,
        "curl": 92,
        "ball_guide": 2.5
      },
      "2": {
        "power": 231,
        "accuracy": 35,
        "top_spin": 53,
        "back_spin": 20,
        "curl": 76,
        "ball_guide": 2.5
      },
      "1": {
        "power": 229,
        "accuracy": 35,
        "top_spin": 38,
        "back_spin": 20,
        "curl": 76,
        "ball_guide": 2.0
      }
    },
    "Thors Hammer": {
      "8": {
        "power": 235,
        "accuracy": 100,
        "top_spin": 98,
        "back_spin": 100,
        "curl": 50,
        "ball_guide": 4.5
      },
      "7": {
        "power": 232,
        "accuracy": 92,
        "top_spin": 98,
        "back_spin": 97,
        "curl": 41,
        "ball_guide": 4.4
      },
      "6": {
        "power": 232,
        "accuracy": 64,
        "top_spin": 85,
        "back_spin": 97,
        "curl": 41,
        "ball_guide": 4.1
      },
      "5": {
        "power": 232,
        "accuracy": 64,
        "top_spin": 67,
        "back_spin": 74,
        "curl": 41,
        "ball_guide": 3.8
      },
      "4": {
        "power": 229,
        "accuracy": 64,
        "top_spin": 56,
        "back_spin": 74,
        "curl": 41,
        "ball_guide": 3.0
      },
      "3": {
        "power": 222,
        "accuracy": 64,
        "top_spin": 56,
        "back_spin": 74,
        "curl": 30,
        "ball_guide": 2.7
      },
      "2": {
        "power": 220,
        "accuracy": 64,
        "top_spin": 45,
        "back_spin": 44,
        "curl": 30,
        "ball_guide": 2.7
      },
      "1": {
        "power": 220,
        "accuracy": 50,
        "top_spin": 45,
        "back_spin": 44,
        "curl": 15,
        "ball_guide": 2.5
      }
    },
    "Rock": {
      "9": {
        "power": 232,
        "accuracy": 100,
        "top_spin": 55,
        "back_spin": 60,
        "curl": 98,
        "ball_guide": 4.4
      },
      "8": {
        "power": 231,
        "accuracy": 100,
        "top_spin": 47,
        "back_spin": 59,
        "curl": 96,
        "ball_guide": 4.4
      },
      "7": {
        "power": 226,
        "accuracy": 100,
        "top_spin": 42,
        "back_spin": 59,
        "curl": 79,
        "ball_guide": 4.4
      },
      "6": {
        "power": 226,
        "accuracy": 94,
        "top_spin": 25,
        "back_spin": 59,
        "curl": 68,
        "ball_guide": 4.4
      },
      "5": {
        "power": 222,
        "accuracy": 94,
        "top_spin": 20,
        "back_spin": 28,
        "curl": 68,
        "ball_guide": 4.4
      },
      "4": {
        "power": 222,
        "accuracy": 86,
        "top_spin": 10,
        "back_spin": 28,
        "curl": 53,
        "ball_guide": 4.4
      },
      "3": {
        "power": 215,
        "accuracy": 86,
        "top_spin": 10,
        "back_spin": 9,
        "curl": 53,
        "ball_guide": 4.1
      },
      "2": {
        "power": 215,
        "accuracy": 65,
        "top_spin": 10,
        "back_spin": 0,
        "curl": 43,
        "ball_guide": 4.1
      },
      "1": {
        "power": 215,
        "accuracy": 65,
        "top_spin": 0,
        "back_spin": 0,
        "curl": 38,
        "ball_guide": 3.4
      }
    },
    "Big Topper": {
      "8": {
        "power": 230,
        "accuracy": 60,
        "top_spin": 100,
        "back_spin": 60,
        "curl": 100,
        "ball_guide": 4.1
      },
      "7": {
        "power": 225,
        "accuracy": 51,
        "top_spin": 100,
        "back_spin": 54,
        "curl": 83,
        "ball_guide": 4.0
      },
      "6": {
        "power": 219,
        "accuracy": 51,
        "top_spin": 100,
        "back_spin": 43,
        "curl": 83,
        "ball_guide": 3.1
      },
      "5": {
        "power": 217,
        "accuracy": 34,
        "top_spin": 100,
        "back_spin": 43,
        "curl": 65,
        "ball_guide": 3.1
      },
      "4": {
        "power": 217,
        "accuracy": 25,
        "top_spin": 100,
        "back_spin": 10,
        "curl": 65,
        "ball_guide": 2.6
      },
      "3": {
        "power": 209,
        "accuracy": 25,
        "top_spin": 100,
        "back_spin": 10,
        "curl": 54,
        "ball_guide": 2.3
      },
      "2": {
        "power": 209,
        "accuracy": 10,
        "top_spin": 100,
        "back_spin": 0,
        "curl": 38,
        "ball_guide": 2.3
      },
      "1": {
        "power": 205,
        "accuracy": 10,
        "top_spin": 100,
        "back_spin": 0,
        "curl": 33,
        "ball_guide": 1.6
      }
    },
    "Extra Mile": {
      "9": {
        "power": 237,
        "accuracy": 45,
        "top_spin": 85,
        "back_spin": 50,
        "curl": 50,
        "ball_guide": 3.6
      },
      "8": {
        "power": 236,
        "accuracy": 45,
        "top_spin": 67,
        "back_spin": 48,
        "curl": 47,
        "ball_guide": 3.6
      },
      "7": {
        "power": 234,
        "accuracy": 45,
        "top_spin": 50,
        "back_spin": 48,
        "curl": 47,
        "ball_guide": 3.0
      },
      "6": {
        "power": 234,
        "accuracy": 29,
        "top_spin": 50,
        "back_spin": 48,
        "curl": 30,
        "ball_guide": 2.8
      },
      "5": {
        "power": 226,
        "accuracy": 29,
        "top_spin": 50,
        "back_spin": 28,
        "curl": 25,
        "ball_guide": 2.8
      },
      "4": {
        "power": 226,
        "accuracy": 7,
        "top_spin": 45,
        "back_spin": 28,
        "curl": 25,
        "ball_guide": 2.3
      },
      "3": {
        "power": 224,
        "accuracy": 7,
        "top_spin": 30,
        "back_spin": 28,
        "curl": 15,
        "ball_guide": 2.3
      },
      "2": {
        "power": 220,
        "accuracy": 7,
        "top_spin": 30,
        "back_spin": 0,
        "curl": 15,
        "ball_guide": 2.0
      },
      "1": {
        "power": 220,
        "accuracy": 0,
        "top_spin": 20,
        "back_spin": 0,
        "curl": 15,
        "ball_guide": 1.3
      }
    },
    "Quarterback": {
      "10": {
        "power": 218,
        "accuracy": 100,
        "top_spin": 55,
        "back_spin": 72,
        "curl": 86,
        "ball_guide": 4.5
      },
      "9": {
        "power": 218,
        "accuracy": 100,
        "top_spin": 41,
        "back_spin": 72,
        "curl": 86,
        "ball_guide": 4.0
      },
      "8": {
        "power": 214,
        "accuracy": 100,
        "top_spin": 41,
        "back_spin": 45,
        "curl": 82,
        "ball_guide": 4.0
      },
      "7": {
        "power": 214,
        "accuracy": 100,
        "top_spin": 31,
        "back_spin": 45,
        "curl": 67,
        "ball_guide": 3.8
      },
      "6": {
        "power": 207,
        "accuracy": 100,
        "top_spin": 31,
        "back_spin": 36,
        "curl": 58,
        "ball_guide": 3.8
      },
      "5": {
        "power": 207,
        "accuracy": 100,
        "top_spin": 22,
        "back_spin": 27,
        "curl": 58,
        "ball_guide": 3.1
      },
      "4": {
        "power": 203,
        "accuracy": 80,
        "top_spin": 22,
        "back_spin": 27,
        "curl": 53,
        "ball_guide": 3.1
      },
      "3": {
        "power": 203,
        "accuracy": 80,
        "top_spin": 17,
        "back_spin": 27,
        "curl": 40,
        "ball_guide": 2.7
      },
      "2": {
        "power": 197,
        "accuracy": 80,
        "top_spin": 17,
        "back_spin": 10,
        "curl": 35,
        "ball_guide": 2.7
      },
      "1": {
        "power": 197,
        "accuracy": 73,
        "top_spin": 8,
        "back_spin": 10,
        "curl": 35,
        "ball_guide": 2.0
      }
    },
    "Rocket": {
      "10": {
        "power": 211,
        "accuracy": 90,
        "top_spin": 37,
        "back_spin": 98,
        "curl": 54,
        "ball_guide": 4.2
      },
      "9": {
        "power": 206,
        "accuracy": 83,
        "top_spin": 37,
        "back_spin": 70,
        "curl": 54,
        "ball_guide": 4.2
      },
      "8": {
        "power": 204,
        "accuracy": 83,
        "top_spin": 23,
        "back_spin": 52,
        "curl": 54,
        "ball_guide": 4.2
      },
      "7": {
        "power": 204,
        "accuracy": 83,
        "top_spin": 18,
        "back_spin": 52,
        "curl": 44,
        "ball_guide": 3.6
      },
      "6": {
        "power": 202,
        "accuracy": 83,
        "top_spin": 18,
        "back_spin": 52,
        "curl": 30,
        "ball_guide": 3.1
      },
      "5": {
        "power": 198,
        "accuracy": 76,
        "top_spin": 18,
        "back_spin": 26,
        "curl": 30,
        "ball_guide": 3.1
      },
      "4": {
        "power": 198,
        "accuracy": 76,
        "top_spin": 9,
        "back_spin": 26,
        "curl": 26,
        "ball_guide": 2.4
      },
      "3": {
        "power": 192,
        "accuracy": 70,
        "top_spin": 9,
        "back_spin": 9,
        "curl": 26,
        "ball_guide": 2.4
      },
      "2": {
        "power": 190,
        "accuracy": 70,
        "top_spin": 9,
        "back_spin": 9,
        "curl": 12,
        "ball_guide": 2.0
      },
      "1": {
        "power": 190,
        "accuracy": 50,
        "top_spin": 0,
        "back_spin": 0,
        "curl": 12,
        "ball_guide": 2.0
      }
    },
    "Golden Driver": {
      "1": {
        "power": 202,
        "accuracy": 83,
        "top_spin": 50,
        "back_spin": 50,
        "curl": 60,
        "ball_guide": 2.1
      }
    }
  },
  "Woods": {
    "Hammerhead": {
      "8": {
        "power": 176,
        "accuracy": 100,
        "top_spin": 85,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 4.3
      },
      "7": {
        "power": 175,
        "accuracy": 100,
        "top_spin": 79,
        "back_spin": 80,
        "curl": 98,
        "ball_guide": 4.1
      },
      "6": {
        "power": 175,
        "accuracy": 95,
        "top_spin": 79,
        "back_spin": 73,
        "curl": 77,
        "ball_guide": 4.1
      },
      "5": {
        "power": 170,
        "accuracy": 95,
        "top_spin": 79,
        "back_spin": 60,
        "curl": 77,
        "ball_guide": 3.9
      },
      "4": {
        "power": 170,
        "accuracy": 95,
        "top_spin": 58,
        "back_spin": 60,
        "curl": 71,
        "ball_guide": 3.4
      },
      "3": {
        "power": 170,
        "accuracy": 83,
        "top_spin": 58,
        "back_spin": 41,
        "curl": 71,
        "ball_guide": 3.2
      },
      "2": {
        "power": 170,
        "accuracy": 65,
        "top_spin": 45,
        "back_spin": 41,
        "curl": 65,
        "ball_guide": 3.2
      },
      "1": {
        "power": 169,
        "accuracy": 65,
        "top_spin": 45,
        "back_spin": 30,
        "curl": 65,
        "ball_guide": 2.7
      }
    },
    "Cataclysm": {
      "8": {
        "power": 180,
        "accuracy": 90,
        "top_spin": 100,
        "back_spin": 85,
        "curl": 100,
        "ball_guide": 4.3
      },
      "7": {
        "power": 180,
        "accuracy": 80,
        "top_spin": 93,
        "back_spin": 76,
        "curl": 100,
        "ball_guide": 4.3
      },
      "6": {
        "power": 180,
        "accuracy": 60,
        "top_spin": 85,
        "back_spin": 76,
        "curl": 100,
        "ball_guide": 3.8
      },
      "5": {
        "power": 180,
        "accuracy": 60,
        "top_spin": 71,
        "back_spin": 56,
        "curl": 100,
        "ball_guide": 3.6
      },
      "4": {
        "power": 180,
        "accuracy": 47,
        "top_spin": 63,
        "back_spin": 56,
        "curl": 100,
        "ball_guide": 3.0
      },
      "3": {
        "power": 180,
        "accuracy": 47,
        "top_spin": 50,
        "back_spin": 56,
        "curl": 84,
        "ball_guide": 2.8
      },
      "2": {
        "power": 176,
        "accuracy": 47,
        "top_spin": 50,
        "back_spin": 50,
        "curl": 84,
        "ball_guide": 2.4
      },
      "1": {
        "power": 175,
        "accuracy": 30,
        "top_spin": 50,
        "back_spin": 50,
        "curl": 73,
        "ball_guide": 2.4
      }
    },
    "Guardian": {
      "9": {
        "power": 179,
        "accuracy": 95,
        "top_spin": 35,
        "back_spin": 100,
        "curl": 75,
        "ball_guide": 3.9
      },
      "8": {
        "power": 179,
        "accuracy": 90,
        "top_spin": 31,
        "back_spin": 100,
        "curl": 67,
        "ball_guide": 3.8
      },
      "7": {
        "power": 175,
        "accuracy": 90,
        "top_spin": 24,
        "back_spin": 100,
        "curl": 48,
        "ball_guide": 3.8
      },
      "6": {
        "power": 174,
        "accuracy": 78,
        "top_spin": 24,
        "back_spin": 100,
        "curl": 48,
        "ball_guide": 3.2
      },
      "5": {
        "power": 171,
        "accuracy": 78,
        "top_spin": 24,
        "back_spin": 82,
        "curl": 48,
        "ball_guide": 3.0
      },
      "4": {
        "power": 171,
        "accuracy": 66,
        "top_spin": 18,
        "back_spin": 82,
        "curl": 31,
        "ball_guide": 3.0
      },
      "3": {
        "power": 166,
        "accuracy": 66,
        "top_spin": 12,
        "back_spin": 82,
        "curl": 31,
        "ball_guide": 2.6
      },
      "2": {
        "power": 166,
        "accuracy": 50,
        "top_spin": 12,
        "back_spin": 82,
        "curl": 20,
        "ball_guide": 2.4
      },
      "1": {
        "power": 166,
        "accuracy": 50,
        "top_spin": 0,
        "back_spin": 77,
        "curl": 20,
        "ball_guide": 1.9
      }
    },
    "Sniper": {
      "10": {
        "power": 172,
        "accuracy": 100,
        "top_spin": 68,
        "back_spin": 73,
        "curl": 95,
        "ball_guide": 4.5
      },
      "9": {
        "power": 170,
        "accuracy": 100,
        "top_spin": 51,
        "back_spin": 73,
        "curl": 85,
        "ball_guide": 4.5
      },
      "8": {
        "power": 166,
        "accuracy": 100,
        "top_spin": 45,
        "back_spin": 62,
        "curl": 85,
        "ball_guide": 4.5
      },
      "7": {
        "power": 166,
        "accuracy": 100,
        "top_spin": 39,
        "back_spin": 46,
        "curl": 74,
        "ball_guide": 4.5
      },
      "6": {
        "power": 164,
        "accuracy": 100,
        "top_spin": 39,
        "back_spin": 41,
        "curl": 74,
        "ball_guide": 4.0
      },
      "5": {
        "power": 164,
        "accuracy": 100,
        "top_spin": 34,
        "back_spin": 31,
        "curl": 59,
        "ball_guide": 4.0
      },
      "4": {
        "power": 160,
        "accuracy": 100,
        "top_spin": 34,
        "back_spin": 26,
        "curl": 48,
        "ball_guide": 4.0
      },
      "3": {
        "power": 160,
        "accuracy": 100,
        "top_spin": 22,
        "back_spin": 10,
        "curl": 48,
        "ball_guide": 3.8
      },
      "2": {
        "power": 160,
        "accuracy": 100,
        "top_spin": 17,
        "back_spin": 0,
        "curl": 33,
        "ball_guide": 3.8
      },
      "1": {
        "power": 160,
        "accuracy": 100,
        "top_spin": 0,
        "back_spin": 0,
        "curl": 23,
        "ball_guide": 3.7
      }
    },
    "Horizon": {
      "8": {
        "power": 179,
        "accuracy": 65,
        "top_spin": 100,
        "back_spin": 50,
        "curl": 90,
        "ball_guide": 4.7
      },
      "7": {
        "power": 178,
        "accuracy": 45,
        "top_spin": 100,
        "back_spin": 31,
        "curl": 85,
        "ball_guide": 4.5
      },
      "6": {
        "power": 178,
        "accuracy": 31,
        "top_spin": 100,
        "back_spin": 31,
        "curl": 64,
        "ball_guide": 4.3
      },
      "5": {
        "power": 173,
        "accuracy": 31,
        "top_spin": 94,
        "back_spin": 24,
        "curl": 64,
        "ball_guide": 4.3
      },
      "4": {
        "power": 173,
        "accuracy": 12,
        "top_spin": 94,
        "back_spin": 11,
        "curl": 64,
        "ball_guide": 4.1
      },
      "3": {
        "power": 173,
        "accuracy": 12,
        "top_spin": 74,
        "back_spin": 11,
        "curl": 58,
        "ball_guide": 3.7
      },
      "2": {
        "power": 171,
        "accuracy": 0,
        "top_spin": 74,
        "back_spin": 11,
        "curl": 40,
        "ball_guide": 3.7
      },
      "1": {
        "power": 170,
        "accuracy": 0,
        "top_spin": 74,
        "back_spin": 0,
        "curl": 40,
        "ball_guide": 3.1
      }
    },
    "Big Dawg": {
      "9": {
        "power": 180,
        "accuracy": 60,
        "top_spin": 85,
        "back_spin": 60,
        "curl": 100,
        "ball_guide": 3.2
      },
      "8": {
        "power": 180,
        "accuracy": 56,
        "top_spin": 80,
        "back_spin": 50,
        "curl": 100,
        "ball_guide": 2.9
      },
      "7": {
        "power": 180,
        "accuracy": 44,
        "top_spin": 80,
        "back_spin": 44,
        "curl": 100,
        "ball_guide": 2.3
      },
      "6": {
        "power": 180,
        "accuracy": 25,
        "top_spin": 67,
        "back_spin": 44,
        "curl": 95,
        "ball_guide": 2.3
      },
      "5": {
        "power": 177,
        "accuracy": 25,
        "top_spin": 67,
        "back_spin": 38,
        "curl": 77,
        "ball_guide": 2.3
      },
      "4": {
        "power": 177,
        "accuracy": 25,
        "top_spin": 48,
        "back_spin": 26,
        "curl": 77,
        "ball_guide": 2.1
      },
      "3": {
        "power": 177,
        "accuracy": 25,
        "top_spin": 42,
        "back_spin": 26,
        "curl": 66,
        "ball_guide": 1.5
      },
      "2": {
        "power": 174,
        "accuracy": 20,
        "top_spin": 42,
        "back_spin": 10,
        "curl": 66,
        "ball_guide": 1.5
      },
      "1": {
        "power": 174,
        "accuracy": 20,
        "top_spin": 30,
        "back_spin": 10,
        "curl": 50,
        "ball_guide": 1.3
      }
    },
    "Viper": {
      "10": {
        "power": 170,
        "accuracy": 72,
        "top_spin": 29,
        "back_spin": 62,
        "curl": 67,
        "ball_guide": 3.9
      },
      "9": {
        "power": 170,
        "accuracy": 67,
        "top_spin": 29,
        "back_spin": 51,
        "curl": 67,
        "ball_guide": 3.4
      },
      "8": {
        "power": 170,
        "accuracy": 56,
        "top_spin": 29,
        "back_spin": 51,
        "curl": 51,
        "ball_guide": 3.2
      },
      "7": {
        "power": 170,
        "accuracy": 56,
        "top_spin": 17,
        "back_spin": 35,
        "curl": 46,
        "ball_guide": 3.2
      },
      "6": {
        "power": 166,
        "accuracy": 51,
        "top_spin": 17,
        "back_spin": 35,
        "curl": 46,
        "ball_guide": 2.9
      },
      "5": {
        "power": 166,
        "accuracy": 51,
        "top_spin": 0,
        "back_spin": 30,
        "curl": 36,
        "ball_guide": 2.9
      },
      "4": {
        "power": 165,
        "accuracy": 40,
        "top_spin": 0,
        "back_spin": 30,
        "curl": 36,
        "ball_guide": 2.4
      },
      "3": {
        "power": 165,
        "accuracy": 35,
        "top_spin": 0,
        "back_spin": 30,
        "curl": 20,
        "ball_guide": 2.0
      },
      "2": {
        "power": 164,
        "accuracy": 20,
        "top_spin": 0,
        "back_spin": 20,
        "curl": 20,
        "ball_guide": 2.0
      },
      "1": {
        "power": 160,
        "accuracy": 20,
        "top_spin": 0,
        "back_spin": 20,
        "curl": 10,
        "ball_guide": 1.9
      }
    },
    "Golden_Wood": {
      "1": {
        "power": 166,
        "accuracy": 51,
        "top_spin": 50,
        "back_spin": 50,
        "curl": 60,
        "ball_guide": 2.1
      }
    }
  },
  "Long_Irons": {
    "Tsunami": {
      "8": {
        "power": 135,
        "accuracy": 92,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 3.5
      },
      "7": {
        "power": 135,
        "accuracy": 81,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 3.1
      },
      "6": {
        "power": 134,
        "accuracy": 60,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 2.7
      },
      "5": {
        "power": 134,
        "accuracy": 60,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 82,
        "ball_guide": 2.2
      },
      "4": {
        "power": 133,
        "accuracy": 41,
        "top_spin": 100,
        "back_spin": 87,
        "curl": 82,
        "ball_guide": 2.2
      },
      "3": {
        "power": 133,
        "accuracy": 29,
        "top_spin": 100,
        "back_spin": 87,
        "curl": 64,
        "ball_guide": 2.0
      },
      "2": {
        "power": 129,
        "accuracy": 23,
        "top_spin": 100,
        "back_spin": 87,
        "curl": 64,
        "ball_guide": 1.4
      },
      "1": {
        "power": 127,
        "accuracy": 23,
        "top_spin": 100,
        "back_spin": 70,
        "curl": 64,
        "ball_guide": 1.2
      }
    },
    "B52": {
      "8": {
        "power": 135,
        "accuracy": 100,
        "top_spin": 65,
        "back_spin": 65,
        "curl": 65,
        "ball_guide": 4.5
      },
      "7": {
        "power": 135,
        "accuracy": 100,
        "top_spin": 55,
        "back_spin": 58,
        "curl": 56,
        "ball_guide": 4.5
      },
      "6": {
        "power": 135,
        "accuracy": 98,
        "top_spin": 55,
        "back_spin": 45,
        "curl": 56,
        "ball_guide": 3.8
      },
      "5": {
        "power": 135,
        "accuracy": 98,
        "top_spin": 33,
        "back_spin": 38,
        "curl": 43,
        "ball_guide": 3.8
      },
      "4": {
        "power": 135,
        "accuracy": 79,
        "top_spin": 33,
        "back_spin": 25,
        "curl": 37,
        "ball_guide": 3.8
      },
      "3": {
        "power": 132,
        "accuracy": 79,
        "top_spin": 13,
        "back_spin": 25,
        "curl": 37,
        "ball_guide": 3.6
      },
      "2": {
        "power": 127,
        "accuracy": 73,
        "top_spin": 0,
        "back_spin": 25,
        "curl": 37,
        "ball_guide": 3.6
      },
      "1": {
        "power": 127,
        "accuracy": 62,
        "top_spin": 0,
        "back_spin": 25,
        "curl": 20,
        "ball_guide": 3.4
      }
    },
    "Grim Reaper": {
      "8": {
        "power": 128,
        "accuracy": 90,
        "top_spin": 40,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 4.0
      },
      "7": {
        "power": 126,
        "accuracy": 81,
        "top_spin": 28,
        "back_spin": 100,
        "curl": 98,
        "ball_guide": 3.8
      },
      "6": {
        "power": 126,
        "accuracy": 60,
        "top_spin": 12,
        "back_spin": 100,
        "curl": 91,
        "ball_guide": 3.8
      },
      "5": {
        "power": 125,
        "accuracy": 60,
        "top_spin": 12,
        "back_spin": 83,
        "curl": 91,
        "ball_guide": 3.4
      },
      "4": {
        "power": 125,
        "accuracy": 60,
        "top_spin": 12,
        "back_spin": 70,
        "curl": 72,
        "ball_guide": 3.2
      },
      "3": {
        "power": 125,
        "accuracy": 42,
        "top_spin": 12,
        "back_spin": 58,
        "curl": 66,
        "ball_guide": 3.2
      },
      "2": {
        "power": 125,
        "accuracy": 30,
        "top_spin": 12,
        "back_spin": 40,
        "curl": 66,
        "ball_guide": 3.0
      },
      "1": {
        "power": 125,
        "accuracy": 30,
        "top_spin": 0,
        "back_spin": 40,
        "curl": 60,
        "ball_guide": 2.4
      }
    },
    "Grizzly": {
      "9": {
        "power": 129,
        "accuracy": 100,
        "top_spin": 50,
        "back_spin": 70,
        "curl": 100,
        "ball_guide": 4.4
      },
      "8": {
        "power": 126,
        "accuracy": 100,
        "top_spin": 46,
        "back_spin": 64,
        "curl": 100,
        "ball_guide": 4.4
      },
      "7": {
        "power": 126,
        "accuracy": 100,
        "top_spin": 38,
        "back_spin": 45,
        "curl": 90,
        "ball_guide": 4.4
      },
      "6": {
        "power": 126,
        "accuracy": 96,
        "top_spin": 38,
        "back_spin": 45,
        "curl": 82,
        "ball_guide": 3.8
      },
      "5": {
        "power": 122,
        "accuracy": 96,
        "top_spin": 30,
        "back_spin": 40,
        "curl": 82,
        "ball_guide": 3.8
      },
      "4": {
        "power": 122,
        "accuracy": 79,
        "top_spin": 30,
        "back_spin": 40,
        "curl": 77,
        "ball_guide": 3.4
      },
      "3": {
        "power": 122,
        "accuracy": 79,
        "top_spin": 18,
        "back_spin": 36,
        "curl": 60,
        "ball_guide": 3.4
      },
      "1": {
        "power": 122,
        "accuracy": 73,
        "top_spin": 0,
        "back_spin": 20,
        "curl": 45,
        "ball_guide": 3.0
      },
      "2": {
        "power": 122,
        "accuracy": 73,
        "top_spin": 18,
        "back_spin": 20,
        "curl": 60,
        "ball_guide": 3.0
      }
    },
    "Goliath": {
      "9": {
        "power": 135,
        "accuracy": 55,
        "top_spin": 100,
        "back_spin": 70,
        "curl": 100,
        "ball_guide": 3.9
      },
      "8": {
        "power": 135,
        "accuracy": 52,
        "top_spin": 100,
        "back_spin": 66,
        "curl": 90,
        "ball_guide": 3.9
      },
      "7": {
        "power": 135,
        "accuracy": 52,
        "top_spin": 100,
        "back_spin": 60,
        "curl": 71,
        "ball_guide": 3.5
      },
      "6": {
        "power": 135,
        "accuracy": 34,
        "top_spin": 100,
        "back_spin": 47,
        "curl": 65,
        "ball_guide": 3.5
      },
      "5": {
        "power": 135,
        "accuracy": 28,
        "top_spin": 90,
        "back_spin": 47,
        "curl": 65,
        "ball_guide": 2.9
      },
      "4": {
        "power": 132,
        "accuracy": 28,
        "top_spin": 90,
        "back_spin": 30,
        "curl": 59,
        "ball_guide": 2.9
      },
      "3": {
        "power": 132,
        "accuracy": 16,
        "top_spin": 90,
        "back_spin": 30,
        "curl": 42,
        "ball_guide": 2.7
      },
      "2": {
        "power": 132,
        "accuracy": 0,
        "top_spin": 84,
        "back_spin": 30,
        "curl": 42,
        "ball_guide": 2.3
      },
      "1": {
        "power": 130,
        "accuracy": 0,
        "top_spin": 66,
        "back_spin": 30,
        "curl": 37,
        "ball_guide": 2.3
      }
    },
    "Backbone": {
      "10": {
        "power": 127,
        "accuracy": 92,
        "top_spin": 39,
        "back_spin": 67,
        "curl": 57,
        "ball_guide": 3.6
      },
      "9": {
        "power": 127,
        "accuracy": 82,
        "top_spin": 39,
        "back_spin": 67,
        "curl": 41,
        "ball_guide": 3.4
      },
      "8": {
        "power": 123,
        "accuracy": 76,
        "top_spin": 39,
        "back_spin": 56,
        "curl": 41,
        "ball_guide": 3.4
      },
      "7": {
        "power": 120,
        "accuracy": 76,
        "top_spin": 39,
        "back_spin": 51,
        "curl": 41,
        "ball_guide": 2.9
      },
      "6": {
        "power": 120,
        "accuracy": 66,
        "top_spin": 21,
        "back_spin": 51,
        "curl": 35,
        "ball_guide": 2.9
      },
      "5": {
        "power": 119,
        "accuracy": 66,
        "top_spin": 21,
        "back_spin": 35,
        "curl": 35,
        "ball_guide": 2.5
      },
      "4": {
        "power": 119,
        "accuracy": 50,
        "top_spin": 10,
        "back_spin": 35,
        "curl": 30,
        "ball_guide": 2.5
      },
      "3": {
        "power": 119,
        "accuracy": 40,
        "top_spin": 10,
        "back_spin": 30,
        "curl": 30,
        "ball_guide": 2.0
      },
      "2": {
        "power": 118,
        "accuracy": 40,
        "top_spin": 10,
        "back_spin": 30,
        "curl": 15,
        "ball_guide": 1.7
      },
      "1": {
        "power": 118,
        "accuracy": 30,
        "top_spin": 10,
        "back_spin": 15,
        "curl": 15,
        "ball_guide": 1.5
      }
    },
    "Saturn": {
      "10": {
        "power": 124,
        "accuracy": 56,
        "top_spin": 66,
        "back_spin": 92,
        "curl": 81,
        "ball_guide": 3.9
      },
      "9": {
        "power": 124,
        "accuracy": 56,
        "top_spin": 66,
        "back_spin": 82,
        "curl": 65,
        "ball_guide": 3.7
      },
      "8": {
        "power": 120,
        "accuracy": 51,
        "top_spin": 66,
        "back_spin": 82,
        "curl": 65,
        "ball_guide": 3.4
      },
      "7": {
        "power": 120,
        "accuracy": 51,
        "top_spin": 48,
        "back_spin": 71,
        "curl": 65,
        "ball_guide": 3.4
      },
      "6": {
        "power": 119,
        "accuracy": 51,
        "top_spin": 37,
        "back_spin": 71,
        "curl": 65,
        "ball_guide": 2.9
      },
      "5": {
        "power": 119,
        "accuracy": 35,
        "top_spin": 37,
        "back_spin": 61,
        "curl": 65,
        "ball_guide": 2.7
      },
      "4": {
        "power": 119,
        "accuracy": 35,
        "top_spin": 26,
        "back_spin": 45,
        "curl": 60,
        "ball_guide": 2.7
      },
      "3": {
        "power": 115,
        "accuracy": 35,
        "top_spin": 26,
        "back_spin": 35,
        "curl": 60,
        "ball_guide": 2.5
      },
      "2": {
        "power": 115,
        "accuracy": 20,
        "top_spin": 20,
        "back_spin": 35,
        "curl": 60,
        "ball_guide": 2.2
      },
      "1": {
        "power": 115,
        "accuracy": 20,
        "top_spin": 20,
        "back_spin": 30,
        "curl": 50,
        "ball_guide": 1.7
      }
    }
  },
  "Short_Irons": {
    "Falcon": {
      "8": {
        "power": 90,
        "accuracy": 95,
        "top_spin": 100,
        "back_spin": 80,
        "curl": 100,
        "ball_guide": 4.5
      },
      "7": {
        "power": 88,
        "accuracy": 80,
        "top_spin": 90,
        "back_spin": 78,
        "curl": 98,
        "ball_guide": 4.5
      },
      "6": {
        "power": 88,
        "accuracy": 80,
        "top_spin": 80,
        "back_spin": 78,
        "curl": 79,
        "ball_guide": 3.9
      },
      "5": {
        "power": 85,
        "accuracy": 64,
        "top_spin": 80,
        "back_spin": 72,
        "curl": 79,
        "ball_guide": 3.9
      },
      "4": {
        "power": 85,
        "accuracy": 64,
        "top_spin": 53,
        "back_spin": 60,
        "curl": 70,
        "ball_guide": 3.9
      },
      "3": {
        "power": 82,
        "accuracy": 59,
        "top_spin": 53,
        "back_spin": 60,
        "curl": 70,
        "ball_guide": 3.3
      },
      "2": {
        "power": 82,
        "accuracy": 50,
        "top_spin": 45,
        "back_spin": 60,
        "curl": 45,
        "ball_guide": 3.3
      },
      "1": {
        "power": 81,
        "accuracy": 50,
        "top_spin": 45,
        "back_spin": 45,
        "curl": 45,
        "ball_guide": 3.0
      }
    },
    "Kingfisher": {
      "8": {
        "power": 84,
        "accuracy": 100,
        "top_spin": 42,
        "back_spin": 90,
        "curl": 100,
        "ball_guide": 4.7
      },
      "7": {
        "power": 83,
        "accuracy": 94,
        "top_spin": 42,
        "back_spin": 67,
        "curl": 100,
        "ball_guide": 4.4
      },
      "6": {
        "power": 79,
        "accuracy": 88,
        "top_spin": 42,
        "back_spin": 67,
        "curl": 100,
        "ball_guide": 4.0
      },
      "5": {
        "power": 79,
        "accuracy": 88,
        "top_spin": 42,
        "back_spin": 61,
        "curl": 75,
        "ball_guide": 3.6
      },
      "4": {
        "power": 79,
        "accuracy": 88,
        "top_spin": 15,
        "back_spin": 61,
        "curl": 57,
        "ball_guide": 3.4
      },
      "3": {
        "power": 79,
        "accuracy": 83,
        "top_spin": 15,
        "back_spin": 50,
        "curl": 57,
        "ball_guide": 2.8
      },
      "2": {
        "power": 79,
        "accuracy": 69,
        "top_spin": 15,
        "back_spin": 50,
        "curl": 40,
        "ball_guide": 2.7
      },
      "1": {
        "power": 79,
        "accuracy": 65,
        "top_spin": 15,
        "back_spin": 50,
        "curl": 17,
        "ball_guide": 2.3
      }
    },
    "Thorn": {
      "9": {
        "power": 90,
        "accuracy": 57,
        "top_spin": 60,
        "back_spin": 100,
        "curl": 75,
        "ball_guide": 4.4
      },
      "8": {
        "power": 90,
        "accuracy": 57,
        "top_spin": 50,
        "back_spin": 100,
        "curl": 70,
        "ball_guide": 4.2
      },
      "7": {
        "power": 89,
        "accuracy": 57,
        "top_spin": 33,
        "back_spin": 100,
        "curl": 70,
        "ball_guide": 3.7
      },
      "6": {
        "power": 89,
        "accuracy": 52,
        "top_spin": 33,
        "back_spin": 100,
        "curl": 44,
        "ball_guide": 3.3
      },
      "5": {
        "power": 86,
        "accuracy": 52,
        "top_spin": 8,
        "back_spin": 100,
        "curl": 36,
        "ball_guide": 3.3
      },
      "4": {
        "power": 86,
        "accuracy": 43,
        "top_spin": 8,
        "back_spin": 85,
        "curl": 36,
        "ball_guide": 3.1
      },
      "3": {
        "power": 83,
        "accuracy": 43,
        "top_spin": 0,
        "back_spin": 85,
        "curl": 20,
        "ball_guide": 3.1
      },
      "2": {
        "power": 81,
        "accuracy": 43,
        "top_spin": 0,
        "back_spin": 80,
        "curl": 20,
        "ball_guide": 2.7
      },
      "1": {
        "power": 81,
        "accuracy": 30,
        "top_spin": 0,
        "back_spin": 75,
        "curl": 20,
        "ball_guide": 2.3
      }
    },
    "Hornet": {
      "9": {
        "power": 88,
        "accuracy": 100,
        "top_spin": 80,
        "back_spin": 52,
        "curl": 95,
        "ball_guide": 4.1
      },
      "8": {
        "power": 88,
        "accuracy": 96,
        "top_spin": 68,
        "back_spin": 52,
        "curl": 88,
        "ball_guide": 4.1
      },
      "7": {
        "power": 88,
        "accuracy": 96,
        "top_spin": 68,
        "back_spin": 36,
        "curl": 79,
        "ball_guide": 3.7
      },
      "6": {
        "power": 86,
        "accuracy": 96,
        "top_spin": 68,
        "back_spin": 30,
        "curl": 79,
        "ball_guide": 3.2
      },
      "5": {
        "power": 86,
        "accuracy": 91,
        "top_spin": 43,
        "back_spin": 30,
        "curl": 62,
        "ball_guide": 3.2
      },
      "4": {
        "power": 84,
        "accuracy": 91,
        "top_spin": 35,
        "back_spin": 30,
        "curl": 38,
        "ball_guide": 3.2
      },
      "3": {
        "power": 84,
        "accuracy": 91,
        "top_spin": 35,
        "back_spin": 20,
        "curl": 30,
        "ball_guide": 2.7
      },
      "2": {
        "power": 82,
        "accuracy": 78,
        "top_spin": 35,
        "back_spin": 20,
        "curl": 30,
        "ball_guide": 2.3
      },
      "1": {
        "power": 79,
        "accuracy": 78,
        "top_spin": 20,
        "back_spin": 20,
        "curl": 30,
        "ball_guide": 2.2
      }
    },
    "Claw": {
      "10": {
        "power": 87,
        "accuracy": 75,
        "top_spin": 73,
        "back_spin": 97,
        "curl": 100,
        "ball_guide": 3.2
      },
      "9": {
        "power": 86,
        "accuracy": 66,
        "top_spin": 51,
        "back_spin": 97,
        "curl": 100,
        "ball_guide": 3.2
      },
      "8": {
        "power": 86,
        "accuracy": 54,
        "top_spin": 51,
        "back_spin": 87,
        "curl": 100,
        "ball_guide": 3.1
      },
      "7": {
        "power": 82,
        "accuracy": 54,
        "top_spin": 36,
        "back_spin": 83,
        "curl": 100,
        "ball_guide": 3.1
      },
      "6": {
        "power": 82,
        "accuracy": 50,
        "top_spin": 14,
        "back_spin": 83,
        "curl": 100,
        "ball_guide": 2.7
      },
      "5": {
        "power": 80,
        "accuracy": 50,
        "top_spin": 14,
        "back_spin": 78,
        "curl": 100,
        "ball_guide": 2.3
      },
      "4": {
        "power": 77,
        "accuracy": 41,
        "top_spin": 14,
        "back_spin": 78,
        "curl": 94,
        "ball_guide": 2.3
      },
      "3": {
        "power": 77,
        "accuracy": 41,
        "top_spin": 0,
        "back_spin": 64,
        "curl": 94,
        "ball_guide": 2.1
      },
      "2": {
        "power": 76,
        "accuracy": 29,
        "top_spin": 0,
        "back_spin": 55,
        "curl": 94,
        "ball_guide": 2.1
      },
      "1": {
        "power": 76,
        "accuracy": 25,
        "top_spin": 0,
        "back_spin": 55,
        "curl": 80,
        "ball_guide": 1.7
      }
    },
    "Apache": {
      "9": {
        "power": 90,
        "accuracy": 55,
        "top_spin": 100,
        "back_spin": 55,
        "curl": 90,
        "ball_guide": 3.5
      },
      "8": {
        "power": 90,
        "accuracy": 32,
        "top_spin": 94,
        "back_spin": 36,
        "curl": 84,
        "ball_guide": 2.9
      },
      "7": {
        "power": 90,
        "accuracy": 32,
        "top_spin": 77,
        "back_spin": 36,
        "curl": 57,
        "ball_guide": 2.7
      },
      "6": {
        "power": 90,
        "accuracy": 27,
        "top_spin": 51,
        "back_spin": 25,
        "curl": 57,
        "ball_guide": 2.7
      },
      "5": {
        "power": 89,
        "accuracy": 27,
        "top_spin": 51,
        "back_spin": 25,
        "curl": 41,
        "ball_guide": 2.1
      },
      "4": {
        "power": 89,
        "accuracy": 17,
        "top_spin": 43,
        "back_spin": 10,
        "curl": 41,
        "ball_guide": 2.1
      },
      "3": {
        "power": 86,
        "accuracy": 17,
        "top_spin": 43,
        "back_spin": 10,
        "curl": 25,
        "ball_guide": 2.0
      },
      "2": {
        "power": 84,
        "accuracy": 4,
        "top_spin": 43,
        "back_spin": 0,
        "curl": 25,
        "ball_guide": 2.0
      },
      "1": {
        "power": 84,
        "accuracy": 0,
        "top_spin": 28,
        "back_spin": 0,
        "curl": 25,
        "ball_guide": 1.5
      }
    },
    "Runner": {
      "10": {
        "power": 82,
        "accuracy": 66,
        "top_spin": 97,
        "back_spin": 37,
        "curl": 90,
        "ball_guide": 3.7
      },
      "9": {
        "power": 82,
        "accuracy": 66,
        "top_spin": 97,
        "back_spin": 28,
        "curl": 83,
        "ball_guide": 3.2
      },
      "8": {
        "power": 82,
        "accuracy": 53,
        "top_spin": 97,
        "back_spin": 23,
        "curl": 68,
        "ball_guide": 3.2
      },
      "7": {
        "power": 81,
        "accuracy": 53,
        "top_spin": 97,
        "back_spin": 23,
        "curl": 46,
        "ball_guide": 2.9
      },
      "6": {
        "power": 80,
        "accuracy": 45,
        "top_spin": 97,
        "back_spin": 23,
        "curl": 46,
        "ball_guide": 2.4
      },
      "5": {
        "power": 80,
        "accuracy": 36,
        "top_spin": 97,
        "back_spin": 9,
        "curl": 38,
        "ball_guide": 2.4
      },
      "4": {
        "power": 78,
        "accuracy": 24,
        "top_spin": 97,
        "back_spin": 9,
        "curl": 38,
        "ball_guide": 2.2
      },
      "3": {
        "power": 75,
        "accuracy": 24,
        "top_spin": 97,
        "back_spin": 9,
        "curl": 31,
        "ball_guide": 1.9
      },
      "2": {
        "power": 75,
        "accuracy": 24,
        "top_spin": 90,
        "back_spin": 0,
        "curl": 31,
        "ball_guide": 1.5
      },
      "1": {
        "power": 75,
        "accuracy": 20,
        "top_spin": 90,
        "back_spin": 0,
        "curl": 10,
        "ball_guide": 1.2
      }
    }
  },
  "Wedges": {
    "Endbringer": {
      "8": {
        "power": 44,
        "accuracy": 100,
        "top_spin": 100,
        "back_spin": 65,
        "curl": 100,
        "ball_guide": 4.3
      },
      "7": {
        "power": 44,
        "accuracy": 100,
        "top_spin": 85,
        "back_spin": 54,
        "curl": 100,
        "ball_guide": 4.2
      },
      "6": {
        "power": 44,
        "accuracy": 95,
        "top_spin": 56,
        "back_spin": 54,
        "curl": 79,
        "ball_guide": 4.2
      },
      "5": {
        "power": 43,
        "accuracy": 95,
        "top_spin": 56,
        "back_spin": 36,
        "curl": 56,
        "ball_guide": 4.2
      },
      "4": {
        "power": 43,
        "accuracy": 79,
        "top_spin": 38,
        "back_spin": 36,
        "curl": 56,
        "ball_guide": 4.0
      },
      "3": {
        "power": 41,
        "accuracy": 79,
        "top_spin": 38,
        "back_spin": 25,
        "curl": 45,
        "ball_guide": 4.0
      },
      "2": {
        "power": 41,
        "accuracy": 70,
        "top_spin": 30,
        "back_spin": 25,
        "curl": 45,
        "ball_guide": 3.6
      },
      "1": {
        "power": 39,
        "accuracy": 70,
        "top_spin": 30,
        "back_spin": 20,
        "curl": 17,
        "ball_guide": 3.6
      }
    },
    "Rapier": {
      "9": {
        "power": 42,
        "accuracy": 95,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 4.2
      },
      "8": {
        "power": 42,
        "accuracy": 87,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 79,
        "ball_guide": 4.2
      },
      "7": {
        "power": 42,
        "accuracy": 87,
        "top_spin": 95,
        "back_spin": 91,
        "curl": 79,
        "ball_guide": 3.7
      },
      "6": {
        "power": 40,
        "accuracy": 72,
        "top_spin": 95,
        "back_spin": 91,
        "curl": 79,
        "ball_guide": 3.6
      },
      "5": {
        "power": 40,
        "accuracy": 63,
        "top_spin": 87,
        "back_spin": 75,
        "curl": 79,
        "ball_guide": 3.6
      },
      "4": {
        "power": 38,
        "accuracy": 58,
        "top_spin": 87,
        "back_spin": 75,
        "curl": 79,
        "ball_guide": 3.2
      },
      "3": {
        "power": 38,
        "accuracy": 58,
        "top_spin": 71,
        "back_spin": 70,
        "curl": 50,
        "ball_guide": 3.2
      },
      "2": {
        "power": 38,
        "accuracy": 54,
        "top_spin": 71,
        "back_spin": 60,
        "curl": 50,
        "ball_guide": 2.8
      },
      "1": {
        "power": 38,
        "accuracy": 45,
        "top_spin": 49,
        "back_spin": 60,
        "curl": 50,
        "ball_guide": 2.7
      }
    },
    "Firefly": {
      "8": {
        "power": 39,
        "accuracy": 90,
        "top_spin": 100,
        "back_spin": 75,
        "curl": 85,
        "ball_guide": 4.5
      },
      "7": {
        "power": 38,
        "accuracy": 70,
        "top_spin": 100,
        "back_spin": 61,
        "curl": 83,
        "ball_guide": 4.5
      },
      "6": {
        "power": 38,
        "accuracy": 53,
        "top_spin": 100,
        "back_spin": 55,
        "curl": 83,
        "ball_guide": 4.1
      },
      "5": {
        "power": 37,
        "accuracy": 53,
        "top_spin": 100,
        "back_spin": 37,
        "curl": 61,
        "ball_guide": 4.1
      },
      "4": {
        "power": 37,
        "accuracy": 48,
        "top_spin": 81,
        "back_spin": 25,
        "curl": 61,
        "ball_guide": 4.1
      },
      "3": {
        "power": 37,
        "accuracy": 48,
        "top_spin": 72,
        "back_spin": 25,
        "curl": 29,
        "ball_guide": 3.8
      },
      "2": {
        "power": 35,
        "accuracy": 39,
        "top_spin": 72,
        "back_spin": 25,
        "curl": 29,
        "ball_guide": 3.6
      },
      "1": {
        "power": 35,
        "accuracy": 39,
        "top_spin": 72,
        "back_spin": 15,
        "curl": 20,
        "ball_guide": 3.2
      }
    },
    "Boomerang": {
      "8": {
        "power": 45,
        "accuracy": 98,
        "top_spin": 60,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 4.2
      },
      "7": {
        "power": 45,
        "accuracy": 86,
        "top_spin": 57,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 3.9
      },
      "6": {
        "power": 44,
        "accuracy": 70,
        "top_spin": 57,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 3.6
      },
      "5": {
        "power": 42,
        "accuracy": 70,
        "top_spin": 47,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 3.0
      },
      "4": {
        "power": 42,
        "accuracy": 54,
        "top_spin": 47,
        "back_spin": 95,
        "curl": 83,
        "ball_guide": 3.0
      },
      "3": {
        "power": 41,
        "accuracy": 54,
        "top_spin": 30,
        "back_spin": 95,
        "curl": 83,
        "ball_guide": 2.5
      },
      "2": {
        "power": 41,
        "accuracy": 45,
        "top_spin": 30,
        "back_spin": 79,
        "curl": 83,
        "ball_guide": 2.4
      },
      "1": {
        "power": 39,
        "accuracy": 45,
        "top_spin": 30,
        "back_spin": 79,
        "curl": 64,
        "ball_guide": 2.2
      }
    },
    "Skewer": {
      "10": {
        "power": 42,
        "accuracy": 71,
        "top_spin": 62,
        "back_spin": 87,
        "curl": 88,
        "ball_guide": 3.8
      },
      "9": {
        "power": 42,
        "accuracy": 58,
        "top_spin": 62,
        "back_spin": 87,
        "curl": 79,
        "ball_guide": 3.5
      },
      "8": {
        "power": 42,
        "accuracy": 58,
        "top_spin": 39,
        "back_spin": 77,
        "curl": 79,
        "ball_guide": 3.4
      },
      "7": {
        "power": 40,
        "accuracy": 50,
        "top_spin": 39,
        "back_spin": 77,
        "curl": 70,
        "ball_guide": 3.4
      },
      "6": {
        "power": 39,
        "accuracy": 50,
        "top_spin": 39,
        "back_spin": 68,
        "curl": 70,
        "ball_guide": 3.0
      },
      "5": {
        "power": 39,
        "accuracy": 41,
        "top_spin": 32,
        "back_spin": 68,
        "curl": 43,
        "ball_guide": 3.0
      },
      "4": {
        "power": 39,
        "accuracy": 41,
        "top_spin": 32,
        "back_spin": 54,
        "curl": 43,
        "ball_guide": 2.7
      },
      "3": {
        "power": 38,
        "accuracy": 29,
        "top_spin": 25,
        "back_spin": 54,
        "curl": 26,
        "ball_guide": 2.7
      },
      "2": {
        "power": 36,
        "accuracy": 29,
        "top_spin": 25,
        "back_spin": 49,
        "curl": 26,
        "ball_guide": 2.4
      },
      "1": {
        "power": 36,
        "accuracy": 25,
        "top_spin": 25,
        "back_spin": 40,
        "curl": 26,
        "ball_guide": 2.0
      }
    },
    "Down In One": {
      "9": {
        "power": 45,
        "accuracy": 100,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 1.5
      },
      "8": {
        "power": 44,
        "accuracy": 100,
        "top_spin": 100,
        "back_spin": 64,
        "curl": 94,
        "ball_guide": 1.5
      },
      "7": {
        "power": 44,
        "accuracy": 100,
        "top_spin": 89,
        "back_spin": 47,
        "curl": 84,
        "ball_guide": 1.5
      },
      "6": {
        "power": 44,
        "accuracy": 100,
        "top_spin": 63,
        "back_spin": 36,
        "curl": 84,
        "ball_guide": 1.3
      },
      "5": {
        "power": 44,
        "accuracy": 100,
        "top_spin": 55,
        "back_spin": 20,
        "curl": 64,
        "ball_guide": 1.3
      },
      "4": {
        "power": 44,
        "accuracy": 89,
        "top_spin": 39,
        "back_spin": 15,
        "curl": 64,
        "ball_guide": 1.3
      },
      "3": {
        "power": 44,
        "accuracy": 89,
        "top_spin": 15,
        "back_spin": 15,
        "curl": 54,
        "ball_guide": 1.0
      },
      "2": {
        "power": 43,
        "accuracy": 80,
        "top_spin": 15,
        "back_spin": 0,
        "curl": 54,
        "ball_guide": 1.0
      },
      "1": {
        "power": 41,
        "accuracy": 80,
        "top_spin": 0,
        "back_spin": 0,
        "curl": 45,
        "ball_guide": 1.0
      }
    },
    "Dart": {
      "10": {
        "power": 41,
        "accuracy": 64,
        "top_spin": 22,
        "back_spin": 47,
        "curl": 72,
        "ball_guide": 3.3
      },
      "9": {
        "power": 41,
        "accuracy": 60,
        "top_spin": 22,
        "back_spin": 32,
        "curl": 72,
        "ball_guide": 3.0
      },
      "8": {
        "power": 41,
        "accuracy": 47,
        "top_spin": 15,
        "back_spin": 32,
        "curl": 54,
        "ball_guide": 3.0
      },
      "7": {
        "power": 39,
        "accuracy": 43,
        "top_spin": 15,
        "back_spin": 32,
        "curl": 54,
        "ball_guide": 2.8
      },
      "6": {
        "power": 39,
        "accuracy": 43,
        "top_spin": 7,
        "back_spin": 23,
        "curl": 28,
        "ball_guide": 2.8
      },
      "5": {
        "power": 39,
        "accuracy": 30,
        "top_spin": 7,
        "back_spin": 23,
        "curl": 19,
        "ball_guide": 2.5
      },
      "4": {
        "power": 37,
        "accuracy": 30,
        "top_spin": 0,
        "back_spin": 9,
        "curl": 19,
        "ball_guide": 2.5
      },
      "3": {
        "power": 37,
        "accuracy": 22,
        "top_spin": 0,
        "back_spin": 9,
        "curl": 10,
        "ball_guide": 2.1
      },
      "2": {
        "power": 35,
        "accuracy": 22,
        "top_spin": 0,
        "back_spin": 0,
        "curl": 10,
        "ball_guide": 1.9
      },
      "1": {
        "power": 35,
        "accuracy": 10,
        "top_spin": 0,
        "back_spin": 0,
        "curl": 10,
        "ball_guide": 1.7
      }
    },
    "Golden_Wedge": {
      "1": {
        "power": 39,
        "accuracy": 30,
        "top_spin": 20,
        "back_spin": 20,
        "curl": 20,
        "ball_guide": 1.7
      }
    }
  },
  "Rough_Irons": {
    "Amazon": {
      "8": {
        "power": 135,
        "accuracy": 100,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 3.0
      },
      "7": {
        "power": 135,
        "accuracy": 92,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 2.5
      },
      "6": {
        "power": 135,
        "accuracy": 74,
        "top_spin": 100,
        "back_spin": 100,
        "curl": 80,
        "ball_guide": 2.2
      },
      "5": {
        "power": 135,
        "accuracy": 65,
        "top_spin": 100,
        "back_spin": 86,
        "curl": 80,
        "ball_guide": 1.8
      },
      "4": {
        "power": 135,
        "accuracy": 40,
        "top_spin": 92,
        "back_spin": 79,
        "curl": 80,
        "ball_guide": 1.8
      },
      "3": {
        "power": 135,
        "accuracy": 40,
        "top_spin": 86,
        "back_spin": 79,
        "curl": 64,
        "ball_guide": 1.2
      },
      "2": {
        "power": 131,
        "accuracy": 25,
        "top_spin": 86,
        "back_spin": 60,
        "curl": 64,
        "ball_guide": 1.2
      },
      "1": {
        "power": 121,
        "accuracy": 25,
        "top_spin": 75,
        "back_spin": 60,
        "curl": 64,
        "ball_guide": 1.0
      }
    },
    "Off Roader": {
      "8": {
        "power": 133,
        "accuracy": 98,
        "top_spin": 85,
        "back_spin": 90,
        "curl": 65,
        "ball_guide": 4.6
      },
      "7": {
        "power": 131,
        "accuracy": 96,
        "top_spin": 68,
        "back_spin": 87,
        "curl": 54,
        "ball_guide": 4.5
      },
      "6": {
        "power": 131,
        "accuracy": 96,
        "top_spin": 47,
        "back_spin": 72,
        "curl": 54,
        "ball_guide": 4.3
      },
      "5": {
        "power": 127,
        "accuracy": 79,
        "top_spin": 47,
        "back_spin": 72,
        "curl": 54,
        "ball_guide": 3.6
      },
      "4": {
        "power": 115,
        "accuracy": 79,
        "top_spin": 47,
        "back_spin": 58,
        "curl": 54,
        "ball_guide": 3.4
      },
      "3": {
        "power": 111,
        "accuracy": 63,
        "top_spin": 47,
        "back_spin": 58,
        "curl": 30,
        "ball_guide": 3.4
      },
      "2": {
        "power": 111,
        "accuracy": 40,
        "top_spin": 47,
        "back_spin": 45,
        "curl": 30,
        "ball_guide": 3.2
      },
      "1": {
        "power": 108,
        "accuracy": 40,
        "top_spin": 30,
        "back_spin": 45,
        "curl": 30,
        "ball_guide": 2.9
      }
    },
    "Nirvana": {
      "9": {
        "power": 135,
        "accuracy": 100,
        "top_spin": 60,
        "back_spin": 70,
        "curl": 98,
        "ball_guide": 4.5
      },
      "8": {
        "power": 135,
        "accuracy": 100,
        "top_spin": 59,
        "back_spin": 65,
        "curl": 87,
        "ball_guide": 4.5
      },
      "7": {
        "power": 129,
        "accuracy": 100,
        "top_spin": 59,
        "back_spin": 58,
        "curl": 62,
        "ball_guide": 4.5
      },
      "6": {
        "power": 129,
        "accuracy": 97,
        "top_spin": 59,
        "back_spin": 44,
        "curl": 62,
        "ball_guide": 3.9
      },
      "5": {
        "power": 123,
        "accuracy": 97,
        "top_spin": 42,
        "back_spin": 44,
        "curl": 55,
        "ball_guide": 3.9
      },
      "4": {
        "power": 123,
        "accuracy": 74,
        "top_spin": 42,
        "back_spin": 38,
        "curl": 55,
        "ball_guide": 3.5
      },
      "3": {
        "power": 112,
        "accuracy": 74,
        "top_spin": 36,
        "back_spin": 38,
        "curl": 40,
        "ball_guide": 3.5
      },
      "2": {
        "power": 112,
        "accuracy": 60,
        "top_spin": 36,
        "back_spin": 20,
        "curl": 40,
        "ball_guide": 3.3
      },
      "1": {
        "power": 112,
        "accuracy": 60,
        "top_spin": 20,
        "back_spin": 20,
        "curl": 40,
        "ball_guide": 2.9
      }
    },
    "Razor": {
      "9": {
        "power": 131,
        "accuracy": 100,
        "top_spin": 55,
        "back_spin": 85,
        "curl": 70,
        "ball_guide": 4.2
      },
      "8": {
        "power": 129,
        "accuracy": 100,
        "top_spin": 53,
        "back_spin": 73,
        "curl": 60,
        "ball_guide": 4.2
      },
      "7": {
        "power": 121,
        "accuracy": 100,
        "top_spin": 34,
        "back_spin": 66,
        "curl": 60,
        "ball_guide": 4.2
      },
      "6": {
        "power": 111,
        "accuracy": 100,
        "top_spin": 28,
        "back_spin": 66,
        "curl": 44,
        "ball_guide": 4.2
      },
      "5": {
        "power": 107,
        "accuracy": 100,
        "top_spin": 28,
        "back_spin": 46,
        "curl": 44,
        "ball_guide": 3.8
      },
      "4": {
        "power": 107,
        "accuracy": 100,
        "top_spin": 11,
        "back_spin": 40,
        "curl": 29,
        "ball_guide": 3.8
      },
      "3": {
        "power": 104,
        "accuracy": 100,
        "top_spin": 11,
        "back_spin": 28,
        "curl": 7,
        "ball_guide": 3.8
      },
      "2": {
        "power": 104,
        "accuracy": 100,
        "top_spin": 0,
        "back_spin": 28,
        "curl": 0,
        "ball_guide": 3.3
      },
      "1": {
        "power": 97,
        "accuracy": 100,
        "top_spin": 0,
        "back_spin": 10,
        "curl": 0,
        "ball_guide": 3.1
      }
    },
    "Junglist": {
      "8": {
        "power": 124,
        "accuracy": 80,
        "top_spin": 100,
        "back_spin": 95,
        "curl": 100,
        "ball_guide": 3.8
      },
      "7": {
        "power": 123,
        "accuracy": 71,
        "top_spin": 79,
        "back_spin": 72,
        "curl": 100,
        "ball_guide": 3.7
      },
      "6": {
        "power": 123,
        "accuracy": 44,
        "top_spin": 79,
        "back_spin": 57,
        "curl": 100,
        "ball_guide": 3.4
      },
      "5": {
        "power": 111,
        "accuracy": 35,
        "top_spin": 79,
        "back_spin": 57,
        "curl": 100,
        "ball_guide": 3.0
      },
      "4": {
        "power": 111,
        "accuracy": 35,
        "top_spin": 60,
        "back_spin": 50,
        "curl": 90,
        "ball_guide": 3.0
      },
      "3": {
        "power": 107,
        "accuracy": 35,
        "top_spin": 60,
        "back_spin": 36,
        "curl": 90,
        "ball_guide": 2.4
      },
      "2": {
        "power": 107,
        "accuracy": 20,
        "top_spin": 60,
        "back_spin": 30,
        "curl": 67,
        "ball_guide": 2.4
      },
      "1": {
        "power": 97,
        "accuracy": 20,
        "top_spin": 60,
        "back_spin": 30,
        "curl": 60,
        "ball_guide": 2.0
      }
    },
    "Roughcutter": {
      "9": {
        "power": 112,
        "accuracy": 100,
        "top_spin": 65,
        "back_spin": 30,
        "curl": 70,
        "ball_guide": 3.6
      },
      "8": {
        "power": 103,
        "accuracy": 100,
        "top_spin": 47,
        "back_spin": 20,
        "curl": 59,
        "ball_guide": 3.6
      },
      "7": {
        "power": 92,
        "accuracy": 100,
        "top_spin": 34,
        "back_spin": 20,
        "curl": 59,
        "ball_guide": 3.4
      },
      "6": {
        "power": 92,
        "accuracy": 100,
        "top_spin": 34,
        "back_spin": 6,
        "curl": 51,
        "ball_guide": 2.8
      },
      "5": {
        "power": 88,
        "accuracy": 100,
        "top_spin": 16,
        "back_spin": 6,
        "curl": 51,
        "ball_guide": 2.4
      },
      "4": {
        "power": 88,
        "accuracy": 84,
        "top_spin": 16,
        "back_spin": 0,
        "curl": 36,
        "ball_guide": 2.4
      },
      "3": {
        "power": 78,
        "accuracy": 84,
        "top_spin": 11,
        "back_spin": 0,
        "curl": 36,
        "ball_guide": 2.0
      },
      "2": {
        "power": 78,
        "accuracy": 70,
        "top_spin": 11,
        "back_spin": 0,
        "curl": 15,
        "ball_guide": 1.9
      },
      "1": {
        "power": 75,
        "accuracy": 70,
        "top_spin": 0,
        "back_spin": 0,
        "curl": 15,
        "ball_guide": 1.3
      }
    },
    "Machete": {
      "10": {
        "power": 101,
        "accuracy": 94,
        "top_spin": 42,
        "back_spin": 100,
        "curl": 71,
        "ball_guide": 2.9
      },
      "9": {
        "power": 101,
        "accuracy": 94,
        "top_spin": 36,
        "back_spin": 100,
        "curl": 57,
        "ball_guide": 2.4
      },
      "8": {
        "power": 98,
        "accuracy": 80,
        "top_spin": 36,
        "back_spin": 84,
        "curl": 57,
        "ball_guide": 2.4
      },
      "7": {
        "power": 98,
        "accuracy": 80,
        "top_spin": 21,
        "back_spin": 84,
        "curl": 43,
        "ball_guide": 2.2
      },
      "6": {
        "power": 91,
        "accuracy": 60,
        "top_spin": 21,
        "back_spin": 78,
        "curl": 43,
        "ball_guide": 2.2
      },
      "5": {
        "power": 91,
        "accuracy": 60,
        "top_spin": 10,
        "back_spin": 72,
        "curl": 23,
        "ball_guide": 2.2
      },
      "4": {
        "power": 85,
        "accuracy": 53,
        "top_spin": 10,
        "back_spin": 72,
        "curl": 23,
        "ball_guide": 1.7
      },
      "3": {
        "power": 85,
        "accuracy": 40,
        "top_spin": 10,
        "back_spin": 56,
        "curl": 23,
        "ball_guide": 1.5
      },
      "2": {
        "power": 82,
        "accuracy": 20,
        "top_spin": 10,
        "back_spin": 56,
        "curl": 10,
        "ball_guide": 1.5
      },
      "1": {
        "power": 82,
        "accuracy": 20,
        "top_spin": 0,
        "back_spin": 50,
        "curl": 10,
        "ball_guide": 1.0
      }
    }
  },
  "Sand_Wedges": {
    "Spitfire": {
      "8": {
        "power": 120,
        "accuracy": 100,
        "top_spin": 100,
        "back_spin": 65,
        "curl": 100,
        "ball_guide": 4.5
      },
      "7": {
        "power": 120,
        "accuracy": 100,
        "top_spin": 100,
        "back_spin": 57,
        "curl": 100,
        "ball_guide": 4.4
      },
      "6": {
        "power": 120,
        "accuracy": 100,
        "top_spin": 94,
        "back_spin": 42,
        "curl": 100,
        "ball_guide": 3.7
      },
      "5": {
        "power": 120,
        "accuracy": 90,
        "top_spin": 94,
        "back_spin": 20,
        "curl": 91,
        "ball_guide": 3.7
      },
      "4": {
        "power": 120,
        "accuracy": 65,
        "top_spin": 88,
        "back_spin": 20,
        "curl": 91,
        "ball_guide": 3.3
      },
      "3": {
        "power": 120,
        "accuracy": 65,
        "top_spin": 88,
        "back_spin": 6,
        "curl": 66,
        "ball_guide": 3.1
      },
      "2": {
        "power": 120,
        "accuracy": 50,
        "top_spin": 70,
        "back_spin": 6,
        "curl": 66,
        "ball_guide": 2.9
      },
      "1": {
        "power": 120,
        "accuracy": 50,
        "top_spin": 70,
        "back_spin": 0,
        "curl": 50,
        "ball_guide": 2.3
      }
    },
    "Houdini": {
      "9": {
        "power": 112,
        "accuracy": 90,
        "top_spin": 70,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 4.7
      },
      "8": {
        "power": 98,
        "accuracy": 79,
        "top_spin": 63,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 4.6
      },
      "7": {
        "power": 98,
        "accuracy": 62,
        "top_spin": 45,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 4.4
      },
      "6": {
        "power": 91,
        "accuracy": 62,
        "top_spin": 39,
        "back_spin": 100,
        "curl": 100,
        "ball_guide": 3.8
      },
      "5": {
        "power": 91,
        "accuracy": 47,
        "top_spin": 33,
        "back_spin": 100,
        "curl": 78,
        "ball_guide": 3.8
      },
      "4": {
        "power": 91,
        "accuracy": 24,
        "top_spin": 27,
        "back_spin": 100,
        "curl": 78,
        "ball_guide": 3.4
      },
      "3": {
        "power": 80,
        "accuracy": 17,
        "top_spin": 27,
        "back_spin": 100,
        "curl": 62,
        "ball_guide": 3.4
      },
      "2": {
        "power": 80,
        "accuracy": 10,
        "top_spin": 16,
        "back_spin": 100,
        "curl": 62,
        "ball_guide": 2.8
      },
      "1": {
        "power": 80,
        "accuracy": 10,
        "top_spin": 0,
        "back_spin": 100,
        "curl": 47,
        "ball_guide": 2.7
      }
    },
    "Sahara": {
      "8": {
        "power": 120,
        "accuracy": 75,
        "top_spin": 100,
        "back_spin": 82,
        "curl": 100,
        "ball_guide": 4.5
      },
      "7": {
        "power": 120,
        "accuracy": 57,
        "top_spin": 100,
        "back_spin": 77,
        "curl": 100,
        "ball_guide": 4.2
      },
      "6": {
        "power": 115,
        "accuracy": 57,
        "top_spin": 100,
        "back_spin": 77,
        "curl": 92,
        "ball_guide": 3.5
      },
      "5": {
        "power": 115,
        "accuracy": 31,
        "top_spin": 100,
        "back_spin": 64,
        "curl": 92,
        "ball_guide": 3.3
      },
      "4": {
        "power": 107,
        "accuracy": 31,
        "top_spin": 81,
        "back_spin": 64,
        "curl": 92,
        "ball_guide": 3.1
      },
      "3": {
        "power": 107,
        "accuracy": 15,
        "top_spin": 81,
        "back_spin": 42,
        "curl": 92,
        "ball_guide": 2.9
      },
      "2": {
        "power": 96,
        "accuracy": 15,
        "top_spin": 81,
        "back_spin": 42,
        "curl": 83,
        "ball_guide": 2.5
      },
      "1": {
        "power": 96,
        "accuracy": 15,
        "top_spin": 70,
        "back_spin": 42,
        "curl": 60,
        "ball_guide": 2.3
      }
    },
    "Malibu": {
      "9": {
        "power": 109,
        "accuracy": 100,
        "top_spin": 30,
        "back_spin": 60,
        "curl": 80,
        "ball_guide": 4.5
      },
      "8": {
        "power": 109,
        "accuracy": 100,
        "top_spin": 28,
        "back_spin": 52,
        "curl": 76,
        "ball_guide": 4.5
      },
      "7": {
        "power": 109,
        "accuracy": 96,
        "top_spin": 28,
        "back_spin": 52,
        "curl": 50,
        "ball_guide": 4.0
      },
      "6": {
        "power": 101,
        "accuracy": 96,
        "top_spin": 28,
        "back_spin": 31,
        "curl": 41,
        "ball_guide": 4.0
      },
      "5": {
        "power": 101,
        "accuracy": 88,
        "top_spin": 28,
        "back_spin": 18,
        "curl": 41,
        "ball_guide": 3.5
      },
      "4": {
        "power": 94,
        "accuracy": 88,
        "top_spin": 11,
        "back_spin": 12,
        "curl": 41,
        "ball_guide": 3.5
      },
      "3": {
        "power": 94,
        "accuracy": 81,
        "top_spin": 11,
        "back_spin": 12,
        "curl": 18,
        "ball_guide": 3.1
      },
      "2": {
        "power": 84,
        "accuracy": 81,
        "top_spin": 11,
        "back_spin": 0,
        "curl": 10,
        "ball_guide": 3.1
      },
      "1": {
        "power": 84,
        "accuracy": 60,
        "top_spin": 0,
        "back_spin": 0,
        "curl": 10,
        "ball_guide": 2.9
      }
    },
    "Castaway": {
      "8": {
        "power": 116,
        "accuracy": 68,
        "top_spin": 75,
        "back_spin": 100,
        "curl": 93,
        "ball_guide": 4.0
      },
      "7": {
        "power": 108,
        "accuracy": 66,
        "top_spin": 52,
        "back_spin": 100,
        "curl": 88,
        "ball_guide": 3.6
      },
      "6": {
        "power": 103,
        "accuracy": 47,
        "top_spin": 52,
        "back_spin": 78,
        "curl": 88,
        "ball_guide": 3.6
      },
      "5": {
        "power": 103,
        "accuracy": 47,
        "top_spin": 39,
        "back_spin": 78,
        "curl": 78,
        "ball_guide": 3.0
      },
      "4": {
        "power": 95,
        "accuracy": 47,
        "top_spin": 39,
        "back_spin": 78,
        "curl": 51,
        "ball_guide": 2.8
      },
      "3": {
        "power": 95,
        "accuracy": 39,
        "top_spin": 21,
        "back_spin": 65,
        "curl": 51,
        "ball_guide": 2.8
      },
      "2": {
        "power": 84,
        "accuracy": 39,
        "top_spin": 21,
        "back_spin": 65,
        "curl": 35,
        "ball_guide": 2.6
      },
      "1": {
        "power": 84,
        "accuracy": 25,
        "top_spin": 15,
        "back_spin": 65,
        "curl": 35,
        "ball_guide": 2.0
      }
    },
    "Sand Lizard": {
      "10": {
        "power": 100,
        "accuracy": 97,
        "top_spin": 82,
        "back_spin": 64,
        "curl": 65,
        "ball_guide": 3.4
      },
      "9": {
        "power": 100,
        "accuracy": 97,
        "top_spin": 77,
        "back_spin": 64,
        "curl": 51,
        "ball_guide": 2.9
      },
      "8": {
        "power": 100,
        "accuracy": 97,
        "top_spin": 66,
        "back_spin": 47,
        "curl": 51,
        "ball_guide": 2.7
      },
      "7": {
        "power": 91,
        "accuracy": 97,
        "top_spin": 66,
        "back_spin": 41,
        "curl": 36,
        "ball_guide": 2.7
      },
      "6": {
        "power": 91,
        "accuracy": 97,
        "top_spin": 51,
        "back_spin": 29,
        "curl": 36,
        "ball_guide": 2.5
      },
      "5": {
        "power": 80,
        "accuracy": 97,
        "top_spin": 51,
        "back_spin": 24,
        "curl": 22,
        "ball_guide": 2.2
      },
      "4": {
        "power": 74,
        "accuracy": 90,
        "top_spin": 51,
        "back_spin": 24,
        "curl": 14,
        "ball_guide": 2.2
      },
      "3": {
        "power": 74,
        "accuracy": 90,
        "top_spin": 40,
        "back_spin": 18,
        "curl": 14,
        "ball_guide": 1.7
      },
      "2": {
        "power": 68,
        "accuracy": 70,
        "top_spin": 35,
        "back_spin": 18,
        "curl": 14,
        "ball_guide": 1.7
      },
      "1": {
        "power": 68,
        "accuracy": 70,
        "top_spin": 20,
        "back_spin": 18,
        "curl": 0,
        "ball_guide": 1.5
      }
    },
    "Desert Storm": {
      "10": {
        "power": 96,
        "accuracy": 54,
        "top_spin": 100,
        "back_spin": 51,
        "curl": 71,
        "ball_guide": 2.7
      },
      "9": {
        "power": 90,
        "accuracy": 54,
        "top_spin": 100,
        "back_spin": 51,
        "curl": 64,
        "ball_guide": 2.2
      },
      "8": {
        "power": 90,
        "accuracy": 40,
        "top_spin": 86,
        "back_spin": 51,
        "curl": 64,
        "ball_guide": 2.0
      },
      "7": {
        "power": 80,
        "accuracy": 40,
        "top_spin": 81,
        "back_spin": 51,
        "curl": 49,
        "ball_guide": 2.0
      },
      "6": {
        "power": 80,
        "accuracy": 33,
        "top_spin": 81,
        "back_spin": 34,
        "curl": 49,
        "ball_guide": 1.7
      },
      "5": {
        "power": 80,
        "accuracy": 33,
        "top_spin": 76,
        "back_spin": 22,
        "curl": 27,
        "ball_guide": 1.7
      },
      "4": {
        "power": 80,
        "accuracy": 20,
        "top_spin": 76,
        "back_spin": 17,
        "curl": 27,
        "ball_guide": 1.2
      },
      "3": {
        "power": 73,
        "accuracy": 20,
        "top_spin": 60,
        "back_spin": 17,
        "curl": 20,
        "ball_guide": 1.2
      },
      "2": {
        "power": 73,
        "accuracy": 0,
        "top_spin": 60,
        "back_spin": 6,
        "curl": 20,
        "ball_guide": 1.0
      },
      "1": {
        "power": 64,
        "accuracy": 0,
        "top_spin": 50,
        "back_spin": 0,
        "curl": 20,
        "ball_guide": 1.0
      }
    }
  }
};

const epics = new Set(["Big_Topper","Thors_Hammer","Apocalypse","Horizon","Hammerhead","Cataclysm","Grim_Reaper","B52","Tsunami","Kingfisher","Falcon","Firefly","Boomerang","Endbringer","Junglist","Off_Roader","Amazon","Castaway","Sahara","Spitfire"]);

const rares = new Set(["Extra_Mile","Rock","Big_Dawg","Guardian","Goliath","Grizzly","Apache","Thorn","Hornet","Down_In_One","Rapier","Roughcutter","Razor","Nirvana","Malibu","Houdini"]);

export { clubCats, clubShortNames, windData, clubStats, epics, rares };
