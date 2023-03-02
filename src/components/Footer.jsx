
const Footer = () => {
  return (
    <footer className="text-white pt-4 text-center text-lg-start" style={{backgroundColor: '#1F65AA'}}>
      <div className="container p-4 pb-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">Australian Tactical Groups</h5>
            <p>
            Browse our website today and start your journey to a fulfilling and rewarding career in Australia's tactical community!
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Navigate</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/home" className="text-white">Home</a>
              </li>
              <li>
                <a href="/police" className="text-white">Police</a>
              </li>
              <li>
                <a href="/adf" className="text-white">ADF</a>
              </li>
              <li>
                <a href="/about" className="text-white">About</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Resources</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.afp.gov.au/" target="_blank" rel="noreferrer" className="text-white">Australian Federal Police</a>
              </li>
              <li>
                <a href="https://www.defencejobs.gov.au/" target="_blank" rel="noreferrer" className="text-white">Australian Defence Force</a>
              </li>
              <li>
                <a href="https://www.navy.gov.au/" target="_blank" rel="noreferrer" className="text-white">Royal Australian Navy</a>
              </li>
              <li>
                <a href="https://msigwarrior.com/pft-au-sasr.html" target="_blank" rel="noreferrer" className="text-white">MSIG Warrior</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © Copyright 2023, Wave Flight Simulation Studios
      </div>
      <style>
        {`
        a.text-white {
          text-decoration: none;
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
