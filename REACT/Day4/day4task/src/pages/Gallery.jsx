const Gallery = () => {
    const images = [
        {
            title: "Coding Workshop",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        },
        {
            title: "Web Development",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        },
        {
            title: "Programming Session",
            image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
        },
        {
            title: "Team Collaboration",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
        },
        {
            title: "Learning Environment",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
        },
        {
            title: "Developer Workspace",
            image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72"
        },
        {
            title: "Technology Training",
            image: "https://images.unsplash.com/photo-1531482615713-2afd69097998"
        },
        {
            title: "Project Development",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
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
                        maxWidth: "900px",
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
                        Our Gallery
                    </h1>

                    <p
                        style={{
                            color: "#94a3b8",
                            fontSize: "17px",
                            lineHeight: "1.8",
                            margin: "0"
                        }}
                    >
                        Explore moments from our learning sessions, coding
                        workshops, project development activities, and
                        technology-focused events at TECH//SHIFT INSTITUTE.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns:
                            "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: "30px",
                        maxWidth: "1200px",
                        margin: "0 auto"
                    }}
                >
                    {images.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: "#0f172a",
                                border: "1px solid #1e293b",
                                borderRadius: "18px",
                                overflow: "hidden",
                                boxShadow:
                                    "0 10px 30px rgba(0, 0, 0, 0.25)"
                            }}
                        >

                            {/* Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                style={{
                                    width: "100%",
                                    height: "220px",
                                    objectFit: "cover",
                                    display: "block"
                                }}
                            />

                            {/* Image Details */}
                            <div
                                style={{
                                    padding: "20px"
                                }}
                            >
                                <h3
                                    style={{
                                        color: "#38bdf8",
                                        fontSize: "20px",
                                        margin: "0 0 10px"
                                    }}
                                >
                                    {item.title}
                                </h3>

                                <p
                                    style={{
                                        color: "#94a3b8",
                                        fontSize: "14px",
                                        lineHeight: "1.6",
                                        margin: "0"
                                    }}
                                >
                                    TECH//SHIFT INSTITUTE
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
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
                            fontSize: "30px",
                            marginBottom: "15px"
                        }}
                    >
                        💻 Learn. Build. Shift.
                    </h2>

                    <p
                        style={{
                            color: "#cbd5e1",
                            fontSize: "16px",
                            lineHeight: "1.8",
                            margin: "0"
                        }}
                    >
                        Every project, workshop, and learning session is a
                        step toward becoming a skilled developer. At
                        TECH//SHIFT, we learn modern technologies and turn
                        knowledge into practical projects.
                    </p>
                </div>

            </div>
        </>
    );
};

export default Gallery;