// About.jsx
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./About.css";
import flowers from "../photos/flowers.png";
import centerBuilding from "../photos/center-building.png";

const SLIDES = [
  {
    src: flowers,
    alt: "Flowers at the Seymour Center",
    caption: "Our support helped to beautify the front entrance with flowers.",
  },
  {
    src: centerBuilding,
    alt: "Past project we've helped fund",
    caption: "Past project we've helped fund.",
  },
];


const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

function ImageCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        pauseOnHover={true}
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="carousel-dot-list"
        itemClass="carousel-item"
      >
        {SLIDES.map((slide, i) => (
          <div key={i} className="carousel-slide">
            <img
              src={slide.src}
              alt={slide.alt}
              className="carousel-img"
              draggable={false}
            />
            {slide.caption && (
              <div className="carousel-caption">
                <p>{slide.caption}</p>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </div>
  );
}


export default function About() {
  return (
    <>
      <main>
        <h1 className="about-title">About the Friends</h1>

        <section className="about-carousel-section">
          <ImageCarousel />
        </section>

        <section className="about-intro">
          <h2>Who We Are</h2>
          <p>
            The Seymour Friends is an all-volunteer, non-profit organization
            dedicated to supporting the high quality of events, activities,
            programs, and wellness opportunities for seniors offered at the
            Center.
          </p>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            The mission of the Friends of the Robert and Pearl Seymour Center is
            to promote the well-being of all persons age 55 and older in Orange
            County by supporting the effective use of the Seymour Center. To
            accomplish this mission, the Board raises funds through independent
            donations and other contributions to supplement the efforts of the
            Orange County Department on Aging. Since 1991, the Seymour Friends
            have raised thousands of donations and offered continuous support
            for the various programs offered at the Seymour Center in Chapel
            Hill. Donations are greatly appreciated to help us continue our
            community efforts.
          </p>
        </section>

        <section className="about-what-we-do">
          <h2>What We Do</h2>
          <ul className="about-list">
            <li>Support the garden club to beautify the front entrances</li>
            <li>Support the Wellness Center</li>
            <li>90s tea</li>
            <li>Holiday card mailout</li>
            <li>Co-sponsors of a wellness fair</li>
          </ul>
        </section>

        <section className="about-travel">
          <h2>Travel Opportunities</h2>
          <p>
            We are offering exciting travel opportunities for our members and
            community. If interested, feel free to reach out!
          </p>

          <h3 className="about-subheading">Upcoming Destinations</h3>
          <ul className="about-list">
            <li>Charleston &amp; Savannah</li>
            <li>Portugal</li>
            <li>New York City</li>
          </ul>

          <div className="about-travel-card">
            <h3 className="about-subheading">Seymour Friends Travel Group</h3>
            <p>
              The Seymour Friends Travel Group meets on the <strong>first Tuesday of each month from 5-7pm</strong> at the
              Seymour Center. Join us to learn about upcoming travel
              opportunities and meet potential fellow travelers. We welcome all
              who are interested in traveling with us.
            </p>
            <p>
              The travel group maintains a separate mailing list - reach out to
              us to be added.
            </p>
            <a
              href="mailto:seymourfriends@gmail.com?subject=Travel%20Group%20Mailing%20List"
              className="about-travel-btn"
            >
              Contact the Travel Group →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
