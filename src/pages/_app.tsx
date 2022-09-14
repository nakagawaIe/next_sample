import '../features/common/styles/globals.scss';
import type { AppProps } from 'next/app';
import { TodoContextProvider } from '@/features/todo/providers/todo_provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoContextProvider>
      <Component {...pageProps} />
    </TodoContextProvider>
  );
}

export default MyApp;
