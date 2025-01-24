import React from "react";

const QNA = () => {
  const faqData = [
    {
      question: "What is the process of buying a property?",
      answer: "Our property experts guide you through every step, from searching to legal documentation and finalizing the purchase.",
    },
    {
      question: "Do you offer financing options?",
      answer: "Yes, we work with trusted financial institutions to offer competitive mortgage and financing options.",
    },
    {
      question: "How do I schedule a property visit?",
      answer: "Simply contact us or use the booking feature on our website to schedule a property visit at your convenience.",
    },
    {
      question: "What types of properties do you deal with?",
      answer: "We offer a wide range of properties, including apartments, villas, penthouses, commercial spaces, and more.",
    },
    {
      question: "Are there any hidden costs in the property purchase?",
      answer: "No, we ensure complete transparency. All costs, including taxes and fees, are discussed upfront.",
    },
    {
      question: "Do you assist with property legal documentation?",
      answer: "Yes, our team provides full support for legal documentation, ensuring a smooth and hassle-free process.",
    },
    {
      question: "Can I sell my property through your website?",
      answer: "Yes, we offer property listing services to help you sell your property quickly and at the best price.",
    },
    {
      question: "Do you provide property management services?",
      answer: "Yes, we provide comprehensive property management services, including maintenance, tenant management, and rent collection.",
    },
    {
      question: "How do I know if a property is a good investment?",
      answer: "Our experienced agents provide insights and market analysis to help you make informed investment decisions.",
    },
    {
      question: "What areas do you cover?",
      answer: "We cover multiple cities and regions. You can filter properties by location using our advanced search tool.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen py-12">
      <div className="w-full max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-100">
          Frequently Asked Questions
        </h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="collapse collapse-arrow bg-gray-800 rounded-lg mb-4 shadow-lg hover:bg-gray-700"
          >
            <input
              type="radio"
              name="qna-accordion"
              defaultChecked={index === 0}
            />
            <div className="collapse-title text-xl font-semibold text-gray-200">
              {item.question}
            </div>
            <div className="collapse-content text-gray-300">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QNA;
