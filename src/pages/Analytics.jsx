
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  AreaChart, 
  Area, 
  BarChart,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Line,
  LineChart
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for charts
const weekdayData = [
  { time: '07:15', bookings: 45, checkins: 42, route: 'Res to Campus' },
  { time: '07:45', bookings: 48, checkins: 46, route: 'Res to Campus' },
  { time: '08:10', bookings: 32, checkins: 30, route: 'Campus to Res' },
  { time: '08:45', bookings: 38, checkins: 35, route: 'Res to Campus' },
  { time: '09:10', bookings: 44, checkins: 41, route: 'Campus to Res' },
  { time: '09:45', bookings: 30, checkins: 27, route: 'Res to Campus' },
  { time: '10:10', bookings: 25, checkins: 22, route: 'Campus to Res' },
  { time: '10:45', bookings: 29, checkins: 27, route: 'Res to Campus' },
  { time: '11:10', bookings: 35, checkins: 32, route: 'Campus to Res' },
  { time: '11:45', bookings: 28, checkins: 25, route: 'Res to Campus' },
];

const weekData = [
  { day: 'Monday', bookings: 320, checkins: 290 },
  { day: 'Tuesday', bookings: 302, checkins: 278 },
  { day: 'Wednesday', bookings: 334, checkins: 310 },
  { day: 'Thursday', bookings: 350, checkins: 330 },
  { day: 'Friday', bookings: 410, checkins: 385 },
  { day: 'Saturday', bookings: 175, checkins: 162 },
];

const routeDistribution = [
  { name: 'Res to Campus', value: 65 },
  { name: 'Campus to Res', value: 35 },
];

const ROUTE_COLORS = ['#005DA5', '#E4002B'];
const CHART_COLORS = {
  bookings: '#005DA5',  // TUT blue
  checkins: '#FDB913',  // TUT yellow
  missed: '#E4002B'     // TUT red
};

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('week');
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Bus usage statistics and booking analytics.</p>
        </div>
        <Select
          value={timeRange}
          onValueChange={setTimeRange}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select time range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="week">This Week</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="text-3xl font-bold mb-4">1,891</div>
            <ResponsiveContainer width="100%" height={150}>
              <LineChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="bookings" 
                  stroke={CHART_COLORS.bookings} 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-2">+8.2% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Check-in Rate</CardTitle>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="text-3xl font-bold mb-4">93.2%</div>
            <ResponsiveContainer width="100%" height={150}>
              <BarChart data={weekData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip />
                <Bar dataKey="checkins" fill={CHART_COLORS.checkins} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-muted-foreground mt-2">+1.5% from last week</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Route Distribution</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center pt-2">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={routeDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {routeDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={ROUTE_COLORS[index % ROUTE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      
      <Tabs defaultValue="usage" className="space-y-4">
        <TabsList>
          <TabsTrigger value="usage">Bus Usage</TabsTrigger>
          <TabsTrigger value="bookings">Booking Patterns</TabsTrigger>
        </TabsList>
        
        <TabsContent value="usage">
          <Card>
            <CardHeader>
              <CardTitle>Bus Usage Analytics</CardTitle>
              <CardDescription>
                Detailed breakdown of bookings and check-ins by time slot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={weekdayData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="bookings" name="Bookings" fill={CHART_COLORS.bookings} />
                  <Bar dataKey="checkins" name="Check-ins" fill={CHART_COLORS.checkins} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="bookings">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Booking Trends</CardTitle>
              <CardDescription>
                Comparison of bookings and check-ins throughout the week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                  data={weekData}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area 
                    type="monotone" 
                    dataKey="bookings" 
                    name="Total Bookings" 
                    stackId="1" 
                    stroke={CHART_COLORS.bookings} 
                    fill={`${CHART_COLORS.bookings}40`} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="checkins" 
                    name="Actual Check-ins" 
                    stackId="2" 
                    stroke={CHART_COLORS.checkins} 
                    fill={`${CHART_COLORS.checkins}40`} 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
