import { ReactNode } from 'react'
import EditUserDialog from './EditUserDialog.component'

type InfoCardProps = {
  title: string
  children: ReactNode
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className='w-full bg-white p-10 rounded-[1.25rem] border border-_border'>
      <div className='flex justify-between items-center mb-6'>
        <h4 className='font-medium text-[1.25rem] leading-[1.875red] text-_foreground'>
          {title}
        </h4>

        <EditUserDialog type={title} />
      </div>

      <div className='space-y-6'>{children}</div>
    </div>
  )
}

type InfoGridProps = {
  children: ReactNode
}

export function InfoGrid({ children }: InfoGridProps) {
  return <div className='grid grid-cols-4 gap-x-6'>{children}</div>
}

InfoCard.Grid = InfoGrid

type InfoPieceProps = {
  title: string
  value: string | number | ReactNode
}

export function InfoPiece({ title, value }: InfoPieceProps) {
  return (
    <div className=''>
      <h5 className='text-[0.75rem] leading-5 text-_muted mb-1'>{title}</h5>
      {typeof value === 'string' || typeof value === 'number' ? (
        <span className='font-medium text-_foreground text-base'>{value}</span>
      ) : (
        value
      )}
    </div>
  )
}

InfoCard.Piece = InfoPiece
