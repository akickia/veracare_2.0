import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './style.scss';

export default function Footer() {
  return (
    <footer>
      <article className="footer">
        <section className="footer__content">
          <Link to="/" className="logo logo--large">
            <img
              className="logo logo--large"
              src="src/assets/img/logo.jpg"
            ></img>
          </Link>
          <section className="footer__content__contact">
            <h3>Kontakt</h3>
            <section className="footer__content__contact--links">
              <a>
                <FontAwesomeIcon icon={faPhone} /> 070-228 82 66
              </a>
              <a href="mailto:veronica.lundman@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} /> veronica.lundman@gmail.com
              </a>
              <a
                href="https://www.facebook.com/VeracareConsulting"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} /> Veracare Consulting AB
              </a>
              <a
                href="https://www.instagram.com/stress_pedagogen/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faInstagram} /> Stress_pedagogen
              </a>
            </section>
          </section>
        </section>
        <section className="footer__copyright">
          <p>Copyright © All Rights Reserved</p>
            <a href="http://akickia.se" target="_blank">
              Created by akickia
            </a>
        </section>
      </article>
    </footer>
  );
}
