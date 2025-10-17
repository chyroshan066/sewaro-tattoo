interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface PlaceWithRating {
  "@type": "Place";
  name: string;
  address: PostalAddress;
  telephone: string | string[];
  geo: GeoCoordinates;
  aggregateRating?: AggregateRating; 
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  ratingCount: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface EntryPoint {
  "@type": "EntryPoint";
  urlTemplate: string;
}

interface Appointment {
  "@type": "Appointment";
  name: string;
}

interface ScheduleAction {
  "@type": "ScheduleAction";
  target: EntryPoint;
  result: Appointment;
}

interface TattooService {
  "@type": "Service";
  name: string;
  description: string;
  serviceType: string;
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  item: TattooService;
}

interface TattooStudioStructuredData {
  "@context": "https://schema.org";
  "@type": "TattooParlor";
  name: string;
  description: string;
  url: string | undefined;
  email: string;
  openingHours: string;
  priceRange: string;
  sameAs: string[];
  potentialAction: ScheduleAction;
  foundingDate: string;
  founder: {
    "@type": "Person";
    name: string;
  };
  location: PlaceWithRating[];
}

interface TattooServicesStructuredData {
  "@context": "https://schema.org";
  "@type": "TattooParlor";
  name: string;
  description: string;
  availableService: TattooService[];
}

interface ServicesStructuredData {
  "@context": "https://schema.org";
  "@type": "ItemList";
  name: string;
  description: string;
  itemListElement: ListItem[];
}

export const sewaroTattooStructuredData: TattooStudioStructuredData = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Sewaro Tattoo",
  "description": "Professional tattoo studio in Nepal since 2001 specializing in custom tattoos, traditional artwork, modern tattoo styles, piercing services, and tattoo cover-ups. Expert tattoo artists serving Birtamode, Damak, Itahari, and Lalitpur.",
  "url": process.env.NEXT_PUBLIC_BASE_URL,
  
  "email": "sewaro.tattoo2001@gmail.com",
  "openingHours": "Mo-Su 10:00-19:00",
  "priceRange": "$$",
  
  "sameAs": [
    "https://www.facebook.com/sagarlimbu1983",
    "https://www.instagram.com/sewaro.tattoo/",
    "https://www.tiktok.com/@sewarotattoo"
  ],
  
  "potentialAction": {
    "@type": "ScheduleAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${process.env.NEXT_PUBLIC_BASE_URL}/#contact`
    },
    "result": {
      "@type": "Appointment",
      "name": "Tattoo Consultation"
    }
  },
  
  "foundingDate": "2001",
  "founder": {
    "@type": "Person",
    "name": "Sagar Limbu"
  },

  "location": [
    {
      "@type": "Place",
      "name": "Sewaro Tattoo - Birtamode",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mukti Chowk",
        "addressLocality": "Birtamode",
        "addressRegion": "Jhapa",
        "postalCode": "57204",
        "addressCountry": "NP"
      },
      "telephone": "+977-9702037757",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.64341",
        "longitude": "87.99132"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "ratingCount": "4"
      }
    },
    {
      "@type": "Place",
      "name": "Sewaro Tattoo - Damak",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Near Taxi Stand",
        "addressLocality": "Damak",
        "addressRegion": "Jhapa",
        "postalCode": "57217",
        "addressCountry": "NP"
      },
      "telephone": "+977-9824949006",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.65933",
        "longitude": "87.69877"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "3.9",
        "ratingCount": "10"
      }
    },
    {
      "@type": "Place",
      "name": "Sewaro Tattoo - Itahari",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Biratnagar Road, Opposite Radha Krishna Mandir",
        "addressLocality": "Itahari",
        "addressRegion": "Sunsari",
        "postalCode": "56705",
        "addressCountry": "NP"
      },
      "telephone": [
        "+977-9701723788", 
        "+977-9841546533"
    ],
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "26.65979",
        "longitude": "87.27498"
      }
    },
    {
      "@type": "Place",
      "name": "Sewaro Tattoo - Lalitpur",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jawalakhel, Under SBI Bank",
        "addressLocality": "Lalitpur",
        "addressRegion": "Bagmati",
        "postalCode": "44700",
        "addressCountry": "NP"
      },
      "telephone": "+977-9825910833",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "27.67346",
        "longitude": "85.31438"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "39"
      }
    }
  ]
};

export const sewaroTattooServicesStructuredData: TattooServicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  "name": "Sewaro Tattoo",
  "description": "Comprehensive tattoo and body art services including custom designs, traditional tattoos, modern styles, piercing, and tattoo cover-up work",
  
  "availableService": [
    {
      "@type": "Service",
      "name": "Custom Tattoo Design",
      "description": "Personalized tattoo artwork created specifically for each client based on their unique ideas and preferences",
      "serviceType": "Custom Tattoo Art"
    },
    {
      "@type": "Service",
      "name": "Traditional Tattoo",
      "description": "Classic tattoo styles including American traditional, Japanese traditional, and cultural tattoo artwork",
      "serviceType": "Traditional Tattoo"
    },
    {
      "@type": "Service",
      "name": "Realism Tattoo",
      "description": "Photorealistic tattoo artwork including portraits, nature scenes, and detailed realistic designs",
      "serviceType": "Realism Tattoo"
    },
    {
      "@type": "Service",
      "name": "Geometric Tattoo",
      "description": "Precision geometric patterns, mandalas, and symmetrical tattoo designs with clean lines",
      "serviceType": "Geometric Tattoo"
    },
    {
      "@type": "Service",
      "name": "Blackwork Tattoo",
      "description": "Bold black ink tattoos including tribal designs, blackout work, and intricate black ink patterns",
      "serviceType": "Blackwork Tattoo"
    },
    {
      "@type": "Service",
      "name": "Color Tattoo",
      "description": "Vibrant color tattoos using high-quality ink for lasting brightness and saturation",
      "serviceType": "Color Tattoo"
    },
    {
      "@type": "Service",
      "name": "Tattoo Cover-up",
      "description": "Professional cover-up work to transform or conceal existing tattoos with new creative designs",
      "serviceType": "Tattoo Cover-up"
    },
    {
      "@type": "Service",
      "name": "Body Piercing",
      "description": "Professional body piercing services with strict hygiene standards and quality jewelry",
      "serviceType": "Body Piercing"
    },
    {
      "@type": "Service",
      "name": "Tattoo Aftercare",
      "description": "Professional guidance and products for proper tattoo healing and long-term maintenance",
      "serviceType": "Aftercare Service"
    }
  ]
};

export const sewaroTattooSpecialtiesStructuredData: ServicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Tattoo and Body Art Services",
  "description": "Comprehensive tattoo styles and body art services organized by specialty areas",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Custom Tattoo Artistry",
        "description": "Personalized tattoo designs created from client ideas and concepts",
        "serviceType": "Custom Design"
      }
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Traditional Tattoo Styles",
        "description": "Classic tattoo traditions including cultural and heritage tattoo artwork",
        "serviceType": "Traditional Tattoo"
      }
    },
    {
      "@type": "ListItem",
      "position": 3, 
      "item": {
        "@type": "Service",
        "name": "Modern Tattoo Techniques",
        "description": "Contemporary tattoo styles including realism, geometric, and watercolor",
        "serviceType": "Modern Tattoo"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service", 
        "name": "Tattoo Correction Services",
        "description": "Professional cover-up work and tattoo enhancement services",
        "serviceType": "Tattoo Correction"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Service",
        "name": "Body Piercing", 
        "description": "Safe and professional body piercing with quality jewelry",
        "serviceType": "Piercing Service"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Service",
        "name": "Tattoo Aftercare",
        "description": "Complete aftercare guidance for optimal tattoo healing",
        "serviceType": "Aftercare Support"
      }
    }
  ]
};