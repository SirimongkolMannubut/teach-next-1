'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWarning, setShowWarning] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const horrorNovels = [
    { id: 1, title: "เสียงกระซิบในความมืด", author: "ผู้เขียนนิรนาม", genre: "สยองขวัญ", chapters: 13, warning: "อันตราย" },
    { id: 2, title: "บ้านหลังสุดท้าย", author: "วิญญาณเร่ร่อน", genre: "ผีดิบ", chapters: 7, warning: "ห้ามอ่านคนเดียว" },
    { id: 3, title: "ตุ๊กตาที่จ้องมอง", author: "คนตายแล้ว", genre: "สยองขวัญ", chapters: 21, warning: "เตือน: จิตใจอ่อนแอ" },
    { id: 4, title: "โรงพยาบาลร้าง", author: "ผีพยาบาล", genre: "ผีดิบ", chapters: 15, warning: "ห้ามอ่านตอนกลางคืน" },
    { id: 5, title: "ป่าช้าแห่งความตาย", author: "วิญญาณหลงทาง", genre: "สยองขวัญ", chapters: 9, warning: "อันตรายสูงสุด" },
    { id: 6, title: "เงาที่ตามมา", author: "สิ่งไม่รู้จัก", genre: "ผีดิบ", chapters: 33, warning: "ห้ามอ่าน" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-8 animate-pulse">👁️</div>
          <div className="text-white text-2xl mb-4 animate-pulse">กำลังเชื่อมต่อ...</div>
          <div className="text-red-400 text-lg animate-pulse">โลกหลังความตาย</div>
        </div>
      </div>
    );
  }

  if (showWarning) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
        <div className="max-w-2xl text-center border border-red-800 p-8 bg-gray-900">
          <div className="text-red-500 text-8xl mb-6">⚠️</div>
          <h1 className="text-3xl font-bold text-red-400 mb-6">คำเตือนสำคัญ</h1>
          <div className="text-gray-300 leading-relaxed mb-8 space-y-4">
            <p>เนื้อหาในเว็บไซต์นี้มีความรุนแรงและน่าสะพรึงกลัวสูง</p>
            <p className="text-red-400">ไม่เหมาะสำหรับผู้ที่มีโรคหัวใจ หรือจิตใจอ่อนแอ</p>
            <p>การอ่านต่อถือว่าคุณยอมรับความเสี่ยงทั้งหมด</p>
            <p className="text-yellow-400">เราไม่รับผิดชอบต่อผลที่ตามมา...</p>
          </div>
          <div className="space-y-4">
            <button 
              onClick={() => setShowWarning(false)}
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-3 rounded border border-red-600 transition-all hover:shadow-lg hover:shadow-red-900/50"
            >
              ฉันเข้าใจและยอมรับความเสี่ยง
            </button>
            <div>
              <a href="https://google.com" className="text-gray-500 hover:text-gray-300 underline">
                หนีออกไปจากที่นี่
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Floating Eyes */}
      <div 
        className="fixed pointer-events-none z-50 text-red-500 text-2xl transition-all duration-100"
        style={{ left: mousePos.x - 10, top: mousePos.y - 10 }}
      >
        👁️
      </div>
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-black to-red-950 opacity-90"></div>
      <div className="fixed inset-0 opacity-20">
        <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff0000' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>

      <header className="relative z-10 bg-gray-900 border-b border-red-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-red-400 mb-2 animate-pulse">
            👁️ ห้องสมุดแห่งความตาย
          </h1>
          <p className="text-gray-400 italic">ยินดีต้อนรับสู่โลกหลังความตาย... ที่นี่ไม่มีใครได้กลับ</p>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-red-300 animate-pulse">
            📚 เรื่องเล่าจากนรก
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {horrorNovels.map((novel) => (
              <div key={novel.id} className="bg-gray-900 border border-red-800 rounded-lg shadow-2xl hover:shadow-red-900/50 transition-all duration-300 p-6 hover:scale-105 group">
                <div className="text-red-500 text-4xl mb-4 group-hover:animate-bounce">💀</div>
                <h3 className="text-xl font-semibold mb-3 text-red-300 hover:text-red-100 transition-colors">
                  <a href={`/novel/${novel.id}`} className="hover:underline">{novel.title}</a>
                </h3>
                <p className="text-gray-400 mb-2">ผู้เขียน: {novel.author}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-red-900 text-red-200 px-3 py-1 rounded-full text-sm border border-red-700">
                    {novel.genre}
                  </span>
                  <span className="text-gray-500 text-sm">{novel.chapters} ตอน</span>
                </div>
                <div className="bg-red-950 border border-red-800 p-2 rounded mb-4">
                  <p className="text-yellow-400 text-xs font-bold">⚠️ {novel.warning}</p>
                </div>
                <a 
                  href={`/novel/${novel.id}`}
                  className="block w-full bg-red-800 hover:bg-red-700 text-white text-center py-3 rounded border border-red-600 transition-all hover:shadow-lg hover:shadow-red-900/50 font-semibold"
                >
                  กล้าอ่านไหม?
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900 border border-red-800 rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-semibold mb-6 text-red-300 animate-pulse">
            🔥 ประตูสู่นรกทั้ง 7 ชั้น
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "ผีดิบ", icon: "🧟" },
              { name: "วิญญาณ", icon: "👻" },
              { name: "ปีศาจ", icon: "😈" },
              { name: "แวมไพร์", icon: "🧛" },
              { name: "คำสาป", icon: "🔮" },
              { name: "ฆาตกรรม", icon: "🔪" },
              { name: "บ้านผีสิง", icon: "🏚️" },
              { name: "ป่าช้าตาย", icon: "🌲" }
            ].map((genre) => (
              <a 
                key={genre.name}
                href={`/genre/${genre.name}`}
                className="bg-red-950 hover:bg-red-900 border border-red-800 p-6 rounded-lg text-center transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-900/50 group"
              >
                <div className="text-4xl mb-2 group-hover:animate-bounce">{genre.icon}</div>
                <div className="text-red-200 font-semibold">{genre.name}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-900 border border-red-800 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-red-400 italic text-lg leading-relaxed">
              "เมื่อคุณจ้องมองเข้าไปในความมืด... ความมืดก็จ้องกลับมาที่คุณ"
            </p>
            <p className="text-gray-500 mt-4">- คำพูดสุดท้ายของผู้อ่านคนก่อน</p>
          </div>
        </div>
      </main>

      <footer className="relative z-10 bg-black border-t border-red-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-red-400 mb-2">© 2024 ห้องสมุดแห่งความตาย</p>
          <p className="text-gray-600 text-sm">เมื่อเข้ามาแล้ว... ไม่มีทางออก</p>
          <div className="mt-4 text-red-500 animate-pulse">👁️ พวกเขากำลังมอง... 👁️</div>
        </div>
      </footer>
    </div>
  );
}
