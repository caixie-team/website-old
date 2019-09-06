import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {StaticQuery, graphql, withPrefix} from 'gatsby';

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                siteUrl
            }
        }
    }
`;

function SEO({
                 description, lang, title, ogImage, article,
             }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={(data) => {
                const metaDescription = description || data.site.siteMetadata.description;
                // const image = `${data.site.siteMetadata.siteUrl}${ogImage || withPrefix('assets/og-image.jpg')}`;
                return (
                    <Helmet
                        htmlAttributes={{lang}}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                    >
                        <meta name="description" content={metaDescription} />

                        {/*<meta property="og:title" content={`${title} | ${data.site.siteMetadata.title}`} />*/}
                        {/*<meta property="og:description" content={metaDescription} />*/}
                        {/*<meta property="og:type" content={article ? 'article' : 'website'} />*/}
                        {/*<meta property="og:image" content={image} />*/}
                        {/**/}
                        {/*<meta name="twitter:card" content="summary_large_image" />*/}
                        {/*<meta name="twitter:title" content={`${title} | ${data.site.siteMetadata.title}`} />*/}
                        {/*<meta name="twitter:description" content={metaDescription} />*/}
                        {/*<meta name="twitter:site" content="@plntary" />*/}
                        {/*<meta name="twitter:image" content={image} />*/}

                    </Helmet>
                );
            }}
        />
    );
}

SEO.defaultProps = {
    description: null,
    lang: 'zh',
    ogImage: null,
    article: false,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    title: PropTypes.string.isRequired,
    ogImage: PropTypes.string,
    article: PropTypes.bool,
};

export default SEO;
