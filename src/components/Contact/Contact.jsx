import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import styled from 'styled-components'
import toast, {Toaster} from "react-hot-toast"
const ContactSections = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin: 80px 170px;
    @media (max-width: 768px) {
        gap: 50px;
        margin: 50px 70px;
        align-items: start;
    }
`;
const ContactTitle = styled.div`
    position: relative;
    h1 {
        padding: 0px 30px;
        font-size: 80px;
        font-weight: 600;
        @media (max-width: 768px) {
            padding: 0;
            font-size: 50px;
            font-weight: 600;
        }
    }
    img {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
        @media (max-width: 768px) {
            width: 130px;
            margin-right: -20px;
        }
    }
`;
const ContactSection = styled.div`
    display: flex;
    gap: 150px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const ContactLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    h1 {
        font-size: 80px;
        font-weight: 700;
        background: linear-gradient(270deg, #DF8908 80%, #B415FF 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (max-width: 768px) {
            font-size: 54px;
        }
    }
    p {
        max-width: 550px;
        color: #D8D8D8;
        font-size: 20px;
        line-height: 35px;
        @media (max-width: 768px) {
            font-size: 18px;
        }
    }
`;
const ContactDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    color: #D8D8D8;
    font-size: 22px;
    
`;
const ContactDetail = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    img {
        @media (max-width: 768px) {
            width: 25px;
        }
    }
`;

const ContactRight = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 30px;
    label {
        color: #D8D8D8;
        font-size: 22px;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 20px;
        }
    }
    input {
        border: none;
        width: 700px;
        height: 78px;
        padding-left: 20px;
        border-radius: 4px;
        background: #32323c;
        color: #A0A0A0;
        font-family: Outfit;
        font-size: 20px;
        @media (max-width: 768px) {
            width: 100%;
            font-size: 20px;
        }
    }
    textarea{
        width: 650px;
        border: none;
        padding: 25px;
        border-radius: 4px;
        background: #32323c;
        color: #A0A0A0;
        font-family: Outfit;
        font-size: 20px;
        @media (max-width: 768px) {
            width: 95%;
            font-size: 20px;
        }
    }
`;
const ContactSubmit = styled.button`
    border: none;
    color: white;
    border-radius: 50px;
    background: linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%);
    font-size: 22px;
    padding: 20px 60px;
    margin-bottom: 50px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }
    @media (max-width: 768px) {
        font-size: 20px;
        padding: 15px 40px;
    }
`;
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "6fc3aa10-c1d1-4887-8f89-9002cfded13b");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
         toast.success(res.message, )
        }
      };
  return (
    <ContactSections id='contact'>
        <Toaster />
        <ContactTitle>
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </ContactTitle>
        <ContactSection>
            <ContactLeft>
                <h1>Let's talk</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores recusandae voluptates, amet eos blanditiis saepe praesentium itaque repellendus sed ratione, in corrupti magnam. Amet velit, corrupti omnis inventore necessitatibus mollitia?</p>
                <ContactDetails>
                    <ContactDetail>
                        <img src={mail_icon} alt="" />
                        <p>guptajanhvi54@gmail.com</p>
                    </ContactDetail>
                    <ContactDetail>
                        <img src={call_icon} alt="" />
                        <p>+91-9971969496</p>
                    </ContactDetail>
                    <ContactDetail>
                        <img src={location_icon} alt="" />
                        <p>Palam, Delhi</p>
                    </ContactDetail>
                </ContactDetails>
            </ContactLeft>
            <ContactRight onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your email' name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
                <ContactSubmit type="submit">Submit</ContactSubmit>
            </ContactRight>
        </ContactSection>
    </ContactSections>
  )
}

export default Contact