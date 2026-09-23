const Contact = () => {
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
                        maxWidth: "800px",
                        margin: "0 auto 50px"
                    }}
                >
                    <h1
                        style={{
                            color: "#38bdf8",
                            fontSize: "42px",
                            marginBottom: "20px"
                        }}
                    >
                        Contact Us
                    </h1>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "17px",
                            lineHeight: "1.8",
                            margin: "0"
                        }}
                    >
                        Have a question about our courses, services, or
                        learning programs? Get in touch with the
                        TECH//SHIFT INSTITUTE team.
                    </p>
                </div>

                {/* Contact Section */}
                <div
                    style={{
                        maxWidth: "1100px",
                        margin: "0 auto",
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "35px"
                    }}
                >

                    {/* Contact Information */}
                    <div
                        style={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "18px",
                            padding: "35px",
                            boxShadow:
                                "0 10px 30px rgba(0, 0, 0, 0.25)"
                        }}
                    >
                        <h2
                            style={{
                                color: "#38bdf8",
                                fontSize: "28px",
                                marginBottom: "25px"
                            }}
                        >
                            Get In Touch
                        </h2>

                        <div style={{ marginBottom: "25px" }}>
                            <h3
                                style={{
                                    color: "#f8fafc",
                                    fontSize: "18px",
                                    marginBottom: "8px"
                                }}
                            >
                                📍 Address
                            </h3>

                            <p
                                style={{
                                    color: "#94a3b8",
                                    lineHeight: "1.7",
                                    margin: "0"
                                }}
                            >
                                TECH//SHIFT INSTITUTE
                                <br />
                                Chennai, Tamil Nadu, India
                            </p>
                        </div>

                        <div style={{ marginBottom: "25px" }}>
                            <h3
                                style={{
                                    color: "#f8fafc",
                                    fontSize: "18px",
                                    marginBottom: "8px"
                                }}
                            >
                                📧 Email
                            </h3>

                            <p
                                style={{
                                    color: "#94a3b8",
                                    margin: "0"
                                }}
                            >
                                info@techshift.com
                            </p>
                        </div>

                        <div style={{ marginBottom: "25px" }}>
                            <h3
                                style={{
                                    color: "#f8fafc",
                                    fontSize: "18px",
                                    marginBottom: "8px"
                                }}
                            >
                                📞 Phone
                            </h3>

                            <p
                                style={{
                                    color: "#94a3b8",
                                    margin: "0"
                                }}
                            >
                                +91 98765 43210
                            </p>
                        </div>

                        <div>
                            <h3
                                style={{
                                    color: "#f8fafc",
                                    fontSize: "18px",
                                    marginBottom: "8px"
                                }}
                            >
                                🕒 Working Hours
                            </h3>

                            <p
                                style={{
                                    color: "#94a3b8",
                                    lineHeight: "1.7",
                                    margin: "0"
                                }}
                            >
                                Monday - Saturday
                                <br />
                                9:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        style={{
                            backgroundColor: "#0f172a",
                            border: "1px solid #1e293b",
                            borderRadius: "18px",
                            padding: "35px",
                            boxShadow:
                                "0 10px 30px rgba(0, 0, 0, 0.25)"
                        }}
                    >
                        <h2
                            style={{
                                color: "#38bdf8",
                                fontSize: "28px",
                                marginBottom: "25px"
                            }}
                        >
                            Send Us a Message
                        </h2>

                        <form>

                            {/* Name */}
                            <div style={{ marginBottom: "20px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        color: "#cbd5e1",
                                        marginBottom: "8px"
                                    }}
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    style={{
                                        width: "100%",
                                        padding: "13px",
                                        boxSizing: "border-box",
                                        backgroundColor: "#020617",
                                        color: "#e2e8f0",
                                        border: "1px solid #334155",
                                        borderRadius: "8px",
                                        outline: "none",
                                        fontSize: "15px"
                                    }}
                                />
                            </div>

                            {/* Email */}
                            <div style={{ marginBottom: "20px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        color: "#cbd5e1",
                                        marginBottom: "8px"
                                    }}
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    style={{
                                        width: "100%",
                                        padding: "13px",
                                        boxSizing: "border-box",
                                        backgroundColor: "#020617",
                                        color: "#e2e8f0",
                                        border: "1px solid #334155",
                                        borderRadius: "8px",
                                        outline: "none",
                                        fontSize: "15px"
                                    }}
                                />
                            </div>

                            {/* Subject */}
                            <div style={{ marginBottom: "20px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        color: "#cbd5e1",
                                        marginBottom: "8px"
                                    }}
                                >
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter subject"
                                    style={{
                                        width: "100%",
                                        padding: "13px",
                                        boxSizing: "border-box",
                                        backgroundColor: "#020617",
                                        color: "#e2e8f0",
                                        border: "1px solid #334155",
                                        borderRadius: "8px",
                                        outline: "none",
                                        fontSize: "15px"
                                    }}
                                />
                            </div>

                            {/* Message */}
                            <div style={{ marginBottom: "25px" }}>
                                <label
                                    style={{
                                        display: "block",
                                        color: "#cbd5e1",
                                        marginBottom: "8px"
                                    }}
                                >
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Enter your message"
                                    style={{
                                        width: "100%",
                                        padding: "13px",
                                        boxSizing: "border-box",
                                        backgroundColor: "#020617",
                                        color: "#e2e8f0",
                                        border: "1px solid #334155",
                                        borderRadius: "8px",
                                        outline: "none",
                                        fontSize: "15px",
                                        resize: "vertical"
                                    }}
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                style={{
                                    width: "100%",
                                    padding: "14px",
                                    backgroundColor: "#38bdf8",
                                    color: "#020617",
                                    border: "none",
                                    borderRadius: "8px",
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                    cursor: "pointer"
                                }}
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>

                {/* Bottom Section */}
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
                        🚀 Start Your TECH//SHIFT Journey
                    </h2>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            margin: "0"
                        }}
                    >
                        Have questions about our courses or services?
                        Contact us and take the next step toward becoming
                        a skilled developer.
                    </p>
                </div>

            </div>
        </>
    );
};

export default Contact;