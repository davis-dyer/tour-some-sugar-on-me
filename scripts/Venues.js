import { getBookings, getVenue } from "./database.js";

const venues = getVenue();
const bookings = getBookings();

document.addEventListener (
    "click",
    (clickEvent) => {
        const newEvent = clickEvent.target;
        if (newEvent.id.startsWith('venue')){
            const [,venueClick] = newEvent.id.split('--');
            let result = ''
            for (const venue of venues) {
                if (parseInt(venueClick) === venue.id) {
                    result = venue
                }
            }
            let result2 = ''
            for (const band of bookings) {
                if (result.id === band.venueId) {
                    result2 = band;
                }
            }
            window.alert(`${result2.bandName} has booked ${result.name}`)  
        }
    }
)

export const theVenues = () => {
    let venueHTML = "<ul>"
    for (const venue of venues) {
        venueHTML += `<li id="venue--${venue.id}">${venue.name}</li>`
    }
    venueHTML += "</ul>"
    return venueHTML;
}
