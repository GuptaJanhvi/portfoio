import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import styled from 'styled-components';
import arrow_icon from  '../../assets/arrow_icon.svg'
const MyWorkSection = styled.div`
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
const MyWorkTitle  = styled.div`
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
`
const MyWorkContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    img {
        box-sizing: border-box;
        width: 420px;
        height: 280px;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            transform: scale(1.10);
            border: 4px solid #ff00ff;
            border-radius: 10px;
            transition: 0.3s;
        }
        @media (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
    }
    @media (max-width: 768px) {
        grid-template-columns:1fr 1fr;
    }
`
const MyWorkShowmore = styled.div`
    display: flex;
    gap: 15px;
    border-radius: 50px;
    border: 2px solid white;
    padding: 30px 60px;
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 80px;
    transition: 0.6s;
    cursor: pointer;
    &:hover {
        gap: 30px;
        transition: 0.6s;
    }
    @media (max-width: 768px) {
        padding: 20px 40px;
        font-size: 18px;
        margin: 50px auto;
        cursor: pointer;
    }
`;
const MyWork = () => {
  return (
    <MyWorkSection id='work'>
        <MyWorkTitle>
            <h1>My latest work</h1>
            <img src={theme_pattern} alt="" />
        </MyWorkTitle>
        <MyWorkContainer>
            {mywork_data.map((work, index) => {
                return <img key={index} src={work.w_img} alt="" />
            })}
        </MyWorkContainer>
        <MyWorkShowmore>
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </MyWorkShowmore>
    </MyWorkSection>
  )
}

export default MyWork