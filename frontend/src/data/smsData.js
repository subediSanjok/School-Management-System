export const navSections = [
  { label: 'Admin Dashboard', to: '/' },
  { label: 'Student Dashboard', to: '/dashboards/student' },
  { label: 'Teacher Dashboard', to: '/dashboards/teacher' },
  { label: 'Parent Dashboard', to: '/dashboards/parent' },
  { label: 'Students', to: '/students' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'Parents', to: '/parents' },
  { label: 'Attendance', to: '/attendance' },
  { label: 'Exams', to: '/exams' },
  { label: 'Fees', to: '/fees' },
  { label: 'Notices', to: '/notices' },
]

export const sidebarMenu = [
  {
    title: 'Dashboard',
    items: [
      { label: 'Dashboard', to: '/' },
      { label: 'Teacher Dashboard', to: '/dashboards/teacher' },
      { label: 'Student Dashboard', to: '/dashboards/student' },
      { label: 'Parent Dashboard', to: '/dashboards/parent' },
    ],
  },
  {
    title: 'Application',
    items: [
      { label: 'Chat', to: '/menu/application/chat' },
      { label: 'Calendar', to: '/menu/application/calendar' },
      { label: 'Email', to: '/menu/application/email' },
      { label: 'To Do', to: '/menu/application/to-do' },
      { label: 'Notes', to: '/menu/application/notes' },
      { label: 'File Manager', to: '/menu/application/file-manager' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { label: 'Default', to: '/menu/layout/default' },
      { label: 'Mini', to: '/menu/layout/mini' },
      { label: 'RTL', to: '/menu/layout/rtl' },
      { label: 'Box', to: '/menu/layout/box' },
    ],
  },
  {
    title: 'People',
    items: [
      {
        label: 'Students',
        children: [
          { label: 'Student', to: '/menu/people/students/student' },
          { label: 'Student Promotion', to: '/menu/people/students/student-promotion' },
        ],
      },
      {
        label: 'Parents',
        children: [
          { label: 'Parent', to: '/menu/people/parents/parent' },
          { label: 'Guardian', to: '/menu/people/parents/guardian' },
        ],
      },
      {
        label: 'Teachers',
        children: [
          { label: 'Teacher', to: '/menu/people/teachers/teacher' },
          { label: 'All Teachers', to: '/menu/people/teachers/all-teachers' },
          { label: 'Routine', to: '/menu/people/teachers/routine' },
        ],
      },
    ],
  },
  {
    title: 'Academic',
    items: [
      { label: 'Classes', to: '/menu/academic/classes' },
      { label: 'All Classes', to: '/menu/academic/all-classes' },
      { label: 'Schedule', to: '/menu/academic/schedule' },
      { label: 'Class Room', to: '/menu/academic/class-room' },
      { label: 'Class Routine', to: '/menu/academic/class-routine' },
      { label: 'Section', to: '/menu/academic/section' },
      { label: 'Subjects', to: '/menu/academic/subjects' },
      { label: 'Syllabus', to: '/menu/academic/syllabus' },
      { label: 'Time Table', to: '/menu/academic/time-table' },
      { label: 'Home Work', to: '/menu/academic/home-work' },
      {
        label: 'Examinations',
        children: [
          { label: 'Exam', to: '/menu/academic/examinations/exam' },
          { label: 'Exam Schedule', to: '/menu/academic/examinations/exam-schedule' },
          { label: 'Grade', to: '/menu/academic/examinations/grade' },
          { label: 'Exam Attendance', to: '/menu/academic/examinations/exam-attendance' },
          { label: 'Exam Result', to: '/menu/academic/examinations/exam-result' },
        ],
      },
      {
        label: 'Research',
        children: [
          { label: 'Research', to: '/menu/academic/research/research' },
        ],
      },
      {
        label: 'Finance Collection',
        children: [
          { label: 'Fees Group', to: '/menu/academic/finance-collection/fees-group' },
          { label: 'Fees Type', to: '/menu/academic/finance-collection/fees-type' },
          { label: 'Fees Master', to: '/menu/academic/finance-collection/fees-master' },
          { label: 'Fees Assign', to: '/menu/academic/finance-collection/fees-assign' },
          { label: 'Collect Fees', to: '/menu/academic/finance-collection/collect-fees' },
        ],
      },
      {
        label: 'Library',
        children: [
          { label: 'Library Members', to: '/menu/academic/library/library-members' },
          { label: 'Books', to: '/menu/academic/library/books' },
          { label: 'Issue Book', to: '/menu/academic/library/issue-book' },
          { label: 'Return', to: '/menu/academic/library/return' },
        ],
      },
      {
        label: 'Sports',
        children: [
          { label: 'Hostel', to: '/menu/academic/sports/hostel' },
          { label: 'Hostel List', to: '/menu/academic/sports/hostel-list' },
          { label: 'Hostel Rooms', to: '/menu/academic/sports/hostel-rooms' },
          { label: 'Room Type', to: '/menu/academic/sports/room-type' },
        ],
      },
      {
        label: 'Transport',
        children: [
          { label: 'Routes', to: '/menu/academic/transport/routes' },
          { label: 'Vehicle Drivers', to: '/menu/academic/transport/vehicle-drivers' },
          { label: 'Vehicle', to: '/menu/academic/transport/vehicle' },
          { label: 'Assign Vehicle', to: '/menu/academic/transport/assign-vehicle' },
        ],
      },
    ],
  },
  {
    title: 'HRM',
    items: [
      {
        label: 'Staffs',
        children: [
          { label: 'Departments', to: '/menu/hrm/staffs/departments' },
          { label: 'Designation', to: '/menu/hrm/staffs/designation' },
          { label: 'Attendance', to: '/menu/hrm/staffs/attendance' },
        ],
      },
      {
        label: 'Student Attendance',
        children: [
          { label: 'Teacher Attendance', to: '/menu/hrm/student-attendance/teacher-attendance' },
          { label: 'Staff Attendance', to: '/menu/hrm/student-attendance/staff-attendance' },
        ],
      },
      {
        label: 'Leave',
        children: [
          { label: 'List of Leaves', to: '/menu/hrm/leave/list-of-leaves' },
          { label: 'Approve Request', to: '/menu/hrm/leave/approve-request' },
        ],
      },
      {
        label: 'Holidays',
        children: [
          { label: 'Holidays', to: '/menu/hrm/holidays/holidays' },
        ],
      },
      {
        label: 'Payroll',
        children: [
          { label: 'Payroll', to: '/menu/hrm/payroll/payroll' },
        ],
      },
      {
        label: 'Finance Accounts',
        children: [
          { label: 'Accounts', to: '/menu/hrm/finance-accounts/accounts' },
          { label: 'Expenses', to: '/menu/hrm/finance-accounts/expenses' },
          { label: 'Income Category', to: '/menu/hrm/finance-accounts/income-category' },
          { label: 'Income', to: '/menu/hrm/finance-accounts/income' },
          { label: 'Transfers', to: '/menu/hrm/finance-accounts/transfers' },
        ],
      },
      {
        label: 'Announcements',
        children: [
          { label: 'Notice Board', to: '/menu/hrm/announcements/notice-board' },
        ],
      },
      {
        label: 'Events',
        children: [
          { label: 'Events', to: '/menu/hrm/events/events' },
        ],
      },
      {
        label: 'Attendance Report',
        children: [
          { label: 'Class Report', to: '/menu/hrm/attendance-report/class-report' },
          { label: 'Student Report', to: '/menu/hrm/attendance-report/student-report' },
          { label: 'Grade Report', to: '/menu/hrm/attendance-report/grade-report' },
          { label: 'Leave Report', to: '/menu/hrm/attendance-report/leave-report' },
        ],
      },
    ],
  },
  {
    title: 'Fees Report',
    items: [
      { label: 'Fees Report', to: '/menu/fees-report' },
    ],
  },
  {
    title: 'User Management',
    items: [
      { label: 'Users', to: '/menu/user-management/users' },
      { label: 'Roles & Permissions', to: '/menu/user-management/roles-and-permissions' },
      { label: 'Delete Account Request', to: '/menu/user-management/delete-account-request' },
    ],
  },
  {
    title: 'Membership Plan',
    items: [
      { label: 'Membership Plans', to: '/menu/membership-plan/membership-plans' },
      { label: 'Membership Addons', to: '/menu/membership-plan/membership-addons' },
      { label: 'Transactions', to: '/menu/membership-plan/transactions' },
    ],
  },
  {
    title: 'CMS',
    items: [
      {
        label: 'Pages',
        children: [
          { label: 'Blog', to: '/menu/cms/pages/blog' },
          { label: 'All Blogs', to: '/menu/cms/pages/all-blogs' },
          { label: 'Categories', to: '/menu/cms/pages/categories' },
          { label: 'Tags', to: '/menu/cms/pages/tags' },
        ],
      },
      {
        label: 'Location',
        children: [
          { label: 'Countries', to: '/menu/cms/location/countries' },
          { label: 'States', to: '/menu/cms/location/states' },
          { label: 'Cities', to: '/menu/cms/location/cities' },
        ],
      },
      {
        label: 'FAQ',
        children: [
          { label: 'FAQ', to: '/menu/cms/faq/faq' },
        ],
      },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Contact Messages', to: '/menu/support/contact-messages' },
      { label: 'Tickets', to: '/menu/support/tickets' },
    ],
  },
  {
    title: 'Pages',
    items: [
      {
        label: 'Authentication',
        children: [
          { label: 'Login', to: '/menu/pages/authentication/login' },
          { label: 'Forgot Password', to: '/menu/pages/authentication/forgot-password' },
          { label: 'Reset Password', to: '/menu/pages/authentication/reset-password' },
          { label: 'Email Verification', to: '/menu/pages/authentication/email-verification' },
          { label: 'Lock Screen', to: '/menu/pages/authentication/lock-screen' },
        ],
      },
      {
        label: 'Error Pages',
        children: [
          { label: '401 Error', to: '/menu/pages/error-pages/401-error' },
          { label: '403 Error', to: '/menu/pages/error-pages/403-error' },
          { label: '404 Error', to: '/menu/pages/error-pages/404-error' },
        ],
      },
      { label: 'Blank Page', to: '/menu/pages/blank-page' },
      { label: 'Coming Soon', to: '/menu/pages/coming-soon' },
      { label: 'Under Maintenance', to: '/menu/pages/under-maintenance' },
    ],
  },
  {
    title: 'General Settings',
    items: [
      { label: 'Profile Settings', to: '/menu/general-settings/profile-settings' },
      { label: 'Security Settings', to: '/menu/general-settings/security-settings' },
      { label: 'Notification', to: '/menu/general-settings/notification' },
      { label: 'General Settings', to: '/menu/general-settings/general-settings' },
      {
        label: 'Website Settings',
        children: [
          { label: 'Company Info', to: '/menu/general-settings/website-settings/company-info' },
          { label: 'Website Settings', to: '/menu/general-settings/website-settings/website-settings' },
          { label: 'Prefixes', to: '/menu/general-settings/website-settings/prefixes' },
          { label: 'Social Authentication', to: '/menu/general-settings/website-settings/social-authentication' },
          { label: 'Language', to: '/menu/general-settings/website-settings/language' },
        ],
      },
      {
        label: 'App Settings',
        children: [
          { label: 'Mobile Settings', to: '/menu/general-settings/app-settings/mobile-settings' },
        ],
      },
      {
        label: 'System Settings',
        children: [
          { label: 'Email Settings', to: '/menu/general-settings/system-settings/email-settings' },
          { label: 'SMS Settings', to: '/menu/general-settings/system-settings/sms-settings' },
          { label: 'OTP Settings', to: '/menu/general-settings/system-settings/otp-settings' },
          { label: 'GDPR Cookies', to: '/menu/general-settings/system-settings/gdpr-cookies' },
        ],
      },
      {
        label: 'Financial Settings',
        children: [
          { label: 'Payment Gateway', to: '/menu/general-settings/financial-settings/payment-gateway' },
          { label: 'Tax Settings', to: '/menu/general-settings/financial-settings/tax-settings' },
        ],
      },
      {
        label: 'Academic Settings',
        children: [
          { label: 'School Settings', to: '/menu/general-settings/academic-settings/school-settings' },
          { label: 'Badge', to: '/menu/general-settings/academic-settings/badge' },
        ],
      },
      {
        label: 'Other Settings',
        children: [
          { label: 'Storage', to: '/menu/general-settings/other-settings/storage' },
          { label: 'S3 Package', to: '/menu/general-settings/other-settings/s3-package' },
        ],
      },
    ],
  }
]

function collectMenuRoutes(items, parentPath = []) {
  return items.flatMap((item) => {
    const nextPath = [...parentPath, item.label]
    const selfRoute = item.to
      ? [{
          path: item.to,
          title: item.label,
          sectionPath: nextPath,
        }]
      : []

    const childRoutes = Array.isArray(item.children)
      ? collectMenuRoutes(item.children, nextPath)
      : []

    return [...selfRoute, ...childRoutes]
  })
}

export const menuRoutes = sidebarMenu.flatMap((group) =>
  collectMenuRoutes(group.items, [group.title])
)

export const dashboardCards = [
  { label: 'Students', tone: 'blue' },
  { label: 'Teachers', tone: 'cyan' },
  { label: 'Parents', tone: 'amber' },
  { label: 'Notices', tone: 'green' },
]

export const adminStats = [
  { label: 'Total Students', valueKey: 'students', tone: 'blue', delta: '+12%' },
  { label: 'Total Teachers', valueKey: 'teachers', tone: 'cyan', delta: '+8%' },
  { label: 'Total Parents', valueKey: 'parents', tone: 'amber', delta: '+4%' },
  { label: 'Open Notices', valueKey: 'notices', tone: 'green', delta: '+2%' },
]

export const adminTiles = [
  { label: 'Fee Collection', tone: 'blue' },
  { label: 'Attendance', tone: 'green' },
  { label: 'Leave Requests', tone: 'amber' },
  { label: 'Exam Results', tone: 'cyan' },
]

export const attendanceDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

export const studentSchedule = [
  { title: 'Mathematics', time: '09:00 AM', room: 'Room 12' },
  { title: 'Science Lab', time: '10:30 AM', room: 'Lab 2' },
  { title: 'English', time: '12:00 PM', room: 'Room 08' },
  { title: 'Computer', time: '02:00 PM', room: 'Lab 1' },
]

export const teacherTasks = [
  { title: 'Prepare lesson plan', status: 'Pending' },
  { title: 'Review assignments', status: 'In progress' },
  { title: 'Mark attendance', status: 'Completed' },
  { title: 'Upload results', status: 'Pending' },
]

export const parentHighlights = [
  { title: 'Fees due', value: 'NPR 3,500', tone: 'amber' },
  { title: 'Attendance', value: '95%', tone: 'green' },
  { title: 'Homework', value: '4 items', tone: 'blue' },
  { title: 'Notices', value: '2 new', tone: 'cyan' },
]

export const schedule = [
  ['Mon', 'Chemistry', '9:00 AM'],
  ['Tue', 'Mathematics', '10:00 AM'],
  ['Wed', 'English', '11:30 AM'],
  ['Thu', 'Computer Lab', '1:00 PM'],
  ['Fri', 'Sports', '3:00 PM'],
]

export { fallbackData } from './fallbackData'

export const apiViews = {
  students: {
    endpoint: '/api/students',
    columns: ['ID', 'Name', 'Class', 'Section', 'Status', 'Attendance'],
    map: (items) => items.map((item) => [item.id, item.name, item.className, item.section, item.status, `${item.attendancePercent}%`]),
  },
  teachers: {
    endpoint: '/api/teachers',
    columns: ['ID', 'Name', 'Subject', 'Email', 'Phone', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.subject, item.email, item.phone, item.status]),
  },
  parents: {
    endpoint: '/api/parents',
    columns: ['ID', 'Name', 'Relation', 'Phone', 'Email', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.relation, item.phone, item.email, item.status]),
  },
  attendance: {
    endpoint: '/api/attendance',
    columns: ['Class', 'Attendance', 'Remark'],
    map: (items) => items.map((item) => [item.className, `${item.attendancePercent}%`, item.remark]),
  },
  exams: {
    endpoint: '/api/exams',
    columns: ['Exam', 'Subject', 'Grade'],
    map: (items) => items.map((item) => [item.examName, item.subject, item.grade]),
  },
  fees: {
    endpoint: '/api/fees',
    columns: ['Fee Type', 'Amount', 'Status'],
    map: (items) => items.map((item) => [item.feeType, item.amount, item.status]),
  },
  notices: {
    endpoint: '/api/notices',
    columns: ['Title', 'Audience', 'Status'],
    map: (items) => items.map((item) => [item.title, item.audience, item.status]),
  },
  subjects: {
    endpoint: '/api/subjects',
    columns: ['Code', 'Name', 'Teacher', 'Status'],
    map: (items) => items.map((item) => [item.code, item.name, item.teacher, item.status]),
  },
  classes: {
    endpoint: '/api/classes',
    columns: ['Code', 'Name', 'Sections', 'Students', 'Status'],
    map: (items) => items.map((item) => [item.code, item.name, item.sectionCount, item.studentCount, item.status]),
  },
  sections: {
    endpoint: '/api/sections',
    columns: ['Name', 'Class', 'Teacher', 'Status'],
    map: (items) => items.map((item) => [item.name, item.className, item.teacher, item.status]),
  },
  routine: {
    endpoint: '/api/routine',
    columns: ['Period', 'Subject', 'Teacher', 'Time', 'Status'],
    map: (items) => items.map((item) => [item.period, item.subject, item.teacher, item.time, item.status]),
  },
  syllabus: {
    endpoint: '/api/syllabus',
    columns: ['Subject', 'Topics', 'Progress', 'Status'],
    map: (items) => items.map((item) => [item.subject, item.topics, `${item.progress}%`, item.status]),
  },
  homework: {
    endpoint: '/api/homework',
    columns: ['Title', 'Class', 'Due Date', 'Submitted', 'Status'],
    map: (items) => items.map((item) => [item.title, item.className, item.dueDate, item.submitted, item.status]),
  },
  assignments: {
    endpoint: '/api/assignments',
    columns: ['Title', 'Class', 'Due Date', 'Submitted', 'Status'],
    map: (items) => items.map((item) => [item.title, item.className, item.dueDate, item.submitted, item.status]),
  },
  // Application Menu Items
  chat: {
    endpoint: '/api/chat',
    columns: ['Chat ID', 'Title', 'Members', 'Last Message', 'Status'],
    map: (items) => items.map((item) => [item.id, item.title, item.members, item.lastMessage, item.status]),
  },
  calendar: {
    endpoint: '/api/calendar',
    columns: ['ID', 'Event', 'Date', 'Time', 'Location', 'Status'],
    map: (items) => items.map((item) => [item.id, item.title, item.date, item.time, item.location, item.status]),
  },
  email: {
    endpoint: '/api/email',
    columns: ['ID', 'From', 'Subject', 'Date', 'Status'],
    map: (items) => items.map((item) => [item.id, item.from, item.subject, item.date, item.status]),
  },
  todo: {
    endpoint: '/api/todo',
    columns: ['ID', 'Title', 'Due Date', 'Priority', 'Status'],
    map: (items) => items.map((item) => [item.id, item.title, item.dueDate, item.priority, item.status]),
  },
  notes: {
    endpoint: '/api/notes',
    columns: ['ID', 'Title', 'Last Modified', 'Status'],
    map: (items) => items.map((item) => [item.id, item.title, item.lastModified, item.status]),
  },
  filemanager: {
    endpoint: '/api/files',
    columns: ['ID', 'Name', 'Size', 'Type', 'Modified', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.size, item.type, item.modified, item.status]),
  },
  // People Menu Items
  studentpromotion: {
    endpoint: '/api/student-promotion',
    columns: ['ID', 'Student ID', 'From Class', 'To Class', 'Date', 'Status'],
    map: (items) => items.map((item) => [item.id, item.studentId, item.fromClass, item.toClass, item.date, item.status]),
  },
  guardian: {
    endpoint: '/api/parents',
    columns: ['ID', 'Name', 'Relation', 'Phone', 'Email', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.relation, item.phone, item.email, item.status]),
  },
  allteachers: {
    endpoint: '/api/teachers',
    columns: ['ID', 'Name', 'Subject', 'Department', 'Phone', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.subject, item.department, item.phone, item.status]),
  },
  // Academic Menu Items
  allclasses: {
    endpoint: '/api/classes',
    columns: ['ID', 'Name', 'Sections', 'Students', 'Staff', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.sections, item.students, item.staff, item.status]),
  },
  schedule: {
    endpoint: '/api/schedule',
    columns: ['ID', 'Day', 'Class', 'Time', 'Subject', 'Teacher', 'Status'],
    map: (items) => items.map((item) => [item.id, item.day, item.class, item.time, item.subject, item.teacher, item.status]),
  },
  classroom: {
    endpoint: '/api/classrooms',
    columns: ['ID', 'Name', 'Capacity', 'Equipment', 'Floor', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.capacity, item.equipment, item.floor, item.status]),
  },
  classroutine: {
    endpoint: '/api/class-routine',
    columns: ['ID', 'Class', 'Day', 'Period', 'Subject', 'Teacher', 'Status'],
    map: (items) => items.map((item) => [item.id, item.class, item.day, item.period, item.subject, item.teacher, item.status]),
  },
  timetable: {
    endpoint: '/api/timetable',
    columns: ['ID', 'Class', 'Period', 'Subject', 'Teacher', 'Time', 'Status'],
    map: (items) => items.map((item) => [item.id, item.class, item.period, item.subject, item.teacher, item.time, item.status]),
  },
  examschedule: {
    endpoint: '/api/exam-schedule',
    columns: ['ID', 'Exam', 'Subject', 'Date', 'Time', 'Room', 'Status'],
    map: (items) => items.map((item) => [item.id, item.examName, item.subject, item.date, item.time, item.room, item.status]),
  },
  grade: {
    endpoint: '/api/grades',
    columns: ['ID', 'Student ID', 'Exam', 'Subject', 'Score', 'Grade', 'Status'],
    map: (items) => items.map((item) => [item.id, item.studentId, item.exam, item.subject, item.score, item.grade, item.status]),
  },
  examattendance: {
    endpoint: '/api/exam-attendance',
    columns: ['ID', 'Student ID', 'Exam', 'Date', 'Status'],
    map: (items) => items.map((item) => [item.id, item.studentId, item.exam, item.date, item.status]),
  },
  examresult: {
    endpoint: '/api/exam-result',
    columns: ['ID', 'Student ID', 'Exam', 'Score', 'Marks', 'Percentage', 'Status'],
    map: (items) => items.map((item) => [item.id, item.studentId, item.exam, item.totalScore, item.totalMarks, item.percentage, item.status]),
  },
  research: {
    endpoint: '/api/research',
    columns: ['ID', 'Title', 'Teacher', 'Date', 'Status'],
    map: (items) => items.map((item) => [item.id, item.title, item.teacher, item.date, item.status]),
  },
  feesgroup: {
    endpoint: '/api/fees-group',
    columns: ['ID', 'Name', 'Fees', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.fees, item.status]),
  },
  feestype: {
    endpoint: '/api/fees-type',
    columns: ['ID', 'Type', 'Amount', 'Frequency', 'Status'],
    map: (items) => items.map((item) => [item.id, item.type, item.amount, item.frequency, item.status]),
  },
  feesmaster: {
    endpoint: '/api/fees-master',
    columns: ['ID', 'Class', 'Fee Structure', 'Total Amount', 'Status'],
    map: (items) => items.map((item) => [item.id, item.class, item.feeStructure, item.totalAmount, item.status]),
  },
  feesassign: {
    endpoint: '/api/fees-assign',
    columns: ['ID', 'Student ID', 'Class', 'Total Fees', 'Paid', 'Due', 'Status'],
    map: (items) => items.map((item) => [item.id, item.studentId, item.class, item.totalFees, item.paid, item.due, item.status]),
  },
  collectfees: {
    endpoint: '/api/collect-fees',
    columns: ['ID', 'Student ID', 'Amount', 'Date', 'Payment Mode', 'Status'],
    map: (items) => items.map((item) => [item.id, item.studentId, item.amount, item.date, item.paymentMode, item.status]),
  },
  librarymembers: {
    endpoint: '/api/library-members',
    columns: ['ID', 'Member ID', 'Name', 'Type', 'Join Date', 'Status'],
    map: (items) => items.map((item) => [item.id, item.memberId, item.name, item.memberType, item.joinDate, item.status]),
  },
  books: {
    endpoint: '/api/books',
    columns: ['ID', 'Title', 'Author', 'ISBN', 'Quantity', 'Status'],
    map: (items) => items.map((item) => [item.id, item.title, item.author, item.isbn, item.quantity, item.status]),
  },
  issuebook: {
    endpoint: '/api/issue-book',
    columns: ['ID', 'Member ID', 'Book ID', 'Issue Date', 'Due Date', 'Status'],
    map: (items) => items.map((item) => [item.id, item.memberId, item.bookId, item.issueDate, item.dueDate, item.status]),
  },
  returnbook: {
    endpoint: '/api/return-book',
    columns: ['ID', 'Issue ID', 'Return Date', 'Fine', 'Status'],
    map: (items) => items.map((item) => [item.id, item.issueId, item.returnDate, item.fine, item.status]),
  },
  hostel: {
    endpoint: '/api/hostel',
    columns: ['ID', 'Name', 'Capacity', 'Occupied', 'Warden', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.capacity, item.occupied, item.warden, item.status]),
  },
  hostellist: {
    endpoint: '/api/hostel-list',
    columns: ['ID', 'Name', 'Rooms', 'Beds', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.rooms, item.beds, item.status]),
  },
  hostelrooms: {
    endpoint: '/api/hostel-rooms',
    columns: ['ID', 'Hostel ID', 'Room No', 'Capacity', 'Occupied', 'Status'],
    map: (items) => items.map((item) => [item.id, item.hostelId, item.roomNo, item.capacity, item.occupied, item.status]),
  },
  roomtype: {
    endpoint: '/api/room-type',
    columns: ['ID', 'Type', 'Capacity', 'Rate', 'Status'],
    map: (items) => items.map((item) => [item.id, item.type, item.capacity, item.rate, item.status]),
  },
  routes: {
    endpoint: '/api/routes',
    columns: ['ID', 'Name', 'Start Point', 'End Point', 'Distance', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.startPoint, item.endPoint, item.distance, item.status]),
  },
  vehicledrivers: {
    endpoint: '/api/vehicle-drivers',
    columns: ['ID', 'Name', 'License No', 'Phone', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.licenseNo, item.phone, item.status]),
  },
  vehicle: {
    endpoint: '/api/vehicles',
    columns: ['ID', 'Registration No', 'Type', 'Capacity', 'Driver ID', 'Status'],
    map: (items) => items.map((item) => [item.id, item.registrationNo, item.type, item.capacity, item.driverId, item.status]),
  },
  assignvehicle: {
    endpoint: '/api/assign-vehicle',
    columns: ['ID', 'Route ID', 'Vehicle ID', 'Driver ID', 'Schedule', 'Status'],
    map: (items) => items.map((item) => [item.id, item.routeId, item.vehicleId, item.driverId, item.schedule, item.status]),
  },
  // HRM Menu Items
  departments: {
    endpoint: '/api/departments',
    columns: ['ID', 'Name', 'Head', 'Staff', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.head, item.staff, item.status]),
  },
  designation: {
    endpoint: '/api/designation',
    columns: ['ID', 'Title', 'Department', 'Salary', 'Status'],
    map: (items) => items.map((item) => [item.id, item.title, item.department, item.salary, item.status]),
  },
  teacherattendance: {
    endpoint: '/api/teacher-attendance',
    columns: ['ID', 'Employee ID', 'Date', 'Status', 'Time'],
    map: (items) => items.map((item) => [item.id, item.employeeId, item.date, item.status, item.time]),
  },
  staffattendance: {
    endpoint: '/api/staff-attendance',
    columns: ['ID', 'Employee ID', 'Date', 'Status', 'Time'],
    map: (items) => items.map((item) => [item.id, item.employeeId, item.date, item.status, item.time]),
  },
  leavelist: {
    endpoint: '/api/leave-list',
    columns: ['ID', 'Employee ID', 'Type', 'From', 'To', 'Days', 'Status'],
    map: (items) => items.map((item) => [item.id, item.employeeId, item.leaveType, item.from, item.to, item.days, item.status]),
  },
  approverequest: {
    endpoint: '/api/approve-request',
    columns: ['ID', 'Leave ID', 'Employee', 'Type', 'Days', 'Approved By', 'Status'],
    map: (items) => items.map((item) => [item.id, item.leaveId, item.employeeName, item.leaveType, item.days, item.approvedBy, item.status]),
  },
  holidays: {
    endpoint: '/api/holidays',
    columns: ['ID', 'Name', 'Date', 'Type', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.date, item.type, item.status]),
  },
  payroll: {
    endpoint: '/api/payroll',
    columns: ['ID', 'Employee ID', 'Month', 'Base Salary', 'Deductions', 'Net Pay', 'Status'],
    map: (items) => items.map((item) => [item.id, item.employeeId, item.month, item.baseSalary, item.deductions, item.netPay, item.status]),
  },
  accounts: {
    endpoint: '/api/accounts',
    columns: ['ID', 'Account Name', 'Account No', 'Type', 'Balance', 'Status'],
    map: (items) => items.map((item) => [item.id, item.accountName, item.accountNo, item.type, item.balance, item.status]),
  },
  expenses: {
    endpoint: '/api/expenses',
    columns: ['ID', 'Description', 'Amount', 'Date', 'Category', 'Status'],
    map: (items) => items.map((item) => [item.id, item.description, item.amount, item.date, item.category, item.status]),
  },
  incomecategory: {
    endpoint: '/api/income-category',
    columns: ['ID', 'Name', 'Description', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.description, item.status]),
  },
  income: {
    endpoint: '/api/income',
    columns: ['ID', 'Category', 'Amount', 'Date', 'Source', 'Status'],
    map: (items) => items.map((item) => [item.id, item.category, item.amount, item.date, item.source, item.status]),
  },
  transfers: {
    endpoint: '/api/transfers',
    columns: ['ID', 'From Account', 'To Account', 'Amount', 'Date', 'Status'],
    map: (items) => items.map((item) => [item.id, item.fromAccount, item.toAccount, item.amount, item.date, item.status]),
  },
  noticeboard: {
    endpoint: '/api/noticeboard',
    columns: ['ID', 'Title', 'Date', 'Author', 'Status'],
    map: (items) => items.map((item) => [item.id, item.title, item.date, item.author, item.status]),
  },
  events: {
    endpoint: '/api/events',
    columns: ['ID', 'Name', 'Date', 'Time', 'Location', 'Status'],
    map: (items) => items.map((item) => [item.id, item.name, item.date, item.time, item.location, item.status]),
  },
  classreport: {
    endpoint: '/api/class-report',
    columns: ['ID', 'Class', 'Total Days', 'Present Days', 'Percentage', 'Status'],
    map: (items) => items.map((item) => [item.id, item.class, item.totalDays, item.presentDays, item.percentage, item.status]),
  },
  studentreport: {
    endpoint: '/api/student-report',
    columns: ['ID', 'Student ID', 'Total Days', 'Present Days', 'Percentage', 'Status'],
    map: (items) => items.map((item) => [item.id, item.studentId, item.totalDays, item.presentDays, item.percentage, item.status]),
  },
  gradereport: {
    endpoint: '/api/grade-report',
    columns: ['ID', 'Class', 'Average Grade', 'Top Student', 'Status'],
    map: (items) => items.map((item) => [item.id, item.class, item.averageGrade, item.topStudent, item.status]),
  },
  leavereport: {
    endpoint: '/api/leave-report',
    columns: ['ID', 'Employee ID', 'Leave Taken', 'Leave Balance', 'Status'],
    map: (items) => items.map((item) => [item.id, item.employeeId, item.leaveTaken, item.leaveBalance, item.status]),
  },
  // User Management
  users: {
    endpoint: '/api/users',
    columns: ['ID', 'Username', 'Email', 'Role', 'Status'],
    map: (items) => items.map((item) => [item.id, item.username, item.email, item.role, item.status]),
  },
  rolesandpermissions: {
    endpoint: '/api/roles',
    columns: ['ID', 'Role', 'Permissions', 'Status'],
    map: (items) => items.map((item) => [item.id, item.role, item.permissions, item.status]),
  },
  deleteaccountrequest: {
    endpoint: '/api/delete-account',
    columns: ['ID', 'User ID', 'Reason', 'Request Date', 'Status'],
    map: (items) => items.map((item) => [item.id, item.userId, item.reason, item.requestDate, item.status]),
  },
}

export const statusTones = {
  Active: 'success',
  Connected: 'success',
  Published: 'success',
  Paid: 'success',
  Scheduled: 'neutral',
  Pending: 'warning',
  Due: 'warning',
  Draft: 'warning',
  Leave: 'warning',
  Inactive: 'neutral',
}

const statusOptions = ['Active', 'Inactive', 'Pending', 'Leave', 'Connected', 'Scheduled', 'Published', 'Draft', 'Paid', 'Due']

export const crudSchemas = {
  students: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Student ID' },
      { name: 'name', label: 'Name' },
      { name: 'className', label: 'Class' },
      { name: 'section', label: 'Section' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
      { name: 'attendancePercent', label: 'Attendance Percent', type: 'number' },
      { name: 'guardian', label: 'Guardian' },
    ],
  },
  teachers: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Teacher ID' },
      { name: 'name', label: 'Name' },
      { name: 'subject', label: 'Subject' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'phone', label: 'Phone' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  parents: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Parent ID' },
      { name: 'name', label: 'Name' },
      { name: 'relation', label: 'Relation' },
      { name: 'phone', label: 'Phone' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  attendance: {
    idField: 'className',
    fields: [
      { name: 'className', label: 'Class Name' },
      { name: 'attendancePercent', label: 'Attendance Percent', type: 'number' },
      { name: 'remark', label: 'Remark' },
    ],
  },
  exams: {
    idField: 'examName',
    fields: [
      { name: 'examName', label: 'Exam Name' },
      { name: 'subject', label: 'Subject' },
      { name: 'grade', label: 'Grade' },
    ],
  },
  fees: {
    idField: 'feeType',
    fields: [
      { name: 'feeType', label: 'Fee Type' },
      { name: 'amount', label: 'Amount' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  notices: {
    idField: 'title',
    fields: [
      { name: 'title', label: 'Title' },
      { name: 'audience', label: 'Audience' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  subjects: {
    idField: 'code',
    fields: [
      { name: 'code', label: 'Subject Code' },
      { name: 'name', label: 'Name' },
      { name: 'teacher', label: 'Teacher' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  classes: {
    idField: 'code',
    fields: [
      { name: 'code', label: 'Class Code' },
      { name: 'name', label: 'Name' },
      { name: 'sectionCount', label: 'Section Count', type: 'number' },
      { name: 'studentCount', label: 'Student Count', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  sections: {
    idField: 'name',
    fields: [
      { name: 'name', label: 'Section Name' },
      { name: 'className', label: 'Class Name' },
      { name: 'teacher', label: 'Teacher' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  routine: {
    idField: 'period',
    fields: [
      { name: 'period', label: 'Period' },
      { name: 'subject', label: 'Subject' },
      { name: 'teacher', label: 'Teacher' },
      { name: 'time', label: 'Time' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  syllabus: {
    idField: 'subject',
    fields: [
      { name: 'subject', label: 'Subject' },
      { name: 'topics', label: 'Topics', type: 'number' },
      { name: 'progress', label: 'Progress', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  homework: {
    idField: 'title',
    fields: [
      { name: 'title', label: 'Title' },
      { name: 'className', label: 'Class Name' },
      { name: 'dueDate', label: 'Due Date' },
      { name: 'submitted', label: 'Submitted' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  assignments: {
    idField: 'title',
    fields: [
      { name: 'title', label: 'Title' },
      { name: 'className', label: 'Class Name' },
      { name: 'dueDate', label: 'Due Date' },
      { name: 'submitted', label: 'Submitted' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  // Application Menu Items
  chat: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Chat ID' },
      { name: 'title', label: 'Chat Title' },
      { name: 'members', label: 'Members Count', type: 'number' },
      { name: 'lastMessage', label: 'Last Message' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  calendar: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Event ID' },
      { name: 'title', label: 'Event Title' },
      { name: 'date', label: 'Date' },
      { name: 'time', label: 'Time' },
      { name: 'location', label: 'Location' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  email: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Email ID' },
      { name: 'from', label: 'From Email' },
      { name: 'subject', label: 'Subject' },
      { name: 'date', label: 'Date' },
      { name: 'status', label: 'Status', type: 'select', options: ['Read', 'Unread'] },
    ],
  },
  todo: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'To-Do ID' },
      { name: 'title', label: 'Title' },
      { name: 'dueDate', label: 'Due Date' },
      { name: 'priority', label: 'Priority', type: 'select', options: ['High', 'Medium', 'Low'] },
      { name: 'status', label: 'Status', type: 'select', options: ['Pending', 'In Progress', 'Completed'] },
    ],
  },
  notes: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Note ID' },
      { name: 'title', label: 'Title' },
      { name: 'content', label: 'Content', type: 'textarea', rows: 4 },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  filemanager: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'File ID' },
      { name: 'name', label: 'File Name' },
      { name: 'size', label: 'Size' },
      { name: 'type', label: 'File Type' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  // People Menu Items
  studentpromotion: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Promotion ID' },
      { name: 'studentId', label: 'Student ID' },
      { name: 'fromClass', label: 'From Class' },
      { name: 'toClass', label: 'To Class' },
      { name: 'date', label: 'Promotion Date' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  guardian: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Guardian ID' },
      { name: 'name', label: 'Name' },
      { name: 'relation', label: 'Relation' },
      { name: 'phone', label: 'Phone' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  allteachers: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Teacher ID' },
      { name: 'name', label: 'Name' },
      { name: 'subject', label: 'Subject' },
      { name: 'department', label: 'Department' },
      { name: 'phone', label: 'Phone' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  // Academic Menu Items
  allclasses: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Class ID' },
      { name: 'name', label: 'Class Name' },
      { name: 'sections', label: 'Sections', type: 'number' },
      { name: 'students', label: 'Students', type: 'number' },
      { name: 'staff', label: 'Staff', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  schedule: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Schedule ID' },
      { name: 'day', label: 'Day' },
      { name: 'class', label: 'Class' },
      { name: 'time', label: 'Time' },
      { name: 'subject', label: 'Subject' },
      { name: 'teacher', label: 'Teacher' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  classroom: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Room ID' },
      { name: 'name', label: 'Room Name' },
      { name: 'capacity', label: 'Capacity', type: 'number' },
      { name: 'equipment', label: 'Equipment' },
      { name: 'floor', label: 'Floor' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  classroutine: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Routine ID' },
      { name: 'class', label: 'Class' },
      { name: 'day', label: 'Day' },
      { name: 'period', label: 'Period' },
      { name: 'subject', label: 'Subject' },
      { name: 'teacher', label: 'Teacher' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  timetable: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Timetable ID' },
      { name: 'class', label: 'Class' },
      { name: 'period', label: 'Period' },
      { name: 'subject', label: 'Subject' },
      { name: 'teacher', label: 'Teacher' },
      { name: 'time', label: 'Time' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  examschedule: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Exam Schedule ID' },
      { name: 'examName', label: 'Exam Name' },
      { name: 'subject', label: 'Subject' },
      { name: 'date', label: 'Date' },
      { name: 'time', label: 'Time' },
      { name: 'room', label: 'Room' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  grade: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Grade ID' },
      { name: 'studentId', label: 'Student ID' },
      { name: 'exam', label: 'Exam' },
      { name: 'subject', label: 'Subject' },
      { name: 'score', label: 'Score', type: 'number' },
      { name: 'grade', label: 'Grade' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  examattendance: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Attendance ID' },
      { name: 'studentId', label: 'Student ID' },
      { name: 'exam', label: 'Exam' },
      { name: 'date', label: 'Date' },
      { name: 'status', label: 'Status', type: 'select', options: ['Present', 'Absent', 'Sick'] },
    ],
  },
  examresult: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Result ID' },
      { name: 'studentId', label: 'Student ID' },
      { name: 'exam', label: 'Exam' },
      { name: 'totalScore', label: 'Total Score', type: 'number' },
      { name: 'totalMarks', label: 'Total Marks', type: 'number' },
      { name: 'percentage', label: 'Percentage', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  research: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Research ID' },
      { name: 'title', label: 'Title' },
      { name: 'teacher', label: 'Teacher' },
      { name: 'date', label: 'Date' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  feesgroup: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Fee Group ID' },
      { name: 'name', label: 'Name' },
      { name: 'fees', label: 'Fees' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  feestype: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Fee Type ID' },
      { name: 'type', label: 'Fee Type' },
      { name: 'amount', label: 'Amount', type: 'number' },
      { name: 'frequency', label: 'Frequency' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  feesmaster: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Fee Master ID' },
      { name: 'class', label: 'Class' },
      { name: 'feeStructure', label: 'Fee Structure' },
      { name: 'totalAmount', label: 'Total Amount', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  feesassign: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Assignment ID' },
      { name: 'studentId', label: 'Student ID' },
      { name: 'class', label: 'Class' },
      { name: 'totalFees', label: 'Total Fees', type: 'number' },
      { name: 'paid', label: 'Paid', type: 'number' },
      { name: 'due', label: 'Due', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: ['Paid', 'Partial', 'Due'] },
    ],
  },
  collectfees: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Collection ID' },
      { name: 'studentId', label: 'Student ID' },
      { name: 'amount', label: 'Amount', type: 'number' },
      { name: 'date', label: 'Date' },
      { name: 'paymentMode', label: 'Payment Mode' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  librarymembers: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Member ID' },
      { name: 'memberId', label: 'Library Member ID' },
      { name: 'name', label: 'Name' },
      { name: 'memberType', label: 'Member Type' },
      { name: 'joinDate', label: 'Join Date' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  books: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Book ID' },
      { name: 'title', label: 'Title' },
      { name: 'author', label: 'Author' },
      { name: 'isbn', label: 'ISBN' },
      { name: 'quantity', label: 'Quantity', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  issuebook: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Issue ID' },
      { name: 'memberId', label: 'Member ID' },
      { name: 'bookId', label: 'Book ID' },
      { name: 'issueDate', label: 'Issue Date' },
      { name: 'dueDate', label: 'Due Date' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  returnbook: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Return ID' },
      { name: 'issueId', label: 'Issue ID' },
      { name: 'returnDate', label: 'Return Date' },
      { name: 'fine', label: 'Fine', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  hostel: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Hostel ID' },
      { name: 'name', label: 'Hostel Name' },
      { name: 'capacity', label: 'Capacity', type: 'number' },
      { name: 'occupied', label: 'Occupied', type: 'number' },
      { name: 'warden', label: 'Warden' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  hostellist: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Hostel ID' },
      { name: 'name', label: 'Hostel Name' },
      { name: 'rooms', label: 'Rooms', type: 'number' },
      { name: 'beds', label: 'Beds', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  hostelrooms: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Room ID' },
      { name: 'hostelId', label: 'Hostel ID' },
      { name: 'roomNo', label: 'Room Number' },
      { name: 'capacity', label: 'Capacity', type: 'number' },
      { name: 'occupied', label: 'Occupied', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  roomtype: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Room Type ID' },
      { name: 'type', label: 'Type' },
      { name: 'capacity', label: 'Capacity', type: 'number' },
      { name: 'rate', label: 'Rate', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  routes: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Route ID' },
      { name: 'name', label: 'Route Name' },
      { name: 'startPoint', label: 'Start Point' },
      { name: 'endPoint', label: 'End Point' },
      { name: 'distance', label: 'Distance (km)', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  vehicledrivers: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Driver ID' },
      { name: 'name', label: 'Name' },
      { name: 'licenseNo', label: 'License Number' },
      { name: 'phone', label: 'Phone' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  vehicle: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Vehicle ID' },
      { name: 'registrationNo', label: 'Registration Number' },
      { name: 'type', label: 'Type' },
      { name: 'capacity', label: 'Capacity', type: 'number' },
      { name: 'driverId', label: 'Driver ID' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  assignvehicle: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Assignment ID' },
      { name: 'routeId', label: 'Route ID' },
      { name: 'vehicleId', label: 'Vehicle ID' },
      { name: 'driverId', label: 'Driver ID' },
      { name: 'schedule', label: 'Schedule' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  // HRM Menu Items
  departments: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Department ID' },
      { name: 'name', label: 'Department Name' },
      { name: 'head', label: 'Department Head' },
      { name: 'staff', label: 'Staff Count', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  designation: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Designation ID' },
      { name: 'title', label: 'Title' },
      { name: 'department', label: 'Department' },
      { name: 'salary', label: 'Salary', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  teacherattendance: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Attendance ID' },
      { name: 'employeeId', label: 'Employee ID' },
      { name: 'date', label: 'Date' },
      { name: 'status', label: 'Status', type: 'select', options: ['Present', 'Absent', 'Late'] },
      { name: 'time', label: 'Time' },
    ],
  },
  staffattendance: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Attendance ID' },
      { name: 'employeeId', label: 'Employee ID' },
      { name: 'date', label: 'Date' },
      { name: 'status', label: 'Status', type: 'select', options: ['Present', 'Absent', 'Late'] },
      { name: 'time', label: 'Time' },
    ],
  },
  leavelist: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Leave ID' },
      { name: 'employeeId', label: 'Employee ID' },
      { name: 'leaveType', label: 'Leave Type' },
      { name: 'from', label: 'From Date' },
      { name: 'to', label: 'To Date' },
      { name: 'days', label: 'Days', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  approverequest: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Request ID' },
      { name: 'leaveId', label: 'Leave ID' },
      { name: 'employeeName', label: 'Employee Name' },
      { name: 'leaveType', label: 'Leave Type' },
      { name: 'days', label: 'Days', type: 'number' },
      { name: 'approvedBy', label: 'Approved By' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  holidays: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Holiday ID' },
      { name: 'name', label: 'Holiday Name' },
      { name: 'date', label: 'Date' },
      { name: 'type', label: 'Type' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  payroll: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Payroll ID' },
      { name: 'employeeId', label: 'Employee ID' },
      { name: 'month', label: 'Month' },
      { name: 'baseSalary', label: 'Base Salary', type: 'number' },
      { name: 'deductions', label: 'Deductions', type: 'number' },
      { name: 'netPay', label: 'Net Pay', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  accounts: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Account ID' },
      { name: 'accountName', label: 'Account Name' },
      { name: 'accountNo', label: 'Account Number' },
      { name: 'type', label: 'Type' },
      { name: 'balance', label: 'Balance', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  expenses: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Expense ID' },
      { name: 'description', label: 'Description' },
      { name: 'amount', label: 'Amount', type: 'number' },
      { name: 'date', label: 'Date' },
      { name: 'category', label: 'Category' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  incomecategory: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Category ID' },
      { name: 'name', label: 'Category Name' },
      { name: 'description', label: 'Description' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  income: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Income ID' },
      { name: 'category', label: 'Category' },
      { name: 'amount', label: 'Amount', type: 'number' },
      { name: 'date', label: 'Date' },
      { name: 'source', label: 'Source' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  transfers: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Transfer ID' },
      { name: 'fromAccount', label: 'From Account' },
      { name: 'toAccount', label: 'To Account' },
      { name: 'amount', label: 'Amount', type: 'number' },
      { name: 'date', label: 'Date' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  noticeboard: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Notice ID' },
      { name: 'title', label: 'Title' },
      { name: 'content', label: 'Content', type: 'textarea', rows: 4 },
      { name: 'date', label: 'Date' },
      { name: 'author', label: 'Author' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  events: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Event ID' },
      { name: 'name', label: 'Event Name' },
      { name: 'date', label: 'Date' },
      { name: 'time', label: 'Time' },
      { name: 'location', label: 'Location' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  classreport: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Report ID' },
      { name: 'class', label: 'Class' },
      { name: 'totalDays', label: 'Total Days', type: 'number' },
      { name: 'presentDays', label: 'Present Days', type: 'number' },
      { name: 'percentage', label: 'Percentage', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  studentreport: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Report ID' },
      { name: 'studentId', label: 'Student ID' },
      { name: 'totalDays', label: 'Total Days', type: 'number' },
      { name: 'presentDays', label: 'Present Days', type: 'number' },
      { name: 'percentage', label: 'Percentage', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  gradereport: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Report ID' },
      { name: 'class', label: 'Class' },
      { name: 'averageGrade', label: 'Average Grade' },
      { name: 'topStudent', label: 'Top Student' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  leavereport: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Report ID' },
      { name: 'employeeId', label: 'Employee ID' },
      { name: 'leaveTaken', label: 'Leave Taken', type: 'number' },
      { name: 'leaveBalance', label: 'Leave Balance', type: 'number' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  // User Management
  users: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'User ID' },
      { name: 'username', label: 'Username' },
      { name: 'email', label: 'Email', type: 'email' },
      { name: 'role', label: 'Role' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  rolesandpermissions: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Role ID' },
      { name: 'role', label: 'Role Name' },
      { name: 'permissions', label: 'Permissions' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
  deleteaccountrequest: {
    idField: 'id',
    fields: [
      { name: 'id', label: 'Request ID' },
      { name: 'userId', label: 'User ID' },
      { name: 'reason', label: 'Reason' },
      { name: 'requestDate', label: 'Request Date' },
      { name: 'status', label: 'Status', type: 'select', options: statusOptions },
    ],
  },
}
