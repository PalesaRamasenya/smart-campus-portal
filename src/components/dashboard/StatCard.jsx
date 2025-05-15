
import React from 'react';
import { cn } from '@/lib/utils';

const StatCard = ({
  title,
  value,
  icon: Icon,
  trend,
  className,
  iconClassName,
}) => {
  return (
    <div className={cn("bg-white p-4 rounded-lg border shadow-sm", className)}>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <Icon className={cn("h-5 w-5 text-primary", iconClassName)} />
      </div>
      
      <div>
        <p className="text-2xl font-bold">{value}</p>
        
        {trend && (
          <div className={cn("flex items-center text-xs mt-1", 
            trend.positive ? "text-green-500" : "text-red-500")}>
            {trend.positive ? "↑" : "↓"} {trend.value}
            <span className="ml-1">from last week</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
