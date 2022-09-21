import '../features/common/styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { TodoContextProvider } from '@/features/todo/providers/todo_provider';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then(r => r.json()),
      }}
    >
      <TodoContextProvider>
        <AnimatePresence exitBeforeEnter>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
      </TodoContextProvider>
    </SWRConfig>
  );
}

export default MyApp;
