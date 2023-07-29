
# Svg sprite loader for vite (similar https://github.com/JetBrains/svg-sprite-loader)


1) npm i --dev vite-svg-sprite-wrapper
2) replace your vite.config.ts with icons path, output sprite path and add custom transform for svg files.
3) Use it like svg-sprite-loader

    import twitterLogo from './logos/twitter.svg';
    // twitterLogo === SpriteSymbol<id: string, viewBox: string, content: string>
    // Extract mode: SpriteSymbol<id: string, viewBox: string, url: string, toString: Function>
    
    const rendered = `
    <svg viewBox="${twitterLogo.viewBox}">
    <use xlink:href="#${twitterLogo.id}" />
    </svg>`;
