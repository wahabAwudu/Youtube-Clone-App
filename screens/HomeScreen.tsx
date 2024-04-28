import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Icon from "react-native-feather";
import { categories, shortVideos, videos } from "../constants";
import { useState } from "react";
import ShortVideoCard from "../components/ShortVideoCard";
import VideoCard from "../components/VideoCard";

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  return (
    <View className="flex-1 bg-neutral-900">
      {/* logo and profile icons */}
      <SafeAreaView className="flex-row justify-between mx-4 items-center">
        <View className="flex-row items-center space-x-1">
          <Image
            source={require("../assets/youtube.png")}
            className="h-7 w-10"
          />
          <Text className="text-white font-semibold text-xl tracking-tighter">
            Youtube
          </Text>
        </View>
        <View className="flex-row items-center space-x-3">
          <Icon.Cast stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Bell stroke="white" strokeWidth={1.2} height="22" />
          <Icon.Search stroke="white" strokeWidth={1.2} height="22" />
          <Image
            source={require("../assets/avatar.png")}
            className="h-7 w-7 rounded-full bg-white"
          />
        </View>
      </SafeAreaView>

      <ScrollView className="flex-1 mt-6" showsVerticalScrollIndicator={false}>
        <View className="py-2 pb-5">
          <ScrollView
            className="px-4"
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((cat, i) => {
              const isActive = cat == activeCategory;
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(cat)}
                  key={i}
                  style={{
                    backgroundColor: isActive
                      ? "white"
                      : "rgba(255,255,255,0.1)",
                  }}
                  className="rounded-md p-1 px-3 mr-2"
                >
                  <Text className={isActive ? "text-black" : "text-white"}>
                    {cat}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* suggested video */}
        <VideoCard {...videos[2]} />

        {/* short videos */}
        <View className="mt-2 py-5 space-y-3 border-t-zinc-700 border-b-zinc-700 border-4 border-l-0 border-r-0">
          <View className="mx-4 flex-row items-center space-x-2">
            <Image
              source={require("../assets/youtube_shorts_icon.png")}
              className="h-6 w-5"
            />
            <Text className="text-white font-semibold text-lg tracking-tighter">Shorts</Text>
          </View>

          <ScrollView showsHorizontalScrollIndicator={false} horizontal className="px-4">
            {shortVideos.map((video, index) => <ShortVideoCard {...video} key={index} />)}
          </ScrollView>
        </View>

        {/* videos */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {videos.map((video, index) => <VideoCard {...video} key={index} />)}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
