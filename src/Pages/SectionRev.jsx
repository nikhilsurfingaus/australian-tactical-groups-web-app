import React from 'react';
import Button from 'react-bootstrap/Button';

const SectionRev = ({ bgColour, imageSrc, imageAlt, heading, subheading, text, showButton = false, websiteLink, bulletPoints = [] }) => {
  return (
    <div
      className={`w-100 py-16 px-4 d-flex align-items-center justify-content-center`}
      style={{ minHeight: '70vh',  backgroundColor: bgColour  }}
      id="report"
    >
      <div className="container-xl row animate__animated animate__fadeIn">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img className="w-100 mx-auto my-4" src={imageSrc} alt={imageAlt} style={{ maxWidth: '80%', maxHeight: '100%' }} />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center text-center">
          <h1 className="text-white text-center fs-1 fw-bold py-2">{heading}</h1>
          <h2 className="text-white fs-4 fw-bold py-2">{subheading}</h2>
          <p className="text-white text-justify">{text}</p>
          {bulletPoints.length > 0 && (
            <ul className="text-white text-center list-unstyled" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', listStyle: 'none' }}>
              {bulletPoints.map((point) => (
                <li key={point} style={{ display: 'flex', alignItems: 'center' }}>
                  {point}
                </li>
              ))}
            </ul>
          )}
          {showButton && websiteLink && (
            <div className="text-center">
              <Button style={{ width: '200px' }} variant="primary" href={websiteLink} target="_blank">
                Apply Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionRev;
