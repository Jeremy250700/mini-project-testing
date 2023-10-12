import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { headers } from '../config/headers.js'

const pageDuration = new Trend('page_payment_duration', true)

export default function() {
    group('PT_009_payment_page',function(){
        const responses = http.batch([
            ['GET','https://harvestcakes.com/carts/payment/BS',headers],
            ['GET','https://harvestcakes.com/static/CACHE/css/output.db39b9083b4f.css',headers],
            ['GET','https://harvestcakes.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',headers],
            ['GET','https://harvestcakes.com/static/CACHE/js/output.2896005092f7.js',headers],
            ['GET','https://harvestcakes.com/static/img/Logo-Harvest-White.png',headers],
            ['GET','https://harvestcakes.com/static/img/Cart.png',headers],
            ['GET','https://harvestcakes.com/static/img/QR%20Code%20Icon.png',headers],
            ['GET','https://harvestcakes.com/static/img/Search.png',headers],
            ['GET','https://harvestcakes.com/static/img/Icon%20QR%20Code.png',headers],
            ['GET','https://harvestcakes.com/static/img/Close.png',headers],
            ['GET','https://harvestcakes.com/static/img/OVO.png',headers],
            ['GET','https://harvestcakes.com/static/img/Checked.png',headers],
            ['GET','https://harvestcakes.com/static/img/Gopay.png',headers],
            ['GET','https://harvestcakes.com/static/img/Shopeepay.png',headers],
            ['GET','https://harvestcakes.com/static/img/CC.png',headers],
            ['GET','https://harvestcakes.com/static/img/BCA.png',headers],
            ['GET','https://harvestcakes.com/static/img/VA%20Mandiri.png',headers],
            ['GET','https://harvestcakes.com/static/img/VA%20Bni.png',headers],
            ['GET','https://harvestcakes.com/static/img/cash.png',headers],
            ['GET','https://harvestcakes.com/static/img/Other%20Banks.svg',headers],
            ['GET','https://harvestcakes.com/static/img/clear_input.svg',headers],
            ['GET','https://harvestcakes.com/static/img/Ok.svg',headers],
            ['GET','https://harvestcakes.com/static/img/no_promotions.svg',headers],
            ['GET','https://harvestcakes.com/static/img/Logo%20Halal%20-%20Harvest.png',headers],
            ['GET','https://harvestcakes.com/static/img/Phone.png',headers],
            ['GET','https://harvestcakes.com/static/img/WA.png',headers],
            ['GET','https://harvestcakes.com/static/img/IG.png',headers],
            ['GET','https://harvestcakes.com/static/img/Meta.png',headers],
            ['GET','https://harvestcakes.com/static/img/Logo%20Halal.png',headers],
            ['GET','https://harvestcakes.com/static/img/point.png',headers],
            ['GET','https://harvestcakes.com/static/fonts/Gotham-Book.otf?7d9e2941b6d4',headers],
            ['GET','https://harvestcakes.com/static/fonts/GOTHAM-MEDIUM.otf?7d9e2941b6d4',headers],
            ['GET','https://harvestcakes.com/static/fonts/Gotham-Bold.otf?7d9e2941b6d4',headers],
            ['GET','https://harvestcakes.com/static/img/favicon.ico',headers],
        ])
        for (const res of responses) {
			pageDuration.add(res.timings.duration)
			check(res, {
				'statusnya 200': r => r.status === 200 
			})
		}
    })
}