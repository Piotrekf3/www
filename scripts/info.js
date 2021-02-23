function info() {
    if(!confirm("Ta strona może być niebezpieczna. Kliknij OK, jeżeli chcesz zaryzykować. Jeżeli się boisz, kliknij Anuluj!")) {
        this.event.preventDefault();
    }
}