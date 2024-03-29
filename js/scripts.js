/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
//


const bibs = `
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

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    InsertPublications();


    // Fill publication list
    function InsertPublications(){
        var ul = document.getElementById("list_publications")
        entries =  toJSON(bibs)
        entries.forEach(e => {
            var author = e.entryTags.author;
            var list_entries = [e.entryTags.title, e.entryTags.booktitle, e.entryTags.publisher, e.entryTags.year
            ];

            var li = document.createElement("li")
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
});
