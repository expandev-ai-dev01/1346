/**
 * @page HomePage
 * @summary Home page with password generator interface
 * @domain passwordGenerator
 * @type main-page
 * @category password-management
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 *
 * @layout
 * - Layout: RootLayout
 * - Sections: Generator form, password display, strength analysis
 */
export const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Gerador de Senhas Seguras</h1>
        <p className="text-lg text-gray-600">
          Crie senhas fortes e personalizadas com análise de segurança em tempo real
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Interface do gerador de senhas será implementada aqui
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
