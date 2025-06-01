import moment from "moment";
import Image from "next/image";

interface PassCardProps {
  name: string;
  description: string;
  id: string;
  issuedTo?: string;
  image: string;
  date: string;
  location: string;
}

const LargePassCard: React.FC<{ pass: PassCardProps }> = ({ pass }) => {
  return (
    <div className="w-full h-full p-4 bg-white rounded-lg shadow-lg">
      <img
        src={pass.image}
        alt={`${pass.name} image`}
        className="w-[100%] h-[200px] object-cover rounded-lg mb-4"
      />
      <h2 className="text-2xl font-bold mb-4">{pass.name}</h2>
      <p>{moment(pass.date).format("LLLL")}</p>
      <p>{pass.location}</p>
      <p className="text-gray-700 mb-6">{pass.description}</p>
      <div className="flex flex-col items-center">
        <Image
          width={200}
          height={200}
          src="/qr-code.png"
          alt={`${pass.name} QR Code`}
          className="w-[200px] h-auto aspect-square object-cover rounded-lg mb-2 mr-auto ml-auto"
        />
        <button className="px-6 py-2 bg-gray-700 text-white rounded mr-auto ml-auto">
          Add to Wallet
        </button>
      </div>
    </div>
  );
};
export default LargePassCard;
