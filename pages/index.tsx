import { NextPage } from 'next';
import React from 'react';
import * as Stack from '../components/Stack'

const Index: NextPage = () => {
    return (
        <div>
            <Stack.Container space="1rem">
                <Stack.Child>item</Stack.Child>
                <Stack.Child>item</Stack.Child>
                <Stack.Child>item</Stack.Child>
            </Stack.Container>
        </div>
    )
}

export default Index;