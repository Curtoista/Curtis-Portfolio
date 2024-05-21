import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Skills } from './Skills';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  return (
    <div className="text-black antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      <Hero />
      <Skills />
      <VerticalFeatures />
      <Banner />
      <Footer />
    </div>
  );
};

export { Base };
