let words: string[] = [
    "COMPUTER",
    "AVOCADO",
    "DOG",
    "KEYBOARD",
    "WATER",
    "HEADPHONE",
    "DESK",
    "SNEAKERS",
    "ICE CREAM",
    "FAST FOOD",
    "HIGH SCHOOL",
    "CELLPHONE",
    "SPIDER",
    "CAT",
    "BLACK",
    "BACKPACK",
    "BED",
    "REMOTE CONTROL",
    "FRIDGE",
    "WINDOW",
    "SWIMMING POOL",
    "PHONE NUMBER",
    "PEN"
]

export function getRandomWord () {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex]
}