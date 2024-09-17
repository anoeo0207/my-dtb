import React, { useState } from 'react';
import { Radio, RadioChangeEvent } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

interface AppProps {
  content1: string;
  content2: string;
  id1: string;
  id2: string;
  onChange: (value: string) => void;
}

const App: React.FC<AppProps> = ({ content1, content2, id1, id2, onChange }) => {
  const [value, setValue] = useState<string>('pending');

  const handleChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div>
      <div className="flex items-center">
        <Radio
          id={id1}
          name="status"
          value="pending"
          className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
          checked={value === 'pending'}
          onChange={handleChange}
        />
        <label
          htmlFor={id1}
          className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-400 px-3 py-1.5 text-xs font-medium text-gray-600"
        >
          {content1} <ClockCircleOutlined className="h-4 w-4" />
        </label>
      </div>

      <div className="flex items-center mt-2">
        <Radio
          id={id2}
          name="status"
          value="paid"
          className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
          checked={value === 'paid'}
          onChange={handleChange}
        />
        <label
          htmlFor={id2}
          className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-400 px-3 py-1.5 text-xs font-medium text-white-400"
        >
          {content2} <CheckIcon className="h-4 w-4" />
        </label>
      </div>
    </div>
  );
};

export default App;