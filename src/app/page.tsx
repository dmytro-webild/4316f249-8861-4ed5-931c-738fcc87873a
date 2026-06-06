"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import { Award, Building, Calendar, Crown, Mail, Rocket, Sparkles, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="mediumSizeLargeTitles"
        background="noise"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Features",
          id: "#features",
        },
        {
          name: "Products",
          id: "#products",
        },
        {
          name: "Pricing",
          id: "#pricing",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQ",
          id: "#faq",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="http://img.b2bpic.net/free-photo/christmas-fitness-weights-training-gift_23-2149564591.jpg"
      logoAlt="Fitness Park Sale Logo"
      brandName="Fitness Park Sale"
      button={{
        text: "Get a Quote",
        href: "#contact",
      }}
    />
  </div>

  <div id="home" data-section="home">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "rotated-rays-static-grid",
      }}
      title="Transform Your Space: Fitness Park Sale!"
      description="Unbeatable deals on high-quality outdoor fitness equipment. Create the ultimate workout environment for your community or private space."
      buttons={[
        {
          text: "Explore Deals",
          href: "#products",
        },
        {
          text: "Get a Custom Quote",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      carouselItems={[
        {
          id: "hero-carousel-1",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-with-leg-prothesis-training-outdoors-young-man-standing-ground-holding-his-leg-horizontal-bar-doing-exercises-health-care-sport-activities-people-with-disability-concept_74855-22353.jpg",
          imageAlt: "Vibrant outdoor fitness park at sunset",
        },
        {
          id: "hero-carousel-2",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-people-training-together_23-2150912355.jpg",
          imageAlt: "Group exercising in an outdoor fitness park",
        },
        {
          id: "hero-carousel-3",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-medical-mask-disinfecting-gym-equipment_23-2148769918.jpg",
          imageAlt: "Modern, colorful fitness park equipment",
        },
        {
          id: "hero-carousel-4",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-african-fitness-woman-smiling-holding-sporting-mat-home_171337-8008.jpg",
          imageAlt: "Person doing pull-ups in an outdoor fitness park",
        },
        {
          id: "hero-carousel-5",
          imageSrc: "http://img.b2bpic.net/free-photo/student-hanging-from-green-bar_1098-3775.jpg",
          imageAlt: "Kids playing in a family-friendly fitness park",
        },
        {
          id: "hero-carousel-6",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-smiling-girl-with-dumbbells-workout-outdoor-park_8353-8153.jpg",
          imageAlt: "Aerial view of an urban fitness park",
        },
      ]}
      autoPlay={true}
      autoPlayInterval={4000}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={true}
      title="About Our Fitness Park Sale"
      description={[
        "We are thrilled to bring you an exclusive sale on the finest outdoor fitness park equipment. Designed for durability, safety, and maximum workout versatility, our equipment is perfect for public parks, schools, residential complexes, and private facilities.",
        "Our mission is to make fitness accessible and enjoyable for everyone. With our current sale, you have the unique opportunity to enhance your space with state-of-the-art gear that withstands the elements and provides a comprehensive workout experience for all ages and fitness levels.",
      ]}
      buttons={[
        {
          text: "Learn More",
          href: "#features",
        },
      ]}
      buttonAnimation="slide-up"
      showBorder={false}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Built to Last",
          description: "Constructed from heavy-duty, weather-resistant materials to ensure longevity and minimal maintenance.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-sporty-young-woman-doing-exercise-gym_1301-6635.jpg",
          imageAlt: "Durable fitness equipment in a park",
        },
        {
          title: "Innovative Design",
          description: "Ergonomic and user-friendly designs that cater to a wide range of exercises and fitness levels.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-stands-outdoor-gym-with-phone_140725-16401.jpg",
          imageAlt: "Innovative fitness park design",
        },
        {
          title: "Community Focused",
          description: "Promote health and social interaction with equipment suitable for individual and group activities.",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-happy-sporty-women-outdoors_23-2149161236.jpg",
          imageAlt: "Community event at a fitness park",
        },
      ]}
      title="Key Features of Our Fitness Parks"
      description="Discover what makes our fitness park equipment the best choice for your outdoor exercise needs."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "product-1",
          name: "Multi-Station Pull-Up Bar",
          price: "$1,999",
          imageSrc: "http://img.b2bpic.net/free-photo/back-view-muscular-topless-male-athlete-showing-calisthenic-moves-hanging-pullbar_346278-1570.jpg",
          imageAlt: "Outdoor pull-up bar station",
        },
        {
          id: "product-2",
          name: "Full Body Workout Unit",
          price: "$4,500",
          imageSrc: "http://img.b2bpic.net/free-photo/resting-woman-looking-away_23-2147789618.jpg",
          imageAlt: "Multi-station outdoor gym equipment",
        },
        {
          id: "product-3",
          name: "Outdoor Elliptical",
          price: "$2,200",
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-doing-outdoors-excercises_23-2148197280.jpg",
          imageAlt: "Outdoor elliptical trainer",
        },
        {
          id: "product-4",
          name: "Leg Press Machine",
          price: "$2,800",
          imageSrc: "http://img.b2bpic.net/free-photo/muscular-woman-walking-stadium-morning_7502-8221.jpg",
          imageAlt: "Outdoor leg press machine",
        },
        {
          id: "product-5",
          name: "Ab Crunch Station",
          price: "$1,500",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-woman-exercising_23-2148771152.jpg",
          imageAlt: "Outdoor ab crunch station",
        },
        {
          id: "product-6",
          name: "Outdoor Spin Bike",
          price: "$1,800",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-trains-elliptical-smiles-mirror-wellness-mindset_169016-71208.jpg",
          imageAlt: "Outdoor spin bike",
        },
      ]}
      title="Our Best-Selling Fitness Park Equipment"
      description="Discover robust and engaging equipment on sale, perfect for any outdoor setting."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "starter",
          badge: "Value Pack",
          badgeIcon: Sparkles,
          price: "$7,999",
          subtitle: "Essential Equipment for Small Spaces",
          buttons: [
            {
              text: "Get Started",
              href: "#contact",
            },
          ],
          features: [
            "2-Piece Setup",
            "Basic Cardio & Strength",
            "Weather-Resistant Coating",
            "Installation Guide",
          ],
        },
        {
          id: "community",
          badge: "Most Popular",
          badgeIcon: Crown,
          price: "$14,999",
          subtitle: "Ideal for Community & Residential Parks",
          buttons: [
            {
              text: "Choose Plan",
              href: "#contact",
            },
          ],
          features: [
            "5-Piece Setup",
            "Comprehensive Workout Stations",
            "Advanced Safety Features",
            "Professional Installation Included",
          ],
        },
        {
          id: "premium",
          badge: "Pro Level",
          badgeIcon: Rocket,
          price: "$24,999",
          subtitle: "The Ultimate Fitness Park Experience",
          buttons: [
            {
              text: "Inquire Now",
              href: "#contact",
            },
          ],
          features: [
            "10+ Piece Setup",
            "Full Range of Equipment",
            "Custom Design Consultation",
            "Extended Warranty & Support",
          ],
        },
      ]}
      title="Flexible Packages for Every Need"
      description="Select the perfect fitness park package to meet your budget and community requirements."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardOne
      animationType="depth-3d"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "100+",
          title: "Parks Installed",
          description: "Transforming communities with accessible fitness.",
          icon: Building,
        },
        {
          id: "m2",
          value: "15K+",
          title: "Happy Users",
          description: "Thousands enjoy healthier lifestyles daily.",
          icon: Users,
        },
        {
          id: "m3",
          value: "10",
          title: "Years Experience",
          description: "A decade of excellence in outdoor fitness.",
          icon: Calendar,
        },
        {
          id: "m4",
          value: "98%",
          title: "Satisfaction Rate",
          description: "Our clients love their new fitness parks.",
          icon: Award,
        },
      ]}
      title="Impactful Statistics"
      description="See the numbers behind our success and community impact."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Sarah J.",
          handle: "@sarah_j_fit",
          testimonial: "Our community park has been revitalized! The equipment from Fitness Park Sale is top-notch and everyone loves it. Installation was seamless.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/crazy-sports-man-angry-expression_1194-5240.jpg",
          imageAlt: "Sarah J. avatar",
        },
        {
          id: "t2",
          name: "Michael Chen",
          handle: "@mchen_wellness",
          testimonial: "Incredible quality and variety. This sale allowed us to get a complete outdoor gym for our apartment complex far below budget. Highly recommend!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/cheerful-young-african-woman-walking_171337-13701.jpg",
          imageAlt: "Michael Chen avatar",
        },
        {
          id: "t3",
          name: "Emily R.",
          handle: "@emily_active",
          testimonial: "The best investment for our school's playground. The kids and teachers are more active, and the equipment is safe and sturdy.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/active-senior-woman-smiling-after-workout_23-2151997777.jpg",
          imageAlt: "Emily R. avatar",
        },
        {
          id: "t4",
          name: "David K.",
          handle: "@davek_strong",
          testimonial: "Fantastic customer service and amazing products. Our new fitness park is the highlight of our neighborhood. Couldn't be happier!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-woman-sitting-grass_23-2147711352.jpg",
          imageAlt: "David K. avatar",
        },
        {
          id: "t5",
          name: "Jessica & Tom",
          handle: "@jess_tom_fit",
          testimonial: "We bought several pieces for our backyard gym. The quality is commercial-grade, and the sale price was unbeatable. Worth every penny!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-woman-park_1157-5271.jpg",
          imageAlt: "Jessica & Tom avatars",
        },
      ]}
      showRating={true}
      title="What Our Customers Say"
      description="Hear from satisfied clients who have transformed their spaces with our fitness park equipment."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "What types of equipment are included in the sale?",
          content: "Our sale includes a wide range of outdoor fitness equipment such as pull-up bars, ellipticals, leg presses, ab crunch stations, spin bikes, and multi-station workout units. Check our products section for a full list!",
        },
        {
          id: "q2",
          title: "Is installation included with purchase?",
          content: "Installation options vary by package. Our Community and Premium packages typically include professional installation. For Starter packages, a detailed installation guide is provided, with optional installation services available for an additional fee.",
        },
        {
          id: "q3",
          title: "What is the warranty on your equipment?",
          content: "All our fitness park equipment comes with a comprehensive 5-year warranty on structural components and a 1-year warranty on moving parts, ensuring long-term durability and peace of mind.",
        },
        {
          id: "q4",
          title: "Do you offer custom fitness park designs?",
          content: "Yes, for our Premium package clients, we offer a custom design consultation to help you create a fitness park layout perfectly suited to your space and requirements. Contact us to learn more!",
        },
        {
          id: "q5",
          title: "How long will the sale last?",
          content: "This is a limited-time offer! We recommend securing your equipment soon as popular items sell out quickly. The end date of the sale will be announced on our website and social media channels.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find quick answers to common questions about our fitness park equipment and current sale."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "rotated-rays-static",
      }}
      tag="Get in Touch"
      title="Ready to Build Your Dream Fitness Park?"
      description="Our team is here to help you select the perfect equipment and take advantage of our exclusive sale offers. Fill out the form below or reach out to us directly."
      tagIcon={Mail}
      imageSrc="http://img.b2bpic.net/free-photo/female-friends-wearing-sportswear_273609-15054.jpg"
      imageAlt="Aerial view of a modern fitness park"
      mediaAnimation="opacity"
      mediaPosition="right"
      inputPlaceholder="Enter your email"
      buttonText="Send Inquiry"
      termsText="By clicking Send Inquiry you're confirming that you agree with our Terms and Conditions and Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/dancer-doing-elegant-performing-art_23-2149144290.jpg"
      imageAlt="Fitness park at sunset"
      logoText="Fitness Park Sale"
      columns={[
        {
          title: "Products",
          items: [
            {
              label: "Pull-Up Bars",
              href: "#products",
            },
            {
              label: "Multi-Stations",
              href: "#products",
            },
            {
              label: "Cardio Equipment",
              href: "#products",
            },
            {
              label: "Strength Machines",
              href: "#products",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Features",
              href: "#features",
            },
            {
              label: "Testimonials",
              href: "#testimonials",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "FAQ",
              href: "#faq",
            },
            {
              label: "Warranty",
              href: "#",
            },
            {
              label: "Installation Guides",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Fitness Park Sale. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
