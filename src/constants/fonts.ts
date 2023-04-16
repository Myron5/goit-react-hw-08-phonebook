import { media } from './mediaValues';

export const fonts = Object.freeze({
  sm: {
    mob: 14,
    tabl: 16,
    desk: 19,
  },
  md: {
    mob: 24,
    tabl: 27,
    desk: 30,
  },
  lg: {
    mob: 37,
    tabl: 40,
    desk: 45,
  },
  xl: {
    mob: 52,
    tabl: 56,
    desk: 60,
  },
});

export const adaptFonts = Object.freeze({
  sm: `
    @media screen and (min-width: ${media.mobile}) {
      font-size: ${fonts.sm.mob}px;
    }

    @media screen and (min-width: ${media.tablet}) {
      font-size: ${fonts.sm.tabl}px;
    }

    @media screen and (min-width: ${media.desktop}) {
      font-size: ${fonts.sm.desk}px;
    }
  `,

  md: `
  @media screen and (min-width: ${media.mobile}) {
  font-size: ${fonts.md.mob}px;
  }

  @media screen and (min-width: ${media.tablet}) {
    font-size: ${fonts.md.tabl}px;
  }

  @media screen and (min-width: ${media.desktop}) {
    font-size: ${fonts.md.desk}px;
  }
  `,

  lg: `
    @media screen and (min-width: ${media.mobile}) {
      font-size: ${fonts.lg.mob}px;
    }

    @media screen and (min-width: ${media.tablet}) {
      font-size: ${fonts.lg.tabl}px;
    }

    @media screen and (min-width: ${media.desktop}) {
      font-size: ${fonts.lg.desk}px;
    }
  `,

  xl: `
    @media screen and (min-width: ${media.mobile}) {
      font-size: ${fonts.xl.mob}px;
    }

    @media screen and (min-width: ${media.tablet}) {
      font-size: ${fonts.xl.tabl}px;
    }

    @media screen and (min-width: ${media.desktop}) {
      font-size: ${fonts.xl.desk}px;
    }
  `,
});
