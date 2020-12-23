import React from 'react'
import Hello from './components/hello'

import { TFunction } from 'next-i18next'
import { withTranslation } from '../i18n'

function SecondPage({ t }: { readonly t: TFunction }) {

	return (
		<main>
			<Hello />
			
		</main>
	)
}

SecondPage.getInitialProps = async () => ({
	namespacesRequired: ['secondPage'],
})

export default withTranslation('secondPage')(SecondPage)
