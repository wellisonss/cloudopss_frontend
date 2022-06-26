import { createGlobalStyle } from 'styled-components'

export const GlocalStyle = createGlobalStyle`
  :root {
    --background: linear-gradient(#782574, #782574, #FFFFFF);
    --button: #782574;
    --text-title: #FFFFFF;
    --text-body: #969cb3;
  }

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  // font-size: 16px (Desktop)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px){
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--background);
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
   h1, h2, h3, h4, h5, h6, strong{
    font-weight: 400;
   }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .overlay-popup{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-popup{
    width: 100%;
    max-width: 476px;
    background: #FFFFFF;
    border-radius: 0.25rem;
    padding: 3rem;
    position: relative;
  }
`
