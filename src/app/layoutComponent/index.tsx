import { lazy } from "react";

const Loader = lazy(() => import("./loader"))
const Header = lazy(() => import("./header"));
const Footer = lazy(() => import("./footer"));
const FooterCall = lazy(() => import("./footerCall"));
const CookieCard = lazy(() => import("./cookieCard"));


export { Loader, Header, Footer, FooterCall, CookieCard };
