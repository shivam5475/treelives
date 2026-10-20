import Image from 'next/image';
import Link from 'next/link';

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export default function CollectionCard({
  title,
  description,
  image,
  href,
  className = '',
}: CollectionCardProps) {
  return (
    <Link href={href} className={`group block relative overflow-hidden rounded-xl bg-gray-100 aspect-[3/4] ${className}`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-8 flex flex-col justify-end">
        <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        
        <p className="text-gray-200 text-sm sm:text-base mb-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 line-clamp-2">
          {description}
        </p>
        
        <div className="inline-flex items-center text-white font-medium text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
          <span>Explore Collection</span>
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
