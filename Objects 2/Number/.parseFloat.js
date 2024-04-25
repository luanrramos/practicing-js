parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN

parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100
