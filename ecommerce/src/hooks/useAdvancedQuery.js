import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { prefetchQuery } from "./useServerQuery";
import { prefetchInfiniteQuery } from "./useServerInfiniteQuery";


async function useAdvancedQuery(queryData, infiniteData, props) {
  const queryClient = new QueryClient();

  const { data } = await prefetchQuery(queryClient, queryData);

  const { initialData } = await prefetchInfiniteQuery(
    queryClient,
    infiniteData
  );

  const key = infiniteData.key;

  const hasValidPages = initialData?.pages?.some((page) => {
    page != null || page != undefined;
  });

  if (!hasValidPages && props?.dataNotFound) {
    return (
      <HydrationBoundary state={dehydrate(queryClient)}>
        <queryData.component
          initialData={initialData}
          data={data}
          backupKey={key}
        />
      </HydrationBoundary>
    );
  }

  //   if (!hasValidPages && props?.listNotFound) {
  //     return <NotFound />;
  //   }

  //   if (!hasValidPages) {
  //     return <NoDataFound />;
  //   }

  const dataError =
    data?.error?.code === 404 ||
    data?.error?.code === 500 ||
    !data ||
    data?.status === 404;

  if (props?.data) {
    return {
      data: data,
      component: (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <queryData.component
            initialData={initialData}
            data={data}
            backupKey={key}
          />
        </HydrationBoundary>
      ),
    };
  }
}

export default useAdvancedQuery;
