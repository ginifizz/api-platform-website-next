import React, { PropsWithChildren } from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Footer, { FooterColumn } from "./Footer";
import Head from "next/head";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

interface LayoutProps extends PropsWithChildren {
  logoAlwaysVisible?: boolean;
  meta: {
    DESCRIPTION: string;
    TITLE: string;
    OG_IMAGE: string;
    URL: string;
  };
  edition?: string;
  footer?: FooterColumn[];
  withSocialFooter?: boolean;
  navButton?: JSX.Element;
}

const LayoutBase: React.ComponentType<LayoutProps> = ({
  logoAlwaysVisible,
  children,
  meta,
  edition,
  footer,
  withSocialFooter = false,
  navButton,
}) => {
  dayjs.extend(localizedFormat);
  const { URL, DESCRIPTION, TITLE, OG_IMAGE } = meta;

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "API Platform Conference",
    url: "https://api-platform.com/con/",
  };

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@coopTilleuls" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <script type="application/ld+json">
          {JSON.stringify(websiteData)}
        </script>
        <script
          defer
          src="https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"
        />
        <style type="text/css">{`
          body, html {
            background-color: #001226;
          }
    `}</style>
      </Head>
      <div className="overflow:hidden | md:overflow:auto" id="conf">
        <div className="fixed h-screen w-full bg-conf-gradient bg-blue-black" />
        <Nav
          logoAlwaysVisible={logoAlwaysVisible}
          edition={edition}
          button={navButton}
        />
        <MobileNav />
        <div className="relative z-10">
          {children}
          <Footer links={footer} withSocial={withSocialFooter} />
        </div>
      </div>
    </>
  );
};

export default LayoutBase;
