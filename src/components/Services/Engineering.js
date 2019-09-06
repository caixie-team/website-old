import React from 'react'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'
import DevelopmentImage from '../../images/technology-bg-desktop.png'
import DevelopmentImageMobile from '../../images/technology-bg-tablet.png'
import Background from './Background'
import BackgroundImage from '../../images/tech-grid-gradient.svg'

import GraphqlLogo from '../../images/techstack/graphql.svg'
import ReactLogo from '../../images/techstack/react.svg'
import VueLogo from '../../images/techstack/vue.svg'
import VanillaJS from '../../images/techstack/js.svg'
import NodeJSLogo from '../../images/techstack/nodejs.svg'
import JavaLogo from '../../images/techstack/java.svg'
import PHPLogo from '../../images/techstack/php.svg'
import MySQLLogo from '../../images/techstack/mysql.svg'
import PostGresqlLogo from '../../images/techstack/postgresql.svg'
import HasuraLogo from '../../images/techstack/hasura.svg'
import DockerLogo from '../../images/techstack/docker.svg'
import AliYunLogo from '../../images/techstack/aliyun.svg'

import ScrollableAnchor from 'react-scrollable-anchor'

import {
    Title,
    ServiceHeadingMedium,
    ServiceHeadingSmall,
    LargeParagraph,
} from '../Text'

import {
    TwoColumn as TwoColumnBase,
    DevelopmentImageSection,
    TextSection as TextSectionBase,
    ServicesList,
    ServiceItem,
    ImageWrapper,
    FadeSectionOne,
    FadeSectionTwo,
} from './Layout'
import { anchors } from '../../constants'

const TwoColumn = styled(TwoColumnBase)`
  @media (max-width: 1280px) {
    display: block;
    max-width: none;
  }
`

const TextSection = styled(TextSectionBase)`
  @media (max-width: 1280px) {
    max-width: 700px;
    margin: auto;
  }
`

const services = [
    '现代化的 JavaScript',
    '网页 & 移动端应用',
    'DevOps',
    '敏捷开发',
    'APIs & 应用集成',
    'QA, 测试 & 交付自动化',
    '云端架构 & 迁移',
    '内容管理系统建设',
    '技术指导',
    '快速原型（MVP）'
]

const techMap = [
    {
        img: GraphqlLogo,
        alt: 'Logo image for Graphql'
    },
    {
        img: ReactLogo,
        alt: 'Logo image for React',
    },
    {
        img: VueLogo,
        alt: 'Logo image for Vuejs'
    },
    {
        img: VanillaJS,
        alt: 'Logo image for Javascript',
    },
    {
        img: NodeJSLogo,
        alt: 'Logo image for Nodejs',
    },
    {
        img: JavaLogo,
        alt: 'Logo image for Java',
    },
    {
        img: PHPLogo,
        alt: 'Logo image for PHP',
    },
    {
        img: MySQLLogo,
        alt: 'Logo image for MySQL',
    },
    {
        img: PostGresqlLogo,
        alt: 'Logo image for Postgres',
    },
    {
        img: HasuraLogo,
        alt: 'Logo image for Hasura',
    },
    {
        img: DockerLogo,
        alt: 'Logo image for Docker',
    },
    {
        img: AliYunLogo,
        alt: 'Logo image for Aliyun',
    },
]

const TechStackContainer = styled('div')`
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: -125px;

  @media (max-width: 1440px) {
    margin-top: -40px;
  }

  @media (max-width: 1280px) {
    margin-top: 50px;
    max-width: 530px;
  }

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    width: 100%;
    margin-top: 50px;
  }
`

const TechStackImage = styled('img')`
  max-width: 100%;
  margin: 14px;

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    margin: 12px;
  }
`

const primaryColor = '#73acd8'
const textColor = '#fff'

const Development = () => (
    <ScrollableAnchor id={anchors.engineering}>
        <Background
            background={'url(' + BackgroundImage + '), #141b21'}
            mobileBackground={'#141b21'}
        >
            <Title color={primaryColor}>工程</Title>
            <TwoColumn>
                <DevelopmentImageSection>
                    <picture>
                        <source
                            srcSet={`${DevelopmentImageMobile}`}
                            media="(max-width: 1280px)"
                        />
                        <ImageWrapper src={DevelopmentImage} alt="" />
                    </picture>
                </DevelopmentImageSection>
                <TextSection>
                    <FadeSectionOne>
                        <ServiceHeadingMedium color={textColor}>
                            通过出色的软件构建将您的产品带入生活
                        </ServiceHeadingMedium>
                        <LargeParagraph color={textColor}>
                            良好的用户体验需要在整个产品生命周期中考虑使用它们的技术。我们与您的团队密切合作，以确保遵循经过验证的方法的清晰度，一致性和有效的技术实施。通过坚持敏捷开发实践并利用我们在多个技术堆栈中的高级专业知识，我们确保您的产品具有可扩展性。
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
            <Fade delay={800}>
                <TechStackContainer>
                    {techMap.map((item, index) => (
                        <TechStackImage src={item.img} alt={item.alt} key={index} />
                    ))}
                </TechStackContainer>
            </Fade>
        </Background>
    </ScrollableAnchor>
)

export default Development
