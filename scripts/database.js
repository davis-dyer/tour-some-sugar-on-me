//creating a database

const database = {
    venues: [{
        id: 1,
        name: 'Variety',
        address: '100 Town Road',
        sqFeet: 1300,
        maxOcupancy: 500,
    },
    {
        id: 2,
        name: 'Solstice',
        address: '2000 Sun Blvd',
        sqFeet: 2500,
        maxOcupancy: 1500,
    },
    {
        id: 3,
        name: 'Waver',
        address: '950 Brightside Street',
        sqFeet: 800,
        maxOcupancy: 200,
    },
    {
        id: 4,
        name: 'The Revival',
        address: '220 New Light Way',
        sqFeet: 3000,
        maxOcupancy: 2500,
    }],

    bands: [{
        id: 1,
        name: 'High-Heeled Flip-Flops',
        numOfMembers: 7,
        genre: 'rock',
        yearFormed: 2011,
    },
    {
        id: 2,
        name: 'Alaska is for Lovers',
        numOfMembers: 4,
        genre: 'reggae',
        yearFormed: 2017,
    },
    {
        id: 3,
        name: 'Universal USB',
        numOfMembers: 1,
        genre: 'edm',
        yearFormed: 2020,
    },
    {
        id: 4,
        name: 'Him',
        numOfMembers: 3,
        genre: 'christian',
        yearFormed: 2022,
    }],

    bookings: [{
        id: 1,
        title: 'Christmas Fest',
        bandName: 'Him',
        bandId: 4,
        venueName: 'The Revival',
        venueId: 4,
        dateOfBooking: Date.now() + Math.random()
    },
    {
        id: 2,
        title: 'Wendys Benefit Show',
        bandName: 'Universal USB',
        bandId: 3,
        venueName: 'Solstice',
        venueId: 2,
        dateOfBooking: Date.now() + Math.random()
    },
    {
        id: 3,
        title: 'Batman Bash',
        bandName: 'High-Heeled Flip-Flops',
        bandId: 1,
        venueName: 'Waver',
        venueId: 3,
        dateOfBooking: Date.now() + Math.random()
    },
    {
        id: 4,
        title: 'Eyes Emoji',
        bandName: 'Alaska is for Lovers',
        bandId: 2,
        venueName: 'Variety',
        venueId: 1,
        dateOfBooking: Date.now(Math.random())
    }]
}

//Export get functions
export const getVenue = () => {
    return database.venues.map(venue => ({...venue}))
};

export const getBands = () => {
    return database.bands.map(band => ({...band}))
}

export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
};