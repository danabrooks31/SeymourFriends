// About.jsx
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Board.css";
import "./About.css";
import flowers from "../photos/flowers.png";
import centerBuilding from "../photos/center-building.png";
import douroPortugalTripPdf from "../photos/douro-portugal-river-cruise-nov2026.pdf";
import nycHolidayTripPdf from "../photos/nyc-holiday-dec2026.pdf";
import travelInfoSessionPoster from "../photos/travel-info-session-june-2-2026.png";
import { getSanityClient } from "../lib/sanityClient";

const WHO_WE_ARE_FALLBACK =
  "The Seymour Friends is an all-volunteer, non-profit organization dedicated to supporting the high quality of events, activities, programs, and wellness opportunities for seniors offered at the Center.";

/**
 * Upcoming destinations — links under each name.
 * Each link: { label, href } — href can be a URL, mailto:, or an imported asset.
 */
const UPCOMING_DESTINATIONS = [
  {
    name: "Portugal River Cruise - November 9-17, 2026",
    links: [{ label: "View trip details (PDF)", href: douroPortugalTripPdf }],
  },
  {
    name: "New York City Holiday - December 11-15, 2026",
    links: [{ label: "View trip details (PDF)", href: nycHolidayTripPdf }],
  },
];

const SLIDES = [
  {
    src: flowers,
    alt: "Flowers at the Seymour Center",
    caption: "Our support helped to beautify the front entrance with flowers.",
  },
  {
    src: centerBuilding,
    alt: "Robert and Pearl Seymour Center building",
    caption: "We fund a wide range of opportunities at the Center.",
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
  const [whoWeAre, setWhoWeAre] = useState(WHO_WE_ARE_FALLBACK);

  useEffect(() => {
    const client = getSanityClient();
    if (!client) return;

    const query = `*[_type == "aboutPage"][0]{ "text": whoWeAre }`;

    let cancelled = false;
    client
      .fetch(query)
      .then((doc) => {
        if (cancelled || !doc?.text || !String(doc.text).trim()) return;
        setWhoWeAre(String(doc.text).trim());
      })
      .catch(() => {
        /* keep fallback */
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <main id="main-content">
        <header className="board-hero" aria-labelledby="about-heading">
          <h1 id="about-heading">About the Friends</h1>
        </header>

        <section className="about-carousel-section">
          <ImageCarousel />
        </section>

        <section className="about-intro">
          <h2>Who We Are</h2>
          <p>{whoWeAre}</p>
        </section>

        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            The Board raises funds through Individual and corporate donations, as
            well as fundraising events, to supplement the efforts of the Seymour
            Center.
          </p>
          <p>
            Since 1991, the Seymour Friends have given thousands of dollars and
            continuous support for various programs, events, and wellness
            opportunities offered at the Center. Donations are greatly appreciated
            to help us fulfill our mission.
          </p>
        </section>

        <section className="about-what-we-do">
          <h2>What We Do</h2>
          <ul className="about-list">
            <li>
              Support the Garden Club in beautifying the front entrance
            </li>
            <li>Support the Wellness Center</li>
            <li>Host The 90&apos;s Afternoon Tea</li>
            <li>Annual Holiday card mailout</li>
            <li>Offer travel opportunities</li>
            <li>Co-sponsor the Wellness Fair</li>
          </ul>
        </section>

        <section className="about-travel">
          <h2>Travel Opportunities</h2>
          <p>
            The Seymour Friends are offering travel opportunities for anyone who
            enjoys traveling as a group. If interested, feel free to reach out at{" "}
            <a href="mailto:seymourfriendstravel@gmail.com">
              seymourfriendstravel@gmail.com
            </a>
            .
          </p>

          <h3 className="about-subheading">Upcoming Destinations</h3>
          <ul className="about-list about-travel-destinations">
            {UPCOMING_DESTINATIONS.map((d) => {
              const links = (d.links || []).filter(
                (L) => L.href && String(L.href).trim()
              );
              return (
                <li key={d.name}>
                  <div className="about-destination-row">
                    <span className="about-destination-name">{d.name}</span>
                    {links.length > 0 && (
                      <span className="about-destination-links">
                        {links.map((link) => {
                          const isMailto = String(link.href).startsWith(
                            "mailto:"
                          );
                          return (
                            <a
                              key={`${d.name}-${link.href}`}
                              href={link.href}
                              {...(!isMailto
                                ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                  }
                                : {})}
                            >
                              {link.label || link.href}
                            </a>
                          );
                        })}
                      </span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          <h3 className="about-subheading">Travel info session</h3>
          <p>
            The Friends will be hosting a Premier of both trips at the Seymour
            Center on <strong>Tuesday, June 2nd at 5:00 p.m.</strong> It is free
            and open to the public; no registration required.
          </p>
          <figure className="about-travel-session-poster">
            <img
              src={travelInfoSessionPoster}
              alt="Travel with Friends of the Seymour Center: Douro Portugal river cruise November 9-17, 2026; NYC holiday December 11-15, 2026; info session Tuesday June 2 at 5:00 p.m."
              width={1024}
              height={575}
              loading="lazy"
              decoding="async"
            />
          </figure>

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
              href="mailto:seymourfriendstravel@gmail.com?subject=Travel%20Group%20Mailing%20List"
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
