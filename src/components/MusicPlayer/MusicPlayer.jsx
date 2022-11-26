import React from "react";
import PropTypes from "prop-types";
import styles from "../MusicPlayer/musicplayer.module.css";
import { Avatar, Button } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";



//Định nghĩa type cho props:
MusicPlayer.propTypes = {
  id: PropTypes.number,
  songName: PropTypes.string,
  artistName: PropTypes.string,
  songTime: PropTypes.string,
  cdImage: PropTypes.any,
};

function MusicPlayer({ id, songName, artistName, songTime, cdImage }) {
  const [like, setLike] = React.useState(false);
  return (
    <>
      <div className={styles.list_song_block} key={id}>
        <div className={styles.number_of_song}>{id}</div>
        <div className={styles.cd_image}>
          <Avatar shape="square" size={64} src={cdImage} />
        </div>
        <Button
          shape="circle"
          icon={<CaretRightOutlined />}
          className={styles.play_btn}
        ></Button>
        <div className={styles.song_name}>{songName}</div>
        <div className={styles.artist_name}>{artistName}</div>
        <div className={styles.song_time}>{songTime}</div>

        <div
          className={styles.like_btn}
          style={{
            fontSize: "25px",
            color: like === false ? "#DCDEE9" : "red",
          }}
        >
          <i
            style={{ cursor: "pointer" }}
            className="fas fa-heart"
            onClick={() => {
              setLike(!like);
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export default MusicPlayer;
