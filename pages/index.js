import Head from 'next/head';
import Confetti from 'react-confetti';
import { useState, useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <div className='container'>
      <a name='top'></a>
      <Head>
        <title>klustr - a kafka monitoring solution</title>
        <link rel='icon' href='/LogoDots.svg' />
        <meta
          name='description'
          content='klustr - a kafka monitoring solution'
        />
      </Head>

      <header>
        <div id='upperLeftLogo'>
          <div>
            <a href='#top'>
              <img src='/LogoDots.svg' alt='klustr Logo' className='logoBig' />
            </a>
          </div>
          <div>
            <a href='#top'>
              <h1 className='header-items'>klustr</h1>
            </a>
          </div>
        </div>
        <div>
          <a href='/#features' className='header-items'>
            Features
          </a>
        </div>
        <div>
          <a href='/#demo' className='header-items'>
            Demo
          </a>
        </div>
        <div id='upperRight'>
          <a href='/#team' className='header-items'>
            Meet the Team
          </a>
        </div>
        {/* <div>
          <img src='/Octocat.png'>
            {' '}
            Hello
            <a
              href='https://www.linkedin.com/company/klustr'
              target='_blank'
            ></a>
          </img>
        </div> */}
      </header>
      <main>
        <h1 className='title'>klustr</h1>

        <p className='description'>
          <img
            onClick={() => setShowConfetti(!showConfetti)}
            src='/LogoDots.svg'
            alt='klustr Logo'
            id='splashLogo'></img>
          <br></br> <code>An open source monitoring tool for Apache Kafka</code>
        </p>

        <div className='button-container'>
          <div className='button-div'>
            <a href='https://github.com/oslabs-beta/klustr'>
              <img src='/GitHub-Mark-32px.png'></img>
            </a>
          </div>
          <div className='button-div'>
            <a href='https://medium.com/@klgvillanueva/an-intimate-look-at-your-kafka-cluster-with-klustr-dc448ca45c42'>
              <img src='/Medium.png'></img>
            </a>
          </div>
        </div>

        <div className='grid'>
          <a href='https://github.com/oslabs-beta/klustr' className='card'>
            <h3>Documentation &rarr;</h3>
            <p>
              Find in-depth information about running klustr by checking out our
              Github.
            </p>
          </a>

          <a
            href='https://medium.com/@klgvillanueva/an-intimate-look-at-your-kafka-cluster-with-klustr-dc448ca45c42'
            className='card'>
            <h3>Learn &rarr;</h3>
            <p>
              Learn how klustr can help you monitor your Kafka instance by
              reading our Medium article!
            </p>
          </a>
        </div>

        <div className='features-container' id='features'>
          <div id='features' className='placeholder'></div>
          <div className='body-headers'>
            <h1 className='subtitles'>Features</h1>
          </div>

          <div className='grid'>
            <div className='card'>
              <h3>User-friendly GUI</h3>
              Making it easy to monitor your Apache Kafka clusters in real time
            </div>
            <div className='card'>
              <h3>Insight</h3>
              Insight into your cluster's brokers, topics, and partitions
            </div>
            <div className='card'>
              <h3>Health Monitoring</h3>
              Dashboard displays active controllers, under-replicated
              partitions, and offline partitions
            </div>
            <div className='card'>
              <h3>Live Stream</h3>
              Graphs display throughput, leader election rate, total producer
              requests, and many more!
            </div>
          </div>
        </div>

        <div className='demo-container' id='demo'>
          <div id='demo' className='placeholder'></div>
          <div className='body-headers'>
            <h1 className='subtitles'>Demo</h1>
          </div>

          <div className='gif-container'>
            <img className='gif-img' src='/images/Broker-Entry.gif'></img>
            <img className='gif-img' src='/images/Graph-SM.gif'></img>
            <img
              className='gif-img'
              src='/images/Cluster-Overview-SM.gif'></img>
            <img className='gif-img' src='/images/Core-Metrics-SM.gif'></img>
            <img className='gif-img' src='/images/Broker-View-SM.gif'></img>
          </div>

          <div className='grid'></div>
        </div>

        <div>
          <div id='team' className='placeholder'></div>
          <div className='body-headers'>
            <h1 className='subtitles'>Developers</h1>
          </div>
        </div>
        {showConfetti && <Confetti width={width} height={height} />}
        <div className='team-container'>
          <div className='team-members'>
            <img className='team-picture' src='/shah.jpeg'></img>
            <h3>Shah Chaudri</h3>
            <div className='git-linked-container'>
              <a href='https://github.com/shahprose'>
                <img src='/GitHub-Mark-32px.png' className='logos'></img>
              </a>

              <a href='https://www.linkedin.com/in/shah-chaudri/'>
                <img src='/linkedin.png' className='logos'></img>
              </a>
            </div>
          </div>
          <div className='team-members'>
            <img className='team-picture' src='/paul.jpeg'></img>
            <h3>Paul Kim</h3>
            <div className='git-linked-container'>
              <a href='https://github.com/Khyunwoo1'>
                <img src='/GitHub-Mark-32px.png' className='logos'></img>
              </a>

              <a href='https://www.linkedin.com/in/paulyjkim/'>
                <img src='/linkedin.png' className='logos'></img>
              </a>
            </div>
          </div>
          <div className='team-members'>
            <img className='team-picture' src='/cris-2.jpeg'></img>
            <h3>Cris Newsome</h3>
            <div className='git-linked-container'>
              <a href='https://github.com/angelEQ'>
                <img src='/GitHub-Mark-32px.png' className='logos'></img>
              </a>

              <a href='https://www.linkedin.com/in/crisnewsome/'>
                <img src='/linkedin.png' className='logos'></img>
              </a>
            </div>
          </div>
          <div className='team-members'>
            <img className='team-picture' src='/eric.jpeg'></img>
            <h3>Eric Tacher</h3>
            <div className='git-linked-container'>
              <a href='https://github.com/BreakerBeam'>
                <img src='/GitHub-Mark-32px.png' className='logos'></img>
              </a>

              <a href='https://www.linkedin.com/in/erictacher/'>
                <img src='/linkedin.png' className='logos'></img>
              </a>
            </div>
          </div>
          <div className='team-members'>
            <img className='team-picture' src='/katrina.jpeg'></img>
            <h3>Katrina Villanueva</h3>
            <div className='git-linked-container'>
              <a href='https://github.com/klgvillanueva'>
                <img src='/GitHub-Mark-32px.png' className='logos'></img>
              </a>

              <a href='https://www.linkedin.com/in/katrinavillanueva/'>
                <img src='/linkedin.png' className='logos'></img>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div>
          <img src='/LogoDots.svg' alt='klustr Logo' className='logoBig' />
        </div>
        <a href='#top' rel='noopener noreferrer'>
          © {currentYear} klustr / OSLabs. All rights reserved.{' '}
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 75px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ece9e6; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #ffffff,
            #ece9e6
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #ffffff,
            #ece9e6
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          position: sticky;
          bottom: 0;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title {
          color: #0070f3;
          margin: 0;
          line-height: 1.15;
          font-size: 6rem;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitles {
          color: #0070f3;
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .subtitles,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        .logoBig {
          height: 3em;
          z-index: -1;
          position: relative;
        }

        #splashLogo {
          height: 10em;
          animation: rotation 500s infinite linear;
          display: inline;
        }

        @keyframes rotation {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(359deg);
          }
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        header {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          width: 100%;
          height: 75px;
          border-bottom: 1px solid #eaeaea;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #ece9e6; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #ffffff,
            #ece9e6
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #ffffff,
            #ece9e6
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          position: sticky;
          top: 0;

          z-index: 1;
        }

        #upperLeftLogo {
          display: flex;
          flex-direction: row;
          width: 20%;
          justify-content: center;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        #upperRight {
          display: flex;
          flex-direction: row;
          width: 20%;
          justify-content: center;
        }

        .placeholder {
          height: 100px;
        }

        .button-div {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #444;
          border: 1px solid #ccc;
          box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          vertical-align: middle;
          max-width: 100px;
          padding: 5px;
          text-align: center;
          transition: box-shadow 1.5s;
          margin-bottom: 10px;

          background: #ece9e6; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #ffffff,
            #ece9e6
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #ffffff,
            #ece9e6
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          position: sticky;
          top: 0;
        }

        .button-div:hover {
          box-shadow: 0 8px 6px -6px black;
        }

        .button-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          width: 33%;
          padding: 2em;
        }

        .header-items {
          transition: color 1s ease-out 100ms;
        }

        .header-items:hover {
          color: #ff00ff;
        }

        .team-container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: row;
          margin-top: 2em;
          width: 100%;
        }

        .team-members {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-width: 25%;
          margin: 15px;
        }

        .team-picture {
          height: 150px;
          width: 150px;
          border-radius: 100px;
          margin-top: 10px;
        }

        .git-linked-container {
          display: flex;
          flex-direction: row;
        }

        .logos {
          height: 30px;
          width: 30px;
          margin: 5px;

          display: inline-block;
          vertical-align: middle;
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px rgba(0, 0, 0, 0);
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-property: transform;
          transition-property: transform;
        }

        .logos:hover {
          cursor: pointer;
          -webkit-transform: rotate(4deg);
          transform: rotate(180deg);
        }

        .gif-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-width: 25%;
          margin: 15px;
        }

        .gif-img {
          margin: 2em;
          border: 2px solid #ececec;
          border-radius: 10px;
          transition: color 2s ease, border-color 2s ease;
          // border-image: linear-gradient(45deg, #ececec, #eaeaea) 1;
        }

        .gif-img:hover {
          color: #0070f3;
          border-color: #0070f3;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
