
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EmergencyRequest {
  id: string;
  requestType: string;
  studentId: string;
  status: 'pending' | 'in-review' | 'resolved';
  time: string;
  route: string;
}

interface EmergencyRequestsTableProps {
  requests: EmergencyRequest[];
}

const EmergencyRequestsTable: React.FC<EmergencyRequestsTableProps> = ({ requests }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle className="text-lg">Emergency Requests</CardTitle>
          <Button size="sm" variant="outline">View All</Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Request Type</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Route</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.requestType}</TableCell>
                <TableCell>{request.studentId}</TableCell>
                <TableCell>{request.route}</TableCell>
                <TableCell>{request.time}</TableCell>
                <TableCell>
                  <Badge variant={
                    request.status === 'pending' ? 'destructive' : 
                    request.status === 'in-review' ? 'default' : 
                    'outline'
                  }>
                    {request.status === 'pending' ? 'Pending' : 
                     request.status === 'in-review' ? 'In Review' : 
                     'Resolved'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">Review</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EmergencyRequestsTable;
