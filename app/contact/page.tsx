"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactPage() {
  const { register, handleSubmit, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Dữ liệu gửi đi:", data);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <div className="py-30 bg-gradient-to-b from-blue-50 to-white">
    <div className="text-center mb-10">
    <h2 className="text-3xl font-bold text-gray-900">변화를 위해</h2>
    <h1 className="text-5xl font-bold text-gray-900 pt-10">NTQ 솔루션과 상담해 보세요</h1>
  </div>
    {/* Form liên hệ */}
    <div className="flex justify-center ">
      <form action="#" method="post" encType="multipart/form-data" className="space-y-4 w-[700px]">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            성명 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            회사명 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            이메일 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            전화번호 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            요구사항을 간략하게 설명해주세요! <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div>
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            파일 첨부
          </label>
          <input
            type="file"
            id="file"
            name="file"
            className="mt-1 block w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          전송하기
        </button>
      </form>
  </div>
  </div>
  );
}
