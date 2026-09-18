# Connected Dashboards Implementation

## Overview
The SMS system now features three fully connected dashboards for different user roles:
- **Parent Dashboard** - `/dashboards/parent`
- **Teacher Dashboard** - `/dashboards/teacher`
- **Student Dashboard** - `/dashboards/student`

Each dashboard is independent yet seamlessly connected, allowing users to switch between roles effortlessly.

## Dashboard Structure

### 1. Parent Dashboard (`/dashboards/parent`)
**Purpose**: Provides parents with a centralized view of their child's academic progress, attendance, and important school communications.

**Key Features**:
- Quick stats on child's status
- Important notices and announcements
- Student academic details at a glance
- Fees and payment information
- Attendance tracking
- Role badge: "Parent Dashboard" with parent name

**Data Pulled From**:
- `apiViews.parents.endpoint` - Parent information
- `apiViews.students.endpoint` - Student details
- `apiViews.notices.endpoint` - School notices

### 2. Teacher Dashboard (`/dashboards/teacher`)
**Purpose**: Empowers teachers to manage their classes, track attendance, and oversee student progress.

**Key Features**:
- Classes scheduled for today
- Current class attendance metrics
- Pending tasks and assignments
- Student count and performance indicators
- Contact information and subject details
- Role badge: "Teacher Dashboard"

**Data Pulled From**:
- `apiViews.teachers.endpoint` - Teacher information
- Dynamic task tracking system
- Class attendance data

### 3. Student Dashboard (`/dashboards/student`)
**Purpose**: Enables students to track their academics, schedules, and stay informed about school activities.

**Key Features**:
- Today's class schedule
- Personal attendance percentage
- Assignment count and status
- Important notices
- Guardian information
- Academic progress overview
- Role badge: "Student Dashboard" with student name

**Data Pulled From**:
- `apiViews.students.endpoint` - Student information
- `apiViews.assignments.endpoint` - Assignment data
- `apiViews.notices.endpoint` - School notices

## Navigation System

### Dashboard Navigation Component (`DashboardNav`)
Located at: `frontend/src/components/DashboardNav.jsx`

**Features**:
- Quick-switch buttons to all three dashboards
- Icon indicators (👨‍👩‍👧 Parent, 🎓 Teacher, 📚 Student)
- Active state highlighting
- Responsive design for mobile devices
- Appears at the top of each dashboard

**Usage**:
Simply add `<DashboardNav />` component to any page where you want dashboard switching capability.

### Route Mapping
```javascript
<Route path="/dashboards/parent" element={<ParentDashboardPage />} />
<Route path="/dashboards/teacher" element={<TeacherDashboardPage />} />
<Route path="/dashboards/student" element={<StudentDashboardPage />} />
```

## How to Access Each Dashboard

### From Admin Dashboard
1. Click on **"Parent Dashboard"**, **"Teacher Dashboard"**, or **"Student Dashboard"** navigation links
2. Or directly navigate to:
   - `http://localhost:5173/dashboards/parent`
   - `http://localhost:5173/dashboards/teacher`
   - `http://localhost:5173/dashboards/student`

### Switching Between Dashboards
1. Look for the "Switch Role" navigation bar at the top of any dashboard
2. Click on the desired role icon/label to navigate to that dashboard
3. All dashboard data loads automatically

## File Structure

```
frontend/src/
├── components/
│   ├── DashboardNav.jsx          (New: Dashboard switcher component)
│   ├── DashboardNav.css          (New: Dashboard nav styling)
│   └── ... (other components)
├── pages/
│   ├── ParentDashboardPage.jsx   (Updated: Now includes DashboardNav)
│   ├── TeacherDashboardPage.jsx  (Updated: Now includes DashboardNav)
│   ├── StudentDashboardPage.jsx  (Updated: Now includes DashboardNav)
│   └── ... (other pages)
└── App.jsx                        (Routes already configured)
```

## Styling and Customization

### Dashboard Navigation Styles
File: `frontend/src/components/DashboardNav.css`

Key CSS Classes:
- `.dashboard-nav` - Main navigation container
- `.dashboard-nav-link` - Individual dashboard link
- `.dashboard-nav-link.active` - Active dashboard indicator
- Responsive breakpoint at 768px for mobile

### Role Hero Sections
Each dashboard has a styled hero banner:
- `.role-hero` - Common styling
- `.parent-banner` - Parent-specific colors
- `.teacher-banner` - Teacher-specific colors
- `.student-banner` - Student-specific colors

## Features and Components Used

### StatCard Component
Displays key metrics with color coding:
- `tone="green"` - For positive metrics (Attendance)
- `tone="blue"` - For informational (Classes)
- `tone="amber"` - For warnings (Pending tasks)
- `tone="cyan"` - For notifications (Notices)

### StatusPill Component
Shows status indicators with visual styling:
- Active/Inactive status
- Color-coded status values

### Shell Component
Provides consistent page layout with:
- Title and subtitle
- Toolbar for navigation
- Content area
- Responsive design

## Data Flow

```
┌─────────────────────────────────────────────────┐
│   User navigates to dashboard (/dashboards/*)   │
└──────────────────────┬──────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│  Dashboard component mounts, triggers useEffect │
└──────────────────────┬──────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│ API calls fetch data via getJson() function     │
│ - Parent/Student/Teacher info                   │
│ - Notices/Assignments/Tasks                     │
└──────────────────────┬──────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│ State updates with fetched data                 │
└──────────────────────┬──────────────────────────┘
                       ↓
┌─────────────────────────────────────────────────┐
│ Dashboard renders with:                         │
│ - DashboardNav component                        │
│ - Role-specific hero section                    │
│ - Stat cards with data                          │
│ - Content panels with details                   │
└─────────────────────────────────────────────────┘
```

## Adding More Dashboards

To add a new role dashboard (e.g., Admin Dashboard):

1. **Create the page component**:
   ```jsx
   // frontend/src/pages/AdminDashboardPage.jsx
   import { DashboardNav } from '../components/DashboardNav'
   
   export function AdminDashboardPage() {
     return (
       <Shell title="Admin Dashboard">
         <DashboardNav />
         {/* Dashboard content */}
       </Shell>
     )
   }
   ```

2. **Update DashboardNav.jsx** to include the new role:
   ```jsx
   const dashboards = [
     { path: '/dashboards/admin', label: 'Admin', icon: '⚙️' },
     { path: '/dashboards/parent', label: 'Parent', icon: '👨‍👩‍👧' },
     { path: '/dashboards/teacher', label: 'Teacher', icon: '🎓' },
     { path: '/dashboards/student', label: 'Student', icon: '📚' },
   ]
   ```

3. **Add route in App.jsx**:
   ```jsx
   <Route path="/dashboards/admin" element={<AdminDashboardPage />} />
   ```

4. **Update CSS** if needed for role-specific styling.

## Testing Dashboards

### Test Scenarios

1. **Navigation Test**:
   - Visit `/dashboards/parent` → Should show Parent Dashboard
   - Click Teacher link → Should navigate to `/dashboards/teacher`
   - Click Student link → Should navigate to `/dashboards/student`

2. **Data Loading Test**:
   - Each dashboard should display relevant user data
   - Stat cards should show correct counts
   - Error handling for missing data (shows fallback values)

3. **Responsive Test**:
   - View on desktop → All nav links visible with labels and icons
   - View on mobile → Navigation shows icons only (labels hidden)

## Future Enhancements

### Recommended Improvements
1. **Authentication**: Integrate with auth system to show appropriate dashboard based on user role
2. **Notifications**: Add real-time notification badges on dashboard nav
3. **User Preferences**: Remember last visited dashboard per user
4. **Dark Mode**: Add dark mode toggle to dashboard styling
5. **Quick Actions**: Add contextual action buttons for each role
6. **Analytics**: Track dashboard usage metrics
7. **Export**: Add data export functionality for each dashboard view
8. **Mobile App**: Create native mobile versions of dashboards

## Troubleshooting

### Dashboard not showing?
- Check if route is configured in `App.jsx`
- Verify component imports are correct
- Check browser console for errors

### Data not loading?
- Verify API endpoints in `apiViews` (smsData.js)
- Check network tab in browser dev tools
- Ensure backend is running

### Navigation not working?
- Verify `react-router-dom` is properly installed
- Check that routes use `<BrowserRouter>` wrapper
- Verify link paths match route definitions

### Styling issues?
- Ensure CSS files are imported
- Check for CSS conflicts in existing stylesheets
- Verify responsive breakpoints

## Resources

### Files to Reference
- Dashboard Components: `frontend/src/components/DashboardNav.jsx`
- Dashboard Pages: `frontend/src/pages/*DashboardPage.jsx`
- Routing: `frontend/src/App.jsx`
- Data: `frontend/src/data/smsData.js`
- API: `frontend/src/api.js`

### Key Functions
- `getJson(endpoint)` - Fetch data from API
- `useEffect()` - Handle side effects (data fetching)
- `useState()` - Manage component state
- `Link` - Navigate between dashboards

