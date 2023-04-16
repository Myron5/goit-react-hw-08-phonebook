import { media } from '../constants';

export const cunsomFonts = (mob: number, tabl: number, desk: number) => `
    @media screen and (min-width: ${media.mobile}) {
    font-size: ${mob}px;
    }

    @media screen and (min-width: ${media.tablet}) {
    font-size: ${tabl}px;
    }

    @media screen and (min-width: ${media.desktop}) {
    font-size: ${desk}px;
    }
`;
