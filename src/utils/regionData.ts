export interface RegionData {
  name: string;
  avgSalary: number; // 社会平均工资 (元/月)
  personalRate: number; // 个人缴费比例 (%)
  companyRate: number; // 单位缴费比例 (%)
  accountRate: number; // 个人账户比例 (%)
}

export const provinceData: Record<string, RegionData> = {
  "北京市": { name: "北京市", avgSalary: 13730, personalRate: 8, companyRate: 16, accountRate: 8 },
  "天津市": { name: "天津市", avgSalary: 9500, personalRate: 8, companyRate: 16, accountRate: 8 },
  "上海市": { name: "上海市", avgSalary: 12183, personalRate: 8, companyRate: 16, accountRate: 8 },
  "重庆市": { name: "重庆市", avgSalary: 7800, personalRate: 8, companyRate: 16, accountRate: 8 },
  "河北省": { name: "河北省", avgSalary: 6500, personalRate: 8, companyRate: 16, accountRate: 8 },
  "山西省": { name: "山西省", avgSalary: 6200, personalRate: 8, companyRate: 16, accountRate: 8 },
  "辽宁省": { name: "辽宁省", avgSalary: 5900, personalRate: 8, companyRate: 16, accountRate: 8 },
  "吉林省": { name: "吉林省", avgSalary: 5600, personalRate: 8, companyRate: 16, accountRate: 8 },
  "黑龙江省": { name: "黑龙江省", avgSalary: 5400, personalRate: 8, companyRate: 16, accountRate: 8 },
  "江苏省": { name: "江苏省", avgSalary: 9200, personalRate: 8, companyRate: 16, accountRate: 8 },
  "浙江省": { name: "浙江省", avgSalary: 9800, personalRate: 8, companyRate: 16, accountRate: 8 },
  "安徽省": { name: "安徽省", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8 },
  "福建省": { name: "福建省", avgSalary: 7500, personalRate: 8, companyRate: 16, accountRate: 8 },
  "江西省": { name: "江西省", avgSalary: 6300, personalRate: 8, companyRate: 16, accountRate: 8 },
  "山东省": { name: "山东省", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8 },
  "河南省": { name: "河南省", avgSalary: 6100, personalRate: 8, companyRate: 16, accountRate: 8 },
  "湖北省": { name: "湖北省", avgSalary: 7300, personalRate: 8, companyRate: 16, accountRate: 8 },
  "湖南省": { name: "湖南省", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8 },
  "广东省": { name: "广东省", avgSalary: 9700, personalRate: 8, companyRate: 14, accountRate: 8 },
  "海南省": { name: "海南省", avgSalary: 7100, personalRate: 8, companyRate: 16, accountRate: 8 },
  "四川省": { name: "四川省", avgSalary: 7400, personalRate: 8, companyRate: 16, accountRate: 8 },
  "贵州省": { name: "贵州省", avgSalary: 6600, personalRate: 8, companyRate: 16, accountRate: 8 },
  "云南省": { name: "云南省", avgSalary: 6700, personalRate: 8, companyRate: 16, accountRate: 8 },
  "陕西省": { name: "陕西省", avgSalary: 7000, personalRate: 8, companyRate: 16, accountRate: 8 },
  "甘肃省": { name: "甘肃省", avgSalary: 6000, personalRate: 8, companyRate: 16, accountRate: 8 },
  "青海省": { name: "青海省", avgSalary: 7600, personalRate: 8, companyRate: 16, accountRate: 8 },
  "内蒙古自治区": { name: "内蒙古自治区", avgSalary: 6800, personalRate: 8, companyRate: 16, accountRate: 8 },
  "广西壮族自治区": { name: "广西壮族自治区", avgSalary: 6400, personalRate: 8, companyRate: 16, accountRate: 8 },
  "西藏自治区": { name: "西藏自治区", avgSalary: 8500, personalRate: 8, companyRate: 16, accountRate: 8 },
  "宁夏回族自治区": { name: "宁夏回族自治区", avgSalary: 6900, personalRate: 8, companyRate: 16, accountRate: 8 },
  "新疆维吾尔自治区": { name: "新疆维吾尔自治区", avgSalary: 7200, personalRate: 8, companyRate: 16, accountRate: 8 },
};

export interface CalculationResult {
  basicPension: number;
  personalAccountPension: number;
  totalPension: number;
  replacementRate: number;
}

export interface FormData {
  province: string;
  age: number;
  gender: 'male' | 'female';
  monthlySalary: number;
  yearsOfPayment: number;
  personalAccountBalance: number;
}

export function calculatePension(formData: FormData): CalculationResult {
  const region = provinceData[formData.province];
  
  // 退休年龄
  const retirementAge = formData.gender === 'male' ? 60 : 55;
  
  // 剩余缴费年限
  const remainingYears = Math.max(0, retirementAge - formData.age);
  
  // 总缴费年限
  const totalYears = formData.yearsOfPayment + remainingYears;
  
  // 平均缴费工资指数（简化计算，假设为1）
  const avgIndex = 1;
  
  // 基础养老金 = (当地上年度在岗职工月平均工资 + 本人指数化月平均缴费工资) / 2 × 缴费年限 × 1%
  const indexedAvgSalary = region.avgSalary * avgIndex;
  const basicPension = (region.avgSalary + indexedAvgSalary) / 2 * totalYears * 0.01;
  
  // 个人账户养老金（考虑未来缴费）
  const futureAccountBalance = formData.personalAccountBalance + 
    (formData.monthlySalary * region.accountRate / 100 * 12 * remainingYears);
  
  // 计发月数（60岁139，55岁170）
  const months = formData.gender === 'male' ? 139 : 170;
  const personalAccountPension = futureAccountBalance / months;
  
  // 总养老金
  const totalPension = basicPension + personalAccountPension;
  
  // 替代率
  const replacementRate = (totalPension / formData.monthlySalary) * 100;
  
  return {
    basicPension: Math.round(basicPension),
    personalAccountPension: Math.round(personalAccountPension),
    totalPension: Math.round(totalPension),
    replacementRate: Math.round(replacementRate * 10) / 10,
  };
}
