import React, { useState } from 'react';
import './howitworks.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTopic, setActiveTopic] = useState('Getting Started');

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleTopicChange = (topic) => {
    setActiveTopic(topic);
    setActiveIndex(null); // Reset the active FAQ when changing topic
  };

  // Define FAQs for each topic
  const faqs = {
    'Getting Started': [
        { question: 'How do I register as a subscriber on VentureLoop?', answer: 'To register, visit our website and fill out the registration form.' },
        { question: 'What is the subscription process?', answer: 'The subscription process involves selecting your preferred plans and completing the payment.' },
        { question: 'What is the minimum subscription amount?', answer: 'The minimum subscription amount is $100.' },
        { question: 'What documents are needed for KYC on VentureLoop?', answer: 'You will need your ID and proof of address for KYC.' },
        { question: 'How can I unsubscribe?', answer: 'You can unsubscribe by going to your account settings.' },
    ],
    General: [
        { question: 'What is VentureLoop?', answer: 'VentureLoop is a platform for investing in startups.' },
        { question: 'How does VentureLoop work?', answer: 'VentureLoop connects investors with startups.' },
        { question: 'What types of startups can I invest in?', answer: 'You can invest in various startups across different sectors.' },
        { question: 'Is my investment safe?', answer: 'Investing involves risks; please review our terms for details.' },
        { question: 'How do I track my investments?', answer: 'You can track your investments through your VentureLoop dashboard.' },
    ],
    Subscriptions: [
        { question: 'What subscription plans are available?', answer: 'We offer monthly and yearly subscription plans.' },
        { question: 'Can I change my subscription plan?', answer: 'Yes, you can change your plan anytime in your account settings.' },
        { question: 'What happens if I miss a payment?', answer: 'If you miss a payment, your subscription may be temporarily suspended.' },
        { question: 'Are there any hidden fees?', answer: 'No, there are no hidden fees; all costs are upfront.' },
        { question: 'How do I cancel my subscription?', answer: 'You can cancel your subscription in your account settings.' },
    ],
    'Types of Campaigns': [
        { question: 'What types of campaigns can I invest in?', answer: 'You can invest in equity, debt, and revenue-sharing campaigns.' },
        { question: 'How are campaigns selected?', answer: 'Campaigns are curated based on various criteria.' },
        { question: 'Can I support multiple campaigns?', answer: 'Yes, you can invest in multiple campaigns simultaneously.' },
        { question: 'What is the campaign duration?', answer: 'Campaigns typically last for 30 to 90 days.' },
        { question: 'How do I get updates on my campaigns?', answer: 'You will receive updates via email and through your dashboard.' },
    ],
    'Returns and Taxation': [
        { question: 'What are the expected returns on my investment?', answer: 'Returns vary depending on the startups performance.' },
        { question: 'How is tax calculated on returns?', answer: 'Tax is calculated based on local regulations and your income.' },
        { question: 'Do I need to pay taxes on my investments?', answer: 'Yes, please consult with a tax professional for guidance.' },
        { question: 'What documents are needed for tax purposes?', answer: 'You will need investment statements and tax forms.' },
        { question: 'Can I claim losses on my taxes?', answer: 'Consult with a tax professional for details on loss claims.' },
    ],
    'For Founders': [
        { question: 'How can I raise funds on VentureLoop?', answer: 'Founders can apply to list their campaigns on our platform.' },
        { question: 'What are the requirements to list a campaign?', answer: 'You need a business plan and legal documents.' },
        { question: 'Is there a fee for listing a campaign?', answer: 'Yes, there is a nominal fee for campaign listing.' },
        { question: 'How long does the review process take?', answer: 'The review process typically takes 2-4 weeks.' },
        { question: 'Can I edit my campaign after submission?', answer: 'You can make edits until the campaign goes live.' },
    ],
    Portfolio: [
        { question: 'How do I view my portfolio?', answer: 'You can view your portfolio from your account dashboard.' },
        { question: 'Can I track the performance of my investments?', answer: 'Yes, your dashboard provides performance tracking.' },
        { question: 'What should I do if my investment is underperforming?', answer: 'Review your strategy and consult with an advisor.' },
        { question: 'Can I sell my investments?', answer: 'Selling options vary by campaign; check the terms.' },
        { question: 'How do I withdraw funds?', answer: 'Withdrawals can be requested through your account settings.' },
    ],
};

  return (
    <div className="faq-container">
      <div className="sidebar">
        <h3>Filter by Topic</h3>
        <ul className='ml-[12px] '>
          <li className='my-[4px] text-[16px]' onClick={() => handleTopicChange('Getting Started')}>Getting Started</li>
          <li className='my-[4px] text-[16px]' onClick={() => handleTopicChange('General')}>General</li>
          <li className='my-[4px] text-[16px]' onClick={() => handleTopicChange('Subscriptions')}>Subscriptions</li>
          <li className='my-[4px] text-[16px]' onClick={() => handleTopicChange('Types of Campaigns')}>Types of Campaigns</li>
          <li className='my-[4px] text-[16px]' onClick={() => handleTopicChange('Returns and Taxation')}>Returns and Taxation</li>
          <li className='my-[4px] text-[16px]' onClick={() => handleTopicChange('For Founders')}>For Founders</li>
          <li className='my-[4px] text-[16px]' onClick={() => handleTopicChange('Portfolio')}>Portfolio</li>
        </ul>
      </div>
      
      <div className="faq-content">
        <h2>{activeTopic}</h2>
        {faqs[activeTopic].map((faq, index) => (
          <div className="faq-item" key={index} onClick={() => toggleFAQ(index)}>
            <h3>{faq.question} <span>{activeIndex === index ? '-' : '+'}</span></h3>
            {activeIndex === index && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
      
    </div>

    
  );

  
};

export default FAQ;
