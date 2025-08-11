// Base Cosmic object interface
interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Utility types - defined at the top to avoid duplication
export type ExhibitionStatus = 'current' | 'upcoming' | 'past';
export type CollectionCategories = 'paleontology' | 'anthropology' | 'geology' | 'astronomy' | 'biology';
export type AgeGroups = 'children' | 'teens' | 'adults' | 'families' | 'all';

// Status/Category interfaces
export interface ExhibitionStatusObject {
  key: ExhibitionStatus;
  value: 'Current' | 'Upcoming' | 'Past';
}

export interface CollectionCategory {
  key: CollectionCategories;
  value: 'Paleontology' | 'Anthropology' | 'Geology' | 'Astronomy' | 'Biology';
}

export interface AgeGroup {
  key: AgeGroups;
  value: 'Children (5-12)' | 'Teens (13-17)' | 'Adults (18+)' | 'Families' | 'All Ages';
}

// Exhibition types
export interface Exhibition extends CosmicObject {
  type: 'exhibitions';
  metadata: {
    title?: string;
    description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    start_date?: string;
    end_date?: string;
    exhibition_status?: ExhibitionStatusObject;
    gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
  };
}

// Collection types
export interface CollectionItem extends CosmicObject {
  type: 'collections';
  metadata: {
    name?: string;
    description?: string;
    image?: {
      url: string;
      imgix_url: string;
    };
    category?: CollectionCategory;
    time_period?: string;
    origin?: string;
  };
}

// Educational Program types
export interface EducationalProgram extends CosmicObject {
  type: 'educational-programs';
  metadata: {
    program_name?: string;
    description?: string;
    age_group?: AgeGroup;
    duration?: string;
    price?: string;
    program_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Event types
export interface Event extends CosmicObject {
  type: 'events';
  metadata: {
    event_name?: string;
    description?: string;
    event_date?: string;
    start_time?: string;
    end_time?: string;
    location?: string;
    ticket_price?: string;
    event_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Component prop types
export interface ExhibitionCardProps {
  exhibition: Exhibition;
  className?: string;
}

export interface CollectionCardProps {
  item: CollectionItem;
  className?: string;
}

export interface ProgramCardProps {
  program: EducationalProgram;
  className?: string;
}

export interface EventCardProps {
  event: Event;
  className?: string;
}

export interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export interface NavigationProps {
  className?: string;
}

export interface FooterProps {
  className?: string;
}

// Type guards
export function isExhibition(obj: CosmicObject): obj is Exhibition {
  return obj.type === 'exhibitions';
}

export function isCollectionItem(obj: CosmicObject): obj is CollectionItem {
  return obj.type === 'collections';
}

export function isEducationalProgram(obj: CosmicObject): obj is EducationalProgram {
  return obj.type === 'educational-programs';
}

export function isEvent(obj: CosmicObject): obj is Event {
  return obj.type === 'events';
}