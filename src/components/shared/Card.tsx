interface CardProps {
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  href = "#",
  className = "",
}: CardProps): JSX.Element {
  return (
    <a
      href={href}
      className={`group block p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-gray-300 transition-all duration-300 ${className}`}
    >
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="mt-3 text-gray-600 leading-relaxed">
        {description}
      </p>
      <div className="mt-6 text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors">
        Learn more →
      </div>
    </a>
  );
}