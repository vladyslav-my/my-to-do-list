import Skeleton from '@/components/other/skeleton/Skeleton';

const setBtns = (process, Component, data) => {
   switch (process) {
      case 'emty':
         return <Skeleton />;
      case 'loading':
         return <Skeleton />;
      case 'idle':
         return <Component data={data} />;
      default:
         throw new Error('Unexpected process state');
   }
};

export default setBtns;
