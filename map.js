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
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 334,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 320,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 361,
          "y": 192,
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
          "y": 618,
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
          "x": 376,
          "y": 138,
          "w": 43,
          "h": 52
        },
        {
          "id": "01-1",
          "type": "umbrella",
          "x": 334,
          "y": 307,
          "w": 43,
          "h": 43
        },
        {
          "id": "01-2",
          "type": "boot",
          "x": 348,
          "y": 468,
          "w": 43,
          "h": 42
        }
      ]
    },
    {
      "id": "02",
      "bg": "assets/bg/02.png",
      "platforms": [
        {
          "x": 110,
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 340,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 70,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 252,
          "y": 192,
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
          "x": 266,
          "y": 147,
          "w": 43,
          "h": 43
        },
        {
          "id": "02-1",
          "type": "boot",
          "x": 84,
          "y": 308,
          "w": 43,
          "h": 42
        },
        {
          "id": "02-2",
          "type": "shield",
          "x": 354,
          "y": 458,
          "w": 43,
          "h": 52
        }
      ]
    },
    {
      "id": "03",
      "bg": "assets/bg/03.png",
      "platforms": [
        {
          "x": 104,
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 192,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 70,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 273,
          "y": 192,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [],
      "items": [
        {
          "id": "03-0",
          "type": "boot",
          "x": 288,
          "y": 148,
          "w": 43,
          "h": 42
        },
        {
          "id": "03-1",
          "type": "shield",
          "x": 84,
          "y": 298,
          "w": 43,
          "h": 52
        },
        {
          "id": "03-2",
          "type": "umbrella",
          "x": 206,
          "y": 467,
          "w": 43,
          "h": 43
        }
      ]
    },
    {
      "id": "04",
      "bg": "assets/bg/04.png",
      "platforms": [
        {
          "x": 171,
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 266,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 192,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 246,
          "y": 192,
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
          "y": 470,
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
          "x": 260,
          "y": 138,
          "w": 43,
          "h": 52
        },
        {
          "id": "04-1",
          "type": "umbrella",
          "x": 206,
          "y": 307,
          "w": 43,
          "h": 43
        },
        {
          "id": "04-2",
          "type": "boot",
          "x": 186,
          "y": 628,
          "w": 43,
          "h": 42
        }
      ]
    },
    {
      "id": "05",
      "bg": "assets/bg/05.png",
      "platforms": [
        {
          "x": 165,
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 279,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 192,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 293,
          "y": 192,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [],
      "items": [
        {
          "id": "05-0",
          "type": "umbrella",
          "x": 308,
          "y": 147,
          "w": 43,
          "h": 43
        },
        {
          "id": "05-1",
          "type": "boot",
          "x": 206,
          "y": 308,
          "w": 43,
          "h": 42
        },
        {
          "id": "05-2",
          "type": "shield",
          "x": 294,
          "y": 458,
          "w": 43,
          "h": 52
        }
      ]
    },
    {
      "id": "06",
      "bg": "assets/bg/06.png",
      "platforms": [
        {
          "x": 83,
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 277,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 190,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 291,
          "y": 192,
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
      "mobs": [],
      "items": [
        {
          "id": "06-0",
          "type": "boot",
          "x": 306,
          "y": 148,
          "w": 43,
          "h": 42
        },
        {
          "id": "06-1",
          "type": "shield",
          "x": 204,
          "y": 298,
          "w": 43,
          "h": 52
        },
        {
          "id": "06-2",
          "type": "umbrella",
          "x": 292,
          "y": 467,
          "w": 43,
          "h": 43
        }
      ]
    },
    {
      "id": "07",
      "bg": "assets/bg/07.png",
      "platforms": [
        {
          "x": 183,
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 298,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 103,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 264,
          "y": 192,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 188,
          "y": 636,
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
          "x": 278,
          "y": 138,
          "w": 43,
          "h": 52
        },
        {
          "id": "07-1",
          "type": "umbrella",
          "x": 118,
          "y": 307,
          "w": 43,
          "h": 43
        },
        {
          "id": "07-2",
          "type": "boot",
          "x": 312,
          "y": 468,
          "w": 43,
          "h": 42
        }
      ]
    },
    {
      "id": "08",
      "bg": "assets/bg/08.png",
      "platforms": [
        {
          "x": 163,
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 291,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 116,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 324,
          "y": 192,
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
      "mobs": [],
      "items": [
        {
          "id": "08-0",
          "type": "umbrella",
          "x": 338,
          "y": 147,
          "w": 43,
          "h": 43
        },
        {
          "id": "08-1",
          "type": "boot",
          "x": 130,
          "y": 308,
          "w": 43,
          "h": 42
        },
        {
          "id": "08-2",
          "type": "shield",
          "x": 306,
          "y": 458,
          "w": 43,
          "h": 52
        }
      ]
    },
    {
      "id": "09",
      "bg": "assets/bg/09.png",
      "platforms": [
        {
          "x": 198,
          "y": 672,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 279,
          "y": 512,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 151,
          "y": 352,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 273,
          "y": 192,
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
          "x": 288,
          "y": 148,
          "w": 43,
          "h": 42
        },
        {
          "id": "09-1",
          "type": "shield",
          "x": 166,
          "y": 298,
          "w": 43,
          "h": 52
        },
        {
          "id": "09-2",
          "type": "umbrella",
          "x": 294,
          "y": 467,
          "w": 43,
          "h": 43
        }
      ]
    },
    {
      "id": "10",
      "bg": "assets/bg/10.png",
      "platforms": [
        {
          "x": 397,
          "y": 396,
          "w": 72,
          "h": 22,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 335,
          "y": 521,
          "w": 72,
          "h": 40,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 251,
          "y": 646,
          "w": 72,
          "h": 28,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 366,
          "y": 739,
          "w": 72,
          "h": 31,
          "sprite": "assets/plat/16.png",
          "type": "16"
        }
      ],
      "winds": [],
      "mobs": [],
      "items": [
        {
          "id": "10-0",
          "type": "shield",
          "x": 412,
          "y": 342,
          "w": 43,
          "h": 52
        },
        {
          "id": "10-1",
          "type": "umbrella",
          "x": 350,
          "y": 476,
          "w": 43,
          "h": 43
        },
        {
          "id": "10-2",
          "type": "boot",
          "x": 266,
          "y": 602,
          "w": 43,
          "h": 42
        }
      ]
    }
  ]
};
