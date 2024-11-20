/*
    © 2023 EcomGraduates.com
    https://www.ecomgraduates.com
*/

// Theme info in console
console.log(
  '%c🎓 Ecomify Theme Developed By EcomGraduates®',
  'font-family: "Montserrat", sans-serif; font-weight: 700; color: #ee1882; font-size: 14px; padding: 8px; border-radius: 5px; line-height: 1.5; border: 2px solid #ee1882; box-shadow: 0 2px 4px rgba(0,0,0,0.2);'
);

console.log(
  '%c1. Expertise in Shopify Development%c\nOffering comprehensive Shopify solutions with a focus on custom theme design, optimization, and advanced feature integration.',
  'color: #ee1882; font-weight: 700; font-size: 12px;', 'color: #fff; background: #000; border-radius: 4px; padding: 5px font-size: 12px;'
);

console.log(
  '%c2. Dedicated Customer Support%c\nProviding exceptional support and guidance to ensure the success of your online store, from initial setup to ongoing maintenance.',
  'color: #ee1882; font-weight: 700; font-size: 12px;', 'color: #fff; background: #000; border-radius: 4px; padding: 5px font-size: 12px;'
);

console.log(
  '%c3. Innovative E-commerce Solutions%c\nDelivering cutting-edge solutions tailored to enhance user experience, increase conversion rates, and maximize sales.',
  'color: #ee1882; font-weight: 700; font-size: 12px;', 'color: #fff; background: #000; border-radius: 4px; padding: 5px font-size: 12px;'
);

console.log(
  '✨ %chttps://ecomgraduates.com/products/ecomify-premium-shopify-theme ✨',
  'color: #fff; font-weight: bold; font-size: 12px; padding: 4px; border-radius: 4px; border: 1px solid #ee1882;'
);


// Init Bootstrap tooltips
document.querySelectorAll('[data-bs-toggle="tooltip"]')
    .forEach((el) => new bootstrap.Tooltip(el))

// Init Bootstrap popovers
document.querySelectorAll('[data-bs-toggle="popover"]')
    .forEach((el) => new bootstrap.Popover(el))

// Detect if page has scrolled
window.addEventListener('scroll', (event) => {
    if (window.scrollY > 0) {
        document.documentElement.classList.add('has-scrolled')
    } else {
        document.documentElement.classList.remove('has-scrolled')
    }
})

// Shopify's callenge page - Add BS classes
document.querySelector('.btn.shopify-challenge__button')
    ?.classList.add('btn-primary')

// Shopify's errors messages - Add BS classes
const errors = document.querySelector('.errors')
if (errors) {
    errors.classList.add('alert', 'alert-danger')
}

// Shopify's money format
Shopify.formatMoney = function (cents, format) {
    if (typeof cents === 'string') {
        cents = cents.replace('.', '')
    }

    let value = ''
    const placeholderRegex = /\{\{\s*(\w+)\s*\}\}/
    const formatString = (format || this.money_format)

    function defaultOption (opt, def) {
        return (typeof opt === 'undefined' ? def : opt)
    }

    function formatWithDelimiters (number, precision, thousands, decimal) {
        precision = defaultOption(precision, 2)
        thousands = defaultOption(thousands, ',')
        decimal = defaultOption(decimal, '.')

        if (isNaN(number) || number == null) {
            return 0
        }

        number = (number / 100.0).toFixed(precision)

        const parts = number.split('.')
        const dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands)
        const cents = parts[1] ? (decimal + parts[1]) : ''

        return dollars + cents
    }

    switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
        value = formatWithDelimiters(cents, 2)
        break
    case 'amount_no_decimals':
        value = formatWithDelimiters(cents, 0)
        break
    case 'amount_with_comma_separator':
        value = formatWithDelimiters(cents, 2, '.', ',')
        break
    case 'amount_no_decimals_with_comma_separator':
        value = formatWithDelimiters(cents, 0, '.', ',')
        break
    }

    return formatString.replace(placeholderRegex, value)
}

// Resize Shopify images - helper function
// https://gist.github.com/DanWebb/cce6ab34dd521fcac6ba
Shopify.resizeImage = (src, size, crop = '') => src.replace(/_(pico|icon|thumb|small|compact|medium|large|grande|original|1024x1024|2048x2048|master)+\./g, '.')
    .replace(/\.jpg|\.png|\.gif|\.jpeg/g, (match) => {
        if (crop.length) {
            // eslint-disable-next-line no-param-reassign
            crop = `_crop_${crop}`
        }
        return `_${size}${crop}${match}`
    })

// Debounce - helper function
window.debounce = (callback, wait = 200) => {
    let timeout
    return (...args) => {
        const context = this
        clearTimeout(timeout)
        timeout = setTimeout(() => callback.apply(context, args), wait)
    }
}

// Throttle - helper function
window.throttle = (callback, timeFrame = 200) => {
    let lastTime = 0
    return function () {
        const now = Date.now()
        if (now - lastTime >= timeFrame) {
            callback()
            lastTime = now
        }
    }
}

// Create cookie - helper function
window.createCookie = (name, value, days) => {
    let date, expires
    if (days) {
        date = new Date()
        date.setDate(date.getDate() + days)
        expires = '; expires=' + date.toUTCString()
    } else {
        expires = ''
    }
    document.cookie = name + '=' + value + expires + '; path=/'
}

// Detect elements when they are within view
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
const initEnterView = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('entered')

                entry.target.querySelectorAll('.animate__animated.opacity-0').forEach((el) => {
                    el.classList.remove('opacity-0')
                    el.classList.add(el.dataset.animateClass)
                })
            }
        })
    }, { threshold: 0, rootMargin: '0px 0px -200px 0px' })

    document.querySelectorAll('.enter-view').forEach((el) => {
        observer.observe(el)
    })
}
initEnterView()

// License key
// WARNING: DO NOT REMOVE THIS CODE OTHERWISE
// YOUR THEME MIGHT STOP WORKING
function _0x9f71(){const _0x4c1713=['vIxYA','mRnRT','&license=','le\x20text-ce','e=\x22backgro','info','rmUrr','\x20\x20\x20<div\x0a\x20\x20','trace','bVziX','4774134PJXtfY','\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','vCseG','tnaki','json','SmqBQ','ttps://adm','valid','eme\x20for\x20th','/themes/','eme','ique\x20Ecomi','\x20\x20\x20\x20class=','8VQnuSB','body','.com','/editor?co','0\x20h-100\x22\x20\x0a','UUyfn','rn\x20this\x22)(','oVmYT','href','8766693tKlkhl','\x20\x20\x20\x20\x20\x20styl','You\x20must\x20a','kTETu','ion-fixed\x20','EkbKG','egory%2FLi','rftrs','centHTML','designMode',')\x20is\x20inval','om/check?s','TuLFS','.com/store','shop','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20',':\x2099999999','nd-color:\x20','NSNgx','return\x20(fu','o\x20activate','LyNzy','to\x20license','arning);\x22>','https://li','insertAdja','GQMXi','ld\x22\x20\x0a\x20\x20\x20\x20\x20','ass=\x22alert','und:\x20rgba(','\x20add\x20a\x20new','theme','5);\x20backdr','IvjsK','NqPNU','afterbegin','aeEen','includes','ey.','aXTQw','etting_id%','table','779qayLpS','ecomify_li','XihNa','location',').\x20Click\x20h','iv>\x0a\x20\x20\x20\x20\x20\x20','ecomify-th','\x20blur(15px','nter\x20fw-bo','bind','replace','console','rt-50\x20tran','Shopify','tore=','var(--bs-w','e\x20key\x20you\x20','%2FOnlineS','\x20\x20\x20\x20\x20\x20\x20</d','length','BHJcI','EJLhH','toreThemeS','<a\x20href=\x22h','have\x20provi','KZwYZ','fixed\x20w-10','SRjzP','BQipq','slNLc','id.\x20Please','slate-midd','top-50\x20sta','cense%3Fth','toString','5kxXOhJ','\x20alert-war','{}.constru','.myshopify','\x20\x20\x20\x20\x20\x20</di','search','=gid%3A%2F','apply','constructo','\x20license\x20k','e&category','VBmKk','rAdkO','exception','is\x20store\x20(','dd\x20your\x20un','RFhYe','6286192aPTTev','oisDf','nDsQc','1886VlgWoU','\x20\x20\x20\x20\x20style','in.shopify','4134660ogfZcP','prototype','v>\x0a\x20\x20\x20\x20\x20\x20\x20','2195480IjXLxp','\x20key\x20in\x20th','vthIJ','nction()\x20','eieIC','ere\x20to\x20go\x20','guMhE','__proto__','cense_code','CEYDR','1365150OvOoEh','warn','ettings\x22\x20t','(((.+)+)+)','op-filter:'];_0x9f71=function(){return _0x4c1713;};return _0x9f71();}(function(_0x487349,_0x21b137){function _0x463d32(_0x314bc9,_0xed3dc7,_0x2145dd,_0x506f22){return _0x4221(_0x2145dd-0x199,_0x314bc9);}function _0x133159(_0x29a30a,_0x1d1a0,_0x4bb482,_0x283ec2){return _0x4221(_0x29a30a- -0x2cc,_0x4bb482);}const _0x1595b3=_0x487349();while(!![]){try{const _0x405f8f=-parseInt(_0x463d32(0x367,0x35f,0x340,0x36a))/(0x1b46+0x878+-0x23bd)*(-parseInt(_0x463d32(0x32d,0x39e,0x377,0x32c))/(-0x296+-0x3f8*0x2+0xa88))+parseInt(_0x133159(-0xde,-0x11d,-0xc6,-0x115))/(-0x3*-0x1e7+-0x8cd+0x31b)*(-parseInt(_0x463d32(0x37d,0x394,0x3a3,0x3b1))/(-0x293*-0x1+-0x23ab+-0xd*-0x28c))+-parseInt(_0x463d32(0x35b,0x380,0x363,0x334))/(-0xc3*-0x1d+0x215*0x1+-0x1827)*(-parseInt(_0x463d32(0x384,0x381,0x396,0x3d4))/(-0x33*-0xf+0x32b+-0x622))+-parseInt(_0x133159(-0xe8,-0xd6,-0xc6,-0xc7))/(0x360*-0x3+0xcfb+-0x2d4)+parseInt(_0x133159(-0xf1,-0xf8,-0xaf,-0xd1))/(0x617*0x2+0x205b*0x1+0x2c81*-0x1)+-parseInt(_0x463d32(0x352,0x2f3,0x316,0x307))/(-0x1*0xef0+-0x191b*0x1+0x2814)+parseInt(_0x463d32(0x36c,0x36b,0x37a,0x340))/(0x1*0x207b+0x7c*-0x47+-0x1f3*-0x1);if(_0x405f8f===_0x21b137)break;else _0x1595b3['push'](_0x1595b3['shift']());}catch(_0x3905f2){_0x1595b3['push'](_0x1595b3['shift']());}}}(_0x9f71,0xacce5*0x1+0x2228*-0x59+-0x40*-0x24c0));const _0x28f7c2=(function(){const _0x54cd92={};_0x54cd92[_0x254a32(0x552,0x54e,0x545,0x556)]=_0x254a32(0x59a,0x52e,0x558,0x568),_0x54cd92['vthIJ']=function(_0x1941a9,_0xff6c58){return _0x1941a9!==_0xff6c58;},_0x54cd92[_0x254a32(0x521,0x4ca,0x4ac,0x4f2)]=_0x254a32(0x574,0x56a,0x575,0x55d);function _0x19ed8f(_0x3f2204,_0x33c4d6,_0x8598bd,_0x547504){return _0x4221(_0x33c4d6-0x64,_0x3f2204);}function _0x254a32(_0x456fd7,_0x4eb41d,_0x3df27b,_0x14a708){return _0x4221(_0x14a708-0x369,_0x4eb41d);}const _0x2c9e93=_0x54cd92;let _0x1f915d=!![];return function(_0x3478a4,_0x36effd){function _0x4f6af4(_0x53700d,_0x52f699,_0x35f99b,_0xbed7a4){return _0x19ed8f(_0x35f99b,_0x52f699-0x45,_0x35f99b-0x1d9,_0xbed7a4-0x59);}function _0x46895c(_0x1323a6,_0x32324e,_0x2b4ae9,_0x3bd694){return _0x19ed8f(_0x2b4ae9,_0x1323a6- -0x433,_0x2b4ae9-0x137,_0x3bd694-0x111);}if(_0x2c9e93[_0x4f6af4(0x2d1,0x28f,0x2b7,0x276)](_0x2c9e93[_0x46895c(-0x246,-0x257,-0x252,-0x224)],_0x2c9e93['TuLFS'])){const _0x32c672=_0x4f726d[_0x4f6af4(0x262,0x27a,0x290,0x24c)](_0x2dc8d8,arguments);return _0x638db4=null,_0x32c672;}else{const _0x2143fd=_0x1f915d?function(){function _0x3e6526(_0x57cbc0,_0x47f692,_0x18dff8,_0x446484){return _0x4f6af4(_0x57cbc0-0x4e,_0x57cbc0-0x1b6,_0x446484,_0x446484-0x93);}function _0x57a981(_0x445b8a,_0xfba410,_0x45f0b3,_0x3bdad9){return _0x46895c(_0x45f0b3-0x5ff,_0xfba410-0x88,_0xfba410,_0x3bdad9-0x5b);}if(_0x36effd){if(_0x2c9e93[_0x3e6526(0x44c,0x415,0x47c,0x48d)]===_0x2c9e93[_0x3e6526(0x44c,0x437,0x477,0x47d)]){const _0x2aac74=_0x36effd['apply'](_0x3478a4,arguments);return _0x36effd=null,_0x2aac74;}else _0x36b0c0=_0x7f70fe;}}:function(){};return _0x1f915d=![],_0x2143fd;}};}()),_0x480cc4=_0x28f7c2(this,function(){function _0x2806f4(_0x51f033,_0x36c8a2,_0x185180,_0x1841e7){return _0x4221(_0x185180- -0x5f,_0x36c8a2);}function _0x2741c0(_0x393cca,_0x223f1a,_0x230d93,_0x6e3aa0){return _0x4221(_0x230d93- -0x2e3,_0x223f1a);}const _0x300783={};_0x300783[_0x2806f4(0x1ab,0x1a4,0x19a,0x1a1)]='(((.+)+)+)'+'+$';const _0x559a8c=_0x300783;return _0x480cc4['toString']()[_0x2741c0(-0xed,-0x13a,-0x114,-0x135)](_0x559a8c[_0x2741c0(-0xad,-0xe6,-0xea,-0xa5)])[_0x2806f4(0x19e,0x122,0x16a,0x129)]()['constructo'+'r'](_0x480cc4)[_0x2806f4(0x171,0x146,0x170,0x132)](_0x559a8c[_0x2741c0(-0xf2,-0xe9,-0xea,-0xc4)]);});_0x480cc4();const _0x4a29f5=(function(){const _0x15c9db={'dJygg':function(_0x5d80a0,_0x3b50fc){return _0x5d80a0(_0x3b50fc);},'KZwYZ':function(_0x3330ff,_0x40ba98){return _0x3330ff+_0x40ba98;},'lCqfH':function(_0x1dd3f4,_0xc02401){return _0x1dd3f4+_0xc02401;},'LyNzy':_0x2cdea8(0x458,0x494,0x494,0x48e)+_0x2cdea8(0x521,0x4fb,0x4a0,0x4e5),'tnaki':_0x2cdea8(0x4a0,0x510,0x4b9,0x4ca)+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','oisDf':function(_0x2bc41f,_0xd88172){return _0x2bc41f===_0xd88172;},'SRjzP':_0xc05b37(0x1ad,0x19d,0x1a2,0x166)};let _0x5cc543=!![];function _0x2cdea8(_0x3a8b15,_0x555d17,_0x4774b2,_0xee7752){return _0x4221(_0xee7752-0x2fe,_0x4774b2);}function _0xc05b37(_0x544b7c,_0x18c840,_0x11221f,_0x26fae1){return _0x4221(_0x544b7c-0x32,_0x11221f);}return function(_0x271664,_0x45008e){function _0x1f6786(_0x4d39bf,_0x1640ee,_0x59e970,_0x503eeb){return _0xc05b37(_0x59e970- -0x4c,_0x1640ee-0xb4,_0x503eeb,_0x503eeb-0x16d);}function _0xa54217(_0x1efb56,_0x303b51,_0x45782b,_0x3d407a){return _0x2cdea8(_0x1efb56-0x94,_0x303b51-0x128,_0x303b51,_0x1efb56- -0x5c1);}if(_0x15c9db[_0xa54217(-0xe7,-0xbd,-0x12e,-0xa6)](_0x15c9db[_0xa54217(-0x101,-0x117,-0xd9,-0x11e)],_0x15c9db[_0xa54217(-0x101,-0x105,-0x145,-0x109)])){const _0x225301=_0x5cc543?function(){function _0x3a95d0(_0x27e3fb,_0x5882f5,_0x334305,_0x1d5d67){return _0x1f6786(_0x27e3fb-0x1d4,_0x5882f5-0xef,_0x27e3fb- -0x25e,_0x1d5d67);}if(_0x45008e){const _0x42ff18=_0x45008e[_0x3a95d0(-0xa7,-0xba,-0x8e,-0xa5)](_0x271664,arguments);return _0x45008e=null,_0x42ff18;}}:function(){};return _0x5cc543=![],_0x225301;}else{let _0x3559fd;try{_0x3559fd=_0x15c9db['dJygg'](_0x2bcd4d,_0x15c9db[_0x1f6786(0x1d4,0x1a9,0x1a6,0x161)](_0x15c9db['lCqfH'](_0x15c9db[_0xa54217(-0x131,-0xfd,-0xfb,-0x10d)],_0x15c9db[_0x1f6786(0x1a9,0x1c0,0x1e6,0x221)]),');'))();}catch(_0x6686ae){_0x3559fd=_0x171b93;}return _0x3559fd;}};}()),_0x1920f6=_0x4a29f5(this,function(){const _0x7f1cdc={'EkbKG':_0x2279fa(0x1e8,0x1d2,0x1b3,0x1de)+'+$','XihNa':function(_0x4cac0f,_0x435bf8){return _0x4cac0f===_0x435bf8;},'NqPNU':_0x2279fa(0x1e2,0x196,0x1a3,0x1e0),'UUyfn':function(_0x2cb135,_0x5eb844){return _0x2cb135(_0x5eb844);},'BQipq':function(_0x1b938b,_0x1a6e8e){return _0x1b938b+_0x1a6e8e;},'xLlOc':function(_0x4519b4,_0x39609f){return _0x4519b4+_0x39609f;},'nDsQc':_0x25b362(-0x26f,-0x22b,-0x254,-0x244)+_0x25b362(-0x224,-0x20e,-0x1b5,-0x1ed),'NSNgx':'{}.constru'+'ctor(\x22retu'+_0x25b362(-0x281,-0x210,-0x275,-0x25a)+'\x20)','aXTQw':function(_0x294b9a){return _0x294b9a();},'kTETu':'log','guMhE':_0x25b362(-0x209,-0x278,-0x228,-0x22e),'SmqBQ':function(_0x5bf0e8,_0x3eb57e){return _0x5bf0e8<_0x3eb57e;},'EJLhH':_0x25b362(-0x1af,-0x1da,-0x21e,-0x1fa)},_0x5cf487=function(){let _0x332c00;function _0x2df887(_0x33aa24,_0x3cb921,_0x4c56df,_0xe9751d){return _0x25b362(_0x33aa24-0xe8,_0x3cb921,_0x4c56df-0x168,_0x33aa24-0x365);}function _0x4e317f(_0x1daffd,_0x54074a,_0x20e08a,_0x5586ed){return _0x25b362(_0x1daffd-0x186,_0x1daffd,_0x20e08a-0x17,_0x54074a-0x762);}try{if(_0x7f1cdc[_0x2df887(0x13a,0x12e,0x132,0x166)](_0x7f1cdc[_0x2df887(0x130,0x123,0x136,0xee)],_0x7f1cdc[_0x4e317f(0x539,0x52d,0x56f,0x553)]))_0x332c00=_0x7f1cdc[_0x2df887(0x10a,0x118,0xea,0x152)](Function,_0x7f1cdc[_0x2df887(0x154,0x127,0x12a,0x16c)](_0x7f1cdc['xLlOc'](_0x7f1cdc[_0x2df887(0x16e,0x156,0x1b7,0x181)],_0x7f1cdc[_0x4e317f(0x4d7,0x51d,0x4de,0x522)]),');'))();else return _0x563220['toString']()[_0x4e317f(0x57c,0x55d,0x521,0x588)](_0x2df887(0x182,0x172,0x182,0x1c8)+'+$')['toString']()['constructo'+'r'](_0x220807)[_0x2df887(0x160,0x12f,0x154,0x15c)](_0x7f1cdc[_0x4e317f(0x4f7,0x510,0x54c,0x505)]);}catch(_0x32e86d){_0x332c00=window;}return _0x332c00;},_0x2e5412=_0x7f1cdc[_0x2279fa(0x1d5,0x183,0x1c8,0x191)](_0x5cf487),_0x4af944=_0x2e5412[_0x25b362(-0x223,-0x1d9,-0x1e7,-0x222)]=_0x2e5412[_0x2279fa(0x18c,0x1c9,0x1d6,0x19f)]||{};function _0x25b362(_0x4311b3,_0x1778b1,_0x448692,_0x1c7e14){return _0x4221(_0x1c7e14- -0x3d4,_0x1778b1);}function _0x2279fa(_0x5993c0,_0xa1a610,_0x46634d,_0x1d9b94){return _0x4221(_0x1d9b94- -0x13,_0xa1a610);}const _0x4ef777=[_0x7f1cdc[_0x25b362(-0x271,-0x245,-0x29c,-0x254)],_0x25b362(-0x1a2,-0x20a,-0x1ab,-0x1e5),_0x25b362(-0x200,-0x191,-0x1e7,-0x1dc),'error',_0x25b362(-0x1d3,-0x1f6,-0x229,-0x1fd),_0x7f1cdc[_0x25b362(-0x1ce,-0x1d8,-0x1d2,-0x1ea)],_0x25b362(-0x1fd,-0x1ec,-0x200,-0x1d9)];for(let _0x288ec4=-0x10*-0x243+-0x19e*0x3+-0x47a*0x7;_0x7f1cdc[_0x25b362(-0x1db,-0x199,-0x1fc,-0x1d2)](_0x288ec4,_0x4ef777[_0x25b362(-0x24c,-0x207,-0x1e7,-0x21a)]);_0x288ec4++){if(_0x7f1cdc[_0x25b362(-0x208,-0x22f,-0x1df,-0x218)]!==_0x7f1cdc[_0x2279fa(0x178,0x1c4,0x1bd,0x1a9)]){const _0x2469aa=_0x24948b[_0x2279fa(0x182,0x1e9,0x19c,0x1be)](_0x341b52,arguments);return _0x44bb3e=null,_0x2469aa;}else{const _0x15c81c=_0x4a29f5[_0x2279fa(0x192,0x201,0x1d6,0x1bf)+'r'][_0x25b362(-0x1b2,-0x1c1,-0x20f,-0x1f2)]['bind'](_0x4a29f5),_0x25c26f=_0x4ef777[_0x288ec4],_0x19e9e5=_0x4af944[_0x25c26f]||_0x15c81c;_0x15c81c[_0x25b362(-0x1c3,-0x1f6,-0x1c3,-0x1e9)]=_0x4a29f5[_0x25b362(-0x211,-0x20c,-0x1f1,-0x224)](_0x4a29f5),_0x15c81c[_0x2279fa(0x1ed,0x17a,0x1ed,0x1b6)]=_0x19e9e5[_0x25b362(-0x243,-0x248,-0x24d,-0x20b)]['bind'](_0x19e9e5),_0x4af944[_0x25c26f]=_0x15c81c;}}});_0x1920f6();function _0x4221(_0x28f7c2,_0x9f71f3){const _0x4221e4=_0x9f71();return _0x4221=function(_0x1099e0,_0x1eb2cb){_0x1099e0=_0x1099e0-(-0x1327*-0x1+0x295*-0x1+0x49*-0x35);let _0xc5dcc0=_0x4221e4[_0x1099e0];return _0xc5dcc0;},_0x4221(_0x28f7c2,_0x9f71f3);}const initLicenseKey=async()=>{const _0x57fa47={'BHJcI':function(_0x77130b,_0x69db7f){return _0x77130b(_0x69db7f);},'slNLc':function(_0x48677b,_0xf9a8a1){return _0x48677b+_0xf9a8a1;},'IvjsK':_0x35683d(0x22f,0x271,0x220,0x242)+_0x35683d(0x286,0x252,0x2c8,0x27b),'rAdkO':'{}.constru'+'ctor(\x22retu'+'rn\x20this\x22)('+'\x20)','hoLVb':_0x35683d(0x24c,0x220,0x23c,0x204)+_0x147cb6(0xc7,0x103,0x86,0xef),'xbnyY':function(_0x284755,_0x3aeb5f){return _0x284755!==_0x3aeb5f;},'ImzxX':'pmWlb','eieIC':function(_0x5cc5e1,_0x4edbdc){return _0x5cc5e1===_0x4edbdc;},'VBmKk':_0x35683d(0x240,0x27c,0x24d,0x25d),'cfcRB':_0x147cb6(0xbc,0x78,0x79,0xef),'GQMXi':_0x35683d(0x26c,0x24c,0x256,0x229)+_0x35683d(0x215,0x1e7,0x1df,0x221),'DXmql':_0x147cb6(0x60,0x50,0x7d,0x32)};function _0x35683d(_0x46a041,_0x162500,_0x251213,_0x247393){return _0x4221(_0x46a041-0x9f,_0x247393);}function _0x147cb6(_0x38b376,_0x218a90,_0x101740,_0x39d4b3){return _0x4221(_0x38b376- -0x140,_0x218a90);}if(Shopify[_0x35683d(0x225,0x255,0x204,0x212)]){window[_0x147cb6(0x68,0x44,0x86,0x8c)+_0x147cb6(0xac,0x96,0xce,0xa7)]=window[_0x35683d(0x247,0x215,0x292,0x211)+'cense_key'];const _0x191439=window[_0x35683d(0x253,0x280,0x223,0x237)][_0x35683d(0x22a,0x1e5,0x23d,0x23b)],_0xd698dd=window['ecomify_li'+_0x147cb6(0xac,0xd9,0xea,0x80)];let _0x30431b='';if(window[_0x147cb6(0x6a,0x76,0x48,0x92)][_0x35683d(0x21b,0x1de,0x246,0x223)][_0x147cb6(0x62,0x33,0x2c,0x87)](_0x57fa47['hoLVb']))return;if(_0xd698dd['length']){if(_0x57fa47['xbnyY'](_0x35683d(0x223,0x1fc,0x1eb,0x25a),_0x57fa47['ImzxX'])){const _0x366bf5=await fetch(_0x147cb6(0x55,0x49,0x2d,0x1a)+'cense.grad'+'uatesapi.c'+_0x147cb6(0x48,0x20,0x81,0x29)+_0x147cb6(0x75,0x37,0x3b,0x94)+_0x191439+'&theme='+Shopify['theme']['id']+_0x35683d(0x294,0x25b,0x2d9,0x2a2)+_0xd698dd),_0x59398a=await _0x366bf5[_0x147cb6(0xc1,0xb4,0x9d,0x76)]();console['log'](_0x59398a);if(_0x59398a[_0x35683d(0x2a3,0x2e0,0x260,0x2a2)]){if(_0x57fa47[_0x147cb6(0xa8,0x68,0x9c,0x6a)](_0x57fa47[_0x147cb6(0x95,0xb8,0xda,0xcf)],_0x57fa47['cfcRB'])){const _0x4d77af=_0x3e0416?function(){function _0x4d8a36(_0x118824,_0x430116,_0x1b5359,_0x4d49af){return _0x147cb6(_0x430116-0x298,_0x1b5359,_0x1b5359-0xd9,_0x4d49af-0xe);}if(_0xe5c0f2){const _0x554ee5=_0x2c63c7[_0x4d8a36(0x33f,0x329,0x2e4,0x309)](_0x813be9,arguments);return _0x1f135b=null,_0x554ee5;}}:function(){};return _0x313810=![],_0x4d77af;}else return;}else _0x30431b='The\x20licens'+_0x147cb6(0x77,0x7b,0x2c,0x4f)+_0x35683d(0x25e,0x271,0x2a1,0x23c)+'ded\x20for\x20th'+_0x35683d(0x277,0x277,0x2bd,0x267)+_0x191439+(_0x147cb6(0x47,0x5c,0x7a,0x7f)+_0x35683d(0x264,0x2a2,0x29d,0x242)+_0x35683d(0x23a,0x235,0x24b,0x218)+_0x35683d(0x272,0x2b7,0x29d,0x2b3)+_0x147cb6(0x63,0x8f,0x34,0x9d));}else _0x5c8a71=bvCSoF[_0x35683d(0x25a,0x23a,0x217,0x23f)](_0xbb4338,bvCSoF[_0x35683d(0x263,0x2ac,0x239,0x25f)](bvCSoF[_0x35683d(0x263,0x29d,0x254,0x2aa)](bvCSoF[_0x147cb6(0x5e,0x52,0x7e,0x1c)],bvCSoF[_0x35683d(0x275,0x265,0x23f,0x29c)]),');'))();}else _0x30431b=_0x147cb6(0x3f,0x31,0x61,-0x7)+_0x147cb6(0x99,0xcf,0xd2,0xb6)+_0x35683d(0x2a7,0x25c,0x2d4,0x2bc)+'fy\x20license'+_0x147cb6(0xa5,0xce,0x94,0x5c)+'e\x20\x22Theme\x20S'+_0x35683d(0x28f,0x27d,0x276,0x2c9)+_0x147cb6(0x51,0xf,0x29,0x73)+'\x20EcomifyTh'+_0x147cb6(0xc5,0x9d,0xe6,0x10a)+_0x147cb6(0x98,0xb6,0x4e,0x65)+_0x191439+(_0x147cb6(0x6b,0x42,0x20,0x9e)+_0x147cb6(0xa9,0xe2,0x73,0x86)+_0x147cb6(0x53,0x9e,0x7f,0x25)+'\x20settings\x20'+_0x147cb6(0x7e,0xa0,0x62,0x3d)+_0x35683d(0x2a2,0x262,0x265,0x26d)+_0x147cb6(0xa0,0xc6,0xd5,0xa9)+_0x35683d(0x229,0x25f,0x1df,0x202)+'/')+window[_0x147cb6(0x74,0x31,0x2a,0x50)]['shop'][_0x35683d(0x250,0x23e,0x206,0x271)](_0x57fa47[_0x147cb6(0x57,0x8e,0x22,0x48)],'')+_0x35683d(0x2a5,0x261,0x289,0x27a)+window[_0x35683d(0x253,0x28c,0x217,0x293)][_0x35683d(0x23b,0x1f9,0x216,0x23c)]['id']+(_0x35683d(0x216,0x204,0x255,0x248)+'ntext=them'+_0x35683d(0x273,0x2a4,0x251,0x290)+_0x35683d(0x26f,0x282,0x2b4,0x236)+'%2Fshopify'+_0x147cb6(0x78,0x7b,0x9a,0x9d)+_0x35683d(0x25c,0x29c,0x256,0x24f)+'ettingsCat'+_0x147cb6(0x43,0x15,0x1a,0x2a)+_0x147cb6(0x88,0x50,0xb2,0xa0)+'eme_id%3D')+window[_0x35683d(0x253,0x277,0x258,0x26c)][_0x35683d(0x23b,0x221,0x25e,0x278)]['id']+('%26first_s'+_0x147cb6(0x65,0x8f,0x7e,0x85)+'3Dlicense_'+'key\x22\x20targe'+'t=\x22_blank\x22'+'>Settings<'+'/a>');document[_0x35683d(0x214,0x236,0x249,0x226)][_0x35683d(0x235,0x247,0x267,0x20f)+_0x35683d(0x224,0x218,0x1e7,0x23f)](_0x57fa47['DXmql'],'\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20<div\x0a\x20\x20'+_0x35683d(0x29d,0x2e3,0x2c4,0x26f)+_0x35683d(0x2a8,0x2b2,0x29b,0x2e6)+'\x22position-'+_0x35683d(0x260,0x29a,0x29b,0x25f)+_0x147cb6(0x38,0x1f,0x10,-0x8)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+_0x35683d(0x21d,0x20c,0x223,0x1ea)+_0x147cb6(0xb7,0xc9,0x8d,0xea)+_0x35683d(0x239,0x234,0x246,0x271)+'0,\x200,\x200,\x20.'+_0x147cb6(0x5d,0x2c,0x99,0x53)+_0x35683d(0x291,0x2d4,0x2b3,0x2ba)+_0x35683d(0x24d,0x218,0x267,0x286)+');\x20z-index'+_0x35683d(0x22c,0x204,0x223,0x250)+'99;\x22>\x20\x0a\x20\x20\x20'+_0x35683d(0x29d,0x26e,0x292,0x2ce)+_0x147cb6(0xba,0xcc,0x75,0xf7)+'\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'+'\x20\x20\x20\x20\x20\x20\x20\x20cl'+_0x147cb6(0x59,0x5e,0x93,0x5d)+_0x147cb6(0x8b,0x8e,0x63,0x9b)+'ning\x20posit'+_0x35683d(0x220,0x263,0x1fa,0x219)+_0x35683d(0x266,0x25c,0x296,0x261)+_0x35683d(0x252,0x296,0x288,0x294)+_0x147cb6(0x86,0x5a,0xcd,0x91)+_0x147cb6(0xb6,0x77,0x77,0xec)+_0x147cb6(0x6f,0x87,0xaa,0x36)+_0x147cb6(0x58,0x29,0x20,0x70)+_0x35683d(0x29d,0x2b9,0x28d,0x26c)+_0x35683d(0x27e,0x29b,0x28f,0x2c7)+'=\x22backgrou'+_0x147cb6(0x4e,0x18,0x37,0x52)+_0x35683d(0x255,0x235,0x278,0x256)+_0x35683d(0x233,0x253,0x26b,0x270)+_0x147cb6(0x4c,0x46,0x6d,0x31)+_0x147cb6(0xbe,0xd0,0xda,0xb0)+'\x20'+_0x30431b+(_0x35683d(0x22b,0x251,0x23e,0x1f4)+_0x35683d(0x258,0x296,0x261,0x249)+_0x147cb6(0x6c,0x60,0xa6,0x3a)+_0x147cb6(0x8e,0xac,0xa5,0x92)+_0x35683d(0x282,0x2c2,0x27e,0x23e)+'\x20'));}};initLicenseKey();

// Lazy load HTMl5 videos
// https://web.dev/lazy-loading-video/
const initVideoLazyLoad = () => {
    const lazyVideos = [].slice.call(document.querySelectorAll('video.lazy-video'))

    if ('IntersectionObserver' in window) {
        const lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (video) {
                if (video.isIntersecting) {
                    for (const source in video.target.children) {
                        const videoSource = video.target.children[source]
                        if (typeof videoSource.tagName === 'string' && videoSource.tagName === 'SOURCE') {
                            videoSource.src = videoSource.dataset.src
                        }
                    }

                    video.target.load()

                    if (video.target.hasAttribute('data-poster')) {
                        video.target.poster = video.target.dataset.poster
                    }

                    video.target.classList.remove('lazy-video')
                    lazyVideoObserver.unobserve(video.target)
                }
            })
        }, { threshold: 0, rootMargin: '0px 0px 200px 0px' })

        lazyVideos.forEach(function (lazyVideo) {
            lazyVideoObserver.observe(lazyVideo)
        })
    }
}
initVideoLazyLoad()

document.addEventListener('shopify:section:load', () => {
    document.querySelectorAll('.enter-view').forEach((elem) => {
        elem.classList.add('entered')
        document.querySelectorAll('.animate__animated.opacity-0').forEach((el) => {
            el.classList.remove('opacity-0')
        })
    })
})
