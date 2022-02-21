export interface Section {
  heading: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Features extends Section {
  content: Feature[];
}

export interface HomePage {
  data: {
    markdownRemark: {
      frontmatter: {
        features: Features;
      };
    };
  };
}
