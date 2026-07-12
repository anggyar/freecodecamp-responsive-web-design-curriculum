/**
 * Return harus berupa string dimana pattern diulangi dan disusun ke bentuk piramida.
 * Bentuknya segitiga meruncing ke atas kalau argumen ketiga adalah false.
 * Kalau argumen ketiga adalah true, piramida mengarahkan sudut runcingnya ke bawah.
 * Pattern selanjutnya bertambah 2 dari pattern sebelumnya (1, 3, 5, 7).
 * Setiap baris harus dimulai dengan space yang cukup ke tengah (tanpa spasi di akhir).
 * Harus dimulai dengan newline character di awal dan di akhir.
 */

function pyramid(pattern, row, isDownward) {
  let result = [];
  for (let i = 0; i < row; i++) {
    // Hitung jumlah spasi
    let spaceCount = row - i - 1;
    let spaces = " ".repeat(spaceCount);

    // Hitung pattern
    let charCount = 2 * i + 1;
    let chars = pattern.repeat(charCount);

    // Gabungkan row
    let currentRow = spaces + chars;

    result.push(currentRow);
  }
  if (isDownward === true) {
    result.reverse();
  }
  return "\n" + result.join("\n") + "\n";
}

console.log(pyramid("o", 4, false));
