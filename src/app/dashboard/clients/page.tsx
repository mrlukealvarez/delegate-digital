export const dynamic = "force-dynamic"

import { getActiveClients } from "@/lib/db/dashboard-queries"
import ClientsClient from "./clients-client"

export default async function ClientsPage() {
  const clients = await getActiveClients()

  return <ClientsClient clients={clients} />
}
