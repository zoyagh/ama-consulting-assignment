import Head from 'next/head';
import Records from '@/components/Records';


export default function Home() {
  return (
    <>
      <Head>
        <title>Records Validation</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Records />
    </>
  );
}


