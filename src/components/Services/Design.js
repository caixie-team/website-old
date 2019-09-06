import React from 'react'
import DesignImage from '../../images/design-bg-desktop.svg'
import DesignImageMobile from '../../images/design-bg-tablet.svg'
import Background from './Background'
import ScrollableAnchor from 'react-scrollable-anchor'

import {
    Title,
    ServiceHeadingMedium,
    ServiceHeadingSmall,
    LargeParagraph,
} from '../Text'

import {
    TwoColumn,
    DesignImageSection,
    TextSection,
    ServicesList,
    ServiceItem,
    ImageWrapper,
    FadeSectionOne,
    FadeSectionTwo,
} from './Layout'
import { anchors } from '../../constants'

const services = [
    "信息架构",
    "响应线框",
    "概念开发",
    "高保真原型",
    "视觉设计",
    "Design Ops",
    "交互设计",
    "艺术创新设计",
    "用户体验设计",
    "可扩展设计系统"
]

// const primaryColor = '#4d2cd1'
const primaryColor = '#FFF'
// const textColor = '#152034'
const textColor = '#FFF'

const Design = () => (
    <ScrollableAnchor id={anchors.design}>
        <Background background="#fff">
            <Title color={primaryColor}>设计</Title>
            <TwoColumn>
                <DesignImageSection>
                    <picture>
                        <source
                            srcSet={`${DesignImageMobile}`}
                            media="(max-width: 1280px)"
                        />
                        <ImageWrapper src={DesignImage} alt="" />
                    </picture>
                </DesignImageSection>
                <TextSection>
                    <FadeSectionOne>
                        <ServiceHeadingMedium color={textColor}>
                            讲述您希望用户体验的故事
                        </ServiceHeadingMedium>
                        <LargeParagraph color={textColor}>
                            通过制定战略，我们利用构造良好的用户角色和旅程地图来感受您的客户，并通过出色的设计解决难点。我们使用以人为本的设计流程来创造不仅看起来很好而且使用起来很棒的产品。

                        </LargeParagraph>
                    </FadeSectionOne>
                    <FadeSectionTwo>
                        <ServiceHeadingSmall color={primaryColor}>
                            服务
                        </ServiceHeadingSmall>
                        <ServicesList>
                            {services.map((item, index) => {
                                return (
                                    <ServiceItem key={index} color={textColor}>
                                        {item}
                                    </ServiceItem>
                                )
                            })}
                        </ServicesList>
                    </FadeSectionTwo>
                </TextSection>
            </TwoColumn>
        </Background>
    </ScrollableAnchor>
)

export default Design
