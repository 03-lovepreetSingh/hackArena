"use client";
import React from "react";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { FeaturedCourses } from "../components/courses/FeaturedCourses";
import { CourseCategories } from "../components/courses/CourseCategories";
import { CourseList } from "../components/courses/CourseList";
export const CoursesPage = () => {
  return (
    <div className="flex min-h-screen bg-[#1b1b1e] text-white">
      <Sidebar />
      <main className="flex-1">
        <div className="px-8 py-4">
          <Header />
          <div className="mt-6 space-y-10">
            <FeaturedCourses />
            <CourseCategories />
            <CourseList />
          </div>
        </div>
      </main>
    </div>
  );
};
