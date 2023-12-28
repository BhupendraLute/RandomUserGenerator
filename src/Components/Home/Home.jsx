import React from 'react'
import {Container} from "../index"
import "./Home.css"
import {useNavigate} from "react-router-dom"

function Home() {

  const navigate = useNavigate()

  const handleClick = ()=> {
    navigate("/profiles")
  }

  return (
    <Container>
      <section className="flex-col flex-center flex-gap-2 hero">
        <h1>Welcome to The Random User Profile Viewer</h1>
        <p>
          This is my practice project to improve my <strong>ReactJS</strong> skills.
        </p>
        <p>
          This website uses <strong>randomuser.me</strong> API to generate users data and show that data in separate Profile cards.
        </p>
        <p>
          Do you want to see that?
        </p>
        <button onClick={handleClick}  className='hero-button' >Let's Get Started &rarr;</button>
      </section>
    </Container>
  )
}

export default Home