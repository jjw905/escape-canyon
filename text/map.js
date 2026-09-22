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
          "x": 0,
          "y": 615,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 142,
          "y": 476,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 0,
          "y": 377,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 142,
          "y": 239,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 0,
          "y": 117,
          "w": 72,
          "h": 59,
          "sprite": "assets/plat/13.png",
          "type": "13"
        },
        {
          "x": 408,
          "y": 610,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 266,
          "y": 466,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 408,
          "y": 368.5,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 266,
          "y": 234,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        },
        {
          "x": 408,
          "y": 113,
          "w": 72,
          "h": 67,
          "sprite": "assets/plat/25.png",
          "type": "25"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 142,
          "y": 443,
          "w": 72,
          "h": 65,
          "kind": "sheep",
          "left": 142,
          "right": 142,
          "platX": 142,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "01-0",
          "type": "boot",
          "x": 430,
          "y": 360,
          "w": 28,
          "h": 27
        },
        {
          "id": "01-1",
          "type": "shield",
          "x": 25,
          "y": 362,
          "w": 22,
          "h": 26
        },
        {
          "id": "01-2",
          "type": "umbrella",
          "x": 288,
          "y": 239,
          "w": 28,
          "h": 28
        }
      ]
    },
    {
      "id": "02",
      "bg": "assets/bg/02.png",
      "platforms": [
        {
          "x": 0,
          "y": 762,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/12.png",
          "type": "12"
        },
        {
          "x": 142,
          "y": 636,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 0,
          "y": 561,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 142,
          "y": 433,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 0,
          "y": 341,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 142,
          "y": 224,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 0,
          "y": 127.5,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 408,
          "y": 765.5,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 266,
          "y": 646,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 408,
          "y": 541,
          "w": 72,
          "h": 61,
          "sprite": "assets/plat/27.png",
          "type": "27"
        },
        {
          "x": 266,
          "y": 437,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 408,
          "y": 336,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/01.png",
          "type": "01"
        },
        {
          "x": 266,
          "y": 217,
          "w": 72,
          "h": 71,
          "sprite": "assets/plat/04.png",
          "type": "04"
        },
        {
          "x": 408,
          "y": 123,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/08.png",
          "type": "08"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 142,
          "y": 411,
          "w": 72,
          "h": 54,
          "kind": "condor",
          "homeX": 142,
          "homeY": 411
        }
      ],
      "items": [
        {
          "id": "02-0",
          "type": "shield",
          "x": 167,
          "y": 652,
          "w": 22,
          "h": 26
        },
        {
          "id": "02-1",
          "type": "umbrella",
          "x": 430,
          "y": 756,
          "w": 28,
          "h": 28
        },
        {
          "id": "02-2",
          "type": "boot",
          "x": 288,
          "y": 225,
          "w": 28,
          "h": 27
        }
      ]
    },
    {
      "id": "03",
      "bg": "assets/bg/03.png",
      "platforms": [
        {
          "x": 0,
          "y": 771,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 142,
          "y": 645,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        },
        {
          "x": 0,
          "y": 538,
          "w": 72,
          "h": 67,
          "sprite": "assets/plat/25.png",
          "type": "25"
        },
        {
          "x": 142,
          "y": 423,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 0,
          "y": 329,
          "w": 72,
          "h": 61,
          "sprite": "assets/plat/28.png",
          "type": "28"
        },
        {
          "x": 142,
          "y": 220,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 0,
          "y": 123,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/02.png",
          "type": "02"
        },
        {
          "x": 408,
          "y": 761,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/02.png",
          "type": "02"
        },
        {
          "x": 266,
          "y": 636,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 408,
          "y": 549,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/09.png",
          "type": "09"
        },
        {
          "x": 266,
          "y": 433,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 408,
          "y": 337,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/12.png",
          "type": "12"
        },
        {
          "x": 266,
          "y": 224,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 408,
          "y": 136,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 142,
          "y": 613,
          "w": 72,
          "h": 65,
          "kind": "sheep",
          "left": 142,
          "right": 142,
          "platX": 142,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "03-0",
          "type": "umbrella",
          "x": 22,
          "y": 543,
          "w": 28,
          "h": 28
        },
        {
          "id": "03-1",
          "type": "boot",
          "x": 430,
          "y": 757,
          "w": 28,
          "h": 27
        },
        {
          "id": "03-2",
          "type": "shield",
          "x": 291,
          "y": 226,
          "w": 22,
          "h": 26
        }
      ]
    },
    {
      "id": "04",
      "bg": "assets/bg/04.png",
      "platforms": [
        {
          "x": 0,
          "y": 761,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/01.png",
          "type": "01"
        },
        {
          "x": 142,
          "y": 643,
          "w": 72,
          "h": 71,
          "sprite": "assets/plat/04.png",
          "type": "04"
        },
        {
          "x": 0,
          "y": 548,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/08.png",
          "type": "08"
        },
        {
          "x": 142,
          "y": 432,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        },
        {
          "x": 0,
          "y": 336,
          "w": 72,
          "h": 46,
          "sprite": "assets/plat/11.png",
          "type": "11"
        },
        {
          "x": 142,
          "y": 210,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 0,
          "y": 117,
          "w": 72,
          "h": 59,
          "sprite": "assets/plat/13.png",
          "type": "13"
        },
        {
          "x": 408,
          "y": 755,
          "w": 72,
          "h": 59,
          "sprite": "assets/plat/13.png",
          "type": "13"
        },
        {
          "x": 266,
          "y": 645,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        },
        {
          "x": 408,
          "y": 557,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        },
        {
          "x": 266,
          "y": 423,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 408,
          "y": 346,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 266,
          "y": 220,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 408,
          "y": 113,
          "w": 72,
          "h": 67,
          "sprite": "assets/plat/25.png",
          "type": "25"
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
          "x": 142,
          "y": 411,
          "w": 72,
          "h": 54,
          "kind": "condor",
          "homeX": 142,
          "homeY": 411
        },
        {
          "x": 266,
          "y": 618,
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
          "type": "boot",
          "x": 164,
          "y": 651,
          "w": 28,
          "h": 27
        },
        {
          "id": "04-1",
          "type": "shield",
          "x": 433,
          "y": 758,
          "w": 22,
          "h": 26
        },
        {
          "id": "04-2",
          "type": "umbrella",
          "x": 288,
          "y": 224,
          "w": 28,
          "h": 28
        }
      ]
    },
    {
      "id": "05",
      "bg": "assets/bg/05.png",
      "platforms": [
        {
          "x": 0,
          "y": 762,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/12.png",
          "type": "12"
        },
        {
          "x": 142,
          "y": 597,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 0,
          "y": 455,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 142,
          "y": 271,
          "w": 72,
          "h": 71,
          "sprite": "assets/plat/04.png",
          "type": "04"
        },
        {
          "x": 0,
          "y": 128,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 408,
          "y": 765.5,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 266,
          "y": 590,
          "w": 72,
          "h": 71,
          "sprite": "assets/plat/04.png",
          "type": "04"
        },
        {
          "x": 408,
          "y": 435,
          "w": 72,
          "h": 61,
          "sprite": "assets/plat/27.png",
          "type": "27"
        },
        {
          "x": 266,
          "y": 273,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        },
        {
          "x": 408,
          "y": 123,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/01.png",
          "type": "01"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 266,
          "y": 565,
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
          "id": "05-0",
          "type": "shield",
          "x": 167,
          "y": 599,
          "w": 22,
          "h": 26
        },
        {
          "id": "05-1",
          "type": "umbrella",
          "x": 22,
          "y": 118,
          "w": 28,
          "h": 28
        },
        {
          "id": "05-2",
          "type": "boot",
          "x": 288,
          "y": 279,
          "w": 28,
          "h": 27
        }
      ]
    },
    {
      "id": "06",
      "bg": "assets/bg/06.png",
      "platforms": [
        {
          "x": 0,
          "y": 771,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 142,
          "y": 593,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 0,
          "y": 432,
          "w": 72,
          "h": 67,
          "sprite": "assets/plat/25.png",
          "type": "25"
        },
        {
          "x": 142,
          "y": 278,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 0,
          "y": 116,
          "w": 72,
          "h": 61,
          "sprite": "assets/plat/28.png",
          "type": "28"
        },
        {
          "x": 408,
          "y": 761,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/02.png",
          "type": "02"
        },
        {
          "x": 266,
          "y": 597,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 408,
          "y": 443,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/09.png",
          "type": "09"
        },
        {
          "x": 266,
          "y": 271,
          "w": 72,
          "h": 71,
          "sprite": "assets/plat/04.png",
          "type": "04"
        },
        {
          "x": 408,
          "y": 124,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/12.png",
          "type": "12"
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
          "x": 266,
          "y": 579,
          "w": 72,
          "h": 46,
          "kind": "wolf",
          "left": 266,
          "right": 266,
          "platX": 266,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "06-0",
          "type": "umbrella",
          "x": 164,
          "y": 597,
          "w": 28,
          "h": 28
        },
        {
          "id": "06-1",
          "type": "boot",
          "x": 22,
          "y": 119,
          "w": 28,
          "h": 27
        },
        {
          "id": "06-2",
          "type": "shield",
          "x": 291,
          "y": 280,
          "w": 22,
          "h": 26
        }
      ]
    },
    {
      "id": "07",
      "bg": "assets/bg/07.png",
      "platforms": [
        {
          "x": 0,
          "y": 761,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/01.png",
          "type": "01"
        },
        {
          "x": 142,
          "y": 583,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 0,
          "y": 442,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/08.png",
          "type": "08"
        },
        {
          "x": 142,
          "y": 274,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 0,
          "y": 123,
          "w": 72,
          "h": 46,
          "sprite": "assets/plat/11.png",
          "type": "11"
        },
        {
          "x": 408,
          "y": 755,
          "w": 72,
          "h": 59,
          "sprite": "assets/plat/13.png",
          "type": "13"
        },
        {
          "x": 266,
          "y": 593,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 408,
          "y": 451,
          "w": 72,
          "h": 29,
          "sprite": "assets/plat/16.png",
          "type": "16"
        },
        {
          "x": 266,
          "y": 278,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 408,
          "y": 133,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 266,
          "y": 579,
          "w": 72,
          "h": 46,
          "kind": "wolf",
          "left": 266,
          "right": 266,
          "platX": 266,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "07-0",
          "type": "boot",
          "x": 164,
          "y": 598,
          "w": 28,
          "h": 27
        },
        {
          "id": "07-1",
          "type": "shield",
          "x": 25,
          "y": 120,
          "w": 22,
          "h": 26
        },
        {
          "id": "07-2",
          "type": "umbrella",
          "x": 288,
          "y": 278,
          "w": 28,
          "h": 28
        }
      ]
    },
    {
      "id": "08",
      "bg": "assets/bg/08.png",
      "platforms": [
        {
          "x": 0,
          "y": 762,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/12.png",
          "type": "12"
        },
        {
          "x": 142,
          "y": 592,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        },
        {
          "x": 0,
          "y": 455,
          "w": 72,
          "h": 21,
          "sprite": "assets/plat/15.png",
          "type": "15"
        },
        {
          "x": 142,
          "y": 264,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 0,
          "y": 128,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 408,
          "y": 765.5,
          "w": 72,
          "h": 37,
          "sprite": "assets/plat/21.png",
          "type": "21"
        },
        {
          "x": 266,
          "y": 583,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 408,
          "y": 435,
          "w": 72,
          "h": 61,
          "sprite": "assets/plat/27.png",
          "type": "27"
        },
        {
          "x": 266,
          "y": 274,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 408,
          "y": 123,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/01.png",
          "type": "01"
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
          "x": 142,
          "y": 560,
          "w": 72,
          "h": 65,
          "kind": "sheep",
          "left": 142,
          "right": 142,
          "platX": 142,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "08-0",
          "type": "shield",
          "x": 25,
          "y": 439,
          "w": 22,
          "h": 26
        },
        {
          "id": "08-1",
          "type": "umbrella",
          "x": 430,
          "y": 756,
          "w": 28,
          "h": 28
        },
        {
          "id": "08-2",
          "type": "boot",
          "x": 288,
          "y": 279,
          "w": 28,
          "h": 27
        }
      ]
    },
    {
      "id": "09",
      "bg": "assets/bg/09.png",
      "platforms": [
        {
          "x": 0,
          "y": 771,
          "w": 72,
          "h": 26,
          "sprite": "assets/plat/22.png",
          "type": "22"
        },
        {
          "x": 142,
          "y": 590,
          "w": 72,
          "h": 71,
          "sprite": "assets/plat/04.png",
          "type": "04"
        },
        {
          "x": 0,
          "y": 432,
          "w": 72,
          "h": 67,
          "sprite": "assets/plat/25.png",
          "type": "25"
        },
        {
          "x": 142,
          "y": 273,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        },
        {
          "x": 0,
          "y": 116,
          "w": 72,
          "h": 61,
          "sprite": "assets/plat/28.png",
          "type": "28"
        },
        {
          "x": 408,
          "y": 761,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/02.png",
          "type": "02"
        },
        {
          "x": 266,
          "y": 592,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        },
        {
          "x": 408,
          "y": 443,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/09.png",
          "type": "09"
        },
        {
          "x": 266,
          "y": 264,
          "w": 72,
          "h": 84,
          "sprite": "assets/plat/18.png",
          "type": "18"
        },
        {
          "x": 408,
          "y": 124,
          "w": 72,
          "h": 44,
          "sprite": "assets/plat/12.png",
          "type": "12"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 142,
          "y": 252,
          "w": 72,
          "h": 54,
          "kind": "condor",
          "homeX": 142,
          "homeY": 252
        }
      ],
      "items": [
        {
          "id": "09-0",
          "type": "umbrella",
          "x": 164,
          "y": 597,
          "w": 28,
          "h": 28
        },
        {
          "id": "09-1",
          "type": "boot",
          "x": 430,
          "y": 757,
          "w": 28,
          "h": 27
        },
        {
          "id": "09-2",
          "type": "shield",
          "x": 291,
          "y": 280,
          "w": 22,
          "h": 26
        }
      ]
    },
    {
      "id": "10",
      "bg": "assets/bg/10.png",
      "platforms": [
        {
          "x": 0,
          "y": 761,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/01.png",
          "type": "01"
        },
        {
          "x": 142,
          "y": 597,
          "w": 72,
          "h": 56,
          "sprite": "assets/plat/17.png",
          "type": "17"
        },
        {
          "x": 0,
          "y": 442,
          "w": 72,
          "h": 47,
          "sprite": "assets/plat/08.png",
          "type": "08"
        },
        {
          "x": 142,
          "y": 271,
          "w": 72,
          "h": 71,
          "sprite": "assets/plat/04.png",
          "type": "04"
        },
        {
          "x": 408,
          "y": 755,
          "w": 72,
          "h": 59,
          "sprite": "assets/plat/13.png",
          "type": "13"
        },
        {
          "x": 266,
          "y": 590,
          "w": 72,
          "h": 71,
          "sprite": "assets/plat/04.png",
          "type": "04"
        },
        {
          "x": 408,
          "y": 434,
          "w": 72,
          "h": 64,
          "sprite": "assets/plat/05.png",
          "type": "05"
        },
        {
          "x": 266,
          "y": 273,
          "w": 72,
          "h": 66,
          "sprite": "assets/plat/07.png",
          "type": "07"
        }
      ],
      "winds": [],
      "mobs": [
        {
          "x": 266,
          "y": 579,
          "w": 72,
          "h": 46,
          "kind": "wolf",
          "left": 266,
          "right": 266,
          "platX": 266,
          "platW": 72
        }
      ],
      "items": [
        {
          "id": "10-0",
          "type": "boot",
          "x": 164,
          "y": 598,
          "w": 28,
          "h": 27
        },
        {
          "id": "10-1",
          "type": "shield",
          "x": 25,
          "y": 440,
          "w": 22,
          "h": 26
        },
        {
          "id": "10-2",
          "type": "umbrella",
          "x": 288,
          "y": 278,
          "w": 28,
          "h": 28
        }
      ]
    }
  ]
};
