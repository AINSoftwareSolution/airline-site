import { FormValues } from "./types";


export const languageItems = [
  { label: "Russian", link: "#" },
  { label: "French", link: "#" },
];

export const currencyItems = [
  { label: "USD", link: "#" },
  { label: "EUR", link: "#" },
];

export const userItems = [
  { label: "Sign in", link: "#" },
  { label: "Register", link: "#" },
];

export const initialValues = (isSearch: boolean): FormValues => ({
  selectedTab: 'One Way',
  departFrom: '',
  arrivalTo: '',
  arrivalDate: '',
  travelers: {
      adults: 1,
      children: 0,
      infants: 0
  },
  stop_mode: false,
  class_mode: false,
  sectors: [{ id: 1, departFrom: '', arrivalTo: '', departureDate: '' }],
  name:'',
  email:'',
  phone:''
});

export const searchOption = [
  "San Francisco",
  "New York",
  "Seattle",
  "Los Angeles",
  "Chicago",
];

export const contactInitialValues ={
 name:'',
 email:'',
 phone:'',
 message:''
}

export const landingcontactInitialValues ={
  name:'',
  email:'',
  phone:'',
 }


export const reviewsData = [
  {
    name: "Vicente Wolf",
    rating: 4.5,
    review: "It was really easy to book my flight with reservationkart Flight Services! The website was easy to use, and I quickly located some excellent discounts. Customer service was nice and responsive the entire time."
  },
  {
    name: "Patricia Ferris",
    rating: 4.5,
    review: "The reservationkart provides outstanding services at the best possible rates. Excellent experiences without the high cost, ensuring that your travels are both economical and pleasurable. Highly recommended."
  },
  {
    name: "Steven Wills",
    rating: 5,
    review: "I highly recommend reservationkart for their outstanding service at unbeatable prices. They offer exceptional value with their efficient and friendly customer support. Great choice for budget-conscious travelers seeking the best service."
  }
];

export const faqData = [
  {
    question: 'Can I change my flight after booking?',
    answer: 'Yes, our agents can help you with flight changes, subject to airline policies and availability.',
  },
  {
    question: 'Are there any additional fees for booking through the call center?',
    answer: 'No, we do not charge any additional fees for booking through our call center.',
  },
  {
    question: 'What if I need help outside of regular business hours?',
    answer: 'Our call center operates 24/7, so you can get assistance anytime, day or night.',
  },
];
