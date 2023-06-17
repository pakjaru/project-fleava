import { useStore } from "@/store/useStore";

interface Props {
  title: string;
  index: string;
  description: string;
}

const HeroSection: React.FC<Props> = ({ title, index, description }) => {
  const { isClicked, setIsClicked }: any = useStore((state) => [
    state.isClicked,
    state.setIsClicked,
  ]);

  console.log(isClicked);
  

  return (
    <div className="h-full w-full flex flex-col justify-center">
      <div className="flex justify-center items-start flex-col gap-y-10 text-white">
        <div className="flex flex-row gap-x-5 ml-[9.5rem]">
          <h1>{index}</h1>
          <h1>{title}</h1>
        </div>
        <div className="text-5xl w-[15em] ml-48">
          <h1>{description}</h1>
        </div>
        <div className="flex flex-row gap-x-4 ml-48 text-2xl">
          <button className="cursor-pointer" onClick={() => setIsClicked}>prev</button>
          <h1>/</h1>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
