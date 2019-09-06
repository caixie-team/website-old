import React from 'react'
import { Global, css } from '@emotion/core'

import SangBleuSunriseMediumWebMWoff2 from '../fonts/SangBleuSunrise-Medium-WebM.woff2'
import SangBleuSunriseMediumWebMWoff from '../fonts/SangBleuSunrise-Medium-WebM.woff'
import SangBleuSunriseMediumWebMEot from '../fonts/SangBleuSunrise-Medium-WebM.eot'
import SangBleuSunriseMediumWebMTtf from '../fonts/SangBleuSunrise-Medium-WebM.ttf'
import SangBleuSunriseMediumWebMSvg from '../fonts/SangBleuSunrise-Medium-WebM.svg'

import SangBleuSunriseRegularWebMWoff2 from '../fonts/SangBleuSunrise-Regular-WebM.woff2'
import SangBleuSunriseRegularWebMWoff from '../fonts/SangBleuSunrise-Regular-WebM.woff'
import SangBleuSunriseRegularWebMEot from '../fonts/SangBleuSunrise-Regular-WebM.eot'
import SangBleuSunriseRegularWebMTtf from '../fonts/SangBleuSunrise-Regular-WebM.ttf'
import SangBleuSunriseRegularWebMSvg from '../fonts/SangBleuSunrise-Regular-WebM.svg'

const GlobalStyles = () => {
    return (
        <Global
            styles={css`
        * {
            box-sizing: border-box;
          }
        
          @font-face {
            font-family: 'SangBleuSunrise-Medium-WebM';
            src: url(${SangBleuSunriseMediumWebMEot}); /* IE9 Compat Modes */
            src: url('${SangBleuSunriseMediumWebMEot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
                 url(${SangBleuSunriseMediumWebMWoff2}) format('woff2'), /* Super Modern Browsers */
                 url(${SangBleuSunriseMediumWebMWoff}) format('woff'), /* Pretty Modern Browsers */
                 url(${SangBleuSunriseMediumWebMTtf})  format('truetype'), /* Safari, Android, iOS */
                 url(${SangBleuSunriseMediumWebMSvg}) format('svg'); /* Legacy iOS */
            font-display: swap;
          }
        
          @font-face {
            font-family: 'SangBleuSunrise-Regular-WebM';
            src: url(${SangBleuSunriseRegularWebMEot}); /* IE9 Compat Modes */
            src: url('${SangBleuSunriseRegularWebMEot}?#iefix') format('embedded-opentype'), /* IE6-IE8 */
                 url(${SangBleuSunriseRegularWebMWoff2}) format('woff2'), /* Super Modern Browsers */
                 url(${SangBleuSunriseRegularWebMWoff}) format('woff'), /* Pretty Modern Browsers */
                 url(${SangBleuSunriseRegularWebMTtf})  format('truetype'), /* Safari, Android, iOS */
                 url(${SangBleuSunriseRegularWebMSvg}) format('svg'); /* Legacy iOS */
            font-display: swap;
          }
        
          body {
            font-size: 16px;
            line-height: 1.5;
            font-family: "mr-eaves-modern", Helvetica, sans-serif;
            font-style: normal;
            font-weight: 300;
            margin: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: #000;
        
            &.open {
              overflow: hidden;
              position: relative;
            }
          }
        
          h1, h2 , h3, h4, h5, h6 {
            margin: 0;
            padding: 0;
            font-weight: normal;
          }
        
          input, textarea {
            // can't render radio buttons w/ this attribute?
            // -webkit-appearance: none;
            border-radius: 0;
          }
          `}
        />
    )
}

export default GlobalStyles
