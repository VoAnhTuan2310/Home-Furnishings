import ProductCard from "./ProductCard";

export default function MainBanner() {
    return (
        <section
            className="h-[600px] bg-cover bg-center flex items-center justify-end px-10"
            style={{ backgroundImage: "url('/images/banner.jpg')" }}
        >
            <ProductCard />
        </section>
    );
}