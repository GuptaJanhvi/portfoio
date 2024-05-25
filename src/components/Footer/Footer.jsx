import React from 'react'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
import styled from 'styled-components'


const FooterSection = styled.div`
    margin: 50px 170px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    @media (max-width: 768px) {
        margin: 50px 70px;
    }
`;
const FooterTop = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
    }
`;
const FooterTopLeft = styled.div`
    p {
        font-size: 20px;
        max-width: 400px;
    }
`;
const FooterTopRight = styled.div`
    display: flex;
    align-items: center;
    gap: 35px;
`;
const FooterEmailInput = styled.div`
    display: flex;
    gap: 30px;
    padding: 20px 30px;
    border-radius: 50px;
    background: #32323B;
    padding-right: 80px;
    input {
        outline: none;
        border: none;
        background: transparent;
        color: #a0a0a0;
        font-family: Outfit;
        font-size: 18px;
    }
    &:hover {
        border: 2px solid white;
    }
`;
const FooterSubscribe = styled.div`
    font-size: 20px;
    padding: 22px 50px;
    border-radius: 50px;
    background: linear-gradient(264deg, #DF8908 -5.09%, #B415FF 106.28%);
    cursor: pointer;
    transition: 0ms.3s;
    &:hover {
        transform: scale(1.1);
        transition: 0.3s;
    }
`;
const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        margin-bottom: 50px;
    }
`;
const FooterBottomLeft = styled.p`
    
`;
const FooterBottomRight = styled.div`
    display: flex;
    gap: 50px;
    margin-bottom: 50px;
`;

const Footer = () => {
  return (
    <FooterSection>
        <FooterTop>
            <FooterTopLeft>
                <img src={footer_logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias consequatur similique reiciendis! Quibusdam hic recusandae illum maxime placeat odio molestias. Officia quod aliquid eligendi qui error reprehenderit ducimus corporis distinctio?</p>
            </FooterTopLeft>
            <FooterTopRight>
                <FooterEmailInput>
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </FooterEmailInput>
                <FooterSubscribe>
                    Subscribe
                </FooterSubscribe>
            </FooterTopRight>
        </FooterTop>
        <hr />
        <FooterBottom>
            <FooterBottomLeft>C 2023 Alex Benett. All rights reserved.</FooterBottomLeft>
            <FooterBottomRight>
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </FooterBottomRight>
        </FooterBottom>
    </FooterSection>
  )
}

export default Footer