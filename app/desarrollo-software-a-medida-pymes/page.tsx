import type { Metadata } from "next"
import { ServicePage } from "@/components/service-page"
import { buildServiceJsonLd, buildServiceMetadata, getService } from "@/lib/services-data"

const service = getService("custom-software", "es")

export const metadata: Metadata = buildServiceMetadata(service)

export default function DesarrolloSoftwareAMedidaPymesPage() {
  return (
    <>
      {buildServiceJsonLd(service).map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ServicePage service={service} />
    </>
  )
}
