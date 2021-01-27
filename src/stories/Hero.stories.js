import React from "react";

import Hero from "../components/Hero";
import BgHogwartsImage from "./assets/bg-hogwarts2.jpg";

const heroComponent = {
    title: "Hero",
    components: Hero,
};
export default heroComponent;

export const usage = () => (
    <Hero
        title="Escola de Magia e Bruxaria de Hogwarts"
        image={BgHogwartsImage}
    >
        <ul>
            <li>Lufa-lufa</li>
            <li>Corvinal</li>
            <li>Grifinória</li>
            <li>Sonserina</li>
        </ul>
        <button>Matricule-se agora</button>
    </Hero>
);
