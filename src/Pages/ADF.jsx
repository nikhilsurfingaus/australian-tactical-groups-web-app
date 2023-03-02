import React from 'react';
import logo from '../assets/imgs/socomd.png';
import Section from './Section';
import Fitness from '../assets/imgs/tagfitness.jpg'
import March from '../assets/imgs/tagmarch.jpg'
import SectionRev from './SectionRev';
import Navy from '../assets/imgs/tag3.jpg'
import TAG from '../assets/imgs/tag1.jpg'

export default  function ADF() {
  const imageSrc = logo;
  const heading1 = 'Special Operations Command';
  const heading2 = 'About The Role';
  const paragraph = 'The Special Operations Command (SOCOM) of the Australian Defence Force is a joint command composed of the Army Special Operations Command, the Navy Special Warfare Group, and the Air Force No. 4 Squadron, which specialize in unconventional warfare, counter-terrorism, special reconnaissance, and direct action. The SOCOMD main objective is to provide the Australian government with a range of flexible and responsive special operations capabilities that can be deployed to support national security and foreign policy objectives. SOCOMD has been involved in a number of military operations, including Operation Enduring Freedom in Afghanistan, Operation Slipper in the Middle East, and Operation Okra in Iraq.'

    const heading3 = 'Special Forces';
    const heading4 = 'Commando Regiment (TAG-E) & SASR (TAG-W)';

    const paragraph2 = 'The 1st and 2nd Commando Regiments are part of the Australian Army and are special forces units that primarily operate in the field of direct action, special reconnaissance, unconventional warfare, and counter-terrorism. The Special Air Service Regiment (SASR) is also a special forces primarily responsible for conducting special operations including counter-terrorism, direct action, and reconnaissance. TAG East is based in Sydney and covers the eastern region of Australia, while TAG West is based in Perth and covers the western region. They are both on standby to respond to domestic and international incidents that require a military response, such as terrorist attacks, hostage situations, and hijackings. They can also be called upon to assist law enforcement agencies in emergency situations.';

    
    const heading5 = 'Navy';
    const heading6 = 'Clearance Diver (TAG-E)'

    const paragraph3 = 'The Navy in Australia is the naval branch of the Australian Defence Force, responsible for protecting Australian waters and interests. The Navy Clearance Divers are a branch of the Australian Special Forces, and are highly trained specialists within the Royal Australian Navy. Their primary role is to conduct underwater operations such as mine clearance, search and recovery, and underwater demolition. To become a Navy Clearance Diver, candidates must pass a rigorous selection and training process that includes physical fitness tests, diving qualifications, and specialized tactical training. Once they complete their training, they are considered to be among the most highly skilled and capable divers in the world.'

    const heading7 = 'Entry Requirement';
    const heading8 = 'Joining A Special Operations Command Unit';

    const paragraph4 = 'To apply for the opportunity to attempt the Tactical Assault Group 2nd-Commando or SASR course, candidates can enter either having 2 years in the ADF or pass the Commando direct-entry scheme. The inital 3-week selection is regarded as one of the most physically and mentally challenges in the world. Those successful candidates then face another 18-month reinforcement cycle, before becoming a fully fledged TAG member. The minimum fitness for the selction course for the Special Forces Tactical Group includes the following (Zero Fail Tolerance):';

    const heading9 = 'Benefits';
    const heading10 = 'Joining A Special Forces Unit';

    const paragraph5 = 'Joining the Australian Special Forces can offer a range of benefits, both personal and professional. Firstly, you will be part of a highly trained and skilled team, with access to some of the most advanced equipment and training available. You will have the opportunity to undertake a range of challenging and rewarding missions, both in Australia and overseas. Additionally, you will develop a range of skills and qualities that can be applied to a range of careers and situations, such as leadership, teamwork, problem-solving, and resilience. Special Forces personnel are also often offered opportunities for further training and education, which can help to enhance career prospects both within and outside of the military.';

    const sf = 'https://www.defencejobs.gov.au/jobs/army/commando'

    const cd = 'https://www.defencejobs.gov.au/jobs/navy/navy-diver'

    const day = 'The Tactical Assault Group (TAG) is a special forces unit within the Australian Defence Force (ADF) that is tasked with conducting high-risk operations such as counter-terrorism, direct action, and hostage rescue missions. Daily tasks could include Physical Training, Briefing and Planning, Deployments, Conducting Operations, Recovery and Debriefing and Training and Professional Development. It is worth noting that being a TAG member is an extremely demanding job that requires a high level of physical fitness, mental toughness, and technical proficiency. TAG members must also maintain a high level of operational security and confidentiality due to the sensitive nature of their work.'

    const points = ['- Agility Course <50s', '- 100 Push Ups', '- 100 Situps', '- 10 Heaves', '- 2.4km run <10 Mins', '- 400m Swim <15 Mins', '- Tread Water >2 Mins', '- 20km Ruck March 30kg Weights <2 Hrs']


    return (
  
            <>
              <Section imageSrc={imageSrc} heading={heading1} subheading={heading2} text={paragraph} width="50%" bgColour="black"/>
             <SectionRev imageSrc={TAG} heading={heading3} subheading={heading4} text={paragraph2} bgColour="#003366" showButton={true} websiteLink={sf}/>
             <Section imageSrc={Navy} heading={heading5} subheading={heading6} text={paragraph3} width="75%" bgColour="black" showButton={true} websiteLink={cd}/>
             <SectionRev imageSrc={Fitness} bulletPoints={points} heading={heading7} subheading={heading8} text={paragraph4} bgColour="#003366" />
             <Section imageSrc={"https://www.youtube.com/embed/SYRgOj5cJpA"} heading={"What You Can Expect"} subheading={"Tactical Special Forces Action"} text={day} width="75%" bgColour="black" />
             <SectionRev imageSrc={March} heading={heading9} subheading={heading10} text={paragraph5} width="75%" bgColour="#003366"/>

            </>

    );
};
