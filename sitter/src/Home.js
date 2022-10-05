import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <p>Looking for a pet and/or house sitter? We have you covered!</p>
                <p><img src="doghouse.jpg" alt="Photo of a dog next to a large doghouse." class="round right" ></img> </p>
                <p>Our company has been open and providing excellent services for over a dozen years. Our sitters are thoughtful, respectful, and well trained in home and pet care.</p>
            </div>
        );
    }
}

export default Home;    //makes it available to the rest of the application