import React from "react";
import Image from "next/image";
import useAnimation from "con/hooks/useAnimation";

interface ContactIconProps {
  url: string;
  icon: string;
}

const ContactIcon: React.ComponentType<ContactIconProps> = ({ url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white border-2 border-white bg-[position:0] bg-[length:300%] bg-icon-white transition-all ease-in-out p-2 rounded-full w-9 h-9 inline-flex items-center justify-center m-1 hover:text-blue-dark hover:bg-[position:100%]"
  >
    <i className={`icon-${icon}`} />
  </a>
);

const ContactCard: React.ComponentType = () => {
  const animationContact = useAnimation("scale", 0.5, 1.5);
  return (
    <div ref={animationContact}>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-gradient bg-blue shadow-xl mx-auto w-11/12 max-w-xl text-white top-0">
        <div className="dotted-corner w-full h-full p-4 flex flex-row items-center after:absolute after:w-[calc(100%-36px)] after:h-[calc(100%-36px)] after:border-2 after:border-blue-light after:border-dotted after:left-1/2 after:top-1/2 after:-translate-y-1/2 after:-translate-x-1/2 after:pointer-events-none">
          <div className="w-1/3 relative z-10 -translate-y-1">
            <Image
              src="/images/con/spider_contact.svg"
              alt="spider"
              width="168"
              height="200"
            />
          </div>
          <div className="flex-1 flex flex-col items-center px-3">
            <span className="uppercase text-3xl font-bold">Questions?</span>
            <a
              className="btn small square white my-4"
              href="mailto:events@les-tilleuls.coop"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us!
            </a>
            <div className="text-blue-darkest uppercase text-sm font-semibold">
              or follow us on social networks
            </div>
            <div className="social__list white">
              <ContactIcon
                url="https://mastodon.online/@cooptilleuls"
                icon="mastodon"
              />
              <ContactIcon
                url="https://twitter.com/ApiPlatform"
                icon="twitter"
              />
              <ContactIcon
                url="https://fr.linkedin.com/company/les-tilleuls-coop"
                icon="linkedin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
