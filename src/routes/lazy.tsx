import { lazy, Suspense } from "react";
import Loading from "../components/loading/Loading";
import PremissionDenied from "../admin/PremissionDenied/PremissionDenied";

export const lazyFn = (
  importFunc: any,
  access: boolean = true,
  url: string | null = null
) => {
  if (!access) {
    return <PremissionDenied url={url}></PremissionDenied>;
  }
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc());
      }, 1000);
    });
  });
  //const LazyComponent = lazy(importFunc);

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};
