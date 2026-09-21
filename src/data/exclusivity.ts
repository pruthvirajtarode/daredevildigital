export type Niche = {
  name: string;
  taken: boolean;
  na?: boolean;
};

export type Vertical = {
  id: string;
  name: string;
  niches: Niche[];
};

// ============================================
// EXCLUSIVITY DATA
// Developer: To update availability, change "taken" to true when a slot is filled by a client.
// "na" means this niche is outside Daredevil Digital's scope.
// ============================================
export const verticals: Vertical[] = [
  {
    id: "home-services",
    name: "Home Services",
    niches: [
      { name: "Aircon Installation", taken: false },
      { name: "Aircon Servicing & Maintenance", taken: false },
      { name: "Aircon Chemical Wash", taken: false },
      { name: "Aircon Repair", taken: false },
      { name: "Interior Design", taken: false },
      { name: "General Renovation Contractor", taken: false },
      { name: "Carpentry & Custom Furniture", taken: false },
      { name: "Painting Services", taken: false },
      { name: "Flooring & Tiling", taken: false },
      { name: "Electrical Services", taken: false },
      { name: "Plumbing Services", taken: false },
      { name: "Home Cleaning", taken: false },
      { name: "Post Renovation Cleaning", taken: false },
      { name: "Pest Control", taken: false },
      { name: "Movers & Relocation", taken: false },
      { name: "Locksmith Services", taken: false },
      { name: "Home Security / CCTV Installation", taken: false },
      { name: "Curtains & Blinds", taken: false },
      { name: "Waterproofing", taken: false },
      { name: "Roofing & Roof Repair", taken: false }
    ]
  },
  {
    id: "aesthetics-wellness",
    name: "Aesthetics & Wellness",
    niches: [
      { name: "Aesthetics Clinic (Medical)", taken: false },
      { name: "Beauty Salon / Facial", taken: false },
      { name: "Hair Salon", taken: false },
      { name: "Hair Transplant / Restoration", taken: false },
      { name: "Dental Clinic", taken: false },
      { name: "Orthodontics / Invisalign", taken: false },
      { name: "Slimming Centre", taken: false },
      { name: "TCM / Acupuncture", taken: false },
      { name: "Massage / Spa", taken: false },
      { name: "Personal Training / Fitness Coach", taken: false },
      { name: "Gym / Fitness Studio", taken: false },
      { name: "Yoga Studio", taken: false },
      { name: "Pilates Studio", taken: false },
      { name: "Nail Salon", taken: false },
      { name: "Tattoo Studio", taken: false },
      { name: "Laser Eye Surgery Clinic", taken: false }
    ]
  },
  {
    id: "education",
    name: "Education",
    niches: [
      { name: "Academic Tuition Centre", taken: false },
      { name: "Music School", taken: false },
      { name: "Art School / Creative Classes", taken: false },
      { name: "Sports Academy / Coaching", taken: false },
      { name: "Language School (English)", taken: false },
      { name: "Language School (Mandarin / Mother Tongue)", taken: false },
      { name: "Language School (Foreign Language)", taken: false },
      { name: "Enrichment Centre (STEM)", taken: false },
      { name: "Preschool / Childcare", taken: false },
      { name: "Swimming Lessons", taken: false },
      { name: "Dance Academy", taken: false },
      { name: "Coding / Programming School", taken: false },
      { name: "Adult Skills Upgrading", taken: false },
      { name: "Driving School", taken: false }
    ]
  },
  {
    id: "financial-services",
    name: "Financial Services",
    niches: [
      { name: "Life Insurance Advisory", taken: false },
      { name: "Health Insurance Advisory", taken: false },
      { name: "General Insurance", taken: false },
      { name: "Mortgage / Home Loan Advisory", taken: false },
      { name: "Business Loan / SME Financing", taken: false },
      { name: "Personal Loan", taken: false },
      { name: "Investment / Wealth Advisory", taken: false },
      { name: "Accounting & Tax Advisory", taken: false },
      { name: "Bookkeeping Services", taken: false },
      { name: "Corporate Secretarial Services", taken: false },
      { name: "Payroll Services", taken: false },
      { name: "Financial Planning (IFA)", taken: false }
    ]
  },
  {
    id: "legal",
    name: "Legal Services",
    niches: [
      { name: "Family Law / Divorce", taken: false },
      { name: "Conveyancing / Property Law", taken: false },
      { name: "Employment Law", taken: false },
      { name: "Corporate / Commercial Law", taken: false },
      { name: "Wills, Trusts & Estate Planning", taken: false },
      { name: "Criminal Defence", taken: false },
      { name: "Immigration Law", taken: false },
      { name: "Debt Recovery", taken: false }
    ]
  },
  {
    id: "real-estate",
    name: "Real Estate",
    niches: [
      { name: "Residential Property Agent (HDB)", taken: false },
      { name: "Residential Property Agent (Private)", taken: false },
      { name: "New Launch Condo Marketing", taken: false },
      { name: "Commercial Property Agent", taken: false },
      { name: "Property Investment Advisory", taken: false },
      { name: "Rental / Property Management", taken: false },
      { name: "Real Estate Agency (Team)", taken: false }
    ]
  },
  {
    id: "automotive",
    name: "Automotive",
    niches: [
      { name: "New Car Dealership", taken: false },
      { name: "Used Car Dealership", taken: false },
      { name: "Car Grooming / Detailing", taken: false },
      { name: "Car Workshop / Servicing", taken: false },
      { name: "Tinting / PPF / Wrapping", taken: false },
      { name: "COE Renewal / Car Financing", taken: false },
      { name: "Commercial Vehicle / Van Sales", taken: false },
      { name: "EV Charging Installation", taken: false }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare",
    niches: [
      { name: "GP / General Practice Clinic", taken: false },
      { name: "Physiotherapy", taken: false },
      { name: "Chiropractic / Osteopathy", taken: false },
      { name: "Sports Medicine", taken: false },
      { name: "Mental Health / Psychology", taken: false },
      { name: "Podiatry", taken: false },
      { name: "Hearing Care / Audiology", taken: false },
      { name: "Specialist Clinic (Ortho, Cardio, etc.)", taken: false }
    ]
  },
  {
    id: "b2b-services",
    name: "B2B Services",
    niches: [
      { name: "IT Services / Managed Service Provider", taken: false },
      { name: "Cybersecurity", taken: false },
      { name: "HR & Recruitment", taken: false },
      { name: "Corporate Training & L&D", taken: false },
      { name: "Office Design & Fit Out", taken: false },
      { name: "Commercial Cleaning", taken: false },
      { name: "Business Coaching / Consultancy", taken: false },
      { name: "Digital Marketing Agency (non competing)", taken: false },
      { name: "Printing & Branding", taken: false },
      { name: "Logistics & Courier (B2B)", taken: false }
    ]
  },
  {
    id: "fnb",
    name: "Food & Beverage",
    niches: [
      { name: "Catering Services (Corporate)", taken: false },
      { name: "Catering Services (Events / Weddings)", taken: false },
      { name: "Private Dining / Home Chef", taken: false },
      { name: "Cloud Kitchen / Delivery Brand", taken: false },
      { name: "Baking / Pastry (B2C orders)", taken: false }
    ]
  },
  {
    id: "events-lifestyle",
    name: "Events & Lifestyle",
    niches: [
      { name: "Wedding Photography", taken: false },
      { name: "Wedding Videography", taken: false },
      { name: "Wedding Planning", taken: false },
      { name: "Event Management", taken: false },
      { name: "Photography Studio", taken: false },
      { name: "Videography / Corporate Production", taken: false },
      { name: "Travel Agency", taken: false },
      { name: "Pet Grooming", taken: false },
      { name: "Pet Boarding / Daycare", taken: false },
      { name: "Childcare / Babysitting Platform", taken: false }
    ]
  }
];
