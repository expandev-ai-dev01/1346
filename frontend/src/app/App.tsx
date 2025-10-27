import { AppProviders } from '@/app/providers';
import { AppRouter } from '@/app/router';

/**
 * @component App
 * @summary Root application component that wraps the entire application with providers and routing
 * @domain core
 * @type root-component
 * @category application
 */
export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};
