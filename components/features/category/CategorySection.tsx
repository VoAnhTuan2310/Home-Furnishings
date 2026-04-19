"use client";

import CategoryCard from "./CategoryCard";

export default function CategorySection() {
    return (
        <section className="py-16 px-10 text-center">

            {/* Title */}
            <h2 className="text-3xl font-extrabold">Browse The Range</h2>
            <p className="text-gray-500 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* List */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <CategoryCard
                    title="Dining"
                    image="/images/dining.png"
                />
                <CategoryCard
                    title="Living"
                    image="/images/living.png"
                />
                <CategoryCard
                    title="Bedroom"
                    image="/images/bedroom.png"
                />
            </div>

        </section>
    );
}