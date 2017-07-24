import React, {PureComponent} from 'react';
import _ from 'lodash';

import ImageGallery from "./ImageGallery"

const GALLARY_MENU = [
    {
        title: '',
        text: 'Всё'
    },
    {
        title: 'vest',
        text: 'Жилеты и куртки'
    },
    {
        title: 't_shirts',
        text: 'Футболки и фартуки'
    },
    {
        title: 'sweatshirts',
        text: 'Кофты и регланы'
    },
    {
        title: 'baby_clothes',
        text: 'Детская одежда'
    },
    {
        title: 'prints',
        text: 'Виды нанесения'
    }
];

class Gallery extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collection: ''
        }
    };

    static displayName = 'Gallery';
    static propTypes = {};

    changedCollection(value = '') {
        this.setState({collection: value})
    }

    render() {
        let collection = this.state.collection;

        return (
            <div>
                <header id="head" className="progect"/>
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <section id="portfolio" className="page-section section appear clearfix">
                                <br />
                                <p>«ПромоМастерУкраина» предлагает комплексные решения – от разработки дизайна одежды, подбора тканей, фасонов и размеров и до нанесения логотипа Вашего предприятия. При этом мы можем нанести Ваш логотип на ткань любым из способов, применяемых в современной практике.</p>
                                <br />

                                <div className="row">
                                    <nav id="filter" className="col-md-12 text-center">
                                        <ul>
                                            {_.map(GALLARY_MENU, (value, key) =>
                                                <li key={key}>
                                                    <a className={`btn-theme btn-small ${value.title === collection ? 'current' : ''}`}
                                                       onClick={e => ::this.changedCollection(value.title)}>
                                                    {value.text}
                                                    </a>
                                                </li>
                                            )}
                                        </ul>
                                    </nav>
                                    <div className="col-md-12">
                                        <div className="row">
                                            <div className="portfolio-items isotopeWrapper clearfix" id="3">
                                                <ImageGallery collection={collection}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
export default Gallery;