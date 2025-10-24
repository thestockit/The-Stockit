import React from 'react';
import img01 from '@/public/misshosting.webp';
import img02 from '@/public/Untitled-design-3-1024x1024.webp';
import img03 from '@/public/atsspace.webp';
import img04 from '@/public/chemi.webp';
import img05 from '@/public/shopifyy.webp';
import img06 from '@/public/Scala-Hosting-1024x1024.webp';
import img07 from '@/public/fastcome.webp';
import img08 from '@/public/interserver2000.webp';
import img09 from '@/public/hostinger.webp';
import img10 from '@/public/bluehost-logo-square.webp';

import contentImage01 from '@/public/scalahosting banner.webp';
import contentImage02 from '@/public/blue-host-1.webp';
import contentImage03 from '@/public/mhostingbanner.jpg';
import contentImage04 from '@/public/Hostinger-Banner-1140x570-2.webp';
import contentImage05 from '@/public/Top-Web-Hosting-Provider.webp';
import contentImage06 from '@/public/atsspacebanner.jpg';
import contentImage07 from '@/public/Migrating-Web-Hosting-To-Shopify-ColorWhistle.webp';
import contentImage08 from '@/public/interserver.webp';
import contentImage09 from '@/public/fastcomet.webp';
import contentImage10 from '@/public/chemicloud-review-2022.webp';

import Image from 'next/image';
import Card from '@/constant/Card';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Content from '@/components/Content';

const Hosting = () => {
  const dataOne = [
    { img: img06, link: 'https://www.scalahosting.com/#661e37f21eb85', description: 'High-performance and reliable services for your website. Experience unmatched uptime and security with our hosting solutions.' },
    { img: img10, link: 'https://bluehost.sjv.io/c/3675093/1376228/11352', description: 'Trusted by millions worldwide, Bluehost offers 24/7 support and a seamless hosting experience.' },
    { img: img04, link: 'https://chemicloud.com/#660526c05255d', description: 'Secure hosting with great uptime and excellent customer service. Perfect for businesses of all sizes.' },
  ];

  const dataTwo = [
    { img: img03, link: 'http://www.atspace.com?aid=MTkyNDE4MjYyNTI2MjE=', description: 'Fast servers and top-notch support for your business. Ensure your website runs smoothly with ATS Space web hosting.' },
    { img: img02, link: 'https://partners.inmotionhosting.com/nL1GPx', description: 'Affordable plans and excellent service. InMotion Hosting provides reliable hosting solutions for everyone.' },
    { img: img01, link: 'https://tracking.missaffiliate.com/SHga', description: 'Scalable solutions with free SSL and great performance. Misshosting is your go-to hosting provider.' },
  ];

  const dataThree = [
    { img: img05, link: 'https://shopify.pxf.io/ZQdaoK', description: 'E-commerce hosting made easy. Get your online store up and running with Shopify.' },
    { img: img07, link: 'https://affiliate.fastcomet.com/scripts/2wc9ym?a_aid=659e4ffcaedda', description: 'Global reach with secure infrastructure. FastComet ensures your website is always online.' },
    { img: img08, link: 'https://www.interserver.net/r/899620', description: 'Flexible plans with unlimited storage. InterServer provides everything you need for your website.' },
    { img: img09, link: 'https://hostinger.sjv.io/rnV05j', description: 'High-speed and user-friendly hosting solutions. Hostinger makes website management a breeze.' },
  ];



  const contentData = [
    {
      title: "Scala Hosting",
      imageUrl: contentImage01,
      content: "Scala Hosting offers a range of hosting solutions with excellent customer support and performance. They have a unique SPanel which provides an alternative to cPanel, making it easier to manage your hosting needs. Their VPS plans are particularly popular for their speed and reliability. With a focus on security, Scala Hosting ensures your data is well-protected, making it a great choice for businesses of all sizes.",
      btnText: "Visit Scala Hosting",
      btnLink: "https://www.scalahosting.com/#661e37f21eb85"
    },
    {
      title: "Bluehost: Is it Worth It?",
      imageUrl: contentImage02,
      content: "Bluehost is a popular hosting provider recommended by WordPress. It offers a variety of plans suitable for different types of users, from beginners to advanced developers. Their customer service is reliable and efficient, and they provide a range of features including a free domain name for the first year, free SSL certificate, and one-click WordPress installation. Bluehost's user-friendly interface and comprehensive support make it an excellent option for those looking to start their online presence.",
      btnText: "Visit Bluehost",
      btnLink: "https://bluehost.sjv.io/c/3675093/1376228/11352"
    },
    {
      title: "Miss Hosting: A New Player in Hosting",
      imageUrl: contentImage03,
      content: "Miss Hosting is a relatively new hosting provider that has quickly gained a reputation for its high-speed servers and excellent customer support. Their hosting plans are competitively priced and offer great value for money. Miss Hosting focuses on performance and security, providing features like daily backups, free website migration, and a free domain name. Their commitment to customer satisfaction and innovative solutions makes them a strong contender in the hosting market.",
      btnText: "Visit Miss Hosting",
      btnLink: "https://tracking.missaffiliate.com/SHga"
    },
    {
      title: "Hostinger: Affordable and Reliable",
      imageUrl: contentImage04,
      content: "Hostinger is known for its affordable pricing and reliable performance. They offer a variety of hosting options, including shared, VPS, and cloud hosting, making them a versatile choice for many users. Hostinger's easy-to-use interface, robust features, and 24/7 customer support make it a popular choice among both beginners and experienced developers. With a focus on delivering quality services at a low cost, Hostinger is an excellent option for those looking to maximize their hosting budget.",
      btnText: "Visit Hostinger",
      btnLink: "https://hostinger.sjv.io/rnV05j"
    },
    {
      title: "Top Web Hosting Providers",
      imageUrl: contentImage05,
      content: "When it comes to web hosting, it's important to choose a provider that offers the right balance of performance, support, and value. Top web hosting providers such as Bluehost, Hostinger, and Scala Hosting have been recognized for their exceptional services and customer satisfaction. These providers offer a range of plans to meet different needs, from personal blogs to large business websites. With their reliable performance and comprehensive support, you can be confident that your website will run smoothly.",
      btnText: "Visit Inmotion",
      btnLink: "https://partners.inmotionhosting.com/nL1GPx"
    },
    {
      title: "What is ATS Space Hosting?",
      imageUrl: contentImage06,
      content: "ATS Space is known for its managed hosting solutions, offering high-performance services tailored for mission-critical websites and applications. They provide dedicated, VPS, and cloud hosting options, along with managed WordPress and WooCommerce hosting. ATS Space's focus on reliability and performance makes it a preferred choice for businesses that require robust and scalable hosting solutions. Their expert support team is available 24/7 to assist with any technical issues, ensuring your website remains operational at all times.",
      btnText: "Visit ATS Space Web Hosting",
      btnLink: "http://www.atspace.com?aid=MTkyNDE4MjYyNTI2MjE="
    },
    {
      title: "Migrating to Shopify",
      imageUrl: contentImage07,
      content: "Shopify is a leading e-commerce platform that allows businesses to create and manage their online stores with ease. Migrating to Shopify can significantly enhance your online business operations with its user-friendly interface and powerful tools. Shopify provides various features including customizable templates, secure payment gateways, and extensive app integrations. Whether you're starting a new online store or moving from another platform, Shopify offers the flexibility and scalability to grow your business.",
      btnText: "Visit Shopify",
      btnLink: "https://shopify.pxf.io/ZQdaoK"
    },
    {
      title: "InterServer: Consistent and Affordable",
      imageUrl: contentImage08,
      content: "InterServer has been providing hosting services since 1999, known for their consistent performance and affordability. They offer a range of services including shared hosting, VPS, and dedicated servers. InterServer's price-lock guarantee ensures that your hosting fees won't increase over time, providing great value for long-term customers. Their robust infrastructure and excellent customer support make InterServer a reliable choice for hosting your website.",
      btnText: "Visit InterServer",
      btnLink: "https://www.interserver.net/r/899620"
    },
    {
      title: "FastComet: Speed and Reliability",
      imageUrl: contentImage09,
      content: "FastComet is a hosting provider that emphasizes speed and reliability, with a global network of data centers to ensure fast load times for your website. They offer a range of hosting solutions including shared, VPS, and dedicated hosting. FastComet's commitment to customer satisfaction is evident in their 24/7 support, free daily backups, and free website migration services. Their feature-rich plans and competitive pricing make FastComet a great choice for individuals and businesses looking to enhance their online presence.",
      btnText: "Visit FastComet",
      btnLink: "https://affiliate.fastcomet.com/scripts/2wc9ym?a_aid=659e4ffcaedda"
    },
    {
      title: "ChemiCloud: Reliable and Fast Hosting",
      imageUrl: contentImage10,
      content: "ChemiCloud offers top-notch hosting solutions known for their reliability and speed. With a focus on customer satisfaction, ChemiCloud provides a range of hosting options including shared, VPS, reseller, and WordPress hosting. Their commitment to performance is evident in their use of cutting-edge technology and SSD storage, ensuring fast load times and minimal downtime. ChemiCloud also prides itself on exceptional customer support and competitive pricing, making it a great choice for users seeking dependable and efficient hosting services.",
      btnText: "Visit ChemiCloud",
      btnLink: "https://chemicloud.com/#660526c05255d"
    }
  ];


  return (
    <div>
      <div className="pt-10">
        <Header />
      </div>
      <div className="relative px-6 mt-10 mb-10 md:mt-20 mx-auto max-w-5xl text-center">
        <h2 className="block w-full text-black font-bold text-3xl sm:text-4xl">
          Explore Our Web Hosting Solutions
        </h2>
        <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-400">
          At The Stockit, we offer reliable and high-performance web hosting services to ensure your websites run smoothly and efficiently. Discover our range of hosting plans designed to meet your specific needs.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 p-4 mb-10">
        {dataOne.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <Card link={item.link}>
              <Image
                src={item.img}
                alt="Web Hosting"
                fill
                className="w-full h-full object-cover"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </Card>
            <div className="p-4 text-center">
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4 mb-10">
        {dataTwo.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <Card link={item.link}>
              <Image
                src={item.img}
                alt="Web Hosting"
                fill
                className="w-full h-full object-cover"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </Card>
            <div className="p-4 text-center">
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4 mb-10">
        {dataThree.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
            <Card link={item.link}>
              <Image
                src={item.img}
                alt="Web Hosting"
                fill
                className="w-full h-full object-cover"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </Card>
            <div className="p-4 text-center">
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}

        {/* content */}
      </div>
      {contentData.map((item, index) => (
        <Content
          key={index}
          title={item.title}
          imageUrl={item.imageUrl}
          content={item.content}
          btnText={item.btnText}
          btnLink={item.btnLink}
        />
      ))}
      <Footer />
    </div>
  );
};

export default Hosting;
