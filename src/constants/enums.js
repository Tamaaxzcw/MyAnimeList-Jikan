// src/constants/enums.js

/**
 * Enums for Jikan API query parameters.
 * Helps prevent typos and ensures valid parameters are used.
 * @author tamaaxzcw
 */

export const AnimeType = {
  TV: 'tv',
  MOVIE: 'movie',
  OVA: 'ova',
  SPECIAL: 'special',
  ONA: 'ona',
  MUSIC: 'music',
};

export const AnimeStatus = {
  AIRING: 'airing',
  COMPLETE: 'complete',
  UPCOMING: 'upcoming',
};

export const MangaType = {
    MANGA: 'manga',
    NOVEL: 'novel',
    LIGHT_NOVEL: 'lightnovel',
    ONE_SHOT: 'oneshot',
    DOUJINSHI: 'doujin',
    MANHWA: 'manhwa',
    MANHUA: 'manhua',
};

export const OrderBy = {
  MAL_ID: 'mal_id',
  TITLE: 'title',
  START_DATE: 'start_date',
  END_DATE: 'end_date',
  SCORE: 'score',
  RANK: 'rank',
  POPULARITY: 'popularity',
  MEMBERS: 'members',
  FAVORITES: 'favorites',
};

export const SortOrder = {
    DESC: 'desc',
    ASC: 'asc'
};
