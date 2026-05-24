import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { MapPin, Users, Calendar, DollarSign, PiggyBank, Calculator, ChevronDown } from 'lucide-react';
import { regionData, getProvinces, getCitiesByProvince, calculatePension, FormData, CalculationResult } from '../utils/regionData';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    province: '北京市',
    city: '北京市',
    age: 30,
    gender: 'male',
    monthlySalary: 10000,
    yearsOfPayment: 5,
    personalAccountBalance: 48000,
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
    const calcResult = calculatePension(formData);
    setResult(calcResult);
    setShowResult(true);
  };

  const chartData = result ? {
    labels: ['基础养老金', '个人账户养老金'],
    datasets: [
      {
        data: [result.basicPension, result.personalAccountPension],
        backgroundColor: ['#FF6B35', '#F7931E'],
        borderColor: ['#ffffff', '#ffffff'],
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
          padding: 20,
          font: { size: 14 },
        },
      },
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

            {/* Age & Gender */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                  <Calendar size={18} />
                  当前年龄
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: parseInt(e.target.value) || 0 })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                  min="18"
                  max="60"
                />
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
                value={formData.monthlySalary}
                onChange={(e) => setFormData({ ...formData, monthlySalary: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                min="0"
              />
            </div>

            {/* Years of Payment */}
            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                <Calendar size={18} />
                已缴费年限 (年)
              </label>
              <input
                type="number"
                value={formData.yearsOfPayment}
                onChange={(e) => setFormData({ ...formData, yearsOfPayment: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                min="0"
                max="40"
              />
            </div>

            {/* Personal Account Balance */}
            <div>
              <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
                <PiggyBank size={18} />
                个人账户余额 (元)
              </label>
              <input
                type="number"
                value={formData.personalAccountBalance}
                onChange={(e) => setFormData({ ...formData, personalAccountBalance: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
                min="0"
              />
            </div>
          </div>
        </div>

        {/* Result Card */}
        {showResult && result && (
          <div className="bg-white rounded-2xl shadow-xl p-6 animate-fadeIn">
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
              <p className="text-orange-100 text-sm mt-1">
                替代率 {result.replacementRate}%
              </p>
            </div>

            {/* Breakdown */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <p className="text-[#1D3557] text-sm mb-1">基础养老金</p>
                <p className="text-[#FF6B35] text-2xl font-bold">
                  ¥{result.basicPension.toLocaleString()}
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4 text-center">
                <p className="text-[#1D3557] text-sm mb-1">个人账户</p>
                <p className="text-[#F7931E] text-2xl font-bold">
                  ¥{result.personalAccountPension.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Chart */}
            {chartData && (
              <div className="h-64">
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
        )}
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

      <style>{`
        @keyframes fadeIn {
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
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
