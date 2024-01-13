import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { imag,bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
import appointment  from "../assets/icons/appointment.png";
import user from '../assets/icons/user.png'
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: imag,
        bigShoe: imag,
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2,
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: imag,
        name: "For everyday look",
        price: "Natural",
    },
    {
        imgURL: shoe5,
        name: "Fabulous but simple look",
        price: "CLASSIC",
    },
    {
        imgURL: shoe6,
        name: "Special occasions ",
        price: "GLAMOUR",
    },
    {
        imgURL: shoe7,
        name: "Dive into the art world",
        price: "ARTISTIC",
    },
];

export const services = [
    {
        imgURL: appointment,
        label: "Effortless booking",
        subtext: "Securely book your preferred makeup artist with just a few taps. Say goodbye to back-and-forth messages an phone calls"
    },
    {
        imgURL: user,
        label: "Comprehensive Artist profiles",
        subtext: "Get to know your makeup artist through detailed profiles, showcasing their previos work and services offered."
    },
    {
        imgURL: shieldTick,
        label: "Secure payments",
        subtext: "Rest easy with our secure payment system. Your payment is held until you confirm that the service has been delivered."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "Finding and booking makeup artist has never been easy. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
