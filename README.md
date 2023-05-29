<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/original_favicon.png" alt="Logo" width="80" height="80">
  </a>

  <h2 align="center">khanne-sh</h2>

  <p align="center">
    시시하지 않은 이력서, khanne을 더 알아 갈수 있는 <s>zsh 아.. 아니</s> khanne-sh(칸쉘)
    <a href="https://iwannaberealnerd.github.io/khanne-sh/">배포 링크</a>
    ·
    <a href="https://github.com/IwannabeRealnerD/khanne-sh/issues">Report Bug</a>
    ·
    <a href="https://github.com/IwannabeRealnerD/khanne-sh/issues">Request Feature</a>
  </p>
</div>

- 해당 프로젝트는 svelte kit을 이용하여 개발된 터미널 UI를 가진 이력서 입니다.

## 사용 기술
  <img src="https://img.shields.io/badge/svelte-FF3200?style=for-the-badge&logo=svelte&logoColor=white">
  <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
  <img src="https://img.shields.io/badge/vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white">

## 배포 환경
- github pages를 이용하여 배포 [배포 링크](https://iwannaberealnerd.github.io/khanne-sh/)

## 사용방법
### 대응 커맨드
```sh
 help # khanne-sh 사용법 확인
 about # khanne-sh 프로젝트에 대한 설명
 github # khanne의 깃헙 페이지로 이동
 blog # khanne의 블로그로 이동
 pwd # 현재 접근 URL 확인
 clear # 입력된 command history 삭제
```
- 추가 명령어는 업데이트 예정

## 로컬 환경에서 시작하기
- 다음은 로컬에서 프로젝트를 설정하는 방법에 대한 설명입니다. 로컬 사본을 설정하고 실행하려면 다음의 간단한 예제 단계를 따르세요.
- 해당 프로젝트 시작을 위해서는 reapository를 clone 하고 dependency를 설치해야 합니다.

### 환경 설정
- nodejs - 18.16.0
- pnpm - 8.6.0
  ```sh
  corepack prepare pnpm@8.6.0 --activate
  ```

### 실행방법
1. 레포지터리 clone
   ```sh
   git clone https://github.com/IwannabeRealnerD/khanne-sh.git
   ```
3. pnpm dependency 설치
   ```sh
   pnpm install --frozen-lockfile
   ```
4. 프로젝트 실행
   ```sh
   pnpm dev
   ```

## 기능 추가 로드맵

- [ ] Add Changelog 추가
- [ ] e2e 테스트 (playwright) 추가
- [ ] 영어 README 작성


## Contact
khanne - iwannaberealnerd@gmail.com
