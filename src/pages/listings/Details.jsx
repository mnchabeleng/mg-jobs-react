import SidebarLayout from '../../layouts/SidebarLayout'
import { useParams } from 'react-router-dom'

import Section from '../../components/html/Section'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

export default function ListingDetails() {
  const { listingSlug } = useParams()

  return (
    <SidebarLayout>
      <Section>
        <PageTitle className="text-lg">
          Listing Details
        </PageTitle>
      </Section>
      <Section>

      </Section>
      <Section>

      </Section>
    </SidebarLayout>
  )
}
