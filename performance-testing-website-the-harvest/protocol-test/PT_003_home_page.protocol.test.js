import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { headers } from '../config/headers.js'

const pageDuration = new Trend('page_home_duration', true)

export default function() {
    group('PT_003_home_page',function(){
        const responses = http.batch([
            ['GET','https://www.harvestcakes.com/',headers],
            ['GET','https://www.harvestcakes.com/static/CACHE/css/output.db39b9083b4f.css',headers],
            ['GET','https://www.harvestcakes.com/static/tiny-slider/dist/tiny-slider.css',headers],
            ['GET','https://www.harvestcakes.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',headers],
            ['GET','https://www.harvestcakes.com/static/CACHE/js/output.fc8fbc28cd53.js',headers],
            ['GET','https://www.harvestcakes.com/static/tiny-slider/dist/min/tiny-slider.js',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo-Harvest-White.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Search.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Cart.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/QR%20Code%20Icon.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Location.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Icon%20QR%20Code.png',headers],
            ['GET','https://www.harvestcakes.com/media/thumbnails/main_banner/2023/9/9/b6bhcwjquv4vsepifxngrd_size_1161x463_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/media/thumbnails/main_banner/2023/10/11/2xv5xwnvkmrq2nmhz8kbd6_size_1161x463_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/media/thumbnails/main_banner/2023/9/14/mnh7nxmaumwsk3srcuf5hh_size_1161x463_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/media/thumbnails/main_banner/2023/10/1/4vw6dd4rzxy2jjmqyjfv4c_size_1161x463_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/media/thumbnails/main_banner/2023/8/8/ag3xlpni6jrntn9pbw77bg_homepage_promo_banner_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/media/thumbnails/main_banner/2023/6/20/r9ddwhzpcfxneoaweemuoz_homepage_promo_banner_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/media/thumbnails/main_banner/2023/8/24/tdwykwytvrgunbgbwxrehj_homepage_promo_banner_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/static/img/TH-LOGO.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/TH-LOGO-White.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/THX-NEW-LOGO-BOLD.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/THX-NEW-LOGO-BOLD-White1.png',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/10/9/jjrd96rny39oritcnaxv2o_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/8/22/dokmdwv7uaxawgv45ensaq_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/7/14/a4plonxlzcwkuwjghpwwcw_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/3/27/zwje6oxyrqjphzexvr7w8d_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/8/25/flhb39qedkdifwkjwsyuxz_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/9/27/kgskuwjstybs5kegpwhfem_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/5/5/v6iiwutnznx6vuo6ejqvqg_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/8/8/4zrzsdbryyh5clizibgu9l_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/10/10/ctuucx26jvc3cdq3ctjbtm_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/7/5/ibvddbktr22izpngkvcekn_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/3/20/lfrcezgqh7w3y9hnntuvv8_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/5/5/ckwzsq7qcjevjjarfsgpgk_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/7/19/6rprmyvgyfegavxmn3bnj9_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/9/7/jnpslzpjnp2nwf3bu7hemp_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/7/19/4izxpkshxcb7xkecpsrukz_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/7/19/dszdswbb8ebvjzsyxm8jgu_size_250_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/static/img/TH%20Treats.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/treats_section2.jpg',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo%20Halal%20-%20Harvest.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Phone.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/WA.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/IG.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Meta.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo%20Halal.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Close.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/point.png',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/Gotham-Book.otf?7d9e2941b6d4',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/Gotham-Bold.otf?7d9e2941b6d4',headers],
            ['GET','https://www.harvestcakes.com/static/img/favicon.ico',headers],
        ])

        for (const res of responses) {
			pageDuration.add(res.timings.duration)
			check(res, {
				'statusnya 200': r => r.status === 200
			})
		}
    })
}