

export const Footer = () => {
  return (
    <footer className="py-8">
        <div className="containermx-auto flex px-4 sm:px-6 lg:px-8">
            <div className="flex-grow">
                <p className="text-base text-gray-600">&copy; 2024 Godai. Todos los derechos reservados.</p>
            </div>
            <div className="flex justify-center space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-900">
                Contacto
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-900">
                Términos de servicio
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-900">
                Política de privacidad
                </a>
            </div>
        </div>
    </footer>
  )
}
