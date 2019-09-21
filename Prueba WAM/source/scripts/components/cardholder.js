const cardholder = {
    name: 'cardholder',
    template: //html
    `<div class="main-container">
        <div class="main-container__header">
            <h1 class="headerTitle">What we do</h1>
            <h2 class="headerSubtitle">We become your strategic partner - not just a provider</h2>
        </div>
        <div class="container --four-columns">
            <div 
                class="card-wrapper" 
                v-for="(card, index) in cards"
                @mouseover="AddBackground(index + 1)"
                @mouseleave="SaveBackground(index + 1)"
            >
                <div class="card">
                    <div class="card__logo"></div>
                    <h1 class="card__title">{{card.cardTitle}}</h1>
                    <ul class="card-list">
                        <li 
                            class="card-list__item" 
                            v-for="cardLink in card.cardLink"
                        >
                            <a class="card-list__link" :href="cardLink.linkURL">{{cardLink.linkName}}</a>
                        </li>
                    </ul>
                </div>
                <div class="card-wrapper__bg"></div>
            </div>
        </div>
        <div class="button-container">
            <button class="button-container__button --buttonCTA">
                <span class="button-text">ALL OUR SERVICES</span>
            </button>
        </div>
    </div>`,
    data: function() {
        return {
            currentBackground: '',
            body: document.querySelector('body'),
            cards: [
                {
                    cardTitle: 'Marketing Strategies',
                    cardLink: [
                        {
                            linkName: 'Branding',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Digital Customer Experience',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Sales Enablement',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Inbound Marketing',
                            linkURL: '/'
                        }
                    ]
                },
                {
                    cardTitle: 'Creative & Development',
                    cardLink: [
                        {
                            linkName: 'Web Development',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Desing Thinking',
                            linkURL: '/'
                        },
                        {
                            linkName: 'UX',
                            linkURL: '/'
                        },
                        {
                            linkName: 'E-commerce',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Mobile & Web Apps',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Communities',
                            linkURL: '/'
                        }
                    ]
                },
                {
                    cardTitle: 'Intergated Marketing',
                    cardLink: [
                        {
                            linkName: 'Search (SEO)',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Content Marketing',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Social Media Marketing',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Email Marketing',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Digital PR',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Conversion Rate Optimization (CRO)',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Paid Media',
                            linkURL: '/'
                        }
                    ]
                },
                {
                    cardTitle: 'Scaling Technology',
                    cardLink: [
                        {
                            linkName: 'CRM',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Business Intelligence & Analitycs',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Artificial Intelligence for Marketing and Sales',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Salesforce Data Management Platform (DMP)',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Onternet of Things (IoT)',
                            linkURL: '/'
                        },
                        {
                            linkName: 'Marketing Automation',
                            linkURL: '/'
                        }
                    ]
                }
            ]
        };
    },
    methods: {
        AddBackground(index) {
            let newBg = `background${index}`;
            let currentBg = this.currentBackground;

            if(currentBg === '') {
                this.body.classList.add(newBg);
            } else if(currentBg != newBg){
                this.body.classList.add(newBg);
                this.body.classList.remove(currentBg);
            } 
        },
        SaveBackground(index) {
            this.currentBackground = `background${index}`;
        },
    }
};

export default cardholder;
