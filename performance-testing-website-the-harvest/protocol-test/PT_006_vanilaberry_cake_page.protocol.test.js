import { check, group } from 'k6'
import http from 'k6/http'
import { Trend } from 'k6/metrics'
import { headers } from '../config/headers.js'

const pageDuration = new Trend('page_vanillaberry_cake_duration', true)

export default function() {
    group('PT_006_vanillaberry_cake_page',function(){
        const responses = http.batch([
            ['GET','https://www.harvestcakes.com/menus/luxury-cakes/2999/vanillabery-cake/',headers],
            ['GET','https://www.harvestcakes.com/static/tingle.js/dist/tingle.min.js',headers],
            ['GET','https://www.harvestcakes.com/static/CACHE/js/output.fc8fbc28cd53.js',headers],
            ['GET','https://www.harvestcakes.com/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',headers],
            ['GET','https://www.harvestcakes.com/menus/get-variant-modifiers/?id=7268&store_id=96',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo-Harvest-White.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Search.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Cart.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/QR%20Code%20Icon.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Location.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Icon%20QR%20Code.png',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/product_photo/2023/8/22/gw8qkkxxvjjwrv4dcnmda9_size_480_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/product_photo/2023/5/5/bjfb3zv7jp2ubjktnopsue_size_480_webp.webp',headers],
            ['GET','https://omni.harvestcakes.com/media/thumb/product_photo/2023/8/22/n3hiexnburj6dwcezewttf_size_480_webp.webp',headers],
            ['GET','https://www.harvestcakes.com/static/img/oos.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Edit.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo%20Halal%20-%20Harvest.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Phone.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/WA.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/IG.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Meta.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Logo%20Halal.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/Close.png',headers],
            ['GET','https://www.harvestcakes.com/static/img/point.png',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/Gotham-Book.otf?7d9e2941b6d4',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/GOTHAM-MEDIUM.otf?7d9e2941b6d4',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/Gotham-Bold.otf?7d9e2941b6d4',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/Gotham-Book.otf?7d9e2941b6d4',headers],
            ['GET','https://www.harvestcakes.com/static/fonts/GOTHAM-MEDIUM.otf?7d9e2941b6d4',headers],
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