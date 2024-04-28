import React from 'react'
import { Image, View, Text } from 'react-native';
import * as Icon from "react-native-feather";


type Props = {
    id: number;
    title: string;
    viewCount: string;
    image: any;
}

const ShortVideoCard = (props: Props) => {
  return (
    <View className='relative h-64 w-40 mr-3 flex justify-between'>
        <Image source={props.image} className='h-full w-full rounded-xl absolute' />
        <View className='flex-row justify-end pt-3 pr-1'>
        <Icon.MoreVertical stroke={"white"} strokeWidth={1.4} height="20" />
        </View>
        <View className='p-2'>
            <Text className="text-white shadow-lg font-bold text-sm">
                {props.title}
            </Text>
            <Text className="text-white shadow-md font-extrabold text-xs">
                {props.viewCount} views
            </Text>
        </View>
    </View>
  )
}

export default ShortVideoCard