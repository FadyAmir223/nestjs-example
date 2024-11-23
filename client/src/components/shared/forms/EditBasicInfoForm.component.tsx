import { DialogFooter } from '@/components/ui/dialog'
import { useUserById } from '@/hooks/useUserById'
import { Button, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { graphql } from '@/graphql'
import { useGraphQLMutation } from '@/hooks/useGraphQL'

const basicInfoSchema = z.object({
  firstName: z.string().min(1),
  fatherName: z.string().min(1),
  grandfatherName: z.string().min(1),
  familyName: z.string().min(1),
})

type BasicInfoSchema = z.infer<typeof basicInfoSchema>

// ? why mutation overrides the query

const UPDATE_USER_MUTATION = graphql(`
  mutation editUser($userId: Int!, $newData: EditUserInput!) {
    editUser(userId: $userId, newData: $newData) {
      id
      firstName
    }
  }
`)

export default function EditBasicInfoForm() {
  const user = useUserById(1)
  const { mutate } = useGraphQLMutation(UPDATE_USER_MUTATION)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BasicInfoSchema>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      firstName: '',
      fatherName: '',
      grandfatherName: '',
      familyName: '',
    },
    values: {
      firstName: user?.firstName ?? '',
      fatherName: user?.fatherName ?? '',
      grandfatherName: user?.grandfatherName ?? '',
      familyName: user?.familyName ?? '',
    },
  })

  const onSubmit = (formData: BasicInfoSchema) => {
    console.log(formData)
    mutate({
      userId: 1,
      newData: formData,
    })
  }

  return (
    <form className='space-y-6 overflow-y-clip' onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label='First Name'
        variant='filled'
        fullWidth
        required
        {...register('firstName')}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      />

      <TextField
        label='Father Name'
        variant='filled'
        fullWidth
        required
        {...register('fatherName')}
        error={!!errors.fatherName}
        helperText={errors.fatherName?.message}
      />

      <TextField
        label='Grandfather Name'
        variant='filled'
        fullWidth
        required
        {...register('grandfatherName')}
        error={!!errors.grandfatherName}
        helperText={errors.grandfatherName?.message}
      />

      <TextField
        label='Family Name'
        variant='filled'
        fullWidth
        required
        {...register('familyName')}
        error={!!errors.familyName}
        helperText={errors.familyName?.message}
      />

      <DialogFooter>
        <Button type='submit' variant='contained' color='primary'>
          Save
        </Button>
      </DialogFooter>
    </form>
  )
}
