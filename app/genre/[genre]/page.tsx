export default function GenrePage({ params }: { params: { genre: string } }) {
  const genreNovels = {
    "โรแมนติก": [
      { id: 1, title: "รักนิรันดร์", author: "นักเขียนคนที่ 1", chapters: 25 },
      { id: 6, title: "รักข้ามกาลเวลา", author: "นักเขียนคนที่ 6", chapters: 45 }
    ],
    "แฟนตาซี": [
      { id: 2, title: "ดาบเทพสังหาร", author: "นักเขียนคนที่ 2", chapters: 150 },
      { id: 4, title: "เจ้าชายแวมไพร์", author: "นักเขียนคนที่ 4", chapters: 67 }
    ],
    "แอคชั่น": [
      { id: 5, title: "นักสู้พิทักษ์โลก", author: "นักเขียนคนที่ 5", chapters: 200 }
    ]
  };

  const novels = genreNovels[decodeURIComponent(params.genre) as keyof typeof genreNovels] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <a href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">← กลับหน้าหลัก</a>
          <h1 className="text-3xl font-bold text-gray-900">หมวด: {decodeURIComponent(params.genre)}</h1>
          <p className="text-gray-600 mt-2">นิยายทั้งหมด {novels.length} เรื่อง</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {novels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novels.map((novel) => (
              <div key={novel.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 hover:text-blue-800">
                  <a href={`/novel/${novel.id}`}>{novel.title}</a>
                </h3>
                <p className="text-gray-600 mb-4">โดย: {novel.author}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 text-sm">{novel.chapters} ตอน</span>
                  <a 
                    href={`/novel/${novel.id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                  >
                    เริ่มอ่าน
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">ยังไม่มีนิยายในหมวดนี้</p>
          </div>
        )}
      </main>
    </div>
  );
}