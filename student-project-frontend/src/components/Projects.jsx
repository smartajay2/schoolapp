import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../config/firebase'; // Updated path

function Projects() {
    const [students, setStudents] = useState([]);
    const [admin, setAdmin] = useState(false);
    const [searchTerm, setSearchTerm] = useState(''); // Added search term state

    useEffect(() => {
        window.scrollTo(0, 0);

        auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('checking user');
                if (user.uid === 'zku50mUH7XTD0fiKbwg9Nc1uCdD3') {
                    console.log('yes its admin');
                    setAdmin(true);
                } else {
                    console.log('Not an admin');
                    setAdmin(false);
                }
            } else {
                console.log('user Logged out');
            }
        });

        axios
            .get('http://localhost:5000/api/student-dashboard')
            .then((res) => {
                console.log(res.data);
                setStudents(res.data);
            })
            .catch(() => {
                console.log('Error fetching data');
            });
    }, []);

    const [newTitle, setNewTitle] = useState('');
    const [newDesc, setNewDesc] = useState('');

    const handleLike = async (student_id) => {
        try {
            const response = await axios.patch(`http://localhost:5000/api/student-dashboard/like/${student_id}`);
            if (response.status === 200) {
                const updatedStudents = students.map((stud) =>
                    stud._id === student_id ? { ...stud, likes: stud.likes + 1 } : stud
                );
                setStudents(updatedStudents);
            }
        } catch (error) {
            console.error('Error liking the blog post:', error);
        }
    };

    const handleDelete = async (student_id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/student-dashboard/${student_id}`);
            if (response.status === 204) { // 204 No Content
                setStudents(students.filter((stud) => stud._id !== student_id));
            } else {
                console.error('Failed to delete the student');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleNewBlogSubmit = (event) => {
        event.preventDefault();
        const today = new Date();
        const date = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        const likes = 0;
        axios
            .post('http://localhost:5000/api/student-dashboard', { newTitle, date, newDesc, likes })
            .then((res) => {
                console.log(res.data);
                setStudents([...students, res.data]);
            })
            .catch(() => {
                console.log('Error adding new student');
            });

        setNewTitle('');
        setNewDesc('');
    };

    // Handler for search input changes
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toUpperCase());
    };

    // Filter students based on the search term
    const filteredStudents = students.filter(student =>
        student.newTitle.toUpperCase().includes(searchTerm) ||
        student.newDesc.toUpperCase().includes(searchTerm)
    );

    return (
        <div className="py-14">
            <div>
                <h1 className="text-center font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r text-black">
                    Hello, welcome to Student Dashboard
                </h1>
            </div>

            {admin && (
                <div className="blog-creation-form mb-8" style={{ width: '80%', margin: 'auto' }}>
                    <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Project Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            className="p-2 border rounded"
                            required
                        />
                        <textarea
                            placeholder="Project Description"
                            value={newDesc}
                            onChange={(e) => setNewDesc(e.target.value)}
                            className="p-2 border rounded"
                            rows="4"
                            required
                        />
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out">
                            Add Student
                        </button>
                    </form>
                </div>
            )}

            <div className="" style={{ width: '80%', margin: 'auto' }}>
                <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="p-2 border rounded mt-4"
                />
            </div>
           

            <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4 mt-10">
                {filteredStudents.map((stud) => (
                    <div key={stud._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg border-l-4 border-blue-500">
                        <h3 className="blog-title font-semibold text-2xl text-blue-800 mb-3">{stud.newTitle}</h3>
                        <p className="blog-date text-gray-400 text-sm mb-4">{stud.date}</p>
                        <p className="blog-content text-gray-600 mb-4">{stud.newDesc}</p>
                        <span className="text-blue-500 cursor-pointer hover:text-blue-700" onClick={() => handleLike(stud._id)}>Like</span>
                        <span className="ml-2 text-gray-600">{stud.likes} Likes</span>
                        {admin && (
                            <button className="p-2 m-4 bg-red-500 text-white rounded hover:bg-red-700" onClick={() => handleDelete(stud._id)}>
                                Delete
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
