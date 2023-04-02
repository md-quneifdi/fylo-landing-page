import access from "./assets/images/icon-access-anywhere.svg";
import security from "./assets/images/icon-security.svg";
import realTime from "./assets/images/icon-collaboration.svg";
import store from "./assets/images/icon-any-file.svg";
import avatar1 from "./assets/images/profile-1.jpg";
import avatar2 from "./assets/images/profile-2.jpg";
import avatar3 from "./assets/images/profile-3.jpg";
const content = [
  {
    id: 0,
    img: access,
    tilte: " Access your files, anywhere",
    text: `The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere.`,
  },
  {
    id: 1,
    img: security,
    tilte: " Security you can trust",
    text: `2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.`,
  },
  {
    id: 2,
    img: realTime,
    tilte: "Real-time collaboration",
    text: ` Securely share files and folders with friends, family and colleagues for live collaboration. 
  No email attachments required.`,
  },
  {
    id: 3,
    img: store,
    tilte: "Store any type of file",
    text: ` Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.`,
  },
];

export default content;

export const testimonials = [
  {
    id: 0,
    text: ` Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.`,
    title: "Satish Patel",
    subTitle: "Founder & CEO, Huddle",
    avatar: avatar1,
  },
  {
    id: 1,
    text: ` Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.`,
    title: "Bruce McKenzie",
    subTitle: "Founder & CEO, Huddle",
    avatar: avatar2,
  },
  {
    id: 2,
    text: ` Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
  become a well-oiled collaboration machine.`,
    title: "Iva Boyd",
    subTitle: "Founder & CEO, Huddle",
    avatar: avatar3,
  },
];
