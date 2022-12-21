import React from 'react'
import SponserCompanies from './SponserCompanies'
import './SponsersPage.css'

const SPONSERS = [
    {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 1,
    },
    ,
    {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 2,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 3,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 4,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 5,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 6,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 7,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 8,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 9,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 10,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 11,
    }, {
        name: "KANAN.CO",
        IMAGEPATH: "assets/SponsersImages/01.jpg",
        className: "SPONSER-CONTAINER",
        key: 12,
    }]

function SponsersPage() {
    return (
        <>
            <h1 className='SPONSERS-HEADING'>our Sponsers</h1>
            <div className='SPONSERS-MAIN-CONTAINER'>
                {SPONSERS.map(members => <SponserCompanies item={members} src={members.IMAGEPATH} key={members.key} />)}

            </div>
        </>
    )
}

export default SponsersPage