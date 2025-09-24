import React from "react";
import NavBar from "./NavBar";

function Homepage(){
    return(
        <div>
            <NavBar/>
            <h1>skyworld Aerospace Limited Company</h1>
            <h2>helicopter Rental Services</h2>
            <div className="our">
                <div className="services">
                    <p>Our Sevices</p>
                    <ul>
                        <l1>Troop Transport & Development</l1>
                        <l1>Cargo & Logistics Support</l1>
                        <l1>Medical EEvacuation (MEDEVAC)</l1>
                        <l1>VIP & Dignitary Transport</l1>
                        <l1>Humanitarian & Disaster Relief Missions</l1>
                    </ul>
                </div>
                <div className="fleet">
                    <p>Our Fleets</p>
                    <p>We deploy the trusted MI-8/7 helicopter, recognized globally or heavy lift,troop mobility, and mission flexibility</p>
                    <ul>
                        <l1>Capacity:24 passangers(troop configuration)</l1>
                        <l1>Cargo:Up to 4,000 kg (internal olr sling load)</l1>
                        <l1>Configurable for troops, cargo, or combined operations</l1>
                    </ul>
                </div>
                <div className="why">
                    <p></p>
                    <ul>
                        <li></li>
                    </ul>
                </div>                
            </div>
            <footer>
                <div className="contact us">
                <p>Contact Us</p>
                    <ul>
                        <li></li>
                    </ul>
                </div>     
            </footer>
        </div>
    )
}

export default Homepage

