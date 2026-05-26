import React, { useEffect } from 'react';
import { MapPin, Users, Calendar, DollarSign, PiggyBank, Calculator, ChevronDown, Clock } from 'lucide-react';
import { getProvinces, getCitiesByProvince, FormData } from '../utils/regionData';

interface PensionFormProps {
  formData: FormData;
  setFormData: (data: FormData) => void;
  onCalculate: () => void;
}

export default function PensionForm({ formData, setFormData, onCalculate }: PensionFormProps) {
  const provinces = getProvinces();
  const cities = getCitiesByProvince(formData.province).map(c => c.name);

  useEffect(() => {
    const cityList = getCitiesByProvince(formData.province);
    if (!cityList.find(c => c.name === formData.city) && cityList.length > 0) {
      setFormData({ ...formData, city: cityList[0].name });
    }
  }, [formData.province]);

  const handleProvinceChange = (province: string) => {
    const cityList = getCitiesByProvince(province);
    setFormData({
      ...formData,
      province,
      city: cityList[0]?.name || ''
    });
  };

  const handleInputChange = (field: keyof FormData, value: string | number) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
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
                {provinces.map((province) => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
              <ChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
              <MapPin size={18} />
              所在城市
            </label>
            <div className="relative">
              <select
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
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

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
              <Calendar size={18} />
              当前年龄
            </label>
            <input
              type="number"
              value={formData.age || ''}
              onChange={(e) => handleInputChange('age', e.target.value ? parseInt(e.target.value) : 0)}
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
                onClick={() => handleInputChange('gender', 'male')}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all ${
                  formData.gender === 'male'
                    ? 'bg-[#FF6B35] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                男
              </button>
              <button
                onClick={() => handleInputChange('gender', 'female')}
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

        <div>
          <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
            <DollarSign size={18} />
            月缴费基数 (元)
          </label>
          <input
            type="number"
            value={formData.monthlySalary || ''}
            onChange={(e) => handleInputChange('monthlySalary', e.target.value ? parseInt(e.target.value) : 0)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
            placeholder="请输入"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
              <Calendar size={18} />
              实际缴费年限 (年)
            </label>
            <input
              type="number"
              value={formData.yearsOfPayment || ''}
              onChange={(e) => handleInputChange('yearsOfPayment', e.target.value ? parseInt(e.target.value) : 0)}
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
              onChange={(e) => handleInputChange('freezeYears', e.target.value ? parseInt(e.target.value) : 0)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
              placeholder="请输入"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
            <PiggyBank size={18} />
            个人账户余额 (元)
          </label>
          <input
            type="number"
            value={formData.personalAccountBalance || ''}
            onChange={(e) => handleInputChange('personalAccountBalance', e.target.value ? parseInt(e.target.value) : 0)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
            placeholder="请输入"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-[#1D3557] mb-2 flex items-center gap-2">
            <Calculator size={18} />
            平均缴费指数
          </label>
          <input
            type="number"
            step="0.01"
            value={formData.averageSalaryIndex || ''}
            onChange={(e) => handleInputChange('averageSalaryIndex', e.target.value ? parseFloat(e.target.value) : 1)}
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#FF6B35] focus:outline-none transition-colors"
            placeholder="请输入（通常0.6-3）"
          />
          <p className="text-gray-500 text-xs mt-1">指数越高，基础养老金越高</p>
        </div>
      </div>
    </div>
  );
}
