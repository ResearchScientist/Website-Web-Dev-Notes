// Define the structure of the frontmatter
interface Frontmatter {
    section: string;
  }
  
  // Extend the MarkdownInstance interface to include the frontmatter type
  declare module 'astro' {
    export interface MarkdownInstance<T extends Record<string, any>> {
      frontmatter: T;
    }
  }