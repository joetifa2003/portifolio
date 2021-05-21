import { x } from "@xstyled/emotion";
import Section from "components/Section";

function About() {
    return (
        <Section fullscreen name="about" title="About">
            <x.div
                display="grid"
                gridTemplateColumns={{ xs: "1fr", lg: "8fr 4fr" }}
                alignItems="center"
                justifyItems="center"
                gap="8"
            >
                <x.div order={{ xs: 2, lg: 1 }}>
                    <x.p
                        fontWeight="bold"
                        fontSize={{ xs: "xl", lg: "2xl" }}
                        lineHeight={{ xs: "2xl", lg: "3xl" }}
                        fontFamily="mono"
                        color="secondary"
                        whiteSpace="pre-line"
                        textAlign="justify"
                    >
                        {`Hello! my name is Youssef, I enjoy creating things that live on the the internet.
I started learning programming when I was just 12! I frist learned C# and SQL Server which was a bit difficult but it was a great expreince and I learned alot about programming. Then I started to learn multiple other languages like Java, Python, Ruby, Dart(Flutter) and I really had fun doing it! And i kept learning, Making scripts, And building multiple projects that gave me more experince.

My interset in web development started back in 2019 when I decided to learn more about web design and backend development.

Fast-forward to today, and I’ve learned alot about web devolepment and I fall in love with javascript!`
                            .split("\n")
                            .map((line, li) => (
                                <span key={li}>
                                    <span>
                                        {line.split(" ").map((word, wi) => (
                                            <x.span
                                                key={wi}
                                                hoverColor="text"
                                                color={
                                                    [
                                                        "Hello!",
                                                        "Youssef",
                                                        "Youssef,",
                                                        "Java,",
                                                        "Python,",
                                                        "Ruby,",
                                                        "Dart(Flutter)",
                                                        "programming",
                                                        "learn",
                                                        "experince",
                                                        "projects",
                                                        "backend",
                                                        "web",
                                                        "design",
                                                    ].includes(word)
                                                        ? "text"
                                                        : ""
                                                }
                                            >
                                                {word}{" "}
                                            </x.span>
                                        ))}
                                    </span>
                                    <br />
                                </span>
                            ))}
                    </x.p>
                </x.div>
                <x.div order={{ xs: 1, lg: 2 }}>
                    <x.img
                        src="/images/my_avatar.jpg"
                        alt="My avatar"
                        w="100%"
                        height="auto"
                        borderRadius="50%"
                        borderWidth="8"
                        borderColor="secondary"
                    />
                </x.div>
            </x.div>
        </Section>
    );
}

export default About;
