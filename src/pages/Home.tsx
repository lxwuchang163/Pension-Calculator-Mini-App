import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { calculatePension, FormData, CalculationResult } from '../utils/regionData';
import PensionForm from '../components/PensionForm';
import PensionResult from '../components/PensionResult';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white pb-32">
      <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white py-10 px-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-2">养老金测算</h1>
          <p className="text-orange-100 text-lg">规划美好退休生活</p>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 -mt-6">
        <PensionForm 
          formData={formData} 
          setFormData={setFormData} 
          onCalculate={handleCalculate}
        />
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleCalculate}
            className="w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            <Calculator className="inline-block mr-2" size={20} />
            开始测算
          </button>
        </div>
      </div>

      {showResult && result && (
        <PensionResult result={result} onClose={handleClose} />
      )}
    </div>
  );
}
