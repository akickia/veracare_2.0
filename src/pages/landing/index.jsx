import React, { useEffect, useState } from 'react';
import Button from '../../base/button/index';
import { motion } from 'framer-motion';
import './style.scss';
import HeadingContainer from '../../base/headingContainer';
import Hero from '../../base/hero';
import { getNews } from '../../core/functions/data';
import CardNews from '../../base/cardNews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Landing() {
  const [openMore, setOpenMore] = useState(true);
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const jsonData = await getNews();
        setNews(jsonData.news);
      } catch (error) {
        console.error('Error in fetching News: ', error);
      }
    };
    fetchNews();
  }, []);

  const newsEl = () => {
    return (
      <article className="card news">
        <h2 className="news__span">Aktuellt</h2>

        {news && news.map((item) => <CardNews item={item} key={item.id} />)}
      </article>
    );
  };

  return (
    <motion.main
      className="landing"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <HeadingContainer heading={'Holistic Mind Strängnäs'} />
      <Hero img={'./img/profil.jpg'}>
        <img src={'./img/logo-new.png'} className="hero__logo"></img>
      </Hero>
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
            <FontAwesomeIcon icon={faFacebook} /> Holistic Mind Strängnäs
          </Button>
          <Button link={'https://holisticmindeskilstuna.wordpress.com/'}>
            Holistic Mind Eskilstuna
          </Button>
        </section>
      </article>

      {newsEl()}

      <article className="card">
        <h3>
          Jag är ansluten till E-passi och mina behandlingar är
          friskvårdsberättigade
        </h3>
        <p>
          Om du inte hittar en tid som passar så hör av dig till mig så löser vi
          något.
        </p>
        <p>Jag ger kurser via olika aktörer, läs mer under kurser. </p>
        <p>
          För kurser och föreläsningar för grupper/företag: kontaka mig för
          prisförslag.
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
            <FontAwesomeIcon icon={faFacebook} /> Holistic Mind Strängnäs
          </Button>
          <Button link={'https://holisticmindeskilstuna.wordpress.com/'}>
            Holistic Mind Eskilstuna
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
            <img src="./img/examen.jpg" />
            <img src="./img/examen2.jpg" />
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
              <FontAwesomeIcon icon={faFacebook} /> Holistic Mind Strängnäs
            </Button>
            <Button link={'https://holisticmindeskilstuna.wordpress.com/'}>
              Holistic Mind Eskilstuna
            </Button>
          </section>
        </section>
      </article>
      <article className="card">
        <p>
          Denna hemsida är byggd av Kicki Lindstrand våren 2023 och uppdaterades
          med nya tekniker samt adminmöjligheter som examensarbete våren 2024.
          Utbildning: Frontendutvecklare, 400yhp, Folkuniversitetet Göteborg,
          2022-2024.
        </p>
        <Button className="primary" link={'https://www.akickia.se'}>
          Kickis hemsida
        </Button>
      </article>
    </motion.main>
  );
}
