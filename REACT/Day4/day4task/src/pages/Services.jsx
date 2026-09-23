const Services = () => {
    const services = [
        {
            title: "1. Technical Training",
            icon: "💻",
            description:
                "Learn programming and modern development technologies through structured and practical training programs.",
            skills: [
                "Programming Fundamentals",
                "Web Development",
                "Frontend Development",
                "Backend Development",
                "Database Management",
                "Full Stack Development"
            ]
        },
        {
            title: "2. Project-Based Learning",
            icon: "🚀",
            description:
                "Build practical projects to understand how real-world applications are designed and developed.",
            skills: [
                "Mini Projects",
                "Major Projects",
                "Web Applications",
                "Database Projects",
                "API-Based Applications",
                "Full Stack Applications"
            ]
        },
        {
            title: "3. Full Stack Development",
            icon: "⚛️",
            description:
                "Learn how to develop complete applications from frontend interfaces to backend systems and databases.",
            skills: [
                "HTML, CSS and JavaScript",
                "React.js",
                "Python and Django",
                "Node.js and Express.js",
                "SQL and MongoDB",
                "REST API Development"
            ]
        },
        {
            title: "4. Career Guidance",
            icon: "🎯",
            description:
                "Get guidance on developing the technical and professional skills required for software development careers.",
            skills: [
                "Career Path Guidance",
                "Technology Selection",
                "Skill Development Planning",
                "Project Guidance",
                "Resume Preparation",
                "Interview Preparation"
            ]
        },
        {
            title: "5. Internship & Placement Preparation",
            icon: "💼",
            description:
                "Prepare for internship and entry-level software development opportunities through technical and interview-focused training.",
            skills: [
                "Technical Interview Preparation",
                "Coding Practice",
                "Programming Problem Solving",
                "Mock Interviews",
                "Resume & Portfolio Guidance",
                "Communication Skills"
            ]
        },
        {
            title: "6. Portfolio Development",
            icon: "🌐",
            description:
                "Build a professional developer portfolio that showcases your projects, technical skills and learning journey.",
            skills: [
                "Personal Portfolio Website",
                "GitHub Profile Setup",
                "Project Documentation",
                "Project Deployment",
                "LinkedIn Profile Guidance",
                "Developer Profile Building"
            ]
        },
        {
            title: "7. Workshops & Seminars",
            icon: "🎓",
            description:
                "Participate in technology-focused workshops and seminars to explore current development tools and technologies.",
            skills: [
                "Web Development Workshops",
                "AI & Emerging Technologies",
                "Git & GitHub Workshops",
                "Cloud Technology Sessions",
                "Developer Tools",
                "Industry Technology Seminars"
            ]
        },
        {
            title: "8. Online Learning Support",
            icon: "📚",
            description:
                "Access learning resources and development guidance to continue learning beyond classroom sessions.",
            skills: [
                "Learning Materials",
                "Practice Exercises",
                "Coding Assignments",
                "Project Resources",
                "Technical Doubt Support",
                "Learning Progress Guidance"
            ]
        }
    ];

    return (
        <>
            <div
                style={{
                    backgroundColor: "#020617",
                    color: "#e2e8f0",
                    minHeight: "100vh",
                    padding: "60px 8%",
                    fontFamily: "Arial, sans-serif"
                }}
            >

                {/* Page Heading */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "50px"
                    }}
                >
                    <h1
                        style={{
                            fontSize: "42px",
                            color: "#38bdf8",
                            marginBottom: "15px"
                        }}
                    >
                        Our Services
                    </h1>

                    <p
                        style={{
                            maxWidth: "750px",
                            margin: "0 auto",
                            fontSize: "17px",
                            lineHeight: "1.8",
                            color: "#94a3b8"
                        }}
                    >
                        TECH//SHIFT INSTITUTE provides practical technology
                        training and career-focused services to help students
                        and aspiring developers build strong technical skills.
                    </p>
                </div>

                {/* Services Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(320px, 1fr))",
                        gap: "30px",
                        maxWidth: "1200px",
                        margin: "0 auto"
                    }}
                >

                    {services.map((service, index) => (

                        <div
                            key={index}
                            style={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #1e293b",
                                borderRadius: "16px",
                                padding: "30px",
                                boxShadow:
                                    "0 10px 30px rgba(0, 0, 0, 0.25)",
                                transition: "transform 0.3s ease"
                            }}
                        >

                            {/* Icon */}
                            <div
                                style={{
                                    fontSize: "40px",
                                    marginBottom: "15px"
                                }}
                            >
                                {service.icon}
                            </div>

                            {/* Service Title */}
                            <h2
                                style={{
                                    fontSize: "23px",
                                    color: "#38bdf8",
                                    marginBottom: "15px",
                                    lineHeight: "1.4"
                                }}
                            >
                                {service.title}
                            </h2>

                            {/* Description */}
                            <p
                                style={{
                                    color: "#cbd5e1",
                                    lineHeight: "1.7",
                                    fontSize: "15px",
                                    marginBottom: "20px"
                                }}
                            >
                                {service.description}
                            </p>

                            {/* Skills Heading */}
                            <h3
                                style={{
                                    color: "#f8fafc",
                                    fontSize: "17px",
                                    marginBottom: "12px"
                                }}
                            >
                                What You'll Learn
                            </h3>

                            {/* Skills List */}
                            <ul
                                style={{
                                    paddingLeft: "20px",
                                    margin: "0",
                                    color: "#94a3b8",
                                    lineHeight: "1.9"
                                }}
                            >
                                {service.skills.map((skill, skillIndex) => (
                                    <li key={skillIndex}>
                                        {skill}
                                    </li>
                                ))}
                            </ul>

                        </div>

                    ))}

                </div>

                {/* Bottom Section */}
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "70px",
                        padding: "40px 20px",
                        backgroundColor: "#0f172a",
                        borderRadius: "16px",
                        border: "1px solid #1e293b"
                    }}
                >

                    <h2
                        style={{
                            color: "#38bdf8",
                            fontSize: "28px",
                            marginBottom: "15px"
                        }}
                    >
                        Build. Learn. Grow.
                    </h2>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "16px",
                            lineHeight: "1.7",
                            maxWidth: "700px",
                            margin: "0 auto"
                        }}
                    >
                        Start your development journey with TECH//SHIFT
                        INSTITUTE and build the skills needed to create
                        modern applications.
                    </p>

                </div>

            </div>
        </>
    );
};

export default Services;