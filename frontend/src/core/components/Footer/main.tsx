/**
 * @component Footer
 * @summary Application footer with copyright and links
 * @domain core
 * @type ui-component
 * @category navigation
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center text-gray-600 text-sm">
          <p>© {currentYear} Gerador de Senhas Seguras. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
