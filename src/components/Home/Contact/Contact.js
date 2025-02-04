import React, { useState } from 'react';
import {useRef} from "react" 
import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        message: '',
        subject: '',
    });

    const form = useRef();

    console.log(formData)

    const validate = () => {
        if(!formData.email || !formData.phoneNumber || !formData.subject || !formData.message) {
           alert('please fill all the fields');
            return false;
        }
        return false;

    }

    const clearText = () => {
        setFormData(
            {
             name: '',
            email: '',
            phoneNumber: '',
            message: '',
            subject: '',
            }

        )
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(validate()){
            return;
        }
        
        emailjs.sendForm('service_larl3ff', 'template_sq4mh3n', form.current, 'gCZHmkGKToqQzeSr5')
        .then((result) => {
          alert(result.text);
          clearText()
          
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div id="rs-contact" className="rs-contact style5 modify1 gray-bg5">
            <div className="" style={{ width: '90%', margin: 'auto' }}>
                <div className="contact-us" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                    <div className="row margin-0">
                        <div className="col-lg-8" style={{ marginRight: '-30px' }}>
                            <div className="contact-widget">
                                <div className="sec-title5 pt-5 pb-5">
                                    <span className="sub-title new-title">Contact Us</span>
                                    <h2 className="title title2">Get In Touch</h2>
                                </div>
                                <div id="form-messages"></div>
                                <form ref={form} id="contact-form" onSubmit={handleSubmit}>
                                    <fieldset>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                   
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                <input
                                                    className="from-control"
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="E-Mail"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="phone"
                                                    name="phoneNumber"
                                                    placeholder="Phone Number"
                                                    value={formData.phoneNumber}
                                                    onChange={handleChange}
                                                   
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3 col-md-6 col-sm-6">
                                                <input
                                                    className="from-control"
                                                    type="text"
                                                    id="subject"
                                                    name="subject"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    
                                                />
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <textarea
                                                    className="from-control"
                                                    id="message"
                                                    name="message"
                                                    placeholder="Your message Here"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                  
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="btn-part">
                                            <div className="form-group">
                                                <input
                                                    className="readon2 submit-btn con-btn"
                                                    type="submit"
                                                    value="send"
                                                />
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4 padding-0">
                            <div className="contact-box">
                                <div className="sec-title2 mb-4">
                                    <h2 className="title small white-color">Contact Info</h2>
                                </div>
                                <div className="address-box mb-4">
                                    <div className="box-icon">
                                        <i className="fa fa-map-marker"></i>
                                    </div>
                                    <div className="address-text">
                                        <span className="label">SOMALIA Office</span>
                                        <p className="desc">
                                            Jubba Street, Bondhere,
                                            <br />
                                            Mogadishu.
                                        </p>
                                    </div>
                                </div>
                                <div className="address-box mb-4">
                                    <div className="box-icon">
                                        <i className="fa fa-phone"></i>
                                    </div>
                                    <div className="address-text">
                                        <span className="label">Telephone</span>
                                        <p className="desc">
                                            <a href="tel:+252619165454">p: (+252) 619 165454</a>
                                            <br />
                                            <a href="tel:+252614958692">p: (+252) 614958692 </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="address-box mb-4">
                                    <div className="box-icon">
                                        <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="address-text">
                                        <span className="label">Mail Us</span>
                                        <p className="desc">
                                            <a href="mailto:support@alifagency.com">E: support@alifagency.com</a>
                                            <br />
                                            <a href="mailto:info@alifagency.com">E: info@alifagency.com</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="address-box mb-4">
                                    <div className="box-icon">
                                        <i className="fa fa-clock-o"></i>
                                    </div>
                                    <div className="address-text">
                                        <span className="label">Kenya Office</span>
                                        <p className="desc">
                                            127 Fake Street, Boojo,
                                            <br />
                                            Nairobi.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default Contact;
