import { Activity, Brain, HeartPulse, ShieldPlus, Stethoscope, Syringe } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  icon: LucideIcon;
  image: string;
  sideImages: string[];
  featurePoints: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "free-checkup",
    title: "Free Checkup",
    description: "Routine assessments, preventive screening, and early guidance for better long-term health.",
    longDescription: [
      "Our free checkup service is designed to help patients understand their health baseline through screening, consultation, and preventive guidance. It supports early detection and reduces delays in follow-up care.",
      "Each visit is structured around accessible evaluation, practical recommendations, and coordinated next steps when additional specialty care is needed.",
    ],
    icon: Stethoscope,
    image: "/images/group-183.png",
    sideImages: ["/images/group-186.png", "/images/group-187.png"],
    featurePoints: [
      "A passion for healing",
      "5-star care",
      "All our best",
      "Believe in us",
      "A legacy of excellence",
      "Always caring",
    ],
  },
  {
    slug: "cardiogram",
    title: "Cardiogram",
    description: "Heart rhythm evaluation, cardiovascular monitoring, and specialist-led interpretation.",
    longDescription: [
      "Our cardiogram service focuses on accurate heart assessment supported by experienced clinicians and dependable diagnostic workflows. Patients receive timely evaluation, clear interpretation, and guidance for next-step care.",
      "From screening to follow-up, the service is built to make cardiovascular assessment feel structured, informed, and easy to navigate.",
    ],
    icon: Activity,
    image: "/images/group-183.png",
    sideImages: ["/images/group-186.png", "/images/group-187.png"],
    featurePoints: [
      "Cardiac screening",
      "Specialist review",
      "Clear reporting",
      "Preventive guidance",
      "Follow-up planning",
      "Always caring",
    ],
  },
  {
    slug: "dna-testing",
    title: "DNA Testing",
    description: "Modern lab support for screening pathways, targeted analysis, and clinical guidance.",
    longDescription: [
      "Our DNA testing service supports structured diagnostics with clear workflows for sample processing, interpretation, and referral. It is suited to preventive investigation and deeper clinical assessment where indicated.",
      "The experience emphasizes clarity, privacy, and coordination so patients understand why testing is being done and what the results may support.",
    ],
    icon: Brain,
    image: "/images/group-183.png",
    sideImages: ["/images/group-186.png", "/images/group-187.png"],
    featurePoints: [
      "Advanced diagnostics",
      "Clinical coordination",
      "Clear explanation",
      "Accurate processing",
      "Modern workflow",
      "Trusted care",
    ],
  },
  {
    slug: "blood-bank",
    title: "Blood Bank",
    description: "Reliable blood support services with organized supply, screening, and urgent coordination.",
    longDescription: [
      "The blood bank service is managed to support safety, availability, and coordination for planned and urgent care needs. Quality control and streamlined handling reduce delays during critical treatment pathways.",
      "Our teams work across departments to make blood support dependable, efficient, and aligned with patient safety expectations.",
    ],
    icon: Syringe,
    image: "/images/group-183.png",
    sideImages: ["/images/group-186.png", "/images/group-187.png"],
    featurePoints: [
      "Safe handling",
      "Urgent support",
      "Reliable availability",
      "Cross-team coordination",
      "Efficient process",
      "Patient safety",
    ],
  },
  {
    slug: "neurology",
    title: "Neurology",
    description: "Clinical evaluation and personalized treatment planning for neurological conditions.",
    longDescription: [
      "Neurology services provide careful assessment for symptoms affecting the brain, nerves, and functional movement. Consultations focus on precise evaluation, coordinated testing, and practical treatment planning.",
      "Our approach combines specialist insight with patient-friendly communication so care feels understandable and well supported.",
    ],
    icon: HeartPulse,
    image: "/images/group-183.png",
    sideImages: ["/images/group-186.png", "/images/group-187.png"],
    featurePoints: [
      "Specialist evaluation",
      "Coordinated testing",
      "Treatment planning",
      "Clear communication",
      "Patient support",
      "Long-term care",
    ],
  },
  {
    slug: "oncology",
    title: "Oncology",
    description: "Structured oncology support pathways with coordinated treatment and follow-up care.",
    longDescription: [
      "Our oncology services are built around coordination, dignity, and continuity. Patients benefit from organized consultation, treatment planning, and monitoring across every stage of care.",
      "The service emphasizes interdisciplinary collaboration so every decision is supported by a broader clinical perspective and clear communication.",
    ],
    icon: ShieldPlus,
    image: "/images/group-183.png",
    sideImages: ["/images/group-186.png", "/images/group-187.png"],
    featurePoints: [
      "Coordinated treatment",
      "Multidisciplinary review",
      "Supportive follow-up",
      "Care continuity",
      "Patient dignity",
      "Trusted outcomes",
    ],
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);
