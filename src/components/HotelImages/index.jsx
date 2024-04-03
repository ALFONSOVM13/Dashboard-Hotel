import React from "react";
import single_bed_sm from "./hotel_img/single_bed-50.png";
import single_bed_md from "./hotel_img/single_bed-100.png";
import double_bed_sm from "./hotel_img/double_bed-50.png";
import double_bed_md from "./hotel_img/double_bed-100.png";
import air_conditioning_sm from "./hotel_img/air_conditioning-50.png";
import air_conditioning_md from "./hotel_img/air_conditioning-100.png";
import tv_sm from "./hotel_img/tv-50.png";
import tv_md from "./hotel_img/tv-100.png";
import internet_connection_sm from "./hotel_img/internet_connection-50.png";
import internet_connection_md from "./hotel_img/internet_connection-100.png";
import jacuzzi_sm from "./hotel_img/jacuzzi-50.png";
import jacuzzi_md from "./hotel_img/jacuzzi-100.png";
import minibar_sm from "./hotel_img/minibar-50.png";
import minibar_md from "./hotel_img/minibar-100.png";
import phone_sm from "./hotel_img/phone-50.png";
import phone_md from "./hotel_img/phone-100.png";

export function HotelImages({ image, size, value, all = false }) {
  switch (image) {
    case "single_bed":
      return size === "sm" ? (
        <Container quantity={value} all={all}>
          <img
            src={single_bed_sm}
            className={
              value === 0 || !value
                ? "grayscale" + (all ? "" : " hidden")
                : undefined
            }
            alt={image
              .split("_")
              .map((word) => {
                word = word.charAt(0).toUpperCase() + word.slice(1);
                return word;
              })
              .join(" ")}
          />
        </Container>
      ) : (
        <img
          src={single_bed_md}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      );
    case "double_bed":
      return size === "sm" ? (
        <Container quantity={value} all={all}>
          <img
            src={double_bed_sm}
            className={
              value === 0 || !value
                ? "grayscale" + (all ? "" : " hidden")
                : undefined
            }
            alt={image
              .split("_")
              .map((word) => {
                word = word.charAt(0).toUpperCase() + word.slice(1);
                return word;
              })
              .join(" ")}
          />
        </Container>
      ) : (
        <img
          src={double_bed_md}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      );
    case "air_conditioning":
      return size === "sm" ? (
        <img
          src={air_conditioning_sm}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      ) : (
        <img
          src={air_conditioning_md}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      );
    case "tv":
      return size === "sm" ? (
        <img
          src={tv_sm}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      ) : (
        <img
          src={tv_md}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      );
    case "internet_connection":
      return size === "sm" ? (
        <img
          src={internet_connection_sm}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      ) : (
        <img
          src={internet_connection_md}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      );
    case "jacuzzi":
      return size === "sm" ? (
        <img
          src={jacuzzi_sm}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      ) : (
        <img
          src={jacuzzi_md}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      );
    case "minibar":
      return size === "sm" ? (
        <img
          src={minibar_sm}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      ) : (
        <img
          src={minibar_md}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      );
    case "phone":
      return size === "sm" ? (
        <img
          src={phone_sm}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      ) : (
        <img
          src={phone_md}
          className={
            value === 0 || !value
              ? "grayscale" + (all ? "" : " hidden")
              : undefined
          }
          alt={image
            .split("_")
            .map((word) => {
              word = word.charAt(0).toUpperCase() + word.slice(1);
              return word;
            })
            .join(" ")}
        />
      );
  }
}

function Container({ children, quantity, all }) {
  return !all && quantity > 0 ? (
    <div className="relative">
      <span className="absolute top-[-10px] bg-red-500 text-white rounded-full h-6 w-6 pt-[3px] text-sm font-bold">
        {quantity}
      </span>
      {children}
    </div>
  ) : (
    children
  );
}

export default HotelImages;
