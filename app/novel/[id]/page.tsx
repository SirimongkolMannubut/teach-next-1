export default function NovelPage({ params }: { params: { id: string } }) {
  const novels = {
    "1": {
      title: "รักนิรันดร์",
      author: "นักเขียนคนที่ 1",
      genre: "โรแมนติก",
      description: "เรื่องราวความรักที่ยาวนานและไม่มีวันสิ้นสุด ระหว่างหญิงสาวผู้บริสุทธิ์กับชายหนุ่มผู้มีเสน่ห์",
      chapters: [
        { id: 1, title: "การพบกันครั้งแรก", content: "ในวันที่ฟ้าใส แสงแดดส่องประกายผ่านใบไผ่ เธอเดินมาด้วยรอยยิ้มที่งดงาม..." },
        { id: 2, title: "ความรู้สึกที่เริ่มต้น", content: "หัวใจเต้นแรงขึ้นทุกครั้งที่ได้เห็นเธอ ความรู้สึกนี้คืออะไร..." },
        { id: 3, title: "คำสารภาพรัก", content: "ใต้แสงจันทร์เต็มดวง เขาเอ่ยคำที่เก็บไว้ในใจมานาน 'ผมรักคุณ'..." }
      ]
    },
    "2": {
      title: "ดาบเทพสังหาร",
      author: "นักเขียนคนที่ 2", 
      genre: "แฟนตาซี",
      description: "การผจญภัยของนักรบหนุ่มที่ได้รับดาบศักดิ์สิทธิ์ เพื่อปกป้องโลกจากปีศาจร้าย",
      chapters: [
        { id: 1, title: "ดาบที่สาบสูญ", content: "ในถ้ำลึกแห่งภูเขาไฟ มีดาบเล่มหนึ่งที่รอคอยเจ้าของที่แท้จริง..." },
        { id: 2, title: "พลังที่ตื่นขึ้น", content: "เมื่อมือสัมผัสด้ามดาบ พลังอันยิ่งใหญ่ก็ไหลเวียนเข้าสู่ร่างกาย..." }
      ]
    }
  };

  const novel = novels[params.id as keyof typeof novels];
  
  if (!novel) {
    return <div className="text-center py-20">ไม่พบนิยายที่คุณต้องการ</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <a href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← กลับหน้าหลัก</a>
          <h1 className="text-3xl font-bold text-gray-900">{novel.title}</h1>
          <p className="text-gray-600 mt-2">โดย: {novel.author} | หมวด: {novel.genre}</p>
          <p className="text-gray-700 mt-4">{novel.description}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">รายการตอน</h2>
        <div className="space-y-4">
          {novel.chapters.map((chapter) => (
            <div key={chapter.id} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">
                ตอนที่ {chapter.id}: {chapter.title}
              </h3>
              <div className="prose max-w-none text-gray-700 leading-relaxed">
                {chapter.content}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2">
                  อ่านต่อ
                </button>
                <button className="border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                  บุ๊คมาร์ค
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}