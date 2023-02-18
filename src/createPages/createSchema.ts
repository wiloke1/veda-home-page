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

    type FeatureGridItem {
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
      handle: String
      pricePerMonth: String
      pricePerYear: String
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
      handle: String
      pricePerMonth: String
      pricePerYear: String
      highlight: Boolean
      buttonText: String
      content: String
    }

    type PlanFeature {
      title: String
      content: String
    }

    type Option {
      value: String
    }

    type ContactForm {
      nameLabel: String
      emailLabel: String
      websiteLabel: String
      optionsLabel: String
      options: [Option]
      messageLabel: String
      buttonText: String
    }

    type MarkdownRemarkFrontmatterSections @infer {
      id: String
      type: String
      heading: String
      description: String
      backgroundColor: String
      backgroundImage: File @fileByRelativePath
      decorate: String
      enable: Boolean
      heroImage: File @fileByRelativePath
      supportsContent: [Support]
      featuresContent: [Feature]
      featuresGridContent: [FeatureGridItem]
      zigzagContent: Zigzag
      plansContent: [Plan]
      collapseContent: [Collapse]
      plansTable: [PlanTable]
      planFeatures: [PlanFeature]
      contactFormContent: ContactForm
      richtextContent: String
    }

    type SubMenu {
      label: String
      url: String
    }

    type MarkdownRemarkFrontmatterHeaderNavigation @infer {
      label: String
      url: String
      subMenu: [SubMenu]
    }
  `);
};
