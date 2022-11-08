import Wave from 'con/components/common/Wave';
import React from 'react';
import LogoTilleuls from 'con/components/common/LogoTilleuls';
import Image from "next/image";

export interface FooterColumn {
  title: string;
  links: { title: string; link: string }[];
}

const Footer: React.ComponentType<{
  links?: FooterColumn[];
  withSocial?: boolean;
}> = ({ links, withSocial = false }) => (
  <div className="text-white relative overflow-hidden">
    <div className="container flex flex-col min-h-[500px] pt-64 z-10">
      <div className="flex flex-col items-center mt-16 p-5 flex-wrap w-full | md:flex-row md:items-start md:space-x-16">
        <div className="flex items-center justify-center flex-col mb-5 | md:mb-0 md:mr-auto ">
          <Image
            src="/images/con/logo.svg"
            alt="Api Platform Conference"
            width="250"
            height="54"
          />
          <span className="pt-5">an event by</span>
          <a
            className="text-center w-52"
            href="https://les-tilleuls.coop/en"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LogoTilleuls width="100%" />
          </a>
        </div>
        {links?.map((column) => (
          <div
            key={column.title}
            className="grid grid-cols-1 gap-y-1.5 justify-center items-center text-center p-7 text-sm | md:p-0 md:items-start md:text-left"
          >
            <span className="mb-1 text-base font-bold uppercase">
              {column.title}
            </span>
            {column.links.map(({ link, title }) => (
              <a
                key={title}
                href={link}
                className="transition-all hover:text-blue"
              >
                {title}
              </a>
            ))}
          </div>
        ))}
        {withSocial ? (
          <div className="grid grid-cols-1 gap-y-1.5 justify-center items-center text-center p-7 text-sm | md:p-0 md:items-start md:text-left">
            <span className="text-base font-bold uppercase mb-1">
              Follow us
            </span>
            <a
              href="https://mastodon.online/@cooptilleuls"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-blue"
            >
              <i className="icon-mastodon mr-2" />
              <span className="font-raleway">Mastodon</span>
            </a>
            <a
              href="https://twitter.com/ApiPlatform"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-blue"
            >
              <i className="icon-twitter mr-2" />
              <span className="font-raleway">Twitter</span>
            </a>
            <a
              href="https://fr.linkedin.com/company/les-tilleuls-coop"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:text-blue"
            >
              <i className="icon-linkedin mr-2" />
              <span className="font-raleway">LinkedIn</span>
            </a>
          </div>
        ) : null}
      </div>
      <span className="text-sm font-light font-raleway text-center my-5">
        Copyright © 2023{" "}
        <a
          href="https://les-tilleuls.coop/en"
          target="_blank"
          rel="noreferrer noopener"
          className="font-semibold"
        >
          Les-Tilleuls.coop
        </a>
      </span>
    </div>
    <Wave className="absolute w-[1200px] max-w-7xl -top-28 left-1/2 -translate-x-1/2 opacity-50 | xl:w-full" />
  </div>
);

export default Footer;
