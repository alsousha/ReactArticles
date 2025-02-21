import React from 'react'
import { Routes, Route } from "react-router-dom";
import MainPage from './MainPage';
import About from './About';
import Header from './Header';
import Footer from './Footer';
import SinglePost from './SinglePost';
import Contact from './Contact';
import EditPost from './EditPost';
import CreatePost from './CreatePost';
import Example from './Example';

function MyRoutes() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/editpost/:id' element={<EditPost />} />
      <Route path='/createpost' element={<CreatePost />} />
      <Route path='/test' element={<Example />} />
      <Route path='/post/:id' element={<SinglePost />} />
      {/* <Route path='/post/:id' element={<SinglePost />} />
						<Route path='/' element={<MainPage />} />
						<Route path='/newpost' element={<NewPost />} />
						
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Contacts />} /> */}
    </Routes>
    <Footer/>
    </>
    
  )
}

export default MyRoutes