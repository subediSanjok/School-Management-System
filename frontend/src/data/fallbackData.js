export const fallbackData = {
  students: [
    { id: 'ST-101', name: 'Aarav Shah', className: 'Grade 10', section: 'A', status: 'Active', attendancePercent: 95 },
    { id: 'ST-102', name: 'Ayesha Khan', className: 'Grade 9', section: 'B', status: 'Active', attendancePercent: 91 },
    { id: 'ST-103', name: 'Riya Gurung', className: 'Grade 11', section: 'A', status: 'Active', attendancePercent: 88 },
    { id: 'ST-104', name: 'Niraj Rai', className: 'Grade 8', section: 'C', status: 'Inactive', attendancePercent: 72 },
  ],
  teachers: [
    { id: 'TE-201', name: 'Mira Thapa', subject: 'Science', email: 'mira@example.com', phone: '9800000001', status: 'Active' },
    { id: 'TE-202', name: 'Sanjay Patel', subject: 'Math', email: 'sanjay@example.com', phone: '9800000002', status: 'Active' },
    { id: 'TE-203', name: 'Bina Sharma', subject: 'English', email: 'bina@example.com', phone: '9800000003', status: 'Leave' },
    { id: 'TE-204', name: 'Ramesh Joshi', subject: 'Computer', email: 'ramesh@example.com', phone: '9800000004', status: 'Active' },
  ],
  parents: [
    { id: 'PR-301', name: 'Anil Sharma', relation: 'Father', phone: '9801000001', email: 'anil@example.com', status: 'Connected' },
    { id: 'PR-302', name: 'Rupa KC', relation: 'Mother', phone: '9801000002', email: 'rupa@example.com', status: 'Connected' },
    { id: 'PR-303', name: 'Madan Rai', relation: 'Guardian', phone: '9801000003', email: 'madan@example.com', status: 'Pending' },
    { id: 'PR-304', name: 'Sita Gurung', relation: 'Mother', phone: '9801000004', email: 'sita@example.com', status: 'Connected' },
  ],
  attendance: [
    { className: 'Grade 10', attendancePercent: 96, remark: 'Excellent' },
    { className: 'Grade 9', attendancePercent: 92, remark: 'Strong' },
    { className: 'Grade 11', attendancePercent: 89, remark: 'Good' },
    { className: 'Grade 8', attendancePercent: 84, remark: 'Needs review' },
  ],
  exams: [
    { examName: 'Mid Term', subject: 'Mathematics', grade: 'A' },
    { examName: 'Mid Term', subject: 'Science', grade: 'A-' },
    { examName: 'Final', subject: 'English', grade: 'B+' },
    { examName: 'Quiz', subject: 'Computer', grade: 'A' },
  ],
  fees: [
    { feeType: 'Tuition', amount: 'NPR 12,000', status: 'Paid' },
    { feeType: 'Transport', amount: 'NPR 3,500', status: 'Due' },
    { feeType: 'Lab', amount: 'NPR 1,800', status: 'Paid' },
    { feeType: 'Library', amount: 'NPR 500', status: 'Pending' },
  ],
  notices: [
    { title: 'Annual sports meet', audience: 'Students', status: 'Published' },
    { title: 'Parent meeting', audience: 'Parents', status: 'Scheduled' },
    { title: 'Midterm timetable', audience: 'All', status: 'Published' },
    { title: 'Holiday notice', audience: 'All', status: 'Draft' },
  ],
  subjects: [
    { code: 'SUB-101', name: 'Mathematics', teacher: 'Mr. Patel', status: 'Active' },
    { code: 'SUB-102', name: 'Science', teacher: 'Ms. Thapa', status: 'Active' },
    { code: 'SUB-103', name: 'English', teacher: 'Ms. Sharma', status: 'Active' },
  ],
  classes: [
    { code: 'CL-1', name: 'Grade 8', sectionCount: 3, studentCount: 96, status: 'Active' },
    { code: 'CL-2', name: 'Grade 9', sectionCount: 4, studentCount: 104, status: 'Active' },
    { code: 'CL-3', name: 'Grade 10', sectionCount: 4, studentCount: 112, status: 'Active' },
  ],
  sections: [
    { name: 'Grade 8-A', className: 'Grade 8', teacher: 'Ms. Sita', status: 'Active' },
    { name: 'Grade 9-B', className: 'Grade 9', teacher: 'Mr. Deepak', status: 'Active' },
    { name: 'Grade 10-A', className: 'Grade 10', teacher: 'Ms. Rina', status: 'Active' },
  ],
  routine: [
    { period: 'P1', subject: 'Mathematics', teacher: 'Mr. Patel', time: '09:00 AM', status: 'Active' },
    { period: 'P2', subject: 'Science', teacher: 'Ms. Thapa', time: '10:00 AM', status: 'Active' },
    { period: 'P3', subject: 'English', teacher: 'Ms. Sharma', time: '11:00 AM', status: 'Active' },
  ],
  syllabus: [
    { subject: 'Mathematics', topics: 18, progress: 72, status: 'Active' },
    { subject: 'Science', topics: 15, progress: 64, status: 'Active' },
    { subject: 'English', topics: 12, progress: 81, status: 'Active' },
  ],
  homework: [
    { title: 'Algebra worksheet', className: 'Grade 10', dueDate: '2026-06-12', submitted: '28/30', status: 'Pending' },
    { title: 'Science lab report', className: 'Grade 9', dueDate: '2026-06-13', submitted: '24/28', status: 'Pending' },
  ],
  assignments: [
    { title: 'Essay writing', className: 'Grade 8', dueDate: '2026-06-15', submitted: '18/25', status: 'Pending' },
    { title: 'Geometry practice', className: 'Grade 10', dueDate: '2026-06-16', submitted: '29/30', status: 'Completed' },
  ],
  // Application Menu Items
  chat: [
    { id: 'CHT-001', title: 'General Chat', members: 45, lastMessage: 'How are you?', lastTime: '2 min ago', status: 'Active' },
    { id: 'CHT-002', title: 'Study Group', members: 12, lastMessage: 'See you tomorrow', lastTime: '10 min ago', status: 'Active' },
  ],
  calendar: [
    { id: 'CAL-001', title: 'Mid Term Exam', date: '2026-06-20', time: '09:00 AM', location: 'School Hall', status: 'Scheduled' },
    { id: 'CAL-002', title: 'Parent Meeting', date: '2026-06-25', time: '3:00 PM', location: 'Office', status: 'Scheduled' },
  ],
  email: [
    { id: 'EM-001', from: 'principal@school.com', subject: 'Important Notice', date: '2026-06-12', read: false, status: 'Unread' },
    { id: 'EM-002', from: 'teacher@school.com', subject: 'Assignment due', date: '2026-06-11', read: true, status: 'Read' },
  ],
  todo: [
    { id: 'TODO-001', title: 'Complete assignment', dueDate: '2026-06-15', priority: 'High', status: 'Pending' },
    { id: 'TODO-002', title: 'Study for exam', dueDate: '2026-06-18', priority: 'High', status: 'In Progress' },
  ],
  notes: [
    { id: 'NOTE-001', title: 'Math Notes', content: 'Chapter 5...', lastModified: '2026-06-12', status: 'Active' },
    { id: 'NOTE-002', title: 'Science Notes', content: 'Biology...', lastModified: '2026-06-11', status: 'Active' },
  ],
  filemanager: [
    { id: 'FM-001', name: 'Documents', size: '2.4 GB', type: 'Folder', modified: '2026-06-12', status: 'Active' },
    { id: 'FM-002', name: 'images.zip', size: '520 MB', type: 'File', modified: '2026-06-11', status: 'Active' },
  ],
  // People Menu Items
  studentpromotion: [
    { id: 'PROM-001', studentId: 'ST-101', fromClass: 'Grade 10', toClass: 'Grade 11', date: '2026-05-30', status: 'Completed' },
    { id: 'PROM-002', studentId: 'ST-102', fromClass: 'Grade 9', toClass: 'Grade 10', date: '2026-05-30', status: 'Completed' },
  ],
  guardian: [
    { id: 'GRD-001', name: 'Anil Sharma', relation: 'Father', phone: '9801000001', email: 'anil@example.com', status: 'Active' },
    { id: 'GRD-002', name: 'Rupa KC', relation: 'Mother', phone: '9801000002', email: 'rupa@example.com', status: 'Active' },
  ],
  allteachers: [
    { id: 'TE-201', name: 'Mira Thapa', subject: 'Science', department: 'Science', phone: '9800000001', status: 'Active' },
    { id: 'TE-202', name: 'Sanjay Patel', subject: 'Math', department: 'Mathematics', phone: '9800000002', status: 'Active' },
  ],
  // Academic Menu Items
  allclasses: [
    { id: 'CL-1', name: 'Grade 8', sections: 3, students: 96, staff: 8, status: 'Active' },
    { id: 'CL-2', name: 'Grade 9', sections: 4, students: 104, staff: 9, status: 'Active' },
  ],
  schedule: [
    { id: 'SCH-001', day: 'Monday', class: 'Grade 10', time: '09:00 AM', subject: 'Mathematics', teacher: 'Mr. Patel', status: 'Active' },
    { id: 'SCH-002', day: 'Tuesday', class: 'Grade 10', time: '10:30 AM', subject: 'Science', teacher: 'Ms. Thapa', status: 'Active' },
  ],
  classroom: [
    { id: 'CRM-001', name: 'Room 101', capacity: 30, equipment: 'Projector, Board', floor: '1st', status: 'Active' },
    { id: 'CRM-002', name: 'Room 102', capacity: 28, equipment: 'Projector, Smart Board', floor: '1st', status: 'Active' },
  ],
  classroutine: [
    { id: 'CRT-001', class: 'Grade 10', day: 'Monday', period: 'P1', subject: 'Mathematics', teacher: 'Mr. Patel', status: 'Active' },
    { id: 'CRT-002', class: 'Grade 10', day: 'Monday', period: 'P2', subject: 'Science', teacher: 'Ms. Thapa', status: 'Active' },
  ],
  timetable: [
    { id: 'TT-001', class: 'Grade 10', period: 'P1', subject: 'Math', teacher: 'Patel', time: '09:00-10:00', status: 'Active' },
    { id: 'TT-002', class: 'Grade 10', period: 'P2', subject: 'Science', teacher: 'Thapa', time: '10:00-11:00', status: 'Active' },
  ],
  examschedule: [
    { id: 'EXM-001', examName: 'Mid Term', subject: 'Mathematics', date: '2026-06-20', time: '09:00 AM', room: 'Hall A', status: 'Scheduled' },
    { id: 'EXM-002', examName: 'Mid Term', subject: 'Science', date: '2026-06-21', time: '09:00 AM', room: 'Hall B', status: 'Scheduled' },
  ],
  grade: [
    { id: 'GRD-001', studentId: 'ST-101', exam: 'Mid Term', subject: 'Mathematics', score: 85, grade: 'A', status: 'Graded' },
    { id: 'GRD-002', studentId: 'ST-102', exam: 'Mid Term', subject: 'Mathematics', score: 78, grade: 'B+', status: 'Graded' },
  ],
  examattendance: [
    { id: 'EXA-001', studentId: 'ST-101', exam: 'Mid Term', date: '2026-06-20', status: 'Present' },
    { id: 'EXA-002', studentId: 'ST-102', exam: 'Mid Term', date: '2026-06-20', status: 'Present' },
  ],
  examresult: [
    { id: 'EXRES-001', studentId: 'ST-101', exam: 'Mid Term', totalScore: 420, totalMarks: 500, percentage: 84, status: 'Published' },
    { id: 'EXRES-002', studentId: 'ST-102', exam: 'Mid Term', totalScore: 380, totalMarks: 500, percentage: 76, status: 'Published' },
  ],
  research: [
    { id: 'RSH-001', title: 'Student Performance Analysis', teacher: 'Ms. Sharma', date: '2026-06-01', status: 'Active' },
    { id: 'RSH-002', title: 'Teaching Methods Study', teacher: 'Mr. Patel', date: '2026-06-05', status: 'Active' },
  ],
  feesgroup: [
    { id: 'FG-001', name: 'Secondary Classes', fees: 'Tuition, Transport, Lab', status: 'Active' },
    { id: 'FG-002', name: 'Primary Classes', fees: 'Tuition, Activity', status: 'Active' },
  ],
  feestype: [
    { id: 'FT-001', type: 'Tuition', amount: 12000, frequency: 'Monthly', status: 'Active' },
    { id: 'FT-002', type: 'Transport', amount: 3500, frequency: 'Monthly', status: 'Active' },
  ],
  feesmaster: [
    { id: 'FM-001', class: 'Grade 10', feeStructure: 'Secondary', totalAmount: 18000, status: 'Active' },
    { id: 'FM-002', class: 'Grade 8', feeStructure: 'Secondary', totalAmount: 18000, status: 'Active' },
  ],
  feesassign: [
    { id: 'FA-001', studentId: 'ST-101', class: 'Grade 10', totalFees: 18000, paid: 12000, due: 6000, status: 'Partial' },
    { id: 'FA-002', studentId: 'ST-102', class: 'Grade 9', totalFees: 18000, paid: 18000, due: 0, status: 'Paid' },
  ],
  collectfees: [
    { id: 'CF-001', studentId: 'ST-101', amount: 5000, date: '2026-06-12', paymentMode: 'Cash', status: 'Collected' },
    { id: 'CF-002', studentId: 'ST-102', amount: 3500, date: '2026-06-12', paymentMode: 'Bank Transfer', status: 'Collected' },
  ],
  librarymembers: [
    { id: 'LM-001', memberId: 'LIB-001', name: 'Aarav Shah', memberType: 'Student', joinDate: '2026-01-15', status: 'Active' },
    { id: 'LM-002', memberId: 'LIB-002', name: 'Mira Thapa', memberType: 'Teacher', joinDate: '2025-08-20', status: 'Active' },
  ],
  books: [
    { id: 'BK-001', title: 'Mathematics Guide', author: 'John Smith', isbn: '978-1234567890', quantity: 5, status: 'Available' },
    { id: 'BK-002', title: 'English Literature', author: 'Jane Doe', isbn: '978-0987654321', quantity: 3, status: 'Available' },
  ],
  issuebook: [
    { id: 'IB-001', memberId: 'LIB-001', bookId: 'BK-001', issueDate: '2026-06-10', dueDate: '2026-06-24', status: 'Issued' },
    { id: 'IB-002', memberId: 'LIB-002', bookId: 'BK-002', issueDate: '2026-06-11', dueDate: '2026-06-25', status: 'Issued' },
  ],
  returnbook: [
    { id: 'RB-001', issueId: 'IB-001', returnDate: '2026-06-20', fine: 0, status: 'Returned' },
    { id: 'RB-002', issueId: 'IB-002', returnDate: '2026-06-21', fine: 50, status: 'Returned' },
  ],
  hostel: [
    { id: 'HST-001', name: 'Boys Hostel A', capacity: 60, occupied: 58, warden: 'Mr. Sharma', status: 'Active' },
    { id: 'HST-002', name: 'Girls Hostel B', capacity: 40, occupied: 38, warden: 'Ms. Kumar', status: 'Active' },
  ],
  hostellist: [
    { id: 'HSL-001', name: 'Boys Hostel A', rooms: 30, beds: 60, status: 'Active' },
    { id: 'HSL-002', name: 'Girls Hostel B', rooms: 20, beds: 40, status: 'Active' },
  ],
  hostelrooms: [
    { id: 'HSR-001', hostelId: 'HST-001', roomNo: '101', capacity: 2, occupied: 2, status: 'Full' },
    { id: 'HSR-002', hostelId: 'HST-001', roomNo: '102', capacity: 2, occupied: 1, status: 'Available' },
  ],
  roomtype: [
    { id: 'RMT-001', type: 'Single', capacity: 1, rate: 5000, status: 'Active' },
    { id: 'RMT-002', type: 'Double', capacity: 2, rate: 3000, status: 'Active' },
  ],
  routes: [
    { id: 'RT-001', name: 'Route A', startPoint: 'City Center', endPoint: 'School', distance: 8.5, status: 'Active' },
    { id: 'RT-002', name: 'Route B', startPoint: 'North Area', endPoint: 'School', distance: 12.3, status: 'Active' },
  ],
  vehicledrivers: [
    { id: 'VD-001', name: 'Ram Kumar', licenseNo: 'DL-123456', phone: '9800000001', status: 'Active' },
    { id: 'VD-002', name: 'Shyam Singh', licenseNo: 'DL-654321', phone: '9800000002', status: 'Active' },
  ],
  vehicle: [
    { id: 'VEH-001', registrationNo: 'AB-1234', type: 'Bus', capacity: 50, driverId: 'VD-001', status: 'Active' },
    { id: 'VEH-002', registrationNo: 'CD-5678', type: 'Bus', capacity: 45, driverId: 'VD-002', status: 'Active' },
  ],
  assignvehicle: [
    { id: 'AV-001', routeId: 'RT-001', vehicleId: 'VEH-001', driverId: 'VD-001', schedule: 'Daily', status: 'Active' },
    { id: 'AV-002', routeId: 'RT-002', vehicleId: 'VEH-002', driverId: 'VD-002', schedule: 'Daily', status: 'Active' },
  ],
  // HRM Menu Items
  departments: [
    { id: 'DEPT-001', name: 'Academic', head: 'Dr. Sharma', staff: 12, status: 'Active' },
    { id: 'DEPT-002', name: 'Administration', head: 'Mr. Verma', staff: 5, status: 'Active' },
  ],
  designation: [
    { id: 'DES-001', title: 'Principal', department: 'Academic', salary: 80000, status: 'Active' },
    { id: 'DES-002', title: 'Teacher', department: 'Academic', salary: 35000, status: 'Active' },
  ],
  teacherattendance: [
    { id: 'TA-001', employeeId: 'TE-201', date: '2026-06-12', status: 'Present', time: '09:00 AM' },
    { id: 'TA-002', employeeId: 'TE-202', date: '2026-06-12', status: 'Present', time: '09:05 AM' },
  ],
  staffattendance: [
    { id: 'SA-001', employeeId: 'STAFF-001', date: '2026-06-12', status: 'Present', time: '08:30 AM' },
    { id: 'SA-002', employeeId: 'STAFF-002', date: '2026-06-12', status: 'Absent', time: null },
  ],
  leavelist: [
    { id: 'LEV-001', employeeId: 'TE-201', leaveType: 'Sick', from: '2026-06-15', to: '2026-06-17', days: 3, status: 'Approved' },
    { id: 'LEV-002', employeeId: 'TE-202', leaveType: 'Casual', from: '2026-06-20', to: '2026-06-22', days: 3, status: 'Pending' },
  ],
  approverequest: [
    { id: 'APR-001', leaveId: 'LEV-002', employeeName: 'Sanjay Patel', leaveType: 'Casual', days: 3, approvedBy: 'Dr. Sharma', status: 'Pending' },
    { id: 'APR-002', leaveId: 'LEV-001', employeeName: 'Mira Thapa', leaveType: 'Sick', days: 3, approvedBy: 'Dr. Sharma', status: 'Approved' },
  ],
  holidays: [
    { id: 'HLD-001', name: 'Independence Day', date: '2026-08-15', type: 'National', status: 'Active' },
    { id: 'HLD-002', name: 'Teachers Day', date: '2026-09-05', type: 'Institutional', status: 'Active' },
  ],
  payroll: [
    { id: 'PAY-001', employeeId: 'TE-201', month: 'June 2026', baseSalary: 35000, deductions: 2000, netPay: 33000, status: 'Paid' },
    { id: 'PAY-002', employeeId: 'TE-202', month: 'June 2026', baseSalary: 35000, deductions: 1500, netPay: 33500, status: 'Paid' },
  ],
  accounts: [
    { id: 'ACC-001', accountName: 'School Bank Account', accountNo: '1234567890', type: 'Savings', balance: 500000, status: 'Active' },
    { id: 'ACC-002', accountName: 'Fees Account', accountNo: '0987654321', type: 'Current', balance: 1200000, status: 'Active' },
  ],
  expenses: [
    { id: 'EXP-001', description: 'Stationary', amount: 5000, date: '2026-06-12', category: 'Supplies', status: 'Recorded' },
    { id: 'EXP-002', description: 'Maintenance', amount: 15000, date: '2026-06-12', category: 'Building', status: 'Recorded' },
  ],
  incomecategory: [
    { id: 'INCAT-001', name: 'Fees', description: 'Student fee collection', status: 'Active' },
    { id: 'INCAT-002', name: 'Donations', description: 'Alumni donations', status: 'Active' },
  ],
  income: [
    { id: 'INC-001', category: 'Fees', amount: 250000, date: '2026-06-12', source: 'Student Fees', status: 'Recorded' },
    { id: 'INC-002', category: 'Donations', amount: 50000, date: '2026-06-12', source: 'Alumni', status: 'Recorded' },
  ],
  transfers: [
    { id: 'TRN-001', fromAccount: 'Fees Account', toAccount: 'School Bank Account', amount: 100000, date: '2026-06-12', status: 'Completed' },
    { id: 'TRN-002', fromAccount: 'School Bank Account', toAccount: 'Fees Account', amount: 50000, date: '2026-06-11', status: 'Completed' },
  ],
  noticeboard: [
    { id: 'NB-001', title: 'Exam Schedule', content: 'Upcoming exam dates...', date: '2026-06-12', author: 'Principal', status: 'Published' },
    { id: 'NB-002', title: 'Holiday Notice', content: 'Summer vacation...', date: '2026-06-11', author: 'Office', status: 'Published' },
  ],
  events: [
    { id: 'EVN-001', name: 'Annual Sports Day', date: '2026-07-15', time: '08:00 AM', location: 'School Ground', status: 'Scheduled' },
    { id: 'EVN-002', name: 'Cultural Program', date: '2026-08-20', time: '5:00 PM', location: 'Auditorium', status: 'Scheduled' },
  ],
  classreport: [
    { id: 'CR-001', class: 'Grade 10', totalDays: 200, presentDays: 192, percentage: 96, status: 'Active' },
    { id: 'CR-002', class: 'Grade 9', totalDays: 200, presentDays: 184, percentage: 92, status: 'Active' },
  ],
  studentreport: [
    { id: 'SR-001', studentId: 'ST-101', totalDays: 200, presentDays: 190, percentage: 95, status: 'Active' },
    { id: 'SR-002', studentId: 'ST-102', totalDays: 200, presentDays: 182, percentage: 91, status: 'Active' },
  ],
  gradereport: [
    { id: 'GR-001', class: 'Grade 10', averageGrade: 'A-', topStudent: 'ST-101', status: 'Published' },
    { id: 'GR-002', class: 'Grade 9', averageGrade: 'B+', topStudent: 'ST-102', status: 'Published' },
  ],
  leavereport: [
    { id: 'LR-001', employeeId: 'TE-201', leaveTaken: 3, leaveBalance: 27, status: 'Active' },
    { id: 'LR-002', employeeId: 'TE-202', leaveTaken: 5, leaveBalance: 25, status: 'Active' },
  ],
  // User Management
  users: [
    { id: 'USR-001', username: 'admin', email: 'admin@school.com', role: 'Administrator', status: 'Active' },
    { id: 'USR-002', username: 'principal', email: 'principal@school.com', role: 'Principal', status: 'Active' },
  ],
  rolesandpermissions: [
    { id: 'ROLE-001', role: 'Administrator', permissions: 'Full Access', status: 'Active' },
    { id: 'ROLE-002', role: 'Teacher', permissions: 'Class, Attendance, Grades', status: 'Active' },
  ],
  deleteaccountrequest: [
    { id: 'DAR-001', userId: 'USR-003', reason: 'Moving school', requestDate: '2026-06-12', status: 'Pending' },
    { id: 'DAR-002', userId: 'USR-004', reason: 'Personal', requestDate: '2026-06-10', status: 'Approved' },
  ],
}
