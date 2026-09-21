const MAP = {
  "view": {
    "w": 480,
    "h": 800
  },
  "player": {
    "body": [
      26,
      72
    ],
    "frames": {
      "idle": {
        "src": "assets/player/idle.png",
        "w": 45,
        "h": 78
      },
      "crouch": {
        "src": "assets/player/crouch.png",
        "w": 77,
        "h": 58
      },
      "jump": {
        "src": "assets/player/jump.png",
        "w": 58,
        "h": 77
      },
      "fall": {
        "src": "assets/player/fall.png",
        "w": 69,
        "h": 69
      }
    }
  },
  "screens": [
    {
      "id": "01",
      "bg": "assets/bg/01.png",
      "platforms": [
        {
          "x": 110,
          "y": 602,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 282,
          "y": 440,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 320,
          "y": 290,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 361,
          "y": 134,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 110,
          "y": 548,
          "w": 72,
          "h": 65,
          "kind": "sheep",
          "left": 110,
          "right": 110,
          "platX": 110,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "01-0",
          "type": "shield",
          "x": 386,
          "y": 108,
          "w": 22,
          "h": 26
        },
        {
          "id": "01-1",
          "type": "umbrella",
          "x": 342,
          "y": 262,
          "w": 28,
          "h": 28
        },
        {
          "id": "01-2",
          "type": "boot",
          "x": 304,
          "y": 413,
          "w": 28,
          "h": 27
        }
      ]
    },
    {
      "id": "02",
      "bg": "assets/bg/02.png",
      "platforms": [
        {
          "x": 361,
          "y": 774,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 189,
          "y": 620,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 340,
          "y": 456,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 168,
          "y": 307,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 252,
          "y": 150,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 15,
          "y": 220,
          "w": 72,
          "h": 54,
          "kind": "condor",
          "homeX": 15,
          "homeY": 220
        }
      ],
      "items": [
        {
          "id": "02-0",
          "type": "umbrella",
          "x": 274,
          "y": 122,
          "w": 28,
          "h": 28
        },
        {
          "id": "02-1",
          "type": "boot",
          "x": 190,
          "y": 280,
          "w": 28,
          "h": 27
        },
        {
          "id": "02-2",
          "type": "shield",
          "x": 365,
          "y": 430,
          "w": 22,
          "h": 26
        }
      ]
    },
    {
      "id": "03",
      "bg": "assets/bg/03.png",
      "platforms": [
        {
          "x": 252,
          "y": 774,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 104,
          "y": 620,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 192,
          "y": 456,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 70,
          "y": 307,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 273,
          "y": 150,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 104,
          "y": 566,
          "w": 72,
          "h": 65,
          "kind": "sheep",
          "left": 104,
          "right": 104,
          "platX": 104,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "03-0",
          "type": "boot",
          "x": 295,
          "y": 123,
          "w": 28,
          "h": 27
        },
        {
          "id": "03-1",
          "type": "shield",
          "x": 95,
          "y": 281,
          "w": 22,
          "h": 26
        },
        {
          "id": "03-2",
          "type": "umbrella",
          "x": 214,
          "y": 428,
          "w": 28,
          "h": 28
        }
      ]
    },
    {
      "id": "04",
      "bg": "assets/bg/04.png",
      "platforms": [
        {
          "x": 273,
          "y": 774,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 171,
          "y": 620,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 266,
          "y": 456,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 192,
          "y": 307,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 246,
          "y": 150,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [
        {
          "x": 78,
          "y": 15,
          "w": 325,
          "h": 88,
          "dir": 1
        }
      ],
      "mobs": [
        {
          "x": 78,
          "y": 244,
          "w": 72,
          "h": 54,
          "kind": "condor",
          "homeX": 78,
          "homeY": 244
        },
        {
          "x": 266,
          "y": 414,
          "w": 72,
          "h": 60,
          "kind": "squirrel",
          "left": 266,
          "right": 266,
          "platX": 266,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "04-0",
          "type": "shield",
          "x": 271,
          "y": 124,
          "w": 22,
          "h": 26
        },
        {
          "id": "04-1",
          "type": "umbrella",
          "x": 214,
          "y": 279,
          "w": 28,
          "h": 28
        },
        {
          "id": "04-2",
          "type": "boot",
          "x": 193,
          "y": 593,
          "w": 28,
          "h": 27
        }
      ]
    },
    {
      "id": "05",
      "bg": "assets/bg/05.png",
      "platforms": [
        {
          "x": 246,
          "y": 774,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 165,
          "y": 620,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 279,
          "y": 456,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 192,
          "y": 307,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 293,
          "y": 150,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 165,
          "y": 570,
          "w": 72,
          "h": 60,
          "kind": "squirrel",
          "left": 165,
          "right": 165,
          "platX": 165,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "05-0",
          "type": "umbrella",
          "x": 315,
          "y": 122,
          "w": 28,
          "h": 28
        },
        {
          "id": "05-1",
          "type": "boot",
          "x": 214,
          "y": 280,
          "w": 28,
          "h": 27
        },
        {
          "id": "05-2",
          "type": "shield",
          "x": 304,
          "y": 430,
          "w": 22,
          "h": 26
        }
      ]
    },
    {
      "id": "06",
      "bg": "assets/bg/06.png",
      "platforms": [
        {
          "x": 293,
          "y": 774,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 83,
          "y": 620,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 277,
          "y": 456,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 190,
          "y": 307,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 291,
          "y": 150,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [
        {
          "x": 79,
          "y": 15,
          "w": 322,
          "h": 88,
          "dir": 1
        }
      ],
      "mobs": [
        {
          "x": 83,
          "y": 584,
          "w": 72,
          "h": 46,
          "kind": "wolf",
          "left": 83,
          "right": 83,
          "platX": 83,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "06-0",
          "type": "boot",
          "x": 313,
          "y": 123,
          "w": 28,
          "h": 27
        },
        {
          "id": "06-1",
          "type": "shield",
          "x": 215,
          "y": 281,
          "w": 22,
          "h": 26
        },
        {
          "id": "06-2",
          "type": "umbrella",
          "x": 299,
          "y": 428,
          "w": 28,
          "h": 28
        }
      ]
    },
    {
      "id": "07",
      "bg": "assets/bg/07.png",
      "platforms": [
        {
          "x": 291,
          "y": 774,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 183,
          "y": 620,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 298,
          "y": 456,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 103,
          "y": 307,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 264,
          "y": 150,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 183,
          "y": 584,
          "w": 72,
          "h": 46,
          "kind": "wolf",
          "left": 183,
          "right": 183,
          "platX": 183,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "07-0",
          "type": "shield",
          "x": 289,
          "y": 124,
          "w": 22,
          "h": 26
        },
        {
          "id": "07-1",
          "type": "umbrella",
          "x": 125,
          "y": 279,
          "w": 28,
          "h": 28
        },
        {
          "id": "07-2",
          "type": "boot",
          "x": 320,
          "y": 429,
          "w": 28,
          "h": 27
        }
      ]
    },
    {
      "id": "08",
      "bg": "assets/bg/08.png",
      "platforms": [
        {
          "x": 264,
          "y": 774,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 163,
          "y": 620,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 291,
          "y": 456,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 116,
          "y": 307,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 324,
          "y": 150,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [
        {
          "x": 79,
          "y": 15,
          "w": 322,
          "h": 88,
          "dir": 1
        }
      ],
      "mobs": [
        {
          "x": 163,
          "y": 566,
          "w": 72,
          "h": 65,
          "kind": "sheep",
          "left": 163,
          "right": 163,
          "platX": 163,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "08-0",
          "type": "umbrella",
          "x": 346,
          "y": 122,
          "w": 28,
          "h": 28
        },
        {
          "id": "08-1",
          "type": "boot",
          "x": 138,
          "y": 280,
          "w": 28,
          "h": 27
        },
        {
          "id": "08-2",
          "type": "shield",
          "x": 316,
          "y": 430,
          "w": 22,
          "h": 26
        }
      ]
    },
    {
      "id": "09",
      "bg": "assets/bg/09.png",
      "platforms": [
        {
          "x": 324,
          "y": 774,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 198,
          "y": 620,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 279,
          "y": 456,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 151,
          "y": 307,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 273,
          "y": 150,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 89,
          "y": 237,
          "w": 72,
          "h": 54,
          "kind": "condor",
          "homeX": 89,
          "homeY": 237
        }
      ],
      "items": [
        {
          "id": "09-0",
          "type": "boot",
          "x": 295,
          "y": 123,
          "w": 28,
          "h": 27
        },
        {
          "id": "09-1",
          "type": "shield",
          "x": 176,
          "y": 281,
          "w": 22,
          "h": 26
        },
        {
          "id": "09-2",
          "type": "umbrella",
          "x": 301,
          "y": 428,
          "w": 28,
          "h": 28
        }
      ]
    },
    {
      "id": "10",
      "bg": "assets/bg/10.png",
      "platforms": [
        {
          "x": 273,
          "y": 774,
          "w": 72,
          "h": 22,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 366,
          "y": 614,
          "w": 72,
          "h": 31,
          "sprite": "assets/plat/16.png",
          "type": "16"
        },
        {
          "x": 251,
          "y": 461,
          "w": 72,
          "h": 28,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 335,
          "y": 300,
          "w": 72,
          "h": 40,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 397,
          "y": 154,
          "w": 72,
          "h": 22,
          "sprite": "assets/plat/15.png",
          "type": "15"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 366,
          "y": 584,
          "w": 72,
          "h": 46,
          "kind": "wolf",
          "left": 366,
          "right": 366,
          "platX": 366,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "10-0",
          "type": "shield",
          "x": 422,
          "y": 128,
          "w": 22,
          "h": 26
        },
        {
          "id": "10-1",
          "type": "umbrella",
          "x": 357,
          "y": 272,
          "w": 28,
          "h": 28
        },
        {
          "id": "10-2",
          "type": "boot",
          "x": 273,
          "y": 434,
          "w": 28,
          "h": 27
        }
      ]
    }
  ]
};
