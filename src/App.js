import React from 'react';
// import { gql, useQuery } from '@apollo/client';
import HomePage from "./components/home/HomePage"
import Layout from './components/layout';
import { Route ,Routes } from 'react-router-dom';
import BlogPage from './components/blog/ProductPage';
import ScrollToTop from './components/shared/ScrollToTop';
import ProductPage from './components/blog/ProductPage';
import CategoryPage from './components/category/CategoryPage';

function App() {
  
  return (
    <>
   <Layout>
   
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/blogs" element={<AllBlogs />} /> */}
        <Route path="/products/:slug" element={<ProductPage />} />
        {/* <Route path="/authors" element={<AllAuthors />} /> */}
        <Route path="/categories/:slug" element={<CategoryPage />} />
      </Routes>
   

   </Layout>
   
    </>
  );
}

export default App;
