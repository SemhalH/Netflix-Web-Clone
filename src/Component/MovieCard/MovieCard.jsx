import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsPlusCircle } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import styles from "./MovieCard.module.css";

function MovieCard({movie}) {
    let genere = ["Adventure", "Action", "Thriller"];
  return (
    <div className={styles.cardWrapper}>
      <img
        className={styles.poster}
        src={movie.poster_path}
        alt={movie.title}
      />
      <div className={styles.hoverCard}>
        <img
          className={styles.hoverImage}
          src={movie.poster_path}
          alt={movie.title}
        />
        <div className={styles.badge}>Recently Added</div>
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>
      </div>
      <div className={styles.metaRow}>
        <span className={styles.tag}>U/A 16+</span>
        <span className={styles.tag}>Movie</span>
        <span className={styles.tag}>HD</span>
      </div>
      <div className={styles.genres}>
        {genere.map((g, index) => {
          return (
            <span key={index}>
              {g}
              {index < genere.length - 1 && (
                <span className={styles.dot}> . </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default MovieCard;
