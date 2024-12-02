import React from 'react';
import Header from '../components/Header.js';
import Footer from "../components/Footer.js";
import Accordion from "../components/Accordion.js";
import '../components/Services.css';

const accordionData1 = [
  {
    title: "Brand Strategy Development",
    content: `
      - **Market Research**: Conducting thorough research to understand the market, target audience, competitors, and industry trends.
      - **Brand Positioning**: Defining the unique value proposition and positioning the brand in the market to differentiate it from competitors.
      - **Brand Messaging**: Crafting clear and consistent messaging that communicates the brand’s values, mission, and vision.
    `,
  },
  {
    title: "Brand Identity Design",
    content: `
      - **Logo Design**: Creating a memorable and versatile logo that represents the brand.
      - **Visual Identity**: Developing a cohesive visual identity, including color schemes, typography, and graphic elements.
      - **Brand Guidelines**: Establishing brand guidelines to ensure consistency across all marketing materials and communications.
    `,
  },
  {
    title: "Brand Voice and Tone",
    content: `
      - **Voice Development**: Defining the brand’s voice and tone to ensure it resonates with the target audience.
      - **Content Creation**: Producing content that aligns with the brand’s voice, including website copy, social media posts, and marketing materials.
    `,
  },
  {
    title: "Digital Presence",
    content: `
      - **Website Development**: Designing and developing a user-friendly and visually appealing website that reflects the brand’s identity.
      - **SEO Optimization**: Implementing SEO strategies to improve the brand’s visibility on search engines.
      - **Social Media Management**: Creating and managing social media profiles to engage with the audience and build brand awareness.
    `,
  },
  {
    title: "Marketing and Advertising",
    content: `
      - **Campaign Development**: Planning and executing marketing campaigns that align with the brand’s goals and objectives.
      - **Content Marketing**: Developing content marketing strategies to attract and engage the target audience.
      - **Advertising**: Creating and managing advertising campaigns across various platforms, including digital and traditional media.
    `,
  },
  {
    title: "Brand Monitoring and Management",
    content: `
      - **Reputation Management**: Monitoring the brand’s online reputation and addressing any negative feedback or reviews.
      - **Performance Analysis**: Analyzing the performance of branding efforts and making data-driven adjustments to strategies.
      - **Continuous Improvement**: Regularly updating and refining the brand strategy to stay relevant and competitive.
    `,
  },
  {
    title: "Client Collaboration",
    content: `
      - **Workshops and Meetings**: Conducting workshops and regular meetings with clients to understand their needs and gather feedback.
      - **Custom Solutions**: Providing tailored branding solutions that meet the specific needs and goals of each client.
    `,
  },
];

const accordionData2 = [
  {
    title: "HTML Development",
    content: `
      - **Semantic HTML**: Writing clean, semantic HTML to ensure the structure of the website is meaningful and accessible.
      - **SEO Optimization**: Implementing best practices for SEO to improve search engine rankings.
      - **HTML5 Features**: Utilizing the latest HTML5 features to enhance website functionality and performance.
    `,
  },
  {
    title: "CSS Styling",
    content: `
      - **Responsive Design**: Creating responsive layouts that adapt to different screen sizes and devices.
      - **CSS Frameworks**: Using frameworks like Tailwind CSS or Bootstrap to streamline the development process.
      - **Advanced CSS**: Implementing advanced CSS techniques, including animations, transitions, and custom properties.
    `,
  },
  {
    title: "React.js Development",
    content: `
      - **Component-Based Architecture**: Building reusable and maintainable components to enhance development efficiency.
      - **State Management**: Managing application state using tools like Redux or Context API.
      - **React Hooks**: Utilizing React Hooks to manage state and side effects in functional components.
    `,
  },
  {
    title: "Responsiveness",
    content: `
      - **Mobile-First Design**: Designing with a mobile-first approach to ensure optimal performance on mobile devices.
      - **Media Queries**: Using media queries to create responsive layouts that adapt to various screen sizes.
      - **Flexible Grid Systems**: Implementing flexible grid systems to create fluid and adaptive layouts.
    `,
  },
  {
    title: "Accessibility",
    content: `
      - **WCAG Compliance**: Ensuring websites meet Web Content Accessibility Guidelines (WCAG) standards.
      - **ARIA Roles and Attributes**: Using ARIA roles and attributes to improve accessibility for screen readers.
      - **Keyboard Navigation**: Implementing keyboard navigation to ensure all interactive elements are accessible via keyboard.
    `,
  },
];

const accordionData3 = [
  {
    title: "Social Media Marketing",
    content: `
      - **Platform Management**: Managing profiles on major social media platforms like Facebook, Instagram, Twitter, and LinkedIn.
      - **Content Creation**: Developing engaging content, including posts, stories, and videos, tailored to each platform.
      - **Analytics and Reporting**: Tracking performance metrics and providing insights to optimize social media strategies.
    `,
  },
  {
    title: "Email Marketing",
    content: `
      - **Campaign Design**: Creating visually appealing and effective email campaigns.
      - **List Management**: Managing subscriber lists and segmenting audiences for targeted campaigns.
      - **Performance Tracking**: Monitoring open rates, click-through rates, and conversions to refine email strategies.
    `,
  },
  {
    title: "Search Engine Optimization (SEO)",
    content: `
      - **Keyword Research**: Identifying relevant keywords to improve search engine rankings.
      - **On-Page Optimization**: Optimizing website content and structure for better visibility.
      - **Link Building**: Developing strategies to acquire high-quality backlinks.
    `,
  },
  {
    title: "Content Marketing",
    content: `
      - **Blog Writing**: Creating informative and engaging blog posts to attract and retain audience interest.
      - **Video Production**: Producing high-quality videos for platforms like YouTube and social media.
      - **Infographics**: Designing visually appealing infographics to convey complex information effectively.
    `,
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    content: `
      - **Campaign Setup**: Creating and managing PPC campaigns on platforms like Google Ads and Bing Ads.
      - **Ad Copywriting**: Writing compelling ad copy to maximize click-through rates.
      - **Budget Management**: Optimizing ad spend to achieve the best return on investment.
    `,
  },
  {
    title: "Online Reputation Management",
    content: `
      - **Review Monitoring**: Tracking and responding to online reviews on platforms like Google My Business and Yelp.
      - **Crisis Management**: Developing strategies to handle negative publicity and maintain a positive brand image.
      - **Brand Advocacy**: Encouraging satisfied customers to leave positive reviews and testimonials.
    `,
  },
];

function Services() {
  const headingTitle = "Let's Get IT Done Together";
  const headingDesc = "Just name it, I will find the solution!";
  return (
    <div className="App">
      <Header headingText={headingTitle} headingcareer={headingDesc} />
      <main className="flex-grow p-4 max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="text-white text-2xl font-semibold mb-4">What Services I Offer to Assist Your Business</h2>
          <div className="flex flex-row gap-4">
            <section className="w-full md:w-1/3">
              {accordionData1.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
              ))}
            </section>
            <section className="w-full md:w-1/3">
              {accordionData2.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
              ))}
            </section>
            <section className="w-full md:w-1/3">
              {accordionData3.map((item, index) => (
                <Accordion key={index} title={item.title} content={item.content} />
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer
        year="2024"
        company="Ryan Rutledge | Web Developer"
        twitterLink="#"
        instaLink="#"
      />
    </div>
  );
}

export default Services;



