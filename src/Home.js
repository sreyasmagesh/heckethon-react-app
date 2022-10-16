import React from 'react'
import NavBar from './navbar.js'
import MainSection from './mainSection'
import MainbarSection from './mainbarSection'
import ChallengeSection from './challengeSection'
import SearchSection from './searchSection'
import CardSection from './cardSection'
import Footer from './footer'

import './css/navbar.css'
import './css/mainsection.css'
import './css/mainfooter.css'

const Home = () => {
    return(
        <div>
            <NavBar/>
            <MainSection />
            <MainbarSection />
            <ChallengeSection />
            <SearchSection />
            <CardSection />
            <Footer />
        </div>
    )
}
export default Home;
