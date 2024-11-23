import { format } from 'date-fns'
import InfoCard from '@/components/shared/InfoCard.component'
import { useUserById } from '@/hooks/useUserById'
import { Paperclip } from 'lucide-react'

export default function App() {
  const user = useUserById(1)

  return (
    <>
      <InfoCard title='Basic Information'>
        <InfoCard.Grid>
          {/* TODO: return from server */}
          <InfoCard.Piece title='National ID Number' value={29702031400693} />
          <InfoCard.Piece
            title='National Id Expiring Date'
            value={format(
              new Date(user?.nationalId.expiryDate || 0),
              'dd / MM / yyyy',
            )}
          />
          <InfoCard.Piece title='Title' value='Mr.' />
        </InfoCard.Grid>

        <InfoCard.Grid>
          <InfoCard.Piece title='First Name' value={user?.firstName || '_'} />
          <InfoCard.Piece title='Father Name' value={user?.fatherName || '_'} />
          <InfoCard.Piece
            title='Grand Father Name'
            value={user?.grandfatherName || '_'}
          />
          <InfoCard.Piece title='Family Name' value={user?.familyName || '_'} />
        </InfoCard.Grid>

        <InfoCard.Grid>
          <InfoCard.Piece
            title='الإسم الأول'
            value={user?.localizedName.firstName || '_'}
          />
          <InfoCard.Piece
            title='إسم الأب'
            value={user?.localizedName.fatherName || '_'}
          />
          <InfoCard.Piece
            title='إسم الجد'
            value={user?.localizedName.grandfatherName || '_'}
          />
          <InfoCard.Piece
            title='اللقب / إسم العائلة'
            value={user?.localizedName.familyName || '_'}
          />
        </InfoCard.Grid>

        <InfoCard.Grid>
          {/* TODO: return from server */}
          <InfoCard.Piece title='Date of birth' value='1 / 4 / 1980' />
          {/* TODO: return from server */}
          <InfoCard.Piece title='Gender' value='Male' />
          <InfoCard.Piece
            title='Nationality'
            value={user?.nationalities[0].country.name ?? '_'}
          />
          <InfoCard.Piece
            title='Additional Nationality'
            value={
              user?.nationalities
                .slice(1)
                .map(({ country }) => country.name)
                .join(', ') ?? '_'
            }
          />
        </InfoCard.Grid>

        {/* TODO: return from server */}
        <InfoCard.Grid>
          <InfoCard.Piece title='Passport NO.' value='A135464' />
          <InfoCard.Piece title='Passport Issue Date' value='1 / 4 / 1980' />
          <InfoCard.Piece title='Passport Expiry Date' value='1 / 4 / 1980' />
        </InfoCard.Grid>

        <InfoCard.Grid>
          <InfoCard.Piece
            title='Material Status'
            value={user?.maritalStatus.name ?? '_'}
          />
          <InfoCard.Piece title='Dependencies' value={user?.dependants ?? 0} />
        </InfoCard.Grid>
      </InfoCard>

      {/* TODO: return all the following from the server */}

      <InfoCard title='Contact Information'>
        <InfoCard.Grid>
          <InfoCard.Piece title='Personal Email' value='John.smith@gmail.com' />
          <InfoCard.Piece title='Mobile' value='011223344556' />
        </InfoCard.Grid>
      </InfoCard>

      <InfoCard title='Emergency Contacts'>
        <InfoCard.Grid>
          <InfoCard.Piece title='Emergency Contact Person Name' value='John John' />
          <InfoCard.Piece title='Emergency Relation' value='Father' />
          <InfoCard.Piece title='Emergency Phone' value='011223344556' />
        </InfoCard.Grid>
      </InfoCard>

      <InfoCard title='Address Details'>
        <InfoCard.Grid>
          <InfoCard.Piece title='Country' value='Egypt' />
          <InfoCard.Piece title='City' value='Cairo' />
          <InfoCard.Piece title='Postal Code' value='11728' />
        </InfoCard.Grid>

        <InfoCard.Grid>
          <InfoCard.Piece title='Building' value='7' />
          <InfoCard.Piece title='Street' value='127' />
          <InfoCard.Piece title='Floor No.' value='7' />
          <InfoCard.Piece title='Apartment' value='72' />
        </InfoCard.Grid>
      </InfoCard>

      <InfoCard title='Driving License Details'>
        <InfoCard.Grid>
          <InfoCard.Piece title='Driving License' value='Yes' />
          <InfoCard.Piece title='Driving License Type' value='C1E' />
          <InfoCard.Piece
            title='Driving License expiry date'
            value='01 / 04 / 2025'
          />
        </InfoCard.Grid>

        <InfoCard.Grid>
          <InfoCard.Piece title='Require Travel Permit' value='Yes' />
          <InfoCard.Piece title='Military Status' value='Exempted' />
          <InfoCard.Piece
            title='Document'
            value={
              <div className='rounded-[0.25rem] bg-[#ececec] px-2 py-1 gap-x-2 flex items-center select-none'>
                <Paperclip size={16} />
                <span className='text-_blue-dark text-[0.875rem] leading-[1.375rem]'>
                  filename1.docx
                </span>
              </div>
            }
          />
        </InfoCard.Grid>
      </InfoCard>
    </>
  )
}
