
import { UserButton } from '@clerk/nextjs'
import { UserInfo } from './components/Userinfo';
import { trpcClient } from '@/trpc/clients/client';

export default function Home() {
   const helloNoArgs = trpcClient.hello.useQuery();
   const helloWithArgs = trpcClient.hello.useQuery({ text: 'client' });

   return (
      <main>
         <h1>Hello World Example</h1>
      <ul>
        <li>
          helloNoArgs ({helloNoArgs.status}):{' '}
          <pre>{JSON.stringify(helloNoArgs.data, null, 2)}</pre>
        </li>
        <li>
          helloWithArgs ({helloWithArgs.status}):{' '}
          <pre>{JSON.stringify(helloWithArgs.data, null, 2)}</pre>
        </li>
      </ul>
      </main>
   );
}
