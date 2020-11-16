# Next JS Blog Frontend Application

## [Preview Demo Website](https://nextpwablognew.vercel.app/blog)

Open for anyone to use. This is designed for use with GhostCMS.

### Create a .env file and configure the variables to match your GhostCMS settings.

Create a ghost cms backend with one click on Heroku [link](https://elements.heroku.com/buttons/snathjr/ghost-on-heroku). You will need to add categories within Ghost (tags). Every post should have a defined Excerpt and a featured image within GHOST CMS. You don't need to optimise the image and it's better if you don't. This is taken care of by next/image.

# Install

```
git clone https://github.com/adamrichardson14/nextpwablog.git
yarn install
```

For your ghost url. Do not include the trailing slash or the following from your api endpoint. /ghost/api/v3/content

```
touch .env
///env
API_KEY="YOUR API KEY HERE"
URL="YOUR BASE URL HERE" Example: URL=https://example.com
```

# PWA Configuration

1. Generate icons and manifest.json for your PWA. I used [this]() website.
2. Add your icons to the /public folder
3. Copy the text from the generation to /public/manifest.json
4. Add the correct tags to the /pages/\_document.jsx file. Replace my tags and names, or follow [this](https://github.com/shadowwalker/next-pwa) guide.
5. In Chrome developer tools, use lighthouse to verify installation is correct.

# Performace

## Desktop

![Lighthouse score](https://i.imgur.com/oa0mrCm.png)

## Mobile

![Lighthouse score](https://i.imgur.com/OZvukIv.png)
