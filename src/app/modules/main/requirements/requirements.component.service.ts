export interface Requirement {
    requirementNumber: string;
    requirementDate: string;
    requirement: string;
    numberOfPositions: number;
    workLocation: string;
    customerName: string;
    clientName: string;
    group: string;
    managerName: string;
    lead: string;
    recruiter: string;
    brNo: string;
    srNo: string;
    typeOfSOT: string;
    rehash: boolean;
    requirementLevel: string;
    skillsRequired: string;
  }
  
  export const requirements: Requirement[] = [
    {
      requirementNumber: 'REQ-001',
      requirementDate: '2023-07-01',
      requirement: 'Software Developer',
      numberOfPositions: 3,
      workLocation: 'New York, NY',
      customerName: 'ABC Corp',
      clientName: 'XYZ Inc',
      group: 'Development',
      managerName: 'John Doe',
      lead: 'Jane Smith',
      recruiter: 'Tom Brown',
      brNo: 'BR123',
      srNo: 'SR456',
      typeOfSOT: 'Full-Time',
      rehash: true,
      requirementLevel: 'Senior',
      skillsRequired: 'JavaScript, Angular, TypeScript'
    },
    {
      requirementNumber: 'REQ-002',
      requirementDate: '2023-07-05',
      requirement: 'Data Analyst',
      numberOfPositions: 2,
      workLocation: 'San Francisco, CA',
      customerName: 'DEF Ltd',
      clientName: 'UVW Corp',
      group: 'Analytics',
      managerName: 'Alice Johnson',
      lead: 'Bob Williams',
      recruiter: 'Emily Davis',
      brNo: 'BR789',
      srNo: 'SR101',
      typeOfSOT: 'Contract',
      rehash: false,
      requirementLevel: 'Mid',
      skillsRequired: 'SQL, Python, Tableau'
    },
    {
      requirementNumber: 'REQ-003',
      requirementDate: '2023-07-10',
      requirement: 'Project Manager',
      numberOfPositions: 1,
      workLocation: 'Austin, TX',
      customerName: 'GHI LLC',
      clientName: 'RST Solutions',
      group: 'Management',
      managerName: 'Chris Martin',
      lead: 'David Lee',
      recruiter: 'Laura Wilson',
      brNo: 'BR112',
      srNo: 'SR131',
      typeOfSOT: 'Full-Time',
      rehash: true,
      requirementLevel: 'Senior',
      skillsRequired: 'Project Management, Agile, Scrum'
    },
    {
      requirementNumber: 'REQ-004',
      requirementDate: '2023-07-15',
      requirement: 'Network Engineer',
      numberOfPositions: 4,
      workLocation: 'Seattle, WA',
      customerName: 'JKL Partners',
      clientName: 'OPQ Technologies',
      group: 'IT Infrastructure',
      managerName: 'Evan Thompson',
      lead: 'Megan Brown',
      recruiter: 'Nathan Green',
      brNo: 'BR145',
      srNo: 'SR167',
      typeOfSOT: 'Full-Time',
      rehash: false,
      requirementLevel: 'Mid',
      skillsRequired: 'Cisco, Networking, Security'
    },
    {
      requirementNumber: 'REQ-005',
      requirementDate: '2023-07-20',
      requirement: 'UI/UX Designer',
      numberOfPositions: 2,
      workLocation: 'Boston, MA',
      customerName: 'MNO Group',
      clientName: 'CDE Enterprises',
      group: 'Design',
      managerName: 'Olivia King',
      lead: 'Ryan Scott',
      recruiter: 'Sophia White',
      brNo: 'BR178',
      srNo: 'SR189',
      typeOfSOT: 'Part-Time',
      rehash: true,
      requirementLevel: 'Junior',
      skillsRequired: 'UI Design, UX Research, Adobe XD'
    }
  ];
  