"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Search } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    id: 1,
    label: "서비스",
    url: "",
    subItems: [
      { label: "애플리케이션 서비스", url: "https://ntq.com.vn/ko/service-2/application-services/" },
      { label: "UI/UX 디자인 ", url: "https://ntq.com.vn/ko/service-2/ui-ux-design-service/" },
      { label: "QA 및 테스트", url: "https://ntq.com.vn/ko/service-2/software-testing-service/" },
      { label: "레거시 마이그레이션", url: "https://ntq.com.vn/ko/service-2/legacy-migration/" },
      { label: "인공지능 서비스", url: "https://ntq.com.vn/ko/service-2/artificial-intelligence-service/" },
      { label: "블록체인인", url: "https://ntq.com.vn/ko/service-2/blockchain-development-service/" },
      { label: "사물 인터넷 (IoT)", url: "https://ntq.com.vn/ko/service-2/iot-development-services/" },
      { label: "클라우드", url: "https://ntq.com.vn/ko/service-2/cloud-transformation/" },
      { label: "전담 개발팀", url: "https://ntq.com.vn/ko/service-2/dedicated-development-team/" },
      { label: "오프쇼어 개발 센터(ODC)", url: "https://ntq.com.vn/ko/service-2/offshore-development-center/" },
      { label: "SAP", url: "https://ntq.com.vn/service/sap-services-and-solutions/" },
      { label: "비즈니스 기술 컨설팅", url: "https://ntq.com.vn/ko/service-2/business-technology-consulting/" },
    ],
  },
  { id: 2, 
    label: "산업 분야", 
    url: "" ,
    subItems: [
      { label: "BFSI (은행, 금용, 보험)", url: "https://ntq.com.vn/ko/industries-2/bfsi/" },
      { label: "생산 및 자동화", url: "https://ntq.com.vn/ko/industries-2/manufacturing-and-automation/" },
      { label: "물류 및 운송", url: "https://ntq.com.vn/ko/industries-2/logistic-and-transportation/" },
      { label: "헬스케어", url: "https://ntq.com.vn/ko/industries-2/healthcare/" },
      { label: "유틸리티 및 에너지", url: "https://ntq.com.vn/ko/industries-2/utility-and-energy/" },
      { label: "이커머스", url: "https://ntq.com.vn/ko/industries-2/ecommerce/" },
    ],
  },
  {
    id: 3,
    label: "제품",
    url: "https://ntq.com.vn/ko/products-2/",
    
  },
  { 
    id: 4, 
    label: "회사 소개", 
    url: "", 
    subItems: [
    { label: "회사소개", url: "https://ntq.com.vn/ko/company-2/who-we-are/" },
    { label: "마일스톤", url: "https://ntq.com.vn/ko/company-2/milestones-2/" },
    { label: "뉴스룸", url: "https://ntq.com.vn/ko/newsroom/" },
    ],
    },

  { 
    id: 5, 
    label: "인사이트", 
    url: "",
    subItems: [
        { label: "Blog", url: "https://ntq.com.vn/ko/blog/" },
        { label: "Resource hub", url: "https://ntq.com.vn/resource-hub/" },
      ],
    },
  { id: 6, label: "채용 정보", url: "https://career.ntq.com.vn/" },
];

const Nav = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    
    <div className="fixed top-0 left-0 w-full bg-blue-50 hover:bg-white z-50">
      <div className="container mx-auto flex justify-between items-center px-10 ">
        {/* Logo */}
        <Link href='/'>
            <Image
                src="https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/NTQ-logo.png"
                alt="NTQ Korea"
                width={120}
                height={120}
            />
        </Link>
       
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((nav) => (
            <div
              key={nav.id}
              className="relative group"
              onMouseEnter={() => setOpenMenu(nav.id)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link href={nav.url} className="hover:text-blue-500 px-4 py-10 inline-flex items-center  ">
                <span>{nav.label}</span>
                { nav.subItems && <ChevronDownIcon aria-hidden="true" className="size-5" />}
              </Link>
              {/* Dropdown Menu */}
              {nav.subItems && (
                <div
                  className={`absolute left-0  bg-white shadow-md rounded-md transition-opacity duration-200   ${
                    openMenu === nav.id ? "opacity-100 visible" : "opacity-0 invisible " 
                  } ${nav.subItems.length >= 7 ? "w-[900px]" : `w-[300px]`
                }`}
                >
                <div  className={`grid gap-2 p-2 ${nav.subItems.length >= 7 ? "grid-cols-3" : `grid-cols-1`
                }`}>
                {nav.subItems.map((sub, index) => (
                    <Link
                    key={index}
                    href={sub.url}
                    className="px-4 py-2 hover:bg-blue-50 hover:text-blue-500"
                    >
                    {sub.label}
                    </Link>
                ))}
                </div>
                </div>
              )}
            </div>
          ))}
          
        </div>
        {/* Search Icon & Contact Button */}
        <div className="flex items-center space-x-10">
          <Link href='/search'><Search className="w-8 h-8 text-gray-700 cursor-pointer " /></Link>
          <Link href='/contact'><button className="border border-gray-400 px-6 py-2 rounded-full text-sm hover:bg-gray-100 cursor-pointer">
            연락하기
          </button></Link>
          
        </div>

        {/* Mobile Menu Button */}
        
        <button
          className="md:hidden text-xl py-5"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white shadow-md p-4">
          {navLinks.map((nav) => (
            <div key={nav.id} className="py-2">
              <Link href={nav.url} className="block font-medium">
                {nav.label}
              </Link>
              {/* Mobile Dropdown */}
              {nav.subItems && (
                <div className="ml-4 mt-2 border-l-2 border-gray-200 pl-2">
                  {nav.subItems.map((sub, index) => (
                    <Link
                      key={index}
                      href={sub.url}
                      className="block py-1 text-gray-600"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
