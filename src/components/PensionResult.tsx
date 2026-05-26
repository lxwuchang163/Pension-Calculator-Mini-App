import React from 'react';
import { X, Calculator } from 'lucide-react';
import { CalculationResult } from '../utils/regionData';
import PensionChart from './PensionChart';

interface PensionResultProps {
  result: CalculationResult;
  onClose: () => void;
}

export default function PensionResult({ result, onClose }: PensionResultProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 animate-fadeIn"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl animate-slideUp max-h-[90vh] overflow-y-auto">
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <div className="px-6 pb-8">
          <h2 className="text-xl font-bold text-[#1D3557] mb-6 flex items-center gap-2">
            <Calculator size={22} />
            测算结果
          </h2>
          
          <div className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] rounded-xl p-6 mb-6 text-center">
            <p className="text-white text-sm opacity-90 mb-1">预计月养老金</p>
            <p className="text-white text-4xl font-bold">
              ¥{result.totalPension.toLocaleString()}
            </p>
          </div>

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

          <PensionChart result={result} />

          <div className="mt-6 p-4 bg-gray-50 rounded-xl">
            <p className="text-gray-500 text-sm">
              * 以上结果仅供参考，实际养老金以社保部门核算为准
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
