import '../features/common/styles/globals.scss';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { TodoContextProvider } from '@/features/todo/providers/todo_provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={
        {
          fetcher: (url: string) => fetch(url).then(res => res.json())
        }
      }
    >
      <TodoContextProvider>
        <Component {...pageProps} />
      </TodoContextProvider>
    </SWRConfig>
  );
}

export default MyApp;
