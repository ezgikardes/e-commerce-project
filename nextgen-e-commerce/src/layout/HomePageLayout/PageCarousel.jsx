import shopHero2 from '../../assets/HomePageAssets/shop-hero-2.svg';
import Slider from '../../components/Slider';

export default function PageCarousel() {
  const items = [
    {
      src: shopHero2,
      altText: 'First Slide',
      caption: 'First Slide',
      key: 1,
    },
    {
      src: 'https://picsum.photos/id/678/1200/400',
      altText: 'Second Slide',
      caption: 'Second Slide',
      key: 2,
    },
  ];

  return (
    <div>
      <Slider items={items} pageCarousel />
    </div>
  );
}
