# Escape Canyon

```
escape-canyon
├── README.md
├── default-prompt.txt
├── map.js
├── prompt-setting.txt
├── assets
│   ├── bighorn
│   │   ├── bighorn_idle_makebead.png
│   │   ├── bighorn_ram_makebead.png
│   │   ├── bighorn_ram_prep_makebead.png
│   │   ├── bighorn_ram_recover_makebead.png
│   │   ├── bighorn_walk_0_makebead.png
│   │   ├── bighorn_walk_1_makebead.png
│   │   ├── bighorn_walk_2_makebead.png
│   │   └── bighorn_walk_3_makebead.png
│   ├── condor
│   │   ├── cal_condor_idle_makebead.png
│   │   ├── cal_condor_return_makebead.png
│   │   ├── cal_condor_takeoff_makebead.png
│   │   ├── condor_carry_makebead.png
│   │   ├── condor_grab_makebead.png
│   │   ├── condor_swoop_0_makebead.png
│   │   └── condor_swoop_1_makebead.png
│   ├── gray_wolf
│   │   ├── gray_wolf_happy_heart_makebead.png
│   │   ├── gray_wolf_idle_makebead.png
│   │   ├── gray_wolf_laugh_makebead.png
│   │   ├── gray_wolf_music_makebead.png
│   │   ├── gray_wolf_sit_up_makebead.png
│   │   ├── gray_wolf_walk_0_makebead.png
│   │   ├── gray_wolf_walk_1_makebead.png
│   │   ├── gray_wolf_walk_2_makebead.png
│   │   └── gray_wolf_walk_3_makebead.png
│   ├── item
│   │   ├── item_boot.png
│   │   ├── item_shield.png
│   │   └── item_umbrella.png
│   ├── map
│   │   ├── 01.png
│   │   ├── 02.png
│   │   ├── 03.png
│   │   ├── 04.png
│   │   ├── 05.png
│   │   ├── 06.png
│   │   ├── 07.png
│   │   ├── 08.png
│   │   ├── 09.png
│   │   └── 10.png
│   ├── platform
│   │   ├── canyon_platform_01_makebead.png
│   │   ├── canyon_platform_02_makebead.png
│   │   ├── canyon_platform_03_makebead.png
│   │   ├── canyon_platform_04_makebead.png
│   │   ├── canyon_platform_05_makebead.png
│   │   ├── canyon_platform_06_makebead.png
│   │   ├── canyon_platform_07_makebead.png
│   │   ├── canyon_platform_08_makebead.png
│   │   ├── canyon_platform_09_makebead.png
│   │   ├── canyon_platform_10_makebead.png
│   │   ├── canyon_platform_11_makebead.png
│   │   ├── canyon_platform_12_makebead.png
│   │   ├── canyon_platform_13_makebead.png
│   │   ├── canyon_platform_14_makebead.png
│   │   ├── canyon_platform_15_makebead.png
│   │   ├── canyon_platform_16_makebead.png
│   │   ├── canyon_platform_17_makebead.png
│   │   ├── canyon_platform_18_makebead.png
│   │   ├── canyon_platform_19_makebead.png
│   │   ├── canyon_platform_20_makebead.png
│   │   ├── canyon_platform_21_makebead.png
│   │   ├── canyon_platform_22_makebead.png
│   │   ├── canyon_platform_23_makebead.png
│   │   ├── canyon_platform_29_makebead.png
│   │   ├── canyon_platform_30_makebead.png
│   │   ├── canyon_platform_31_makebead.png
│   │   └── canyon_platform_32_makebead.png
│   ├── player
│   │   ├── player_crouch_136x112.png
│   │   ├── player_fall_123x133.png
│   │   ├── player_idle_80x149.png
│   │   └── player_jump_103x148.png
│   ├── sfx
│   │   ├── item.wav
│   │   ├── jump.wav
│   │   ├── turu.wav
│   │   ├── wind.wav
│   │   └── wolf.wav
│   ├── squirrel
│   │   ├── squirrel_drop_makebead.png
│   │   ├── squirrel_idle_makebead.png
│   │   ├── squirrel_leap_makebead.png
│   │   ├── squirrel_walk_0_makebead.png
│   │   ├── squirrel_walk_1_makebead.png
│   │   ├── squirrel_walk_2_makebead.png
│   │   └── squirrel_walk_3_makebead.png
│   ├── ui
│   │   ├── clear_screen.png
│   │   ├── game_main_screen.png
│   │   ├── game_over_banner.png
│   │   ├── game_over_screen.png
│   │   ├── game_start_background.png
│   │   ├── game_start_logo.png
│   │   ├── pause.png
│   │   └── pause_screen.png
│   └── wind
│       └── wind_arrow_cut.png
└── web
    ├── assets
    │   ├── bg
    │   │   ├── 01.png
    │   │   ├── 02.png
    │   │   ├── 03.png
    │   │   ├── 04.png
    │   │   ├── 05.png
    │   │   ├── 06.png
    │   │   ├── 07.png
    │   │   ├── 08.png
    │   │   ├── 09.png
    │   │   └── 10.png
    │   ├── condor
    │   │   ├── carry.png
    │   │   ├── grab.png
    │   │   ├── idle.png
    │   │   ├── return.png
    │   │   ├── swoop0.png
    │   │   ├── swoop1.png
    │   │   └── takeoff.png
    │   ├── item
    │   │   ├── boot.png
    │   │   ├── shield.png
    │   │   └── umbrella.png
    │   ├── plat
    │   │   ├── 01.png
    │   │   ├── 02.png
    │   │   ├── 04.png
    │   │   ├── 05.png
    │   │   ├── 07.png
    │   │   ├── 08.png
    │   │   ├── 09.png
    │   │   ├── 11.png
    │   │   ├── 12.png
    │   │   ├── 13.png
    │   │   ├── 15.png
    │   │   ├── 16.png
    │   │   ├── 17.png
    │   │   ├── 18.png
    │   │   ├── 21.png
    │   │   ├── 22.png
    │   │   ├── 24.png
    │   │   ├── 25.png
    │   │   ├── 27.png
    │   │   └── 28.png
    │   ├── player
    │   │   ├── crouch.png
    │   │   ├── fall.png
    │   │   ├── idle.png
    │   │   └── jump.png
    │   ├── sfx
    │   │   ├── item.wav
    │   │   ├── jump.wav
    │   │   ├── turu.wav
    │   │   ├── wind.wav
    │   │   └── wolf.wav
    │   ├── sheep
    │   │   ├── idle.png
    │   │   ├── prep.png
    │   │   ├── ram.png
    │   │   ├── recover.png
    │   │   ├── walk0.png
    │   │   ├── walk1.png
    │   │   ├── walk2.png
    │   │   └── walk3.png
    │   ├── squirrel
    │   │   ├── idle.png
    │   │   ├── walk0.png
    │   │   ├── walk1.png
    │   │   ├── walk2.png
    │   │   └── walk3.png
    │   ├── ui
    │   │   ├── clear.png
    │   │   ├── clear_btns.png
    │   │   ├── over.png
    │   │   ├── pause.png
    │   │   ├── pause_btns.png
    │   │   └── title.png
    │   ├── wolf
    │   │   ├── heart.png
    │   │   ├── laugh.png
    │   │   ├── sit.png
    │   │   ├── walk0.png
    │   │   ├── walk1.png
    │   │   ├── walk2.png
    │   │   └── walk3.png
    │   └── wind.png
    ├── css
    │   └── game.css
    ├── js
    │   ├── audio.js
    │   ├── input.js
    │   ├── main.js
    │   ├── map.js
    │   └── sfx-b64.js
    └── index.html
```
