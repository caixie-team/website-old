import React from 'react'
import styled from '@emotion/styled'
import ChinauffLogo from '../../images/clients/chinauff-logo.svg'
import TencentLogo from '../../images/clients/tencent-logo.svg'
import PinanLogo from '../../images/clients/pingan-logo.svg'
import DisneyEnglishLogo from '../../images/clients/disney_english-logo.png'
import ICTLogo from '../../images/clients/ict-logo.png'
import IBoyaLogo from '../../images/clients/iboya-logo.png'
// import ElevateLogo from '../../images/clients/award-icon.svg'
// import FreshBooksLogo from '../../images/clients/award-icon.svg'
// import LeagueLogo from '../../images/clients/award-icon.svg'
// import MercatusLogo from '../../images/clients/award-icon.svg'
// import NescafeLogo from '../../images/clients/award-icon.svg'
// import NudgeLogo from '../../images/clients/award-icon.svg'
// import OmstarsLogo from '../../images/clients/award-icon.svg'
// import WildbrainLogo from '../../images/clients/award-icon.svg'
// import PostBeyondLogo from '../../images/clients/award-icon.svg'
import Carousel from 'nuka-carousel'

const ClientCarouselWrapper = styled('div')`
  display: flex;
  padding-top: 40px;
  padding-left: 10px;

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    max-width: 130px;
    margin: auto;
  }
`

const ClientLogo = styled('img')`
  max-width: 180px;
  height: 90px;
  width: 100%;

  @media only screen and (max-device-width: 850px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    max-width: 130px;
    height: 60px;
  }

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    max-width: 130px;
    height: 60px;
  }
`

const clientsMap = [
    { src: PinanLogo, alt: '中国平安'},
    { src: ChinauffLogo, alt: '老娘舅' },
    { src: IBoyaLogo, alt: '北京博雅智学科技' },
    { src: TencentLogo, alt: 'TencentLogo' },
    { src: DisneyEnglishLogo, alt: '迪士尼英语' },
    { src: ICTLogo, alt: '中国科学院计算所' },
]

const Clients = () => (
    <ClientCarouselWrapper>
        <Carousel
            vertical
            autoplay
            cellAlign={'center'}
            pauseOnHover={false}
            withoutControls={true}
            speed={300}
            autoplayInterval={1000}
            wrapAround
            autoGenerateStyleTag={true}
            dragging={false}
            swiping={false}
        >
            {clientsMap.map((item, index) => {
                const { alt, src, ...rest } = item
                return <ClientLogo key={index} src={src} alt={alt} {...rest} />
            })}
        </Carousel>
    </ClientCarouselWrapper>
)

export default Clients
