import { lazy } from "react";

const AutoSearch = lazy(() => import("./autoSearch"));
const CallModal = lazy(() => import("./callModal"));
const Counter = lazy(() => import("./counter"));
const Dropdown = lazy(() => import("./dropDown"));
const Hero = lazy(() => import("./hero"));
const NewsLetter = lazy(() => import("./newsLetter"));
const PaymentMethod = lazy(() => import("./paymentMethod"));

export { AutoSearch, CallModal, Counter, Dropdown, Hero, NewsLetter, PaymentMethod };
