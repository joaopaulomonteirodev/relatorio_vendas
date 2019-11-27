class Controller{
    constructor(){
        let $  = document.getElementById.bind(document);
        this._selectCategorias = $("categorias");
        this._selectProdutos = $("produtos");
        this._selectMarcas = $("marcas");
        this._divChart = $("chart");

        this.chartBuilder = new ChartBuilder(this._divChart);

        this._init();
    }

    _init(){
        this._initCategorias();
        this.setCategoria(0);
    }

    _initCategorias(){				
        catalogo.forEach( (item, index) =>
            this._addItemAoSelect(this._selectCategorias, item.categoria, index)
        );
    }
/*
    _initProdutos(){
        let produtos = catalogo[0].produtos;
        produtos.forEach( (produto, index) =>
            this._addItemAoSelect(this._selectProdutos, produto.nome, index)
        );
    }

    _initMarcas(){
        let marcas = catalogo[0].produtos[0].marcas;
        marcas.forEach( (marca, index) =>
            this._addItemAoSelect(this._selectMarcas, marca.nome, index)
        );
    }

    _initChart(){
        let vendasIniciais = catalogo[0].produtos[0].marcas[0].vendas;
        this.chartBuilder = new ChartBuilder(this._divChart, vendasIniciais);
    }
*/
    setCategoria(event){
        let indexCategoria = this._selectCategorias.value;
        this.categoria = catalogo[indexCategoria];
        this.atualizarListaProdutos();

        this.setProduto(0);
    }

    atualizarListaProdutos(){
        let produtos = this.categoria.produtos;
        this._esvaziarSelect(this._selectProdutos);

        produtos.forEach((item, index) =>
            this._addItemAoSelect(this._selectProdutos, item.nome, index)
        );
    }

    setProduto(event){
        let indexProduto = this._selectProdutos.value;
        this.produto = this.categoria.produtos[indexProduto];
        this.atualizarListaMarcas(this.produto);

        this.setMarca(0);
    }

    atualizarListaMarcas(){
        let marcas = this.produto.marcas;

        this._esvaziarSelect(this._selectMarcas);

        marcas.forEach((item, index) =>
            this._addItemAoSelect(this._selectMarcas, item.nome, index)
        );
    }

    setMarca(event){
        let indexMarca = this._selectMarcas.value;
        this.marca = this.produto.marcas[indexMarca];
        this.atualizarGrafico();
    }

    atualizarGrafico(){
        if(this.chartBuilder){
            this.chartBuilder.atualizarGrafico(this.marca.vendas);    
        }
    }

    _esvaziarSelect(select){
        select.options.length = 0;
    }
    
    _addItemAoSelect(select, text, value){
        select.options[select.options.length] = new Option(text, value);
    }
}