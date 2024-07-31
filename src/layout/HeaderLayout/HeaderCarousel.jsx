import shopHero1 from '../../assets/HomePageAssets/shop-hero-1.svg';
import Slider from '../../components/Slider';

export default function HeaderCarousel() {
  const items = [
    {
      src: shopHero1,
      altText: 'First Slide',
      caption: 'First Slide',
      key: 1,
    },
    {
      src: shopHero1,
      altText: 'Second Slide',
      caption: 'Second Slide',
      key: 2,
    },
  ];

  return (
    <div>
      <Slider items={items} />
    </div>
  );
}
