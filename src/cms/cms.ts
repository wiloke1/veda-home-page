import CMS from 'netlify-cms-app';
// @ts-ignore
import cloudinary from 'netlify-cms-media-library-cloudinary';
// @ts-ignore
import uploadcare from 'netlify-cms-media-library-uploadcare';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import NavigationPreview from './preview-templates/NavigationPreview';
import ThemePagePreview from './preview-templates/ThemePagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewStyle('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&family=Roboto:wght@300;400;500&display=swap');
CMS.registerPreviewStyle('https://kit-pro.fontawesome.com/releases/v5.15.4/css/pro.min.css');

CMS.registerPreviewTemplate('builder', IndexPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('themes', ThemePagePreview);
CMS.registerPreviewTemplate('navigation', NavigationPreview);
