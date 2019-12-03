class ChartBuilder{
    constructor(container){
        this.container = container;
    }

    atualizarGrafico(vendas){
        this.vendas = vendas;
        this.carregarGrafico();
    }

    carregarGrafico(){
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(() => this.desenharGrafico());
    }
    
    desenharGrafico(){        
        let data = new google.visualization.DataTable();
        data.addColumn('string');
        data.addColumn('number', 'Vendas');
        data.addRows([
            ['Janeiro', this.vendas[0]],
            ['Fevereiro', this.vendas[1]],
            ['Março', this.vendas[2]],
            ['Abril', this.vendas[3]],
            ['Maio', this.vendas[4]]
        ]);

        const options = {'title':'Vendas Por Mês Para:',
               'width':1400,
               'height':600};

        let chart = new google.visualization.ColumnChart(this.container);
        chart.draw(data, options);
    }
}
