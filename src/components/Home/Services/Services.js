import React from 'react';
import './Services.css';
import icon1 from "../../../images/services/icon/service-shape.png";
import icon2 from "../../../images/services/icon/blue-flexible-cms.png";
import icon3 from "../../../images/services/icon/blue-page-speed.png";
import icon4 from "../../../images/services/icon/blue-ecommerce.png";
import Service from './Service';

const servicesData = [
    {
        id: 1,
        name: 'Dynamic website development',
        description: 'Our dynamic websites are designed to adapt to your business needs, providing an engaging user experience that keeps visitors coming back. We ensure that our websites are easy to manage, allowing you to update content and features effortlessly.',
        icon: icon1
    },
    {
        id: 2,
        name: 'Web application development',
        description: 'Our web applications are designed to streamline your business processes, and deliver seamless user experiences. Whether you need a custom CRM, a project management tool, or any other web-based application, Alif Agency has the expertise to bring your vision to life.',
        icon: icon2
    },
    {
        id: 3,
        name: 'Page Speed Optimization & SEO',
        description: 'Our team at Alif Agency focuses on optimizing your website’s performance to ensure fast loading times, enhanced user experience, and higher search engine rankings. We employ the latest SEO strategies to increase your online visibility, driving more organic traffic to your site.',
        icon: icon3,
    },
    {
        id: 4,
        name: 'eCommerce Websites Development',
        description: 'We build secure, scalable, and user-friendly eCommerce platforms that provide an exceptional shopping experience. From product listings and payment gateways to inventory management and customer support.',
        icon: icon4,
    }
];

console.log(servicesData);

function Services() {
    return (
        <div className="service-container">
            <div className="text-center pt-5 w-50 m-auto">
                <h4 style={{ fontWeight: '300', marginBottom: '10px' }}>SERVICES THAT WE PROVIDE DEDICATEDLY</h4>
                <h2>OUR SERVICES</h2>
            </div>

            <div className="row service">
                {servicesData.map((data) => (
                    <Service key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
}

export default Services;
