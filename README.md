# Escape Canyon

세로로 절벽을 오르는 **2D 점프 게임**의 설명문과 그림입니다.  
설치나 빌드 없이, 아래 파일만 열어 바로 쓸 수 있습니다.

## 처음 보는 분

순서는 세 단계입니다.

1. **기본 지시문**을 먼저 읽습니다. 게임을 어떤 기술로 만들지에 대한 문장입니다.  
   [default-prompt.txt](default-prompt.txt)
2. 그 뒤에 **게임 설명**을 붙입니다. 이야기, 조작, 맵, 동물, 아이템, 점프 수치가 들어 있습니다.  
   [prompt-setting.txt](prompt-setting.txt)
3. 그림은 **assets** 폴더에서 가져옵니다. 파일에 적힌 가로·세로가 그림의 픽셀 크기입니다.
4. 발판과 동물이 어디에 있는지는 **맵 배치**를 봅니다.  
   [map.js](map.js)

글을 다른 곳에 붙여 넣을 때는 아래 주소를 그대로 열면 됩니다.

- 기본 지시문  
  https://raw.githubusercontent.com/jjw905/escape-canyon/main/default-prompt.txt
- 게임 설명  
  https://raw.githubusercontent.com/jjw905/escape-canyon/main/prompt-setting.txt

그림은 픽셀아트입니다. 키울 때는 **최근접**으로 키웁니다. 부드럽게 늘리면 픽셀이 흐려집니다. 배경이 비어 있는 곳은 투명입니다.

## 글 파일

| 파일 | 역할 |
| --- | --- |
| [default-prompt.txt](default-prompt.txt) | 브라우저에서 실행되는 게임의 **기본 지시문**입니다. 이 문장 뒤에 자신의 아이디어를 이어서 적습니다. |
| [prompt-setting.txt](prompt-setting.txt) | **게임 설명**입니다. 화면은 가로 480, 세로 800입니다. 점프 높이, 중력, 맵, 동물, 아이템, 소리가 이 파일에 있습니다. 동물마다 **인식 범위**가 따로 적혀 있습니다. |
| [map.js](map.js) | **맵 배치**입니다. 화면 10장의 발판, 바람, 동물, 아이템 좌표입니다. 좌표는 게임 화면 **480 × 800** 기준입니다. |

두 글은 보드에 적어 둔 문장을 그대로 옮긴 것입니다. 다듬거나 요약하지 않았습니다.

## 그림 파일

모든 그림은 [assets](assets) 안에 있습니다.

### 맵

한 장에 화면 하나입니다. **01이 시작(맨 아래)** 이고, 번호가 커질수록 위입니다. **10이 정상(맨 위)** 입니다.

| 파일 | 픽셀 |
| --- | --- |
| [01.png](assets/map/01.png) ~ [05.png](assets/map/05.png), [09.png](assets/map/09.png) | 852 × 1536 |
| [06.png](assets/map/06.png) ~ [08.png](assets/map/08.png) | 858 × 1536 |
| [10.png](assets/map/10.png) | 852 × 1426 |

배경 그림 위에 올라가는 배치는 [map.js](map.js)에 있습니다. 화면마다 나무 발판 15, 21, 22, 16이 있고, 아이템은 세 가지가 모두 있습니다.

| 화면 | 바람 | 동물 |
| --- | --- | --- |
| 01 | 없음 | 큰뿔양 |
| 02 | 없음 | 콘도르 |
| 03 | 없음 | 없음 |
| 04 | 있음 | 콘도르, 바위다람쥐 |
| 05 | 없음 | 없음 |
| 06 | 있음 | 없음 |
| 07 | 없음 | 회색늑대 |
| 08 | 있음 | 없음 |
| 09 | 없음 | 콘도르 |
| 10 | 없음 | 없음 |

### 플레이어

탐험가입니다. 파일 이름 끝의 숫자가 픽셀 크기입니다.

| 파일 | 동작 | 픽셀 |
| --- | --- | --- |
| [player_idle_80x149.png](assets/player/player_idle_80x149.png) | 대기 | 80 × 149 |
| [player_crouch_136x112.png](assets/player/player_crouch_136x112.png) | 웅크리기 | 136 × 112 |
| [player_jump_103x148.png](assets/player/player_jump_103x148.png) | 점프 | 103 × 148 |
| [player_fall_123x133.png](assets/player/player_fall_123x133.png) | 낙하 | 123 × 133 |

### 큰뿔양

발판 위를 걷다가, 가까이 오면 박치기합니다.

| 파일 | 동작 |
| --- | --- |
| [bighorn_idle_makebead.png](assets/bighorn/bighorn_idle_makebead.png) | 대기 |
| bighorn_walk_0 ~ [bighorn_walk_3_makebead.png](assets/bighorn/bighorn_walk_3_makebead.png) | 걷기 1~4 |
| [bighorn_ram_prep_makebead.png](assets/bighorn/bighorn_ram_prep_makebead.png) | 준비 |
| [bighorn_ram_makebead.png](assets/bighorn/bighorn_ram_makebead.png) | 박치기 |
| [bighorn_ram_recover_makebead.png](assets/bighorn/bighorn_ram_recover_makebead.png) | 회복 |

가로는 128픽셀입니다.

### 콘도르

바위에 앉아 있다가, 조건이 맞으면 날아와 낚아챕니다.

| 파일 | 동작 |
| --- | --- |
| [cal_condor_idle_makebead.png](assets/condor/cal_condor_idle_makebead.png) | 대기 |
| [cal_condor_takeoff_makebead.png](assets/condor/cal_condor_takeoff_makebead.png) | 이륙 |
| [cal_condor_return_makebead.png](assets/condor/cal_condor_return_makebead.png) | 복귀 |
| condor_swoop_0, [condor_swoop_1_makebead.png](assets/condor/condor_swoop_1_makebead.png) | 급강하 |
| [condor_grab_makebead.png](assets/condor/condor_grab_makebead.png) | 낚아채기 |
| [condor_carry_makebead.png](assets/condor/condor_carry_makebead.png) | 운반 |

가로는 128픽셀입니다.

### 바위다람쥐

발판 위를 걷습니다. 맞닥뜨리면 화면을 가립니다.

| 파일 | 동작 |
| --- | --- |
| [squirrel_idle_makebead.png](assets/squirrel/squirrel_idle_makebead.png) | 대기 |
| squirrel_walk_0 ~ [squirrel_walk_3_makebead.png](assets/squirrel/squirrel_walk_3_makebead.png) | 걷기 1~4 |
| [squirrel_leap_makebead.png](assets/squirrel/squirrel_leap_makebead.png) | 도약 |
| [squirrel_drop_makebead.png](assets/squirrel/squirrel_drop_makebead.png) | 낙하 |

가로는 128픽셀입니다.

### 회색늑대

발판 위를 걷습니다. 쓰다듬으면 아이템을 떨어뜨립니다.

| 파일 | 동작 | 픽셀 |
| --- | --- | --- |
| gray_wolf_walk_0 ~ [gray_wolf_walk_3_makebead.png](assets/gray_wolf/gray_wolf_walk_3_makebead.png) | 걷기 1~4 | 128 × 89 (마지막 장면만 128 × 86) |
| [gray_wolf_idle_makebead.png](assets/gray_wolf/gray_wolf_idle_makebead.png) | 대기 | 56 × 73 |
| [gray_wolf_happy_heart_makebead.png](assets/gray_wolf/gray_wolf_happy_heart_makebead.png) | 하트 | 56 × 70 |
| [gray_wolf_sit_up_makebead.png](assets/gray_wolf/gray_wolf_sit_up_makebead.png) | 앉기 | 57 × 69 |
| [gray_wolf_music_makebead.png](assets/gray_wolf/gray_wolf_music_makebead.png) | 음악 | 57 × 77 |
| [gray_wolf_laugh_makebead.png](assets/gray_wolf/gray_wolf_laugh_makebead.png) | 웃음 | 57 × 64 |

걷기만 가로 128이고, 앉은 자세는 그보다 작습니다.

### 아이템

먹으면 바로 효과가 시작됩니다.

| 파일 | 이름 | 픽셀 |
| --- | --- | --- |
| [item_boot.png](assets/item/item_boot.png) | 날개 신발 | **50 × 52** |
| [item_shield.png](assets/item/item_shield.png) | 소용돌이 방패 | **39 × 50** |
| [item_umbrella.png](assets/item/item_umbrella.png) | 우산 | **50 × 54** |

### 발판

파일 이름의 번호가 종류 번호입니다. 가로는 모두 **128**픽셀이고, 세로만 다릅니다.  
밟는 발판과, 배경에만 있는 장식을 나눠 두었습니다.

| 종류 | 번호 |
| --- | --- |
| **선반** | 01, 02, 08, 09, 11, 12 |
| **바위** | 04, 05, 07, 17, 18, 19 |
| **돌무더기** | 03, 10, 13, 30 |
| **나무** | 14, 15, 16, 20, 21, 22, 23 |
| **장식** | 06, 29, 31, 32 |

예: [canyon_platform_15_makebead.png](assets/platform/canyon_platform_15_makebead.png) 는 나무 15번, 128 × 40입니다.

24부터 28은 없습니다.

### 바람

[wind_arrow_cut.png](assets/wind/wind_arrow_cut.png) 는 바람이 부는 방향의 화살입니다. **576 × 168**픽셀입니다.

## 파일 이름

- `walk_0` 부터 `walk_3` 은 **걷기 네 장면**입니다. 0이 첫 장면입니다.
- 이름 끝의 `80x149` 처럼 적힌 숫자는 **가로 × 세로**입니다.
- `makebead` 는 픽셀 수로 줄여 둔 그림이라는 표시입니다. 따로 가공하지 않아도 됩니다.
