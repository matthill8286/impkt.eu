import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Post from '@/pages/Post';
import Posts from '@/pages/Posts';
import Project from '@/pages/Project';
import Projects from '@/pages/Projects';
import Service from '@/pages/Service';
import Services from '@/pages/Services';
import Team from '@/pages/Team';
import Contact from '@/pages/Contact';
import { Layout } from '@/layout';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<Service />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Project />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
