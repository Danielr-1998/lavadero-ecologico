import React from 'react';

const memberships = [
  {
    title: 'Básica',
    price: '$10',
    description: '',
    benefits: [
      'Lavado semanal',
      '10% de descuento en servicios adicionales',
    ],
    guarantee: 'Garantía de cuidado ecológico: cada lavado ahorra 50% más agua que un lavado tradicional.',
  },
  {
    title: 'Premium',
    price: '$30',
    description: '',
    benefits: [
      'Lavados ilimitados',
      'Detallado mensual incluido',
    ],
    guarantee: 'Experiencia superior: servicio rápido, cómodo y personalizado en cada visita.',
  },
  {
    title: 'Familiar',
    price: '$50',
    description: '',
    benefits: [
      'Cobertura hasta 3 vehículos',
      'Descuento en productos ecológicos',
    ],
    guarantee: 'Certificación de lavado ecológico para empresas que usen el servicio con flotas.',
  }
];

const Card = ({ title, price, description, benefits, guarantee }) => {
  return (
    <div className="max-w-[400px] w-full pt-10 px-10 pb-8 bg-blue-600 rounded-3xl">
      <div className="text-center mb-6">
        <h5 className="text-2xl font-semibold text-white mb-3">{title}</h5>
        <a
          className="relative group inline-block w-full py-4 px-6 text-center text-gray-50 hover:text-gray-900 bg-yellow-400 font-semibold rounded-full overflow-hidden transition duration-200"
          href="#"
        >
          <div
            className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"
          />
          <span className="relative">Empezar</span>
        </a>
        <span className="block text-5xl font-bold text-white mb-3">{price}</span>
        <span className="block text-gray-300 font-medium mb-6">{description}</span>
      </div>
      <ul>
        {benefits.map((benefit, index) => (
          <li className="flex mb-4 items-center" key={index}>
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.293 13.293l-3-3a1 1 0 011.414-1.414L8 12.586l8.293-8.293a1 1 0 111.414 1.414l-9 9a1 1 0 01-1.414 0z" />
            </svg>
            <span className="ml-2 text-white">{benefit}</span>
          </li>
        ))}
      </ul>
      <p className="text-gray-400 text-sm mt-4">{guarantee}</p>
    </div>
  );
}

const MembershipCards = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-8 lg:space-y-0 justify-center">
      {memberships.map((membership, index) => (
        <Card
          key={index}
          title={membership.title}
          price={membership.price}
          description={membership.description}
          benefits={membership.benefits}
          guarantee={membership.guarantee}
        />
      ))}
    </div>
  );
}

export default MembershipCards;
