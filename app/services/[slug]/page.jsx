// app/services/[slug]/page.jsx
import { assets, serviceDetails } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import ServiceDetailClient from "./ServiceDetailClient";

// REQUIRED untuk static export
export function generateStaticParams() {
    return [
        { slug: 'web-developer' },
        { slug: 'mobile-app' },
        { slug: 'ui-ux-design' },
        { slug: 'graphics-design' }
    ];
}

export default async function ServiceDetail({ params }) {
    const service = serviceDetails[params.slug];
    
    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-Ovo mb-4">Service Not Found</h1>
                    <Link href="/#services" className="text-blue-600 hover:underline">
                        Back to Services
                    </Link>
                </div>
            </div>
        );
    }
    
    return <ServiceDetailClient service={service} slug={params.slug} />;
}