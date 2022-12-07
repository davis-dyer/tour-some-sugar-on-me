import { theVenues } from "./Venues.js";
import { theBands } from "./Bands.js";
import { theBookings } from "./bookings.js";


const mainContainer = document.querySelector('#container');

const applicationHTML = `
<h1>Samantha Music Manager</h1>
<article class="bookings">
    <section class="detail--column__bookings">
        <h2>BOOKINGS</h2>
        ${theBookings()}
    </section>
</article>

<article class="details">
    <section class="detail--column__venues">
        <h2>VENUES</h2>
        ${theVenues()}
    </section>
    <section class="detail--column__bands">
        <h2>BANDS</h2>
        ${theBands()}
    </section>
</article>
`

mainContainer.innerHTML = applicationHTML;