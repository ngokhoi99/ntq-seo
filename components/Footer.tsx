import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Hàng ngang: Logo - Menu - Mạng xã hội */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo */}
          <Image
            src="https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/NTQ-logo.png"
            alt="NTQ Korea"
            width={120}
            height={50}
            className="mb-4 md:mb-0"
          />

          {/* Menu */}
          <ul className="flex space-x-6 text-gray-600 text-xl font-bold">
            <li><Link href="https://ntq.com.vn/ko/company-2/who-we-are/" className="hover:text-blue-500">회사소개</Link></li>
            <li><Link href="https://ntq.com.vn/ko/service-2/" className="hover:text-blue-500">서비스</Link></li>
            <li><Link href="https://ntq.com.vn/ko/newsroom/" className="hover:text-blue-500">뉴스룸</Link></li>
            <li><Link href="https://career.ntq.com.vn/" className="hover:text-blue-500">채용 정보</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500">연락하기</Link></li>
          </ul>

          {/* Mạng xã hội */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/NtqSolutionJsc" target="_blank">
              <Facebook className="w-8 h-8 text-gray-600 hover:text-blue-500" />
            </Link>
            <Link href="" target="_blank">
              <Instagram className="w-8 h-8 text-gray-600 hover:text-blue-500" />
            </Link>
            <Link href="https://www.youtube.com/@ntqsolution7201" target="_blank">
              <Youtube className="w-9 h-9 text-gray-600 hover:text-blue-500" />
            </Link>
          </div>
        </div>

        {/* Bản quyền */}
        <div className="text-gray-500 text-sm mt-6 border-t border-gray-300 pt-4">
            © 2025 NTQ Korea. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
