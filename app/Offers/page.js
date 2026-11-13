"use client"

import React, { useEffect, useState } from 'react';
import { publicAsset } from '@/lib/publicAsset';
import Navbar from '../Navbar/MainContent/page';
import Footer from '../Footer/MainContent/page';
import Maintenance from '../Miantenance/page';
import HorizontalInfoSlider from "../horizontalInfoSlider";
import { PageHero, Section, SectionHeading, CtaButton, Reveal, FeatureVideo } from '../_ui/PageKit';
import { IoPricetagOutline } from 'react-icons/io5';
import { BOOKING_URL as OFFER_BOOKING_URL } from '../_data/park';


/** One offer card: badge, artwork, title, expandable details, two actions. */
function OfferCard({ offer }) {
    const [open, setOpen] = useState(false);
    const long = offer.description.length > 120;

    return (
        <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white p-3 shadow-[0_24px_44px_-26px_rgba(46,11,54,.5)] ring-1 ring-hairline">
            <div className="relative overflow-hidden rounded-[1.25rem] bg-paper-deep">
                <img
                    src={offer.image}
                    alt={offer.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-b-xl bg-white px-4 py-1.5 text-[13px] font-semibold text-ink">
                    <IoPricetagOutline className="text-berry" aria-hidden="true" />
                    Limited offer
                </span>
            </div>

            <div className="flex flex-1 flex-col px-3 pb-3 pt-5 text-center">
                <h2 className="u-display text-[22px] leading-snug text-ink">{offer.title}</h2>
                <p className={`mt-2 text-[15px] leading-relaxed text-ink-soft ${open ? '' : 'line-clamp-3'}`}>
                    {offer.description}
                </p>

                <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
                    {long ? (
                        <button
                            type="button"
                            onClick={() => setOpen((value) => !value)}
                            aria-expanded={open}
                            className="min-h-[48px] cursor-pointer rounded-full border border-hairline bg-white text-[14px] font-semibold text-ink transition-colors duration-200 hover:border-grape/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-grape/30"
                        >
                            {open ? 'Show less' : 'View details'}
                        </button>
                    ) : null}
                    <a
                        href={OFFER_BOOKING_URL}
                        target="_blank" rel="noopener noreferrer"
                        className={`inline-flex min-h-[48px] items-center justify-center rounded-full bg-sun text-[14px] font-semibold text-grape-deep shadow-[0_4px_0_0_#C98500] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sun/50 ${long ? '' : 'col-span-2'}`}
                    >
                        Book Now
                    </a>
                </div>
            </div>
        </article>
    );
}

const Offers = () => {
    const [offersData, setOffersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const OFFERS_BASE_URL = "https://membership.dreamasiaworld.com";
    const IMAGE_BASE_URL = `${OFFERS_BASE_URL}/UploadImages/`;

    // Prevent right-click
    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener('contextmenu', handleContextMenu);
        return () => document.removeEventListener('contextmenu', handleContextMenu);
    }, []);

    // Fetch offers data from API
    useEffect(() => {
        const fetchOffers = async () => {
            try {
                const res = await fetch(`${OFFERS_BASE_URL}/api/api/getOfferDetails`);
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

                const data = await res.json();

                // Parse stringified Data field
                let parsedData = [];
                if (typeof data.Data === "string") {
                    parsedData = JSON.parse(data.Data || "[]");
                } else if (Array.isArray(data.Data)) {
                    parsedData = data.Data;
                }

                // Map API fields correctly
                const formattedData = parsedData.map((offer) => {
                    const imgName = (offer.IMG_NAME || "").split("?")[0];
                    return {
                        title: offer.SUBJECT || "No Title",
                        description: offer.DESCRIPTION || "No Description",
                        image: imgName ? `${IMAGE_BASE_URL}${imgName}` : publicAsset("/Assets/Offer.jpeg")
                    };
                });

                setOffersData(formattedData);
            } catch (error) {
                console.error("Error fetching offers:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOffers();
    }, []);

    return (
        <div className="bg-paper">
            <HorizontalInfoSlider />
            <Navbar />
            <Maintenance />

            <PageHero
                image="/Assets/media/aerial-slide-tower.webp"
                imageAlt="The Dream Asia slide tower and water park, from the air"
                eyebrow="Offers & promotions"
                title="Special offers for you"
                highlight="for you"
                subtitle="Festive deals, special packages and group offers that add extra joy — and extra savings — to your visit."
                mascot="/Assets/media/site/taro-wave.webp"
            />

            <Section className="!pt-10">
                <SectionHeading
                    eyebrow="Latest offers"
                    title="Exciting offers at Dream Asia Parks"
                    highlight="Dream Asia Parks"
                    lead="Limited-time festive deals and exclusive group offers. Pick one and book online."
                    align="center"
                />

                {loading ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-label="Loading offers">
                        {[0, 1, 2].map((i) => (
                            <div key={i} className="animate-pulse rounded-[var(--radius-card)] bg-white p-3 ring-1 ring-hairline">
                                <div className="aspect-[4/3] rounded-[1.25rem] bg-paper-deep" />
                                <div className="mx-auto mt-5 h-6 w-2/3 rounded-full bg-paper-deep" />
                                <div className="mx-auto mt-3 h-4 w-5/6 rounded-full bg-paper-deep" />
                                <div className="mt-6 h-12 rounded-full bg-paper-deep" />
                            </div>
                        ))}
                    </div>
                ) : offersData.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {offersData.map((offer, index) => (
                            <Reveal key={index} delay={Math.min(index, 5) * 0.05} className="h-full">
                                <OfferCard offer={offer} />
                            </Reveal>
                        ))}
                    </div>
                ) : (
                    <div className="mx-auto flex max-w-xl flex-col items-center rounded-[var(--radius-card)] bg-white px-6 py-12 text-center ring-1 ring-hairline">
                        <img src={publicAsset('/Assets/media/site/taro-wave.webp')} alt="" aria-hidden="true" className="w-[110px]" />
                        <h2 className="u-display mt-4 text-[26px] text-ink">No active offers right now</h2>
                        <p className="mt-2 text-[15px] text-ink-soft">
                            New deals land often — check back soon, or book your day at the regular price.
                        </p>
                        <div className="mt-6">
                            <CtaButton href={OFFER_BOOKING_URL}>Book Tickets</CtaButton>
                        </div>
                    </div>
                )}
            </Section>

            {/* Festive feature — the client's Diwali promotion, played only on request. */}
            <Section tone="grape">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                    <div className="lg:col-span-6">
                        <SectionHeading
                            eyebrow="Festive season"
                            title="Celebrate the festivals at Dream Asia"
                            highlight="festivals"
                            lead="Rides, splashes, stays and celebrations — see what a festive day out at the park looks like. Press play, sound on."
                        />
                        <div className="-mt-4 flex flex-col gap-3 sm:flex-row">
                            <CtaButton href={OFFER_BOOKING_URL}>Book Tickets</CtaButton>
                        </div>
                    </div>
                    <Reveal className="lg:col-span-6">
                        <FeatureVideo
                            src="/Assets/media/diwali.mp4"
                            poster="/Assets/media/diwali.webp"
                            title="Festive celebrations at Dream Asia"
                            label="Play the festive celebrations video"
                            portrait
                        />
                    </Reveal>
                </div>
            </Section>

            <Footer />
        </div>
    );
};

export default Offers;
