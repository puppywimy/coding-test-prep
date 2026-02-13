# coding-test-prep

코딩테스트를 준비하며 풀어본 알고리즘/과제 문제 풀이 모음!

<br />

## 프로젝트 구조

```
.
├── algorithms      - 알고리즘 문제 풀이 코드를 플랫폼별로 저장하는 곳입니다.
│   ├── baekjoon
│   ├── programmers
│   └── goorm
├── assignments     - 과제 형태의 문제에 대한 풀이를 저장하는 곳입니다.
└── scripts         - 프로젝트 관리를 돕는 스크립트가 위치합니다.
```

<br />

## 백준 Input 테스트 방법

`algorithms/baekjoon` 폴더에 `input` 파일(확장자 없음)을 생성하여 작성한 코드를 테스트할 수 있습니다.

`input` 파일에 원하는 테스트 케이스를 입력한 후 코드를 실행하면, 해당 입력을 기준으로 결과를 확인할 수 있습니다.

<br />

## 빠른 커밋

더 빠르고 편리한 커밋을 위해 단축 명령어를 설정할 수 있습니다.

<br />

**1. 단축 명령어 설정**

프로젝트의 root 디렉토리에서 아래 명령어를 실행해주세요.

```sh
zsh scripts/init.sh
```

<br />

**2. 사용 방법**

설정이 완료되면, `git c` 명령어를 사용하여 커밋을 생성할 수 있습니다. 이 명령어는 `solve`, `solving`, `description` 세 가지 타입에만 사용합니다.

- `git c <type>`

  `<type>`에 해당하는 작업 종류로 변경 사항을 커밋합니다. (ex. `git c s`, `git c solving`)

- `git c <type> <message>`

  작업 종류와 함께 간단한 커밋 메시지를 추가하여 커밋합니다. (ex. `git c s "30분 초과"`)

<br />

**3. 커밋 타입**

커밋 타입은 아래 세 가지가 있습니다. 자주 사용되는 `solve`와 `description`은 각각 `s`와 `d`로 단축할 수 있습니다.

- `solve`: 문제 풀이 완료 후 최종 코드 등록
- `solving`: 풀이 진행 중 중간 저장
- `description`: 문제 및 풀이에 대한 설명 파일 추가
