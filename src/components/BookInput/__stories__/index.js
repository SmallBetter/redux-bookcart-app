/* eslint-disable react/prop-types,jsx-a11y/href-no-hash */
import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import BookInput from '../component'

const props = {
  addBook: action('addBook')
}

storiesOf('Example Component', module)
  .addDecorator(story => <div style={{ width: '95%', textAlign: 'center', marginTop: '50px' }}>{story()}</div>)
  .addWithInfo('default', '', () => (
    <BookInput {...props} />
  ))