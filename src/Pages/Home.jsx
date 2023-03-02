import React from 'react'
import HeroSlider, { Slide, Nav, Overlay } from "hero-slider";
import Wrapper from '../components/UI/Wrapper/Wrapper'
import Title from "../components/UI/Title/Title";
import Subtitle from "../components/UI/Subtitle/Subtitle";

import img1 from '../assets/imgs/pol1.jpg'
import img2 from '../assets/imgs/tag1.jpg'
import img3 from '../assets/imgs/pol2.jpg'
import img4 from '../assets/imgs/tag2.jpg'
import img5 from '../assets/imgs/tag3.jpg'


import Section from './Section';

import logo from '../assets/resources/logo.png'

export const Home = () => {

  const info = 'Welcome to Australian Tactical Group, your ultimate resource for anyone interested in pursuing a career in tactical law enforcement or special forces in Australia. Our mission is to provide you with all the information you need to get started, from guides on the different pathways available to details on the benefits and requirements of each. At Australian Tactical Group, we are dedicated to helping you achieve your career goals in tactical law enforcement or special forces. So why wait? Browse our website today and start your journey to a fulfilling and rewarding career in the Australian tactical community!'

  return (
    <>
      <HeroSlider
      slidingAnimation="left_to_right"
      height="95vh"
      controller={{
        initialSlide: 1,
        slidingDuration: 4500,
        slidingDelay: 200
      }}
      autoplay={{
        autoplayDuration: 4500,
        autoplayDebounce: 100
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>Are You Ready?</Title>
          <Subtitle></Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        background={{
          backgroundImage: `url(${img1})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          filter: 'blur(4px)',
          backgroundAnimation: 'zoom'

        }}
      />

      <Slide
        background={{
          backgroundImage: `url(${img2})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          filter: 'blur(4px)',
          backgroundAnimation: 'zoom'

        }}
      />

      <Slide
        background={{
          backgroundImage: `url(${img3})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          filter: 'blur(4px)',
          backgroundAnimation: 'zoom'

        }}
      />

      <Slide
        background={{
          backgroundImage: `url(${img4})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          filter: 'blur(4px)',
          backgroundAnimation: 'zoom'

        }}
      />

      <Slide
        background={{
          backgroundImage: `url(${img5})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          filter: 'blur(4px)',
          backgroundAnimation: 'zoom'

        }}
      />

    <Nav />
    </HeroSlider>
    <Section imageSrc={logo} heading={'Australian Tactical Groups'} subheading={'Who Are We?'} text={info} width="50%" bgColour="black" websiteLink={"https://www.afp.gov.au/careers"}/>
    </>
  )
}
