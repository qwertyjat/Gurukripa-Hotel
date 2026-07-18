import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileActionBar from "./components/MobileActionBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      <Header />

      <main>

        <Hero />

        {/* 
        |--------------------------------------------------------------------------
        | FUTURE WEBSITE SECTIONS
        |--------------------------------------------------------------------------
        | These will be added in upcoming stages:
        |
        | <About />
        | <Restaurant />
        | <Hotel />
        | <Gallery />
        | <Reviews />
        | <Location />
        | <Contact />
        |--------------------------------------------------------------------------
        */}

        <section className="stage-placeholder">
          <div>
            <span className="placeholder-label">
              Stage 1 Foundation
            </span>

            <h2>
              More sections are being built.
            </h2>

            <p>
              The verified restaurant information, accommodation details,
              gallery, menu and enquiry system will be added in the next stages.
            </p>
          </div>
        </section>

      </main>

      <Footer />

      <MobileActionBar />

    </div>
  );
}

export default App;
