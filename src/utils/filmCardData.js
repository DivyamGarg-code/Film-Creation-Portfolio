import t_1 from "../images/film_template_img.png"
import t_2 from "../images/t-2.png"
import t_3 from "../images/t-3.png"
import ad_1 from "../images/ad_1.1.png"
import ad_2 from "../images/ad_2.png"
import ad_3 from "../images/ad_3.png"
import ad_4 from "../images/ad_4.png"
import ad_5 from "../images/ad_5.png"
import st_1 from "../images/st_1.png"

export const filmCardData=[
    {
        image:t_1,
        title:"Ad Films",
        content:"Experience the magic of storytelling through our captivating ad films that leave a lasting impression on the viewer.",
        card_link:"https://www.youtube.com/@productions.hinterland",
        film_list:[
            {
                title:"Kolor Ad",
                thumbnail:ad_1,
                link:"https://youtu.be/6DSrFM0hSLQ?si=Rv4lC3WZmqKRz9t2"
            },
            {
                title:"Blue Tokai Ad",
                thumbnail:ad_3,
                link:"https://youtube.com/shorts/Yq0o8-AqCOQ?si=nUII8JLpasHsWMtg"
            },
            {
                title:"Max Healthcare Promo",
                thumbnail:ad_2,
                link:"https://youtu.be/afO5Rm7zBVI?si=EFWgMGX2yurFLfA2"
            },
            {
                title:"Eneos Engine Oil Ad (car)",
                thumbnail:ad_4,
                link:"https://youtube.com/shorts/P90BIG6XN_c?si=WYrA6hOBrmvW8A5O"
            },
            {
                title:"Eneos Engine Oil Ad (bike)",
                thumbnail:ad_5,
                link:"https://youtube.com/shorts/N2uh3MQnctY?si=jHWL4TTAHSehjJUJ"
            },
        ]
        // recent_films:{
        //     title:"Our Recent Ad Films",
        // }
    },
  
    {
        image:t_3,
        title:"Documentaries",
        content:"Capture the essence of your vision through our exceptional feature films.",
        card_link:"https://www.youtube.com/@productions.hinterland",
        film_list:[
            {
                title:"PROBASHI DIARIES (trailer)",
                thumbnail:st_1,
                link:"https://youtu.be/UCx2OSUnzlU?si=JL-hF24k80BJWP7E"
            },
        ]
        // recent_films:{
        //     title:"Our Recent Trailers",
        // }
    },

    {
        image:t_2,
        title:"Collaborations",
        content:"Indulge in the beauty of short films that tell compelling stories in a limited time frame.",
        card_link:"https://www.youtube.com/@productions.hinterland",
        film_list:[]
        // recent_films:null
    },

]