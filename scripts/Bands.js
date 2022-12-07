import { getBands, getBookings, getVenue } from "./database.js";

const bands = getBands();
const venues = getVenue();
const bookings = getBookings();

//All venues at which the band is playing
document.addEventListener (
    "click",
    (clickEvent) => {
        const newEvent = clickEvent.target;
        if (newEvent.id.startsWith('band')){
            const [,bandClick] = newEvent.id.split('--');
            let result = ''
            for (const band of bands) {
                if (parseInt(bandClick) === band.id) {
                    result = band
                }
            }
            let result2 = ''
            for (const book of bookings) {
                if (result.id === book.bandId) {
                    result2 = book;
                }
            }
            window.alert(`${result.name} has played at ${result2.venueName}`)  
        }
    }
)

export const theBands = () => {
    let bandHTML = "<ul>"
    for (const band of bands) {
        bandHTML += `<li id="band--${band.id}">${band.name}</li>`
    }
    bandHTML += "</ul>"
    return bandHTML;
}