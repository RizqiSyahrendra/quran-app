import Loader from "@/components/Loader";

export default async function TodaysVerseLoading() {

    return (
        <div className="mt-20">
            <Loader 
                isVisible={true}
                useContainer={true}
                className="h-10 w-10"
            />
        </div>
    );
}