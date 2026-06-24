import {
  Building2,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Map,
  MapPin,
  MapPinned,
  ShieldCheck,
  Trees,
  TrendingUp,
  Youtube,
  type LucideIcon,
} from "lucide-react";

const unsplash = (id: string, width = 1800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;

export const media = {
  hero: unsplash("photo-1500382017468-9049fed747ef", 2400),
  philosophy: unsplash("photo-1441974231531-c6227db76b6e", 2200),
  lifestyleVideo: unsplash("photo-1470770841072-f978cf4d019e", 1800),
  trail: unsplash("photo-1513836279014-a89f7a76ae86", 1200),
  cottage: unsplash("photo-1600585154340-be6161a56a0c", 1200),
  community: unsplash("photo-1500534314209-a25ddb2bd429", 1200),
  masterPlan: unsplash("photo-1500382017468-9049fed747ef", 1800),
  location: unsplash("photo-1506744038136-46273834b3fb", 1800),
  galleryA: unsplash("photo-1500382017468-9049fed747ef", 1800),
  galleryB: unsplash("photo-1600585154340-be6161a56a0c", 1200),
  galleryC: unsplash("photo-1513836279014-a89f7a76ae86", 1200),
  galleryD: unsplash("photo-1441974231531-c6227db76b6e", 1800),
  galleryE: unsplash("photo-1500534314209-a25ddb2bd429", 1400),
  galleryF: unsplash("photo-1600566753190-17f0baa2a6c3", 1400),
};

export const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Lifestyle", href: "#lifestyle", id: "lifestyle" },
  { label: "Amenities", href: "#philosophy", id: "philosophy" },
  { label: "Master Plan", href: "#master-plan", id: "master-plan" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Investment", href: "#investment", id: "investment" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export type Feature = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const masterPlanCards: Feature[] = [
  {
    number: "01",
    title: "Open Green Spaces",
    description: "More room to breathe, walk and reconnect with nature.",
    icon: Trees,
  },
  {
    number: "02",
    title: "Road Network",
    description: "Wide internal roads designed for smooth circulation and accessibility.",
    icon: Map,
  },
  {
    number: "03",
    title: "Community Amenities",
    description: "Shared spaces that encourage gathering, recreation and wellness.",
    icon: Building2,
  },
  {
    number: "04",
    title: "Future Growth",
    description: "A location planned with long-term appreciation and sustainable development in mind.",
    icon: TrendingUp,
  },
];

export const investmentCards: Feature[] = [
  {
    number: "01",
    title: "Strategic Location",
    description: "Well connected to major highways, nearby cities and everyday conveniences.",
    icon: MapPinned,
  },
  {
    number: "02",
    title: "Long-Term Value",
    description: "Designed with future growth and sustainable planning in mind.",
    icon: TrendingUp,
  },
  {
    number: "03",
    title: "Secure Community",
    description: "Premium infrastructure and gated planning provide confidence for generations.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Nature First",
    description: "Large open landscapes preserve quality of life while protecting future value.",
    icon: Trees,
  },
];

export const locationStats = [
  { value: "35 min", label: "Airport" },
  { value: "25 min", label: "City Center" },
  { value: "28 min", label: "Railway Station" },
  { value: "12 min", label: "Highway" },
];

export const galleryItems = [
  { src: media.galleryA, caption: "Morning Light", span: "lg:col-span-8", aspect: "aspect-video" },
  { src: media.galleryB, caption: "Weekend Retreats", span: "lg:col-span-4", aspect: "aspect-[4/5]" },
  { src: media.galleryC, caption: "Nature Trails", span: "lg:col-span-4", aspect: "aspect-[4/5]" },
  { src: media.galleryD, caption: "Tree-lined Avenues", span: "lg:col-span-8", aspect: "aspect-video" },
  { src: media.galleryE, caption: "Community Spaces", span: "lg:col-span-6", aspect: "aspect-square" },
  { src: media.galleryF, caption: "Open Landscapes", span: "lg:col-span-6", aspect: "aspect-square" },
];

export const galleryHighlights = [
  { title: "Nature", description: "Tree-lined roads, gardens and breathable open spaces.", icon: Trees },
  { title: "Community", description: "Shared moments shaped by thoughtful planning.", icon: Home },
  { title: "Wellness", description: "Morning walks, slower weekends and fresh air.", icon: ShieldCheck },
  { title: "Investment", description: "A destination planned for long-term confidence.", icon: TrendingUp },
];

export const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
  { label: "YouTube", icon: Youtube },
];

export const contactItems = [
  { label: "+91 98765 43210", detail: "Sales Enquiry", icon: MapPin },
  { label: "hello@saanidhiyagreens.com", detail: "Email", icon: MapPin },
  { label: "Vadodara, Gujarat", detail: "Sales Office", icon: MapPin },
  { label: "10 AM to 7 PM", detail: "Business Hours", icon: MapPin },
  { label: "Open in Google Maps", detail: "Directions", icon: MapPin },
  { label: "Message on WhatsApp", detail: "Instant Connect", icon: MapPin },
];
