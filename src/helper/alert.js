import Swal from "sweetalert2";

export default {
  loading() {
    return Swal.fire({
      title: "Loading..",
      text: "Please wait",
      allowOutsideClick: false,
      onOpen: () => {
        Swal.showLoading();
      },
    });
  },

  error(message) {
    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message.toUpperCase(),
      onOpen: () => {
        Swal.hideLoading();
      },
    });
  },

  success(message) {
    return Swal.fire({
      icon: "success",
      title: "Success !",
      text: message,
      onOpen: () => {
        Swal.hideLoading();
      },
    });
  },

  confirmation(title, message, confirmText) {
    if (title === undefined) title = "Are you sure?";

    if (message === undefined) message = "You won't be able to revert this!";

    if (confirmText === undefined) confirmText = "Yes, delete it!";

    return Swal.fire({
      title: title,
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: confirmText,
    });
  },
};
