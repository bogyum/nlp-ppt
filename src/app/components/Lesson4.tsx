export default function Lesson4() {
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
                Google Gemini CLI를 설치하고 API 키를 설정할 수 있다.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Gemini AI를 이용하여 간단한 텍스트 생성 및 대화를 할 수 있다.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                CLI를 통해 인공지능과 상호작용하는 기본적인 방법을 이해할 수 있다.
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
        <h3 className="text-xl font-bold text-gray-900 mb-4">Node.js 및 npm 설치하기</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              Node.js는 JavaScript를 서버에서 실행할 수 있게 해주는 런타임 환경이고, npm은 Node.js 패키지를 관리하는 도구입니다. 
              Gemini CLI를 설치하기 위해서는 먼저 Node.js와 npm이 설치되어 있어야 합니다.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 (user 계정에서 진행):</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. 시스템 패키지 업데이트</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">먼저 시스템 패키지를 최신으로 업데이트합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    sudo apt update && sudo apt upgrade -y
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. curl 설치 (필요시)</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Node.js 설치 스크립트를 다운로드하기 위해 curl이 필요합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    sudo apt install -y curl
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. NodeSource 저장소 추가</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">NodeSource에서 제공하는 최신 Node.js LTS 버전을 설치하기 위해 저장소를 추가합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <code className="bg-gray-200 px-1 rounded">setup_lts.x</code>는 현재 LTS(Long Term Support) 버전을 자동으로 설치합니다.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">4. Node.js 및 npm 설치</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Node.js를 설치하면 npm도 함께 설치됩니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    sudo apt install -y nodejs
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">5. 설치 확인</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Node.js와 npm이 정상적으로 설치되었는지 버전을 확인합니다.</p>
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
                <div># 시스템 업데이트</div>
                <div>user@a1b2c3d4e5f6:~$ sudo apt update && sudo apt upgrade -y</div>
                <div># ... (업데이트 진행) ...</div>
                <div></div>
                <div># curl 설치</div>
                <div>user@a1b2c3d4e5f6:~$ sudo apt install -y curl</div>
                <div># ... (설치 진행) ...</div>
                <div></div>
                <div># NodeSource 저장소 추가</div>
                <div>user@a1b2c3d4e5f6:~$ curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -</div>
                <div># Repository added successfully</div>
                <div></div>
                <div># Node.js 설치</div>
                <div>user@a1b2c3d4e5f6:~$ sudo apt install -y nodejs</div>
                <div># ... (설치 진행) ...</div>
                <div></div>
                <div># 버전 확인</div>
                <div>user@a1b2c3d4e5f6:~$ node --version</div>
                <div># v20.12.0 (예시 버전)</div>
                <div>user@a1b2c3d4e5f6:~$ npm --version</div>
                <div># 10.5.0 (예시 버전)</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 mb-2">💡 참고 사항</h5>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• NodeSource를 통해 설치하면 최신 LTS 버전을 사용할 수 있습니다.</p>
              <p>• LTS(Long Term Support) 버전은 안정성이 검증된 장기 지원 버전입니다.</p>
              <p>• npm은 Node.js와 함께 자동으로 설치되므로 별도 설치가 불필요합니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 4.1 Google Gemini CLI 설치하기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">4.1 Google Gemini CLI 설치하기</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              Google Gemini CLI는 명령줄에서 Google의 Gemini AI 모델을 사용할 수 있게 해주는 도구예요. 
              이 도구를 사용하면 터미널에서 직접 AI와 대화하거나, 텍스트를 생성하고 분석할 수 있어요.
            </p>
          </div>

          <div className="flex justify-center mb-6">
            <a href="https://aistudio.google.com/prompts/new_chat" target="_blank" rel="noopener noreferrer">
              <img src="/img/Lesson4/imgGoogleAIStduioHome.png" alt="Google AI Studio 홈 화면" className="max-w-full h-auto rounded shadow cursor-pointer hover:opacity-90 transition-opacity" />
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 (user 계정에서 진행):</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. Gemini CLI 전역 설치</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">npm을 사용하여 Gemini CLI를 전역으로 설치합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    npm install -g @google/gemini-cli<br/>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    <code className="bg-gray-200 px-1 rounded">npm</code>은 Node.js 패키지를 설치하는 도구이고, <code className="bg-gray-200 px-1 rounded">-g</code>는 전역 설치를 의미합니다.
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. 설치 확인</h5>
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
                <div># Node.js와 npm 버전 확인</div>
                <div>user@a1b2c3d4e5f6:~$ node --version</div>
                <div># v20.12.0</div>
                <div>user@a1b2c3d4e5f6:~$ npm --version</div>
                <div># 10.5.0</div>
                <div></div>
                <div># Gemini CLI 전역 설치</div>
                <div>user@a1b2c3d4e5f6:~$ npm install -g @google/gemini-cli</div>
                <div># npm WARN deprecated ...</div>
                <div># added 45 packages in 3s</div>
                <div></div>
                <div># Gemini CLI 실행 확인</div>
                <div>user@a1b2c3d4e5f6:~$ gemini</div>
                <div># Gemini CLI 홈 화면이 표시됩니다 (위 이미지 참조)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4.2 Google AI Studio에서 API 키 발급받기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">4.2 Google AI Studio에서 API 키 발급받기</h3>
        
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

      {/* 4.3 API 키 설정하기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">4.3 API 키 설정하기</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              이제 발급받은 API 키를 우리의 가상 컴퓨터에 설정해서 Gemini AI를 사용할 수 있도록 할 거예요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 (user 계정에서 진행):</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. 환경 변수 설정</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">API 키를 환경 변수로 설정합니다. (YOUR_API_KEY 부분을 실제 API 키로 교체)</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    export GOOGLE_API_KEY="YOUR_API_KEY"
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    예시: <code className="bg-gray-200 px-1 rounded">export GOOGLE_API_KEY="AIzaSyC..."</code>
                  </p>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. 설정 영구 저장</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">API 키를 .bashrc 파일에 추가하여 영구적으로 저장합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    {`echo 'export GOOGLE_API_KEY="YOUR_API_KEY"' >> ~/.bashrc`}
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">3. 설정 적용</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">변경된 설정을 적용합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    source ~/.bashrc
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">4. 설정 확인</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">API 키가 제대로 설정되었는지 확인합니다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    echo $GOOGLE_API_KEY
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    API 키가 출력되면 성공입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">예시 자료 (명령어 및 출력):</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div># API 키 환경 변수 설정</div>
                <div>myuser@a1b2c3d4e5f6:~$ export GOOGLE_API_KEY="AIzaSyC..."</div>
                <div></div>
                <div># .bashrc에 영구 저장</div>
                <div>myuser@a1b2c3d4e5f6:~$ echo 'export GOOGLE_API_KEY="AIzaSyC..."' &gt;&gt; ~/.bashrc</div>
                <div></div>
                <div># 설정 적용</div>
                <div>myuser@a1b2c3d4e5f6:~$ source ~/.bashrc</div>
                <div></div>
                <div># 설정 확인</div>
                <div>myuser@a1b2c3d4e5f6:~$ echo $GOOGLE_API_KEY</div>
                <div># AIzaSyC... (API 키가 출력됨)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4.4 Gemini CLI 테스트하기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">4.4 Gemini CLI 테스트하기</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">설명:</h4>
            <p className="text-gray-700">
              이제 모든 설정이 완료되었으니, Gemini CLI가 제대로 작동하는지 간단한 테스트를 해볼 거예요.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습:</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium text-gray-800 mb-2">1. Python 스크립트 생성</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">간단한 테스트 스크립트를 만들어봅시다.</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                    vi test_gemini.py
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-gray-800 mb-2">2. 스크립트 내용 작성</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">다음 내용을 입력합니다:</p>
                  <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
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
                <h5 className="font-medium text-gray-800 mb-2">3. 스크립트 실행</h5>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">Python 스크립트를 실행합니다.</p>
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
                <div>myuser@a1b2c3d4e5f6:~$ python test_gemini.py</div>
                <div># 안녕하세요! 반갑습니다. 오늘도 좋은 하루 되세요! 😊</div>
                <div></div>
                <div># 성공적으로 Gemini AI와 대화할 수 있습니다!</div>
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
            <span className="text-gray-700">Google Generative AI 라이브러리를 설치했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">Google AI Studio에서 API 키를 발급받았나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">API 키를 환경 변수로 설정했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">API 키를 .bashrc에 영구 저장했나요?</span>
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