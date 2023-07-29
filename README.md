
# Svg sprite loader for vite in sveltekit (similar https://github.com/JetBrains/svg-sprite-loader)


1) npm i --dev vite-svg-sprite-wrapper
2) replace your vite.config.ts with icons path, output sprite path and add custom transform for svg files.
3) Use it like svg-sprite-loader

```
    <script>
    import twitterLogo from './icons/twitter.svg';
    </scipt>
    
    <svg viewBox="${twitterLogo.viewBox}">
    <use xlink:href="#${twitterLogo.id}" />
    </svg>

```
