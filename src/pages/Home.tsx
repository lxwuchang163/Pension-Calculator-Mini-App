import React, { useState } from 'react';
import { MapPin, Users, Calendar, DollarSign, PiggyBank, Calculator, ChevronDown, Clock, X } from 'lucide-react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { regionData, getProvinces, getCitiesByProvince, calculatePension, FormData, CalculationResult } from '../utils/regionData';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    province: '北京市',
    city: '北京市',
    age: 0,
    gender: 'male',
    monthlySalary: 0,
    yearsOfPayment: 0,
    personalAccountBalance: 0,
    freezeYears: 0,
    averageSalaryIndex: 1,
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [cities, setCities] = useState<string[]>([]);

  React.useEffect(() => {
    const cityList = getCitiesByProvince(formData.province);
    setCities(cityList.map(c => c.name));
    if (!cityList.find(c => c.name === formData.city) && cityList.length > 0) {
      setFormData(prev => ({ ...prev, city: cityList[0].name }));
    }
  }, [formData.province]);

  const handleProvinceChange = (province: string) => {
    const cityList = getCitiesByProvince(province);
    setFormData(prev => ({
      ...prev,
      province,
      city: cityList[0]?.name || ''
    }));
  };

  const handleCalculate = () => {
    if (formData.age < 18) {
      alert('当前年龄不能低于18岁');
      return;
    }
    const calcResult = calculatePension(formData);
    setResult(calcResult);
    setShowResult(true);
  };

  const handleClose = () => {
    setShowResult(false);
  };

  const chartData = result ? {
    labels: [
      `基础养老金 ¥${result.basicPension.toLocaleString()}`,
      `个人账户养老金 ¥${result.personalAccountPension.toLocaleString()}`,
      `过渡性养老金 ¥${result.transitionPension.toLocaleString()}`,
      `过渡性调节金 ¥${result.transitionAdjustmentFund.toLocaleString()}`,
      `基本养老金补贴 ¥${result.basicPensionSubsidy.toLocaleString()}`,
      `其他 ¥${result.other.toLocaleString()}`
    ],
    datasets: [{
      data: [result.basicPension, result.personalAccountPension, result.transitionPension, result.transitionAdjustmentFund, result.basicPensionSubsidy, result.other],
      backgroundColor: ['#FF6B35', '#F7931E', '#FFD700', '#9ACD32', '#20B2AA', '#4169E1'],
      borderColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
      borderWidth: 2,
    }],
  } : null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { position: 'bottom' as const, labels: { padding: 15, font: { size: 12 } } },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pb-32">
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white py-10 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2">养老金测算</h1>
          <p className="text-orange-100 text-lg">规划美好退休生活</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-6">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <MapPin size={18} /> 所在省份
                </label>
                <div className="relative">
                  <select
                    value={formData.province}
                    onChange={(e) => handleProvinceChange(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none bg-white appearance-none"
                  >
                    {getProvinces().map((province) => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                  <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <MapPin size={18} /> 所在城市
                </label>
                <div className="relative">
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none bg-white appearance-none"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Calendar size={18} /> 当前年龄
                </label>
                <input
                  type="number"
                  value={formData.age || ''}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value ? parseInt(e.target.value) : 0 })}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none ${formData.age > 0 && formData.age < 18 ? 'border-red-400' : 'border-gray-200 focus:border-[#FF6B35]'}`}
                  placeholder="请输入"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Users size={18} /> 性别
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFormData({ ...formData, gender: 'male' })}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${formData.gender === 'male' ? 'bg-[#FF6B35] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    男
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, gender: 'female' })}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${formData.gender === 'female' ? 'bg-[#FF6B35] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                  >
                    女
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                <DollarSign size={18} /> 月缴费基数 (元)
              </label>
              <input
                type="number"
                value={formData.monthlySalary || ''}
                onChange={(e) => setFormData({ ...formData, monthlySalary: e.target.value ? parseInt(e.target.value) : 0 })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none"
                placeholder="请输入"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Calendar size={18} /> 实际缴费年限 (年)
                </label>
                <input
                  type="number"
                  value={formData.yearsOfPayment || ''}
                  onChange={(e) => setFormData({ ...formData, yearsOfPayment: e.target.value ? parseInt(e.target.value) : 0 })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none"
                  placeholder="请输入"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Clock size={18} /> 视同缴费年限 (年)
                </label>
                <input
                  type="number"
                  value={formData.freezeYears || ''}
                  onChange={(e) => setFormData({ ...formData, freezeYears: e.target.value ? parseInt(e.target.value) : 0 })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none"
                  placeholder="请输入"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                <PiggyBank size={18} /> 个人账户余额 (元)
              </label>
              <input
                type="number"
                value={formData.personalAccountBalance || ''}
                onChange={(e) => setFormData({ ...formData, personalAccountBalance: e.target.value ? parseInt(e.target.value) : 0 })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none"
                placeholder="请输入"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                <Calculator size={18} /> 平均缴费指数
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.averageSalaryIndex || ''}
                onChange={(e) => setFormData({ ...formData, averageSalaryIndex: e.target.value ? parseFloat(e.target.value) : 1 })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none"
                placeholder="请输入"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleCalculate}
            className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            开始测算
          </button>
        </div>
      </div>

      {showResult && result && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={handleClose} />
          <div className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-end p-4">
              <button onClick={handleClose} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                <X size={24} className="text-gray-600" />
              </button>
            </div>
            <div className="px-6 pb-8">
              <h2 className="text-xl font-bold text-[#1D3557] mb-6 flex items-center gap-2">
                <Calculator size={22} /> 测算结果
              </h2>
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-xl p-6 mb-6 text-center">
                <p className="text-white text-sm opacity-90 mb-1">预计月养老金</p>
                <p className="text-white text-4xl font-bold">¥{result.totalPension.toLocaleString()}</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div><p className="text-[#1D3557] text-sm">基础养老金</p></div>
                    <p className="text-[#FF6B35] text-2xl font-bold">¥{result.basicPension.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div><p className="text-[#1D3557] text-sm">个人账户养老金</p></div>
                    <p className="text-[#F7931E] text-2xl font-bold">¥{result.personalAccountPension.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div><p className="text-[#1D3557] text-sm">过渡性养老金</p></div>
                    <p className="text-[#DAA520] text-2xl font-bold">¥{result.transitionPension.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div><p className="text-[#1D3557] text-sm">过渡性调节金</p></div>
                    <p className="text-[#9ACD32] text-2xl font-bold">¥{result.transitionAdjustmentFund.toLocaleString()}</p>
                  </div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div><p className="text-[#1D3557] text-sm">基本养老金补贴</p></div>
                    <p className="text-[#20B2AA] text-2xl font-bold">¥{result.basicPensionSubsidy.toLocaleString()}</p>
                  </div>
                </div>
              </div>
              {chartData && <div className="h-80"><Pie data={chartData} options={chartOptions} /></div>}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-500 text-sm">* 以上结果仅供参考，实际养老金以社保部门核算为准</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
