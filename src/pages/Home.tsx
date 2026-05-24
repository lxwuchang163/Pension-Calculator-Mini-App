import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { MapPin, Users, Calendar, DollarSign, PiggyBank, Calculator, ChevronDown, Clock, X } from 'lucide-react';
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
  });

  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    const cityList = getCitiesByProvince(formData.province);
    setCities(cityList.map(c => c.name));
    if (!cityList.find(c => c.name === formData.city)) {
      setFormData(prev => ({ ...prev, city: cityList[0]?.name || '' }));
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
    // 验证年龄不低于18岁
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
      `基础养老金 ¥${result.basicPension.toLocaleString()} (${((result.basicPension / result.totalPension) * 100).toFixed(1)}%)`,
      `个人账户养老金 ¥${result.personalAccountPension.toLocaleString()} (${((result.personalAccountPension / result.totalPension) * 100).toFixed(1)}%)`,
      `过渡性养老金 ¥${result.transitionPension.toLocaleString()} (${((result.transitionPension / result.totalPension) * 100).toFixed(1)}%)`,
      `过渡性调节金 ¥${result.transitionAdjustmentFund.toLocaleString()} (${((result.transitionAdjustmentFund / result.totalPension) * 100).toFixed(1)}%)`,
      `基本养老金补贴 ¥${result.basicPensionSubsidy.toLocaleString()} (${((result.basicPensionSubsidy / result.totalPension) * 100).toFixed(1)}%)`,
      `其他 ¥${result.other.toLocaleString()} (${((result.other / result.totalPension) * 100).toFixed(1)}%)`
    ],
    datasets: [
      {
        data: [result.basicPension, result.personalAccountPension, result.transitionPension, result.transitionAdjustmentFund, result.basicPensionSubsidy, result.other],
        backgroundColor: ['#FF6B35', '#F7931E', '#FFD700', '#9ACD32', '#20B2AA', '#4169E1'],
        borderColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
        borderWidth: 2,
      },
    ],
  } : null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 15,
          font: { size: 12 },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const value = context.raw;
            const percentage = ((value / result!.totalPension) * 100).toFixed(1);
            return `¥${value.toLocaleString()} (${percentage}%)`;
          }
        }
      }
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pb-32">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white py-10 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2">养老金测算</h1>
          <p className="text-orange-100 text-lg">规划美好退休生活</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-6">
        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="space-y-6">
            {/* Province & City Select */}
            <div className="grid grid-cols-2 gap-4">
              {/* Province Select */}
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <MapPin size={18} />
                  所在省份
                </label>
                <div className="relative">
                  <select
                    value={formData.province}
                    onChange={(e) => handleProvinceChange(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors bg-white appearance-none"
                  >
                    {getProvinces().map((province) => (
                      <option key={province} value={province}>{province}</option>
                    ))}
                  </select>
                  <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* City Select */}
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <MapPin size={18} />
                  所在城市
                </label>
                <div className="relative">
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors bg-white appearance-none"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Age & Gender */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Calendar size={18} />
                  当前年龄
                </label>
                <input
                  type="number"
                  value={formData.age || ''}
                  onChange={(e) => {
                    const val = e.target.value ? parseInt(e.target.value) : 0;
                    setFormData({ ...formData, age: val });
                  }}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    formData.age > 0 && formData.age < 18 ? 'border-red-400' : 'border-gray-200 focus:border-[#FF6B35]'
                  }`}
                  min="18"
                  max="60"
                  placeholder="请输入(不低于18岁)"
                />
                {formData.age > 0 && formData.age < 18 && (
                  <p className="text-red-500 text-xs mt-1">年龄不能低于18岁</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Users size={18} />
                  性别
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFormData({ ...formData, gender: 'male' })}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                      formData.gender === 'male'
                        ? 'bg-[#FF6B35] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    男
                  </button>
                  <button
                    onClick={() => setFormData({ ...formData, gender: 'female' })}
                    className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                      formData.gender === 'female'
                        ? 'bg-[#FF6B35] text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    女
                  </button>
                </div>
              </div>
            </div>

            {/* Monthly Salary */}
            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                <DollarSign size={18} />
                月缴费基数 (元)
              </label>
              <input
                type="number"
                value={formData.monthlySalary || ''}
                onChange={(e) => setFormData({ ...formData, monthlySalary: e.target.value ? parseInt(e.target.value) : 0 })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                placeholder="请输入"
              />
            </div>

            {/* Years of Payment */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Calendar size={18} />
                  实际缴费年限 (年)
                </label>
                <input
                  type="number"
                  value={formData.yearsOfPayment || ''}
                  onChange={(e) => setFormData({ ...formData, yearsOfPayment: e.target.value ? parseInt(e.target.value) : 0 })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                  placeholder="请输入"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Clock size={18} />
                  视同缴费年限 (年)
                </label>
                <input
                  type="number"
                  value={formData.freezeYears || ''}
                  onChange={(e) => setFormData({ ...formData, freezeYears: e.target.value ? parseInt(e.target.value) : 0 })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                  placeholder="请输入"
                />
              </div>
            </div>

            {/* Personal Account Balance */}
            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                <PiggyBank size={18} />
                个人账户余额 (元)
              </label>
              <input
                type="number"
                value={formData.personalAccountBalance || ''}
                onChange={(e) => setFormData({ ...formData, personalAccountBalance: e.target.value ? parseInt(e.target.value) : 0 })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                placeholder="请输入"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Calculate Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleCalculate}
            className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all active:scale-95"
          >
            开始测算
          </button>
        </div>
      </div>

      {/* Popup Modal */}
      {showResult && result && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 animate-fadeIn"
            onClick={handleClose}
          ></div>
          
          {/* Modal Content */}
          <div className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl animate-slideUp max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleClose}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Result Content */}
            <div className="px-6 pb-8">
              <h2 className="text-xl font-bold text-[#1D3557] mb-6 flex items-center gap-2">
                <Calculator size={22} />
                测算结果
              </h2>
              
              {/* Total Pension */}
              <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-xl p-6 mb-6 text-center">
                <p className="text-white text-sm opacity-90 mb-1">预计月养老金</p>
                <p className="text-white text-4xl font-bold">
                  ¥{result.totalPension.toLocaleString()}
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#1D3557] text-sm">基础养老金</p>
                      <p className="text-gray-500 text-xs mt-1">根据缴费年限和当地社会平均工资计算</p>
                    </div>
                    <p className="text-[#FF6B35] text-2xl font-bold">
                      ¥{result.basicPension.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="bg-orange-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#1D3557] text-sm">个人账户养老金</p>
                      <p className="text-gray-500 text-xs mt-1">个人缴费积累部分按月发放</p>
                    </div>
                    <p className="text-[#F7931E] text-2xl font-bold">
                      ¥{result.personalAccountPension.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#1D3557] text-sm">过渡性养老金</p>
                      <p className="text-gray-500 text-xs mt-1">建立账户前的视同缴费年限补贴</p>
                    </div>
                    <p className="text-[#DAA520] text-2xl font-bold">
                      ¥{result.transitionPension.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="bg-green-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#1D3557] text-sm">过渡性调节金</p>
                      <p className="text-gray-500 text-xs mt-1">根据当地政策发放的调节金</p>
                    </div>
                    <p className="text-[#9ACD32] text-2xl font-bold">
                      ¥{result.transitionAdjustmentFund.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="bg-cyan-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#1D3557] text-sm">基本养老金补贴</p>
                      <p className="text-gray-500 text-xs mt-1">对特定人群发放的补贴</p>
                    </div>
                    <p className="text-[#20B2AA] text-2xl font-bold">
                      ¥{result.basicPensionSubsidy.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-[#1D3557] text-sm">其他</p>
                      <p className="text-gray-500 text-xs mt-1">其他补充项目</p>
                    </div>
                    <p className="text-[#4169E1] text-2xl font-bold">
                      ¥{result.other.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Chart */}
              {chartData && (
                <div className="h-80">
                  <Pie data={chartData} options={chartOptions} />
                </div>
              )}

              {/* Note */}
              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <p className="text-gray-500 text-sm">
                  * 以上结果仅供参考，实际养老金以社保部门核算为准
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}
