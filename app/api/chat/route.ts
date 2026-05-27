import { NextResponse } from "next/server"

const tourism_data: any = {

  hunza: {
    info: "Hunza Valley is famous for Attabad Lake, Baltit Fort, Passu Cones, and breathtaking mountain scenery.",
    food: "Hunza is famous for Chapshuro, Mamtu, local bread, and dry fruits.",
    visit: "Best time to visit Hunza is April to October.",
    weather: "Hunza has pleasant summers and snowy winters.",
    activities: "Popular activities include hiking, sightseeing, photography, and boating.",
    hotel: "Hunza offers luxury hotels, resorts, and budget guest houses.",
    culture: "Hunza is known for its peaceful culture and hospitality."
  },

  skardu: {
    info: "Skardu is famous for Shangrila Resort, Satpara Lake, Deosai Plains, and trekking routes.",
    food: "Skardu is known for Balti dishes, Mamtu, and trout fish.",
    visit: "Best time to visit Skardu is May to September.",
    weather: "Skardu remains cool during summer and extremely cold during winter.",
    activities: "Tourists enjoy trekking, camping, jeep safari, and boating.",
    hotel: "Skardu has luxury resorts and mountain hotels.",
    culture: "Balti culture is famous for traditional music and hospitality."
  },

  "fairy meadows": {
    info: "Fairy Meadows offers stunning views of Nanga Parbat and green landscapes.",
    food: "Traditional Gilgit foods and trout fish are popular.",
    visit: "Best time to visit Fairy Meadows is June to August.",
    weather: "Fairy Meadows has cool weather during summer.",
    activities: "Camping, hiking, photography, and bonfires are common activities.",
    hotel: "Small wooden huts and camps are available for tourists."
  },

  swat: {
    info: "Swat Valley is called the Switzerland of Pakistan because of rivers and snowy mountains.",
    food: "Swat is famous for trout fish and chapli kebab.",
    visit: "Best time to visit Swat is April to October.",
    weather: "Swat has pleasant weather in summer and snowfall in winter.",
    activities: "Tourists enjoy skiing, river rafting, and sightseeing.",
    hotel: "Swat offers luxury hotels and family resorts."
  },

  naran: {
    info: "Naran Kaghan is famous for Lake Saif ul Malook and lush green valleys.",
    food: "Naran is known for trout fish and Pakistani traditional food.",
    visit: "Best time to visit Naran Kaghan is June to September.",
    weather: "Naran remains cold even during summer nights.",
    activities: "Jeep rides, boating, and camping are popular.",
    hotel: "Many riverside hotels and cottages are available."
  },

  hingol: {
    info: "Hingol National Park is famous for Princess of Hope, mountains, deserts, and wildlife.",
    food: "Balochi Sajji and seafood are famous foods.",
    visit: "Best time to visit Hingol National Park is November to February.",
    weather: "Hingol has hot desert weather during summer.",
    activities: "Tourists enjoy desert exploration and photography.",
    culture: "Balochi culture is rich in traditions and hospitality."
  },

  gorakh: {
    info: "Gorakh Hill is a hill station in Sindh famous for cool weather and clouds.",
    food: "Traditional Sindhi food is popular there.",
    visit: "Best time to visit Gorakh Hill is November to March.",
    weather: "Gorakh Hill remains cool compared to other Sindh areas.",
    activities: "Camping and hiking are famous tourist activities."
  },

  "lahore fort": {
    info: "Lahore Fort is a historical Mughal fort and UNESCO heritage site.",
    food: "Lahore is famous for Nihari, Karahi, Paye, and street food.",
    visit: "Best time to visit Lahore Fort is October to March.",
    culture: "Lahore is known as the cultural heart of Pakistan.",
    activities: "Tourists enjoy historical tours and food streets."
  },

  mohenjo: {
    info: "Mohenjo Daro is an ancient Indus Valley Civilization archaeological site.",
    food: "Sindhi Biryani and Sindhi traditional dishes are popular nearby.",
    visit: "Best time to visit Mohenjo Daro is November to February.",
    history: "Mohenjo Daro is over 4500 years old.",
    activities: "Tourists explore ruins and museums."
  }

}

export async function POST(req: Request) {

  const body = await req.json()
  const query = body.query.toLowerCase()

  let reply =
    "Hidden Pakistan AI Assistant can help with destinations, foods, tourism, and best visiting seasons in Pakistan."

  for (const place in tourism_data) {

    if (query.includes(place)) {

      if (query.includes("food")) {

        reply = tourism_data[place].food

      } else if (
        query.includes("best time") ||
        query.includes("visit")
      ) {

        reply = tourism_data[place].visit

      } else if (query.includes("weather")) {

        reply =
          tourism_data[place].weather ||
          "Weather information is available for this destination."

      } else if (
        query.includes("hotel") ||
        query.includes("stay")
      ) {

        reply =
          tourism_data[place].hotel ||
          "Hotels are available for tourists."

      } else if (
        query.includes("activity") ||
        query.includes("things to do")
      ) {

        reply =
          tourism_data[place].activities ||
          "Many tourism activities are available."

      } else if (query.includes("culture")) {

        reply =
          tourism_data[place].culture ||
          "This destination has rich local culture."

      } else if (query.includes("history")) {

        reply =
          tourism_data[place].history ||
          "This place has historical importance."

      } else {

        reply = tourism_data[place].info

      }

      break
    }
  }

  return NextResponse.json({
    reply,
  })
}