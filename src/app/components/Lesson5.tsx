export default function Lesson5() {
  return (
    <div className="space-y-8">
      {/* 학습 목표 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">🎯 학습 목표</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Gemini CLI를 활용하여 다양한 자연어 처리 프로그램을 직접 만들어본다.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            실생활에서 활용할 수 있는 AI 텍스트 생성, 요약, 감정 분석, 맞춤법 검사 등을 경험한다.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            나만의 AI 챗봇, 요약기, 감정분석기 등 미니 프로젝트를 완성한다.
          </li>
        </ul>
      </div>

      {/* 5.1 Gemini CLI로 텍스트 생성 실습 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">5.1 Gemini CLI로 텍스트 생성 실습</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 예시 1: 인사말 생성</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div className="whitespace-pre-line">
                  {`import os
import google.generativeai as genai

genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
model = genai.GenerativeModel('gemini-pro')
response = model.generate_content('친구에게 보낼 인사말을 만들어줘.')
print(response.text)`}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">실행 결과: "안녕! 오늘도 좋은 하루 보내!" 등 다양한 인사말이 생성됩니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5.2 Gemini CLI로 텍스트 요약 실습 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">5.2 Gemini CLI로 텍스트 요약 실습</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 예시 2: 긴 글 요약</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div className="whitespace-pre-line">
                  {`import os
import google.generativeai as genai

genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
model = genai.GenerativeModel('gemini-pro')
text = '''
자연어처리는 컴퓨터가 인간의 언어를 이해하고 처리하는 기술입니다.
이 기술은 번역, 요약, 감정 분석 등 다양한 분야에 활용됩니다.
'''
response = model.generate_content(f'다음 글을 한 문장으로 요약해줘: {text}')
print(response.text)`}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">실행 결과: "자연어처리는 컴퓨터가 인간의 언어를 이해하고 처리하는 기술로, 번역, 요약, 감정 분석 등에 활용됩니다."</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5.3 Gemini CLI로 감정 분석 실습 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">5.3 Gemini CLI로 감정 분석 실습</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 예시 3: 감정 분석</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div className="whitespace-pre-line">
                  {`import os
import google.generativeai as genai

genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
model = genai.GenerativeModel('gemini-pro')
text = '오늘은 정말 즐거운 하루였어!'
response = model.generate_content(f'다음 문장의 감정을 분석해줘: {text}')
print(response.text)`}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">실행 결과: "긍정" 또는 "기쁨" 등 감정 결과가 출력됩니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5.4 Gemini CLI로 맞춤법 검사 실습 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">5.4 Gemini CLI로 맞춤법 검사 실습</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">실습 예시 4: 맞춤법 검사</h4>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-black text-green-400 p-4 rounded font-mono text-sm">
                <div className="whitespace-pre-line">
                  {`import os
import google.generativeai as genai

genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
model = genai.GenerativeModel('gemini-pro')
text = '나는 오늘 학교에 갔엇다.'
response = model.generate_content(f'다음 문장의 맞춤법을 고쳐줘: {text}')
print(response.text)`}
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">실행 결과: "나는 오늘 학교에 갔다." 등 올바른 문장으로 수정됩니다.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5.5 미니 프로젝트: 나만의 AI 프로그램 만들기 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">5.5 미니 프로젝트: 나만의 AI 프로그램 만들기</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">프로젝트 아이디어</h4>
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-blue-800 mb-2">🤖 AI 기반 프로젝트</h5>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">AI 챗봇 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "사용자의 질문에 답변해주는 파이썬 챗봇 프로그램을 만들어줘. while 반복문을 사용해서 사용자가 'exit'를 입력할 때까지 계속 대화할 수 있도록 하고, google.generativeai 라이브러리를 사용해서 Gemini API로 답변을 생성하는 프로그램이야."
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">AI 요약기 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "긴 글을 입력받아서 한 문장으로 요약해주는 파이썬 프로그램을 만들어줘. google.generativeai 라이브러리를 사용하고, 파일에서 텍스트를 읽어오거나 사용자가 직접 입력할 수 있는 기능을 포함해서 만들어줘."
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">AI 감정분석기 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "문장의 감정을 분석해주는 파이썬 프로그램을 만들어줘. google.generativeai 라이브러리를 사용해서 긍정, 부정, 중립을 판단하고, 신뢰도 점수도 함께 출력하는 프로그램이야."
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">AI 맞춤법 검사기 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "문장의 맞춤법을 자동으로 검사하고 수정해주는 파이썬 프로그램을 만들어줘. google.generativeai 라이브러리를 사용해서 틀린 부분을 찾아 수정하고, 어떤 부분이 수정되었는지 설명도 함께 출력하는 프로그램이야."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-green-800 mb-2">🔍 한국어 자연어처리 프로젝트</h5>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">한국어 형태소 분석기 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "konlpy 라이브러리에 있는 kkma 형태소 분석기를 이용한 파이썬 한국어 형태소 분석 프로그램을 만들어 줘. 키보드로 문장을 입력하면, 해당 문장을 형태소 분석한 결과와 품사별 카운트 등을 화면에 출력하는 프로그램이야."
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">한국어 키워드 추출기 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "konlpy 라이브러리의 Okt 형태소 분석기와 collections.Counter를 사용해서 한국어 텍스트에서 중요한 키워드를 추출하는 파이썬 프로그램을 만들어줘. 명사만 추출하고 빈도수 상위 10개를 출력하는 프로그램이야."
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">한국어 텍스트 유사도 측정기 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "sklearn 라이브러리의 TfidfVectorizer와 cosine_similarity를 사용해서 두 한국어 문장의 유사도를 측정하는 파이썬 프로그램을 만들어줘. 사용자가 두 문장을 입력하면 0~1 사이의 유사도 점수를 출력하는 프로그램이야."
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">한국어 워드클라우드 생성기 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "wordcloud와 konlpy 라이브러리를 사용해서 한국어 텍스트로 워드클라우드를 생성하는 파이썬 프로그램을 만들어줘. matplotlib로 시각화하고, 한글 폰트 설정과 불용어 제거 기능을 포함해서 만들어줘."
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-purple-800 mb-2">🔎 검색 시스템 프로젝트</h5>
                <div className="space-y-3">
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">간단한 문서 검색 엔진 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "sklearn 라이브러리의 TfidfVectorizer를 사용해서 여러 텍스트 문서 중에서 사용자가 입력한 키워드와 가장 유사한 문서를 찾아주는 파이썬 검색 엔진을 만들어줘. 코사인 유사도를 계산해서 상위 3개 문서를 추천하는 프로그램이야."
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">한국어 FAQ 검색 시스템 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "pandas 라이브러리로 FAQ 데이터를 관리하고, konlpy와 sklearn을 사용해서 사용자 질문과 가장 유사한 FAQ를 찾아주는 파이썬 프로그램을 만들어줘. 질문과 답변이 포함된 CSV 파일을 읽어서 검색하는 시스템이야."
                    </p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-800">뉴스 기사 분류 시스템 만들기</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-medium">프롬프트:</span> "sklearn 라이브러리의 MultinomialNB와 TfidfVectorizer를 사용해서 뉴스 기사를 카테고리별로 분류하는 파이썬 머신러닝 프로그램을 만들어줘. 정치, 경제, 스포츠, 연예 등으로 분류하고 정확도도 출력하는 프로그램이야."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">진행 방법</h4>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li>어떤 프로그램을 만들지 정한다.</li>
              <li>실습 예시 코드를 참고하여 나만의 코드를 작성한다.</li>
              <li>직접 실행해보고 결과를 확인한다.</li>
              <li>친구들과 결과를 공유하고, 서로의 프로그램을 테스트해본다.</li>
            </ol>
          </div>
        </div>
      </div>

      {/* 체크리스트 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">✅ 오늘의 체크리스트</h3>
        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">텍스트 생성 실습을 완료했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">텍스트 요약 실습을 완료했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">감정 분석 실습을 완료했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">맞춤법 검사 실습을 완료했나요?</span>
          </label>
          <label className="flex items-center space-x-3">
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
            <span className="text-gray-700">나만의 AI 미니 프로젝트를 완성했나요?</span>
          </label>
        </div>
      </div>
    </div>
  );
} 