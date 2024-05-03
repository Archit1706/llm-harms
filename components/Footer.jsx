// components/Footer.js

import Link from "next/link";

const Footer = () => {
    const teamMembers = [
        { name: "Mokshit Surana", linkedInUrl: "https://www.linkedin.com/in/mokshitsurana", role: "Team Lead" },
        { name: "Archit Rathod", linkedInUrl: "https://www.linkedin.com/in/archit-rathod/", role: "Distinguished Contributor" },
        { name: "Dr. Swapneel Mehta", linkedInUrl: "https://mehtaver.se/", role: "Research Mentor" },
        { name: "Dr. Deb Donig", linkedInUrl: "https://debdonig.com/professional/", role: "External Research Mentor" }
    ];

    return (
        <footer className="w-full bg-gray-800 p-4 mt-4 rounded-xl shadow-sm shadow-gray-300">
            <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center text-white text-sm sm:text-base">
                Team Members:
                {teamMembers.map((member, index) => (
                    <div key={index} className="px-4 py-2">
                        <Link href={member.linkedInUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">

                            {member.name}

                        </Link>
                    </div>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
