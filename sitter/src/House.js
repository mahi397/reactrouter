import React, { Component } from "react";

class House extends Component {
    render() {
        return (
            <div class="content">

                <p>
                    <img src="beachhouse.jpg" alt="Photo of a beach house." class="right round" ></img>
                </p>

                <nav>
                    <ul>
                        <li> <a href="index.html">Home</a> </li>
                        <li> House Sitting  </li>
                        <li> <a href="stellarpet.html">Pet Sitting</a> </li>
                        <li> <a href="contact.html">Contact Us</a> </li>
                    </ul>
                </nav>
                <p>Looking for a house sitter? We have you covered!</p>
                <p>Our company has been open and providing excellent services for over a dozen years. Our house sitters are thoughtful, respectful, and well trained in home care.</p>

                <h2>House Sitting</h2>
                <p>Having a house sitter can be a great comfort to someone who can't be at home. We   have customers who travel for business, travel for pleasure, and sometimes need to be away for extended periods of time for family and/or medical reasons. </p>
                <p>Our goal is to care for your home so that you can be away without worries </p>


                <h3>Our house sitting services include, but are not limited to:</h3>
                <ul>
                    <li>General check-ins for security issues</li>
                    <li>Checking for plumbing and HVAC failures</li>
                    <li>Mail and package retrieval </li>
                    <li>Overnight stays </li>
                    <li>Presence in the home when other service personnel are present</li>
                </ul>

                <h2>Check our Competetive Pricing</h2>
                <p>
                    <table>
                        <thead>
                            <tr>
                                <th class="colwidth">Service</th>
                                <th>Price in $</th>
                                <th>Timeframe</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="bolder">Daily Home Check</td>
                                <td class="rightjust">7.00</td>
                                <td>Per Day</td>
                                <td>Enter home to check HVAC and locks. Check home well-being and security.</td>
                            </tr>
                            <tr>
                                <td class="bolder">Weekly Home Check</td>
                                <td>20.00</td>
                                <td>Per Week</td>
                                <td>Enter home to check HVAC and locks. Check home well-being and security.</td>
                            </tr>
                            <tr>
                                <td class="bolder">Presence for Service Personnel</td>
                                <td>20.00</td>
                                <td>Per Hour</td>
                                <td>A sitter will be present in your home to allow entrance and/or monitor service personnel doing in-home maintenance.</td>
                            </tr>
                            <tr>
                                <td class="bolder">Overnight House Sit</td>
                                <td>80.00</td>
                                <td>Per Day</td>
                                <td>Three-night minimum. Sitter on premisis overnight and present for at least 14 out of each 24-hour period. Includes daily care for indoor plants and security monitoring.  </td>
                            </tr>
                        </tbody>
                    </table>
                </p>

                <footer>
                    &copy; Copyright 2007 Stellar Sitting Services, LLC
                </footer>
            </div>
        );
    }
}