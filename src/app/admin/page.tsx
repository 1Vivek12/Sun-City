"use client";

import React, { useState, useEffect } from 'react';
import { getBookings, updateBookingStatus, BookingRequest } from '../../utils/bookingStore';
import { getGalleryImages, saveGalleryImages, GalleryImage } from '../../utils/galleryStore';
import { DOCTORS, DEPARTMENTS } from '../../data';
import { LayoutDashboard, Image as ImageIcon, CalendarDays, LogOut, Check, X } from 'lucide-react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'bookings' | 'photos'>('bookings');

  // Booking State
  const [bookings, setBookings] = useState<BookingRequest[]>([]);
  
  // Photo State
  const [photos, setPhotos] = useState<GalleryImage[]>([]);
  const [newPhotoCaption, setNewPhotoCaption] = useState('');
  const [newPhotoLocation, setNewPhotoLocation] = useState<'home_slider' | 'gallery_page' | 'both'>('both');
  const [newPhotoUrl, setNewPhotoUrl] = useState(''); // will hold base64 data URL

  // Handle file selection and convert to base64
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setNewPhotoUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    // Check if previously authenticated in this session
    if (sessionStorage.getItem('admin_auth') === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    setBookings(getBookings().reverse());
    setPhotos(getGalleryImages().reverse());
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123') { // Hardcoded password as per plan
      setIsAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      loadData();
    } else {
      alert('Invalid Password');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  };

  // -- BOOKING ACTIONS --
  const handleUpdateStatus = (id: string, status: BookingRequest['status']) => {
    updateBookingStatus(id, status);
    loadData();
  };

  const getDocName = (id: string) => DOCTORS.find(d => d.id === id)?.name || id;
  const getDeptName = (id: string) => DEPARTMENTS.find(d => d.id === id)?.name || id;

  // -- PHOTO ACTIONS --
  const handleAddPhoto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhotoUrl) {
      alert('Please select an image file');
      return;
    }
    
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      url: newPhotoUrl,
      caption: newPhotoCaption,
      captionHindi: newPhotoCaption, // Simplified for demo
      location: newPhotoLocation
    };
    
    // In store, photos might not be reversed so let's just save as is 
    // actually, `getGalleryImages().reverse()` in loadData means `photos` is reversed.
    // It's safer to get fresh, append, and save.
    const currentFromStore = getGalleryImages();
    const storeUpdated = [...currentFromStore, newImage];
    
    saveGalleryImages(storeUpdated);
    setPhotos(storeUpdated.reverse());
    
    setNewPhotoUrl('');
    setNewPhotoCaption('');
    setNewPhotoLocation('both');
    alert("Photo added successfully!");
  };

  const handleDeletePhoto = (id: string) => {
    if (confirm('Are you sure you want to delete this photo?')) {
      const currentFromStore = getGalleryImages();
      const storeUpdated = currentFromStore.filter(p => p.id !== id);
      saveGalleryImages(storeUpdated);
      setPhotos(storeUpdated.reverse());
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-xl max-w-sm w-full space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-800">Admin Portal</h1>
            <p className="text-sm text-slate-500">Sun City Hospital</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="Enter password (admin123)"
            />
          </div>
          <button type="submit" className="w-full bg-emerald-600 text-white py-2 rounded-lg hover:bg-emerald-700 font-bold">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-slate-900 text-white flex flex-col">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5" /> Admin Panel
          </h2>
        </div>
        <div className="flex-1 py-4 flex flex-col gap-2 px-4">
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'bookings' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}
          >
            <CalendarDays className="w-5 h-5" /> Bookings
          </button>
          <button 
            onClick={() => setActiveTab('photos')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab === 'photos' ? 'bg-emerald-600' : 'hover:bg-slate-800'}`}
          >
            <ImageIcon className="w-5 h-5" /> Gallery
          </button>
        </div>
        <div className="p-4 border-t border-slate-800">
          <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-2 text-slate-400 hover:text-white w-full">
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 overflow-y-auto">
        
        {/* BOOKINGS TAB */}
        {activeTab === 'bookings' && (
          <div className="space-y-6 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800">Recent Bookings</h2>
            
            {bookings.length === 0 ? (
              <div className="bg-white p-8 rounded-xl border border-slate-200 text-center text-slate-500">
                No bookings found yet.
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="px-4 py-3 font-semibold text-slate-600">Patient</th>
                      <th className="px-4 py-3 font-semibold text-slate-600">Department / Doctor</th>
                      <th className="px-4 py-3 font-semibold text-slate-600">Date & Time</th>
                      <th className="px-4 py-3 font-semibold text-slate-600">Status</th>
                      <th className="px-4 py-3 font-semibold text-slate-600 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map(b => (
                      <tr key={b.id} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50">
                        <td className="px-4 py-3">
                          <p className="font-bold text-slate-800">{b.patientName}</p>
                          <p className="text-xs text-slate-500">{b.phone}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-slate-700">{getDeptName(b.department)}</p>
                          <p className="text-xs text-slate-500">{getDocName(b.doctor)}</p>
                        </td>
                        <td className="px-4 py-3">
                          <p className="font-medium text-slate-700">{b.date}</p>
                          <p className="text-xs text-slate-500">{b.timeSlot}</p>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`px-2 py-1 rounded text-xs font-bold ${
                            b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                            b.status === 'Cancelled' ? 'bg-red-100 text-red-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {b.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right space-x-2">
                          {b.status === 'Pending' && (
                            <>
                              <button onClick={() => handleUpdateStatus(b.id, 'Confirmed')} className="p-1.5 bg-emerald-50 text-emerald-600 hover:bg-emerald-100 rounded" title="Confirm">
                                <Check className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleUpdateStatus(b.id, 'Cancelled')} className="p-1.5 bg-red-50 text-red-600 hover:bg-red-100 rounded" title="Cancel">
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* PHOTOS TAB */}
        {activeTab === 'photos' && (
          <div className="space-y-8 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-800">Gallery & Home Slider Images</h2>
            
            {/* Add Photo Form */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-700 mb-4">Add New Image</h3>
              <form onSubmit={handleAddPhoto} className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 w-full">
                  <label className="block text-xs font-medium text-slate-500 mb-1">Select Image File</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    id="admin-file-input"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                    required
                  />
                </div>
                <div className="flex-1 w-full">
                  <label className="block text-xs font-medium text-slate-500 mb-1">Caption (Optional)</label>
                  <input
                    type="text"
                    value={newPhotoCaption}
                    onChange={e => setNewPhotoCaption(e.target.value)}
                    placeholder="e.g. ICU Room"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm"
                  />
                </div>
                <div className="flex-1 w-full">
                  <label className="block text-xs font-medium text-slate-500 mb-1">Upload Location</label>
                  <select
                    value={newPhotoLocation}
                    onChange={(e: any) => setNewPhotoLocation(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none text-sm bg-white"
                  >
                    <option value="both">Both (Slider & Gallery)</option>
                    <option value="home_slider">Home Page Slider Only</option>
                    <option value="gallery_page">Gallery Page Only</option>
                  </select>
                </div>
                <button type="submit" className="w-full md:w-auto bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg">
                  Add Image
                </button>
              </form>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map(p => (
                <div key={p.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm group relative">
                  <div className="h-48 relative">
                    <img src={p.url} alt={p.caption} className="w-full h-full object-cover" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md font-semibold">
                      {p.location === 'home_slider' ? 'Home Slider' : p.location === 'gallery_page' ? 'Gallery Only' : 'Both Places'}
                    </div>

                    <button 
                      onClick={() => handleDeletePhoto(p.id)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-md"
                      title="Delete Image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="p-3">
                    <p className="text-sm font-bold text-slate-700 truncate">{p.caption || 'No Caption'}</p>
                    <p className="text-xs text-slate-400 truncate">{p.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
