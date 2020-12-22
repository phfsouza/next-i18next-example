const { nextI18NextRewrites } = require('next-i18next/rewrites')

const localeSubpaths = {
	fr: 'fr',
	en: 'eng',
}

module.exports = {
	rewrites: async () => nextI18NextRewrites(localeSubpaths),
	publicRuntimeConfig: {
		localeSubpaths,
	},
	poweredByHeader: false,
}