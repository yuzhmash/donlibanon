import {useEffect} from "react"
import { useTranslation } from 'react-i18next';

import kafta from '../../assets/menu/kafta.jpg'
import crispykyckling from '../../assets/menu/crispykyckling.jpg'
import spett from '../../assets/menu/spett.jpg'
import friterad from '../../assets/menu/friterad.jpg'

import shawarma from '../../assets/menu/shawarma.jpg'
import sujuk from '../../assets/menu/sujuk.jpg'

import granatäpplesalad from '../../assets/menu/granatapplesalad.jpg'
import falafelsallad from '../../assets/menu/falafelsallad.jpg'
import halloumisallad from '../../assets/menu/halloumisallad.jpg'

import nuggets from '../../assets/menu/nuggets.jpg'
import crispybarn from '../../assets/menu/crispybarn.jpg'
import falafeltallrik from '../../assets/menu/falafeltallrik.jpg'

import bucket from '../../assets/menu/bucket.jpg'

import hummus from '../../assets/menu/hummus.jpg'
import tabouli from '../../assets/menu/tabouli.jpg'
import babaghanoj from '../../assets/menu/babaghanoj.jpg'
import tzatziki from '../../assets/menu/tzatziki.jpg'
import falafel from '../../assets/menu/falafel.jpg'
import vitlöksbröd from '../../assets/menu/garlic-bread.jpg'
import mhamra from '../../assets/menu/mhamra.jpg'
import bruschetta from '../../assets/menu/bruschetta.jpg'
import kubbeh from '../../assets/menu/kubbeh.jpg'
import sambosa from '../../assets/menu/sambosa.jpg'
import oliver from '../../assets/menu/oliver.jpg'
import friteradhalloumi from '../../assets/menu/friteradhalloumi.jpg'
import dolmar from '../../assets/menu/dolmar.jpg'

import './MenuList.sass'

const MenuList = () => {

    const { t } = useTranslation();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    const dishes = [
        {title: "Tallrikar", name: "plates",  dishes: [
            {img: kafta, title: "KAFTA SPETT", ingredient: "köttfärsspett med lök, persilja och libanesiska skyddor, strips eller ris och orientalisk vitlök", price: "160  kr"},
            {img: spett, title: "KYCKLINGSPETT", ingredient: "marinerade kyckling grillspett, libanesiska kryddor, strips eller ris och orientalisk vitlök", price: "160  kr"},
            {img: crispykyckling, title: "CRISPY KYCKLING", ingredient: "kycklingfile med pommes och västerbottendressing (4 st)", price: "160  kr"},
            {img: friterad, title: "FRITERAD KYCKLING", size: "100g", ingredient: "friterad kyckling med crispers potato och vitlökssås (4 st)", price: "140  kr"}
        ]},
        {title: "Rullar", name: "wraps",  dishes: [
            {img: shawarma, title: "SHAWARMA", ingredient: "marinerade kycklingstrimlor, saltgurka med strips och vitlökssås", price: "120  kr"},
            {img: sujuk, title: "SHAWARMA SUJUK", ingredient: "bra medium libanesiskt kryddat kött, saltgurka, tomat, strips och vitlökssås", price: "120  kr"},
            {img: crispykyckling, title: "FALAFEL RULLE", ingredient: "vitlökssås, sallad, tomat, gurka, lök och strips", price: "100  kr"},
        ]},
        {title: "Sallader", name: "salads", dishes: [
            {img: granatäpplesalad, title: "SALLAD MED GRANATÄPPLE OCH AVOKADO", ingredient: "med frisse, frillice, rose och lollo rosso", price: "130  kr"},
            {img: falafelsallad, title: "FALAFEL SALLAD", ingredient: "med tomat, gurka pepperoni, lök, vitlöksdrissning (5 st)", price: "100  kr"},
            {img: halloumisallad, title: "HALLOUMI SALLAD", ingredient: "med tomat gurka sour cream", price: "130  kr"},
        ]},
        {title: "Barn meny", name: "kidsMenu", dishes: [
            {img: crispybarn, title: "CRISPY KYCKLING", ingredient: "kycklingfile med pommes och västerbottendressing (2 st)", price: "80  kr"},
            {img: nuggets, title: "NUGGETS", ingredient: "kyckling nuggets med strips och vitlöksås (6 st)", price: "80  kr"},
            {img: falafeltallrik, title: "FALAFEL TALLRIK", ingredient: "med pommes, grönsaker och vitlökssås (6 st)", price: "80  kr"},
        ]},
        {title: "Bucket", name: "bucket", dishes: [
            {img: bucket, title: "BUCKET", ingredient: "broastedmfried chicken (8, 12, 16) med coleslaw, crispers potato, vitlökssås och bbq sås", price: "S:250/M:350/L:450  kr"}
        ]},
        {title: "Friterad kyckling", name: "friedChicken", dishes: [
            {img: friterad, title: "FRITERAD KYCKLING", ingredient: "friterad kyckling med crispers potato och vitlökssås (4 st)", price: "140  kr"}
        ]},
        {title: "Meza", name: "meza", dishes: [
            {img: hummus, price: "40 kr"},
            {img: tabouli, price: "50 kr"},
            {img: babaghanoj, price: "40 kr"},
            {img: tzatziki, price: "40 kr"},
            {img: falafel, price: "40 kr"},
            {img: vitlöksbröd, price: "50 kr"},
            {img: mhamra, price: "50  kr"},
            {img: bruschetta, price: "50  kr"},
            {img: kubbeh, price: "60  kr"},
            {img: sambosa, price: "50  kr"},
            {img: oliver, price: "40  kr"},
            {img: friteradhalloumi, price: "60  kr"},
            {img: dolmar, price: "50  kr"},
        ]}
    ]

    const dishesList = dishes.map(({dishes, name}, i) => {
        return (
            <div key={i} id={name} className="menu__wrapper">
                <h2 className="menu__title">
                    {t(`navbar.${name}`)}
                </h2>
                <div className='menu__blocks' key={`${name + i}`}>
                    {dishes.map(({img, title, price}, index) => {
                        return (
                            <div key={`${title} ${index}`} className="menu__block">
                                <div className='menu__img'>
                                    <img src={img} alt={title} />
                                </div>
                                <h2 className='menu__blocks__title'>
                                    {t(`menu.${name}.${[index]}.title`)}
                                </h2>
                                <div className='menu__ingredient'>
                                    {t(`menu.${name}.${[index]}.ingredient`)}
                                </div>
                                {/* <div className='menu__info'> */}
                                    {/* <div className='menu__size'>
                                        {size}
                                    </div> */}
                                    <div className='menu__price'>
                                        {price}
                                    </div>
                                {/* </div> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <View dishesList={dishesList} />
    )
}

const View = ({dishesList}) => {
    return (
        <div className="menu">
            <div className="container">
                {dishesList}
            </div>
        </div>
    )
}

export default MenuList;