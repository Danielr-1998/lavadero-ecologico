import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // Importar el selector de fecha
import 'react-datepicker/dist/react-datepicker.css'; // Importar los estilos del calendario

const Reserva = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        vehiculo: '',
        fecha: null, // Almacenará la fecha seleccionada
        hora: '', // Almacenará la hora seleccionada
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [showModal, setShowModal] = useState(false); // Estado para mostrar el modal

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setFormData((prevData) => ({
            ...prevData,
            fecha: date,
        }));
    };

    const handleTimeChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            hora: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage('¡Reserva realizada con éxito!');
        setFormData({
            nombre: '',
            telefono: '',
            vehiculo: '',
            fecha: null,
            hora: '',
        });
        setShowModal(false); // Cerrar el modal después de enviar el formulario
    };

    const toggleModal = () => {
        setShowModal(!showModal); // Abrir o cerrar el modal
    };

    return (
        <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Reserva Tu Lavado</h2>
            <button
                onClick={toggleModal}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Agendar Reserva
            </button>

            {/* Modal de Agendamiento */}
            {showModal && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                        <h3 className="text-2xl font-semibold mb-4">Selecciona la fecha y hora</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="nombre" className="block text-left text-lg">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-2 border rounded-lg"
                                    placeholder="Tu nombre"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="telefono" className="block text-left text-lg">Número de Teléfono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-2 border rounded-lg"
                                    placeholder="Tu teléfono"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="vehiculo" className="block text-left text-lg">Placa del Vehículo</label>
                                <input
                                    type="text"
                                    id="vehiculo"
                                    name="vehiculo"
                                    value={formData.vehiculo}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-4 py-2 border rounded-lg"
                                    placeholder="Placa del vehículo"
                                    required
                                />
                            </div>

                            {/* Selector de Fecha */}
                            <div className="mb-4">
                                <label htmlFor="fecha" className="block text-left text-lg">Selecciona la fecha</label>
                                <DatePicker
                                    selected={formData.fecha}
                                    onChange={handleDateChange}
                                    className="w-full mt-2 px-4 py-2 border rounded-lg"
                                    placeholderText="Selecciona una fecha"
                                    required
                                />
                            </div>

                            {/* Selector de Hora */}
                            <div className="mb-4">
                                <label htmlFor="hora" className="block text-left text-lg">Selecciona la hora</label>
                                <input
                                    type="time"
                                    id="hora"
                                    name="hora"
                                    value={formData.hora}
                                    onChange={handleTimeChange}
                                    className="w-full mt-2 px-4 py-2 border rounded-lg"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                            >
                                Reservar
                            </button>
                        </form>
                        <button
                            onClick={toggleModal}
                            className="mt-4 w-full py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {successMessage && (
                <div className="mt-6 text-blue-600 font-semibold">{successMessage}</div>
            )}
        </div>
    );
}

export default Reserva;
