# Escape Canyon

플레이 파일은 `index.html`이다. GitHub는 폴더를 파일보다 위에 두므로, 목록에서는 `assets`와 `web` 바로 아래 첫 파일로 보인다. 이 파일을 더블클릭하면 서버 없이 열린다. 그림과 소리는 `web/`에 있으므로, `index.html`만 따로 옮기면 화면이 빈다. `web/index.html`도 같은 게임이다.

## 에셋이 두 벌이다

FigJam의 In Github 섹션에 올려 둔 원본은 저장소 루트 `assets/`다. 파일 이름이 보드와 같다. 플레이어, 양, 콘도르, 다람쥐, 늑대, 아이템, 바람, 소리, 발판 01–23과 29–32가 여기 있다.

돌아가는 게임은 이 폴더를 읽지 않는다. `web/index.html`과 `web/js/map.js`는 `web/assets/`의 짧은 이름만 읽는다. 루트 `map.js`도 같은 짧은 경로(`assets/plat/21.png` 같은 식)라서, 저장소 루트에서는 그림이 없고 `web/` 기준으로만 맞는다.

같은 그림의 이름만 다른 것:

| In Github / `assets/` | 게임이 읽는 파일 |
| --- | --- |
| `player/player_idle_80x149.png` | `web/assets/player/idle.png` |
| `player/player_crouch_136x112.png` | `web/assets/player/crouch.png` |
| `player/player_jump_103x148.png` | `web/assets/player/jump.png` |
| `player/player_fall_123x133.png` | `web/assets/player/fall.png` |
| `bighorn/bighorn_*.png` | `web/assets/sheep/` (`idle`, `prep`, `ram`, `recover`, `walk0`–`walk3`) |
| `condor/cal_condor_idle`, `takeoff`, `return` | `web/assets/condor/idle.png`, `takeoff.png`, `return.png` |
| `condor/condor_swoop_0`, `swoop_1`, `grab`, `carry` | `web/assets/condor/swoop0.png`, `swoop1.png`, `grab.png`, `carry.png` |
| `squirrel/squirrel_idle`, `walk_0`–`walk_3` | `web/assets/squirrel/idle.png`, `walk0.png`–`walk3.png` |
| `gray_wolf/gray_wolf_walk_0`–`walk_3` | `web/assets/wolf/walk0.png`–`walk3.png` |
| `gray_wolf/gray_wolf_happy_heart`, `laugh`, `sit_up` | `web/assets/wolf/heart.png`, `laugh.png`, `sit.png` |
| `item/item_boot`, `item_shield`, `item_umbrella` | `web/assets/item/boot.png`, `shield.png`, `umbrella.png` |
| `wind/wind_arrow_cut.png` | `web/assets/wind.png` |
| `sfx/*.wav` | `web/assets/sfx/*.wav`. 재생은 `web/js/sfx-b64.js`에 넣은 음원이다. 게임은 wav를 다시 받지 않는다. |

발판은 예외다. `assets/platform/canyon_platform_21_makebead.png`는 128×71이고, 게임이 그리는 `web/assets/plat/21.png`는 72×37이다. 번호는 같고 게임용으로 줄인 파일이다.

## 섹션에 없는데 게임이 쓰는 파일

In Github 발판 줄은 01–23, 29–32다. 24–28번은 그 줄에 없다.

게임 맵은 25, 27, 28번을 밟는다. 이 세 장은 `web/assets/plat/`에만 있다. `assets/platform/`에는 없다. 루트 에셋만 연결하면 그 발판이 빈다.

`web/assets/plat/24.png`는 계단 그림이다. 맵에서는 빼서 더 이상 안 쓴다. 섹션에도 없다.

배경과 화면 UI는 이름만 바꾼 복사가 아니다.

- `assets/map/01.png`–`10.png`와 `web/assets/bg/01.png`–`10.png`는 가로세로가 같아도 파일이 다르다. 05, 06은 게임이 쓰는 쪽이 훨씬 크다. `assets/map`을 배경으로 바꾸면 지금 화면이 아니다.
- 화면 UI도 서로 다른 파일이다. 게임은 `web/assets/ui/title.png`, `pause.png`, `pause_btns.png`, `clear.png`, `clear_btns.png`, `over.png`만 그린다. `assets/ui/`의 `game_start_logo.png`, `game_start_background.png`, `pause_screen.png`, `clear_screen.png`, `game_over_screen.png`, `game_over_banner.png`, `game_main_screen.png`는 읽지 않는다.

## 섹션에 있는데 게임이 안 쓰는 파일

`assets/`에는 있고 `web/` 게임 코드는 요청하지 않는다.

- 다람쥐 `squirrel_leap_makebead.png`, `squirrel_drop_makebead.png`
- 늑대 `gray_wolf_idle_makebead.png`, `gray_wolf_music_makebead.png`. 늑대가 서 있을 때는 `walk0`을 그린다.
- 발판 03, 06, 10, 14, 19, 20, 23, 29, 30, 31, 32. 장식과 맵에 안 올라간 발판이다.

다람쥐가 화면을 가릴 때 게임은 별도 가림 그림 대신 `web/assets/squirrel/idle.png`를 화면에 맞게 늘린다. In Github 채택 칸의 「바위 다람쥐 트리거 발동시」는 비어 있다. 가림 참고 그림은 배치 열 쪽에만 있다.

## 보드에서 비어 있는 칸

In Github 섹션 안은 채택 후보 에셋, Prompt Setting, 배치 열이다. 그 안의 Default Prompt 칸은 비어 있다. 규칙 문장은 Prompt Setting과 저장소의 `prompt-setting.txt`, `default-prompt.txt`에 있다.

배치 열에 없는 칸이 있다. 6번 배경, 6번 몹, 5번 환경. 게임 배경 파일 `web/assets/bg/06.png`는 저장소에 있다. 배치 열만 다시 베끼면 6번 그림이 빠진다.

```
escape-canyon
├── index.html
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
