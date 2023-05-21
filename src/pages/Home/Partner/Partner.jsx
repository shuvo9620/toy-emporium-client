import partner1 from '../../../assets/images/ali.png'
import partner2 from '../../../assets/images/ama.png';
import partner3 from '../../../assets/images/AliExpress-logo.png'

import { Link } from 'react-router-dom';

const Partner = () => {
  const partners = [
    { id: 1, name: 'Partner 1', image: partner1 },
    { id: 2, name: 'Partner 2', image: partner2 },
    { id: 3, name: 'Partner 3', image: partner3 },
  ];

  return (
    <section className="bg-gray-100 py-10 mt-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {partners.map(partner => (
            <div key={partner.id} className="flex items-center justify-center">
              <Link to='https://www.amazon.com/'><img src={partner.image} alt={partner.name} className="h-20 w-20" /></Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partner;
