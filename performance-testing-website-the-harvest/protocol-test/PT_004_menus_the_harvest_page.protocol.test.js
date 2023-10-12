import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { headers } from '../config/headers.js'

const pageDuration = new Trend('page_menus_the_harvest_duration', true)

export default function() {
    group('PT_004_menus_the_harvest_page',function(){
        const responses = http.batch([
            ['GET','https://www.harvestcakes.com/menus/the-harvest/',headers],
            ['GET','https://www.harvestcakes.com/static/CACHE/js/output.fc8fbc28cd53.js',headers],
            ['GET','https://www.harvestcakes.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo-Harvest-White.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Search.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Cart.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/QR%20Code%20Icon.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Location.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Icon%20QR%20Code.png',headers],
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
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/5/5/zpsfsvtwjmtzqqqptvrsu6_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/7/4/m3lgu2y66wxdl6fh4fd5jn_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/6/7/xyzxxpjdgev8t58sg8yerk_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/7/25/z5uqrurusixpn3mj4gvwz3_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/6/7/mprg93ecqt6janopktbgwa_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/6/7/zwua7h34gd8pxjk6ldkyyy_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/6/7/kmqp97wsrbm3hw45nzcfpr_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/6/7/kfmjepygpanfpeoptl6qj7_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/6/7/dvkbtwe64fuh4krmjmsv3z_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/6/20/me3ys37w2uw6vuuhg66vg3_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/7/19/xgdyljrcd9tmdrjiufbkje_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2022/12/14/zqe63regckd39qdmwdbtck_size_250_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/group_photo/2023/3/20/ox7qmgsc3aqpteegvzjo8u_size_250_webp.webp',headers],
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