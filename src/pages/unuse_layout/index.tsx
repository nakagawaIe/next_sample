import type { NextPage } from 'next';
import Head from 'next/head';
import { MainLayout } from '@/features/common/layouts/main_layout';

const UnuseLayoutPage: NextPage = () => (
  <MainLayout>
    <Head>
      <title>Unuse Layout Page</title>
    </Head>
    <p>Layoutを使わないと、Layoutが再レンダリングされます。</p>
  </MainLayout>
);

export default UnuseLayoutPage;
