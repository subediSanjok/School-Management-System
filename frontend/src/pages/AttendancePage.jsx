import { useMemo, useState } from 'react'
import { Shell } from '../components/Shell'
import { PageHeader } from '../components/PageHeader'
import { Table } from '../components/Table'
import { StatusPill } from '../components/StatusPill'
import { fallbackData, statusTones } from '../data/smsData'

const reportTabs = [
  { key: 'attendanceReport', label: 'Attendance Report' },
  { key: 'studentsAttendanceType', label: 'Students Attendance Type' },
  { key: 'dailyAttendance', label: 'Daily Attendance' },
  { key: 'studentDayWise', label: 'Student Day Wise' },
  { key: 'teacherDayWise', label: 'Teacher Day Wise' },
  { key: 'teacherReport', label: 'Teacher Report' },
  { key: 'staffDayWise', label: 'Staff Day Wise' },
  { key: 'staffReport', label: 'Staff Report' },
]

const statusKeys = ['Present', 'Absent', 'Late', 'Halfday', 'Holiday']

const reportData = {
  attendanceReport: {
    columns: ['Class', 'Attendance', 'Remark'],
    rows: fallbackData.attendance.map((item) => [item.className, `${item.attendancePercent}%`, item.remark]),
  },
  studentsAttendanceType: {
    columns: ['Admission No', 'Date of Admission', 'Student Name', 'Class', 'Date of Birth', 'Parent Name', 'Count'],
    rows: [
      ['AD9892434', '25 Mar 2024', 'Janet', 'III', '10 Jan 2015', 'Mary', 22],
      ['AD9892433', '18 Mar 2024', 'Joann', 'IV', '19 Aug 2014', 'Michael', 15],
      ['AD9892432', '14 Mar 2024', 'Kathleen', 'II', '05 Dec 2017', 'Jessie', 24],
      ['AD9892431', '27 Feb 2024', 'Gifford', 'I', '22 Mar 2018', 'Robert', 22],
      ['AD9892430', '13 Feb 2024', 'Lisa', 'II', '13 May 2017', 'Colleen', 22],
      ['AD9892429', '11 Feb 2024', 'Ralph', 'III', '20 Jun 2015', 'Arthur', 24],
      ['AD9892428', '24 Jan 2024', 'Julie', 'V', '18 Sep 2013', 'Claudia', 24],
      ['AD9892427', '19 Jan 2024', 'Ryan', 'VI', '26 Nov 2012', 'Johnson', 24],
      ['AD9892426', '08 Jan 2024', 'Susan', 'VIII', '26 May 2010', 'Marquita', 24],
      ['AD9892425', '22 Dec 2024', 'Richard', 'VII', '06 Oct 2011', 'Thomas', 24],
    ],
  },
  dailyAttendance: {
    columns: ['Class', 'Section', 'Total Present', 'Total Absent', 'Present %', 'Absent %'],
    rows: [
      ['III', 'A', 69, 2, '98%', '2%'],
      ['IV', 'A', 45, 7, '78%', '22%'],
      ['II', 'B', 69, 8, '89%', '11%'],
      ['I', 'C', 54, 7, '99%', '1%'],
      ['II', 'A', 65, 1, '98%', '2%'],
      ['III', 'B', 78, 22, '72%', '28%'],
      ['V', 'C', 65, 0, '100%', '0%'],
      ['VI', 'A', 45, 2, '99%', '1%'],
      ['VIII', 'B', 47, 2, '98%', '2%'],
      ['VII', 'C', 45, 7, '89%', '11%'],
      ['IX', 'A', 45, 1, '98%', '2%'],
    ],
  },
  studentDayWise: {
    columns: ['S.No', 'Admission No', 'Roll No', 'Name', 'Attendance'],
    rows: [
      [1, 'AD9892434', '35013', 'Janet', 'Present'],
      [2, 'AD9892433', '35012', 'Joann', 'Present'],
      [3, 'AD9892432', '35011', 'Kathleen', 'Halfday'],
      [4, 'AD9892431', '35010', 'Gifford', 'Present'],
      [5, 'AD9892430', '35009', 'Absent'],
      [6, 'AD9892429', '35008', 'Ralph', 'Late'],
      [7, 'AD9892428', '35007', 'Julie', 'Present'],
      [8, 'AD9892427', '35006', 'Ryan', 'Present'],
      [9, 'AD9892426', '35005', 'Susan', 'Absent'],
      [10, 'AD9892425', '35004', 'Richard', 'Present'],
    ],
  },
  teacherDayWise: {
    columns: ['S.No', 'ID', 'Name', 'Subject', 'Attendance'],
    rows: [
      [1, 'T849127', 'Teresa', 'Physics', 'Present'],
      [2, 'T849126', 'Daniel', 'Computer', 'Present'],
      [3, 'T849125', 'Hellana', 'English', 'Absent'],
      [4, 'T849124', 'Erickson', 'Spanish', 'Present'],
      [5, 'T849123', 'Morgan', 'Env Science', 'Halfday'],
      [6, 'T849122', 'Aaron', 'Chemistry', 'Present'],
      [7, 'T849121', 'Jacquelin', 'Maths', 'Present'],
      [8, 'T849120', 'Raul', 'Biology', 'Late'],
      [9, 'T849119', 'Elizabeth', 'Economics', 'Present'],
      [10, 'T849118', 'Edward', 'Finance', 'Present'],
    ],
  },
  teacherReport: {
    columns: ['Teacher / Date', '%', 'P', 'L', 'A', 'H', 'F', '01', '02', '03', '04', '05', '06', '07'],
    rows: [
      ['Teresa', '100', 24, 0, 0, 0, 0, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['Daniel', '87', 22, 1, 1, 0, 0, 'P', 'A', 'P', 'P', 'P', 'P', 'P'],
      ['Hellana', '95', 23, 1, 2, 1, 0, 'P', 'P', 'P', 'L', 'P', 'P', 'P'],
      ['Erickson', '94', 23, 1, 3, 1, 0, 'P', 'P', 'H', 'P', 'P', 'P', 'P'],
      ['Morgan', '45', 16, 2, 1, 6, 1, 'A', 'P', 'P', 'A', 'H', 'P', 'A'],
      ['Aaron', '100', 24, 2, 1, 0, 0, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['Ralph', '95', 21, 2, 1, 6, 2, 'P', 'P', 'P', 'A', 'P', 'P', 'P'],
      ['Jacquelin', '99', 22, 0, 4, 1, 0, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['Raul', '98', 23, 0, 2, 1, 0, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['Elizabeth', '32', 20, 3, 1, 6, 4, 'A', 'P', 'A', 'H', 'P', 'P', 'A'],
    ],
  },
  staffDayWise: {
    columns: ['S.No', 'ID', 'Name', 'Department', 'Role', 'Attendance'],
    rows: [
      [1, '8483', 'Hellana', 'Management', 'Receptionist', 'Present'],
      [2, '8482', 'Daniel', 'Finance', 'Accounts Manager', 'Present'],
      [3, '8481', 'Kevin', 'Management', 'Driver', 'Present'],
      [4, '8480', 'Teresa', 'Finance', 'Librarian', 'Present'],
      [5, '8479', 'James', 'Management', 'HR Manager', 'Halfday'],
      [6, '8478', 'Johnson', 'Admin', 'Accountant', 'Present'],
      [7, '8477', 'Edward', 'Transport', 'Admin', 'Present'],
      [8, '8476', 'Jacquelin', 'Library', 'Admin', 'Present'],
      [9, '8475', 'Elizabeth', 'Management', 'Receptionist', 'Present'],
      [10, '8474', 'Willie', 'Management', 'Technical Head', 'Present'],
    ],
  },
  staffReport: {
    columns: ['Teacher / Date', '%', 'P', 'L', 'A', 'H', 'F', '01', '02', '03', '04', '05', '06', '07'],
    rows: [
      ['Teresa', '100', 24, 0, 0, 0, 0, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['Daniel', '87', 22, 1, 1, 0, 0, 'P', 'A', 'P', 'P', 'P', 'P', 'P'],
      ['Hellana', '95', 23, 1, 2, 1, 0, 'P', 'P', 'P', 'L', 'P', 'P', 'P'],
      ['Erickson', '94', 23, 1, 3, 1, 0, 'P', 'P', 'H', 'P', 'P', 'P', 'P'],
      ['Morgan', '45', 16, 2, 1, 6, 1, 'A', 'P', 'P', 'A', 'H', 'P', 'A'],
      ['Aaron', '100', 24, 2, 1, 0, 0, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['Ralph', '95', 21, 2, 1, 6, 2, 'P', 'P', 'P', 'A', 'P', 'P', 'P'],
      ['Jacquelin', '99', 22, 0, 4, 1, 0, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['Raul', '98', 23, 0, 2, 1, 0, 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
      ['Elizabeth', '32', 20, 3, 1, 6, 4, 'A', 'P', 'A', 'H', 'P', 'P', 'A'],
    ],
  },
}

export function AttendancePage() {
  const [activeTab, setActiveTab] = useState('attendanceReport')
  const [rowPerPage, setRowPerPage] = useState(10)
  const [search, setSearch] = useState('')
  const [activeStatus, setActiveStatus] = useState('')

  const view = reportData[activeTab]

  const filteredRows = useMemo(() => {
    if (!view) return []

    return view.rows.filter((row) => {
      const text = row.join(' ').toLowerCase()
      const searchMatch = search.trim().length === 0 || text.includes(search.trim().toLowerCase())
      const statusMatch = activeStatus.length === 0 || row.some((cell) => String(cell).toLowerCase() === activeStatus.toLowerCase())
      return searchMatch && statusMatch
    })
  }, [view, search, activeStatus])

  const displayedRows = useMemo(() => filteredRows.slice(0, rowPerPage), [filteredRows, rowPerPage])

  return (
    <Shell title="Attendance Report" subtitle="Dashboard / Report / Attendance Report">
      <PageHeader
        title="Attendance Report"
        breadcrumb="Dashboard / Report / Attendance Report"
        subtitle="View attendance summaries, student and staff reports, and day-wise attendance details."
        searchPlaceholder="Search attendance records..."
        actions={(
          <button type="button" className="primary-btn">Export</button>
        )}
      />

      <section className="panel report-tabs">
        {reportTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={`report-tab ${activeTab === tab.key ? 'active' : ''}`}
            onClick={() => {
              setActiveTab(tab.key)
              setActiveStatus('')
              setSearch('')
            }}
          >
            {tab.label}
          </button>
        ))}
      </section>

      <section className="panel report-toolbar">
        <div className="toolbar-left">
          <label className="select-label">
            Row Per Page
            <select value={rowPerPage} onChange={(event) => setRowPerPage(Number(event.target.value))}>
              {[5, 10, 15, 20].map((value) => (
                <option value={value} key={value}>{value}</option>
              ))}
            </select>
          </label>
          <span className="toolbar-meta">Entries</span>
        </div>

        <div className="toolbar-center">
          <div className="status-filter-row">
            {statusKeys.map((status) => (
              <button
                key={status}
                type="button"
                className={`status-pill ${activeStatus === status ? 'active' : ''}`}
                onClick={() => setActiveStatus(activeStatus === status ? '' : status)}
              >
                <StatusPill value={status} />
              </button>
            ))}
          </div>
        </div>

        <div className="toolbar-right">
          <button type="button" className="ghost-btn">Filter</button>
          <button type="button" className="ghost-btn">Sort By A-Z</button>
          <div className="search-box">
            <input
              type="search"
              placeholder="Search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search attendance"
            />
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="panel-head">
          <h3>{reportTabs.find((tab) => tab.key === activeTab)?.label || 'Attendance Report'} List</h3>
          <span>{filteredRows.length} records</span>
        </div>

        <div className="table-wrap report-table-wrap">
          <Table
            columns={view.columns}
            rows={displayedRows}
            pillIndex={view.columns.indexOf('Attendance') >= 0 ? view.columns.indexOf('Attendance') : view.columns.indexOf('Teacher / Date') >= 0 ? -1 : -1}
          />
        </div>
      </section>
    </Shell>
  )
}
