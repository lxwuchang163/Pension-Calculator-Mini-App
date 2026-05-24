export interface CityData {
  name: string;
  avgSalary: number; // 社会平均工资
  personalRate: number; // 个人缴费比例
  companyRate: number; // 单位缴费比例
  accountRate: number; // 个人账户比例
  transitionRate: number; // 过渡性养老金计发系数
  freezeYears: number; // 建立个人账户前的视同缴费年限
  hasTransitionAdjustment: boolean; // 是否有过渡性调节金
  transitionAdjustmentAmount: number; // 过渡性调节金金额
  hasBasicSubsidy: boolean; // 是否有基本养老金补贴
  basicSubsidyAmount: number; // 基本养老金补贴金额
  accountGrowthRate: number; // 个人账户记账利率
  salaryGrowthRate: number; // 社会平均工资增长率
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
      { 
        name: "石家庄市", 
        avgSalary: 6800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 50,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 60,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "唐山市", 
        avgSalary: 7200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 55,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 70,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "秦皇岛市", 
        avgSalary: 6500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 55,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "邯郸市", 
        avgSalary: 6100, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 50,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "邢台市", 
        avgSalary: 5800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 45,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "保定市", 
        avgSalary: 6200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 55,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "张家口市", 
        avgSalary: 5900, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 50,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "承德市", 
        avgSalary: 5600, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 45,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "沧州市", 
        avgSalary: 6100, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 50,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "廊坊市", 
        avgSalary: 6500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 55,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "衡水市", 
        avgSalary: 5500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 45,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      }
    ]
  },
  {
    name: "广东省",
    cities: [
      { 
        name: "广州市", 
        avgSalary: 11200, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 90,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 120,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "深圳市", 
        avgSalary: 12500, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 100,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 150,
        accountGrowthRate: 6,
        salaryGrowthRate: 5
      },
      { 
        name: "珠海市", 
        avgSalary: 10500, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 85,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 110,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "佛山市", 
        avgSalary: 9800, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 80,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 100,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "东莞市", 
        avgSalary: 9800, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 80,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 100,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "中山市", 
        avgSalary: 9200, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 95,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "惠州市", 
        avgSalary: 8800, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 90,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "江门市", 
        avgSalary: 8200, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 85,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "肇庆市", 
        avgSalary: 7500, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 75,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "汕头市", 
        avgSalary: 7800, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 80,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "韶关市", 
        avgSalary: 7200, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 70,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "湛江市", 
        avgSalary: 7500, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 75,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "茂名市", 
        avgSalary: 7200, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 70,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "阳江市", 
        avgSalary: 7000, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 68,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "清远市", 
        avgSalary: 7200, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 70,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "潮州市", 
        avgSalary: 7000, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 68,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "揭阳市", 
        avgSalary: 6800, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 65,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "云浮市", 
        avgSalary: 6600, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 62,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "梅州市", 
        avgSalary: 6800, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 65,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "汕尾市", 
        avgSalary: 7000, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 68,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "河源市", 
        avgSalary: 6600, 
        personalRate: 8, 
        companyRate: 14, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 62,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      }
    ]
  },
  {
    name: "江苏省",
    cities: [
      { 
        name: "南京市", 
        avgSalary: 10500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 85,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 110,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "苏州市", 
        avgSalary: 10800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 90,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 120,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "无锡市", 
        avgSalary: 10200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 82,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 105,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "常州市", 
        avgSalary: 9200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 75,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 95,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "南通市", 
        avgSalary: 8500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 68,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 88,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "扬州市", 
        avgSalary: 7800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 80,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "镇江市", 
        avgSalary: 8000, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 82,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "泰州市", 
        avgSalary: 8200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 85,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "徐州市", 
        avgSalary: 7500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 75,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "连云港市", 
        avgSalary: 7200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 72,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "淮安市", 
        avgSalary: 7100, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 70,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "盐城市", 
        avgSalary: 7300, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 72,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "宿迁市", 
        avgSalary: 6800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 68,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      }
    ]
  },
  {
    name: "浙江省",
    cities: [
      { 
        name: "杭州市", 
        avgSalary: 11500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 100,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 130,
        accountGrowthRate: 6,
        salaryGrowthRate: 5
      },
      { 
        name: "宁波市", 
        avgSalary: 10800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 95,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 120,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "温州市", 
        avgSalary: 9500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 85,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 105,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "绍兴市", 
        avgSalary: 9300, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 82,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 102,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "嘉兴市", 
        avgSalary: 9200, 
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
      },
      { 
        name: "湖州市", 
        avgSalary: 9000, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 78,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 98,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "金华市", 
        avgSalary: 8800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 95,
        accountGrowthRate: 5.5,
        salaryGrowthRate: 4.5
      },
      { 
        name: "衢州市", 
        avgSalary: 8200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 88,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "舟山市", 
        avgSalary: 8900, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 97,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "台州市", 
        avgSalary: 9000, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 98,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "丽水市", 
        avgSalary: 8300, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.2, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 89,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      }
    ]
  },
  {
    name: "山东省",
    cities: [
      { 
        name: "济南市", 
        avgSalary: 8200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 70,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 90,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "青岛市", 
        avgSalary: 8800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 75,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 100,
        accountGrowthRate: 5,
        salaryGrowthRate: 4
      },
      { 
        name: "淄博市", 
        avgSalary: 7500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 80,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "烟台市", 
        avgSalary: 8000, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: true,
        transitionAdjustmentAmount: 65,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 88,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "潍坊市", 
        avgSalary: 7200, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 75,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "济宁市", 
        avgSalary: 7000, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 72,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "泰安市", 
        avgSalary: 6800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 70,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "威海市", 
        avgSalary: 7300, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 78,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "日照市", 
        avgSalary: 6900, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 72,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "临沂市", 
        avgSalary: 7000, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 72,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "德州市", 
        avgSalary: 6600, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 68,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "聊城市", 
        avgSalary: 6500, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 66,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "滨州市", 
        avgSalary: 6700, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 68,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "菏泽市", 
        avgSalary: 6400, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 64,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "枣庄市", 
        avgSalary: 6800, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 70,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      },
      { 
        name: "东营市", 
        avgSalary: 7600, 
        personalRate: 8, 
        companyRate: 16, 
        accountRate: 8, 
        transitionRate: 1.3, 
        freezeYears: 0,
        hasTransitionAdjustment: false,
        transitionAdjustmentAmount: 0,
        hasBasicSubsidy: true,
        basicSubsidyAmount: 82,
        accountGrowthRate: 4.5,
        salaryGrowthRate: 3.5
      }
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
  freezeYears: number; // 视同缴费年限
  averageSalaryIndex: number; // 平均缴费指数
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
  
  // 计算退休时的社会平均工资（考虑工资增长）
  const futureAvgSalary = region.avgSalary * Math.pow(1 + region.salaryGrowthRate / 100, remainingYears);
  
  // 计算指数化平均缴费工资
  const indexedAvgSalary = futureAvgSalary * avgIndex;
  
  // 基础养老金
  const basicPension = (futureAvgSalary + indexedAvgSalary) / 2 * totalYears * 0.01;
  
  // 计算未来个人账户余额（考虑记账利率和复利增长）
  let futureAccountBalance = formData.personalAccountBalance;
  
  // 计算每年个人账户缴费金额（考虑工资增长）
  for (let i = 0; i < remainingYears; i++) {
    const annualSalary = formData.monthlySalary * 12 * Math.pow(1 + region.salaryGrowthRate / 100, i);
    const annualAccountDeposit = annualSalary * region.accountRate / 100;
    futureAccountBalance = futureAccountBalance * (1 + region.accountGrowthRate / 100) + annualAccountDeposit;
  }
  
  // 个人账户养老金
  const months = formData.gender === 'male' ? 139 : 170;
  const personalAccountPension = futureAccountBalance / months;
  
  // 过渡性养老金
  const transitionPension = futureAvgSalary * avgIndex * (formData.freezeYears || region.freezeYears) * (region.transitionRate || 1.2) / 100;
  
  // 各地政策补贴
  const transitionAdjustmentFund = region.hasTransitionAdjustment ? region.transitionAdjustmentAmount : 0;
  const basicPensionSubsidy = region.hasBasicSubsidy ? region.basicSubsidyAmount : 0;
  const other = 0;
  
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
