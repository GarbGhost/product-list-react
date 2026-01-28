import star from "../assets/star.jpeg"
import flowers from "../assets/flowers.jpg"
import candles from "../assets/candles.jpg"
import vintage_camera from "../assets/vintage-camera.jpg"
import drone from "../assets/drone.jpg";
import yoga from "../assets/yoga.jpg";
import art_tablet from "../assets/art-tablet.jpg";
import electronic_device from "../assets/electronic-device.jpg";

export const products = [
  {
    id: crypto.randomUUID(),
    title: "Звездное небо в банке",
    price: 1500,
    discount: 0.2,
    imageUrl: star,
  },
  {
    id: crypto.randomUUID(),
    title: "Умный цветок",
    price: 2500,
    discount: 0.1,
    imageUrl: flowers,
  },
  {
    id: crypto.randomUUID(),
    title: "Магическая свеча",
    price: 800,
    imageUrl: candles,
  },
  {
    id: crypto.randomUUID(),
    title: 'Винтажная фотокамера "Путешествие в прошлое"',
    price: 3500,
    discount: 0.3,
    imageUrl: vintage_camera,
  },
  {
    id: crypto.randomUUID(),
    title: 'Подводный дрон "Морская тайна"',
    price: 6000,
    imageUrl: drone,
  },
  {
    id: crypto.randomUUID(),
    title: "Космический коврик для йоги",
    price: 2000,
    discount: 0.4,
    imageUrl: yoga,
  },
  {
    id: crypto.randomUUID(),
    title: "Цифровой арт-планшет",
    price: 4500,
    discount: 0.2,
    imageUrl: art_tablet,
  },
  {
    id: crypto.randomUUID(),
    title: "Волшебный аудиофлакон",
    price: 1200,
    imageUrl: electronic_device,
  },

  
];

