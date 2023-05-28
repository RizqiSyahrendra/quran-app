import { ISeparatorLineColor, ISeparatorProps } from "./SeparatorLine.types";

export default function SeparatorLine(props: ISeparatorProps) {
    const {
        color = "1",
        fullSize = true
    } = props;

    let sizeStyle = fullSize ? "w-full" : "w-[80%]";

    return (
        <div className={`h-[1px] ${sizeStyle} mx-auto mt-4 ${getSeparatorColor(color)}`}>
        </div>
    );
}

function getSeparatorColor(color: ISeparatorLineColor = "1") {
    return `bg-separator${color === "1" ? "" : color}`;
}