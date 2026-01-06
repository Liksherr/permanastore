// Simulasi keranjang belanja (gunakan localStorage untuk penyimpanan sederhana)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Fungsi untuk menambah produk ke keranjang
function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product} ditambahkan ke keranjang!`);
}

// Fungsi untuk menampilkan transaksi (keranjang)
function displayTransactions() {
    const list = document.getElementById('transactionList');
    if (list) {
        list.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = item;
            list.appendChild(li);
        });
    }
}

// Fungsi checkout
function checkout() {
    if (cart.length > 0) {
        alert('Checkout berhasil! Terima kasih telah berbelanja.');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        displayTransactions();
    } else {
        alert('Keranjang kosong!');
    }
}

// Fungsi login sederhana (simulasi)
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === '123') {
        document.getElementById('loginMessage').textContent = 'Login berhasil!';
        document.getElementById('loginMessage').style.color = 'green';
    } else {
        document.getElementById('loginMessage').textContent = 'Username atau password salah!';
        document.getElementById('loginMessage').style.color = 'red';
    }
});

// Panggil displayTransactions saat halaman transaksi dimuat
if (window.location.pathname.includes('transaksi.html')) {
    displayTransactions();
}