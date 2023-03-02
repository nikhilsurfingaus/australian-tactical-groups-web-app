import React from 'react';
import Button from 'react-bootstrap/Button';

const Section = ({ bgColour, imageSrc, imageAlt, heading, subheading, text, width, showButton = false, websiteLink }) => {
  const isYoutubeLink = imageSrc && imageSrc.startsWith('https://www.youtube.com/');

  return (
    <div className={`w-100 bg-${bgColour} py-16 px-4 d-flex align-items-center justify-content-center`} style={{ minHeight: '70vh' }} id="report">
      <div className="container-xl row animate__animated animate__fadeIn">
        <div className="col-md-6 d-flex flex-column justify-content-center text-center">
          <h1 className="text-white text-center fs-1 fw-bold py-2">{heading}</h1>
          <h2 className="text-white fs-4 fw-bold py-2">{subheading}</h2>
          <p className="text-white text-justify">{text}</p>
          {showButton && websiteLink && (
            <div className="text-center">
              <Button style={{ width: '200px' }} variant="primary" href={websiteLink} target="_blank">
                Apply Now
              </Button>
            </div>
          )}
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          {isYoutubeLink ? (
            <iframe width="80%" height="300" src={imageSrc} title={imageAlt} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          ) : (
            <img className="w-100 mx-auto my-4" src={imageSrc} alt={imageAlt} style={{ maxWidth: width, maxHeight: '100%' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
