import { Language, Translation } from './types';

export const TRANSLATIONS: Record<Language, Translation> = {
  th: {
    nav: { home: 'หน้าแรก', products: 'ราคารับซื้อ', contact: 'ติดต่อเรา' },
    hero: { 
      title: 'รับซื้อ-ขายเศษเหล็ก ให้ราคาสูงที่สุด', 
      subtitle: 'บริการรับซื้อเศษเหล็ก ทองแดง อลูมิเนียม สแตนเลส ประเมินราคาฟรี จ่ายเงินสดทันที โดย TheEndSolution', 
      cta: 'ดูราคารับซื้อวันนี้' 
    },
    about: {
      title: 'เกี่ยวกับ TheEndSolution',
      description: 'TheEndSolution ดำเนินธุรกิจรับซื้อและคัดแยกขยะรีไซเคิลแบบครบวงจร เรามีความเชี่ยวชาญในการรับซื้อเศษเหล็ก ทองแดง อลูมิเนียม สแตนเลส และโลหะทุกชนิด ด้วยประสบการณ์ที่ยาวนาน\n\nเรามุ่งมั่นที่จะเป็นส่วนหนึ่งในการรักษาสิ่งแวดล้อมโดยการนำทรัพยากรกลับมาใช้ใหม่ (Recycle) พร้อมทั้งให้ราคาที่ยุติธรรม อิงตามราคาตลาดโลก และให้บริการที่รวดเร็ว ตรงไปตรงมาแก่ลูกค้าทุกท่าน\n\nไม่ว่าคุณจะเป็นโรงงานอุตสาหกรรม ไซต์งานก่อสร้าง หรือบุคคลทั่วไป เรายินดีให้บริการประเมินราคาฟรี พร้อมรถรับส่งถึงที่ เพื่อให้การขายเศษเหล็กของคุณเป็นเรื่องง่ายและได้ราคาดีที่สุด',
      certTitle: 'มาตรฐานและการบริการของเรา',
      certDesc: 'TheEndSolution ให้ความสำคัญกับความโปร่งใสและยุติธรรมในการประเมินราคา เครื่องชั่งของเราได้มาตรฐานและผ่านการตรวจสอบอย่างถูกต้องจากกรมการค้าภายใน\n\nเรามีระบบการจัดการพื้นที่และกระบวนการคัดแยกที่ปลอดภัย เป็นมิตรต่อสิ่งแวดล้อม พร้อมทีมงานมืออาชีพที่พร้อมให้บริการรับซื้อถึงหน้าโรงงานของคุณ เพื่อให้ลูกค้ามั่นใจในบริการของเรา',
      processTitle: 'ขั้นตอนการรับซื้อและทำงาน',
      facilities: [
        'ติดต่อและส่งรูปภาพเพื่อประเมินราคาเบื้องต้น',
        'นัดหมายวันและเวลาเพื่อเข้าประเมินหน้างานฟรี',
        'ทีมงานลงพื้นที่พร้อมรถบรรทุกและตาชั่งมาตรฐาน',
        'คัดแยกประเภทและชั่งน้ำหนักอย่างโปร่งใสต่อหน้าลูกค้า',
        'ตีราคาตามมาตรฐานตลาดโลกและจ่ายเงินสดหน้างานทันที',
        'ขนย้ายรวดเร็วและทำความสะอาดพื้นที่ให้เรียบร้อย',
        'ออกเอกสารการซื้อขาย/ใบกำกับภาษีอย่างถูกต้อง'
      ]
    },
    products: { 
      title: 'ราคารับซื้อวันนี้', 
      filterAll: 'ทั้งหมด', 
      filterSteel: 'กลุ่มเหล็ก', 
      filterCopper: 'ทองแดง/ทองเหลือง', 
      filterAluminum: 'อลูมิเนียม/สแตนเลส' 
    },
    contact: { 
      title: 'ติดต่อขายเศษเหล็ก', 
      addressLabel: 'ที่อยู่จุดรับซื้อ', 
      phoneLabel: 'เบอร์โทรศัพท์', 
      emailLabel: 'อีเมล', 
      followUs: 'ติดตามเราได้ที่' 
    },
  },
  en: {
    nav: { home: 'Home', products: 'Scrap Prices', contact: 'Contact' },
    hero: { 
      title: 'Top Prices for Scrap Metal', 
      subtitle: 'Buying and selling scrap iron, copper, aluminum, and stainless steel. Free estimation, instant cash by TheEndSolution.', 
      cta: 'Check Today\'s Prices' 
    },
    about: {
      title: 'About TheEndSolution',
      description: 'TheEndSolution operates a comprehensive scrap metal and recycling business. We specialize in buying scrap iron, copper, aluminum, stainless steel, and all types of metals with years of experience.\n\nWe are committed to being part of environmental conservation through recycling, while providing fair prices based on the global market and fast, straightforward service to all our customers.\n\nWhether you are an industrial factory, a construction site, or an individual, we offer free estimates and on-site pickup services to make selling your scrap metal easy and highly profitable.',
      certTitle: 'Our Standards & Services',
      certDesc: 'TheEndSolution prioritizes transparency and fairness in pricing. Our weighing scales are standardized and legally verified by the Department of Internal Trade.\n\nWe maintain a safe and eco-friendly site management and sorting process, staffed by a professional team ready to provide on-site purchasing services at your factory, ensuring customer confidence in our operations.',
      processTitle: 'Our Purchasing Process',
      facilities: [
        'Contact us and send photos for an initial estimate',
        'Schedule a date and time for a free on-site evaluation',
        'Our team arrives with trucks and standardized scales',
        'Transparent sorting and weighing in front of the customer',
        'Pricing based on global market standards with instant cash payment',
        'Fast removal and site cleanup',
        'Proper issuance of trading documents and tax invoices'
      ]
    },
    products: { 
      title: 'Today\'s Prices', 
      filterAll: 'All', 
      filterSteel: 'Steel Group', 
      filterCopper: 'Copper & Brass', 
      filterAluminum: 'Aluminum & Stainless' 
    },
    contact: { 
      title: 'Contact Us', 
      addressLabel: 'Scrap Yard Address', 
      phoneLabel: 'Phone', 
      emailLabel: 'Email', 
      followUs: 'Follow Us' 
    },
  },
  cn: {
    nav: { home: '首页', products: '回收价格', contact: '联系我们' },
    hero: { 
      title: '高价回收废金属', 
      subtitle: '专业回收废铁、铜、铝和不锈钢。免费估价，现金结算，由 TheEndSolution 提供。', 
      cta: '查看今日价格' 
    },
    about: {
      title: '关于 TheEndSolution',
      description: 'TheEndSolution 经营全面的废金属和回收业务。我们凭借多年的经验，专业回收废铁、铜、铝、不锈钢及各类金属。\n\n我们致力于通过回收利用参与环境保护，同时根据全球市场提供公平的价格，并为所有客户提供快速、直接的服务。\n\n无论您是工业工厂、建筑工地还是个人，我们都提供免费估价和上门回收服务，让您轻松、高利润地出售废金属。',
      certTitle: '我们的标准与服务',
      certDesc: 'TheEndSolution 在定价方面优先考虑透明度和公平性。我们的称重秤已标准化并经过国内贸易部的合法验证。\n\n我们保持安全和环保的现场管理和分类流程，由专业团队在您的工厂提供现场采购服务，确保客户对我们的运营充满信心。',
      processTitle: '回收流程',
      facilities: [
        '联系我们并发送照片以进行初步估价',
        '安排日期和时间进行免费现场评估',
        '我们的团队带着卡车和标准化秤到达',
        '在客户面前透明地进行分类和称重',
        '根据全球市场标准定价，现场现金支付',
        '快速搬运和现场清理',
        '正确开具交易凭证和税务发票'
      ]
    },
    products: { 
      title: '今日价格', 
      filterAll: '全部', 
      filterSteel: '钢铁类', 
      filterCopper: '铜和黄铜', 
      filterAluminum: '铝和不锈钢' 
    },
    contact: { 
      title: '联系我们', 
      addressLabel: '回收站地址', 
      phoneLabel: '电话', 
      emailLabel: '电子邮件', 
      followUs: '关注我们' 
    },
  },
};