import React, { useState } from 'react'
import "./MainLayout.css"
import Header from '../../common/Header'
import BlogCard from '../BlogMainCard/BlogCard'
import MainSubSection from '../SideSections/MainSubSection'
import Footer from '../Footer/Footer'
import blogs from '../BlogMainCard/data/blogData'

const MainLayout = () => {
    const blogsPerPage = 2;
    const [currentPage, setCurrentPage] = useState(1);
    // pagination logic
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='MainPage'>
            <div className='container'>
                <div className='Main_Heading'>
                    <Header name={"MY BLOG"} />
                    <p className='Sub_Heading'>Welcome to the blog of <span className="UnknownColor">unknown</span></p>
                </div>
                <div className='BlogPage'>
                    <div className='Blog_Main_Cards_area'>
                        <BlogCard blogs={currentBlogs} />
                    </div>
                    <div className='Blog_sub_Content_area'>
                        <MainSubSection />
                    </div>
                </div>
            </div>
            <Footer currentPage={currentPage} totalPages={Math.ceil(blogs.length / blogsPerPage)} onPageChange={handlePageChange} />
        </div>
    )
}
export default MainLayout