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


