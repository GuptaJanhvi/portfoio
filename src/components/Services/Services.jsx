import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import  servicesData from '../../assets/services_data'
import styled from 'styled-components'
import arrow_icon from '../../assets/arrow_icon.svg'

const ServicesSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin: 80px 170px;
    @media (max-width: 768px) {
        align-items: start;
        gap: 70px;
        margin: 20px 70px;
    }
`;
const ServicesTitle = styled.div`
    position: relative;
    h1 {
        padding: 0px 30px;
        font-size: 80px;
        font-weight: 600;
        @media (max-width: 768px) {
            padding: 0;
            font-size: 50px;
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
const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 80px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        gap: 30px;
    }
`;
const ServicesFormat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 60px;
    border-radius: 10px;
    border: 2px solid white;
    transition: 0ms.4s;
    cursor: pointer;
    h3 {
        font-size: 28px;
        font-weight: 600;
    }
    h2 {
        font-size: 38px;
        font-weight: 800;
        background: linear-gradient(270deg, #DF8908 50%, #B415FF 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;;
        @media (max-width: 768px) {
            font-size: 28px;
        }
    }
    p {
        color: #d4d4d4;
        font-size: 24px;
        line-height: 40px;
        max-width: 300px;
        @media (max-width: 768px) {
            font-size: 18px;
            line-height: 32px;
            max-width: 300px;
        }
    }
    &:hover {
        border: 2px solid #ff00ff;
        background-image: linear-gradient(45deg, #3f0028, #582300);
        transform: scale(1.05);
        transition: 0.4s;
    }
    @media (max-width: 768px) {
        gap: 20px;
        padding: 32px;
    }
`;
const ServicesReadmore = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 20px;
    img {
        @media (max-width: 768px) {
            width: 20px;
        }
    }
`;

const Services = () => {
  return (
    <ServicesSection id='services'>
        <ServicesTitle>
            <h1>My Services</h1>
            <img src={theme_pattern} alt="" />
        </ServicesTitle>
        <ServicesContainer>
            {servicesData.map((service, index) => {
                return <ServicesFormat key={index}>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <ServicesReadmore>
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </ServicesReadmore>
                </ServicesFormat>
            })}
        </ServicesContainer>
    </ServicesSection>
  )
}

export default Services