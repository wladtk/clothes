import React, {PureComponent} from 'react';

class Tailoring extends PureComponent {
    constructor(props) {
        super(props);
    };

    static displayName = 'Tailoring';
    static propTypes = {};

    componentDidMount() {document.title = "Пошив одежды";};

    render() {
        return (
            <div>
                {/*<header id="head" className="poh_od"/>*/}

                <img src={require("../../img/images_header/011a.jpg")} className="header-images"/>
                <img src={require("../../img/images_header/h_005.jpg")} className="header-images-mobile"/>

                <div className="container">
                    <div className="row">
                        <section className="col-sm-12 maincontent">
                            <br/>
                            <br/>
                            <p>
                                Корпоративная одежда – важнейший фактор визуализации высоких внутренних стандартов компании. Внешний вид Ваших сотрудников, а не только их профессиональные и деловые качества, – важнейшая составляющая образа фирмы, впечатления, которое она производит. Во что одеты люди в офисе, одежда для охраны, поварская форма и даже фартуки для официантов важны – они создают информационный посыл для Ваших клиентов и деловых партнеров. Когда этот образ вызывает положительные эмоции, Ваш бизнес процветает. Если он не вызывает доверия, не задает активный, энергичный ритм для результативных служебных достижений – это тревожный сигнал. Рекламно-производственная компания «ПромоМастерУкраина» профессионально разработает дизайн корпоративной одежды с учетом специфики Вашего бизнеса, сделает необходимые акценты на детали. И всё это быстро и качественно!
                            </p>
                            <p>
                                Минимально возможный заказ – от пяти единиц продукции любого вида, срок производства – от трех рабочих дней.
                                Пошив одежды на заказ – это не дань моде, а производственная необходимость для серьезных компаний, заботящихся о развитии своего бренда. Многолетний опыт производства в сочетании с широким выбором тканей и фурнитуры, которую мы закупаем по оптовым ценам у ведущих производителей Украины, обеспечивает высокое качество и лояльные цены.
                            </p>
                            <p>
                                Наши деловые партнеры – такие известные ведущие текстильные компании на рынке Украины, как «Текстиль-Контакт», «Гранд-текстиль», Торговый Дом «Химмельтек-Украина», фирма «Море Ткани» и др. Поэтому мы с уверенностью и говорим о
                            </p>
                            <ul>
                                <li>•     самом широком ассортименте тканей и фурнитуры в Украине</li>
                                <li>•     его высоком качестве (продукция сертифицирована)</li>
                                <li>•     огромном выборе расцветок и фактур</li>
                                <li>•     регулярном обновлении ассортимента.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        )
    }
}
export default Tailoring;