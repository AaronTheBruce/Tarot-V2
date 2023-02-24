export type TarotCard = {
    name: String;
    number: Number | String;
    arcana: String;
    suit: String;
    img: String;
    inverted: Boolean;
    fortune_telling: Array<String>;
    keywords: Array<String>;
    meaning: {
        light: Array<String>;
        dark: Array<String>;
    };
    QuestionsToAsk: String;
    Numerology: String;
};

export interface MajorArcana extends TarotCard {
    Archetype: String;
    HebrewAlphabet: String;
    Numerology: String;
    Elemental: String;
    MythicalSpiritual: String;
}

export interface MinorArcana extends TarotCard {
    Affirmation: String;
}