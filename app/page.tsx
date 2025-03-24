
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="relative w-full h-screen mt-20">
        {/*이미지 */}
        <Image 
          src="https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/ProductOverview/product-hero.webp" 
          alt="엔티큐 코리아"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        
        <div className="absolute inset-0 flex justify-end z-10 items-end pr-10 pb-20 whitespace-pre-line ">
          <div className=" text-blue-500 text-4xl font-bold">글로벌 IT 서비스 공급자 {"\n"}
          <span className=" text-blue-500 text-xl  ">#TheOne은 새로운 성장의 물결로 {"\n"}
          비즈니스를 향합니다.</span>
          </div>
        </div>
      </div>
      <div className=" bg-gradient-to-b from-blue-100 to-white">
        {/* Phần nội dung bên trái */}
        <h2 className="text-6xl font-bold text-blue-900 flex items-center justify-center pt-10">우리의 전문 분야</h2>
        <div className="flex justify-center flex-col md:flex-row items-center ">
          <h3 className="text-3xl text-gray-600 mt-4  flex justify-end pr-20 w-[400px]">
            소프트웨어 개발 서비스
          </h3>
          <ul className="text-gray-700 mt-5 space-y-2 ">
          <Image
            src="https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/img-service1.webp" // Đổi thành URL hoặc import ảnh phù hợp
            alt="IT 서비스"
            width={500}
            height={220}
            className="rounded-lg shadow-lg"
          />
          기업을 위한 포괄적인 IT 컨설팅, 현대화, 개발 및 유지 관리 <br/>
          서비스 제공
            <li>✅ IT 평가 및 현대화</li>
            <li>✅ 소프트웨어 개발</li>
            <li>✅ 신기술 개발</li>
            <li>✅ 오프쇼어 개발 센터</li>
            <li>✅ 디지털 혁신 컨설팅</li>
            <button className=" px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"> 
              <Link href="https://ntq.com.vn/ko/service-2/" aria-label="소프트웨어 개발 서비스">
              소프트웨어 개발 서비스</Link>
            </button>
          </ul>
        </div>

        <div className="flex justify-center flex-col md:flex-row items-center ">
          <h3 className="text-3xl text-gray-600 mt-4  flex justify-end pr-20 w-[400px]">
            통합 및 솔루션
          </h3>
          <ul className="text-gray-700 mt-10 space-y-2 ">
          <Image
            src="https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/Bg-img-2.webp" // Đổi thành URL hoặc import ảnh phù hợp
            alt="IT 서비스"
            width={500}
            height={220}
            className="rounded-lg shadow-lg"
            
          />
          획기적인 제품을 위한 현대 기술 플랫폼 통합 및 다른 기업과의 <br/>협력 서비스 개발
            <li>✅ 파트너십 및 합작 투자</li>
            <li>✅ 기술 플랫폼 통합</li>
            <li>✅ 소프트웨어 솔루션 개발</li>
            <button className=" px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"> 
              <Link href="https://ntq.com.vn/ko/service-2/" aria-label="통합 및 솔루션">
              통합 및 솔루션</Link>
            </button>
          </ul>
        </div>

        <div className="flex justify-center flex-col md:flex-row items-center ">
          <h3 className="text-3xl text-gray-600 mt-4  flex justify-end pr-20 w-[400px]">
            연구 및 개발
          </h3>
          <ul className="text-gray-700 mt-10 space-y-2 ">
          <Image
            src="https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/Bg-img-3.webp" // Đổi thành URL hoặc import ảnh phù hợp
            alt="IT 서비스"
            width={500}
            height={220}
            className="rounded-lg shadow-lg"
            
          />
          지역 사회에 지속 가능한 삶의 가치를 창출하는 첨단 기술
          <br/>연구 및 개발
            <li>✅ 인공지능, IoT, 클라우드</li>
            <li>✅ 블록체인</li>
            <li>✅ 친환경 에너지</li>
            <button className=" px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"> 
              <Link href="https://ntq.com.vn/ko/service-2/" aria-label="연구 및 개발">
              연구 및 개발</Link>
            </button>
          </ul>
        </div>

          <div className="flex justify-center flex-col md:flex-row items-center pb-50">
          <h3 className="text-3xl text-gray-600 mt-4  flex justify-end pr-20 w-[00px]">
            비즈니스 프로세스 
          </h3>
          <ul className="text-gray-700 mt-10 space-y-2 ">
          <Image
            src="https://ntq.com.vn/wp-content/themes/ntq_branding/assets/images/Bg-img-4.webp" // Đổi thành URL hoặc import ảnh phù hợp
            alt="IT 서비스"
            width={500}
            height={220}
            className="rounded-lg shadow-lg"
            
          />
          증가하는 비즈니스 요구에 부응하여 광범위한 지원을 제공하는 BPO 서비스
            <li>✅ 데이터 프로세스 (데이터 입력, 이미지 처리, 데이터 업데이트/생성 등)</li>
            <li>✅ 디지털화(스캔, 인덱스, DTP 등)</li>
           
            <button className=" px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"> 
             <Link href="https://ntq.com.vn/ko/service-2/" aria-label="비즈니스 프로세스 아웃소싱">비즈니스 프로세스</Link>
            </button>
          </ul>
        </div>
      </div>
    </section>
   
);
}