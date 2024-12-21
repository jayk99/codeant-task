export interface Repository {
    name: string
    visibility: 'Public' | 'Private'
    language: string
    size: string
    updatedAt: string
  }
  
  export interface RepositoryListProps {
    searchQuery?: string
  }
  
  