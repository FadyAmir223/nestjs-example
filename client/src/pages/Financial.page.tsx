import InfoCard from '@/components/shared/InfoCard.component'

export default function Financial() {
  return (
    <InfoCard title='Bank Information'>
      <InfoCard.Grid>
        <InfoCard.Piece title='Bank Name' value='CIB' />
        <InfoCard.Piece title='IBAN' value='12346546413216446' />
      </InfoCard.Grid>
    </InfoCard>
  )
}
