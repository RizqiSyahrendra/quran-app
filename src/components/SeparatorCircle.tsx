import { ISeparatorCircleColor, ISeparatorCircleProps } from "./SeparatorCircle.types";

export default function SeparatorCircle(props: ISeparatorCircleProps) {
    const {
        color = "1",
    } = props;

    return (
        <div className={`rounded-full w-[5px] h-[5px] mx-2 self-center ${getSeparatorColor(color)}`}>
        </div>
    );
}

function getSeparatorColor(color: ISeparatorCircleColor = "1") {
    return `bg-separator${color === "1" ? "" : color}`;
}