import { Button } from "app/components/ui/button";

export default function ProductCard() {
    return (
        <div className="bg-[#FFF3E3] p-10 max-w-[400px] rounded-lg">

            <span className="text-sm tracking-widest text-gray-600">
                New Arrival
            </span>

            <h1 className="text-3xl font-bold text-[#B88E2F] mt-2">
                Discover Our <br /> New Collection
            </h1>

            <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut elit tellus, luctus nec ullamcorper mattis.
            </p>

            <Button className="mt-6 bg-[#B88E2F] text-white px-6 py-3">
                BUY NOW
            </Button>
        </div>
    );
}