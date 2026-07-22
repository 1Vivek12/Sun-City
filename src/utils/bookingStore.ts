export interface BookingRequest {
  id: string;
  patientName: string;
  phone: string;
  date: string;
  timeSlot: string;
  department: string;
  doctor: string;
  status: 'Pending' | 'Confirmed' | 'Cancelled';
  createdAt: string;
}

export const getBookings = (): BookingRequest[] => {
  if (typeof window === 'undefined') return [];
  
  const stored = localStorage.getItem('suncity_bookings');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Error parsing bookings', e);
    }
  }
  return [];
};

export const saveBooking = (booking: Omit<BookingRequest, 'id' | 'status' | 'createdAt'>) => {
  const bookings = getBookings();
  const newBooking: BookingRequest = {
    ...booking,
    id: Date.now().toString(),
    status: 'Pending',
    createdAt: new Date().toISOString()
  };
  
  bookings.push(newBooking);
  if (typeof window !== 'undefined') {
    localStorage.setItem('suncity_bookings', JSON.stringify(bookings));
  }
  return newBooking;
};

export const updateBookingStatus = (id: string, status: BookingRequest['status']) => {
  const bookings = getBookings();
  const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
  if (typeof window !== 'undefined') {
    localStorage.setItem('suncity_bookings', JSON.stringify(updated));
  }
};
