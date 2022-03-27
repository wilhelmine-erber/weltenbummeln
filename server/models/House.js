const mongoose = require('mongoose');

const HouseSchema = new mongoose.Schema({
    type: { type: String },
    title: { type: String, required: true },
    typeOfAcco: { type: String },
    shortDescription: { type: String },
    longDescription: { type: String },
    ort: { type: String },
    comments: [
        {
            date: { type: String },
            name: { type: String },
            ratings: {
                Sauberkeit: { type: Number },
                Kommunikation: { type: Number },
                Check: { type: Number },
                Genauigkeit: { type: Number },
                Standort: { type: Number },
                Preis: { type: Number }
            },
            text: { type: String }
        }
    ],
    booking: {
        startDate: { type: String },
        endDate: { type: String }
    },
    koordinaten: {
        lat: { type: String },
        lng: { type: String }
    },
    adresse: { type: String },
    preis: { type: String },
    images: {
        mainImg: { type: String },
        moreImages: { type: Array },
    },
    offers: {
        Küche: { type: Boolean },
        Waschmaschine: { type: Boolean },
        WLAN: { type: Boolean },
        TV: { type: Boolean },
        Aufzug: { type: Boolean },
        Heizung: { type: Boolean },
        Warmwasser: { type: Boolean },
        GeschirrUndBesteck: { type: Boolean },
        Reinigungsprodukte: { type: Boolean },
        Bügeleisen: { type: Boolean },
        Klimaanlage: { type: Boolean },
        Kleiderbügel: { type: Boolean },
        RauchenErlaubt: { type: Boolean },
        LangzeitaufenthalteSindMöglich: { type: Boolean }
    },
    owner: {
        name: { type: String },
        profImg: { type: String }
    }
}, {
    collection: 'houseColl',
    versionKey: false
});

module.exports = mongoose.model('House', HouseSchema)