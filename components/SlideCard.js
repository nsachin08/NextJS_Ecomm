import Image from "next/image";

function SlideCard({ image }) {
  return (
    <div className="box d_flex top" data-testid="Slider">
      <Image src={image} alt="banner image" width="1920px" height="768px" />
    </div>
  );
}

export default SlideCard;
