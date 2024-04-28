import React from 'react'
import { Image, View, Text } from 'react-native';
import * as Icon from "react-native-feather";
import { formatViews } from '../utils/numbers'


type Props = {
    id: number;
    title: string;
    channelTitle: string;
    thumbnail: any;
    avatar: any;
    duration: string;
    published: string;
    viewCount: string;
}

const VideoCard = (props: Props) => {

  return (
    <View className=''>
        <Image source={props.thumbnail} className='h-52 w-full' />
       <View className='flex items-end mr-2 mb-5 -mt-6'>
       <View className='bg-black rounded px-1'>
        <Text className='text-white font-semibold text-xs'>
            {props.duration}
        </Text>
       </View>

       </View>
       <View className='flex-row justify-between items-center pb-5 space-x-3 mx-2'>
        <Image source={props.avatar} className='h-7 w-7 rounded-full' />
        <View className='flex-1 space-y-1'>
            <Text className='text-white font-semibold'>
                {props.title}
            </Text>
            <Text className='text-zinc-400 text-xs'>
                {props.channelTitle.length > 20 ? props.channelTitle.slice(0,20) + "..." : props.channelTitle} • {formatViews(Number(props.viewCount))} views • {props.published}
            </Text>
        </View>
        <View className='self-start'>
            <Icon.MoreVertical stroke="white" strokeWidth={2} height={15} />
        </View>
       </View>
    </View>
  )
}

export default VideoCard