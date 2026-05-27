from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from openai import OpenAI
from dotenv import load_dotenv

import os

# LOAD ENV

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

client = OpenAI(api_key=OPENAI_API_KEY)

# FASTAPI

app = FastAPI()

# CORS

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# REQUEST MODEL

class ChatRequest(BaseModel):
    query: str

# DESTINATION DATA

tourism_data = {

    "hunza": {
        "info": "Hunza Valley is famous for Attabad Lake, Baltit Fort, Passu Cones, and breathtaking mountain scenery.",
        "food": "Hunza is famous for Chapshuro, Mamtu, local bread, and dry fruits.",
        "visit": "Best time to visit Hunza is April to October.",
        "weather": "Hunza has pleasant summers and snowy winters.",
        "activities": "Popular activities include hiking, sightseeing, photography, and boating.",
        "hotel": "Hunza offers luxury hotels, resorts, and budget guest houses.",
        "culture": "Hunza is known for its peaceful culture and hospitality."
    },

    "skardu": {
        "info": "Skardu is famous for Shangrila Resort, Satpara Lake, Deosai Plains, and trekking routes.",
        "food": "Skardu is known for Balti dishes, Mamtu, and trout fish.",
        "visit": "Best time to visit Skardu is May to September.",
        "weather": "Skardu remains cool during summer and extremely cold during winter.",
        "activities": "Tourists enjoy trekking, camping, jeep safari, and boating.",
        "hotel": "Skardu has luxury resorts and mountain hotels.",
        "culture": "Balti culture is famous for traditional music and hospitality."
    },

    "fairy meadows": {
        "info": "Fairy Meadows offers stunning views of Nanga Parbat and green landscapes.",
        "food": "Traditional Gilgit foods and trout fish are popular.",
        "visit": "Best time to visit Fairy Meadows is June to August.",
        "weather": "Fairy Meadows has cool weather during summer.",
        "activities": "Camping, hiking, photography, and bonfires are common activities.",
        "hotel": "Small wooden huts and camps are available for tourists."
    },

    "swat": {
        "info": "Swat Valley is called the Switzerland of Pakistan because of rivers and snowy mountains.",
        "food": "Swat is famous for trout fish and chapli kebab.",
        "visit": "Best time to visit Swat is April to October.",
        "weather": "Swat has pleasant weather in summer and snowfall in winter.",
        "activities": "Tourists enjoy skiing, river rafting, and sightseeing.",
        "hotel": "Swat offers luxury hotels and family resorts."
    },

    "naran": {
        "info": "Naran Kaghan is famous for Lake Saif ul Malook and lush green valleys.",
        "food": "Naran is known for trout fish and Pakistani traditional food.",
        "visit": "Best time to visit Naran Kaghan is June to September.",
        "weather": "Naran remains cold even during summer nights.",
        "activities": "Jeep rides, boating, and camping are popular.",
        "hotel": "Many riverside hotels and cottages are available."
    },

    "hingol": {
        "info": "Hingol National Park is famous for Princess of Hope, mountains, deserts, and wildlife.",
        "food": "Balochi Sajji and seafood are famous foods.",
        "visit": "Best time to visit Hingol National Park is November to February.",
        "weather": "Hingol has hot desert weather during summer.",
        "activities": "Tourists enjoy desert exploration and photography.",
        "culture": "Balochi culture is rich in traditions and hospitality."
    },

    "gorakh": {
        "info": "Gorakh Hill is a hill station in Sindh famous for cool weather and clouds.",
        "food": "Traditional Sindhi food is popular there.",
        "visit": "Best time to visit Gorakh Hill is November to March.",
        "weather": "Gorakh Hill remains cool compared to other Sindh areas.",
        "activities": "Camping and hiking are famous tourist activities."
    },

    "lahore fort": {
        "info": "Lahore Fort is a historical Mughal fort and UNESCO heritage site.",
        "food": "Lahore is famous for Nihari, Karahi, Paye, and street food.",
        "visit": "Best time to visit Lahore Fort is October to March.",
        "culture": "Lahore is known as the cultural heart of Pakistan.",
        "activities": "Tourists enjoy historical tours and food streets."
    },

    "mohenjo": {
        "info": "Mohenjo Daro is an ancient Indus Valley Civilization archaeological site.",
        "food": "Sindhi Biryani and Sindhi traditional dishes are popular nearby.",
        "visit": "Best time to visit Mohenjo Daro is November to February.",
        "history": "Mohenjo Daro is over 4500 years old.",
        "activities": "Tourists explore ruins and museums."
    }

}

# HOME ROUTE

@app.get("/")
def home():
    return {
        "message": "Hidden Pakistan AI Backend Running"
    }

# CHAT ROUTE

@app.post("/chat")
async def chat(request: ChatRequest):

    query = request.query.lower()

    # TRY OPENAI FIRST

    try:

        completion = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "system",
                    "content": (
                        "You are a tourism assistant for Pakistan."
                    ),
                },
                {
                    "role": "user",
                    "content": query,
                },
            ],
        )

        reply = completion.choices[0].message.content

    except:

        # FALLBACK TOURISM AI

        reply = None

        for place, data in tourism_data.items():

            if place in query:
                if "food" in query:
                    reply = data["food"]

                elif "best time" in query or "visit" in query:
                    reply = data["visit"]

                elif "weather" in query:
                    reply = data.get("weather", "Weather information is available for this destination.")

                elif "hotel" in query or "stay" in query:
                    reply = data.get("hotel", "Hotels are available for tourists.")

                elif "activity" in query or "things to do" in query:
                    reply = data.get("activities", "Many tourism activities are available.")

                elif "culture" in query:
                    reply = data.get("culture", "This destination has rich local culture.")

                elif "history" in query:
                    reply = data.get("history", "This place has historical importance.")

                else:
                    reply = data["info"]
                                

                break

        # GENERAL RESPONSE

        if not reply:

            reply = (
                "Hidden Pakistan AI Assistant can help "
                "with destinations, foods, tourism, "
                "and best visiting seasons in Pakistan."
            )

    return {
        "reply": reply
    }