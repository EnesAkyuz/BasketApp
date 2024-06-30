import React from "react";
import styles from "./Home.module.css"
import Listing from "../../components/listingCard/Listing";
import Sidebar from "../../components/sidebar/Sidebar.jsx";


export default function Home (props) {

    return (
        <div className={styles.homepage}>

            <div className={styles.sidebar}>
                <Sidebar />
            </div>

            <div className={styles.topbar}></div>

            <div className={styles.share}>

            </div>

            <div className={styles.listings}>
                <Listing />

                <Listing />

                <Listing />

                <Listing />

                <Listing />
            </div>

            <div className={styles.basket}></div>

        </div>
    )
}
