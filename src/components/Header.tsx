import Image from "next/image";

export default function Header({
    title,
    isBackButtonVisible = false,
}: {
    title: string
    isBackButtonVisible?: boolean
}) {
    return (
        <div className="flex md:hidden py-4 text-xl text-header-font font-bold">
            {isBackButtonVisible && (
                <Image
                    src="/assets/icons/back.png"
                    alt="back"
                    width={24}
                    height={24}
                    quality={100}
                    className="self-center mr-4 cursor-pointer"
                />
            )}
            <div>
                {title}
            </div>
        </div>
    );
}