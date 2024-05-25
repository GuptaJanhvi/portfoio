import React from 'react'
import styled from 'styled-components'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const HeroSection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 35px;
`
const Image = styled.img`
    margin-top: 150px;
    @media (max-width: 768px)  {
        margin-top: 120px;
        width: 260px;
    }
`
const Heading1 = styled.h1`
    text-align: center;
    width: 70%;
    font-size: 90px;
    font-weight: 600;
    .span {
        background: linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.63%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (max-width: 768px)  {
        margin-top: 50px;
        width: 90%;
        font-size: 50px;
    }
`
const Paragraph = styled.p`
    width: 50%;
    line-height: 40px;
    font-size: 24px;
    text-align: center;
    @media (max-width: 768px) {
        width: 60%;
        font-size: 18px;
        line-height: 32px;
        margin: 10px 0px;
    }
`
const HeroAction = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 50px;
    @media (max-width: 768px)  {
        gap: 16px;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 50px;
    }
`;
const HeroConnect = styled.div`
    padding: 25px 45px;
    border-radius: 50px;
    background: linear-gradient(267deg, #DA7C25 0.36%, #B923E1 102.63%);
    cursor: pointer;
    &:hover {
        border: 2px solid #fff;
    }
    @media (max-width: 768px) {
        padding: 20px 30px;
        border-radius: 40px;
    }
`;

const HeroResume = styled.div`
    padding: 25px 75px;
    cursor: pointer;
    border: 2px solid #fff;
    border-radius: 50px;
    &:hover {
        border-color: #B415FF;
    }
    @media (max-width: 768px) {
        padding: 20px 50px;
        border-radius: 40px;
    }
`
const AnchorLinks = styled(AnchorLink)`
    text-decoration: none;
    color: white;
`
const Hero = () => {
  return (
    <HeroSection id='home'>
        <Image src={profile_img} alt="" />
        <Heading1><span>I'm Janhvi Gupta</span>, frontend develper based in Indid</Heading1>
        <Paragraph>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus iure velit cumque neque doloremque recusandae possimus expedita est dolorem consequatur laborum, sit, cupiditate illo veritatis quisquam. Suscipit error consequuntur quam.</Paragraph>
        <HeroAction>
            <HeroConnect><AnchorLinks offset={50} href='#contact'>Connect With me</AnchorLinks></HeroConnect>
            <HeroResume>My Resume</HeroResume>
        </HeroAction>
    </HeroSection>
  )
}

export default Hero