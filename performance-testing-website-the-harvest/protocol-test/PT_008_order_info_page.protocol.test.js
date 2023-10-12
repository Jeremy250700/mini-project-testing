import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { headers } from '../config/headers.js'

const pageDuration = new Trend('page_order_info_duration', true)

export default function() {
    group('PT_008_order_info_page',function(){
        const responses = http.batch([
            ['GET','https://www.harvestcakes.com/carts/order-info',headers],
            ['GET','https://www.harvestcakes.com/static/awesomplete/awesomplete.css',headers],
            ['GET','https://www.harvestcakes.com/static/flatpickr/dist/flatpickr.min.css',headers],
            ['GET','https://www.harvestcakes.com/static/awesomplete/awesomplete.js',headers],
            ['GET','https://www.harvestcakes.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',headers],
            ['GET','https://www.harvestcakes.com/static/flatpickr/dist/flatpickr.min.js',headers],
            ['GET','https://www.harvestcakes.com/static/CACHE/js/output.2896005092f7.js',headers],
            ['GET','https://www.harvestcakes.com/our-stores/get-omni-stores/2',headers],
            ['GET','https://www.harvestcakes.com/our-stores/get-operating-days/?store_code=D-TH&merchant_id=2',headers],
            ['GET','https://www.harvestcakes.com/our-stores/get-operating-days?store_code=D-TH&merchant_id=2',headers],
            ['GET','https://www.harvestcakes.com/static/img/Calendar.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Cart.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Close.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Icon%20QR%20Code.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/IG.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo%20Halal%20-%20Harvest.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo%20Halal.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo-Harvest-White.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Meta.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Name%20Icon.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Phone.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/point.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/QR%20Code%20Icon.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Search.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Time%20Icon.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/WA.png',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/Gotham-Bold.otf?7d9e2941b6d4',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/Gotham-Book.otf?7d9e2941b6d4',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/GOTHAM-MEDIUM.otf?7d9e2941b6d4',headers],
        ])
        for (const res of responses) {
			pageDuration.add(res.timings.duration)
			check(res, {
				'statusnya 200': r => r.status === 200 
			})
		}
    })
}