import { ToastOptions, TypeOptions, toast } from 'react-toastify';

export const { SUCCESS, ERROR, DEFAULT, WARNING, INFO } = toast.TYPE;

export const myToast = (
  message: string = 'Calling react toasts',
  type: TypeOptions = DEFAULT
) => {
  const options: ToastOptions = {
    type,
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 60,
    progress: undefined,
    theme: 'colored',
  };

  toast(message, options);
};
