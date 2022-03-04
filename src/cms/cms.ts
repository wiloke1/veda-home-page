import CMS from 'netlify-cms-app';
// @ts-ignore
import uploadcare from 'netlify-cms-media-library-uploadcare';
// @ts-ignore
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ThemePagePreview from './preview-templates/ThemePagePreview';
import PricingPagePreview from './preview-templates/PricingPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('themes', ThemePagePreview);
CMS.registerPreviewTemplate('pricing', PricingPagePreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
