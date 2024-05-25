import React from 'react'
import styled from 'styled-components'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
const AboutSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    margin: 80px 170px;
    @media (max-width: 768px) {
        gap: 80px;
        margin: 50px 70px;
        align-items: start;
    }
`
const AboutTitle = styled.div`
    position: relative;
`;
const Heading1 = styled.h1`
    padding: 0px 30px;
    font-size: 80px;
    font-weight: 600;
    @media (max-width: 768px) {
        font-size:  50px;
        padding: 0;
    }
`;
const Image = styled.img`
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
    @media (max-width: 768px) {
        width: 130px;
        right: -20px;
    }
`;
const AboutSections = styled.div`
    display: flex;
    gap: 80px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const AboutLeft = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`
const LeftImage = styled.img`

`;
const AboutRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
`;
const AboutPara = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 18px;
        line-height: 32px;
    }
`;
const AboutSkills = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`;
const AboutSkill = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    transition: 0.3s;
    p {
        min-width: 150px;
        font-size: 24px;
        font-weight: 500;
        @media (max-width: 768px) {
            font-size: 20px;
        }
    }
    hr {
        outline: none;
        border: none;
        width: 50%;
        height: 8px;
        border-radius: 50px;
        background: linear-gradient(264deg, #DF8908 -5.09%, #b415ff 106.28%);
        @media (max-width: 768px) {
            height: 6px;
        }
    }
    &:hover {
        transform: scale(1.05);
        transition: 0ms.3s;
    }
    @media (max-width: 768px) {
        gap: 20px;
        align-items: center;
    }
`;
const AboutAchievements = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 80px;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;
const AboutAchievement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    transition: 0ms.5s;
    h1 {
        font-size: 60px;
        font-weight: 700;
        background: linear-gradient(270deg, #DF8908 50.41%, #B415FF 90.25%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        @media (max-width: 768px) {
            font-size: 34px;
            font-weight: 700;
        }
    }
    p {
        font-size: 22px;
        font-weight: 500;
        @media (max-width: 768px) {
            text-align: center;
            font-size: 16px;
        }
    }
    &:hover {
        transform: scale(1.12);
        transition: 0ms.5s;
    }
    @media (max-width: 768px) {
        gap: 10px;
    }
`
const About = () => {
  return (
    <AboutSection id='about'>
        <AboutTitle>
            <Heading1>About me</Heading1>
            <Image src={theme_pattern} />
        </AboutTitle>
        <AboutSections>
            <AboutLeft>
                <LeftImage src={profile_img} />
            </AboutLeft>
            <AboutRight>
                <AboutPara>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eligendi, porro labore nulla illo ab accusamus magni molestias accusantium voluptatem eum deserunt expedita, alias voluptatibus corrupti natus atque aliquid? Ab!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae eligendi, porro labore nulla illo ab accusamus magni molestias accusantium voluptatem eum deserunt expedita, alias voluptatibus corrupti natus atque aliquid? Ab!</p>
                </AboutPara>
                <AboutSkills>
                    <AboutSkill>
                        <p>HTML & CSS</p><hr style={{width: '50%'}} />
                    </AboutSkill>
                    <AboutSkill>
                        <p>React JS</p><hr style={{width: '70%'}} />
                    </AboutSkill>
                    <AboutSkill>
                        <p>Javascript</p><hr style={{width: '60%'}} />
                    </AboutSkill>
                    <AboutSkill>
                        <p>Next JS</p><hr style={{width: '50%'}} />
                    </AboutSkill>
                </AboutSkills>
            </AboutRight>
        </AboutSections>
        <AboutAchievements>
            <AboutAchievement>
                <h1>10+</h1>
                <p>Years of EXPERIENCE</p>
            </AboutAchievement>
            <hr />
            <AboutAchievement>
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
            </AboutAchievement>
            <hr />
            <AboutAchievement>
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </AboutAchievement>
        </AboutAchievements>
    </AboutSection>

  )
}

export default About