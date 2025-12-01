import './Navbar.css'

const MainPage = () => {

    return(
        <>
            <main id="maincontent">
      <h1>Welcome to MusicalMayur</h1>
      <h2>Learn Music Anytime, Anywhere</h2>
      <p>
        At <b>MusicalMayur</b>, we help you learn your favorite instruments <i>online or offline</i> with ease and joy.
        Whether you dream of mastering the <b>piano</b>, rocking on the <b>guitar</b>, keeping rhythm on the <b>drums</b>,
        or playing soulful melodies on the <b>harmonium</b>, we've got you covered!
        Choose your instrument and start your musical journey today.
      </p>

      <div className="imgbox">
        <img src="./src/assets/piano.webp" alt="piano"/>
        <img src="./src/assets/drumset.webp" alt="drums"/>
      </div>
      <div className="imgbox">
        <img src="./src/assets/guitar1.webp" alt="guitar"/>
        <img src="./src/assets/harmonium.jfif" alt="harmonium"/>
      </div>
    </main>
         
        </>
    );
}
export default MainPage;