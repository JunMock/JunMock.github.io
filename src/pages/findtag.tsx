import { graphql, Link } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FluidObject } from 'gatsby-image';
import { css } from '@emotion/react';
import * as _ from 'lodash';
import { Footer } from '../components/Footer';

import SiteNav from '../components/header/SiteNav';

import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteHeader,
  SiteMain,
  SiteNavMain,
  SiteArchiveHeader,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .item {
    flex: 1 1 40%;
    margin: 1% 1% 1% 1%;
  }
  .item a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #fff;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
  }

  .item a:hover {
    text-decoration: none;
    opacity: 1;
  }

  .item a:before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #fff;
    opacity: 0.25;
    transition: all 0.35s ease-in-out;
  }

  .item a:hover:before {
    right: 12px;
    opacity: 0.5;
  }

  .item-title {
    z-index: 10;
    flex: 1 1 70%;
  }
`;

interface TagProps {
  data: {
    allTagYaml: {
      edges: Array<{
        node: {
          id: string;
          description: string;
          image?: {
            childImageSharp: {
              fluid: FluidObject;
            };
          };
        };
      }>;
    };
  };
}
const Findtag = ({ data }: TagProps) => {
  return (
    <IndexLayout>
      <Helmet>
        <title>Findtag</title>
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">Find Tag</PostFullTitle>
              </PostFullHeader>
              <div className="container">
                {data.allTagYaml.edges.map(({ node }) => {
                  return (
                    <div className="item">
                      <Link to={`/tags/${_.kebabCase(node.id)}/`}>
                        <h1 className="item-title">{node.id}</h1>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default Findtag;

export const pageQuery = graphql`
  query {
    allTagYaml {
      edges {
        node {
          id
          description
          image {
            childImageSharp {
              fluid(maxWidth: 3720) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
