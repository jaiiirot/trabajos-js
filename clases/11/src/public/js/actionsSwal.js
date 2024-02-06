export const isConnectionSwal = (username, type) => {
  return Swal.fire({
    icon: type,
    title: `${username} esta conectado ahora`,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
};
