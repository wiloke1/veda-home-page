export interface MarkdownRemarkEdges<T = any> {
  node: T;
}

export interface AllMarkdownRemark<T = any> {
  edges: MarkdownRemarkEdges<T>[];
}

export interface MarkdownRemark<T = any> {
  frontmatter: T;
}
