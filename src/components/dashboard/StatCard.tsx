
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: { 
    value: string | number; 
    positive: boolean;
  };
  className?: string;
  iconClassName?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon: Icon,
  trend,
  className,
  iconClassName,
}) => {
  return (
    <div className={cn("stat-card", className)}>
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <Icon className={cn("h-5 w-5 text-primary", iconClassName)} />
      </div>
      
      <div>
        <p className="stat-value">{value}</p>
        
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
