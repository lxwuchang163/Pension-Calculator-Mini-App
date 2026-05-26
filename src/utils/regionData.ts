export interface CityData {
  name: string;
  avgSalary: number;
  personalRate: number;
  companyRate: number;
  accountRate: number;
  transitionRate: number;
  freezeYears: number;
  hasTransitionAdjustment: boolean;
  transitionAdjustmentAmount: number;
  hasBasicSubsidy: boolean;
  basicSubsidyAmount: number;
  accountGrowthRate: number;
  salaryGrowthRate: number;
}

export interface ProvinceWithCities {
  name: string;
  cities: CityData[];
}

export const regionData: ProvinceWithCities[] = [
  {
    name: "北京市",
    cities: [
      { 
        name: "北京市", 
        avgSalary: 13730, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 100,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 150,
        accountGrowthRate: 6,
        salaryGrowthRate: 5
      }
    ]
  },
  {
    name: "天津市",
    cities: [
      { 
        name: "天津市", 
        avgSalary: 9500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 80,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 100,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      }
    ]
  },
  {
    name: "上海市",
    cities: [
      { 
        name: "上海市", 
        avgSalary: 12183, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 120,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 180,
        accountGrowthRate: 6,
        salaryGrowthRate: 5
      }
    ]
  },
  {
    name: "重庆市",
    cities: [
      { 
        name: "重庆市", 
        avgSalary: 7800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.4, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 60,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 80,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      }
    ]
  },
  {
    name: "河北省",
    cities: [
      { name: "石家庄市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 50, hasBasicSubsidy: true, basicSubsidyAmount: 60, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "唐山市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 55, hasBasicSubsidy: true, basicSubsidyAmount: 70, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "秦皇岛市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "邯郸市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 50, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "邢台市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 45, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "保定市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "张家口市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 50, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "承德市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 45, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "沧州市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 50, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "廊坊市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "衡水市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 45, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 }
    ]
  },
  {
    name: "山西省",
    cities: [
      { name: "太原市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 55, hasBasicSubsidy: true, basicSubsidyAmount: 70, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "大同市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "阳泉市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 50, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "长治市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 52, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "晋城市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 50, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "朔州市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 48, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "晋中市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 50, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "运城市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 47, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "忻州市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 45, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "临汾市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 48, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "吕梁市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 50, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 }
    ]
  },
  {
    name: "内蒙古自治区",
    cities: [
      { name: "呼和浩特市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 50, hasBasicSubsidy: true, basicSubsidyAmount: 65, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "包头市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 60, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "乌海市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "赤峰市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 52, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "通辽市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 50, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "鄂尔多斯市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 55, hasBasicSubsidy: true, basicSubsidyAmount: 70, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "呼伦贝尔市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 48, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "巴彦淖尔市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 47, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "乌兰察布市", avgSalary: 5300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 45, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "兴安盟", avgSalary: 5200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 44, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "锡林郭勒盟", avgSalary: 5400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 46, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "阿拉善盟", avgSalary: 5300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 45, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 }
    ]
  },
  {
    name: "辽宁省",
    cities: [
      { name: "沈阳市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 65, hasBasicSubsidy: true, basicSubsidyAmount: 85, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "大连市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 70, hasBasicSubsidy: true, basicSubsidyAmount: 90, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "鞍山市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 65, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "抚顺市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 62, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "本溪市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 60, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "丹东市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 58, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "锦州市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 61, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "营口市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 59, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "阜新市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "辽阳市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 57, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "盘锦市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 63, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "铁岭市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 56, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "朝阳市", avgSalary: 5400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 54, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "葫芦岛市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 5, salaryGrowthRate: 4 }
    ]
  },
  {
    name: "吉林省",
    cities: [
      { name: "长春市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 58, hasBasicSubsidy: true, basicSubsidyAmount: 78, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "吉林市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 68, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "四平市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 60, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "辽源市", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 58, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "通化市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 59, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "白山市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 56, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "松原市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 60, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "白城市", avgSalary: 5400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "延边朝鲜族自治州", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 59, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 }
    ]
  },
  {
    name: "黑龙江省",
    cities: [
      { name: "哈尔滨市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 55, hasBasicSubsidy: true, basicSubsidyAmount: 75, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "齐齐哈尔市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 60, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "鸡西市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 56, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "鹤岗市", avgSalary: 5300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 54, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "双鸭山市", avgSalary: 5400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "大庆市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 64, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "伊春市", avgSalary: 5200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 53, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "佳木斯市", avgSalary: 5500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 56, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "七台河市", avgSalary: 5400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "牡丹江市", avgSalary: 5700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 58, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "黑河市", avgSalary: 5300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 54, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "绥化市", avgSalary: 5400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 55, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "大兴安岭地区", avgSalary: 5200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.4, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 53, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 }
    ]
  },
  {
    name: "江苏省",
    cities: [
      { name: "南京市", avgSalary: 10500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 85, hasBasicSubsidy: true, basicSubsidyAmount: 110, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "苏州市", avgSalary: 10800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 90, hasBasicSubsidy: true, basicSubsidyAmount: 120, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "无锡市", avgSalary: 10200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 82, hasBasicSubsidy: true, basicSubsidyAmount: 105, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "常州市", avgSalary: 9200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 75, hasBasicSubsidy: true, basicSubsidyAmount: 95, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "南通市", avgSalary: 8500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 68, hasBasicSubsidy: true, basicSubsidyAmount: 88, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "扬州市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 80, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "镇江市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 82, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "泰州市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 85, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "徐州市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 75, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "连云港市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 72, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "淮安市", avgSalary: 7100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 70, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "盐城市", avgSalary: 7300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 72, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "宿迁市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 68, accountGrowthRate: 5, salaryGrowthRate: 4 }
    ]
  },
  {
    name: "浙江省",
    cities: [
      { name: "杭州市", avgSalary: 11500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 100, hasBasicSubsidy: true, basicSubsidyAmount: 130, accountGrowthRate: 6, salaryGrowthRate: 5 },
      { name: "宁波市", avgSalary: 10800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 95, hasBasicSubsidy: true, basicSubsidyAmount: 120, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "温州市", avgSalary: 9500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 85, hasBasicSubsidy: true, basicSubsidyAmount: 105, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "绍兴市", avgSalary: 9300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 82, hasBasicSubsidy: true, basicSubsidyAmount: 102, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "嘉兴市", avgSalary: 9200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 80, hasBasicSubsidy: true, basicSubsidyAmount: 100, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "湖州市", avgSalary: 9000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 78, hasBasicSubsidy: true, basicSubsidyAmount: 98, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "金华市", avgSalary: 8800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 95, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "衢州市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 88, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "舟山市", avgSalary: 8900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 97, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "台州市", avgSalary: 9000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 98, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "丽水市", avgSalary: 8300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 89, accountGrowthRate: 5, salaryGrowthRate: 4 }
    ]
  },
  {
    name: "安徽省",
    cities: [
      { name: "合肥市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 65, hasBasicSubsidy: true, basicSubsidyAmount: 85, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "芜湖市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 80, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "蚌埠市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 70, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "淮南市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 67, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "马鞍山市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 74, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "淮北市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 65, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "铜陵市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 68, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "安庆市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 66, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "黄山市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 64, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "滁州市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 69, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "阜阳市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 62, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "宿州市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 61, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "六安市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 60, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "亳州市", avgSalary: 5800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 59, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "池州市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 62, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "宣城市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 65, accountGrowthRate: 5, salaryGrowthRate: 4 }
    ]
  },
  {
    name: "福建省",
    cities: [
      { name: "福州市", avgSalary: 8800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 70, hasBasicSubsidy: true, basicSubsidyAmount: 95, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "厦门市", avgSalary: 9500, personalRate: 8, companyRate: 14, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 80, hasBasicSubsidy: true, basicSubsidyAmount: 105, accountGrowthRate: 6, salaryGrowthRate: 5 },
      { name: "莆田市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 80, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "三明市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 75, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "泉州市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 88, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "漳州市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 77, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "南平市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 72, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "龙岩市", avgSalary: 7100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 76, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 },
      { name: "宁德市", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.2, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 74, accountGrowthRate: 5.5, salaryGrowthRate: 4.5 }
    ]
  },
  {
    name: "江西省",
    cities: [
      { name: "南昌市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 58, hasBasicSubsidy: true, basicSubsidyAmount: 78, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "景德镇市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 68, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "萍乡市", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 66, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "九江市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 71, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "新余市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 69, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "鹰潭市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 67, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "赣州市", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 65, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "吉安市", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 64, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "宜春市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 63, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "抚州市", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 62, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "上饶市", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 63, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 }
    ]
  },
  {
    name: "山东省",
    cities: [
      { name: "济南市", avgSalary: 8200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 70, hasBasicSubsidy: true, basicSubsidyAmount: 90, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "青岛市", avgSalary: 8800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 75, hasBasicSubsidy: true, basicSubsidyAmount: 100, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "淄博市", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 80, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "枣庄市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 70, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "东营市", avgSalary: 7600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 82, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "烟台市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 65, hasBasicSubsidy: true, basicSubsidyAmount: 88, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "潍坊市", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 75, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "济宁市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 72, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "泰安市", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 70, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "威海市", avgSalary: 7300, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 78, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "日照市", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 72, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "临沂市", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 72, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "德州市", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 68, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "聊城市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 66, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "滨州市", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 68, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 },
      { name: "菏泽市", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 64, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 }
    ]
  },
  {
    name: "河南省",
    cities: [
      { name: "郑州市", avgSalary: 8000, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: true, transitionAdjustmentAmount: 65, hasBasicSubsidy: true, basicSubsidyAmount: 85, accountGrowthRate: 5, salaryGrowthRate: 4 },
      { name: "开封市", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8, transitionRate: 1.3, freezeYears: 0, hasTransitionAdjustment: false, transitionAdjustmentAmount: 0, hasBasicSubsidy: true, basicSubsidyAmount: 68, accountGrowthRate: 4.5, salaryGrowthRate: 3.5 }
    ]
  }
];

export function getProvinces(): string[] {
  return regionData.map(p => p.name);
}

export function getCitiesByProvince(provinceName: string): CityData[] {
  const province = regionData.find(p => p.name === provinceName);
  return province?.cities || [];
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
  transitionAdjustmentFund: number;
  basicPensionSubsidy: number;
  other: number;
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
  freezeYears: number;
  averageSalaryIndex: number;
}

export function calculatePension(formData: FormData): CalculationResult {
  const cityData = getCityData(formData.province, formData.city);
  const region = cityData || { 
    avgSalary: 6000, 
    personalRate: 8, 
    companyRate: 16, 
    accountRate: 8, 
    transitionRate: 1.2, 
    freezeYears: 0,
    hasTransitionAdjustment: false,
    transitionAdjustmentAmount: 0,
    hasBasicSubsidy: false,
    basicSubsidyAmount: 0,
    accountGrowthRate: 5,
    salaryGrowthRate: 4
  };
  
  const retirementAge = formData.gender === 'male' ? 60 : 55;
  const remainingYears = Math.max(0, retirementAge - formData.age);
  const totalYears = formData.yearsOfPayment + remainingYears;
  const avgIndex = formData.averageSalaryIndex || 1;
  
  const futureAvgSalary = region.avgSalary * Math.pow(1 + region.salaryGrowthRate / 100, remainingYears);
  const indexedAvgSalary = futureAvgSalary * avgIndex;
  const basicPension = (futureAvgSalary + indexedAvgSalary) / 2 * totalYears * 0.01;
  
  let futureAccountBalance = formData.personalAccountBalance;
  for (let i = 0; i < remainingYears; i++) {
    const annualSalary = formData.monthlySalary * 12 * Math.pow(1 + region.salaryGrowthRate / 100, i);
    const annualAccountDeposit = annualSalary * region.accountRate / 100;
    futureAccountBalance = futureAccountBalance * (1 + region.accountGrowthRate / 100) + annualAccountDeposit;
  }
  
  const months = formData.gender === 'male' ? 139 : 170;
  const personalAccountPension = futureAccountBalance / months;
  const transitionPension = futureAvgSalary * avgIndex * (formData.freezeYears || region.freezeYears) * (region.transitionRate || 1.2) / 100;
  const transitionAdjustmentFund = region.hasTransitionAdjustment ? region.transitionAdjustmentAmount : 0;
  const basicPensionSubsidy = region.hasBasicSubsidy ? region.basicSubsidyAmount : 0;
  const other = 0;
  
  const totalPension = basicPension + personalAccountPension + transitionPension + transitionAdjustmentFund + basicPensionSubsidy + other;
  const replacementRate = formData.monthlySalary > 0 ? (totalPension / formData.monthlySalary) * 100 : 0;
  
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