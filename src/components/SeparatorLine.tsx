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
    switch (color) {
        case "2":
            return "bg-separator2";

        case "3":
            return "bg-separator3";
    
        default:
            return "bg-separator";
    }
}