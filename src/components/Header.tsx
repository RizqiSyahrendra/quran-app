import { IconRegistry } from "@/utils/image";
import Image from "next/image";

export default function Header({
    title,
    isBackButtonVisible = true,
    hideInDesktopScreen = false,
}: {
    /**
     * Header title
     */
    title: string
    /**
     * Back button visibility
     */
    isBackButtonVisible?: boolean
    /**
     * Hide in dekstop screen
     */
    hideInDesktopScreen?: boolean
}) {
    return (
        <div className={`flex pt-2 pb-3 mb-4 text-xl text-header-font font-bold ${hideInDesktopScreen ? 'md:hidden' : ''}`}>
            {isBackButtonVisible && (
                <Image
                    src={IconRegistry.back}
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