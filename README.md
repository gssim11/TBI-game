뇌 손상 시뮬레이터: 크리티컬 임팩트물리 법칙에 기반한 인터랙티브 시뮬레이션을 통해 다양한 뇌 손상 메커니즘을 학습하는 교육용 웹 게임입니다. 안산대학교 물리치료학과 심경섭 교수님의 자문을 받아 제작되었습니다.✨ 주요 기능4가지 학습 레벨: 접촉 손상, 감속 손상, 가속 손상, 그리고 미만성 축삭 손상(DAI) 시나리오를 통해 단계별 학습이 가능합니다.인터랙티브 시뮬레이션: 각 시나리오별 애니메이션을 통해 뇌의 움직임을 시각적으로 확인하고, 손상 부위를 직접 예측하며 학습합니다.안전한 Gemini AI 연동: Vercel 서버리스 함수를 통해 API 키를 서버에 안전하게 숨겨, 외부 노출 없이 AI 전문가에게 질문하고 답변을 얻을 수 있습니다.상세한 피드백: 정답과 오답에 대한 즉각적이고 상세한 해설을 제공하여 학습 효과를 극대화합니다.🛠️ 기술 스택HTML5Tailwind CSSJavaScript (ES6)Vercel Serverless Functions (for Node.js)Google Gemini API🚀 배포 가이드 (초보자용)이 프로젝트를 Github와 Vercel을 이용해 웹에 배포하는 방법입니다.1단계: 내 컴퓨터에 파일 준비하기새 폴더 만들기: 바탕화면 같은 곳에 brain-game 이라는 이름으로 새 폴더를 만듭니다.파일 저장: 이 프로젝트의 모든 파일(index.html, package.json, .gitignore, README.md)과 api 폴더를 방금 만든 brain-game 폴더 안에 저장합니다.2단계: Github에 코드 올리기 (온라인 저장소)Github Repository 생성: Github에 로그인하고 New repository를 눌러 brain-game 이름으로 새 저장소를 만듭니다.터미널에서 명령어 입력: 컴퓨터의 터미널(PowerShell, Git Bash, 터미널 앱 등)을 열고, cd 명령어로 brain-game 폴더로 들어갑니다. (예: cd Desktop/brain-game)아래 명령어 순서대로 입력:# 1. 이 폴더를 Git으로 관리 시작
git init

# 2. 모든 파일 추가 준비
git add .

# 3. '첫 버전'이라는 이름으로 저장
git commit -m "Initial commit of secure brain injury simulator"

# 4. 내 컴퓨터와 Github 저장소 연결 (아래 주소는 본인 것으로 꼭 바꿔주세요!)
git remote add origin [https://github.com/Your-Username/brain-game.git](https://github.com/Your-Username/brain-game.git)

# 5. Github으로 코드 최종 업로드
git push -u origin main
3단계: Vercel로 배포하고 API 키 설정하기 (웹사이트 공개)Vercel 프로젝트 가져오기: Vercel에 Github 계정으로 로그인 후 Add New... -> Project를 선택하여 brain-game 저장소를 Import 합니다.(매우 중요) API 키를 비밀 금고에 넣기:배포 설정 화면에서 Environment Variables 탭을 클릭합니다.왼쪽 NAME 칸에는 GEMINI_API_KEY 라고 똑같이 적어줍니다.오른쪽 VALUE 칸에는 Google AI Studio에서 받은 나의 API 키를 붙여넣습니다.Add 버튼을 눌러 저장합니다.배포하기: Deploy 버튼을 누르면 모든 과정이 끝납니다!완료: 잠시 후, Vercel이 만들어준 나만의 웹사이트 주소로 접속해서 게임을 즐기시면 됩니다.이 프로젝트는 교육적 목적으로 제작되었으며, 실제 의학적 진단을 대체할 수 없습니다.