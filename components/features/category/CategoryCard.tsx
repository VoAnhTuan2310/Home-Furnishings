"use client";

export default function CategoryCard({
    title,
    image,
}: {
    title: string;
    image: string;
}) {
    return (
        <div className="flex flex-col items-center">

            <img
                src={image}
                alt={title}
                className="w-[100%] h-[620px] object-cover rounded-xl"
            />

            <h3 className="mt-5 font-semibold text-2xl">
                {title}
            </h3>

        </div>
    );
}