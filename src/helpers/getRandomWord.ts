let words: string[] = [
    "COMPUTER",
    "AVOCADO",
    "DOG",
    "KEYBOARD",
    "WATER",
    "HEADPHONE",
    "DESK",
    "SNEAKERS",
    "CELLPHONE",
    "SPIDER",
    "CAT",
    "BLACK",
    "BACKPACK",
    "BED",
    "FRIDGE",
    "WINDOW",
    "PEN",
    "MONITOR",
    "CHARGER",
    "NOTEBOOK",
    "TABLE",
    "CHAIR",
    "SOCKET",
    "LAMP",
    "CUSHION",
    "MICROWAVE",
    "GLASSES",
    "BOOK",
    "SPEAKER",
    "MOUSE",
    "SCREEN",
    "BOTTLE",
    "PLANT",
    "CLOCK",
    "BATTERY",
    "BRACELET",
    "HAT"
]

export function getRandomWord () {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex]
}