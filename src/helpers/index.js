import { toast } from 'react-toastify';

export const getErrorTextFromBE = (key, errors) => {
  return errors?.find(el => el.field_name === key)?.error || ''
}

export const errorHandler  = (errors) => {
  if(typeof errors === 'string' ) {
    toast.error(errors)
    return 
  } 

  if(typeof errors === 'array' ) {
    return errors
  } 

  toast.error('Something went wrong!')

}