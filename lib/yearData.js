import {
  BookOpen,
  Briefcase,
  Trophy,
  Globe,
  Users,
  GraduationCap,
  Sparkles,
  Award,
  Star,
  Zap,
  Heart,
  Code,
  PenTool,
  Mic,
  Building,
  Plane,
} from "lucide-react";

const yearData = {
  freshman: {
    number: "01",
    title: "Freshman Year",
    subtitle: "Foundation & Discovery",
    year: "2022 - 2023",
    gradient: "from-husky-purple to-husky-purple-light",
    accentColor: "husky-purple",
    scene: {
      number: "Scene I",
      title: "The First Question",
      quote:
        "I got an assignment that genuinely stopped me in my tracks. I had to write the philosophy of my life\u2026 at eighteen.",
      body: "Interdisciplinary Honors asked me to confront who I was before I'd even figured it out. That reflection \u2014 raw, uncertain, honest \u2014 taught me that learning isn't just about grades. It's identity. It's becoming. That assignment set the foundation for everything that followed.",
    },
    stats: [
      { label: "Credits Earned", value: "78" },
      { label: "Cumulative GPA", value: "3.79" },
      { label: "AP Credits", value: "34" },
      { label: "Dean's List", value: "2x" },
    ],
    academics: {
      quarters: [
        {
          name: "Autumn 2022",
          gpa: "4.00",
          deanslist: false,
          courses: [
            { code: "INFO 200", name: "Intellectual Foundations", credits: 5 },
            { code: "ENGL 182", name: "Multimodal Composition", credits: 5 },
            { code: "HONORS 100", name: "Introduction to Honors", credits: 1 },
            { code: "GEN ST 199", name: "University Community", credits: 2 },
          ],
        },
        {
          name: "Winter 2023",
          gpa: "3.67",
          deanslist: true,
          courses: [
            {
              code: "ACCTG 215",
              name: "Accounting & Financial Reporting",
              credits: 5,
            },
            { code: "HONORS 211", name: "Honors Humanities", credits: 5 },
            {
              code: "MATH 125",
              name: "Calculus & Analytic Geometry II",
              credits: 5,
            },
            { code: "B A 490", name: "Special Topics", credits: 2 },
          ],
        },
        {
          name: "Spring 2023",
          gpa: "3.71",
          deanslist: true,
          courses: [
            { code: "ACCTG 225", name: "Managerial Accounting", credits: 5 },
            {
              code: "B CMU 301",
              name: "Strategic Communication",
              credits: 4,
            },
            {
              code: "INFO 201",
              name: "Data Science Foundations",
              credits: 5,
            },
          ],
        },
      ],
    },
    experiences: [
      {
        role: "Honors Student",
        org: "UW Interdisciplinary Honors Program",
        duration: "September 2022 \u2013 Present",
        description:
          "Cross-disciplinary inquiry combining humanities, social sciences, and natural sciences. Wrote the philosophy of my life as a foundational assignment that shaped my approach to learning.",
        icon: GraduationCap,
      },
      {
        role: "Research Assistant",
        org: "Michael G. Foster School of Business",
        duration: "April \u2013 May 2023",
        description:
          "Supported faculty research at UW's premier business school, gaining early exposure to academic research methodology.",
        icon: BookOpen,
      },
      {
        role: "Member",
        org: "UW Salsa Club",
        duration: "Spring 2023",
        description:
          "Discovered a new form of expression and community through Latin dance. Found confidence in a completely different way \u2014 a reminder that growth comes from unexpected places.",
        icon: Heart,
      },
      {
        role: "Summer Intern",
        org: "College R Us",
        duration: "August \u2013 September 2023",
        description:
          "First professional internship experience, bridging the gap between freshman year classroom learning and real-world application.",
        icon: Briefcase,
      },
    ],
    highlights: [
      {
        title: "Perfect First Quarter",
        description:
          "Achieved a 4.00 GPA in my first quarter at the University of Washington.",
        icon: Star,
      },
      {
        title: "Dean's List",
        description: "Recognized on the Dean's List in Winter and Spring quarters.",
        icon: Award,
      },
      {
        title: "34 AP Credits",
        description:
          "Entered UW with 34 credits in Economics, Statistics, Computer Science, French, Calculus, and English.",
        icon: Zap,
      },
    ],
    reflection:
      "And that moment taught me something I still carry: learning isn't just grades. It's reflection. It's identity. It's becoming.",
    nextYear: "sophomore",
  },

  sophomore: {
    number: "02",
    title: "Sophomore Year",
    subtitle: "Growth & Exploration",
    year: "2023 - 2024",
    gradient: "from-husky-purple-light to-husky-purple-bright",
    accentColor: "husky-purple-light",
    scene: {
      number: "Scene II \u2013 V",
      title: "The Underdogs, Japan & 11 PM",
      quote:
        "We were the youngest team \u2014 the underdogs \u2014 and we won second place. That win wasn't just exciting. It was proof that confidence is built\u2026 and that the people around you can change what you believe is possible.",
      body: "Sophomore year was an explosion of growth. Representing UW at CaseIT in Vancouver as the youngest team and placing second. Studying abroad in Japan on a JASSO scholarship. Becoming Salsa Club co-president. And then, one night at 11 PM in a dorm, my friends and I decided we didn't want to wait for opportunity \u2014 so we built it. That's how UW Case Club was born.",
    },
    stats: [
      { label: "Credits Earned", value: "53" },
      { label: "Year GPA", value: "3.83" },
      { label: "Countries", value: "2" },
      { label: "Dean's List", value: "3x" },
    ],
    academics: {
      quarters: [
        {
          name: "Autumn 2023",
          gpa: "3.83",
          deanslist: true,
          courses: [
            { code: "HONORS 220", name: "Honors Science I", credits: 5 },
            { code: "MGMT 200", name: "Introduction to Law", credits: 5 },
            {
              code: "Q SCI 381",
              name: "Intro Probability & Statistics",
              credits: 5,
            },
          ],
        },
        {
          name: "Winter 2024",
          gpa: "3.83",
          deanslist: true,
          courses: [
            {
              code: "HONORS 231",
              name: "Honors Social Science",
              credits: 5,
            },
            {
              code: "I S 300",
              name: "Intro to Information Systems",
              credits: 5,
            },
            { code: "MKTG 301", name: "Marketing Concepts", credits: 4 },
            {
              code: "ENTRE 490",
              name: "Special Topics \u2013 Entrepreneurship",
              credits: 2,
            },
          ],
        },
        {
          name: "Spring 2024",
          gpa: "3.83",
          deanslist: true,
          courses: [
            { code: "B ECON 300", name: "Managerial Economics", credits: 4 },
            { code: "FIN 350", name: "Business Finance", credits: 4 },
            {
              code: "MGMT 440",
              name: "Technology Consulting",
              credits: 4,
            },
          ],
        },
        {
          name: "Summer 2024",
          gpa: null,
          deanslist: false,
          label: "Study Abroad \u2013 Kobe, Japan",
          courses: [
            {
              code: "JAPAN 145",
              name: "Japanese Abroad \u2013 First Year",
              credits: 3,
            },
            {
              code: "GEN ST 363",
              name: "Study Abroad Internship",
              credits: 6,
            },
          ],
        },
      ],
    },
    experiences: [
      {
        role: "Co-President",
        org: "UW Salsa Club",
        duration: "2023 \u2013 2024",
        description:
          "Led the club community, organized practices and performances. Leadership can look like joy \u2014 community isn't just something you join, it's something you create.",
        icon: Heart,
      },
      {
        role: "HR Student Assistant",
        org: "UW Housing & Food Services",
        duration: "September 2023 \u2013 December 2024",
        description:
          "Managed HR processes for one of UW's largest departments, developing organizational and communication skills.",
        icon: Building,
      },
      {
        role: "Cohort Member",
        org: "Lavin Entrepreneurship Program",
        duration: "November 2023 \u2013 Present",
        description:
          "Selected for the competitive Lavin cohort, engaging in entrepreneurship education, mentorship, and cross-disciplinary collaboration.",
        icon: Sparkles,
      },
      {
        role: "Technology Consultant",
        org: "Bellalete \u2014 MGMT 440 Engagement",
        duration: "Spring 2024",
        description:
          "Led a consulting engagement developing technological infrastructure recommendations for Bellalete through the UW Foster Technology Consulting Program.",
        icon: Code,
      },
      {
        role: "JASSO Scholar \u2013 Study Abroad",
        org: "Kobe, Japan",
        duration: "Summer 2024",
        description:
          "Six-week fully-sponsored program. Studied Japanese, interned at Kobe City Government, KEWPIE Corporation, Kobe University Agricultural Farm, and FoodPict. Developed a marketing strategy for FoodPict.",
        icon: Globe,
      },
    ],
    highlights: [
      {
        title: "CaseIT \u2014 2nd Place Worldwide",
        description:
          "Represented UW Foster at the CaseIT International MIS Case Competition at Simon Fraser University. Placed 1st in cohort for both the 5-hour and 24-hour case prelims. Commended for \"freakishly good analysis and extremely practical solution.\"",
        icon: Trophy,
      },
      {
        title: "Unify Case Competition \u2014 3rd Place",
        description:
          "Presented solutions to Accenture executives in a 72-hour case competition. Placed 3rd among 20 teams.",
        icon: Trophy,
      },
      {
        title: "UW Case Club \u2014 The Beginning",
        description:
          "At 11 PM in a dorm, conceived the idea for UW Case Club (C-Squared) with friends who were also case teammates. The club would become a community where students grow together.",
        icon: Users,
      },
      {
        title: "JASSO Scholarship",
        description:
          "Awarded a full scholarship by the Japan Student Services Organization to study and intern in Kobe, Japan.",
        icon: Globe,
      },
      {
        title: "Annual Dean's List 2023\u201324",
        description:
          "Recognized on the Dean's List every quarter of sophomore year.",
        icon: Award,
      },
    ],
    reflection:
      "Japan taught me independence. It taught me humility. And it made me come back more grounded \u2014 and more open to change.",
    prevYear: "freshman",
    nextYear: "junior",
  },

  junior: {
    number: "03",
    title: "Junior Year",
    subtitle: "Integration & Application",
    year: "2024 - 2025",
    gradient: "from-husky-purple-bright to-husky-gold",
    accentColor: "husky-purple-bright",
    scene: {
      number: "Scene V \u2013 VI",
      title: "Building & Leading",
      quote:
        "My friends and I didn't want to wait for opportunity. So we built it. That's how UW Case Club was born \u2014 and it became a community where students could grow together.",
      body: "Junior year was about turning ideas into impact. Co-founding Case Club, writing competition cases, directing outreach at Lavin Entrepreneurship, managing ambassadors at the Global Business Case Competition, representing UW in Mexico, and becoming a teaching assistant. Every role was a different lens on the same question: how do you create something that outlasts you?",
    },
    stats: [
      { label: "Credits Earned", value: "33" },
      { label: "Year GPA", value: "3.86" },
      { label: "Orgs Led", value: "3" },
      { label: "Dean's List", value: "3x" },
    ],
    academics: {
      quarters: [
        {
          name: "Autumn 2024",
          gpa: "3.91",
          deanslist: true,
          courses: [
            {
              code: "I S 320",
              name: "Fundamentals of Applied Programming",
              credits: 4,
            },
            {
              code: "INFO 380",
              name: "Product & IS Management",
              credits: 5,
            },
            {
              code: "OPMGT 301",
              name: "Operations Management",
              credits: 4,
            },
          ],
        },
        {
          name: "Winter 2025",
          gpa: "3.74",
          deanslist: true,
          courses: [
            { code: "FIN 458", name: "Mergers & Acquisitions", credits: 4 },
            {
              code: "I BUS 300",
              name: "Intro to Global Business",
              credits: 4,
            },
            {
              code: "INFO 300",
              name: "Research Methods",
              credits: 5,
            },
            {
              code: "MGMT 300",
              name: "Leadership & Organizational Behavior",
              credits: 4,
            },
          ],
        },
        {
          name: "Spring 2025",
          gpa: "3.92",
          deanslist: true,
          courses: [
            {
              code: "HONORS 345",
              name: "Interdisciplinary Writing Seminar",
              credits: 5,
            },
            {
              code: "HONORS 394",
              name: "Interdisciplinary Study IV",
              credits: 5,
            },
            {
              code: "GLITS 252",
              name: "Global Literature: Genres",
              credits: 5,
            },
            { code: "MGMT 430", name: "Strategic Management", credits: 4 },
            { code: "B A 495", name: "Business Internship", credits: 1 },
          ],
        },
      ],
    },
    experiences: [
      {
        role: "Co-Founder & Director of Membership",
        org: "UW Case Club (C-Squared)",
        duration: "December 2024 \u2013 Present",
        description:
          "Co-founded the club born from a late-night dorm conversation. Building a community where students develop analytical thinking and presentation skills through case competitions.",
        icon: Users,
      },
      {
        role: "Teaching Assistant \u2014 MKTG 305",
        org: "UW Foster School of Business",
        duration: "January 2025 \u2013 Present",
        description:
          "Supporting students in Marketing through grading, office hours, and mentorship. Teaching deepened my own understanding and reinforced the value of giving back.",
        icon: GraduationCap,
      },
      {
        role: "Director of Outreach",
        org: "Lavin Entrepreneurship Program",
        duration: "September 2024 \u2013 June 2025",
        description:
          "Led outreach strategy connecting students with entrepreneurship opportunities, mentors, and resources across the UW ecosystem.",
        icon: Sparkles,
      },
      {
        role: "Ambassador Co-Manager",
        org: "Global Business Case Competition (GBCC)",
        duration: "2024 \u2013 2025",
        description:
          "Co-managed a 24-person ambassador team for the 25th edition of GBCC, hosting twelve teams from eight countries. Oversaw interviewing, training, and leading the ambassador program.",
        icon: Globe,
      },
      {
        role: "Strategic Operations & Digital Growth Intern",
        org: "Maxicom Inc.",
        duration: "June \u2013 September 2025",
        description:
          "Drove strategic operations and digital growth initiatives, bridging business strategy with technical implementation.",
        icon: Briefcase,
      },
    ],
    highlights: [
      {
        title: "GBCC 25th Edition \u2014 Management Team",
        description:
          "Helped bring together twelve teams from eight countries for a week of global collaboration and competition. The University of Hong Kong took the championship.",
        icon: Globe,
      },
      {
        title: "BMCC \u2014 Universidad Panamericana, Mexico",
        description:
          "Represented UW Foster at the Business Management Case Competition in Mexico. Worked through cases on Dulces de la Rosa and Lucha Libre AAA Worldwide, requiring deep cultural understanding.",
        icon: Plane,
      },
      {
        title: "Case Writer \u2014 Equitable Futures Competition",
        description:
          "Wrote the case about King County Metro Transit for UWiB Network and UW Business Alliance. Stepped from competitor to creator, gaining insight into how individual perspective shapes problem-solving.",
        icon: PenTool,
      },
      {
        title: "Annual Dean's List 2024\u201325",
        description:
          "Recognized on the Dean's List every quarter, with a year GPA of 3.86.",
        icon: Award,
      },
    ],
    reflection:
      "I've been a founder, a leader, a dancer, a competitor, a student\u2026 But the most important thing UW gave me was connection \u2014 lifelong friendships, mentors, and communities that shaped who I am.",
    prevYear: "sophomore",
    nextYear: "senior",
  },

  senior: {
    number: "04",
    title: "Senior Year",
    subtitle: "Synthesis & Impact",
    year: "2025 - 2026",
    gradient: "from-husky-gold to-husky-gold-light",
    accentColor: "husky-gold",
    scene: {
      number: "Scene VI",
      title: "The People",
      quote:
        "Above everything, I'm a Husky \u2014 because my UW story is connection. And I'm taking that with me into everything I do next.",
      body: "The final chapter isn't about achievements \u2014 it's about the people who made them possible. The mentors who believed before I did. The teammates who showed up at 11 PM. The communities that became family. Senior year is about carrying all of that forward, synthesizing four years of interdisciplinary growth, and looking toward what comes next.",
    },
    stats: [
      { label: "Cumulative GPA", value: "3.79" },
      { label: "Total Credits", value: "196" },
      { label: "Dean's List", value: "9x" },
      { label: "Husky 100", value: "\u2713" },
    ],
    academics: {
      quarters: [
        {
          name: "Autumn 2025",
          gpa: "3.53",
          deanslist: true,
          courses: [
            { code: "FIN 460", name: "Investments", credits: 4 },
            {
              code: "FIN 490",
              name: "Special Topics \u2013 Finance",
              credits: 4,
            },
            {
              code: "I S 410",
              name: "Networks & Cybersecurity",
              credits: 4,
            },
            {
              code: "MGMT 320",
              name: "Business, Government & Society",
              credits: 4,
            },
          ],
        },
        {
          name: "Winter 2026",
          gpa: null,
          deanslist: false,
          label: "In Progress",
          courses: [
            {
              code: "FIN 450",
              name: "Problems in Corporate Finance",
              credits: 4,
            },
            {
              code: "FIN 454",
              name: "Valuation & Investment Finance",
              credits: 4,
            },
            {
              code: "I S 451",
              name: "Business Data Analytics",
              credits: 4,
            },
            {
              code: "INFO 330",
              name: "Database & Data Modeling",
              credits: 5,
            },
          ],
        },
      ],
    },
    experiences: [
      {
        role: "Husky 100 Honoree",
        org: "University of Washington",
        duration: "2026",
        description:
          "Selected as one of 100 UW students recognized for making the most of their Husky experience. My story: connection.",
        icon: Award,
      },
      {
        role: "Teaching Assistant \u2014 MKTG 305",
        org: "UW Foster School of Business",
        duration: "Continuing",
        description:
          "Continued mentoring students in Marketing, now with two quarters of experience guiding the next generation of Foster students.",
        icon: GraduationCap,
      },
      {
        role: "Co-Founder & Director of Membership",
        org: "UW Case Club (C-Squared)",
        duration: "Continuing",
        description:
          "Growing the community that started from a late-night dorm conversation into a thriving club empowering students through case competitions.",
        icon: Users,
      },
    ],
    highlights: [
      {
        title: "Husky 100",
        description:
          "Recognized as one of 100 UW students who make the most of their time at the University of Washington. Honored for leadership, community building, and interdisciplinary impact.",
        icon: Trophy,
      },
      {
        title: "Finance Major \u2014 Completed",
        description:
          "Culminated the Finance major with advanced coursework in Investments, M&A, Corporate Finance, and Valuation.",
        icon: Star,
      },
      {
        title: "Data Science Minor",
        description:
          "Completing the Data Science minor, bridging quantitative analysis with business strategy.",
        icon: Code,
      },
      {
        title: "196 Credits Earned",
        description:
          "Graduated with 196 credits and a 3.79 cumulative GPA across four years of interdisciplinary study.",
        icon: GraduationCap,
      },
    ],
    reflection:
      "My UW story is a collection of scenes \u2014 connected by one thing: people. Above everything, I'm a Husky, and I'm taking that with me into everything I do next.",
    prevYear: "junior",
  },
};

export default yearData;
