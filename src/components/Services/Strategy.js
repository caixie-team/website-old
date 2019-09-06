import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'
import StrategyImage from '../../images/strategy-bg-desktop.svg'
import StrategyImageMobile from '../../images/strategy-bg-tablet.svg'
import Background from './Background'

import {
    Title,
    ServiceHeadingMedium,
    ServiceHeadingSmall,
    LargeParagraph,
} from '../Text'

import {
    TwoColumn,
    StrategyImageSection,
    TextSection,
    ServicesList,
    ServiceItem,
    ImageWrapper,
    FadeSectionOne,
    FadeSectionTwo,
} from './Layout'
import {anchors} from '../../constants'

const services = [
    "数字战略",
    "机会识别",
    "增长机会",
    "利益相关者会议",
    "品牌与商业定位",
    "用户角色",
    "客户旅程分析",
    "产品检验",
    "经验映射",
    "可用性测试",
]

const Strategy = () => (
    <ScrollableAnchor id={anchors.strategy}>
        <Background>
            <Title>策略</Title>

            <TwoColumn>
                <StrategyImageSection>
                    <picture>
                        <source
                            srcSet={`${StrategyImageMobile}`}
                            media="(max-width: 1280px)"
                        />
                        <ImageWrapper src={StrategyImage} alt=""/>
                    </picture>
                </StrategyImageSection>

                <TextSection>
                    <FadeSectionOne>
                        <ServiceHeadingMedium>
                            每个项目都从发现阶段开始
                        </ServiceHeadingMedium>
                        <LargeParagraph>
                            通过需求战略会议，我们与您的组织保持一致，并找出您的业务目标、产品需求和成功标准。我们将问题分解成更小的部分，并为您的业务找出最有效的解决方案。
                        </LargeParagraph>
                    </FadeSectionOne>
                    <FadeSectionTwo>
                        <ServiceHeadingSmall>服务项</ServiceHeadingSmall>
                        <ServicesList>
                            {services.map((item, index) => {
                                return <ServiceItem key={index}>{item}</ServiceItem>
                            })}
                        </ServicesList>
                    </FadeSectionTwo>
                </TextSection>
            </TwoColumn>
        </Background>
    </ScrollableAnchor>
)

export default Strategy
