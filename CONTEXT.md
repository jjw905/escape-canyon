# Escape Canyon
updated: 2026-09-22
goal: 흰색 테두리 남음을 제외한 플레이 오류를 고친다
status: 몹 공격·점프 방향 잠금 수정됨, 60fps 시뮬로 확인
stack: HTML5 Canvas, web/js/main.js, web/js/map.js

## now
- 몹 cooldown 초기화, 양 박치기 도달, 콘도르 강하 4초, 공중 방향 잠금
- 이전 대화 ef8acd1a-81d9-4801-88cf-1ee416d44969 는 이 환경에 없음

## facts
- 화면 480x800, STEP 1/60, G 2057, FALL 1333, RUN 210
- 점프 적분은 이동 후 중력. 빈 공간 높이 하 20 / 중 77.03 / 상 169.9, 체공 0.283 / 0.550 / 0.817
- 발 이탈 후 vx는 점프 순간 값으로 고정. 옆면 충돌은 위치만 밀고 vx는 유지 (0으로 지우면 01 바닥 점프가 막힘)
- 양·다람쥐는 cooldown이 undefined면 `<= 0`이 거짓이라 공격이 안 나갔음
- 양 left===right 이면 인식(+0.5폭) 후 박치기가 8px에서 끊겼음. 도달은 0.5폭+8
- 콘도르 10초 무점프(차지 포함) 후 강하. 화면을 가로지르도록 강하 4초
- 흰색 테두리 남음은 범위 밖

## layout
- web/js/main.js — 플레이어, 몹, 점프
- web/js/map.js — 10맵 데이터
- web/js/input.js — 키보드
- text/prompt-setting.txt — 점프·몹 스펙

## gotchas
- 공중에서 좌우로 vx를 다시 쓰면 가로 거리 60/116/172가 깨진다
- 몹 cooldown을 비우면 근접 판정이 항상 실패한다
- 양 발판 폭이 몹 폭과 같으면 순찰은 하지 않는다

## cmds
- node --check web/js/main.js

## refs
- text/prompt-setting.txt — 점프 수치와 몹 인식 범위
