import moment from 'moment'
import { ChatBubbleOutline, FavoriteBorder, TransformOutlined } from '@mui/icons-material'
import React from 'react'
import styles from './tweet.module.css'

export default function Tweet({ tweet }) {

    return (
        <>
            <div className={styles.divider} />
            <div className={styles.tweet}>
                <img src={tweet.user.profilePicture} alt="" className={styles.profile} />
                <div className={styles.body}>
                    <p className={styles.info}><b>{tweet.user.name}</b> @{tweet.user.username} - {moment(tweet.createdAt).format("MMM D")}</p>
                    <p className={styles.text}>{tweet.text}</p>
                    {tweet.image && <img src={tweet.image} alt="" />}

                    <div className={styles.actions}>
                        <ChatBubbleOutline />
                        <FavoriteBorder />
                        <TransformOutlined />
                    </div>
                </div>
            </div>
        </>
    )
}
