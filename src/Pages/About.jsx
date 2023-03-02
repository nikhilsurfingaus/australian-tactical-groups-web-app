import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';
import logo from '../assets/resources/logo.png'
import './FAQ.css'

const About = () => {

  return (
    <Container className="my-5 text-white" style={{paddingBottom: "80px"}}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="text-center">
          <Image src={logo} fluid rounded className="mb-4 animate__animated animate__fadeIn" />
          <h2 className='mt-2 mb-2 pb-3' >About Us</h2>
          <p className='pb-5'>
          At Australian Tactical Group, we believe that a career in tactical law enforcement or special forces is not only a challenging and rewarding job, but also an opportunity to serve your community and make a real difference. That's why we're committed to helping you achieve your goals by providing you with accurate and up-to-date information about the different careers available, as well as advice on how to prepare yourself for the rigorous selection process.
          </p>
          <hr className="mb-5" style={{borderColor: "#007bff", height: "3px"}} />
          <h3 className='mt-4 mb-2 pb-3'>Our Mission</h3>
          <p className='pb-5'>
          Whether you're interested in joining the tactical police or the domestic tactical special forces, our website has everything you need to know. We offer comprehensive guides on the different career pathways available, including the requirements and benefits of each. Our website also features interviews with current and former tactical law enforcement and special forces personnel, giving you an insider's view of what it takes to succeed in these challenging roles.
          </p>
          <hr className="mb-5" style={{borderColor: "#007bff", height: "3px"}} />
          <h3 className='mt-4 mb-2 pb-3'>FAQ</h3>
          <Accordion  className='mb-4' >
              <Accordion.Item eventKey="0" >
                <Accordion.Header>Q: What is Australian Tactical Group?</Accordion.Header>
                <Accordion.Body >
                A: Australian Tactical Group is a website designed to assist those interested in pursuing careers in tactical law enforcement or domestic special forces in Australia. We provide guides, information, benefits, requirements, and more to help you achieve your goals.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Q: Who can benefit from Australian Tactical Group?</Accordion.Header>
                <Accordion.Body>
                A: Anyone who is interested in pursuing a career in tactical law enforcement or domestic special forces in Australia can benefit from Australian Tactical Group. Whether you're just starting out and looking for information or you're already in the field and looking to advance your career, we can help.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Q: What kind of information can I find on Australian Tactical Group?</Accordion.Header>
                <Accordion.Body>
                A: Australian Tactical Group provides a wealth of information on topics such as the requirements and benefits of joining tactical law enforcement or domestic special forces, the application process, training programs, career opportunities, and more.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Q: Can Australian Tactical Group help me prepare for the selection process?</Accordion.Header>
                <Accordion.Body>
                A: Yes, we offer guides and resources to help you prepare for the selection process for both tactical law enforcement and domestic special forces. These resources include information on physical fitness, mental preparation, and other key factors.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Q: How do I get in touch with Australian Tactical Group?</Accordion.Header>
                <Accordion.Body>
                A: You can get in touch with Australian Tactical Group by visiting our Contact Us page and filling out the form provided. We will respond to your inquiry as soon as possible.
                </Accordion.Body>
              </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
