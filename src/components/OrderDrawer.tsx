import React, { useState } from 'react';
import { X, Plus, Minus, Check, ShoppingBag, ArrowRight } from 'lucide-react';
import { SaladItem } from '../types';

interface OrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  salad: SaladItem | null;
  onOrderSuccess: (orderSummary: any) => void;
}

export const OrderDrawer: React.FC<OrderDrawerProps> = ({
  isOpen,
  onClose,
  salad,
  onOrderSuccess,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedDressing, setSelectedDressing] = useState('অলিভ অয়েল ও লেমন ড্রেসিং');
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOrder, setSubmittedOrder] = useState<any | null>(null);

  if (!isOpen || !salad) return null;

  const dressings = [
    { id: 'd1', name: 'অলিভ অয়েল ও লেমন ড্রেসিং', price: 0 },
    { id: 'd2', name: 'বালসামিক ভিনেগারেট', price: 0 },
    { id: 'd3', name: 'হানি মাস্টার্ড হার্ব', price: 20 },
    { id: 'd4', name: 'গ্রীক ইয়োগার্ট গার্লিক', price: 20 },
  ];

  const extraToppings = [
    { id: 't1', name: 'অতিরিক্ত অ্যাভোকাডো স্লাইস', price: 60 },
    { id: 't2', name: 'রোস্টেড পাম্পকিন ও চিয়া সিডস', price: 30 },
    { id: 't3', name: 'গ্রীক ফেটা চিজ কিউব', price: 50 },
    { id: 't4', name: 'ফার্ম ফ্রেশ সেদ্ধ ডিম', price: 30 },
  ];

  const toggleTopping = (toppingName: string) => {
    if (selectedToppings.includes(toppingName)) {
      setSelectedToppings(selectedToppings.filter((t) => t !== toppingName));
    } else {
      setSelectedToppings([...selectedToppings, toppingName]);
    }
  };

  const toppingsPrice = selectedToppings.reduce((acc, name) => {
    const item = extraToppings.find((t) => t.name === name);
    return acc + (item ? item.price : 0);
  }, 0);

  const dressingExtra =
    dressings.find((d) => d.name === selectedDressing)?.price || 0;

  const unitTotal = salad.price + dressingExtra + toppingsPrice;
  const grandTotal = unitTotal * quantity;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !customerPhone || !deliveryAddress) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const summary = {
        orderId: `FS-${Math.floor(1000 + Math.random() * 9000)}`,
        saladName: salad.name,
        banglaName: salad.banglaName,
        quantity,
        dressing: selectedDressing,
        toppings: selectedToppings,
        total: grandTotal,
        customerName,
        customerPhone,
        deliveryAddress,
      };
      setSubmittedOrder(summary);
      onOrderSuccess(summary);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FFFDF5] shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-6 border-b border-[#EAF4E3] flex items-center justify-between bg-white sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-[#EAF4E3] text-[#4F8F3A] flex items-center justify-center font-bold text-sm">
                🥗
              </span>
              <h3 className="font-bold text-lg text-[#183D2B]">
                {submittedOrder ? 'অর্ডার কনফার্মেশন' : 'অর্ডার কাস্টমাইজেশন'}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#183D2B] hover:bg-[#EAF4E3] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {submittedOrder ? (
            /* Order Confirmation View */
            <div className="p-6 space-y-6 flex-1 flex flex-col justify-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#EAF4E3] text-[#4F8F3A] mx-auto flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#4F8F3A] tracking-wider uppercase">
                  ORDER PLACED SUCCESSFULLY
                </span>
                <h4 className="text-2xl font-bold text-[#183D2B] font-bengali mt-1">
                  অর্ডার নম্বর: #{submittedOrder.orderId}
                </h4>
                <p className="text-xs text-[#17251C]/70 font-bengali mt-2">
                  ধন্যবাদ {submittedOrder.customerName}! আপনার অর্ডারটি গৃহীত হয়েছে। আমাদের শেফ সতেজভাবে প্রস্তুত করে ৩০-৪৫ মিনিটের মধ্যে আপনার ঠিকানায় পাঠাবেন।
                </p>
              </div>

              {/* Order Receipt Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#EAF4E3] text-left text-xs space-y-3 font-bengali">
                <div className="flex justify-between font-bold text-sm text-[#183D2B] pb-2 border-b border-[#EAF4E3]">
                  <span>{submittedOrder.banglaName} ({submittedOrder.saladName})</span>
                  <span>× {submittedOrder.quantity}</span>
                </div>
                <div className="text-[#17251C]/75">
                  <span className="font-semibold">ড্রেসিং:</span> {submittedOrder.dressing}
                </div>
                {submittedOrder.toppings.length > 0 && (
                  <div className="text-[#17251C]/75">
                    <span className="font-semibold">টপিং:</span> {submittedOrder.toppings.join(', ')}
                  </div>
                )}
                <div className="text-[#17251C]/75">
                  <span className="font-semibold">ঠিকানা:</span> {submittedOrder.deliveryAddress}
                </div>
                <div className="pt-2 border-t border-[#EAF4E3] flex justify-between font-extrabold text-base text-[#4F8F3A]">
                  <span>মোট বিল (ক্যাশ অন ডেলিভারি):</span>
                  <span>₹{submittedOrder.total}</span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full py-3 bg-[#4F8F3A] hover:bg-[#183D2B] text-white font-bold rounded-xl text-sm transition-colors"
              >
                ঠিক আছে (Close)
              </button>
            </div>
          ) : (
            /* Customization & Checkout Form */
            <form onSubmit={handleSubmit} className="p-6 space-y-6 flex-1">
              {/* Salad item summary */}
              <div className="flex gap-4 p-4 rounded-2xl bg-white border border-[#EAF4E3] items-center">
                <div className="w-20 h-20 rounded-[20px] overflow-hidden shrink-0 shadow-sm border border-[#EAF4E3] bg-[#EAF4E3]/20">
                  <img
                    src={salad.image}
                    alt={salad.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-base text-[#183D2B]">{salad.name}</h4>
                  <p className="text-xs text-[#4F8F3A] font-semibold font-bengali">
                    {salad.banglaName}
                  </p>
                  <p className="text-xs text-[#17251C]/65 font-bengali truncate mt-1">
                    {salad.ingredients}
                  </p>
                  <div className="mt-1 font-bold text-[#183D2B]">₹{salad.price}</div>
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#EAF4E3]">
                <span className="text-xs font-bold text-[#183D2B] font-bengali">
                  পরিমাণ (Quantity)
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg bg-[#EAF4E3] text-[#183D2B] flex items-center justify-center font-bold hover:bg-[#4F8F3A] hover:text-white transition-colors"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-bold text-sm text-[#183D2B] w-4 text-center">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg bg-[#EAF4E3] text-[#183D2B] flex items-center justify-center font-bold hover:bg-[#4F8F3A] hover:text-white transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Dressing Choice */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#183D2B] uppercase tracking-wider font-sans">
                  Select Dressing (ড্রেসিং নির্বাচন করুন)
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {dressings.map((dressing) => (
                    <label
                      key={dressing.id}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                        selectedDressing === dressing.name
                          ? 'border-[#4F8F3A] bg-[#EAF4E3]/50 text-[#183D2B] font-bold'
                          : 'border-[#EAF4E3] bg-white text-[#17251C]/80 hover:border-[#4F8F3A]/40'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="dressing"
                          checked={selectedDressing === dressing.name}
                          onChange={() => setSelectedDressing(dressing.name)}
                          className="accent-[#4F8F3A]"
                        />
                        <span className="font-bengali">{dressing.name}</span>
                      </div>
                      {dressing.price > 0 && (
                        <span className="text-[11px] text-[#4F8F3A] font-bold">
                          +₹{dressing.price}
                        </span>
                      )}
                    </label>
                  ))}
                </div>
              </div>

              {/* Extra Toppings */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-[#183D2B] uppercase tracking-wider font-sans">
                  Add Extra Toppings (অতিরিক্ত টপিংস)
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {extraToppings.map((top) => {
                    const isSelected = selectedToppings.includes(top.name);
                    return (
                      <label
                        key={top.id}
                        className={`flex items-center justify-between p-3 rounded-xl border text-xs cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#4F8F3A] bg-[#EAF4E3]/50 text-[#183D2B] font-bold'
                            : 'border-[#EAF4E3] bg-white text-[#17251C]/80 hover:border-[#4F8F3A]/40'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleTopping(top.name)}
                            className="accent-[#4F8F3A] rounded"
                          />
                          <span className="font-bengali">{top.name}</span>
                        </div>
                        <span className="text-[11px] text-[#4F8F3A] font-bold">
                          +₹{top.price}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Delivery Details */}
              <div className="space-y-3 pt-3 border-t border-[#EAF4E3]">
                <h5 className="text-xs font-bold text-[#183D2B] uppercase tracking-wider">
                  Delivery Details (ডেলিভারির তথ্য)
                </h5>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="আপনার নাম (Your Name) *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAF4E3] text-xs focus:outline-none focus:border-[#4F8F3A]"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="মোবাইল নম্বর (Phone Number) *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAF4E3] text-xs focus:outline-none focus:border-[#4F8F3A]"
                  />
                </div>

                <div>
                  <textarea
                    rows={2}
                    required
                    placeholder="ডেলিভারি ঠিকানা ও ফ্ল্যাট/রোড নম্বর *"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#EAF4E3] text-xs focus:outline-none focus:border-[#4F8F3A] resize-none font-bengali"
                  />
                </div>

                <div className="text-[11px] text-[#17251C]/60 flex items-center justify-between">
                  <span>পেমেন্ট মোড: <strong>ক্যাশ অন ডেলিভারি (Cash on Delivery)</strong></span>
                  <span className="text-[#4F8F3A] font-bold">ফ্রি স্পেশাল ড্রেসিং প্যাক</span>
                </div>
              </div>

              {/* Submit CTA Bar */}
              <div className="pt-4 border-t border-[#EAF4E3] bg-[#FFFDF5] sticky bottom-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-full bg-[#4F8F3A] hover:bg-[#183D2B] text-white font-bold text-sm tracking-wider flex items-center justify-between transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-75 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isSubmitting ? 'প্রসেসিং হচ্ছে...' : 'অর্ডার কনফার্ম করুন'}</span>
                  </span>
                  <span className="tabular-nums font-extrabold text-base">
                    ₹{grandTotal}
                  </span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
