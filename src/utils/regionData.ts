export interface CityData {
  name: string;
  avgSalary: number;
  personalRate: number;
  companyRate: number;
  accountRate: number;
  transitionRate: number; // 过渡性养老金计发系数
  freezeYears: number; // 建立个人账户前的视同缴费年限
}

export interface ProvinceWithCities {
  name: string;
  cities: CityData[];
}

export const regionData: ProvinceWithCities[] = [
  {
    name: "北京市",
    cities: [
      { name: "北京市", avgSalary: 13730, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "天津市",
    cities: [
      { name: "天津市", avgSalary: 9500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "上海市",
    cities: [
      { name: "上海市", avgSalary: 12183, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "重庆市",
    cities: [
      { name: "重庆市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "河北省",
    cities: [
      { name: "石家庄市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "唐山市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "秦皇岛市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "邯郸市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "邢台市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "保定市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "张家口市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "承德市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "沧州市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "廊坊市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "衡水市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "山西省",
    cities: [
      { name: "太原市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "大同市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阳泉市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "长治市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "晋城市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "朔州市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "晋中市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "运城市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "忻州市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "临汾市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "吕梁市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "辽宁省",
    cities: [
      { name: "沈阳市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "大连市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "鞍山市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "抚顺市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "本溪市", avgSalary: 5400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "丹东市", avgSalary: 5300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "锦州市", avgSalary: 5200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "营口市", avgSalary: 5100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阜新市", avgSalary: 5000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "辽阳市", avgSalary: 5200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "盘锦市", avgSalary: 5300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "铁岭市", avgSalary: 5000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "朝阳市", avgSalary: 4900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "葫芦岛市", avgSalary: 5100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "吉林省",
    cities: [
      { name: "长春市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "吉林市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "四平市", avgSalary: 5200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "辽源市", avgSalary: 5000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "通化市", avgSalary: 5100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "白山市", avgSalary: 4900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "松原市", avgSalary: 5000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "白城市", avgSalary: 4800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "延边朝鲜族自治州", avgSalary: 5200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "黑龙江省",
    cities: [
      { name: "哈尔滨市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "齐齐哈尔市", avgSalary: 5200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "鸡西市", avgSalary: 5000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "鹤岗市", avgSalary: 4800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "双鸭山市", avgSalary: 4900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "大庆市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "伊春市", avgSalary: 4700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "佳木斯市", avgSalary: 5000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "七台河市", avgSalary: 4800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "牡丹江市", avgSalary: 5300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "黑河市", avgSalary: 4600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "绥化市", avgSalary: 4700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "大兴安岭地区", avgSalary: 4500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "江苏省",
    cities: [
      { name: "南京市", avgSalary: 10500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "无锡市", avgSalary: 10200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "徐州市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "常州市", avgSalary: 9200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "苏州市", avgSalary: 10800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "南通市", avgSalary: 8500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "连云港市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "淮安市", avgSalary: 7100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "盐城市", avgSalary: 7300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "扬州市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "镇江市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "泰州市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宿迁市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "浙江省",
    cities: [
      { name: "杭州市", avgSalary: 11500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宁波市", avgSalary: 10800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "温州市", avgSalary: 9500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "嘉兴市", avgSalary: 9200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "湖州市", avgSalary: 9000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "绍兴市", avgSalary: 9300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "金华市", avgSalary: 8800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "衢州市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "舟山市", avgSalary: 8900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "台州市", avgSalary: 9000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "丽水市", avgSalary: 8300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "安徽省",
    cities: [
      { name: "合肥市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "芜湖市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "蚌埠市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "淮南市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "马鞍山市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "淮北市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "铜陵市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "安庆市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "黄山市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "滁州市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阜阳市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宿州市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "六安市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "亳州市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "池州市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宣城市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "福建省",
    cities: [
      { name: "福州市", avgSalary: 8500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "厦门市", avgSalary: 9800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "莆田市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "三明市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "泉州市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "漳州市", avgSalary: 7300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "南平市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "龙岩市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宁德市", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "江西省",
    cities: [
      { name: "南昌市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "景德镇市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "萍乡市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "九江市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "新余市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "鹰潭市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "赣州市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "吉安市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宜春市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "抚州市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "上饶市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "山东省",
    cities: [
      { name: "济南市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "青岛市", avgSalary: 8800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "淄博市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "枣庄市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "东营市", avgSalary: 7600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "烟台市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "潍坊市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "济宁市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "泰安市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "威海市", avgSalary: 7300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "日照市", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "临沂市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "德州市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "聊城市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "滨州市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "菏泽市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "河南省",
    cities: [
      { name: "郑州市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "开封市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "洛阳市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "平顶山市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "安阳市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "鹤壁市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "新乡市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "焦作市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "濮阳市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "许昌市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "漯河市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "三门峡市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "南阳市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "商丘市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "信阳市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "周口市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "驻马店市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "济源市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "湖北省",
    cities: [
      { name: "武汉市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "黄石市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "十堰市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宜昌市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "襄阳市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "鄂州市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "荆门市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "孝感市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "荆州市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "黄冈市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "咸宁市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "随州市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "恩施土家族苗族自治州", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "仙桃市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "潜江市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "天门市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "神农架林区", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "湖南省",
    cities: [
      { name: "长沙市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "株洲市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "湘潭市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "衡阳市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "邵阳市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "岳阳市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "常德市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "张家界市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "益阳市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "郴州市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "永州市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "怀化市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "娄底市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "湘西土家族苗族自治州", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "广东省",
    cities: [
      { name: "广州市", avgSalary: 11200, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "韶关市", avgSalary: 7200, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "深圳市", avgSalary: 12500, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "珠海市", avgSalary: 10500, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "汕头市", avgSalary: 7800, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "佛山市", avgSalary: 9800, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "江门市", avgSalary: 8200, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "湛江市", avgSalary: 7500, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "茂名市", avgSalary: 7200, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "肇庆市", avgSalary: 7500, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "惠州市", avgSalary: 8800, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "梅州市", avgSalary: 6800, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "汕尾市", avgSalary: 7000, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "河源市", avgSalary: 6600, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阳江市", avgSalary: 7000, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "清远市", avgSalary: 7200, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "东莞市", avgSalary: 9800, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "中山市", avgSalary: 9200, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "潮州市", avgSalary: 7000, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "揭阳市", avgSalary: 6800, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "云浮市", avgSalary: 6600, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "海南省",
    cities: [
      { name: "海口市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "三亚市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "三沙市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "儋州市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "五指山市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "琼海市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "文昌市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "万宁市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "东方市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "定安县", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "屯昌县", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "澄迈县", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "临高县", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "白沙黎族自治县", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "昌江黎族自治县", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "乐东黎族自治县", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "陵水黎族自治县", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "保亭黎族苗族自治县", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "琼中黎族苗族自治县", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "四川省",
    cities: [
      { name: "成都市", avgSalary: 8500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "自贡市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "攀枝花市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "泸州市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "德阳市", avgSalary: 7100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "绵阳市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "广元市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "遂宁市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "内江市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "乐山市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "南充市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "眉山市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宜宾市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "广安市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "达州市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "雅安市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "巴中市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "资阳市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阿坝藏族羌族自治州", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "甘孜藏族自治州", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "凉山彝族自治州", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "贵州省",
    cities: [
      { name: "贵阳市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "六盘水市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "遵义市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "安顺市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "毕节市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "铜仁市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "黔西南布依族苗族自治州", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "黔东南苗族侗族自治州", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "黔南布依族苗族自治州", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "云南省",
    cities: [
      { name: "昆明市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "曲靖市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "玉溪市", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "保山市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "昭通市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "丽江市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "普洱市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "临沧市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "楚雄彝族自治州", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "红河哈尼族彝族自治州", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "文山壮族苗族自治州", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "西双版纳傣族自治州", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "大理白族自治州", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "德宏傣族景颇族自治州", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "怒江傈僳族自治州", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "迪庆藏族自治州", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "陕西省",
    cities: [
      { name: "西安市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "铜川市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "宝鸡市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "咸阳市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "渭南市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "延安市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "汉中市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "榆林市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "安康市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "商洛市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "甘肃省",
    cities: [
      { name: "兰州市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "嘉峪关市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "金昌市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "白银市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "天水市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "武威市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "张掖市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "平凉市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "酒泉市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "庆阳市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "定西市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "陇南市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "临夏回族自治州", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "甘南藏族自治州", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "青海省",
    cities: [
      { name: "西宁市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "海东市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "海北藏族自治州", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "黄南藏族自治州", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "海南藏族自治州", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "果洛藏族自治州", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "玉树藏族自治州", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "海西蒙古族藏族自治州", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "内蒙古自治区",
    cities: [
      { name: "呼和浩特市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "包头市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "乌海市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "赤峰市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "通辽市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "鄂尔多斯市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "呼伦贝尔市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "巴彦淖尔市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "乌兰察布市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "兴安盟", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "锡林郭勒盟", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阿拉善盟", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "广西壮族自治区",
    cities: [
      { name: "南宁市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "柳州市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "桂林市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "梧州市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "北海市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "防城港市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "钦州市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "贵港市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "玉林市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "百色市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "贺州市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "河池市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "来宾市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "崇左市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "西藏自治区",
    cities: [
      { name: "拉萨市", avgSalary: 9000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "日喀则市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "昌都市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "林芝市", avgSalary: 8300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "山南市", avgSalary: 8100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "那曲市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阿里地区", avgSalary: 8500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "宁夏回族自治区",
    cities: [
      { name: "银川市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "石嘴山市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "吴忠市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "固原市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "中卫市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  },
  {
    name: "新疆维吾尔自治区",
    cities: [
      { name: "乌鲁木齐市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "克拉玛依市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "吐鲁番市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "哈密市", avgSalary: 7100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "昌吉回族自治州", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "博尔塔拉蒙古自治州", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "巴音郭楞蒙古自治州", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阿克苏地区", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "克孜勒苏柯尔克孜自治州", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "喀什地区", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "和田地区", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "伊犁哈萨克自治州", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "塔城地区", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阿勒泰地区", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "石河子市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "阿拉尔市", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "图木舒克市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "五家渠市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "北屯市", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "铁门关市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "双河市", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "可克达拉市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "昆玉市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 },
      { name: "胡杨河市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 }
    ]
  }
];

export function getProvinces(): string[] {
  return regionData.map(p => p.name);
}

export function getCitiesByProvince(provinceName: string): CityData[] {
  const province = regionData.find(p => p.name === provinceName);
  return province ? province.cities : [];
}

export function getCityData(provinceName: string, cityName: string): CityData | undefined {
  const province = regionData.find(p => p.name === provinceName);
  if (!province) return undefined;
  return province.cities.find(c => c.name === cityName);
}

export interface CalculationResult {
  basicPension: number;
  personalAccountPension: number;
  transitionPension: number;
  transitionAdjustmentFund: number; // 过渡性调节金
  basicPensionSubsidy: number; // 基本养老金补贴
  other: number; // 其他
  totalPension: number;
  replacementRate: number;
}

export interface FormData {
  province: string;
  city: string;
  age: number;
  gender: 'male' | 'female';
  monthlySalary: number;
  yearsOfPayment: number;
  personalAccountBalance: number;
  freezeYears: number; // 视同缴费年限
  transitionAdjustmentFund: number; // 过渡性调节金
  basicPensionSubsidy: number; // 基本养老金补贴
  other: number; // 其他
}

export function calculatePension(formData: FormData): CalculationResult {
  const cityData = getCityData(formData.province, formData.city);
  const region = cityData || { avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0 };
  
  const retirementAge = formData.gender === 'male' ? 60 : 55;
  const remainingYears = Math.max(0, retirementAge - formData.age);
  const totalYears = formData.yearsOfPayment + remainingYears;
  const avgIndex = 1;
  
  const indexedAvgSalary = region.avgSalary * avgIndex;
  const basicPension = (region.avgSalary + indexedAvgSalary) / 2 * totalYears * 0.01;
  
  const futureAccountBalance = formData.personalAccountBalance + 
    (formData.monthlySalary * region.accountRate / 100 * 12 * remainingYears);
  
  const months = formData.gender === 'male' ? 139 : 170;
  const personalAccountPension = futureAccountBalance / months;
  
  const transitionPension = (region.avgSalary * avgIndex * (formData.freezeYears || region.freezeYears) * (region.transitionRate || 1.2) / 100);
  
  const transitionAdjustmentFund = formData.transitionAdjustmentFund || 0;
  const basicPensionSubsidy = formData.basicPensionSubsidy || 0;
  const other = formData.other || 0;
  
  const totalPension = basicPension + personalAccountPension + transitionPension + transitionAdjustmentFund + basicPensionSubsidy + other;
  const replacementRate = (totalPension / formData.monthlySalary) * 100;
  
  return {
    basicPension: Math.round(basicPension),
    personalAccountPension: Math.round(personalAccountPension),
    transitionPension: Math.round(transitionPension),
    transitionAdjustmentFund: Math.round(transitionAdjustmentFund),
    basicPensionSubsidy: Math.round(basicPensionSubsidy),
    other: Math.round(other),
    totalPension: Math.round(totalPension),
    replacementRate: Math.round(replacementRate * 10) / 10,
  };
}
