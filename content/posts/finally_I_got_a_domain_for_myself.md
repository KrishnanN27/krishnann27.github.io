---
title: 'How I Finally Hosted a Domain: Patience is Key'
date: 2024-09-12
draft: true
showDate: true
showModDate: true
showReadingTime: true
showTags: true
tags: ["domain hosting", "GitHub Pages", "DNS configuration", "SSL", "guidance"]
summary: "A step-by-step guide to hosting a custom domain on GitHub Pages, including tips, challenges, and solutions."
---

# Introduction

So, you’ve decided to host your own domain, but the journey isn’t as smooth as you thought it would be? Don’t worry—you’re not alone. In this article, I’ll take you through the entire process of how I finally got my domain, **skfyi.com**, up and running. We’ll explore every step, from choosing a domain name to fixing those annoying HTTPS errors. Hopefully, this guide will save you from some of the headaches I experienced!

## Choosing a Domain Name

Picking the right domain name was one of the first and surprisingly tricky decisions. I wanted something short, memorable, and reflective of my brand—thus, "skfyi" was born. It’s short for "Sowndarya Krishnan - for your info."

Here’s a tip: when choosing a domain, go for something easy to type and remember. Avoid overly complex names or anything that’s too long because, while something like **sowndarya_krishnan.com** may be great for SEO, the chances of people typing it correctly are slim due to its length.

## Where to Buy a Domain

When it comes to buying a domain, there are plenty of cheap options out there. I personally went with [GoDaddy](https://www.godaddy.com/domains), but other services like [Squarespace](https://www.squarespace.com), [AWS](https://aws.amazon.com/route53/), [Microsoft](https://azure.microsoft.com/en-us/services/dns/), and [Namecheap](https://www.namecheap.com) are also reliable choices.

## Setting Up GitHub Pages

Once you’ve purchased your domain, hosting a website on GitHub Pages is fairly straightforward. There are plenty of tutorials on YouTube to guide you through the setup. Once you get your basic GitHub Pages repository up and running, your site will likely end with a `.github.io` domain. But now, we need to configure the custom domain.

To connect your custom domain, you’ll need to add a `CNAME` file in the root of your repository with your custom domain name inside it. For me, it was **skfyi.com**.

<div class="quick-tip">
  Make sure to add a <code>CNAME</code> file to your repository with just your custom domain name inside it.
</div>

However, I later found out that this step might not be necessary depending on your setup, but it doesn’t hurt to include it!

## Configuring DNS Records

This is where things got tricky. Proper DNS configuration is key to getting your custom domain to resolve correctly. After some trial and error, I had to set up A records to point to GitHub’s servers and a CNAME record for **www.skfyi.com**.

Here’s what my DNS records looked like:

```text
A    @      185.199.108.153
A    @      185.199.109.153
A    @      185.199.110.153
A    @      185.199.111.153
CNAME  www    skfyi.com
```

## The Waiting Game: Patience is Key

After configuring the DNS records, you’ll likely see a message saying that changes will take effect within 48 hours. Here’s where patience really comes into play. You might be tempted to keep refreshing the page, but this won't help due to caching.

### Potential Solutions:
- Try using an **incognito tab**.
- **Clear your cache** for 1 hour or even 24 hours.
- Make sure to save your sessions before clearing the cache!

If none of these work, give it some time—this is where patience comes into play. It took me restarting my computer for the changes to take effect!

## Enabling HTTPS

If you don’t enable "Enforce HTTPS" from the get-go, your site will show as "Not Secure." In my case, I couldn’t enable HTTPS at all at first, and I kept receiving the following error:

```
Error: SSL certificate not issued yet (NotServedByPagesError).
```

I tried everything: clearing the cache, browsing through forums, and even taking a break by playing some games. When I came back to it, I was finally able to enable HTTPS, and that's when I realized that patience really is the key!

Even after enabling HTTPS, it took some more time for everything to propagate. But finally, after a couple more rounds of gaming and refreshing, **skfyi.com** was securely mapped to my custom domain.

## Conclusion

Hosting a domain is a process that requires a bit of technical knowledge and, above all, patience. There will be errors, delays, and moments when nothing seems to work—but don’t give up! If you're experiencing similar challenges, I hope this guide helps you through them.

If you have any questions, feel free to reach out, and good luck with your own domain hosting journey!