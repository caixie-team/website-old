import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {StaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import classnames from 'classnames';

// import heroVideo from './hero.webm';
// import heroVideoApng from './hero.png';
import styles from './styles.module.css';

export default class DefaultHero extends Component {
    static propTypes = {
        img: PropTypes.string,
    }

    static defaultProps = {
        transitionStatus: null,
    }

    state = {
        videoLoaded: false,
        videoError: false,
        backgroundLoaded: false,
        play: false,
    };

    componentDidMount() {
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
    }

    isReady = () => {
        const {backgroundLoaded} = this.state;
        return backgroundLoaded === 2
    }
    onStaticLoad = () => {
        const {backgroundLoaded} = this.state;
        this.setState({backgroundLoaded: backgroundLoaded + 1});
    }

    render() {
        const {img} = this.props;
        const {play, videoError} = this.state;

        return (
            <StaticQuery
                query={graphql`
                    query {
                        initial: file(relativePath: {eq:  "project-mpcast-hero.png"}) {
                            childImageSharp {
                                fluid(maxWidth: 320, maxHeight: 620) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        static: file(relativePath: {eq: "project-mpcast-hero.png"}) {
                            childImageSharp {
                                fluid(maxWidth: 1440, maxHeight: 900, srcSetBreakpoints: [1440, 2160, 2880]) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                `}

                render={data => (
                    <div className={styles.container}>
                        <Img
                            fluid={data.static.childImageSharp.fluid}
                            className={styles.static}
                            onLoad={this.onStaticLoad}
                        />
                        <div className={classnames(styles.videoWrap)}>
                            <img
                                src={data.initial.childImageSharp.fluid.base64}
                                className={classnames(
                                    this.isReady() && styles.hidden,
                                )}
                                ref={(preload) => {
                                    this.preload = preload;
                                }}
                                alt=""
                            />
                        </div>
                    </div>
                )}
            />
        );
    }
}
