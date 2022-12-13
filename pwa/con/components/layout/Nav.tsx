import {
  useContext,
  useCallback,
  useState,
  useEffect,
  PropsWithChildren,
} from "react";
import classNames from "classnames";
import { useRouter } from "next/router";
import ConfContext from "con/contexts/ConfContext";
import useDynamicRefs from "con/hooks/useDynamicRefs";
import Image from "next/image";

interface NavLinkProps extends PropsWithChildren {
  to?: string;
  withAnchors?: boolean;
  goToAnchorLink: (s: string) => void;
}

const NavLink: React.ComponentType<NavLinkProps> = ({
  withAnchors,
  to,
  children,
  goToAnchorLink,
}) => {
  const { pathname, asPath } = useRouter();
  const hash = asPath.split("#")[1];
  const { activeLink } = useContext(ConfContext);

  const anchorRegex = /#([^\s]+)/;
  const anchor = withAnchors && to && to.match(anchorRegex)?.[1];

  const fullPathName = `${pathname}${hash}`;
  return anchor ? (
    <a
      className={classNames(
        "text-white uppercase font-semibold text-sm mx-2 transition-all hover:text-blue hover:scale-95",
        {
          active: to === (activeLink || fullPathName),
        }
      )}
      onClick={() => goToAnchorLink(anchor)}
      role="button"
      tabIndex={0}
    >
      {children}
    </a>
  ) : (
    <a
      className={classNames(
        "text-white uppercase font-semibold text-sm mx-2 transition-all hover:text-blue hover:scale-95",
        {
          active: to === (activeLink || fullPathName),
        }
      )}
      href={to}
    >
      {children}
    </a>
  );
};

interface NavProps {
  logoAlwaysVisible?: boolean;
  edition?: string;
  button?: JSX.Element;
}

const Nav: React.ComponentType<NavProps> = ({
  logoAlwaysVisible = false,
  edition,
  button,
}) => {
  const hasScroll = "undefined" !== typeof window && 50 > window.scrollY;
  const router = useRouter();
  const { pathname } = router;
  const { nav } = useContext(ConfContext);
  const isHomePage = [`/con/${edition}/`, `/con/${edition}`].includes(pathname);
  const links = nav?.links.filter((link) => !link.mobileOnly);

  const [getRef] = useDynamicRefs();

  const goToAnchorLink = useCallback(
    (section: string) => {
      const element = getRef(`section-${section}`);
      element?.current?.scrollIntoView({ behavior: "smooth" });
    },
    [getRef]
  );

  const [minified, setMinified] = useState(hasScroll && !logoAlwaysVisible);

  const onScroll = useCallback(() => {
    setMinified(50 > window.scrollY && !logoAlwaysVisible);
  }, [logoAlwaysVisible]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  const onLogoClick = useCallback(() => {
    if (isHomePage) goToAnchorLink("home");
    if (edition) router.push(`/con/${edition}/`);
    else router.push(`/con/`);
  }, [isHomePage, goToAnchorLink, edition, router]);

  return (
    <nav
      className={classNames(
        "fixed h-16 z-20 w-full items-center justify-end text-white p-3 | md:flex",
        !minified
          ? "bg-conf-gradient bg-[length:100%_100vh] bg-blue-black border-y-blue border-y shadow-md"
          : ""
      )}
    >
      <div
        role="button"
        tabIndex={0}
        className={classNames(
          "h-9 flex justify-center items-center transition-all duration-300 pl-20 pr-12 mr-auto",
          !minified ? "opacity-1" : "opacity-0 -translate-y-full"
        )}
        onClick={onLogoClick}
      >
        <Image
          src="/images/con/logo.svg"
          alt="Api Platform conference"
          width="150"
          height="35"
        />
        {edition ? (
          <div className="text-blue top-1/2 text-sm py-0.5 px-1 border-t-blue border-t -rotate-90">
            {edition}
          </div>
        ) : null}
      </div>
      <a
        href={nav?.logoLink || "/"}
        className={classNames(
          "w-20 h-[62px] absolute top-0 cursor-pointer bg-blue-gradient bg-blue flex items-center justify-center",
          !minified ? "clip-path-flag left-0 pr-3" : "rounded-b-md left-3"
        )}
      >
        <div className="w-12 h-12 bg-blue-light transition-all flex items-center justify-center rounded-full">
          <Image
            src="/images/logo_spider.svg"
            alt="Back to API Platform website"
            title="Back to API Platform website"
            width="50"
            height="29"
          />
        </div>
      </a>
      {nav?.backLink && nav.backLink.to !== pathname ? (
        <>
          <a
            className="uppercase text-white text-xs font-semibold transition-all | hover:text-blue hover:scale-95"
            href={nav.backLink.to}
          >
            {`< ${nav.backLink.text}`}
          </a>
          <div className="bg-white w-0.5 h-4/5 mx-4" />
        </>
      ) : null}
      <div className="hidden | sm:block">
        {links?.map((link) => (
          <NavLink
            key={link.text}
            to={link.to}
            withAnchors={isHomePage}
            goToAnchorLink={goToAnchorLink}
          >
            {link.text}
          </NavLink>
        ))}
      </div>
      {button}
    </nav>
  );
};

export default Nav;
