/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//
includeHTML();

const bibs = `
@article{Ribeiro_Comarela_Rocha_Mota_2024, 
title={Towards a Framework to Evaluate Generative Time Series Models for Mobility Data Features}, 
volume={15}, url={https://journals-sol.sbc.org.br/index.php/jisa/article/view/3887}, 
DOI={10.5753/jisa.2024.3887}, 
abstractNote={&amp;lt;p&amp;gt;Understanding human mobility has implications for several areas, such as immigration, disease control, mobile networks performance, and urban planning. However, gathering and disseminating mobility data face challenges such as data collection, handling of missing information, and privacy protection. An alternative to tackle these problems consists of modeling raw data to generate synthetic data, preserving its characteristics while maintaining its privacy. Thus, we propose MobDeep, a unified framework to compare and evaluate generative models of time series based on mobility data features, which considers statistical and deep learning-based modeling. To achieve its goal, MobDeep receives as input statistical or Generative Adversarial Network-based models (GANs) and the raw mobility data, and outputs synthetic data and the metrics comparing the synthetic with the original data. In such way, MobDeep allows evaluating synthetic datasets through qualitative and quantitative metrics. As a proof-of-concept, MobDeep implements one classical statistical model (ARIMA) and three GANs models. To demonstrate MobDeep on distinct mobility scenarios, we considered an open dataset containing information about bicycle rentals in US cities and a private dataset containing information about a Brazilian metropolis’s urban traffic. MobDeep allows observing how each model performs in specific scenarios, depending on the characteristics of the mobility data. Therefore, by using MobDeep researchers can evaluate their resulting models, improving the fidelity of the synthetic data regarding the original dataset.&amp;lt;/p&amp;gt;}, 
number={1}, 
journal={Journal of Internet Services and Applications}, 
author={Iran Freitas Ribeiro and Giovanni Comarela and Antonio A. A. Rocha and Vinícius F. S. Mota}, 
year={2024}, 
month={Aug.}, 
pages={258–272} }

@article{SARMENTO2024101050,
title = {Forecasting energy power consumption using federated learning in edge computing devices},
journal = {Internet of Things},
volume = {25},
pages = {101050},
year = {2024},
issn = {2542-6605},
doi = {https://doi.org/10.1016/j.iot.2023.101050},
url = {https://www.sciencedirect.com/science/article/pii/S2542660523003736},
author = {Eduardo Montagner de Moraes Sarmento and Iran Freitas Ribeiro and Pablo Rafael Neves Marciano and Yrui Giovan Neris and Helder Roberto de Oliveira Rocha and Vinícius Fernandes Soares Mota and Rodolfo da Silva Villaça},
keywords = {Federated learning, Forecasting energy consumption, Privacy requirements, Edge computing, GANs, Dataset augmentation},
abstract = {Several studies in the literature propose using machine learning algorithms to forecast consumers’ energy consumption. However, such data is sensitive and has privacy constraints. On the other hand, federated learning is a technique in which the training of machine learning algorithms is performed locally, where the data is generated. In this context, this article presents a hybrid neural network architecture, named CNN-LSTM FED, trained using the public Smart* and The Building Data Genome Project 2 datasets. Additionally, an augmented Smart* dataset was generated using Generative Adversarial Networks (GANs). The performance of CNN-LSTM FED was evaluated by comparing it against the MultiLayer Perceptron (MLP), which serves as a baseline, and against a non-federated version of the CNN-LSTM FED, named CNN-LSTM. Our approach was able to generalize the model even when less than 1% of buildings participated in the modeling process, forecasting with good results the energy consumption of other buildings. Furthermore, the deployment of this architecture in an edge computing device, with limited computational resources for training, is evaluated.}
}


@inproceedings{ribeiro2024geracao,
    title={Geração de Dados de Ataque em Internet das Coisas utilizando Redes Generativas Adversarias},
    author={Iran F Ribeiro and Guilherme Brotto and Giovanni Comarela and Vinícius F.S. Mota},
    booktitle={Anais do VI Workshop de Computação Urbana},
    pages={xxx--xxx},
    year={2024},
    organization={SBC}
}

@inproceedings{sbrc,
    author = {Tiago Araujo and Iran Ribeiro and Vinícius Mota},
    title = {Covid19-Fast-Check: Uma abordagem Internet das Coisas Aplicada à Saúde para pré-triagem hospitalar do coronavírus},
    booktitle = {Anais do XLI Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos},
    location = {Brasília/DF},
    year = {2023},
    keywords = {},
    issn = {2177-9384},
    pages = {518--531},
    publisher = {SBC},
    address = {Porto Alegre, RS, Brasil},
    doi = {10.5753/sbrc.2023.397},
    url = {https://sol.sbc.org.br/index.php/sbrc/article/view/24562}
}
   
@inproceedings{ribeiro2023evaluating,
    title={Evaluating Weather Influence on User Participation in a Crowd-sensing Application},
    author={Iran F Ribeiro and Calmon, Vitor F and Silva, Thiago H and Santos, Celso AS and Vinícius F.S. Mota},
    booktitle={2023 International Conference on Computing, Networking and Communications (ICNC)},
    pages={523--528},
    year={2023},
    organization={IEEE}
  }

@article{ribeiro2022geraccao,
    title={Geração de Séries Temporais Utilizando Redes Generativas Adversárias: da Teoria à Prática},
    author={Iran F Ribeiro and Krohling, Breno and Comarela, Giovanni and Mota, Vin{\'\i}cius FS},
    journal={Sociedade Brasileira de Computação},
    year={2022}
  }

@inproceedings{ribeiro2022chove,
    title={Chove lá fora, alerta aqui dentro: Uma análise de Alertas de Problemas de Trâansito em Sensoriamentos Participativos},
    author={Iran F Ribeiro and Vitor F Calmon and Thiago H Silva and Mota, Vinícius F.S. Mota},
    booktitle={Anais do VI Workshop de Computação Urbana},
    pages={182--195},
    year={2022},
    organization={SBC}
}


@inproceedings{ribeiro2021abordagem,
    title={Uma abordagem para geração de séries temporais de mobilidade urbana baseada em aprendizado profundo},
    author={ Iran F Ribeiro and Gabriel Simoura and Heitor S Ramos,  and Giovanni Comarela, and Vinícius F.S. Mota},
    booktitle={Anais do V Workshop de Computação Urbana},
    pages={251--264},
    year={2021},
    organization={SBC}
  }

@inproceedings{ribeiro2021mobility,
    title={Mobility and community detection based on topics of interest},
    author={Iran Ribeiro and Lucas Castanheira and  Alberto Schaeffer-Filho and Weverton Cordeiro and Vinícius Mota},
    booktitle={2021 IEEE 18th Annual Consumer Communications \& Networking Conference (CCNC)},
    pages={1--6},
    year={2021},
    organization={IEEE}
  }

@inproceedings{sbrc,
    author = {Iran Ribeiro and Lucas Castanheira and Alberto Schaeffer-Filho and Weverton Cordeiro and Vinícius Mota},
    title = {Caracterização de Mobilidade e Detecção de Comunidades baseadas em Tópicos de Interesse},
    booktitle = {Anais do XXXVIII Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos},
    location = {Rio de Janeiro},
    year = {2020},
    keywords = {},
    issn = {2177-9384},
    pages = {603--616},
    publisher = {SBC},
    address = {Porto Alegre, RS, Brasil},
    doi = {10.5753/sbrc.2020.12312},
    url = {https://sol.sbc.org.br/index.php/sbrc/article/view/12312}
   }
`

function BibtexParser() {

    this.months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
    this.notKey = [',','{','}',' ','='];
    this.pos = 0;
    this.input = "";
    this.entries = new Array();

    this.currentEntry = "";

    this.setInput = function(t) {
        this.input = t;
    };

    this.getEntries = function() {
        return this.entries;
    };

    this.isWhitespace = function(s) {
        return (s == ' ' || s == '\r' || s == '\t' || s == '\n');
    };

    this.match = function(s, canCommentOut) {
        if (canCommentOut == undefined || canCommentOut == null)
            canCommentOut = true;
        this.skipWhitespace(canCommentOut);
        if (this.input.substring(this.pos, this.pos + s.length) == s) {
            this.pos += s.length;
        } else {
            throw TypeError("Token mismatch: match", "expected " + s + ", found "
                    + this.input.substring(this.pos));
        };
        this.skipWhitespace(canCommentOut);
    };

    this.tryMatch = function(s, canCommentOut) {
        if (canCommentOut == undefined || canCommentOut == null)
            canCommentOut = true;
        this.skipWhitespace(canCommentOut);
        if (this.input.substring(this.pos, this.pos + s.length) == s) {
            return true;
        } else {
            return false;
        };
        this.skipWhitespace(canCommentOut);
    };

    /* when search for a match all text can be ignored, not just white space */
    this.matchAt = function() {
        while (this.input.length > this.pos && this.input[this.pos] != '@') {
            this.pos++;
        };

        if (this.input[this.pos] == '@') {
            return true;
        };
        return false;
    };

    this.skipWhitespace = function(canCommentOut) {
        while (this.isWhitespace(this.input[this.pos])) {
            this.pos++;
        };
        if (this.input[this.pos] == "%" && canCommentOut == true) {
            while (this.input[this.pos] != "\n") {
                this.pos++;
            };
            this.skipWhitespace(canCommentOut);
        };
    };

    this.value_braces = function() {
        var bracecount = 0;
        this.match("{", false);
        var start = this.pos;
        var escaped = false;
        while (true) {
            if (!escaped) {
                if (this.input[this.pos] == '}') {
                    if (bracecount > 0) {
                        bracecount--;
                    } else {
                        var end = this.pos;
                        this.match("}", false);
                        return this.input.substring(start, end);
                    };
                } else if (this.input[this.pos] == '{') {
                    bracecount++;
                } else if (this.pos >= this.input.length - 1) {
                    throw TypeError("Unterminated value: value_braces");
                };
            };
            if (this.input[this.pos] == '\\' && escaped == false)
                escaped = true;
            else
                escaped = false;
            this.pos++;
        };
    };

    this.value_comment = function() {
        var str = '';
        var brcktCnt = 0;
        while (!(this.tryMatch("}", false) && brcktCnt == 0)) {
            str = str + this.input[this.pos];
            if (this.input[this.pos] == '{')
                brcktCnt++;
            if (this.input[this.pos] == '}')
                brcktCnt--;
            if (this.pos >= this.input.length - 1) {
                throw TypeError("Unterminated value: value_comment", + this.input.substring(start));
            };
            this.pos++;
        };
        return str;
    };

    this.value_quotes = function() {
        this.match('"', false);
        var start = this.pos;
        var escaped = false;
        while (true) {
            if (!escaped) {
                if (this.input[this.pos] == '"') {
                    var end = this.pos;
                    this.match('"', false);
                    return this.input.substring(start, end);
                } else if (this.pos >= this.input.length - 1) {
                    throw TypeError("Unterminated value: value_quotes", this.input.substring(start));
                };
            }
            if (this.input[this.pos] == '\\' && escaped == false)
                escaped = true;
            else
                escaped = false;
            this.pos++;
        };
    };

    this.single_value = function() {
        var start = this.pos;
        if (this.tryMatch("{")) {
            return this.value_braces();
        } else if (this.tryMatch('"')) {
            return this.value_quotes();
        } else {
            var k = this.key();
            if (k.match("^[0-9]+$"))
                return k;
            else if (this.months.indexOf(k.toLowerCase()) >= 0)
                return k.toLowerCase();
            else
                throw "Value expected: single_value" + this.input.substring(start) + ' for key: ' + k;

        };
    };

    this.value = function() {
        var values = [];
        values.push(this.single_value());
        while (this.tryMatch("#")) {
            this.match("#");
            values.push(this.single_value());
        };
        return values.join("");
    };

    this.key = function(optional) {
        var start = this.pos;
        while (true) {
            if (this.pos >= this.input.length) {
                throw TypeError("Runaway key: key");
            };
                            // а-яА-Я is Cyrillic
            //console.log(this.input[this.pos]);
            if (this.notKey.indexOf(this.input[this.pos]) >= 0) {
                if (optional && this.input[this.pos] != ',') {
                    this.pos = start;
                    return null;
                };
                return this.input.substring(start, this.pos);
            } else {
                this.pos++;

            };
        };
    };

    this.key_equals_value = function() {
        var key = this.key();
        if (this.tryMatch("=")) {
            this.match("=");
            var val = this.value();
            key = key.trim()
            return [ key, val ];
        } else {
            throw TypeError("Value expected, equals sign missing: key_equals_value",
                 this.input.substring(this.pos));
        };
    };

    this.key_value_list = function() {
        var kv = this.key_equals_value();
        this.currentEntry['entryTags'] = {};
        this.currentEntry['entryTags'][kv[0]] = kv[1];
        while (this.tryMatch(",")) {
            this.match(",");
            // fixes problems with commas at the end of a list
            if (this.tryMatch("}")) {
                break;
            }
            ;
            kv = this.key_equals_value();
            this.currentEntry['entryTags'][kv[0]] = kv[1];
        };
    };

    this.entry_body = function(d) {
        this.currentEntry = {};
        this.currentEntry['citationKey'] = this.key(true);
        this.currentEntry['entryType'] = d.substring(1);
        if (this.currentEntry['citationKey'] != null) {
            this.match(",");
        }
        this.key_value_list();
        this.entries.push(this.currentEntry);
    };

    this.directive = function() {
        this.match("@");
        return "@" + this.key();
    };

    this.preamble = function() {
        this.currentEntry = {};
        this.currentEntry['entryType'] = 'PREAMBLE';
        this.currentEntry['entry'] = this.value_comment();
        this.entries.push(this.currentEntry);
    };

    this.comment = function() {
        this.currentEntry = {};
        this.currentEntry['entryType'] = 'COMMENT';
        this.currentEntry['entry'] = this.value_comment();
        this.entries.push(this.currentEntry);
    };

    this.entry = function(d) {
        this.entry_body(d);
    };

    this.alernativeCitationKey = function () {
        this.entries.forEach(function (entry) {
            if (!entry.citationKey && entry.entryTags) {
                entry.citationKey = '';
                if (entry.entryTags.author) {
                    entry.citationKey += entry.entryTags.author.split(',')[0] += ', ';
                }
                entry.citationKey += entry.entryTags.year;
            }
        });
    }

    this.bibtex = function() {
        while (this.matchAt()) {
            var d = this.directive();
            this.match("{");
            if (d.toUpperCase() == "@STRING") {
                this.string();
            } else if (d.toUpperCase() == "@PREAMBLE") {
                this.preamble();
            } else if (d.toUpperCase() == "@COMMENT") {
                this.comment();
            } else {
                this.entry(d);
            }
            this.match("}");
        };

        this.alernativeCitationKey();
    };
};



function includeHTML() {
        var z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("w3-include-html");
            if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("w3-include-html");
                includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
            }
        }
        }

$(document).ready(function(){

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = $('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = $('.navbar-toggler');

    // Seleciona os links de navegação responsivos
    const responsiveNavItems = $('#navbarResponsive .nav-link');

    
    // Adiciona um listener de clique a cada um dos links selecionados
    responsiveNavItems.on('click', function() {
        // Verifica se o toggler está visível (indicando que o menu responsivo está ativo)
        // O pseudo-seletor :visible é uma forma comum do jQuery de verificar se um elemento está sendo exibido
        if (navbarToggler.is(':visible')) {
            // Simula um clique no toggler para fechar a navbar
            navbarToggler.click();
        }
        // Se o toggler não estiver visível, significa que estamos na versão desktop
        // e não precisamos fazer nada, o link navegará normalmente.
    });

    // URL do seu endpoint que retorna JSON
    const urlDoJson = './data.json'; // Caminho relativo para o arquivo

    // Inicia a requisição fetch
    fetch(urlDoJson)
      .then(response => {
        // A primeira Promise resolve com o objeto Response
        // Verificamos se a resposta foi bem-sucedida (status 2xx)
        if (!response.ok) {
          // Se não foi sucesso, lançamos um erro para o .catch()
          throw new Error('Erro na rede ou resposta do servidor não OK: ' + response.statusText);
        }
        // Se foi sucesso, chamamos .json() que retorna outra Promise com os dados parseados
        return response.json();
      })
      .then(data => {
        // A segunda Promise resolve com os dados JSON parseados (objeto/array JS)
        
        fill_about(data);
        fill_experiences(data);
        fill_education(data);
        InsertPublications();
        
      })
      .catch(error => {
        // O .catch() lida com erros de rede OU erros lançados nos .then() anteriores
        console.error("Ocorreu um erro ao carregar o JSON:", error);
        resultadoDiv.innerHTML = `<p style="color: red;">Erro ao carregar os dados: ${error.message}</p>`;
      });

    


    // Fill publication list
    function InsertPublications(){
        var ul = $("#list_publications");
        entries =  toJSON(bibs)
        entries.forEach(e => {
            var author = e.entryTags.author;
            var list_entries = [e.entryTags.title, e.entryTags.booktitle, e.entryTags.publisher, e.entryTags.year
            ];

            var li = document.createElement("li");
            var pub = get_autores(author);
            list_entries.forEach(key_entrie => {
                if (!(key_entrie === undefined)){
                    pub+=". "+key_entrie;
                }                
            });            
            pub+=".";
            li.appendChild(document.createTextNode(pub));
            li.setAttribute('class', "mb-2")
            ul.append(li);
        });
    }

    function toJSON(bibtex){
        var b = new BibtexParser();
        b.setInput(bibtex);
        b.bibtex();
        return b.entries;
    }

    function get_autores(authors){
        /**
         * Split authors names
         */
        var lista_autores = authors.split('and');
        var author_names = ""
        if (lista_autores.length>3){
            var nome_sobrenome = lista_autores[0].trim().split(" ")
            author_names+=nome_sobrenome.slice(-1)+", "+nome_sobrenome[0]+", et al"
        } else{
            lista_autores.forEach(author_name => {
                author_name = author_name.trim()    
                first_second = author_name.split(" ")
                first_nm_initial = first_second[0][0]
                last = first_second.slice(-1)
                if (author_name==lista_autores.slice(-1)[0].trim()){
                    author_names+=last + ", " + first_nm_initial;
                }else{
                    author_names+=last + ", " + first_nm_initial + "; ";
                }                
            });
        }
        return author_names;
    }

    function fill_about(data){

        map_icons = {
            'linkedin':'fab fa-linkedin-in',
            'researchgate':'fa-brands fa-researchgate',
            'orcid':'fa-brands fa-orcid',
            'github':'fab fa-github',
            'googlescholar':'fa-solid fa-graduation-cap',
        }

        first = data.name.first;
        last  = data.name.last;
        complete_name = first + " " +last;
         
        $("#name_toggle").text(complete_name);
        $("#first").text(first);
        $("#last").text(last);

        $("#address").text(data.contact.address);

        email = data.contact.email;
        $("#email").text(email);
        $("#email").prop("href", "mailto:"+email);

        $("#shortbio").text(data.shortbio);

        socials = data.contact.socials;
        list_socials = $("#socials");
        for (let key in socials) {
            novolink = '<a class="social-icon" id="'+ key +'"href="'+socials[key]+'"><i class="'+map_icons[key]+'"></i></a>';            
            list_socials.append(novolink);
        }
    }

    function fill_experiences(data){
        experience = data.experience;
        div_experience = $("#experience_list");
        div_experience.empty();
        for (let key in experience){
            company_name = experience[key].company.name;
            company_address = experience[key].company.address;
            activities = experience[key].activities;
            start = experience[key].company.start;
            end   = experience[key].company.end;
            var div = '<div class="d-flex flex-column flex-md-row justify-content-between"><div class="flex-grow-1">';
            div += '<h3 class="mb-0">'+key+'</h3>';
            div +='<div class="subheading mb-3">'+company_name + ' - '+company_address+'</div>';
            div +='<p>'+activities+'</p></div>';
            div +='<div class="flex-shrink-0"><span class="text-primary">'+ start +' - '+ end +'</span></div></div>';
            
            div_experience.append(div);
        }        
    }

    function fill_education(data){
        education = data.education;
        div_education = $("#education_list");
        // div_education.empty();
        for (let key in education){
            university = education[key]['university'];
            title = education[key]['title'];
            start = education[key]['start'];
            end   = education[key]['end'];            

            var div = '<div class="d-flex flex-column flex-md-row justify-content-between mb-5">';
            div += '<div class="flex-grow-1">';
            div += '<h3 class="mb-0">'+ university +'</h3>';
            div += '<div class="subheading mb-3">'+ title +'</div></div>';
            div += '<div class="flex-shrink-0"><span class="text-primary">'+ start +' - ' + end +'</span></div></div>';
            div_education.append(div);
        }
    }   
});
