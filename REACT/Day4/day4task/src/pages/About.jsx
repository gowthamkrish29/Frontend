const About = () => {
    const sections = [
        {
            number: "1",
            title: "Learn the Fundamentals",
            items: [
                {
                    title: "Programming Basics",
                    text: "Learn programming logic, variables, data types, conditions, loops, functions, arrays, and object-oriented programming."
                },
                {
                    title: "Web Fundamentals",
                    text: "Understand how websites and web applications work from the frontend to the backend."
                },
                {
                    title: "Problem Solving",
                    text: "Develop logical thinking and problem-solving skills through coding exercises."
                }
            ]
        },

        {
            number: "2",
            title: "Full Stack Development",
            items: [
                {
                    title: "Frontend Development",
                    text: "Learn HTML, CSS, JavaScript, Bootstrap, React, and responsive web design."
                },
                {
                    title: "Backend Development",
                    text: "Learn Python, Django, Java, Spring Boot, Node.js, PHP, and .NET."
                },
                {
                    title: "Database Development",
                    text: "Learn SQL, MySQL, PostgreSQL, SQLite, MongoDB, and database concepts."
                },
                {
                    title: "API Development",
                    text: "Understand REST APIs and how frontend applications communicate with backend services."
                }
            ]
        },

        {
            number: "3",
            title: "Our Developer Courses",
            items: [
                {
                    title: "Python Developer",
                    text: "Learn Python programming, Django, databases, APIs, and full-stack development."
                },
                {
                    title: "MERN Developer",
                    text: "Learn MongoDB, Express.js, React, and Node.js."
                },
                {
                    title: "Java Developer",
                    text: "Learn Java programming, Spring Boot, databases, and APIs."
                },
                {
                    title: ".NET Developer",
                    text: "Learn C#, ASP.NET Core, SQL Server, and APIs."
                },
                {
                    title: "PHP Developer",
                    text: "Learn PHP, Laravel, MySQL, APIs, and web application development."
                }
            ]
        },

        {
            number: "4",
            title: "Project-Based Learning",
            items: [
                {
                    title: "Frontend Projects",
                    text: "Landing pages, portfolios, dashboards, and responsive websites."
                },
                {
                    title: "Backend Projects",
                    text: "REST APIs, authentication systems, CRUD applications, and database applications."
                },
                {
                    title: "Full Stack Projects",
                    text: "E-commerce platforms, management systems, booking systems, and complete web applications."
                }
            ]
        },

        {
            number: "5",
            title: "Technologies We Teach",
            items: [
                {
                    title: "Frontend",
                    text: "HTML5, CSS3, JavaScript, Bootstrap, React, and responsive web development."
                },
                {
                    title: "Backend",
                    text: "Python, Django, Java, Spring Boot, Node.js, PHP, and .NET."
                },
                {
                    title: "Database",
                    text: "MySQL, PostgreSQL, SQLite, SQL Server, and MongoDB."
                },
                {
                    title: "Tools",
                    text: "Git, GitHub, VS Code, API tools, and modern development workflows."
                }
            ]
        },

        {
            number: "6",
            title: "Our Learning Approach",
            items: [
                {
                    title: "Learn",
                    text: "Understand the fundamentals and concepts behind each technology."
                },
                {
                    title: "Practice",
                    text: "Solve coding exercises and complete practical tasks."
                },
                {
                    title: "Build",
                    text: "Apply your knowledge by creating real-world projects."
                },
                {
                    title: "Improve",
                    text: "Debug applications, review code, and continuously improve development skills."
                },
                {
                    title: "Collaborate",
                    text: "Learn development workflows using Git and GitHub."
                }
            ]
        },

        {
            number: "7",
            title: "Why TECH//SHIFT?",
            items: [
                {
                    title: "Practical Learning",
                    text: "Focus on applying concepts through coding and projects."
                },
                {
                    title: "Modern Technologies",
                    text: "Explore technologies used in modern software development."
                },
                {
                    title: "Project Focused",
                    text: "Build applications that demonstrate your technical skills."
                },
                {
                    title: "Structured Learning",
                    text: "Follow a clear learning path from fundamentals to advanced concepts."
                },
                {
                    title: "Continuous Growth",
                    text: "Develop the habit of learning and adapting as technology evolves."
                }
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

                {/* Main Heading */}
                <div
                    style={{
                        textAlign: "center",
                        maxWidth: "900px",
                        margin: "0 auto 60px"
                    }}
                >

                    <h1
                        style={{
                            color: "#38bdf8",
                            fontSize: "42px",
                            marginBottom: "25px",
                            lineHeight: "1.2"
                        }}
                    >
                        About TECH//SHIFT INSTITUTE
                    </h1>

                    <p
                        style={{
                            color: "#cbd5e1",
                            fontSize: "17px",
                            lineHeight: "1.9",
                            margin: "0"
                        }}
                    >
                        TECH//SHIFT INSTITUTE is a technology-focused learning
                        platform designed to help students and aspiring developers
                        build practical programming skills and prepare for the
                        modern software development industry. Our goal is to make
                        technology learning simple, practical, and project-oriented.
                    </p>

                </div>


                {/* Mission Section */}
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto 45px",
                        padding: "35px",
                        backgroundColor: "#0f172a",
                        border: "1px solid #1e293b",
                        borderRadius: "18px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
                    }}
                >

                    <h2
                        style={{
                            color: "#38bdf8",
                            fontSize: "28px",
                            marginBottom: "18px"
                        }}
                    >
                        🚀 Our Mission
                    </h2>

                    <p
                        style={{
                            color: "#cbd5e1",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            margin: "0"
                        }}
                    >
                        Our mission is to provide structured and practical
                        technology education that helps learners understand
                        programming concepts, develop real-world projects,
                        and continuously improve their technical skills.
                    </p>

                </div>


                {/* Main Sections */}
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "30px"
                    }}
                >

                    {sections.map((section, index) => (

                        <div
                            key={index}
                            style={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #1e293b",
                                borderRadius: "18px",
                                padding: "35px",
                                boxShadow:
                                    "0 10px 30px rgba(0,0,0,0.2)"
                            }}
                        >

                            {/* Section Heading */}
                            <h2
                                style={{
                                    color: "#38bdf8",
                                    fontSize: "25px",
                                    marginBottom: "25px",
                                    paddingBottom: "12px",
                                    borderBottom: "1px solid #1e293b"
                                }}
                            >
                                {section.number}. {section.title}
                            </h2>


                            {/* Section Items */}
                            <ul
                                style={{
                                    margin: "0",
                                    paddingLeft: "25px",
                                    color: "#cbd5e1"
                                }}
                            >

                                {section.items.map((item, itemIndex) => (

                                    <li
                                        key={itemIndex}
                                        style={{
                                            marginBottom: "18px",
                                            lineHeight: "1.8",
                                            paddingLeft: "5px"
                                        }}
                                    >

                                        <b
                                            style={{
                                                color: "#f8fafc"
                                            }}
                                        >
                                            {item.title}:
                                        </b>{" "}

                                        <span
                                            style={{
                                                color: "#94a3b8"
                                            }}
                                        >
                                            {item.text}
                                        </span>

                                    </li>

                                ))}

                            </ul>

                        </div>

                    ))}

                </div>


                {/* Vision Section */}
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "30px auto 0",
                        padding: "35px",
                        backgroundColor: "#0f172a",
                        border: "1px solid #1e293b",
                        borderRadius: "18px"
                    }}
                >

                    <h2
                        style={{
                            color: "#38bdf8",
                            fontSize: "28px",
                            marginBottom: "18px"
                        }}
                    >
                        8. Our Vision
                    </h2>

                    <p
                        style={{
                            color: "#cbd5e1",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            margin: "0"
                        }}
                    >
                        Our vision is to create a learning environment where
                        students can develop strong technical foundations,
                        explore modern technologies, build meaningful projects,
                        and become confident developers who are ready to continue
                        learning throughout their careers.
                    </p>

                </div>


                {/* Learn Build Shift */}
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "60px auto 0",
                        padding: "45px 30px",
                        textAlign: "center",
                        backgroundColor: "#0f172a",
                        border: "1px solid #1e293b",
                        borderRadius: "18px"
                    }}
                >

                    <h2
                        style={{
                            color: "#38bdf8",
                            fontSize: "32px",
                            marginBottom: "20px"
                        }}
                    >
                        💻 Learn. Build. Shift.
                    </h2>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            maxWidth: "750px",
                            margin: "0 auto"
                        }}
                    >
                        Technology is constantly evolving, and developers need
                        to evolve with it. TECH//SHIFT INSTITUTE encourages
                        learners to learn new technologies, build practical
                        solutions, solve problems, and continuously improve
                        their skills.
                    </p>

                </div>


                {/* Start Your Journey */}
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "30px auto 0",
                        padding: "45px 30px",
                        textAlign: "center",
                        backgroundColor: "#0f172a",
                        border: "1px solid #1e293b",
                        borderRadius: "18px"
                    }}
                >

                    <h2
                        style={{
                            color: "#38bdf8",
                            fontSize: "30px",
                            marginBottom: "20px"
                        }}
                    >
                        🚀 Start Your TECH//SHIFT Journey
                    </h2>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            maxWidth: "750px",
                            margin: "0 auto"
                        }}
                    >
                        Whether you are starting your first programming course
                        or looking to expand your development skills,
                        TECH//SHIFT INSTITUTE provides a structured path to
                        explore programming, web development, databases,
                        backend technologies, and full stack development.
                    </p>

                </div>

            </div>

        </>
    );
};

export default About;