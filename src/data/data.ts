import type { LinkType } from "../types/types"
export const HeaderData: LinkType[] = [
    {
        title: "الرئيسية",
        path: "/"
    },
    {
        title: "من نحن",
        path: "AboutUs.html"
    },
    {
        title: "المعالم السياحية",
        path: "TouristView.html"
    },
    {
        title: "الجولات السياحية",
        path: "ViewTours.html"
    },
    {
        title: " جدول الرحلات ",
        path: "cart.html"
    }
];
// swiper
import type { SwiperType } from "../types/types";
import Img_1 from "@assets/slider/1.png";
import Img_2 from "@assets/slider/2.png";
import Img_3 from "@assets/slider/3.png";
export const SwiperData: SwiperType[] = [
    {
        title: 'سنساعدك علي اكتشاف العالم ',
        img: Img_1,
        des: "اكتشف المعالم الأثرية الأكثر شهرة وتاريخية في العالم مع العجائب الأثرية. انطلق في رحلة عبر الزمن والثقافة بينما نستكشف الهياكل الرائعة التي صمدت أمام اختبار الزمن، وشهدت على النسيج الغني للحضارة الإنسانية."
    },
    {
        title: 'كشف قصص الماضي',
        img: Img_2,
        des: "سواء كنت مسافرًا متمرسًا أو مستكشفًا على كرسي بذراعين،أثري يوفر لك رؤى قيمة ونصائح سفر لمساعدتك في التخطيط لمغامرتك القادمة. اكتشف الجواهر المخفية والكنوز الأقل شهرة والوجهات البعيدة عن الطرق التي ستثري رحلتك وتخلق ذكريات لا تُنسى."
    },
    {
        title: 'خطط لمغامرتك القادمة',
        img: Img_3,
        des: "يحكي كل نصب تذكاري قصة تعكس معتقدات وتطلعات وإنجازات المجتمعات التي بنتها. انغمس في تاريخ هذه الكنوز الثقافية وأهميتها، واكتشف القصص الرائعة وراء بنائها والحفاظ عليها وأهميتها الثقافية."
    }
]
//card
import type { CardType } from "../types/types";
export const CardData:CardType []=[
    {
        title:"معبد ابوسبل",
        price:"150 ر.س",
        place:"الاقصر",
        img:Img_1,
        des:"  يعد معبد ابوسبل احد الاثار المصرية المميزة التي تتميز بجمالها ودقة تصميمها  " 
    },
    {
        title:" الاهرامات المصرية",
        price:"180 ر.س",
        place:"الجيزة",
        img:Img_1,
        des:"  يعد  الاهرامات المصرية احد الاثار المصرية المميزة التي تتميز بجمالها ودقة تصميمها  " 
    },
    {
        title:" برج بيزا المائل ",
        price:"1800 ر.س",
        place:"ايطاليا ميلان",
        img:Img_1,
        des:"  يعد  برج بيزا المائل  احد الاثار المصرية المميزة التي تتميز بجمالها ودقة تصميمها  " 
    },
    {
        title:"معبد ابوسبل",
        price:"150 ر.س",
        place:"الاقصر",
        img:Img_1,
        des:"  يعد معبد ابوسبل احد الاثار المصرية المميزة التي تتميز بجمالها ودقة تصميمها  " 
    },
    {
        title:" الاهرامات المصرية",
        price:"180 ر.س",
        place:"الجيزة",
        img:Img_1,
        des:"  يعد  الاهرامات المصرية احد الاثار المصرية المميزة التي تتميز بجمالها ودقة تصميمها  " 
    },
    {
        title:" برج بيزا المائل ",
        price:"1800 ر.س",
        place:"ايطاليا ميلان",
        img:Img_1,
        des:"  يعد  برج بيزا المائل  احد الاثار المصرية المميزة التي تتميز بجمالها ودقة تصميمها  " 
    }
]