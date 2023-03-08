import React from 'react';
import logo from '../assets/imgs/police.png';
import Section from './Section';
import Fitness from '../assets/imgs/polfitness.jpg'
import March from '../assets/imgs/polmarch.jpg'
import SectionRev from './SectionRev';

export const Police = () => {
  const imageSrc = logo;
  const heading1 = 'Tactical Police';
  const heading2 = 'About The Role';
  const paragraph = 'The Australian Tactical Police are specialist units within state and territory police forces that are trained to deal with high-risk incidents such as terrorist attacks, armed sieges, and hostage situations. These units are designed to provide a quick and effective response to these types of incidents, with the aim of minimizing harm to the public and bringing the situation under control as quickly as possible. Members of the Australian Tactical Police undergo rigorous training, including firearms proficiency, tactical movement, and negotiation skills. They often work in close collaboration with other law enforcement agencies and specialist units, including the Australian Defence Force, to respond to complex and challenging situations. The Australian Tactical Police are an essential component of the nation law enforcement capability, and their expertise and professionalism have played a critical role in safeguarding Australian security and ensuring public safety.';

    const heading3 = 'Entry Requirements';
    const heading4 = 'These May Differ State To State';

    const paragraph2 = 'To apply for the opportunity to attempt the Tactial Police Unit course, candidates must have served a minimum of 2 years of operational police experience. The three-day selection tests physical and mental endurance through individual and team tasks, problem solving, sleep deprivation, basic survival skills and by challenging phobias of heights and closed spaces. Successful candidates are invited to attend a 14-week training course where all the skills of the unit are taught including physical training, weapons training, rural tactics, marksman training, close quarter tactics, methods of entry, tactical driving, roping and fast roping. The minimum fitness for the selction course for a Tactical Unit includes the following (Zero Fail Tolerance): ';

    const points = ['- 10 Chin Ups', '- 35 Push Ups', '- 100 Situps', '- 10km Run <46 Mins', '- 400m Swim <10 Mins']

    
    const heading5 = 'Benefits';
    const heading6 = 'Joining A Tactical Police Unit';

    const paragraph3 = 'Joining an Australian tactical police unit can be a highly rewarding career choice for individuals seeking to make a positive impact in their community. Members of these units receive extensive training in various areas such as hostage negotiation, tactical response, surveillance, and crowd control. The benefits of joining an Australian tactical police unit include the opportunity to work on high-profile cases and respond to critical incidents that require a specialized skillset. Tactical Police Unit Officers also have access to a wide range of specialized training programs, which can help them develop valuable skills and expertise that can be applied throughout their careers. Overall, joining an Australian tactical police unit can be an exciting and rewarding career choice for those who are committed to serving their community and making a difference in the lives of others.'

    const life = 'The day in the life of a tactical police officer in Australia can vary depending on the specific unit they work in and the nature of their duties. General duties include Briefing and equipment check, Patrols and surveillance, Rapid response to incidents, Negotiation and conflict resolution, Use of force and Debriefing and paperwork. It is worth noting that being a tactical police officer can be a demanding and high-stress job. Officers may be required to work long hours, be on call for emergency situations, and face dangerous situations that require quick thinking and sound judgment.'

    return (
  
            <>
              <Section imageSrc={imageSrc} heading={heading1} subheading={heading2} text={paragraph} width="50%" bgColour="black" showButton={true} websiteLink={"https://www.afp.gov.au/careers"}/>
             <SectionRev imageSrc={Fitness} heading={heading3} subheading={heading4} text={paragraph2} bgColour="#003366" bulletPoints={points} showButton={true}/>
             <Section imageSrc={"https://www.youtube.com/embed/qcRKPJ-1j18"} heading={"What You Can Expect"} subheading={"Tactical Police Action"} text={life} width="50%" bgColour="#black" />
             <SectionRev imageSrc={March} heading={heading5} subheading={heading6} text={paragraph3} width="75%" bgColour="#003366"/>

            </>

    );
};
