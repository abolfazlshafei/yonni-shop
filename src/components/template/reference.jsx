import hat from "../../assets/hat/hat11.jpg";
import guard from "../../assets/hat/guard.jpg";
import ever from "../../assets/img/Box/everlast.jpg";
import { AiOutlineOpenAI } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { GiNewShoot } from "react-icons/gi";
import te from "../../assets/img/Box/tenis.jpg";
import pic from "../../assets/img/box/new5.png";
import { Link } from "react-router-dom";

export const routes = [
  {
    icon: <DiCodeigniter />,
    icon2: <GiNewShoot />,
    img: <img src={te} />,
    name: "مت یوگا",
    title: " موجود در انبار",
    icon3: <AiOutlineOpenAI />,
    inventory: <Link>"۹۹,۰۰۰ تومان"</Link>,
    url: "",
  },
  {
    icon: <DiCodeigniter />,
    icon2: <GiNewShoot />,
    name: "مت یوگا",
    img: <img src={te} />,
    title: " موجود در انبار",
    icon3: <AiOutlineOpenAI />,
    inventory: <Link>"۹۹,۰۰۰ تومان"</Link>,
    url: "",
  },
  {
    icon: <DiCodeigniter />,
    icon2: <GiNewShoot />,
    name: "مت یوگا",
    img: <img src={te} />,
    title: " موجود در انبار",
    icon3: <AiOutlineOpenAI />,
    inventory: <Link>"۹۹,۰۰۰ تومان"</Link>,
    url: "",
  },
  {
    icon: <DiCodeigniter />,
    icon2: <GiNewShoot />,
    name: "مت یوگا",
    img: <img src={te} />,
    title: " موجود در انبار",
    icon3: <AiOutlineOpenAI />,
    inventory: <Link>"۹۹,۰۰۰ تومان"</Link>,
    url: "",
  },
  {
    icon: <DiCodeigniter />,
    icon2: <GiNewShoot />,
    name: "مت یوگا",
    img: <img src={te} />,
    title: " موجود در انبار",
    icon3: <AiOutlineOpenAI />,
    inventory: <Link>"۹۹,۰۰۰ تومان"</Link>,
    url: "",
  },
];

export const products = [
  {
    img: <img src={hat} className="size-20" />,
    name: "کلاه بوکس",
    price: "1,120,000 تومان",
    url: "/",
  },

  {
    img: <img src={guard} className="size-20" />,
    name: "نقاب کلاه بوکس",
    price: "1,000,000 تومان",
    url: "/",
  },
  {
    img: <img src={hat} className="size-20" />,
    name: "کلاه بوکس",
    price: "1,120,000 تومان",
    url: "/",
  },


  {
    img: <img src={hat} className="size-20" />,
    name: "کلاه بوکس",
    price: "1,120,000 تومان",
    url: "/",
  },
  {
    img: <img src={hat} className="size-20" />,
    name: "کلاه بوکس",
    price: "1,120,000 تومان",
    url: "/",
  },


];

export const sells = [
  {
    img: <img src={te} />,
    title: "کفش بوکس نایک",
    price: "1,795,000 تومان",
    number: "1,695,000 تومان",
  },
  {
    img: <img src={te} />,
    title: "دستکش BUKA",
    number: "3,750,000",
    price: "3,550,000",
  },
];

export const details = [
  {
    img: <img src={te} className=" size-16 rounded-full" />,

    name: "رضا احسانی فر",
    sport: "بوکس و اسلک لاین",

    title:
      "اینکه یونی شاپ از ورزشکاران حمایت میکنه نکته مثبت این فروشگاه نسبت به فروشگاه های دیگه هست و من به شخصه ترجیه میدم خریدم از این فروشگاه باشه.",

    url: "/",
    link: "مشاهده محصولات خریداری شده",
  },
  {
    img: <img src={te} className=" size-16 rounded-full" />,

    name: " احسان گندمی",
    sport: "بوکس",

    title:
      "یونی شاپ علاوه بر فروش محصولات با کیفییت  آموزش های مناسب در عرصه بوکس و موی تای را دارا هست",
    url: "/",
    link: "مشاهده محصولات خریداری شده",
  },
];

export const lasts = [
  {
    img: <img src={ever} className="size-20" />,
    title: "دستکش اورجینال",
    price: "1,200,000تومان",
    url: "/",
  },
  {
    img: <img src={ever} className="size-20" />,
    title: "دستکش اورجینال",
    price: "1,200,000تومان",
    url: "/",
  },
  {
    img: <img src={ever} className="size-20" />,
    title: "دستکش اورجینال",
    price: "1,200,000تومان",
    url: "/",
  },
  {
    img: <img src={ever} className="size-20" />,
    title: "دستکش اورجینال",
    price: "1,200,000تومان",
    url: "/",
  },
  {
    img: <img src={ever} className="size-20" />,
    title: "دستکش اورجینال",
    price: "1,200,000تومان",
    url: "/",
  },


];

export const images = [
  {
    img: (
      <Link to="/list">
        <img src={pic}  />
      </Link>
    ),
    url: "/list",
  },
  {
    img: (
      <Link to="/book">
        <img src={pic}  />
      </Link>
    ),
    url: "/book",
  },

  {
    img: <img src={pic}  />,
    url: "/",
  },

  {
    img: <img src={pic}  />,
    url: "/",
  },
  {
    img: <img src={pic}  />,
    url: "/",
  },

];

export const Menuitem =[
  {
    title : 'پوشاک رزمی',
    url:'/'
  },
  {
    title : 'پوشاگ باشگاهی',
    url:'/'
  },
  {
    title : 'لوازم رزمی',
    url:'/'
  },
  {
    title : 'لوازم باشگاهی',
    url:'/'
  },
]