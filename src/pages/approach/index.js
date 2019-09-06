import React, {Component} from "react"
import PropTypes from "prop-types"
// import { graphql } from "gatsby"
// import classnames from "classnames"
import {withWindowSizeListener} from "lib/window-size-listener"
// import {withWindowSizeListener} from "react-window-size-listener"
import posed from "react-pose"
import {lteSmallViewport} from "lib/media-query"
import classnames from "classnames"

import Layout from "components/Layout"
// import Arrow from "components/Arrow"
import Link from "components/Link"
import Section from "components/Section"
import SEO from "components/SEO"
import styles from "./styles.module.css"
import Engineering from "../../components/Services/Engineering";
import Design from "../../components/Services/Design";
import Strategy from "../../components/Services/Strategy";
import WhatWeDo from "../../components/Hero/WhatWeDo";
// import Marketing from "../../components/Services/Marketing";
// import Brush from "../../components/Brush";

const AccordionContent = posed.li({
    closed: {
        height: lteSmallViewport() ? "6rem" : "9rem",
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 200,
        },
    },
    open: {
        height: "auto",
        transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 200,
        },
    },
})

class Approach extends Component {
    static propTypes = {
        windowSize: PropTypes.shape({
            windowWidth: PropTypes.number,
            windowHeight: PropTypes.number,
        }),
        transitionStatus: PropTypes.string.isRequired,
    }

    static defaultProps = {
        windowSize: {
            windowWidth: 0,
            windowHeight: 0,
        },
    }

    state = {
        activeService: [],
    }

    render() {
        const {transitionStatus} = this.props
        // const {activeService} = this.state

        return (
            <Layout transitionStatus={transitionStatus}>
                <SEO title="我们的工作方法"/>
                {/*<h1 className={styles.heroText}>*/}
                {/*    我们建立客户喜爱的产品的秘方*/}
                    {/*我们帮助公司构建变革性的用户体验，通过出色的软件工程使产品适应市场和规模化。*/}
                {/*</h1>*/}
                <WhatWeDo/>
                {/*
                <h1 className={styles.heroText}>
                    Our formula for building products
                    that customers love.
                </h1>
                <section className={styles.lede}>
                    <div>
                        <p>
                            We help companies build transformative user experiences, find product-market fit and scale
                            with great software engineering.
                        </p>
                    </div>
                </section>
                <section className={styles.lede}>
                    <div>
                        <p>
                            Building good products isn&rsquo;t magic: it&rsquo;s all about
                            listening to your customers, working iteratively, and testing
                            constantly. Short cycles and regular feedback keeps our minds open to
                            changing directions and experimenting every step of the way.
                        </p>
                        <p>
                            The right product is the one created with your and your
                            customers&rsquo; goal in mind; we&rsquo;re here as the experienced
                            team that has the tools and processes necessary to do the work and
                            get results.
                        </p>
                    </div>
                </section>
                <Section title="Formula" className={styles.formula} contentClassName={styles.formulaBody}>
                    <div>
                        <h2>We follow three <Brush number={4}>basic</Brush> but impor&shy;tant rules when working with
                            our clients.</h2>
                        <Link to="/about">About Us <Arrow color="red" size="1.25rem" className={styles.arrow}/></Link>
                    </div>
                    <ul className={styles.formulaItems}>
                        <li>
                            <h3>The <span>user</span> comes first</h3>
                            <p>
                                Before building anything, we work to understand the who, what, and
                                why. Who are we building for? What is the problem we’re solving?
                                And why is this the solution they need? Having answers to these
                                questions early in the process allows us to build products that
                                enhance capabilities, bring happiness, and simplify process.
                            </p>
                        </li>
                        <li>
                            <h3><span>Foundation</span> over fads</h3>
                            <p>
                                Trends come and go, especially when it comes to technology. This is
                                why we rely on research, user insights, best practices, and years
                                of experience to guide us in developing every part of your product.
                                Our goal isn’t to create something fleeting, but something that
                                will stand the test of time as user’s needs and technology change.
                            </p>
                        </li>
                        <li>
                            <h3>Collaborate early &amp; <span>often</span></h3>
                            <p>
                                Getting input from users and stakeholders at every stage of the
                                process is key to building a successful product. By constantly
                                checking in and validating assumptions, we ensure that your product
                                will not only be useful, but met with joy and anticipation.
                            </p>
                        </li>
                    </ul>
                </Section>
                */}
                {/*<WhatWeDo />*/}

                <Section title="服务" className={styles.services} contentClassName={styles.content}>
                    <ul>
                        <AccordionContent
                            pose='open'
                            className={classnames(styles.accordionItem,
                                styles.open
                            )}>
                            <Strategy/>
                        </AccordionContent>
                        <AccordionContent
                            pose='open'
                            className={classnames(styles.accordionItem,
                                styles.open
                            )}>
                            <Design/>
                        </AccordionContent>
                        <AccordionContent
                            pose='open'
                            className={classnames(styles.accordionItem,
                                styles.open
                            )}>
                            <Engineering/>
                        </AccordionContent>
                        {/*
                        <AccordionContent
                            className={classnames(styles.accordionItem)}>
                            <Marketing />
                        </AccordionContent>
                        */}
                    </ul>
                </Section>

                {/*</Section>*/}
                <Section title="联络" className={styles.contact} contentClassName={styles.contactBody}>
                    我们是你一直在寻找的合作伙伴吗?{' '}
                    <Link to="/contact" className={styles.contactLink}>
                        给我们讲讲你的项目
                    </Link>.
                </Section>
            </Layout>
        )
    }
}

export default withWindowSizeListener(Approach)
