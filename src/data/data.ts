const STATUS_ON_DECK = { id: 1, name: 'On Deck', color: 'blue.300' }
const STATUS_IN_PROGRESS = {
  id: 2,
  name: 'In Progress',
  color: 'yellow.400',
}
const STATUS_TESTING = { id: 3, name: 'Testing', color: 'pink.300' }
const STATUS_DEPLOYED = { id: 4, name: 'Deployed', color: 'green.300' }
export const STATUSES = [STATUS_ON_DECK, STATUS_IN_PROGRESS, STATUS_TESTING, STATUS_DEPLOYED]

export interface DataTableType {
  task: string
  status: { id: number; name: string; color: string } | null
  due: Date | null
  notes: string | null
}
const DATA: DataTableType[] = [
  {
    task: 'Add a New Feature',
    status: STATUS_ON_DECK,
    due: new Date('2024/10/15'),
    notes: 'This is a note',
  },
  {
    task: 'Write Integration Tests',
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: 'Use Jest',
  },
  {
    task: 'Add Instagram Integration',
    status: STATUS_DEPLOYED,
    due: null,
    notes: '',
  },
  {
    task: 'Cleanup Database',
    status: null,
    due: new Date('2024/02/15'),
    notes: 'Remove old data',
  },
  {
    task: 'Refactor API Endpoints',
    status: STATUS_TESTING,
    due: null,
    notes: '',
  },
  {
    task: 'Improve Error Handling',
    status: STATUS_TESTING,
    due: null,
    notes: '',
  },
  {
    task: 'Add Search to Todo List',
    status: null,
    due: new Date('2024/11/05'),
    notes: 'Add filters & search bar',
  },
  {
    task: 'Refactor Login/Register',
    status: STATUS_ON_DECK,
    due: null,
    notes: 'Use Auth0 for login & sign up',
  },
  {
    task: 'Add Notifications',
    status: null,
    due: new Date('2024/11/12'),
    notes: 'Add push notifications for tasks',
  },
  {
    task: 'Add Google Analytics',
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: 'Add analytics to track user behavior',
  },
  {
    task: 'Add User Profiles',
    status: STATUS_DEPLOYED,
    due: null,
    notes: '',
  },
  {
    task: 'Add Share Buttons',
    status: STATUS_TESTING,
    due: null,
    notes: 'Add sharing buttons for tasks',
  },
  {
    task: 'Add Task Labels',
    status: STATUS_ON_DECK,
    due: null,
    notes: 'Add labels to tasks',
  },
  {
    task: 'Add Collaborators',
    status: null,
    due: new Date('2024/01/12'),
    notes: 'Add ability to share tasks with others',
  },
  {
    task: 'Add Task Prioritization',
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: 'Prioritize tasks using due dates and labels',
  },
  {
    task: 'Add Task Due Dates',
    status: STATUS_DEPLOYED,
    due: null,
    notes: 'Add due dates to tasks',
  },
  {
    task: 'Add Task Statuses',
    status: STATUS_TESTING,
    due: null,
    notes: 'Add statuses to tasks (In Progress, Done, etc.)',
  },
  {
    task: 'Add Task Completion Dates',
    status: STATUS_ON_DECK,
    due: null,
    notes: 'Add completion date to tasks',
  },
  {
    task: 'Add Task Reminders',
    status: null,
    due: new Date('2024/02/12'),
    notes: 'Add reminders for tasks',
  },
  {
    task: 'Add Task Recurring',
    status: STATUS_IN_PROGRESS,
    due: null,
    notes: 'Make tasks recurring (weekly, monthly, etc.)',
  },
  {
    task: 'Add Task Reports',
    status: STATUS_DEPLOYED,
    due: null,
    notes: 'Add reports for tasks (task list, due list, etc.)',
  },
  {
    task: 'Add Task Analytics',
    status: STATUS_TESTING,
    due: null,
    notes: 'Add analytics for tasks (time spent, etc.)',
  },
]

export default DATA
