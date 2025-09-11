"use client";
import React from "react";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
export const EventsList = () => {
  const events = [
    {
      id: 1,
      title: "Web3 Developer Summit",
      type: "Conference",
      date: "July 15-17, 2024",
      location: "Virtual",
      description:
        "Join the largest gathering of Web3 developers for three days of workshops, talks, and networking opportunities.",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      attendees: 1250,
      status: "upcoming",
      featured: true,
    },
    {
      id: 2,
      title: "DeFi Innovation Workshop",
      type: "Workshop",
      date: "June 28, 2024",
      location: "New York City + Virtual",
      description:
        "A hands-on workshop focused on building the next generation of DeFi protocols with enhanced security and user experience.",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      attendees: 320,
      status: "upcoming",
      featured: false,
    },
    {
      id: 3,
      title: "Blockchain Security Meetup",
      type: "Meetup",
      date: "June 10, 2024",
      location: "London + Virtual",
      description:
        "Monthly meetup for security professionals and developers to discuss the latest trends and challenges in blockchain security.",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      attendees: 180,
      status: "upcoming",
      featured: false,
    },
    {
      id: 4,
      title: "NFT Art & Tech Festival",
      type: "Festival",
      date: "August 5-8, 2024",
      location: "Miami",
      description:
        "A four-day festival celebrating the intersection of art, technology, and blockchain with exhibitions, talks, and hands-on demos.",
      image:
        "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      attendees: 850,
      status: "upcoming",
      featured: true,
    },
  ];
  const pastEvents = [
    {
      id: 5,
      title: "Smart Contract Audit Workshop",
      type: "Workshop",
      date: "May 20, 2024",
      location: "Virtual",
      attendees: 420,
      status: "past",
    },
    {
      id: 6,
      title: "Web3 UX Design Principles",
      type: "Webinar",
      date: "May 12, 2024",
      location: "Virtual",
      attendees: 650,
      status: "past",
    },
    {
      id: 7,
      title: "Crypto Economic Design Summit",
      type: "Conference",
      date: "April 28-29, 2024",
      location: "Berlin + Virtual",
      attendees: 780,
      status: "past",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Community Events</h2>
        <button className="bg-[#0092ff] hover:bg-[#0084e5] text-white px-4 py-2 rounded-md transition-colors">
          Host an Event
        </button>
      </div>
      <div className="flex flex-wrap gap-4 mb-8">
        <div className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
          Event Type: All
        </div>
        <div className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
          Location: All
        </div>
        <div className="bg-[#16161b] rounded-md px-3 py-1 text-sm text-[#949fa8]">
          Date: Upcoming
        </div>
      </div>
      {/* Featured Event */}
      {events
        .filter((event) => event.featured)
        .map((event) => (
          <div
            key={event.id}
            className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden mb-8"
          >
            <div className="relative">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 left-4 bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm">
                Featured Event
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="bg-[#1b1b1e] text-xs px-2 py-1 rounded mr-2">
                      {event.type}
                    </span>
                    <span className="text-xs text-white/70">{event.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-white/80 mb-4">{event.description}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-[#949fa8]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1 text-[#949fa8]" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-[#0092ff] text-white px-4 py-2 rounded-md">
                      Register Now
                    </button>
                    <button className="bg-white/20 text-white px-4 py-2 rounded-md">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {events
          .filter((event) => !event.featured)
          .map((event) => (
            <div
              key={event.id}
              className="bg-[#16161b] border border-[#2a2a2e] rounded-lg overflow-hidden hover:border-[#949fa8] transition-colors cursor-pointer"
            >
              <div className="h-40 relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-[#1b1b1e]/80 text-white text-xs px-2 py-0.5 rounded">
                  {event.type}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>
                <p className="text-sm text-[#949fa8] mb-3 line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center gap-4 mb-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-3 w-3 mr-1 text-[#949fa8]" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-3 w-3 mr-1 text-[#949fa8]" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-[#949fa8]">
                    <Users className="h-3 w-3 mr-1" />
                    {event.attendees} attending
                  </div>
                  <button className="bg-[#0092ff] text-white px-3 py-1 rounded-md text-sm">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      <h3 className="text-xl font-bold mb-4">Past Events</h3>
      <div className="space-y-3">
        {pastEvents.map((event) => (
          <div
            key={event.id}
            className="bg-[#16161b] border border-[#2a2a2e] rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <h4 className="font-medium">{event.title}</h4>
              <div className="flex items-center text-sm text-[#949fa8] mt-1">
                <Calendar className="h-3 w-3 mr-1" />
                <span className="mr-4">{event.date}</span>
                <MapPin className="h-3 w-3 mr-1" />
                <span>{event.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-[#949fa8]">
                <Users className="h-3 w-3 inline mr-1" />
                {event.attendees}
              </span>
              <button className="bg-[#1b1b1e] border border-[#2a2a2e] px-3 py-1 rounded-md text-sm">
                View Recordings
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button className="border border-[#2a2a2e] text-[#949fa8] px-4 py-2 rounded-md hover:border-[#949fa8] hover:text-white transition-colors">
          View All Past Events
        </button>
      </div>
    </div>
  );
};
