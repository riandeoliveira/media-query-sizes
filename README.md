<h1 align="center">media-query-sizes</h1>

## About

Simple [media query](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) breakpoints for [Styled Components](https://styled-components.com/), following the [DevTools](https://en.wikipedia.org/wiki/Web_development_tools) standard dimensions.

## Available Breakpoints

```
desktop: 2560px
laptopL: 1440px
laptop: 1024px
tablet: 768px
mobileL: 425px
mobileM: 375px
mobileS: 320px
```

## Installation

`npm install media-query-sizes --save-dev`

## Example

```tsx
import styled from "styled-components";
import device from "media-query-sizes";

export const Card = styled.div`
  display: flex;

  @media ${device.laptop} {
    flex-direction: column;
  }

  /* Becomes */

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
```

## License

MIT

<p align="center">Made with 💙 by <a href="https://github.com/riandeoliveira"><strong>Rian Oliveira</strong></a></p>
