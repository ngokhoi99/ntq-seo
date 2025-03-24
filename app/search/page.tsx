"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";

const mockData = [
  { id: 1, title: "NTQ Korea 소개", link: "/contact" },
  { id: 2, title: "서비스 개요", link: "/contact" },
  { id: 3, title: "채용 정보", link: "/contact" },
  { id: 4, title: "문의하기", link: "/contact" },
  { id: 4, title: "제품 정보", link: "/contact" },
  { id: 4, title: "산업 분야", link: "/contact" },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(mockData);

  useEffect(() => {
    if (query.trim() === "") {
      setResults(mockData);
    } else {
      const filteredResults = mockData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filteredResults);
    }
  }, [query]);

  return (
    <div className="py-70 bg-gradient-to-b from-blue-50 to-white">
    {/* <Image 
        src="https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/hero-search.png"
        alt='검색'
        layout="fill"
        objectFit="cover"
        className="z-0"
    /> */}
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-500">무엇을 도아드릴까요?</h1>

      {/* Ô nhập tìm kiếm */}
      <div className="relative max-w-xl mx-auto">
        <Search className="absolute left-3 top-3 text-blue-500" />
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          className="w-full border border-blue-600 rounded-lg py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Kết quả tìm kiếm */}
      <div className="mt-6 max-w-xl mx-auto">
        {results.length > 0 ? (
          <ul className="border border-gray-200 rounded-lg bg-white shadow-md">
            {results.map((item) => (
              <li key={item.id} className="border border-blue-50 last:border-none">
                <a href={item.link} className="block px-4 py-3 hover:bg-gray-100">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 mt-4">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
}
