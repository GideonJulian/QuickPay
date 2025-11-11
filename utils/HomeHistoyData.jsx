import { Ionicons, MaterialCommunityIcons, Feather, MaterialIcons } from "@expo/vector-icons";

const historyData = [
 {
      id: 1,
      icon:<MaterialIcons name="music-note" />,
      title: "Spotify Subscription",
      price: "-₦1,200",
      date: "2025-11-02",
      type: "music",
    },
    {
      id: 2,
      icon: <Feather name="phone" />,
      title: "Airtime Purchase",
      price: "-₦500",
      date: "2025-11-03",
      type: "airtime",
    },
    {
      id: 3,
      icon: <MaterialCommunityIcons name="wallet-plus" />,
      title: "Wallet Top-up",
      price: "+₦5,000",
      date: "2025-11-05",
      type: "wallet",
    },
//   {
//     id: 4,
//     iconType: "Feather",
//     iconName: "send",
//     title: "Sent to John Doe",
//     price: "-₦5,000",
//     date: "2025-11-06",
//   },
//   {
//     id: 5,
//     iconType: "Feather",
//     iconName: "plus-circle",
//     title: "Wallet Funded",
//     price: "+₦20,000",
//     date: "2025-11-07",
//   },
//   {
//     id: 6,
//     iconType: "MaterialCommunityIcons",
//     iconName: "television",
//     title: "DSTV Subscription",
//     price: "-₦6,500",
//     date: "2025-11-07",
//   },
];
export default historyData;