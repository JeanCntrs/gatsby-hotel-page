import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

const InitialText = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }

    p {
        line-height: 2;
    }
`;

const InitialText2 = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        column-gap: 3rem;
    }

    p {
        line-height: 2;
    }
`;

const UsContent = () => {
    const result = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: {slug : {eq: "nosotros"}}) {
                nodes {
                    title
                    content
                    image {
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);
    const { title, content, image } = result.allDatoCmsPage.nodes[0];

    return (
        <>
            <h2 css={css`text-align: center; font-size: 4rem; margin-top: 4rem !important;`}>{title}</h2>
            <InitialText>
                <p>{content}</p>
                <Image fluid={image.fluid} css={css`border-radius: 15px`} />
            </InitialText>
            <InitialText2>
                <p>{content.substr(0, 314)}</p>
                <p>{content.substr(0, 300)}</p>
                <p>{content.substr(0, 327)}</p>
            </InitialText2>
        </>
    );
}

export default UsContent;