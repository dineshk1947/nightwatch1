
module.exports= {
   /* 'DROP YOUR QUERIES': function (browser) {
        browser
            .url('https://www.goflytta.com/')
            .windowMaximize()
            .setValue('input[type=text','')
            .setValue('input[type=email', '')
            .setValue('input[type=number]', '')
            .setValue('input[type=text]', '')
            .click('button[type=submit]')
            .pause(5000)
            .click('button[ng-disabled]')

            .url('https://www.goflytta.com/')
            .setValue('input[type=text','lskjdkfj')
            .setValue('input[type=email', 'dkljkls')
            .setValue('input[type=number]', '0548408095689409654')
            .setValue('input[type=text]', 'klsjd')
            .pause(5000)
            .verify.elementPresent('button[type=submit]')
            .click('button[ng-disabled]')
            .url('https://www.goflytta.com/')
            .windowMaximize()
            .setValue('input[ng-model="message"]', '')
            .setValue('input[type=text]', 'Dinesh kumar')
            .setValue('input[type=email]', 'dinesh@goflytta.com')
            .setValue('input[type=number]', '08886267172')
            .setValue('input[ng-model="message"]', "I want to relocate gachibowli")
            //.setValue("div.card.visible-md div.card-content div.row div:nth-child(4) input", "I want to relocate gachibowli")
            .click('div.card.visible-md div.card-content div.row div:nth-child(1) button')
            .click('button[type=button]')
            .pause(5000)
            .end();
        //.setValue("div.card.visible-md div.card-content div.row div:nth-child(4) input", "I want to relocate gachibowli")


    },*/
    
   /* 'HOUSE-RENTALS_1' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .waitForElementVisible('body', 1000)
            .windowMaximize()
            .setValue('input.search', 'Gachibowli')
            .click('div.item.selected')
            .click('#slider1')
            .click('div.col-md-5 div.no-gutters div:nth-child(2) div.checkbox label input[type="checkbox"]')
            .click('#btn-search')
            .pause(1000)
        .end();

    }*/
    /*'HOUSE-RENTALS_2' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .waitForElementVisible('body', 1000)
            .windowMaximize()
            .setValue('input.search', 'Gachibowli')
            .click('div.item.selected')
            .click('input[ng-model="mover_bhk2"]')
            .click('div.col-md-5 div.no-gutters div:nth-child(2) div.checkbox label input[type="checkbox"]')
            .click('#slider1')
            .click('#btn-search')
            .pause(1000)
            .verify.urlContains('/property/search/Hyderabad/Gachibowli')
            .end();

    },
    */
   /* 'HOUSE-RENTALS_3' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .waitForElementVisible('body', 1000)
            .windowMaximize()
            .setValue('input.search', 'Gachibowli')
            .click('div.item.selected')
            .pause(1000)
            .click('input[ng-model="mover_bhk3"]')
            .pause(5000)
            .click('div.col-md-5 div.no-gutters div:nth-child(2) div.checkbox label input[type="checkbox"]')
            .click('#slider1')
            //.click('#btn-search')
            .pause(1000)
            //.verify.urlContains('/property/search/Hyderabad/Gachibowli')
            .end();

    }*/
    'HOUSE-RENTALS_4' : function (browser) {
        browser
            .url('https://www.goflytta.com/')
            .waitForElementVisible('body', 1000)
            .windowMaximize()
            .setValue('input.search', 'Gachibowli')
            .click('div.item.selected')
            .click('input[ng-model="mover_bhk3"]')
            .click('div.col-md-5 div.no-gutters div:nth-child(2) div.checkbox label input[type="checkbox"]')
            .pause(1000)
            .click('#slider1')
            .pause(1000)
            .click('#btn-search')
            .click('div.noUi-handle.noUi-handle-lower')
            .click('#favicon_5978a8a4fa81136a1aa37928')
            .pause(1000)
            .click('button[ng-click="wish_lists(); select(1)"]')
            .pause(1000)
            .click('input[name="selected"]')
            .pause(5000)
            .click('button[id="butnmrg"]')
            .pause(1000)
            .click('button[class="auth0-lock-social-button auth0-lock-social-big-button"]')
            .pause(1000)
            /*.window_handles(function(result) {
            var handle = result.value[0];
            browser.switchWindow(handle)
                    .setValue('input[type="email"]','dinesh.er007@gmail.com')
                .pause(5000)
                   .click('span.RveJvd')
               /!* .pause(5000)
                .setValue('input.whsOnd','9766157249')
                .pause(1000)
                .click('span.RveJvd')
                *!/
           })*/
        .window_handles(function(result) {
            var temp = result.value[1];
            this.switchWindow(temp)
            .setValue('input[id="identifierId"]','dinesh.er007@gmail.com')
                .pause(1000)
                .click('span.RveJvd')
                 this.switchWindow(temp)
                     .waitForElementVisible('input[type="password"]', 5000)
                .setValue('input[type="password"]','9766157249')
                .pause(1000)
                .click('span.RveJvd')

                     .pause(1000)
                     //.closeWindow(temp)
        })
           
            .window_handles(function(result) {
                var temp = result.value[0];
             this.switchWindow(temp)

            })
            .waitForElementVisible('button[ng-click="previous_Search1()"]', 5000)
            .click('button[ng-click="previous_Search1()"]')
            .pause(1000)
            .acceptAlert()
            .pause(1000)
            
           .setValue("input[placeholder='Select Date']", '13/10/2017')

            .click("//tr[@data-recordid]/span[text()='Search Text']")

            .click('ng-click="confirmpay(visit_list);"')
            .click('input[min="10"]')

    },

    /*'HOUSE-RENTALS_MAP-SEARCH' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .waitForElementVisible('body', 1000)
            .windowMaximize()
            .setValue('input.search', 'Gachibowli')
            .click('div.item.selected')
            .click('input[ng-model="mover_bhk3"]')
            .pause(1000)
            .click('div.col-md-5 div.no-gutters div:nth-child(2) div.checkbox label input[type="checkbox"]')
            .pause(1000)
            .click('#slider1')
            .pause(1000)
            .click('#btn-search')
            .click('div.noUi-handle.noUi-handle-lower')
            .pause(5000)
            .setValue('input.search','Hyderabad')
            .pause(1000)
            .click('div.item.selected')
            .pause(1000)
            .click('div.mapfiltres:nth-child(2)')
            .setValue('div.active input.search',"A S Roa Nagar")
            .click('div.menu.visible div.item.selected')
            .click('div.no-gutters div:nth-child(4)')
            .pause(1000)
            .click('.dropdown.open ul li:nth-child(1) div div.checkbox')
            .pause(1000)
            .click('div.col-md-2 span span.caret')
            .click('div.col-md-2 li:nth-child(3) div:nth-child(1) label input[type="checkbox"]')
            .waitForElementVisible('div.col-md-3 div.dropdown  span.dropdown-toggle', 10000)
            .click('div.col-md-3 div.dropdown  span.dropdown-toggle')
            .click('div.noUi-origin div.noUi-handle.noUi-handle-lower')
            .pause(1000)
            .end();

    },*/
    /*'Packers & Movers_inter-city_Without-filling-form' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .windowMaximize()
            .click('div[ng-click="selectbtn(1)"]')
            .click('#inter')
            .setValue('input.search','Bangalore')
            .click('div[ng-model="mover.city2"]')
            .pause(1000)
            .click('button.btn[style="background-color: #f0bb2f;margin-top:20px;color: #666"]')
            .pause(3000)
            .end();

    },*/
   /* 'Packers & Movers_inter-city_With-filling' : function (browser) {
        var dateValue='09/11/2017',
            timeValue= '00:04';

        browser
            .url('https://www.goflytta.com')
            .windowMaximize()
            .waitForElementVisible('div[ng-click="selectbtn(1)"]', 1000)
            .click('div[ng-click="selectbtn(1)"]')
            .waitForElementVisible('#inter', 1000)
            .click('#inter')
            .pause(1000)
            .click('div.col-md-6 div i.dropdown')
            .pause(1000)
            .click('div[data-value="vis"]')
            .pause(1000)
            .click('div.row div:nth-child(2).col-md-6 div.form-group div.ui div.text')
            .click('div.row div:nth-child(2).col-md-6 div.menu div[data-value="hyd"]')
            .click('div#mover-card i.dropdown')
            .click('div#mover-card div.menu div:nth-child(1).item')
            .pause(1000)
            .click('div[ng-model="mover.bhk1"]')
            .click('div.row div:nth-child(2).form-group div.menu div.item')
            .click('div[ng-model="mover.lift1"]')
            .click('div.row div:nth-child(3).form-group div.menu div.item')
            .click('div[ng-model="mover.ar2"]')
            .click('div:nth-child(2).col-md-6 div.menu div:nth-child(2).item')
            .pause(1000)
            .click('div[ng-model="mover.bhk2"]')
            .click('div.card-content div:nth-child(2).col-md-6 div div:nth-child(2).form-group div.menu div.item')
            .pause(1000)
            .click('div[ng-model="mover.lift2"]')
            .click('div.card-content div:nth-child(2).col-md-6 div div:nth-child(3).form-group div.menu div.item')
            .pause(5000)
            .click('button[ng-click="goMover()"]')
            .pause(1000)
            .setValue('textarea[ng-change="getcuraddr()"]','plaot no 87  est kakathya nagar .....')
            .pause(1000)
            .setValue('textarea[placeholder="Destination Address"]','sjdfkljslkjfklsj')
            .pause(1000)
           .setValue('input[ng-model="move_date"]',dateValue)
            .pause(1000)
            .setValue('input[ng-model="move_time"]',timeValue)
            .pause(1000)
            .click('button[ng-click="select_status = 1; nextfill()"]')
            .pause(1000)
            .click('input[ng-change="movecheck(Item)"]')
            .pause(1000)
            .click('button[ng-click="increment(Item)"]')
            .pause(1000)
            .click('button[ng-click="submit_basic_1()"]')
            .pause(1000)
            .click('button[data-provider="google-oauth2"]')
            .pause(5000)
            .setValue('form.RFjuSb input[id="identifierId"]','dinesh@gmail.com')
            .pause(1000)
            .click('content.CwaK9 span.RveJvd')
            
    },*/
   /* 'Packers & Movers_intra-city_without-filling' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .windowMaximize()
            .click('div[ng-click="selectbtn(1)"]')
            .click('#intra')
            .pause(1000)
            .click('i.dropdown')
            .pause(1000)
            .setValue('input.search','hyderabad')
            .pause(1000)
            .click('button.btn[style="background-color: #f0bb2f;margin-top:20px;color: #666"]')
            .pause(1000)
            .end();

    },*/
   /* 'Packers & Movers_intra-city_with-filling' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .windowMaximize()
            .click('div[ng-click="selectbtn(1)"]')
            .click('#intra')
            .pause(1000)
            .click('div.col-md-12 i.dropdown')
            .pause(1000)
            .click('div.col-md-12 div.ui div.menu div.item')
            .pause(1000)
            .click('div[ng-model="mover.ar1"]')
            .click('div.card-content div.menu div.item')
            .pause(1000)
            .click('div[ng-model="mover.bhk1"]')
            .click('div.col-md-6 div:nth-child(2).form-group div.ui div.menu div.item')
            .click('div[ng-model="mover.lift1"]')
            .click('div.col-md-6 div:nth-child(3).form-group div.ui div.menu div.item')
            .click('div[ng-model="mover.ar2"]')
            .click('div:nth-child(2).col-md-6 div:nth-child(2) div.menu div.item')
            .click('div[ng-model="mover.bhk2"]')
            
            .click('button.btn[style="background-color: #f0bb2f;margin-top:20px;color: #666"]')
            .pause(1000)

            .end();

    },*/
   /* 'Settling-in Services' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .windowMaximize()
            .click('div[ng-class="{mainbtn: isActive(2)}"]')
            .click('div[ng-click="storeServices();"]')
            .pause(1000)
            .end();

    },
    'Settling-in Services_Telecom/Internet' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .windowMaximize()
            .click('div[ng-class="{mainbtn: isActive(2)}"]')
            .click('input[ng-model="settling.telecom"]')
            .setValue('div[ng-if="settling.telecom"]','i want interconnection with wi-fi and computer appliencs.........etc')
            .click('div[ng-click="storeServices();"]')
            .setValue('#inputName','Dinesh kumar')
            .setValue('#inputEmail','dinesh@goflytta.com')
            .setValue('#inputPhone','8886267172')
            .setValue('label[for="inputCity"]','hydrabad')
            //.setValue('#inputName','Dinesh kumar')
            .pause(1000)
            .end();

    },

    'Settling-in Services' : function (browser) {
        browser
            .url('https://www.goflytta.com')
            .windowMaximize()
            .click('div[ng-class="{mainbtn: isActive(2)}"]')
            .click('input[ng-change="test();"]')
            .click('input[ng-model="settling.gas"]')
            .click('input[ng-model="settling.home"]')
            .setValue('input[id="m_info_i_3"]','i want gas connections , water fiter, stove, telephone directoy and connetions, some sleeping bed, come computers etc............')
            //.click('select[id=crm-result-visit]')
            .pause(1000)
            //.click('div[ng-show="!settling_div"]')
            //.click('div.item.selected')

            //.click('div.menu div')
            .click('button.btn[style="background-color: #f0bb2f;margin-top:20px;color: #666"]')
            .pause(1000)
            //.verify.urlContains('/property/search/Hyderabad/Gachibowli')
            .end();

    }*/
    /*'Rrquest_without_filling' : function (browser) {

            browser
                .url('https://www.goflytta.com/request')
                .windowMaximize()
                .setValue('input[ng-model="rr_name"]','lsfjjsfkjlsk;lkflsklfk')
                .setValue('input[ng-model="rr_mail"]','')
                .pause(1000)
                .setValue('input[ng-model="rr_contact"','')
                .pause(1000)
                .click('div[ng-model="rrrent"]')
                .click('div[data-value="Bachelor-Male"]')
                .click('div[ng-model="reqbhk"]')
                .click('div:nth-child(2).ui div.menu div.item')
                .pause(1000)
                .click('a[data-value="1 BHK"]')
                .click('div[ng-model="fur"]')
                .pause(1000)
                .setValue('input[ng-model="reqbud"]','')
                .click('a[data-value="Furnished"]')
                .click('form.form-floating div:nth-child(9).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="rrorgin"]')
                .click('form.form-floating div:nth-child(10).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="rrdest"')
                .click('form.form-floating div:nth-child(11).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="loc_pre_2"]')
                .click('form.form-floating div:nth-child(12).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="loc_pre_3"]')
                .click('form.form-floating div:nth-child(13).form-group div.ui div.menu div.item')
                .pause(1000)
                .setValue('input[ng-change="reqdate()"]','')
                .pause(2000)
                .pause(1000)
                .setValue('ng-model="request_query"','')
                .click('button[ng-click="req_relocation();"]')
                .end() 

       
    }

    ,
    'Rrquest_with random_filling' : function (browser) {
            browser
                .url('https://www.goflytta.com/request')
                .windowMaximize()
                .setValue('input[ng-model="rr_name"]','lsfjjsfkjlsk;lkflsklfk')
                .setValue('input[ng-model="rr_mail"]','lsfjjsfkjlsk;lkflsklfk')
                .pause(1000)
                .setValue('input[ng-model="rr_contact"','lsfjjsfkjlsk;lkflsklfk')
                .pause(1000)
                .click('div[ng-model="rrrent"]')
                .click('div[data-value="Bachelor-Male"]')
                .click('div[ng-model="reqbhk"]')
                .click('div:nth-child(2).ui div.menu div.item')
                .pause(1000)
                .click('a[data-value="1 BHK"]')
                .click('div[ng-model="fur"]')
                .pause(1000)
                .setValue('input[ng-model="reqbud"]','10000')
                .click('a[data-value="Furnished"]')
                .click('form.form-floating div:nth-child(9).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="rrorgin"]')
                .click('form.form-floating div:nth-child(10).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="rrdest"')
                .click('form.form-floating div:nth-child(11).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="loc_pre_2"]')
                .click('form.form-floating div:nth-child(12).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="loc_pre_3"]')
                .click('form.form-floating div:nth-child(13).form-group div.ui div.menu div.item')
                .pause(1000)
                .setValue('input[ng-change="reqdate()"]','30/09/2017')
                .pause(2000)
                .pause(1000)
                .setValue('ng-model="request_query"','sjfjskljflsllkflkls;k')
                .click('button[ng-click="req_relocation();"]')
                .end()

       
    },*/
  /*  'Rrquest_with correct_filling' : function (browser) {

            browser
                .url('https://www.goflytta.com/request')
                .windowMaximize()
                .setValue('input[ng-model="rr_name"]','Dinesh kuamar')
                .setValue('input[ng-model="rr_mail"]','dinesh@goflytta.com')
                .pause(1000)
                .setValue('input[ng-model="rr_contact"','8886267172')
                .pause(1000)
                .click('div[ng-model="rrrent"]')
                .click('div[data-value="Bachelor-Male"]')
                .click('div[ng-model="reqbhk"]')
                .click('div:nth-child(2).ui div.menu div.item')
                .pause(1000)
                .click('a[data-value="1 BHK"]')
                .click('div[ng-model="fur"]')
                .pause(1000)
                .setValue('input[ng-model="reqbud"]','10000')
                .click('div[ng-model="fur"]')
                .pause(1000)
                .click('form.form-floating div:nth-child(9).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="rrorgin"]')
                .click('form.form-floating div:nth-child(10).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="rrdest"')
                .click('form.form-floating div:nth-child(11).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="loc_pre_1"]')
                .click('form.form-floating div:nth-child(12).form-group div.ui div.menu div.item')
                .pause(1000)
                .click('div[ng-model="loc_pre_2"]')
                .click('form.form-floating div:nth-child(13).form-group div.ui div.menu div.item')
                .click('div[ng-model="loc_pre_3"]')
                .click('form.form-floating div:nth-child(14).form-group div.ui div.menu div.item')
                .pause(1000)
                .setValue('input[ng-change="reqdate()"]','30/09/2017')
                .pause(2000)
                .pause(1000)
                .setValue('ng-model="request_query"',' I want a 3 bhk flat in posuh condithon near by my city in hyderabad.....')
                .click('button[ng-click="req_relocation();"]')
                .pause(2000)
                .click('button[ng-click="req_start()"]')
                .pause(1000)
                .click('button[ng-click="redirect_home()"]')
                .pause(1000)
                .click('input[ng-model="mover_bhk3"]')
                .pause(1000)
                .click('div.col-md-5 div.no-gutters div:nth-child(2) div.checkbox label input[type="checkbox"]')
                .pause(1000)
                .click('#slider1')
                .pause(1000)
                .click('#btn-search')
                .click('div.noUi-handle.noUi-handle-lower')
                .pause(5000)
                .setValue('input.search','Hyderabad')
                .pause(1000)
                .click('div.item.selected')
                .pause(1000)
                .click('div.mapfiltres:nth-child(2)')
                .setValue('div.active input.search',"A S Roa Nagar")
                .click('div.menu.visible div.item.selected')
                .click('div.no-gutters div:nth-child(4)')
                .pause(1000)
                .click('.dropdown.open ul li:nth-child(1) div div.checkbox')
                .pause(1000)
                .click('div.col-md-2 span span.caret')
                .click('div.col-md-2 li:nth-child(3) div:nth-child(1) label input[type="checkbox"]')
                .waitForElementVisible('div.col-md-3 div.dropdown  span.dropdown-toggle', 10000)
                .click('div.col-md-3 div.dropdown  span.dropdown-toggle')
                .click('div.noUi-origin div.noUi-handle.noUi-handle-lower')
                .pause(1000)
                .pause(1000)
                .click('button[ng-click="wish_lists(); select(1)"]')
                .click('input[name="selected"]')
                .pause(5000)
                .click('button[id="butnmrg"]')
                .pause(5000)
                .click('button[class="auth0-lock-social-button auth0-lock-social-big-button"]')
                .pause(5000)
                .setValue('input[autocomplete="username"]', 'dinesh.er007@gmail.com')
                //.click('span.RveJvd')
                //.click('button[ng-click="previous_Search1()"]')
                .pause(1000)
                // .setValue("input[placeholder='Select Date']", '13/10/2017')

                //.click("//tr[@data-recordid]/span[text()='Search Text']")

                //.click('ng-click="confirmpay(visit_list);"')
                //.click('input[min="10"]')
                .end();


       
    },*/

   /* 'REQUEST-HOUSE-VISIT':function (browser) {
        browser
            .url('https://www.goflytta.com/property/schedule-visit')
            .pause(1000)
            .setValue('input[placeholder="Select Date"]','30/09/2017')
            .pause(1000)
            .setValue('input[placeholder="Select Time"]','14:00')
            .pause(1000)
            .click('div div:nth-child(5).col-md-12 button:nth-child(2).btn[style="background-color:#f0bb2f; margin-left:10px;"]')
            .pause(10000)
           // .verify.urlContains('https://www.goflytta.com/property/schedule-visit')
            
           

    },*/
   /* 'pay':function (browser) {
        browser
            .url('https://www.goflytta.com/property/schedule-visit')
    }
*/
}



