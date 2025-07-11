export default function Lesson6() {
  return (
    <div className="space-y-8">
      {/* 학습 목표 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-start gap-4">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 학습 목표</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Windows 환경에서 Google Gemini CLI를 설치하고 API 키를 설정할 수 있다.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Gemini AI를 이용하여 간단한 텍스트 생성 및 대화를 할 수 있다.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Windows PowerShell 또는 Command Prompt를 통해 인공지능과 상호작용하는 기본적인 방법을 이해할 수 있다.
              </li>
            </ul>
          </div>
          <div className="flex-shrink-0 ml-4">
            <img src="/img/Lesson4/imgGeminiCLIHome.png" alt="Gemini CLI 홈 화면" className="w-72 h-auto rounded shadow" />
          </div>
        </div>
      </div>

      {/* Node.js 및 npm 설치하기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Node.js 및 npm 설치하기 (Windows)</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              Node.js는 JavaScript를 서버에서 실행할 수 있게 해주는 런타임 환경이고, npm은 Node.js 패키지를 관리하는 도구입니다. 
              Gemini CLI를 설치하기 위해서는 먼저 Node.js와 npm이 설치되어 있어야 합니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 (Windows에서 진행):</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. Node.js 공식 웹사이트 접속</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">웹 브라우저를 열고 Node.js 공식 웹사이트에 접속합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    https://nodejs.org/
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    LTS(Long Term Support) 버전을 선택하여 다운로드하는 것을 권장합니다.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. Windows Installer 다운로드</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">"Windows Installer" 버튼을 클릭하여 설치 파일을 다운로드합니다.</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• 64-bit Windows: node-v20.x.x-x64.msi</p>
                    <p>• 32-bit Windows: node-v20.x.x-x86.msi</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. 설치 파일 실행</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">다운로드된 .msi 파일을 더블클릭하여 설치를 시작합니다.</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• "Next" 버튼을 클릭하며 설치를 진행합니다.</p>
                    <p>• "Add to PATH" 옵션이 체크되어 있는지 확인합니다.</p>
                    <p>• "Install" 버튼을 클릭하여 설치를 완료합니다.</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">4. 설치 확인</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Command Prompt 또는 PowerShell을 열고 다음 명령어를 실행합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    node --version<br/>
                    npm --version
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    각각 버전 정보가 출력되면 정상적으로 설치된 것입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (명령어 및 출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div># PowerShell 또는 Command Prompt에서</div>
                <div>PS C:\Users\User&gt; node --version</div>
                <div># v20.12.0 (예시 버전)</div>
                <div>PS C:\Users\User&gt; npm --version</div>
                <div># 10.5.0 (예시 버전)</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">💡 참고 사항</h5>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• Windows에서는 공식 installer를 사용하는 것이 가장 안전하고 쉬운 방법입니다.</p>
              <p>• PATH 환경변수가 자동으로 설정되므로 터미널 재시작 후 바로 사용 가능합니다.</p>
              <p>• npm은 Node.js와 함께 자동으로 설치되므로 별도 설치가 불필요합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6.1 Google Gemini CLI 설치하기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">6.1 Google Gemini CLI 설치하기 (Windows)</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              Google Gemini CLI는 명령줄에서 Google의 Gemini AI 모델을 사용할 수 있게 해주는 도구예요. 
              이 도구를 사용하면 Windows PowerShell이나 Command Prompt에서 직접 AI와 대화하거나, 텍스트를 생성하고 분석할 수 있어요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 (Windows에서 진행):</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. PowerShell 관리자 권한으로 실행</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">시작 메뉴에서 "PowerShell"을 검색하고 "관리자 권한으로 실행"을 선택합니다.</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Windows + X 키를 누르고 "Windows PowerShell(관리자)" 선택</p>
                    <p>• 또는 시작 메뉴 → PowerShell 우클릭 → "관리자 권한으로 실행"</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. Gemini CLI 전역 설치</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">npm을 사용하여 Gemini CLI를 전역으로 설치합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    npm install -g @google/gemini-cli
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <code className="bg-gray-200 px-1 rounded">npm</code>은 Node.js 패키지를 설치하는 도구이고, <code className="bg-gray-200 px-1 rounded">-g</code>는 전역 설치를 의미합니다.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. 설치 확인</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Gemini CLI가 제대로 설치되었는지 확인합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    gemini
                  </div>
                  <div className="flex justify-center mt-4">
                    <img src="/img/Lesson4/imgGeminiCLIHome.png" alt="Gemini CLI 실행 화면" className="max-w-full h-auto rounded shadow" />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    위와 같은 화면이 나타나면 Gemini CLI가 정상적으로 설치된 것입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (명령어 및 출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div># PowerShell에서 Node.js와 npm 버전 확인</div>
                <div>PS C:\Windows\system32&gt; node --version</div>
                <div># v20.12.0</div>
                <div>PS C:\Windows\system32&gt; npm --version</div>
                <div># 10.5.0</div>
                <div></div>
                <div># Gemini CLI 전역 설치</div>
                <div>PS C:\Windows\system32&gt; npm install -g @google/gemini-cli</div>
                <div># npm WARN deprecated ...</div>
                <div># added 45 packages in 3s</div>
                <div></div>
                <div># Gemini CLI 실행 확인</div>
                <div>PS C:\Windows\system32&gt; gemini</div>
                <div># Gemini CLI 홈 화면이 표시됩니다 (위 이미지 참조)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6.2 Google AI Studio에서 API 키 발급받기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">6.2 Google AI Studio에서 API 키 발급받기</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              API 키는 우리가 Google의 AI 서비스를 사용할 수 있는 '열쇠'와 같아요. 
              이 키가 있어야 Gemini AI를 사용할 수 있어요. 마치 집에 들어갈 때 필요한 열쇠처럼요!
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. Google AI Studio 접속</h5>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">웹 브라우저를 열고 Google AI Studio에 접속합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    https://aistudio.google.com/app/apikey
                  </div>
                    <div className="flex justify-center mb-6">
                      <a href="https://aistudio.google.com/prompts/new_chat" target="_blank" rel="noopener noreferrer">
                        <img src="/img/Lesson4/imgGoogleAIStduioHome.png" alt="Google AI Studio 홈 화면" className="max-w-full h-auto rounded shadow cursor-pointer hover:opacity-90 transition-opacity" />
                      </a>
                    </div>
                </div>
                
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. Google 계정으로 로그인</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Google 계정으로 로그인합니다. (학교 계정 또는 개인 계정)</p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. API 키 생성</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">"Create API Key" 버튼을 클릭하여 새로운 API 키를 생성합니다.</p>
                  <div className="mt-4 space-y-2 text-sm text-gray-600">
                    <p>• 생성된 API 키를 안전한 곳에 복사해둡니다.</p>
                    <p>• API 키는 비밀번호처럼 중요한 정보이므로 다른 사람과 공유하지 않습니다.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h5 className="font-semibold text-yellow-800 mb-2">⚠️ 주의사항</h5>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• API 키는 절대로 다른 사람에게 보여주거나 공유하지 마세요.</p>
              <p>• API 키를 GitHub 등에 올리지 마세요.</p>
              <p>• API 키가 노출되면 즉시 재발급받으세요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 6.3 API 키 설정하기 (Windows) */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">6.3 API 키 설정하기 (Windows)</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              이제 발급받은 API 키를 Windows 시스템에 설정해서 Gemini AI를 사용할 수 있도록 할 거예요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">방법 1: PowerShell에서 임시 설정</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. 환경 변수 임시 설정</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">PowerShell에서 API 키를 환경 변수로 설정합니다. (YOUR_API_KEY 부분을 실제 API 키로 교체)</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    $env:GOOGLE_API_KEY = "YOUR_API_KEY"
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    예시: <code className="bg-gray-200 px-1 rounded">$env:GOOGLE_API_KEY = "AIzaSyC..."</code>
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. 설정 확인</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">API 키가 제대로 설정되었는지 확인합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    echo $env:GOOGLE_API_KEY
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    API 키가 출력되면 성공입니다. (단, 이 설정은 PowerShell 창을 닫으면 사라집니다)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">방법 2: 시스템 환경 변수로 영구 설정</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. 시스템 속성 열기</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">다음 중 하나의 방법으로 시스템 속성을 엽니다:</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• Windows + R → "sysdm.cpl" 입력 → Enter</p>
                    <p>• 제어판 → 시스템 및 보안 → 시스템 → 고급 시스템 설정</p>
                    <p>• 내 PC 우클릭 → 속성 → 고급 시스템 설정</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. 환경 변수 설정</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">시스템 속성 창에서 환경 변수를 설정합니다:</p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>• "환경 변수" 버튼 클릭</p>
                    <p>• "시스템 변수" 섹션에서 "새로 만들기" 클릭</p>
                    <p>• 변수 이름: GOOGLE_API_KEY</p>
                    <p>• 변수 값: 발급받은 API 키 입력</p>
                    <p>• "확인" 버튼 클릭하여 저장</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. 시스템 재시작 또는 PowerShell 재시작</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">환경 변수 변경사항을 적용하기 위해 PowerShell을 재시작하거나 시스템을 재시작합니다.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (명령어 및 출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div># PowerShell에서 임시 환경 변수 설정</div>
                <div>PS C:\Users\User&gt; $env:GOOGLE_API_KEY = "AIzaSyC..."</div>
                <div></div>
                <div># 설정 확인</div>
                <div>PS C:\Users\User&gt; echo $env:GOOGLE_API_KEY</div>
                <div># AIzaSyC... (API 키가 출력됨)</div>
                <div></div>
                <div># 또는 Get-ChildItem 명령어로 확인</div>
                <div>PS C:\Users\User&gt; Get-ChildItem Env:GOOGLE_API_KEY</div>
                <div># Name                           Value</div>
                <div># ----                           -----</div>
                <div># GOOGLE_API_KEY                 AIzaSyC...</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6.4 Gemini CLI 테스트하기 (Windows) */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">6.4 Gemini CLI 테스트하기 (Windows)</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              이제 모든 설정이 완료되었으니, Windows 환경에서 Gemini CLI가 제대로 작동하는지 간단한 테스트를 해볼 거예요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. Python 스크립트 생성</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">메모장 또는 VS Code를 사용하여 간단한 테스트 스크립트를 만들어봅시다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    notepad test_gemini.py
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    또는 VS Code: <code className="bg-gray-200 px-1 rounded">code test_gemini.py</code>
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. 스크립트 내용 작성</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">다음 내용을 입력하고 저장합니다:</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm whitespace-pre-line">
                    {`import os
import google.generativeai as genai

# API 키 설정
genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

# 모델 생성
model = genai.GenerativeModel('gemini-pro')

# 간단한 질문
response = model.generate_content("안녕하세요! 간단한 인사말을 해주세요.")

print(response.text)`}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. 필요한 라이브러리 설치</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Python에서 Google Generative AI 라이브러리를 설치합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    pip install google-generativeai
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">4. 스크립트 실행</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">PowerShell에서 Python 스크립트를 실행합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    python test_gemini.py
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div>PS C:\Users\User&gt; pip install google-generativeai</div>
                <div># Collecting google-generativeai</div>
                <div># ...</div>
                <div># Successfully installed google-generativeai-0.3.2</div>
                <div></div>
                <div>PS C:\Users\User&gt; python test_gemini.py</div>
                <div># 안녕하세요! 반갑습니다. 오늘도 좋은 하루 되세요! 😊</div>
                <div></div>
                <div># 성공적으로 Gemini AI와 대화할 수 있습니다!</div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-semibold text-green-800 mb-2">✅ 문제 해결 팁</h5>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• Python이 설치되지 않은 경우: python.org에서 Python 3.x 다운로드</p>
              <p>• pip 명령어가 인식되지 않는 경우: Python 설치 시 "Add to PATH" 옵션 확인</p>
              <p>• 환경 변수가 인식되지 않는 경우: PowerShell 재시작 또는 시스템 재부팅</p>
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
            <span className="text-gray-700">Windows에서 Node.js와 npm을 설치했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Gemini CLI를 전역으로 설치했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Google AI Studio에서 API 키를 발급받았나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">API 키를 Windows 환경 변수로 설정했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Python에서 Google Generative AI 라이브러리를 설치했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Gemini CLI 테스트를 성공적으로 완료했나요?</span>
          </label>
        </div>
      </div>
    </div>
  );
} 