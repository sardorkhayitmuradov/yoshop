import Image from "next/image";
const AdressLocation = ({
  locationInfoWrappClassName,
  imgaes,
  locationText,
  locationTextClassName,
}) => {
  return (
    <>
      <span className={locationInfoWrappClassName}>
        <Image src={imgaes} alt="location-icon" />
        <p className={locationTextClassName}>{locationText}</p>
      </span>
    </>
  );
};

export default AdressLocation;
