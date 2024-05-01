import React from 'react';

export default function Contact() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card" style={{ border: '1px solid #ea7f05' }}>
            <img src="images/navya.jpg" className="card-img-top" alt="Profile" style={{ width: '100%', height: '10%' }} />
            <div className="card-body text-center">
              <h5 className="card-title text-center"><i className="fas fa-user"></i> K NAVYA SRI</h5>
              <p className="card-text">
                <img src="images/email.png" alt="Email" style={{ width: '20px', height: '20px' }} />{' '}
                Email: <a href="mailto:2200090025@kluniversity.in" style={{ color: '#ea7f05' }}>2200090025@kluniversity.in</a>
              </p>
              <p className="card-text">
                <img src="images/linkden.png" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />{' '}
                LinkedIn: <a href="https://www.linkedin.com/in/navyasri-kancharla-141729288/" target="_blank" rel="noopener noreferrer">navyasri-kancharla</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ border: '1px solid #ea7f05' }}>
            <img src="images/sanjana.jpg" className="card-img-top" alt="Profile" style={{ width: '100%', height: 'auto' }} />
            <div className="card-body text-center">
              <h5 className="card-title text-center"><i className="fas fa-user"></i> E DM SANJANA NAGAMANI</h5>
              <p className="card-text">
                <img src="images/email.png" alt="Email" style={{ width: '20px', height: '20px' }} />{' '}
                Email: <a href="mailto:2200090021@kluniversity.in" style={{ color: '#ea7f05' }}>2200090021@kluniversity.in</a>
              </p>
              <p className="card-text">
                <img src="images/linkden.png" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />{' '}
                LinkedIn: <a href="https://www.linkedin.com/in/d-m-sanjana-nagamani-eluri-19947825b/" target="_blank" rel="noopener noreferrer">sanjana-nagamani</a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card" style={{ border: '1px solid #ea7f05' }}>
            <img src="images/kousalya.jpeg" className="card-img-top" alt="Profile" style={{ width: '100%', height: 'auto' }} />
            <div className="card-body text-center">
              <h5 className="card-title text-center"><i className="fas fa-user"></i> CH KOUSALYA</h5>
              <p className="card-text">
                <img src="images/email.png" alt="Email" style={{ width: '20px', height: '20px' }} />{' '}
                Email: <a href="mailto:2200090011@kluniversity.in" style={{ color: '#ea7f05' }}>2200090011@kluniversity.in</a>
              </p>
              <p className="card-text">
                <img src="images/linkden.png" alt="LinkedIn" style={{ width: '20px', height: '20px' }} />{' '}
                LinkedIn: <a href="https://www.linkedin.com/in/kousalya-chilukuri-b5354a24b" target="_blank" rel="noopener noreferrer">kousalya-chilukuri</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
