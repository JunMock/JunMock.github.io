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
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
  SiteNavMain,
  SiteArchiveHeader,
  ResponsiveHeaderBackground,
  SiteHeaderBackground,
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
    justify-content: space-around;
  }

  .item {
    flex: 1 1 30%;
    margin: 1% 1% 1% 1%;
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
                      <Link to={`/tags/${_.kebabCase(node.id)}`} activeClassName="nav-current">
                        <SiteTitle className="site-title">{node.id}</SiteTitle>
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
