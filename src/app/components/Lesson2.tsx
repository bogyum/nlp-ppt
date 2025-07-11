export default function Lesson2() {
  return (
    <div className="space-y-8">
      {/* 학습 목표 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 학습 목표</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Ubuntu Docker 이미지를 다운로드하고 실행하여 가상 컨테이너를 만들 수 있다.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                가상 컨테이너에 접속하여 사용자 계정을 추가하고, sudo, vi, ssh를 설치할 수 있다.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                새로 만든 사용자에게 sudo 권한을 부여하고, ssh 서버를 구동할 수 있다.
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <img src="/img/Lesson2/imgDocker.png" alt="Docker 고래 로고" className="w-48 h-auto" />
          </div>
        </div>
      </div>

      {/* 2.1 나만의 Ubuntu 가상 컴퓨터 만들기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">2.1 나만의 Ubuntu 가상 컴퓨터 만들기</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              이제 Docker를 이용해서 우리가 익숙한 윈도우나 맥처럼 작동하는 '리눅스' 운영체제인 Ubuntu 가상 컴퓨터를 만들어볼 거예요. 
              이 가상 컴퓨터 안에서 앞으로 인공지능 개발을 할 겁니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. Ubuntu 이미지 다운로드</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">터미널을 열고 다음 명령어를 입력합니다:</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    docker pull ubuntu:latest
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <code className="bg-gray-200 px-1 rounded">ubuntu:latest</code>는 가장 최신 버전의 Ubuntu 이미지를 의미해요.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. Ubuntu 컨테이너 실행 및 접속</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">다운로드한 Ubuntu 이미지를 실행하여 가상 컨테이너를 만듭니다:</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    docker run -it --name my-ubuntu ubuntu:latest /bin/bash
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>• <code className="bg-gray-200 px-1 rounded">-it</code>: 컨테이너와 상호작용할 수 있도록 터미널을 연결합니다.</p>
                    <p>• <code className="bg-gray-200 px-1 rounded">--name my-ubuntu</code>: 컨테이너에 my-ubuntu라는 이름을 붙여줍니다.</p>
                    <p>• <code className="bg-gray-200 px-1 rounded">ubuntu:latest</code>: 사용할 이미지 이름입니다.</p>
                    <p>• <code className="bg-gray-200 px-1 rounded">/bin/bash</code>: 컨테이너가 시작되면 bash 셸을 실행하라는 의미입니다.</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-semibold text-blue-800 mb-2">성공 확인</h5>
                <p className="text-gray-700">
                  명령어를 입력하면 터미널 프롬프트가 <code className="bg-blue-100 px-2 py-1 rounded">root@&lt;컨테이너ID&gt;:/#</code> 와 같이 바뀝니다. 
                  이제 여러분은 my-ubuntu 가상 컨테이너의 루트(root) 계정으로 접속한 상태입니다.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (명령어 및 출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div># Ubuntu 이미지 다운로드</div>
                <div>docker pull ubuntu:latest</div>
                <div># 출력 예시:</div>
                <div># Using default tag: latest</div>
                <div># latest: Pulling from library/ubuntu</div>
                <div># ... (다운로드 진행 상황) ...</div>
                <div># Status: Downloaded newer image for ubuntu:latest</div>
                <div></div>
                <div># Ubuntu 컨테이너 실행 및 접속</div>
                <div>docker run -it --name my-ubuntu ubuntu:latest /bin/bash</div>
                <div># 출력 예시:</div>
                <div># root@a1b2c3d4e5f6:/#  &lt;-- 이렇게 바뀌면 성공!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2.2 Ubuntu 가상 컴퓨터 기본 설정하기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">2.2 Ubuntu 가상 컴퓨터 기본 설정하기</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              이제 가상 컴퓨터에 접속했으니, 우리가 사용하기 편리하도록 몇 가지 기본 설정을 해줄 거예요. 
              새로운 사용자 계정을 만들고, 필요한 도구들을 설치할 겁니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 (루트 계정에서 진행):</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. 패키지 목록 업데이트</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">가장 먼저, 프로그램들을 설치하기 전에 최신 정보를 받아와야 해요.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    apt-get update
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. 새로운 사용자 추가하기</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">user라는 이름의 새 사용자를 만듭니다. 비밀번호는 1234로 설정해봅시다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    useradd -m user<br/>
                    passwd user<br/>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. 필수 명령어 설치 (sudo, vi, ssh)</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm text-gray-600 mb-2">
                    <p>• <code className="bg-gray-200 px-1 rounded">sudo</code>: 관리자 권한으로 명령어를 실행할 때 필요해요.</p>
                    <p>• <code className="bg-gray-200 px-1 rounded">vi</code>: 간단한 텍스트 파일을 편집할 때 사용하는 도구예요.</p>
                    <p>• <code className="bg-gray-200 px-1 rounded">openssh-server</code>: 우리가 외부에서 이 가상 컴퓨터로 접속할 수 있게 해주는 ssh 서버 프로그램입니다.</p>
                  </div>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    apt-get install -y sudo vim openssh-server
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <code className="bg-gray-200 px-1 rounded">-y</code>는 설치 중에 "정말 설치할까요?"라고 물어볼 때 자동으로 "네"라고 대답해주는 옵션입니다.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">4. 사용자에게 권한 주기 (sudo 권한)</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">myuser가 관리자 권한(sudo)을 사용할 수 있도록 sudo 그룹에 추가합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    usermod -aG sudo myuser
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <code className="bg-gray-200 px-1 rounded">-aG</code>는 기존 그룹에 추가(append)하고, 그룹(Group)을 지정하는 옵션입니다.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">5. SSH 서버 구동하기</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">이제 ssh 서버를 시작합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    service ssh start
                  </div>
                </div>

              
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">서버 구동 시 자동으로 실행되도록 수정합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    vi /root/.bashrc<br/>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>• 마지막 라인 이동: <code className="bg-gray-200 px-1 rounded">Ctrl+G</code></p>
                    <p>• 다음 라인을 추가하기 위해 편집 모드 진입: <code className="bg-gray-200 px-1 rounded">i</code></p>
                    <div className="bg-black text-green-400 p-2 rounded font-mono text-xs mt-2">
                      service ssh start
                    </div>
                    <p>• 편집 완료 후 저장하고 나가기: <code className="bg-gray-200 px-1 rounded">esc</code> + <code className="bg-gray-200 px-1 rounded">:wq!</code> + <code className="bg-gray-200 px-1 rounded">enter</code></p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (명령어 및 출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div># 패키지 목록 업데이트</div>
                <div>root@a1b2c3d4e5f6:/# apt-get update</div>
                <div># ... (업데이트 진행) ...</div>
                <div></div>
                <div># 사용자 추가 (myuser, 비밀번호는 1234로 설정)</div>
                <div>root@a1b2c3d4e5f6:/# adduser myuser</div>
                <div># Adding user `myuser' ...</div>
                <div># Enter new UNIX password:  (1234 입력)</div>
                <div># Retype new UNIX password: (1234 다시 입력)</div>
                <div># passwd: password updated successfully</div>
                <div># Changing the user information for myuser</div>
                <div># Enter the new value, or press ENTER for the default</div>
                <div># ... (나머지 정보는 엔터) ...</div>
                <div></div>
                <div># sudo, vim, openssh-server 설치</div>
                <div>root@a1b2c3d4e5f6:/# apt-get install -y sudo vim openssh-server</div>
                <div># ... (설치 진행) ...</div>
                <div></div>
                <div># myuser에게 sudo 권한 부여</div>
                <div>root@a1b2c3d4e5f6:/# usermod -aG sudo myuser</div>
                <div></div>
                <div># SSH 서버 구동</div>
                <div>root@a1b2c3d4e5f6:/# service ssh start</div>
                <div># 이제 컨테이너에서 나갈 수 있습니다.</div>
                <div># exit 입력</div>
                <div>root@a1b2c3d4e5f6:/# exit</div>
                <div># logout</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Docker 컨테이너 기본 명령어 */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-2">3. Docker 컨테이너 기본 명령어</h4>
        <div className="flex justify-center mb-4">
          <img src="/img/Lesson2/imgDockerCommand1.png" alt="Docker 컨테이너 기본 명령어1" className="max-w-full h-auto rounded shadow" />
        </div>
        <div className="flex justify-center mb-4">
          <img src="/img/Lesson2/imgDockerCommand2.png" alt="Docker 컨테이너 기본 명령어2" className="max-w-full h-auto rounded shadow" />
        </div>
      </div>

      {/* 체크리스트 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">✅ 오늘의 체크리스트</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Ubuntu 이미지를 다운로드했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">my-ubuntu 컨테이너를 실행하고 접속했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">myuser 계정을 만들었나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">sudo, vim, openssh-server를 설치했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">myuser에게 sudo 권한을 부여했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">SSH 서버를 구동했나요?</span>
          </label>
        </div>
      </div>
    </div>
  );
} 