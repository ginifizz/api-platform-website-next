import React, { useState, useMemo, useEffect, PropsWithChildren } from "react";
import Head from "next/head";
import Script from "next/script";
import LayoutBase from "con/components/layout/LayoutBase";
import meta from "con/data/2023/meta";
import { useRouter } from "next/router";
import ConfContext from "con/contexts/ConfContext";
import SectionsContext from "con/contexts/SectionsContext";
import nav from "con/data/2023/nav";
import footer from "con/data/2023/footer";

interface LayoutProps extends PropsWithChildren {
  logoAlwaysVisible?: boolean;
}

const Layout: React.ComponentType<LayoutProps> = ({
  logoAlwaysVisible,
  children,
}) => {
  const eventData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "API Platform Conference 2022",
    description:
      "The international conference dedicated to API Platform and its ecosystem",
    url: "https://api-platform.com/con/2023/",
    eventStatus: "http://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    startDate: "2023-09-21",
    endDate: "2023-09-22",
    organizer: {
      "@type": "Organization",
      name: "Les-Tilleuls.coop",
      url: "https://les-tilleuls.coop/en",
    },
    location: [
      {
        "@type": "Place",
        name: "Euratechnologies",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lille",
          addressRegion: "Hauts de France",
          postalCode: "59000",
          streetAddress: "Place de Saintignon, 165 avenue de Bretagne",
        },
      },
      {
        "@type": "VirtualLocation",
        url: "https://api-platform.com/con/2023/",
      },
    ],
    image: meta.OG_IMAGE,
  };

  // anchors handler
  const { pathname } = useRouter();
  const [sectionsVisibles, setSectionsVisibles] = useState<string[]>([]);
  const activeLink = useMemo(() => {
    const lastSectionVisible = sectionsVisibles?.[sectionsVisibles.length - 1];
    if (!lastSectionVisible || "home" === lastSectionVisible) return pathname;
    return sectionsVisibles.length
      ? `${pathname}#${sectionsVisibles[sectionsVisibles.length - 1]}`
      : pathname;
  }, [sectionsVisibles, pathname]);

  useEffect(() => {
    window.history.replaceState({}, "", activeLink);
  }, [activeLink]);

  const [isEventBriteLoaded, setIsEventBriteLoaded] = useState(false);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://www.eventbrite.com/static/widgets/eb_widgets.js";
    s.onload = () => {
      setIsEventBriteLoaded(true);
    };
    document.body.appendChild(s);
  }, [setIsEventBriteLoaded]);

  return (
    <ConfContext.Provider
      value={{ nav, activeLink, edition: "2022", isEventBriteLoaded }}
    >
      <SectionsContext.Provider
        value={{ sectionsVisibles, setSectionsVisibles }}
      >
        <Script id="event-schema" type="application/ld+json">
          {JSON.stringify(eventData)}
        </Script>
        <Script
          defer
          src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"
        />
        <LayoutBase
          edition="2022"
          meta={meta}
          logoAlwaysVisible={logoAlwaysVisible}
          footer={footer}
        >
          {children}
        </LayoutBase>
      </SectionsContext.Provider>
    </ConfContext.Provider>
  );
};

export default Layout;
