import { CreatePagesArgs } from 'gatsby';

export const createSchemaCustomization = ({ actions }: CreatePagesArgs) => {
  actions.createTypes(`
    type Support {
      image: File @fileByRelativePath
      title: String
      description: String
      buttonText: String
      link: String
    }

    type Feature {
      image: File @fileByRelativePath
      title: String
      description: String
    }

    type Zigzag {
      title: String
      description: String
      reverse: Boolean
    }

    type Plan {
      title: String
      description: String
      price: String
      highlight: Boolean
      buttonText: String
      body: String
    }

    type Collapse {
      title: String
      content: String
    }

    type PlanTable {
      title: String
      price: String
      highlight: Boolean
      buttonText: String
      content: String
    }

    type MarkdownRemarkFrontmatterSections @infer {
      id: String
      type: String
      heading: String
      description: String
      backgroundColor: String
      decorate: String
      enable: Boolean
      supportsContent: [Support]
      featuresContent: [Feature]
      zigzagContent: Zigzag
      plansContent: [Plan]
      collapseContent: [Collapse]
      plansTable: [PlanTable]
    }
  `);
};
