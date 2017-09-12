$(() => {

    const tab = $('#table');

    const tabBody = $('.table-body');
    const tabHead = $('.table-name');
    // let el2Ask;
    // let el1Bid;

    function preloadTableC() {


        const tabCUrl = 'http://api.nbp.pl/api/exchangerates/tables/c/'

        $.ajax({
            url: tabCUrl,
            type: 'GET',
            dataType: 'json'
        }).done(function(response) {

            let newTabNr = response[0].no;
            let newTabDate = response[0].effectiveDate;

        // Przypisanie nazwy pobranej tablicy:
            tabHead.text("Tabela z kursami walut NBP nr " + newTabNr + " z dnia " + newTabDate);

        // Pobranie walut
            let currencyObjArr = response[0].rates;
            //console.log(currencyArr);

            currencyObjArr.forEach((currency, i) => {
                //console.log(currency);
                let tr = $('<tr>');
                tabBody.append(tr);

                const currencys = []

                    let currencyInfo = $(currency).map((curency, i) => {
                        //console.log(currency.currency, currency.code, currency.mid );


                        let currencyCode = $('<td>', {class: 'currency-code'});
                        let currencyCodeText = $('<span>', {class: 'code-text'}).text(currency.code);

                        let currencyName = $('<td>', {class: 'currency-name'}).text(currency.currency);

                        let currencyBid = $('<td>', {class: 'currency-bid'}).text(currency.bid.toFixed(4));
                        let currencyAsk = $('<td>', {class: 'currency-ask'}).text(currency.ask.toFixed(4));

                        let currencyFlag = $('<span>', { class: 'flag'});

                        let currencyLink = $('<a>', {href: '#'});
                        let pln = $('<span>', {class: 'pln-text'}).text("/PLN");

                        tr.append(currencyCode).append(currencyName).append(currencyBid).append(currencyAsk);
                        currencyCode.append(currencyLink.append(currencyCodeText).append(currencyFlag).append(pln));

                    // Prepering to add right background flag class
                        let bgFlagClass = (currency.code).toLowerCase();
                        //console.log(flagClass);

                    // Adding to <span class="flag"> right flagClass with background-image
                        currencyFlag.addClass(bgFlagClass)

                        currencys.push(currency.code)

                    });



            })
            //var ask;
            




            // function count() {
            //
            //     const count = $('.onClick'); console.log(count);
            //
            //         count.on('click', function() {
            //             let input = $('input').val();
            //             let sum = el1Bid * (el2Ask * input);
            //             console.log(sum);
            //
            //         })
                        //let countMessage = $('<h4>').text("Za " + input + form1 ", kupisz " + sum + form2);

                        //count.append(countMessage);
            // }
            // count();


        })


    }

    preloadTableC()














});
