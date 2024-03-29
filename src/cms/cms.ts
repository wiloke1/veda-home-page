import CMS from 'netlify-cms-app';
// @ts-ignore
import cloudinary from 'netlify-cms-media-library-cloudinary';
// @ts-ignore
import uploadcare from 'netlify-cms-media-library-uploadcare';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import HeaderNavigationPreview from './preview-templates/HeaderNavigationPreview';
import FormLoginPreview from './preview-templates/FormLoginPreview';
import ThemePagePreview from './preview-templates/ThemePagePreview';
import NotificationsPagePreview from './preview-templates/NotificationsPagePreview';
import PricingPopupPreview from './preview-templates/PricingPopupPreview';
import './utils';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewStyle('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@300;400;500;600;700&family=Roboto:wght@300;400;500&display=swap');
CMS.registerPreviewStyle('https://kit-pro.fontawesome.com/releases/v5.15.4/css/pro.min.css');

CMS.registerPreviewTemplate('builder', IndexPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('themes', ThemePagePreview);
CMS.registerPreviewTemplate('notifications', NotificationsPagePreview);
CMS.registerPreviewTemplate('header-navigation', HeaderNavigationPreview);
CMS.registerPreviewTemplate('login', FormLoginPreview);
CMS.registerPreviewTemplate('pricing-popup', PricingPopupPreview);
