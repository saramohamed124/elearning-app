import React from "react";
import Header from "../components/Home/components/Header/Header";
import Headings from "../utils/Headings/Headings";
import CoursesSearch from "../components/Search/CoursesSearch";
import { useNavigate } from "react-router-dom";
import FetchCourses from "../components/Courses/components/FetchCourses";

const Courses = () => {
    const navigate = useNavigate();

    const handleSearch = (searchParams) => {
    const { searchTerm, level, categoryId, minPrice, maxPrice } = searchParams;
    const query = new URLSearchParams({
        searchTerm,
        level,
        categoryId,
        minPrice,
        maxPrice,
    }).toString();
    const url = `/courses?${query}`;
    navigate(url);
    }

    return (
        <div>
            <Header/>
            <div className="container-custom">
            <Headings valueColor={'black'}>الدورات التعليمية</Headings>
            <CoursesSearch onSearch={handleSearch}/>
            <FetchCourses/>
            </div>
            </div>
    );
}

export default Courses;