import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';
import TopHeader from '../TopHeader';

interface PageHeaderProps {
    title: string,
    headerRight?: ReactNode
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {
    return (
        <View style={styles.container}>
            <TopHeader navigatePage='Landing'/>

            <View style={styles.header}>
                <Text style={styles.title}>
                    {title}
                </Text>
                {headerRight}
            </View>
            
            {children}
        </View>
    )
}

export default PageHeader;