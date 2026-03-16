import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Layout from './components/Layout/Layout'
import { UserProvider } from './context/UserProvider'

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'))
const UserListPage = lazy(() => import('./pages/UserListPage/UserListPage'))
const GroupsPage = lazy(() => import('./pages/GroupsPage/GroupsPage'))

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Layout />}
          >
            <Route
              index
              element={<WelcomePage />}
            />
            <Route
              path='users'
              element={<UserListPage />}
            />
            <Route
              path='groups'
              element={<GroupsPage />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
