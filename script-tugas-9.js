$("#total").val('Rp. ' + 0);

        function cekClassActive(id) {
            const div = element = document.getElementById(id);
            var cek = div.classList.contains('active');
            if (cek) {
                return true;
            } else {
                return false;
            }
        }


        function checkout(id, harga, index) {
            var total = 0;

            if (cekClassActive(id) == false) {
                var element = document.getElementById(id);
                element.classList.add("checkOut");

                $("#" + index).val(harga);
            } else {
                var element = document.getElementById(id);
                element.classList.remove("checkOut");

                $("#" + index).val(0);

            }

            var harga1 = parseInt($("#harga1").val());
            var harga2 = parseInt($("#harga2").val());
            var harga3 = parseInt($("#harga3").val());
            var harga4 = parseInt($("#harga4").val());
            var harga5 = parseInt($("#harga5").val());

            total = harga1 + harga2 + harga3 + harga4 + harga5;
            $('#total').text("Rp. " + total);
        }
