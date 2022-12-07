import { getBands, getBookings } from "./database.js";

const bookings = getBookings();
const bands = getBands();

const randDate = (start, end) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

document.addEventListener (
    "click",
    (clickEvent) => {
        const newEvent = clickEvent.target;
        if (newEvent.id.startsWith('booking')) {
            const [,newID] = newEvent.id.split('--')
            let newBooking = ''
            for (const book of bookings) {
                if (parseInt(newID)=== book.id) {
                    newBooking = book
                }
            }
            let newBand = '';
            for (const band of bands) {
                if (newBooking.bandId === band.id) {
                    newBand = band;
                }
            }
            window.alert(`
            ${newBand.name}
            ${newBand.genre}
            Formed in ${newBand.yearFormed}
            ${newBand.numOfMembers} band members
            `)
        }
    }
)

export const theBookings = () => {
    let bookingsHTML = "<ul>"
    for (const book of bookings) {
        bookingsHTML += `<li id="booking--${book.id}">${book.bandName} are playing at ${book.venueName} on ${randDate(new Date(2022, 0, 1), new Date())}</li>`
    }
    bookingsHTML += "</ul>"
    return bookingsHTML;
}