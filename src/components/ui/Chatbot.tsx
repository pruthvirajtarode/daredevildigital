import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', type: 'bot', text: 'Hello! I am Daredevil AI. How can I help you grow your brand today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      setIsTyping(false);
      
      const lowerInput = inputValue.toLowerCase();
      // Default to a highly positive response
      let response = "That's fantastic! Our digital experts would love to discuss this with you and see how we can help. Would you like to schedule a quick call with the team?";
      
      // Removed strict word boundaries \b to catch "hii", "hiii", etc.
      if (lowerInput.match(/(hi|hello|hey|greetings)/)) {
        response = "Hello there! 👋 How can we help your business grow today?";
      } else if (lowerInput.match(/(services|what do you do|offer|help)/)) {
        response = "We offer a range of digital services including Social Media Management, Analytics & Reporting, Content Creation, and Website Development. Which area are you interested in?";
      } else if (lowerInput.match(/(price|cost|pricing|fee)/)) {
        response = "Our pricing is tailored to your specific business needs and goals. We'd love to jump on a quick call to understand your requirements and provide a custom proposal.";
      } else if (lowerInput.match(/(contact|talk|call|meet|schedule)/)) {
        response = "You can easily reach us via the 'Start a Conversation' button at the top, or directly email us at info@daredevildigital.com. Let's make things happen!";
      } else if (lowerInput.match(/(portfolio|work|case studies|examples)/)) {
        response = "We have a strong portfolio across Web Design, Social Media, and Branding! Check out our 'Work' page to see how we've helped other ambitious brands.";
      } else if (lowerInput.match(/(thanks|thank you|awesome|great)/)) {
        response = "You're very welcome! Let me know if you need anything else. 🚀";
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), type: 'bot', text: response }]);
    }, 1200);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-brand-purewhite shadow-xl transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:ring-offset-2 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 duration-300'}`}
        aria-label="Open chat"
      >
        <MessageSquare className="h-6 w-6" />
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-brand-yellow animate-ping" />
        <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-brand-yellow" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 overflow-hidden rounded-2xl bg-brand-purewhite shadow-2xl border border-brand-charcoal/10 flex flex-col h-[500px] max-h-[80vh]"
          >
            {/* Header */}
            <div className="bg-brand-navy p-4 text-brand-purewhite flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-brand-yellow/20 p-2 rounded-full">
                  <Sparkles className="h-5 w-5 text-brand-yellow" />
                </div>
                <div>
                  <h3 className="font-display font-bold">Daredevil AI</h3>
                  <p className="text-xs text-brand-offwhite/70">Always here to help</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-brand-offwhite hover:text-brand-yellow transition-colors p-1"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 bg-brand-offwhite/50 flex flex-col gap-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-brand-burgundy' : 'bg-brand-navy'}`}>
                    {msg.type === 'user' ? <User className="h-4 w-4 text-brand-purewhite" /> : <Bot className="h-4 w-4 text-brand-yellow" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-brand-burgundy text-brand-purewhite rounded-tr-none' : 'bg-brand-purewhite text-brand-charcoal border border-brand-charcoal/5 shadow-sm rounded-tl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-3 max-w-[85%]">
                  <div className="shrink-0 h-8 w-8 rounded-full bg-brand-navy flex items-center justify-center">
                    <Bot className="h-4 w-4 text-brand-yellow" />
                  </div>
                  <div className="p-4 rounded-2xl bg-brand-purewhite border border-brand-charcoal/5 shadow-sm rounded-tl-none flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-brand-charcoal/20 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="h-2 w-2 rounded-full bg-brand-charcoal/20 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="h-2 w-2 rounded-full bg-brand-charcoal/20 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-brand-purewhite border-t border-brand-charcoal/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask a question..."
                  className="flex-1 bg-brand-offwhite rounded-full px-4 py-2 text-sm text-brand-charcoal focus:outline-none focus:ring-2 focus:ring-brand-yellow/50"
                />
                <button 
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-brand-navy text-brand-purewhite p-2.5 rounded-full hover:bg-brand-yellow hover:text-brand-navy transition-colors disabled:opacity-50 disabled:hover:bg-brand-navy disabled:hover:text-brand-purewhite"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
