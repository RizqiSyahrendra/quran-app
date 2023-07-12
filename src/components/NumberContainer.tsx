import { IconRegistry } from "@/utils/image";
import Image from "next/image";
import { INumberContainerProps } from "./NumberContainer.types";

export default function NumberContainer(props: INumberContainerProps) {
    const {
        num,
        size = "sm",
    } = props;

    let widthHeight = size === "sm" ? 30 : 36;

    return (
        <div className="text-xs text-font-primary font-medium flex items-center justify-center px-4 relative">
            {num}
            <Image
                src={IconRegistry.numberContainer}
                alt="number container"
                width={widthHeight}
                height={widthHeight}
                quality={100}
                className="absolute"
            />
        </div>
    );
}