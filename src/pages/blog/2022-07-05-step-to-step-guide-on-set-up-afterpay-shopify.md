---
templateKey: blog-post
title: Step-to-step Guide on Set up Afterpay Shopify
date: 2022-07-05T08:33:12.138Z
description: A step-to-step guide on how to **set up Afterpay Shopify** and show
  Afterpay logo on the product page.
featuredimage: /img/setup-afterpay-shopify.png
tags:
  - Setup Afterpay Shopify
  - Shopify tips
---
<!--StartFragment-->

A step-to-step guide on how to **set up Afterpay Shopify** and show Afterpay logo on the product page.

## Why is Afterpay Shopify popular?

The reason why Afterpay payment gateway is popular among shoppers is the “buy now, pay later” scheme. It allows your consumers to purchase whatever they want and pay for it in 4 equal installments every 2 weeks rather than all at once. Since most Americans now receive their salaries every 2 weeks, this idea has acquired a lot of support.

## What benefits does Afterpay Shopify offer?

If you integrate Afterpay into your Shopify stores, both your customers and you could enjoy many benefits. 

* Increased conversion rates: With Afterpay, shoppers are likely to make purchases when they may otherwise be hesitant to do so. Plus, Afterpay offers 0% fraud or credit risk, which is a massive bonus for small firms.
* Fewer cart abandonment: More significantly, because the credit option appeals to buyers, it will stop visitors from leaving your website.
* A far larger average order value: Because of Afterpay's $35 minimum order requirement, it significantly raises the overall average order value.
* If your customers don't use Aftepay payment, your business won’t be charged. This is because Afterpay costs you successful orders without any monthly charges or setup fees.



## How to set up Afterpay Shopify

+> Click the following link to get started: <https://accounts.shopify.com/store-login?redirect=settings%2Fpayments%2Falternative-providers%2F1057655>

+> To connect your Afterpay account, click "Connect."

![](/img/connect-afterpay-shopify.png)

+> Shopify will ask for your permission to let Afterpay handle purchases & refunds. To proceed, click "Install app."

![](/img/install-afterpay-shopify.png)

+> Choose the nation where your Afterpay account is located and confirm your identity using your merchant credentials or your email

* Credentials: Click “Activate with your Merchant ID & Secret Key” to link your Afterpay account to your API credentials.
* Email: Use the email address you used to submit the merchant application to log in. You will receive an email with a verification number to verify your identity.

![](/img/verify-your-identity-in-afterpay-shopify.png)

+> Return to Shopify payment settings and choose "Activate Afterpay (New)". Remember to activate test mode. Afterpay won't show up on your store's checkout page until you've finished the last step.

![](/img/activate-afterpay-shopify.png)

## How to display Afterpay logo on Shopify Product Page?

Follow these steps below to display Afterpay logo on your Shopify store

* Log into your Shopify Admin dashboard
* Visit Sales Channels > Online Store > Themes
* Click Actions and then Edit Code

  ![](/img/edit-code-in-the-current-theme.png)
* Select "theme.liquid" from the "Layout" folder
* Navigate to the "theme.liquid" file's bottom

  ![](/img/theme.liquid-bottom.png)
* Copy the below code and paste it at the end of the "theme.liquid" file

> <!-- Begin Shopify-Afterpay JavaScript Snippet (v1.0.12) -->
>
> <script type="text/javascript">
>
> // Overrides:
>
> // var afterpay_min = 0.04;            // As per your Afterpay contract.
>
> // var afterpay_max = 2000.00;         // As per your Afterpay contract.
>
> // var afterpay_cbt_enabled = false;   // As per your Afterpay contract; change to true to display Cross-Border Trade artwork (for AU/NZ).
>
> // var afterpay_logo_theme = 'colour'; // Can be 'colour', 'black' or 'white'.
>
> // var afterpay_product_selector = '#product-price-selector';
>
> // var afterpay_cart_integration_enabled = true;
>
> // var afterpay_cart_static_selector = '#cart-subtotal-selector';
>
>
>
> // Non-editable fields:
>
> var afterpay_shop_currency = {{ shop.currency | json }};
>
> var afterpay_cart_currency = {{ cart.currency.iso_code | json }};
>
> var afterpay_shop_money_format = {{ shop.money_format | json }};
>
> var afterpay_shop_permanent_domain = {{ shop.permanent_domain | json }};
>
> var afterpay_theme_name = {{ theme.name | json }};
>
> var afterpay_product = {{ product | json }};
>
> var afterpay_current_variant = {{ product.selected_or_first_available_variant | json }};
>
> var afterpay_cart_total_price = {{ cart.total_price | json }};
>
> var afterpay_js_snippet_version = '1.0.12';
>
> </script>
>
> <script type="text/javascript" src="https://static.afterpay.com/shopify-afterpay-javascript.js"></script>
>
> <!-- End Shopify-Afterpay JavaScript Snippet (v1.0.12) -->
>
>

* Press Save

  ![](/img/copy-and-paste-the-code-of-afterpay-shopify.png)
* Go to the product page to check if the Afterpay logo shows or not

## Setup Afterpay Shopify: Final words

Afterpay Shopify has gained traction recently thanks to its installment payment strategy. This payment method charges approximately 30 cents/transaction, together with a 4-6% commission fee. With not too much fee, you can boost the conversion rate a great deal. 

Related Reading: [How to set up local pickup on Shopify](https://vedabuilder.com/blog/2022-06-06-how-to-set-up-pickup-on-shopify-step-by-step/)

<!--EndFragment-->