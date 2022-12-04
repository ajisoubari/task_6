const {index, find, store, update, destroy} = require('./fruitController.js')

const main = () => {
    console.log('Method Index - Menampilkan Buah')
    index()

    console.log('\n')
    console.log('Method Find - Menemukaan Data Berdasarkan Index Arr')
    find(1)

    console.log('\n')
    console.log('Method Store - Menambahkan Data Buah')
    store('Semangka')

    console.log('\n')
    console.log('Method Update - Mengubah Data Buah')
    update(1, 'Melon')

    console.log('\n')
    console.log('Method Destroy - Menghapus Data Buah')
    destroy(0)
}

main()