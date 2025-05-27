import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { LatestInvoicesSkeleton, RevenueChartSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/cards';
import { CardsSkeleton } from '@/app/ui/skeletons';


export default async function Page() {
    // fetch all data using parallel request (get all data at same time) and not using request waterfalls (getting data using await to wait before processing/getting the next data)
    //NOTE: By using parallel request method, the slowest request becomes the time it takes for the promise to resolve as all request will start processing at the same time.
    // But with request waterfall, the request will not process at same time, but instead will wait for each to start, complete before the next will start and complete so the 
    // time it takes depend on how long each nextwork request takes to complete. But with parallel request, it depends on only the slowest request time it takes to complete. 
    // const data = await Promise.all([
    //     // include other data to be fetched here
    // ])

    // const { totalPaidInvoices, totalPendingInvoices, numberOfInvoices, numberOfCustomers } = data[0];

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}