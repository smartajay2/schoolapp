import React from 'react';
import welcom from "../../Assets/welcome.jpg"


function Home() {
  return (
    <div className="p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to P School</h1>
        <p className="text-lg">Empowering Students for a Brighter Future</p>
        <img src={welcom} alt='' className='mt-1'/>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p>
          P School is dedicated to providing a high-quality education from grades 1st through 12th. 
          Our mission is to foster a nurturing environment where students can thrive academically, socially, and personally. 
          With a focus on holistic development, we offer a range of programs and activities designed to engage and challenge our students.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Important Announcements</h2>
        <ul className="list-disc pl-5">
          <li>New semester begins on [Date].</li>
          <li>Parent-Teacher Conference scheduled for [Date].</li>
          <li>Summer camp registration opens on [Date].</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="list-disc pl-5">
          <li><strong>[Event Name]</strong> - [Date]: [Description of Event]</li>
          <li><strong>[Event Name]</strong> - [Date]: [Description of Event]</li>
          <li><strong>[Event Name]</strong> - [Date]: [Description of Event]</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">School Highlights</h2>
        <p>
          At P School, we take pride in our achievements and milestones. Here are some of our recent accomplishments:
        </p>
        <ul className="list-disc pl-5">
          <li>Our school won the [Award Name] in [Year].</li>
          <li>Students achieved top positions in [Competition/Event].</li>
          <li>Introduction of new [Program/Facility] enhancing student experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>
          For more information or inquiries, please reach out to us at:
        </p>
        <p><strong>Phone:</strong> [Contact Number]</p>
        <p><strong>Email:</strong> [Contact Email]</p>
        <p><strong>Address:</strong> [School Address]</p>
      </section>
    </div>
  );
}

export default Home;
