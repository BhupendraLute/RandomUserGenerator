import React from "react";
import "./About.css";
import { Container } from "../index";

function About() {
  return (
    <Container>
      <section className="flex flex-between about">
        <div className="flex-col flex-gap-2">
          <h1 style={{ textAlign: "center" }}>About Me</h1>

          <div className="flex-col details">
            <h2>Introduction</h2>
            <p>
              Hey there! Welcome to{" "}
              <strong>
                <i>Random User Generator</i>
              </strong>
              , and thanks for stopping by. I'm <strong>Bhupendra Lute</strong>,
              the mind behind this little corner of the web.
            </p>
          </div>

          <div className="details">
            <h2>Who am I? </h2>
            <p>
              I'm a <strong>Fresher, Web Developer</strong> based in
              Maharashtra, India - 441904, fueled by a deep passion for
              technology and an insatiable curiosity about the digital world.
            </p>
          </div>

          <div className="details">
            <h2>Tech Enthusiast</h2>
            <p>
              As a tech enthusiast, I love experimenting with the latest tools
              and frameworks. React has been my playground for this project, and
              I'm thrilled to share it with you.
            </p>
          </div>
        </div>

        <div className="flex-col flex-gap-2">
          <h1 style={{ textAlign: "center" }}>About Website</h1>

          <div className="details">
            <h2>Inspiration</h2>
            <p>
              <strong>
                <i>Random User Generator</i>
              </strong>{" "}
              was born out of a desire to explore the possibilities of APIs and
              share the joy of technology. Whether you're a fellow developer, a
              curious mind, or just stumbled upon us randomly, I hope you find
              something intriguing here.
            </p>
          </div>

          <div className="details">
            <h2>Features</h2>
            <p>
              Explore the myriad of random user profiles generated on every
              visit. Click around, discover unique details, and enjoy the
              randomness. It's a simple concept, but the possibilities are
              endless.
            </p>
          </div>

          <div className="details">
            <h2>How It Works</h2>
            <p>
              Behind the scenes, [Your Website Name] leverages the power of the
              randomuser.me API to dynamically create diverse and interesting
              user profiles. It's a seamless integration into this React-driven
              experience.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default About;
