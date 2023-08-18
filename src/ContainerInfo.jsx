import React from "react";

export const ContainerInfo = ({
  activeIndex,
  updateIndex,
  setIsPlaying,
  isPlaying,
  items,
}) => {
  const containerInfoData = [
    {
      h1: "Sammelspaß mit Pokémon",
      p: "Jetzt 4 von 15 Sammelkarten in jedem Happy Meal®!",
      button: "Zum Spielzeug",
      span: `In Frühstücksrestaurants ab 10 Uhr (samstags, sonn- und feiertags ab
        11 Uhr). Solange der Vorrat reicht. Ein Spielzeug oder Buch in jedem
        Happy Meal.`,
    },
    {
      h1: "I want it that way! ",
      p: "Wir haben die Zubereitung für Big Mac®, Cheeseburger & Co optimiert. Saftigere Patties, fluffigere Buns, frisch garnierter Salat und vieles mehr. *",
      button: "Mehr Infos",
      span: `* In Frühstücksrestaurants ab 10 Uhr (samstags, sonn- und feiertags ab 11 Uhr).`,
    },
    {
      h1: "Täglich Coupon remixen! ",
      p: "Mach die McDonald’s App zu deiner Bühne: Einfach Klassiker wählen, Beilage wählen und deinen eigenen Coupon für nur 5 € erstellen!",
      button: "Mehr erfahren",
      span: `
      *Nur für registrierte App-User in teilnehmenden Restaurants. Vom 27.07.23 bis 30.08.23 täglich ein Coupon aus ausgewählten Produkten erstellbar. Nur ein Coupon pro Bestellung.`,
    },
    {
      h1: "Schmeckt nach Sommer-Flirt! ",
      p: "Gönn dir eiskalt! Und zwar den neuen McFlurry® Frozen Yogurt mit KITKAT® WHITE und Passionfruit-Sauce. Jetzt nur für kurze Zeit.",
      button: "Zu den Desserts",
      span: `In teilnehmenden Restaurants. In Frühstücksrestaurants ab 10 Uhr (samstags, sonn- und feiertags ab 11 Uhr). Solange der Vorrat reicht.`,
    },
  ];

  return (
    <div className="containerInfo">
      <div className="subContainer-info">
        <div>
          <h1>{containerInfoData[activeIndex].h1}</h1>
          <p>{containerInfoData[activeIndex].p}</p>
          <div className="div-btn-info">
            <button>{containerInfoData[activeIndex].button}</button>
          </div>
          <span id="span-info">{containerInfoData[activeIndex].span}</span>
        </div>
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => updateIndex(activeIndex - 1)}
        >
          <ion-icon
            className="material-symbols-outlined"
            name="chevron-back"
          ></ion-icon>
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                key={index}
                className="indicator-buttons"
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => updateIndex(activeIndex + 1)}
        >
          <ion-icon
            className="material-symbols-outlined"
            name="chevron-forward"
          ></ion-icon>
        </button>
        <button
          style={{ padding: "10px 25px" }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="play-and-stop-btn"
        >
          {isPlaying ? (
            <ion-icon name="pause"></ion-icon>
          ) : (
            <ion-icon name="play"></ion-icon>
          )}
          {isPlaying ? " Anhalten" : " Wiedergabe"}
        </button>
      </div>
    </div>
  );
};
