import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { CategoryCard as CategoryCardType } from "@/lib/data";

interface Props {
  category: CategoryCardType;
}

export function CategoryCard({ category }: Props) {
  return (
    <Link href={`/shop?category=${category.name}`}>
      <div className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer">
        {/* Background Image */}
        <img
          src={typeof category.image === 'string' ? category.image : category.image}
          alt={category.displayName}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 group-hover:to-black/70 transition-all duration-300" />
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div></div>
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-white">
              {category.displayName}
            </h3>
            <p className="text-white/80 text-sm">
              {category.itemCount} items
            </p>
          </div>
          
          {/* Arrow Icon */}
          <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300">
            <ChevronRight className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
}
