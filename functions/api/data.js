// Backend Data Source for IEEE Student Branch MBITS Website Content
// Version-controlled JSON structure with easy migration path to Cloudflare KV or D1

export const faqsData = [
  {
    id: "ieee-membership-benefits",
    question: "What is IEEE and why should I join?",
    answer: "IEEE is the world's largest technical professional organization dedicated to advancing technology for humanity. By joining, students gain access to technical research, networking opportunities, career resources, professional communities, and technical publications.",
    order: 1,
    published: true
  },
  {
    id: "ieee-how-to-join",
    question: "How can I become a member of IEEE MBITS Student Branch?",
    answer: "Students from MBITS can join through the official membership registration process. Members gain access to IEEE MBITS events, workshops, technical chapters, mentoring, and global IEEE resources.",
    order: 2,
    published: true
  },
  {
    id: "ieee-activities-events",
    question: "What activities and events do you organize?",
    answer: "IEEE SB MBITS organizes technical workshops, guest lectures, hackathons, research activities, networking events, innovation programs, competitions, and entrepreneurship initiatives.",
    order: 3,
    published: true
  },
  {
    id: "ieee-membership-fees",
    question: "Are there any membership fees?",
    answer: "IEEE Student membership has a nominal annual fee and provides access to IEEE resources such as IEEE Xplore, career guidance, technical communities, and student benefits. Current dues must be verified against the official IEEE Membership Dues Portal.",
    order: 4,
    published: true
  },
  {
    id: "ieee-research-opportunities",
    question: "Can I participate in research projects?",
    answer: "Yes. Students can participate in research activities with faculty and industry partners, contribute to technical publications, and present their work at IEEE conferences and events.",
    order: 5,
    published: true
  }
];

export const locationData = {
  organizationName: "IEEE Student Branch MBITS",
  institutionName: "Mar Baselios Institute of Technology and Science",
  address: {
    street: "Nellimattom P.O.",
    locality: "Kothamangalam",
    region: "Kerala",
    country: "India",
    postalCode: "686693"
  },
  email: "ieeesbmbits@gmail.com",
  website: "https://ieeembits.com",
  latitude: 10.0581342,
  longitude: 76.6711249,
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.499029664069!2d76.6711249!3d10.058134200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e8c21773f2f9%3A0xf8cc8247d7da7a9c!2sMar%20Baselios%20Institute%20of%20Technology%20and%20Science!5e0!3m2!1sen!2sin!4v1753464726332!5m2!1sen!2sin",
  directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=10.0581342,76.6711249",
  chapters: [
    "IEEE Signal Processing Society (SPS)",
    "IEEE Computer Society (CS)",
    "IEEE Women in Engineering (WIE)",
    "IEEE Circuits and Systems Society (CASS)",
    "IEEE Sensors Council"
  ],
  socialLinks: {
    linkedin: "https://www.linkedin.com/company/ieee-student-branch-mbits",
    instagram: "https://www.instagram.com/ieeesbmbits/",
    youtube: "https://www.youtube.com/@ieeesbmbits"
  }
};
