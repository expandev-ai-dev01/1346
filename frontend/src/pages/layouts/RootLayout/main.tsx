import { Outlet } from 'react-router-dom';
import { Header } from '@/core/components/Header';
import { Footer } from '@/core/components/Footer';

/**
 * @component RootLayout
 * @summary Root layout component that provides the main application structure
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @layout
 * - Header: Application header with branding
 * - Main: Content area with Outlet for nested routes
 * - Footer: Application footer
 */
export const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
