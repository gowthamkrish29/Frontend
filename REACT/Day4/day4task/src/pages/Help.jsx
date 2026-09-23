const Help = () => {
    const faqs = [
        {
            question: "What courses does TECH//SHIFT offer?",
            answer:
                "TECH//SHIFT offers courses in Python, MERN, Java, .NET, PHP, MEAN, and Django Full Stack Development."
        },
        {
            question: "Are the courses suitable for beginners?",
            answer:
                "Yes. Our courses start with programming fundamentals and gradually move toward advanced concepts and full stack development."
        },
        {
            question: "Do you provide practical projects?",
            answer:
                "Yes. Students work on practical projects to apply the concepts they learn during the training."
        },
        {
            question: "What technologies are covered?",
            answer:
                "Depending on the course, technologies may include HTML, CSS, JavaScript, React, Python, Django, Flask, Java, .NET, PHP, SQL, MySQL, Git, and GitHub."
        },
        {
            question: "Do you provide career guidance?",
            answer:
                "Yes. TECH//SHIFT provides career guidance, portfolio development, interview preparation, and placement preparation support."
        },
        {
            question: "How can I contact TECH//SHIFT?",
            answer:
                "You can visit the Contact page and use the contact form to send your questions or enquiries."
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

                {/* Header */}
                <div
                    style={{
                        textAlign: "center",
                        maxWidth: "850px",
                        margin: "0 auto 55px"
                    }}
                >
                    <h1
                        style={{
                            color: "#38bdf8",
                            fontSize: "42px",
                            marginBottom: "20px"
                        }}
                    >
                        Help & Support
                    </h1>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "17px",
                            lineHeight: "1.8",
                            margin: "0"
                        }}
                    >
                        Find answers to common questions about our courses,
                        learning process, projects, and support services.
                    </p>
                </div>

                {/* Help Cards */}
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto 50px",
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "25px"
                    }}
                >

                    {/* Course Help */}
                    <div
                        style={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "18px",
                            padding: "30px",
                            textAlign: "center"
                        }}
                    >
                        <div
                            style={{
                                fontSize: "40px",
                                marginBottom: "15px"
                            }}
                        >
                            📚
                        </div>

                        <h2
                            style={{
                                color: "#38bdf8",
                                fontSize: "22px",
                                marginBottom: "12px"
                            }}
                        >
                            Course Support
                        </h2>

                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: "1.7",
                                margin: "0"
                            }}
                        >
                            Get guidance about course selection,
                            technologies, learning paths, and curriculum.
                        </p>
                    </div>

                    {/* Technical Help */}
                    <div
                        style={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "18px",
                            padding: "30px",
                            textAlign: "center"
                        }}
                    >
                        <div
                            style={{
                                fontSize: "40px",
                                marginBottom: "15px"
                            }}
                        >
                            💻
                        </div>

                        <h2
                            style={{
                                color: "#38bdf8",
                                fontSize: "22px",
                                marginBottom: "12px"
                            }}
                        >
                            Technical Support
                        </h2>

                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: "1.7",
                                margin: "0"
                            }}
                        >
                            Get help with coding concepts, projects,
                            development tools, and technical problems.
                        </p>
                    </div>

                    {/* Career Help */}
                    <div
                        style={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "18px",
                            padding: "30px",
                            textAlign: "center"
                        }}
                    >
                        <div
                            style={{
                                fontSize: "40px",
                                marginBottom: "15px"
                            }}
                        >
                            🚀
                        </div>

                        <h2
                            style={{
                                color: "#38bdf8",
                                fontSize: "22px",
                                marginBottom: "12px"
                            }}
                        >
                            Career Support
                        </h2>

                        <p
                            style={{
                                color: "#94a3b8",
                                lineHeight: "1.7",
                                margin: "0"
                            }}
                        >
                            Get support with resumes, portfolios,
                            interviews, career planning, and placement
                            preparation.
                        </p>
                    </div>

                </div>

                {/* FAQ Section */}
                <div
                    style={{
                        maxWidth: "1000px",
                        margin: "0 auto"
                    }}
                >
                    <h2
                        style={{
                            color: "#38bdf8",
                            fontSize: "32px",
                            textAlign: "center",
                            marginBottom: "35px"
                        }}
                    >
                        Frequently Asked Questions
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "18px"
                        }}
                    >
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: "#0f172a",
                                    border: "1px solid #1e293b",
                                    borderRadius: "14px",
                                    padding: "25px"
                                }}
                            >
                                <h3
                                    style={{
                                        color: "#f8fafc",
                                        fontSize: "19px",
                                        marginBottom: "10px"
                                    }}
                                >
                                    {index + 1}. {faq.question}
                                </h3>

                                <p
                                    style={{
                                        color: "#94a3b8",
                                        fontSize: "15px",
                                        lineHeight: "1.7",
                                        margin: "0"
                                    }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support */}
                <div
                    style={{
                        maxWidth: "900px",
                        margin: "60px auto 0",
                        padding: "40px 30px",
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
                            marginBottom: "15px"
                        }}
                    >
                        Still Need Help?
                    </h2>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            marginBottom: "25px"
                        }}
                    >
                        If you cannot find the answer you are looking for,
                        feel free to contact our team for additional support.
                    </p>

                    <a
                        href="/contact"
                        style={{
                            display: "inline-block",
                            padding: "13px 28px",
                            backgroundColor: "#38bdf8",
                            color: "#020617",
                            textDecoration: "none",
                            borderRadius: "8px",
                            fontWeight: "bold",
                            fontSize: "16px"
                        }}
                    >
                        Contact Us
                    </a>
                </div>

            </div>
        </>
    );
};

export default Help;