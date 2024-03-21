import React, { useState } from 'react';
import Button from '../../base/button/index';
import { motion } from 'framer-motion';
import './style.scss';
import HeadingContainer from '../../base/headingContainer';
import { Link } from 'react-router-dom';
import Hero from '../../base/hero';

export default function Landing() {
  const [openMore, setOpenMore] = useState(true);
  const url = import.meta.env.VITE_IMG_URL;
  return (
    <motion.main
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <HeadingContainer heading={'Välkommen till VeraCare'} />
      <Hero
        img={'../src/assets/img/profil.jpg'}
        links={[
          'STRESSHANTERING',
          'MINDFULLNESS',
          'KÄNSLOKOMPETENS',
          'YOGA',
          'HEALING',
          'COACHING',
        ]}
      ></Hero>
      <article className="card">
        <h2>Behöver du hjälp att sänka stressen i din vardag?</h2>
        <h3>Vet du inte hur eller var du ska börja?</h3>
        <p>
          Min passion i livet är att få människor att växa och hitta ett lugn i
          sin vardag. Jag tror på ett holistiskt perspektiv och erbjuder därför
          flera olika sätt att läka från stress, ångest och nedstämdhet. Det är
          kraftfullt att få med både kroppen, sinnet och själen. Sinnet får sin
          läkning via coachingsamtal där vi belyser dina rädslor och din inre
          kritiker. Kroppen får sin läkning via massagen eller healingen. I
          yogan får både kroppen och sinnet träning med de fysiska övningarna
          samt andningsövningar och meditation. I stillheten kan själen också få
          sin plats. Jag erbjuder även kurser och föreläsningar i både
          mindfulness och stresshantering. Oavsett vilket
          stresshanteringsverktyg som passar dig just nu så finns jag här för
          att guida dig kärleksfullt genom processen.
        </p>
        <section className="flex-container">
          <Button
            link={
              'https://www.bokadirekt.se/places/holistic-mind-eskilstuna-35977'
            }
          >
            Bokadirekt.se
          </Button>
          <Button link={'https://www.facebook.com/VeracareConsulting'}>
            VeraCare på FaceBook
          </Button>
          <Button link={'https://holisticmindeskilstuna.wordpress.com/'}>
            Holistic Mind
          </Button>
        </section>
      </article>
      <article className="card news">
        <h2 className="news__span">Aktuellt</h2>
        <section className="card">
          <h3>På gång:</h3>
          <p>Kurs i naturlig hudvård - på en budget</p>
          <p>Fredag 29 mars</p>
          <a target="_blank" href="https://www.facebook.com/VeracareConsulting">
            Läs mer
          </a>
          <img src="../src/assets/img/profil4.jpg" />
        </section>
        <section className="card">
          <h3>Nyhet:</h3>
          <p>Jag erbjuder nu även Bambumassage</p>
          <Link to={'./behandlingar'}>Läs mer</Link>
          <img src="../src/assets/img/Massage.jpg" />
        </section>
        <section className="card news__span">
          <h3>På gång:</h3>
          <p>
            Jag kommer att delta som healer och massör på Harmoni Expo i
            Solnahallen
          </p>
          <p>6-7 april</p>
          <a target="_blank" href="https://harmoniexpo.com/">
            Länk till Harmoni Expo
          </a>
          <img src="../src/assets/img/reiki2.jpg" />
        </section>
      </article>

      <article className="card">
        <h3>
          Jag är ansluten till E-passi och mina behandlingar är
          friskvårdsberättigade
        </h3>
        <p>
          Jag är en del av Holistic Mind och mina bokningsbara behandlingar
          finns på bokadirekt.se.{' '}
        </p>
        <p>
          Om du inte hittar en tid som passar så hör av dig till mig så löser vi
          något.
        </p>
        <p>Jag ger kurser via olika aktörer, läs mer under kurser. </p>
        <p>
          För kurser och föreläsningar för grupper/företag: kontaka mig för
          prisförslag.{' '}
        </p>
        <p>
          <b>Ser fram emot att höra av dig!</b>
        </p>
        <section className="flex-container">
          <Button
            link={
              'https://www.bokadirekt.se/places/holistic-mind-eskilstuna-35977'
            }
          >
            Bokadirekt.se
          </Button>
          <Button link={'https://www.facebook.com/VeracareConsulting'}>
            VeraCare på FaceBook
          </Button>
          <Button link={'https://holisticmindeskilstuna.wordpress.com/'}>
            Holistic Mind
          </Button>
        </section>
      </article>
      <article className="card">
        <h3>Tärna folkhögskola stresspedagog </h3>
        <section className={openMore ? 'card__info' : 'card__info open'}>
          <p className="card__info--text">
            Vårterminen 2023 studerade jag till Stresspedagog på Tärna
            folkhögskola. Här breddade och fördjupade jag mina tidigare
            kunskaper om stress. Jag studerade bland annat kroppens reaktion på
            stress, återhämtningsverktyg, lösningsfokuserad samtalsmetodik,
            vanors betydelse, främjande hälsoarbete, stress i en digital värld,
            fysisk aktivitet samt naturens hälsofrämjande effekter. Det var
            mycket praktik blandat med teori. Bland annat läste vi om stressens
            historia både i Sverige men också i världen. Vi genomgick också en
            10 veckors kurs i ACT (Acceptance and Commitment Therapy) från boken
            ”Tid att leva” som bygger på vetenskapligt beprövade metoder för att
            hantera stress. Där fick jag ifrågasätta vad som är viktigt i livet
            för mig, vad jag vill och hur jag kan hantera hinder på vägen. Vi
            avslutade med ett sista projekt enligt SESAME modellen där jag valde
            att bygga en workshop kring upplevd stress av funktionärer på
            Friskis och Svettis. En workshop förenar just det som hela
            utbildningen till stresspedagog genomsyrade - en blandning av
            praktik och teori. De flesta människor har god kunskap kring stress
            och vad som stressar dem. Många har även kunskap kring vad man kan
            göra för att förhindra stress men det är i praktiken som
            stressreducering sker, när vi finner vårt unika sätt att koppla av
            och sen faktiskt tar oss tid till att göra just det.
          </p>
          <section className="flex-container">
            <img src="../src/assets/img/examen.jpg" />
            <img src="../src/assets/img/examen2.jpg" />
          </section>
        </section>
        <p
          className="card__more"
          onClick={() => {
            setOpenMore(!openMore);
          }}
        >
          {openMore ? 'Läs mer' : 'Läs mindre'}
        </p>
      </article>
      <article className="card">
        <p>
          Det finns inga snabba lösningar när det gäller förändringsarbete och
          mental hälsa men om du fortsätter att göra på samma sätt som nu som
          kommer du få samma resultat. För att bryta det behöver du arbeta med
          dina känslor, impulser och tankar och på det sättet närma dig
          möjligheten att våga vara i stillhet, arbeta med motståndet till att
          vara närvarande. Stress grundar sig nästan alltid på grundkänslan
          rädsla. Kanske är du till och med rädd för att söka hjälp? Jag
          förstår, jag har också varit där men nu kan jag vara din flytväst och
          ditt bollplank. Du kan alltid ringa och rådfråga mig - helt gratis och
          helt utan krav på att förbinda dig till något.
        </p>
        <p>
          Mitt tillvägagångssätt i coaching och uppbyggnad av
          stresshanteringskurser bygger på kunskaper jag fått genom KBT och ACT
          coach-utbildningen samt mitt yrke som lärare. Jag gick redan som
          20-åring min första utbildning i mental träning och intresset för vår
          kapacitet till att växa och må bättre har bara växt sig starkare. Mitt
          sätt att coacha bygger även på mina kunskap om allt från
          anknytningsteori, känslokompetens till mindfulness och CFT. Utifrån
          egna erfarenheter av stress och stresshantering ger jag praktiska
          kunskaper och tekniker till dig som blir användbara i vardagen.
        </p>
      </article>
      <article className="card">
        <h3>
          Jag håller kurser och privat coaching samt healing både online och
          irl.
        </h3>
        <h3>Jag finns i Eskilstuna och Strängnäs.</h3>
        <h3>Kontakta mig gärna om du har frågor eller funderingar.</h3>
        <section className="flex-container">
          <section className="flex-container">
            <Button
              link={
                'https://www.bokadirekt.se/places/holistic-mind-eskilstuna-35977'
              }
            >
              Bokadirekt.se
            </Button>
            <Button link={'https://www.facebook.com/VeracareConsulting'}>
              VeraCare på FaceBook
            </Button>
            <Button link={'https://holisticmindeskilstuna.wordpress.com/'}>
              Holistic Mind
            </Button>
          </section>
        </section>
      </article>
    </motion.main>
  );
}
