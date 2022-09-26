import '../features/common/styles/globals.scss';
import { AnimatePresence } from 'framer-motion';
import type { NextPageWithLayout } from 'next';
import type { AppProps } from 'next/app';
import { TodoContextProvider } from '@/features/todo/providers/todo_provider';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <TodoContextProvider>
      <AnimatePresence exitBeforeEnter>
        {getLayout(<Component key={router.asPath} {...pageProps} />)}
      </AnimatePresence>
    </TodoContextProvider>
  );
}

export default MyApp;
