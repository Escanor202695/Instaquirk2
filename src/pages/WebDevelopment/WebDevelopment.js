<<<<<<< HEAD
import React from "react";
import HomeTwoHeader from "../HomeTwo/HomeTwoHeader/HomeTwoHeader";
import HomeTwoFooter from "../HomeTwo/HomeTwoFooter/HomeTwoFooter";
import CommonPageHeader from "../../components/CommonPageHeader/CommonPageHeader";
import CommonCtaArea from "../../components/CommonCtaArea/CommonCtaArea";
import "./webdevelopment.css";
import Faq from "../HomeTwo/HomeTwoFaq/HomeTwoFaq";
import Carousel from "react-material-ui-carousel";

function webDevelopment(props) {
  const arrayFaq = [
    {
      question: "Don't have hosting right now. Can we start?",
      solution:
        "Absolutely! We would start the development on our development server. Once the website build is complete, we will transfer to your hosting. You can also have us host your website for a minimal monthly fee.",
    },
    {
      question: "What do you need to get started?",
      solution:
        "You will have to provide us with : Project brief which describes the Main Idea and specific details, pictures,logo, content, WordPress login details. If you missing some of the requirements just contact us and we will help you with everything. If you need help in any of them, Contact us.",
    },
    {
      question: "Will you maintain my site for me?",
      solution:
        "Of course, we can help you out with proper and professional website maintenance in addition to development as it supports in achieving stabilized growth, keeping your business inclined.",
    },
    {
      question: "Will my website be mobile-friendly?",
      solution:
        "It also increases the number of visitors, rankings in search engines.Yes, we ensure to develop a responsive website that would make your visitors appealing and deliver an optimized browsing experience.",
    },
  ];
  const tech = [
    {
      src: "assets/tech/angular.png",
      title: "Angular JS",
    },
    {
      src: "assets/tech/react.png",
      title: "React JS",
    },
    {
      src: "assets/tech/next.png",
      title: "Next Js",
    },

    {
      src: "assets/tech/vue.png",
      title: "Vue JS",
    },
    {
      src: "assets/tech/node.png",
      title: "Node JS",
    },
    {
      src: "assets/tech/mongo.png",
      title: "mongoDB Database",
    },
    {
      src: "assets/tech/laravel.png",
      title: "Laravel",
    },

    {
      src: "assets/tech/mysql.png",
      title: "mySQL",
    },
    {
      src: "assets/tech/word.png",
      title: "Wordpress",
    },
    {
      src: "assets/tech/shopify.png",
      title: "Shopify",
    },
  ];
  return (
    <div>
      <HomeTwoHeader />
      <CommonPageHeader
        title="Clean, Optimised & Future-Ready."
        subtitle="web development"
      />
      <div className="customize">
        <div className="pt-100 web-dev">
          <div className="parent">
            <div className="web-development-details">
              <h1>
                Our Development <br /> Solution
              </h1>
              <p>
                Straightforward solutions to complex business challenges
                High-performing, intuitive and secure web solutions that support
                business processes and serve users globally. Your technology
                partner for innovative and impactful digital solutions. We
                deliver custom web development platforms that help our clients
                in employing capabilities such as micro-personalization,
                marketing automation, seamless integrations and the ability to
                become the best brand representative that drive your customers
                to your end goals.
                <br />
                Increasing the quality of our services and products is a
                never-ending process. We always c are for our clients and thank
                every single one of them who chose us for collaboration. We
                create outstanding projects that change the world, boost
                progress, and bring economic and social benefits. Powercode
                evolves, and every new project makes us stronger and better for
                you! Your trust is genuinely our biggest value.
              </p>
            </div>
            <div className="web-development text-center mb-100">
              <img
                src="/assets/img/vector2.jpg"
                alt="vector"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="technologies pb-100 technology_customize">
          <h1>Technologies we work with</h1>
          <div className="visible-item">
            <div className="tech_items">
              {tech.map((techItem) => {
                const { src, title } = techItem;
                return (
                  <div className="tech_item">
                    <img src={src} alt="" />
                    <h4>{title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="tech_items invisible-item">
            <Carousel>
              {tech.map((techItem) => {
                const { src, title } = techItem;
                return (
                  <div className="tech_item">
                    <img src={src} alt="" />
                    <h4>{title}</h4>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
        {/* <div className=" flex flex-col align-center px-[1rem] my-[2rem] md:my-[4vw]">
        <h1 className="text-[2rem] md:text-[4vw] font-bold text-center">
          Technologies we work with
        </h1>
        <div className="flex flex-wrap justify-center my-[1rem] md:my-[3vw]">
          {tech.map((t) => {
            return (
              <div className="w-1/3 md:w-[12rem] h-auto mb-[1rem]">
                <img src={t.src} alt={t.title} className="w-full h-auto" />
                <h5 className="text-[1rem] md:text-[1.5rem] text-center">
                  {t.title}
                </h5>
              </div>
            );
          })}
        </div>
      </div> */}

        <div className="web-development-life-cycle">
          <h1>Development Lifecycle</h1>
          <div className="development-image">
            <img
              src="/assets/img/dev.png"
              alt="whyhireus"
              className="w-full h-auto hidden md:flex visible"
            />
            <img
              src="/assets/img/devMobile.png"
              alt="whyhireus"
              className="w-full h-auto hidden md:flex invisible"
            />
            {/* <img
            src="/assets/img/devMobile.png"
            alt="whyhireus"
            className="w-[80vw] h-auto md:hidden mx-auto"
          /> */}
          </div>
        </div>

        {/* <div className="my-[2rem] px-[1rem] flex flex-col-reverse md:flex-row md:my-[4vw]">
        <div className="w-full md:w-[50vw] md:px-[5rem]">
          <img
            src="/assets/img/whyhireus.jpg"
            alt="whyhireus"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-[2rem] md:text-[4vw] font-bold w-full flex justify-center md:justify-start">
            Why Hire Us?
          </h1>
          <p className="my-[1rem]">
            BECAUSE WE CARE AND TRY TO PROVIDE BEST SERVICE
          </p>
        </div>
      </div> */}
        <div className="pb-80 web-dev">
          <div className="parent">
            <div className="web-development text-center">
              <img
                src="/assets/img/whyhireus.jpg"
                alt="vector"
                className="w-full h-auto visible"
              />
            </div>
            <div className="web-dev-description">
              <div className="web-development-details">
                <h1>Why Hire Us?</h1>
                <p>
                  Straightforward solutions to complex business challenges
                  High-performing, intuitive and secure web solutions that
                  support business processes and serve users globally. Your
                  technology partner for innovative and impactful digital
                  solutions. We deliver custom web development platforms that
                  help our clients in employing capabilities such as
                  micro-personalization, marketing automation, seamless
                  integrations and the ability to become the best brand
                  representative that drive your customers to your end goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Faq arrayFaq={arrayFaq} />
      </div>
      <CommonCtaArea />
      <HomeTwoFooter />
    </div>
  );
}

export default webDevelopment;
=======
import React from 'react';
import HomeTwoHeader from '../HomeTwo/HomeTwoHeader/HomeTwoHeader';
import HomeTwoFooter from '../HomeTwo/HomeTwoFooter/HomeTwoFooter';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import CommonCtaArea from '../../components/CommonCtaArea/CommonCtaArea';
import "./webdevelopment.css"
import Faq from '../HomeTwo/HomeTwoFaq/HomeTwoFaq';
function webDevelopment(props) {

    const arrayFaq = [
        {
         question : " Can you help my business grow?",
         solution : "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off  blower burke james bond cheeky.",
       },
       {
        question : " Can you help my business grow?",
        solution : "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off  blower burke james bond cheeky.",
      },
      {
        question : " Can you help my business grow?",
        solution : "He nicked it show off show pick your nose and blow  off such a fiber bleeding well get stuffed mate no biggie, in my flat bugger wind up cheesed off  blower burke james bond cheeky.",
      },
      ]
    return (
        <div>
            <HomeTwoHeader/>
            <CommonPageHeader title="Clean, Optimised & Future-Ready." subtitle="web development" />
            <div className='solution container'>
                 <h1>Our Development Solution</h1>
                 <p>
                     Straightforward solutions to complex business challenges
                     High-performing, intuitive and secure web solutions that support business processes and serve users globally.
                     Your technology partner for innovative and impactful digital solutions.<br/>
                     We deliver custom web development platforms that help our clients in employing
                     capabilities such as micro-personalization, marketing automation, seamless 
                     integrations and the ability to become the best brand representative that 
                     drive your customers to your end goals.< br/>
                     Increasing the quality of our services and products is a never-ending process. We always c
                     are for our clients and thank every single one of them who chose us for collaboration. We create
                     outstanding projects that change the world, boost progress, and bring economic and social benefits.
                     Powercode evolves, and every new project makes us stronger and 
                     better for you! Your trust is genuinely our biggest value.
                 </p>
            </div>
            <div className='heading'>
                <h1>Technologies we work with</h1>
            </div>
            
            <div className='technology container'>
                    
                    <div className='area'>
                        <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/MySQL.png" class="tech-logohome" alt="MySQL" title="MySQL"/>
                        <h5>MySQL</h5>
                    </div>
                    <div className='area'>
                        <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/node-js-logo.png" class="tech-logohome" alt="Node.js" title="Node.Js"/>
                        <h5>NodeJs</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/MongoDB.png" class="tech-logohome" alt="MongoDB" title="MongoDB"/>               
                        <h5>MongoDB</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Firebase-1.png" class="tech-logohome" alt="Firebase" title="Firebase"/>

                        <h5>Firebase</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2021/06/Knockout.js.png" class="tech-logohome" alt="Knockout" title="Knockout"/>
                        <h5>Knockout</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2021/12/AWS-1.png" class="tech-logohome" alt="AWS" title="AWS"/>
                        <h5>AWS</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Laravel.png" class="tech-logohome" alt="Laravel" title="Laravel"/>
                        <h5>Laravel</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Magento.png" class="tech-logohome" alt="Magento" title="Magento"/>
                        <h5>Magento</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Shopify-1.png" class="tech-logohome" alt="Shopify" title="Shopify"/>
                        <h5>Shopify</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Swift.png" class="tech-logohome" alt="Swift" title="Swift"/>
                        <h5>Swift</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Android.png" class="tech-logohome" alt="Android" title="Android"/>
                        <h5>Android</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Kotlin.png" class="tech-logohome" alt="Kotlin" title="Kotlin"/>
                        <h5>Kotlin</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Vue.js.png" class="tech-logohome" alt="Vue.js" title="Vue.js"/>

                        <h5>Vue.js</h5>
                    </div>
                    <div className='area'>
                    <img src="https://magnetoitsolutions.com/wp-content/uploads/2022/03/Yii.png" class="tech-logohome" alt="Yii" title="Yii"/>
                        <h5>Yii</h5>
                    </div>
            </div>
            <div className='dev_process'>
                <h1>Development lifecycle</h1>
                 <div className='steps'>

                 </div>
            </div>

            <div className='why_us'>
                <h1>Why Hire Us?</h1>
                <p>
                We at Instaquirk work with passion to bring your ideas to life. We push ourselves. We push technology, And we push the boundaries of conventional thinking.
                We envision a digitally- connected, sustainable, and innovation-driven world where businesses make positive differences in lives making technology at the forefront of innovation.
                We help today’s businesses be prepared for tomorrow by combining technologies, ideas, and skills.
                Reduce your development cost without compromising on time and profitability.
                Scale up your team, get extended support, exceptional processes, and go to market quickly.
                Start with a small team or large one, own it, train it, anytime and anywhere.
                </p>
            </div>
           <Faq arrayFaq={arrayFaq}/>
           <CommonCtaArea />
            <HomeTwoFooter/>
        </div>
    );
}

export default webDevelopment;


>>>>>>> a4c435fb785b8c080a6acb09be218c51e319f115
