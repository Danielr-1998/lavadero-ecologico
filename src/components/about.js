import React from 'react';

const About = () => {
    return (
        <div className="sm:flex items-center max-w-screen-xl">
            <div className="sm:w-1/2 p-10">
                <div className="image object-center text-center">
                    <img src="/images/carwash.png" alt="Car Wash" />
                </div>
            </div>
            <div className="sm:w-1/2 p-5">
                <div className="text">
                    <h2 className="my-4 font-bold text-3xl sm:text-4xl ">Sobre <span className="text-indigo-600">Nuestra empresa</span></h2>
                    <p className="text-gray-700">
                    En RushWash, creemos que cada gota cuenta. Somos más que un lavado de autos; somos un compromiso con el planeta. Transformamos aguas residuales en un servicio ecológico y eficiente que cuida de tu vehículo y del medio ambiente al mismo tiempo.

Con nuestras membresías, tú eliges cómo aportar a un mundo más verde mientras disfrutas de un auto impecable. ¡Porque juntos podemos hacer la diferencia, una gota a la vez!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
