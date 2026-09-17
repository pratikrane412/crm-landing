import type { ScreenshotItem, Hotspot, RoleView } from '../types/landing';

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'revenue',
    top: '22%',
    left: '84%',
    title: 'Liquid Realized Cash',
    metric: '₹84.4 Lakhs',
    badge: 'Finance Realization',
    description: 'Instant cash & digital fee realization across UPI, NEFT, Cheques, and Cards with mandatory UTR audit logging.'
  },
  {
    id: 'leads',
    top: '22%',
    left: '21%',
    title: 'Total Active Inflow',
    metric: '8,117 Inquiries',
    badge: 'Multi-Channel Influx',
    description: 'Consolidated prospect triage from Google Ads, Meta Paid, Instagram, Walk-ins, and website WhatsApp click-to-chats.'
  },
  {
    id: 'conversion',
    top: '22%',
    left: '63%',
    title: 'Conversion Efficiency',
    metric: '4.4% Closure Rate',
    badge: 'Sales Acceleration',
    description: 'Powered by 60-second real-time IST reminder chimes and zero-touch lead loss protocols.'
  },
  {
    id: 'admissions',
    top: '22%',
    left: '42%',
    title: 'Closed Admissions',
    metric: '354 Enrolled',
    badge: 'Admissions Engine',
    description: 'Verified enrollments with milestone installment tracking and automated branded PDF receipts.'
  }
];

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: 'dashboard-analytics',
    title: 'Executive Analytics & Telemetry',
    category: 'dashboard',
    image: '/screenshots/dashboard_analytics.png',
    badge: 'Core Command',
    description: 'High-level institutional telemetry consolidating 8,117+ leads, ₹84.4L realized revenue, and monthly trends.',
    options: [
      { name: 'Active Lead Inflow Counter', description: 'Monitors total inquiries captured across physical and virtual branches.' },
      { name: 'Realized Revenue Counter', description: 'Shows verified fees deposited in bank accounts with zero manual drift.' },
      { name: 'Revenue Growth Trend', description: 'Interactive area curve plotting monthly collection targets vs realization.' },
      { name: 'Center Comparison Bars', description: 'Live performance comparison between Andheri, Borivali, and Online centers.' }
    ]
  },
  {
    id: 'funnel-leaderboard',
    title: '4-Stage Funnel & Counsellor Leaderboard',
    category: 'dashboard',
    image: '/screenshots/funnel_leaderboard.png',
    badge: 'Sales Velocity',
    description: 'Real-time sales progression from total inquiry influx through consultation to closed won admissions.',
    options: [
      { name: 'Admissions Pipeline Funnel', description: 'Visualizes conversion at each stage: 8117 Influx ➔ 3815 Engaged ➔ 355 Consultation ➔ 354 Closed.' },
      { name: 'Counsellor Sales Standings', description: 'Gamified real-time sales leaderboard ranking counsellors by gross cash realized.' },
      { name: 'Won Admissions Metric', description: 'Tracks individual closure volumes (e.g. Pooja Parab: 44 won, ₹25.75L closed).' }
    ]
  },
  {
    id: 'dashboard-queues',
    title: 'The Six Operational Workqueues',
    category: 'dashboard',
    image: '/screenshots/dashboard_queues.png',
    badge: 'Workqueue Hub',
    description: 'Switch between 6 dedicated real-time tables without page reload or losing active scroll position.',
    options: [
      { name: 'Tab 1: Lead Captures', description: 'Fast triage of website brochures and contact inquiries with WhatsApp buttons.' },
      { name: 'Tab 2: Followup Queue', description: 'Daily calling queue with Today, Tomorrow, and Overdue date filters.' },
      { name: 'Tab 3: Scheduled Sessions', description: 'Online demo meets and in-person center counseling schedules.' },
      { name: 'Tab 4: Hot Leads', description: 'High-intent prospects with 2+ interactions in the past 48 hours.' },
      { name: 'Tab 5: Pending Payments', description: 'Tuition installment debt recovery with days overdue tracking.' },
      { name: 'Tab 6: Revenue Details', description: 'Audited ledger of every rupee collected with receipt IDs and UTRs.' }
    ]
  },
  {
    id: 'leads-directory',
    title: 'Central Leads Directory & Multi-Filtering',
    category: 'leads',
    image: '/screenshots/leads_directory.png',
    badge: 'Lead Triage',
    description: 'Master leads repository supporting multi-dimensional filtering, bulk reassign, and CSV exports.',
    options: [
      { name: 'Multi-Filter Toolbar', description: 'Filter simultaneously by Branch, Source, Counsellor, CRM Tag, and Date Range.' },
      { name: 'Active vs Transferred Tabs', description: 'Toggle between active pipeline and leads transferred between centers.' },
      { name: 'Bulk Select & Reassign', description: 'Select multiple leads via checkboxes and reassign to another counsellor.' },
      { name: 'Export Data Button', description: 'One-click spreadsheet export of filtered prospect datasets.' }
    ]
  },
  {
    id: 'lead-create-drawer',
    title: 'Fast Lead Intake Drawer',
    category: 'leads',
    image: '/screenshots/lead_create_drawer.png',
    badge: 'Intake Engine',
    description: 'Slide-over lead intake drawer with duplicate phone and email detection.',
    options: [
      { name: 'Duplicate Mobile Detection', description: 'Alerts if a phone number already exists to prevent duplicate follow-ups.' },
      { name: 'Lead Source Tagging', description: 'Categorizes origin (Instagram, Google Ads, Walk-in, Referral).' },
      { name: 'Course & Batch Preference', description: 'Selects target course and preferred timing (Morning, Evening, Weekend).' }
    ]
  },
  {
    id: 'lead-detail-drawer',
    title: 'Lead Drawer: Smart Reminders & Remarks',
    category: 'leads',
    image: '/screenshots/lead_detail_drawer.png',
    badge: 'Conversion Engine',
    description: 'Contextual slide-over drawer with 20+ pipeline tags, WhatsApp quick launch, and Smart IST reminder scheduler.',
    options: [
      { name: '20+ CRM Pipeline Tags', description: 'One-click tags: Hot Lead, Enrolled, Call Back, Visited, Future Admission, Demo Done, Abscond.' },
      { name: 'Smart IST Reminder Scheduler', description: 'Picks exact date and time in IST to fire 60-second notification chime.' },
      { name: 'Interaction Timeline History', description: 'Immutable log of every conversation remark with timestamp and staff author.' },
      { name: 'Convert to Admission Button', description: 'Seamlessly transfers prospect data into the formal enrollment form.' }
    ]
  },
  {
    id: 'courses-catalog',
    title: 'Course Catalog & Fee Architecture',
    category: 'academics',
    image: '/screenshots/courses_catalog.png',
    badge: 'Curriculum Master',
    description: 'Manage master course curriculum, credit hours, duration, and tuition fee pricing.',
    options: [
      { name: 'Fee Structure Definition', description: 'Configure standard fee (e.g. ₹9,000 for SEO, ₹35,000 for Master Program).' },
      { name: 'Duration & Hours Allocation', description: 'Sets instructional classroom hours and weekly pacing.' },
      { name: 'Active / Inactive Status', description: 'Toggles course visibility in public forms and admission dropdowns.' }
    ]
  },
  {
    id: 'batches-schedule',
    title: 'Batch Management & Conflict-Free Calendar',
    category: 'academics',
    image: '/screenshots/batches_schedule.png',
    badge: 'Cohort Operations',
    description: 'Cohort scheduler preventing classroom overlaps and trainer double-booking across centers.',
    options: [
      { name: 'Create Batch Side Drawer', description: 'Define Batch Code, Assigned Trainer, Branch, and Schedule timings.' },
      { name: 'Batch Type Radio Selector', description: 'Differentiates between Normal Batches and Master Intensive Batches.' },
      { name: 'Student Capacity Enforcer', description: 'Tracks enrolled student count against max classroom limit.' }
    ]
  },
  {
    id: 'admission-drawer',
    title: 'Admission Dossier & Installment Milestones',
    category: 'finance',
    image: '/screenshots/admission_drawer.png',
    badge: 'Financial Accounting',
    description: 'Student financial summary with milestone installment tracking, UTR verification, and PDF receipt downloads.',
    options: [
      { name: 'Payment Summary Card', description: 'Visual breakdown of Total Fees (₹35,000), Paid (₹13,000), and Balance Due (₹22,000).' },
      { name: 'Installment Milestone Table', description: 'Tracks each scheduled installment date, amount, payment mode, and status.' },
      { name: 'Pay / Collect Modal', description: 'Records full or partial payment with bank transaction UTR reference.' },
      { name: 'Instant PDF Receipt', description: 'Generates official formatted receipt: Receipt_<Student>_<ID>.pdf.' },
      { name: '+ Issue Refund Button', description: 'Creates offsetting negative financial entry with approval audit trail.' }
    ]
  },
  {
    id: 'custom-form-builder',
    title: 'Dynamic Custom Form Builder Canvas',
    category: 'forms',
    image: '/screenshots/custom_form_builder.png',
    badge: 'No-Code Engine',
    description: 'Drag-and-drop form template builder with live synchronized desktop and mobile previews.',
    options: [
      { name: '12+ Dynamic Field Palette', description: 'Short Text, Email, Phone, Dropdowns, Checkboxes, Ratings (1-5), Date/Time, File Uploads.' },
      { name: 'Live Canvas Preview', description: 'Real-time interactive rendering toggling between desktop and mobile viewport.' },
      { name: 'Shareable Public URLs', description: 'Produces public links (/public-form/:id) for website embedding or social media.' }
    ]
  },
  {
    id: 'reports-analytics',
    title: 'Executive Reports & Revenue Deep-Dives',
    category: 'dashboard',
    image: '/screenshots/reports_analytics.png',
    badge: 'Business Intelligence',
    description: 'Deep-dive charts across revenue, counsellor performance, and admissions-to-leads pipeline conversion.',
    options: [
      { name: 'Revenue Trend Received vs Pending', description: 'Dual curve comparing actual funds received vs projected pending receivables.' },
      { name: 'Counsellor Share Donut', description: 'Visual breakdown of gross collections credited per counsellor.' },
      { name: 'Admissions vs Leads Conversion', description: 'Monthly enrollment pipeline comparison tracking closure efficiency.' }
    ]
  },
  {
    id: 'certificates-manager',
    title: 'Certificate Management & Verification QR',
    category: 'admin',
    image: '/screenshots/certificates_manager.png',
    badge: 'Tamper-Proof Credentials',
    description: '1,485+ graduation certificates issued with unique serial numbers and public QR verification.',
    options: [
      { name: 'Eligibility Pre-Check', description: 'Enforces ₹0 fee balance and 75%+ batch attendance before certificate issuance.' },
      { name: 'Tamper-Proof Serial Numbers', description: 'Assigns unique alphanumeric identifiers (e.g. OM-17000).' },
      { name: 'Public QR Verification Portal', description: 'Employers scan QR code to verify credentials online at /certificate/show.php.' }
    ]
  },
  {
    id: 'staff-management',
    title: 'Staff Directory & Faculty Roster',
    category: 'admin',
    image: '/screenshots/staff_management.png',
    badge: 'Workforce Operations',
    description: 'Internal directory managing counsellors, senior trainers, telecallers, and administrative branch staff.',
    options: [
      { name: 'Role Badges & Designations', description: 'Differentiates Telecallers, Trainers, Senior Counselors, and Branch Managers.' },
      { name: 'Contact & Joining Dates', description: 'Official mobile, email, and employee tenure tracking.' },
      { name: 'Action Controls', description: 'Edit profile, reset credentials, or open Granular Permissions drawer.' }
    ]
  },
  {
    id: 'permissions-drawer',
    title: 'Granular RBAC: 17 Module Permission Tokens',
    category: 'admin',
    image: '/screenshots/permissions_drawer.png',
    badge: 'Enterprise Security',
    description: 'Tailor exact access permissions per staff member with 17 granular toggle switches and Super Admin override.',
    options: [
      { name: 'Navbar Module Switches', description: 'Toggle access for Dashboard, Leads, Batches, Courses, Attendance, Fees, Reports, etc.' },
      { name: 'Granular Batch Controls', description: 'Separate switches for Add Batch, Edit Batch, and Delete Batch.' },
      { name: 'Select All / Clear All', description: 'One-click permission presets for rapid onboarding.' }
    ]
  },
  {
    id: 'audit-change-history',
    title: 'System Audit Logs & Change History',
    category: 'admin',
    image: '/screenshots/audit_change_history.png',
    badge: 'Immutable Compliance',
    description: 'Immutable system audit ledger tracking user actions, timestamps, and old-versus-new field differences.',
    options: [
      { name: 'Action Type Badges', description: 'Color-coded tags for Followup Added, Lead Updated, Admission Created, Deleted.' },
      { name: 'Before-and-After Diffs', description: 'Displays exact changes (e.g. Tags: Interested ➔ Stopped Responding).' },
      { name: 'User & Timestamp Attribution', description: 'Attributes every change to specific staff member and exact minute.' }
    ]
  }
];

export const ROLE_VIEWS: RoleView[] = [
  {
    id: 'counsellor',
    roleTitle: 'Academic Sales Counsellor',
    tagline: 'Close more admissions with 60s reminder chimes & zero lead slip.',
    badge: 'Counsellor Experience',
    screenshot: '/screenshots/lead_detail_drawer.png',
    accentColor: '#0284c7',
    superpowers: [
      '60-second IST follow-up audio chime ensures zero missed calls',
      'One-click WhatsApp click-to-chat with pre-filled greeting',
      '20+ CRM tags to segment high-intent leads instantly',
      'One-click Convert to Admission pre-fills student registration'
    ],
    primaryMetrics: [
      { label: 'Follow-up Response Rate', value: '98.4%', sub: 'Within 5 minutes of due time' },
      { label: 'Top Rep Realization', value: '₹25.75L', sub: 'Pooja Parab (44 won admissions)' },
      { label: 'Daily Calls Triaged', value: '65+', sub: 'Per counsellor shift' }
    ]
  },
  {
    id: 'admin',
    roleTitle: 'Super Administrator',
    tagline: 'Complete organizational oversight across 3 branches & all finances.',
    badge: 'Executive Command',
    screenshot: '/screenshots/dashboard_analytics.png',
    accentColor: '#6366f1',
    superpowers: [
      'Real-time cash realization counter across all branches (₹84.4L+)',
      '17-token granular RBAC permissions per staff member',
      'Immutable system audit log (/change-history) with before/after diffs',
      'One-click branch switching: Andheri, Borivali, Online Virtual'
    ],
    primaryMetrics: [
      { label: 'Liquid Cash Collected', value: '₹84.4L', sub: 'Audited with bank UTRs' },
      { label: 'Total Inflow Processed', value: '8,117', sub: 'Across all digital channels' },
      { label: 'Certificates Authenticated', value: '1,485', sub: 'With tamper-proof QR' }
    ]
  },
  {
    id: 'finance',
    roleTitle: 'Finance & Admissions Officer',
    tagline: 'Eliminate tuition defaults with 8-installment schedules & auto receipts.',
    badge: 'Finance & Accounts',
    screenshot: '/screenshots/admission_drawer.png',
    accentColor: '#10b981',
    superpowers: [
      'Flexible Down Payment + up to 8 custom milestone installments',
      'Mandatory bank UTR & cheque reference validation',
      'Instant branded PDF receipt generation (Receipt_<Student>_<ID>.pdf)',
      'Overdue payment queue with ageing alerts (1-15, 16-30, 30+ days)'
    ],
    primaryMetrics: [
      { label: 'Fee Collection Velocity', value: '92.6%', sub: 'On-time installment clearance' },
      { label: 'Receipt Generation Drift', value: '0 sec', sub: 'Instant automated PDF' },
      { label: 'Audit Trail Coverage', value: '100%', sub: 'Zero unverified cash entries' }
    ]
  },
  {
    id: 'trainer',
    roleTitle: 'Academic Faculty & Trainer',
    tagline: 'Track syllabus completion percentages & student attendance effortlessly.',
    badge: 'Academic Velocity',
    screenshot: '/screenshots/courses_catalog.png',
    accentColor: '#f59e0b',
    superpowers: [
      'Training chart module checklist with real-time syllabus completion %',
      'One-click "Mark All Present" daily batch attendance register',
      'Master Training Chart balancing cross-branch faculty workloads',
      'Attendance compliance threshold enforcement (75%) for certificate eligibility'
    ],
    primaryMetrics: [
      { label: 'Syllabus Completion Track', value: '100%', sub: 'Module-by-module verification' },
      { label: 'Attendance Accuracy', value: '99.1%', sub: 'Daily P/A/L/E registers' },
      { label: 'Batch Conflict Rate', value: '0%', sub: 'Conflict-free calendar scheduler' }
    ]
  }
];
