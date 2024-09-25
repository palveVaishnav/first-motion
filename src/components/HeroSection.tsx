import GetStarted from "./GetStarted";
import Image from "next/image";
import TextTag from "./TextTag";

export default function HeroSection() {
    return (
        <div className="grid place-content-center mt-28 relative">
            <Image
                alt="DashBoard"
                src={'/circles.svg'}
                layout="fill"
                objectFit="cover"
                className="-z-10"
            />
            <TextTag text="AWS on Steroids" />
            <div className="text-[3em] font-mono grid place-content-center font-semibold">
                <span className="grid place-content-center">
                    {"Why pay more?"}
                </span>
                <span className="grid place-content-center">
                    {"The cloud just got way cheaper!"}
                </span>
            </div>
            <div className="text-[#858584] font-semibold">
                <span className="grid place-content-center">
                    Spend less, do more.
                </span>
                <span className="grid place-content-center">
                    Unlock hidden savings in your cloud, effortlessly.
                </span>
            </div>
            <div className="flex justify-center gap-4 p-10">
                <GetStarted varient="" text="View Demo" />
                <GetStarted varient="arrow" text="Get Started" />
            </div>

            <div className="bg-transparent px-28">
                <Image
                    alt="DashBoard"
                    src={'/Dashboard.png'}
                    width={100}
                    height={100}
                    className="h-full w-full overflow-hidden rounded-3xl"
                />
            </div>
        </div >
    )
}