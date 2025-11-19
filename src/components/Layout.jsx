import { Fragment } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

export default function Layout({ children, title = 'EPP Edutech - AI-Powered Education' }) {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="AI-Powered Education Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
    </Fragment>
  );
}
