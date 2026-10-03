import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import Feed from './pages/Feed';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      {/* Light minimalist background matching the new image */}
      <div className="min-h-screen bg-[#f2f2f7] text-black font-sans selection:bg-black selection:text-white pb-10">
        <Navbar />
        <main className="max-w-3xl mx-auto p-4 pt-8">
          <Routes>
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/" element={<Feed />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}