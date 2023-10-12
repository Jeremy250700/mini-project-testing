import loginProtocol from './protocol-test/PT_001_login_page.protocol.test.js'
import menusProtocol from './protocol-test/PT_002_menus_page.protocol.test.js'
import homeProtocol from './protocol-test/PT_003_home_page.protocol.test.js'
import menusTheHarvestProtocol from './protocol-test/PT_004_menus_the_harvest_page.protocol.test.js'
import luxuryCakesProtocol from './protocol-test/PT_005_luxury_cakes_page.protocol.test.js'
import vanillaberryCakeProtocol from './protocol-test/PT_006_vanilaberry_cake_page.protocol.test.js'
import cartsProtocol from './protocol-test/PT_007_carts_page.protocol.test.js'
import orderInfoProtocol from './protocol-test/PT_008_order_info_page.protocol.test.js'
import paymentProtocol from './protocol-test/PT_009_payment_page.protocol.test.js'


export const options = {
        thresholds:{
                http_req_duration: ['p(90)<1000'],
                http_req_failed: ['rate<0.1']
        },
	scenarios: {
	        protocolBased: {
			executor: 'constant-vus',
			vus: 10,
			duration: '10s',
		},
	}
}
export default function(){
        loginProtocol()
        menusProtocol()
        homeProtocol()
        menusTheHarvestProtocol()
        luxuryCakesProtocol()
        vanillaberryCakeProtocol()
        cartsProtocol()
        orderInfoProtocol()
        paymentProtocol()
}
