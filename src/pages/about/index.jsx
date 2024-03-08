import React from 'react';
import HeadingContainer from '../../base/headingContainer';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Button from '../../base/button';
import './style.scss';

export default function About() {
  return (
    <motion.main
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <HeadingContainer heading={'Om mig'} />
      <article className="card hero contact">
        <img src="../src/assets/img/profil4.jpg" />
        <section className="contact--links">
          <h3>Kontaktuppgifter</h3>
          <a href="mailto:veronica.lundman@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} /> veronica.lundman@gmail.com
          </a>
          <a href="https://www.facebook.com/VeracareConsulting" target="_blank">
            <FontAwesomeIcon icon={faFacebook} /> Veracare Consulting AB
          </a>
          <a href="https://www.instagram.com/stress_pedagogen/" target="_blank">
            <FontAwesomeIcon icon={faInstagram} /> Stress_pedagogen
          </a>
          <a>
            {' '}
            <FontAwesomeIcon icon={faPhone} /> 070-228 82 66{' '}
          </a>
        </section>
        <section className="contact__btns flex-container">
          <Button link={'https://holisticmindeskilstuna.wordpress.com/'}>
            Holistic mind
          </Button>
          <Button
            link={
              'https://www.bokadirekt.se/places/holistic-mind-eskilstuna-35977'
            }
          >
            Boka direkt
          </Button>
          <Button link={'https://facebook.com/veracareConsulting'}>
            Facebook
          </Button>
        </section>
      </article>
      <article className="card">
        <p>
          Jag är en positiv och driven kvinna med gedigen livserfarenhet och med
          en vilja att alltid lära mig nya saker och växa. Mitt liv började
          knackigt och det fortsatte så under hela min barndom, tonårstid och
          även en bra bit efter det. Idag kan jag dock bära de erfarenheterna
          och har genom mycket terapi och egenvård växt och hamnat på ett bra
          ställe i livet. Jag utbildade mig tidigt till lärare och arbetade
          sedan i många år i förskolans värld där jag trivdes och växte som
          människa och pedagog. Strax innan pandemin slog till så startade jag
          mitt företag veracare, då jag ville arbeta med andra saker jag också
          brinner för - att hjälpa andra som inte mår bra, psykiskt och/eller
          fysiskt.
        </p>
        <img src="../src/assets/img/yoga-position.jpg" />
        <p>
          Just nu håller jag på mycket med samarbeten av olika event och mässor.
          Jag har event i allt från grupphealing med seans eller med
          soundhealing till frigörande dans och skogsbad med yoga. Lättast
          hittar man dessa event på facebook - Veracare Consulting AB.
        </p>
        <section className="flex-container">
          <video muted controls>
            <source src="../src/assets/img/healing-seans.mp4"></source>
          </video>
          <video muted controls>
            <source src="../src/assets/img/frigorande-dans.mp4"></source>
          </video>
        </section>
      </article>
    </motion.main>
  );
}
