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
import douroPortugalTripPreview from "../photos/douro-portugal-trip-preview.jpg";
import nycHolidayTripPreview from "../photos/nyc-holiday-trip-preview.jpg";
import { getSanityClient, TRIPS_QUERY, mapSanityTrips } from "../lib/sanityClient";

const WHO_WE_ARE_FALLBACK =
  "The Seymour Friends is an all-volunteer, non-profit organization dedicated to supporting the high quality of events, activities, programs, and wellness opportunities for seniors offered at the Center.";

/**
 * Upcoming destinations — flyer preview plus highlights from the trip PDFs.
 * Each link: { label, href } — href can be a URL, mailto:, or an imported asset.
 */
const UPCOMING_DESTINATIONS = [
  {
    name: "Portugal River Cruise - November 9-17, 2026",
    subtitle:
      "Highlights of the Douro with Spain — 9 days, 7 nights aboard the new Riviera Rose",
    preview: douroPortugalTripPreview,
    previewAlt:
      "Trip flyer cover for Highlights of the Douro with Spain, November 9, 2026",
    highlights: [
      "Roundtrip airfare from RDU",
      "Exclusive charter on the MS Riviera Rose",
      "Porto, Douro Valley wine estates, Salamanca with flamenco, and Mateus Palace Gardens",
      "20 meals and drinks onboard included",
    ],
    links: [{ label: "View full trip details (PDF)", href: douroPortugalTripPdf }],
  },
  {
    name: "New York City Holiday - December 11-15, 2026",
    subtitle: "5 days in Manhattan with Broadway, the Rockettes, and holiday lights",
    preview: nycHolidayTripPreview,
    previewAlt:
      "Trip flyer cover for New York City Holiday, December 11, 2026",
    highlights: [
      "Roundtrip airfare from RDU and 4 nights in Manhattan",
      "Broadway show and Radio City Music Hall Rockettes Holiday Show",
      "Statue of Liberty, Ellis Island, Rockefeller Center, and One World Observatory",
    ],
    links: [{ label: "View full trip details (PDF)", href: nycHolidayTripPdf }],
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
  const [destinations, setDestinations] = useState(UPCOMING_DESTINATIONS);

  useEffect(() => {
    const client = getSanityClient();
    if (!client) return;

    let cancelled = false;

    client
      .fetch(`*[_type == "aboutPage"][0]{ "text": whoWeAre }`)
      .then((doc) => {
        if (cancelled || !doc?.text || !String(doc.text).trim()) return;
        setWhoWeAre(String(doc.text).trim());
      })
      .catch(() => {
        /* keep fallback */
      });

    client
      .fetch(TRIPS_QUERY)
      .then((docs) => {
        if (cancelled) return;
        const trips = mapSanityTrips(docs);
        if (trips.length > 0) setDestinations(trips);
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
          <ul className="about-travel-destinations">
            {destinations.map((d) => {
              const links = (d.links || []).filter(
                (L) => L.href && String(L.href).trim()
              );
              const pdfLink = links[0];
              return (
                <li key={d.id || d.name} className="about-destination-card">
                  {d.preview && (
                    <a
                      className="about-destination-preview"
                      href={pdfLink?.href || d.preview}
                      aria-label={`View full trip details PDF for ${d.name}`}
                      {...(pdfLink &&
                      !String(pdfLink.href).startsWith("mailto:")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      <img
                        src={d.preview}
                        alt={d.previewAlt || d.name}
                        loading="lazy"
                        decoding="async"
                      />
                    </a>
                  )}
                  <div className="about-destination-body">
                    <h4 className="about-destination-name">{d.name}</h4>
                    {d.subtitle && (
                      <p className="about-destination-subtitle">{d.subtitle}</p>
                    )}
                    {d.highlights?.length > 0 && (
                      <ul className="about-list about-destination-highlights">
                        {d.highlights.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                    {links.length > 0 && (
                      <div className="about-destination-links">
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
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
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
              The travel info session is free and open to the public; no
              registration required.
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
