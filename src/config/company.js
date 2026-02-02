// Company configuration - Edit this file to customize for different companies
// To add a new company, add a new entry to the 'companies' object below
// Default company: UMI International Consultants Ltd

const companies = {
    umi: {
        id: 'umi',
        name: 'UMI International Consultants Ltd',
        shortName: 'UMI International',
        tagline: 'Your Trusted Partner in Tax, Audit & Advisory',
        description: 'Professional tax consultancy, auditing, accounting, and business advisory services for Nigerian businesses.',

        // Contact Information
        contact: {
            address: 'Home Trust Estate, Near Utako Market, Abuja - FCT',
            city: 'Abuja',
            state: 'FCT',
            country: 'Nigeria',
            email: 'hadifltd@gmail.com',
            phones: ['+234-9058385736', '+234-8035489053'],
            primaryPhone: '+2349058385736',
            website: 'umiinternational.org',
        },

        // Legal & Registration
        legal: {
            rc: '1947052',
            partner: 'ISMAILA MA\'MUD UDUANS, FCNA, FCTI',
            partnerTitle: 'REGISTERED PROFESSIONAL WITH FRC',
        },

        // Service Categories
        serviceKeywords: [
            'Consulting',
            'Accounting',
            'Taxation',
            'Auditing',
            'Financial Advisory',
            'Human Resources',
        ],

        // Core Services (linked to routes)
        services: {
            taxation: {
                id: 'taxation',
                title: 'Taxation',
                shortDescription: 'Comprehensive tax planning, compliance, and advisory services.',
                icon: 'AccountBalance',
                color: '#0B2D5B',
                bullets: [
                    'Tax planning & strategy',
                    'Corporate tax compliance',
                    'VAT & withholding tax',
                    'Tax dispute resolution',
                    'Annual tax returns',
                ],
                process: [
                    { title: 'Assessment', description: 'Review your current tax position and obligations' },
                    { title: 'Planning', description: 'Develop tax-efficient strategies' },
                    { title: 'Compliance', description: 'Prepare and file all required returns' },
                    { title: 'Optimization', description: 'Identify legitimate tax savings opportunities' },
                    { title: 'Support', description: 'Ongoing advisory and representation' },
                ],
                deliverables: [
                    'Tax compliance reports',
                    'Filed tax returns with receipts',
                    'Tax planning recommendations',
                    'Quarterly tax reviews',
                    'Audit representation support',
                ],
                faqs: [
                    { q: 'What taxes do Nigerian businesses need to file?', a: 'Nigerian businesses typically need to file Company Income Tax (CIT), Value Added Tax (VAT), Withholding Tax, and PAYE for employees.' },
                    { q: 'When are corporate tax returns due?', a: 'Corporate tax returns are due within 6 months after the end of the accounting year.' },
                    { q: 'Can you help with tax penalties?', a: 'Yes, we can represent you before tax authorities and help negotiate settlements for penalties and interest.' },
                ],
            },
            consulting: {
                id: 'consulting',
                title: 'Consulting',
                shortDescription: 'Strategic business consulting for growth and compliance.',
                icon: 'Psychology',
                color: '#1F5AA6',
                bullets: [
                    'Business strategy',
                    'Company registration',
                    'Regulatory compliance',
                    'Process optimization',
                    'Risk management',
                ],
                process: [
                    { title: 'Discovery', description: 'Understand your business goals and challenges' },
                    { title: 'Analysis', description: 'Evaluate current state and opportunities' },
                    { title: 'Strategy', description: 'Develop actionable recommendations' },
                    { title: 'Implementation', description: 'Support execution of recommendations' },
                    { title: 'Review', description: 'Monitor outcomes and adjust' },
                ],
                deliverables: [
                    'Business assessment report',
                    'Strategic recommendations',
                    'Implementation roadmap',
                    'Registration documents',
                    'Compliance checklists',
                ],
                faqs: [
                    { q: 'Do you help with CAC registration?', a: 'Yes, we handle complete CAC company registration including name search, document preparation, and filing.' },
                    { q: 'What industries do you serve?', a: 'We serve SMEs, startups, NGOs, professional services, retail, and contractors across all sectors.' },
                    { q: 'Do you offer ongoing advisory?', a: 'Yes, we offer retainer arrangements for continuous business advisory services.' },
                ],
            },
            accounting: {
                id: 'accounting',
                title: 'Accounting',
                shortDescription: 'Professional bookkeeping and financial reporting services.',
                icon: 'Calculate',
                color: '#C9A227',
                bullets: [
                    'Bookkeeping services',
                    'Financial statements',
                    'Management accounts',
                    'Payroll processing',
                    'Bank reconciliation',
                ],
                process: [
                    { title: 'Setup', description: 'Configure accounting systems and chart of accounts' },
                    { title: 'Recording', description: 'Maintain accurate books and records' },
                    { title: 'Reconciliation', description: 'Monthly bank and account reconciliations' },
                    { title: 'Reporting', description: 'Prepare financial statements and reports' },
                    { title: 'Analysis', description: 'Provide insights and recommendations' },
                ],
                deliverables: [
                    'Monthly management accounts',
                    'Annual financial statements',
                    'Bank reconciliation reports',
                    'Payroll registers',
                    'Cash flow statements',
                ],
                faqs: [
                    { q: 'Do you use accounting software?', a: 'Yes, we work with QuickBooks, Sage, and other popular accounting software platforms.' },
                    { q: 'How often will I receive reports?', a: 'We provide monthly management accounts and can customize reporting frequency to your needs.' },
                    { q: 'Do you handle payroll?', a: 'Yes, we provide full payroll services including PAYE calculations and pension contributions.' },
                ],
            },
            auditing: {
                id: 'auditing',
                title: 'Auditing',
                shortDescription: 'Independent audit and assurance services.',
                icon: 'FactCheck',
                color: '#0B2D5B',
                bullets: [
                    'Statutory audits',
                    'Internal audit',
                    'Due diligence',
                    'Special investigations',
                    'Compliance audits',
                ],
                process: [
                    { title: 'Planning', description: 'Scope definition and audit planning' },
                    { title: 'Fieldwork', description: 'Testing controls and transactions' },
                    { title: 'Analysis', description: 'Evaluate findings and exceptions' },
                    { title: 'Reporting', description: 'Draft and finalize audit report' },
                    { title: 'Follow-up', description: 'Management letter and recommendations' },
                ],
                deliverables: [
                    'Audit report and opinion',
                    'Management letter',
                    'Internal control recommendations',
                    'Due diligence report',
                    'Compliance certificates',
                ],
                faqs: [
                    { q: 'What types of audits do you perform?', a: 'We perform statutory audits, internal audits, forensic audits, and compliance audits.' },
                    { q: 'How long does an audit take?', a: 'Audit duration depends on company size, typically 2-6 weeks for SMEs.' },
                    { q: 'Are your auditors certified?', a: 'Yes, our team includes certified accountants registered with ICAN and ANAN.' },
                ],
            },
        },

        // Industries served
        industries: [
            'SMEs',
            'Startups',
            'NGOs',
            'Professional Services',
            'Retail',
            'Contractors',
        ],

        // Why choose us features
        features: [
            { title: 'Compliance-First', description: 'We prioritize regulatory compliance to protect your business', icon: 'Shield' },
            { title: 'Timely Filing', description: 'Never miss a deadline with our proactive approach', icon: 'Schedule' },
            { title: 'Risk Reduction', description: 'Identify and mitigate financial and regulatory risks', icon: 'Security' },
            { title: 'Advisory Support', description: 'Ongoing guidance from experienced professionals', icon: 'Support' },
            { title: 'Transparent Reporting', description: 'Clear, understandable reports and communication', icon: 'Assessment' },
            { title: 'FRC Registered', description: 'Professional standards and ethical practice', icon: 'Verified' },
        ],

        // Compliance info for landing page
        complianceInfo: {
            checklist: [
                'Maintain proper books of account',
                'File annual returns with CAC',
                'Submit tax returns on time',
                'Keep employee records current',
                'Conduct annual audits (if required)',
                'Renew business permits annually',
            ],
            commonMistakes: [
                'Late filing of tax returns leading to penalties',
                'Missing or incomplete documentation',
                'Inconsistent financial records',
                'Failure to remit PAYE and pensions',
                'Ignoring VAT registration thresholds',
                'Poor record-keeping practices',
            ],
            disclaimer: 'The information provided on this website is for general guidance only and does not constitute legal, tax, or professional advice. Please contact us for personalized advice tailored to your specific situation.',
        },

        // Trust badges
        trustBadges: [
            'FRC Registered',
            'RC: 1947052',
            'Abuja - FCT',
        ],

        // Map embed
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1!2d7.43!3d9.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUtako%2C%20Abuja!5e0!3m2!1sen!2sng!4v1600000000000!5m2!1sen!2sng',
    },
};

// Get current company config
export const getCompanyConfig = (companyId = 'umi') => {
    return companies[companyId] || companies.umi;
};

// Default export is UMI
export default companies.umi;
