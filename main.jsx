import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function NurseryLessons() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/lessons")
      .then((res) => setLessons(res.data))
      .catch((err) => console.error("Error fetching lessons:", err));
  }, []);

  const nurseryLessons = lessons.filter(lesson => lesson.level === "nursery");
  const secondaryLessons = lessons.filter(lesson => lesson.level === "secondary");
  const universityLessons = lessons.filter(lesson => lesson.level === "university");

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-start p-6 space-y-10">
      {/* Nursery Section */}
      <section className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-pink-700 text-center">Nursery Lessons</h1>
        <p className="text-sm text-gray-600 text-center mb-4">Fun learning for young children</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {nurseryLessons.map((lesson, index) => (
            <Card key={index} className="hover:shadow-md">
              <CardContent className="p-4">
                <h2 className={`text-xl font-semibold ${lesson.color}`}>{lesson.title}</h2>
                <p className="text-sm text-gray-500">{lesson.description}</p>
                <Button className="mt-2 text-xs">Start Lesson</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Secondary Section */}
      <section className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-blue-700 text-center">Secondary Lessons</h1>
        <p className="text-sm text-gray-600 text-center mb-4">Key subjects for S1–S6 students</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {secondaryLessons.map((lesson, index) => (
            <Card key={index} className="hover:shadow-md">
              <CardContent className="p-4">
                <h2 className={`text-xl font-semibold ${lesson.color}`}>{lesson.title}</h2>
                <p className="text-sm text-gray-500">{lesson.description}</p>
                <Button className="mt-2 text-xs">Start Lesson</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* University Section */}
      <section className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold text-purple-700 text-center">University Lessons</h1>
        <p className="text-sm text-gray-600 text-center mb-4">Courses and life skills for higher learning</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {universityLessons.map((lesson, index) => (
            <Card key={index} className="hover:shadow-md">
              <CardContent className="p-4">
                <h2 className={`text-xl font-semibold ${lesson.color}`}>{lesson.title}</h2>
                <p className="text-sm text-gray-500">{lesson.description}</p>
                <Button className="mt-2 text-xs">Start Lesson</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Back to Home */}
      <div className="pt-6">
        <Button variant="outline" className="text-sm">Back to Home</Button>
      </div>
    </main>
  );
}
