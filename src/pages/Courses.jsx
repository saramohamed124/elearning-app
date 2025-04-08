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
      
        const queryObj = {
            searchTerm: searchTerm || "",
        }
        if(level !== '' && level !== undefined) queryObj.level = level;
        if(categoryId !== '' && categoryId !== undefined) queryObj.categoryId = categoryId;
        if(minPrice !== '' && minPrice !== 0 && minPrice !== undefined) queryObj.minPrice = minPrice;
        if(maxPrice !== '' && maxPrice !== 0 && maxPrice !== undefined) queryObj.maxPrice = maxPrice;

        const query = new URLSearchParams(queryObj).toString();
        const url = `/courses?${query}`;
        navigate(url);
      };
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