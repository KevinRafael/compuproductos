setInterval(() => {
    toast = document.getElementById('toastPaypal');
    myToast = bootstrap.Toast.getOrCreateInstance(toast)
    myToast.show()
}, 5000)