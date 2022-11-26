import "./App.css";
// import LightBoxGridGallery from "./components/LightBoxGridGallery";
// import StandardSlider from "./components/StandardSlider";
// import LogoCarousel from "./components/LogoCarousel";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import img1 from "../src/images/coffee1.jpg";
import img2 from "../src/images/coffee2.jpg";
import img3 from "../src/images/coffee3.jpg";
import img4 from "../src/images/coffee4.jpg";
import img5 from "../src/images/coffee5.jpg";
import img6 from "../src/images/coffee6.jpg";

function App() {
  return (
    <>
      <div className="Bài tập Component và State">
        {/* <LightBoxGridGallery /> */}
        {/* <StandardSlider /> */}
        {/* <LogoCarousel /> */}
      </div>

      <div className="music_player" style={{ margin: "50px" }}>
        <h2>Most Popular Songs</h2>
        <MusicPlayer
          id={1}
          cdImage={img1}
          songName="Sorry Sorry"
          artistName="Super Junior"
          songTime="3:22"
        />
        <MusicPlayer
          id={2}
          cdImage={img2}
          songName="Gee"
          artistName="Girl's Generation"
          songTime="3:12"
        />
        <MusicPlayer
          id={3}
          cdImage={img3}
          songName="Haru Haru"
          artistName="Big Bang"
          songTime="3:02"
        />
        <MusicPlayer
          id={4}
          cdImage={img4}
          songName="Mirotic"
          artistName="TVXQ"
          songTime="4:12"
        />
        <MusicPlayer
          id={5}
          cdImage={img5}
          songName="Left and Right"
          artistName="Seventeen"
          songTime="3:02"
        />
        <MusicPlayer
          id={6}
          cdImage={img6}
          songName="Pink Venom"
          artistName="Black Pink"
          songTime="3:05"
        />
      </div>
    </>
  );
}

export default App;
