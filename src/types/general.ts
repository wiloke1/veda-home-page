export interface MarkdownRemarkEdges<T = any> {
  node: T;
}

export interface AllMarkdownRemark<T = any> {
  edges: MarkdownRemarkEdges<T>[];
}

export interface MarkdownRemark<T = any> {
  frontmatter: T;
}

export interface Section {
  heading: string;
  description: string;
  decorate?: 'type1' | 'type2' | '';
}
