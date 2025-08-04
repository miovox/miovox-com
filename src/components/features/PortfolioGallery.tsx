'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PortfolioProject } from '@/data/types';
import { getSortedProjects, getProjectsByCategory } from '@/data/portfolio';

interface PortfolioGalleryProps {
  category?: "Product" | "Home" | "Event";
  showFilters?: boolean;
  className?: string;
}

export default function PortfolioGallery({
  category,
  showFilters = true,
  className = "",
}: PortfolioGalleryProps): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<"Product" | "Home" | "Event" | "All">(
    category || "All"
  );

  const projects = selectedCategory === "All" 
    ? getSortedProjects() 
    : getSortedProjects(selectedCategory as "Product" | "Home" | "Event");

  const categories = [
    { value: "All" as const, label: "All Projects" },
    { value: "Product" as const, label: "Products" },
    { value: "Home" as const, label: "Homes" },
    { value: "Event" as const, label: "Events" },
  ];

  return (
    <div className={`w-full ${className}`}>
      {/* Category Filters */}
      {showFilters && !category && (
        <div className="mb-8 flex flex-wrap gap-2 justify-center md:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat.value
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <PortfolioCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No projects found for the selected category.
          </p>
        </div>
      )}
    </div>
  );
}

interface PortfolioCardProps {
  project: PortfolioProject;
}

function PortfolioCard({ project }: PortfolioCardProps): JSX.Element {
  const categoryColors = {
    Product: "bg-blue-100 text-blue-800",
    Home: "bg-green-100 text-green-800",
    Event: "bg-purple-100 text-purple-800",
  };

  return (
    <div className="group relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Featured Badge */}
      {project.isFeatured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
          Featured
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 md:h-56 bg-gray-100 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Badge */}
        <div className="mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColors[project.category]}`}>
            {project.category}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2 line-clamp-2">
          {project.title}
        </h3>

        {/* Date */}
        <p className="text-sm text-gray-500 mb-3">
          {new Date(project.date + 'T00:00:00').toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {project.shortDescription}
        </p>

        {/* View Project Link */}
        <div className="flex items-center justify-between">
          <button 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
            aria-label={`View details for ${project.title}`}
          >
            View Project
            <svg 
              className="w-4 h-4 ml-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Gallery Indicator */}
          {project.galleryImageUrls && project.galleryImageUrls.length > 0 && (
            <div className="flex items-center text-xs text-gray-400">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              +{project.galleryImageUrls.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}