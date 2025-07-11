'use client';

import { useState } from 'react';
import Lesson1 from './components/Lesson1';
import Lesson2 from './components/Lesson2';
import Lesson3 from './components/Lesson3';
import Lesson4 from './components/Lesson4';
import Lesson5 from './components/Lesson5';
import Lesson6 from './components/Lesson6';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, title: '1-2교시', subtitle: 'Docker 시작하기' },
    { id: 1, title: '3-4교시', subtitle: 'Ubuntu 가상 컨테이너 생성' },
    { id: 2, title: '5교시', subtitle: '가상 컨테이너 접속 및 환경 설정' },
    { id: 3, title: '6교시', subtitle: 'Gemini CLI 설치 및 API 키 설정 (Linux)' },
    { id: 4, title: '7-8교시', subtitle: 'Gemini CLI 활용 바이브 코딩' },
    { id: 5, title: '추가', subtitle: 'Gemini CLI 설치 및 API 키 설정 (Windows)' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Lesson1 />;
      case 1:
        return <Lesson2 />;
      case 2:
        return <Lesson3 />;
      case 3:
        return <Lesson4 />;
      case 4:
        return <Lesson5 />;
      case 5:
        return <Lesson6 />;
      default:
        return <Lesson1 />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                인공지능반 - 자연어처리 수업
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Docker + Gemini CLI로 만드는 AI 프로그래밍 (총 8시간)
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">대상: 중학교 1~2학년</p>
              <p className="text-sm text-gray-500">수준: 파이썬 프로그래밍 초중급</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="font-semibold">{tab.title}</div>
                  <div className="text-xs mt-1">{tab.subtitle}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </div>
    </div>
  );
}
