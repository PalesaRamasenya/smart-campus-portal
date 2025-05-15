
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface EmergencyRequest {
  id: string;
  studentId: string;
  studentName: string;
  requestType: string;
  description: string;
  busTime: string;
  route: string;
  status: 'pending' | 'in-review' | 'approved' | 'denied';
  submittedAt: string;
}

const emergencyRequests: EmergencyRequest[] = [
  {
    id: 'ER001',
    studentId: 'TUT081234',
    studentName: 'John Doe',
    requestType: 'Priority Boarding',
    description: 'Student with temporary mobility issue needs priority boarding assistance.',
    busTime: '07:45',
    route: 'Residence to Campus',
    status: 'pending',
    submittedAt: '2025-05-06T08:15:00',
  },
  {
    id: 'ER002',
    studentId: 'TUT092345',
    studentName: 'Jane Smith',
    requestType: 'Late Booking',
    description: 'Student needs late booking approval due to emergency medical appointment.',
    busTime: '10:10',
    route: 'Campus to Residence',
    status: 'in-review',
    submittedAt: '2025-05-06T07:30:00',
  },
  {
    id: 'ER003',
    studentId: 'TUT075678',
    studentName: 'Mike Johnson',
    requestType: 'Missed Check-in',
    description: 'Student missed check-in due to network issues but arrived on time.',
    busTime: '08:10',
    route: 'Campus to Residence',
    status: 'approved',
    submittedAt: '2025-05-05T19:45:00',
  },
  {
    id: 'ER004',
    studentId: 'TUT086543',
    studentName: 'Sarah Wilson',
    requestType: 'Priority Boarding',
    description: 'Student with disability needs assistance for boarding.',
    busTime: '09:45',
    route: 'Residence to Campus',
    status: 'in-review',
    submittedAt: '2025-05-06T08:00:00',
  },
  {
    id: 'ER005',
    studentId: 'TUT097890',
    studentName: 'Robert Brown',
    requestType: 'Late Booking',
    description: 'Student needs to get back to residence for family emergency.',
    busTime: '14:10',
    route: 'Campus to Residence',
    status: 'pending',
    submittedAt: '2025-05-06T09:15:00',
  },
  {
    id: 'ER006',
    studentId: 'TUT087654',
    studentName: 'Emily Davis',
    requestType: 'Schedule Change',
    description: 'Student needs to change booking from 10:45 to 11:45 due to exam schedule change.',
    busTime: '11:45',
    route: 'Residence to Campus',
    status: 'denied',
    submittedAt: '2025-05-05T16:30:00',
  },
];

const EmergencyRequests = () => {
  const [selectedRequest, setSelectedRequest] = useState<EmergencyRequest | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [responseStatus, setResponseStatus] = useState<'approved' | 'denied' | ''>('');
  const [responseNote, setResponseNote] = useState('');
  const { toast } = useToast();

  const handleReviewRequest = (request: EmergencyRequest) => {
    setSelectedRequest(request);
    setResponseStatus('');
    setResponseNote('');
    setOpenDialog(true);
  };

  const handleSubmitResponse = () => {
    if (!responseStatus) {
      toast({
        title: "Error",
        description: "Please select a response status",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would update the backend
    toast({
      title: "Request updated",
      description: `Emergency request ${selectedRequest?.id} has been ${responseStatus}`,
    });

    setOpenDialog(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const getStatusColor = (status: EmergencyRequest['status']) => {
    switch (status) {
      case 'pending':
        return 'destructive';
      case 'in-review':
        return 'default';
      case 'approved':
        return 'outline';
      case 'denied':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  const getPriorityLevel = (request: EmergencyRequest) => {
    if (request.requestType === 'Priority Boarding') {
      return 'High';
    } else if (request.status === 'pending') {
      return 'Medium';
    } else {
      return 'Low';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Emergency Requests</h1>
        <p className="text-muted-foreground">Review and manage student emergency booking requests.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Emergency Request Queue</CardTitle>
          <CardDescription>
            These requests require admin review and approval
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Student</TableHead>
                <TableHead>Request Type</TableHead>
                <TableHead>Bus Time</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {emergencyRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.id}</TableCell>
                  <TableCell>
                    {request.studentName}
                    <div className="text-xs text-muted-foreground">{request.studentId}</div>
                  </TableCell>
                  <TableCell>{request.requestType}</TableCell>
                  <TableCell>
                    {request.busTime}
                    <div className="text-xs text-muted-foreground">{request.route}</div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={
                      getPriorityLevel(request) === 'High' ? 'destructive' :
                      getPriorityLevel(request) === 'Medium' ? 'default' :
                      'outline'
                    }>
                      {getPriorityLevel(request)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(request.status)}>
                      {request.status === 'pending' ? 'Pending' :
                       request.status === 'in-review' ? 'In Review' :
                       request.status === 'approved' ? 'Approved' :
                       'Denied'}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDate(request.submittedAt)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant={['pending', 'in-review'].includes(request.status) ? 'default' : 'outline'}
                      onClick={() => handleReviewRequest(request)}
                    >
                      {['pending', 'in-review'].includes(request.status) ? 'Review' : 'View'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle>{selectedRequest?.requestType} Request</DialogTitle>
            <DialogDescription>
              Review emergency request details and respond accordingly
            </DialogDescription>
          </DialogHeader>

          {selectedRequest && (
            <div className="space-y-4 my-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-1">Student</p>
                  <p className="text-sm">{selectedRequest.studentName} ({selectedRequest.studentId})</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Request Time</p>
                  <p className="text-sm">{formatDate(selectedRequest.submittedAt)}</p>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-1">Bus Details</p>
                <p className="text-sm">{selectedRequest.busTime} - {selectedRequest.route}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-1">Description</p>
                <Card className="bg-muted/30">
                  <CardContent className="p-3">
                    <p className="text-sm">{selectedRequest.description}</p>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <p className="text-sm font-medium mb-1">Current Status</p>
                <Badge variant={getStatusColor(selectedRequest.status)}>
                  {selectedRequest.status === 'pending' ? 'Pending' :
                   selectedRequest.status === 'in-review' ? 'In Review' :
                   selectedRequest.status === 'approved' ? 'Approved' :
                   'Denied'}
                </Badge>
              </div>

              {['pending', 'in-review'].includes(selectedRequest.status) && (
                <>
                  <div>
                    <p className="text-sm font-medium mb-1">Response</p>
                    <Select value={responseStatus} onValueChange={(value: 'approved' | 'denied') => setResponseStatus(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select response" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="approved">Approve Request</SelectItem>
                        <SelectItem value="denied">Deny Request</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-1">Admin Notes</p>
                    <Textarea 
                      placeholder="Add notes or reason for approval/denial..."
                      value={responseNote}
                      onChange={(e) => setResponseNote(e.target.value)}
                      rows={3}
                    />
                  </div>
                </>
              )}
            </div>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpenDialog(false)}>
              Cancel
            </Button>
            {['pending', 'in-review'].includes(selectedRequest?.status || '') && (
              <Button onClick={handleSubmitResponse}>
                Submit Response
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmergencyRequests;
