import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import {StaticQuery, graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import classnames from 'classnames';
import ApngComponent from 'react-apng';

// import heroVideo from './hero.webm';
// import heroVideoApng from './hero.png';
import styles from './styles.module.css';

export default class BlueDiamondHero extends Component {
    static propTypes = {
        transitionStatus: PropTypes.string,
        useApngFallback: PropTypes.bool.isRequired,
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
        const {useApngFallback} = this.props;
        if (!useApngFallback) {
            this.video.addEventListener('error', () => {
                this.setState({videoError: true});
            });
        }

        // Cached video may cause `loadeddata` to fire too early, or not at all, so
        // instead it's easier if we just check the readyState until it's ready.
        this.videoLoadCheck = setInterval(() => {
            const {useApngFallback} = this.props; // eslint-disable-line no-shadow
            const {videoError} = this.state;
            if (this.video.readyState >= 3 || useApngFallback || videoError) {
                this.setState({videoLoaded: true});
                clearInterval(this.videoLoadCheck);
            }
        }, 50);
    }

    componentDidUpdate() {
        const {transitionStatus} = this.props;

        if (!this.initVideo && transitionStatus === 'entered') {
            this.play();
        }
    }

    componentWillUnmount() {
        if (this.videoLoadCheck) {
            clearInterval(this.videoLoadCheck);
        }
    }

    isVideoReady = () => {
        const {videoLoaded, videoError} = this.state;
        const {useApngFallback} = this.props;
        if (videoLoaded || useApngFallback || videoError) {
            return true;
        }

        return false;
    }

    isReady = () => {
        const {backgroundLoaded} = this.state;
        return backgroundLoaded === 2 && this.isVideoReady();
    }

    onStaticLoad = () => {
        const {backgroundLoaded} = this.state;
        this.setState({backgroundLoaded: backgroundLoaded + 1});
    }

    play = () => {
        if (!this.initVideo && this.isReady()) {
            this.initVideo = true;
            setTimeout(() => {
                this.setState({play: true});
                if (this.video) {
                    this.video.play();
                }
            }, 500);
        }
    }

    reset = () => {
        if (this.isReady()) {
            this.video.currentTime = 0;
            this.setState({play: false});
        }
    }

    replay = () => {
        if (this.isReady()) {
            this.setState({play: true});
            this.video.play();
        }
    }

    render() {
        const {useApngFallback} = this.props;
        const {play, videoError} = this.state;

        return (
            <StaticQuery
                query={graphql`
                    query {
                        initial: file(relativePath: {eq: "blue-diamond/initial.png"}) {
                            childImageSharp {
                                fluid(maxWidth: 320, maxHeight: 620) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        splash: file(relativePath: {eq: "blue-diamond/splash.png"}) {
                            childImageSharp {
                                fluid(maxWidth: 1440, maxHeight: 900, srcSetBreakpoints: [1440, 2160, 2880]) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        static: file(relativePath: {eq: "blue-diamond/static.png"}) {
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
                        <Helmet>
                            <link rel="preload" as="fetch" href={heroVideo} type="video/webm" />
                        </Helmet>
                        <Img
                            fluid={data.splash.childImageSharp.fluid}
                            className={classnames(styles.splash, play && styles.play)}
                            onLoad={this.onStaticLoad}
                        />
                        <Img
                            fluid={data.static.childImageSharp.fluid}
                            className={styles.static}
                            onLoad={this.onStaticLoad}
                        />
                        <div className={classnames(styles.videoWrap, play && styles.play)}>
                            <img
                                src={data.initial.childImageSharp.fluid.base64}
                                className={classnames(
                                    styles.preload,
                                    this.isReady() && styles.hidden,
                                )}
                                ref={(preload) => {
                                    this.preload = preload;
                                }}
                                alt="Blue Diamond"
                            />
                            {useApngFallback || videoError
                                ? (
                                    <ApngComponent
                                        src={heroVideoApng}
                                        rate={2.5}
                                        className={classnames(
                                            styles.apng,
                                            this.isReady() && styles.ready,
                                        )}
                                        ref={(apng) => {
                                            this.video = apng;
                                        }}
                                    />
                                )
                                : (
                                    <video
                                        height="100%"
                                        width="100%"
                                        muted
                                        playsInline
                                        src={heroVideo}
                                        className={classnames(
                                            styles.video,
                                            this.isReady() && styles.ready,
                                        )}
                                        ref={(video) => {
                                            this.video = video;
                                        }}
                                    />
                                )
                            }
                        </div>
                    </div>
                )}
            />
        );
    }
}
