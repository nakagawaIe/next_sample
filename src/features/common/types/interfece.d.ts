import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

declare module 'next' {
  /** https://nextjs.org/docs/basic-features/layouts */
  // eslint-disable-next-line no-unused-vars
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
  }
}
