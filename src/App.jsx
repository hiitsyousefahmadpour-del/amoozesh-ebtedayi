import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ContentPage from './pages/ContentPage.jsx'
import NotFound from './pages/NotFound.jsx'
import { pages } from './data/site.js'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        {pages.map((p) => (
          <Route key={p.slug} path={`/${p.slug}`} element={<ContentPage page={p} />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}
