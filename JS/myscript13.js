function change()
{
    let i1 = "https://www.lojabondinho.com.br/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/e/pe-de-mo_a-receitas-de-doces-para-vender.jpg";
    // let i2 = "https://casadebiscoitosmineiros.com.br/wp-content/uploads/2018/01/DSC_3139-600x600.jpg";
    let cmp = document.getElementById("imagem");
    // if(cmp.src == i1) cmp.src = i2;
    // else 
        cmp.src = i1;
}

function dischange()
{
    // let i1 = "https://www.lojabondinho.com.br/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/p/e/pe-de-mo_a-receitas-de-doces-para-vender.jpg";
    let i2 = "https://casadebiscoitosmineiros.com.br/wp-content/uploads/2018/01/DSC_3139-600x600.jpg";
    let cmp = document.getElementById("imagem");
    // if(cmp.src == i1) 
        cmp.src = i2;
    // else cmp.src = i1;
}