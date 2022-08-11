<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../favicon.ico">

    <title>Andriyanto Pajiri | Tugas Pertemuan 9</title>

    <!-- Bootstrap core CSS -->
    <link href="https://andriyantopajiri2020.github.io/bootstrap.min.css" rel="stylesheet">
    <!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"> -->

    <!-- Custom styles for this template -->
    <style>
        body {
            background-color: #F9EAC2 !important;
        }

        .card-header {
            background-color: #DEB3AD !important;
            color: #fff !important;
        }

        .card {
            margin-top: 10px;
        }

        .list-group-item {
            margin-bottom: 5px;
        }

        .btn {
            background-color: #73777B;
            color: #fff;
        }

        .btn:hover {
            color: #fff !important;
            background-color: #2155CD !important;
        }





        .harga {
            font-size: large;
        }

        .checkOut {
            background-color: #2155CD !important;
        }
    </style>
</head>

<body>

    <div class="container">

        <div class="card">
            <div class="card-header text-center">
                <h4>Rumah Makan</h4>
            </div>
            <div class="card-body">
                <div class="row">
                    <?php
                    $menu = [
                        [
                            'nama' => 'Nasi Goreng',
                            'gambar' => 'https://tse3.mm.bing.net/th?id=OIP.KynB0opniCUWo34ZaG8gWQHaF7&pid=Api&P=0',
                            'harga' => 13000
                        ],
                        [
                            'nama' => 'Bakso',
                            'gambar' => 'https://cdn0-production-images-kly.akamaized.net/aDZbOOV2WeJCgCiBFgFQwoXJN64=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2029093/original/066661300_1521949447-Bakso.jpg',
                            'harga' => 14000
                        ],
                        [
                            'nama' => 'Lalapan',
                            'gambar' => 'https://img-global.cpcdn.com/recipes/fbd33289dc117b3f/1200x630cq70/photo.jpg',
                            'harga' => 17000
                        ],
                        [
                            'nama' => 'Ayam Geprek',
                            'gambar' => 'https://www.piknikdong.com/wp-content/uploads/2021/11/Resep-Ayam-Geprek-Bensu-min.jpg',
                            'harga' => 15000
                        ],
                        [
                            'nama' => 'Es Teh Manis',
                            'gambar' => 'https://dcostseafood.id/wp-content/uploads/2021/12/Es-teh-tawar-manis.jpg',
                            'harga' => 5000
                        ]
                    ];
                    $i = 1;
                    $id_input = 1;
                    $no = 1;
                    foreach ($menu as $m) :
                    ?>
                        <div class="col-sm-3">
                            <div class="card">
                                <img class="card-img-top" src="<?= $m['gambar'] ?>" alt="<?= $m['nama'] ?>" style="height: 120px;">
                                <div class="card-body text-center">
                                    <h6 class="card-title">Rp . <?= $m['harga'] ?></h6>
                                    <p class="card-text"><?= $m['nama'] ?></p>
                                    <a id="makanan-item<?= $no++; ?>" onclick="checkout(this.id, <?= $m['harga'] ?>, '<?= 'harga' . $i++; ?>')" href="javascript:(0)" class="btn" style="width: 100%;">Pesan</a>
                                    <input type="hidden" id="harga<?= $id_input++ ?>" value="0" readonly class="form-control" />
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>

            </div>
            <div class="card-footer" style="background-color: #DEB3AD !important;">
                <div class="text-white d-flex justify-content-between align-items-start">
                    <h5>Harga Total</h5>
                    <h5 id="total">Total Rp. 0</h5>
                </div>
            </div>
        </div>

    </div>





    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>

    <!-- script untuk proses checkout -->
    <script src="https://andriyantopajiri2020.github.io/script-tugas-9.js"></script>


</body>

</html>
