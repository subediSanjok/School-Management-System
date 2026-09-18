import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import { AdminDashboardPage } from './pages/AdminDashboardPage'
import { AttendancePage } from './pages/AttendancePage'
import { AllClassesPage } from './pages/AllClassesPage'
import { AllTeachersPage } from './pages/AllTeachersPage'
import { AssignmentsPage } from './pages/AssignmentsPage'
import { BooksPage } from './pages/BooksPage'
import { CalendarPage } from './pages/CalendarPage'
import { ChatPage } from './pages/ChatPage'
import { ClassesPage } from './pages/ClassesPage'
import { SectionsPage } from './pages/SectionsPage'
import { ClassroomPage } from './pages/ClassroomPage'
import { ClassRoutinePage } from './pages/ClassRoutinePage'
import { DepartmentsPage } from './pages/DepartmentsPage'
import { EmailPage } from './pages/EmailPage'
import { ExamSchedulePage } from './pages/ExamSchedulePage'
import { ExamsPage } from './pages/ExamsPage'
import { FeesPage } from './pages/FeesPage'
import { FeesGroupPage } from './pages/FeesGroupPage'
import { FeesTypePage } from './pages/FeesTypePage'
import { FileManagerPage } from './pages/FileManagerPage'
import { GradePage } from './pages/GradePage'
import { GuardianPage } from './pages/GuardianPage'
import { HomeworkPage } from './pages/HomeworkPage'
import { HostelPage } from './pages/HostelPage'
import { LibraryMembersPage } from './pages/LibraryMembersPage'
import { MenuSectionPage } from './pages/MenuSectionPage'
import { ModulePage } from './pages/ModulePage'
import { NotesPage } from './pages/NotesPage'
import { NoticesPage } from './pages/NoticesPage'
import { ParentDashboardPage } from './pages/ParentDashboardPage'
import { ParentsPage } from './pages/ParentsPage'
import { PayrollPage } from './pages/PayrollPage'
import { AccountsPage } from './pages/AccountsPage'
import { ResourcePage } from './pages/ResourcePage'
import { RolesAndPermissionsPage } from './pages/RolesAndPermissionsPage'
import { RoutesPage } from './pages/RoutesPage'
import { RoutinePage } from './pages/RoutinePage'
import { SchedulePage } from './pages/SchedulePage'
import { StudentDashboardPage } from './pages/StudentDashboardPage'
import { StudentPromotionPage } from './pages/StudentPromotionPage'
import { StudentsPage } from './pages/StudentsPage'
import { SubjectsPage } from './pages/SubjectsPage'
import { SyllabusPage } from './pages/SyllabusPage'
import { TeacherDashboardPage } from './pages/TeacherDashboardPage'
import { TeachersPage } from './pages/TeachersPage'
import { TimetablePage } from './pages/TimetablePage'
import { TodoPage } from './pages/TodoPage'
import { UsersPage } from './pages/UsersPage'
import { VehiclePage } from './pages/VehiclePage'
import { apiViews, menuRoutes } from './data/smsData'
import { DefaultPage } from './pages/DefaultPage'
import { MiniPage } from './pages/MiniPage'
import { RtlPage } from './pages/RtlPage'
import { BoxPage } from './pages/BoxPage'
import { MembershipPlansPage } from './pages/MembershipPlansPage'
import { MembershipAddonsPage } from './pages/MembershipAddonsPage'
import { TransactionsPage } from './pages/TransactionsPage'
import { BlogPage } from './pages/BlogPage'
import { AllBlogsPage } from './pages/AllBlogsPage'
import { CategoriesPage } from './pages/CategoriesPage'
import { TagsPage } from './pages/TagsPage'
import { CountriesPage } from './pages/CountriesPage'
import { StatesPage } from './pages/StatesPage'
import { CitiesPage } from './pages/CitiesPage'
import { FaqPage } from './pages/FaqPage'
import { ContactMessagesPage } from './pages/ContactMessagesPage'
import { TicketsPage } from './pages/TicketsPage'
import { LoginPage } from './pages/LoginPage'
import { ForgotPasswordPage } from './pages/ForgotPasswordPage'
import { ResetPasswordPage } from './pages/ResetPasswordPage'
import { EmailVerificationPage } from './pages/EmailVerificationPage'
import { LockScreenPage } from './pages/LockScreenPage'
import { RegisterPage } from './pages/RegisterPage'
import { Error401Page } from './pages/401ErrorPage'
import { Error403Page } from './pages/403ErrorPage'
import { Error404Page } from './pages/404ErrorPage'
import { BlankPagePage } from './pages/BlankPagePage'
import { ComingSoonPage } from './pages/ComingSoonPage'
import { UnderMaintenancePage } from './pages/UnderMaintenancePage'
import { ProfileSettingsPage } from './pages/ProfileSettingsPage'
import { SecuritySettingsPage } from './pages/SecuritySettingsPage'
import { NotificationPage } from './pages/NotificationPage'
import { GeneralSettingsPage } from './pages/GeneralSettingsPage'
import { CompanyInfoPage } from './pages/CompanyInfoPage'
import { WebsiteSettingsPage } from './pages/WebsiteSettingsPage'
import { PrefixesPage } from './pages/PrefixesPage'
import { SocialAuthenticationPage } from './pages/SocialAuthenticationPage'
import { LanguagePage } from './pages/LanguagePage'
import { MobileSettingsPage } from './pages/MobileSettingsPage'
import { EmailSettingsPage } from './pages/EmailSettingsPage'
import { SmsSettingsPage } from './pages/SmsSettingsPage'
import { OtpSettingsPage } from './pages/OtpSettingsPage'
import { GdprCookiesPage } from './pages/GdprCookiesPage'
import { PaymentGatewayPage } from './pages/PaymentGatewayPage'
import { TaxSettingsPage } from './pages/TaxSettingsPage'
import { SchoolSettingsPage } from './pages/SchoolSettingsPage'
import { BadgePage } from './pages/BadgePage'
import { StoragePage } from './pages/StoragePage'
import { S3PackagePage } from './pages/S3PackagePage'
import { BaseUiPage } from './pages/BaseUiPage'
import { AdvancedUiPage } from './pages/AdvancedUiPage'
import { IconsPage } from './pages/IconsPage'
import { FormsPage } from './pages/FormsPage'
import { TablesPage } from './pages/TablesPage'
import { DocumentationPage } from './pages/DocumentationPage'
import { MultiLevel21Page } from './pages/MultiLevel21Page'
import { MultiLevel31Page } from './pages/MultiLevel31Page'
import { MultiLevel32Page } from './pages/MultiLevel32Page'
import { ExamAttendancePage } from './pages/ExamAttendancePage'
import { ExamResultPage } from './pages/ExamResultPage'
import { ResearchPage } from './pages/ResearchPage'
import { FeesMasterPage } from './pages/FeesMasterPage'
import { FeesAssignPage } from './pages/FeesAssignPage'
import { CollectFeesPage } from './pages/CollectFeesPage'
import { DeleteAccountRequestPage } from './pages/DeleteAccountRequestPage'

const menuRoutePageMap = {
  '/menu/application/chat': ChatPage,
  '/menu/application/calendar': CalendarPage,
  '/menu/application/email': EmailPage,
  '/menu/application/to-do': TodoPage,
  '/menu/application/notes': NotesPage,
  '/menu/application/file-manager': FileManagerPage,
  '/menu/people/students/student': StudentsPage,
  '/menu/people/students/student-promotion': StudentPromotionPage,
  '/menu/people/parents/parent': ParentsPage,
  '/menu/people/parents/guardian': GuardianPage,
  '/menu/people/teachers/teacher': TeachersPage,
  '/menu/people/teachers/all-teachers': AllTeachersPage,
  '/menu/people/teachers/routine': RoutinePage,
  '/menu/academic/classes': ClassesPage,
  '/menu/academic/all-classes': AllClassesPage,
  '/menu/academic/schedule': SchedulePage,
  '/menu/academic/class-room': ClassroomPage,
  '/menu/academic/class-routine': ClassRoutinePage,
  '/menu/academic/section': SectionsPage,
  '/menu/academic/subjects': SubjectsPage,
  '/menu/academic/syllabus': SyllabusPage,
  '/menu/academic/time-table': TimetablePage,
  '/menu/academic/home-work': HomeworkPage,
  '/menu/academic/examinations/exam': ExamsPage,
  '/menu/academic/examinations/exam-schedule': ExamSchedulePage,
  '/menu/academic/examinations/grade': GradePage,
  '/menu/academic/library/library-members': LibraryMembersPage,
  '/menu/academic/library/books': BooksPage,
  '/menu/academic/sports/hostel': HostelPage,
  '/menu/academic/transport/routes': RoutesPage,
  '/menu/academic/transport/vehicle': VehiclePage,
  '/menu/hrm/staffs/departments': DepartmentsPage,
  '/menu/hrm/staffs/attendance': AttendancePage,
  '/menu/hrm/student-attendance/teacher-attendance': AttendancePage,
  '/menu/hrm/student-attendance/staff-attendance': AttendancePage,
  '/menu/hrm/attendance-report/class-report': ClassReportPage,
  '/menu/hrm/attendance-report/student-report': StudentReportPage,
  '/menu/hrm/attendance-report/grade-report': GradeReportPage,
  '/menu/hrm/attendance-report/leave-report': LeaveReportPage,
  '/menu/hrm/payroll/payroll': PayrollPage,
  '/menu/hrm/finance-accounts/accounts': AccountsPage,
  '/menu/user-management/users': UsersPage,
  '/menu/user-management/roles-and-permissions': RolesAndPermissionsPage,
}

// explicit per-submenu pages we just added
import { IssueBookPage } from './pages/IssueBookPage'
import { ReturnBookPage } from './pages/ReturnBookPage'
import { HostelListPage } from './pages/HostelListPage'
import { HostelRoomsPage } from './pages/HostelRoomsPage'
import { RoomTypePage } from './pages/RoomTypePage'
import { VehicleDriversPage } from './pages/VehicleDriversPage'
import { AssignVehiclePage } from './pages/AssignVehiclePage'
import { DesignationPage } from './pages/DesignationPage'
import { ListOfLeavesPage } from './pages/ListOfLeavesPage'
import { ApproveRequestPage } from './pages/ApproveRequestPage'
import { HolidaysPage } from './pages/HolidaysPage'
import { ExpensesPage } from './pages/ExpensesPage'
import { IncomeCategoryPage } from './pages/IncomeCategoryPage'
import { IncomePage } from './pages/IncomePage'
import { TransfersPage } from './pages/TransfersPage'
import { NoticeBoardPage } from './pages/NoticeBoardPage'
import { EventsPage } from './pages/EventsPage'
import { ClassReportPage } from './pages/ClassReportPage'
import { StudentReportPage } from './pages/StudentReportPage'
import { GradeReportPage } from './pages/GradeReportPage'
import { LeaveReportPage } from './pages/LeaveReportPage'
import { FeesReportPage } from './pages/FeesReportPage'

const extraMenuMap = {
  '/menu/academic/library/issue-book': IssueBookPage,
  '/menu/academic/library/return-book': ReturnBookPage,
  '/menu/academic/sports/hostel-list': HostelListPage,
  '/menu/academic/sports/hostel-rooms': HostelRoomsPage,
  '/menu/academic/sports/room-type': RoomTypePage,
  '/menu/academic/transport/vehicle-drivers': VehicleDriversPage,
  '/menu/academic/transport/assign-vehicle': AssignVehiclePage,
  '/menu/hrm/staffs/designation': DesignationPage,
  '/menu/hrm/leave/list-of-leaves': ListOfLeavesPage,
  '/menu/hrm/leave/approve-request': ApproveRequestPage,
  '/menu/hrm/leave/holidays': HolidaysPage,
  '/menu/hrm/holidays/holidays': HolidaysPage,
  '/menu/hrm/finance-accounts/expenses': ExpensesPage,
  '/menu/hrm/finance-accounts/income-category': IncomeCategoryPage,
  '/menu/hrm/finance-accounts/income': IncomePage,
  '/menu/hrm/finance-accounts/transfers': TransfersPage,
  '/menu/hrm/announcements/notice-board': NoticeBoardPage,
  '/menu/hrm/events/events': EventsPage,
  '/menu/academic/notice/notice-board': NoticeBoardPage,
  '/menu/academic/notice/events': EventsPage,
  '/menu/academic/reports/class-report': ClassReportPage,
  '/menu/academic/reports/student-report': StudentReportPage,
  '/menu/academic/reports/grade-report': GradeReportPage,
  '/menu/hrm/leave/leave-report': LeaveReportPage,
  '/menu/hrm/finance-accounts/fees-report': FeesReportPage,
  '/menu/fees-report': FeesReportPage,
  '/menu/academic/examinations/exam-attendance': ExamAttendancePage,
  '/menu/academic/examinations/exam-result': ExamResultPage,
  '/menu/academic/research/research': ResearchPage,
  '/menu/academic/finance-collection/fees-master': FeesMasterPage,
  '/menu/academic/finance-collection/fees-assign': FeesAssignPage,
  '/menu/academic/finance-collection/collect-fees': CollectFeesPage,
  '/menu/user-management/delete-account-request': DeleteAccountRequestPage,
  '/menu/academic/finance-collection/fees-group': FeesGroupPage,
  '/menu/academic/finance-collection/fees-type': FeesTypePage,
  '/menu/layout/default': DefaultPage,
  '/menu/layout/mini': MiniPage,
  '/menu/layout/rtl': RtlPage,
  '/menu/layout/box': BoxPage,
  '/menu/membership-plan/membership-plans': MembershipPlansPage,
  '/menu/membership-plan/membership-addons': MembershipAddonsPage,
  '/menu/membership-plan/transactions': TransactionsPage,
  '/menu/cms/pages/blog': BlogPage,
  '/menu/cms/pages/all-blogs': AllBlogsPage,
  '/menu/cms/pages/categories': CategoriesPage,
  '/menu/cms/pages/tags': TagsPage,
  '/menu/cms/location/countries': CountriesPage,
  '/menu/cms/location/states': StatesPage,
  '/menu/cms/location/cities': CitiesPage,
  '/menu/cms/faq/faq': FaqPage,
  '/menu/support/contact-messages': ContactMessagesPage,
  '/menu/support/tickets': TicketsPage,
  '/menu/pages/authentication/login': LoginPage,
  '/menu/pages/authentication/forgot-password': ForgotPasswordPage,
  '/menu/pages/authentication/reset-password': ResetPasswordPage,
  '/menu/pages/authentication/register': RegisterPage,
  '/menu/pages/authentication/email-verification': EmailVerificationPage,
  '/menu/pages/authentication/lock-screen': LockScreenPage,
  '/menu/pages/error-pages/401-error': Error401Page,
  '/menu/pages/error-pages/403-error': Error403Page,
  '/menu/pages/error-pages/404-error': Error404Page,
  '/menu/pages/blank-page': BlankPagePage,
  '/menu/pages/coming-soon': ComingSoonPage,
  '/menu/pages/under-maintenance': UnderMaintenancePage,
  '/menu/general-settings/profile-settings': ProfileSettingsPage,
  '/menu/general-settings/security-settings': SecuritySettingsPage,
  '/menu/general-settings/notification': NotificationPage,
  '/menu/general-settings/general-settings': GeneralSettingsPage,
  '/menu/general-settings/website-settings/company-info': CompanyInfoPage,
  '/menu/general-settings/website-settings/website-settings': WebsiteSettingsPage,
  '/menu/general-settings/website-settings/prefixes': PrefixesPage,
  '/menu/general-settings/website-settings/social-authentication': SocialAuthenticationPage,
  '/menu/general-settings/website-settings/language': LanguagePage,
  '/menu/general-settings/app-settings/mobile-settings': MobileSettingsPage,
  '/menu/general-settings/system-settings/email-settings': EmailSettingsPage,
  '/menu/general-settings/system-settings/sms-settings': SmsSettingsPage,
  '/menu/general-settings/system-settings/otp-settings': OtpSettingsPage,
  '/menu/general-settings/system-settings/gdpr-cookies': GdprCookiesPage,
  '/menu/general-settings/financial-settings/payment-gateway': PaymentGatewayPage,
  '/menu/general-settings/financial-settings/tax-settings': TaxSettingsPage,
  '/menu/general-settings/academic-settings/school-settings': SchoolSettingsPage,
  '/menu/general-settings/academic-settings/badge': BadgePage,
  '/menu/general-settings/other-settings/storage': StoragePage,
  '/menu/general-settings/other-settings/s3-package': S3PackagePage,
  '/menu/utilities/base-ui': BaseUiPage,
  '/menu/utilities/advanced-ui': AdvancedUiPage,
  '/menu/utilities/icons': IconsPage,
  '/menu/utilities/forms': FormsPage,
  '/menu/utilities/tables': TablesPage,
  '/menu/utilities/documentation': DocumentationPage,
  '/menu/utilities/charts': ChartsPage,
  '/menu/changelog/multi-level-1/multi-level-2/multi-level-2-1': MultiLevel21Page,
  '/menu/changelog/multi-level-1/multi-level-2/multi-level-2-2/multi-level-3-1': MultiLevel31Page,
  '/menu/changelog/multi-level-1/multi-level-2/multi-level-2-2/multi-level-3-2': MultiLevel32Page,
}


function ChartsPage() {
  const rows = [
    ['Attendance', 'Trend', 'Monthly summary'],
    ['Fees', 'Trend', 'Monthly collection'],
    ['Results', 'Trend', 'Academic progression'],
  ]

  return (
    <ModulePage
      title="Charts"
      subtitle="Visual summary placeholders for charts and analytics modules."
      columns={['Module', 'Type', 'Description']}
      endpoint={apiViews.notices.endpoint}
      fallbackRows={rows}
      mapRows={() => rows}
    />
  )
}

function ChartModulePage({ title }) {
  const rows = [
    [title, 'Analytics', 'Ready'],
    ['Academic trends', 'Charts', 'Ready'],
    ['Attendance trend', 'Charts', 'Ready'],
  ]

  return (
    <ModulePage
      title={title}
      subtitle="Chart module placeholder with room for ApexCharts or ChartJS widgets."
      columns={['Name', 'Type', 'Status']}
      endpoint={apiViews.notices.endpoint}
      fallbackRows={rows}
      mapRows={() => rows}
    />
  )
}

export default function App() {
  return (
    <Routes>
        <Route
          path="/"
          element={
            (() => {
              const { user } = useContext(AuthContext)
              return user ? <AdminDashboardPage /> : <Navigate to="/menu/pages/authentication/login" />
            })()
          }
        />
        <Route path="/dashboards/student" element={<StudentDashboardPage />} />
        <Route path="/dashboards/student/:studentId" element={<StudentDashboardPage />} />
        <Route path="/dashboards/teacher" element={<TeacherDashboardPage />} />
        <Route path="/dashboards/teacher/:teacherId" element={<TeacherDashboardPage />} />
        <Route path="/dashboards/parent" element={<ParentDashboardPage />} />
        <Route path="/dashboards/parent/:parentId" element={<ParentDashboardPage />} />
        <Route path="/dashboard/charts/apex" element={<ChartModulePage title="Apex Charts" />} />
        <Route path="/dashboard/charts/chartjs" element={<ChartModulePage title="ChartJS" />} />
        <Route path="/menu" element={<MenuSectionPage title="Menu" sectionPath={['Menu']} />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/parents" element={<ParentsPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
        <Route path="/exams" element={<ExamsPage />} />
        <Route path="/fees" element={<FeesPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/subjects" element={<SubjectsPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/sections" element={<SectionsPage />} />
        <Route path="/routine" element={<RoutinePage />} />
        <Route path="/syllabus" element={<SyllabusPage />} />
        <Route path="/homework" element={<HomeworkPage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/resource/:resource" element={<ResourcePage />} />
        <Route path="/menu/people/students/student" element={<StudentsPage />} />
        <Route path="/menu/people/students/student-promotion" element={<StudentPromotionPage />} />
        <Route path="/menu/people/parents/parent" element={<ParentsPage />} />
        <Route path="/menu/people/parents/guardian" element={<GuardianPage />} />
        <Route path="/menu/people/teachers/teacher" element={<TeachersPage />} />
        <Route path="/menu/people/teachers/all-teachers" element={<AllTeachersPage />} />
        <Route path="/menu/people/teachers/routine" element={<RoutinePage />} />
        {Object.entries(menuRoutePageMap).map(([path, PageComponent]) => (
          <Route key={path} path={path} element={<PageComponent />} />
        ))}
        {Object.entries(extraMenuMap).map(([path, PageComponent]) => (
          <Route key={path} path={path} element={<PageComponent />} />
        ))}
        {menuRoutes
          .filter((route) => !Object.keys(menuRoutePageMap).includes(route.path))
          .map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<MenuSectionPage title={route.title} sectionPath={route.sectionPath} />}
            />
          ))}
      </Routes>
  )
}
