const Courses = () => {

    const courses = [
        {
            number: "1",
            title: "Python - Developer",
            icon: "🐍",
            description:
                "Python Development focuses on building powerful applications using Python programming and modern development frameworks.",
            stackTitle: "Technologies Covered",
            technologies: [
                ["Programming Language", "Python"],
                ["Frameworks", "Django, Flask"],
                ["Database", "MySQL, SQLite"],
                ["API", "REST APIs"],
                ["Tools", "Git, GitHub, VS Code"]
            ],
            skills: [
                "Python Programming",
                "Object-Oriented Programming",
                "CRUD Operations",
                "Database Integration",
                "REST API Development",
                "Web Application Development"
            ]
        },

        {
            number: "2",
            title: "MERN - Full Stack Developer",
            icon: "⚛️",
            description:
                "MERN Stack development uses JavaScript technologies to build modern and scalable full-stack web applications.",
            stackTitle: "MERN Stack Architecture",
            technologies: [
                ["MongoDB", "NoSQL database for storing application data."],
                ["Express.js", "Backend framework for Node.js."],
                ["React", "Frontend library for building user interfaces."],
                ["Node.js", "JavaScript runtime for backend development."]
            ],
            skills: [
                "JavaScript",
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST API Development"
            ]
        },

        {
            number: "3",
            title: "Java - Developer",
            icon: "☕",
            description:
                "Java Development focuses on building reliable and scalable applications using Java and popular backend technologies.",
            stackTitle: "Technologies Covered",
            technologies: [
                ["Programming Language", "Java"],
                ["Framework", "Spring Boot"],
                ["Frontend", "HTML, CSS, JavaScript"],
                ["Database", "MySQL"],
                ["API", "REST APIs"],
                ["Tools", "Git, GitHub, VS Code"]
            ],
            skills: [
                "Core Java",
                "Object-Oriented Programming",
                "Collections Framework",
                "Spring Boot",
                "Database Connectivity",
                "REST API Development"
            ]
        },

        {
            number: "4",
            title: ".NET - Developer",
            icon: "🔷",
            description:
                ".NET Development focuses on creating modern web applications using Microsoft technologies and the C# programming language.",
            stackTitle: "Technologies Covered",
            technologies: [
                ["Programming Language", "C#"],
                ["Framework", "ASP.NET Core"],
                ["Frontend", "HTML, CSS, JavaScript"],
                ["Database", "SQL Server"],
                ["API", "ASP.NET Web API"],
                ["Tools", "Visual Studio, Git, GitHub"]
            ],
            skills: [
                "C# Programming",
                "Object-Oriented Programming",
                "ASP.NET Core",
                "Entity Framework",
                "CRUD Operations",
                "REST API Development"
            ]
        },

        {
            number: "5",
            title: "PHP - Full Stack Developer",
            icon: "🛠️",
            description:
                "A PHP Full Stack Developer builds complete web applications using PHP for backend development along with modern frontend technologies.",
            stackTitle: "Technologies Covered",
            technologies: [
                ["Front-End", "HTML, CSS, JavaScript, Bootstrap"],
                ["Back-End", "PHP"],
                ["Framework", "Laravel"],
                ["Database", "MySQL"],
                ["Tools", "Git, GitHub, VS Code"]
            ],
            skills: [
                "PHP Programming",
                "CRUD Operations",
                "User Authentication",
                "REST APIs",
                "Database Integration"
            ]
        },

        {
            number: "6",
            title: "MEAN - Full Stack Developer",
            icon: "🧱",
            description:
                "MEAN Stack development uses JavaScript throughout the application stack, allowing developers to build modern and scalable web applications.",
            stackTitle: "MEAN Stack Architecture",
            technologies: [
                ["MongoDB", "NoSQL database for storing application data."],
                ["Express.js", "Backend framework for Node.js applications."],
                ["Angular", "Frontend framework for building web applications."],
                ["Node.js", "JavaScript runtime for backend development."]
            ],
            skills: [
                "JavaScript",
                "Angular",
                "Node.js",
                "Express.js",
                "MongoDB",
                "REST APIs"
            ]
        },

        {
            number: "7",
            title: "Django - Full Stack Developer",
            icon: "🐍",
            description:
                "Django Full Stack Development combines Python-based backend development with modern frontend technologies to create secure and scalable web applications.",
            stackTitle: "Django Technology Stack",
            technologies: [
                ["Front-End", "HTML, CSS, JavaScript, Bootstrap, React"],
                ["Back-End", "Python and Django"],
                ["Database", "PostgreSQL, MySQL, SQLite"],
                ["API", "Django REST Framework"]
            ],
            skills: [
                "Python Programming",
                "Django Framework",
                "Django ORM",
                "CRUD Operations",
                "User Authentication",
                "REST API Development"
            ]
        }
    ];

    return (
        <>

            <div
                style={{
                    backgroundColor: "#020617",
                    minHeight: "100vh",
                    padding: "60px 8%",
                    color: "#e2e8f0",
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
                        Our Courses
                    </h1>

                    <p
                        style={{
                            maxWidth: "750px",
                            margin: "0 auto",
                            color: "#94a3b8",
                            fontSize: "17px",
                            lineHeight: "1.8"
                        }}
                    >
                        Explore industry-focused development courses at
                        TECH//SHIFT INSTITUTE and build practical skills
                        for modern software development.
                    </p>

                </div>


                {/* Courses Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(340px, 1fr))",
                        gap: "30px",
                        maxWidth: "1250px",
                        margin: "0 auto"
                    }}
                >

                    {courses.map((course, index) => (

                        <div
                            key={index}
                            style={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #1e293b",
                                borderRadius: "18px",
                                padding: "30px",
                                boxShadow:
                                    "0 10px 30px rgba(0, 0, 0, 0.25)",
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >

                            {/* Course Icon */}
                            <div
                                style={{
                                    fontSize: "42px",
                                    marginBottom: "15px"
                                }}
                            >
                                {course.icon}
                            </div>


                            {/* Course Title */}
                            <h2
                                style={{
                                    color: "#38bdf8",
                                    fontSize: "24px",
                                    marginBottom: "15px",
                                    lineHeight: "1.4"
                                }}
                            >
                                {course.number}. {course.title}
                            </h2>


                            {/* Description */}
                            <p
                                style={{
                                    color: "#cbd5e1",
                                    fontSize: "15px",
                                    lineHeight: "1.7",
                                    marginBottom: "25px"
                                }}
                            >
                                {course.description}
                            </p>


                            {/* Technology Heading */}
                            <h3
                                style={{
                                    color: "#f8fafc",
                                    fontSize: "18px",
                                    marginBottom: "15px",
                                    borderBottom: "1px solid #1e293b",
                                    paddingBottom: "10px"
                                }}
                            >
                                {course.icon} {course.stackTitle}
                            </h3>


                            {/* Technologies */}
                            <ul
                                style={{
                                    paddingLeft: "20px",
                                    marginBottom: "25px",
                                    color: "#94a3b8",
                                    lineHeight: "1.8"
                                }}
                            >

                                {course.technologies.map(
                                    (technology, techIndex) => (

                                        <li key={techIndex}>
                                            <b
                                                style={{
                                                    color: "#e2e8f0"
                                                }}
                                            >
                                                {technology[0]}:
                                            </b>{" "}
                                            {technology[1]}
                                        </li>

                                    )
                                )}

                            </ul>


                            {/* Skills Heading */}
                            <h3
                                style={{
                                    color: "#f8fafc",
                                    fontSize: "18px",
                                    marginBottom: "15px",
                                    borderBottom: "1px solid #1e293b",
                                    paddingBottom: "10px"
                                }}
                            >
                                📚 Key Skills
                            </h3>


                            {/* Skills */}
                            <ul
                                style={{
                                    paddingLeft: "20px",
                                    margin: "0",
                                    color: "#94a3b8",
                                    lineHeight: "1.9"
                                }}
                            >

                                {course.skills.map(
                                    (skill, skillIndex) => (

                                        <li key={skillIndex}>
                                            {skill}
                                        </li>

                                    )
                                )}

                            </ul>

                        </div>

                    ))}

                </div>


                {/* Bottom Section */}
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "70px auto 0",
                        padding: "40px 25px",
                        textAlign: "center",
                        backgroundColor: "#0f172a",
                        border: "1px solid #1e293b",
                        borderRadius: "18px"
                    }}
                >

                    <h2
                        style={{
                            color: "#38bdf8",
                            fontSize: "28px",
                            marginBottom: "15px"
                        }}
                    >
                        Learn. Build. Shift.
                    </h2>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "16px",
                            lineHeight: "1.7",
                            maxWidth: "650px",
                            margin: "0 auto"
                        }}
                    >
                        Start your learning journey with TECH//SHIFT INSTITUTE
                        and develop the technical skills needed to build
                        modern applications.
                    </p>

                </div>

            </div>

        </>
    );
};

export default Courses;