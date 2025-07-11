export default function Lesson1() {
  return (
    <div className="space-y-8">
      {/* 학습 목표 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 학습 목표</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Docker의 기본 개념을 이해하고, 왜 가상 환경이 필요한지 설명할 수 있다.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Docker Hub 계정을 만들고, Docker Desktop을 설치 및 실행할 수 있다.
          </li>
        </ul>
      </div>

      {/* 1.1 가상 컴퓨터는 왜 필요할까요? */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">1.1 가상 컴퓨터는 왜 필요할까요? (Docker의 기본 개념 이해)</h3>
        <div className="flex justify-center mb-6">
          <img src="/nlp-ppt/img/Lesson1/imgDockerExp.png" alt="Docker와 전통적 리눅스 컨테이너 비교" className="max-w-full h-auto rounded shadow" />
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">개념 설명 (비유):</h4>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-3">
                우리가 게임을 할 때, 어떤 게임은 특정 운영체제(윈도우, 맥)에서만 실행되거나, 특정 버전의 프로그램이 필요할 때가 있어요. 
                내 컴퓨터에 이것저것 설치하다 보면 복잡해지고, 때로는 서로 충돌해서 문제가 생기기도 하죠.
              </p>
              <p className="text-gray-700 font-semibold">
                <span className="text-blue-600">Docker는 이런 문제를 해결해주는 마법 상자 같은 거예요!</span> 
                이 상자 안에 필요한 모든 프로그램과 설정(운영체제, 파이썬, 라이브러리 등)을 미리 넣어두면, 
                어떤 컴퓨터에서든 똑같이 작동하는 나만의 작은 컴퓨터를 만들 수 있어요.
              </p>
              <p className="text-gray-700 mt-2">
                이 작은 컴퓨터를 우리는 <code className="bg-blue-100 px-2 py-1 rounded">가상 컨테이너</code>라고 부른답니다.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">왜 필요할까요?</h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h5 className="font-semibold text-green-800 mb-2">깔끔하게 개발하기</h5>
                <p className="text-sm text-gray-700">
                  내 컴퓨터를 복잡하게 만들지 않고, 필요한 프로그램만 딱! 가상 컨테이너 안에 넣어서 사용할 수 있어요.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-semibold text-yellow-800 mb-2">어디서든 똑같이</h5>
                <p className="text-sm text-gray-700">
                  친구 컴퓨터나 학교 컴퓨터에서도 내가 만든 가상 컨테이너를 가져가면 똑같은 환경에서 작업할 수 있어요.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h5 className="font-semibold text-red-800 mb-2">쉬운 삭제</h5>
                <p className="text-sm text-gray-700">
                  더 이상 필요 없으면 가상 컨테이너만 싹 지우면 되니, 내 컴퓨터가 깨끗하게 유지돼요.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (비유):</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h5 className="font-semibold text-purple-800 mb-2">레고 박스</h5>
                <p className="text-sm text-gray-700">
                  레고 블록들이 섞여 있으면 원하는 블록을 찾기 어렵고, 만들던 작품이 망가질 수도 있죠. 
                  Docker는 각 작품(프로젝트)마다 필요한 블록(프로그램)만 담아두는 전용 레고 박스를 만드는 것과 같아요.
                </p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h5 className="font-semibold text-orange-800 mb-2">도시락</h5>
                <p className="text-sm text-gray-700">
                  친구들과 소풍 갈 때, 각자 먹을 도시락을 싸면 내용물이 섞이지 않고 깔끔하죠? 
                  Docker 컨테이너는 프로그램과 그에 필요한 모든 것을 담은 '독립적인 도시락'이라고 생각할 수 있어요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 1.2 Docker Hub 계정 만들기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mr-3">1.2 Docker Hub 계정 만들기</h3>
          <a href="https://hub.docker.com" target="_blank" rel="noopener noreferrer">
            <img src="/nlp-ppt/img/Lesson1/imgDockerhubLogo.png" alt="Docker Hub 로고" className="h-8 w-auto" />
          </a>
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              Docker Hub는 우리가 사용할 가상 컴퓨터 이미지(운영체제 등)를 다운로드받거나, 
              내가 만든 이미지를 공유할 수 있는 곳이에요. 마치 앱스토어처럼 다양한 가상 컴퓨터 이미지가 모여있는 곳이라고 생각하면 돼요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>웹 브라우저를 열고 <code className="bg-gray-100 px-2 py-1 rounded">https://hub.docker.com</code> 에 접속합니다.</li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">Sign Up</code> 또는 <code className="bg-gray-100 px-2 py-1 rounded">회원가입</code> 버튼을 클릭합니다.</li>
              <li>사용자 이름(Username), 이메일 주소, 비밀번호를 입력하고 계정을 생성합니다.</li>
              <li>이메일 인증을 완료합니다.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* 1.3 Docker Desktop 설치하고 실행하기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900 mr-3">1.3 Docker Desktop 설치하고 실행하기</h3>
          <a href="https://www.docker.com" target="_blank" rel="noopener noreferrer">
            <img src="/nlp-ppt/img/Lesson1/imgDockerLogo.png" alt="Docker 로고" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex justify-center mb-6">
          <img src="/nlp-ppt/img/Lesson1/imgDockerDesktopApp.png" alt="Docker Desktop 애플리케이션 화면" className="max-w-full h-auto rounded shadow" />
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              Docker Desktop은 우리가 만든 가상 컨테이너들을 쉽게 관리하고 실행할 수 있게 해주는 프로그램이에요. 
              윈도우나 맥 운영체제에 설치해서 사용합니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습:</h4>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Docker Hub 웹사이트에서 자신의 운영체제(Windows 또는 macOS)에 맞는 Docker Desktop 설치 파일을 다운로드합니다.</li>
              <li>다운로드한 설치 파일을 실행하여 Docker Desktop을 설치합니다.</li>
              <li>설치가 완료되면 Docker Desktop을 실행합니다.</li>
              <li>Docker Desktop이 실행되면, 화면 오른쪽 아래(Windows) 또는 위쪽 메뉴 바(macOS)에 고래 모양의 Docker 아이콘이 나타나는지 확인합니다.</li>
            </ol>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">정상 실행 확인:</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 mb-2">터미널을 열고 다음 명령어를 입력합니다:</p>
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div>docker --version</div>
                <div>docker run hello-world</div>
                <div>docker images</div>
                <div>docker ps -al</div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-gray-600">
                <p>• <code className="bg-gray-200 px-1 rounded">docker --version</code>은 Docker 버전 정보를 보여줍니다.</p>
                <p>• <code className="bg-gray-200 px-1 rounded">docker run hello-wolrd</code>는 Docker가 제대로 설치되었는지 확인하는 간단한 테스트 컨테이너를 실행합니다.</p>
                <p>• "Hello from Docker!" 메시지가 나오면 성공입니다.</p>
                <p>• <code className="bg-gray-200 px-1 rounded">docker images</code>는 설치된 이미지들을 보여줍니다.</p>
                <p>• <code className="bg-gray-200 px-1 rounded">docker ps -al</code>는 실행중인 컨테이너들을 보여줍니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 체크리스트 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">✅ 오늘의 체크리스트</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Docker Hub 계정을 만들었나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Docker Desktop을 설치했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Docker가 정상적으로 실행되는지 확인했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">가상 컴퓨터의 개념을 이해했나요?</span>
          </label>
        </div>
      </div>
    </div>
  );
} 