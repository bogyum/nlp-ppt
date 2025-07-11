export default function Lesson3() {
  return (
    <div className="space-y-8">
      {/* 학습 목표 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 학습 목표</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            로컬 컴퓨터에서 Docker 가상 컨테이너에 SSH로 접속할 수 있다.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Bash Shell 설정을 통해 명령 환경을 편리하게 만들 수 있다.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Anaconda의 개념을 이해하고, 설치할 수 있다.
          </li>
        </ul>
      </div>

      {/* 3.1 로컬에서 Docker 가상 컨테이너에 SSH를 이용하여 접속하기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">3.1 로컬에서 Docker 가상 컨테이너에 SSH를 이용하여 접속하기</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              이제 우리가 만든 my-ubuntu 가상 컴퓨터에 내 컴퓨터에서 원격으로 접속해볼 거예요. 
              마치 다른 컴퓨터에 접속하는 것처럼요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. 컨테이너의 IP 주소 확인</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">새로운 터미널을 열고 다음 명령어를 입력하여 my-ubuntu 컨테이너의 IP 주소를 확인합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    {`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' my-ubuntu`}
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    이 명령어는 my-ubuntu 컨테이너의 네트워크 설정에서 IP 주소를 찾아 보여줍니다.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. SSH 접속</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">확인한 IP 주소와 우리가 만든 사용자(myuser)를 사용하여 SSH로 접속합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    ssh myuser@&lt;컨테이너_IP_주소&gt;
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>• 비밀번호를 물어보면 1234를 입력합니다.</p>
                    <p>• 성공적으로 접속하면 프롬프트가 <code className="bg-gray-200 px-1 rounded">myuser@&lt;컨테이너ID&gt;:$</code> 와 같이 바뀝니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (명령어 및 출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                                 <div># 컨테이너 IP 주소 확인</div>
                 <div>{`docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' my-ubuntu`}</div>
                <div># 출력 예시:</div>
                <div># 172.17.0.2</div>
                <div></div>
                <div># SSH 접속 (예시 IP 주소 사용)</div>
                <div>ssh myuser@172.17.0.2</div>
                <div># The authenticity of host '172.17.0.2 (172.17.0.2)' can't be established.</div>
                <div># Are you sure you want to continue connecting (yes/no/[fingerprint])? yes  &lt;-- 'yes' 입력</div>
                <div># Warning: Permanently added '172.17.0.2' (ECDSA) to the list of known hosts.</div>
                <div># myuser@172.17.0.2's password:  (1234 입력)</div>
                <div># Welcome to Ubuntu ...</div>
                <div># myuser@a1b2c3d4e5f6:~$  &lt;-- 이렇게 바뀌면 성공!</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3.2 편리한 명령 환경 만들기: bash shell 설정 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">3.2 편리한 명령 환경 만들기: bash shell 설정</h3>
        <div className="flex justify-center mb-6">
          <img src="/nlp-ppt/img/Lesson3/imgLinuxShellScripts.png" alt="Linux Shell Scripts" className="max-w-full h-auto rounded shadow" />
        </div>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              bash shell은 우리가 명령어를 입력하고 실행하는 환경이에요. 여기에 몇 가지 설정을 추가해서 더 편리하게 사용할 수 있도록 할 겁니다. 
              예를 들어, 명령 프롬프트 모양을 바꾸거나 자주 사용하는 명령어를 줄여서 쓸 수 있게 할 수 있어요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 (myuser 계정에서 진행):</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. ~/.bashrc 파일 열기</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">vi 편집기를 사용하여 ~/.bashrc 파일을 엽니다. 이 파일은 bash 셸이 시작될 때 자동으로 실행되는 설정 파일이에요.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    vi ~/.bashrc
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. 파일 내용 수정</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm text-gray-600 mb-2">
                    <p>• vi 편집기가 열리면 <code className="bg-gray-200 px-1 rounded">i</code> 키를 눌러 INSERT 모드로 전환합니다.</p>
                    <p>• 파일의 가장 아래에 다음 내용을 추가합니다. (예시: 프롬프트 색상 변경)</p>
                  </div>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    # 프롬프트 색상을 초록색으로 변경<br/>
                    PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>• 수정이 끝났으면 <code className="bg-gray-200 px-1 rounded">Esc</code> 키를 누르고 <code className="bg-gray-200 px-1 rounded">:wq</code>를 입력한 후 <code className="bg-gray-200 px-1 rounded">Enter</code>를 눌러 저장하고 종료합니다.</p>
                    <p>• <code className="bg-gray-200 px-1 rounded">:wq</code>는 write and quit의 약자입니다.</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. 설정 적용</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">변경된 .bashrc 파일을 현재 셸에 적용합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    source ~/.bashrc
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    프롬프트 색상이 바뀌는 것을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (vi 사용법 및 .bashrc 내용):</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">vi 편집기 사용법:</h5>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>• <code className="bg-gray-200 px-1 rounded">i</code>: 삽입 모드 (텍스트 입력)</p>
                  <p>• <code className="bg-gray-200 px-1 rounded">Esc</code>: 명령 모드 (명령어 입력)</p>
                  <p>• <code className="bg-gray-200 px-1 rounded">:w</code>: 저장</p>
                  <p>• <code className="bg-gray-200 px-1 rounded">:q</code>: 종료</p>
                  <p>• <code className="bg-gray-200 px-1 rounded">:wq</code>: 저장 후 종료</p>
                  <p>• <code className="bg-gray-200 px-1 rounded">:q!</code>: 저장하지 않고 강제 종료</p>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold text-gray-800 mb-2">.bashrc 파일 내용 추가 예시:</h5>
                <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                  <div># .bashrc 파일의 마지막 줄에 추가</div>
                  <div># 프롬프트 색상을 초록색으로 변경</div>
                  <div>PS1='\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* * 참고자료 * */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-4 mb-6">
          <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-3">
            <span className="text-3xl">📚</span>
            참고자료 
            <span className="text-3xl">📚</span>
          </h3>
          <p className="text-center text-purple-100 mt-2 text-sm">Zsh 설정 단계별 가이드</p>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <img src="/nlp-ppt/img/Lesson3/zshSetting1.png" alt="Zsh 설정 1단계" className="max-w-full h-auto rounded shadow" />
          </div>
          <div className="flex justify-center">
            <img src="/nlp-ppt/img/Lesson3/zshSetting2.png" alt="Zsh 설정 2단계" className="max-w-full h-auto rounded shadow" />
          </div>
          <div className="flex justify-center">
            <img src="/nlp-ppt/img/Lesson3/zshSetting3.png" alt="Zsh 설정 3단계" className="max-w-full h-auto rounded shadow" />
          </div>
          <div className="flex justify-center">
            <img src="/nlp-ppt/img/Lesson3/zshSetting4.png" alt="Zsh 설정 4단계" className="max-w-full h-auto rounded shadow" />
          </div>
          <div className="flex justify-center">
            <img src="/nlp-ppt/img/Lesson3/zshSetting5.png" alt="Zsh 설정 5단계" className="max-w-full h-auto rounded shadow" />
          </div>
          <div className="flex justify-center">
            <img src="/nlp-ppt/img/Lesson3/zshSetting6.png" alt="Zsh 설정 6단계" className="max-w-full h-auto rounded shadow" />
          </div>
        </div>
      </div>

      {/* 3.3 인공지능 개발을 위한 준비물: Anaconda */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">3.3 인공지능 개발을 위한 준비물: Anaconda</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              Anaconda는 파이썬으로 인공지능 개발을 할 때 아주 유용한 도구 모음이에요. 파이썬과 필요한 라이브러리들을 한 번에 설치해주고, 
              여러 개의 파이썬 개발 환경을 쉽게 관리할 수 있게 해줘요. 마치 다양한 요리 도구들이 깔끔하게 정리된 주방 세트와 같아요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 (myuser 계정에서 진행):</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. Anaconda 설치 스크립트 다운로드</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">최신 Anaconda 설치 스크립트를 다운로드합니다. (다운로드 속도가 느릴 수 있으니 인내심을 가집니다.)</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    wget https://repo.anaconda.com/archive/Anaconda3-2025.06-0-Linux-x86_64.sh
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <code className="bg-gray-200 px-1 rounded">wget</code>은 웹에서 파일을 다운로드하는 명령어입니다.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. Anaconda 설치</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">다운로드한 스크립트를 실행하여 Anaconda를 설치합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    bash Anaconda3-2025.06-0-Linux-x86_64.sh
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>• 설치 과정에서 <code className="bg-gray-200 px-1 rounded">Enter</code>를 눌러 약관을 읽고, <code className="bg-gray-200 px-1 rounded">yes</code>를 입력하여 동의합니다.</p>
                    <p>• 설치 경로를 물어보면 기본값(<code className="bg-gray-200 px-1 rounded">Enter</code>)으로 진행합니다.</p>
                    <p>• "Do you wish to run <code className="bg-gray-200 px-1 rounded">conda init</code>?" 라고 물어보면 <code className="bg-gray-200 px-1 rounded">yes</code>를 입력합니다.</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. 설정 적용</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">설치 완료 후, 변경된 .bashrc 파일을 다시 적용합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    source ~/.bashrc
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">4. Anaconda 버전 확인</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Anaconda가 제대로 설치되었는지 확인합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    conda --version
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (명령어 및 출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div># Anaconda 설치 스크립트 다운로드</div>
                <div>myuser@a1b2c3d4e5f6:~$ wget https://repo.anaconda.com/archive/Anaconda3-2025.06-0-Linux-x86_64.sh</div>
                <div># ... (다운로드 진행) ...</div>
                <div></div>
                <div># Anaconda 설치</div>
                <div>myuser@a1b2c3d4e5f6:~$ bash Anaconda3-2025.06-0-Linux-x86_64.sh</div>
                <div># Welcome to Anaconda3 2024.02-1</div>
                <div># ... (Enter 눌러 약관 읽기) ...</div>
                <div># Do you accept the license terms? [yes|no] (yes 입력)</div>
                <div># Anaconda3 will now be installed into this location:</div>
                <div># /home/myuser/anaconda3</div>
                <div># - Press ENTER to confirm the location</div>
                <div># - Press CTRL-C to abort the installation</div>
                <div># - Or specify a different location below</div>
                <div># (Enter)</div>
                <div># ... (설치 진행) ...</div>
                <div># Do you wish to run `conda init`? [yes|no] (yes 입력)</div>
                <div></div>
                <div># 설정 적용</div>
                <div>myuser@a1b2c3d4e5f6:~$ source ~/.bashrc</div>
                <div></div>
                <div># Anaconda 버전 확인</div>
                <div>myuser@a1b2c3d4e5f6:~$ conda --version</div>
                <div># 출력 예시: conda 24.3.0</div>
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
            <span className="text-gray-700">컨테이너의 IP 주소를 확인했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">SSH로 가상 컨테이너에 접속했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">.bashrc 파일을 수정했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Anaconda를 설치했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Anaconda 버전을 확인했나요?</span>
          </label>
        </div>
      </div>
    </div>
  );
} 