import Swal from 'sweetalert2'

export const swalAlertNoButton = ({ text, icon, position }) => {
  return Swal.fire({
    position,
    icon,
    text,
    showConfirmButton: false,
    timer: 2000,
  })
}
