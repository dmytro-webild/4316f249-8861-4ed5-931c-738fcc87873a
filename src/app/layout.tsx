import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Fitness Park Sale - Premium Outdoor Equipment Deals',
  description: 'Discover incredible deals on high-quality outdoor fitness park equipment. Transform your community or private space with durable and innovative workout solutions. Limited-time offers!',
  keywords: ["fitness park, outdoor gym, fitness equipment sale, park equipment, outdoor workout, community fitness, gym sale, public park equipment"],
  openGraph: {
    "title": "Fitness Park Sale - Premium Outdoor Equipment Deals",
    "description": "Discover incredible deals on high-quality outdoor fitness park equipment. Transform your community or private space with durable and innovative workout solutions. Limited-time offers!",
    "url": "https://www.fitnessparksale.com",
    "siteName": "Fitness Park Sale",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/side-view-man-with-leg-prothesis-training-outdoors-young-man-standing-ground-holding-his-leg-horizontal-bar-doing-exercises-health-care-sport-activities-people-with-disability-concept_74855-22353.jpg",
        "alt": "Vibrant outdoor fitness park at sunset"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Fitness Park Sale - Premium Outdoor Equipment Deals",
    "description": "Discover incredible deals on high-quality outdoor fitness park equipment. Transform your community or private space with durable and innovative workout solutions. Limited-time offers!",
    "images": [
      "http://img.b2bpic.net/free-photo/side-view-man-with-leg-prothesis-training-outdoors-young-man-standing-ground-holding-his-leg-horizontal-bar-doing-exercises-health-care-sport-activities-people-with-disability-concept_74855-22353.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
