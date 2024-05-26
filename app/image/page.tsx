import Image from "next/image";
import coffee from "@/public/images/coffee.jpg";

export default async function ImagePage() {
  // return <Image src={coffee} alt="Coffee" />;
  return (
    <Image
      src="https://bit.ly/react-cover"
      alt="Coffee"
      // width={300}
      // height={170}
      fill
      style={{ objectFit: "cover" }}
      sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
    />
  );
}
