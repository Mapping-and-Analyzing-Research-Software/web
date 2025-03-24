import type { MDXComponents } from "mdx/types";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <h1 className="h1 mt-3">{children}</h1>,

    h2: ({ children }) => <h2 className="h2 mt-3">{children}</h2>,

    h3: ({ children }) => <h3 className="h3 mt-3">{children}</h3>,

    h4: ({ children }) => <h4 className="h4 mt-3">{children}</h4>,

    h5: ({ children }) => <h5 className="h5 mt-3">{children}</h5>,

    h6: ({ children }) => <h6 className="h6 mt-3">{children}</h6>,
    ...components,
  };
}
