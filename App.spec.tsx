import React from 'react'
import { render } from '@testing-library/react-native'
import { TouchableOpacity } from 'react-native'

describe('App', () => {
    it('is disabled', () => {
        const renderResult = render(<TouchableOpacity disabled accessibilityLabel="test" />)

        expect(renderResult.getByLabelText('test').props.disabled).toBeTruthy()
    })
})